const courses = [
  { name: "Biología celular", unlocks: ["Microbiología y parasitología", "Farmacología general"] },
  { name: "Introducción a la matronería", unlocks: ["Cuidados médico - quirúrgicos de matronería I"] },
  { name: "Química general y orgánica", unlocks: ["Farmacología general"] },
  { name: "Habilidades comunicativas", unlocks: [] },
  { name: "Inglés 1", unlocks: ["Ingles 2"] },
  { name: "Morfología general", unlocks: ["Bases perinatales y ginecológicas en matronería", "Cuidados médico – quirúrgicos de matronería II"] },
  { name: "Salud pública", unlocks: ["Políticas en salud sexual y salud reproductiva", "Administración y gestión en salud"] },
  { name: "Cuidados médico – quirúrgicos de matronería I", unlocks: ["Cuidados médico – quirúrgicos de matronería II"] },
  { name: "Microbiología y parasitología", unlocks: ["Bases perinatales y ginecológicas en matronería", "Cuidados médico – quirúrgicos de matronería II"] },
  { name: "Ingles 2", unlocks: ["Ingles 3"] },
  { name: "Bases perinatales y ginecológicas en matronería", unlocks: ["Integrador I: Cuidados médico – quirúrgicos de Matronería", "Neonatología, lactancia y gestión"] },
  { name: "Cuidados médico – quirúrgicos de matronería II", unlocks: ["Salud sexual, salud reproductiva y gestión I", "Integrador I: Cuidados médico – quirúrgicos de Matronería"] },
  { name: "Políticas en salud sexual y salud reproductiva", unlocks: ["Salud sexual, salud reproductiva y gestión I", "Integrador I: Cuidados médico – quirúrgicos de Matronería", "Neonatología, lactancia y gestión", "Psicología integral y técnicas de entrevista clínica", "Educación con enfoque curso de vida", "Salud familiar y comunitaria", "Metodología de la investigación", "Matronería legal y bioética"] },
  { name: "Pensamiento crítico", unlocks: [] },
  { name: "Ingles 3", unlocks: ["Ingles 4", "Integrador I: Cuidados médico – quirúrgicos de Matronería"] },
  { name: "Matronería y bases fisiopatológicas de la salud", unlocks: ["Salud sexual, salud reproductiva y gestión II", "Matronería legal y bioética"] },
  { name: "Salud sexual, salud reproductiva y gestión I", unlocks: ["Salud sexual, salud reproductiva y gestión II", "Educación con enfoque curso de vida", "Salud familiar y comunitaria"] },
  { name: "Administración y gestión en salud", unlocks: ["Neonatología, lactancia y gestión", "Bioestadística"] },
  { name: "Integrador I: Cuidados médico – quirúrgicos de Matronería", unlocks: [] },
  { name: "Ingles 4", unlocks: [] },
  { name: "Farmacología general", unlocks: ["Matronería patológica integrada y gestión"] },
  { name: "Neonatología, lactancia y gestión", unlocks: ["Educación con enfoque curso de vida", "Matronería patológica integrada y gestión", "Salud familiar y comunitaria"] },
  { name: "Salud sexual, salud reproductiva y gestión II", unlocks: ["Matronería patológica integrada y gestión", "Sexología, género y derecho"] },
  { name: "Psicología integral y técnicas de entrevista clínica", unlocks: ["Intervención en contextos sociales y comunitarios"] },
  { name: "Educación con enfoque curso de vida", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida"] },
  { name: "Matronería patológica integrada y gestión", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida"] },
  { name: "Bioestadística", unlocks: ["Metodología de la investigación"] },
  { name: "Salud familiar y comunitaria", unlocks: ["Intervención en contextos sociales y comunitarios"] },
  { name: "Metodología de la investigación", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida", "Proyecto de Matronería"] },
  { name: "Sexología, género y derecho", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida"] },
  { name: "Intervención en contextos sociales y comunitarios", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida"] },
  { name: "Matronería legal y bioética", unlocks: ["Integrador II: Practica de matronería en la comunidad", "Imagenología en matronería", "Matronería oncológica y reproducción asistida"] },
  { name: "Integrador II: Practica de matronería en la comunidad", unlocks: ["Habilitación profesional I", "Habilitación profesional II"] },
  { name: "Imagenología en matronería", unlocks: ["Habilitación profesional I", "Habilitación profesional II"] },
  { name: "Matronería oncológica y reproducción asistida", unlocks: ["Habilitación profesional I", "Habilitación profesional II"] },
  { name: "Proyecto de Matronería", unlocks: ["Habilitación profesional I", "Habilitación profesional II"] },
  { name: "Habilitación profesional I", unlocks: [] },
  { name: "Habilitación profesional II", unlocks: [] }
];

const container = document.getElementById("grid-container");
const courseElements = {};

function createCourseElement(course) {
  const div = document.createElement("div");
  div.classList.add("course", "locked");
  div.innerHTML = `<h3>${course.name}</h3>`;
  div.onclick = () => {
    if (!div.classList.contains("locked")) {
      div.classList.toggle("completed");
      if (div.classList.contains("completed")) {
        course.unlocks.forEach(name => {
          const unlocked = courseElements[name];
          if (unlocked) unlocked.classList.remove("locked");
        });
      }
    }
  };
  container.appendChild(div);
  return div;
}

courses.forEach(course => {
  courseElements[course.name] = createCourseElement(course);
});

// Desbloquear cursos sin prerrequisitos
courses.forEach(course => {
  const hasPrereq = courses.some(c => c.unlocks.includes(course.name));
  if (!hasPrereq) courseElements[course.name].classList.remove("locked");
});

