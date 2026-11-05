# Qwen 3.7 — findings by Big Pickle

- Source: Alibaba/Qwen 3.7 (`alibaba/qwen-3.7`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Alibaba's Qwen 3.7 family entry, the base name behind the separate `qwen-3.7-max`, `qwen-3.7-plus` and `qwen-3.7-flash` folders. The public Qwen3.7 line is API-only; this report uses published Qwen3.7-Max numbers as the family reference and labels them as such.
- **Provider / access:** Alibaba Cloud DashScope / Model Studio (`qwen3.7-max`); OpenCode Zen-style `alibaba/qwen-3.7` ID. Chat Completions-compatible API.
- **Release / knowledge:** Qwen3.7-Max published 2026; knowledge cutoff not published.
- **IDs:** `alibaba/qwen-3.7` (family entry; no Free ID on Zen)
- **Context window:** 1,048,576 input for the Qwen3.7-Max flagship (vendor card); `meta.json` still carries the older "128K total" placeholder. Output cap not published.
- **Modalities:** text in / text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-05):** Qwen3.7-Max $1.25/$3.75 per 1M in/out; Plus and Flash tiers are cheaper
- **Architecture:** proprietary (Alibaba); no parameter count published for the hosted tiers

### Raw benchmarks found

> Numbers below are for **Qwen3.7-Max**, the only tier with a published evaluation suite.

Agent / tool use:

- Terminal-Bench 2.0: **69.7%** (BenchLM)
- QwenClawBench: **64.3** (BenchLM)
- Claw-Eval: **65.2** (BenchLM)
- BFCL v4: **75.0** (BenchLM)
- MCP Atlas: **76.4** (BenchLM)
- Tau2-Bench (AA): **94.7%** (Artificial Analysis)
- GDPval-AA: **1190 Elo** (Artificial Analysis)
- Toolathlon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (BenchLM)
- HLE: **41.4%** (BenchLM)
- AA-LCR: **79.0%** (Artificial Analysis)
- CritPt: **13.4%** (BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: **29.5 / 62.42 (#46 of 1014)**
- Omniscience Accuracy / Hallucination Rate: **31.1% / 25.6%** (BenchLM)
- IFBench: **79.1** (BenchLM)
- MRCRv2: **90.4** (BenchLM)

Coding:

- SWE-bench Verified: **80.4%** (BenchLM); **68.8%** on the independent Vals harness
- SWE-bench Pro: **60.6%** (BenchLM)
- SWE Multilingual: **78.3%** (BenchLM)
- SciCode: **53.5%** (BenchLM)
- LiveCodeBench v6: **91.6%** (BenchLM)
- AA Coding Index: **66.0** (Artificial Analysis)
- Terminal-Bench 2.1: **61.0%** (Vals AI)
- Vals Index: **57.29 (#5)** (Vals AI)

Long context:

- MRCRv2 90.4 and AA-LCR 79.0% reported against the 1M window; no GraphWalks curve published.

### Normalized scores (1-100)

- **Tool use: 84/100.** Tau2-Bench 94.7%, MCP Atlas 76.4, BFCL v4 75.0 and Terminal-Bench 2.0 69.7% are strong; GDPval-AA 1190 trails the closed frontier and Toolathlon is missing.
- **Reasoning: 88/100.** GPQA 92.4%, MRCRv2 90.4 and AA-LCR 79.0% are excellent; HLE 41.4% and CritPt 13.4% show the ceiling on the hardest reasoning sets.
- **Context window: 96/100.** The Qwen3.7-Max flagship ships a verified 1M window with 79.0% AA-LCR retrieval; the 128K figure in `meta.json` is a stale placeholder.
- **Multimodal: 15/100.** Text-only input and output; no vision, audio or video.
- **Coding: 86/100.** SWE-bench Verified 80.4% (68.8% on Vals), LiveCodeBench v6 91.6% and AA Coding 66.0 are top-decile; SWE-bench Pro 60.6% and the Vals gap keep it off 90+.
- **Cost efficiency: 84/100.** $1.25/$3.75 per 1M for flagship-class coding is aggressive pricing, though the cheaper Plus/Flash tiers are what most volume users will actually run.
- **Overall Score: 74/100.** Mean of (84+88+96+15+86)/5 = 73.8, rounded to 74. Best fit: high-volume agentic coding and 1M-context document work where text-only input is acceptable; pick a multimodal sibling when images are in scope.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public internet research (Alibaba Qwen release material, BenchLM, Artificial Analysis, Vals AI); scores are normalized 1-100 interpretations, not official vendor scores. Benchmarks are Qwen3.7-Max, the only tier with published numbers.
- Reference URLs:
  - [Qwen — official site](https://qwenlm.github.io/)
  - [BenchLM — Qwen3.7-Max](https://benchlm.ai/models/qwen-3-7-max)
  - [Artificial Analysis — Qwen3.7-Max](https://artificialanalysis.ai/models/qwen3-7-max)
  - [Vals AI — Qwen3.7-Max](https://www.vals.ai/models/alibaba_qwen3-7-max)
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_2.md`, using the same headings.
