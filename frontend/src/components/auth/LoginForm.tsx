import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: connect to backend
    console.log({ email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 mt-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8 border">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">
          Login
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email */}
          <div>
            <label className="block text-md font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-md font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your password"
            />
            <Link to="/" className="text-sm text-gray-600 font-medium hover:underline duration-300 transition ease-in-out underline-offset-2" >Forgot your password?</Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition text-xl"
          >
            SIGN IN
          </button>
        </form>

        {/* Signup link */}
        <p className="text-sm text-center mt-4">
          New here?{" "}
          <Link
            to="/signup"
            className="text-green-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;