'use strict';


class Fluids {
  constructor() {

  }

  cleanFormById(id) {
    const form = document.querySelector(`#${id}`);
    if (form) {
      this.clean(form);
    }
  }

  clean(form) {
    // найти все input в форме 
    let inputs = form.querySelectorAll('input');

    // найти все textarea в форме 
    let textareas = form.querySelectorAll('textarea');

    // если в форме есть input
    if (inputs) {
      for (let i = 0; i < inputs.length; i++) {
        // если это не input, добавленный бэкенд-разработчиком
        if (inputs[i].name !== 'code' && inputs[i].type !== 'hidden') {
          inputs[i].value = ''; // очистить значение поля
          inputs[i].setAttribute('value', ''); // очистить значение атрибута value у поля
          inputs[i].checked = false; // снять checkbox
        }
      }
    }

    // если в форме есть textarea
    if (textareas) {
      for (let i = 0; i < textareas.length; i++) {
        textareas[i].value = ''; // очистить значение поля
        textareas[i].setAttribute('value', ''); // очистить значение атрибута value у поля
      }
    }
  }
}

window.globalFluids = new Fluids();

// window.globalFluids.clean();
// window.globalFluids.cleanFormById(id);

// function cleanFluids(form) {

// }