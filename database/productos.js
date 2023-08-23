export const productos = [
    {
      id: 1,
      nombre: "Banco Colón con respaldo",
      precio: 50000,
      imagen:"https://objetosdipo.com.ar/w14/wp-content/uploads/2015/01/imagen-destacada-portfolio-banco-colon-con-respaldo1-270x197_c.jpg",
      categoria:"Bancos"
    },
    {
      id: 2,
      nombre: "Banco Colón sin respaldo",
      precio: 40000,
      imagen:"https://objetosdipo.com.ar/w14/wp-content/uploads/2015/01/imagen-destacada-portfolio-banco-colon-sin-respaldo-270x197_c.jpg",
      categoria:"Bancos"
    },
    {
      id: 3,
      nombre: "Bebedero Cascada",
      precio: 30000,
      imagen:"https://objetosdipo.com.ar/w14/wp-content/uploads/2015/01/imagen-destacada-portfolio-bebedero-cascada1-270x197_c.jpg",
      categoria:"Bebederos"
    },
    {
      id: 4,
      nombre: "Bebedero Gota",
      precio: 25000,
      imagen:"https://objetosdipo.com.ar/w14/wp-content/uploads/2015/02/imagen-destacada-portfolio-bebedero-gota-bco.jpg",
      categoria:"Bebederos"
    },
  ];
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));