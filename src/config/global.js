export default {
  global: {
    componenteFormativo: 'Emprendedor del Siglo XXI',
    descripcionCurso:
      'En este componente podrán encontrar los aspectos básicos que tiene el emprendimiento y el emprendedor, tomando en cuenta las características interiores y su relación con el entorno.',
    imagenBannerPrincipal: require('@/assets/curso/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/banner-bg.jpg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Emprendimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Historias inspiradoras',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Emprendimiento digital',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'La importancia del entorno',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El emprendedor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características del emprendedor',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Triángulo de la responsabilidad',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Competencias del emprendedor',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Habilidades del Siglo XXI para el emprendedor',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Castillo, A. (1999). Estado del arte en la enseñanza del emprendimiento. Cámara de Comercio de Bogotá. ',
      link:
        'http://recursos.ccb.org.co/bogotaemprende/portalninos/contenido/doc2estadodelarteenlaensenanzadelemprendimiento.pdf',
    },
    {
      referencia:
        'Escobar, J. M. (Ed.). (2009). Emprendedor digital: factor clave del éxito en la creación y consolidación de nuevas organizaciones. ',
      link:
        'https://adingores.sserver.es/congresos/web/uploads/cio/cio2009/562-571.pdf',
    },
    {
      referencia:
        'García, M. A., Zerón, M., & Sánchez, Y. (2018). Factores de entorno determinantes del emprendimiento en México. Entramado, 14(1), 88–103. ',
      link: 'https://doi.org/10.18041/entramado.2018v14n1.2712',
    },
    {
      referencia:
        'Henríquez, I., Rocxy, & Caba, S. (2015). El fracaso de Blockbuster y el éxito de Netflix, lecciones aprendidas y otras por aprender. Revista Electrónica Gestión de las Personas y Tecnología, 8(23), 39-48. ',
      link: 'https://www.redalyc.org/articulo.oa?id=477847103004',
    },
    {
      referencia:
        'La República. (2021). Esta es la historia de Rappi, de regalar donas en Bogotá a conquistar la banca digital. ',
      link:
        'https://www.larepublica.co/empresas/conozca-la-historia-de-rappi-de-regalar-donas-en-bogota-a-conquistar-la-banca-digital-3138462',
    },
    {
      referencia:
        'Lindner, J. (2021). Formación al emprendimiento para entidades de EFTP. Guía práctica. UNESCO. ',
      link:
        'https://unevoc.UNESCO.org/pub/entrepreneurial_learning_guide_es.pdf',
    },
    {
      referencia:
        'Rappi. (2021). Qué es Rappi y cómo funciona: conoce cómo mejoramos tu calidad de vida. ',
      link: 'https://blog.rappi.com/que-es-rappi/',
    },
    {
      referencia: 'SENA. (s.f.). Glosario. SENA. ',
      link: 'https://www.sena.edu.co/es-co/ciudadano/Paginas/glosario.aspx',
    },
    {
      referencia:
        'Vargas, F. (2015). Competencias transversales y espíritu emprendedor. UNESCO. ',
      link:
        'http://www.UNESCO.org/new/fileadmin/MULTIMEDIA/FIELD/Santiago/pdf/Vargas.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Características emprendedoras personales',
      significado:
        'Rasgos de la personalidad ligados a las motivaciones de los individuos (logro, afiliación y poder) y que están asociados al éxito de cualquier proyecto personal. Se basan en las investigaciones del psicólogo David McClelland realizadas en la década de los años 60.',
    },
    {
      termino: 'Community manager',
      terminoHtml: '<em>Community manager</em>',
      significado:
        'Profesional encargado de la imagen web de una empresa o personaje, tanto en redes sociales como en medios digitales.',
    },
    {
      termino: 'Emprendedor',
      significado:
        'Persona con actitud innovadora que busca satisfacer una necesidad y generar una oportunidad de negocio o empresa.',
    },
    {
      termino: 'Triángulo de la responsabilidad',
      significado:
        'Esquema que vincula a la persona, el proyecto y la situación, mostrando el equilibrio que es necesario lograr en todo accionar emprendedor. Responsabilidad se entiende como la capacidad de la persona de responder ante las diferentes situaciones que se puedan presentar de una manera proactiva.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). Características emprendedoras personales [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8V-Vn04ynCs&t=138s',
    },
    {
      texto:
        'Ministerio TIC Colombia. (2013). Historias de emprendimiento en Colombia y el mundo [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WTiM1yq99oI',
    },
    {
      texto:
        'Ministerio TIC Colombia. (2018). <em>Bootcamp</em> de emprendimiento digital en Guaviare [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ispoPs-zQLk',
    },
    {
      texto:
        'Ministerio TIC Colombia. (2021). <em>Rival Arts Studio</em>, un emprendimiento desde Atlántico [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Vw9sMht8HI8',
    },
    {
      texto: 'Banco de la República de Colombia. (2006). El sistema económico.',
      tipo: 'Documento',
      descarga: 'downloads/ElSistemaEconómico.pdf',
    },
    {
      texto:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). Dimensiones emprendedoras [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LHi0v6fhARM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Ricardo Rivera Lizcano',
        cargo: 'Instructor',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldán',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nelson Iván Vera Briceño',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres      ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
