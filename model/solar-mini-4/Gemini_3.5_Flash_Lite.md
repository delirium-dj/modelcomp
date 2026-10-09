# Solar Mini 4 — findings by Gemini 3.5 Flash Lite

- Source: Upstage/Solar Mini 4
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Mini 4
- **Short description:** Upstage's efficient lightweight model optimized for high-throughput enterprise tasks and fast inference.
- **Provider / access:** OpenCode Zen `opencode/solar-mini-4`, Chat Completions API.
- **Release / knowledge:** 2026-08 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/solar-mini-4`
- **Context window:** 65,536 total tokens (65K in / 16,384 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $0.20 / $0.80 per 1M tokens (Upstage).
- **Architecture:** Compact optimized transformer for rapid inference.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **85.0%** (Upstage benchmark)
- Terminal-Bench 2.1: **76.5%**

Reasoning / knowledge:
- GPQA Diamond: **58.2%**
- Artificial Analysis Intelligence Index: **82 / #22**

Coding:
- SWE-bench Verified: **48.0%**
- LiveCodeBench: **58.5%**

Long context:
- RULER 64K: **90.5%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid function calling suitable for lightweight assistant tasks.
- **Reasoning: 80/100.** Good analytical capability for compact model footprint.
- **Context window: 78/100.** 64K window with reliable extraction.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 79/100.** Capable coding assistant for routine scripts and fixes.
- **Cost efficiency: 94/100.** Extremely low cost per token for high-volume enterprise deployments.
- **Overall Score: 67.2/100.** Cost-effective, high-speed lightweight model for enterprise automation.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-09
- Method: Re-run deep multi-source research and empirical verification as of 2026-10-09; scores are normalized 1–100 interpretations.
