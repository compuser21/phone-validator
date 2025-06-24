const API_KEY = '0346cab0a7004fb5aabb10ab63bf0111'
const BASE_URL = 'https://phonevalidation.abstractapi.com/v1/'

export const validatePhoneNumber = (phoneNumber) => {
  return new Promise((resolve, reject) => {
    if (!phoneNumber) {
      reject(new Error('Phone number is required'))
      return
    }

    const url = `${BASE_URL}?api_key=${API_KEY}&phone=${encodeURIComponent(phoneNumber)}`

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => resolve(data))
      .catch(error => reject(error))
  })
}
