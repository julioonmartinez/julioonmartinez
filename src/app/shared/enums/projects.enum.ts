import { Project } from "../interfaces/project";

export const PROJECTS: Project[]=  [
  { 
    id:'P001',
    type: 'project',
    title:'Menuup',
    description:'Crea menús digitales gratuitos para restaurantes con MenuUp. Comparte con QR, agrega fotos, y recopila encuestas de clientes.',
    technologies:['Angular 18', 'Angular Material', 'Firestore' , 'FireAuth', 'Firestorage'],
    content:'MenuUp es una aplicación web que permite a los restaurantes crear menús digitales de forma rápida, sencilla y gratuita. Con herramientas para agregar productos, categorías, y activar o desactivar platillos, los menús pueden incluir fotos atractivas que mejoren la experiencia del cliente. Además, facilita la difusión de menús mediante códigos QR y recopila encuestas de satisfacción. Los restaurantes pueden contactar a clientes que dejen su correo o teléfono en las encuestas, con acceso a estos datos por solo 129 MXN al mes.',
    createdAt: new Date(),
    urlImage:'https://firebasestorage.googleapis.com/v0/b/julioonmartinez-83a75.firebasestorage.app/o/Violeta%20Tel%C3%A9fonos%20Celular%20Foto%20Flores%20Marketing%20Presentaci%C3%B3n%20de%20Ventas%20(3).webp?alt=media&token=28839652-8e3a-4af8-a639-5aa21888de03',
    user:'julioonMartinez',
    linksGit: 'https://github.com/julioonmartinez/menuup',
    linkWeb: 'https://menuupp.com/'
    
  },
  { 
    id:'P002',
    title:'GoldberryApp',
    type: 'project',
    description:'Gestión integral de inventarios y fletes para empresas de berries con Angular, Firebase y Google Sheets. Optimiza el control de envíos y datos en tiempo real.',
    technologies:['Angular 18', 'TypeScript', 'Firestore', 'CloudFunctions' , 'PrimeNg', 'Api Google sheet'],
    content:'Goldberry App es una aplicación integral diseñada para empresas dedicadas al comercio de berries. Permite gestionar inventarios, coordinar envíos (de cualquier ubicación a CDMX), y generar resúmenes detallados de fletes por camión. Con funcionalidades para agregar, editar y eliminar registros de viajes en tránsito o entregados, la app ofrece una experiencia intuitiva y eficiente. Construida con Angular 18 standalone, PrimeNG, y Firebase, incorpora autenticación con Google y sincronización con Google Sheets, garantizando una gestión moderna y conectada de datos.',
    createdAt: new Date(),
    urlImage:'https://firebasestorage.googleapis.com/v0/b/julioonmartinez-83a75.firebasestorage.app/o/Violeta%20Tel%C3%A9fonos%20Celular%20Foto%20Flores%20Marketing%20Presentaci%C3%B3n%20de%20Ventas%20(4)%20(1).webp?alt=media&token=be172ecb-6e73-4fcc-bcbc-a4a9eb651aea',
    user:'julioonMartinez',
},

{ 
  id:'DV001',
  title:'2022/W38: American Business Formations',
  type: 'dataViz',
  description: 'Visualización del auge en la creación de negocios durante la pandemia (2020-2022) basada en estadísticas oficiales del Censo de EE. UU.',
  technologies:['Tablue', 'Excel', 'MakeoverMonday'],
  content:'2022/W38: American Business Formations es un análisis basado en los datos oficiales de la Oficina del Censo de los Estados Unidos, que monitorea las tendencias en la creación de nuevos negocios hasta el año 2022. Este proyecto destaca el notable aumento en la formación de negocios durante la pandemia de COVID-19, un fenómeno sin precedentes que subraya el espíritu emprendedor frente a la adversidad. La visualización proporciona una perspectiva clara y accesible sobre este auge, utilizando fuentes confiables para ilustrar cómo los negocios han evolucionado en los últimos años.',
  createdAt: new Date(),
  urlImage:'https://firebasestorage.googleapis.com/v0/b/julioonmartinez-83a75.firebasestorage.app/o/WhatsApp%20Image%202024-11-20%20at%2009.13.42_d89bd1eb.jpg?alt=media&token=e4fc256c-decb-46ab-aac2-f925c7a4aa76',
  user:'julioonMartinez',
},

]