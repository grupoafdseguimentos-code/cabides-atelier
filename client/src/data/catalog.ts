export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  colors?: string[];
  hardware?: string[];
  sizes?: string[];
  personalization?: boolean;
  featured?: boolean;
  tags: string[];
};

export const categories = [
  "Todos",
  "Cabides em madeira",
  "Cabides infantis",
  "Silhuetas e especiais",
  "Lingerie",
  "Cabides metálicos",
  "Acessórios e expositores",
  "Comunicação visual",
];

const image = (n: number) => `/products/catalogo-${String(n).padStart(3, "0")}.jpg`;

export const products: Product[] = [
  { id: "cabide-branco-presilha-luxo", name: "Cabide branco com presilha luxo", category: "Cabides em madeira", price: 20, image: image(3), description: "Cabide branco com presilha luxo e gancho italiano.", colors: ["Branco"], hardware: ["Rosê Gold", "Preto", "Dourado", "Cromado"], personalization: true, featured: true, tags: ["branco", "presilha", "luxo"] },
  { id: "cabide-marfim-presilha-luxo", name: "Cabide marfim com presilha luxo", category: "Cabides em madeira", price: 18, image: image(4), description: "Cabide marfim com presilha luxo e gancho italiano.", colors: ["Marfim"], hardware: ["Dourado", "Cromado", "Preto", "Rosê Gold"], personalization: true, featured: true, tags: ["marfim", "presilha"] },
  { id: "cabide-sk-marfim-luxo", name: "Cabide SK marfim com gancho luxo", category: "Cabides em madeira", price: 20, image: image(5), description: "Cabide SK marfim com gancho luxo tradicional.", colors: ["Marfim"], hardware: ["Dourado", "Cromado", "Rosê Gold", "Preto"], personalization: true, tags: ["sk", "marfim"] },
  { id: "cabide-sk-marfim-presilha", name: "Cabide SK marfim com presilha", category: "Cabides em madeira", price: 24, image: image(6), description: "Cabide SK marfim com presilha e gancho italiano.", colors: ["Marfim"], hardware: ["Dourado", "Preto", "Rosê Gold"], personalization: true, tags: ["sk", "presilha"] },
  { id: "cabide-sk-preto-presilha", name: "Cabide SK preto com presilhas", category: "Cabides em madeira", price: 35, image: image(7), description: "Cabide SK preto com presilhas e gancho italiano.", colors: ["Preto"], hardware: ["Dourado", "Cromado", "Rosê Gold", "Preto"], personalization: true, featured: true, tags: ["sk", "preto"] },
  { id: "cabide-sk-meipo-presilha", name: "Cabide SK Meipo com presilhas", category: "Cabides em madeira", price: 30, image: image(8), description: "Cabide SK cor Meipo com presilhas e gancho italiano.", colors: ["Meipo"], hardware: ["Dourado", "Cromado", "Preto", "Rosê Gold"], personalization: true, tags: ["sk", "meipo"] },
  { id: "cabide-tradicional-preto", name: "Cabide tradicional preto", category: "Cabides em madeira", price: 17, image: image(9), description: "Cabide tradicional preto com gancho italiano, sem presilhas.", colors: ["Preto"], hardware: ["Preto", "Dourado", "Rosê Gold", "Cromado"], personalization: true, tags: ["tradicional", "sem presilha"] },
  { id: "cabide-tradicional-preto-presilha", name: "Cabide tradicional preto com presilhas", category: "Cabides em madeira", price: 20, image: image(10), description: "Cabide tradicional preto com presilhas e gancho italiano.", colors: ["Preto"], hardware: ["Preto", "Dourado", "Cromado", "Rosê Gold"], personalization: true, tags: ["tradicional", "presilha"] },
  { id: "cabide-ys-marfim-luxo", name: "Cabide YS marfim com silicone", category: "Cabides em madeira", price: 17, image: image(11), description: "Cabide YS marfim com silicone antiderrapante, presilha luxo e gancho simples.", colors: ["Marfim"], hardware: ["Dourado", "Rosê Gold", "Preto", "Cromado"], personalization: true, tags: ["ys", "silicone"] },
  { id: "cabide-ys-marfim", name: "Cabide YS tradicional marfim", category: "Cabides em madeira", price: 14, image: image(12), description: "Cabide YS tradicional marfim com silicone antiderrapante e gancho simples.", colors: ["Marfim"], hardware: ["Dourado", "Preto", "Rosê Gold", "Cromado"], personalization: true, tags: ["ys", "silicone"] },
  { id: "cabide-infantil-conjunto", name: "Cabide infantil para conjunto", category: "Cabides infantis", price: 48, image: image(13), description: "Cabide infantil marfim para conjunto, com presilha simples e gancho simples.", colors: ["Marfim"], hardware: ["Dourado", "Cromado", "Preto", "Rosê Gold"], sizes: ["Infantil"], personalization: true, featured: true, tags: ["infantil", "conjunto"] },
  { id: "cabide-infantil-barra", name: "Cabide infantil com barra", category: "Cabides infantis", price: 9, image: image(14), description: "Cabide infantil marfim com barra e gancho simples.", colors: ["Marfim"], sizes: ["Infantil"], tags: ["infantil", "barra"] },
  { id: "cabide-infantil-presilha", name: "Cabide infantil com presilha", category: "Cabides infantis", price: 14, image: image(15), description: "Cabide infantil marfim com presilha simples e gancho simples.", colors: ["Marfim"], hardware: ["Dourado", "Cromado", "Preto", "Rosê Gold"], sizes: ["Infantil"], personalization: true, tags: ["infantil", "presilha"] },
  { id: "silhueta-quadrado", name: "Silhueta quadrado marfim", category: "Silhuetas e especiais", price: 37, image: image(16), description: "Cabide adulto silhueta quadrado marfim com gancho simples.", colors: ["Marfim"], hardware: ["Dourado Fosco", "Rosê Fosco", "Preto", "Cromado"], sizes: ["Adulto"], personalization: true, tags: ["silhueta", "adulto"] },
  { id: "silhueta-perninha", name: "Silhueta adulto perninha", category: "Silhuetas e especiais", price: 45, image: image(17), description: "Silhueta adulto perninha com gancho luxo e cabide branco.", colors: ["Branco"], hardware: ["Rosê Fosco", "Dourado Fosco", "Preto", "Cromado"], sizes: ["Adulto"], personalization: true, tags: ["silhueta", "adulto"] },
  { id: "cabide-3d-busto", name: "Cabide marfim 3D com busto", category: "Silhuetas e especiais", price: 52, image: image(18), description: "Cabide marfim 3D com busto e gancho italiano.", colors: ["Marfim"], hardware: ["Dourado Fosco", "Rosê Fosco", "Preto", "Cromado"], personalization: true, featured: true, tags: ["3d", "busto"] },
  { id: "cabide-lingerie", name: "Cabide charmosinho para lingerie", category: "Lingerie", price: 14, image: image(19), description: "Cabide para lingerie com presilhas e silicone.", colors: ["Dourado", "Rosê Gold"], personalization: true, tags: ["lingerie", "silicone"] },
  { id: "placa-acrilico", name: "Placa personalizada de acrílico", category: "Comunicação visual", price: 80, image: image(20), description: "Placa de acrílico com 4 opções ou espaços de personalização.", personalization: true, tags: ["acrílico", "placa"] },
  { id: "gancho-s", name: "Gancho S", category: "Acessórios e expositores", price: 8, image: image(21), description: "Gancho S para organização e exposição.", colors: ["Dourado", "Cromado", "Branco", "Preto", "Rosê Gold"], tags: ["gancho", "expositor"] },
  { id: "porta-bolsa-simples", name: "Porta bolsa simples", category: "Acessórios e expositores", price: 28, image: image(22), description: "Porta bolsa simples para exposição.", colors: ["Rosê Gold", "Rosê Expo", "Cromado", "Preto", "Dourado", "Dourado Expo"], tags: ["bolsa", "expositor"] },
  { id: "gancho-provador", name: "Gancho para provador cromado", category: "Acessórios e expositores", price: 5, image: image(23), description: "Gancho para provador cromado. Valores variam conforme a quantidade de ganchos.", colors: ["Cromado"], tags: ["provador", "cromado"] },
  { id: "base-manequim", name: "Base para manequim adulto", category: "Acessórios e expositores", price: 90, image: image(24), description: "Base para manequim e exposição, medida 33 x 33 cm.", sizes: ["33 x 33 cm"], tags: ["manequim", "base"] },
  { id: "tampa-manequim-cromada", name: "Tampa para manequim cromada", category: "Acessórios e expositores", price: 22, image: image(29), description: "Tampa para manequim com acabamento cromado.", colors: ["Cromado"], tags: ["manequim", "tampa"] },
  { id: "tampa-manequim-dourada", name: "Tampa para manequim dourada", category: "Acessórios e expositores", price: 36, image: image(30), description: "Tampa para manequim com acabamento dourado.", colors: ["Dourado"], tags: ["manequim", "tampa"] },
  { id: "tampa-manequim-rose", name: "Tampa para manequim Rosê Expo", category: "Acessórios e expositores", price: 32, image: image(31), description: "Tampa para manequim com acabamento Rosê Expo.", colors: ["Rosê Expo"], tags: ["manequim", "tampa"] },
  { id: "cabide-saia-cromado", name: "Cabide para saia adulto ou infantil", category: "Cabides metálicos", price: 5, image: image(25), description: "Cabide para saia com estrutura cromada e presilhas de plástico.", colors: ["Cromado"], sizes: ["Adulto", "Infantil"], tags: ["saia", "metálico"] },
  { id: "cabide-triplo-cromado", name: "Cabide triplo cromado", category: "Cabides metálicos", price: 14, image: image(32), description: "Cabide triplo cromado, 35,1 cm de largura x 30,5 cm de altura.", colors: ["Cromado"], tags: ["triplo", "metálico"] },
  { id: "cabide-extensor", name: "Cabide extensor adulto ou infantil", category: "Cabides metálicos", price: 28, image: image(33), description: "Cabide extensor com presilhas. Valores variam por acabamento.", colors: ["Cromado", "Rosê", "Dourado"], sizes: ["Adulto", "Infantil"], tags: ["extensor", "presilha"] },
  { id: "cabide-saia-rose", name: "Cabide para saia Rosê", category: "Cabides metálicos", price: 6, image: image(34), description: "Cabide para saia Rosê com duas presilhas acrílicas.", colors: ["Rosê"], sizes: ["Adulto", "Infantil"], tags: ["saia", "acrílico"] },
  { id: "cabide-saia-acrilica", name: "Cabide para saia com presilha acrílica", category: "Cabides metálicos", price: 7.5, image: image(35), description: "Cabide para saia adulto ou infantil com presilhas acrílicas.", sizes: ["Adulto", "Infantil"], tags: ["saia", "acrílico"] },
  { id: "suporte-bolsa-duplo", name: "Suporte de bolsa duplo cromado", category: "Acessórios e expositores", price: 24, image: image(36), description: "Suporte de bolsa duplo com acabamento cromado.", colors: ["Cromado"], tags: ["bolsa", "duplo"] },
];

export const formatBRL = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
