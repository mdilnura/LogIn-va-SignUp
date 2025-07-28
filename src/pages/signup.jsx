import FormInput from "../component/FormInput";
import "../index.css";
import { login } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [err, setErr] = useState("");
  const [xato, setXato] = useState("");
  const [xatolik, setXatolik] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userlogin = formData.get("login");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    const repeatPassword = formData.get("repeatPassword");

    let errors = { display: "", login: "", pass: "", repeat: "" };

    if (displayName.trim() === "") {
      errors.display = "DisplayNameni to'ldiring!";
    }

    if (userlogin.trim() === "") {
      errors.login = "Loginni to'ldiring!";
    }

    if (password.trim() === "") {
      errors.pass = "Passwordni to'ldiring!";
    }

    if (password !== repeatPassword) {
      errors.repeat = "Parol va takroriy parol mos emas!";
    }

    setErr(errors.display);
    setXato(errors.login);
    setXatolik(errors.pass);
    setError(errors.repeat);

    if (errors.display || errors.login || errors.pass || errors.repeat) {
      return;
    }
    if (
      userlogin &&
      password &&
      repeatPassword &&
      password === repeatPassword
    ) {
      dispatch(login({ login: userlogin, password }));
      navigate("/");
    }
  };
  return (
    <div className="flex h-screen">
      <div className="hidden registration lg:flex h-full w-1/2"></div>
      <div className="registration lg:bg-none grow flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white/60 w-full max-w-md rounded-md p-8 flex flex-col gap-4 items-center lg:shadow-lg"
        >
          <h1 className="text-3xl font-semibold">Signup</h1>
          <FormInput
            label="DisplayName:"
            type="text"
            placeholder="Name:"
            name="displayName"
          />
          {err && <p className="text-red-500 text-sm">{err}</p>}
          <FormInput
            label="Login:"
            type="text"
            placeholder="Login:"
            name="login"
          />
          {xato && <p className="text-red-500 text-sm">{xato}</p>}

          <FormInput
            label="Password:"
            type="password"
            placeholder="Password:"
            name="password"
          />
          {xatolik && <p className="text-red-500 text-sm ">{xatolik}</p>}
          <FormInput
            label="Repeat password:"
            type="password"
            placeholder="Repeat password:"
            name="repeatPassword"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-30 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Kirish
          </button>
        </form>
      </div>
    </div>
  );
}
