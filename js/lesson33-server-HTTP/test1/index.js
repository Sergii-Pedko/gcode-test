const avatarElem = document.querySelector('.user__avatar')
const userNameElem = document.querySelector('.user__name')
const locationElem = document.querySelector('.user__location')

const formInputElem = document.querySelector('.name-form__input')
const formBtnElem = document.querySelector('.name-form__btn')

const url = 'https://api.github.com/users'

const fetchUserData = url => {
  const userName = formInputElem.value;
  return fetch(`${url}/${userName}`)
    .then(response => response.json())
}

const renderData = ({ avatar_url, name, location }) => {
  avatarElem.src = avatar_url;
  userNameElem.textContent = name;
  locationElem.textContent = location
    ? `from ${location}`
    : '';
}

const onBtnClick = () => {
  fetchUserData(url)
    .then(result => renderData(result))
}

formBtnElem.addEventListener('click', onBtnClick)