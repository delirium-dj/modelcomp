# Gemini 3.8 Flash — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemini 3.8 Flash
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google DeepMind's frontier "workhorse" model optimized for software engineering, agentic workflows, and complex multi-step reasoning. Top-tier performance at competitive pricing.
- **Provider / access:** Google AI Studio, Vertex AI, Gemini API. Chat Completions API.
- **Release / knowledge:** 2026-09-02 release; knowledge cutoff March 2026.
- **IDs:** `google/gemini-3.8-flash` (no Free ID on Zen)
- **Context window:** 1,048,576 tokens (1M); max output 65,536 tokens. Verified via Google developer docs.
- **Modalities:** Text, image, audio, video in; text out; configurable thinking levels (low/medium/high); tool calls; JSON mode.
- **Pricing (as of 2026-09-19):** $0.75 / $3.75 per 1M tokens (introductory through Dec 31, 2026); rising to $1.50 / $7.50 on Jan 1, 2027. Batch at 50% discount.
- **Architecture:** Proprietary multimodal transformer; specifics undisclosed by Google.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (**tool/agent**): **90.8%** (source: Google blog, DataCamp; up from 81.6% in 3.7 Flash)
- OSWorld 2.0: **59.0%** (source: stob.ai model card)
- Tau3-Banking: no verified public score found; model is evaluated in agentic harnesses but specific Tau3 number not published
- GDPval-AA: no verified public score found for 3.8 Flash specifically
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~95.3%** (source: llmmetric.com, community evaluations)
- HLE-Verified: **54.9%** (source: Google blog, DataCamp)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found for 3.8 specifically

Coding:

- DeepSWE v1.1: **~73.7%** (source: Vellum.ai comparative analysis with 3.7 Flash reference)
- SWE-bench Verified: no verified public standalone score found; evaluated via agentic harnesses
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- LVBench: **87.8%** (source: stob.ai)
- CharXiv Reasoning: **86.2%** (source: stob.ai)
- 1M context window with configurable thinking levels; no MRCR/RULER retrieval score published

### Normalized scores (1–100)

- **Tool use: 93/100.** TB 2.1 at 90.8% is near-frontier (reference: 88%+ = 90–100 range); OSWorld 59% is strong. Slight cap from missing Tau3/GDPval/Claw-Eval verification.
- **Reasoning: 95/100.** GPQA Diamond ~95.3% is frontier-leading; HLE 54.9% is exceptional (reference: 40%+ = 90–100). Among the highest reasoning scores available.
- **Context window: 97/100.** 1M tokens verified; LVBench 87.8% and CharXiv 86.2% indicate excellent retrieval. Max output 65K is a minor caveat vs 128K competitors. Capped below 100 for output limit.
- **Multimodal: 90/100.** Full text + image + audio + video input; text output only. Broad coverage across modalities. No non-text output capability caps it below 95.
- **Coding: 90/100.** DeepSWE ~73.7% is strong (reference: 74%+ frontier); TB 2.1 90.8% includes coding tasks. Missing SWE-bench standalone and SciCode data prevents full 95+.
- **Cost efficiency: 90/100.** $0.75/$3.75 introductory pricing is competitive for a frontier model. Not free, but well below GPT-6 Astra ($10/$50) and Claude Fable ($10/$50). Batch pricing further reduces cost.
- **Overall Score: 93/100.** Mean of (93 + 95 + 97 + 90 + 90) / 5 = 93.0. Frontier-class workhorse with exceptional reasoning and tool use at competitive pricing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (Google blog, DataCamp, stob.ai, vellum.ai, llmmetric.com, Google developer docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
