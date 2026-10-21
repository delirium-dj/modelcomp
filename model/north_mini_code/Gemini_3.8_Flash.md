# North Mini Code — findings by Gemini 3.8 Flash

- Source: Cohere/North Mini Code (`cohere/north-mini-code`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code
- **Short description:** Cohere's open-weights 30B parameter sparse Mixture-of-Experts coding model (activating 3B parameters per token) under Apache 2.0 license, engineered for low-latency agentic loops, terminal execution, and repository-wide code refactoring.
- **Provider / access:** Cohere API (`north-mini-code`), OpenCode Zen Free tier (`opencode/north_mini_code`), OpenRouter, and open weights on Hugging Face.
- **Release / knowledge:** July 2026 release; Apache 2.0 open-weights license.
- **IDs:** `opencode/north_mini_code`, `cohere/north-mini-code`.
- **Context window:** 256,000 tokens total (256K context window), with up to 64,000 maximum output tokens.
- **Modalities:** Text input; text, code, structured JSON output, and tool-calling output; native reasoning traces across multi-turn loops.
- **Pricing (as of 2026-10-21):** Free ($0.00) tier on OpenCode Zen; free self-hosting with Apache 2.0 open weights.
- **Architecture:** 30B total / 3B active parameters per token sparse MoE transformer trained across diverse agent harnesses (SWE-Agent, OpenCode, mini-SWE-agent).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2: **56.2% - 63.0%** (multi-turn shell execution and command-line navigation)
- Tau2-Bench: **81.4%** (robust multi-turn tool calling and schema adherence)
- GDPval-AA: **1,180** Elo
- Toolathon / MCP-Atlas: **40.5%**
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **74.0%** (graduate-level reasoning without web search)
- Humanity's Last Exam (HLE): **18.0%** (text-only, no tools)
- LCR / MLCR: **71.5%**
- Artificial Analysis Coding Index: **33.4**
- Artificial Analysis Intelligence Index: **10**
- Omniscience Accuracy / Hallucination Rate: **47.0% / 8.3%**

Coding:

- SWE-bench Verified: **64.5% - 67.6%** (pass@1 across repository-level issue resolution; up to 83.2% with specialized agent wrappers)
- SWE-bench Pro: **33.5%**
- LiveCodeBench: **71.0%** pass@1 (contamination-free contest coding)
- SciCode / AA-SciCode: **36.0%**
- Vibe Code Bench: **60.5%**

Long context:

- MRCR / RULER (256K window): **94.5%** retrieval fidelity across 256K tokens with 64K maximum output buffer.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong tool orchestration and terminal navigation with 56.2%-63.0% on Terminal-Bench v2 and 81.4% on Tau2-Bench; trained specifically for OpenCode and SWE-Agent harnesses.
- **Reasoning: 70/100.** Solid code-level derivation and analytical planning with 74.0% on GPQA Diamond and 33.4 AA Coding Index; capped by 18.0% on Humanity's Last Exam.
- **Context window: 74/100.** Practical 256,000-token context window with high 64K output token limit for full-file rewriting and diff generation.
- **Multimodal: 15/100.** Text-only architecture without native vision, image inspect, or audio processing modalities.
- **Coding: 73/100.** Impressive open-weights coding throughput with 64.5%-67.6% on SWE-bench Verified and 71.0% on LiveCodeBench.
- **Cost efficiency: 100/100.** Completely free tier ($0.00) available on OpenCode Zen and fully accessible under Apache 2.0.
- **Overall Score: 60/100.** Quality arithmetic mean of the 5 core quality dimensions ((70 + 70 + 74 + 15 + 73) / 5 = 60.4 rounded to 60). Highly agile zero-cost open-weights coding specialist.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research synthesizing Cohere technical releases, Apache 2.0 open-weights documentation, and independent benchmark evaluations from OpenRouter and AI-TLDR; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
