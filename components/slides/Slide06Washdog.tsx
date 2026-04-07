import CaseSlide from "../CaseSlide";

export default function Slide06Washdog({ total }: { total: number }) {
  return (
    <CaseSlide
      slideNum={6}
      total={total}
      heading="Do zero a 4 mil impressões e 1ª página do Google — em 30 dias"
      tag="Marketing Digital com IA"
      tagIcon="mdi:magnify"
      steps={[
        { label: "Desafio", title: "Novo negócio, sem presença digital", text: "Mercado competitivo, sem posicionamento, sem SEO e sem prova social." },
        { label: "Solução", title: "Marketing digital escalável com IA", text: "SEO programático, conteúdo com IA, listagens automatizadas e redes sociais." },
        { label: "Resultado", title: "Primeira página em 1 mês", text: "De invisível a destaque nas buscas do Google com crescimento acelerado de tráfego orgânico." },
      ]}
      note={<><strong style={{ color: "var(--blue-dark)" }}>42% das empresas</strong> apontam marketing e vendas como a função nº1 de uso de IA generativa. <em style={{ color: "var(--g500)" }}>(Qualtrics, 2025)</em></>}
      metrics={[
        { value: "+4.000", label: "impressões orgânicas no primeiro mês", variant: "primary" },
        { value: "1ª pág.", label: "resultados Google para buscas-alvo", variant: "secondary" },
        { value: "0 → presente", label: "presença digital — do zero ao visível", variant: "tertiary" },
      ]}
    />
  );
}
