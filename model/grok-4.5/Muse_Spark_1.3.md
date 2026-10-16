# Grok 4.5 — findings by Muse Spark 1.3

- Source: xAI/Grok 4.5, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: lane variances + LiveCode/Vulcan/ARC rows added, Reasoning 92 → 91, Coding 82 → 85, Overall holds 83), re-verified 2026-10-16 (UTC, see Re-verification section; scores hold 83)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's mid-2026 flagship, RL-trained on hundreds of thousands of multi-step software-engineering tasks and co-developed with Cursor. Best fit for token-efficient agentic coding at mid-range pricing.
- **Provider / access:** xAI API, Grok Build, and Cursor; OpenCode Zen `opencode/grok-4.5`. (EU availability from mid-July 2026 per launch coverage.)
- **Release / knowledge:** 2026-07-08 (announcement; llm-stats lists 2026-07-16 availability); knowledge cutoff 2026-02-01 (llm-stats — amended 2026-09-27)
- **IDs:** `opencode/grok-4.5` (paid tier; cost scored on paid pricing)
- **Context window:** 500K input tokens, up to 450K max output — verified via llm-stats compare pages and AI Cost Compare specs
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls and JSON mode yes
- **Pricing (as of 2026-09-23):** $2.00/$6.00 per 1M in/out, cache reads $0.30/1M (verified via Qubrid launch analysis, llm-stats, AI Cost Compare). No $0 tier — paid only. Notable efficiency: ~15,954 avg output tokens per SWE-Pro task, ~4.2× fewer than Claude Opus 4.8 (xAI via Qubrid).
- **Architecture:** Proprietary (undisclosed params); trained across tens of thousands of NVIDIA GB300 GPUs with async RL rollouts (per xAI via Qubrid)

### Raw benchmarks found

> xAI's launch charts (via Qubrid) cover coding/agentic only — xAI published no official MMLU/GPQA figures (per Layer3Labs). GPQA/HLE below are independent Artificial Analysis measurements (via AI Cost Compare), marked as such.

Agent / tool use:

- Terminal-Bench 2.1: **83.3%** (xAI official) / **81.6%** (AA independent) — both cited; **TB2.0 83.3%** and **TB3.0 15.7%** (BenchLM mirrors — TB3.0 tails)
- Tau3-Banking / Tau2-Bench: Tau3 Banking **42.1%** (AA independent); Tau2: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- AA Agentic Index: **48.9** (index, not a pass rate — noted, not scored on)
- Harvey Legal Agent Benchmark: **ranked #1** (xAI via Gate News — amended 2026-09-27)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (AA independent measurement; llm-stats lists 93.0% — xAI published no official number)
- HLE: **42.7%** (AA independent measurement); LLMPodium lane **40.3%** — consistent band
- LCR / MLCR: AA-LCR **74.0%** (AA independent)
- ARC-AGI-2: **52.6%** (BenchLM mirror); **ARC-AGI-3 0.3%** (BenchLM mirror — weak tail); **MMLU-Pro 89.2%** (BenchLM GPQA-D Vals lane 92.9%)
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **55.8** / BenchLM overall 68.64
- Omniscience Accuracy / Hallucination Rate: AA-Omniscience Index 63.0 (llm-stats) — split accuracy/hallucination rates: no verified public score found
- LLM Stats Score 45.5–45.8 (#26/27, 11 evals)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-Pro **64.7%** (xAI official); Verified proper: no verified public score found; **86.6% SWE Vals** and **78% Multilingual** (BenchLM mirrors); **89.9% VulcanBench v3**, **66.7% cursorBench32**, **42.4% FrontierCode 1.1** (BenchLM mirrors)
- LiveCodeBench: **67.7%** (LLMPodium); **87.4% Vals lane** (BenchLM mirror — harness differs)
- SciCode / AA-SciCode: **54.1%** (AA independent)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: DeepSWE 1.0 **62.0%** (own-harness, xAI) / 1.1 **53%** (DataCurve independent on mini-swe-agent); AA Coding Index 72.4 (index, noted only)

Long context:

- 500K window verified; AA-LCR 74.0% is the only verified retrieval-adjacent number — no MRCR/RULER percentage found

### Normalized scores (1–100)

- **Tool use: 85/100.** Dual-sourced TB 2.1 ~82–83% is near-frontier; Tau3 Banking 42.1% with no Toolathlon/MCP/GDPval numbers caps it below 88+.
- **Reasoning: 91/100.** GPQA ~93% with HLE ~41% and MMLU-Pro 89.2% clears the frontier bar; capped by ARC-AGI-2 52.6% mid-pack and the ARC-AGI-3 0.3% tail.
- **Context window: 87/100.** 500K window with AA-LCR 74%; top of the sub-1M band, no 1M-tier retrieval proof.
- **Multimodal: 68/100.** Image and file input with text-only output — upper image-in band, no video/audio evidence.
- **Coding: 85/100.** SWE-Pro 64.7% plus LiveCode 67.7% (87.4% Vals lane), SWE Vals 86.6%, VulcanBench 89.9% and cursorBench 66.7% show broad coding; capped by DeepSWE 53% trailing leaders.
- **Cost efficiency: 78/100.** $2.00/$6.00 paid pricing plus best-in-class token efficiency (~4× fewer tokens per task than Opus 4.8) — cheap to run, not $0.
- **Overall Score: 83/100.** Mean of (85 + 91 + 87 + 68 + 85) / 5 = 83.2 → 83; best fit as a token-efficient agentic coder where per-task cost matters.

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (xAI launch figures via Qubrid analysis, Artificial Analysis measurements via AI Cost Compare, llm-stats compare pages, Layer3Labs coverage note); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Re-verification — 2026-10-16 (23 days after amended 2026-09-27)

Original research date 2026-09-23, amended 2026-09-27. Re-run requested by the user to compare prior findings against current data and fill missing-data gaps. Original findings above are preserved; corrections are marked inline.

Three independent searches performed 2026-10-16: (1) Artificial Analysis Grok-4.5-High page (Index 39 current v4.3.2, $2.00/$6.00, 500K context, text+image in, deprecated — Grok 4.6 suggested), (2) evals.report model page (6 reported scores: TB2.1 83.3%, SWE-Pro 64.7%, ARC-AGI-1 85.67%, ARC-AGI-2 52.64%, FrontierCode 42.4%, SWE-Marathon 29.0%), (3) xAI launch charts via Qubrid + AA measurements via AI Cost Compare + llm-stats (TB2.0/2.1 83.3%, TB3.0 15.7%, Tau3 42.1%, GPQA 93.1/93.0%, HLE 42.7/40.3%, AA-LCR 74.0%, MMLU-Pro 89.2%, SWE-Vals 86.6%, VulcanBench 89.9%, cursorBench 66.7%, DeepSWE 62.0/53%, SciCode 54.1%). Conflicting results compared below.

| Dimension | 2026-09-23/27 | 2026-10-16 | Change |
|---|---|---|---|
| Tool use | 85 | 85 | hold — TB2.1 83.3% confirmed official-and-verified; Tau3 42.1% stands; TB3.0 15.7% + SWE-Marathon 29.0% tails re-confirmed; no GDPval/Claw absolute |
| Reasoning | 91 | 91 | hold — GPQA ~93% + HLE ~41% stand (AA independent, xAI published none); ARC-AGI-1 filed 52.6% ARC-AGI-2 vs official 85.67% ARC-AGI-1 + 52.64% ARC-AGI-2 (consistent — filed row was AGI-2); MMLU-Pro 89.2% stands; Index filed 55.8 vs live 39 — index-revision drift, direction adverse but unscored directly, band corroborated by GPQA/HLE officials |
| Context | 87 | 87 | hold — 500K + AA-LCR 74.0% stands; no 1M-tier proof |
| Multimodal | 68 | 68 | hold — image+file in + text out stands (AA confirms text+image in); no video/audio |
| Coding | 85 | 85 | hold — SWE-Pro 64.7% confirmed verified; SWE-Vals 86.6% + VulcanBench 89.9% + cursorBench 66.7% + FrontierCode 42.4% stand; LiveCode 67.7/87.4 lane variance pre-flagged; DeepSWE 62.0/53% + SWE-Marathon 29.0% caps unchanged; SciCode 54.1% stands; no Vibe absolute |
| Cost | 78 | 78 | hold — $2.00/$6.00 stands + ~4× token efficiency corroborated |
| Overall | 83 | 83 | hold — (85+91+87+68+85)/5 = 83.2 → 83 |

Conflicts resolved: ARC-AGI-2 52.6 filed vs 52.64 official (exact confirm); AA Index 55.8 (filed snapshot) vs 39 (live v4.3.2) — revision drift, GPQA/HLE band corroborates 91; TB3.0/SWE-Marathon tails consistent across sources. No GDPval, no Claw, no CritPt, no Vibe, no MRCR absolute found — prior gaps stand. Scores hold; no dimension delta meets the evidence bar for change.

Sources: https://artificialanalysis.ai/models/grok-4-5 · https://evals.report/models/xai-grok-4-5 · https://llm-stats.com/models/grok-4-5
