# Gemini 3 Pro — findings by Muse Spark 1.3

- Source: Google/Gemini 3 Pro (`google/gemini-3-pro`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: launch absolutes added, MRCR-measured context cap applied, modality corrected, scores recomputed 87 → 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind's frontier Pro model (Nov 2025 generation) with 1M context and Deep Think reasoning mode; strong science/reasoning showing with weaker long-task agentic coding than its 3.1 successor. Top use case: graduate-science reasoning and multimodal knowledge work.
- **Provider / access:** Google (Gemini API / AI Studio / Vertex AI, model ID `gemini-3-pro-preview` family, "11/25" release cut). Chat Completions-compatible endpoints via AI Studio.
- **Release / knowledge:** 2025-11-18 release (per Artificial Analysis / NYSGPT model record); knowledge cutoff not publicly disclosed.
- **IDs:** `google/gemini-3-pro` (no Free ID exists on Zen — paid only).
- **Context window:** 1M total / 65K max output (folder meta.json, consistent with Vals AI record: 1M context). No public MRCR-at-1M figure found for this exact cut.
- **Modalities:** Text, image in; text out; reasoning yes (Deep Think mode); tool calls yes (CloudPrice catalog caps; corrects filed audio/video/PDF claim — Video-MMMU 87.6% and ScreenSpot-Pro 72.7% measured via image-frame lanes).
- **Pricing (as of 2026-08 record, re-verified 2026-09-27):** GA now $1.00/$6.00 per 1M (CloudPrice versions; preview tier was $2/$12 ≤200K, $4/$18 above). Paid only.
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench agentic: **87** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror of AA data); **t2-bench 85.4%** (Google launch, up from 54.9%; CloudPrice TAU2 0.9 #82 corroborates)
- Terminal-Bench Hard: **42** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- Terminal-Bench 2.0: **54.2%** (Google launch, up from 32.6%)
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
- AIME 2025: **95% no-tools / 100% with code execution** (Google launch, vs predecessor 88%; AA-norm 96 consistent)
- MMMU-Pro: **81%** (Google launch, up from 68%); **Video-MMMU 87.6%** (launch, up from 83.6%); **ScreenSpot-Pro 72.7%** (launch, up from 11.4%)
- Vending-Bench 2 (long-horizon consistency): **$5,478.16** (Google launch, vs 2.5 Pro $573.64)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **39.6** (via NYSGPT 44B mirror); **73 on the Nov-2025 AA scale** (VentureBeat, crowned "new leader" — different scale vintage)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified (Vals AI, by task difficulty): **88% (<15 min) / 74% (15m–1h) / 43% (1–4h) / 33% (4h)** (Vals AI SWE-bench page, updated 2026-09-01); launch absolute **76.2%** (up from 59.6% — consistent)
- LiveCodeBench: **92** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror); launch **LiveCodeBench Pro 2439** (up from 1775 — consistent)
- SciCode: **56** (Artificial Analysis normalized 0–100, via NYSGPT 44B mirror)
- SWE-bench Pro: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **MRCR v2 77% at 128k / 26.3% at 1M** (Google launch, vs 58%/16.4%) — full-length retrieval is weak and caps the tier

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 87 plus t2-bench 85.4%, TB2.0 54.2% and ScreenSpot-Pro 72.7% show solid Pro tool use; capped by TB-Hard 42 and no TB2.1/Tau3/GDPval numbers.
- **Reasoning: 90/100.** AIME 95/100 plus GPQA 91.9, MMLU-Pro 90 and AA 73 (Nov-25 leader) confirm frontier-adjacent science/reasoning; capped by ARC-AGI-2 31.1% — the fluid-novel-reasoning gap stands.
- **Context window: 90/100.** Verified 1M total / 65K out, but measured MRCR v2 26.3% at 1M (77% at 128k) caps it well below saturation peers.
- **Multimodal: 78/100.** Text/image in per catalog with MMMU-Pro 81%, Video-MMMU 87.6% and ScreenSpot-Pro 72.7% measured strength; capped by text-only out and catalog modality limits.
- **Coding: 85/100.** Launch SWE-V 76.2% plus Vals splits (88/74/43/33), LiveCodeBench Pro 2439 and SciCode 56 show strong short-task coding; long-task degradation and no SWE-Pro number cap it at 85.
- **Cost efficiency: 80/100.** GA pricing now $1/$6 per 1M (was $2/$12 preview); strong paid value for a Pro.
- **Overall Score: 85/100.** Mean of the five non-cost dims (80 + 90 + 90 + 78 + 85) / 5 = 84.6 → 85; best fit as a science-heavy reasoning Pro — measured full-length retrieval caps it below its 3.1 successor.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (Artificial Analysis via NYSGPT 44B mirror, Vals AI SWE-bench page, Macaron/DeepMind model-card comparison, llm-stats SWE-Pro leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
