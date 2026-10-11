# Grok Build 0.1 — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's high-speed agentic coding model specifically trained for autonomous software engineering, full-stack development, screenshot debugging, and Model Context Protocol (MCP) tool orchestration.
- **Provider / access:** xAI API (`grok-build-0.1`), Grok Build, [OpenRouter](https://openrouter.ai/models/x-ai/grok-build-0.1) (`x-ai/grok-build-0.1`), Vercel AI Gateway.
- **Release / knowledge:** May 20, 2026 (updated June 2026 with 0616 revision).
- **IDs:** `xai/grok-build-0.1`, `x-ai/grok-build-0.1`, `grok-build-0.1`
- **Context window:** 262,144 tokens total (256K context window).
- **Modalities:** Multimodal input (text, code, images/screenshots); text, code, structured JSON, and tool-calling output; high-throughput generation (65–100+ tok/s).
- **Pricing (as of 2026-10-11):** $1.00 / 1M input tokens, $2.00 / 1M output tokens.
- **Architecture:** Specialized coding transformer trained end-to-end for agentic programming harnesses (Cursor, Grok Build, Hermes Agent, Claude Code compatible).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,212 Elo**
- Terminal-Bench 2.1: **52.1%**
- Tau3-Banking: **13.4%** pass@1
- MCP Integration: production grade multi-step tool execution.

Reasoning / knowledge:

- GPQA Diamond: **89.5%**
- Humanity's Last Exam (HLE): **38.3%**
- Artificial Analysis Intelligence Index: **27**
- Harvey Legal Agent: **19.6%**
- HealthBench Professional: **56.7%**

Coding:

- Artificial Analysis Coding Index: **51.5**
- SciCode: **50.2%**
- CursorBench 4.0: **46.3%**

Long context:

- AA-LCR (Long-context reasoning): **70.0%**
- 262K context window evaluated across multi-file codebases and MCP tools.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic tool interaction evidenced by 52.1% on Terminal-Bench 2.1 and 1,212 Elo on GDPval-AA, tailored for MCP-driven development loops.
- **Reasoning: 83/100.** Strong analytical reasoning reflected by 89.5% on GPQA Diamond, 38.3% on Humanity's Last Exam, and 27 on the AA Intelligence Index.
- **Context window: 75/100.** 262K context window matches standard coding workspace needs with 70.0% retention on AA-LCR.
- **Multimodal: 70/100.** Native vision multimodal input enabling frontend UI debugging, layout error detection, and visual inspection.
- **Coding: 82/100.** Purpose-built for coding agents with 51.5 on AA Coding Index, 50.2% on SciCode, and deep integration with agentic harnesses.
- **Cost efficiency: 88/100.** Very economical at $1.00 / $2.00 per 1M tokens with high-throughput generation.
- **Overall Score: 78/100.** Arithmetic mean of non-cost metrics: (78 + 83 + 75 + 70 + 82) / 5 = 77.6 → 78. Agile, affordable multimodal coding specialist optimized for autonomous dev environments.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of xAI technical documentation, OpenRouter endpoints, and Artificial Analysis leaderboards.
