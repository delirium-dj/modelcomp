# Qwen 3.5 9B — findings by DeepSeek 4 Flash

- Source: Alibaba/Qwen3.5-9B
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's small open-weights 9B dense model from the Qwen3.5 generation; strong math and multimodal OCR for its size, with good tool-calling but weak long-horizon coding/agentic ability.
- **Provider / access:** open weights (`qwen/qwen3.5-9b`); self-host or third-party API.
- **Release / knowledge:** 2026-03-10.
- **IDs:** `qwen/qwen3.5-9b`; `qwen3.5-9b-20260310`
- **Context window:** 128K — per curated provider metadata (native model family commonly lists 262K; not independently verified here).
- **Modalities:** text and image in (MMBench/OCRBench/VideoMMMU); text out; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.10 in / $0.15 out per 1M on hosted routes.
- **Architecture:** open-weight 9B dense.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench Telecom: **86.8%**; BFCL-v4 **66.1%**; GDPval-AA **645 Elo**
- Terminal-Bench 2.1 **29.2%**; Terminal-Bench Hard **24.2%**; Tau3-Banking **8.2%**
- DeepPlanning 18%; ProactBench 48%; RuVerBench 88.1%

Reasoning / knowledge:

- GPQA Diamond: **80.6%**; HLE **14.9%**; AA Intelligence Index **21.8**; AIIQ Composite IQ **93**
- AIME 2026 **92.5%**; HMMT 2025 **83.2%**; MMLU-Redux **91.1%**; MMLU-ProX **76.3%**
- IFBench **64.5%**; AA-LCR **65.3%**

Coding:

- SciCode: **27.7%**; Terminal-Bench 2.1 **29.2%**; Android Bench **15.5%**

Multimodal:

- MMBench-EN: **90.1**; MMLU... VideoMMMU **78.9%**; OCRBench v2 **64.1**; RealWorldQA **80.3**
- ScienceQA-style AI2D **90.2**

Long context:

- AA-LCR 65.3% at 128K configured window

### Normalized scores (1–100)

- **Tool use: 62/100.** Tau2 Telecom 86.8% and BFCL-v4 66.1% are strong; TB2.1 29.2% and Tau3 8.2% cap long-horizon agentics.
- **Reasoning: 75/100.** GPQA 80.6% and AIME 2026 92.5% are excellent for 9B; HLE 14.9% and Index 21.8 keep it mid.
- **Context window: 58/100.** 128K configured window (100K–200K tier).
- **Multimodal: 65/100.** Image input with MMBench 90.1 and OCRBench 64.1; text-only output.
- **Coding: 45/100.** SciCode 27.7% and TB2.1 29.2% are modest; no SWE-bench number found.
- **Cost efficiency: 98/100.** $0.10/$0.15 per 1M is near-free for a 9B.
- **Overall Score: 61/100.** Mean of (62 + 75 + 58 + 65 + 45) / 5 = 61.0 → 61. Best-fit: cheap local/hosted math, OCR and short tool-calling tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, Qwen model family data, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
