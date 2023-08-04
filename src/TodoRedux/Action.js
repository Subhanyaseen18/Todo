import {ADD_ITEM, UPDATE_ITEM, DEL_ITEM} from './ActionType';

export function additem(Data) {
  return {
    type: ADD_ITEM,
    payload: Data,
  };
}

export function updateitem(text) {
  return {
    type: UPDATE_ITEM,
    payload: text,
  };
}
export function delitem(e) {
  return {
    type: DEL_ITEM,
    delete: e,
  };
}
