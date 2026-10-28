# Muse Wonder 1.0 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 — poolside/laguna-s-2.1 (public internet research: Artificial Analysis, BenchLM, Meta AI Research, LLM Stats)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder 1.0
- **Short description:** Meta's 2026-10-12 Muse-family frontier agent model, the latest addition to the Muse frontier series; proprietary, reasoning always on, positioned for personal and professional AI agents with a 1M-token context window and audio+multimodal input.
- **Provider / access:** Meta first-party API; OpenCode Zen API (`opencode/muse-wonder-1.0`)
- **Release / knowledge:** Released October 12, 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-wonder-1.0`
- **Context window:** 1,048,576 total; 131,072 max output
- **Modalities:** text, image, video, audio in; text out
- **Pricing (as of 2026-10-27):** $4.00 in / $20.00 out per 1M tokens; $0.20 cached input. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Sources: Artificial Analysis model page (`https://artificialanalysis.ai/models/muse-wonder-1.0`), BenchLM (`https://benchlm.ai/models/muse-wonder-1.0`), Meta AI Research launch announcement (October 12, 2026). 3 independent sources compared.

Agent / tool use:

- Terminal-Bench 2.1: **90.1%** (BenchLM / Artificial Analysis — meets ≥88% frontier threshold)
- GDPval-AA (Elo): **1784** (Meta AI Research launch / BenchLM — exceeds ≥1750 frontier threshold)
- GDPval-AA (normalized): **60.5%** (Artificial Analysis)
- DeepSearchQA: **91.2%** (Meta AI Research)
- OSWorld-Verified: **84.7%** (Artificial Analysis)
- AA Agentic Index: **61.2%** (Artificial Analysis)
- Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Artificial Analysis / BenchLM — exceeds ≥90 frontier threshold)
- HLE (with tools): **60.1%** (Meta AI Research)
- HLE (no tools): **44.8%** (Meta AI Research)
- AA Intelligence Index: **52.4%** (Artificial Analysis — rank #12/889)
- AA-LCR (Long Context Reasoning): **86.4%** (Artificial Analysis)
- CritPt: **26.1%** (Artificial Analysis)
- MMLU: **92.8%** (Artificial Analysis)

Coding:

- DeepSWE: **77.8%** (Meta AI Research / BenchLM — exceeds ≥74 frontier threshold)
- SWE-bench Pro: **65.8%** (Meta AI Research)
- LiveCodeBench: **85.3%** (Artificial Analysis)
- AA SciCode: **62.1%** (Artificial Analysis)
- SWE-Atlas Codebase QnA: **61.5%** (BenchLM)

Long context:

- MRCR v2 512K-1M: **98.4%** (Meta AI Research — ≥98% at 512K+ threshold → Context 100)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 95/100.** TB-2.1 90.1% (≥88% frontier), GDPval 1784 Elo (≥1750 frontier), AA Agentic Index 61.2%. Strong frontier-level agentic performance across multiple harnesses. Capped by no SWE-bench Verified/LiveCodeBenchmark for exact ID, Toolathlon/MCP-Atlas no score.
- **Reasoning: 88/100.** GPQA Diamond 94.2% (≥90 frontier), HLE 60.1% with tools (above 40% frontier), AA-LCR 86.4%, MMLU 92.8%, AA Intelligence Index 52.4. Capped by CritPt 26.1% and HLE no-tools 44.8%, plus v4.3.2 methodology pool growth from 230 to 954 models compressing index.
- **Context window: 100/100.** Verified 1M-token context window (≥1M tier). MRCR v2 512K-1M at 98.4% — ≥98% at 512K+ threshold, qualifying for perfect 100 per methodology v4.
- **Multimodal: 90/100.** Text, image, video and audio input; text output (full multimodal input coverage, audio included). Capped by text-only output.
- **Coding: 90/100.** DeepSWE 77.8% (≥74 frontier), SWE-bench Pro 65.8%, LiveCodeBench 85.3%, AA SciCode 62.1% (≥55 frontier). Multiple coding frontier indicators. Capped by no SWE-bench Verified published for exact ID.
- **Cost efficiency: 75/100.** $4.00/$20.00 per 1M — premium pricing. Capped by high cost relative to alternatives.
- **Overall Score: 92.6/100.** Half-up mean of five quality dims: (95+88+100+90+90)/5 = 92.6 → 93. Strong frontier multimodal agentic model with 1M context, GPQA 94.2%, DeepSWE 77.8%; premium pricing is the tradeoff. Best-fit: professional AI agents requiring multimodal input and long-horizon reasoning.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-27 (UTC)
- Method: public internet research (Artificial Analysis model page for Intelligence Index 52.4, GPQA 94.2%, GDPval-AA normalized 60.5%, aaTB21 90.1%, GDP.pdf, AA Agentic Index 61.2%, AA ITBench, AA-LCR 86.4%, CritPt 26.1%, OSWorld 84.7%; Meta AI Research launch announcement for TB-2.1 90.1%, DeepSWE 77.8%, SWE-bench Pro 65.8%, LiveCodeBench, HLE 60.1%/44.8%, MRCR 98.4%; BenchLM for model rank and additional benchmark rows). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.

---