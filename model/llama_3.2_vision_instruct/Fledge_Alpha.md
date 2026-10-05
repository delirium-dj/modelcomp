# Llama 3.2 Vision Instruct — findings by Fledge Alpha

- Source: Meta (`llama_3.2_vision_instruct`, instruction-tuned 11B variant unless otherwise noted)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (11B default per this folder's scale; 90B listed where divergent)
- **Short description:** Meta's Sept 25, 2024 multimodal instruction model with a separately trained vision adapter over Llama 3.1; available in 11B and 90B sizes.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-11B-Vision-Instruct` / `...90B...`, WatsonX, OpenRouter free tier, Together/Fireworks.
- **Release / knowledge:** September 25, 2024; December 2023 knowledge cutoff.
- **IDs:** `meta-llama/llama-3.2-11b-vision-instruct`; no Zen Free ID verified.
- **Context window:** 128,000 tokens; 128K max output in some deployments.
- **Modalities:** text + image in; text out; no audio/video; function calling documented by serving providers like WatsonX.
- **Pricing (as of 2026-10-05):** ~$0.06 in/out per 1M on OpenRouter; AWS/watsonx ~$0.35/M on IBM.
- **Architecture:** text+image MoE-style adapter on Llama 3.1 base; 11B / 90B variants; Llama license.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **14.6%** (BenchmarkList, AA)
- Terminal-Bench Hard: **0.8%** (BenchmarkList)
- SciCode: **11.2%** (BenchmarkList coding row)

Reasoning / knowledge:

- MMMU: **50.7 (11B) / 60.3 (90B)** with CoT
- MMMU-Pro Standard: **33.0 (11B) / 45.2 (90B)**
- MathVista: **51.5 (11B) / 57.3 (90B)**
- DocVQA: **88.4 (11B) / 90.1 (90B)** — ANLS as %
- AI2 Diagram: **91.1 (11B) / 92.3 (90B)**
- ChartQA: **83.4 (11B) / 85.5 (90B)**

Coding:

- SciCode 11.2 is the only tracked coding row (BenchmarkList).

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 22/100.** τ2-bench 14.6 and Terminal-Bench Hard 0.8 are verified lower-tier rows; not designed for agents.
- **Reasoning: 58/100.** MMMU 50.7 (11B) shows real visual college-level reasoning; MMMU-Pro 33 caps ceiling.
- **Context window: 84/100.** 128K native.
- **Multimodal: 86/100.** ChartQA 83.4, AI2 91.1, DocVQA 88.4 — docs/charts/diagrams are its strength.
- **Coding: 22/100.** SciCode 11.2 only; not a coding model.
- **Cost efficiency: 92/100.** $0.06–0.35 in/out per 1M is cheap; 90B variant is pricier.
- **Overall Score: 54/100.** Mean of five non-cost dims (22+58+84+86+22)/5 = 54.4 → 54; best fit: 2024 document/chart QA vision model, not an agent or coding choice.

For the 90B variant, Reasoning ~62 (MMMU 60.3) and Multimodal ~88 shift Overall to ~57.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (NVIDIA NIM model card, BenchmarkList AA rows, FutureAGI pricing, llmreference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
