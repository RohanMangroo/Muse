import { v4 as uuidv4 } from 'uuid';

export const defaultSearch = [
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 2,
    imageid: '6c048812-3839-4336-cc8f-9735304d3beb',
    manifestid: 105933,
    origin: 'Japan',
    title:
      'Ejiri: Distant View of Shimizu Harbor in Clear Weather after Snow (Ejiri, Shimizu no minato enbo, yukibare), from the series "Fifty-three Stations of the Tokaido (Tokaido gojusan tsugi no uchi)," also known as the Gyosho Tokaido',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 3,
    imageid: '124c27c6-2889-e012-6566-006f81a390d9',
    manifestid: 10922,
    origin: 'Japan',
    title: 'Macaw on a pine branch',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 4,
    imageid: 'c047003a-949c-a581-7c5a-2c415e8cac75',
    manifestid: 10926,
    origin: 'Japan',
    title:
      'Mishima: Morning Mist (Mishima, asagiri), from the series "Fifty-three Stations of the Tokaido Road (Tokaido gojusan tsugi no uchi)," also known as the Hoeido Tokaido',
  },
  {
    artist_name: 'Utagawa Hiroshige',
    artistid: 1,
    id: 1,
    imageid: '1c574a4f-48e9-e41d-a1aa-fbf62286dd64',
    manifestid: 10444,
    origin: 'Japan',
    title:
      'Mouth of the Naka River (Nakagawa guchi no zu), from an untitled series of famous views of the Edo suburbs',
  },
];

export const featuredArtistDescriptions = {
  artistOne: {
    p1: `Michelangelo di Lodovico Buonarroti Simoni, known simply as
    Michelangelo was an Italian sculptor, painter, architect and
    poet of the High Renaissance born in the Republic of Florence,
    whose work had a major influence on the development of Western
    art, particularly in relation to the Renaissance notions of
    humanism and naturalism. He is often considered a contender for
    the title of the archetypal Renaissance man, along with his
    rival and elder contemporary, Leonardo da Vinci.`,

    p2: `Given the
    sheer volume of surviving correspondence, sketches, and
    reminiscences, Michelangelo is among best-documented artist of
    the 16th century and several scholars have described
    Michelangelo as the most accomplished artist of his era.`,
  },

  artistTwo: {
    p1: `Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France. Regarded as one of the most influential artists of the 20th century, he is known for co-founding the Cubist movement, the invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles that he helped develop and explore.`,

    p2: `Picasso demonstrated extraordinary artistic talent in his early years, painting in a naturalistic manner through his childhood and adolescence. During the first decade of the 20th century, his style changed as he experimented with different theories, techniques, and ideas`,
  },
};

export const artistsInDatabase = [
  {
    id: 1,
    artist_name: 'Utagawa Hiroshige',
  },
  {
    id: 2,
    artist_name: 'James McNeill Whistler',
  },
  {
    id: 3,
    artist_name: 'Honoré-Victorin Daumier',
  },
  {
    id: 4,
    artist_name: 'John Gossage',
  },
  {
    id: 5,
    artist_name: 'Kawase Hasui',
  },
  {
    id: 6,
    artist_name: 'Katsukawa Shunsho',
  },
  {
    id: 7,
    artist_name: 'Anders Zorn',
  },
  {
    id: 8,
    artist_name: 'Knoll International, Inc.',
  },
  {
    id: 9,
    artist_name: 'Henri de Toulouse-Lautrec',
  },
  {
    id: 10,
    artist_name: 'Robert Motherwell',
  },
  {
    id: 11,
    artist_name: 'Odilon Redon',
  },
  {
    id: 12,
    artist_name: 'Katsushika Hokusai',
  },
  {
    id: 13,
    artist_name: 'Jean Louis Forain',
  },
  {
    id: 14,
    artist_name: 'Larry Rivers',
  },
  {
    id: 15,
    artist_name: 'Nazca',
  },
  {
    id: 16,
    artist_name: 'Yasuhiro Ishimoto',
  },
  {
    id: 17,
    artist_name: 'Christian Boltanski',
  },
  {
    id: 18,
    artist_name: 'Joseph Pennell',
  },
  {
    id: 19,
    artist_name: 'Donald Shaw MacLaughlan',
  },
  {
    id: 20,
    artist_name: 'Pablo Picasso',
  },
  {
    id: 21,
    artist_name: 'Moche',
  },
  {
    id: 22,
    artist_name: 'Tsukioka Kôgyo',
  },
  {
    id: 23,
    artist_name: 'Robert Rauschenberg',
  },
  {
    id: 24,
    artist_name: 'Suzuki Harunobu',
  },
  {
    id: 25,
    artist_name: 'Charles Meryon',
  },
  {
    id: 26,
    artist_name: 'Jacques Callot',
  },
  {
    id: 27,
    artist_name: 'Aaron Siskind',
  },
  {
    id: 28,
    artist_name: 'Francisco José de Goya y Lucientes',
  },
  {
    id: 29,
    artist_name: 'Kitagawa Utamaro',
  },
  {
    id: 30,
    artist_name: 'Fritz Glarner',
  },
  {
    id: 31,
    artist_name: 'Bertrand Goldberg',
  },
  {
    id: 32,
    artist_name: 'Helen Frankenthaler',
  },
  {
    id: 33,
    artist_name: 'Torii Kiyonaga',
  },
  {
    id: 34,
    artist_name: 'Albrecht Dürer',
  },
  {
    id: 35,
    artist_name: 'Lee Bontecou',
  },
  {
    id: 36,
    artist_name: 'André Kertész',
  },
  {
    id: 37,
    artist_name: 'Theodore Roussel',
  },
  {
    id: 38,
    artist_name: 'Takuma Nakahira',
  },
  {
    id: 39,
    artist_name: 'José Guadalupe Posada',
  },
  {
    id: 40,
    artist_name: 'Edward Weston',
  },
  {
    id: 41,
    artist_name: 'Rembrandt van Rijn',
  },
  {
    id: 42,
    artist_name: 'Wedgwood Manufactory',
  },
  {
    id: 43,
    artist_name: 'James Rosenquist',
  },
  {
    id: 44,
    artist_name: 'Yousuf Karsh',
  },
  {
    id: 45,
    artist_name: 'Compagnie de Saint Louis',
  },
  {
    id: 46,
    artist_name: 'Irving Penn',
  },
  {
    id: 47,
    artist_name: 'Théophile-Alexandre Pierre Steinlen',
  },
  {
    id: 48,
    artist_name: 'Joseph Yoakum',
  },
  {
    id: 49,
    artist_name: 'Charles Émile Jacque',
  },
  {
    id: 50,
    artist_name: 'Jim Dine',
  },
  {
    id: 51,
    artist_name: 'Paul Gauguin',
  },
  {
    id: 52,
    artist_name: 'Andy Warhol',
  },
  {
    id: 53,
    artist_name: "Hiratsuka Un'ichi",
  },
  {
    id: 54,
    artist_name: 'Kenneth Josephson',
  },
  {
    id: 55,
    artist_name: 'Henri Matisse',
  },
  {
    id: 56,
    artist_name: 'Baccarat Glassworks',
  },
  {
    id: 57,
    artist_name: 'Bror Julius Olsson Nordfeldt',
  },
  {
    id: 58,
    artist_name: 'Eduardo Paolozzi',
  },
  {
    id: 59,
    artist_name: 'W. Eugene Smith',
  },
  {
    id: 60,
    artist_name: 'Clichy Glasshouse',
  },
  {
    id: 61,
    artist_name: 'Louis Auguste Lepère',
  },
  {
    id: 62,
    artist_name: 'Isoda Koryusai',
  },
  {
    id: 63,
    artist_name: 'Georges Rouault',
  },
  {
    id: 64,
    artist_name: 'Walker Evans',
  },
  {
    id: 65,
    artist_name: 'Islamic',
  },
  {
    id: 66,
    artist_name: 'Jean Dubuffet',
  },
  {
    id: 67,
    artist_name: 'Jacques Villon',
  },
  {
    id: 68,
    artist_name: 'Giovanni Battista Piranesi',
  },
  {
    id: 69,
    artist_name: 'Joel Sternfeld',
  },
  {
    id: 70,
    artist_name: 'Gustave Baumann',
  },
  {
    id: 71,
    artist_name: 'Bob Thall',
  },
  {
    id: 72,
    artist_name: 'Worcester Royal Porcelain Company',
  },
  {
    id: 73,
    artist_name: 'Tony Fitzpatrick',
  },
  {
    id: 74,
    artist_name: 'Alfred Stieglitz',
  },
  {
    id: 75,
    artist_name: 'Winslow Homer',
  },
  {
    id: 76,
    artist_name: 'James Gillray',
  },
  {
    id: 77,
    artist_name: 'Fredrica Justina Staack',
  },
  {
    id: 78,
    artist_name: 'Leopoldo Méndez',
  },
  {
    id: 79,
    artist_name: 'Jasper Johns',
  },
  {
    id: 80,
    artist_name: 'Edward Steichen',
  },
  {
    id: 81,
    artist_name: 'Jean-Eugène-Auguste Atget',
  },
  {
    id: 82,
    artist_name: 'Ludwig Mies van der Rohe',
  },
  {
    id: 83,
    artist_name: 'Denis Auguste Marie Raffet',
  },
  {
    id: 84,
    artist_name: 'Joseph Mallord William Turner',
  },
  {
    id: 85,
    artist_name: 'George Cruikshank',
  },
  {
    id: 86,
    artist_name: 'Danny Lyon',
  },
  {
    id: 87,
    artist_name: 'Robert D. Sailors',
  },
  {
    id: 88,
    artist_name: 'Peter Henry Emerson',
  },
  {
    id: 89,
    artist_name: 'William Clift',
  },
  {
    id: 90,
    artist_name: 'James Welling',
  },
  {
    id: 91,
    artist_name: 'Jean Louis André Théodore Géricault',
  },
  {
    id: 92,
    artist_name: 'Francis Seymour Haden',
  },
  {
    id: 93,
    artist_name: 'Francis Chapin',
  },
  {
    id: 94,
    artist_name: 'Wenceslaus Hollar',
  },
  {
    id: 95,
    artist_name: 'Thomas Stothard',
  },
  {
    id: 96,
    artist_name: 'Thomas Frederick Arndt',
  },
  {
    id: 97,
    artist_name: "Timothy O'Sullivan",
  },
  {
    id: 98,
    artist_name: 'Garry Winogrand',
  },
  {
    id: 99,
    artist_name: 'Sylvia Shaw Judson',
  },
  {
    id: 100,
    artist_name: 'Arthur B. Davies',
  },
  {
    id: 101,
    artist_name: 'Ellen Lanyon',
  },
  {
    id: 102,
    artist_name: 'Ivan Albright',
  },
  {
    id: 103,
    artist_name: 'Utagawa Kuniyoshi',
  },
  {
    id: 104,
    artist_name: 'Luis Medina',
  },
  {
    id: 105,
    artist_name: 'Joel Meyerowitz',
  },
  {
    id: 106,
    artist_name: 'David Plowden',
  },
  {
    id: 107,
    artist_name: 'Jean François Millet',
  },
  {
    id: 108,
    artist_name: 'Dorothy Liebes',
  },
  {
    id: 109,
    artist_name: 'Charles François Daubigny',
  },
  {
    id: 110,
    artist_name: 'Rodolphe Bresdin',
  },
  {
    id: 111,
    artist_name: 'Henry Hamilton Bennett',
  },
  {
    id: 112,
    artist_name: 'Vera Berdich',
  },
  {
    id: 113,
    artist_name: 'Augustus Charles Pugin',
  },
  {
    id: 114,
    artist_name: 'Eugène Delacroix',
  },
  {
    id: 115,
    artist_name: 'Maxime Du Camp',
  },
  {
    id: 116,
    artist_name: 'Paul Gavarni',
  },
  {
    id: 117,
    artist_name: 'Lewis Wickes Hine',
  },
  {
    id: 118,
    artist_name: 'Bruce Alonzo Goff',
  },
  {
    id: 119,
    artist_name: 'Roger Fenton',
  },
  {
    id: 120,
    artist_name: 'Ansel Adams',
  },
  {
    id: 121,
    artist_name: 'John Massey',
  },
  {
    id: 122,
    artist_name: 'Hilaire Germain Edgar Degas',
  },
  {
    id: 123,
    artist_name: 'Maya',
  },
  {
    id: 124,
    artist_name: 'Thomas Rowlandson',
  },
  {
    id: 125,
    artist_name: 'Blanc and Demilly',
  },
  {
    id: 126,
    artist_name: 'Hans Sebald Beham',
  },
  {
    id: 127,
    artist_name: 'Bill Brandt',
  },
  {
    id: 128,
    artist_name: 'John Marin',
  },
  {
    id: 129,
    artist_name: 'Marie-Blanche Hennelle Fournier',
  },
  {
    id: 130,
    artist_name: 'Edvard Munch',
  },
  {
    id: 131,
    artist_name: 'Okumura Masanobu',
  },
  {
    id: 132,
    artist_name: 'Bauhaus Workshop',
  },
  {
    id: 133,
    artist_name: 'Henry Peter Glass',
  },
  {
    id: 134,
    artist_name: 'Marc Chagall',
  },
  {
    id: 135,
    artist_name: 'Joseph D. Jachna',
  },
  {
    id: 136,
    artist_name: 'Bronislaw M. Bak',
  },
  {
    id: 137,
    artist_name: 'Édouard Manet',
  },
  {
    id: 138,
    artist_name: 'Inca',
  },
  {
    id: 139,
    artist_name: 'Francesco Bartolozzi',
  },
  {
    id: 140,
    artist_name: 'Norman Roland Eppink',
  },
  {
    id: 141,
    artist_name: 'Henri Fantin-Latour',
  },
  {
    id: 142,
    artist_name: 'Han-Chinese',
  },
  {
    id: 143,
    artist_name: 'Robert Frank',
  },
  {
    id: 144,
    artist_name: 'Harry Callahan',
  },
  {
    id: 145,
    artist_name: 'Max Kahn',
  },
  {
    id: 146,
    artist_name: 'Anonymous',
  },
  {
    id: 147,
    artist_name: 'Terry Evans',
  },
  {
    id: 148,
    artist_name: 'Byzantine',
  },
  {
    id: 149,
    artist_name: 'Hubert François Gravelot',
  },
  {
    id: 150,
    artist_name: 'Leonard Baskin',
  },
  {
    id: 151,
    artist_name: 'Helen Hyde',
  },
  {
    id: 152,
    artist_name: 'Chimú',
  },
  {
    id: 153,
    artist_name: 'Utagawa Toyokuni I',
  },
  {
    id: 154,
    artist_name: 'Ilse Bing',
  },
  {
    id: 155,
    artist_name: 'Totoya Hokkei',
  },
  {
    id: 156,
    artist_name: 'Paul Klee',
  },
  {
    id: 157,
    artist_name: 'Skidmore, Owings & Merrill',
  },
  {
    id: 158,
    artist_name: 'Elizabeth Murray',
  },
  {
    id: 159,
    artist_name: 'Esen Karol',
  },
  {
    id: 160,
    artist_name: 'Richard Nickel',
  },
  {
    id: 161,
    artist_name: 'Martin Schongauer',
  },
  {
    id: 162,
    artist_name: 'George Platt Lynes',
  },
  {
    id: 163,
    artist_name: 'Stefano della Bella',
  },
  {
    id: 164,
    artist_name: 'Yoshida Hiroshi',
  },
  {
    id: 165,
    artist_name: 'Cy Twombly',
  },
  {
    id: 166,
    artist_name: 'John Thomson',
  },
  {
    id: 167,
    artist_name: 'Francis Frith',
  },
  {
    id: 168,
    artist_name: 'Kenneth Heilbron',
  },
  {
    id: 169,
    artist_name: 'Barnett Newman',
  },
  {
    id: 170,
    artist_name: "Katsukawa Shun'ei",
  },
  {
    id: 171,
    artist_name: 'Frederick H. Evans',
  },
  {
    id: 172,
    artist_name: 'Peter Blume',
  },
  {
    id: 173,
    artist_name: 'James Ensor',
  },
  {
    id: 174,
    artist_name: 'Lovis Corinth',
  },
  {
    id: 175,
    artist_name: 'Utagawa Kunisada I (Toyokuni III)',
  },
  {
    id: 176,
    artist_name: 'Eliot Porter',
  },
  {
    id: 177,
    artist_name: 'Manufacture nationale de Sèvres',
  },
  {
    id: 178,
    artist_name: 'Katsukawa Shunko I',
  },
  {
    id: 179,
    artist_name: 'Meissen Porcelain Manufactory',
  },
  {
    id: 180,
    artist_name: 'Misch Kohn',
  },
  {
    id: 181,
    artist_name: 'Giovanni Domenico Tiepolo',
  },
  {
    id: 182,
    artist_name: 'Chôbunsai Eishi',
  },
  {
    id: 183,
    artist_name: 'Sal Lopes',
  },
  {
    id: 184,
    artist_name: 'David Young Cameron',
  },
  {
    id: 185,
    artist_name: 'Jonas Dovydenas',
  },
  {
    id: 186,
    artist_name: 'Jean Baptiste Huet',
  },
  {
    id: 187,
    artist_name: 'Robert Heinecken',
  },
  {
    id: 188,
    artist_name: 'Asante',
  },
  {
    id: 189,
    artist_name: 'Alberto Giacometti',
  },
  {
    id: 190,
    artist_name: 'Julia Margaret Cameron',
  },
  {
    id: 191,
    artist_name: 'Manuel Alvarez-Bravo',
  },
  {
    id: 192,
    artist_name: 'Mike Mandel',
  },
  {
    id: 193,
    artist_name: 'Christian Eckart',
  },
  {
    id: 194,
    artist_name: 'Ray Johnson',
  },
  {
    id: 195,
    artist_name: 'Mel Bochner',
  },
  {
    id: 196,
    artist_name: 'Coptic',
  },
  {
    id: 197,
    artist_name: 'Torii Kiyomitsu I',
  },
  {
    id: 198,
    artist_name: 'William Henry Fox Talbot',
  },
  {
    id: 199,
    artist_name: 'Ben Rose',
  },
  {
    id: 200,
    artist_name: 'Frank Lloyd Wright',
  },
  {
    id: 201,
    artist_name: 'David Hockney',
  },
  {
    id: 202,
    artist_name: 'Herman Armour Webster',
  },
  {
    id: 203,
    artist_name: 'Earl H. Reed',
  },
  {
    id: 204,
    artist_name: 'Tōshūsai Sharaku',
  },
  {
    id: 205,
    artist_name: 'Manchu',
  },
  {
    id: 206,
    artist_name: 'Jean Baptiste Camille Corot',
  },
  {
    id: 207,
    artist_name: 'Le Corbusier (Charles-Édouard Jeanneret)',
  },
  {
    id: 208,
    artist_name: 'Jack Beal',
  },
  {
    id: 209,
    artist_name: 'Narcissa Niblack Thorne',
  },
  {
    id: 210,
    artist_name: 'Chancay',
  },
  {
    id: 211,
    artist_name: 'Lester George Hornby',
  },
  {
    id: 212,
    artist_name: 'Carlos Mérida',
  },
  {
    id: 213,
    artist_name: 'Utagawa Hiroshige II (Shigenobu)',
  },
  {
    id: 214,
    artist_name: 'Arturo Herrera',
  },
  {
    id: 215,
    artist_name: 'Alphonse Legros',
  },
  {
    id: 216,
    artist_name: 'Reginald Marsh',
  },
  {
    id: 217,
    artist_name: 'Max Beckmann',
  },
  {
    id: 218,
    artist_name: 'Ippitsusai Buncho',
  },
  {
    id: 219,
    artist_name: 'Eileen Alice Soper',
  },
  {
    id: 220,
    artist_name: 'Walter Burley Griffin',
  },
  {
    id: 221,
    artist_name: 'Joan Miró',
  },
  {
    id: 222,
    artist_name: 'Timothy Cole',
  },
  {
    id: 223,
    artist_name: 'Otto Dix',
  },
  {
    id: 224,
    artist_name: 'Walter Gramatté',
  },
  {
    id: 225,
    artist_name: 'Louis H. Sullivan',
  },
  {
    id: 226,
    artist_name: 'John Pfahl',
  },
  {
    id: 227,
    artist_name: 'Yashima Gakutei',
  },
  {
    id: 228,
    artist_name: 'James Duffield Harding',
  },
  {
    id: 229,
    artist_name: 'Jay Wolke',
  },
  {
    id: 230,
    artist_name: 'Morris Engel',
  },
  {
    id: 231,
    artist_name: 'Pierre-Auguste Renoir',
  },
  {
    id: 232,
    artist_name: 'Camille Pissarro',
  },
  {
    id: 233,
    artist_name: 'Berenice Abbott',
  },
  {
    id: 234,
    artist_name: 'Arnold Genthe',
  },
  {
    id: 235,
    artist_name: 'Eleanor Kluck',
  },
  {
    id: 236,
    artist_name: 'Richard Aberle Florsheim',
  },
  {
    id: 237,
    artist_name: 'Ludwig Karl Hilberseimer',
  },
  {
    id: 238,
    artist_name: 'John Downman',
  },
  {
    id: 239,
    artist_name: 'Sanford H. Roth',
  },
  {
    id: 240,
    artist_name: 'Katsukawa Shunchô',
  },
  {
    id: 241,
    artist_name: 'Adler & Sullivan, Architects',
  },
  {
    id: 242,
    artist_name: 'George N. Barnard',
  },
  {
    id: 243,
    artist_name: 'Rudy Pozzatti',
  },
  {
    id: 244,
    artist_name: 'Saul Steinberg',
  },
  {
    id: 245,
    artist_name: 'Lee Friedlander',
  },
  {
    id: 246,
    artist_name: 'Mary Cassatt',
  },
  {
    id: 247,
    artist_name: 'Albrecht Altdorfer',
  },
  {
    id: 248,
    artist_name: 'Jenny Holzer',
  },
  {
    id: 249,
    artist_name: 'Kuna',
  },
  {
    id: 250,
    artist_name: 'John Tinney McCutcheon',
  },
  {
    id: 251,
    artist_name: 'José Lopez',
  },
  {
    id: 252,
    artist_name: 'Kaufmann & Fabry Co.',
  },
  {
    id: 253,
    artist_name: 'Meriden Gravure Company',
  },
  {
    id: 254,
    artist_name: 'John J. A. Murphy',
  },
  {
    id: 255,
    artist_name: 'Paul Strand',
  },
  {
    id: 256,
    artist_name: 'George Wesley Bellows',
  },
  {
    id: 257,
    artist_name: 'Onchi Kōshirō',
  },
  {
    id: 258,
    artist_name: 'Letterio Calapai',
  },
  {
    id: 259,
    artist_name: 'William Mares',
  },
  {
    id: 260,
    artist_name: 'Dan Friedman',
  },
  {
    id: 261,
    artist_name: 'Stanley Tigerman',
  },
  {
    id: 262,
    artist_name: 'Pierre Bonnard',
  },
  {
    id: 263,
    artist_name: 'David Lucas',
  },
  {
    id: 264,
    artist_name: 'Cauleen Smith',
  },
  {
    id: 265,
    artist_name: 'Hendrick Goltzius',
  },
  {
    id: 266,
    artist_name: 'Mariano Fortuny y Madrazo',
  },
  {
    id: 267,
    artist_name: 'Sol LeWitt',
  },
  {
    id: 268,
    artist_name: 'Henri Cartier-Bresson',
  },
  {
    id: 269,
    artist_name: 'David Goldblatt',
  },
  {
    id: 270,
    artist_name: 'Angelo Testa',
  },
  {
    id: 271,
    artist_name: 'Lloyd Morgan Yost',
  },
  {
    id: 272,
    artist_name: 'Édouard Jean Vuillard',
  },
  {
    id: 273,
    artist_name: 'Torii Kiyomasu II',
  },
  {
    id: 274,
    artist_name: 'William Gropper',
  },
  {
    id: 275,
    artist_name: 'Franz Lipp',
  },
  {
    id: 276,
    artist_name: 'Samuel Prout',
  },
  {
    id: 277,
    artist_name: 'Johan Hagemeyer',
  },
  {
    id: 278,
    artist_name: 'Milton Rogovin',
  },
  {
    id: 279,
    artist_name: 'Ethel Stein',
  },
  {
    id: 280,
    artist_name: 'Lyonel Feininger',
  },
  {
    id: 281,
    artist_name: 'Max Klinger',
  },
  {
    id: 282,
    artist_name: 'Kitao Shigemasa',
  },
  {
    id: 283,
    artist_name: 'Hiroshi Sugimoto',
  },
  {
    id: 284,
    artist_name: 'Eleanor Antin',
  },
  {
    id: 285,
    artist_name: 'William Hogarth',
  },
  {
    id: 286,
    artist_name: 'Thomas Shotter Boys',
  },
  {
    id: 287,
    artist_name: 'Francis Bedford',
  },
  {
    id: 288,
    artist_name: 'Ruth-Marion Baruch',
  },
  {
    id: 289,
    artist_name: 'Gauri Gill',
  },
  {
    id: 290,
    artist_name: 'Jim Dow',
  },
  {
    id: 291,
    artist_name: 'William Morris',
  },
  {
    id: 292,
    artist_name: 'Peter Joseph Weber',
  },
  {
    id: 293,
    artist_name: 'Théodore Chassériau',
  },
  {
    id: 294,
    artist_name: 'Harold Eugene Edgerton',
  },
  {
    id: 295,
    artist_name: 'Félicien Rops',
  },
  {
    id: 296,
    artist_name: 'Heinrich Aldegrever',
  },
  {
    id: 297,
    artist_name: 'Ishikawa Toyonobu',
  },
  {
    id: 298,
    artist_name: 'Laurent Millet',
  },
  {
    id: 299,
    artist_name: 'Cecil Buller',
  },
  {
    id: 300,
    artist_name: 'Edward S. Curtis',
  },
  {
    id: 301,
    artist_name: 'Ibrahima Sanlé Sory',
  },
  {
    id: 302,
    artist_name: 'Yoruba',
  },
  {
    id: 303,
    artist_name: 'Paul Schweikher',
  },
  {
    id: 304,
    artist_name: 'Josef Hoffmann',
  },
  {
    id: 305,
    artist_name: 'Robert Nanteuil',
  },
  {
    id: 306,
    artist_name: 'Minor White',
  },
  {
    id: 307,
    artist_name: 'William Steig',
  },
  {
    id: 308,
    artist_name: 'Adolphe Marie Timothée Beaufrère',
  },
  {
    id: 309,
    artist_name: 'Staffordshire Potteries',
  },
  {
    id: 310,
    artist_name: 'Paul Sandby',
  },
  {
    id: 311,
    artist_name: 'Arnold Herman Crane',
  },
  {
    id: 312,
    artist_name: 'Robert Cumming',
  },
  {
    id: 313,
    artist_name: 'Charles White',
  },
  {
    id: 314,
    artist_name: 'Pierre Antoine Mongin',
  },
  {
    id: 315,
    artist_name: 'Sir Edward Burne-Jones',
  },
  {
    id: 316,
    artist_name: 'Marcel Jean',
  },
  {
    id: 317,
    artist_name: 'Dennis Stock',
  },
  {
    id: 318,
    artist_name: 'Jan Saudek',
  },
  {
    id: 319,
    artist_name: 'Alfredo Zalce',
  },
  {
    id: 320,
    artist_name: 'Henry Stacy Marks',
  },
  {
    id: 321,
    artist_name: 'Master of the E-Series Tarocchi',
  },
  {
    id: 322,
    artist_name: 'Lucas Samaras',
  },
  {
    id: 323,
    artist_name: 'Nathan Lerner',
  },
  {
    id: 324,
    artist_name: 'Ray Krueger Metzker',
  },
  {
    id: 325,
    artist_name: 'Dawoud Bey',
  },
  {
    id: 326,
    artist_name: 'Melissa Ann Pinney',
  },
  {
    id: 327,
    artist_name: 'Edward Gorey',
  },
  {
    id: 328,
    artist_name: 'Manuel Carrillo',
  },
  {
    id: 329,
    artist_name: 'Saito Kiyoshi',
  },
  {
    id: 330,
    artist_name: 'Bruce Davidson',
  },
  {
    id: 331,
    artist_name: 'Kenneth Price',
  },
  {
    id: 332,
    artist_name: 'Israhel van Meckenem, the younger',
  },
  {
    id: 333,
    artist_name: 'J.C. Burritt',
  },
  {
    id: 334,
    artist_name: 'Claude Monet',
  },
  {
    id: 335,
    artist_name: 'Max Ernst',
  },
  {
    id: 336,
    artist_name: 'André Masson',
  },
  {
    id: 337,
    artist_name: 'Carleton Watkins',
  },
  {
    id: 338,
    artist_name: 'Frank Brangwyn',
  },
  {
    id: 339,
    artist_name: 'Giambattista Tiepolo',
  },
  {
    id: 340,
    artist_name: 'Philip William May',
  },
  {
    id: 341,
    artist_name: 'Roger Brown',
  },
  {
    id: 342,
    artist_name: 'Ruth Levy',
  },
  {
    id: 343,
    artist_name: 'Gustave Le Gray',
  },
  {
    id: 344,
    artist_name: 'Ralph Eugene Meatyard',
  },
  {
    id: 345,
    artist_name: 'Aubrey Schwartz',
  },
  {
    id: 346,
    artist_name: 'José Luis Cuevas',
  },
  {
    id: 347,
    artist_name: 'Gertrude Käsebier',
  },
  {
    id: 348,
    artist_name: 'Anthony van Dyck',
  },
  {
    id: 349,
    artist_name: 'Will Hicock Low',
  },
  {
    id: 350,
    artist_name: 'Thomas Bewick',
  },
  {
    id: 351,
    artist_name: 'Cappellin and Company',
  },
  {
    id: 352,
    artist_name: 'Anthony Hernandez',
  },
  {
    id: 353,
    artist_name: 'Brassaï, (Gyula Halász)',
  },
  {
    id: 354,
    artist_name: 'Azechi Umetaro',
  },
  {
    id: 355,
    artist_name: 'George Grosz',
  },
  {
    id: 356,
    artist_name: 'Henry Alken',
  },
  {
    id: 357,
    artist_name: 'Lucas Cranach, the Elder',
  },
  {
    id: 358,
    artist_name: 'Daniel P. Ramirez',
  },
  {
    id: 359,
    artist_name: 'Edward Joseph Ruscha',
  },
  {
    id: 360,
    artist_name: 'Howard Van Doren Shaw',
  },
  {
    id: 361,
    artist_name: 'Claire Zeisler',
  },
  {
    id: 362,
    artist_name: 'Man Ray (Emmanuel Radnitzky)',
  },
  {
    id: 363,
    artist_name: 'Georges Braque',
  },
  {
    id: 364,
    artist_name: 'Dave Heath',
  },
  {
    id: 365,
    artist_name: 'Master of the Die',
  },
  {
    id: 366,
    artist_name: 'Tiwanaku',
  },
  {
    id: 367,
    artist_name: 'Carle Vernet',
  },
  {
    id: 368,
    artist_name: 'Dominique-Vivant Denon',
  },
  {
    id: 369,
    artist_name: 'François Boucher',
  },
  {
    id: 370,
    artist_name: 'Emil Armin',
  },
  {
    id: 371,
    artist_name: 'Cornelis Visscher',
  },
  {
    id: 372,
    artist_name: 'Raphael',
  },
  {
    id: 373,
    artist_name: 'Jean-Baptiste de Grateloup',
  },
  {
    id: 374,
    artist_name: 'David Levinthal',
  },
  {
    id: 375,
    artist_name: 'Horace Vernet',
  },
  {
    id: 376,
    artist_name: 'Eleanor Coen',
  },
  {
    id: 377,
    artist_name: 'Stephen Shore',
  },
  {
    id: 378,
    artist_name: 'Brett Weston',
  },
  {
    id: 379,
    artist_name: 'Childe Hassam',
  },
  {
    id: 380,
    artist_name: 'Salvator Rosa',
  },
  {
    id: 381,
    artist_name: 'Canaletto',
  },
  {
    id: 382,
    artist_name: 'Eldzier Cortor',
  },
  {
    id: 383,
    artist_name: 'John Smart',
  },
  {
    id: 384,
    artist_name: 'A. J. Defehrt',
  },
  {
    id: 385,
    artist_name: 'Jim Nutt',
  },
  {
    id: 386,
    artist_name: 'Enrico Natali',
  },
  {
    id: 387,
    artist_name: 'Kurt Seligmann',
  },
  {
    id: 388,
    artist_name: 'Lewis Baltz',
  },
  {
    id: 389,
    artist_name: 'Joseph Cornell',
  },
  {
    id: 390,
    artist_name: 'H. C. Westermann',
  },
  {
    id: 391,
    artist_name: 'Constantine Manos',
  },
  {
    id: 392,
    artist_name: 'Todros Geller',
  },
  {
    id: 393,
    artist_name: 'Joseph Marie Vien, I',
  },
  {
    id: 394,
    artist_name: 'Piet Zwart',
  },
  {
    id: 395,
    artist_name: 'Robert Andrew Parker',
  },
  {
    id: 396,
    artist_name: 'Munakata Shikô',
  },
  {
    id: 397,
    artist_name: 'Barbara Crane',
  },
  {
    id: 398,
    artist_name: 'Marie Laurencin',
  },
  {
    id: 399,
    artist_name: 'Claude Lorrain',
  },
  {
    id: 400,
    artist_name: 'Kubo Shunman',
  },
  {
    id: 401,
    artist_name: 'Brice Marden',
  },
  {
    id: 402,
    artist_name: 'Charles Samuel Keene',
  },
  {
    id: 403,
    artist_name: 'Keith Smith',
  },
  {
    id: 404,
    artist_name: 'Louis Faurer',
  },
  {
    id: 405,
    artist_name: 'Joan Fontcuberta',
  },
  {
    id: 406,
    artist_name: 'James McGarrell',
  },
  {
    id: 407,
    artist_name: 'Donald Judd',
  },
  {
    id: 408,
    artist_name: 'Master A.P.',
  },
  {
    id: 409,
    artist_name: 'George Kershaw',
  },
  {
    id: 410,
    artist_name: 'Martin Puryear',
  },
  {
    id: 411,
    artist_name: 'Mounira Al Solh',
  },
  {
    id: 412,
    artist_name: 'Gerhard Richter',
  },
  {
    id: 413,
    artist_name: 'Matta',
  },
  {
    id: 414,
    artist_name: 'Frederic Remington',
  },
  {
    id: 415,
    artist_name: 'Félix Hilaire Buhot',
  },
  {
    id: 416,
    artist_name: 'Lucas van Leyden',
  },
  {
    id: 417,
    artist_name: 'C. F. Murphy Associates',
  },
  {
    id: 418,
    artist_name: 'Alexander Calder',
  },
  {
    id: 419,
    artist_name: 'Jean Baptiste Carpeaux',
  },
  {
    id: 420,
    artist_name: 'Félix Edouard Vallotton',
  },
  {
    id: 421,
    artist_name: 'Leonard Havens',
  },
  {
    id: 422,
    artist_name: 'M. Dubourg',
  },
  {
    id: 423,
    artist_name: 'Torii Kiyonobu I',
  },
  {
    id: 424,
    artist_name: 'Edward Warren Sawyer',
  },
  {
    id: 425,
    artist_name: 'Manuel Manilla',
  },
  {
    id: 426,
    artist_name: 'Werner Graeff',
  },
  {
    id: 427,
    artist_name: 'Thomas Annan',
  },
  {
    id: 428,
    artist_name: 'Tsukioka Yoshitoshi',
  },
  {
    id: 429,
    artist_name: 'Arthur Rothstein',
  },
  {
    id: 430,
    artist_name: 'Jean Honoré Fragonard',
  },
  {
    id: 431,
    artist_name: 'Ruth Adler Schnee',
  },
  {
    id: 432,
    artist_name: 'Herbert Crawford Williamson',
  },
  {
    id: 433,
    artist_name: 'Colima',
  },
  {
    id: 434,
    artist_name: 'Henry Fuseli',
  },
  {
    id: 435,
    artist_name: 'Emil Nolde',
  },
  {
    id: 436,
    artist_name: 'Helen Levitt',
  },
  {
    id: 437,
    artist_name: 'Daniel Hudson Burnham',
  },
  {
    id: 438,
    artist_name: 'Gertrude Eisendrath Deimel Kuh',
  },
  {
    id: 439,
    artist_name: 'Roger Vail',
  },
  {
    id: 440,
    artist_name: 'László Moholy-Nagy',
  },
  {
    id: 441,
    artist_name: 'Auguste Rodin',
  },
  {
    id: 442,
    artist_name: 'Michael Johnson',
  },
  {
    id: 443,
    artist_name: 'Alex Katz',
  },
  {
    id: 444,
    artist_name: 'Raoul Dufy',
  },
  {
    id: 445,
    artist_name: 'Horst Janssen',
  },
  {
    id: 446,
    artist_name: 'Félix Henri Bracquemond',
  },
  {
    id: 447,
    artist_name: 'Irene Siegel',
  },
  {
    id: 448,
    artist_name: 'Étienne Delaune',
  },
  {
    id: 449,
    artist_name: 'Raphael Soyer',
  },
  {
    id: 450,
    artist_name: 'Thomas A. Knudtson',
  },
  {
    id: 451,
    artist_name: 'Rhondal McKinney',
  },
  {
    id: 452,
    artist_name: 'Hamanishi Katsunori',
  },
  {
    id: 453,
    artist_name: 'Clarence John Laughlin',
  },
  {
    id: 454,
    artist_name: 'Chelsea Porcelain Factory',
  },
  {
    id: 455,
    artist_name: 'Anthonie Waterloo',
  },
  {
    id: 456,
    artist_name: 'Josef Albers',
  },
  {
    id: 457,
    artist_name: 'Fernand Léger',
  },
  {
    id: 458,
    artist_name: 'Kate Greenaway',
  },
  {
    id: 459,
    artist_name: 'Giuseppe Grisoni',
  },
  {
    id: 460,
    artist_name: 'Roy Lichtenstein',
  },
  {
    id: 461,
    artist_name: 'Clinton Adams',
  },
  {
    id: 462,
    artist_name: 'Garo Antreasian',
  },
  {
    id: 463,
    artist_name: 'Torii Kiyonobu II',
  },
  {
    id: 464,
    artist_name: 'Allen Rawson Ruppersberg',
  },
  {
    id: 465,
    artist_name: 'Lambayeque',
  },
  {
    id: 466,
    artist_name: 'Frank Lobdell',
  },
  {
    id: 467,
    artist_name: 'Vitaly Komar',
  },
  {
    id: 468,
    artist_name: 'Paul Cézanne',
  },
  {
    id: 469,
    artist_name: 'Ito Shinsui',
  },
  {
    id: 470,
    artist_name: 'William Ferguson Deknatel',
  },
  {
    id: 471,
    artist_name: 'Andrew Joseph Russell',
  },
  {
    id: 472,
    artist_name: 'Chuck Close',
  },
  {
    id: 473,
    artist_name: 'Adriaen van Ostade',
  },
  {
    id: 474,
    artist_name: 'Etienne Carjat',
  },
  {
    id: 475,
    artist_name: 'Elizabeth Buehrmann',
  },
  {
    id: 476,
    artist_name: 'Louise Nevelson',
  },
  {
    id: 477,
    artist_name: 'Alan Cohen',
  },
  {
    id: 478,
    artist_name: 'Else Regensteiner',
  },
  {
    id: 479,
    artist_name: 'Ralph M. Pearson',
  },
  {
    id: 480,
    artist_name: 'Christina Ramberg',
  },
  {
    id: 481,
    artist_name: 'Tsukioka Gyokusei',
  },
  {
    id: 482,
    artist_name: 'Shomei Tomatsu',
  },
  {
    id: 483,
    artist_name: 'Arnold Newman',
  },
  {
    id: 484,
    artist_name: 'Luis Camnitzer',
  },
  {
    id: 485,
    artist_name: 'Project Projects',
  },
  {
    id: 486,
    artist_name: 'Louis Comfort Tiffany',
  },
  {
    id: 487,
    artist_name: 'D.H. Burnham & Co.',
  },
  {
    id: 488,
    artist_name: 'James McBey',
  },
  {
    id: 489,
    artist_name: 'Hashiguchi Goyô',
  },
  {
    id: 490,
    artist_name: 'Steven Foster',
  },
  {
    id: 491,
    artist_name: 'John Singer Sargent',
  },
  {
    id: 492,
    artist_name: 'Jack Levine',
  },
  {
    id: 493,
    artist_name: 'Harold Allen',
  },
  {
    id: 494,
    artist_name: 'Duane Stephen Michals',
  },
  {
    id: 495,
    artist_name: 'George A. Tice',
  },
  {
    id: 496,
    artist_name: 'Carl Hoeckner',
  },
  {
    id: 497,
    artist_name: 'Nishimura Shigenaga',
  },
  {
    id: 498,
    artist_name: 'Mirko Borsche',
  },
  {
    id: 499,
    artist_name: 'William T. Wiley',
  },
  {
    id: 500,
    artist_name: 'Ellsworth Kelly',
  },
];
