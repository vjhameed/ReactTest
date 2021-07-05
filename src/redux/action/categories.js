import Types from "../constant/constants";

export const addCategories = (data) => ({
  type: Types.ADD_CATEGORIES,
  payload: data,
});
export const removeCategories = (data) => ({
  type: Types.REMOVE_CATEGORIES,
  payload: data,
});
export const editCategories = (data) => ({
  type: Types.EDIT_CATEGORIES,
  payload: data,
});
