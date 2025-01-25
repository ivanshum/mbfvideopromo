const SendFunc = async (
  token,
  phone,
  id,
  data = {},
  onSucess = () => {},
  onFail = () => {}
) => {
  const formData = new FormData()
  formData.append(`token`, token)
  formData.append(`phone`, phone.replace(/[^\d]/g, ""))
  formData.append(`id`, id)
  formData.append(`isquiz`, !!(Object.keys(data).length !== 0))
  formData.append(`addData`, Object.entries(data))
  const response = await fetch("/amo/index.php", {
    method: "POST",
    body: formData,
  })
  if (response.ok) {
    onSucess()
  } else {
    onFail()
  }
}

export const ValidateToken = async token => {
  const response = await fetch(
    `https://functions.yandexcloud.net/d4erl0125qobhlola595?token=${token}`,
    {
      method: "POST",
    }
  )
  if (response.ok) {
    return response.json()
  }
  return {
    status: `error`,
    msg: `Упс! Что-то пошло не так. Попробуйте обновить страницу и попробовать ещё раз. Или воспользуйтесь кнопкой внизу и позвоните нам!`,
  }
}

export default SendFunc
