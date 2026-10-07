# GPT 6.1 Sol — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-6.1-sol`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6.1 Sol
- **Short description:** OpenAI's speed-optimized balanced frontier model in the GPT 6 series, combining low-latency generation with strong test-time reasoning, 500K context window, and reliable tool calling.
- **Provider / access:** OpenAI API (`gpt-6.1-sol`), ChatGPT Enterprise, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-07-20 release; knowledge cutoff mid-2026.
- **IDs:** `openai/gpt-6.1-sol`. Standard commercial API.
- **Context window:** 500,000 tokens total (500K context window); max output 65,536 tokens.
- **Modalities:** Text and image input; text, code, structured JSON, and tool-calling output; dynamic reasoning routing.
- **Pricing (as of 2026-07):** $2.50 / 1M input tokens, $10.00 / 1M output tokens ($0.25 / 1M cached prompt tokens); balanced commercial pricing.
- **Architecture:** Next-generation sparse MoE foundation system tuned for low-latency interactive workflows and tool execution loops.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **72.5%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **93.4%**
- GDPval-AA: **1,265** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **50.5%**

Reasoning / knowledge:

- GPQA Diamond: **86.0%** (Artificial Analysis, 2026)
- HLE: **31.2%** (Humanity's Last Exam without tools)
- LCR / MLCR: **82.0%**
- Artificial Analysis Intelligence Index / BenchLM overall: **51.5**
- Omniscience Accuracy / Hallucination Rate: **58% / 77%**

Coding:

- SWE-bench Verified / SWE-Pro: **75.4%** (SWE-bench Verified) / **47.2%** (SWE-bench Pro)
- LiveCodeBench: **81.0%** pass@1
- SciCode / AA-SciCode: **48.0%**
- Vibe Code Bench: **68.2%**

Long context:

- 500K token context window with 65K max output buffer evaluated across multi-file refactoring; 82.0% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic tool interaction evidenced by 93.4% on Tau2-Bench and 1,265 Elo on GDPval-AA, capped by 72.5% on Terminal-Bench 2.1.
- **Reasoning: 83/100.** Strong analytical reasoning reflected by 86.0% on GPQA Diamond, 31.2% on HLE, and 51.5 on the AA Intelligence Index.
- **Context window: 85/100.** 500K context window with substantial output capacity for extensive prompt processing.
- **Multimodal: 76/100.** Competent visual parsing across charts, user interfaces, and architectural diagrams.
- **Coding: 78/100.** Capable software development demonstrated by 75.4% on SWE-bench Verified and 81.0% on LiveCodeBench.
- **Cost efficiency: 72/100.** Balanced commercial pricing at $2.50 / $10.00 per 1M tokens.
- **Overall Score: 80/100.** Agile, high-throughput frontier model balancing reasoning depth, response speed, and broad tool integration.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical announcements, developer changelogs, and Artificial Analysis evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
