export const validAccomodation = (formData, setFormValidate) => {
  let isValid = true;

  if (
    formData.name == "" ||
    !isNaN(formData.name) ||
    formData.name.length < 4 ||
    formData.name.length > 128
  ) {
    setFormValidate((prev) => ({
      ...prev,
      name: "must be a text between 4 and 128",
    }));
    isValid = false;
  }

  if (
    formData.name == "" ||
    formData.name.length < 4 ||
    formData.name.length > 128
  ) {
    setFormValidate((prev) => ({
      ...prev,
      address: "must be a text between 4 and 128",
    }));
    isValid = false;
  }

  if (
    formData.description != "" &&
    (formData.description.length < 4 || formData.description.length > 128)
  ) {
    setFormValidate((prev) => ({
      ...prev,
      description: "must be a text between 4 and 128",
    }));
    isValid = false;
  }

  if (formData.location == "") {
    setFormValidate((prev) => ({
      ...prev,
      location: "Must choose on option",
    }));
    isValid = false;
  }

  if (formData.images.length > 0 && formData.images.length > 2) {
    setFormValidate((prev) => ({
      ...prev,
      images: "Maximum 2 pictures allowed",
    }));

    isValid = false;
  }

  console.log("ISVALID ACCOMM", isValid);

  return isValid;
};

export const validOwner = (formData, setFormValidate) => {
  let isValid = true;

  if (
    formData.name == "" ||
    !isNaN(formData.name) ||
    formData.name.length < 4 ||
    formData.name.length > 64
  ) {
    setFormValidate((prev) => ({
      ...prev,
      name: "must be a text between 4 and 64",
    }));
    isValid = false;
  }

  if (formData.email == "" || !validateEmail(formData.email)) {
    setFormValidate((prev) => ({
      ...prev,
      email: "must be an email containing '@' and a domain before the '@'",
    }));
    isValid = false;
  }

  if (
    formData.phone != "" &&
    (isNaN(formData.phone) || formData.phone.length != 9)
  ) {
    setFormValidate((prev) => ({
      ...prev,
      phone: "must contain numbers only, up to 9 digits",
    }));
    isValid = false;
  }

  console.log("ISVALID OWNER", isValid);

  return isValid;
};

const validateEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};
