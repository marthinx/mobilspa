import * as React from "react"
import Button from "../Button/Button"
import { ContactStyles } from "./ContactStyles"

const Contact = () => {
  return (
    <ContactStyles className="section">
      <form name="contact" netlify>
        <input placeholder="Dein Name..." type="text" name="name" />
        <input placeholder="Deine eMail..." type="email" name="email" />
        <textarea
          placeholder="Deine Nachricht..."
          name="message"
          rows="5"
        ></textarea>
        <Button text="Nachricht senden" />
      </form>
    </ContactStyles>
  )
}

export default Contact
