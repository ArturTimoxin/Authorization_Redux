const API = (method, url, body) => {
  const hash = localStorage.getItem("user_hash");

  let options = {
    method: method,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
      authorization: hash,
    },
    body: JSON.stringify(body),
  };

  return fetch(`http://std.powercode.pro:5000/api/v1/${url}`, options);
};
export default API;
