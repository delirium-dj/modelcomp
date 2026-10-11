# GLM 5.2 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.2
- **Short description:** Zhipu AI / Z.ai's flagship open-weights Mixture-of-Experts foundation model (753B total / 40B active) engineered for long-horizon agentic workflows, long-context repository comprehension, and full-stack software development under an MIT license.
- **Provider / access:** Z.ai API (`glm-5.2`), OpenCode Zen (`opencode/glm-5.2`), [OpenRouter](https://openrouter.ai/models/zai-org/glm-5.2), and [Hugging Face](https://huggingface.co/zai-org) open weights (`zai-org/GLM-5.2`).
- **Release / knowledge:** 2026-06-16 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/glm-5.2`, `glm-5.2`, `zai-org/GLM-5.2`
- **Context window:** 1,048,576 tokens (1M context window; max output 131,072).
- **Modalities:** Text in / text out only (strictly text-only; multimodal vision routed to GLM-5V-Turbo); tool calls and structured JSON output.
- **Pricing (as of 2026-10-11):** Free tier available on OpenCode Zen; API routes at $1.19–$1.40 / 1M input tokens, $3.74–$4.40 / 1M output tokens ($0.26 cached input); MIT license open weights.
- **Architecture:** 753B-parameter Mixture-of-Experts (40B active) with IndexShare sparse attention.

### Raw benchmarks found

Reasoning / knowledge:
- GPQA-Diamond: **91.2%** ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5-2))
- AIME 2026: **99.2%**
- Humanity's Last Exam (HLE): **40.5%** text-only / **54.7%** w/ tools
- Artificial Analysis Intelligence Index: **51**

Coding:
- SWE-bench Pro: **62.1%** ([Z.ai Release Report](https://z.ai))
- Terminal-Bench 2.1: **81.0%**
- FrontierSWE: **74.4%**
- DeepSWE: **46.2%**
- ProgramBench: **63.7%**

Agent / tool use:
- MCP-Atlas: **76.8**
- Tool-Decathlon: **48.2%**
- Native function calling and Claude Code integration

### Normalized scores (1–100)

- **Tool use: 81/100.** MCP-Atlas at 76.8 and Terminal-Bench 2.1 at 81.0% indicate dependable agent tooling and scaffold integration across long-horizon trajectories.
- **Reasoning: 84/100.** 91.2% on GPQA-Diamond, 99.2% on AIME 2026, and AA Intelligence Index of 51 demonstrate exceptional algorithmic and mathematical problem solving.
- **Context window: 90/100.** Full 1M native context with IndexShare sparse attention delivers large-scale repository parsing.
- **Multimodal: 15/100.** Strictly text-only input and output (visual tasks routed to GLM-V variants).
- **Coding: 81/100.** 62.1% on SWE-bench Pro and 74.4% on FrontierSWE represent top-flight open-weights coding capability.
- **Cost efficiency: 90/100.** Free Zen access tier plus very competitive API rates ($1.40 / $4.40) and permissive MIT open weights.
- **Overall Score: 70/100.** Arithmetic mean of five quality dimensions: (81 + 84 + 90 + 15 + 81) / 5 = 70.2 → 70. A formidable, MIT-licensed open-weights agent model for software engineering and long-horizon tasks, capped overall by text-only input.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Zhipu AI / Z.ai official disclosures, Artificial Analysis benchmarks, and OpenRouter model cards; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
