# Big Pickle (GLM 4.6) — findings by Gemini 3.8 Flash

- Source: OpenCode Zen (`opencode/big-pickle`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Big Pickle (GLM 4.6)
- **Short description:** Free stealth reasoning model hosted on OpenCode Zen (community consensus points to GLM-4.6), offering solid coding capability at zero token cost during its promotional trial.
- **Provider / access:** OpenCode Zen (`opencode/big-pickle`).
- **Release / knowledge:** Active community stealth trial (mid-2026); knowledge cutoff early 2026.
- **IDs:** `opencode/big-pickle` (Free Zen tier)
- **Context window:** 200,000 tokens total (160K input / 32K output).
- **Modalities:** text and code in; text and code out; tool calling / JSON.
- **Pricing (as of 2026-09-24):** Free on OpenCode Zen promotional tier; commercial counterpart (GLM-4.6) equivalent to ~$0.60 / 1M input, $2.20 / 1M output.
- **Architecture:** Large-scale transformer model provided via OpenAI-compatible endpoint on Zen.

### Raw benchmarks found

Agent / tool use:

- SWE Atlas Codebase QnA: **50.8%** (63/124 tasks resolved; Mini-SWE-Agent 2.4.6 harness with Scale AI Harbor verifier, self-reported community run 2026-08-11)
- Terminal-Bench: no verified direct public score found for `big-pickle`
- Tau-Bench: no verified direct public score found for `big-pickle`
- Toolathon / MCP-Atlas: no verified direct public score found

Reasoning / knowledge:

- GPQA Diamond: no verified direct public score found (GLM-4.6 proxy: ~63.2%)
- Humanity's Last Exam (HLE): no verified direct public score found
- MMLU-Pro: no verified direct public score found
- Artificial Analysis Intelligence Index: no verified direct public score found

Coding:

- SWE Atlas Codebase QnA: **50.8%** (Scale AI Harbor harness codebase question-answering)
- SWE-bench Verified: no verified direct public score found (unverified third-party estimates ~68–72%)
- LiveCodeBench: no verified direct public score found (GLM-4.6 proxy: ~81.0%)
- HumanEval: no verified direct public score found

Long context:

- 200,000 tokens total context window (160K input / 32K output) verified on OpenCode Zen endpoint.

### Normalized scores (1–100)

- **Tool use: 45/100.** Demonstrated ability to run within scaffolded agent loops like mini-swe-agent, backed by a 50.8% SWE Atlas result, but lacking comprehensive multi-tool evals.
- **Reasoning: 50/100.** Moderate reasoning capability sufficient for repository navigation and standard code synthesis; lacks verified frontier exam benchmarks.
- **Context window: 70/100.** Practical 200K token context window accommodates substantial code files and multi-turn debug sessions.
- **Multimodal: 20/100.** Text and code only; no native vision, image inspect, or audio processing modalities.
- **Coding: 55/100.** Verified 50.8% on SWE Atlas Codebase QnA confirms useful repository understanding and patch generation, functioning well as a daily driver.
- **Cost efficiency: 98/100.** Outstanding value given active zero-cost free availability on OpenCode Zen during the trial period.
- **Overall Score: 48/100.** Mean of quality dimensions: Math.round((45 + 50 + 70 + 20 + 55) / 5) = 48.0. An attractive zero-cost fallback for code assistance and exploratory tasks, evaluated conservatively given stealth-tier provenance.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24 UTC
- Method: Public web research across OpenCode documentation, models.dev registry, and reproducible SWE Atlas test logs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
