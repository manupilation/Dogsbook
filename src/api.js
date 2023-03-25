import URL from "./constants/URL";
import {
  COMMENT_POST as COMMENT_POST_URL,
  PASSWORD_LOST as PASSWORD_LOST_URL,
  PASSWORD_RESET_POST as PASSWORD_RESET_POST_URL,
  PHOTO_DELETE as PHOTO_DELETE_URL,
  PHOTO_GET as PHOTO_GET_URL,
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

export function PHOTOS_GET_FETCH({page, total, user}) {
  return {
    url: URL + PHOTO_POST_URL + `/?_page=${page}&_total=${total}$_user=${user}`,
    options: {
      method: "GET",
      cache: "no-store",
    }
  }
}

export function PHOTO_GET_FETCH(id) {
  return {
    url: URL + PHOTO_POST_URL + `/${id}`,
    options: {
      method: "GET",
      cache: "no-store",
    }
  }
}

export function COMMENT_POST_FETCH(id, body, token) {
  return {
    url: URL + COMMENT_POST_URL + `/${id}`,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    },
  }
}

export function PHOTO_DELETE_FETCH(id, token) {
  return {
    url: URL + PHOTO_DELETE_URL + `/${id}`,
    options: {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }
}

export function ONLY_PHOTO_GET_FETCH(id) {
  return {
    url: URL + PHOTO_GET_URL + `/${id}`,
  }
}

export function PASSWORD_LOST_FETCH(body) {
  return {
    url: URL + PASSWORD_LOST_URL,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}

export function PASSWORD_RESET(body) {
  return {
    url: URL + PASSWORD_RESET_POST_URL,
    options: {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  }
}
