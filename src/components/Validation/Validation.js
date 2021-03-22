export const validate = (inputType, value) => {
  const regTel = /((\+)?\b(38)?(067|068|096|097|098|050|066|095|099|063|073|093))([\d-]{5})([\d]{2})$/g;
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  switch (inputType) {
    case "email":
      return regEmail.test(String(value).toLowerCase());
    case "phone":
      return regTel.test(String(value));
    default:
      return value.length !== 0;
  }
};
