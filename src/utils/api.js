const personas = [
  {
    nombre: 'Pepe Grillo',
    genero: 'h',
    edad: 18,
    fotoUrl: 'https://i.imgur.com/clq9lGO.jpg'
  },
  {
    nombre: 'Marta Peralta',
    genero: 'm',
    edad: 30,
    fotoUrl: 'https://i.imgur.com/R89Zajr.jpg'
  }
]

export const apis = {
  getPersonas() {
    return personas;
  }
}