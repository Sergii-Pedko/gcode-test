const baseUrl = 'https://api.github.com/users';

export const fetchUserData = userName => {
  return fetch(`${baseUrl}/${userName}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};

export const fetchReposData = reposUrl => {
  return fetch(reposUrl).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to load data');
  });
};
