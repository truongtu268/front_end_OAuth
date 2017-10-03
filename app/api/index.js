const API_ROOT = '//127.0.0.1:9090';

export function verifyAccessToken(accessToken) {
  return fetch(`${API_ROOT}/private/info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON);
}


export function sendOauthCode2Server(codeOauth) {
  return fetch(`${API_ROOT}/user/auth/${codeOauth.provider}${codeOauth.query_string}`, {
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function checkClientOauthApi(clientIdentity) {
  return fetch(`${API_ROOT}/oauth/authorize/client`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clientIdentity),
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function checkUserOauthApi(userIdentity) {
  return fetch(`${API_ROOT}/oauth/authorize/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userIdentity),
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function getTokenApi(codeOauth) {
  return fetch(`${API_ROOT}/oauth/access_token`, {
    method: 'POST',
    body: new FormData(codeOauth),
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function loginGoogleApi() {
  return fetch(`${API_ROOT}/user/login/google`, {
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function loginGithubApi() {
  return fetch(`${API_ROOT}/user/login/github`, {
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function loginInstagramApi() {
  return fetch(`${API_ROOT}/user/login/instagram`, {
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function loginInternalApi() {
  return fetch(`${API_ROOT}/user/login/internal`, {
    method: 'GET',
  })
    .then(checkStatus)
    .then(parseJSON);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}
