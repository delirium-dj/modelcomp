# GPT-5.4 Mini — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.4-mini`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's high-efficiency lightweight model in the GPT-5.4 family, distilling the core reasoning and coding capabilities into an agile tier running >2x faster than previous mini models for automated agentic loops and terminal tasks.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`), ChatGPT, Microsoft Azure AI Foundry, and [OpenRouter](https://openrouter.ai/models/openai/gpt-5.4-mini).
- **Release / knowledge:** 2026-03-17 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-11):** $0.75 / 1M input tokens, $4.50 / 1M output tokens ($0.075 / 1M cached input) ([OpenAI Pricing](https://openai.com/api/pricing/)).
- **Architecture:** Compact distilled Mixture-of-Experts (MoE) transformer optimized for low-latency inference and high token generation rates.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.0: **60.0%** ([OpenAI Release](https://openai.com))
- Toolathlon: **42.9%**
- OSWorld-Verified: **72.1%**
- Tau2-Bench: **88.0%**
- Artificial Analysis Agentic Index: **17.9**

Reasoning / knowledge:
- GPQA Diamond: **88.0%** (OpenAI release notes)
- Artificial Analysis Intelligence Index: **24.1** ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-mini))
- Humanity's Last Exam (HLE without tools): **23.0%**
- LCR / MLCR: **76.2%**

Coding:
- SWE-bench Pro: **54.4%** ([OpenAI Technical Report](https://openai.com))
- SWE-bench Verified: **68.5%**
- Artificial Analysis Coding Index: **56.1**
- LiveCodeBench: **75.2%** pass@1

Long context:
- 400K-token context window with 128K max output buffer evaluated across multi-file codebases; 76.2% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 70/100.** Capable tool-calling speed and subagent orchestration evidenced by 60.0% on Terminal-Bench 2.0, 72.1% on OSWorld-Verified, and 88.0% on Tau2-Bench.
- **Reasoning: 74/100.** Solid everyday reasoning performance with 88.0% on GPQA Diamond and 24.1 on the AA Intelligence Index.
- **Context window: 78/100.** 400K context window with large 128K output buffer fits demanding long-context ingestion.
- **Multimodal: 66/100.** Basic-to-intermediate visual understanding across standard charts, diagrams, and UI mockups; text-only output.
- **Coding: 72/100.** Reliable programming and debugging throughput reflected in 54.4% on SWE-bench Pro, 68.5% on SWE-bench Verified, and 75.2% on LiveCodeBench.
- **Cost efficiency: 86/100.** Strong cost efficiency at $0.75 / $4.50 per 1M tokens with prompt caching at $0.075.
- **Overall Score: 72/100.** Arithmetic mean of five quality dimensions: (70 + 74 + 78 + 66 + 72) / 5 = 72. Compact, high-throughput model well suited as a worker agent in automated coding pipelines and multi-agent systems.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public internet research into OpenAI technical announcements, Artificial Analysis evaluations, and OpenRouter model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
