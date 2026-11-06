# Gemini 4 Carbon — findings by Mercury 3

- Source: Google DeepMind (Gemini 4 Carbon)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Carbon
- **Short description:** Google DeepMind's frontier flagship after Gemini 4 Argon, announced 2026-10-28 with state-of-the-art cybersecurity and long-horizon agentic capabilities. Strongest Google model per Artificial Analysis Intelligence Index v5.0 (59). Initially limited to cyber defenders / Fairwind partners; not generally available yet (as of 2026-11-06).
- **Provider / access:** Google DeepMind; surfaced via Gemini products/APIs, AI Studio, Gemini app, Google Cloud, Antigravity — no public API model ID confirmed yet at time of research. Not generally available; staged rollout through the Fairwind Program.
- **Release / knowledge:** Announced 2026-10-28; knowledge cutoff not published.
- **IDs:** `google/gemini-4-carbon` (announced name; no public API ID confirmed).
- **Context window:** ~1M tokens (verified via Artificial Analysis model page); long-context retrieval beyond 1M not verified.
- **Modalities:** text/image/video/speech input; text output; reasoning model with adjustable reasoning effort (High evaluated); tool calls / agentic coding (Antigravity CLI); no native image/video/audio output.
- **Pricing (as of 2026-11-06):** intro $2 / $10 per 1M in/out; standard $4 / $20; cached input 95% off ($0.20 per 1M at standard). No free tier announced.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Coding Agent Index: **59** (High, Antigravity CLI) — #2, behind Claude Opus 5.5 (Max, Claude Code, 62) (Artificial Analysis, 2026-10-28)
- Terminal-Bench 4.0: **64%** (Artificial Analysis; #2, behind Claude Opus 5.5 Max at 56% in reported harness comparison)
- FrontierCode v1.1: **51%** (Artificial Analysis; #2)
- SEC-bench Pro: **88.2%** (Google, no guardrails; #1) — vulnerability finding
- ExploitGym: **54.8%** (Google, no guardrails; SOTA) — exploitation validation
- CWE-bench: **71.0%** (Google, no guardrails; SOTA) — root-cause patching
- Gray Swan Indirect Prompt Injection: **0.0%** attack success (Google; Argon was 0.7%)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0: **59** — #1 overall, ahead of Claude Opus 5.5 (58) and GPT-6 Astra (57); leads 4 of 9 evals: HLE-Diamond, Terminal-Bench-Science, AA-Omniscience, AutomationBench-AA (Artificial Analysis)
- AA-Omniscience v1.1: **54** (accuracy 58%; hallucination rate 11% — up from Argon's 4%, still second-lowest among frontier models)
- GPQA Diamond: no verified public score found for Carbon (HLE-Diamond leading per Artificial Analysis is the closest verified proxy)

Coding:

- WebDev Arena: **1768 Elo** — #4, +89 Elo vs Argon (Google/arena.ai)
- Terminal-Bench 4.0: **64%** (see above)
- Internal secure-code generation: >2x Argon success rate (Google internal; not independently replicated)

Long context:

- 1M-token context window verified (Artificial Analysis); MRCR/RULER values at 1M not publicly reported

### Normalized scores (1–100)

- **Tool use: 90/100.** #2 on AA Coding Agent Index (59 vs Opus 5.5's 62), #2 on Terminal-Bench 4.0 and FrontierCode v1.1, and SOTA on all three agentic cybersecurity benchmarks (SEC-bench Pro 88.2%, ExploitGym 54.8%, CWE-bench 71.0%). Capped by not leading the generic coding-agent index.
- **Reasoning: 93/100.** #1 on AA Intelligence Index v5 (59), #1 on HLE-Diamond and AA-Omniscience v1.1 (54); hallucination rose to 11% (still low relative to Opus 5.5/Astra at 50% per Artificial Analysis), which caps further upside.
- **Context window: 95/100.** 1M-token context verified by Artificial Analysis — top-tier for a frontier model; no >1M verified retrieval numbers.
- **Multimodal: 85/100.** Text/image/video/speech input with text output covers the input modalities but no native image/video/audio generation output; not multimodal output-capable.
- **Coding: 91/100.** WebDev Arena 1768 Elo (#4, +89 over Argon), Terminal-Bench 4.0 64% (#2), long-horizon engineering emphasized by Google; capped by Claude Opus 5.5's lead on the Coding Agent Index.
- **Cost efficiency: 55/100.** Standard API $4/$20 per 1M (intro $2/$10); Artificial Analysis standard-price cost per Intelligence Index task $7.76 — ~23% cheaper than Claude Opus 5.5 ($10.04) but ~1.2x GPT-6 Astra ($6.25). Paid frontier tier, no free access.
- **Overall Score: 91/100.** Mean of the five non-cost dims (90+93+95+85+91)/5 = 90.8 → 91. Best-fit: top-2 frontier model for agentic coding and cybersecurity; best overall intelligence index score as of launch, with availability still restricted.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google: Introducing Gemini 4 Carbon (official launch post)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/)
  - [Google DeepMind: Gemini 4 Carbon Model Evaluation (PDF)](https://storage.googleapis.com/deepmind-media/gemini/gemini_4_carbon_model_evaluation.pdf)
  - [Artificial Analysis: Gemini 4 Carbon is the new #1 on Intelligence Index v5](https://artificialanalysis.ai/articles/gemini-4-carbon-new-number-1)
  - [Artificial Analysis: Gemini 4 Carbon model page](https://artificialanalysis.ai/models/gemini-4-carbon)
  - [Kie.ai: Gemini 4 Carbon Checkpoint Deep Dive & Analysis](https://kie.ai/blog/google-gemini-4-carbon)
  - [iWeaver: Gemini 4 Carbon Benchmarks, Pricing & Availability](https://www.iweaver.ai/blog/gemini-4-carbon/)
  - [The Decoder: pre-launch Carbon reports](https://the-decoder.com/googles-gemini-4-carbon-model-is-reportedly-matching-anthropics-opus-5-5-coding-performance/)
- Future sources: add a new file next to this one using the same headings.
