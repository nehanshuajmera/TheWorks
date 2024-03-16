import { useState } from "react";
import "./form.styles.css";

export const Form = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="form">
      <div className="form-background">
        <div className="form-alignment">
          <div className="form-text">
            <h1>Stay Updated on all news on Hemp</h1>
            <h3>Join our mailing list and get 10% off on your next order</h3>
          </div>
          <div className="form-input" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
            />
            <button type="submit">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};
