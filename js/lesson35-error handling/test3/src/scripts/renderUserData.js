const userNameElem = document.querySelector('.user__name');
const locationElem = document.querySelector('.user__location');
const avatarElem = document.querySelector('.user__avatar');

export const renderUserData = ({ avatar_url, name, location }) => {
  avatarElem.src = avatar_url;
  userNameElem.textContent = name;
  locationElem.textContent = location ? `from ${location}` : '';
};
