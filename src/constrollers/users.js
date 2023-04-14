export const join = (req, res) => res.send("JOIN");
export const login = (req, res) => res.send("LOGIN");
export const editProfile = (req, res) => res.send("EDIT PROFILE");
export const watchUser = (req, res) => res.send(`WATCH USER ${req.params.id}`);
export const userHome = (req, res) => res.send("USER HOME");
