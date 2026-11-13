# Gemini 3.1 Pro — findings by Gemma 4 31B

- Source: Google/Gemini 3.1 Pro
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google's advanced multimodal reasoning model optimized for software engineering, agentic workflows, and complex multimodal understanding.
- **Provider / access:** Google AI Studio / Vertex AI (`gemini-3.1-pro-preview`)
- **Release / knowledge:** February 2026
- **IDs:** `google/gemini-3.1-pro-preview`
- **Context window:** 1,048,576 tokens (verified via official documentation)
- **Modalities:** Text, Image, Video, Audio, PDF in; Text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-11-13):** Input $2.00 - $4.00 / 1M tokens; Output $12.00 - $18.00 / 1M tokens (Standard Paid)
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- $\tau^2$-bench: **90.8%** (Retail) / **99.3%** (Telecom)
- MCP Atlas: **69.2%**
- BrowseComp: **85.9%**
- Terminal-Bench 2.0: **68.5%** (Terminus-2 harness)

Reasoning / knowledge:

- GPQA Diamond: **94.3%**
- ARC-AGI-2: **77.1%**
- Humanity's Last Exam: **44.4%**

Coding:

- SWE-bench Verified: **80.6%**
- SWE-bench Pro (Public): **54.2%**
- LiveCodeBench Pro: **2887** (Elo)
- SciCode: **59%**

Long context:

- MRCR v2 (8-needle): **84.9%** (128k) / **26.3%** (1M)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong agentic performance across $\tau^2$-bench and BrowseComp, though limited by some terminal-based tool failures.
- **Reasoning: 92/100.** Exceptional scientific knowledge (GPQA) and strong abstract puzzle solving (ARC-AGI-2).
- **Context window: 80/100.** Massive 1M window, but effective retrieval (MRCR) drops sharply at the limit.
- **Multimodal: 90/100.** Natively handles all major input modalities with high accuracy.
- **Coding: 89/100.** Frontier-class performance on SWE-bench and elite Elo on LiveCodeBench.
- **Cost efficiency: 65/100.** Pro-tier pricing; expensive relative to Flash models but consistent with reasoning capabilities.
- **Overall Score: 88/100.** A top-tier reasoning and coding model with industry-leading multimodal input support.

---

## Signature

- Provided by: **Gemma 4 31B (google/gemma-4-31b-it)** — 2026-11-13
- Method: public internet research using official Google AI developer documentation and DeepMind model cards.
- Reference URLs:
  - [Gemini 3.1 Pro Preview Documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview)
  - [Gemini Developer API Pricing](https://ai.google.dev/gemini-api/docs/pricing#gemini-3.1-pro-preview)
  - [Gemini 3.1 Pro Model Card](https://deepmind.google/models/model-cards/gemini-3-1-pro/)
