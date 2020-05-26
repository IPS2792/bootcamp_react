const URL_HOST = 'https://localhost:8080/'

function LogIn(data, callback) {
  const URL_PATH = `${URL_HOST}auth/login`
  fetch(URL_PATH, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json'
    },
    mode: 'cors'
  })
  .then(response => response.json())
  .then(data => {
    callback(data)
  })
}

export { LogIn }