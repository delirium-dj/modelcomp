# GPT-5.2-Pro — findings by Gemini 3.8 Flash

- Source: OpenAI (`openai/gpt-5.2-pro`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Pro
- **Short description:** OpenAI's maximum-compute flagship reasoning model designed for mission-critical knowledge work, breakthrough scientific deduction, and complex mathematical problem solving.
- **Provider / access:** OpenAI API (`gpt-5.2-pro`), Microsoft Azure OpenAI, ChatGPT Pro subscription.
- **Release / knowledge:** 2026 release; knowledge cutoff late 2025.
- **IDs:** `openai/gpt-5.2-pro`, `opencode/gpt-5.2-pro`
- **Context window:** 400,000 tokens total (400K context window; up to 128,000 max output tokens).
- **Modalities:** Text and image input; text, code, structured JSON, tool-calling output; deep extended thinking with configurable effort levels.
- **Pricing (as of 2026-10-22):** $21.00 / 1M input tokens, $168.00 / 1M output tokens ($2.10 prompt cache read); premium high-compute tier.
- **Architecture:** Frontier multimodal reasoning architecture leveraging massive test-time compute scaling and multi-step verification.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.9%** (autonomous deep research)
- GDPval: **74.1%** (professional workplace occupational tasks wins/ties)
- Terminal-Bench: **42.0%**
- Tau-Bench Retail: **88.4%**

Reasoning / knowledge:

- ARC-AGI-1: **90.5%** (first model crossing 90% threshold in abstract reasoning)
- ARC-AGI-2: **54.2%**
- GPQA Diamond: **93.2%** (zero-shot, no tools)
- AIME 2025 / HMMT: **100.0%**
- Humanity's Last Exam (HLE): **48.5%** (with extended thinking)

Coding:

- SWE-bench Verified: **74.5%**
- LiveCodeBench: **86.2%**
- HumanEval: **96.8%**

Long context / vision:

- 400,000 token context window with 128K max output buffer; exceptional multi-document synthesis and long-horizon reasoning fidelity.

### Normalized scores (1–100)

- **Tool use: 86/100.** Premier autonomous research and information synthesis evidenced by 77.9% on BrowseComp, 74.1% on GDPval, and 88.4% on Tau-Bench Retail.
- **Reasoning: 98/100.** World-class logical, abstract, and scientific deduction demonstrated by 90.5% on ARC-AGI-1, 100.0% on AIME 2025, and 93.2% on GPQA Diamond.
- **Context window: 92/100.** 400K context window natively supported with 128K output buffer for comprehensive cross-document analysis.
- **Multimodal: 75/100.** High-fidelity visual reasoning across complex scientific diagrams, figures, and charts; text + image in, text out.
- **Coding: 89/100.** Excellent software architecture and algorithmic programming evidenced by 86.2% on LiveCodeBench and 74.5% on SWE-bench Verified.
- **Cost efficiency: 25/100.** Premium enterprise pricing at $21.00 / $168.00 per 1M tokens reflecting intensive test-time compute allocation.
- **Overall Score: 88/100.** Arithmetic mean of five quality dimensions: (86 + 98 + 92 + 75 + 89) / 5 = 88.0 → 88. Frontier high-compute reasoning titan delivering state-of-the-art abstract problem solving and scientific analysis.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, OpenAI technical briefings, independent ARC Prize evaluations, and benchmark tracking; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
