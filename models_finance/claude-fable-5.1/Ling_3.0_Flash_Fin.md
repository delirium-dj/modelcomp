# Claude Fable 5.1 — findings by Ling 3.0 Flash

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class model above Opus 5 for the most demanding reasoning and long-horizon agentic work; Vals Index #1 and SWE-bench Verified 95%.
- **Provider / access:** Anthropic API (`claude-fable-5.1`), Amazon Bedrock. Messages API. No Zen Free ID; paid pricing.
- **Release / knowledge:** June 9, 2026 release (updated to 5.1 in September 2026). Knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-fable-5.1` (Anthropic API)
- **Context window:** 1,000,000 (1M) tokens, 128K max output
- **Modalities:** Text, image, PDF in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** Paid only — $10.00/1M input, $50.00/1M output (no Zen Free ID)
- **Architecture:** Proprietary, closed weights; Anthropic's Mythos-class flagship above Opus 5

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **84.3%** (BenchLM)
- Terminal-Bench 2.1 (Vals): **80.5%** / **80.52%** (BenchLM / Vals.ai)
- Terminal-Bench 3.0: **34.0%** (BenchLM)
- Terminal-Bench 4.0: **57.9%** (tbench.ai, Fable 5.1 max)
- OSWorld-Verified: **85%** (BenchLM)
- Vibe Code Bench: **90.35%** (Vals.ai, #1)
- VulcanBench v3: **89.5%** (BenchLM)
- CursorBench31: **70.6%**
- Agentic Index (BenchLM): 74.8
- Vals Index: 75.15% (#1 on Vals leaderboard)

Reasoning / knowledge:

- GPQA Diamond (Vals): **93.2%** / **94.1%** (LM Market Cap)
- MMLU-Pro (Vals): **91.5%**
- HLE: **59%** (LM Market Cap)
- Knowledge (BenchLM): 83.5
- LM Market Cap overall score: **97/100** (#3 ranked)
- Arena Elo: **1507**
- CritPt: 3.1%
- LongBench v2: 61.9%

Coding:

- SWE-bench Verified: **95%** / **96%** (vals.ai, #1)
- SWE-bench Pro: **80%** / **80.3%** (BenchLM)
- LiveCodeBench (Vals): **89.8%** / **89.78%**
- SWE-bench (Vals): **95.0%**
- FrontierCode 1.1 Main: **53.5%**
- Vibe Code Bench: **90.35%** (#1)
- IOI: **72.25%**
- Coding Index (BenchLM): 76.9
- CursorBench32: **70.5%**

Long context:

- 1M context window with 128K max output
- Vals Index: 75.15%
- LongBench v2: 61.9%

Multimodal:

- Text, image, PDF in; text out
- Vals Multimodal Index: 74.15%
- MMMU: **89.31%** (Vals.ai)
- Blueprint-Bench 2: **38.6%**
- OfficeQA Pro: **57.9%**
- Score: moderate multimodal with text, image, PDF input

### Normalized scores (1–100)

- **Tool use: 90/100.** Terminal-Bench 2.0 at 84.3% and TB2.1 at 80.5% are strong; OSWorld-Verified at 85%; Vibe Code Bench at 90.35% (#1); VulcanBench v3 at 89.5%. Top-tier agentic and coding capability, though TB3.0 at 34.0% shows harder general agent tasks remain challenging.
- **Reasoning: 93/100.** GPQA Diamond at 93.2% and MMLU-Pro at 91.5% demonstrate elite reasoning; HLE at 59% is strong; LM Market Cap overall of 97/100 (#3) and Arena Elo of 1507 confirm frontier-level reasoning.
- **Context window: 94/100.** 1M context window with 128K max output; Vals Index #1 confirms strong long-context capability; LongBench v2 at 61.9% is moderate.
- **Multimodal: 75/100.** Text, image, and PDF input supported; text output; Vals Multimodal Index at 74.15%; MMMU at 89.31%. Narrower modality coverage than Gemini models (no audio/video input).
- **Coding: 91/100.** SWE-bench Verified at 95-96% (#1); SWE-bench Pro at 80%; LiveCodeBench at 89.8%; Vibe Code Bench at 90.35% (#1); FrontierCode at 53.5%. Elite software engineering capability.
- **Cost efficiency: 35/100.** No Zen Free ID; paid-only pricing at $10/$50 per 1M among the most expensive frontier models.
- **Overall Score: 89/100.** Mean of the five non-cost dimensions (90 + 93 + 94 + 75 + 91) / 5 = 88.6, rounded half-up to 89. Anthropic's Mythos-class flagship with Vals Index #1 ranking, SWE-bench Verified 95%, GPQA Diamond 93.2%, and leading agentic coding at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Vals.ai, BenchLM, LM Market Cap, DataLearnerAI, AnotherWrapper, and tbench.ai; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5.1/Ling_3.0_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`).
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5.1/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash.md.excluded`, not `.md` (see SELF-EXCLUSION above).
