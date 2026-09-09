import { Product } from '../../domain/entities/Product';

export const INITIAL_PRODUCTS: Product[] = [
  // ==========================================
  // FAMILIA 1: AMADERADO & ESPECIADO (5 perfumes)
  // ==========================================
  {
    id: 'santal-ethere',
    name: 'Santal Éthéré',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Amaderado & Especiado',
    volume: '100 ML',
    price: 165,
    currency: '€',
    description:
      'Una composición serena y envolvente de sándalo australiano, cardamomo fresco y cedro atlas, reposando sobre un lecho de iris aterciopelado y ámbar mineral.',
    olfactoryNotes: {
      top: 'Cardamomo de Ceilán, Bergamota Italiana',
      heart: 'Iris Florentino, Violeta Silvestre, Papiro',
      base: 'Sándalo Australiano, Cedro del Atlas, Ámbar Gris',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'bois-d-encens-noir',
    name: "Bois d'Encens Noir",
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Amaderado & Especiado',
    volume: '100 ML',
    price: 175,
    currency: '€',
    description:
      'Un viaje nocturno a través de bosques umbríos donde la madera de gaiac ahumada y el incienso ceremonial susurran misterios sobre un lecho de resinas balsámicas.',
    olfactoryNotes: {
      top: 'Pimienta negra de Madagascar, Nuez moscada',
      heart: 'Cedro de Virginia, Madera de gaiac ahumada',
      base: 'Incienso sagrado, Resina de benjuí, Musgo de roble',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'vetiver-imperial',
    name: 'Vetiver Impérial',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Amaderado & Especiado',
    volume: '100 ML',
    price: 160,
    currency: '€',
    description:
      'La nobleza de la tierra destilada en una frescura punzante de jengibre y pomelo que se rinde ante la raíz profunda del vetiver de Les Cayes y el haba tonka tostada.',
    olfactoryNotes: {
      top: 'Pomelo rosado, Jengibre fresco',
      heart: 'Vetiver de Haití, Salvia sclarea',
      base: 'Pachulí terroso, Cuero ligero, Haba tonka',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'oud-souverain',
    name: 'Oud Souverain',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Amaderado & Especiado',
    volume: '100 ML',
    price: 210,
    currency: '€',
    description:
      'El rey de las maderas nobles en su expresión más majestuosa, esculpido con hebras de azafrán persa, pétalos de rosa aterciopelada y la calidez densa del ládano.',
    olfactoryNotes: {
      top: 'Azafrán persa, Canela de Ceylán',
      heart: 'Rosa de Damasco, Clavo aromático',
      base: 'Oud de Assam refinado, Cuero ahumado, Ládano',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cedre-blanc-solaire',
    name: 'Cèdre Blanc Solaire',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Amaderado & Especiado',
    volume: '100 ML',
    price: 150,
    currency: '€',
    description:
      'La claridad del alba en las cumbres alpinas. El enebro crujiente y la madera de pino blanco bañados por una brisa mediterránea y almizcle luminoso.',
    olfactoryNotes: {
      top: 'Enebro silvestre, Limón de Amalfi',
      heart: 'Pino blanco, Lavanda provenzal',
      base: 'Cedro blanco, Almizcle cálido, Ámbar mineral',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?auto=format&fit=crop&w=1200&q=80',
  },

  // ==========================================
  // FAMILIA 2: CÍTRICO & FLORAL BLANCO (5 perfumes)
  // ==========================================
  {
    id: 'neroli-celeste',
    name: 'Néroli Céleste',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cítrico & Floral Blanco',
    volume: '100 ML',
    price: 155,
    currency: '€',
    description:
      'Un destello luminoso de flor de azahar y neroli mediterráneo entrelazado con bergamota de Calabria, sobre una caricia limpia de almizcle blanco y madera de cedro.',
    olfactoryNotes: {
      top: 'Flor de Azahar, Bergamota de Calabria, Petitgrain',
      heart: 'Neroli Mediterráneo, Jazmín Sambac, Té Blanco',
      base: 'Almizcle Blanco, Cedro Blanco, Ámbar Cristalino',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tubereuse-cristalline',
    name: 'Tubéreuse Cristalline',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cítrico & Floral Blanco',
    volume: '100 ML',
    price: 180,
    currency: '€',
    description:
      'La opulencia nocturna del nardo de Grasse capturada al rocío matinal, enriquecida por la sensualidad del ylang-ylang y un fondo acariciante de almendras dulces.',
    olfactoryNotes: {
      top: 'Pera nashi, Mandarina verde siciliana',
      heart: 'Nardo de Grasse, Ylang-ylang de Comoras, Gardenia pura',
      base: 'Leche de almendras, Sándalo cremoso, Vainilla Bourbon',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fleur-d-oranger-vintage',
    name: "Fleur d'Oranger Vintage",
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cítrico & Floral Blanco',
    volume: '100 ML',
    price: 160,
    currency: '€',
    description:
      'La memoria dorada de los patios andaluces bajo el sol estival. Flores de azahar en plena eclosión enmarcadas por la savia verde de higuera y madera templada.',
    olfactoryNotes: {
      top: 'Naranja amarga, Neroli tunecino',
      heart: 'Flor de azahar dulce, Hoja de higuera verde',
      base: 'Madera de naranjo, Almizcle solar',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'magnolia-imperial',
    name: 'Magnolia Impérial',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cítrico & Floral Blanco',
    volume: '100 ML',
    price: 170,
    currency: '€',
    description:
      'Pétalos cerosos y opulentos de magnolia acariciados por la acidez chispeante del ruibarbo y envueltos en la suavidad infinita de la cachemira.',
    olfactoryNotes: {
      top: 'Bergamota temprana, Ruibarbo crujiente',
      heart: 'Pétalos de magnolia, Lirio de los valles, Peonía blanca',
      base: 'Madera de cachemira, Almizcle sedoso',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1587017539504-67cfbddac569?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'citrus-absolu',
    name: 'Citrus Absolu',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cítrico & Floral Blanco',
    volume: '100 ML',
    price: 145,
    currency: '€',
    description:
      'Una explosión cristalina y vivificante de cítricos asiáticos raros y menta fresca que desemboca en un remanso sereno de flor de loto y cedro traslúcido.',
    olfactoryNotes: {
      top: 'Yuzu japonés, Lima kaffir, Menta triturada',
      heart: 'Flor de loto acuática, Cilantro silvestre',
      base: 'Vetiver blanco, Cedro claro',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=1200&q=80',
  },

  // ==========================================
  // FAMILIA 3: CUERO & RESINAS NOBLES (5 perfumes)
  // ==========================================
  {
    id: 'cuir-mineral',
    name: 'Cuir Minéral',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cuero & Resinas Nobles',
    volume: '100 ML',
    price: 185,
    currency: '€',
    description:
      'Una fragancia magnética y profunda donde el cuero curtido y el incienso de Omán se funden con hojas de tabaco rubio y la calidez del haba tonka tostada.',
    olfactoryNotes: {
      top: 'Incienso de Omán, Pimienta Rosa, Azafrán',
      heart: 'Cuero Curtido, Hoja de Tabaco Rubio, Osmanthus',
      base: 'Haba Tonka, Vetiver de Haití, Resina de Benjuí',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'tabac-elixir',
    name: 'Tabac Élixir',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cuero & Resinas Nobles',
    volume: '100 ML',
    price: 190,
    currency: '€',
    description:
      'La atmósfera íntima de un club privado al atardecer: licor añejo de caña, tabaco curado al sol y una untuosa miel silvestre que se funde en vainilla negra.',
    olfactoryNotes: {
      top: 'Ron caribeño, Jengibre dorado, Cardamomo',
      heart: 'Hojas de tabaco cubano, Ciruela madura, Miel silvestre',
      base: 'Vainilla de Madagascar, Pachulí tostado, Cuero suave',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'ambre-sultane',
    name: 'Ambre Sultané',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cuero & Resinas Nobles',
    volume: '100 ML',
    price: 175,
    currency: '€',
    description:
      'El calor abrasador de las noches orientales traducido en bálsamos milenarios, ámbar dorado fundido y mirra sagrada recolectada a mano en antiguos zocos.',
    olfactoryNotes: {
      top: 'Cilantro molido, Laurel noble, Orégano griego',
      heart: 'Resina de mirra, Ámbar fósil, Bálsamo de Tolú',
      base: 'Resina de estoraque, Vainilla ahumada, Sándalo indio',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cuir-de-russie-sublime',
    name: 'Cuir de Russie Sublime',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cuero & Resinas Nobles',
    volume: '100 ML',
    price: 195,
    currency: '€',
    description:
      'Homenaje a la legendaria talabartería imperial. Alquitrán de abedul ahumado y cuero flexible pulido con esencias florales de clavel y violeta profunda.',
    olfactoryNotes: {
      top: 'Alquitrán de abedul fino, Bergamota brillante',
      heart: 'Cuero curtido tradicional, Clavel rojo, Violeta negra',
      base: 'Castóreo sintético ético, Vetiver ahumado, Musgo',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'resine-mystique',
    name: 'Résine Mystique',
    subtitle: 'Perfume de Autor Exclusivo',
    category: 'Cuero & Resinas Nobles',
    volume: '100 ML',
    price: 165,
    currency: '€',
    description:
      'Una plegaria olfativa tallada en resinas preciosas. Gotas translúcidas de elemí y lágrimas de mirra pura que se elevan entre cipreses bajo la penumbra de un templo.',
    olfactoryNotes: {
      top: 'Elemí de Filipinas, Bayas de enebro, Pomelo amargo',
      heart: 'Incienso de iglesia, Mirra pura, Líbano aromático',
      base: 'Madera de ciprés, Ámbar gris, Benjuí de Siam',
    },
    imageUrl:
      'https://images.unsplash.com/photo-1619994403073-2cec844b8e63?auto=format&fit=crop&w=1200&q=80',
  },
];
