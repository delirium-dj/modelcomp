# GLM-4.7-Flash — findings by Muse Glimmer 30B

- Source: Z.ai (zai-org/GLM-4.7-Flash)
- Date: 2026-10-27
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** 30B-A3B MoE open-weight model from Z.AI, positioned as the strongest 30B-class model for lightweight agentic coding and tool use.
- **Provider / access:** Hugging Face `zai-org/GLM-4.7-Flash` MIT, OpenRouter/Z.ai API `zai-org/glm-4.7-flash`; Chat Completions.
- **Release / knowledge:** 2026-01-19 release; knowledge cutoff not published.
- **IDs:** `zai-org/GLM-4.7-Flash`
- **Context window:** 200,000 tokens native; max new tokens 131,072 per evaluation parameters, verified Hugging Face README.
- **Modalities:** Text in/out; tool calling, structured outputs supported; text-only.
- **Pricing (as of 2026-10-27):** Open weights MIT; hosted ~$0.07/$0.40 per 1M in/out (Artificial Analysis pricing), free self-host.
- **Architecture:** 30B total / 3B active MoE, MLA, MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- τ²-Bench: **79.5%** (Hugging Face README, official evaluation)
- Terminal-Bench 2.1: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA: **75.2%** (Hugging Face README)
- HLE: **14.4%** (Hugging Face README)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: **59.2%** (Hugging Face README; leaderboard 59.2)
- LiveCodeBench v6: **64.0%** (Hugging Face README)
- SciCode / AA-SciCode: no verified public score found

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 71/100.** τ²-Bench 79.5% is strong for 30B; no Terminal-Bench 2.1/GDPval caps score.
- **Reasoning: 68/100.** GPQA 75.2% is solid, HLE 14.4% weak, no Intelligence Index.
- **Context window: 65/100.** 200k native puts it in 128-256k tier.
- **Multimodal: 15/100.** Text-only.
- **Coding: 65/100.** SWE-bench Verified 59.2% + LiveCodeBench v6 64.0% good for size; no SciCode.
- **Cost efficiency: 95/100.** MIT open weights, cheap hosted pricing.
- **Overall Score: 57/100.** Mean of five quality dims (71+68+65+15+65)/5 = 56.8 → 57.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
