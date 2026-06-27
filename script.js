/* ============================================================
   DATOS — Para actualizar: cargá el "result" y las "predictions"
   de cada partido. null = sin predicción. Todo lo demás se calcula.
   "iso" = código de país para la bandera (flagcdn).
   ============================================================ */

const TOTAL_PARTIDOS = 104;
const ULTIMA_ACTUALIZACION = "14 jun 2026";

const matches = [
  {
    home: { code: "MEX", name: "México", iso: "mx" },
    away: { code: "RSA", name: "Sudáfrica", iso: "za" },
    result: [2, 0],
    predictions: {
      "leandro enriquez": [2, 0], "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1],
      "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [0, 1], "Sergio Villar": null
    }
  },
  {
    home: { code: "KOR", name: "Corea", iso: "kr" },
    away: { code: "CZE", name: "Chequia", iso: "cz" },
    result: [2, 1],
    predictions: {
      "leandro enriquez": [2, 1], "Arturo Fabian Krauchuka": [2, 1], "Sergio Villar": [1, 0],
      "Ezequiel Villalba": [1, 1], "Facundo Stij": [1, 1], "José Pahr": [1, 1]
    }
  },
  {
    home: { code: "CAN", name: "Canadá", iso: "ca" },
    away: { code: "BIH", name: "Bosnia", iso: "ba" },
    result: [1, 1],
    predictions: {
      "Facundo Stij": [1, 1], "Arturo Fabian Krauchuka": [1, 1], "Ezequiel Villalba": [2, 1],
      "leandro enriquez": [0, 1], "José Pahr": [1, 0], "Sergio Villar": [1, 0]
    }
  },
  {
    home: { code: "USA", name: "Estados Unidos", iso: "us" },
    away: { code: "PAR", name: "Paraguay", iso: "py" },
    result: [4, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [1, 0], "leandro enriquez": [2, 2],
      "Arturo Fabian Krauchuka": [0, 3], "José Pahr": [0, 2], "Sergio Villar": [0, 2]
    }
  },
  {
    home: { code: "QAT", name: "Qatar", iso: "qa" },
    away: { code: "SUI", name: "Suiza", iso: "ch" },
    result: [1, 1],
    predictions: {
      "José Pahr": [1, 1], "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2],
      "Arturo Fabian Krauchuka": [1, 0], "Sergio Villar": [0, 2], "leandro enriquez": null
    }
  },
  {
    home: { code: "BRA", name: "Brasil", iso: "br" },
    away: { code: "MAR", name: "Marruecos", iso: "ma" },
    result: [1, 1],
    predictions: {
      "Facundo Stij": [1, 1], "Ezequiel Villalba": [2, 1], "Arturo Fabian Krauchuka": [0, 1],
      "José Pahr": [2, 0], "Sergio Villar": [3, 0], "leandro enriquez": null
    }
  },
  {
    home: { code: "HAI", name: "Haití", iso: "ht" },
    away: { code: "SCO", name: "Escocia", iso: "gb-sct" },
    result: [0, 1],
    predictions: {
      "Ezequiel Villalba": [0, 1], "José Pahr": [0, 1], "Facundo Stij": [1, 2],
      "leandro enriquez": [0, 2], "Sergio Villar": [0, 0], "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "AUS", name: "Australia", iso: "au" },
    away: { code: "TUR", name: "Turquía", iso: "tr" },
    result: [2, 0],
    predictions: {
      "leandro enriquez": [2, 1], "José Pahr": [1, 0], "Sergio Villar": [1, 0],
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "Arturo Fabian Krauchuka": [1, 2]
    }
  },
  {
    home: { code: "GER", name: "Alemania", iso: "de" },
    away: { code: "CUW", name: "Curazao", iso: "cw" },
    result: [7, 1],
    predictions: {
      "Ezequiel Villalba": [4, 0], "leandro enriquez": [3, 1], "José Pahr": [4, 0],
      "Sergio Villar": [4, 0], "Arturo Fabian Krauchuka": [0, 1], "Facundo Stij": null
    }
  },
  {
    home: { code: "NED", name: "Países Bajos", iso: "nl" },
    away: { code: "JPN", name: "Japón", iso: "jp" },
    result: [2, 2],
    predictions: {
      "Ezequiel Villalba": [1, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [1, 2], "José Pahr": [0, 1], "Sergio Villar": [1, 0]
    }
  },
  {
    home: { code: "CIV", name: "Costa de Marfil", iso: "ci" },
    away: { code: "ECU", name: "Ecuador", iso: "ec" },
    result: [1, 0],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [1, 1], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": null, "José Pahr": [1, 1], "Sergio Villar": [1, 2]
    }
  },
  {
    home: { code: "SWE", name: "Suecia", iso: "se" },
    away: { code: "TUN", name: "Túnez", iso: "tn" },
    result: [5, 1],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [2, 0], "leandro enriquez": [2, 1],
      "José Pahr": [1, 0], "Sergio Villar": [1, 0], "Arturo Fabian Krauchuka": [1, 1]
    }
  },
  {
    home: { code: "ESP", name: "España", iso: "es" },
    away: { code: "CPV", name: "Cabo Verde", iso: "cv" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [6, 0], "Facundo Stij": [3, 0], "leandro enriquez": [4, 0],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [2, 0], "Sergio Villar": [2, 1]
    }
  },
  {
    home: { code: "BEL", name: "Bélgica", iso: "be" },
    away: { code: "EGY", name: "Egipto", iso: "eg" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [1, 0], "José Pahr": [1, 0], "Sergio Villar": [2, 1]
    }
  },
  {
    home: { code: "KSA", name: "Arabia Saudita", iso: "sa" },
    away: { code: "URU", name: "Uruguay", iso: "uy" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": [2, 1], "José Pahr": [0, 2], "Sergio Villar": [1, 2]
    }
  },
  {
    home: { code: "IRN", name: "Irán", iso: "ir" },
    away: { code: "NZL", name: "Nueva Zelanda", iso: "nz" },
    result: [2, 2],
    predictions: {
      "Arturo Fabian Krauchuka": [1, 1], "Ezequiel Villalba": [1, 0], "Facundo Stij": [2, 0],
      "leandro enriquez": [2, 0], "José Pahr": [0, 1], "Sergio Villar": [0, 1]
    }
  },
  {
    home: { code: "FRA", name: "Francia", iso: "fr" },
    away: { code: "SEN", name: "Senegal", iso: "sn" },
    result: [3, 1],
    predictions: {
      "Facundo Stij": [3, 1], "leandro enriquez": [3, 1], "Ezequiel Villalba": [2, 1],
      "Arturo Fabian Krauchuka": [3, 0], "José Pahr": [2, 0], "Sergio Villar": [2, 0]
    }
  },
  {
    home: { code: "IRQ", name: "Irak", iso: "iq" },
    away: { code: "NOR", name: "Noruega", iso: "no" },
    result: [1, 4],
    predictions: {
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": [0, 1], "Sergio Villar": [0, 1], "José Pahr": [0, 0]
    }
  },
  {
    home: { code: "ARG", name: "Argentina", iso: "ar" },
    away: { code: "ALG", name: "Argelia", iso: "dz" },
    result: [3, 0],
    predictions: {
      "leandro enriquez": [3, 0], "Ezequiel Villalba": [3, 1], "Facundo Stij": [2, 0],
      "Arturo Fabian Krauchuka": [4, 0], "José Pahr": [2, 0], "Sergio Villar": [3, 1]
    }
  },
  {
    home: { code: "AUT", name: "Austria", iso: "at" },
    away: { code: "JOR", name: "Jordania", iso: "jo" },
    result: [3, 1],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [3, 0], "José Pahr": [1, 0],
      "Arturo Fabian Krauchuka": [0, 1], "Sergio Villar": [0, 0], "leandro enriquez": null
    }
  },
  {
    home: { code: "POR", name: "Portugal", iso: "pt" },
    away: { code: "COD", name: "RD Congo", iso: "cd" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [5, 0], "Facundo Stij": [2, 0], "leandro enriquez": [3, 1],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [2, 0], "Sergio Villar": [3, 1]
    }
  },
  {
    home: { code: "ENG", name: "Inglaterra", iso: "gb-eng" },
    away: { code: "CRO", name: "Croacia", iso: "hr" },
    result: [4, 2],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [1, 0],
      "José Pahr": [1, 0], "Arturo Fabian Krauchuka": [1, 2], "Sergio Villar": [2, 2]
    }
  },
  {
    home: { code: "GHA", name: "Ghana", iso: "gh" },
    away: { code: "PAN", name: "Panamá", iso: "pa" },
    result: [1, 0],
    predictions: {
      "Arturo Fabian Krauchuka": [2, 0], "Ezequiel Villalba": [1, 1], "Facundo Stij": [1, 2],
      "leandro enriquez": [1, 2], "José Pahr": [1, 2], "Sergio Villar": [0, 1]
    }
  },
  {
    home: { code: "UZB", name: "Uzbekistán", iso: "uz" },
    away: { code: "COL", name: "Colombia", iso: "co" },
    result: [1, 3],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [0, 2], "leandro enriquez": [0, 1],
      "Arturo Fabian Krauchuka": [1, 2], "José Pahr": [0, 1], "Sergio Villar": [1, 2]
    }
  },
  {
    home: { code: "CZE", name: "Chequia", iso: "cz" },
    away: { code: "RSA", name: "Sudáfrica", iso: "za" },
    result: [1, 1],
    predictions: {
      "Sergio Villar": [1, 1], "Ezequiel Villalba": [1, 0], "Facundo Stij": [2, 1],
      "Arturo Fabian Krauchuka": [2, 0], "leandro enriquez": null, "José Pahr": null
    }
  },
  {
    home: { code: "SUI", name: "Suiza", iso: "ch" },
    away: { code: "BIH", name: "Bosnia", iso: "ba" },
    result: [4, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 0], "leandro enriquez": [1, 0],
      "José Pahr": [1, 0], "Sergio Villar": [2, 1], "Arturo Fabian Krauchuka": [1, 1]
    }
  },
  {
    home: { code: "CAN", name: "Canadá", iso: "ca" },
    away: { code: "QAT", name: "Qatar", iso: "qa" },
    result: [6, 0],
    predictions: {
      "Facundo Stij": [2, 1], "leandro enriquez": [2, 1], "Arturo Fabian Krauchuka": [2, 0],
      "José Pahr": [2, 1], "Sergio Villar": [2, 0], "Ezequiel Villalba": null
    }
  },
  {
    home: { code: "MEX", name: "México", iso: "mx" },
    away: { code: "KOR", name: "Corea", iso: "kr" },
    result: [1, 0],
    predictions: {
      "José Pahr": [1, 0], "leandro enriquez": [3, 2], "Ezequiel Villalba": [2, 2],
      "Facundo Stij": [1, 1], "Arturo Fabian Krauchuka": [1, 1], "Sergio Villar": [0, 3]
    }
  },
  {
    home: { code: "USA", name: "Estados Unidos", iso: "us" },
    away: { code: "AUS", name: "Australia", iso: "au" },
    result: [2, 0],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Arturo Fabian Krauchuka": [2, 0], "Sergio Villar": [2, 0],
      "Facundo Stij": [2, 1], "leandro enriquez": [3, 1], "José Pahr": [1, 0]
    }
  },
  {
    home: { code: "SCO", name: "Escocia", iso: "gb-sct" },
    away: { code: "MAR", name: "Marruecos", iso: "ma" },
    result: [0, 1],
    predictions: {
      "Facundo Stij": [0, 1], "Arturo Fabian Krauchuka": [0, 1], "Ezequiel Villalba": [1, 3],
      "Sergio Villar": [1, 2], "leandro enriquez": [2, 1], "José Pahr": [2, 1]
    }
  },
  {
    home: { code: "BRA", name: "Brasil", iso: "br" },
    away: { code: "HAI", name: "Haití", iso: "ht" },
    result: [3, 0],
    predictions: {
      "Ezequiel Villalba": [3, 0], "Facundo Stij": [3, 0], "leandro enriquez": [3, 0],
      "José Pahr": [3, 0], "Arturo Fabian Krauchuka": [3, 1], "Sergio Villar": [1, 1]
    }
  },
  {
    home: { code: "TUR", name: "Turquía", iso: "tr" },
    away: { code: "PAR", name: "Paraguay", iso: "py" },
    result: [0, 1],
    predictions: {
      "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [0, 2], "Sergio Villar": [1, 2],
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 0]
    }
  },
  {
    home: { code: "NED", name: "Países Bajos", iso: "nl" },
    away: { code: "SWE", name: "Suecia", iso: "se" },
    result: [5, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "leandro enriquez": [3, 1], "Arturo Fabian Krauchuka": [2, 0],
      "José Pahr": [2, 0], "Facundo Stij": null, "Sergio Villar": null
    }
  },
  {
    home: { code: "GER", name: "Alemania", iso: "de" },
    away: { code: "CIV", name: "Costa de Marfil", iso: "ci" },
    result: [2, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [3, 1], "leandro enriquez": [4, 1],
      "Arturo Fabian Krauchuka": [3, 1], "José Pahr": [2, 0], "Sergio Villar": [5, 0]
    }
  },
  {
    home: { code: "ECU", name: "Ecuador", iso: "ec" },
    away: { code: "CUW", name: "Curazao", iso: "cw" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [3, 0], "Facundo Stij": [3, 0], "leandro enriquez": [2, 0],
      "Arturo Fabian Krauchuka": [4, 0], "José Pahr": [1, 0], "Sergio Villar": [3, 1]
    }
  },
  {
    home: { code: "TUN", name: "Túnez", iso: "tn" },
    away: { code: "JPN", name: "Japón", iso: "jp" },
    result: [0, 4],
    predictions: {
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "leandro enriquez": [0, 2],
      "Arturo Fabian Krauchuka": [0, 2], "Sergio Villar": [1, 3], "José Pahr": [1, 0]
    }
  },
  {
    home: { code: "ESP", name: "España", iso: "es" },
    away: { code: "KSA", name: "Arabia Saudita", iso: "sa" },
    result: [4, 0],
    predictions: {
      "Facundo Stij": [2, 0], "Arturo Fabian Krauchuka": [2, 1], "José Pahr": [2, 0],
      "leandro enriquez": [1, 2], "Ezequiel Villalba": null, "Sergio Villar": null
    }
  },
  {
    home: { code: "BEL", name: "Bélgica", iso: "be" },
    away: { code: "IRN", name: "Irán", iso: "ir" },
    result: [0, 0],
    predictions: {
      "Sergio Villar": [1, 1], "Ezequiel Villalba": [2, 0], "Facundo Stij": [2, 1],
      "leandro enriquez": [2, 1], "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [1, 0]
    }
  },
  {
    home: { code: "URU", name: "Uruguay", iso: "uy" },
    away: { code: "CPV", name: "Cabo Verde", iso: "cv" },
    result: [2, 2],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [1, 0], "Arturo Fabian Krauchuka": [3, 0],
      "José Pahr": [1, 0], "Sergio Villar": [2, 1], "leandro enriquez": null
    }
  },
  {
    home: { code: "NZL", name: "Nueva Zelanda", iso: "nz" },
    away: { code: "EGY", name: "Egipto", iso: "eg" },
    result: [1, 3],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [1, 2], "Sergio Villar": [2, 3],
      "leandro enriquez": [3, 1], "Arturo Fabian Krauchuka": [2, 1], "José Pahr": [2, 0]
    }
  },
  {
    home: { code: "ARG", name: "Argentina", iso: "ar" },
    away: { code: "AUT", name: "Austria", iso: "at" },
    result: [2, 0],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [2, 1], "leandro enriquez": [3, 1],
      "Arturo Fabian Krauchuka": [3, 2], "José Pahr": [3, 0], "Sergio Villar": [3, 1]
    }
  },
  {
    home: { code: "FRA", name: "Francia", iso: "fr" },
    away: { code: "IRQ", name: "Irak", iso: "iq" },
    result: [3, 0],
    predictions: {
      "Ezequiel Villalba": [4, 0], "leandro enriquez": [2, 0], "Arturo Fabian Krauchuka": [2, 1],
      "José Pahr": [1, 0], "Sergio Villar": [4, 0], "Facundo Stij": null
    }
  },
  {
    home: { code: "NOR", name: "Noruega", iso: "no" },
    away: { code: "SEN", name: "Senegal", iso: "sn" },
    result: [3, 2],
    predictions: {
      "Facundo Stij": [2, 1], "leandro enriquez": [2, 0], "Sergio Villar": [2, 1],
      "Ezequiel Villalba": [2, 2], "José Pahr": [0, 1], "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "JOR", name: "Jordania", iso: "jo" },
    away: { code: "ALG", name: "Argelia", iso: "dz" },
    result: [1, 2],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Arturo Fabian Krauchuka": [1, 2], "Facundo Stij": [0, 2],
      "Sergio Villar": [0, 1], "leandro enriquez": [1, 1], "José Pahr": [1, 1]
    }
  },
  {
    home: { code: "POR", name: "Portugal", iso: "pt" },
    away: { code: "UZB", name: "Uzbekistán", iso: "uz" },
    result: [5, 0],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [2, 0], "Arturo Fabian Krauchuka": [2, 0],
      "José Pahr": [2, 0], "Sergio Villar": [3, 1], "leandro enriquez": null
    }
  },
  {
    home: { code: "ENG", name: "Inglaterra", iso: "gb-eng" },
    away: { code: "GHA", name: "Ghana", iso: "gh" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [3, 0], "leandro enriquez": [4, 0],
      "Arturo Fabian Krauchuka": [3, 0], "José Pahr": [2, 0], "Sergio Villar": [2, 0]
    }
  },
  {
    home: { code: "PAN", name: "Panamá", iso: "pa" },
    away: { code: "CRO", name: "Croacia", iso: "hr" },
    result: [0, 1],
    predictions: {
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 3],
      "Arturo Fabian Krauchuka": [0, 2], "Sergio Villar": [0, 2], "José Pahr": [1, 1]
    }
  },
  {
    home: { code: "COL", name: "Colombia", iso: "co" },
    away: { code: "COD", name: "RD Congo", iso: "cd" },
    result: [1, 0],
    predictions: {
      "José Pahr": [1, 0], "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1],
      "leandro enriquez": [2, 1], "Arturo Fabian Krauchuka": [3, 0], "Sergio Villar": [2, 1]
    }
  },
  {
    home: { code: "SUI", name: "Suiza", iso: "ch" },
    away: { code: "CAN", name: "Canadá", iso: "ca" },
    result: [2, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Sergio Villar": [2, 1], "Arturo Fabian Krauchuka": [1, 2], "José Pahr": null
    }
  },
  {
    home: { code: "BIH", name: "Bosnia", iso: "ba" },
    away: { code: "QAT", name: "Qatar", iso: "qa" },
    result: [3, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 0], "leandro enriquez": [1, 0],
      "Arturo Fabian Krauchuka": [2, 0], "Sergio Villar": [1, 1], "José Pahr": null
    }
  },
  {
    home: { code: "SCO", name: "Escocia", iso: "gb-sct" },
    away: { code: "BRA", name: "Brasil", iso: "br" },
    result: [0, 3],
    predictions: {
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 3],
      "Arturo Fabian Krauchuka": [1, 3], "José Pahr": [1, 2], "Sergio Villar": [1, 2]
    }
  },
  {
    home: { code: "MAR", name: "Marruecos", iso: "ma" },
    away: { code: "HAI", name: "Haití", iso: "ht" },
    result: [4, 2],
    predictions: {
      "Ezequiel Villalba": [2, 0], "Facundo Stij": [3, 0], "leandro enriquez": [4, 0],
      "Arturo Fabian Krauchuka": [3, 0], "Sergio Villar": [1, 0], "José Pahr": [0, 0]
    }
  },
  {
    home: { code: "RSA", name: "Sudáfrica", iso: "za" },
    away: { code: "KOR", name: "Corea", iso: "kr" },
    result: [1, 0],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [0, 2], "leandro enriquez": [1, 2],
      "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [0, 0], "Sergio Villar": [0, 1]
    }
  },
  {
    home: { code: "CZE", name: "Chequia", iso: "cz" },
    away: { code: "MEX", name: "México", iso: "mx" },
    result: [0, 3],
    predictions: {
      "leandro enriquez": [0, 3], "Facundo Stij": [0, 2], "Sergio Villar": [0, 1],
      "Ezequiel Villalba": [1, 1], "Arturo Fabian Krauchuka": [2, 2], "José Pahr": [2, 0]
    }
  },
  {
    home: { code: "CUW", name: "Curazao", iso: "cw" },
    away: { code: "CIV", name: "Costa de Marfil", iso: "ci" },
    result: [0, 2],
    predictions: {
      "Facundo Stij": [0, 2], "Ezequiel Villalba": [1, 2], "leandro enriquez": [1, 2],
      "José Pahr": [0, 1], "Sergio Villar": [0, 1], "Arturo Fabian Krauchuka": [2, 0]
    }
  },
  {
    home: { code: "ECU", name: "Ecuador", iso: "ec" },
    away: { code: "GER", name: "Alemania", iso: "de" },
    result: [2, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Arturo Fabian Krauchuka": [3, 2], "Facundo Stij": [0, 2],
      "leandro enriquez": [1, 3], "José Pahr": [0, 2], "Sergio Villar": [1, 3]
    }
  },
  {
    home: { code: "JPN", name: "Japón", iso: "jp" },
    away: { code: "SWE", name: "Suecia", iso: "se" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "Facundo Stij": [2, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [0, 1], "Sergio Villar": [2, 0]
    }
  },
  {
    home: { code: "TUN", name: "Túnez", iso: "tn" },
    away: { code: "NED", name: "Países Bajos", iso: "nl" },
    result: [1, 3],
    predictions: {
      "Ezequiel Villalba": [0, 3], "Facundo Stij": [0, 3], "leandro enriquez": [0, 3],
      "Arturo Fabian Krauchuka": [0, 3], "José Pahr": [0, 2], "Sergio Villar": [0, 2]
    }
  },
  {
    home: { code: "PAR", name: "Paraguay", iso: "py" },
    away: { code: "AUS", name: "Australia", iso: "au" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [1, 1], "Facundo Stij": [0, 1], "leandro enriquez": [2, 1],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [2, 1], "Sergio Villar": [1, 0]
    }
  },
  {
    home: { code: "TUR", name: "Turquía", iso: "tr" },
    away: { code: "USA", name: "Estados Unidos", iso: "us" },
    result: [3, 2],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [0, 2], "leandro enriquez": [0, 3],
      "Arturo Fabian Krauchuka": [0, 2], "José Pahr": [0, 1], "Sergio Villar": [1, 3]
    }
  },
  {
    home: { code: "SEN", name: "Senegal", iso: "sn" },
    away: { code: "IRQ", name: "Irak", iso: "iq" },
    result: [5, 0],
    predictions: {
      "Ezequiel Villalba": [3, 1], "Facundo Stij": [3, 0], "leandro enriquez": [1, 0],
      "Arturo Fabian Krauchuka": [2, 0], "José Pahr": [1, 1], "Sergio Villar": [1, 1]
    }
  },
  {
    home: { code: "NOR", name: "Noruega", iso: "no" },
    away: { code: "FRA", name: "Francia", iso: "fr" },
    result: [1, 4],
    predictions: {
      "Ezequiel Villalba": [1, 3], "Facundo Stij": [1, 2], "leandro enriquez": [1, 3],
      "José Pahr": [0, 2], "Sergio Villar": [1, 2], "Arturo Fabian Krauchuka": [1, 1]
    }
  },
  {
    home: { code: "CPV", name: "Cabo Verde", iso: "cv" },
    away: { code: "KSA", name: "Arabia Saudita", iso: "sa" },
    result: [0, 0],
    predictions: {
      "Ezequiel Villalba": [0, 2], "Facundo Stij": [1, 0], "leandro enriquez": [1, 0],
      "José Pahr": [0, 1], "Sergio Villar": [2, 1], "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "URU", name: "Uruguay", iso: "uy" },
    away: { code: "ESP", name: "España", iso: "es" },
    result: [0, 1],
    predictions: {
      "Ezequiel Villalba": [1, 2], "Facundo Stij": [1, 2], "leandro enriquez": [1, 3],
      "Sergio Villar": [1, 3], "José Pahr": [1, 0], "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "NZL", name: "Nueva Zelanda", iso: "nz" },
    away: { code: "BEL", name: "Bélgica", iso: "be" },
    result: [1, 5],
    predictions: {
      "Ezequiel Villalba": [0, 1], "leandro enriquez": [1, 2], "Sergio Villar": [0, 2],
      "José Pahr": [1, 0], "Facundo Stij": null, "Arturo Fabian Krauchuka": null
    }
  },
  {
    home: { code: "EGY", name: "Egipto", iso: "eg" },
    away: { code: "IRN", name: "Irán", iso: "ir" },
    result: [1, 1],
    predictions: {
      "Ezequiel Villalba": [2, 1], "leandro enriquez": [1, 0], "José Pahr": [0, 1],
      "Sergio Villar": [2, 1], "Facundo Stij": null, "Arturo Fabian Krauchuka": null
    }
  }
];

/* Participantes y su color en el gráfico (todas las líneas, mismo trazo) */
const PARTICIPANTS = [
  { name: "leandro enriquez",         color: "#d92d20" },
  { name: "Facundo Stij",             color: "#2f9e54" },
  { name: "José Pahr",                color: "#1f7fe5" },
  { name: "Arturo Fabian Krauchuka",  color: "#9b7b6b" },
  { name: "Ezequiel Villalba",        color: "#a64bd6" },
  { name: "Sergio Villar",            color: "#e08a1e" }
];

/* Nombre corto para mostrar en toda la web (la clave interna sigue siendo el nombre completo) */
const NICK = {
  "leandro enriquez": "Leandro",
  "Facundo Stij": "Facundo",
  "José Pahr": "José",
  "Arturo Fabian Krauchuka": "Arturo",
  "Ezequiel Villalba": "Ezequiel",
  "Sergio Villar": "Sergio"
};
function nick(name) { return NICK[name] || name; }

/* Región/continente de cada país (por código). Al agregar países nuevos,
   sumá su código acá para que entren en el gráfico de regiones. */
const REGIONS = {
  // América
  MEX: "América", USA: "América", CAN: "América", PAR: "América", BRA: "América",
  HAI: "América", CUW: "América", ECU: "América", URU: "América", ARG: "América",
  PAN: "América", COL: "América",
  // Europa
  CZE: "Europa", BIH: "Europa", SUI: "Europa", SCO: "Europa", TUR: "Europa",
  GER: "Europa", NED: "Europa", SWE: "Europa", ESP: "Europa", BEL: "Europa",
  FRA: "Europa", NOR: "Europa", AUT: "Europa", POR: "Europa", ENG: "Europa", CRO: "Europa",
  // África
  RSA: "África", MAR: "África", CIV: "África", TUN: "África", CPV: "África",
  EGY: "África", SEN: "África", ALG: "África", COD: "África", GHA: "África",
  // Asia
  KOR: "Asia", JPN: "Asia", UZB: "Asia",
  // Medio Oriente
  QAT: "Medio Oriente", KSA: "Medio Oriente", IRN: "Medio Oriente", IRQ: "Medio Oriente", JOR: "Medio Oriente",
  // Oceanía
  AUS: "Oceanía", NZL: "Oceanía"
};

/* Orden y color de cada región en el gráfico de torta */
const REGION_META = [
  { key: "América",       color: "#3b82f6" },
  { key: "Europa",        color: "#ef4444" },
  { key: "África",        color: "#f59e0b" },
  { key: "Asia",          color: "#8b5cf6" },
  { key: "Medio Oriente", color: "#a3724f" },
  { key: "Oceanía",       color: "#10b981" },
  { key: "Empates",       color: "#9ca3af" }
];

function regionOf(team) { return REGIONS[team.code] || "Otros"; }

/* Religión predominante (aproximada, histórica/cultural) de cada país.
   Solo se usa para la curiosidad "Cristianismo vs Islam". "Otro" = no aplica. */
const RELIGION = {
  // Cristianismo
  MEX: "Cristianismo", RSA: "Cristianismo", CZE: "Cristianismo", CAN: "Cristianismo",
  USA: "Cristianismo", PAR: "Cristianismo", SUI: "Cristianismo", BRA: "Cristianismo",
  HAI: "Cristianismo", SCO: "Cristianismo", AUS: "Cristianismo", GER: "Cristianismo",
  CUW: "Cristianismo", NED: "Cristianismo", ECU: "Cristianismo", SWE: "Cristianismo",
  ESP: "Cristianismo", CPV: "Cristianismo", BEL: "Cristianismo", URU: "Cristianismo",
  NZL: "Cristianismo", FRA: "Cristianismo", NOR: "Cristianismo", ARG: "Cristianismo",
  AUT: "Cristianismo", POR: "Cristianismo", COD: "Cristianismo",
  ENG: "Cristianismo", CRO: "Cristianismo", GHA: "Cristianismo", PAN: "Cristianismo", COL: "Cristianismo",
  // Islam
  BIH: "Islam", QAT: "Islam", MAR: "Islam", TUR: "Islam", CIV: "Islam", TUN: "Islam",
  EGY: "Islam", KSA: "Islam", IRN: "Islam", SEN: "Islam", IRQ: "Islam", ALG: "Islam", JOR: "Islam",
  UZB: "Islam",
  // Otro (ni mayoría cristiana ni musulmana)
  KOR: "Otro", JPN: "Otro"
};
function religionOf(team) { return RELIGION[team.code] || "Otro"; }

/* ============================================================
   LÓGICA
   ============================================================ */
function outcome(a, b) { return a > b ? "H" : (a < b ? "A" : "D"); }
function pointsFor(pred, result) {
  if (!pred || !result) return 0;
  if (pred[0] === result[0] && pred[1] === result[1]) return 3;
  if (outcome(pred[0], pred[1]) === outcome(result[0], result[1])) return 1;
  return 0;
}
function flagSrc(iso, w) { return `https://flagcdn.com/${w}/${iso}.png`; }

/* Path con interpolación monótona (Fritsch-Carlson):
   curva suave pero sin overshoot — nunca sube ni baja de los valores reales. */
function smoothPath(pts) {
  const n = pts.length;
  if (n < 2) return n ? `M ${pts[0][0]} ${pts[0][1]}` : "";

  const xs = pts.map(p => p[0]);
  const ys = pts.map(p => p[1]);
  const dx = [], dy = [], slope = [];
  for (let i = 0; i < n - 1; i++) {
    dx[i] = xs[i + 1] - xs[i];
    dy[i] = ys[i + 1] - ys[i];
    slope[i] = dy[i] / dx[i];
  }

  // tangentes
  const m = new Array(n);
  m[0] = slope[0];
  m[n - 1] = slope[n - 2];
  for (let i = 1; i < n - 1; i++) {
    m[i] = (slope[i - 1] * slope[i] <= 0) ? 0 : (slope[i - 1] + slope[i]) / 2;
  }
  // ajuste para preservar monotonía
  for (let i = 0; i < n - 1; i++) {
    if (slope[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / slope[i], b = m[i + 1] / slope[i];
    const s = a * a + b * b;
    if (s > 9) {
      const t = 3 / Math.sqrt(s);
      m[i] = t * a * slope[i];
      m[i + 1] = t * b * slope[i];
    }
  }

  let d = `M ${xs[0].toFixed(1)} ${ys[0].toFixed(1)}`;
  for (let i = 0; i < n - 1; i++) {
    const c1x = xs[i] + dx[i] / 3, c1y = ys[i] + m[i] * dx[i] / 3;
    const c2x = xs[i + 1] - dx[i] / 3, c2y = ys[i + 1] - m[i + 1] * dx[i] / 3;
    d += ` C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${xs[i + 1].toFixed(1)} ${ys[i + 1].toFixed(1)}`;
  }
  return d;
}

/* Estado de visibilidad por participante */
const visible = {};
PARTICIPANTS.forEach(p => visible[p.name] = true);

/* ---------- Progreso del torneo (header) ---------- */
function renderProgress() {
  const played = matches.filter(m => m.result !== null).length;
  document.getElementById("progressCount").textContent = played;
  document.getElementById("progressFill").style.width = (played / TOTAL_PARTIDOS * 100) + "%";
}

/* ---------- Gráfico de evolución ---------- */
const CHART_WINDOW = 8;   // partidos visibles a la vez
let chartOffset = null;   // desde qué partido arranca la ventana (null = últimos)
let curYMin = null, curYMax = null;   // escala vertical mostrada (se anima hacia el objetivo)
let chartRaf = null;
function scheduleChart() {
  if (chartRaf) return;
  chartRaf = requestAnimationFrame(() => { chartRaf = null; renderChart(); });
}

function renderChart() {
  const played = matches.filter(m => m.result !== null);
  const n = played.length;
  const win = Math.min(n, CHART_WINDOW);
  const maxOffset = Math.max(0, n - win);
  // offset fraccionado para un deslizamiento continuo (por defecto, los últimos)
  if (chartOffset === null || chartOffset > maxOffset) chartOffset = maxOffset;
  const off = Math.max(0, Math.min(chartOffset, maxOffset));

  const W = 1000, H = 560, padL = 46, padR = 24, padT = 24, padB = 46;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const step = win > 1 ? plotW / (win - 1) : 0;

  // serie acumulada sobre TODOS los partidos jugados (acumulado correcto)
  const series = PARTICIPANTS.map(p => {
    let acc = 0;
    const pts = played.map(m => { acc += pointsFor(m.predictions[p.name], m.result); return acc; });
    return { ...p, pts, total: acc };
  });

  const xFor = j => padL + (j - off) * step;          // posición global desplazada por el offset
  const inView = x => x >= padL - 0.5 && x <= W - padR + 0.5;

  // --- Auto-escala vertical: el eje Y se ajusta al rango visible en la ventana
  //     (solo cuenta los participantes prendidos), así las líneas siempre se separan ---
  function niceStep(raw) {
    if (raw <= 0) return 1;
    const p = Math.pow(10, Math.floor(Math.log10(raw)));
    const f = raw / p;
    const nf = f <= 1 ? 1 : f <= 2 ? 2 : f <= 5 ? 5 : 10;
    return nf * p;
  }
  // como el acumulado solo crece, el mínimo visible está en el borde izquierdo de
  // la ventana y el máximo en el derecho → interpolamos esos bordes (continuo, sin saltos)
  const valueAt = (pts, idx) => {
    const i0 = Math.floor(idx), i1 = Math.min(i0 + 1, pts.length - 1);
    return pts[i0] + (pts[i1] - pts[i0]) * (idx - i0);
  };
  const leftIdx = off, rightIdx = Math.min(off + win - 1, n - 1);
  let dataMin = Infinity, dataMax = -Infinity;
  series.forEach(s => {
    if (!visible[s.name]) return;
    dataMin = Math.min(dataMin, valueAt(s.pts, leftIdx));
    dataMax = Math.max(dataMax, valueAt(s.pts, rightIdx));
  });
  if (!isFinite(dataMin)) { dataMin = 0; dataMax = 10; }   // nada visible
  if (dataMax - dataMin < 1) { const c = (dataMin + dataMax) / 2; dataMin = c - 1; dataMax = c + 1; }  // rango plano
  // objetivo CONTINUO (con un poco de aire), sin redondear → sin saltitos de escala
  const pad = Math.max(0.5, (dataMax - dataMin) * 0.10);
  const tYMin = Math.max(0, dataMin - pad);
  const tYMax = dataMax + pad;

  // animación suave: la escala mostrada (cur) se desliza hacia el objetivo
  if (curYMin === null) { curYMin = tYMin; curYMax = tYMax; }
  else {
    const E = 0.2;
    curYMin += (tYMin - curYMin) * E;
    curYMax += (tYMax - curYMax) * E;
    if (Math.abs(curYMin - tYMin) < 0.02 && Math.abs(curYMax - tYMax) < 0.02) { curYMin = tYMin; curYMax = tYMax; }
  }
  const settled = (curYMin === tYMin && curYMax === tYMax);
  const yFor = v => padT + plotH - ((v - curYMin) / (curYMax - curYMin)) * plotH;

  let svg = "";
  // grilla y eje Y: marcas "redondas" dentro del rango mostrado, con posición continua
  const gStep = Math.max(1, niceStep((curYMax - curYMin) / 5));
  for (let v = Math.ceil(curYMin / gStep) * gStep; v <= curYMax + 1e-9; v += gStep) {
    const y = yFor(v);
    if (y < padT - 0.5 || y > padT + plotH + 0.5) continue;
    svg += `<line class="gridline" x1="${padL}" y1="${y.toFixed(1)}" x2="${W - padR}" y2="${y.toFixed(1)}"/>`;
    svg += `<text x="${padL - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end">${v}</text>`;
  }
  svg += `<line class="axis" x1="${padL}" y1="${padT}" x2="${padL}" y2="${padT + plotH}"/>`;

  // etiquetas X (solo las que entran en la ventana)
  played.forEach((m, j) => {
    const x = xFor(j);
    if (inView(x)) svg += `<text x="${x.toFixed(1)}" y="${H - padB + 26}" text-anchor="middle" font-size="12">${m.home.code}-${m.away.code}</text>`;
  });

  // recorte del área de ploteo para que las líneas entren/salgan suaves
  svg += `<defs><clipPath id="plotClip"><rect x="${padL}" y="${padT - 8}" width="${plotW}" height="${plotH + 16}"/></clipPath></defs>`;
  svg += `<g clip-path="url(#plotClip)">`;
  series.forEach(s => {
    if (!visible[s.name]) return;
    const coords = s.pts.map((v, j) => [xFor(j), yFor(v)]);
    svg += `<path d="${smoothPath(coords)}" fill="none" stroke="${s.color}" stroke-width="3"
            stroke-linejoin="round" stroke-linecap="round"/>`;
  });
  series.forEach(s => {
    if (!visible[s.name]) return;
    s.pts.forEach((v, j) => {
      const x = xFor(j);
      if (!inView(x)) return;
      svg += `<circle cx="${x.toFixed(1)}" cy="${yFor(v).toFixed(1)}" r="5" fill="${s.color}">
              <title>${nick(s.name)} · ${played[j].home.code}-${played[j].away.code}: ${v} pts</title></circle>`;
    });
  });
  svg += `</g>`;
  document.getElementById("chart").innerHTML = svg;

  // slider: solo si hay más partidos que la ventana
  const slider = document.getElementById("chartSlider");
  if (n > CHART_WINDOW) {
    slider.style.display = "";
    const range = document.getElementById("chartRange");
    range.max = maxOffset;
    range.value = off;
    const start = Math.min(Math.round(off) + 1, n);
    const end = Math.min(Math.round(off) + win, n);
    document.getElementById("chartRangeLabel").textContent = `Partidos ${start}–${end} de ${n}`;
  } else {
    slider.style.display = "none";
  }

  // seguir animando hasta que la escala llegue al objetivo
  if (!settled) scheduleChart();
}

/* ---------- Leyenda con toggles ---------- */
function renderLegend() {
  const el = document.getElementById("legend");
  el.innerHTML = PARTICIPANTS.map(p => `
    <span class="legend-chip ${visible[p.name] ? "" : "off"}" data-name="${p.name}">
      <span class="dot" style="background:${p.color}"></span>${nick(p.name)}
    </span>
  `).join("");
  el.querySelectorAll(".legend-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const name = chip.dataset.name;
      visible[name] = !visible[name];
      chip.classList.toggle("off", !visible[name]);
      renderChart();
    });
  });
}

/* ---------- Tabla de posiciones ---------- */
/* Posiciones compartidas por tabla y footer.
   Desempate: 1) puntos  2) más plenos  3) más aciertos de ganador.
   Si todo es igual, comparten la misma posición (empate real). */
function computeStandings() {
  const totals = PARTICIPANTS.map(p => {
    let pts = 0, full = 0, winner = 0, miss = 0;
    matches.forEach(m => {
      if (!m.result) return;
      const pred = m.predictions[p.name];
      if (pred === undefined) return;
      const got = pointsFor(pred, m.result);
      pts += got;
      if (got === 3) full++;
      else if (got === 1) winner++;
      else miss++;
    });
    return { name: p.name, pts, full, winner, miss };
  });
  totals.sort((a, b) =>
    b.pts - a.pts || b.full - a.full || b.winner - a.winner || a.name.localeCompare(b.name)
  );
  totals.forEach((t, i) => {
    const prev = totals[i - 1];
    const tie = prev && t.pts === prev.pts && t.full === prev.full && t.winner === prev.winner;
    t.rank = tie ? prev.rank : i + 1;
  });
  return totals;
}

function renderLeaderboard() {
  const totals = computeStandings();
  const medal = { 1: "gold", 2: "silver", 3: "bronze" };
  document.getElementById("leaderboard").innerHTML = totals.map(t => `
    <div class="lb-row ${medal[t.rank] || ""}">
      <div class="lb-rank">${t.rank}</div>
      <div class="lb-name">${nick(t.name)}</div>
      <div class="lb-stats">
        <div class="stat"><span class="stat-num c-full">${t.full}</span><span class="stat-lbl">Pleno</span></div>
        <div class="stat"><span class="stat-num c-win">${t.winner}</span><span class="stat-lbl">Ganador</span></div>
        <div class="stat"><span class="stat-num c-miss">${t.miss}</span><span class="stat-lbl">Sin acertar</span></div>
      </div>
      <div class="lb-points">${t.pts}<span>pts</span></div>
    </div>
  `).join("");
}

/* ---------- Footer con datos ---------- */
function renderFooter() {
  const played = matches.filter(m => m.result !== null);

  // mismas posiciones que la tabla
  const totals = computeStandings();
  const leaders = totals.filter(t => t.rank === 1);
  const top = leaders[0];
  const totalPlenos = totals.reduce((s, t) => s + t.full, 0);
  const totalPuntos = totals.reduce((s, t) => s + t.pts, 0);

  // goles totales convertidos en los partidos jugados
  const goles = played.reduce((s, m) => s + m.result[0] + m.result[1], 0);

  const leaderCard = leaders.length > 1
    ? `<div class="foot-card">
        <div class="fc-lbl">Líderes (empate)</div>
        <div class="fc-val">${leaders.map(l => nick(l.name)).join(" · ")}</div>
        <div class="fc-sub">${top.pts} pts · ${top.full} plenos</div>
      </div>`
    : `<div class="foot-card">
        <div class="fc-lbl">Líder</div>
        <div class="fc-val">${nick(top.name)}</div>
        <div class="fc-sub">${top.pts} pts · ${top.full} plenos</div>
      </div>`;

  document.getElementById("footer").innerHTML = `
    <div class="foot-grid">
      ${leaderCard}
      <div class="foot-card">
        <div class="fc-lbl">Partidos jugados</div>
        <div class="fc-val">${played.length} / ${TOTAL_PARTIDOS}</div>
        <div class="fc-sub">${(played.length / TOTAL_PARTIDOS * 100).toFixed(0)}% del torneo</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Plenos del grupo</div>
        <div class="fc-val">${totalPlenos}</div>
        <div class="fc-sub">resultados exactos</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Puntos repartidos</div>
        <div class="fc-val">${totalPuntos}</div>
        <div class="fc-sub">entre todos</div>
      </div>
      <div class="foot-card">
        <div class="fc-lbl">Goles convertidos</div>
        <div class="fc-val">${goles}</div>
        <div class="fc-sub">en ${played.length} partidos</div>
      </div>
    </div>
    <div class="foot-note">
      Prode Mundial · 3 pts resultado exacto · 1 pt acertar ganador · 0 el resto<br>
      Actualizado al ${ULTIMA_ACTUALIZACION}
    </div>`;
}

/* ---------- Donut: partidos ganados por región ---------- */
function renderRegions() {
  const played = matches.filter(m => m.result !== null);
  const total = played.length;
  const card = document.getElementById("regionCard");

  const counts = {};
  REGION_META.forEach(r => counts[r.key] = 0);
  played.forEach(m => {
    const [h, a] = m.result;
    if (h === a) { counts["Empates"]++; return; }
    const winner = h > a ? m.home : m.away;
    const key = regionOf(winner);
    counts[key] = (counts[key] || 0) + 1;
  });

  if (total === 0) { card.innerHTML = `<p class="muted" style="padding:18px;text-align:center;">Sin partidos jugados todavía.</p>`; return; }

  // barras horizontales, ordenadas de mayor a menor; largo = % del total jugado
  const rows = REGION_META.filter(r => counts[r.key] > 0)
    .sort((a, b) => counts[b.key] - counts[a.key]);

  card.innerHTML = rows.map(s => {
    const c = counts[s.key];
    const pct = c / total * 100;
    return `<div class="bar-row">
        <span class="bar-name">${s.key}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${pct.toFixed(1)}%;background:${s.color}"></div></div>
        <span class="bar-val">${c}</span>
        <span class="bar-pct">${pct.toFixed(0)}%</span>
      </div>`;
  }).join("");
}

/* ---------- Barras: top 10 selecciones más goleadoras ---------- */
function renderScorers() {
  const tally = {};
  matches.forEach(m => {
    if (!m.result) return;
    const [h, a] = m.result;
    [[m.home, h], [m.away, a]].forEach(([team, g]) => {
      if (!tally[team.code]) tally[team.code] = { name: team.name, iso: team.iso, goals: 0 };
      tally[team.code].goals += g;
    });
  });

  const list = Object.values(tally)
    .sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name))
    .slice(0, 10);

  const card = document.getElementById("scorersCard");
  if (!list.length) { card.innerHTML = `<p class="muted" style="padding:18px;text-align:center;">Sin goles todavía.</p>`; return; }

  const max = list[0].goals || 1;
  card.innerHTML = list.map(t => {
    const w = t.goals / max * 100;
    return `<div class="bar-row">
        <div class="bar-lead">
          <img class="bar-flag" src="${flagSrc(t.iso, "w40")}" alt="" loading="lazy" onerror="this.style.display='none'">
          <span class="bar-name">${t.name}</span>
        </div>
        <div class="bar-track"><div class="bar-fill" style="width:${w.toFixed(1)}%;background:#3b82f6"></div></div>
        <span class="bar-val">${t.goals}</span>
      </div>`;
  }).join("");
}

/* ---------- Cristianismo vs Islam (tira y afloje de victorias) ---------- */
function renderFaith() {
  const card = document.getElementById("faithCard");
  const played = matches.filter(m => m.result !== null);

  // % de partidos ganados por los equipos de cada religión (métrica justa)
  let cWins = 0, cApp = 0, iWins = 0, iApp = 0;
  played.forEach(m => {
    const [h, a] = m.result;
    [[m.home, h > a], [m.away, a > h]].forEach(([t, won]) => {
      const r = religionOf(t);
      if (r === "Cristianismo") { cApp++; if (won) cWins++; }
      else if (r === "Islam") { iApp++; if (won) iWins++; }
    });
  });

  if (cApp === 0 && iApp === 0) { card.innerHTML = `<p class="muted" style="padding:18px;text-align:center;">Todavía no hay partidos para comparar.</p>`; return; }

  const cRate = cApp ? cWins / cApp * 100 : 0;
  const iRate = iApp ? iWins / iApp * 100 : 0;
  const denom = (cRate + iRate) || 1;
  const cShare = cRate / denom * 100;
  const iShare = iRate / denom * 100;

  card.innerHTML = `
    <div class="faith-head">
      <div class="faith-side"><span class="faith-name">Cristianismo</span><span class="faith-count" style="color:#2563eb">${cRate.toFixed(0)}%</span></div>
      <div class="faith-side right"><span class="faith-name">Islam</span><span class="faith-count" style="color:#16a34a">${iRate.toFixed(0)}%</span></div>
    </div>
    <div class="faith-bar">
      <div class="faith-fill" style="width:${cShare.toFixed(1)}%;background:#2563eb"></div>
      <div class="faith-fill" style="width:${iShare.toFixed(1)}%;background:#16a34a"></div>
      <div class="faith-center"></div>
    </div>
    <p class="region-foot">
      Para que sea justo (hay más países cristianos que musulmanes), comparamos el <b>% de partidos ganados</b> por los equipos de cada religión, no el total.
      Cristianismo: ${cWins} de ${cApp} jugados · Islam: ${iWins} de ${iApp}. Los empates no cuentan como victoria. Clasificación aproximada, solo por diversión.
    </p>`;
}

/* ---------- Calidad de pronósticos (barra apilada por persona) ---------- */
function renderQuality() {
  const totals = computeStandings(); // ya ordenado por posición
  const legend = `<div class="qual-legend">
      <span><i style="background:var(--green)"></i>Pleno</span>
      <span><i style="background:var(--accent)"></i>Ganador</span>
      <span><i style="background:var(--silver)"></i>Sin acertar</span>
    </div>`;
  const rows = totals.map(t => {
    const tot = (t.full + t.winner + t.miss) || 1;
    const seg = (n, color, lbl) => n
      ? `<div class="qual-seg" style="width:${(n / tot * 100).toFixed(2)}%;background:${color}" title="${lbl}: ${n}"></div>`
      : "";
    return `<div class="qual-row">
        <span class="bar-name">${nick(t.name)}</span>
        <div class="qual-track">
          ${seg(t.full, "var(--green)", "Pleno")}
          ${seg(t.winner, "var(--accent)", "Ganador")}
          ${seg(t.miss, "var(--silver)", "Sin acertar")}
        </div>
      </div>`;
  }).join("");
  document.getElementById("qualityCard").innerHTML = legend + rows;
}

/* ---------- Quién arriesga más (promedio de goles pronosticados) ---------- */
function renderRisk() {
  const list = PARTICIPANTS.map(p => {
    let sum = 0, cnt = 0;
    matches.forEach(m => {
      if (!m.result) return;
      const pred = m.predictions[p.name];
      if (!pred) return;
      sum += pred[0] + pred[1];
      cnt++;
    });
    return { name: p.name, avg: cnt ? sum / cnt : 0 };
  }).sort((a, b) => b.avg - a.avg);

  const card = document.getElementById("riskCard");
  const max = list[0] && list[0].avg ? list[0].avg : 1;
  const rows = list.map((t, i) => {
    const w = t.avg / max * 100;
    let tag = "";
    if (i === 0) tag = `<span class="risk-tag hot">más arriesgado</span>`;
    else if (i === list.length - 1) tag = `<span class="risk-tag cold">más cauto</span>`;
    return `<div class="bar-row">
        <div class="risk-lead"><span class="risk-name">${nick(t.name)}</span>${tag}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${w.toFixed(1)}%;background:#f59e0b"></div></div>
        <span class="bar-val">${t.avg.toFixed(1)}<span class="bar-unit">goles/part.</span></span>
      </div>`;
  }).join("");
  card.innerHTML = rows +
    `<p class="region-foot">Mide los goles totales que predice cada uno por partido. Barra más larga = arriesga más goles; más corta = juega a lo seguro.</p>`;
}

/* ---------- Tarjetas de partidos ---------- */
function teamBlock(team) {
  return `<div class="team">
    <img class="flag" src="${flagSrc(team.iso, "w80")}" srcset="${flagSrc(team.iso, "w160")} 2x"
         alt="${team.name}" loading="lazy" onerror="this.style.display='none'">
    <div class="code">${team.code}</div>
  </div>`;
}

function renderMatches(filter = "") {
  const container = document.getElementById("matches");
  const q = filter.trim().toLowerCase();
  container.innerHTML = "";
  let shown = 0;

  // orden invertido: el último partido cargado aparece primero
  [...matches].reverse().forEach(m => {
    const v = m.venue;
    const haystack = [m.home.code, m.away.code, m.home.name, m.away.name,
      v ? `${v.stadium} ${v.city} ${v.country}` : ""].join(" ").toLowerCase();
    if (q && !haystack.includes(q)) return;
    shown++;

    const played = m.result !== null;
    const scoreTxt = played ? `${m.result[0]} - ${m.result[1]}` : "vs";
    const statusTxt = played ? "Finalizado" : "Próximamente";

    let rows;
    if (played) {
      rows = Object.entries(m.predictions)
        .map(([name, pred]) => ({ name, pred, pts: pointsFor(pred, m.result) }))
        .sort((a, b) => b.pts - a.pts)
        .map(({ name, pred, pts }) => {
          const predTxt = pred ? `${pred[0]} - ${pred[1]}` : "—";
          let cls = "pill" + (pts === 3 ? " win" : pts === 1 ? " partial" : "");
          return `<tr>
            <td class="name">${nick(name)}</td>
            <td class="pred ${pred ? "" : "muted"}">${predTxt}</td>
            <td class="pts"><span class="${cls}">${pts}</span></td>
          </tr>`;
        }).join("");
    } else {
      rows = `<tr><td colspan="3" class="muted" style="text-align:center;padding:22px;">Aún sin resultados</td></tr>`;
    }

    container.insertAdjacentHTML("beforeend", `
      <div class="match">
        <div class="match-header">
          ${teamBlock(m.home)}
          <div class="score ${played ? "" : "pending"}"><div class="nums">${scoreTxt}</div><div class="status">${statusTxt}</div></div>
          ${teamBlock(m.away)}
        </div>
        ${v ? `<div class="match-venue">${v.stadium} · ${v.city}, ${v.country}</div>` : ""}
        <table>
          <thead><tr><th>Participante</th><th class="center">Pronóstico</th><th class="center">Pts</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `);
  });

  document.getElementById("noResults").style.display = shown === 0 ? "block" : "none";
}

/* ---------- Navegación entre vistas ---------- */
document.querySelectorAll(".seg-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".seg-btn").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("view-" + btn.dataset.view).classList.add("active");
  });
});

/* ---------- Buscador ---------- */
document.getElementById("search").addEventListener("input", e => renderMatches(e.target.value));

/* ---------- Slider del gráfico (deslizamiento suave) ---------- */
document.getElementById("chartRange").addEventListener("input", e => {
  chartOffset = +e.target.value;
  scheduleChart();
});

/* ---------- Tema claro / oscuro ---------- */
const themeBtn = document.getElementById("themeBtn");
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try { localStorage.setItem("prode-theme", theme); } catch (e) {}
}
themeBtn.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
});
(function () {
  let saved = "light";
  try { saved = localStorage.getItem("prode-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (e) {}
  applyTheme(saved);
})();

/* ---------- Init ---------- */
renderProgress();
renderLegend();
renderChart();
renderLeaderboard();
renderScorers();
renderRegions();
renderQuality();
renderRisk();
renderMatches();
renderFooter();
