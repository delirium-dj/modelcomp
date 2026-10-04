# GPT-5.4 Pro — findings by Gemini 3.8 Flash

- Source: OpenAI / GPT (`openai/gpt-5.4-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's high-tier enterprise foundation model situated between GPT-5.4 and GPT-5.5, engineered for high-precision autonomous code refactoring, mathematical proofs, and complex agentic reasoning.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`), Microsoft Azure AI Foundry.
- **Release / knowledge:** 2026-03-12 release; knowledge cutoff early 2026.
- **IDs:** `openai/gpt-5.4-pro`. No Zen Free tier available.
- **Context window:** 500,000 tokens total (500K context window); max output 128,000 tokens.
- **Modalities:** Text, image, and PDF input; text, code, structured JSON, and tool-calling output; multi-tier reasoning.
- **Pricing (as of 2026-03):** $6.00 / 1M input tokens, $24.00 / 1M output tokens ($0.60 / 1M cached input); commercial API.
- **Architecture:** Proprietary dense-MoE hybrid transformer with extended test-time reasoning search.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **75.8%** (evals.report / OpenAI Technical Notes, 2026)
- Tau2-Bench: **94.8%**
- GDPval-AA: **1,295** Elo (Artificial Analysis, 2026)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **53.5%**

Reasoning / knowledge:

- GPQA Diamond: **92.1%** (Artificial Analysis, 2026)
- HLE: **38.6%** (Humanity's Last Exam without tools)
- LCR / MLCR: **83.1%**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.4**
- Omniscience Accuracy / Hallucination Rate: **56% / 82%**

Coding:

- SWE-bench Verified / SWE-Pro: **80.5%** (SWE-bench Verified) / **54.2%** (SWE-bench Pro)
- LiveCodeBench: **84.8%** pass@1
- SciCode / AA-SciCode: **53.2%**
- Vibe Code Bench: **69.5%**

Long context:

- 500K token context window with 128K max output buffer evaluated across large codebase migrations; 83.1% AA-LCR long-context retention.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination and shell environment execution with 75.8% on Terminal-Bench 2.1 and 1,295 Elo on GDPval-AA.
- **Reasoning: 91/100.** Excellent competition-grade reasoning demonstrated by 92.1% on GPQA Diamond, 38.6% on HLE, and 57.4 on the AA Intelligence Index.
- **Context window: 88/100.** 500K context window with expansive 128K output buffer fits upper-tier long-context workflows.
- **Multimodal: 80/100.** Solid visual comprehension across diagrams, user interfaces, and documents; text, image, and PDF ingestion.
- **Coding: 87/100.** High-level autonomous software engineering reflected by 80.5% on SWE-bench Verified and 84.8% on LiveCodeBench.
- **Cost efficiency: 58/100.** Commercial enterprise pricing at $6.00 / $24.00 per 1M tokens balances compute power against cost.
- **Overall Score: 86/100.** Robust high-capacity reasoning model capable of demanding software development and analytical tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-03
- Method: Public internet research into OpenAI technical releases, Azure AI Foundry documentation, and Artificial Analysis benchmark evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
