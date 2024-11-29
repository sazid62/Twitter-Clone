const signup = (req, res) => {
    res.json({ message: "signup" });
};
const login = (req, res) => {
    res.json({ message: "login" });
};
const logout = (req, res) => {
    res.json({ message: "logout" });
};
export { signup, login, logout };