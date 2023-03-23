import URL from "./constants/URL";
import {
  PHOTO_POST as PHOTO_POST_URL,
  TOKEN_POST as TOKEN_POST_URL,
  TOKEN_VALIDATE_POST,
  USER_GET as USER_GET_URL,
  USER_POST as USER_POST_URL,
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

export function TOKEN_VALIDATE_FETCH(token) {
  return {
    url: URL + TOKEN_VALIDATE_POST,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
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

export function USER_POST_FETCH(body) {
  return {
    url: URL + USER_POST_URL,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
  }
}

export function PHOTO_POST_FETCH(body, token) {
  return {
    url: URL + PHOTO_POST_URL,
    options: {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: body,
    }
  }
}
