import { Injectable } from "@angular/core";

@Injectable()

export class ScientistsService{

  private scientists:Scientists[] = [
      {
          name: "Albert Einstein",
          bio: "En 1905, cuando era un joven físico desconocido, empleado en la Oficina de Patentes de Berna, publicó su teoría de la relatividad especial. En ella incorporó, en un marco teórico simple fundamentado en postulados físicos sencillos, conceptos y fenómenos estudiados antes por Henri Poincaré y por Hendrik Lorentz. Como una consecuencia lógica de esta teoría, dedujo la ecuación de la física más conocida a nivel popular: la equivalencia masa-energía, E=mc².",
          gender: "Masculino",
          birthDate: "1879-3-14",
          deathDate: "1955-4-18",
          nacionality: "Germania",
          nobelAward: "SI",
          time: "Moderno",
          img: "assets/img/albert-einstein.jpg"
        },
      
        {
          name: "Annie Jump Cannon",
          bio: "Annie Jump Cannon fue una astrónoma estadounidense cuyo trabajo de catalogación fue fundamental para la actual clasificación estelar.",
          gender: "Femenino",
          birthDate: "1865-12-11",
          deathDate: "1941-4-13",
          nacionality: "Estados Unidos",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/annie-jump.jpg"
        },
      
        {
          name: "Carl Edward Sagan",
          bio: "Carl Edward Sagan fue un astrónomo, astrofísico, cosmólogo, escritor y divulgador científico estadounidense.",
          gender: "Masculino",
          birthDate: "1934-11-9",
          deathDate: "1996-12-20",
          nacionality: "Estados Unidos",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/carl-sagan.jpg"
        },  
      
        {
          name: "Erwin Rudolf Josef Alexander Schrödinger",
          bio: "Erwin Rudolf Josef Alexander Schrödinger fue un físico austríaco, naturalizado irlandés, que realizó importantes contribuciones en los campos de la mecánica cuántica y la termodinámica.​",
          gender: "Masculino",
          birthDate: "1887-8-12",
          deathDate: "1961-1-4",
          nacionality: "Viena",
          nobelAward: "SI",
          time: "Moderno",
          img: "assets/img/erwin-schrodinger.jpg"
        },
      
        {
          name: "Galileo Galilei",
          bio: "Galileo Galilei ​​ fue un astrónomo, filósofo, ingeniero, ​​ matemático y físico italiano, relacionado estrechamente con la revolución científica. Eminente hombre del Renacimiento, mostró interés por casi todas las ciencias y artes.",
          gender: "Masculino",
          birthDate: "1564-2-15",
          deathDate: "1642-1-8",
          nacionality: "Italia",
          nobelAward: "NO",
          time: "Antiguo",
          img: "assets/img/galileo-galilei.jpg"
        },
      
        {
          name: "Giordano Bruno",
          bio: "Giordano Bruno, de nacimiento Filippo Bruno fue un astrónomo, filósofo, matemático y poeta italiano.",
          gender: "Masculino",
          birthDate: "1548-1-1",
          deathDate: "1600-2-17",
          nacionality: "Italia",
          nobelAward: "NO",
          time: "Antiguo",
          img: "assets/img/giordano-bruno.jpg"
        },
      
        {
          name: "Gregor Johann Mendel",
          bio: "Gregor Johann Mendel fue un monje agustino católico y naturalista quien formuló, por medio de los trabajos que llevó a cabo con diferentes variedades del guisante o arveja, las hoy llamadas leyes de Mendel que dieron origen a la herencia genética.",
          gender: "Masculino",
          birthDate: "1822-7-20",
          deathDate: "1884-1-6",
          nacionality: "República Checa",
          nobelAward: "No",
          time: "Moderno",
          img: "assets/img/gregor-mendel.jpg"
        },
      
        {
          name: "Sir Isaac Newton",
          bio: "Sir Isaac Newton fue un físico, filósofo, teólogo, inventor, alquimista y matemático inglés. Es autor de los Philosophiæ naturalis principia mathematica, más conocidos como los Principia",
          gender: "Masculino",
          birthDate: "1643-1-4",
          deathDate: "1727-3-31",
          nacionality: "Ingles",
          nobelAward: "No",
          time: "Antiguo",
          img: "assets/img/isaac-newton.jpg"
        },
      
        {
          name: "Leonardo da Vinci",
          bio: "Leonardo da Vinci fue un polímata florentino del Renacimiento italiano. Fue a la vez pintor, anatomista, arquitecto, paleontólogo, ​ artista, botánico, científico, escritor, escultor, filósofo, ingeniero, inventor, músico, poeta y urbanista.",
          gender: "Masculino",
          birthDate: "1452-4-15",
          deathDate: "1519-5-2",
          nacionality: "Italia",
          nobelAward: "NO",
          time: "Antiguo",
          img: "assets/img/leonardo-da-vinci.jpg"
        },
        
        {
          name: "Maria Salomea Skłodowska Curie​​",
          bio: "Maria Salomea Skłodowska-Curie​​, más conocida como Marie Curie, ​​ fue una científica polaca nacionalizada francesa.",
          gender: "Femenino",
          birthDate: "1867-11-7",
          deathDate: "1943-7-4",
          nacionality: "Francia",
          nobelAward: "SI",
          time: "Moderno",
          img: "assets/img/marie-curie.jpg"
        },
      
        {
          name: "Max Karl Ernest Ludwig Planck",
          bio: "Max Karl Ernest Ludwig Planck fue un físico y matemático alemán considerado como el fundador de la teoría cuántica y galardonado con el Premio Nobel de Física en 1918.",
          gender: "Masculino",
          birthDate: "1858-4-23",
          deathDate: "1947-10-4",
          nacionality: "Alemania",
          nobelAward: "SI",
          time: "Moderno",
          img: "assets/img/max-planck.jpg"
        },
      
        {
          name: "Michael Faraday",
          bio: "Michael Faraday, FRS, fue un físico y químico británico que estudió el electromagnetismo y la electroquímica. Sus principales descubrimientos incluyen la inducción electromagnética, el diamagnetismo y la electrólisis.",
          gender: "Masculino",
          birthDate: "1791-9-22",
          deathDate: "1867-8-25",
          nacionality: "Ingles",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/michael-faraday.jpg"
        },
      
        {
          name: "Neil deGrasse Tyson",
          bio: "Neil deGrasse Tyson es un astrofísico, escritor y divulgador científico estadounidense. Actualmente es director del Planetario Hayden en el Centro Rose para la Tierra y el Espacio,",
          gender: "Masculino",
          birthDate: "1958-10-5",
          deathDate: "alive",
          nacionality: "Estados Unidos",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/neil-degrasse-tyson.jpg"
        },
      
        {
          name: "Nikola Tesla",
          bio: "Nikola Tesla fue un inventor, ingeniero mecánico, eléctrico y físico de origen serbio.​​ Se le conoce sobre todo por sus numerosas invenciones en el campo del electromagnetismo, desarrolladas a finales del siglo XIX y principios del siglo XX.",
          gender: "Masculino",
          birthDate: "1856-7-10",
          deathDate: "1943-1-7",
          nacionality: "Croacia",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/nicola-tesla.jpg"
        },
      
        {
          name: "Niels Henrik David Bohr",
          bio: "Niels Henrik David Bohr fue un físico danés que realizó contribuciones fundamentales para la comprensión de la estructura del átomo y la mecánica cuántica. Fue galardonado con el Premio Nobel de física en 1922.",
          gender: "Masculino",
          birthDate: "1885-10-7",
          deathDate: "1962-11-18",
          nacionality: "Dinamarca",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/niels-bohr.jpg"
        },
      
        {
          name: "Peter Ware Higgs",
          bio: "Peter Ware Higgs, es un físico británico conocido por su proposición en los años 60 de la ruptura de la simetría en la teoría electrodébil, explicando el origen de la masa de las partículas elementales",
          gender: "Masculino",
          birthDate: "1929-5-29",
          deathDate: "alive",
          nacionality: "Ingles",
          nobelAward: "SI",
          time: "Moderno",
          img: "assets/img/peter-higges.jpg"
        },
      
        {
          name: "Stephen William Hawking",
          bio: "Stephen William Hawking es un físico teórico, astrofísico, cosmólogo y divulgador científico británico.",
          gender: "Masculino",
          birthDate: "1942-1-8",
          deathDate: "alive",
          nacionality: "Ingles",
          nobelAward: "NO",
          time: "Moderno",
          img: "assets/img/stephen-hawking.jpg"
        }
  ]; 
  
  constructor(){
      console.log("Service ready to use");
  }

  getScientists():Scientists[]{
      return this.scientists;
  }

  getScientist( idx:number ):Scientists{
    return this.scientists[idx];
  }

  searchScientist( scientistParams:string ){

    let scientistsArray:Scientists[]=[];
    
    scientistParams = scientistParams.toLowerCase();

    for(let scientist of this.scientists){
      
      let name = scientist.name.toLowerCase();

      if( name.indexOf( scientistParams ) >= 0){
        scientistsArray.push(scientist)
      }

    }
    return scientistsArray;
  }

    
}


export interface Scientists{
    name;
    bio;
    gender; 
    birthDate; 
    deathDate; 
    nacionality;
    nobelAward;
    time;
    img;
}

