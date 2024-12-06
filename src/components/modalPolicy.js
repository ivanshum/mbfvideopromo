import * as React from "react"

const ModalPolicy = ({ handleSetIsModalOpen }) => {
  return (
    <div
      className={`fixed bg-white bg-opacity-90 top-0 w-full h-screen z-50 inset-0 p-12 overflow-auto overscroll-contain`}
      onClick={() => handleSetIsModalOpen(false)}
    >
      <h1>Политика конфиденциальности.</h1>
      <p>
        Настоящий документ &laquo;Политика конфиденциальности&raquo; (далее по
        тексту &ndash; &laquo;Политика&raquo;) представляет собой правила
        использования Касторским Ильёй Вячеславовичем (далее &ndash;
        &laquo;мы&raquo; и/или &laquo;Администрация&raquo;) данных
        интернет-пользователей (далее &laquo;вы&raquo; и/или
        &laquo;Пользователь&raquo;), собираемых с использованием сайта
        https://mustbefamily.com (далее &ndash; &laquo;Сайт&raquo;).
      </p>
      <h2>1. Обрабатываемые данные</h2>
      <p>
        1.1. Мы не осуществляем сбор ваших персональных данных с использованием
        Сайта.
      </p>
      <p>
        1.2. Все данные, собираемые на Сайте, предоставляются и принимаются в
        обезличенной форме (далее &ndash; &laquo;Обезличенные данные&raquo;).
      </p>
      <p>
        1.3. Обезличенные данные включают следующие сведения, которые не
        позволяют вас идентифицировать:
      </p>
      <p>
        1.3.1. Информацию, которую вы предоставляете о себе самостоятельно с
        использованием онлайн-форм и программных модулей Сайта, включая имя или
        номер телефона и/или адрес электронной почты.
      </p>
      <p>
        1.3.2. Данные, которые передаются в обезличенном виде в автоматическом
        режиме в зависимости от настроек используемого вами программного
        обеспечения.
      </p>
      <p>
        1.4. Администрация вправе устанавливать требования к составу
        Обезличенных данных Пользователя, которые собираются использованием
        Сайта.
      </p>
      <p>
        1.5. Если определенная информация не помечена как обязательная, ее
        предоставление или раскрытие осуществляется Пользователем на свое
        усмотрение и по собственной инициативе.
      </p>
      <p>
        1.6. Администрация не осуществляет проверку достоверности
        предоставляемых данных и наличия у Пользователя необходимого согласия на
        их обработку в соответствии с настоящей Политикой, полагая, что
        Пользователь действует добросовестно, осмотрительно и прилагает все
        необходимые усилия к поддержанию такой информации в актуальном состоянии
        и получению всех необходимых согласий на ее использование.
      </p>
      <p>
        1.7. Вы осознаете и принимаете возможность использования на Сайте
        программного обеспечения третьих лиц, в результате чего такие лица могут
        получать и передавать указанные в п.1.3 данные в обезличенном виде.
      </p>
      <p>
        1.8. Состав и условия сбора обезличенных данных с использованием
        программного обеспечения третьих лиц определяются непосредственно их
        правообладателями и могут включать:
      </p>
      <ul>
        <li>данные браузера (тип, версия, cookie);</li>
        <li>данные устройства и место его положения;</li>
        <li>данные операционной системы (тип, версия, разрешение экрана);</li>
        <li>данные запроса (время, источник перехода, IP-адрес).</li>
      </ul>
      <p>
        1.9. Администрация не несет ответственность за порядок использования
        Обезличенных данных Пользователя третьими лицами.
      </p>
      <h2>2. Цели обработки данных</h2>
      <p>2.1. Администрация использует данные в следующих целях:</p>
      <p>2.1.1. Обработка поступающих запросов и связи с Пользователем;</p>
      <p>
        2.1.2. Информационное обслуживание, включая рассылку
        рекламно-информационных материалов;
      </p>
      <p>
        2.1.3. Проведение маркетинговых, статистических и иных исследований;
      </p>
      <p>2.1.4. Таргетирование рекламных материалов на Сайте.</p>
      <h2>3. Требования к защите данных</h2>
      <p>
        3.1. Администрация осуществляет хранение данных и обеспечивает их охрану
        от несанкционированного доступа и распространения в соответствии с
        внутренними правилами и регламентами.
      </p>
      <p>
        3.2. В отношении полученных данных сохраняется конфиденциальность, за
        исключением случаев, когда они сделаны Пользователем общедоступными, а
        также когда используемые на Сайте технологии и программное обеспечение
        третьих лиц либо настройки используемого Пользователем программного
        обеспечения предусматривают открытый обмен с данными лицами и/или иными
        участниками и пользователями сети Интернет.
      </p>
      <p>
        3.3. В целях повышения качества работы Администрация вправе хранить
        лог-файлы о действиях, совершенных Пользователем в рамках использования
        Сайта в течение 1 (Одного) года.
      </p>
      <h2>4. Передача данных</h2>
      <p>
        4.1. Администрация вправе передать данные третьим лицам в следующих
        случаях:
      </p>
      <ul>
        <li>
          Пользователь выразил свое согласие на такие действия, включая случаи
          применения Пользователем настроек используемого программного
          обеспечения, не ограничивающих предоставление определенной информации;
        </li>
        <li>
          Передача необходима в рамках использования Пользователем
          функциональных возможностей Сайта;
        </li>
        <li>Передача требуется в соответствии с целями обработки данных;</li>
        <li>
          В связи с передачей Сайта во владение, пользование или собственность
          такого третьего лица;
        </li>
        <li>
          По запросу суда или иного уполномоченного государственного органа в
          рамках установленной законодательством процедуры;
        </li>
        <li>
          Для защиты прав и законных интересов Администрации в связи с
          допущенными Пользователем нарушениями.
        </li>
      </ul>
      <h2>5. Изменение Политики конфиденциальности</h2>
      <p>
        5.1. Настоящая Политика может быть изменена или прекращена
        Администрацией в одностороннем порядке без предварительного уведомления
        Пользователя. Новая редакция Политики вступает в силу с момента ее
        размещения на Сайте, если иное не предусмотрено новой редакцией
        Политики.
      </p>
    </div>
  )
}
export default ModalPolicy
