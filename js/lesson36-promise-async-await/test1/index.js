export const fetchUser = async userId => {
  // put your code here
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (response.status === 404) {
      return null;
    }
    const userData = await response.json();
    return userData;
  } catch (err) {
    throw new Error('Failed to get user data');
  }
};

/* 
https://api.github.com/users/github
userId - это "login": "github" в возвращаемом Объекте

fetchUser('github')
  .then(data => console.log(data))
  .catch(err => console.log(err.message));
*/ 
