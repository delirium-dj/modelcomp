# DeepSeek-V4-Flash — findings by Muse Glimmer 30B

- Source: DeepSeek / deepseek-v4-flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek-AI preview Mixture-of-Experts model in the V4 series, 284B total / 13B activated, 1M context, designed for fast/economic agentic and coding use with near-Pro reasoning when thinking budget increased. Preview released 2026-04-24; older API name now serves V4.1-Flash-1017.
- **Provider / access:** DeepSeek API `deepseek-v4-flash` (legacy alias, now served by DeepSeek-V4.1-Flash-1017). OpenAI Chat Completions compatible, reasoning effort modes non-think / think high / think max.
- **Release / knowledge:** 2026-04-24 preview announcement; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek/deepseek-v4-flash`. Hugging Face `deepseek-ai/DeepSeek-V4-Flash`, ModelScope collection.
- **Context window:** 1,000,000 tokens total; output up to ~384K. Verified by DeepSeek V4 preview blog, arXiv 2606.19348, Hugging Face model card.
- **Modalities:** Input text only; Output text. Reasoning yes, tool calls yes, JSON mode supported. No image/video input.
- **Pricing (as of 2026-10-25):** Median provider pricing ~$0.14 / 1M input, $0.28 / 1M output off-peak; DeepSeek API lists Flash at 1元/1M input off-peak, 4元/1M output off-peak (peak 2元/8元). Cost per Artificial Analysis Intelligence Index task ~$0.15.
- **Architecture:** MoE, 284B total parameters, 13B activated per token. Hybrid Compressed Sparse Attention + Heavily Compressed Attention, Manifold-Constrained Hyper-Connections, Muon optimizer. Pre-trained >32T tokens. MIT license. Open weights.

### Raw benchmarks found

> Sources: DeepSeek V4 preview blog 2026-04-24, arXiv 2606.19348, Hugging Face model card deepseek-ai/DeepSeek-V4-Flash, Artificial Analysis model page DeepSeek V4 Flash 0731 (Max).

Agent / tool use:

- Terminal-Bench 2.0 Accuracy: **56.9%** V4-Flash Max; **56.6%** High — Hugging Face evaluation table
- Terminal-Bench 2.0 vs Pro: Pro Max 67.9% — Hugging Face
- MCPAtlas Public Pass@1: **69.0%** V4-Flash Max — Hugging Face
- Toolathlon Pass@1: **47.8%** V4-Flash Max — Hugging Face
- GDPval-AA Elo: **1,395** V4-Flash Max — Hugging Face comparison table
- Artificial Analysis Intelligence Index v4.3.2: **34** — Artificial Analysis, #14/121

Reasoning / knowledge:

- GPQA Diamond Pass@1: **88.1%** V4-Flash Max; **87.4%** High — Hugging Face
- MMLU-Pro EM: **86.2%** V4-Flash Max; **86.4%** High — Hugging Face
- Humanity's Last Exam Pass@1: **34.8%** V4-Flash Max; **29.4%** High — Hugging Face
- SimpleQA-Verified Pass@1: **34.1%** V4-Flash Max — Hugging Face
- Chinese-SimpleQA Pass@1: **78.9%** V4-Flash Max — Hugging Face
- HLE w/ tools Pass@1: **45.1%** V4-Flash Max — Hugging Face

Coding:

- LiveCodeBench Pass@1: **91.6%** V4-Flash Max; **88.4%** High — Hugging Face
- SWE-bench Verified Resolved: **79.0%** V4-Flash Max — Hugging Face
- SWE-Pro Resolved: **52.6%** V4-Flash Max — Hugging Face
- SWE-Multilingual Resolved: **73.3%** V4-Flash Max — Hugging Face

Long context:

- MRCR 1M MMR: **78.7%** V4-Flash Max; **76.9%** High — Hugging Face
- CorpusQA 1M ACC: **60.5%** V4-Flash Max — Hugging Face

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 56.9% Max and MCPAtlas 69% with Toolathlon 47.8% show solid agentic tool use for a 13B-active MoE; GDPval Elo 1,395 is mid-tier. Capped by lack of published Claw-Eval and lower Terminal-Bench vs Pro.
- **Reasoning: 78/100.** GPQA Diamond 88.1% and MMLU-Pro 86.2% are strong, HLE 34.8% and SimpleQA-Verified 34.1% limit peak. Comparable to mid-frontier reasoning with thinking budget.
- **Context window: 95/100.** 1M tokens verified with MRCR 78.7% at 1M and hybrid CSA/HCA efficiency. No public RULER/GraphWalks score.
- **Multimodal: 15/100.** Text input/output only; no image/video/audio support.
- **Coding: 83/100.** LiveCodeBench 91.6% and SWE-Verified 79.0% indicate strong coding; SWE-Pro 52.6% and lack of independent DeepSWE/SciCode numbers cap score.
- **Cost efficiency: 92/100.** $0.14/$0.28 median pricing yields ~$0.15 per Intelligence Index task, competitive for open-weight class.
- **Overall Score: 67.8/100.** Mean of five quality dims (68+78+95+15+83)/5 = 67.8 → 68 rounded. Best-fit: fast, cheap, long-context text model with strong coding/reasoning but text-only and moderate tool use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Glimmer_30B.md`, using the same headings.

---
