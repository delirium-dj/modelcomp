# DiffusionGemma 26B A4B — findings by Muse Glimmer 30B

- Source: Google DeepMind / diffusiongemma-26b-a4b
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DiffusionGemma 26B A4B
- **Short description:** Google DeepMind open-weights discrete-diffusion language model built on the Gemma 4 26B A4B MoE architecture. Multimodal text/image/video-in, text-out with block-autoregressive diffusion sampling and configurable thinking mode.
- **Provider / access:** Open weights on Hugging Face `google/diffusiongemma-26B-A4B-it`. Self-hosted; no public API tier. Chat Completions style via Transformers `DiffusionGemmaForBlockDiffusion`.
- **Release / knowledge:** Released 2026-06-10 per Artificial Analysis FAQ; training data cutoff January 2025 per Hugging Face model card.
- **IDs:** `google/diffusiongemma-26B-A4B-it` (instruction tuned). Base weights `google/diffusiongemma-26B-A4B`.
- **Context window:** Up to 256K tokens total per Hugging Face model card; Artificial Analysis FAQ lists 260k tokens. Sliding window 1024 tokens, canvas length 256. Verified via model card spec and Artificial Analysis spec page. Conflict noted: 256k vs 260k cited.
- **Modalities:** Input text, image, video; Output text. Reasoning yes with thinking mode, tool calls yes — native function calling supported. JSON mode supported.
- **Pricing (as of 2026-10-25):** Open weights Apache 2.0, self-hosted. No vendor API pricing. Cost efficiency scored on open-weights self-host.
- **Architecture:** 25.2B total parameters, 3.8B active per token. MoE with 8 active / 128 total experts + 1 shared. 30 layers, vocabulary 262K. Vision encoder ~550M. Discrete diffusion block-autoregressive decoder with autoregressive encoder prefill.

### Raw benchmarks found

> Sources: Hugging Face model card `google/diffusiongemma-26B-A4B-it` benchmark table, Artificial Analysis model page `diffusiongemma-26b-a4b`, arXiv TADM study 2609.37924 applying TADM:Post-train to DiffusionGemma-26B.

Agent / tool use:

- Tau2 average over 3: **56.2%** vs Gemma 4 26B A4B 68.2% — Hugging Face model card
- no verified public Terminal-Bench 2.1 / 4.0 score found for the exact IT checkpoint
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **77.6%** vs Gemma 4 26B A4B 82.6% — Hugging Face model card
- GPQA Diamond: **73.2%** vs 82.3% — Hugging Face model card
- AIME 2026 no tools: **69.1%** vs 88.3% — Hugging Face model card
- Humanity's Last Exam no tools: **11.0%** vs 8.7%; with search **11.9%** vs 17.2% — Hugging Face model card
- BigBench Extra Hard: **47.6%** vs 64.8% — Hugging Face model card
- Artificial Analysis Intelligence Index v4.3.2: **10** estimated — Artificial Analysis model page

Coding:

- LiveCodeBench v6: **69.1%** vs 77.1% — Hugging Face model card
- Codeforces ELO: **1429** vs 1718 — Hugging Face model card
- SciCode / AA-SciCode: no verified public score found

Long context:

- MRCR v2 8 needle 128k average: **32.0%** vs 44.1% — Hugging Face model card
- long-context retrieval reported via block diffusion; no verified public RULER/GraphWalks score found

Vision / multimodal:

- MMMLU: **81.5%** vs 86.3% — Hugging Face model card
- MMMU Pro: **54.3%** vs 73.8% — Hugging Face model card
- MATH-Vision: **70.5%** vs 82.4% — Hugging Face model card
- MedXPertQA MM: **49.0%** vs 58.1% — Hugging Face model card
- OmniDocBench 1.5 average edit distance, lower is better: **0.319** vs 0.149 — Hugging Face model card

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 average 56.2% indicates moderate agentic tool use, below Gemma 4 26B A4B 68.2%. No public Terminal-Bench / Toolathon scores. Capped by lack of independent tool benchmarks.
- **Reasoning: 69/100.** GPQA Diamond 73.2%, MMLU Pro 77.6% and AIME 69.1% show solid reasoning, offset by HLE no-tools 11.0% and BigBench Extra Hard 47.6%. Artificial Analysis Intelligence Index 10 estimated supports mid-tier placement.
- **Context window: 70/100.** 256k–260k tokens verified. Tier 200K–500K mapping. Limited MRCR v2 32.0% at 128k needle retrieval caps score.
- **Multimodal: 78/100.** Text + image + video input, text output with ~550M vision encoder. MMMU Pro 54.3% and MATH-Vision 70.5% indicate usable multimodal reasoning, below frontier vision models.
- **Coding: 67/100.** LiveCodeBench v6 69.1% and Codeforces ELO 1429 provide evidence of coding capability, below Gemma 4 26B A4B peers. No verified SWE-bench / DeepSWE numbers.
- **Cost efficiency: 100/100.** Apache 2.0 open weights, self-hostable with no vendor API cost.
- **Overall Score: 69/100.** Mean of five quality dims (62 + 69 + 70 + 78 + 67) / 5 = 69.2 → 69. Best-fit: open-weights diffusion MoE with solid multimodal reasoning and strong cost profile, trailing Gemma 4 autoregressive sibling on reasoning/coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
