import URL from "./constants/URL";
import {
  TOKEN_POST as TOKEN_POST_URL,
  USER_GET as USER_GET_URL,
 } from "./constants/Endpoints";

export function TOKEN_POST_FETCH(body) {
  return {
    url: URL + TOKEN_POST_URL,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  }
}

export function USER_GET_FETCH(token) {
  return {
    url: URL + USER_GET_URL,
    options: {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  }
}
