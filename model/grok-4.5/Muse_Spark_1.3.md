# Grok 4.5 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's mid-2026 flagship, RL-trained on hundreds of thousands of multi-step software-engineering tasks and co-developed with Cursor. Best fit for token-efficient agentic coding at mid-range pricing.
- **Provider / access:** xAI API, Grok Build, and Cursor; OpenCode Zen `opencode/grok-4.5`. (EU availability from mid-July 2026 per launch coverage.)
- **Release / knowledge:** 2026-07-08 (announcement; llm-stats lists 2026-07-16 availability); knowledge cutoff: no verified public statement found
- **IDs:** `opencode/grok-4.5` (paid tier; cost scored on paid pricing)
- **Context window:** 500K input tokens, up to 450K max output — verified via llm-stats compare pages and AI Cost Compare specs
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls and JSON mode yes
- **Pricing (as of 2026-09-23):** $2.00/$6.00 per 1M in/out, cache reads $0.30/1M (verified via Qubrid launch analysis, llm-stats, AI Cost Compare). No $0 tier — paid only. Notable efficiency: ~15,954 avg output tokens per SWE-Pro task, ~4.2× fewer than Claude Opus 4.8 (xAI via Qubrid).
- **Architecture:** Proprietary (undisclosed params); trained across tens of thousands of NVIDIA GB300 GPUs with async RL rollouts (per xAI via Qubrid)

### Raw benchmarks found

> xAI's launch charts (via Qubrid) cover coding/agentic only — xAI published no official MMLU/GPQA figures (per Layer3Labs). GPQA/HLE below are independent Artificial Analysis measurements (via AI Cost Compare), marked as such.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI official) / **81.6%** (AA independent) — both cited
- Tau3-Banking / Tau2-Bench: Tau3 Banking **42.1%** (AA independent); Tau2: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Agentic Index: **48.9** (index, not a pass rate — noted, not scored on)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA independent measurement; llm-stats lists 93.0% — xAI published no official number)
- HLE: **42.7%** (AA independent measurement)
- LCR / MLCR: AA-LCR **74.0%** (AA independent)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **55.8** / BenchLM overall 68.64
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index 63.0 (llm-stats) — split accuracy/hallucination rates: no verified public score found
- LLM Stats Score 45.5–45.8 (#26/27, 11 evals)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-Pro **64.7%** (xAI official); Verified proper: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.1%** (AA independent)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE 1.0 **62.0%** (own-harness, xAI) / 1.1 **53%** (DataCurve independent on mini-swe-agent); AA Coding Index 72.4 (index, noted only)

Long context:

- 500K window verified; AA-LCR 74.0% is the only verified retrieval-adjacent number — no MRCR/RULER percentage found

### Normalized scores (1–100)

- **Tool use: 85/100.** Dual-sourced TB 2.1 ~82–83% is near-frontier; Tau3 Banking 42.1% with no Toolathlon/MCP/GDPval numbers caps it below 88+.
- **Reasoning: 92/100.** GPQA ~93% with HLE 42.7% clears the frontier bar (third-party measured, but consistent across AA and llm-stats).
- **Context window: 87/100.** 500K window with AA-LCR 74%; top of the sub-1M band, no 1M-tier retrieval proof.
- **Multimodal: 68/100.** Image and file input with text-only output — upper image-in band, no video/audio evidence.
- **Coding: 82/100.** SWE-Pro 64.7% with DeepSWE 53–62% is strong but trails the 67%+ leaders; SciCode 54.1% corroborates mid-80s placement.
- **Cost efficiency: 78/100.** $2.00/$6.00 paid pricing plus best-in-class token efficiency (~4× fewer tokens per task than Opus 4.8) — cheap to run, not $0.
- **Overall Score: 83/100.** Mean of (85 + 92 + 87 + 68 + 82) / 5 = 82.8 → 83; best fit as a token-efficient agentic coder where per-task cost matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (xAI launch figures via Qubrid analysis, Artificial Analysis measurements via AI Cost Compare, llm-stats compare pages, Layer3Labs coverage note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
