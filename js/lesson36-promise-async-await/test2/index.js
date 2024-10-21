import { renderUserData } from './src/scripts/renderUserData.js';
import { fetchReposData, fetchUserData } from './src/scripts/usersGateway.js';
import { renderReposData } from './src/scripts/renderRepos.js';
import { hideSpinner, showSpinner } from './src/scripts/spinner.js';
import { clearData } from './src/scripts/clearData.js';

const inputElem = document.querySelector('.name-form__input');

const defaultUser = {
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  name: '',
  location: '',
};

const onUserSearch = async () => {
  try {
    const userName = inputElem.value;
    clearData();
    showSpinner();
    const userData = await fetchUserData(userName)
    renderUserData(userData)
    const reposList = await fetchReposData(userData.repos_url)
    renderReposData(reposList)
  } catch (err) {
    alert(err.message)
  } finally {
    hideSpinner()
  }
};

renderUserData(defaultUser);
const showBtnElem = document.querySelector('.name-form__btn');
showBtnElem.addEventListener('click', onUserSearch);
