const baseUrl = 'https://api.github.com/users';

export const fetchUserData = async userName => {
  const response = await fetch(`${baseUrl}/${userName}`)
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};

export const fetchReposData = async reposUrl => {
  const response = await fetch(reposUrl)
  if (response.ok) {
    return await response.json();
  }
  throw new Error('Failed to load data');
};
