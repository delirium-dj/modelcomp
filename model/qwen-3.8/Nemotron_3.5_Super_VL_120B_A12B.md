# Qwen 3.8 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen/Qwen3.8-27B (Hugging Face), Alibaba Cloud Qwen API
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8-27B dense VLM; flagship Qwen3.8-2.4T-A95B MoE also in series)
- **Short description:** Alibaba Qwen's Qwen3.8 generation — Qwen3.8-27B is a 27B dense native vision-language model with Gated DeltaNet/Gated Attention hybrid architecture; flagship Qwen3.8-2.4T-A95B is a 2.4T/95B MoE ranked 3rd on Arena AI CodeArena and AA Agentic Index. Apache 2.0 open weights.
- **Provider / access:** Qwen Cloud API (`qwen3.8-27b`, OpenAI-compatible, hosted version coming soon per HF card); Hugging Face checkpoint `Qwen/Qwen3.8-27B`; self-hosted via vLLM/SGLang/TokenSpeed. API via OpenCode Zen route `opencode/qwen-3.8`.
- **Release / knowledge:** Qwen3.8-27B repo created August 5, 2026; Qwen3.8 flagship released August 8, 2026; Qwen3.8-27B announced August 17, 2026 (Alibaba Cloud blog).
- **IDs:** `Qwen/Qwen3.8-27B` (HF checkpoint, Apache 2.0), `qwen3.8-27b` (Qwen Cloud API), `opencode/qwen-3.8` (OpenCode Zen route). Flagship: `Qwen/Qwen3.8-2.4T-A95B`.
- **Context window:** 262,144 tokens native (262K); extensible to 1,000,000 with YaRN (RoPE scaling). AA reports 256k context window.
- **Modalities:** Text, image, and video in; text out (native VLM); flexible thinking control (thinking on by default, tunable via `reasoning_effort`); tool calls supported via built-in tools (production version); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** AA median $0.50 input / $3.00 output per 1M tokens; meta.json cites ~$0.42/$3.00 per 1M. Blended ~$0.47/1M (7:2:1 cache ratio). Apache 2.0 license — self-host $0.
- **Architecture:** 27B dense (non-MoE) native VLM; 64 layers; hybrid layout 16×(3×(Gated DeltaNet → FFN) → 1×(Gated Attention → FFN)); Gated DeltaNet: 48 V / 16 QK linear attention heads, 128 dim; Gated Attention: 24 Q / 4 KV heads, 256 dim; RoPE with mrope. Flagship Qwen3.8-2.4T-A95B: 2.4T total / 95B active MoE.

### Raw benchmarks found

Agent / tool use:
- LiveCodeBench v6: **90.3% measured** (benchgap, Qwen3.8-27B, 2026-10-16) — matches meta.json's 90.3%
- SWE-bench Verified: **79.4% estimated ±2.3 pp** (benchgap, high confidence)
- SWE-bench Pro: **61.7% measured** (benchgap; HF eval results) — matches meta.json's 61.7%
- Terminal-Bench 2.1: **73.0% measured** (benchgap)
- Toolathlon-Verified: **73.0% estimated ±2.1 pp** (benchgap, low confidence)
- BrowseComp: **89.0% estimated ±1.2 pp** (benchgap, medium confidence)
- AutomationBench: **29.5% estimated ±9.3 pp** (benchgap, low confidence)
- DeepSearchQA: **92.9% estimated ±4.5 pp** (benchgap, high confidence)

Reasoning / knowledge:
- GPQA Diamond: **89.2% measured** (benchgap); AA-GPQA Diamond **90.5% measured**
- HLE: **30.8% measured** (benchgap); AA-HLE **33.9% measured**
- CritPt: **5.4% measured** (benchgap)
- ARC-AGI-1: **87.9% estimated ±2.7 pp** (benchgap, high confidence)
- AA Intelligence Index: **34** (Artificial Analysis, #1 / 141); **33.7% measured** (benchgap)

Coding:
- DeepSWE: **42.2% measured** (benchgap)
- SWE-bench Pro: **61.7% measured** (benchgap)
- LiveCodeBench Pro: **85.0% estimated ±6.0 pp** (benchgap, low confidence)
- JobBench: **33.4% measured** (benchgap)

Long context:
- AA-LCR: **82.0% measured** (benchgap)
- LongBench v2: **63.0% estimated ±5.8 pp** (benchgap, low confidence)
- Native 262K context; extensible to 1M with YaRN; no public retrieval score measured at full 1M window.

Multimodal:
- MMMU: **85.8% estimated ±2.1 pp** (benchgap, low confidence)
- MMMU-Pro: **80.3% estimated ±1.4 pp** (benchgap, medium confidence)
- MathVision: **90.0% measured** (benchgap)
- CharXiv: **90.2% measured** (benchgap)
- Video-MME (w/o subtitle): **86.1% estimated ±3.0 pp** (benchgap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 83/100.** Strong on LiveCodeBench v6 (90.3 measured), SWE-bench Verified (79.4 est), Toolathlon-Verified (73.0 est), Terminal-Bench 2.1 (73.0 measured). Capped by weaker AutomationBench (29.5 est) and DeepSWE (42.2 measured).
- **Reasoning: 84/100.** Strong on GPQA Diamond (89.2 measured / 90.5 AA), ARC-AGI-1 (87.9 est), HLE (30.8 measured). Capped by weak CritPt (5.4 measured) and AA-Omniscience accuracy (15.6 measured).
- **Context window: 90/100.** Native 262K context verified by HF card + Alibaba blog + AA; extensible to 1M with YaRN but no public retrieval score at full 1M.
- **Multimodal: 86/100.** Text/image/video in, text out; strong on MMMU (85.8 est), MathVision (90.0 measured), CharXiv (90.2 measured), V* (98.5 est). Capped by weaker ScreenSpot Pro (76.6 est).
- **Coding: 84/100.** Strong on LiveCodeBench v6 (90.3 measured), SWE-bench Pro (61.7 measured), SWE-bench Verified (79.4 est). Capped by DeepSWE (42.2 measured) and LiveCodeBench Pro (85.0 est).
- **Cost efficiency: 70/100.** Qwen Cloud $0.50/$3.00 per 1M per AA; self-host $0 via Apache 2.0 weights. Not counted toward Overall.
- **Overall Score: 85/100.** Half-up mean of (83 + 84 + 90 + 86 + 84) / 5 = 85.4 → 85. Best-fit recommendation: a strong open-weights dense VLM for coding and visual agent tasks at moderate cost; verify on HLE-class and agentic coding before production use.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench Pro 61.7% — matches benchgap measured 61.7% and HF eval results ✓
- meta.json claims LiveCodeBench 90.3% — matches benchgap measured 90.3% ✓
- meta.json pricing ~$0.42/$3.00 per 1M vs AA $0.50/$3.00 per 1M — slight input price discrepancy, provider-dependent
- meta.json describes Qwen3.8 as "27B dense open-weights model" — confirmed by HF card and Alibaba blog ✓
- meta.json contextWindow "262K native (1M via YaRN; 33K output)" — context matches; max output not independently verified

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official Alibaba blog + HF model card + Artificial Analysis + benchgap aggregator + systemcards.org); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- V*: **98.5% estimated ±6.9 pp** (benchgap, low confidence)
- ScreenSpot Pro: **76.6% estimated ±4.0 pp** (benchgap, medium confidence)