<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Emprendimiento
    .row.align-items-center.mb-4
      .col-lg-3(data-aos='fade-right')
        figure.mb-4
          img(src='@/assets/curso/t1/f1.svg' alt='Mujer con laptop y bombillo representando una idea')
      .col-lg-9
        p La primera pregunta que puede surgir frente a este tema es:
        span.cuadroRDerecho.texto-blanco.mb-4.fcac ¿Qué es el emprendimiento?
        .mb-4
        p Término que comúnmente se escucha en medios y en diversos entornos.
        .bloque-texto-a.color-primario.invertido-bta.p-4.p-md-5.mb-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-12.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Un concepto interesante es el que aporta Jeffrey A. Timmons “el emprendimiento significa tomar acciones humanas, creativas para construir algo de valor a partir de prácticamente nada” (Timmons, 1989), así que el autor menciona elementos como la acción humana, ya que el emprendimiento requiere que exista iniciativa por parte de la persona y que pase de una idea hacia una acción.
    p.mb-5 El emprendimiento viene del ser humano como una actitud en la que es necesario aprovechar las oportunidades que se pueden presentar para innovar y desarrollar valiosas ideas, desde luego cuando se logran monetizar estas iniciativas surgen grandes negocios que generan un aporte a la sociedad.
    .col-lg-7.mx-auto.mb-5(data-aos='fade-right')
      figure
        img(src='@/assets/curso/t1/f2.svg' alt='figura relacionada')
    p En el esquema anterior se muestra la importancia de la creatividad para poder satisfacer la necesidad del cliente o clientes, a partir del valor agregado o factor diferenciador que se aplique al desarrollo de la idea y convertirla realmente en una innovación.
    .row.align-items-center.mb-5
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El emprendimiento no solo entrega valor a un cliente, sino también aporta a las oportunidades de ingresos a personas que trabajan para el emprendimiento, proveedores, entre otros.
        .tarjeta.fondodegradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/laptop-icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco.mb-0 Para entenderlo de otra forma se invita a revisar en el material complementario el  video que comparte el Ministerio de las  TIC sobre emprendimiento.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=WTiM1yq99oI" target="_blank")
                    span Ver más
                    i.fas.fa-link
        p Para llevar a cabo alguna idea de emprendimiento se recomienda analizar lo que sucede en su contexto y plantearse algunas preguntas:
        ul.lista-ul--color
          li 
            .bullet.fcs
            p.mb-0 ¿Qué emprendimientos reconoce a nivel regional, nacional y mundial que logren inspirar una idea innovadora?
          li 
            .bullet.fcs
            p.mb-0 ¿Se tiene algún modelo a seguir de emprendimiento?
          li 
            .bullet.fcs
            p.mb-0 ¿Hay alguna idea que se quiera materializar?
        p Mientras reflexiona al respecto, se invita a ver algunas historias inspiradoras de emprendimiento.
      .col-lg-5
        figure
          img(src='@/assets/curso/t1/f3.png' alt='mujer alegre')
    Separador
    #t_1_1.titulo-segundo
      h2 1.1 Historias inspiradoras

    .row.align-items-center.bg5.p-5.justify-conten-between.bgcta.mb-4
      .col-lg-4
        figure
          img(src='@/assets/curso/t1/f11.png' alt='NETFLIX')
      .col-lg-7
        .titulo-segundo.sec-blanco
          h2.texto-blanco Historia de Netflix
        p.mb-5.texto-blanco Se empieza hablando de Netflix, que hoy se considera un gigante del streaming de series y películas, pero es interesante conocer sobre su historia para identificar elementos del emprendimiento, para ello, observe la siguiente infografía.
        a.boton.color-acento-botones.me-3.indicador__container(
          :href="obtenerLink('/downloads/Caso_Netflix.pdf')"
          target="_blank"
          type="application/pdf"
          @mouseover="mostrarIndicador = false"
        )
          span.cp Descargar
          i.fas.fa-file-download.cp
          .indicador--click(v-if="mostrarIndicador")

    .row.align-items-center.mb-5
      .col-lg-4
        figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/t1/f4.png' alt='mujer con una tablet')
      .col-lg-8
        .cajon-b.color-acento-contenido.p-3
          p.mb-0 Uno de los factores claves de Netflix fue analizar lo que se venía y no quedarse atrás, de hecho, uno de los gigantes de la industria de las películas en los 90 era Blockbuster y hoy ya no existe, posiblemente porque no tuvo en cuenta los cambios que venían con la influencia de Internet en las casas y lo que esto representaba en la sociedad de consumo, que cambió sus hábitos, volviéndose obsoleto y, sin ninguna alternativa a este cambio dejó de existir en el mercado.
        .cajon-c.px-3
          p.mb-0 En Colombia también hay varias historias de emprendimiento, lo que ha llevado a que exista diversas convocatorias para promover estas nuevas ideas, revise, por ejemplo, en el material complementario un video de un emprendimiento en videojuegos que tuvo la oportunidad de ganar una convocatoria en el Ministerio TIC.
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2e6z-A8wKL8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p Sin duda alguna, al revisar estas historias de éxito hay conclusiones interesantes como la necesidad de ser creativos, analizar tendencias, innovar tecnológicamente y en todo aspecto, y estar en constante actualización. Por eso, hoy es importante que se reflexione en el contexto en el cual se está inmerso, <span class="cac"><b>“la era digital”</b></span>, y comprender que es momento de aprender y aplicar nuevas tecnologías a las ideas que surgen en respuesta a necesidades o desafíos, porque los emprendimientos cada día requieren más herramientas digitales. Continúe revisando el material para así apropiar conceptos del emprendimiento digital.
    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Emprendimiento digital
    .row.align-items-center.mb-5
      .col-lg-5(data-aos='fade-right')
        figure.mb-4
          img(src='@/assets/curso/t1/f5.svg' alt='Persona')
      .col-lg-7
        p La era digital ha llegado, cada día es más fácil desarrollar procesos educativos, comerciales, personales o de diversa índole con solo tener una conexión a Internet y un teléfono móvil o dispositivo de conexión, lo que lleva a las personas a desarrollar nuevas habilidades y adaptarse a los cambios.
        .bloque-texto-d.color-primario.p-4.mb-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h5.text-regular Piense por un momento qué es lo primero que se imagina cuando le mencionan los términos <b><span class='cac'>“Emprendimiento digital”</span></b>, es posible que lo primero que traiga a su mente sea un emprendimiento de videojuegos, creadores de contenido, diseñadores de aplicaciones móviles y negocios asociados a las Tecnologías de la Información y la Comunicación, y tendría mucha razón; sin embargo, el emprendimiento digital también está asociado a productos y servicios físicos que usan las tecnologías para poder ser comercializados, para publicidad y procesos que soporten la actividad económica, potenciando el negocio.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 - (Escobar, 2009).
        .tarjeta.fondodegradado.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/laptop-icon.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.texto-blanco.mb-0 Para ampliar un poco la experiencia con el emprendimiento digital se le recomienda revisar el video que se encuentra en el material complementario sobre un <em>bootcamp</em> de emprendimiento digital en Guaviare, en el que las personas hablan de su experiencia.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ispoPs-zQLk" target="_blank")
                    span Ver más
                    i.fas.fa-link
    p.mb-5 Cuando los emprendedores deciden incorporar nuevas tecnologías a sus proyectos con herramientas  que les permite agilizar muchos procesos se puede pensar en emprendimiento digital; es importante resaltar que la inclusión de estas tecnologías permite analizar el entorno, las tendencias y aprovechar las oportunidades de un mercado potencial, por eso, a continuación, se aborda un tema que permite entender la importancia del entorno y lo que sucede a nuestro alrededor en un emprendimiento.
    Separador
    #t_1_3.titulo-segundo
      h2 1.3 La importancia del entorno
    .contenedor.bg1.mb-5.py-5
      .row.align-items-center
        .col-lg-7
          span.cuadroRDerecho.texto-blanco.mb-4.fcac ¿Cuántas decisiones tomamos en la vida?
          .mb-4
          p Seguramente hay un número gigantesco en cada una de nuestras mentes, y puede que si se reduce la pregunta a ¿cuántas decisiones tomamos en un día? El número de decisiones sigue siendo grande, desde el desayuno hasta la ropa que se usa. 
          p Pero qué pasa con esas decisiones, si por ejemplo, se imaginara un juego de ajedrez se tendría una cantidad considerable de decisiones; la ficha posible a tomar, el movimiento a realizar; para tomar esa <span class='cac'><b>decisión</b></span> no solo se debe basar en lo que se quiere hacer, sino también en lo que hay en el <span class='cac'><b>entorno</b></span>.  
          p Si se quisiera mover la reina en el tablero de ajedrez se debe analizar el tablero y los movimientos realizados por el rival. Así en un ejercicio de analogía, de igual manera, para elegir la ropa que se quiere usar seguramente se tendrá que pensar en el entorno, es decir, si se desea ir al trabajo, a una fiesta, si el clima es cálido, si está lloviendo. <span class='cac'><b>Todas estas son consideraciones importantes para tomar una decisión</b></span>.
          p Cuando se quiere llevar a cabo un emprendimiento es importante también analizar el entorno para poder tomar decisiones frente al emprendimiento, la publicidad, reconocer convocatorias y apoyos, identificar posibles aliados, actores, entre otros. En ese sentido, el primer análisis que debe contemplar es sobre los sectores económicos del país; en la siguiente infografía encuentra un resumen de los sectores económicos y su clasificación según actividades, por ello es momento de analizar este recurso.
        .col-lg-5(data-aos='fade-left')
          figure
            img(src='@/assets/curso/t1/f6.png' alt='Mujer con laptop')
    p.text-center.mb-5 <span class="cuadroRDerecho texto-blanco fcac text-center">Sectores económicos del país</span>
    .row.justify-content-center.mb-5  
      .col-lg-11
        .row    
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center Primario
            figure.mb-3
              img(src='@/assets/curso/t1/f7-1.svg' alt='imagen relacionada')
            p.text-center Producción y agro
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center Secundario
            figure.mb-3
              img(src='@/assets/curso/t1/f7-2.png' alt='imagen relacionada')
            p.text-center Industria, construcción y manufactura
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center Terciario
            figure.mb-3
              img(src='@/assets/curso/t1/f7-3.png' alt='imagen relacionada')
            p.text-center Servicios, comercio, bancos, educación

    p.text-center.mb-5 <span class="cuadroRDerecho texto-blanco fcac text-center">Clasificación según actividad económica</span>
    .row.justify-content-center.mb-4   
      .col-lg-11
        .row   
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 01 Agropecuario
            figure.mb-5
              img(src='@/assets/curso/t1/f7-4.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 02 Servicios
            figure.mb-5
              img(src='@/assets/curso/t1/f7-5.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 03 Industrial
            figure.mb-5
              img(src='@/assets/curso/t1/f7-6.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 04 Transporte
            figure.mb-5
              img(src='@/assets/curso/t1/f7-7.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 05 Comercio
            figure.mb-5
              img(src='@/assets/curso/t1/f7-8.svg' alt='imagen relacionada')    
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 06 Financiero
            figure.mb-5
              img(src='@/assets/curso/t1/f7-9.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 07 Construcción
            figure.mb-5
              img(src='@/assets/curso/t1/f7-10.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 08 Minero energético
            figure.mb-5
              img(src='@/assets/curso/t1/f7-11.svg' alt='imagen relacionada')
          .col-lg-4.mb-5.mb-lg-0(data-aos='flip-right')
            h4.text-center 09 Comunicaciones
            figure.mb-5
              img(src='@/assets/curso/t1/f7-12.svg' alt='imagen relacionada')
    .col-lg-9.mx-auto.mb-5
      a.anexo.mb-4(:href="obtenerLink('/downloads/ElSistemaEconomico.pdf')" target="_blank")
        .anexo__icono
          img(src="@/assets/template/icono-pdf.svg")
        .anexo__texto
          p <b>Anexo.</b> Para mayor información, se invita a consultar el documento adjunto del Banco de la República denominado “El sistema económico” desde la página 16 a la 18, ubicado en el material complementario.
    .col-lg-9.mx-auto.mb-5
      .row.align-items-center
        .col-lg-5(data-aos='fade-right')
          figure
            img(src='@/assets/curso/t1/f8.svg' alt='Hombre examinando un folio')
        .col-lg-7
          .cajon.color-primario.p-4.mb-4
            p.mb-0 Después de analizar lo anterior, piense en alguna idea de negocio que tenga en mente y trate de ubicarla en el sector o sectores al cual podría pertenecer. Además, revise las razones por las cuales es importante reconocer el entorno.
          p En la siguiente figura se da a conocer lo que facilita el reconocimiento del entorno.
    .col-lg-9.mx-auto.mb-5(data-aos='flip-up')
      figure
        img(src='@/assets/curso/t1/f9.svg' alt='Figura relacionada')
        figcaption Nota. Adaptado de García (2018).
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
