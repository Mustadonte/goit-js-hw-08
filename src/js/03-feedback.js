import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const INPUT_FORM = 'feedback-form-state';
let dataObj = localStorage.getItem(INPUT_FORM) ?? {};

refs.form.addEventListener('input', throttle(setDataToLocalStorage, 500));
refs.form.addEventListener('submit', handleSubmit);

addEventListener('DOMContentLoaded', updateForm);

function setDataToLocalStorage() {
  let formData = new FormData(refs.form);
  formData.forEach((value, name) => {
    formData[name] = value;
    localStorage.setItem(INPUT_FORM, JSON.stringify(formData));
    dataObj = formData;
  });
}

function updateForm() {
  if (dataObj.toString !== false) {
    try {
      savedData = JSON.parse(dataObj);
      const { elements } = refs.form;
      const keys = Object.keys(savedData);
      keys.forEach(key => (elements[key].value = savedData[key]));
    } catch (error) {}
  }
}

function handleSubmit(e) {
  const { email, message } = refs.form.elements;
  if (email.value === '' || message.value === '') {
    alert('Заповніть всі поля');
    return;
  } else {
    e.preventDefault();
    const loggingObject = {
      email: e.currentTarget.email.value,
      message: e.currentTarget.message.value,
    };
    console.log(loggingObject);
    e.target.reset();
    localStorage.removeItem(INPUT_FORM);
  }
}
