const inputs = document.querySelectorAll('.controls input');
console.log(inputs)

function handleUpdate() {
  /* dataset es un objeto que contiene todos los atributos de data-*
      que tenemos en nuestro HTML. En este caso, data-sizing.
  */
  const suffix = this.dataset.sizing || ''; // esto es representado como px
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// en los siguientes eventos llamamos a la función handleUpdate para que sea ejecutada cada vez que se cambie el valor de los inputs
inputs.forEach(inputs => inputs.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));