import axios from "axios";
import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";


const Contact = () => {
     const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
        {
          name,
          email,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.message);
    }
  };
  return (
    <section className="contact">
      <form onSubmit={sendMail}>
        <h1>CONTACT US</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Message</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
  type="submit"
  disabled={loading}
  style={{
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "12px",
    backgroundColor: loading ? "#6c757d" : "#0077b6", // deep sky blue
    color: "#ffffff",
    padding: "1rem 2rem",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: loading ? "not-allowed" : "pointer",
    boxShadow: "0 8px 20px rgba(0, 119, 182, 0.3)", // blue glow
    transition: "all 0.3s ease",
  }}
>
  {loading ? (
    <>
      <ClipLoader size={20} color="#fff" />
      Sending...
    </>
  ) : (
    <>
      💪 Send Message
    </>
  )}
</button>

      </form>
    </section>
  )
}

export default Contact
