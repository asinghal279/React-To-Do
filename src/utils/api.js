const myStorage = window.localStorage;

export function getAllItems () {
  return myStorage.getItem("items") || [];
}

export function setItems (items) {
  myStorage.setItem("items", JSON.stringify(items));
}