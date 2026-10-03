# Mercury 2.5 — findings by Qwen 3.8 27B

- Source: inception/mercury-2.5, e.g. OpenRouter `inception/mercury-2.5`; OpenCode Zen `opencode/mercury-2.5`
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's latest diffusion LLM (dLLM) — instead of generating tokens sequentially it produces and refines multiple tokens in parallel, making it the fastest reasoning LLM on public leaderboards (606–712 tok/s) with a below-average intelligence profile; proprietary.
- **Provider / access:** OpenRouter `inception/mercury-2.5` (canonical slug `inception/mercury-2.5-20260908`); OpenCode Zen `opencode/mercury-2.5`; first-party Inception API. Chat-completions style with tool calling, structured outputs, and reasoning-effort control.
- **Release / knowledge:** released September 8, 2026 (Artificial Analysis FAQ; OpenRouter canonical slug `20260908`); knowledge cutoff not published.
- **IDs:** `inception/mercury-2.5` (OpenRouter); `opencode/mercury-2.5` (Zen ID per folder meta.json).
- **Context window:** 260,000 total tokens; 65,536 max output (OpenRouter API `context_length`/`max_completion_tokens`, confirmed by Artificial Analysis spec section).
- **Modalities:** text in / text out; reasoning supported and enabled by default (efforts: high/medium/low/none, default medium); tool calls and structured outputs; no image/audio/video input.
- **Pricing (as of 2026-10-03):** $0.04 in / $0.15 out / $0.004 cached read per 1M on OpenRouter; first-party Inception API $0.25 in / $0.75 out per 1M (Artificial Analysis); $0.12 per AA Intelligence Index task.
- **Architecture:** proprietary diffusion LLM; parameter count not disclosed by Inception.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / Tau2: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / AIME: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **12** (#91/176; median 13 for reasoning models in the similar price tier — AA model page, 2026-10-03; OpenRouter metadata lists 12.3)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found (AA Coding Index not published for this model)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 260K window; no MRCR/RULER retrieval numbers published for this exact model.

Performance (non-intelligence, verified):

- Output speed: 606.5 tok/s on Inception's API (#3/176 on AA; leaderboard snapshot lists 711.7 tok/s, #3 overall behind Celeris-1 and Mercury 2); time-to-first-token 3.53s; very concise (35M output tokens on the Intelligence Index vs 100M median).

### Normalized scores (1–100)

- **Tool use: 40/100.** No verified Terminal-Bench, Tau, GDPval-AA, or MCP-style score exists for this exact model; the only capability signal is a below-average AA Intelligence Index (12), leaving the dimension low by evidence-poor scoring.
- **Reasoning: 40/100.** AA Intelligence Index 12 sits below the price-tier median (13) and far below the 20–35 band that maps to 55–65; it is a reasoning model with effort control, but composite intelligence is weak despite the "fastest reasoning LLM" speed claim.
- **Context window: 73/100.** Verified 260K total with 65,536 max output (OpenRouter API + AA spec) places it in the 200K–500K tier (65–84), modestly above the 200K=70 baseline.
- **Multimodal: 15/100.** Text-only input and output (no image/audio/video/PDF support per AA and OpenRouter metadata).
- **Coding: 40/100.** No verified SWE-bench, LiveCodeBench, SciCode, or AA Coding Index numbers found for this exact model/ID; capability must be inferred from the low composite intelligence index, which caps the dimension.
- **Cost efficiency: 98/100.** $0.04 in / $0.15 out per 1M on OpenRouter (even better than the ~$0.10/$0.20 reference band); $0.12 per AA task.
- **Overall Score: 42/100.** Mean of 40, 40, 73, 15, 40 = 41.6, rounded half-up to 42. Best fit: high-throughput, low-cost interactive and agentic loops where latency dominates quality — draft generation, quick tool-calling turns, long-context read-heavy work — not hard reasoning or precision coding.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-10-03
- Method: public internet research (OpenRouter API model + endpoint metadata, Artificial Analysis model page + LLM leaderboard snapshot of 2026-10-03 — all fetched 2026-10-03); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
