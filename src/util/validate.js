const regName = /^[a-zA-Z ]{2,30}$/;
const regxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const validateInput = (text) => {
  if (!text.trim()) return { ok: "false", msg: "Please! enter a valid text!" };
  return { ok: "true" };
};

export const validateName = (name) => {
  if (!regName.test(name))
    return { ok: "false", msg: "Please! enter a valid name!" };
  return { ok: "true" };
};

export const validateEmail = (email) => {
  if (!regxEmail.test(email))
    return { ok: "false", msg: "Please! enter a valid email!" };
  return { ok: "true" };
};
