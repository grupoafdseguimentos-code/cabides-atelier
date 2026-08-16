# Cabides Atelier

Storefront editorial para cabides personalizados, acessórios e soluções de exposição. O catálogo inicial foi estruturado a partir do PDF mestre fornecido pelo cliente, sem criar produtos, preços ou avaliações não documentados.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

O projeto usa React, Vite, TypeScript, Tailwind e Wouter. A vitrine possui busca, filtros por categoria, drawer de produto, opções de ferragem, personalização, carrinho persistente em `localStorage` e links de checkout configuráveis.

## Asaas

O primeiro storefront aceita `VITE_ASAAS_CHECKOUT_URL` para apontar para um Checkout Asaas criado no Sandbox. Antes de produção, a integração deve incluir backend seguro para criação de pedidos, clientes, cobranças, armazenamento de `asaas_payment_id` e processamento idempotente do webhook protegido por `asaas-access-token`. Nunca exponha `ASAAS_API_KEY` no frontend.

## Assets

A logomarca oficial está em `client/public/cabides-atelier-logo.jpg`. As imagens do catálogo estão em `client/public/products/` e foram extraídas do PDF fonte.

## Conteúdo legal

As rotas `/privacidade`, `/termos` e `/cookies` são informativas e devem receber os dados jurídicos oficiais e revisão profissional antes da publicação.

## Validação

```bash
pnpm check
pnpm build
```

A publicação externa deve usar o comando de build `pnpm run build` e a saída `dist/public` conforme o `vercel.json` do projeto.
