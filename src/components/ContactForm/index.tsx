import React, { FormEvent, useEffect, useState } from "react";
import { ContactFormContainer } from "./ContactForm.styles";
import {
  Form,
  Input,
  TextArea,
  Button,
  Message,
  Select,
} from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  formPhoneRegex as phoneRegex,
  formEmailRegex as emailRegex,
} from "../../utils";
import SectionHeader from "../../common/components/SectionHeader";

import {
  TitleDecoratorImgColor,
  TitleDecoratorImgSize,
} from "../../common/components/TitleShieldDecorator";
import { useTranslate } from "../../hooks/useTranslate";
import {
  getPhoneCodeByCountryCode,
  countriesData,
} from "../../services/CountriesData";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID as string;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID as string;
const USER_ID = process.env.REACT_APP_USER_ID as string;

type Props = {
  fractionDefaultMessage: string;
};
const ContactForm: React.FC<Props> = ({ fractionDefaultMessage }) => {
  const translate = useTranslate();

  const formRef = React.useRef(null);

  const [phoneValid, setPhoneValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [formError, setFormError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [phone, setPhone] = useState("+351 ");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!email || !name) {
      setFormError(true);
      if (!email) {
        setErrorMessage(translate.CONTACT.FORM.EMAIL.EMPTY);
      } else if (!name) {
        setErrorMessage(translate.CONTACT.FORM.NAME.EMPTY);
      }
    } else {
      setFormError(false);
    }

    e.preventDefault();

    if (!(emailValid && email && phoneValid && name)) {
      e.currentTarget.reset();
      return false;
    }

    const payload = {
      email,
      phone,
      message:
        message === "" ? translate.CONTACT.FORM.MESSAGE.PLACEHOLDER : message,
      name,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, USER_ID).then(
      (result) => {
        setEmail("");
        setName("");
        setPhone("");
        setMessage("");
        Swal.fire({
          icon: "success",
          title: translate.CONTACT.EMAIL_SERVICE.SENT,
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: translate.CONTACT.EMAIL_SERVICE.ERROR,
          text: error.text,
        });
      }
    );
    e.currentTarget.reset();
    return true;
  };

  const regexValidate = (e: React.FormEvent<HTMLInputElement>) => {
    const inputName = e.currentTarget.name;
    const inputValue = e.currentTarget.value;

    let isValid = false;
    switch (inputName) {
      case "user_email":
        if (inputValue !== "") {
          emailRegex.test(inputValue) ? (isValid = true) : (isValid = false);
        }
        return isValid;
      case "user_phone":
        phoneRegex.test(inputValue) ? (isValid = true) : (isValid = false);
        return isValid;
    }
    return false;
  };

  useEffect(() => {
    setMessage(fractionDefaultMessage);
  }, [fractionDefaultMessage]);
  return (
    <ContactFormContainer>
      <SectionHeader
        size={TitleDecoratorImgSize.MEDIUM}
        color={TitleDecoratorImgColor.PRIMARY}
      >
        {translate.CONTACT.HEADER}
      </SectionHeader>
      <Form
        unstackable
        error
        noValidate
        ref={formRef}
        onSubmit={handleOnSubmit}
      >
        <Form.Field
          id="form-input-control-email"
          control={Input}
          autoComplete="off"
          label={translate.CONTACT.FORM.EMAIL.LABEL}
          name="user_email"
          placeholder={translate.CONTACT.FORM.EMAIL.PLACEHOLDER}
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
          onBlur={(e: React.FormEvent<HTMLInputElement>) => {
            if (e.currentTarget.value !== "") {
              setEmailValid(regexValidate(e));
            }
          }}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
            if (e.currentTarget.value === "") {
              setEmailValid(true);
            } else {
              if (!emailValid) setEmailValid(regexValidate(e));
            }
          }}
        />
        <Form.Group id="form-input-control-phone">
          <Form.Field
            label={translate.CONTACT.FORM.PHONE.LABEL}
            id="form-input-control-phone-country-code"
            control={Select}
            fluid
            options={countriesData()}
            defaultValue={"pt"}
            search
            icon={false}
            onKeyUp={(e: React.FormEvent<HTMLElement>) => {
              const elementText =
                document.querySelector("#form-input-control-phone .text")
                  ?.textContent ?? "";
              const countryPhoneCode =
                getPhoneCodeByCountryCode(elementText)?.code;
              if (countryPhoneCode) {
                setPhone("+" + countryPhoneCode + " ");
              }
            }}
            onChange={(e: React.FormEvent<HTMLElement>) => {
              if (e.currentTarget) {
                const phoneCodeAttr =
                  e.currentTarget.getAttribute("phonecode") ?? "";
                setPhone(phoneCodeAttr + " ");
              }
            }}
          />
          <Form.Field
            className="hidden-label"
            id="form-input-control-phone-number"
            control={Input}
            fluid
            autoComplete="off"
            label={translate.CONTACT.FORM.PHONE.LABEL}
            name="user_phone"
            placeholder={translate.CONTACT.FORM.PHONE.PLACEHOLDER}
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
            onBlur={(e: React.FormEvent<HTMLInputElement>) =>
              setPhoneValid(regexValidate(e))
            }
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setPhone(e.currentTarget.value);
              if (!phoneValid) setPhoneValid(regexValidate(e));
            }}
          />
        </Form.Group>
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          autoComplete="off"
          label={translate.CONTACT.FORM.NAME.LABEL}
          name="user_name"
          placeholder={translate.CONTACT.FORM.NAME.PLACEHOLDER}
          required
          value={name}
          icon="user circle"
          iconPosition="left"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
          }}
        />
        <Form.Field
          id="form-textarea-control-opinion"
          autoComplete="off"
          control={TextArea}
          label={translate.CONTACT.FORM.MESSAGE.LABEL}
          name="user_message"
          placeholder={translate.CONTACT.FORM.MESSAGE.PLACEHOLDER}
          value={message}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setMessage(e.currentTarget.value);
          }}
        />
        {formError && (
          <Message
            className="error-message"
            error
            header={translate.CONTACT.FORM.ERROR}
            content={errorMessage}
          />
        )}
        <Button type="submit" id="form-submit-button">
          {translate.CONTACT.FORM.BUTTONS.SUBMIT}
        </Button>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;
