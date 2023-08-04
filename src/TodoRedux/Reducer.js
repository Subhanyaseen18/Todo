import {ADD_ITEM, UPDATE_ITEM, DEL_ITEM} from './ActionType';

const initialState = {
  Item: [],
   
};

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {...state, Item: state.Item.concat(action.payload)};
    case UPDATE_ITEM:
      const temp = state.Item;
      temp[action.payload.index].title = action.payload.title;
      temp[action.payload.index].discription = action.payload.discription;
      return {...state, data: temp};
    case DEL_ITEM:
      const arry = state.Item.filter(
        (item, index) => index !== action.delete.index,
      );

      return {...state, Item: arry};

    default:
      return state;
  }
};
