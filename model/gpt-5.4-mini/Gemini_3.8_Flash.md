# GPT-5.4 Mini — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.4-mini`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's high-efficiency lightweight model in the GPT-5.4 family, distilling the core reasoning and coding capabilities of GPT-5.4 into an agile, cost-effective tier engineered for high-volume subagent loops and terminal automation.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`), ChatGPT, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-03-12 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.4-mini`. Commercial pay-as-you-go API.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-03):** $0.75 / 1M input tokens, $4.50 / 1M output tokens ($0.075 / 1M cached input); economical commercial pricing.
- **Architecture:** Compact distilled mixture-of-experts (MoE) transformer trained for high token generation rates and low per-call latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **65.0%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **88.0%**
- GDPval-AA: **1,210** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **43.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.5%** (Artificial Analysis, 2026)
- HLE: **23.0%** (Humanity's Last Exam without tools)
- LCR / MLCR: **76.2%**
- Artificial Analysis Intelligence Index / BenchLM overall: **37.5**
- Omniscience Accuracy / Hallucination Rate: **49% / 81%**

Coding:

- SWE-bench Verified / SWE-Pro: **68.5%** (SWE-bench Verified) / **38.5%** (SWE-bench Pro)
- LiveCodeBench: **75.2%** pass@1
- SciCode / AA-SciCode: **40.5%**
- Vibe Code Bench: **61.5%**

Long context:

- 400K token context window with 128K max output buffer evaluated across multi-file codebases; 76.2% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 70/100.** Capable tool-calling speed and subagent orchestration evidenced by 88.0% on Tau2-Bench and 65.0% on Terminal-Bench 2.1.
- **Reasoning: 74/100.** Solid everyday reasoning performance with 81.5% on GPQA Diamond and 37.5 on the AA Intelligence Index.
- **Context window: 78/100.** 400K context window with large 128K output buffer fits demanding long-context ingestion.
- **Multimodal: 66/100.** Basic-to-intermediate visual understanding across standard charts, diagrams, and UI mockups.
- **Coding: 72/100.** Reliable programming and debugging throughput reflected in 68.5% on SWE-bench Verified and 75.2% on LiveCodeBench.
- **Cost efficiency: 86/100.** Strong cost efficiency at $0.75 / $4.50 per 1M tokens with prompt caching at $0.075.
- **Overall Score: 72/100.** Compact, high-throughput model well suited as a worker agent in automated coding pipelines and multi-agent systems.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical announcements, developer guides, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
