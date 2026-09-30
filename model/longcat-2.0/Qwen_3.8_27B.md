# LongCat 2.0 — findings by Qwen 3.8 27B

- Source: Meituan (`meituan/longcat-2.0`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T/48B-active MoE (LongCat Sparse Attention + N-gram embedding) trained for coding and agentic work at 1M context; trained on AI ASIC superpods.
- **Provider / access:** Hugging Face `meituan-longcat/LongCat-2.0` (self-host), LongCat API (longcat.ai), SGLang/vLLM deployment; hosted on OpenCode Zen per meta.json (`meituan/longcat-2.0`).
- **Release / knowledge:** unveiled 2026-06-29 (tech blog longcat.chat/blog/longcat-2.0; model card benchmark charts dated 2026-06-29); knowledge cutoff not documented in retrieved sources.
- **IDs:** `meituan/longcat-2.0` (no Zen Free ID — paid LongCat API per meta.json).
- **Context window:** 1M total (vendor: trained on hundreds of billions of 1M-context tokens; BenchLM lists 1M).
- **Modalities:** text in/out; reasoning yes (think-mode chat template); tool calls yes (OpenAI-style function calling in chat template); image/video input not verified.
- **Pricing (as of 2026-09-29):** paid $0.30/$1.20 per 1M on the LongCat API, cached input $0.006 (meta.json; no public per-token page retrieved this session).
- **Architecture:** 1.6T total / ~48B active MoE + 135B N-gram embedding parameters, MIT license, open weights; 35T+ token pretraining on Meituan AI ASICs.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (vendor model card, in-house unified harness; Hugging Face meituan-longcat/LongCat-2.0)
- FORTE: **73.2** (vendor model card)
- BrowseComp: **79.9** (vendor model card)
- RWSearch: **78.8** (vendor model card)
- Tau / GDPval / Claw: no verified public score found (third-party coverage pending — BenchLM has 0 of 491 benchmarks tracked, "coming soon")

Reasoning / knowledge:

- GPQA Diamond: **88.9** (vendor model card, in-house)
- IFEval: **90.0** (vendor model card)
- IMO-AnswerBench: **81.8** (vendor model card)
- HLE / LCR / CritPt / AA Index: no verified public score found

Coding:

- SWE-bench Pro: **59.5** (vendor model card, in-house)
- SWE-bench Multilingual: **77.3** (vendor model card)
- Terminal-Bench 2.1: **70.8** (shared with agent row; Hugging Face eval results)
- LiveCodeBench / SciCode / DeepSWE / Coding Index: no verified public score found

Long context:

- 1M context window (vendor + BenchLM); no independent MRCR/RULER retrieval numbers found.

### Normalized scores (1–100)

- **Tool use: 70/100.** TB2.1 70.8 (in-house) sits above the mid-band 45–60% and below the ~88% frontier ref, supported by FORTE 73.2 / BrowseComp 79.9 — no third-party harness numbers yet.
- **Reasoning: 75/100.** GPQA-D 88.9 (in-house) is just under the 90% frontier ref with IFEval 90.0; no HLE/LCR/CritPt data, so it stays mid-high.
- **Context window: 95/100.** 1M window in the top tier (95–100); held at the band floor pending an independent retrieval measurement.
- **Multimodal: 15/100.** Text in/out only.
- **Coding: 75/100.** SWE-Pro 59.5 and SWE-Multilingual 77.3 (in-house) are solidly mid-to-strong; no LiveCode/SciCode/DeepSWE numbers to push it toward the frontier band.
- **Cost efficiency: 95/100.** Paid $0.30/$1.20 per 1M (cached $0.006) sits between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (92) anchors; no Zen Free ID.
- **Overall Score: 66/100.** Mean of the five quality dims (70+75+95+15+75)/5 = 66.0 — best fit: budget long-context coding/agentic work with open weights; re-verify once third-party harness coverage lands.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen-3.8-27b)** — 2026-09-29
- Method: public internet research (Hugging Face meituan-longcat/LongCat-2.0 model card, BenchLM longcat-2-0, retrieved 2026-09-29); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
