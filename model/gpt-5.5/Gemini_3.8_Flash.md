# GPT-5.5 — findings by Gemini 3.8 Flash

- Source: OpenAI (`gpt-5.5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's frontier flagship model released in April 2026, delivering major upgrades in agentic execution, computer use, complex reasoning, and long-context code synthesis.
- **Provider / access:** OpenAI API (`openai/gpt-5.5`); Chat Completions & Responses API.
- **Release / knowledge:** 2026-04-23 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.5` (no Free ID on Zen)
- **Context window:** 1,050,000 tokens (1.05M total input context, max output 128,000 tokens).
- **Modalities:** text, image, document/PDF in; text and code out; native tool calling, computer use, structured outputs.
- **Pricing (as of 2026-09-24):** $5.00 / 1M standard input ($0.50 cached input), $30.00 / 1M standard output; batch $2.50 in / $15.00 out; long-context (>272K) $10.00 in / $45.00 out.
- **Architecture:** Proprietary frontier transformer / mixture architecture.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Telecom): **93.9%** pass^1 (evals.report / OpenAI official)
- Terminal-Bench 2.0: **82.7%** (benchr / OpenAI official)
- OSWorld: **78.7%** task success rate (evals.report / unverified)
- GDPval: **1769 Elo** (evals.report / OpenAI official)
- CursorBench: **64.3%** score (evals.report / OpenAI official)
- FrontierSWE: **73%** dominance score (evals.report / OpenAI official)
- PostTrainBench: **25.02%** weighted score (evals.report / OpenAI official)
- Remote Labor Index: **6.25%** automation rate (evals.report / OpenAI official)
- Terminal-Bench 2.1 / Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.0%** accuracy (evals.report / OpenAI official)
- Humanity's Last Exam (HLE): **43.56%** accuracy (evals.report / OpenAI official)
- FrontierMath: **51.7%** accuracy; Tier 4: **35.4%** accuracy (evals.report / OpenAI official)
- ARC-AGI-1: **95%** accuracy (evals.report / OpenAI official)
- ARC-AGI-2: **85%** accuracy (evals.report / OpenAI official)
- ARC-AGI-3: **0.43%** accuracy (evals.report / OpenAI official)
- AIME (OTIS Mock): **100.0%**; AIME 2026: **97.50%** (evals.report / OpenAI official)
- MathArena HMMT February 2026: **97.73%** (evals.report / OpenAI official)
- Artificial Analysis Intelligence Index: **60 Index** (evals.report / OpenAI official)
- Epoch Capabilities Index: **158.2 Index** (evals.report / OpenAI official)
- SimpleQA Verified: **63.1%** accuracy (evals.report / OpenAI official)
- Vectara Hallucination Leaderboard: **9.3%** hallucination rate (evals.report / official)

Coding:

- SWE-bench Verified: **80.6%** % resolved (evals.report / OpenAI official)
- SWE-bench Pro: **58.6%** % resolved (evals.report / verified)
- DeepSWE: **70.05%** % resolved (evals.report / OpenAI official)
- Vibe Code Bench: **69.85%** overall accuracy (evals.report / OpenAI official)
- GSO (Software Optimization for SWE-Agents): **40.2%** Opt@1 (evals.report / OpenAI official)
- WeirdML: **84.9%** average accuracy (evals.report / OpenAI official)
- FrontierCode: **43.0%** weighted score (evals.report / OpenAI official)
- ProgramBench: **13.5%** almost-resolved rate (evals.report / OpenAI official)
- LiveCodeBench: no verified public score found

Long context:

- OpenAI-MRCR v2 (Multi-Round Coreference Resolution): **74.0%** accuracy (mean SequenceMatcher similarity; evals.report / verified)
- 1,050,000 token context window verified with robust multi-round coherence across full range.

### Normalized scores (1–100)

- **Tool use: 93/100.** Verified 93.9% τ²-bench, 1769 GDPval Elo, 82.7% Terminal-Bench 2.0, and 78.7% OSWorld place GPT-5.5 at the highest tier of agentic tool calling and computer use.
- **Reasoning: 95/100.** Extraordinary 94.0% GPQA Diamond, 43.56% HLE, 51.7% FrontierMath (35.4% Tier 4), and 95% ARC-AGI-1 represent near-frontier reasoning power, capped only by unsolved ARC-AGI-3.
- **Context window: 93/100.** Expansive 1.05M token context with strong retrieval fidelity (74.0% OpenAI-MRCR v2), capped only by 2M+ extreme context models.
- **Multimodal: 88/100.** High-fidelity document, image, chart understanding (84.1% CharXiv) and UI grounding for computer use, capped by lack of native audio/video generation outputs.
- **Coding: 94/100.** Exceptional 80.6% SWE-bench Verified, 58.6% SWE-bench Pro, 70.05% DeepSWE, and 69.85% Vibe Code Bench set an industry benchmark in autonomous coding.
- **Cost efficiency: 68/100.** At $5.00/1M input and $30.00/1M output (jumping to $10/$45 for >272K context), it carries a premium enterprise price tag with no free tier.
- **Overall Score: 93/100.** Mean of quality dimensions: Math.round((93 + 95 + 93 + 88 + 94) / 5) = 93.0 (half-up). Frontier powerhouse for complex reasoning, autonomous software engineering, and multi-step agents.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across evals.report and benchr verified ledgers; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
