# GPT 5.1 — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.1`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.1
- **Short description:** The API reasoning model of the GPT-5.1 generation (Nov 2025) — GPT-5.1 Thinking released as `gpt-5.1`, with adaptive reasoning that spends more time on complex problems and responds faster on simple ones; also a clearer, more conversational tone than GPT-5. Now deprecated by GPT-5.2.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.1` via `https://opencode.ai/zen/v1/responses` (paid, $1.07/$8.50); OpenAI Responses API + Chat Completions (first-party pricing $1.25/$10.00 per Artificial Analysis). ChatGPT sibling is GPT-5.1 Instant (`gpt-5.1-chat-latest`) — a different model.
- **Release / knowledge:** Released 2025-11-12/13 (OpenAI blog + Artificial Analysis); knowledge cutoff Sep 30, 2024 (Artificial Analysis spec sheet).
- **IDs:** `opencode/gpt-5.1` (Zen, paid); `gpt-5.1` (OpenAI API); system card also names it `gpt-5.1-thinking`
- **Context window:** 272K input max + 128K reasoning/output = 400K total (OpenAI dev post / AA: 272K combined cap cited)
- **Modalities:** Text and image in, text out; adaptive reasoning (`reasoning_effort`); tool calling with preamble messages; structured outputs; prompt caching; Batch API
- **Pricing (as of 2026-10-01):** Paid — $1.07 / 1M input, $8.50 / 1M output on Zen (cache read $0.107); OpenAI first-party $1.25 / $10.00 (AA). Batch API discount available.
- **Architecture:** Proprietary (OpenAI); parameter count not disclosed. Deprecated — AA confirms only the default 10k-token workload is still benchmarked; superseded by GPT-5.2.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2 (composite incl. Terminal-Bench 4.0, AutomationBench-AA, GDPval-AA v2.1, AA-Briefcase v1.1): **25** — #122/224, below the class median of 26 (estimate; independent evaluation forthcoming)
- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA standalone: no verified public score found (AA individual breakdowns "not publicly available")
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **25** (above)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found (AA-LCR v1.1 breakdown not publicly available)
- CritPt: no verified public score found

Coding:

- SWE-bench Verified: no verified public score found for `gpt-5.1` (predecessor GPT-5: 74.9%, OpenAI — baseline context only, not applied)
- LiveCodeBench: no verified public score found
- SciCode: no verified public score found (AA breakdown not publicly available)

Long context:

- no verified long-context retrieval reported (272K window; AA individual long-context evals not publicly available)

Performance:

- Output speed: **105.1 tokens/sec**; TTFT: **37.19s** (Artificial Analysis, OpenAI API)

## Normalized scores (1–100)

- **Tool use: 45/100.** AA Intelligence Index 25 — below average on the agentic composite that includes Terminal-Bench 4.0, AutomationBench-AA and GDPval-AA; no standalone Terminal-Bench/Tau2 numbers exist for this ID. Below the methodology mid band's 50 floor.
- **Reasoning: 58/100.** AA Index 25 sits in the methodology's Index 20–35 mid band (→ 55–65); the Sep 2024 knowledge cutoff and "below average among comparable models" placement cap it there. No GPQA/HLE text evidence.
- **Context window: 68/100.** 272K input / 400K total puts it in the 200K–500K tier (65–84), slightly under the 70 baseline with no published retrieval numbers to move it up.
- **Multimodal: 65/100.** Text + image input, text output only → 60–70 band; no video/PDF/audio input.
- **Coding: 58/100.** No verified SWE-bench/LiveCodeBench numbers for this exact ID; AA Index 25 (which weights SciCode and Terminal-Bench 4.0) is below average. The GPT-5 baseline (74.9% SWE-bench) suggests capability, but unverified numbers cannot lift the score.
- **Cost efficiency: 73/100.** $1.07/$8.50 Zen (OpenAI first-party $1.25/$10.00) sits between the methodology's ~$1.25/$4.25 = ~88 and $3/$15 = ~60 reference points; AA blended rate $1.34/1M. Deprecated status may move pricing again.
- **Overall Score: 59/100.** Mean of the five quality dims (45+58+68+65+58)/5 = 58.8 → 59. Best fit: a deprecated mid-tier reasoning/chat upgrade — use only for legacy reproducibility; step up to GPT-5.2/5.5-class models for current work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-01
- Method: public internet research (official OpenAI blog and system card addendum, Artificial Analysis model page, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
