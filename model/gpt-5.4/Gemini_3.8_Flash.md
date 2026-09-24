# GPT-5.4 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 flagship multimodal reasoning model, unifying frontier coding, tool orchestration, and deep reasoning with a 1M token context.
- **Provider / access:** OpenAI API (`gpt-5.4`), OpenCode Zen (`opencode/gpt-5.4`), Azure, AWS Bedrock.
- **Release / knowledge:** March 2026; knowledge cutoff August 2025.
- **IDs:** `gpt-5.4`, `opencode/gpt-5.4`
- **Context window:** 1,048,576 tokens (~1M input, up to 128K output).
- **Modalities:** Text and vision/image input; structured output, native function calling, and computer use capabilities.
- **Pricing (as of 2026-09-24):** $2.50 / 1M input tokens, $15.00 / 1M output tokens ($0.25 cached input).
- **Architecture:** Proprietary frontier transformer with configurable reasoning effort.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI official benchmark, xhigh effort)
- OSWorld-Verified: **75.0%** (exceeds human baseline of 72.4%)
- τ²-Bench Telecom: **98.9%**
- CyberGym: **79.0%**
- MCP Atlas: **67.2%**
- Toolathlon: **54.6%**

Reasoning / knowledge:

- GPQA Diamond: **93.0%**
- Humanity's Last Exam (HLE w/ tools): **52.1%** (w/o tools: **39.8%**)
- FrontierMath v2 (Tiers 1–3): **47.6%** (Tier 4: **27.1%**)
- BenchLM Intelligence Score: **72.9/100**

Coding:

- SWE-bench Pro (Public): **57.7%** (top-tier on public benchmark suite)
- SWE-bench Verified: **~80.0%**
- Terminal-Bench 2.0 (Agentic Coding): **75.1%**

Long context:

- MRCR v2 (8-needle, 64K–128K): **86.0%** (128K–256K: **79.3%**)
- Graphwalks BFS (0–128K): **93.1%** (parents: **89.8%**)

### Normalized scores (1–100)

- **Tool use: 85/100.** Exemplary agentic autonomy with 75.1% Terminal-Bench 2.0, 75.0% OSWorld-Verified, and 98.9% τ²-Bench, demonstrating exceptional computer use and tool coordination.
- **Reasoning: 90/100.** 93.0% on GPQA Diamond, 52.1% on HLE (with tools), and 47.6% on FrontierMath v2 place it at the cutting edge of contemporary LLM logical and mathematical problem solving.
- **Context window: 92/100.** High-fidelity 1M token context with verified multi-needle retrieval up to 256K (79.3%–86.0% MRCR v2, 93.1% Graphwalks).
- **Multimodal: 72/100.** Excellent vision, document reading, and computer GUI perception capabilities; lacks audio/video input modalities and media generation.
- **Coding: 84/100.** Leading SWE-bench Pro score (57.7%) combined with ~80% SWE-bench Verified and 75.1% Terminal-Bench reflects top-tier real-world software engineering mastery.
- **Cost efficiency: 65/100.** Priced as an elite flagship tier at $2.50/$15.00 per 1M tokens; high performance justifies price, but throughput-heavy batch jobs are best directed to smaller variants.
- **Overall Score: 85/100.** Arithmetic mean of non-cost metrics: (85 + 90 + 92 + 72 + 84) / 5 = 84.6 → 85. A tier-1 frontier model capable of complex agentic workflows, complex code generation, and deep scientific inquiry.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and cross-reference with published reports from OpenAI and independent benchmarks.
