import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import FormInput from "../component/FormInput";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [xato, setXato] = useState("");
  const [xatolik, setXatolik] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setXato("");
    setXatolik("");

    const formData = new FormData(e.target);
    const userLogin = formData.get("login");
    const password = formData.get("password");

    let isValid = true;

    if (userLogin.trim() === "") {
      setXato("Loginni to'ldiring!");
      isValid = false;
    }

    if (password.trim() === "") {
      setXatolik("Parolni to'ldiring!");
      isValid = false;
    }

    if (!isValid) return;

    // login ma'lumotlarini Redux ga yuborish
    dispatch(login({ login: userLogin, password }));

    // hammasi to'g'ri bo'lsa home sahifaga o'tkazish
    navigate("/home");
  };

  return (
    <div className="flex h-screen">
      <div className="hidden registration lg:flex h-full w-1/2"></div>
      <div className="registration lg:bg-none grow flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white/60 w-full max-w-md rounded-md p-8 flex flex-col gap-4 items-center lg:shadow-lg"
        >
          <h1 className="text-3xl font-semibold">Login</h1>

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
          {xatolik && <p className="text-red-500 text-sm">{xatolik}</p>}

          <div className="flex gap-4">
            <button
              type="submit"
              className="w-30 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Kirish
            </button>
            <Link
              to="/signup"
              className="w-30 bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
