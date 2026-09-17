# Big Pickle — findings by Big Pickle

- Source: Big Pickle (`opencode/big-pickle`)
- Date: 2026-09-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle
- **Short description:** OpenCode Zen "stealth" reasoning model (identity undisclosed by OpenCode) for deliberate analysis, multi-step problem solving, and tool use. Free limited-time tier on Zen; community speculates a Zhipu/Z.AI GLM-family base, but OpenCode does not confirm it.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`), `https://opencode.ai/zen/v1/chat/completions` (Chat Completions only, NOT Responses API)
- **Release / knowledge:** 2025-10-17 (models.dev catalog); knowledge cutoff 2025-01
- **IDs:** `big-pickle` (`owned_by: opencode`; historically `zen/big-pickle`)
- **Context window:** 200,000 total / 160,000 input / 32,000 output (models.dev TOML + Pi.dev)
- **Modalities:** text in / text out; reasoning = yes (interleaved `reasoning_content`); tool_call = true; structured_output = true; attachment = false
- **Pricing (as of 2026-09-17):** Free / Free / Free cached on Zen (limited-time; collected data may be used to improve the model).
- **Architecture:** Not disclosed (`open_weights = false`).

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** (63/124) — community run 2026-08-11, official harness + Scale verifier; self-reported, not Scale-verified. By language TS 58.1% / Py 55.2% / Go 50.0% / C 38.5%.
- ORPT-Bench (community): composite **0.615**, success 67%.
- Terminal-Bench (2.1/2.0/Hard), Tau2/Tau3, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond, HLE, LCR, CritPt, AA Intelligence Index, BenchLM overall, AA-Omniscience, MMLU-Pro: **no verified public score found** for `big-pickle`.

Coding:

- SWE-bench Verified, SWE-Pro, LiveCodeBench, SciCode, Vibe, DeepSWE, AA Coding Index: **no verified public score found**.

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 40/100.** Only one community tool eval (SWE Atlas Codebase QnA 50.8%) and no agentic leaderboard presence — score rests on thin evidence, conservative.
- **Reasoning: 55/100.** No public reasoning scores; "reasoning model" per catalog but nothing measured to validate depth.
- **Context window: 70/100.** 200K tier; 32K max output is on the small side for big generations.
- **Multimodal: 15/100.** Text-only in/out, no attachments.
- **Coding: 60/100.** Community SWE-Atlas 50.8% hints mid-pack coding; anecdotal "Sonnet-class" claims have no official bench backing.
- **Cost efficiency: 100/100.** $0/$0/$0 for a limited time.
- **Overall Score: 56/100.** Mean of above. A zero-cost low-information model: fine as a free fallback, treat the 50.8% Codebase-QnA as the strongest verifiable datapoint.

---

## Signature

- Provided by: **Big Pickle (`opencode/big-pickle`)** — 2026-09-17
- Method: public web research (models.dev, Pi.dev, OpenCode docs, community eval repos); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.