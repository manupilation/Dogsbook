import { useState } from 'react';

const types = {
  email: {
    regex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    message: "Email inválido!"
  },
  password: {
    regex: /^([a-zA-Z0-9_-]){3,30}$/,
    message: "Sua senha precisa ter entre 3 e 30 caracteres."
  },
  passwordCreate: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{2,}$/,
    message: "A senha precisa ter 1 caracter maíusculo, 1 minúsculo, e um digito, com no mínimo 3 caracteres."
  }
}

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  function validate(value) {
    if(type === false) return true;

    if(value.length === 0) {
      setError("Preencha um valor!");
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({target}) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error
  }
};

export default useForm;
