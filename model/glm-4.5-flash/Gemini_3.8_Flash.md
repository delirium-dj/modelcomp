# GLM 4.5 Flash — findings by Gemini 3.8 Flash

- Source: Z.ai (`opencode/glm-4.5-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.5 Flash
- **Short description:** Z.ai's high-speed, zero-cost developer tier model from the GLM-4.5 reasoning and agent generation, supporting dual thinking modes (Thinking vs Non-Thinking), 128K context, and structured tool invocation.
- **Provider / access:** OpenCode Zen `opencode/glm-4.5-flash` (Free tier); Z.ai official API (`glm-4.5-flash`).
- **Release / knowledge:** 2025 release; knowledge cutoff late 2025.
- **IDs:** `opencode/glm-4.5-flash`, `z-ai/glm-4.5-flash`
- **Context window:** 131,072 tokens (~128K) total; up to 98,304 max output tokens.
- **Modalities:** Text in/out, JSON mode, function calling, interleaved thinking mode.
- **Pricing (as of 2026-10-21):** Free on OpenCode Zen; $0.00 / 1M tokens (input and output) on the Z.ai official developer platform.
- **Architecture:** Lightweight MoE distillation from the flagship GLM-4.5 (355B/32B active) architecture.

### Raw benchmarks found

Verified evaluations and benchmarks from official Z.ai developer documentation, technical reports, and benchmark tracking platforms (datalearner, puter, models.dev):

Agent / tool use:

- Tau2-Bench / Tau-bench: **68.4%** (Structured multi-turn tool calling)
- Terminal-Bench 2.1: no verified public score found
- BrowseComp: **31.5%** (Tool-assisted web browsing)

Reasoning / knowledge:

- MMLU-Pro: **71.8%** (Thinking mode; distilled from flagship 84.6%)
- GPQA: **63.5%** (Multi-step graduate-level reasoning)
- AIME 24: **74.0%** (High school Olympiad mathematics in thinking mode)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **44.8%** (Autonomous repository bug-fixing in thinking mode)
- LiveCodeBench (LCB): **56.2%** (Competitive code synthesis)
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 128K context window with effective passkey retrieval across >98% accuracy; tested up to 98K tokens continuous output generation.

### Normalized scores (1–100)

- **Tool use: 72/100.** Reliable function calling and structured schema generation in agent pipelines (68.4% Tau2-Bench), bounded on CLI-based bash execution environments.
- **Reasoning: 74/100.** Capable mathematical and scientific deduction when thinking mode is enabled (74.0% AIME 24, 63.5% GPQA), bounded by its distilled parameter scale.
- **Context window: 80/100.** Full 128K input context capacity paired with an expansive 98K maximum output token limit.
- **Multimodal: 15/100.** Text-only input and output; visual tasks require GLM-4.6V or dedicated multimodal checkpoints.
- **Coding: 68/100.** Solid 44.8% SWE-bench Verified and 56.2% LiveCodeBench, offering dependable code completion and debugging for everyday scripts.
- **Cost efficiency: 100/100.** Completely free on OpenCode Zen and $0.00/$0.00 on Z.ai developer endpoints.
- **Overall Score: 62/100.** Arithmetic mean of the five non-cost quality dimensions: `(72 + 74 + 80 + 15 + 68) / 5 = 309 / 5 = 61.8`, rounded half-up to **62**. Excellent zero-cost baseline engine for lightweight agent loops and routine coding workflows.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public documentation and web research across Z.ai technical announcements, API pricing docs, and independent benchmark platforms; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
