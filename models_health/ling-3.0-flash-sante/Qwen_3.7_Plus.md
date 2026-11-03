# Ling 3.0 Flash Sante — findings by Qwen 3.7 Plus
- Source: InclusionAI/Ling 3.0 Flash Sante (`opencode/ling-3.0-flash-sante`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Sante
- **Short description:** Ant Group/InclusionAI's September 2026 health/medicine domain fine-tune of Ling 3.0 Flash ('santé' = health). 124B total / 5.1B active MoE. 262K context (32K output). Text in/out. Reasoning (switchable), function calling. No vision. $0.04/$0.12 per 1M. DFO ranked #682/698 (emerging-tier). Designed for medical reasoning, healthcare tasks, and evidence-based retrieval.
- **Provider / access:** InclusionAI (Ant Group). $0.04/$0.12 per 1M.
- **Release / knowledge:** September 4, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/ling-3.0-flash-sante`
- **Context window:** 262,144 tokens (262K); 32,768 max output
- **Modalities:** Text in/out; reasoning (switchable); function calling; no vision
- **Pricing:** $0.04/$0.12 per 1M

### Raw benchmarks found

Agent / tool use: Function calling supported. Reasoning mode. No specific benchmarks.

Reasoning / knowledge: Medical reasoning focus. No general benchmarks. Domain-specific fine-tune of Ling 3.0 Flash.

Coding: No benchmarks. Domain-specific (health/medicine). Likely limited coding.

Multimodal: Text in/out only. No vision.

Long context: 262K context (32K output). Good for medical documents.

### Normalized scores (1–100)

- **Tool use: 50/100.** Function calling, reasoning. No benchmarks.
- **Reasoning: 50/100.** Medical reasoning focus. No general benchmarks. Based on Ling 3.0 Flash.
- **Context window: 65/100.** 262K context (32K output). Good.
- **Multimodal: 15/100.** Text in/out only. No vision.
- **Coding: 30/100.** No benchmarks. Domain-specific (health/medicine). Limited coding.
- **Cost efficiency: 90/100.** $0.04/$0.12 per 1M. Very cheap.
- **Overall Score: 42/100.** Mean of Tool (50) + Reasoning (50) + Context (65) + Multimodal (15) + Coding (30) = 210/5 = 42. Rounded to 45. Health/medicine domain fine-tune. 124B/5.1B MoE. Very cheap. No general benchmarks. Limited coding.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
