export const config = {
 closingInterval: 4000,
 closingPhotos: ['./photos/closing-01.jpg','./photos/closing-02.jpg'],
 start: '2026-03-18T21:00:00-03:00', audio: './audio/wonderwall.mp3',
 photos: [
 ['Una mañana de novios en el cadillal.', '12 de abril de 2026.', "Elegi este recuerdo porque para ambos fue de nuestros dias favoritos, la pasamos super bien en ese desayuno improvisado jajaja."],
 ['Mateando con la gorda.', '12 de abril de 2026.'],
 ['Así, cerquita.', '19 de junio de 2026'],
 ['A la nena le gusta estar alzada', '2 de octubre de 2026.', "Creo q no hace falta aclarar pq elegi esa foto jajajja, de nuestras ultimas fotos y alzandote porque es de tus cosas fav (la mia tmb)..."],
 ['De cumple.', '28 de junio 2026'],
 ['La felicidad en lo simple.', '26 de julio de 2026.'],
 ['Siempre del mismo lado.', '10 de octubre de 2026.', "Aunque este rugbier es de uni me toco una rubia de san martin. Asiq siempre apoyando a la gorda."],
 ['Una fotito en el cine pq te daba verguenza... jajaja', '8 de julio de 2026.'],
 ['Cualquier plan, con vos.', '3 de junio de 2026.', "Te acordas que yo te decia que registro los lugares con personas?, lucciano claramente tiene tu nombre escrito."],
 ['Nuestro pequeño caos.', '28 de agosto de 2026.'],
 ['Ni novios eramos...', '18 de junio de 2025.', "Te voy a contar algo q no sabes de ese dia, cuando estabamos por ir a la iglesia para jurar a la bandera la Ximena me dice “no la vas a saludar a tu chica?” yo obvio me hacia el dificil jajajaj y la ximena me convenció diciendo “ no te da?? “ eso es lo peor que le podes decir a Patricio Gil Garau. Claramente te termine buscando para sacar esta foto..."],
 ['Y seguir sumando historias.', '06 de agosto de 2026.'],
 ['De las primeras fotos en la españa...','29 de marzo 2029.'], ['La sorpresa de tu cumple amor.','14 de julio de 2026.'], ['jura a la bandera de Patricio','27 de noviembre de 2025.'], ['Mi primera demostracion de afecto... jajaja','7 de noviembre de 2025.', "Ese dia tenia ganas de regalarte algo, yo sabia q algo material no era lo mismo que algo simbolico como eso y te voy a contar algo, ya por esas epocas empezaba a pensar en elegirte como mi novia."], ['Ese dia alguien volvio con buzo nuevo.','14 de junio de 2026.', "Nose porque me encanta esa foto, me acuerdo que ese dia estaba bastante frio y cuando te di el buzo me mori de ternura por como te quedaba de grande jajaja, tiempo despues lo usaste para salir y descubrimos que te quedaba solo un poquiiito mejor que a mi."], ['Literalmente nosotros.','28 de agosto de 2026.', "Una foto que nos representa a nosotros sin prejuicios, sin importar q digan los demas. Simplemente nosotros y mi hermosa, fachera y acogedora cama."]
 ].map(([caption,date,description=""],i)=>({src:`./photos/photo-${String(i+1).padStart(2,'0')}.jpg`,caption,date,description,alt:`Patricio e Iara: ${caption}`})),
 videos: [
 {type:'video',src:'./videos/video-01.mp4',poster:'./videos/poster-01.jpg',caption:'Huevini a la parmeggini.',date:'',alt:'Video de un recuerdo de Patricio e Iara'},
 {type:'video',src:'./videos/video-02.mp4',poster:'./videos/poster-02.jpg',caption:'El detras de escena.',date:'',alt:'Video de otro momento de Patricio e Iara'}
 ],
 timeline: [
 ['01 JUN 2025','El comienzo de nuestras charlas','Acá empieza el historial que guardamos. Y entre risas, empezaba también algo nuestro.'],
 ['02 JUN 2025','Los primeros “te quiero”','A las 00:07, Pato escribió: “yo te quiero a vos”. El primer registro de esas palabras en nuestro chat.'],
 ['05 JUL 2025','¿Y si somos novios?','“q somos novios sjajajaj”, escribió Iara. La palabra ya se nos escapaba, mucho antes de hacerlo oficial.'],
 ['11 JUL 2025','El primer “te amo” del chat','“JAJAJAJAJAJA yo te amo a vos”. Entre una risa y otra, Iara lo dijo.'],
 ['18 MAR 2026 · 21:00','Ahora sí, nosotros.','El comienzo oficial. Nuestra fecha, nuestra hora y todos los segundos por venir.'],
 ['12 ABR 2026','Una foto, otro recuerdo','Un beso junto al agua. Y la suerte de seguir llenando este álbum.', './photos/photo-01.jpg']
 ],
 messages: [
 ['Patricio','02/06/2025 · 00:07','yo te quiero a vos'],
 ['Patricio','02/06/2025 · 15:07','te quiero mucho'],
 ['Iara','05/07/2025 · 22:56','q somos novios sjajajaj'],
 ['Iara','11/07/2025 · 23:16','JAJAJAJAJAJA yo te amo a vos'],
 ['Iara','14/07/2025 · 04:23','Yo tamebin te quiero tonto'],
 ['Patricio','25/09/2025 · 19:06','por dios como te amo'],
 ['Iara','18/03/2026 · 21:08','te amo'],
 ['Iara','04/05/2026 · 23:54','yo te amo con todo mi corazón']
 ],
 stats: {total:170545,iara:96775,patricio:73770,audios:17081,iaraAudios:12016,images:4207,stickers:4169,videos:617,calls:276,days:450,love:818,loveVariants:973,hate:210,iaraHate:208,patoHate:2,hateVariants:243,iaraHateVariants:229,patoHateVariants:14,iaraStarts:239,patoStarts:121,peak:1625},
 letter: 'Iara:\n\nHice este pequeño lugar para guardar una parte de todo lo que vivimos. Nuestras fotos, nuestras charlas, nuestros audios interminables y cada uno de los segundos que seguimos sumando juntos.\n\nGracias por bancarme en todas mis locuras, amor.\n\nTe amo.\n\nPatricio.',
 closing: ['Entre 170.545 mensajes, 818 ‘te amo’ y los cientos de horas juntos','Siempre me sacaste aunque sea unos segundos de mis problemas.','Te amo un poquito...']
};
