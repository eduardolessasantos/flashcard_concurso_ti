import meliSetupImg from '../assets/images/meli_setup_developer_1795615441120.jpg';
import meliHeadphonesImg from '../assets/images/meli_anc_headphones_1795615441920.jpg';
import meliBooksImg from '../assets/images/meli_tech_books_1795615441976.jpg';

export type AffiliateCategory = 'todos' | 'setup' | 'foco' | 'livros';

export interface MercadoLivrePublicationSlot {
  id: string;
  slotCode: string;
  category: Exclude<AffiliateCategory, 'todos'>;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  url: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export const MERCADO_LIVRE_AFFILIATE = {
  id: '7G6VVK-AQ9D',
  url: 'https://meli.la/2J9BVcf',
  partnerName: 'Mercado Livre',
  programLabel: 'Programa de Afiliados Mercado Livre',
  disclosureText:
    'Espaço publicitário reservado para publicações e ofertas do Programa de Afiliados Mercado Livre. Compras realizadas por este espaço apoiam a manutenção gratuita do Flash Concurso TI sem custo adicional no preço final.',
} as const;

export const MERCADO_LIVRE_SLOTS: MercadoLivrePublicationSlot[] = [
  {
    id: 'ml-slot-destaque-setup',
    slotCode: 'Vitrine Principal',
    category: 'setup',
    categoryLabel: 'Setup & Ergonomia',
    title: 'Estação de Estudos & Periféricos para Concurseiros de TI',
    subtitle: 'Seleção recomendada no Mercado Livre',
    description:
      'Monitores ultrawide para leitura paralela de editais e questões, teclados mecânicos silenciosos, mouses ergonômicos e suportes articulados para longas maratonas de revisão SRS.',
    highlights: [
      'Entrega rápida via Mercado Envios Full',
      'Parcelamento facilitado direto no Mercado Livre',
      'Curadoria pensada para produtividade e ergonomia em TI',
    ],
    ctaLabel: 'Ver Oferta no Mercado Livre',
    url: MERCADO_LIVRE_AFFILIATE.url,
    image: meliSetupImg,
    imageAlt: 'Estação de estudos minimalista para profissionais de TI com monitor ultrawide e teclado mecânico',
    featured: true,
  },
  {
    id: 'ml-slot-foco-audio',
    slotCode: 'Publicação 02',
    category: 'foco',
    categoryLabel: 'Foco & Áudio',
    title: 'Fones com Cancelamento de Ruído (ANC)',
    subtitle: 'Concentração profunda para revisões diárias',
    description:
      'Isole ruídos externos durante sessões de flashcards, videoaulas técnicas e simulados cronometrados em casa ou no transporte.',
    highlights: [
      'Redução ativa de ruído para alta retenção',
      'Conforto prolongado em ciclos Pomodoro',
    ],
    ctaLabel: 'Explorar no Mercado Livre',
    url: MERCADO_LIVRE_AFFILIATE.url,
    image: meliHeadphonesImg,
    imageAlt: 'Fone de ouvido sem fio preto com cancelamento ativo de ruído sobre mesa escura',
  },
  {
    id: 'ml-slot-livros-ti',
    slotCode: 'Publicação 03',
    category: 'livros',
    categoryLabel: 'Bibliografia & Notas',
    title: 'Livros Clássicos de TI & Tablets de Estudo',
    subtitle: 'Obras cobradas por Cebraspe, FGV e Cesgranrio',
    description:
      'Edições atualizadas de Redes (Tanenbaum e Kurose), Engenharia de Software (Sommerville e Pressman), Banco de Dados (Navathe) e tablets com caneta para mapas mentais.',
    highlights: [
      'Bibliografia oficial adotada pelas bancas federais',
      'Tablets e cadernos inteligentes para anotações ativas',
    ],
    ctaLabel: 'Conferir Seleção',
    url: MERCADO_LIVRE_AFFILIATE.url,
    image: meliBooksImg,
    imageAlt: 'Livros técnicos de computação, tablet com caneta digital e caderno minimalista sobre mesa de estudos',
  },
];
