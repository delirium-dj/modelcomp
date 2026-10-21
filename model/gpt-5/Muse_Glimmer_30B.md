# GPT-5 — findings by Muse Glimmer 30B

- Source: OpenAI/GPT-5 (`meta/muse-glimmer-30b`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's router flagship (400K/128K) for general work; AIME 94.6%, SWE-Verified 74.9%, deprecated, removal scheduled.
- **Provider / access:** OpenAI API (`gpt-5`, Responses API); OpenCode Zen `opencode/gpt-5`. Chat Completions and Responses API both documented.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff 2024-09-30 (per Artificial Analysis model page and OpenAI docs).
- **IDs:** `openai/gpt-5`; `opencode/gpt-5` (no Free ID exists on Zen — paid only).
- **Context window:** 400K total (128K max output) — verified via repo `meta.json` and OpenAI product page (400K context length | 128K max output tokens).
- **Modalities:** Text, image, file in; text out; reasoning yes (router with thinking lane); tool calls yes (function calling, code execution).
- **Pricing (as of 2026-10-20):** OpenAI $1.25/$10 per 1M (cached input $0.125); OpenCode Zen $1.07/$8.50 per 1M. Paid only, no free tier.
- **Architecture:** Proprietary unified router (fast + thinking models), undisclosed params; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **35.2% ±3.1** (tbench.ai public board, 2025-10-31 — weak tail)
- Terminal-Bench 2.1: no verified public score found for base GPT-5
- Tau3-Banking / Tau2-Bench: no verified public score found for base GPT-5
- GDPval-AA: no verified public score found for base GPT-5
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for base GPT-5

Reasoning / knowledge:

- GPQA Diamond: **88.4%** without tools (GPT-5 Pro extended reasoning, OpenAI official launch post)
- HLE: no verified public score found for base GPT-5
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: estimated 27 (Artificial Analysis model page for GPT-5 high)
- AIME 2025: **94.6%** without tools; **100%** for GPT-5 Pro with Python (OpenAI official launch post)

Coding:

- SWE-bench Verified: **74.9%** on SWE-bench Verified with thinking (OpenAI official; n=477 fixed subset)
- LiveCodeBench: no verified public score found for base GPT-5
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found; Aider Polyglot **88%** (OpenAI official, multi-language code editing)

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported for GPT-5 at 400K; max output capped at 128K per repo meta.

### Normalized scores (1–100)

- **Tool use: 78/100.** Router-based function calling plus SWE-bench Verified 74.9% as agentic-execution proxy; capped by Terminal-Bench 2.0 35.2% tail and zero verified TB2.1/Tau3/GDPval-AA numbers for this exact ID.
- **Reasoning: 90/100.** AIME 2025 94.6% and GPQA 88.4% are launch-time frontier; capped by missing HLE/LCR/CritPt and AA Index estimate 27.
- **Context window: 80/100.** 400K total sits high in the 200K–500K tier (200K = 70); capped by 128K max-output ceiling and no verified long-context retrieval at length.
- **Multimodal: 68/100.** Text + image in with MMMU 84.2% (OpenAI official); capped at image-in tier since there is no audio/video input and no non-text output.
- **Coding: 84/100.** SWE-bench Verified 74.9% with thinking plus Aider Polyglot 88% were SOTA at launch; capped by missing LiveCodeBench/SciCode/DeepSWE verified scores for this exact ID.
- **Cost efficiency: 62/100.** Paid-only at $1.25/$10 (Zen $1.07/$8.50); far above free-tier $0 and pricier on output than $1.25/$4.25 peers.
- **Overall Score: 80/100.** Mean of the five quality dims (78 + 90 + 80 + 68 + 84) / 5 = 80.0 → 80; best fit as a paid 2025-flagship reference for router-style coding/reasoning, now deprecated.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research (OpenAI launch posts, OpenAI product page, repo `meta.json`); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g., `GPT_5.md`, using the same headings.
