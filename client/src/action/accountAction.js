import axios from "axios";

//Login
export const handleLogin = (userData) => {
  axios
    .post("http://127.0.0.1:8000/login", userData)
    .then((result) => {
      console.log(result);
      if (result.data.success == true) {
        alert("Login successful!");
        return true;
      } else {
        alert("Incorrect password! Please try again.");
      }
    })
    .catch((err) => console.log(err));
  return false;
};

//Register
export const handleRegister = async (userData) => {
  try {
    const result = await axios.post("http://127.0.0.1:8000/register", userData);
    console.log(result);
    if (result.data.success == true) {
      alert("Register successful!");
      return true;
    } else {
      alert("Username already exists! Please try again.");
    }
  } catch (err) {
    console.log(err);
  }
  return false;
};

// send message
export const sendMessage = async (msg) => {};
