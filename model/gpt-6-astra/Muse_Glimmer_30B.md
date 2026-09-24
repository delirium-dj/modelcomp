# GPT-6 Astra — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-6 Astra
- Date: 2026-09-24 UTC
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's September 2026 flagship reasoning model for complex end-to-end work across reasoning, coding, computer use, research and document creation. First broadly deployed OpenAI model classified Critical for cybersecurity capability under the Preparedness Framework.
- **Provider / access:** OpenAI `gpt-6-astra` via Chat Completions API; available via 8 providers per Artificial Analysis.
- **Release / knowledge:** Released 2026-09-03/04; knowledge cutoff April 2026.
- **IDs:** openai/gpt-6-astra
- **Context window:** 1.05M tokens reported by BenchLM; 1.1M input / 128K output reported by llm-stats; Artificial Analysis lists 1M. Long-context retrieval verified via MRCR.
- **Modalities:** text and image input, text output; reasoning yes; tool calls supported.
- **Pricing (as of 2026-09-24):** $10.00 per 1M input, $1.00 per 1M cached input, $50.00 per 1M output via OpenAI.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

> SELF-EXCLUSION check: verified public numbers found for the exact model ID.

Agent / tool use:

- Terminal-Bench 2.1: **87.3%** (BenchLM Vals Terminal-Bench 2.1)
- Tau3-Banking / Tau2-Bench: **41.4%** (BenchLM AA Tau3 Banking)
- GDPval-AA: **1542** Elo (BenchLM GDPval-AA); normalized 52.1% on same harness
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (BenchLM GPQA-D)
- HLE: **54.7%** (BenchLM AA-HLE)
- LCR / MLCR: AA-LCR **80.7%** (BenchLM); MLCR-AA **35.0%** (BenchLM)
- CritPt: **31.7%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: Artificial Analysis Intelligence Index **53** #6/211 (Artificial Analysis); BenchLM overall **88.47/100** #1/507 (BenchLM)
- Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (BenchLM AA-Omniscience Accuracy / Hallucination Rate)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **56.5%** (BenchLM AA-SciCode)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE **74.1%** (BenchLM); AA Coding Index **76.9%** (BenchLM); FrontierSWE v2 **65.5%** (BenchLM)

Long context:

- MRCR v2 256K-512K: **100.0%** (BenchLM)
- MRCR v2 512K-1M: **96.3%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.1 87.3% near frontier 88%+; Tau3 Banking 41.4% moderate; GDPval-AA Elo 1542 caps below 1750+ frontier. Capped by Tau3 and GDPval.
- **Reasoning: 90/100.** GPQA Diamond 96%, HLE 54.7%, MRCR 100%/96% to 1M, AA-LCR 80.7%; CritPt 31.7% and Intelligence Index 53 pull down from top tier.
- **Context window: 97/100.** ≥1M tier with MRCR 100% at 256K-512K and 96.3% at 512K-1M, just below 98% perfect retrieval threshold.
- **Multimodal: 65/100.** Text + image input, text output; no audio/video output reported. Image-in tier 60-70.
- **Coding: 87/100.** DeepSWE 74.1% at frontier threshold, AA Coding Index 76.9%, AA-SciCode 56.5% solid; missing SWE-bench Verified / LiveCodeBench caps score.
- **Cost efficiency: 30/100.** $10/$50 pricing maps to ~30 on the cost efficiency scale per methodology.
- **Overall Score: 85/100.** Mean of Tool 87 + Reasoning 90 + Context 97 + Multimodal 65 + Coding 87 = 85.2 → 85. Best-fit: top-tier reasoning and long context with strong agentic tool use, premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
