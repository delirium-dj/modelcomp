# Qwen 3.5 0.8B — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`Qwen/Qwen3.5-0.8B`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-0.8B (post-trained; a Qwen3.5-0.8B-Base also exists)
- **Short description:** Alibaba's smallest Qwen3.5 open model: a 0.87B dense hybrid (gated DeltaNet linear attention + gated attention) multimodal (text/image/video in) edge model with a 262K native context — intended for on-device assistants and prototyping. Honest sub-1B limits: GPQA-D 23.6, AA Coding 1.0; strong points are document OCR and GUI grounding at near-zero cost.
- **Provider / access:** Open weights on Hugging Face (`Qwen/Qwen3.5-0.8B`, Apache 2.0; 2.0M HF downloads, six quantizations); free hosted routes on gateways ($0.00/$0.00); OpenCode Zen `opencode/qwen-3.5-0.8b`.
- **Release / knowledge:** Released 2026-03-01/02 (HF repo dated 2026-03-09). Knowledge cutoff not stated on the card.
- **IDs:** `Qwen/Qwen3.5-0.8B` (HF); `opencode/qwen-3.5-0.8b` (Zen).
- **Context window:** 262,144 tokens native (model card + architecture audit); 256K per some catalogues (FitMyLLM); max output 65,536 per the audit (Zen meta repeats the "81,920 max output" provider row — unconfirmed on the HF card). **Meta caveat:** the curated "thinking-mode loops at this size" note matches community complaints about sub-1B thinking-mode degeneration; not verified by a vendor statement but consistent with the card's own weak reasoning rows.
- **Modalities:** Text, image, video in; text out (image-text-to-text). Thinking/non-thinking dual mode; MTP + strong-to-weak distillation training; ~200 languages.
- **Pricing (as of 2026-11-01):** Free Apache 2.0 open weights; free hosted routes at $0.00/$0.00.
- **Architecture:** 0.87B dense; 24 layers, hidden 1,024; hybrid attention pattern 6×(3×(Gated DeltaNet→FFN)→1×(Gated Attention→FFN)), DeltaNet heads 16/16 (head dim 128), attention heads 8 Q / 2 KV (head dim 256, RoPE 64); vocab 248,320.

### Raw benchmarks found

(vendor HF model card unless labelled; language scores Thinking mode)

Agent / tool use:

- BFCL-V4: **25.3%** (2B sibling: 43.6)
- TAU2-Bench: **11.6%** (2B: 48.8)
- Tau3-Banking (AA-measured, independently verified): **1.2% pass@1** (4th percentile: 175/183)
- GDPval-AA (AA Elo): **−80** (352/358, 2nd percentile)

Reasoning / knowledge:

- GPQA Diamond: card GPQA **11.9%**; AA-measured GPQA-D **23.6%** (468/478, 2nd percentile)
- MMLU-Pro: **42.3%** thinking (non-thinking 29.7); MMLU-Redux 59.5; C-Eval 50.5; SuperGPQA 21.3; MMMLU 44.3
- HLE (AA-measured): **4.9**; AA Intelligence Index: **9.9** (FitMyLLM row; opper.ai-style AA measured); PolyMATH 8.2
- Instruction: IFEval 44.0 (thinking) / 52.1 (NT); IFBench 21.0; MultiChallenge 18.9; BBH (aggregator) 16.3; MATH (aggregator) 10.2

Long context:

- AA-LCR: **4.7%**; LongBench v2: **26.1%** — a 262K window with near-floor retrieval at this size

Coding:

- LiveCodeBench: no card row for this SKU; AA Coding Index **1.0**; BigCodeBench **8.8**; SciCode **2.9** (all aggregator/AA-measured)

Multimodal (card + trackers):

- MMMU: **49.0** (aggregator; 2B sibling 64.2); MMBench: **69.9** (aggregator)
- ScreenSpot-Pro: **46.5** (2026-05-06, model card source; 24th percentile)
- LVBench: **45.1**; VideoMMMU: **44.3** (model card)
- Document AI / IDP Leaderboard overall **57.78** (OlmOCR 64.8, OmniDocBench 47.3)
- StemBind 30.2, SceneFunRI 3.63, SVFSearch 34.1, PolicyShiftBench 1.8, WMT24++ 27.2 (0th percentile)

### Normalized scores (1–100)

- **Tool use: 22/100.** BFCL 25.3 and TAU2 11.6 with a 1.2% Tau3-Banking pass@1 and bottom-2-percentile GDPval Elo — the tool axis is effectively nonfunctional at this scale.
- **Reasoning: 30/100.** GPQA-D 23.6 / HLE 4.9 / AA Intelligence 9.9 put it at the bottom of every reasoning board; MMLU-Pro 42.3 (thinking) is the one respectable row.
- **Context window: 45/100.** Verified 262K native window (rare at 0.8B) but measured retrieval is near-floor — AA-LCR 4.7 and LongBench v2 26.1 mean the window is mostly unusable at depth.
- **Multimodal: 58/100.** Full image+video input with genuinely useful niche rows: ScreenSpot-Pro 46.5 GUI grounding, IDP document score 57.8, MMMU 49.0 — the axis where this model earns its keep.
- **Coding: 15/100.** AA Coding 1.0, BigCodeBench 8.8, SciCode 2.9 — no vendor coding row either; effectively the floor.
- **Cost efficiency: 97/100.** Free Apache 2.0 weights and literal $0 hosted routes; runs on absurdly modest hardware — the entire point of the SKU.
- **Overall Score: 34/100.** Mean of the five quality dims (22+30+45+58+15)/5 = 34.0 → 34. Best fit: free edge assistants, document/OCR pipelines and GUI-grounding experiments where 1 GB of memory and $0 matter more than capability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-01
- Method: Public internet research (official Qwen HF model card language table, AA-measured board rows with verification dates, community architecture audit, aggregator tables with provenance labelled); scores are normalized 1–100 interpretations, not official vendor scores. Card-vs-AA discrepancies (GPQA 11.9 vs 23.6) are both labelled with their measured SKU — no merging.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-0.8B model card (language table, Apache 2.0)](https://huggingface.co/Qwen/Qwen3.5-0.8B)
  - [BenchmarkList — Qwen3.5-0.8B AA-measured evals (GPQA-D 23.6, Tau3-Banking 1.2, GDPval −80 Elo, ScreenSpot-Pro 46.5)](https://benchmarklist.com/models/qwen-qwen3.5-0.8b/)
  - [AwesomeAgents — Qwen3.5-0.8B architecture audit (0.87B dense, Gated DeltaNet hybrid, 262K native)](https://awesomeagents.ai/models/qwen-3-5-0-8b/)
  - [FitMyLLM — Qwen3.5-0.8B specs & benchmark summary (aggregator rows, provenance labelled)](https://www.fitmyllm.com/model/qwen3.5-0.8b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
