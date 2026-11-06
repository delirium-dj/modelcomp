# Ling 3.2 Flash — findings by Gemini 3.8 Flash

- Source: Ant Group (inclusionAI / Ant Bailian) — `ling-3.2-flash`
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash
- **Short description:** Ant Group's native multimodal Mixture-of-Experts (MoE) foundation model (560B total / 25B active parameters) launched in November 2026. Integrates text, image, and video processing at the architectural level with a 1M token context window, excelling in visual document reasoning, 3D interaction, and visual frontend generation.
- **Provider / access:** Ant Bailian platform API (`ling-3.2-flash`), supporting OpenAI-compatible and Anthropic-compatible request formats.
- **Release / knowledge:** 2026-11-05 release; knowledge cutoff mid-2026.
- **IDs:** `ling-3.2-flash` (Ant Bailian / Ant Ling); no Free-tier route confirmed on OpenCode Zen.
- **Context window:** 1,000,000 tokens total (1M context window); max output generation unverified.
- **Modalities:** Native multimodal text, image, and video input; text and code output; tool use and function calling supported.
- **Pricing (as of 2026-11-06):** $0.30 per 1M input tokens, $0.90 per 1M output tokens (Ant Bailian launch list price, with an initial 2-week launch promotional window).
- **Architecture:** 560B total / 25B activated parameter sparse Mixture-of-Experts (MoE) transformer featuring unified multimodal fusion without external adapter bottlenecks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau2-Bench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Multimodal Agentic Workflows: Positioned for multi-step visual tool use and execution.

Reasoning / knowledge:

- ZEROBench (Visual Reasoning Subset): **43.71** (Ant Group evaluation vs Claude Opus 5 max at 39.52)
- GPQA Diamond: **no verified public score found**
- Humanity's Last Exam (HLE): **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- Vision2Web (Frontend Generation): **85.86** (Ant Group evaluation vs Claude Opus 5 max at 80.20)
- DesignArena: **Elo 1238** (Top-10 ranking for screenshot-to-code generation)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Document / Vision understanding:

- OmniDocBench 1.5: **92.21** (Ant Group evaluation vs Claude Opus 5 max at 90.56)
- CharXiv_RQ: **85.15** (chart reasoning and data extraction)

Long context:

- 1M token context window claimed; long-context retrieval benchmarks (MRCR / RULER) not yet reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Capable multi-step visual agent tool use and function calling across OpenAI/Anthropic schemas, capped by absence of independent Terminal-Bench or Tau2-Bench evaluations.
- **Reasoning: 68/100.** Strong visual reasoning shown on ZEROBench (43.71) and CharXiv (85.15), but unverified on abstract text-only benchmarks like GPQA Diamond or HLE.
- **Context window: 84/100.** Native 1M-token context ceiling mapped per 1M tier, held below peak due to pending independent needle-in-a-haystack verification (MRCR/RULER).
- **Multimodal: 92/100.** Elite native multimodal architecture handling text, image, and video natively; outscores peers on OmniDocBench 1.5 (92.21) and Vision2Web (85.86).
- **Coding: 72/100.** Outstanding visual-to-code generation (Vision2Web 85.86, DesignArena Elo 1238), but broad repo-level autonomous debugging (SWE-bench Verified) remains unmeasured.
- **Cost efficiency: 90/100.** Competitive flash-tier pricing at $0.30/M input and $0.90/M output for a 560B MoE model.
- **Overall Score: 75/100.** Half-up mean of the five non-cost quality dimensions ((60 + 68 + 84 + 92 + 72) / 5 = 376 / 5 = 75.2 -> 75). Excellent choice for visual document understanding, UI prototype conversion, and multimodal agent pipelines.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-06
- Method: Multi-source web verification across Ant Group technical release documentation, benchmark tables, and developer community coverage; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Ant Group Ling 3.2 Series Announcement](https://developer.ant-ling.com)
  - [Pandaily Ling-3.2-Flash Overview](https://pandaily.com)
  - [Technode Multimodal MoE Architecture Report](https://technode.com)

