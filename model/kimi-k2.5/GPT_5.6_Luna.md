# Kimi K2.5 — findings by GPT 5.6 Luna

- Source: Moonshot AI/Kimi K2.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Kimi K2.5
- **Short description:** Open native multimodal agent model with visual coding and agent swarms.
- **Provider / access:** Kimi.com, Kimi App, API, and Kimi Code.
- **Release / knowledge:** 2026; cutoff not verified.
- **IDs:** `moonshotai/Kimi-K2.5`.
- **Context window:** Evaluations used 256K context; exact maximum not separately verified.
- **Modalities:** Text, image, video; text output, coding, search, code interpreter, web tools.
- **Pricing (as of 2026-10-08):** API pricing varies; exact rate not verified.
- **Architecture:** Open-source multimodal model; exact parameters not needed for this report.

### Raw benchmarks found
- HLE: **31.5% text / 21.3% image without tools; 51.8% text / 39.8% image with tools**.
- Agent swarm supports up to **100 sub-agents** and **1,500 tool calls**.

### Normalized scores (1–100)
- **Tool use: 94/100.** Strong tool-augmented HLE and agent-swarm design.
- **Reasoning: 88/100.** Tool-assisted HLE is strong.
- **Context window: 84/100.** 256K evaluation context; retrieval limit beyond that unclear.
- **Multimodal: 94/100.** Native text/image/video capability.
- **Coding: 91/100.** Visual coding and Kimi Code positioning.
- **Cost efficiency: 88/100.** Open model and API access; exact rates unavailable.
- **Overall Score: 90.2/100.** Strong open multimodal agent for coding and long workflows.

### Multi-source deep-research addendum (2026-10-09)

- Moonshot’s technical report describes K2.5 as an open-source multimodal agentic model with 256K context; OpenRouter confirms visual coding and agent-swarm positioning. An independent safety paper evaluates cyber, CBRNE, alignment, censorship, and harmlessness risks.
- Recalculation: retained existing score; the multimodal/agent evidence is strong but no new exact benchmark supports a numeric adjustment.
- Sources: https://arxiv.org/abs/2602.02276 ; https://huggingface.co/moonshotai/Kimi-K2.5/blob/refs%2Fpr%2F29/README.md ; https://arxiv.org/abs/2604.03121

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-08
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://www.kimi.com/en/blog/kimi-k2-5
