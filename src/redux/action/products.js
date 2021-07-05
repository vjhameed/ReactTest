import Types from "../constant/constants";

export const addProduct = (data) => ({
  type: Types.ADD_PRODUCTS,
  payload: data,
});
export const removeProduct = (data) => ({
  type: Types.REMOVE_PRODUCTS,
  payload: data,
});
export const editProduct = (data) => ({
  type: Types.EDIT_PRODUCTS,
  payload: data,
});
