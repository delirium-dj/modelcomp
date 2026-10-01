# Kimi K3 — findings by Qwen 3.8 Flash

- Source: Moonshot AI / Kimi K3 (`moonshotai/kimi-k3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter multimodal MoE flagship (July 2026) with a 1M-token input **and** output window, frontier multimodal document/math reasoning and terminal-agent coding; proprietary and premium priced.
- **Provider / access:** Moonshot AI API (`kimi-k3`); no OpenCode Zen free ID (`noFreeId`). Reasoning model with tool calls and a Python-tool mode.
- **Release / knowledge:** 2026-07 (Kimi K3 launch blog); knowledge cutoff not disclosed.
- **IDs:** `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 (1M) in / up to 1M out (curated meta) — the symmetric 1M/1M window is unusual and helps long-document generation.
- **Modalities:** text, image, document in; text out; reasoning on; tool calls; JSON mode. No audio/video input, no non-text output.
- **Pricing (as of 2026-10-02):** Paid $3.00 / $15.00 per 1M ($0.30 cached); no free tier.
- **Architecture:** 2.8T-parameter MoE, proprietary (open-weights status pending/unverified as of the launch blog).

### Raw benchmarks found

> Independently verified against BenchLM (79 of 618 rows), citing the Moonshot AI "Kimi K3" launch blog, Artificial Analysis, Vals AI, ARC Prize, Cursor and OpenHarmony leaderboards (fetched 2026-10-02).

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot; AA 85.0%, Vals 80.9%) — but TB 4.0 **12.6%**
- BrowseComp: **91.2%**; DeepSearchQA 95.0%; Toolathlon-Verified **73.2%**; MCP Atlas **84.2%**
- GDPval-AA: **1524** (AA; normalized 51.2%); AA Briefcase 1505; AA Agentic Index 50.6%
- AA Tau3 Banking 46.0%; AA Harvey LAB 94.6%; APEX-Agents-AA 41.3%; ApprenticeBench 18%

Reasoning / knowledge:

- GPQA / GPQA-Diamond: **93.5%** (Vals 92.9%); HLE **56%** (no tools 43.5%); MMLU-Pro (Vals) 88.0%
- ARC-AGI-1 / ARC-AGI-2: **94.5% / 60.4%** (ARC Prize verified)
- AA-LCR: **88.7%**; MLCR-AA 38.3%; CritPt 23.4%
- Artificial Analysis Intelligence Index **43.6**; Omniscience accuracy 47.6 / hallucination 53.2
- MathVision 94.3 (w/ Python 97.8)

Coding:

- SWE-bench (Vals): **93.4%**; LiveCodeBench (Vals) **87.2%**; AA Coding Index **76.2%**
- DeepSWE: **67.5%**; ProgramBench 77.8%; FrontierSWE 81.2% (v2: 25.9%); Kimi Code Bench v2 72.9%
- AA-SciCode 59.5%; sweMarathon 42%; VulcanBench v3 73.7%; PostTrainBench v1.1 32.0%

Multimodal / long context:

- CharXiv 91.3, MMMU-Pro 81.6 (w/ Python 83.4), OmniDocBench 91.1, MathVision 94.3; AA-MMMU-Pro 80.5; 1M window with AA-LCR 88.7 (no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 88/100.** Terminal-Bench 2.1 88.3%, Toolathlon-Verified 73.2%, MCP Atlas 84.2% and BrowseComp 91.2% are frontier; capped by a mid GDPval-AA (1524), AA Agentic Index 50.6% and a TB 4.0 collapse to 12.6%.
- **Reasoning: 88/100.** GPQA-Diamond 93.5%, AA-LCR 88.7%, ARC-AGI-1 94.5% and MathVision 94.3% are elite; held back by ARC-AGI-2 60.4%, a low-ish Intelligence Index (43.6), MLCR 38.3% and weak Omniscience (47.6 accuracy / 53.2 hallucination).
- **Context window: 97/100.** 1M input with an unusually large 1M output window and strong AA-LCR (88.7) place it high in the ≥1M tier; no ≥98% MRCR metric reported, so short of 100.
- **Multimodal: 78/100.** Image + document input with excellent scores (CharXiv 91.3, OmniDocBench 91.1, MathVision 94.3), but text+image/document in / text out only — no audio or video — landing mid the +document/PDF band (75–90).
- **Coding: 88/100.** SWE-bench 93.4%, LiveCodeBench 87.2% and AA Coding Index 76.2% are strong; DeepSWE 67.5% (below the 74 ref), FrontierSWE v2 25.9% and sweMarathon 42% keep it mid-80s.
- **Cost efficiency: 60/100.** Paid $3 / $15 per 1M — the $3/$15 ≈60 anchor; $0.30 cached input helps long agent loops. No free tier. Cost is excluded from Overall.
- **Overall Score: 88/100.** Mean of Tool 88, Reasoning 88, Context 97, Multimodal 78, Coding 88 = 87.8 → 88. Best fit: long-document and multimodal-math work where the 1M/1M window and document vision dominate; pair with an audio/video omni model when those modalities are required, and verify Terminal-Bench 4.0 / FrontierSWE regressions before trusting it on the newest agent harnesses.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the Moonshot AI Kimi K3 launch blog, plus Artificial Analysis, Vals AI, ARC Prize, Cursor and OpenHarmony leaderboards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
