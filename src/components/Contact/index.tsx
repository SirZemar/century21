import React, { FocusEvent, useState } from "react";
import { ContactContainer } from "./Contact.styles";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

import { translate } from "../../translate";

const Contact: React.FC = () => {
  const formRef = React.useRef(null);

  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);

  const [phone, setPhone] = useState("+351 ");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const phoneRegex = /^(\+?[0-9\s]*)$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const regexValidate = (e: React.FormEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    switch (inputName) {
      case "user_email":
        if (inputValue !== "") {
          emailRegex.test(inputValue)
            ? setEmailValid(true)
            : setEmailValid(false);
        }
        break;

      case "user_phone":
        phoneRegex.test(inputValue)
          ? setPhoneValid(true)
          : setPhoneValid(false);
        break;

      default:
        break;
    }
  };

  return (
    <ContactContainer>
      <Form ref={formRef} onSubmit={() => console.log("submit")}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          autoComplete="off"
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          icon="mail"
          value={email}
          iconPosition="left"
          error={
            emailValid || email === ""
              ? null
              : {
                  content: translate.CONTACT.FORM.EMAIL.INVALID,
                }
          }
          onBlur={(e: React.FormEvent<HTMLInputElement>) => regexValidate(e)}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
            const validate = emailValid ? false : regexValidate(e);
            e.currentTarget.reportValidity();
          }}
          onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (email === "") {
              e.target.setCustomValidity(translate.CONTACT.FORM.EMAIL.EMPTY);
            } else {
              e.target.setCustomValidity("");
            }
          }}
        />
        <Form.Field
          id="form-input-control-phone"
          control={Input}
          autoComplete="off"
          label="Phone"
          name="user_phone"
          placeholder="Phone…"
          value={phone}
          icon="phone"
          iconPosition="left"
          error={
            phoneValid
              ? null
              : {
                  content: translate.CONTACT.FORM.PHONE.INVALID,
                }
          }
          onBlur={(e: React.FormEvent<HTMLInputElement>) => regexValidate(e)}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPhone(e.currentTarget.value);
            const validate = phoneValid ? false : regexValidate(e);
            e.currentTarget.reportValidity();
          }}
          onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (phone === "") {
              e.target.setCustomValidity(translate.CONTACT.FORM.PHONE.EMPTY);
              e.target.reportValidity();
            } else {
              e.target.setCustomValidity("");
              e.target.reportValidity();
            }
          }}
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          autoComplete="off"
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          value={name}
          icon="user circle"
          iconPosition="left"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
            e.currentTarget.reportValidity();
          }}
          onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (name === "") {
              e.target.setCustomValidity(translate.CONTACT.FORM.NAME.EMPTY);
            } else {
              e.target.setCustomValidity("");
            }
          }}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          autoComplete="off"
          control={TextArea}
          label="Message"
          name="user_message"
          placeholder="Message…"
          value={message}
          required
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setMessage(e.currentTarget.value);
            e.currentTarget.reportValidity();
          }}
          onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (message === "") {
              e.target.setCustomValidity(translate.CONTACT.FORM.MESSAGE.EMPTY);
            } else {
              e.target.setCustomValidity("");
            }
          }}
        />
        <Button type="submit" color="green">
          Submit
        </Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
