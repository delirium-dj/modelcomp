# Ox Alpha — findings by Qwen 3.8 27B

- Source: OpenRouter stealth provider (`opencode/ox-alpha`; OpenRouter `stealth/ox-alpha`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (stealth/ox-alpha)
- **Short description:** OpenRouter stealth frontier reasoning model, self-described as "a reasoning model designed for coding, sustained agentic work, and production workloads." Free during preview (provider logs prompts for evaluation).
- **Provider / access:** OpenRouter `stealth/ox-alpha` (confirmed via `GET /api/v1/models`); also listed as an OpenCode Zen Free tier (`opencode/ox-alpha`). Chat Completions style endpoint.
- **Release / knowledge:** Live on OpenRouter as of 2026-08-22 (community work log); exact release date and knowledge cutoff not publicly documented.
- **IDs:** `opencode/ox-alpha` (repo registry / Zen Free tier); OpenRouter `stealth/ox-alpha`. Free ID exists on Zen (preview).
- **Context window:** 1,048,576 total (1M); max completion 131,072 (131K out) — per OpenRouter API `context_length` / `top_provider.max_completion_tokens`.
- **Modalities:** text + image + video in; text out (OpenRouter `modality: text+image+video->text`; repo meta also lists PDF in). Reasoning is mandatory (`reasoning.mandatory: true`), default effort `max`, supported efforts max/high/low.
- **Pricing (as of 2026-09-28):** $0 input / $0 output per 1M (free stealth/preview). Caveat: free because the provider logs prompts for evaluation — not confidential.
- **Architecture:** Proprietary, undisclosed (stealth model; weights and parameter count not public).

### Raw benchmarks found

> Verified public data is thin for this stealth model: one complete community
> benchmark run (DeepSWE, 113 tasks) plus OpenRouter spec fields. No GPQA/HLE/
> SWE-bench Verified/Terminal-Bench/AA Index numbers found. All other rows:
> no verified public score found.

Agent / tool use:

- DeepSWE agentic tool-loop (community run, pier 0.3.1 + mini-swe-agent, docker, 113 tasks, 2026-08-21/22): **58.4% resolve (66/113)**, 95% CI [49.2%, 67.1%]; mean `partial` 0.9366; 80% of tasks landed ≥90% of fail-to-pass tests (github.com/MatchaOnMuffins/oxalpha)
- Tool-call reliability (same run): **46% of episodes** had ≥1 no-tool-call response; **9.7% of the benchmark (11/113 trials)** lost to `RepeatedFormatError` (3 consecutive malformed turns); 5 `AgentTimeoutError` (github.com/MatchaOnMuffins/oxalpha)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no stealth/ox-alpha entry found)
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- Reasoning proxy (DeepSWE run): mean `partial` 0.9366 and 80% of tasks ≥90% f2p indicate strong task-engagement reasoning, but 20.4% genuine failures (<90% f2p) — proxy only, not a direct reasoning benchmark

Coding:

- DeepSWE: **58.4% (66/113)** (community run; below the 74%+ frontier reference; 2 regression-only cases, 1 solved-at-timeout counted by harness aggregate)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- No MRCR / RULER / GraphWalks retrieval value published. The 113-task DeepSWE run exercised long agentic contexts (1,094.8M input tokens, 96.1% cache hit) without truncation failures — mild positive signal only.

### Normalized scores (1–100)

- **Tool use: 45/100.** DeepSWE resolve 58.4% shows workable agentic loops, but measured tool-call reliability is a clear weakness: 46% of episodes hit a malformed no-tool-call turn and 9.7% of the benchmark was lost to `RepeatedFormatError`; no TB2.1/Tau3/GDPval found to offset it.
- **Reasoning: 60/100.** Proxy only — mean `partial` 0.9366 and 80% of tasks ≥90% f2p suggest strong engagement, but no GPQA/HLE/LCR/CritPt/AA Index found; 20.4% genuine failures cap a low-confidence score.
- **Context window: 95/100.** 1M (1,048,576) window is top tier; no MRCR/RULER retrieval measurement found, so the ≥1M band floor applies.
- **Multimodal: 45/100.** Declared image + video input (OpenRouter modality), but no verified multimodal benchmark found; low-confidence score on spec alone.
- **Coding: 65/100.** DeepSWE 58.4% (66/113, CI [49.2, 67.1]) is a solid mid result but below the 74%+ frontier reference; single community run, no SWE-bench Verified/LiveCodeBench to corroborate.
- **Cost efficiency: 100/100.** $0/$0 free stealth/preview tier = 100; flagged caveat: provider logs prompts for evaluation (not confidential; time-limited preview).
- **Overall Score: 62/100.** (45 + 60 + 95 + 45 + 65) / 5 = 62.0; best-fit for free long-horizon agentic coding experiments where privacy is not a concern and tool-call reliability can be tolerated/sandboxed.

---

## Signature

- Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
- Method: public internet research (OpenRouter `GET /api/v1/models` spec fields; community DeepSWE work log github.com/MatchaOnMuffins/oxalpha, 113-task run 2026-08-21/22); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
