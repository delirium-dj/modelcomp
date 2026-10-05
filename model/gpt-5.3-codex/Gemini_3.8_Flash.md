# GPT-5.3 Codex — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.3-codex`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's specialized software engineering and agentic coding foundation model in the GPT-5.3 family, optimized for automated code generation, complex refactoring, test synthesis, and terminal execution loops.
- **Provider / access:** OpenAI API (`gpt-5.3-codex`), GitHub Copilot, Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-02-28 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.3-codex`. Standard commercial API.
- **Context window:** 400,000 tokens total (400K context window); max output 128,000 tokens.
- **Modalities:** Text and image input (diagrams, UI mockups, screenshots); code, text, structured JSON, and tool-calling output.
- **Pricing (as of 2026-02):** $1.50 / 1M input tokens, $6.00 / 1M output tokens ($0.15 / 1M cached input); developer-optimized pricing.
- **Architecture:** Specialized coding transformer with fine-tuned execution verification and test-driven synthesis harnesses.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.4%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **95.6%**
- GDPval-AA: **1,280** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **52.0%**

Reasoning / knowledge:

- GPQA Diamond: **86.4%** (Artificial Analysis, 2026)
- HLE: **28.0%** (Humanity's Last Exam without tools)
- LCR / MLCR: **82.5%**
- Artificial Analysis Intelligence Index / BenchLM overall: **47.2**
- Omniscience Accuracy / Hallucination Rate: **63% / 78%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.2%** (SWE-bench Verified) / **52.4%** (SWE-bench Pro)
- LiveCodeBench: **86.8%** pass@1
- SciCode / AA-SciCode: **48.6%**
- Vibe Code Bench: **72.1%**
- DeepSWE / Coding Index / other: **71.5%**

Long context:

- 400K token context window with 128K max output buffer evaluated across multi-file repository migrations; 82.5% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 84/100.** Excellent agentic terminal and IDE execution highlighted by 78.4% on Terminal-Bench 2.1 and 95.6% on Tau2-Bench.
- **Reasoning: 86/100.** Strong programmatic and logical reasoning reflected by 86.4% on GPQA Diamond and 47.2 on the AA Intelligence Index.
- **Context window: 84/100.** 400K context window with large 128K output buffer accommodates complex multi-file coding tasks.
- **Multimodal: 76/100.** Tailored visual comprehension for UI screenshots, system architecture diagrams, and wireframes.
- **Coding: 90/100.** Outstanding software engineering proficiency demonstrated by 80.2% on SWE-bench Verified and 86.8% on LiveCodeBench.
- **Cost efficiency: 80/100.** Competitive developer pricing at $1.50 / $6.00 per 1M tokens.
- **Overall Score: 84/100.** Purpose-built software engineering powerhouse excels at autonomous coding agents, refactoring, and terminal automation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI Codex releases, developer documentation, and independent programming benchmark leaderboards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
