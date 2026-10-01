# Big Pickle — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen "stealth" reasoning model for deliberate analysis and multi-step problem solving; free limited-time tier on Zen.
- **Provider / access:** OpenCode Zen `opencode/big-pickle`; OpenAI-compatible Chat Completions API; `https://opencode.ai/zen/v1/chat/completions`.
- **Release / knowledge:** Listed 2025-10-17 via models.dev catalog; knowledge cutoff 2025-01.
- **IDs:** `opencode/big-pickle` (`owned_by: opencode`); historically `zen/big-pickle`.
- **Context window:** 200,000 tokens total (160K input / 32K output) per models.dev TOML and Pi.dev.
- **Modalities:** Text in/out only; interleaved reasoning support; native tool calling; structured output.
- **Pricing (as of 2026-10-01):** Free tier at $0/$0/$0 cached (limited-time) on OpenCode Zen; training data may be used to improve the model.
- **Architecture:** Not disclosed; `open_weights = false`; speculated Zhipu GLM-family base but unconfirmed.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** (63/124) community run 2026-08-11; official harness + Scale verifier; language breakdown: TS 58.1%, Py 55.2%, Go 50.0%, C 38.5%.
- ORPT-Bench (community): composite **0.615**, success 67%.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, OmniSense, MMLU-Pro: **no verified public score found** for Big Pickle.

Coding:

- SWE-bench Verified, LiveCodeBench, SciCode, DeepSWE: **no verified public score found** for Big Pickle.

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**.

### Normalized scores (1-100)

Derived from the single verified benchmark above using methodology in `model-comparison.md`:

- **Tool use: 40/100.** Only verified public number is SWE Atlas Codebase QnA 50.8%; community ORPT-Bench 0.615/67%. No Terminal-Bench, Tau, GDPval, or Claw-Eval scores found; thin evidence base.
- **Reasoning: 55/100.** "Reasoning model" spec per catalog; no measured GPQA, HLE, LCR, or Intelligence Index numbers; conservative floor assignment.
- **Context window: 70/100.** 200K window maps to 65-84 tier; 32K max output is on lower end for large contexts.
- **Multimodal: 15/100.** Text-only in/out; no image/audio/video capabilities.
- **Coding: 60/100.** SWE Atlas Codebase QnA 50.8% suggests mid-pack coding; no SWE-bench Verified or LiveCodeBench numbers; anecdotal "Sonnet-class" claims unsubstantiated.
- **Cost efficiency: 100/100.** $0 free tier during limited period; exceptional value for a reasoning model but time-limited.
- **Overall Score: 48/100.** Mean of (40 + 55 + 70 + 15 + 60) / 5 = 48.0 → 48. A zero-cost stealth model with minimal verified benchmarks; 50.8% SWE Atlas Codebase QnA is strongest evidence anchor.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (models.dev, Pi.dev, OpenCode Zen docs, community eval repos); scores normalized 1-100 interpretations, not official vendor scores. Observed strong free tier but limited verified benchmark coverage.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.