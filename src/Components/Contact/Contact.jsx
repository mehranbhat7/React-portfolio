import React from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "718469a4-de4d-4c89-80ee-f7feeb95b9aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <h1 className="head">Get In Touch </h1>
      <div className="contact">
        <div className="contact-info">
          <h2>Message me 📩</h2>
          <p>
            Hello there! How can i assist you today? Whether you have questions
            about web development, need help with coding, or want advice on
            technology trends, feel free to share your thoughts. i’m here to
            provide information and guidance. Let’s make your interaction a
            positive and informative experience!
          </p>
          <ul>
            <li>📞 Contact @ +91-6005046534</li>
            <li>🏠 J&K Srinagar, India</li>
            <li>📥 Email: mehranbhat2001@gmail.com</li>
          </ul>
        </div>
        <div className="contact-details">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Phone number</label>
            <input
              type="number"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="6"
            ></textarea>
            <button style={{ color: "red" }} className="btn">
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </>
  );
};

export default Contact;
