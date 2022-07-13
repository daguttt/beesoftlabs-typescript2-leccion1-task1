class Alumno {
  public nombre: string;
  public edad: number;
  public correo: string;
  public promedio: number;

  constructor(nombre: string, edad: number, correo: string, promedio: number) {
    this.nombre = nombre;
    this.edad = edad;
    this.correo = correo;
    this.promedio = promedio;
  }
}

const alumnos: Array<Alumno> = [
  { nombre: "Jose Perez", edad: 22, correo: "jose@perez.com", promedio: 6 },
  { nombre: "Juan Perez", edad: 19, correo: "juan@perez.com", promedio: 7 },
  { nombre: "Maria Yepez", edad: 21, correo: "maria@yepez.com", promedio: 9 },
  { nombre: "Jose Uribe", edad: 23, correo: "jose@gmail.com", promedio: 5 },
  { nombre: "Juana Medina", edad: 18, correo: "juana@gmail.com", promedio: 7 },
  {
    nombre: "Maria Contreras",
    edad: 20,
    correo: "mariaC@gmail.com",
    promedio: 10,
  },
  { nombre: "Alan Brito", edad: 22, correo: "alan@brito.com", promedio: 5 },
  {
    nombre: "Angelica Galindo",
    edad: 19,
    correo: "angelica@galindo.com",
    promedio: 7,
  },
  { nombre: "Sara Castro", edad: 21, correo: "scastro@gmail.com", promedio: 6 },
  { nombre: "Carlos Marin", edad: 23, correo: "carlos@gmail.com", promedio: 8 },
  { nombre: "Karla Medina", edad: 18, correo: "Karla@gmail.com", promedio: 3 },
  {
    nombre: "Daniela Medina",
    edad: 20,
    correo: "danielamedinaC@gmail.com",
    promedio: 7,
  },
];
// -**********************************-
// Task 1
function getStudentsWhoHasMoreThanSixOnAverage(
  studentList: Array<Alumno>
): Array<Alumno> {
  return studentList.filter((student) => student.promedio > 6);
}
// -**********************************-
// Task 2
function getStudentsAverageLessThanSix(
  studentList: Array<Alumno>
): Array<Alumno> {
  return studentList.filter(
    (student) => student.promedio > 6 && student.edad < 19
  );
}
// -**********************************-
// Task 3
function getSortedAscendingStudentsAverages(
  studentList: Array<Alumno>
): Array<Alumno> {
  return studentList.sort((a, b) => a.promedio - b.promedio);
}
// console.log(getSortedAscendingStudentsAverages(alumnos));
// -**********************************-
// Task 4
function giveTwoPointsToStudentWithLowAverage(
  studentList: Array<Alumno>
): Array<Alumno> {
  return studentList.map((student) => {
    if (student.promedio <= 4) {
      return {
        nombre: student.nombre,
        edad: student.edad,
        correo: student.correo,
        promedio: student.promedio + 2,
      };
    }
    return student;
  });
}
console.log(giveTwoPointsToStudentWithLowAverage(alumnos));
// -**********************************-
// Task 5
function getGeneralAverage(studentList: Array<Alumno>): number {
  const total = studentList.reduce((acc, student) => acc + student.promedio, 0);
  return total / studentList.length;
}
// console.log(getGeneralAverage(alumnos));
// -**********************************-
