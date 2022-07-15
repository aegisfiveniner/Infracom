export function storeItems(payload) {
  return {
    type: "items/storeItems",
    payload,
  };
}

export function storeItemById(payload) {
  return {
    type: "items/storeItemById",
    payload,
  };
}

export function fetchItems() {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("fetch error");
        }
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(storeItems(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function getItemById(id) {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("fetch error");
        }
        return resp.json();
      })
      .then((data) => {
        // console.log(data);
        dispatch(storeItemById(data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function postItem(payload) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function updateItem(payload, id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
}

export function deleteItem(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("fetch error");
      }
      return resp.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}
