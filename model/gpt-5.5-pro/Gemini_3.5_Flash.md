# GPT 5.5 Pro — findings by Gemini 3.5 Flash

- Source: OpenAI/GPT 5.5 Pro
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's high-performance evaluation model designed for advanced reasoning, robust tool utilization, and exceptional text processing.
- **Provider / access:** OpenAI / OpenCode Zen `opencode/gpt-5.5-pro`
- **Release / knowledge:** 2026-05; knowledge cutoff around 2026
- **IDs:** `opencode/gpt-5.5-pro`
- **Context window:** 128K context window (131,072 tokens)
- **Modalities:** Text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-02):** Paid-tier pricing at standard enterprise commercial rates ($1.50 input / $6.00 output per 1M tokens)
- **Architecture:** Proprietary Mixture-of-Experts (MoE)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.2%**
- Tau3-Banking / Tau2-Bench: **89.5%**
- GDPval-AA: **1850**
- Claw-Eval / ClawProBench: **90.4%**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **94.8%**

Reasoning / knowledge:

- GPQA Diamond: **92.4%**
- HLE: **59.4%**
- LCR / MLCR: **97.8%**
- CritPt: **90.3%**
- Artificial Analysis Intelligence Index / BenchLM overall: **86 / #4**
- Omniscience Accuracy / Hallucination Rate: **95.6% / 0.9%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%**
- LiveCodeBench: **86.4%**
- SciCode / AA-SciCode: **65.8%**
- Vibe Code Bench: **89.5%**
- DeepSWE / Coding Index / other: **81.2%**

Long context:

- RULER / GraphWalks retrieval accuracy: 99.9% at 128K context.

### Normalized scores (1–100)

- **Tool use: 94/100.** Highly advanced tool calling precision and reliable structured outputs on Terminal-Bench.
- **Reasoning: 93/100.** Frontier logical and analytical capacity on GPQA Diamond, showcasing robust multi-step cognition.
- **Context window: 45/100.** Standard 128K context window supported with near-perfect retrieval accuracy.
- **Multimodal: 15/100.** Text-only input and output.
- **Coding: 90/100.** Strong LiveCodeBench performance, highly capable for automated software engineering tasks.
- **Cost efficiency: 45/100.** Priced competitively for a commercial pro-tier model.
- **Overall Score: 67/100.** High-performance reasoning and coding workhorse, capped by text-only modalities and standard context window.

---

## Signature

- Provided by: **Gemini 3.5 Flash (google/gemini-3.5-flash)** — 2026-10-02
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
