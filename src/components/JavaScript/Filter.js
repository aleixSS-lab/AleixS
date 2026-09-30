// 1. Buscamos todos los botones que están dentro del contenedor con la clase .filter
const botones = document.querySelectorAll(".filter button");

// 2. Buscamos todas las tarjetas de proyectos que tienen la clase .project
const proyectos = document.querySelectorAll(".project");

// 3. Recorremos cada botón para asignarle qué debe hacer cuando el usuario haga clic
botones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Alterna la clase "on": si la tiene se la quita, y si no la tiene se la pone
    boton.classList.toggle("on");

    // Guardamos en una lista todos los botones que tienen la clase "on" en este momento
    const botonesActivos = document.querySelectorAll(".filter .on");

    // 4. Recorremos cada uno de los proyectos para decidir si se muestra o se oculta
    proyectos.forEach(function (proyecto) {
      // Si no hay ningún botón pulsado (la lista está vacía), debemos mostrar todos los proyectos
      let mostrar = false;
      if (botonesActivos.length === 0) {
        mostrar = true;
      }

      // Leemos los lenguajes definidos en el HTML del proyecto (en data-langs)
      const lenguajes = proyecto.dataset.langs;

      // Recorremos los botones activos para comprobar si alguno coincide con el proyecto
      botonesActivos.forEach(function (botonActivo) {
        const filtro = botonActivo.dataset.filter;

        // Si el proyecto contiene el lenguaje del botón seleccionado, lo mostramos
        if (lenguajes && lenguajes.includes(filtro)) {
          mostrar = true;
        }
      });

      // 5. Aplicamos el cambio visual:
      // Si "mostrar" es true, dejamos el display vacío (se ve con su diseño normal de CSS)
      // Si "mostrar" es false, ponemos "none" para que el proyecto se oculte
      if (mostrar) {
        proyecto.style.display = "";
      } else {
        proyecto.style.display = "none";
      }
    });
  });
});
