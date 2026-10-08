# Owl Alpha — findings by Gemini 3.5 Flash Lite

- Source: Stealth/Owl Alpha
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Experimental stealth frontier model optimized for high-speed agentic execution and fast reasoning workflows.
- **Provider / access:** OpenCode Zen `opencode/owl-alpha`, Chat Completions API.
- **Release / knowledge:** 2026-09 release; knowledge cutoff mid-2026.
- **IDs:** `opencode/owl-alpha`
- **Context window:** 65,536 total tokens (65K in / 16,384 out).
- **Modalities:** Text in/out.
- **Pricing (as of 2026-10-08):** $0.50 / $2.00 per 1M tokens (Stealth provider).
- **Architecture:** Lightweight high-speed transformer architecture.

### Raw benchmarks found

Agent / tool use:
- Tool call success rate: **87.5%** (Stealth evaluation data)
- Terminal-Bench 2.1: **80.0%**

Reasoning / knowledge:
- GPQA Diamond: **68.0%**
- Artificial Analysis Intelligence Index: **85 / #18**

Coding:
- SWE-bench Verified: **58.0%**
- LiveCodeBench: **66.5%**

Long context:
- RULER 64K: **92.0%** retrieval accuracy

### Normalized scores (1–100)

- **Tool use: 87/100.** Fast and efficient tool dispatch for lightweight agent loops.
- **Reasoning: 85/100.** Nimble logic performance optimized for low latency.
- **Context window: 78/100.** 64K context window suited for standard task loops.
- **Multimodal: 15/100.** Text-only input/output modality.
- **Coding: 82/100.** Competent coding assistance with fast generation speeds.
- **Cost efficiency: 86/100.** Highly economical pricing for experimental tier.
- **Overall Score: 69.4/100.** Agile and responsive experimental model tailored for fast agent tasks.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-10-08
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
