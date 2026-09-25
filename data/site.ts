export type Procedure = { name: string; description: string; image: string };
export type Testimonial = { quote: string; name: string };

export const site = {
  name: 'Jennifer Lino',
  monogram: 'JL',
  headline: 'A beleza de ser você, em cada detalhe.',
  cro: '',
  bio: 'Biomédica esteta no Recreio, Rio de Janeiro, a Dra. Jennifer Lino une escuta, técnica e um olhar individual para valorizar a beleza de cada rosto. Seu trabalho em harmonização facial busca resultados visíveis com naturalidade, respeitando os traços e a expressão de cada pessoa.',
  education: [] as string[],
  specialties: ['Harmonização facial', 'Estética avançada', 'Embelezamento com naturalidade'],
  phone: '',
  whatsapp: '',
  whatsappUrl: 'https://wa.me/message/QCLUSJG7KULVO1',
  address: 'Recreio, Rio de Janeiro · RJ',
  professionalPhilosophy: 'Resultados visíveis, sem exageros.',
  instagram: 'https://www.instagram.com/dra.jenniferlino/',
  instagramHandle: '@dra.jenniferlino',
  philosophy: ['SEUS TRAÇOS.', 'SUA ESSÊNCIA.', 'SUA VERSÃO.'],
  colors: { paper: '#f4eee8', ink: '#2d2420', taupe: '#8d6e60', champagne: '#d9b995', dark: '#211917', wine: '#2a1c1a', muted: '#725f57' },
  images: { hero: '/images/jennifer-hero.webp', essence: '/images/jennifer-essencia.webp', about: '/images/jennifer-sobre.webp', beauty: '/images/jennifer-experiencia.webp' },
  procedures: [] as Procedure[],
  office: [] as { src: string; alt: string }[],
  testimonials: [] as Testimonial[],
  results: { enabled: true, items: [
    { image: '/images/resultado-01.webp', label: 'Beleza em equilíbrio', alt: 'Comparativo frontal de antes e depois de tratamento facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1202 / 1600 },
    { image: '/images/resultado-02.webp', label: 'Harmonia em cada ângulo', alt: 'Comparativo de antes e depois do rosto em visão de três quartos.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1284 / 1314 },
    { image: '/images/resultado-03.webp', label: 'Traços valorizados', alt: 'Comparativo frontal de antes e depois de harmonização facial.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1194 / 1600 },
    { image: '/images/resultado-04.webp', label: 'Delicadeza nos detalhes', alt: 'Comparativo de antes e depois em detalhe dos lábios.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1258 / 1582 },
    { image: '/images/resultado-05.webp', label: 'Expressão e naturalidade', alt: 'Comparativo de antes e depois em detalhe do perfil e dos lábios.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1276 / 1600 },
    { image: '/images/resultado-06.webp', label: 'Sutileza que se vê', alt: 'Comparativo de antes e depois em detalhe dos lábios.', orientation: 'horizontal', beforeShare: .5, comparisonRatio: 1268 / 1600 },
    { image: '/images/resultado-07.webp', label: 'Perfil em foco', alt: 'Comparativo de antes e depois do perfil facial em imagens sobrepostas.', orientation: 'vertical', beforeShare: .5, comparisonRatio: 1122 / 1402 },
  ] },
  seo: { title: 'Dra. Jennifer Lino | Harmonização Facial no Recreio, RJ', description: 'Estética avançada e harmonização facial com naturalidade no Recreio, Rio de Janeiro. Conheça a Dra. Jennifer Lino e agende sua avaliação.', url: '' },
};

export const appointmentUrl = site.whatsappUrl;
