const outfitActions = {
  addOutfitAction: (outfit) => ({
    type: 'ADD_OUTFIT',
    userOutFits: outfit,
  }),
  removeOutFitAction: (outfit) => ({
    type: 'REMOVE_OUTFIT',
    userOutFits: outfit,
  }),
};

export default outfitActions;
