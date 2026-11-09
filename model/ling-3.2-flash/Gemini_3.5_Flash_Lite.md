# Ling 3.2 Flash — findings by Gemini 3.5 Flash Lite

- Source: Ant Group (Ant Ling / inclusionAI) / `ling-3.2-flash`
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash (`Ling-3.2-flash`)
- **Short description:** Ant Group's natively multimodal flagship-flash MoE model featuring a 560B total / 25B active parameter architecture, 1M context window, and integrated visual-text-video understanding.
- **Provider / access:** Ant Bailian (百灵) platform API (`chat.ant-ling.com`), OpenAI- and Anthropic-compatible protocols; OpenRouter and ZenMux distribution.
- **Release / knowledge:** Released November 2026; knowledge current.
- **IDs:** `ling-3.2-flash` (Ant Bailian API) / `opencode/ling-3.2-flash`
- **Context window:** 1,000,000 tokens total (1M input / max output supported).
- **Modalities:** Native image, text, and video input; text output; native tool calling and structured output.
- **Pricing (as of 2026-11-09):** Launched with a 2-week free promotion; steady-state pricing at $0.30 per 1M input tokens and $0.90 per 1M output tokens.
- **Architecture:** Mixture of Experts (MoE), 560B total / 25B activated parameters.

### Raw benchmarks found

Reasoning / Knowledge:
- ZEROBench (Sub): **43.71** <(Vendor-published evaluation; compared to Claude Opus 5 max 39.52)>

Multimodal:
- OmniDocBench 1.5: **92.21** <(Vendor-published document understanding eval)>
- Vision2Web: **85.86** <(Vendor-published vision-to-frontend eval)>

Agent / Tool use:
- DesignArena Image-to-Frontend Arena: **Elo 1238, rank #10** <(DesignArena independent leaderboard measurement)>

Coding:
- Vision-to-code benchmarks (Vision2Web): **85.86** <(Vendor technical report)>

Long context:
- 1M token context window support <(Ant Ling official documentation)>

### Normalized scores (1–100)

- **Tool use: 73/100.** Solid agentic and multimodal task capability backed by DesignArena Elo 1238 ranking (#10), though formal benchmark leaderboards are still emerging.
- **Reasoning: 68/100.** Strong vendor-reported ZEROBench-Sub score (43.71) indicating robust core logic, tempered by lack of independent GPQA/HLE verification.
- **Context window: 95/100.** Full native 1M token context window support with stable multimodal retrieval.
- **Multimodal: 88/100.** Native architectural fusion of image, video, and text with competitive scores on OmniDocBench 1.5 (92.21) and Vision2Web (85.86).
- **Coding: 70/100.** Competent frontend and visual code generation via Vision2Web (85.86), while general software engineering benchmarks await broad independent publication.
- **Cost efficiency: 95/100.** Extremely competitive pricing ($0.30/$0.90 per 1M tokens) with a launching 2-week free tier, positioning it as a leading cost-performance option.
- **Overall Score: 78.8/100.** (73 + 68 + 95 + 88 + 70) / 5 = 78.8. Best-fit recommendation: High-throughput multimodal document and video analysis, visual web generation, and cost-sensitive agent workflows.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09
- Method: Public internet research and cross-verification of official Ant Ling documentation, technical releases, and independent DesignArena benchmark data.
- Reference URLs:
  - [Ant Ling Official Documentation](https://developer.ant-ling.com/en/docs/models/ling/)
  - [DesignArena Leaderboard](https://x.com/DesignArena)
  - [IT之家 Ling-3.2-Flash Announcement](https://www.ithome.com)
