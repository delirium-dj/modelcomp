# GPT-5.1 Codex Mini — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-5.1-Codex-Mini (`gpt-5.1-codex-mini`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** OpenAI's November 2025 cheapest Codex tier — a smaller, less-capable GPT-5.1 Codex with the same 400K window and reasoning support. Removed from Codex in April 2026 and deprecated on Zen in July 2026.
- **Provider / access:** OpenAI Responses API (`gpt-5.1-codex-mini`), OpenCode Zen (`opencode/gpt-5.1-codex-mini`); Responses-API only.
- **Release / knowledge:** 2025-11-17 (Terminal-Bench run date); knowledge cutoff 2024-09-30.
- **IDs:** `gpt-5.1-codex-mini`, `opencode/gpt-5.1-codex-mini`. No Free ID.
- **Context window:** 400,000 total; 128,000 max output — OpenAI model docs.
- **Modalities:** text and image in; text out; reasoning tokens; tool calls.
- **Pricing (as of 2026-10-23):** $0.25/$2.00 per 1M in/out, $0.025 cached (native and Zen identical).
- **Architecture:** proprietary compact GPT-5.1 Codex variant.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **43.1%** (Crux agent, tbench.ai leaderboard)
- Tau2-Bench / OSWorld / GDPval-AA / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / HLE / Artificial Analysis Intelligence Index: **no verified public score found** for the Codex Mini variant

Coding:

- SWE-Bench Pro: **49.0%** (dataset metadata; harness not disclosed)
- Vibe Code Bench: **22.2%** (dataset metadata)
- SWE-bench Verified / LiveCodeBench: **no verified public score found** for this id

Long context:

- No MRCR/RULER figure published; 400K window is vendor-stated only.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 43.1% is respectable for the cheapest Codex tier, but no Tau2/OSWorld/GDPval evidence exists (tbench.ai).
- **Reasoning: 62/100.** No direct GPQA/HLE row; the score reflects the deliberately reduced capability versus full Codex (OpenAI: "less-capable version").
- **Context window: 78/100.** 400K/128K is full Codex-class, capped only by the absence of retrieval measurements.
- **Multimodal: 42/100.** Image in, text out.
- **Coding: 68/100.** SWE-Bench Pro 49.0% and Vibe Code Bench 22.2% are a clear step down from the full Codex line (dataset metadata).
- **Cost efficiency: 90/100.** $0.25/$2.00 is a fifth of GPT-5 Codex's price — one of the cheapest 400K-context coding routes.
- **Overall Score: 61/100.** Mean of the five quality dims (55+62+78+42+68)/5 = 61.0 → 61. Best-fit: high-volume, low-stakes coding edits where cost dominates; weak for compound refactors.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (OpenAI model docs, Terminal-Bench 2.0 leaderboard, curated dataset metadata, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
