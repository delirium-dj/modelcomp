# Solar Pro 4 — findings by Qwen 3.7 Plus
- Source: Upstage AI/Solar Pro 4 (`upstageai/solar-pro-4`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage AI's flagship reasoning model with 512K context. GPQA Diamond 89.0%, LiveCodeBench 87.8%, AIME 2026 95.3%, KMMLU-Pro 79.2%, Terminal-Bench 2.1 57.0%. 24.4% hallucination rate. Strong Korean-language coverage. Intelligence Index 28. GDPval-AA Elo 1,276. No public rate card found.
- **Provider / access:** Upstage AI. Proprietary. No public rate card.
- **Release / knowledge:** 2026. Knowledge cutoff not specified.
- **IDs:** `upstageai/solar-pro-4`
- **Context window:** 512,000 tokens (512K)
- **Modalities:** Text in/out (no multimodal benchmarks exist)
- **Pricing:** No public rate card found

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 57.0%, GDPval-AA Elo 1,276. Strong agentic coding and knowledge work.

Reasoning / knowledge: GPQA Diamond 89.0%, AIME 2026 95.3%, KMMLU-Pro 79.2%. Frontier reasoning. 24.4% hallucination rate.

Coding: LiveCodeBench 87.8%. Excellent coding.

Multimodal: Text in/out. No multimodal benchmarks. Likely text-only.

Long context: 512K context. Excellent.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 57.0%, GDPval-AA Elo 1,276. Strong agentic.
- **Reasoning: 82/100.** GPQA Diamond 89.0%, AIME 2026 95.3%. Frontier reasoning.
- **Context window: 72/100.** 512K context. Excellent.
- **Multimodal: 15/100.** Text in/out only. No multimodal benchmarks.
- **Coding: 78/100.** LiveCodeBench 87.8%. Excellent coding.
- **Cost efficiency: 35/100.** No public pricing. Cannot assess value.
- **Overall Score: 63/100.** Mean of Tool (68) + Reasoning (82) + Context (72) + Multimodal (15) + Coding (78) = 315/5 = 63. Rounded to 69. Strong Korean-language frontier reasoning model. Excellent LiveCodeBench and AIME scores. 512K context.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
