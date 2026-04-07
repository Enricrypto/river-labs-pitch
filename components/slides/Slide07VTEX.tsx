import CaseSlide from "../CaseSlide";

export default function Slide07VTEX({ total }: { total: number }) {
  return (
    <CaseSlide
      slideNum={7}
      total={total}
      heading="De 10h por RFP a resposta automática — 1.094 horas salvas em 6 meses"
      tag="AI RFP Assistant · Automação de Processos"
      steps={[
        { label: "Desafio", title: "10 horas por proposta, respondidas manualmente", text: "Equipes respondiam ~117 questões técnicas e de compliance por RFP sem padronização." },
        { label: "Solução", title: "AI RFP Assistant interno em produção global", text: "112 RFPs processados e 13.100 respostas geradas em 6 meses — EMEA, US, Brasil, LATAM e APAC." },
        { label: "Resultado", title: "137 dias de trabalho recuperados", text: "1.094h salvas e custo de infraestrutura de $16,24 por RFP processado." },
      ]}
      note={<>Substituiu plataforma externa <strong>Loopio ($40k/ano)</strong> por solução própria a <strong>$3.600/ano</strong> — redução de <strong>91% no custo anual</strong>.</>}
      metrics={[
        { value: "1.094h", label: "horas salvas em 6 meses de operação", variant: "primary" },
        { value: "$36.4k", label: "economizado vs. plataforma Loopio", variant: "secondary" },
        { value: "~10h", label: "de trabalho manual eliminado por RFP", variant: "tertiary" },
      ]}
    />
  );
}
