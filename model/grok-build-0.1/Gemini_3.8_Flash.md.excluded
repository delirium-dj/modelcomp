# Grok Build 0.1 — findings by Gemini 3.8 Flash

- Source: xAI / Grok (`xai/grok-build-0.1`)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's high-speed agentic coding model specifically trained for autonomous software engineering, web development, debugging, and Model Context Protocol (MCP) tool use.
- **Provider / access:** xAI API (`grok-build-0.1`), Grok Build, OpenRouter, and Vercel AI Gateway.
- **Release / knowledge:** 2026-05-29 release; knowledge cutoff early to mid-2026.
- **IDs:** `xai/grok-build-0.1`. No dedicated Free ID on Zen.
- **Context window:** 262,144 tokens total (262K context window).
- **Modalities:** Text and code input; text, code, structured JSON, and tool-calling output; high-throughput generation (100+ tok/s).
- **Pricing (as of 2026-05):** $1.00 / 1M input tokens, $2.00 / 1M output tokens.
- **Architecture:** Specialized coding transformer trained end-to-end for agentic programming harnesses (Cursor, Grok Build, Hermes Agent).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1,212** Elo (Artificial Analysis / BenchmarkList, 2026)
- Terminal-Bench 2.1: **52.1%** (Artificial Analysis / BenchmarkList, 2026)
- Tau3-Banking: **13.4%** pass@1 (Artificial Analysis / BenchmarkList, 2026)

Reasoning / knowledge:

- GPQA Diamond: **89.5%** (Artificial Analysis / BenchmarkList, 2026)
- Humanity's Last Exam: **38.3%** (Artificial Analysis / BenchmarkList, 2026)
- Artificial Analysis Intelligence Index: **40.7** (Artificial Analysis / BenchmarkList, 2026)

Coding:

- SciCode: **50.2%** (Artificial Analysis / BenchmarkList, 2026)
- SWE-bench Verified: no verified public score found

Long context:

- AA-LCR (Long-context reasoning): **70.0%** (Artificial Analysis / BenchmarkList, 2026)
- 262K context window evaluated across multi-file codebases and MCP tools.

### Normalized scores (1–100)

- **Tool use: 78/100.** Solid agentic tool interaction evidenced by 52.1% on Terminal-Bench 2.1 and 1,212 Elo on GDPval-AA, tailored for MCP-driven development loops.
- **Reasoning: 83/100.** Strong analytical reasoning reflected by 89.5% on GPQA Diamond, 38.3% on Humanity's Last Exam, and 40.7 on the AA Intelligence Index.
- **Context window: 75/100.** 262K context window matches standard coding workspace needs with 70.0% retention on AA-LCR.
- **Multimodal: 20/100.** Code and text-focused model without direct native image or video processing; scores baseline.
- **Coding: 82/100.** Purpose-built for coding agents with 50.2% on SciCode and deep integration with agentic harnesses.
- **Cost efficiency: 88/100.** Very economical at $1.00 / $2.00 per 1M tokens with 100+ tok/s throughput.
- **Overall Score: 68/100.** Agile, affordable coding specialist optimized for autonomous dev environments, with overall score lowered by text-only modality.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-26 UTC
- Method: Public internet research into xAI official API releases and Artificial Analysis benchmark listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
