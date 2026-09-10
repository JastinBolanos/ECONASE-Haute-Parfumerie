# 🌐 ECONASE - Haute Parfumerie & Digital Olfactory Atelier (v1.0.0-PROD)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Deployment](https://img.shields.io/badge/deployment-production-blue)
![Version](https://img.shields.io/badge/version-1.0.0--PROD-orange)
![Security](https://img.shields.io/badge/security-TLS_1.3-success)

> **Digital Boutique and Sensory Experience for Artisanal Haute Parfumerie.**  
> High-end e-commerce platform designed for curating, discovering, and acquiring exclusive niche fragrances from *ECONASE*. The system combines an editorial, minimalist visual experience with an interactive olfactory sommelier, three-stage fragrance pyramid breakdown, and a smooth, secure shopping experience.

🌍 **[View Live Platform (Production) 🟢]** *[link goes here]*

![ECONASE Boutique Preview]([link goes here])

---

## 🎥 Real-Time Experience Demo

**🎬 Collection Exploration & Sensory Sommelier**  
Boutique interface demonstration: smooth navigation across olfactory families, interactive inspection of top, heart, and base notes, bespoke artisanal bottle engraving personalization, and instant shopping bag management with complimentary discovery samples.

[link goes here]

---

## 🏗️ System Architecture & Technology Stack

Crafted with a deep respect for digital craftsmanship, this platform was built prioritizing clean code, maximum loading performance, and a refined, accessible user experience. The project architecture adopts modular design patterns inspired by hexagonal architecture to keep the olfactory domain logic decoupled from the presentation layer.

- **Core & Runtime (Edge-Optimized):**
  - `react` (`^19.0.1`) & `react-dom` for high-performance reactive rendering.
  - `typescript` (`~5.8.2`) implementing strict typing for olfactory models, orders, and catalog.
  - `vite` (`^6.2.3`) as a blazing-fast build tool and optimized bundler.
- **User Interface (UI) & Styling:**
  - `tailwindcss` (`^4.1.14`) featuring an understated neutral palette, editorial serif typography, and precisely calibrated micro-spacing.
  - `lucide-react` (`^0.546.0`) for delicate, consistent, and functional iconography.
  - `motion` (`^12.23.24`) for subtle entrance transitions, drawer animations, and sensory modal interactions.
- **Global State & Persistence:**
  - Client-side local storage (`localStorage`) for seamless preservation of the shopping bag, favorite fragrances, and visitor preferences.
- **Olfactory Engine & Recommendations:**
  - Deterministic sensory matching algorithm for the Olfactory Sommelier based on fragrance pyramids, accord weights, and user preferences.

---

## 🚀 Operational Modules (Deployed)

1. **🌿 Curated Catalog & Olfactory Family Explorer (`ProductCatalog`)**
   - Dynamic multi-variable filtering by accords: Woody, Oriental, Citrus, Floral, Leather, and Fresh.
   - Real-time search by botanical ingredients, dominant notes, or olfactory profiles.
   - High-resolution product photography with unified aesthetic staging over mineral surfaces.

2. **🧪 Detail Sheet & Three-Dimensional Olfactory Pyramid (`ProductModal`)**
   - Pedagogical visualization of top (head), heart, and base notes alongside their evaporation rates and concentrations.
   - Dynamic bottle volume selector (50 ml and 100 ml) with proportional price adjustments.
   - Interactive preview module for personalized custom bottle engraving.

3. **✨ Digital Olfactory Sommelier (`PerfumeFinder` / `AromaQuiz`)**
   - Intuitive questionnaire tuned to the user's profile (occasion, desired intensity, season, and sensory memory).
   - Recommendation engine pairing the ideal fragrance with an organoleptic justification.

4. **🛍️ Shopping Bag & High-End Checkout (`CartDrawer` / `Checkout`)**
   - Reactive quantity management, automatic complimentary shipping calculation, and discovery sample vials.
   - Streamlined single-step checkout flow with form validation and instant verified order generation.

5. **🖤 Wishlist & Personal Curation (`WishlistManager`)**
   - Persistent storage of favorite fragrances for future sessions.
   - Quick access to inventory availability and limited-batch restock alerts.

---

## 💻 Deployment and Execution Guide (Local Environment)

For developers, designers, or technical reviewers wishing to inspect or run the project locally:

### 1. Clone the repository and setup environment
```bash
git clone [link goes here]
cd econase-perfumeria
```

### 2. Dependency Installation (Node.js v18+)
```bash
npm install
```

### 3. Start the local development server
```bash
npm run dev
```
The terminal will display the local active address (default: `http://localhost:3000`).

### 4. Production Build (CI/CD Pipeline)
To generate optimized, type-checked production build artifacts before deployment:
```bash
npm run lint
npm run build
```

---

*Crafted with dedication, technical rigor, and passion for artisanal haute parfumerie.*  
**ECONASE Parfums © 2026. All rights reserved.**
