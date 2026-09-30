# Gemini 3 Pro — findings by Kimi K3

- Source: Google / Gemini 3 Pro (`gemini-3-pro`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google's Gemini 3 Pro flagship with a 2M context window and broad vision/video strength (VideoMMMU 87.6%); non-reasoning base config measured here (Deep Think sibling handles max-effort reasoning).
- **Provider / access:** Google Gemini API (`gemini-3-pro`), Vertex AI, AI Studio.
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `google/gemini-3-pro` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 2M tokens (benchlm.ai) — the largest among Gemini 3 models tracked; output not verified.
- **Modalities:** text/image/video in (VideoMMMU measured); text out; reasoning: base non-reasoning (benchlm.ai), Deep Think variant separate; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Pro-tier pricing — provisional.
- **Architecture:** proprietary (Google DeepMind).

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **87.1%** (benchlm.ai)
- Gert Labs: **63.2%**; JobBench: **11.4%** (benchlm.ai)
- Terminal-Bench / GDPval / Claw: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (AA): **90.8%** (benchlm.ai)
- HLE (AA-HLE): **39.7%** (benchlm.ai)
- AA-LCR: **76.0%**; CritPt: **9.1%** (benchlm.ai)
- ARC-AGI-2: **31.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **28.0**; BenchLM overall **61.01/100, #40 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **55.8% / 91.5%** — accurate when answered, but hallucination-prone (benchlm.ai)
- AA MMLU-Pro: **89.8%**; Global-MMLU-Lite: **92.2%**; FrontierMath v2: **37.6%** T1–3 / **18.8%** T4; AA-IFBench: **70.4%** (benchlm.ai)

Coding:

- AA LiveCodeBench: **91.7%** — elite (benchlm.ai)
- Vibe Code Bench: **14.3%** (benchlm.ai)
- SWE-bench / SciCode: no verified public score found

Long context:

- 2M window (largest tracked); AA-LCR 76.0% (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- VideoMMMU: **87.6%**; V*: **88.0%**; MMMU-Pro: **81.0%** (AA 80.2%); MathVision: **86.6%**; CharXiv: **81.4%**; ScreenSpot Pro: **72.7%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 74/100.** τ²-bench 87.1% strong; capped by JobBench 11.4% and missing TB/GDPval rows.
- **Reasoning: 74/100.** GPQA 90.8%, MMLU-Pro 89.8%; capped by ARC-AGI-2 31.1%, CritPt 9.1%, hallucination 91.5% (base config — Deep Think not measured here).
- **Context window: 92/100.** 2M window is the largest found; LCR 76.0%; capped by no max-window retrieval probe.
- **Multimodal: 90/100.** Excellent breadth: VideoMMMU 87.6%, MathVision 86.6%, V* 88%; text-only output caps it.
- **Coding: 70/100.** AA LiveCodeBench 91.7% elite; capped hard by Vibe Code 14.3% and zero SWE-bench rows.
- **Cost efficiency: 60/100.** Pro-tier flagship pricing expected; unverified.
- **Overall Score: 80/100.** Mean of the five quality dims (74+74+92+90+70)/5 = 80.0 → 80. Best fit: 2M-context multimodal analysis (video/doc corpora); for hard reasoning prefer Deep Think or 3.1 Pro.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
