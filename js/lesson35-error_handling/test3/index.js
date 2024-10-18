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

const onUserSearch = () => {
  const userName = inputElem.value;
  clearData();
  // renderUserData(defaultUser);
  showSpinner();
  fetchUserData(userName)
    .then(data => {
      renderUserData(data);
      return data.repos_url;
    })
    .then(url => fetchReposData(url))
    .then(reposList => renderReposData(reposList))
    .catch(err => alert(err.message))
    .finally(() => hideSpinner());
};

renderUserData(defaultUser);
const showBtnElem = document.querySelector('.name-form__btn');
showBtnElem.addEventListener('click', onUserSearch);
