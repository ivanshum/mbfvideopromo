const SendFunc = async (
  phone,
  id,
  data = {},
  onSucess = () => {},
  onFail = () => {}
) => {
  let formData = new FormData()
  formData.append(`phone`, phone.replace(/[^\d]/g, ""))
  formData.append(`id`, id)
  formData.append(`isquiz`, !!(Object.keys(data).length !== 0))
  formData.append(`addData`, Object.entries(data))
  return fetch("/form.php", {
    method: "POST",
    body: formData,
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      return Promise.reject({
        status: `error`,
        msg: `Упс! Что-то пошло не так. Попробуйте обновить страницу и попробовать ещё раз. Или воспользуйтесь кнопкой вверху и позвоните нам!`,
      })
    })
    .then(response => onSucess(response))
    .catch(obj => onFail(obj))
}
export default SendFunc
