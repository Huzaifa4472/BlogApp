const home = (req, res) => {
  try {
    res.status(200).json("Hello");
  } catch (error) {}
};
const login = (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};
const register = (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { home, register, login };
