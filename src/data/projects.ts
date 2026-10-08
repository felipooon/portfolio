export interface VisualPlate {
  fig: string;
  category: string;
  categoryKey: 'web' | 'iot' | 'data';
  domain: string;
  title: string;
  imagePng: string;
  imageWebp: string;
  alt: string;
  tech: string[];
  collaboration?: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
  statusBadge: string;
}

export interface TechnicalRecord {
  title: string;
  tagline: string;
  categoryKey: 'web' | 'iot' | 'data';
  repoUrl?: string;
  repoLabel?: string;
  featured?: boolean;
  description: string;
  specs: string[];
  statusBadge: string;
}

export const VISUAL_PLATES: VisualPlate[] = [
  {
    fig: "FIG. 01",
    category: "E-COMMERCE",
    categoryKey: "web",
    domain: "rapidassure.onrender.com",
    title: "RapidAssure Retail",
    imagePng: "assets/screenshots/rapidassure.png",
    imageWebp: "assets/screenshots/rapidassure.webp",
    alt: "Captura real del sitio web RapidAssure",
    tech: ["Astro", "Tailwind CSS", "Vite", "Render Cloud"],
    collaboration: "En conjunto con Matías Dintrans",
    description: "Plataforma de comercio electrónico y catálogo tecnológico para insumos digitales y periféricos. Desarrollada en conjunto con Matías Dintrans, cuenta con arquitectura de alto rendimiento en Astro, componentes interactivos e infraestructura en Render.",
    liveUrl: "https://rapidassure.onrender.com",
    repoUrl: "https://github.com/felipooon/rapidassure",
    statusBadge: "En Producción"
  },
  {
    fig: "FIG. 02",
    category: "E-COMMERCE",
    categoryKey: "web",
    domain: "raratienda.cl",
    title: "Rara Tienda",
    imagePng: "assets/screenshots/raratienda.png",
    imageWebp: "assets/screenshots/raratienda.webp",
    alt: "Captura real del portal Rara Tienda",
    tech: ["Django", "Python", "PostgreSQL", "Linux VPS"],
    description: "Comercio electrónico completo para diseño inspirado en aves nativas de Chile. Incluye panel de control administrativo a medida, control de inventario, pasarela de cobro, gestión de pedidos y seguimiento de despachos a nivel nacional.",
    liveUrl: "https://raratienda.cl",
    repoUrl: "https://github.com/felipooon/rara-app",
    statusBadge: "En Producción"
  },
  {
    fig: "FIG. 03",
    category: "GAMING & CARDS",
    categoryKey: "web",
    domain: "lepigames.cl",
    title: "Lepigames",
    imagePng: "assets/screenshots/lepigames.png",
    imageWebp: "assets/screenshots/lepigames.webp",
    alt: "Captura real del proyecto Lepigames",
    tech: ["Astro", "TypeScript", "CSS Modules", "Vercel"],
    description: "Portal y catálogo interactivo dedicado al universo de cartas coleccionables, juegos de mesa y divulgación de biodiversidad. Desarrollado en la Región de Los Lagos con un diseño gráfico orgánico y experiencia fluida.",
    liveUrl: "https://lepigames.cl",
    repoUrl: "https://github.com/felipooon/Lepigames",
    statusBadge: "En Producción"
  },
  {
    fig: "FIG. 04",
    category: "CARTOGRAFÍA & DATOS",
    categoryKey: "data",
    domain: "raratienda.cl/juegos/radar-realtime/",
    title: "GBDMap & Radar Realtime",
    imagePng: "assets/screenshots/radar.png",
    imageWebp: "assets/screenshots/radar.webp",
    alt: "Captura real del Radar Realtime y GBDMap",
    tech: ["Leaflet JS", "eBird API 2.0", "GeoJSON", "OpenStreetMap"],
    description: "Cartografía interactiva y radar satelital en vivo para avistamiento ornitológico en la Región de Los Lagos. Conexión directa a la API de eBird para renderizado de listas activas, especies observadas en tiempo real y posicionamiento geoespacial.",
    liveUrl: "https://raratienda.cl/juegos/radar-realtime/",
    repoUrl: "https://github.com/felipooon/gbdmap",
    statusBadge: "En Línea"
  }
];

export const TECHNICAL_RECORDS: TechnicalRecord[] = [
  {
    title: "Agenda Clínica",
    tagline: "Django • Gestión Médica",
    categoryKey: "web",
    repoUrl: "https://github.com/felipooon/agenda-clinica",
    repoLabel: "github.com/felipooon/agenda-clinica",
    featured: true,
    description: "Sistema integral para reserva y calendarización de horas médicas con arquitectura modular en Django 4.2. Dispone de segmentación por facultativo y especialidad, soporte para notificaciones vía Twilio (SMS / mensajería), sincronización bidireccional mediante estándares iCalendar (.ics), motor REST para integraciones y generación programática de comprobantes clínicos en PDF mediante xhtml2pdf.",
    specs: ["Django 4.2", "Django REST Framework", "Twilio API", "iCalendar RFC 5545", "xhtml2pdf Generator"],
    statusBadge: "Sistema Activo"
  },
  {
    title: "Bioacústica Autónoma",
    tagline: "MicroPython • RP2040",
    categoryKey: "iot",
    repoLabel: "Hardware en Terreno",
    featured: false,
    description: "Grabadores autónomos de ultra bajo consumo energético para muestreo acústico pasivo (PAM) de avifauna y quirópteros en el bosque templado lluvioso. Equipados con micrófono MEMS digital, reloj en tiempo real (RTC) y esquemas de hibernación profunda alimentados por celda LiFePO4.",
    specs: ["Raspberry Pi Pico", "MicroPython", "I2S / MEMS Mic", "Sleep Power Mgmt"],
    statusBadge: "Hardware en Terreno"
  },
  {
    title: "Monitoreo Solar 4G",
    tagline: "IoT • Fauna Marina",
    categoryKey: "iot",
    repoLabel: "Red Remota IoT",
    featured: false,
    description: "Nodos de telemetría y fototrampeo montados en acantilados y costas del Seno de Reloncaví para el seguimiento de aves marinas y pingüinos de Magallanes. Integración con módem LTE celular y enlace MQTT para transmisión de métricas ambientales e imágenes comprimidas a servidor central.",
    specs: ["ESP32 / LTE SIM7600", "MQTT / TLS", "Solar Harvesting", "Linux InfluxDB"],
    statusBadge: "Red Remota IoT"
  }
];
