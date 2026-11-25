import React, { useState } from 'react';
import {
  ExternalLink,
  ShoppingBag,
  Laptop,
  Headphones,
  BookMarked,
  Check,
  ArrowUpRight,
  Info,
} from 'lucide-react';
import {
  AffiliateCategory,
  MERCADO_LIVRE_AFFILIATE,
  MERCADO_LIVRE_SLOTS,
  MercadoLivrePublicationSlot,
} from '../config/affiliates';

interface MercadoLivreShowcaseProps {
  variant?: 'section' | 'compact' | 'banner';
}

const CATEGORY_TABS: { id: AffiliateCategory; label: string }[] = [
  { id: 'todos', label: 'Todas as Publicações' },
  { id: 'setup', label: 'Setup & Ergonomia' },
  { id: 'foco', label: 'Foco & Áudio' },
  { id: 'livros', label: 'Bibliografia & Notas' },
];

const SlotVisual: React.FC<{
  slot: MercadoLivrePublicationSlot;
  className?: string;
}> = ({ slot, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  const FallbackIcon =
    slot.category === 'setup'
      ? Laptop
      : slot.category === 'foco'
      ? Headphones
      : BookMarked;

  if (imageError) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 text-slate-300 p-6 ${className}`}
      >
        <FallbackIcon className="w-8 h-8 text-amber-400" />
        <span className="text-xs font-medium text-center text-slate-300 max-w-[200px]">
          {slot.title}
        </span>
      </div>
    );
  }

  return (
    <img
      src={slot.image}
      alt={slot.imageAlt}
      referrerPolicy="no-referrer"
      onError={() => setImageError(true)}
      className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${className}`}
    />
  );
};

export const MercadoLivreShowcase: React.FC<MercadoLivreShowcaseProps> = ({
  variant = 'section',
}) => {
  const [activeCategory, setActiveCategory] = useState<AffiliateCategory>('todos');

  if (variant === 'compact') {
    return (
      <aside
        aria-label="Espaço Parceiro Mercado Livre"
        className="rounded-2xl bg-slate-950/90 border border-amber-400/25 p-4 space-y-3"
      >
        <div className="flex items-center justify-between gap-2 text-[11px] text-slate-400">
          <span className="font-semibold text-amber-300">Parceiro Mercado Livre</span>
        </div>

        <div className="space-y-1">
          <h3 className="text-xs font-bold text-white leading-snug">
            Ofertas de Setup & Livros de TI
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Seleção curada de periféricos, fones ANC e livros cobrados em editais de TI.
          </p>
        </div>

        <a
          href={MERCADO_LIVRE_AFFILIATE.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="w-full py-2 px-3 rounded-xl bg-[#FFE600] hover:bg-[#f2da00] text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
        >
          <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
          <span>Acessar Vitrine ML</span>
          <ExternalLink className="w-3 h-3 shrink-0" />
        </a>

        <p className="text-[10px] text-slate-500 leading-snug">
          Publicidade · Link de afiliado sem custo extra para você.
        </p>
      </aside>
    );
  }

  if (variant === 'banner') {
    return (
      <div
        aria-label="Área de Publicação Mercado Livre"
        className="rounded-2xl bg-slate-900/90 border border-amber-400/25 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
      >
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-amber-300">Publicidade</span>
            <span aria-hidden="true">·</span>
            <span>{MERCADO_LIVRE_AFFILIATE.programLabel}</span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Equipamentos, Periféricos e Bibliografia Oficial de TI no Mercado Livre
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Reserve seu próximo livro de referência, fone com cancelamento de ruído ou upgrade de setup pela nossa vitrine oficial de parceiro e ajude a manter esta plataforma de estudos aberta e gratuita.
          </p>
        </div>

        <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-2">
          <a
            href={MERCADO_LIVRE_AFFILIATE.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="px-6 py-3 rounded-xl bg-[#FFE600] hover:bg-[#f2da00] text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>Ver Ofertas no Mercado Livre</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>
      </div>
    );
  }

  const filteredSlots =
    activeCategory === 'todos'
      ? MERCADO_LIVRE_SLOTS
      : MERCADO_LIVRE_SLOTS.filter((slot) => slot.category === activeCategory);

  const featuredSlot = filteredSlots.find((s) => s.featured) ?? filteredSlots[0];
  const secondarySlots = filteredSlots.filter((s) => s.id !== featuredSlot.id);

  return (
    <section
      id="vitrine-mercado-livre"
      aria-labelledby="ml-affiliate-heading"
      className="py-16 lg:py-24 bg-slate-950 border-b border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-amber-300">
                Espaço Reservado · Mercado Livre
              </span>
              <span aria-hidden="true">·</span>
              <span>Programa de Afiliados</span>
            </div>

            <h2
              id="ml-affiliate-heading"
              className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance"
            >
              Vitrine de Ofertas & Setup para Quem Estuda TI
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Área dedicada às publicações e recomendações oficiais no Mercado Livre. Reúne itens que elevam o conforto, o foco e a bibliografia durante a preparação para concursos públicos de tecnologia.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filtrar publicações do Mercado Livre"
            className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto max-w-full"
          >
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-amber-300'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Showcase Grid */}
        <div
          className={`grid grid-cols-1 gap-6 ${
            secondarySlots.length > 0 ? 'lg:grid-cols-12 items-stretch' : ''
          }`}
        >
          {/* Featured Publication Slot */}
          <article
            className={`${
              secondarySlots.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'
            } group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors hover:border-amber-400/40`}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-800">
              <SlotVisual slot={featuredSlot} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-4 text-xs text-slate-200">
                <div className="flex items-center gap-2 font-medium">
                  <span className="text-amber-300 font-semibold">
                    {featuredSlot.slotCode}
                  </span>
                  <span aria-hidden="true" className="text-slate-400">
                    ·
                  </span>
                  <span>{featuredSlot.categoryLabel}</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-medium text-slate-400">
                    {featuredSlot.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight text-balance">
                    {featuredSlot.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredSlot.description}
                </p>

                <ul className="space-y-2 pt-1 text-xs sm:text-sm text-slate-300">
                  {featuredSlot.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center">
                <a
                  href={featuredSlot.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FFE600] hover:bg-[#f2da00] text-slate-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span>{featuredSlot.ctaLabel}</span>
                  <ExternalLink className="w-4 h-4 shrink-0" />
                </a>
              </div>
            </div>
          </article>

          {/* Secondary Curated Publication Slots */}
          {secondarySlots.length > 0 && (
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondarySlots.map((slot) => (
                <article
                  key={slot.id}
                  className="group flex-1 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col sm:flex-row lg:flex-col xl:flex-row transition-colors hover:border-amber-400/40"
                >
                  <div className="relative aspect-[4/3] sm:w-44 lg:w-full xl:w-44 shrink-0 overflow-hidden bg-slate-950">
                    <SlotVisual slot={slot} />
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span className="text-amber-300 font-semibold">
                          {slot.slotCode}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{slot.categoryLabel}</span>
                      </div>

                      <h3 className="text-base font-bold text-white leading-snug">
                        {slot.title}
                      </h3>

                      <p className="text-xs text-slate-400 leading-relaxed">
                        {slot.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/70 flex items-center justify-between gap-3">
                      <a
                        href={slot.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors whitespace-nowrap"
                      >
                        <span>{slot.ctaLabel}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-[11px] text-slate-500">
                        Mercado Livre
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Transparent Affiliate Disclosure Footer */}
        <div className="pt-4 border-t border-slate-800/70 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-start gap-2.5 max-w-3xl">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {MERCADO_LIVRE_AFFILIATE.disclosureText}
            </p>
          </div>
          <a
            href={MERCADO_LIVRE_AFFILIATE.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
          >
            <span>Abrir página oficial de ofertas</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
