# Gemini 3 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gemini-3-flash, Artificial Analysis (`artificialanalysis.ai/models/gemini-3-flash`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's Gemini 3 Flash non-reasoning model (released Dec 2025 per benchlm); natively multimodal Flash-tier model; 1M-token context; non-reasoning type per benchlm.
- **Provider / access:** Gemini API (`gemini-3-flash`), Google AI Studio, Vertex AI; OpenAI-compatible not used — Google Gemini API. Legacy Flash-tier model (superseded by 3.5/3.6/3.7/3.8 Flash).
- **Release / knowledge:** Released December 2025 (benchlm); knowledge cutoff not stated in fetched sources.
- **IDs:** `gemini-3-flash` (Gemini API / Vertex); preview variant `gemini-3-flash-preview`. No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Text + images in (multimodal per benchlm), text out; reasoning type listed as non-reasoning by benchlm; tool use not explicitly specified; JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found in fetched sources.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model per benchlm.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **49.2%** (leaderboard)
- τ²-bench results: **43.3%** (Artificial Analysis)
- Gert Labs: **56.63%** (rankings)
- JobBench: **11.4%** (paper)
- Terminal-Bench 2.1: **53.9%** (Vals AI)
- AA Agentic Index: not found for this variant

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **17.9%** (Artificial Analysis)
- GPQA Diamond: **81.2%** (Artificial Analysis); **87.9%** (Vals AI)
- MMLU-Pro: **88.6%** (Vals AI)
- HLE: **15.0%** (AA-HLE)
- AA-LCR (long-context reasoning): **55.3%** (Artificial Analysis)
- CritPt: **1.4%** (Artificial Analysis)
- AA-Omniscience Index **-4.3%**; Accuracy **45.8%**; Hallucination rate **92.4%** (AA)
- IFBench: **55.1%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **51.228%**; Tier 4: **17.073%** (Epoch AI)
- AA Global-MMLU-Lite: **92.7%** (Artificial Analysis)

Coding:

- Vibe Code Bench: **20.20%** (Vals AI)
- LiveCodeBench (Vals): **85.6%** (Vals AI)
- SWE-bench (Vals): **75.0%** (Vals AI)
- AA Coding Index: not found for this variant

Multimodal & grounded:

- AA-MMMU-Pro: **78.6%** (Artificial Analysis)
- Design Arena Website: **1198** (OpenRouter)
- Text+images in, text out per benchlm (multimodal); text-only output.

Long context:

- AA-LCR: **55.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 24 of 638 slots); scores rest heavily on Artificial Analysis and Vals AI.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** τ²-bench 43.3%, Claw-Eval 49.2%, Terminal-Bench 2.1 53.9%; capped by very weak JobBench (11.4%), no OSWorld/AutomationBench numbers found. Weak agentic tool-use profile.
- **Reasoning: 60/100.** GPQA 81.2–87.9%, MMLU-Pro 88.6%, AA-LCR 55.3%, FrontierMath T1-3 51.2%; capped by CritPt (1.4), HLE (15.0%), Intelligence Index (17.9%), AA-Omniscience accuracy (45.8%). Strong knowledge but very weak HLE/open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai); AA-LCR 55.3%; capped because no public full-depth retrieval score at 1M beyond LCR.
- **Multimodal: 70/100.** Text+images in, text out; AA-MMMU-Pro 78.6%; capped by text-only output and thin vision coverage.
- **Coding: 62/100.** LiveCodeBench Vals 85.6%, SWE-bench Vals 75.0%; capped by weak Vibe Code Bench (20.2), no SWE-bench Pro/LiveCodeBench Pro numbers found for this variant — scored conservatively.
- **Cost efficiency: 70/100.** Pricing not found; scored mid-range pending confirmation; not counted toward Overall.
- **Overall Score: 67/100.** Half-up mean of (55 + 60 + 88 + 70 + 62) / 5 = 67.0 → 67. Best-fit recommendation: legacy non-reasoning Flash model with strong knowledge (MMLU-Pro/GPQA) but weak HLE and agentic tool use; verify on your own tasks given thin coverage and non-reasoning type.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Artificial Analysis + Vals AI + Epoch AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
