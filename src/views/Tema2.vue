<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 El emprendedor
    .row.align-items-center.mb-5
      .col-lg-7
        p Emprendedor es un término muy usado hoy en día, sobre todo por el auge de las nuevas tecnologías que han impulsado proyectos que se convierten en oportunidades de emprendimiento a través de redes sociales y diversos canales. Si se analiza el término se puede encontrar que muchos autores concuerdan en que el emprendedor es un pionero y precisamente, la palabra emprendedor viene del término francés <em>entrepreneur</em>, que significa pionero.
        p Es decir, <span class='fcs30'>que el emprendedor es una persona que se arriesga y que busca innovar para satisfacer una necesidad y generar una oportunidad de negocio o empresa (Castillo, 1999)</span>.
        p Lo importante es entender que, así como el emprendimiento nace de una actitud, de un factor interno por innovar, existen características que enmarcan al emprendedor y que se hace necesario conocerlas para poder apropiarlas.
      .col-lg-5(data-aos='fade-right')
        figure
          img(src='@/assets/curso/t1/f10.png' alt='Figura relacionada')
    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Características del emprendedor
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos='fade-right')
        figure
          img(src='@/assets/curso/t2/f5.png' alt='Figura relacionada')
      .col-lg-7
        p El emprendedor debe tener características personales que le permitan crecer y aprender en esa gran decisión de emprender. Para apropiar mejor estos conceptos se invita a consultar el siguiente video.
        //a.anexo.mb-4(href="https://www.youtube.com/watch?v=8V-Vn04ynCs&t=138s" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Características emprendedoras personales
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8V-Vn04ynCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Triángulo de la responsabilidad
    p.mb-5 La responsabilidad es un aspecto importante a tener en cuenta en todo lo que una persona se propone, ya que el emprendedor debe autogestionarse y comprometerse consigo mismo en la consecución de resultados. Un instrumento interesante que permite entender la importancia de la responsabilidad es el triángulo de la responsabilidad, como se aprecia en la siguiente figura.
    .col-lg-5.mx-auto.mb-4(data-aos='flip-right')
      figure
        img(src='@/assets/curso/t2/f1.svg' alt='Triángulo de la responsabilidad')
        figcaption Nota. Tomado de la cartilla de comportamiento emprendedor SENA.
    .col-lg-7.mx-auto.mb-5
      .tarjeta.fondodegradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/laptop-icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco.mb-0 Para entender la interacción del triángulo de la responsabilidad con el emprendedor se invita a consultar el video “Dimensiones emprendedoras”.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=LHi0v6fhARM" target="_blank")
                    span Ver más
                    i.fas.fa-link
    Separador
    #t_2_3.titulo-segundo
      h2 2.3 Competencias del emprendedor
    .contenedor.bg2.py-5
      .row.align-items-center.mb-5
        .col-lg-7
          p Se ha preguntado ¿qué capacidades necesita un emprendedor?, tal vez las primeras respuestas giren en torno a habilidades específicas de su idea, por ejemplo, si se trata de un emprendimiento de publicidad para empresas en redes sociales, seguramente lo primero en que se piensa es en capacidades en diseño, fotografía, redacción y posiblemente en ventas, pero realmente el emprendedor requiere algo que va más allá y es el caso de las competencias emprendedoras.
          .bloque-texto-d.color-primario.p-4.mb-4
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              h3.text-regular Cuando se habla de competencia se hace referencia a actitudes, conocimientos y habilidades para realizar una tarea o alcanzar un objetivo, es decir, que no solamente es conocer, sino que también hay que desarrollar habilidades prácticas y tener actitudes correctas.
              i.fas.fa-quote-right
            .bloque-texto-d__autor 
              .h5.mb-0 (SENA, s.f.).
        .col-lg-5
          figure
            img(src='@/assets/curso/t2/f2.png' alt='Jóvenes con dispositivos móviles')
      p.mb-5 A continuación, se presenta una infografía en la cual puede revisar las competencias del emprendedor.
      
      h3.mb-4.text-center <span class='fcp texto-blanco p-3' style='border-radius:2rem 2rem 0 0;'>Competencias del emprendedor</span>
      .row.align-items-end.ofVisible.traslape1.fila1
        .col-lg-3(data-aos='fade-right').ofVisible
          figure.ofVisible
            img(src='@/assets/curso/t2/f3-1.svg' alt='imagen relacionada')
        .col-lg-8.frosa.hrcac.tltrBR(data-aos='fade-left')
          .h290px.p-5
            .ms-5
              h4.pt-5 Visualizar
              p.pb-5 Es el reconocimiento de los diferentes objetivos individuales y sus  interrelaciones, valorando sentimientos y conocimientos previos, de acuerdo con la realidad que rodea el proyecto o actividad. Prestar atención a una definición clara de su propósito facilita las cosas y es más eficaz, pues permite enfocar mucho mejor sus esfuerzos.
      .row.align-items-end.ofVisible.traslape2
        .col-lg-3(data-aos='fade-right').ofVisible
          figure.ofVisible
            img(src='@/assets/curso/t2/f3-2.svg' alt='imagen relacionada')
        .col-lg-8.fGrisAzul.hrcac.tltrBR(data-aos='fade-left')
          .h290px.p-5
            .me-5
              h4.pt-5 Identificar
              p.pb-5 Las limitaciones externas y propias de cada persona siempre existen, lo que implica la necesidad de generar alternativas y opciones para tomar el mejor camino, de acuerdo con la situación. La clave está en cómo enfocar la dirección: en forma rutinaria, en forma general o de manera creativa. Todas son posibles, pero así son los resultados.
      .row.align-items-end.ofVisible.traslape1
        .col-lg-3(data-aos='fade-right').ofVisible
          figure.ofVisible
            img(src='@/assets/curso/t2/f3-3.svg' alt='imagen relacionada')
        .col-lg-8.frosa.hrcac.tltrBR(data-aos='fade-left')
          .h290px.p-5
            .ms-5
              .ms-5
                h4.pt-5 Decidir
                p.pb-5 Siempre llega el momento de decidir qué hacer, es decir, tomar una decisión combinando la necesidad de tomarla con las presiones y el contexto. Intervienen además la evaluación del riesgo y búsqueda de medios para reducirlo.
      .row.align-items-end.ofVisible.traslape2.penultimaFila
        .col-lg-3(data-aos='fade-right').ofVisible
          figure.ofVisible
            img(src='@/assets/curso/t2/f3-4.svg' alt='imagen relacionada')
        .col-lg-8.fGrisAzul.hrcac.tltrBR(data-aos='fade-left')
          .h290px.p-5
            .me-5
              h4.pt-5 Diseñar
              p.pb-5 El “cómo hacerlo”, muchas veces es el obstáculo. Este puede superarse con un enfoque creativo, aun haciendo o buscando lo que todos los demás hacen. Se puede reducir tiempo y esfuerzo, además de ser más efectivos, es decir, realmente ser estratégicos.
      .row.align-items-end.ofVisible.traslape1
        .col-lg-4(data-aos='fade-right').ofVisible
          figure.ofVisible
            img(src='@/assets/curso/t2/f3-5.svg' alt='imagen relacionada')
        .col-lg-8.ultimolg8.frosa.hrcac.tltrBR(data-aos='fade-left')
          .h290px.p-5
            .ms-5
              h4.pt-5 Actuar
              p.pb-5 Se refiere a transformar las estrategias en acciones, es decir, “actuar”, “hacer”, uniendo activamente a la persona con el proyecto. Dejar el plano del pensamiento “aterrizando” en la concreción.
    Separador
    #t_2_4.titulo-segundo
      h2 2.4 Habilidades del Siglo XXI para el emprendedor
    .row.align-items-center.mb-5
      .col-lg-7
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 Sin duda alguna, un emprendedor es una persona en constante reinvención y debe tener la disposición para desarrollar habilidades conforme la humanidad va avanzando, por ejemplo, si se hiciera un análisis de lo que sucedía hace unos 20 años escuchar la palabra <em>community manager</em> era algo que no tenía sentido, pero hoy es un término común, lo que  lleva a pensar que las personas han tenido que desarrollar habilidades para poder ejercer esa labor y por supuesto, los emprendedores para integrar las habilidades de ese cargo a sus emprendimientos y planeaciones, reconocer la importancia de las redes sociales y la creación de contenido.
        .cajon-c.p-3
          p.mb-0 Según la Unión Europea las habilidades que debe tener un emprendedor son:
        .px-4
          ul.lista-ul--color
            li 
              .bullet.fcs
              p.mb-0 <b>Comunicación:</b> tanto en la lengua materna como en una extranjera.
            li 
              .bullet.fcs
              p.mb-0 <b>Matemáticas:</b> desarrollan un pensamiento lógico.
            li 
              .bullet.fcs
              p.mb-0 <b>Ciencia y tecnología:</b> reconocer el entorno y sus avances es de gran ayuda.
            li 
              .bullet.fcs
              p.mb-0 <b>Habilidades sociales y cívicas:</b> las buenas relaciones son claves para un emprendedor.
            li 
              .bullet.fcs
              p.mb-0 <b>Habilidad digital:</b> en la medida de lo necesario y del aprendizaje para el emprendedor.
            li 
              .bullet.fcs
              p.mb-0 <b>Aprender a aprender:</b> vital para poder adaptarse a los cambios, aprender todo el tiempo.
            li 
              .bullet.fcs
              p.mb-0 Sentido de iniciativa y espíritu de empresa.
            li 
              .bullet.fcs
              p.mb-0 Conciencia y expresión cultural (Vargas, 2015).
        p.px-4 Asimismo, la UNESCO menciona las siguientes capacidades para el emprendedor:
        .px-4
          ul.lista-ul--color
            li 
              .bullet.fcs
              p.mb-0 Comprobar mis propios potenciales.
            li 
              .bullet.fcs
              p.mb-0 Detectar oportunidades.
            li 
              .bullet.fcs
              p.mb-0 Generar ideas valiosas.
            li 
              .bullet.fcs
              p.mb-0 Detectar y evitar riesgos.
            li 
              .bullet.fcs
              p.mb-0 Conocer los recursos necesarios.
            li 
              .bullet.fcs
              p.mb-0 Llevar las ideas a la práctica (Lindner, 2021).
      .col-lg-5(data-aos='fade-left')
        figure
          img(src='@/assets/curso/t2/f4.png' alt='Competencias del emprendedor')
    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 Finalmente, es probable que a veces se piense que es mucho lo que se necesita, pero hay que tener calma y entender que todo es un proceso y que las habilidades se van desarrollando en el transcurso del mismo.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lT-2rQuD9eo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
