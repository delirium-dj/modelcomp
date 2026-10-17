# Kimi K2.7 Code HighSpeed — findings by Beam

- Source: Moonshot AI/Kimi K2.7 Code HighSpeed, `moonshotai/kimi-k2.7-code-highspeed`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** High-throughput serving variant of Kimi K2.7 Code (Jun 15, 2026): identical weights, 5-6x faster output (up to 260 tok/s). Same benchmarks as K2.7 Code.
- **Provider / access:** Moonshot API `kimi-k2.7-code-highspeed`; kimik2ai.com.
- **Release / knowledge:** Released 2026-06-15; knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`
- **Context window:** 262,144 tokens; max output 256,000.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes. Open weights (same as K2.7 Code).
- **Pricing (as of 2026-10-17):** $0.95 / 1M input, $4.00 / 1M output (AIHubMix $0.95/$3.9995); paid. HighSpeed tier may have different pricing.
- **Architecture:** Same as Kimi K2.7 Code (1T total / 32B active, MoE, 256K context).

### Raw benchmarks found

- No separate benchmarks for HighSpeed (identical weights to K2.7 Code). Benchmarks inherited from K2.7 Code:
  - SWE-bench Verified: **78.20%** (Vals)
  - Terminal-Bench 2.1: **67.04%** (Vals)
  - Kimi Code Bench v2: **62.0%**
  - ProgramBench: **53.6%**
  - MLS-Bench Lite: **35.1%**
  - MCP Atlas: **76.0%**
  - MCP Mark Verified: **81.1%**
  - τ²-bench: **90.1%**
  - LiveCodeBench: **82.05%**
  - Vibe Code Bench v1.1: **47.21%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Inherited from K2.7 Code (agentic 38.5, MCP Atlas 76%, MCP Mark Verified 81.1%, τ²-bench 90.1%, Kimi Claw 24/7 46.9%).
- **Reasoning: 74/100.** Inherited from K2.7 Code (reasoning lane 80.3).
- **Context window: 72/100.** Inherited from K2.7 Code (262K).
- **Multimodal: 72/100.** Inherited from K2.7 Code.
- **Coding: 74/100.** Inherited from K2.7 Code (SWE-bench Verified 78.2%, Kimi Code Bench 62.0%, ProgramBench 53.6%).
- **Cost efficiency: 86/100.** Inherited from K2.7 Code ($0.95/$4.00).
- **Overall Score: 74/100.** Inherited from K2.7 Code (BenchLM 49.51); same weights, faster serving.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (kimik2ai.com, Kimi docs, BenchLM, AIHubMix); scores are normalized 1–100 interpretations, not official vendor scores. HighSpeed uses identical weights to K2.7 Code; no separate benchmarks.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.