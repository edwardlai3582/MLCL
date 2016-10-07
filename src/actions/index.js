export const addOwned = (figure) => ({
  type: 'ADD_OWNED',
  figure
})

export const removeOwned = (figureId) => ({
  type: 'REMOVE_OWNED',
  figureId
})

export const addWanted = (figure) => ({
  type: 'ADD_WANTED',
  figure
})

export const removeWanted = (figureId) => ({
  type: 'REMOVE_WANTED',
  figureId
})
