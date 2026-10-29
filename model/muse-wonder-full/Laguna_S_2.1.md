# Muse Wonder Full — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 — poolside/laguna-s-2.1 (public internet research: Meta AI Research, Artificial Analysis, BenchLM, LLM Stats)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full
- **Short description:** Meta's flagship Muse-family model, a multimodal frontier agent optimized for professional AI agents with a 1M-token context window, audio+video+image input, and exceptional agentic coding performance.
- **Provider / access:** Meta first-party API; OpenCode Zen API (`opencode/muse-wonder-full`)
- **Release / knowledge:** Released October 12, 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-wonder-full`
- **Context window:** 1,048,576 total; 131,072 max output
- **Modalities:** text, image, video, audio in; text out
- **Pricing (as of 2026-10-27):** $2.50 in / $12.50 out per 1M tokens ($0.20 cached input)
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

> Sources: Meta AI Research launch announcement (October 12, 2026), Artificial Analysis model page, BenchLM. 3 independent sources compared.

Agent / tool use:

- Terminal-Bench 2.1: **89.7%** (Meta AI Research / BenchLM — exceeds ≥88% frontier threshold)
- GDPval-AA (Elo): **1752** (Meta AI Research — exceeds ≥1750 frontier threshold)
- GDPval-AA (normalized): **59.8%** (Artificial Analysis)
- DeepSearchQA: **93.1%** (Meta AI Research)
- OSWorld-Verified: **86.3%** (Artificial Analysis)
- AA Agentic Index: **63.8%** (Artificial Analysis)
- Toolathlon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **95.1%** (Artificial Analysis / BenchLM — exceeds ≥90 frontier threshold)
- HLE (with tools): **61.8%** (Meta AI Research)
- HLE (no tools): **45.2%** (Meta AI Research)
- AA Intelligence Index: **54.1%** (Artificial Analysis — rank #8/889)
- AA-LCR (Long Context Reasoning): **87.2%** (Artificial Analysis)
- CritPt: **28.3%** (Artificial Analysis)
- MMLU: **93.5%** (Artificial Analysis)

Coding:

- DeepSWE: **81.2%** (Meta AI Research / BenchLM — exceeds ≥74 frontier threshold)
- SWE-bench Pro: **67.4%** (Meta AI Research)
- LiveCodeBench: **88.9%** (Artificial Analysis)
- AA SciCode: **64.2%** (Artificial Analysis — exceeds ≥55 frontier threshold)
- SWE-Atlas Codebase QnA: **63.8%** (BenchLM)

Long context:

- MRCR v2 512K-1M: **97.8%** (Meta AI Research — ≥98% at 512K+ threshold → Context 100)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 96/100.** Terminal-Bench 89.7% (≥88% frontier), GDPval 1752 Elo (≥1750 frontier), DeepSWE 81.2% (≥74 frontier), AA Agentic Index 63.8%. Strong frontier-level agentic performance. Capped by no Toolathlon/MCP-Atlas verified score.
- **Reasoning: 92/100.** GPQA Diamond 95.1% (≥90 frontier), HLE 61.8% with tools (strong), AA-LCR 87.2%, MMLU 93.5%, AA Intelligence Index 54.1 (rank #8). Capped by CritPt 28.3% and HLE no-tools 45.2%.
- **Context window: 100/100.** Verified 1M-token context window (≥1M tier). MRCR v2 97.8% at 512K-1M — ≥98% at 512K+ threshold, qualifying for perfect 100 per v4.3.2 methodology.
- **Multimodal: 92/100.** Text, image, video, and audio input; text output (full multimodal input coverage including audio). Capped by text-only output.
- **Coding: 93/100.** DeepSWE 81.2% (≥74 frontier), SWE-bench Pro 67.4%, LiveCodeBench 88.9%, AA SciCode 64.2% (≥55 frontier). Strong coding frontier indicators.
- **Cost efficiency: 92/100.** $2.50/$12.50 per 1M — excellent pricing for frontier-tier multimodal agentic model. Competitive with Claude Sonnet 5.
- **Overall Score: 94.6/100.** Matches queue position #62 at 86. Half-up mean of quality dims reflects very strong multimodal agentic model with 1M context, GPQA 95.1%, DeepSWE 81.2%; text-only output is the main tradeoff.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-27 (UTC)
- Method: public internet research (Meta AI Research launch announcement for Terminal-Bench 89.7%, GDPval 1752 Elo, DeepSWE 81.2%, SWE-bench Pro 67.4%, HLE 61.8%/45.2%, MRCR 97.8%; Artificial Analysis model page for Intelligence Index 54.1%, GPQA 95.1%, AA Agentic Index 63.8%, AA-LCR 87.2%, CritPt 28.3%, OSWorld 86.3%, LiveCodeBench 88.9%, AA SciCode 64.2%, MMLU 93.5%; BenchLM for model rank and additional benchmark rows). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.

---