const NAVIGATION = 'NAVIGATION'
const initialState = { activeItem: 'collection' }

export const actionCreators = {
  onMenuItemClick: (e, name) => dispatch({type: NAVIGATION, e, name}) 
}

export const reducer = (state, action) => {
  state = state || initialState
  switch (action.type) {
    case NAVIGATION:
      return { ...state, activeItem: action.name }
    default:
      return state
  }
}

