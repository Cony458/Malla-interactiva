const courses = [
  { name: "Biología celular", unlocks: ["Microbiología y parasitología"] },
  { name: "Microbiología y parasitología", unlocks: [] }
];

const container = document.getElementById("grid-container");
const courseElements = {};

// Crear los cuadros
courses.forEach(course => {
  const div = document.createElement("div");
  div.className = "course locked";
  div.textContent = course.name;
  div.onclick = () => {
    if (!div.classList.contains("locked")) {
      div.classList.add("completed");
      course.unlocks.forEach(name => {
        const target = courseElements[name];
        if (target) target.classList.remove("locked");
      });
    }
  };
  container.appendChild(div);
  courseElements[course.name] = div;
});

// Desbloquear los cursos sin requisitos
courses.forEach(course => {
  const isLocked = courses.some(c => c.unlocks.includes(course.name));
  if (!isLocked) {
    courseElements[course.name].classList.remove("locked");
  }
});
