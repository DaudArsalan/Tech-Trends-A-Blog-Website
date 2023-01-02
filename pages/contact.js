import { Mea_Culpa } from "@next/font/google";
import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNo, message);

    fetch("http://localhost:3000/api/postContact/", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        phoneNo: phoneNo,
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));

    setEmail("");
    setMessage("");
    setName("");
    setPhoneNo("");

    alert("Thanks for contact us")
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "phoneno") {
      setPhoneNo(e.target.value);
    } else if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  return (
    <div>
      <h2 className={styles.contactHeading}>Contact</h2>
      <div className={styles.formboldMainWrapper}>
        <div className={styles.formboldFormWrapper}>
          <form
            onSubmit={handleSubmit}
            action="https://formbold.com/s/FORM_ID"
            method="POST"
          >
            <div className={styles.formboldMb5}>
              <label htmlFor="name" className={styles.formboldFormLabel1}>
                {" "}
                Full Name{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                value={name}
                placeholder="Full Name"
                required
                className={styles.formboldFormInput}
              />
            </div>

            <div className={styles.formboldMb5}>
              <label htmlFor="email" className={styles.formboldFormLabel1}>
                {" "}
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={email}
                placeholder="Enter your email"
                required
                className={styles.formboldFormInput}
              />
            </div>

            <div className={styles.formboldMb5}>
              <label htmlFor="subject" className={styles.formboldFormLabel1}>
                {" "}
                Phone No{" "}
              </label>
              <input
                type="text"
                name="phoneno"
                id="phoneno"
                onChange={handleChange}
                value={phoneNo}
                placeholder="Enter your phone"
                required
                className={styles.formboldFormInput}
              />
            </div>

            <div className={styles.formboldMb5}>
              <label htmlFor="message" className={styles.formboldFormLabel1}>
                {" "}
                Message{" "}
              </label>
              <textarea
                rows="6"
                name="message"
                id="message"
                onChange={handleChange}
                value={message}
                placeholder="Type your message"
                required
                className={styles.formboldFormInput}
              />
            </div>

            <div>
              <button className={styles.formboldBtn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
