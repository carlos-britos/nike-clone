const categories = {
  level1: [
    {
      id: 'destacados',
      name: 'Destacados',
    },
    {
      id: 'hombre',
      name: 'Hombre',
    },
    {
      id: 'mujer',
      name: 'Mujer',
    },
    {
      id: 'niños',
      name: 'Niño/a',
    },
    {
      id: 'accesorios',
      name: 'Accesorios',
    },
    {
      id: 'sale',
      name: 'Sale',
    },
  ],

  level2: [
    {
      id: 'destacados',
      name: 'Destacados',
      items: [
        {
          id: 'destacados_destacados',
          name: 'Destacados',
        },
        {
          id: 'destacados_íconos',
          name: 'Íconos',
        },
        {
          id: 'destacados_lanzamiento',
          name: 'Lanzamiento',
        },
      ]
    },
    {
      id: 'hombre',
      name: 'Hombre',
      items: [
        {
          id: 'hombre_destacados',
          name: 'Destacados',
        },
        {
          id: 'hombre_calzado',
          name: 'Calzado',
        },
        {
          id: 'hombre_ropa',
          name: 'Ropa',
        },
        {
          id: 'hombre_comprar_por_deporte',
          name: 'Comprar por deporte',
        },
      ]
    },
    {
      id: 'mujer',
      name: 'Mujer',
      items: [
        {
          id: 'mujer_destacados',
          name: 'Destacados',
        },
        {
          id: 'mujer_calzado',
          name: 'Calzado',
        },
        {
          id: 'mujer_ropa',
          name: 'Ropa',
        },
        {
          id: 'mujer_comprar_por_deporte',
          name: 'Comprar por deporte',
        },
      ]
    },
    {
      id: 'niños',
      name: 'Niño/a',
      items: [
        {
          id: 'niños_destacados',
          name: 'Destacados',
        },
        {
          id: 'niños_calzado',
          name: 'Calzado',
        },
        {
          id: 'niños_ropa',
          name: 'Ropa',
        },
        {
          id: 'niños_comprar_por_deporte',
          name: 'Comprar por deporte',
        },
        {
          id: 'niños_comprar_por_edad',
          name: 'Comprar por edad',
        },
      ]
    },
    {
      id: 'accesorios',
      name: 'Accesorios',
      items: [
        {
          id: 'accesorios_destacados',
          name: 'Destacados',
        },
        {
          id: 'accesorios_accesorios',
          name: 'Accesorios',
        },
        {
          id: 'accesorios_comprar_por_deporte',
          name: 'Comprar por deporte',
        },
      ]
    },
    {
      id: 'sale',
      name: 'Sale',
      items: [
        {
          id: 'sale_todo_sale',
          name: 'Todo Sale',
        },
        {
          id: 'sale_hombre',
          name: 'Hombre',
        },
        {
          id: 'sale_mujer',
          name: 'Mujer',
        },
        {
          id: 'sale_niños',
          name: 'Niño/a',
        },
      ]
    },
    
  ],

  level3: [
    // destacados
    {
      id: 'destacados_destacados',
      name: 'Destacados',
      items: [
        'Vuelta al cole', 
        'Ojotas y sandalias',
        'Run your run',
        'San Lorenzo',
        'Jordan',
        'Los más vendidos',
        'Sale - Hasta 40% OFF',
      ]
    },
    {
      id: 'destacados_íconos',
      name: 'Íconos',
      items: [
        'Air Jordan 1', 
        'Air Force 1', 
        'Dunk',
        'Air Max', 
        'Pegasus',
        'Infinity Run',
        'Metcon',
      ]
    },
    {
      id: 'destacados_lanzamiento',
      name: 'Lanzamientos',
      items: [
        'Lo nuevo', 
        'Novedades para Él',
        'Novedades para Ella',
        'Novedades en íconos',
        'Novedades en fútbol',
      ]
    },
    // hombre
    {
      id: 'hombre_destacados',
      name: 'Destacados',
      items: [
        'Lo nuevo', 
        'Ojotas y sandalias',
        'Run your run',
        'San Lorenzo',
        'Camisetas de fútbol',
        'Jordan',
        'Los más vendidos',
        'Sale - Hasta 40% OFF',
      ]
    },
    {
      id: 'hombre_calzado',
      name: 'Calzado',
      items: [
        'Ver todo en calzado', 
        'Moda', 
        'Jordan', 
        'Air Max', 
        'Air Force 1', 
        'Dunk',
        'Botines',
        'Running',
        'Gym y entrenamiento',
        'Nike SB',
        'Calzado en Sale',
      ]
    },
    {
      id: 'hombre_ropa',
      name: 'Ropa',
      items: [
        'Ver toda la ropa', 
        'Remeras y camisetas',
        'Shorts',
        'Pantalones y calzas',
        'Buzos',
        'Camperas',
        'Jordan',
        'Medias',
        'Gorras',
        'Ropa en Sale',
      ]
    },
    {
      id: 'hombre_comprar_por_deporte',
      name: 'Comprar por deporte',
      items: [
        'Fútbol', 
        'Básquet', 
        'Running', 
        'Tenis', 
        'Gym y entrenamiento', 
        'Trail', 
        'Yoga', 
        'Nike SB (Skate)', 
      ]
    },
    // mujer
    {
      id: 'mujer_destacados',
      name: 'Destacados',
      items: [
        'Lo nuevo', 
        'Ojotas y sandalias',
        'Run your run',
        'Jordan',
        'Los más vendidos',
        'Sale - Hasta 40% OFF',
      ]
    },
    {
      id: 'mujer_calzado',
      name: 'Calzado',
      items: [
        'Ver todo en calzado', 
        'Moda', 
        'Jordan', 
        'Air Max', 
        'Air Force 1', 
        'Dunk',
        'Botines',
        'Running',
        'Gym y entrenamiento',
        'Nike SB',
        'Calzado en Sale',
      ]
    },
    {
      id: 'mujer_ropa',
      name: 'Ropa',
      items: [
        'Ver toda la ropa', 
        'Tops deportivos',
        'Remeras y camisetas',
        'Calzas',
        'Pantalones',
        'Shorts y polleras',
        'Buzos',
        'Camperas',
        'Maternidad',
        'Jordan',
        'Medias',
        'Gorras',
        'Ropa en Sale',
      ]
    },
    {
      id: 'mujer_comprar_por_deporte',
      name: 'Comprar por deporte',
      items: [
        'Fútbol', 
        'Running', 
        'Tenis', 
        'Gym y entrenamiento', 
        'Trail', 
        'Yoga', 
        'Nike SB (Skate)', 
      ]
    },

    // niños
    {
      id: 'niños_destacados',
      name: 'Destacados',
      items: [
        'Lo nuevo', 
        'Vuelta al cole',
        'Camisetas de Fútbol',
        'Los más vendidos',
        'Sale - Hasta 40% OFF',
      ]
    },
    {
      id: 'niños_calzado',
      name: 'Calzado',
      items: [
        'Ver todo el calzado', 
        'Moda',
        'Air Force 1',
        'Dunk',
        'Botines',
        'Running',
        'Ojotas y Sandalias',
        'Calzado en Sale',
      ]
    },
    {
      id: 'niños_ropa',
      name: 'Ropa',
      items: [
        'Ver toda la ropa', 
        'Remeras y camisetas',
        'Shorts',
        'Pantalones y calzas',
        'Buzos y camperas',
        'Tops deportivos',
        'Medias',
        'Gorras',
        'Ropa en Sale',
      ]
    },
    {
      id: 'niños_comprar_por_deporte',
      name: 'Comprar por deporte',
      items: [
        'Fútbol', 
        'Running y gym',
      ]
    },
    {
      id: 'niños_comprar_por_edad',
      name: 'Comprar por edad',
      items: [
        'De 0 a 3 años', 
        'De 3 a 7 años', 
        'De 7 a 15 años', 
      ]
    },
    // accesorios
    {
      id: 'accesorios_destacados',
      name: 'Destacados',
      items: [
        'Sale - Hasta 40% OFF',
        'Lo nuevo', 
        'Jordan',
        'Los más vendidos',
      ]
    },
    {
      id: 'accesorios_accesorios',
      name: 'Accesorios',
      items: [
        'Ver todos los accesorios',
        'Medias', 
        'Gorras',
        'Bolsos y mochilas',
        'Riñoneras',
        'Pelotas',
        'Canilleras y guantes',
        'Accesorios en Sale',
      ]
    },
    {
      id: 'accesorios_comprar_por_deporte',
      name: 'Comprar por deporte',
      items: [
        'Fútbol', 
        'Running',
        'Gym y entrenamiento',
      ]
    },
    // sale
    {
      id: 'sale_todo_sale',
      name: 'Todo sale',
      items: [
        'Ver todo Sale', 
        'Calzado en Sale',
        'Ropa en Sale',
        'Accesorios en Sale',
      ]
    },
    {
      id: 'sale_hombre',
      name: 'Hombre',
      items: [
        'Ver todo Hombre', 
        'Calzado',
        'Ropa',
        'Accesorios',
      ]
    },
    {
      id: 'sale_mujer',
      name: 'Mujer',
      items: [
        'Ver todo Mujer', 
        'Calzado',
        'Ropa',
        'Accesorios',
      ]
    },
    {
      id: 'sale_niños',
      name: 'Niño/a',
      items: [
        'Ver todo Niños', 
        'Calzado',
        'Ropa',
        'Accesorios',
      ]
    },
    
  ],
}

export default categories