# GPT-5.2 Codex — findings by GPT-5.6 Terra

- Source: OpenAI / GPT-5.2-Codex
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex
- **Short description:** OpenAI's shut-down GPT-5.2 variant optimized for long-horizon, terminal-based software engineering.
- **Provider / access:** Formerly Codex/paid ChatGPT access; OpenAI's current model list marks the route shut down.
- **Release / knowledge:** Released December 2025; no verified cutoff found.
- **IDs:** `openai/gpt-5.2-codex`.
- **Context window:** no independently verified numeric limit found in reviewed sources.
- **Modalities:** coding-agent and terminal-oriented use; full modality contract not verified.
- **Pricing (as of 2026-11-03):** shut down; historic pricing is not treated as current.
- **Architecture:** proprietary, specialized coding model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **64.0%** (OpenAI-reported).

Reasoning / knowledge:

- no verified public broad reasoning score found.

Coding:

- SWE-bench Pro: **56.4%** (OpenAI-reported); public Scale leaderboard recorded **41.04%** under its own run.
- Android Bench: **62.5%** (public leaderboard coverage).
- Vibe Code Bench: **37.91%** (Stanford AI Index table).

Long context:

- no verified public retrieval score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** 64.0% Terminal-Bench supports strong terminal-agent performance, with configuration caveats.
- **Reasoning: 80/100.** Coding-focused evidence is strong but broad-reasoning coverage is sparse.
- **Context window: 80/100.** Long-horizon positioning is documented but no numeric limit was verified.
- **Multimodal: 15/100.** A non-text modality contract was not verified.
- **Coding: 90/100.** Multiple coding benchmarks support a frontier historical coding score; vendor and independent SWE values differ.
- **Cost efficiency: 0/100.** The model is shut down and unavailable for new work.
- **Overall Score: 71/100.** Mean of the five quality dimensions = 70.6; historical coding evidence, not a current deployment recommendation.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-11-03
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI announcement](https://openai.com/index/introducing-gpt-5-2-codex/)
  - [OpenAI model catalogue](https://developers.openai.com/api/docs/models/all)
  - [Scale SWE-bench Pro leaderboard](https://labs.scale.com/api/pdf/leaderboard/swe_bench_pro_public)
