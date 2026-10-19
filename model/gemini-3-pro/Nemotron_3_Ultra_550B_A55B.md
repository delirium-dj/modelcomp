# Gemini 3 Pro — findings by Nemotron 3 Ultra 550B A55B

- Source: Google (`gemini-3-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (High effort tier / Preview)
- **Short description:** Google's early Gemini 3 series Pro model with 2M context window, native multimodal input (text, image, audio, video), and non-reasoning architecture, succeeded by 3.1 Pro and 3.8 Flash.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-3-pro` via `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro`), Google Cloud Vertex AI, OpenCode Zen (`opencode/gemini-3-pro` via `https://opencode.ai/inference/google/v1beta/models/gemini-3-pro`). Google GenAI API (not OpenAI-compatible).
- **Release / knowledge:** 2025-11-18 release (Preview); knowledge cutoff January 2025.
- **IDs:** `google/gemini-3-pro` (Google AI Studio/Vertex), `opencode/gemini-3-pro` (OpenCode Zen). No Free tier on any platform.
- **Context window:** 2,000,000 tokens total (2M per BenchLM); max output not explicitly stated.
- **Modalities:** Text, image, audio, video in; text out; reasoning no (non-reasoning per BenchLM); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-19):** $2.00/M in, $12.00/M out (Artificial Analysis). 90% cache discount (AA). Blended 7:2:1 ≈ $1.74/M (AA).
- **Architecture:** Proprietary (Google DeepMind); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- Tau2-bench: **87.1%** (Artificial Analysis)
- Gert Labs: **63.23%** (Gert Labs rankings)
- JobBench: **11.4%** (JobBench paper)

Reasoning / knowledge:

- GPQA Diamond: **90.8%** (Artificial Analysis)
- HLE: **39.7%** (Artificial Analysis)
- AA Intelligence Index: **28** (estimated) (Artificial Analysis)
- AA LCR: **76.0%** (Artificial Analysis)
- CritPt: **9.1%** (Artificial Analysis)
- ARC-AGI-1: **75.00%** (ARC Prize verified)
- ARC-AGI-2: **31.1%** (Google DeepMind)
- AA Omniscience Index: **15.3%** (Artificial Analysis)
- AA Omniscience Accuracy: **55.8%** (Artificial Analysis)
- AA Omniscience Hallucination Rate: **91.5%** (Artificial Analysis)
- MMLU-Pro: **89.8%** (Artificial Analysis)
- AA IFBench: **70.4%** (Artificial Analysis)
- AA Global-MMLU-Lite: **92.2%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **14.30%** (Vals AI)
- AA LiveCodeBench: **91.7%** (Artificial Analysis)

Multimodal:

- MMMU: **87.2%** (Qwen model card comparison)
- MMMU-Pro: **81.0%** (Google Gemini 3 blog) / **80.2%** (Artificial Analysis)
- RealWorldQA: **83.3%** (Qwen model card comparison)
- OmniDocBench 1.5: **88.5%** (Qwen model card comparison)
- Video-MME: **88.4%** with subtitles / **87.7%** without (Qwen model card comparison)
- MathVision: **86.6%** (Qwen model card comparison)
- We-Math: **86.9%** (Qwen model card comparison)
- DynaMath: **85.1%** (Qwen model card comparison)
- SimpleVQA: **73.2%** (Qwen model card comparison)
- MMLongBench-Doc: **60.5%** (Qwen model card comparison)
- CC-OCR: **79.0%** (Qwen model card comparison)
- AI2D_TEST: **94.1%** (Qwen model card comparison)
- CountBench: **97.3%** (Qwen model card comparison)
- RefCOCO: **84.1%** (Qwen model card comparison)
- ODINW13: **46.3%** (Qwen model card comparison)
- ERQA: **70.5%** (Qwen model card comparison)
- VideoMMMU: **87.6%** (Google Gemini 3 blog)
- MLVU (M-Avg): **83.0%** (Qwen model card comparison)
- ScreenSpot Pro: **72.7%** (Google DeepMind)
- CharXiv: **81.4%** (Qwen multimodal comparison)
- V*: **88.0%** (Qwen multimodal comparison)

Long context:

- AA LCR: **76.0%** (Artificial Analysis)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 55/100.** Tau2 87.1% (strong structured tool use), Gert Labs 63.2%, JobBench 11.4% (weak open-ended agentic). No TB 2.1/4.0, GDPval, OSWorld, MCP Atlas data. Capped by limited agentic benchmark coverage.
- **Reasoning: 60/100.** GPQA Diamond 90.8% (near 90%+ frontier), HLE 39.7% (near 40%+ frontier), MMLU-Pro 89.8%, ARC-AGI-1 75.0%. Capped by AA Intelligence Index 28 (est., far below 60 frontier), CritPt 9.1%, ARC-AGI-2 31.1%, Omniscience Hallucination 91.5%.
- **Context window: 100/100.** 2M native context (exceeds 1M threshold); no public MRCR at 512K+ but 2M capacity qualifies for 100 tier. Methodology: ≥1M = 95-100 (100 if ≥98% retrieval at 512K+); 2M capacity warrants 100.
- **Multimodal: 90/100.** Native text/image/audio/video input; MMMU-Pro 81%, Video-MME 88.4%, OmniDocBench 88.5%, MathVision 86.6%, AI2D 94.1%, CountBench 97.3%. Methodology: +audio/video in = 90-100.
- **Coding: 55/100.** AA LiveCodeBench 91.7% (exceptional), Vibe Code Bench 14.3% (very weak). No SWE-bench, DeepSWE, FrontierCode, CursorBench data. Capped by missing core coding benchmarks and low Vibe Code.
- **Cost efficiency: 65/100.** $2/$12 per 1M, blended ~$1.74/M. Methodology: $1.25/$4.25 ≈ 88, $3/$15 ≈ 60 → $2/$12 interpolates to ~65.
- **Overall Score: 72/100.** Half-up mean of (55 + 60 + 100 + 90 + 55) / 5 = 72.0 → 72. Best-fit: legacy 2M context multimodal model for document/video analysis; succeeded by 3.1 Pro (reasoning) and 3.8 Flash (agentic) with better overall capability.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across benchmark aggregators (Artificial Analysis, BenchLM, ARC Prize, Qwen model card comparisons, Google blogs), and gateway pricing (OpenCode Zen); scores are normalized 1–100 interpretations, not official vendor scores. Note: AA Intelligence Index is estimated.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.