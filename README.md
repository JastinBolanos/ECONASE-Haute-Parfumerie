# 🌐 ECONASE - Haute Parfumerie & Atelier Olfativo Digital (v1.0.0-PROD)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Security](https://img.shields.io/badge/security-TLS_1.3-success)

> **Boutique Digital y Experiencia Sensorial de Perfumería de Autor.**  
> Plataforma de comercio electrónico de alta gama concebida para la curaduría, descubrimiento y adquisición de fragancias nicho exclusivas de *ECONASE*. El sistema combina una experiencia visual minimalista y editorial con un sommelier olfativo interactivo, desglose de pirámides olfativas en tres tiempos y un flujo de compra fluido y seguro.

🌍 **[Ver Plataforma en Vivo (Producción) 🟢]** *[aca va el link]*

![Vista Previa de ECONASE Boutique]([aca va el link])

---

## 🎥 Demostración de la Experiencia en Tiempo Real

**🎬 Exploración de Colecciones y Sommelier Sensorial**  
Demostración de la interfaz boutique: navegación fluida por familias olfativas, inspección interactiva de acordes de salida, corazón y fondo, personalización con grabado artesanal y gestión instantánea de bolsa de compra con muestras de cortesía.

[aca va el link]

---

## 🏗️ Arquitectura de Sistema y Stack Tecnológico

Desarrollada con un profundo respeto por la artesanía digital, esta plataforma fue construida priorizando la pureza del código, la máxima eficiencia en tiempos de carga y una experiencia de usuario distinguida y accesible. La base del proyecto adopta patrones de diseño modulares inspirados en arquitectura hexagonal para mantener desacoplada la lógica del dominio olfativo de la capa de presentación.

- **Core & Runtime (Edge-Optimized):**
  - `react` (`^19.0.1`) & `react-dom` para una renderización reactiva de alto rendimiento.
  - `typescript` (`~5.8.2`) implementando tipado estricto para modelos olfativos, pedidos y catálogo.
  - `vite` (`^6.2.3`) como entorno de compilación ultrarrápido y empaquetado optimizado.
- **Interfaz de Usuario (UI) & Estilizado:**
  - `tailwindcss` (`^4.1.14`) con una paleta sobria de tonos neutros, tipografía con serifas editoriales y microespaciados calibrados.
  - `lucide-react` (`^0.546.0`) para iconografía funcional, delicada y consistente.
  - `motion` (`^12.23.24`) para transiciones sutiles de entrada, apertura de cajones y modales sensoriales.
- **Estado Global & Persistencia:**
  - Persistencia local en cliente (`localStorage`) para la preservación de la bolsa de compra, fragancias favoritas y preferencias del visitante sin fricciones.
- **Motor Olfativo & Recomendaciones:**
  - Algoritmo determinista de emparejamiento sensorial para el Sommelier Olfativo, con soporte preparado para enriquecimiento contextual mediante `@google/genai` (`^2.4.0`).

---

## 🚀 Módulos Operativos (Desplegados)

1. **🌿 Catálogo Curado & Explorador por Familias Olfativas (`ProductCatalog`)**
   - Filtrado dinámico multivariable por acordes: Amaderado, Oriental, Cítrico, Floral, Cuero y Fresco.
   - Búsqueda en tiempo real por ingredientes botánicos, notas dominantes o perfil olfativo.
   - Fotografía de producto en alta resolución con tratamiento estético unificado sobre superficies minerales.

2. **🧪 Ficha de Detalle & Pirámide Olfativa Tridimensional (`ProductModal`)**
   - Visualización pedagógica de notas de cabeza (salida), corazón y fondo con sus tiempos de evaporación y concentración.
   - Selector dinámico de formato (50 ml y 100 ml) con ajuste proporcional de inversión.
   - Módulo interactivo de previsualización para grabado personalizado en la placa del frasco.

3. **✨ Sommelier Olfativo Digital (`PerfumeFinder` / `AromaQuiz`)**
   - Cuestionario intuitivo y respetuoso del perfil del usuario (ocasión de uso, intensidad deseada, estación del año y memoria sensorial).
   - Motor de sugerencia que entrega la fragancia afín con su justificación organoléptica.

4. **🛍️ Carrito de Compra & Despacho de Alta Gama (`CartDrawer` / `Checkout`)**
   - Gestión reactiva de unidades, cálculo automático de envíos de cortesía y obsequio de viales de descubrimiento.
   - Flujo de pago optimizado en un solo paso con validación de datos y generación inmediata de orden con sello de compra.

5. **🖤 Galería de Deseos & Curaduría Personal (`WishlistManager`)**
   - Almacenamiento persistente de fragancias predilectas para futuras sesiones.
   - Acceso rápido a disponibilidad de inventario y reposición de lotes limitados.

---

## 💻 Guía de Despliegue y Ejecución (Entorno Local)

Para desarrolladores, diseñadores o evaluadores técnicos que deseen examinar o ejecutar el proyecto en su entorno de trabajo:

### 1. Clonar el repositorio y preparar entorno
```bash
git clone [aca va el link]
cd econase-perfumeria
```

### 2. Instalación de dependencias (Node.js v18+)
```bash
npm install
```

### 3. Configuración de Entorno (Environment)
Crea tu archivo de variables locales a partir de la plantilla de referencia. Para habilitar las capacidades analíticas o de IA del sommelier, puedes incluir tu clave correspondiente:
```bash
cp .env.example .env
```

### 4. Iniciar el servidor local de desarrollo
```bash
npm run dev
```
La terminal indicará la dirección local habilitada (por defecto `http://localhost:3000`).

### 5. Compilación para Producción (CI/CD Pipeline)
Para generar los artefactos optimizados y verificados con comprobación de tipos antes del despliegue:
```bash
npm run lint
npm run build
```

---

*Desarrollado con dedicación, rigor técnico y pasión por la alta perfumería artesanal.*  
**ECONASE Parfums © 2026. Todos los derechos reservados.**
