// Selecteert alle inputs
const inputs = document.querySelectorAll('.controls input');

// handelt/updates mousewaardes
function handleUpdate (){

const suffix = this.dataset.sizing || '';
// css variabelen naam, waarde en suffix update 
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
console.log(this.name);
}


// itereer over de inputs

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

