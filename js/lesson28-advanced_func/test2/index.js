const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

export const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);

  console.log(tree.nodes);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};

// console.log( markFavorites(tree, favorites) );