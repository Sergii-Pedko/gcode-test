const repoListElem = document.querySelector('.repo-list');

export const renderReposData = repoList => {
  const repoListElems = repoList.map(({ name }) => {
    const repoListItemElem = document.createElement('li');
    repoListItemElem.classList.add('repo-list__item');
    repoListItemElem.textContent = name;

    return repoListItemElem;
  });

  repoListElem.append(...repoListElems);
};
