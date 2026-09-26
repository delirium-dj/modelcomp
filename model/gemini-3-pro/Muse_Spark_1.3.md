# Gemini 3 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model (Nov 2025 generation) with 1M context and Deep Think reasoning mode; strong science/reasoning showing with weaker long-task agentic coding than its 3.1 successor. Top use case: graduate-science reasoning and multimodal knowledge work.
- **Provider / access:** Google (Gemini API / AI Studio / Vertex AI, model ID `gemini-3-pro-preview` family, "11/25" release cut). Chat Completions-compatible endpoints via AI Studio.
- **Release / knowledge:** 2025-11-18 release (per Artificial Analysis / NYSGPT model record); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-pro` (no Free ID exists on Zen — paid only).
- **Context window:** 1M total / 65K max output (folder meta.json, consistent with Vals AI record: 1M context). No public MRCR-at-1M figure found for this exact cut.
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (Deep Think mode); tool calls yes.
- **Pricing (as of 2026-08 record):** $2.00 input / $12.00 output per 1M, ~$4.50 blended 3:1 (Artificial Analysis via NYSGPT 44B mirror, updated 2026-08-05). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench agentic: **87** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror of AA data)
- Terminal-Bench Hard: **42** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **91** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- ARC-AGI-2 (Verified): **31.1%** (Google DeepMind model card Feb 2026, via Macaron comparison — vs Gemini 3.1 Pro 77.1%, Opus 4.6 68.8%)
- HLE (no tools): **37** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- MMLU-Pro: **90** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- AIME 2025: **96** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **39.6** (via NYSGPT 44B mirror)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified (Vals AI, by task difficulty): **88% (<15 min) / 74% (15m–1h) / 43% (1–4h) / 33% (4h)** (Vals AI SWE-bench page, updated 2026-09-01)
- LiveCodeBench: **92** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- SciCode: **56** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- SWE-bench Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (no public MRCR v2 / RULER / GraphWalks number for the 11/25 Pro cut)

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 agentic 87 (AA) evidences solid tool orchestration, but Terminal-Bench Hard 42 (AA) and no public TB 2.1/Tau3/GDPval numbers cap it well below the frontier agent tier.
- **Reasoning: 89/100.** GPQA 91, MMLU-Pro 90, AIME 96, HLE 37 (AA) is frontier-adjacent science/reasoning; capped by ARC-AGI-2 31.1% — a large fluid-novel-reasoning gap behind its 3.1 successor (77.1%).
- **Context window: 97/100.** Verified 1M total / 65K out puts it in the ≥1M tier (95–100); held below 100 for lack of any published full-length retrieval-fidelity measurement.
- **Multimodal: 85/100.** Text/image/audio/video/PDF in covers the 75–90 video/PDF-in band; text-only out keeps it below 90.
- **Coding: 84/100.** Vals SWE-bench difficulty splits (88/74/43/33) plus LiveCodeBench 92 show strong short-task coding that degrades on 1h+ tasks; SciCode 56 and no SWE-bench Pro number cap it at 84.
- **Cost efficiency: 72/100.** Paid-only $2/$12 (≈$4.50 blended) sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points.
- **Overall Score: 87/100.** Mean of the five non-cost dims (78 + 89 + 97 + 85 + 84) / 5 = 86.6 → 87; best fit as a science-heavy reasoning Pro, not a first-choice long-horizon coding agent.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Artificial Analysis via NYSGPT 44B mirror, Vals AI SWE-bench page, Macaron/DeepMind model-card comparison, llm-stats SWE-Pro leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
