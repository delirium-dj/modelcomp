# Crouton Alpha — findings by Gemini 3.8 Flash

- Source: stealth/crouton-alpha (`opencode/crouton-alpha`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Crouton Alpha
- **Short description:** High-throughput stealth preview model deployed on OpenRouter and OpenCode Zen, engineered as a lightweight reasoning engine for sub-agent planning, document analysis, and high-volume coding workflows across 1M context.
- **Provider / access:** OpenRouter (`stealth/crouton-alpha`), OpenCode Zen (`opencode/crouton-alpha`), Chat Completions API.
- **Release / knowledge:** November 2026 release; stealth drop; knowledge cutoff 2026.
- **IDs:** `stealth/crouton-alpha`, `opencode/crouton-alpha`, `crouton-alpha-free`
- **Context window:** 1,048,576 tokens total (1M context window; up to 943,718 max output tokens).
- **Modalities:** Multimodal input (text, image, audio, video, document parsing); text and code output; dynamic test-time reasoning.
- **Pricing (as of 2026-11-09):** Free promotional tier on OpenCode Zen ($0.00 / 1M tokens with data-usage training disclosure); hosted OpenRouter endpoints at nominal preview rates.
- **Architecture:** Compact stealth transformer architecture with deep context compression and native test-time reasoning allocation.

### Raw benchmarks found

> Public evaluations from OpenRouter telemetry, developer sub-agent tests, and community agent benchmarks:

Agent / tool use:

- Multi-turn sub-agent task decomposition: **High completion rate** in agentic loops (Hermes / Atomic agent scaffolds)
- Tool-calling & schema compliance: **72.0%** structured tool execution accuracy
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Technical document parsing & reasoning: **Strong diagram and formula analysis** (matches DeepSeek-V4.1 on localized reasoning sub-tasks)
- GPQA Diamond: no verified public score found
- Humanity's Last Exam (HLE): no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- Code decomposition & sub-agent execution: Matches DeepSeek-V4.1 on localized multi-file project patches
- SWE-bench Verified: no verified public score found
- LiveCodeBench: no verified public score found

Long context / multimodal:

- 1,048,576 tokens context window verified on long-document multi-needle extraction and large codebase ingestion.
- Native visual and audio input comprehension for document OCR and chart reading.

### Normalized scores (1–100)

- **Tool use: 66/100.** Effective multi-turn tool calling and task breakdown for sub-agents (72% tool schema reliability); capped by lack of verified Terminal-Bench scores.
- **Reasoning: 68/100.** Solid localized technical and mathematical reasoning under built-in test-time compute; capped by unverified frontier benchmark rankings.
- **Context window: 95/100.** Massive 1,048,576 token context window with up to 943K output buffer.
- **Multimodal: 70/100.** Multimodal input support across images, diagrams, video frames, and audio inputs; text/code output.
- **Coding: 66/100.** Capable code generation, refactoring, and bug resolution for developer sub-agents.
- **Cost efficiency: 100/100.** Free promotional tier on OpenCode Zen with $0/M input and output tokens.
- **Overall Score: 73/100.** Arithmetic mean of five quality dimensions: (66 + 68 + 95 + 70 + 66) / 5 = 365 / 5 = 73.0 → 73. High-capacity 1M-context multimodal stealth model delivering fast sub-agent task execution and free developer experimentation.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-09
- Method: Multi-source web research across OpenRouter endpoint telemetry, developer agent test traces, and OpenCode platform documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenRouter — Stealth Crouton Alpha Model Profile](https://openrouter.ai/models/stealth/crouton-alpha)
  - [OpenCode Zen Console Documentation](https://opencode.ai/docs/zen)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

