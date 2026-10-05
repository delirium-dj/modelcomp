# GPT-5.2 — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's early-2026 update to the GPT-5 foundation architecture, introducing strengthened multi-step agentic planning, reduced hallucination on technical retrieval, and enhanced coding consistency.
- **Provider / access:** OpenAI API (`gpt-5.2`), ChatGPT, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-01-22 release; knowledge cutoff late 2025.
- **IDs:** `openai/gpt-5.2`. Commercial pay-as-you-go API.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; dynamic reasoning routing.
- **Pricing (as of 2026-01):** $1.25 / 1M input tokens, $10.00 / 1M output tokens ($0.125 / 1M cached prompt read); standard frontier pricing.
- **Architecture:** Unified mixture-of-experts (MoE) transformer system featuring integrated chain-of-thought routing and tool-execution loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.8%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **97.4%** (Telecom)
- GDPval-AA: **1,302** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **48.1%**

Reasoning / knowledge:

- GPQA Diamond: **88.2%** (Artificial Analysis, 2026)
- HLE: **29.5%** (Humanity's Last Exam without tools)
- LCR / MLCR: **81.8%**
- Artificial Analysis Intelligence Index / BenchLM overall: **48.6**
- Omniscience Accuracy / Hallucination Rate: **65% / 76%**

Coding:

- SWE-bench Verified / SWE-Pro: **76.5%** (SWE-bench Verified) / **44.8%** (SWE-bench Pro)
- LiveCodeBench: **85.5%** pass@1
- SciCode / AA-SciCode: **46.0%**
- Vibe Code Bench: **68.4%**

Long context:

- 400K token context window with 128K max output buffer evaluated across multi-file refactoring; 81.8% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination evidenced by 97.4% on Tau2-Bench Telecom and 1,302 Elo on GDPval-AA, capped by 74.8% on Terminal-Bench 2.1.
- **Reasoning: 89/100.** High-level analytical problem solving demonstrated by 88.2% on GPQA Diamond and 48.6 on the AA Intelligence Index.
- **Context window: 80/100.** 400K context window with large 128K output capacity.
- **Multimodal: 80/100.** Competent visual parsing across images, technical diagrams, and document screenshots.
- **Coding: 87/100.** Robust programming performance highlighted by 76.5% on SWE-bench Verified and 85.5% on LiveCodeBench.
- **Cost efficiency: 74/100.** Standard frontier pricing at $1.25 / $10.00 per 1M tokens with prompt caching at $0.125.
- **Overall Score: 84/100.** Dependable frontier system delivering disciplined multi-step tool execution, strong reasoning, and solid software engineering.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical announcements, developer changelogs, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
