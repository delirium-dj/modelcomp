# GLM-4.7-Flash — findings by Claude Opus 4.6

- Source: Zhipu AI / Z.ai (`glm-4.7-flash`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-4.7-Flash
- **Short description:** Zhipu AI's lightweight MoE model (30B total / ~3B active) from the GLM-4.7 family, released January 2026. Designed for local deployment, agentic coding, terminal tasks, and tool collaboration. Runs smoothly on consumer GPUs (24GB VRAM) and Apple Silicon.
- **Provider / access:** Z.ai API, OpenRouter, Hugging Face. Free-tier API frequently available. OpenAI-compatible endpoints.
- **Release / knowledge:** 2026-01; knowledge cutoff not publicly stated.
- **IDs:** `zhipu/glm-4.7-flash`
- **Context window:** 200,000 tokens (200K) with efficient MLA attention.
- **Modalities:** Text in; text out; native tool calling; structured outputs; explicit reasoning mode ("think before acting"); multi-turn conversational.
- **Pricing (as of 2026-01):** ~$0.06 / $0.40 per 1M tokens in/out. Free-tier options frequently available. Extremely economical.
- **Architecture:** ~30B total parameters, ~3B active per token. MoE (glm4_moe_lite). Open-weight. Runs on single 24GB VRAM consumer GPU or Apple Silicon Mac at 60–80+ tok/s.

### Raw benchmarks found

Agent / tool use:

- Tool invocation: state-of-the-art for parameter size class; optimized for agent frameworks like Claude Code, Cline, Roo Code, Kilo Code (medium.com, z.ai)
- Native tool calling with structured outputs and reasoning mode (benchlm.ai)
- Terminal-Bench: flagship GLM-4.7 scores ~41% on Terminal Bench 2.0; Flash tier likely somewhat lower (z.ai)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Explicit reasoning mode: "think before acting" capability for multi-step logical planning

Coding:

- SWE-bench Verified: **~59.2%** (medium.com — strong among open-source models for its parameter class)
- Flagship GLM-4.7 SWE-bench: up to 73.8% (z.ai — Flash tier derives from same family architecture)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: optimized for "vibe coding" / UI generation (openrouter.ai)

Long context:

- 200K-token context window with efficient MLA attention. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 60/100.** State-of-the-art tool invocation for its 3B active parameter class; explicit reasoning mode; optimized for multiple agent frameworks. Capped by lack of standard tool-use benchmarks and very small active parameter count.
- **Reasoning: 42/100.** No GPQA Diamond, HLE, or standard reasoning benchmarks published. Has explicit reasoning mode but designed primarily as a coding utility model. Capped by zero verified reasoning metrics and small parameter count.
- **Context window: 75/100.** 200K tokens — solid mid-range. Efficient MLA attention. Tier-mapped to 75 for 200K window.
- **Multimodal: 15/100.** Text-only model. No image, video, or audio input/output. Text-only = 15.
- **Coding: 62/100.** SWE-bench Verified ~59.2% is strong for 3B active parameters — remarkable parameter efficiency. Same architectural family as flagship GLM-4.7 (73.8% SWE-bench). Optimized for vibe coding and terminal tasks. Capped by small model size and lack of LiveCodeBench score.
- **Cost efficiency: 97/100.** $0.06/$0.40 per 1M tokens with free tiers available. Open-weight. Runs on consumer GPU at 60–80+ tok/s. Near-free pricing. Outstanding value.
- **Overall Score: 51/100.** Mean of (60 + 42 + 75 + 15 + 62) / 5 = 50.8, rounded half-up to 51. An ultra-efficient local coding model that delivers SWE-bench 59.2% from just 3B active parameters on consumer hardware, severely limited by text-only modality and absence of reasoning benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-08
- Method: Public internet research across official documentation, independent benchmarks, and community evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai — GLM-4.7 Family](https://z.ai)
  - [Medium — GLM-4.7-Flash Review](https://medium.com)
  - [OpenRouter — GLM-4.7-Flash](https://openrouter.ai)
  - [BenchLM — GLM-4.7-Flash](https://benchlm.ai)
  - [MarkTechPost — GLM-4.7-Flash Analysis](https://marktechpost.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
