// Cabides Atelier — detalhe de produto: ficha editorial, escolhas documentadas e conversão sem checkout.
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Minus, Plus, ShoppingBag } from "lucide-react";
import { Link, useLocation, useRoute } from "wouter";
import { formatBRL, products } from "@/data/catalog";

const STORAGE_KEY = "cabides-atelier-cart";
type CartItem = Omit<(typeof products)[number], "hardware" | "personalization" | "sizes"> & { quantity: number; hardware?: string; personalization?: string; size?: string };

export default function ProductPage() {
  const [, params] = useRoute("/produto/:id");
  const [, navigate] = useLocation();
  const product = useMemo(() => products.find((item) => item.id === params?.id), [params?.id]);
  const [hardware, setHardware] = useState(product?.hardware?.[0] || product?.colors?.[0] || "");
  const [size, setSize] = useState(product?.sizes?.[0] || "");
  const [personalization, setPersonalization] = useState("Nenhuma");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} | Cabides Atelier`;
    setHardware(product.hardware?.[0] || product.colors?.[0] || "");
    setSize(product.sizes?.[0] || "");
    setPersonalization("Nenhuma");
    setQuantity(1);
  }, [product]);

  if (!product) {
    return <main className="product-page"><div className="product-page-inner"><p className="eyebrow">CATÁLOGO</p><h1>Produto não encontrado.</h1><Link className="primary-button" href="/#catalogo">Voltar ao catálogo <ArrowRight size={17} /></Link></div></main>;
  }

  const fee = personalization === "Laser — frente" ? 2 : personalization === "Laser — frente e verso" ? 4 : personalization === "Silk — frente" ? 1.5 : personalization === "Silk — frente e verso" ? 3 : 0;
  const unitPrice = product.price + fee;
  const add = () => {
    let current: CartItem[] = [];
    try { current = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch { current = []; }
    current.push({ ...product, quantity, hardware, size, personalization });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
    setAdded(true);
  };

  return <main className="product-page">
    <div className="product-page-inner">
      <Link className="back-link" href="/#catalogo"><ArrowLeft size={15} /> Voltar ao catálogo</Link>
      <div className="product-detail-grid">
        <div className="product-detail-image"><img src={product.image} alt={product.name} /></div>
        <article className="product-detail-copy">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="product-detail-description">{product.description}</p>
          <div className="product-detail-price">{formatBRL(unitPrice)} <small>por unidade</small></div>
          <div className="documented-data"><span>Informações do catálogo</span>{product.colors && <p><strong>Acabamento:</strong> {product.colors.join(", ")}</p>}{product.sizes && <p><strong>Tamanho:</strong> {product.sizes.join(", ")}</p>}</div>
          {(product.hardware || product.colors) && <label className="field-label">{product.hardware ? "Escolha a ferragem" : "Acabamento"}<select value={hardware} onChange={(e) => setHardware(e.target.value)}>{(product.hardware || product.colors || []).map((option) => <option key={option}>{option}</option>)}</select></label>}
          {product.sizes && <label className="field-label">Tamanho<select value={size} onChange={(e) => setSize(e.target.value)}>{product.sizes.map((option) => <option key={option}>{option}</option>)}</select></label>}
          {product.personalization && <><label className="field-label">Personalização<select value={personalization} onChange={(e) => setPersonalization(e.target.value)}><option>Nenhuma</option><option>Laser — frente</option><option>Laser — frente e verso</option><option>Silk — frente</option><option>Silk — frente e verso</option></select></label><p className="helper-note"><Check size={14} /> A arte final será validada antes da produção.</p></>}
          <div className="quantity-row"><span>Quantidade</span><div className="quantity-control"><button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Diminuir quantidade"><Minus size={15} /></button><strong>{quantity}</strong><button type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Aumentar quantidade"><Plus size={15} /></button></div></div>
          <button className="primary-button full" type="button" onClick={add}>{added ? "Adicionado ao carrinho" : "Adicionar ao carrinho"} <ShoppingBag size={17} /></button>
          {added && <div className="added-actions"><span>Seu item foi salvo no carrinho.</span><button className="text-button" type="button" onClick={() => navigate("/#catalogo")}>Continuar escolhendo <ArrowRight size={15} /></button></div>}
        </article>
      </div>
    </div>
  </main>;
}
