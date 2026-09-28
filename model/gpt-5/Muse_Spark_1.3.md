# GPT-5 — findings by Muse Spark 1.3

- Source: OpenAI/GPT-5 (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship: a unified router system pairing a fast efficient model with a deeper thinking model. Launch-time frontier for math and real-world coding, later superseded by GPT-5.1 and successors.
- **Provider / access:** OpenAI API (`gpt-5`, Responses API); OpenCode Zen `opencode/gpt-5`. Chat Completions and Responses API both documented.
- **Release / knowledge:** 2025-08-07 release; knowledge cutoff 2024-09-30 (per Artificial Analysis model page).
- **IDs:** `openai/gpt-5`; `opencode/gpt-5` (no Free ID exists on Zen — paid only).
- **Context window:** 400K total (128K max output) — verified via repo meta.json and Artificial Analysis (400K context window listing).
- **Modalities:** Text and image in; text out; reasoning yes (thinking variant + router); tool calls yes (function calling, code execution, search).
- **Pricing (as of 2026-09-27):** OpenAI $1.25/$10 per 1M (cached input $0.125); OpenCode Zen $1.07/$8.50 per 1M. Paid only, no free tier.
- **Architecture:** Proprietary unified router (fast + thinking models), undisclosed params; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus 2): **35.2% ±3.1** (tbench.ai public board, 2025-10-31 — weak tail)
- Terminal-Bench 2.1: no verified public score found for base GPT-5 (later-family scores exist but are not this exact ID).
- Tau3-Banking / Tau2-Bench: no verified public score found for base GPT-5.
- GDPval-AA: no verified public score found for base GPT-5 (AA Intelligence Index-M10 harness reports Index 27 estimated, not a GDPval Elo).
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found for base GPT-5.
- Router note (proxy, provisional): unified real-time router decides fast vs thinking per conversation complexity and tool needs (OpenAI launch post) — capability claim, not a scored benchmark.

Reasoning / knowledge:

- GPQA Diamond: **88.4%** without tools (GPT-5 Pro extended reasoning, OpenAI official launch post).
- HLE: no verified public score found for base GPT-5.
- LCR / MLCR: no verified public score found for base GPT-5.
- CritPt: no verified public score found for base GPT-5.
- Artificial Analysis Intelligence Index / BenchLM overall: **27** estimated (Artificial Analysis model page for GPT-5 high, below-average vs median 29).
- Omniscience Accuracy / Hallucination Rate: no verified public score found; directional proxy only — GPT-5 thinking cuts hallucination vs o3 (LongFact-Concepts 0.7%, LongFact-Objects 0.8%, FActScore 1.0% per W&B summary of OpenAI numbers), open-ended ChatGPT-traffic error 4.8% with thinking (same source).
- AIME 2025: **94.6%** without tools; **100%** for GPT-5 Pro with Python (OpenAI official launch post).

Coding:

- SWE-bench Verified / SWE-Pro: **74.9%** on SWE-bench Verified with thinking (OpenAI official; n=477 fixed subset validated on internal infra).
- LiveCodeBench: no verified public score found for base GPT-5.
- SciCode / AA-SciCode: no verified public score found for base GPT-5.
- Vibe Code Bench: no verified public score found for base GPT-5.
- DeepSWE / Coding Index / other: no verified public score found for base GPT-5; closest proxy Aider Polyglot **88%** (OpenAI official, multi-language code editing) vs o3 79.6% and GPT-4o 25.8%.

Long context:

- No MRCR / RULER / GraphWalks retrieval score reported for GPT-5 at 400K; max output capped at 128K per repo meta.

### Normalized scores (1–100)

- **Tool use: 78/100.** Router-based function calling plus SWE-bench Verified 74.9% as agentic-execution proxy; capped hard by the TB2.0 35.2% tail and zero verified TB2.1/Tau3/GDPval-AA numbers for this exact ID.
- **Reasoning: 88/100.** AIME 2025 94.6% and GPQA 88.4% are launch-time frontier; capped by missing HLE/LCR/CritPt verified scores and AA Index 27 (estimated, below median).
- **Context window: 80/100.** 400K total sits high in the 200K–500K tier (200K = 70); capped by 128K max-output ceiling and no verified long-context retrieval at length.
- **Multimodal: 68/100.** Text + image in with MMMU 84.2% (OpenAI official); capped at image-in tier since there is no audio/video input and no non-text output.
- **Coding: 86/100.** SWE-bench Verified 74.9% with thinking plus Aider Polyglot 88% were SOTA at launch; capped by missing LiveCodeBench/SciCode/DeepSWE verified scores for this exact ID.
- **Cost efficiency: 62/100.** Paid-only at $1.25/$10 (Zen $1.07/$8.50); far above free-tier $0 and pricier on output than $1.25/$4.25 peers.
- **Overall Score: 80/100.** Mean of the five quality dims (78 + 88 + 80 + 68 + 86) / 5 = 80.0 → 80; best fit as a paid 2025-flagship reference for router-style coding/reasoning, not a current frontier pick. (Amended 2026-09-27 under blanket re-audit sign-off: TB2.0 tail added, Tool 82 → 78, Overall 81 → 80.)

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-27
- Method: public internet research (OpenAI launch posts, Artificial Analysis model page, W&B benchmark summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
