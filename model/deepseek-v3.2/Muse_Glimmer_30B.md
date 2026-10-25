# DeepSeek-V3.2 — findings by Muse Glimmer 30B

- Source: DeepSeek / DeepSeek-V3.2
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek-V3.2
- **Short description:** DeepSeek open-weight MoE released 2025-12-01 that adds DeepSeek Sparse Attention for long-context efficiency and integrates reasoning with tool use; text-only flagship superseded by the V4 line.
- **Provider / access:** DeepSeek API / Hugging Face `deepseek-ai/DeepSeek-V3.2`; Chat Completions API. Open weights MIT, self-hostable.
- **Release / knowledge:** 2025-12-01 official release; knowledge cutoff not publicly disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V3.2`
- **Context window:** 128K tokens total native per DeepSeek technical report and GitHub V3.2-Exp documentation; many third-party hosts report 163,840–164,000 tokens — conflict noted, no independent retrieval curve verified.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes in both thinking and non-thinking modes, JSON mode supported. No image/audio/video.
- **Pricing (as of 2026-10-25):** Official V3.2 API pricing no longer listed on DeepSeek docs; community hosts quote ≈$0.21 / 1M input and $0.31 / 1M output with cached input ≈$0.022. Open weights free to self-host under MIT.
- **Architecture:** MoE, 685B total parameters / 37B active per Hugging Face listing; DeepSeek Sparse Attention (DSA) and Multi-Token Prediction; MIT open weights.

### Raw benchmarks found

> Sources: DeepSeek official news 2025-12-01, DeepSeek-V3.2-Exp GitHub README benchmark table, Hugging Face model page evaluation results.

Agent / tool use:

- Terminal-Bench: **37.7%** — DeepSeek-V3.2-Exp GitHub README benchmark table vs V3.1-Terminus
- BrowseComp: **40.1%** — DeepSeek-V3.2-Exp GitHub README; BrowseComp-zh **47.9%**
- SWE Verified: **67.8%** — DeepSeek-V3.2-Exp GitHub README
- SWE-bench Multilingual: **57.9%** — DeepSeek-V3.2-Exp GitHub README
- SimpleQA: **97.1%** — DeepSeek-V3.2-Exp GitHub README
- Terminal-Bench 2.0: **39.6%*** — Hugging Face evaluation results
- SWE-bench Verified: **70*** — Hugging Face evaluation results
- SWE-bench Pro: **15.56** — Hugging Face evaluation results

Reasoning / knowledge:

- MMLU-Pro: **85.0%** — DeepSeek-V3.2-Exp GitHub README
- GPQA Diamond: **79.9%** Exp table; **82.4** on Hugging Face evaluation results
- Humanity's Last Exam: **19.8%** — DeepSeek-V3.2-Exp GitHub README
- AIME 2025: **89.3%** — DeepSeek-V3.2-Exp GitHub README
- LiveCodeBench: **74.1%** — DeepSeek-V3.2-Exp GitHub README
- HLE: **19.8%** — same as Humanity's Last Exam above

Coding:

- LiveCodeBench: **74.1%** — DeepSeek-V3.2-Exp GitHub README
- SWE Verified: **67.8%** — DeepSeek-V3.2-Exp GitHub README
- SWE-bench Multilingual: **57.9%** — DeepSeek-V3.2-Exp GitHub README
- SWE-bench Verified: **70*** — Hugging Face evaluation results
- SWE-bench Pro: **15.56** — Hugging Face evaluation results

Long context:

- Native 128K window declared in technical report; DeepSeek Sparse Attention designed for long-context efficiency. No verified public MRCR / RULER / GraphWalks or needle-retrieval score found for the V3.2 ID.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 37.7% and BrowseComp 40.1% show usable agentic tool use with thinking+tools integration; capped by modest Terminal-Bench scores and lack of independent Claw/Toolathon numbers.
- **Reasoning: 84/100.** MMLU-Pro 85.0%, GPQA Diamond ~80-82%, AIME 2025 89.3% indicate GPT-5-class reasoning per vendor claim; Humanity's Last Exam 19.8% caps the score.
- **Context window: 62/100.** 128K native window lands in 100K–200K tier; third-party 164K reports conflict. No public retrieval benchmark verifies DSA quality.
- **Multimodal: 15/100.** Text in/out only; no vision/audio.
- **Coding: 72/100.** LiveCodeBench 74.1% and SWE Verified 67.8% support solid coding; lack of LiveCodeBench recent split and low SWE-bench Pro 15.56 caps score.
- **Cost efficiency: 88/100.** Open weights MIT + community host pricing ≈$0.21/$0.31 per 1M with strong cache discount; among cheapest frontier-scale rates.
- **Overall Score: 59/100.** Mean of five quality dims (62+84+62+15+72)/5 = 59.0 → 59. Best-fit: cheap open-weight text coding/reasoning agent with reasoning+tool integration, superseded on context length by V4.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
