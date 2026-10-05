# GPT-5.1 — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's incremental frontier release refining GPT-5 with optimized test-time reasoning latency, enhanced agentic tool calling, and improved instruction adherence for enterprise workflows.
- **Provider / access:** OpenAI API (`gpt-5.1`), ChatGPT, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2025-11-14 release; knowledge cutoff mid-2025.
- **IDs:** `openai/gpt-5.1`. Commercial pay-as-you-go API.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; dynamic reasoning routing.
- **Pricing (as of 2025-11):** $1.25 / 1M input tokens, $10.00 / 1M output tokens ($0.125 / 1M cached prompt read); standard frontier pricing.
- **Architecture:** Unified mixture-of-experts (MoE) system combining fast token generation with dynamic chain-of-thought verification.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.2%** (evals.report / OpenAI Technical Notes, 2025)
- Tau2-Bench: **97.1%** (Telecom)
- GDPval-AA: **1,298** Elo (Artificial Analysis, 2025)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **46.8%**

Reasoning / knowledge:

- GPQA Diamond: **87.5%** (Artificial Analysis, 2025)
- HLE: **28.4%** (Humanity's Last Exam without tools)
- LCR / MLCR: **81.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47.5**
- Omniscience Accuracy / Hallucination Rate: **64% / 78%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.8%** (SWE-bench Verified) / **43.5%** (SWE-bench Pro)
- LiveCodeBench: **85.2%** pass@1
- SciCode / AA-SciCode: **45.2%**
- Vibe Code Bench: **68.0%**

Long context:

- 400K token context window with 128K max output buffer evaluated across multi-file refactoring; 81.2% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination evidenced by 97.1% on Tau2-Bench Telecom and 1,298 Elo on GDPval-AA, capped by 74.2% on Terminal-Bench 2.1.
- **Reasoning: 89/100.** High-level analytical problem solving demonstrated by 87.5% on GPQA Diamond and 47.5 on the AA Intelligence Index.
- **Context window: 80/100.** 400K context window with large 128K output capacity.
- **Multimodal: 80/100.** Competent visual parsing across images, technical diagrams, and document screenshots.
- **Coding: 87/100.** Robust programming performance highlighted by 75.8% on SWE-bench Verified and 85.2% on LiveCodeBench.
- **Cost efficiency: 74/100.** Standard frontier pricing at $1.25 / $10.00 per 1M tokens with prompt caching at $0.125.
- **Overall Score: 84/100.** Reliable frontier point release delivering refined reasoning, fast tool execution, and dependable code generation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI developer updates, Azure AI Foundry documentation, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
