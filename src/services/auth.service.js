const getUser = () => {
  const userStr = sessionStorage.getItem('userData');
  if (userStr) return JSON.parse(userStr);
  else return null;
}

const removeUserSession = () => {
  sessionStorage.removeItem('userData')
}

const setUserSession = (user) => {
  sessionStorage.setItem('userData', JSON.stringify(user))
}

export {getUser, setUserSession, removeUserSession};