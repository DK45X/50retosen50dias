const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Día de Muertos (Mexico)',
    position: 'Tradición',
    photo:
      'https://conexpres.com/wp-content/uploads/2020/02/mexico-dia-muertos-4.jpg',
    text:
      "El día 1° de noviembre, se celebra el Día de Todos los Santos de acuerdo a la tradición católica. En esta fecha se recuerdan a todos aquellos que murieron sin ser beatos y santos, además de quienes fallecieron a temprana edad como los niños. De acuerdo a la religión católica, el Día de los Fieles Difuntos que tiene lugar el 2 de noviembre, se realiza una oración por aquellos que no han accedido al paraíso.",
  },
  {
    name: 'Chichén Itzá (Yucatán)',
    position: 'Touristic place',
    photo: 'https://lanzateyviaja.com/wp-content/uploads/2019/05/Chichen-Itz%C3%A1-Mexico-768x432.jpg',
    text:
      'Ubicado al norte de la Península de Yucatán, podrás encontrar Chichén Itzá, la ciudad mexicana más famosa del mundo y la segunda zona arqueológica más visitada. Se encuentra a una hora en carro de la ciudad de Mérida y es el lugar perfecto para conocer la cultura e historia maya. Además, fue nombrado Patrimonio Cultural de la Humanidad en 1988.Lo primero que debes hacer es visitar el Templo de Kukulkán, nombre del dios a quien está dedicado el lugar. Se trata de una pirámide imponente, la cual fue elegida como una de las Siete Nuevas Maravillas del Mundo Moderno en el 2007.',
  },
  {
    name: 'Cancún e Isla Mujeres (Quintana Roo)',
    position: 'Touristic place',
    photo: 'https://lanzateyviaja.com/wp-content/uploads/2021/01/isla-mujeres-mexico.jpg',
    text:
      "Este es uno de los lugares turísticos de México donde puedes disfrutar de las hermosas playas del caribe mexicano al estilo hippie, de mochilero o para una escapada romántica en pareja. Su ambiente es muy tranquilo y sencillo. Si no quieres pasar por Cancún para llegar a esta isla puedes ir hasta la terminal marítimo de Puerto Juárez.Por otro lado, si estás en la popular ciudad veraniega puedes llegar hasta el kilómetro 4 de la zona hotelera donde hay un puente conocido como Calinda. Aquí puedes agarrar una lancha que te dejará en la isla.",
  },
  {
    name: 'Xochimilco (Ciudad de Mexico)',
    position: 'Touristic place',
    photo: 'https://lanzateyviaja.com/wp-content/uploads/2019/04/Xocimilco-Mexico.jpg',
    text:
      "Llamado “campo de flores”, Xochimilco es un conjunto de canales en Náhuatl que existen desde la época prehispánica y que ahora se han convertido en un atractivo turístico que sin dudas debes visitar para pasear en sus trajineras.Actualmente se pueden observar las chinampas, que son sembradíos artificiales creados sobre el lago. Los podrás ver sobre las típicas trajineras, los cuales son lugares con un excelente ambiente reinante y una belleza impactante.Este es uno de los sitios turísticos de México que es considerado Patrimonio Cultural de la Humanidad y es uno de los lugares ideales para ir los fines de semana con niños.",
  },
  {
    name: 'Parque Xcaret (Quintana Roo)',
    position: 'Touristic place',
    photo: 'https://lanzateyviaja.com/wp-content/uploads/2019/04/Parque-Xcaret-Mexico.jpg',
    text:
      "Xcaret es un parque natural en Playa del Carmen donde disfrutarás de ríos subterráneos y de la riqueza natural y cultural del pueblo azteca. Diviértete en más de 50 atractivos enmarcados por los paisajes espectaculares de este Majestuoso Paraíso de Mexico. Una experiencia única de este lugar es nadar por los ríos subterráneos de Xcaret que cuentan con tres canales de agua dulce, los cuales te llevarán a través de cuevas, túneles y paisajes espectaculares. Luego podrás recorrer los senderos de la jungla del parque ecoarqueológico Xcaret hasta las mejores playas de la Riviera Maya y finalizar tu visita en el Acuario de Arrecife de Coral.",
  },
  {
    name: 'Tequila (Jalisco)',
    position: 'Touristic place',
    photo:
      'https://lanzateyviaja.com/wp-content/uploads/2019/04/Tequila-Mexico.jpg',
    text:
      'Cuna de la bebida nacional, este es uno de los lugares para visitar en México. El Pueblo Mágico de Tequila se encuentrsa ubicado en Jalisco y es uno de los principales destinos turísticos de Mexico. Precisamente, este es uno de los pueblos donde se produce el tequila. Pero además de la bebida, este pueblo es conocido por sus hermosos paisajes y construcciones. Te sorprenderá saber que en 2006 fue nombrado Patrimonio Cultural de la Humanidad por la Unesco debido a las antiguas instalaciones industriales que alberga. Uno de los principales atractivos de la ciudad del tequila es la oportunidad que te da para conocer más sobre la bebida. Hoy en día existe un recorrido turístico en tren que va desde Guadalajara hasta Tequila, llamado El Tequila Express.',
  },
  {
    name: 'Santuario de las Mariposas (Michoacán)',
    position: 'Touristic place',
    photo: 'https://lanzateyviaja.com/wp-content/uploads/2019/04/Santuario-de-las-mariposas-monarcas-michuacan.jpg',
    text:
      'Si te encuentras de visita por el pintoresco Valle de Bravo, tienes que ir a uno de los destinos paradisíacos de México, la Reserva de la Biósfera Santuario de la Mariposa Monarca. Se encuentra en las zonas boscosas de Donato Guerra, Villa de Allende y Temascalcingo. Año tras año este país se convierte en morada de millones de Mariposas Monarca que viajan desde Canadá para habitar los bosques de oyamel de Michoacán y el Estado de Mexico. 5.000 kilómetros en 33 días recorren aproximadamente estos animales de tan solo un gramo de peso para llegar a su destino',
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
