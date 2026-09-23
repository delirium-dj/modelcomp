# Gemini 3.8 Flash — findings by Ling 3.0

> Provided by: **Ling 3.0 (google/gemini-3.8-flash)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash model, engineered for long-horizon software engineering, autonomous agents, and complex enterprise workflows with reasoning-level control.
- **Provider / access:** Google AI Studio, Gemini API, Gemini Enterprise Agent Platform, Google Antigravity
- **Release / knowledge:** Released September 2, 2026; knowledge cutoff March 2026 (some domains January 2025)
- **IDs:** google/gemini-3.8-flash
- **Context window:** 1,048,576 tokens (1M), 65,536 max output
- **Modalities:** Text, image, video, audio, PDF input; text output
- **Pricing (as of 2026-09-23):** Introductory $0.75/1M input, $3.75/1M output (through Dec 31, 2026); $1.50/$7.50 from Jan 1, 2027. Batch/flex: $0.375/$1.875.
- **Architecture:** Transformer-based, built on Gemini 3.7 Flash; tunable thinking levels (low, medium, high; default medium); function calling, code execution, search grounding, file search, computer use (preview).

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **89.4%** (llm-stats.com leaderboard, #1 across 35 models)
- DeepSWE v1.1: **73.7%** (Google DeepMind model card / CometAPI)
- Terminal-Bench 4.0: **19.1%** (Google DeepMind comparison; Claude Opus 5 leads at 51.8%)
- OSWorld-2.0: **59.0%** (Google DeepMind comparison; Claude Opus 5 leads at 75.4%)

Reasoning / knowledge:
- HLE-Verified: **54.9%** (Google DeepMind model page)
- Intelligence Index: **47.1** #12 (cloudprice.net)
- GPQA Diamond: no verified public score found
- LiveCodeBench: no verified public score found

Coding:
- SWE-Bench Pro: **61.6%** (DataCamp)
- SWE-Atlas: **51.9%** (DataCamp)
- DeepSWE v1.1: **73.7%** (Google DeepMind / CometAPI)
- Terminal-Bench 2.1: **89.4%** (llm-stats.com leaderboard)

Long context:
- 1M token context window with 64K output; prompt caching supported ($0.075/1M cached read)

### Normalized scores (1-100)

- **Tool use: 95.5/100.** Leads Terminal-Bench 2.1 at 89.4% across all models; DeepSWE v1.1 at 73.7% approaches Claude Opus 5 (74.0%). Strong persistent multi-tool execution, though OSWorld-2.0 (59.0%) and TB4.0 (19.1%) trail Opus 5.
- **Reasoning: 82.5/100.** HLE-Verified at 54.9% demonstrates strong multi-step reasoning across STEM and professional fields; Intelligence Index 47.1 (#12) confirms solid overall capability. GPQA Diamond score not publicly verified.
- **Context window: 97.0/100.** 1M-token context window with caching support; standard across the Gemini 3.8 family but highly competitive.
- **Multimodal: 90.5/100.** Supports text, image, video, audio, and PDF input with text output; computer use in preview. Does not generate images/audio natively.
- **Coding: 94.0/100.** DeepSWE v1.1 at 73.7% near frontier models; #1 on Terminal-Bench 2.1; SWE-Bench Pro at 61.6%; strong long-horizon coding agent performance.

- **Cost efficiency: 50/100.** Standard pricing varies by provider.
- - **Overall Score: 92/100.** Mean of five non-cost dimensions: (95.5+82.5+97.0+90.5+94.0)/5 = 92.

---

## Signature

- Provided by: **Ling 3.0 (google/gemini-3.8-flash)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (delete before finishing)

1. All placeholders replaced; no values copied from other model/ files.
2. Filename is model/gemini-3.8-flash/Ling_3.0.md.
3. Signature block filled in; relative links resolve from model/gemini-3.8-flash/.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks → save as Ling_3.0.md.excluded.
