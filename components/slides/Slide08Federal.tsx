import CaseSlide from "../CaseSlide";

export default function Slide08Federal({ total }: { total: number }) {
  return (
    <CaseSlide
      slideNum={8}
      total={total}
      heading="Infraestrutura crítica e defesa contra ameaças de IA"
      tag="Governo Federal · Defesa contra IA · AWS Certified"
      steps={[
        { label: "Desafio 1 · Infraestrutura Pública", title: "Bilhões em obras públicas sem margem para erro", text: "Agências estaduais americanas precisam de sistemas de gestão rodoviária em conformidade federal para administrar 15+ estados em produção." },
        { label: "Desafio 2 · Segurança Corporativa", title: "Uma nova geração de ataques potencializados por IA", text: "O navegador é o vetor de ataque nº1. Empresas precisam de proteção em tempo real contra ameaças de IA, sem fricção para o usuário final." },
        { label: "Resultado", title: "Dois sistemas críticos em produção, zero downtime", text: "Gestão rodoviária adotada como padrão por agências estaduais americanas. Proteção contra ameaças de IA operando em tempo real." },
      ]}
      metrics={[
        { value: "3x", label: "arquiteto de soluções AWS", variant: "primary" },
        { value: "20k+", label: "endpoints contra ameaças de IA", variant: "secondary" },
        { value: "$500M+", label: "em infraestrutura pública sob gestão", variant: "tertiary" },
      ]}
    />
  );
}
