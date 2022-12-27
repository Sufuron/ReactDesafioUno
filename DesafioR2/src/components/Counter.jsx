import { useState } from "react";

const Counter = () => {
  console.log(useState(100));

  const userCredential = {
    email: "test@test.com",
    password: "252525",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [welcome, setWelcome] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setWelcome("");

    if (!email.trim() || !password.trim()) {
      return setError("Llena todos los campos!");
    }

    if (
      userCredential.email === email &&
      userCredential.password === password
    ) {
      return setWelcome("Bienvenido!");
    } else {
      return setError("Credenciales incorrectas!");
    }
  };

  return (
    <>
      <div className="text-center p-5 m-5 rounded bgdegre text-white animate__animated animate__bounceIn">
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="mb-1 rounded"
            type="text"
            placeholder="Ingresar Username"
            name="email"
          />

          <br />

          <input
            onChange={(e) => setPassword(e.target.value)}
            className="rounded"
            type="password"
            placeholder="Ingresar Contraseña"
            name="password"
          />

          <br />

          {password === "252525" ? (
            <button
              className="btn btn-outline-secondary mt-3 text-decoration-none text-white"
              type="submit"
              disable="true"
            >
              Submit
            </button>
          ) : null}
        </form>

        <div className="text-danger rounded fs-4">{error ? error : null}</div>

        <div className="fs-4 fw-bold text-success">
          {welcome ? welcome : null}
        </div>
      </div>
    </>
  );
};

export default Counter;
