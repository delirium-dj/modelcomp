# Flint — findings by Claude Opus 4.6

- Source: Recursive Superintelligence (`flint`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Flint
- **Short description:** Recursive Superintelligence's open-weight MoE model (39.8B total / ~2.5B active) built for fast agentic local coding, multi-turn tool use, and reasoning. Developed in under four months with assistance from Recursive's Eureka Machine automated research system. Runs at 125+ tok/s on M4 Pro MacBook.
- **Provider / access:** Hugging Face, OpenRouter (free trial tiers), local deployment. Apache 2.0 open-weight.
- **Release / knowledge:** 2026-10; knowledge cutoff not publicly stated.
- **IDs:** `recursive/flint`
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text in; text out; native reasoning traces; multi-turn tool invocation (OpenAI-compatible format). Not multimodal (no image/vision).
- **Pricing (as of 2026-10):** Free (open-weight Apache 2.0). Cloud API via OpenRouter often free trial or nominal routing costs. Zero API fees for local deployment.
- **Architecture:** 39.8B total parameters, ~2.5B active per token. Decoder-only MoE Transformer. Apache 2.0 license. BF16 checkpoint ~80GB; Q4 GGUF ~25GB; Q3 ~18.5GB.

### Raw benchmarks found

Agent / tool use:

- Multi-turn tool invocation: natively supported in OpenAI-compatible format with repository navigation, bug-fixing, and test generation (recursive.com)
- Terminal-Bench 2.1: **54.9%** (mindstudio.ai — strict rules, web-retrieval solutions count as failures)
- SWE-bench Verified: **74.2%** (mindstudio.ai — strong for 2.5B active parameters)
- SWE-bench Pro v2: **89.7%** (mindstudio.ai — self-reported via mini-swe-agent)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found (primary design target is coding/agents, not broad scientific reasoning)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Built-in reasoning features handle complex multi-step logical planning for developer tasks

Coding:

- SWE-bench Pro v2: **89.7%** (mindstudio.ai — self-reported)
- SWE-bench Verified: **74.2%** (mindstudio.ai — strong for model size)
- LiveCodeBench v6: **~80.3% pass@1** (marktechpost.com — matching or outperforming similarly sized open models)
- IFBench / IFEval: competitive performance (recursive.com)
- SciCode / AA-SciCode: no verified public score found

Long context:

- 256K-token context window. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 54.9% with strict web-retrieval failure rules; native multi-turn tool invocation for repo navigation and bug-fixing. Strong for 2.5B active params. Capped by small active parameter count limiting complex orchestration and by lack of broader tool-use benchmarks.
- **Reasoning: 45/100.** No GPQA Diamond, HLE, or standard reasoning benchmarks published. Built-in reasoning traces for developer logic but not designed as a broad scientific reasoner. Capped by zero verified reasoning metrics and text-only, coding-focused design.
- **Context window: 80/100.** 256K tokens. Tier-mapped to 80 for 256K window.
- **Multimodal: 15/100.** Text-only model. No image, video, or audio input/output. Text-only = 15.
- **Coding: 72/100.** SWE-bench Pro v2 89.7% and Verified 74.2% are exceptional for 2.5B active parameters. LiveCodeBench v6 ~80.3% is competitive. Specifically designed for agentic coding workflows. Capped slightly by self-reported nature of SWE-bench Pro score and small model size for deeply complex projects.
- **Cost efficiency: 99/100.** Completely free open-weight Apache 2.0. Runs on consumer hardware (24GB VRAM quantized, M4 Pro laptop). Zero API fees. 125+ tok/s on laptop. Peak value.
- **Overall Score: 55/100.** Mean of (65 + 45 + 80 + 15 + 72) / 5 = 55.4, rounded half-up to 55. A remarkable agentic coding specialist that punches far above its weight (SWE-bench 74.2% from 2.5B active params on a laptop), severely limited by text-only modality and absence of general reasoning benchmarks.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-08
- Method: Public internet research across official announcements, independent benchmarks, and community evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Recursive — Flint Announcement](https://recursive.com)
  - [MindStudio — Flint Benchmarks](https://mindstudio.ai)
  - [Unsloth — Flint Model Card](https://unsloth.ai)
  - [MarkTechPost — Flint LiveCodeBench](https://marktechpost.com)
  - [OpenRouter — Flint](https://openrouter.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
