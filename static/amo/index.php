<?php
include_once __DIR__ . '/vendor/autoload.php';

use AmoCRM\Client\AmoCRMApiClient;
use AmoCRM\Client\LongLivedAccessToken;
use AmoCRM\Collections\CustomFieldsValuesCollection;
use AmoCRM\Collections\ContactsCollection;
use AmoCRM\Collections\Leads\Unsorted\FormsUnsortedCollection;
use AmoCRM\Models\Unsorted\FormsMetadata;
use AmoCRM\Models\Unsorted\FormUnsortedModel;
use AmoCRM\Models\LeadModel;
use AmoCRM\Models\ContactModel;
use AmoCRM\Models\CustomFieldsValues\MultitextCustomFieldValuesModel;
use AmoCRM\Models\CustomFieldsValues\ValueCollections\MultitextCustomFieldValueCollection;
use AmoCRM\Models\CustomFieldsValues\ValueModels\MultitextCustomFieldValueModel;
use AmoCRM\Models\CustomFieldsValues\TextCustomFieldValuesModel;
use AmoCRM\Models\CustomFieldsValues\ValueCollections\TextCustomFieldValueCollection;
use AmoCRM\Models\CustomFieldsValues\ValueModels\TextCustomFieldValueModel;
use AmoCRM\Models\CustomFieldsValues\TextareaCustomFieldValuesModel;
use AmoCRM\Models\CustomFieldsValues\ValueCollections\TextareaCustomFieldValueCollection;
use AmoCRM\Models\CustomFieldsValues\ValueModels\TextareaCustomFieldValueModel;

use AmoCRM\Exceptions\AmoCRMApiErrorResponseException;
use AmoCRM\Exceptions\AmoCRMApiException;

function printError(AmoCRMApiException $e): void
{
    $errorTitle = $e->getTitle();
    $code = $e->getCode();
    $debugInfo = var_export($e->getLastRequestInfo(), true);

    $validationErrors = null;
    if ($e instanceof AmoCRMApiErrorResponseException) {
        $validationErrors = var_export($e->getValidationErrors(), true);
    }

    $error = <<<EOF
Error: $errorTitle
Code: $code
Debug: $debugInfo
EOF;

    if ($validationErrors !== null) {
        $error .= PHP_EOL . 'Validation-Errors: ' . $validationErrors . PHP_EOL;
    }

    echo '<pre>' . $error . '</pre>';
}

function ParseData($data): object
{
    $objectData = new stdClass();
    $objectData->phone = $data["phone"];
    $objectData->id = $data["id"];
    if (isset($data['addData'])) {
        $dataarrayorig = explode(',', $data['addData']);
    } else {
        $dataarrayorig = array();
    }
    if (isset($data['isquiz']) && ($data['isquiz'] === "true")) {
        $objectData->isquiz = true;
        $textarray = array();
        $dataarray = array();
        $objectData->title = "Квиз с сайта events.mustbefamily.com";
        $chunks = array_chunk($dataarrayorig, 2); //chunk array into 2-2 combination
        foreach ($chunks as $chunk) { //iterate over array
            $dataarray[trim($chunk[0])] = trim($chunk[1]); //make key value pair
        }
        foreach ($dataarray as $key => $value) {
            if (strpos($key, "question") !== false) {
                $index = "answer" . substr($key, 8, 1);
                $textarray[$value] = $dataarray[$index];
            }
        }
        $objectData->textarray = $textarray;
    } else {
        $objectData->isquiz = false;
        $objectData->title = "Обращение на events.mustbefamily.com";
    }
    return $objectData;
}
//Пройдем валидацию

$apiClient = new AmoCRMApiClient();
$longLivedAccessToken = new LongLivedAccessToken(getenv('AMOKEY'));
$apiClient->setAccessToken($longLivedAccessToken);
$apiClient->setAccountBaseDomain('ilyakastorsky.amocrm.ru');

//Обработаем данные

//Добавим в неразобранное форму
$unsortedService = $apiClient->unsorted();
$formsUnsortedCollection = new FormsUnsortedCollection();
$formUnsorted = new FormUnsortedModel();
$formMetadata = new FormsMetadata();
$formMetadata
    ->setFormId('formid')
    ->setFormName('Обратная связь')
    ->setFormPage('https://event.mustbefamily.com')
    ->setFormSentAt(time());

$unsortedLead = new LeadModel();
//Создадим коллекцию полей сущности
$leadCustomFieldsValues = new CustomFieldsValuesCollection();
//Создадим модель значений поля типа текст
$FormFieldModel = new TextCustomFieldValuesModel();
//Укажем ID поля
$FormFieldModel->setFieldId(1010437);
//Добавим значения
$FormFieldModel->setValues(
    (new TextCustomFieldValueCollection())
        ->add((new TextCustomFieldValueModel())->setValue('Должно попасть в поле форма'))
);
//Добавим значение в коллекцию полей сущности
$leadCustomFieldsValues->add($FormFieldModel);
//Создадим модель значений поля типа область текста
$QuizDataFieldModel = new TextareaCustomFieldValuesModel();
//Укажем ID поля
$QuizDataFieldModel->setFieldId(1017163);
//Добавим значения
$QuizDataFieldModel->setValues(
    (new TextareaCustomFieldValueCollection())
        ->add((new TextareaCustomFieldValueModel())->setValue('Должно попасть в поле Данные квиза'))
);
//Добавим значение в коллекцию полей сущности
$leadCustomFieldsValues->add($QuizDataFieldModel);
//Установим в сущности эти поля
$unsortedLead->setCustomFieldsValues($leadCustomFieldsValues);
$unsortedLead->setName('Обращение с сайта');


$unsortedContactsCollection = new ContactsCollection();
$unsortedContact = new ContactModel();
$unsortedContact->setName('Контакт');
$contactCustomFields = new CustomFieldsValuesCollection();
$phoneFieldValueModel = new MultitextCustomFieldValuesModel();
$phoneFieldValueModel->setFieldCode('PHONE');
$phoneFieldValueModel->setValues(
    (new MultitextCustomFieldValueCollection())
        ->add((new MultitextCustomFieldValueModel())->setValue('+79996663300'))
);
$unsortedContact->setCustomFieldsValues($contactCustomFields->add($phoneFieldValueModel));
$unsortedContactsCollection->add($unsortedContact);

$formUnsorted
    ->setSourceName('Вебсайт ивенты')
    ->setSourceUid('eventswebsite')
    ->setCreatedAt(time())
    ->setMetadata($formMetadata)
    ->setLead($unsortedLead)
    ->setPipelineId(9079510)

    ->setContacts($unsortedContactsCollection);

$formsUnsortedCollection->add($formUnsorted);

try {
    $formsUnsortedCollection = $unsortedService->add($formsUnsortedCollection);
} catch (AmoCRMApiException $e) {
    printError($e);
    die;
}
echo "GG";
