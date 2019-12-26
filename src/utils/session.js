const ls = localStorage;
const SESSION_KEY = 'session';
const userData = {
    username: 'claudio',
    email: 'claudio.dcv@gmail.com',
};

export const login = () => {
    console.log("logeado");
    ls.setItem(SESSION_KEY, JSON.stringify(userData));
};

export const logout = () => {
    console.log("deslogeado");
    ls.removeItem(SESSION_KEY);
}

export const isLogin = () => {
    console.log("es logeado");
    return !!ls.getItem(SESSION_KEY);
};