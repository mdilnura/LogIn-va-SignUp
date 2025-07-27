import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../images/gerb.png";
import { useRef } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const loginRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginValue = loginRef.current.value;
    const passwordValue = passwordRef.current.value;
    dispatch(login({ login: loginValue, password: passwordValue }));
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="py-6 px-4 rounded-lg gap-4 flex flex-col items-center"
        style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}
      >
        <img className="w-40 h-40 " src={Logo} alt="" />
        <h1 className=" text-2xl">Login</h1>

        <input
          className=" border w-100 border-green-600 px-2 py-1 rounded-md hover:bg-blue-100 focus:outline-none"
          type="text"
          placeholder="login"
          ref={loginRef}
        />

        <input
          className="border w-100 border-green-600 px-2 py-1 rounded-md hover:bg-blue-100 focus:outline-none"
          type="password"
          placeholder="Parol"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="mx-auto border bg-blue-400 w-40 rounded p-2"
        >
          Kirish
        </button>
      </form>
    </div>
  );
}
