# Qwen 3.8 Flash Next — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Qwen/Qwen3.8-Flash-Next (Hugging Face), Alibaba Cloud QwenCloud API, accessed via Vercel AI Gateway
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba Qwen's open-weights multimodal MoE model (125B/180B total, 6B active per token) previewing Qwen4 architecture; strong on coding and office tasks; serves as QwenCloud production Qwen3.8-Flash at $0.16/$0.47 per 1M.
- **Provider / access:** Alibaba Cloud QwenCloud API (`qwen3.8-flash`, OpenAI-compatible); Vercel AI Gateway (`qwen3.8-flash-next`); Hugging Face checkpoint `Qwen/Qwen3.8-Flash-Next` (+ FP8 sibling `Qwen/Qwen3.8-Flash-Next-FP8`). No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released August 26, 2026 (Qwen team technical report); Alibaba Cloud blog post August 27, 2026.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (HF checkpoint, Qwen Community License 1.0), `qwen3.8-flash` (QwenCloud API), `qwen3.8-flash-next` (Vercel route).
- **Context window:** 262,144 tokens native (262K); extensible to 1,000,000 with YaRN (RoPE scaling). AA reports 256k context window.
- **Modalities:** Text, image, and video in; text out; reasoning model (extended thinking); tool calls supported via built-in tools (production version); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** QwenCloud $0.16 input / $0.47 output per 1M (Alibaba blog); AA median $0.15 input / $0.47 output per 1M; Vercel route $0.12/$0.40 per 1M (per meta.json, unverified as vendor rate). Blended ~$0.23/1M (Sophon). Qwen Community License 1.0 — commercial use allowed with restrictions.
- **Architecture:** MoE mixture-of-experts; GDN + QSA hybrid attention (Gated DeltaNet + Qwen Sparse Attention); Gated Residual with 4-branch residual stream; N-gram Embedding (~51B table); Muon optimizer. 125B main model + 51B N-gram embeddings per Alibaba blog; AA independently counts 180B total / 6B active per token — conflict on total parameter count.

### Raw benchmarks found

Agent / tool use:
- LiveCodeBench v6: **91.9% measured** (benchgap, Qwen3.8-Flash-Next, 2026-10-16) — matches meta.json's 91.9%
- SWE-bench Verified: **80.6% estimated ±2.3 pp** (benchgap, high confidence)
- SWE-bench Pro: **62.5% measured** (benchgap)
- SWE Multilingual: **81.0% measured** (benchgap)
- Toolathlon-Verified: **73.5% measured** (benchgap)
- IFEval: **93.2% estimated ±3.4 pp** (benchgap, medium confidence)
- AutomationBench: **44.5% estimated ±9.3 pp** (benchgap, low confidence)
- BrowseComp: **82.8% estimated ±2.2 pp** (benchgap, high confidence)
- DeepSearchQA: **90.4% estimated ±8.5 pp** (benchgap, medium confidence)

Reasoning / knowledge:
- GPQA Diamond: **91.7% measured** (benchgap); **92.3%** (Sophon / AA attribution); AA-GPQA Diamond **92.3% measured**
- HLE: **35.9% measured** (benchgap); **38.0%** (Sophon / AA-HLE)
- CritPt: **11.1% measured** (benchgap)
- ARC-AGI-1: **91.6% estimated ±2.7 pp** (benchgap, high confidence)
- AA Intelligence Index: **40** (Artificial Analysis, #8 / 120); **39.8% measured** (benchgap)

Coding:
- DeepSWE: **58.7% measured** (benchgap)
- SWE-bench Pro: **62.5% measured** (benchgap)
- LiveCodeBench Pro: **85.6% estimated ±6.0 pp** (benchgap, low confidence)
- JobBench: **55.7% measured** (benchgap)

Long context:
- AA-LCR: **79.7% measured** (benchgap)
- LongBench v2: **62.6% estimated ±5.8 pp** (benchgap, low confidence)
- Native 262K context; extensible to 1M with YaRN; no public retrieval score measured at full 1M window.

Multimodal:
- MMMU: **85.9% estimated ±2.1 pp** (benchgap, low confidence)
- MMMU-Pro: **81.5% estimated ±1.4 pp** (benchgap)
- MathVision: **90.6% measured** (benchgap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100** — Strong on LiveCodeBench v6 (91.9 measured), SWE-bench Verified (80.6 est), IFEval (93.2 est), Toolathlon-Verified (73.5 measured). Capped by weaker SWE-bench Pro (62.5 measured) and AutomationBench (44.5 est).
- **Reasoning: 80/100.** Strong on GPQA Diamond (91.7 measured / 92.3 AA), ARC-AGI-1 (91.6 est), HLE (35.9 measured). Capped by weak CritPt (11.1 measured) and AA-Omniscience accuracy (24.5 measured).
- **Context window: 88/100.** Native 262K context verified by HF card + Alibaba blog + AA; extensible to 1M with YaRN but no public retrieval score at full 1M. Below 1M native models.
- **Multimodal: 88/100.** Text/image/video in, text out; strong on MMMU (85.9 est), MathVision (90.6 measured), CharXiv (90.6 measured), V* (99.5 est). Capped by weaker ScreenSpot Pro (85.5 est).
- **Coding: 80/100.** Strong on LiveCodeBench v6 (91.9 measured), SWE-bench Verified (80.6 est), SWE Multilingual (81.0 measured). Capped by SWE-bench Pro (62.5 measured) and DeepSWE (58.7 measured).
- **Cost efficiency: 90/100.** QwenCloud $0.16/$0.47 per 1M; AA median $0.15/$0.47; Vercel route $0.12/$0.40 (unverified). Competitive but not free. Not counted toward Overall.
- **Overall Score: 84/100.** Half-up mean of (82 + 80 + 88 + 88 + 80) / 5 = 83.6 → 84. Best-fit recommendation: a cost-efficient open-weights reasoning model for coding and visual tasks; verify terminal-agent and HLE-class performance before production use.

### Conflicts vs existing meta.json / queued average

- meta.json claims 125B total / 6B active; Artificial Analysis independently counts 180B total / 6B active. Total parameter count is unresolved — Alibaba blog states "125B-parameter main model, supplemented by an additional 51B N-gram embeddings" (125B + 51B = 176B, close to AA's 180B).
- meta.json claims Terminal-Bench 2.1 86.1%; this figure does not appear in benchgap, Artificial Analysis, or Sophon data — unverified independently.
- meta.json claims LiveCodeBench 91.9%; matches benchgap's 91.9% measured.
- meta.json pricing $0.12/$0.40 per 1M (Vercel) vs AA $0.15/$0.47 per 1M (Alibaba API) vs Alibaba blog $0.16/$0.47 (QwenCloud) — provider-dependent pricing, not necessarily conflicting.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official HF model card + Alibaba Cloud blog + Artificial Analysis + benchgap aggregator + Sophon evals); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- CharXiv: **90.6% measured** (benchgap)
- Video-MME (w/o subtitle): **86.2% estimated ±3.0 pp** (benchgap)
- V*: **99.5% estimated ±6.9 pp** (benchgap, low confidence)
- ScreenSpot Pro: **85.5% estimated ±4.0 pp** (benchgap)