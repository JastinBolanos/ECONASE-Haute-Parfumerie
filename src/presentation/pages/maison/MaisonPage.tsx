import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { Feather, Compass, Sparkles, ArrowRight, Droplets, Clock, Globe } from 'lucide-react';

export const MaisonPage: React.FC = () => {
  return (
    <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 py-8 sm:py-14">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Inicio', to: '/home' },
          { label: 'La Maison ECONASE' },
        ]}
      />

      <article className="space-y-16 sm:space-y-20">
        {/* Expansive Hero Section */}
        <header className="text-center py-6 sm:py-10 max-w-5xl 2xl:max-w-6xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-[#8A8177] font-medium block mb-4">
            Manifiesto Olfativo · Haute Parfumerie
          </span>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-[#1A1918] tracking-tight leading-[1.12] mb-6">
            La Pureza de la Esencia y el Silencio del Tiempo
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#575048] leading-relaxed max-w-3xl mx-auto font-normal">
            ECONASE nace de la convicción de que la auténtica perfumería de autor no busca invadir el espacio, sino crear una atmósfera íntima y memorable que dialoga con la piel.
          </p>
        </header>

        {/* Panoramic Visual Banner / Editorial Gallery */}
        <section
          aria-label="Atelier y campos de cultivo"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full"
        >
          <div className="relative group overflow-hidden rounded-3xl bg-[#F0ECE3] border border-[#E3DDD2] h-72 sm:h-80 lg:h-96 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80"
              alt="Cosecha botánica en Grasse"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium mb-1">
                Origen Botánico
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                Campos de Grasse & Provenza
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-2">
                Recolección manual al amanecer para preservar el rocío intacto de los pétalos.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl bg-[#F0ECE3] border border-[#E3DDD2] h-72 sm:h-80 lg:h-96 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80"
              alt="Frasco de perfume ECONASE y maceración"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium mb-1">
                Artesanía Vidriera
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                Cristal Pesado Soplado a Mano
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-2">
                Cada envase conserva un peso y transparencia únicos, numerado individualmente.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-3xl bg-[#F0ECE3] border border-[#E3DDD2] h-72 sm:h-80 lg:h-96 shadow-xs">
            <img
              src="https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?auto=format&fit=crop&w=800&q=80"
              alt="Laboratorio olfativo de formulación"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/80 font-medium mb-1">
                Laboratorio de Autor
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-medium">
                Maceración en Silencio
              </h3>
              <p className="text-xs text-white/80 mt-1 line-clamp-2">
                90 días de reposo sin aditivos sintéticos para consolidar acordes nobles.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Grid - Full width expansive layout */}
        <section aria-label="Pilares fundamentales de ECONASE" className="w-full">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A8177] font-medium block mb-2">
              Nuestros Pilares
            </span>
            <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1A1918]">
              Los Tres Principios de la Maison
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white border border-[#E8E4DC] rounded-3xl p-8 lg:p-10 shadow-xs flex flex-col justify-between hover:border-[#CCC4B8] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] text-[#1A1918] flex items-center justify-center mb-6">
                  <Feather className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8177] font-semibold block mb-2">
                  Principio I
                </span>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-4">
                  Materias Primas Nobles
                </h3>
                <p className="text-sm text-[#5C544C] leading-relaxed">
                  Cada extracto botánico y resina es cosechado de forma respetuosa en su hábitat de origen: sándalo de Australia Occidental, neroli del Mediterráneo e incienso sagrado de Omán. Descartamos bases sintéticas estandarizadas.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0ECE5] flex items-center gap-2 text-xs text-[#80766D]">
                <Globe className="w-4 h-4 text-[#1A1918]" />
                <span>Trazabilidad directa con cultivadores locales</span>
              </div>
            </div>

            <div className="bg-white border border-[#E8E4DC] rounded-3xl p-8 lg:p-10 shadow-xs flex flex-col justify-between hover:border-[#CCC4B8] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] text-[#1A1918] flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8177] font-semibold block mb-2">
                  Principio II
                </span>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-4">
                  Maceración Paciente
                </h3>
                <p className="text-sm text-[#5C544C] leading-relaxed">
                  Sin prisas ni procesos industriales forzados. Cada lote reposa en recipientes de cristal oscuro durante tres meses completos, permitiendo que las moléculas se integren de manera orgánica y maduren en plenitud.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0ECE5] flex items-center gap-2 text-xs text-[#80766D]">
                <Clock className="w-4 h-4 text-[#1A1918]" />
                <span>Ciclo mínimo de 90 días naturales</span>
              </div>
            </div>

            <div className="bg-white border border-[#E8E4DC] rounded-3xl p-8 lg:p-10 shadow-xs flex flex-col justify-between hover:border-[#CCC4B8] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F4F1EA] text-[#1A1918] flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#8A8177] font-semibold block mb-2">
                  Principio III
                </span>
                <h3 className="font-serif-luxury text-2xl font-medium text-[#1A1918] mb-4">
                  Tiradas Limitadas
                </h3>
                <p className="text-sm text-[#5C544C] leading-relaxed">
                  Numeramos individualmente cada frasco de vidrio pesado elaborado por artesanos sopladores, garantizando una trazabilidad rigurosa, concentración exacta de aceites esenciales y exclusividad en cada creación.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0ECE5] flex items-center gap-2 text-xs text-[#80766D]">
                <Droplets className="w-4 h-4 text-[#1A1918]" />
                <span>Extrait de Parfum al 24% de concentración</span>
              </div>
            </div>
          </div>
        </section>

        {/* Botanical Origins Showcase - Spanning Wide */}
        <section
          aria-label="Orígenes olfativos de nuestras cosechas"
          className="bg-white border border-[#E8E4DC] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs"
        >
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A8177] font-medium block mb-2">
              Geografía Olfativa
            </span>
            <h2 className="font-serif-luxury text-3xl font-medium text-[#1A1918] mb-3">
              Cosechas de Origen Certificado
            </h2>
            <p className="text-sm text-[#5C544C]">
              Exploramos ecosistemas singulares donde el clima, la tierra y la tradición secular dotan a cada flor y corteza de matices irrepetibles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                place: 'Australia Occidental',
                botanical: 'Santalum Spicatum',
                note: 'Sándalo blanco cremoso y maderas sagradas de silvicultura sostenible.',
              },
              {
                place: 'Capua, Calabria',
                botanical: 'Citrus Aurantium',
                note: 'Flor de azahar y neroli destilados con agua de manantial alpino.',
              },
              {
                place: 'Dhofar, Omán',
                botanical: 'Boswellia Sacra',
                note: 'Resina de incienso verde recolectada en wadis desérticos protegidos.',
              },
              {
                place: 'Florencia, Toscana',
                botanical: 'Iris Pallida',
                note: 'Rizomas envejecidos bajo sombra durante 36 meses antes de la molienda.',
              },
            ].map((origin) => (
              <div
                key={origin.place}
                className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#ECE7DE]"
              >
                <span className="text-[10px] tracking-widest uppercase text-[#8A8177] font-semibold block mb-1">
                  {origin.place}
                </span>
                <h4 className="font-serif-luxury text-lg font-medium text-[#1A1918] mb-2">
                  {origin.botanical}
                </h4>
                <p className="text-xs text-[#615850] leading-relaxed">
                  {origin.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Storytelling Quote Card - Wide and prominent */}
        <section className="bg-[#24211E] text-white rounded-3xl p-10 sm:p-14 lg:p-16 text-center shadow-md">
          <div className="max-w-4xl mx-auto">
            <blockquote className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl italic text-[#FAF7F2] font-light leading-relaxed mb-6">
              &ldquo;Un perfume no es un accesorio cosmético; es la arquitectura invisible de nuestra memoria y de nuestras emociones más lúcidas.&rdquo;
            </blockquote>
            <cite className="text-xs uppercase tracking-[0.25em] text-[#C7BFB4] font-medium not-italic block">
              Atelier ECONASE · Grasse & Madrid
            </cite>
          </div>
        </section>

        {/* Action button */}
        <footer className="text-center pt-2 pb-6">
          <Link
            to="/home"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1918] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#332F2C] transition-colors shadow-sm"
          >
            <span>Descubrir las Fragancias en Catálogo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </footer>
      </article>
    </div>
  );
};
