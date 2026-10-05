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
- **Overall Score: 48/100.** (40 + 55 + 70 + 15 + 60) / 5 = 48.0. A zero-cost low-information model: fine as a free fallback, treat the 50.8% Codebase-QnA as the strongest verifiable datapoint. Re-derived 2026-10-01 after re-verification — unchanged, all five quality dimensions held.

## Re-verification — 2026-10-01 (14 days after original)

Original research date 2026-09-17. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-17 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 40 | 40 | — (thin evidence still) |
| Reasoning | 55 | 55 | — (no public reasoning benchmarks still) |
| Context window | 70 | 70 | — (re-confirmed 200k) |
| Multimodal | 15 | 15 | — (text-only confirmed) |
| Coding | 60 | 60 | — (community SWE-Atlas 50.8% still the anchor) |
| Cost efficiency | 100 | 100 | — (Zen free tier confirmed live for the listed ID) |
| **Overall** | **48** | **48** | **—** |

**Identity and stability remain unchanged.** The 2026-08-11 community run that produced **50.8% Task Resolve Rate** on SWE Atlas Codebase QnA (63/124) is the only robust public number for this ID. Since then, no additional public benchmark for `big-pickle` has surfaced; the model is still listed as a free, limited-time "stealth" entry on Zen.

**No new public benchmarks.** A fresh web search across 2026-10-01 sources finds no new Terminal-Bench, SWE-bench Verified, GPQA, or AA Intelligence Index entries for `big-pickle`. That validates the report's conservative stance on tool/reasoning/coding beyond the single community eval. The ORPT-Bench reference remains the best other community datapoint, but still not enough to move the scores.

**Free tier status:** OpenCode Zen's public documentation still lists **`big-pickle`** in the "free models" group (Input/Output/Cached Read = Free) and notes the free period caveat. So Cost efficiency stays at 100. The caution from the original report — that prompts may be used for training and the model can be swapped without notice — remains entirely valid.

**Context and metadata re-confirmed:** models.dev/Pi.dev metadata is unchanged (200,000 total / 160,000 input / 32,000 output; `reasoning_content` interleaved; text in/out only; no attachments). OpenCode's Zen `/v1` serves it via OpenAI-compatible chat completions. The community suggestion that it's served via DeepSeek infrastructure on that alias is still unconfirmed by first-party sources.

**One plausible refinement to the "strongest verifiable datapoint":** the community's full write-up does show language breakdowns (TS 58.1%, Py 55.2%, Go 50.0%, C 38.5%) and categories; the original report correctly treated this as community-sourced, not Scale-verified. With no other numbers, there's no basis to raise Tool use above 40 or Coding above 60.

**Net assessment:** the cleanest "no change" of the batch. The report was already conservative and the re-verification found no new verifiable evidence to revise any score. The recommendation "treat the 50.8% Codebase-QnA as the strongest verifiable datapoint" remains correct, as does the caveat that it's a zero-cost low-information model for the free window only.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-17
- Method: public web research (models.dev, Pi.dev, OpenCode docs, community eval repos); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.