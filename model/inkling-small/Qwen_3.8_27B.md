# Inkling Small — findings by Qwen 3.8 27B

- Source: Thinking Machines/inkling-small, e.g. OpenRouter (`thinkingmachines/inkling-small`, `thinkingmachines/inkling-small:free`), Hugging Face (`thinkingmachines/Inkling-Small`)
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small (open-weight "small" sibling of Thinking Machines' flagship Inkling; served with a paid and a `:free` variant on OpenRouter)
- **Short description:** Open-weight natively multimodal mixture-of-experts model from Thinking Machines Lab — 276B total / 12B active parameters — positioned as the smaller, more efficient member of the Inkling family for general-purpose reasoning, coding, agentic and tool-use work.
- **Provider / access:** Thinking Machines Tinker API (vendor), OpenRouter `thinkingmachines/inkling-small` and `thinkingmachines/inkling-small:free` (Chat Completions style; HF provider flags show tool-calling + structured output), plus DeepInfra, Together and Baseten hostings of the open weights. Not on the OpenCode Zen live list.
- **Release / knowledge:** released July 2026 (Artificial Analysis "Released July 2026"; HF model card published 2026-07-27); knowledge cutoff not published.
- **IDs:** OpenRouter `thinkingmachines/inkling-small` (paid) and `thinkingmachines/inkling-small:free` (free); Hugging Face `thinkingmachines/Inkling-Small`. No OpenCode Zen ID.
- **Context window:** 1,048,576 (1M) per Artificial Analysis; OpenRouter paid listing shows 524,288 (512K) while the `:free` listing shows 1,048,576.
- **Modalities:** text + image + audio in, text out (AA + OpenRouter + HF card; audio optimal <2 min WAV); reasoning yes (AA page is the reasoning variant; a non-reasoning variant may exist); tool calls + structured/JSON output (HF provider feature flags).
- **Pricing (as of 2026-10-04):** $0.30 in / $1.20 out per 1M (OpenRouter + AA); 80% cache discount (AA); ~$0.09 per AA Intelligence Index task; free tier available via OpenRouter `:free`.
- **Architecture:** open weights, Apache 2.0; 42-layer decoder-only transformer with sparse MoE (6 of 256 experts routed per token + 2 shared experts), hybrid local/global attention, natively multimodal encoders (hierarchical patch encoder for images, discrete token encoding for audio); BF16 and NVFP4; 276B total / 12B active (HF card; AA lists 266B total).

### Raw benchmarks found

Agent / tool use:

- Toolathlon Verified: **54.4%** (Thinking Machines model card, Hugging Face)
- MCP Atlas (public / all): **79.6/79.2%** (model card)
- Tau 3 Banking: **15.5%** (model card)
- BrowseComp (with context management): **77.4%** (model card)
- GDPval-AA: **1269** (model card, Elo-style score)
- AA-Briefcase: **917** (model card comparison table; best of its 10-model peer set)
- Claw-Eval / ClawProBench: no verified public score found
- Terminal-Bench 2.1 (best harness): **64.7%** (model card)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (model card, HF eval rank 14)
- HLE: **31.6%** text-only / **47.8%** with tools (model card)
- LCR / MLCR: no verified public score found
- CritPt: **8.3%** (model card)
- AIME 2026: **95.5%**; HMMT Feb 2026: **90.2%** (model card)
- ARC-AGI-1: **84.0%**; ARC-AGI-2: **40.1%** (model card)
- Artificial Analysis Intelligence Index / BenchLM overall: **26 / #26 of 118** (AA; class median 19 — "well above average among comparable models")
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience index **-9.0**; SimpleQA Verified **20.6%**; Global-MMLU-Lite **86.7%** (model card)

Coding:

- SWE-bench Verified: **80.2%** (model card, HF eval rank 8); SWE-bench Pro: **55.9%** (model card, rank 22)
- LiveCodeBench: no verified public score found
- SciCode: **48.7%** (model card)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1M window documented (AA; OpenRouter `:free` listing 1,048,576); no MRCR / RULER / GraphWalks retrieval numbers published. BrowseComp with context management **77.4%** is the closest long-context proxy (model card).

### Normalized scores (1–100)

- **Tool use: 66/100.** Strong MCP Atlas (79.6%) and AA-Briefcase (917, best of its peer set), but a weak Tau 3 Banking (15.5%) and mid-band Toolathlon (54.4%) cap it; no Claw-Eval row found.
- **Reasoning: 68/100.** GPQA 89.5% and AIME 2026 95.5% are excellent, but HLE 31.6% and AA Intelligence Index 26 (#26/118, median 19) sit well below the 2026 frontier references (HLE 40%+, Index 60+).
- **Context window: 95/100.** 1M verified by AA and the OpenRouter `:free` listing (≥1M tier = 95–100); held at 95 since no ≥512K retrieval proof (MRCR/RULER) is published.
- **Multimodal: 90/100.** Text + image + audio in, text out — top of the +audio-in band (90–100); MMMU Pro 74.0% is solid but no non-text output.
- **Coding: 80/100.** SWE-bench Verified 80.2% (rank 8 on the card) and Terminal-Bench 2.1 64.7% are strong open-weights results; SWE-Pro 55.9% and no LiveCodeBench row keep it under the 90+ frontier band.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M is far below the ~$1.25/$4.25 ≈ 88 methodology reference, with a 80% cache discount plus a $0 OpenRouter free tier.
- **Overall Score: 80/100.** Half-up mean of (66, 68, 95, 90, 80) = 79.8 → 80 — the open-weights value pick of the Inkling family: 1M context, native audio-in, strong SWE-bench Verified and GPQA at the lowest price tier in its class, with tool-use consistency (Tau 3) and HLE-style long-horizon depth as the main gaps.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** - 2026-10-04
- Method: public internet research (OpenRouter models API, Thinking Machines Hugging Face model card incl. `.eval_results` metadata, Artificial Analysis model page; models.dev and OpenCode Zen checked and found no listing); scores are normalized 1-100 interpretations, not official vendor scores. Note: this folder is unlisted in `model-queue.md` (no `average.md`) and was processed last.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
