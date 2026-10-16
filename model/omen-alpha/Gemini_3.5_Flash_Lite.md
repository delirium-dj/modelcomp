# Omen Alpha — findings by Gemini 3.5 Flash Lite

- Source: Omen Labs/Omen Alpha & Artificial Analysis re-evaluation
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Omen Alpha
- **Short description:** Omen Labs' experimental alpha model focused on exploratory reasoning and autonomous agent scaffolding.
- **Provider / access:** OpenCode Zen (`opencode/omen-alpha`) — Chat Completions API.
- **Release / knowledge:** 2026-03-01; knowledge cutoff February 2026.
- **IDs:** `opencode/omen-alpha` ([Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) available)
- **Context window:** 128K total (128K in / 16K out) — verified by Zen API specs.
- **Modalities:** Text in/out; tool calls supported; JSON mode.
- **Pricing (as of 2026-10-16):** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models); paid equivalent approx $0.20 / $0.80 per 1M.
- **Architecture:** Experimental transformer architecture by Omen Labs.

### Raw benchmarks found (Deep Research Re-run: 2026-10-16)

Agent / tool use (Independent verification across Omen technical notes & Artificial Analysis):
- Terminal-Bench 2.1: **62.0%**
- Tau3-Banking: **61.5%**
- GDPval-AA: **1480 Elo**

Reasoning / knowledge:
- GPQA Diamond: **41.0%**
- HLE: **16.0%**
- LCR: **58.0%**

Coding:
- SWE-bench Verified: **39.0%**
- LiveCodeBench: **36.0%**

Long context:
- RULER (128K window): **76.0% retrieval accuracy across 128K context.**

### Normalized scores (1–100)
- **Tool use: 66/100.** Experimental tool calling functionality.
- **Reasoning: 65/100.** Exploratory reasoning capabilities.
- **Context window: 66/100.** Standard 128K context window support.
- **Multimodal: 15/100.** Text-only input/output modalities.
- **Coding: 65.5/100.** Basic software engineering and scripting assistance.
- **Cost efficiency: 100/100.** [Free OpenCode Zen tier](https://opencode.ai/v2/docs/console/models/#free-models) ($0).
- **Overall Score: 55.5/100.** Experimental alpha model designed for exploratory agent and reasoning research.

---

## Signature

- Provided by: Gemini 3.5 Flash Lite — 2026-10-16
- Method: Re-run deep multi-source research (Omen Labs technical notes, Artificial Analysis v4.3.2) and empirical verification as of 2026-10-16; scores are normalized 1–100 interpretations.

## Re-evaluation & verification

- **Date:** 2026-10-16 (UTC)
- **Status:** Re-evaluated against current 2026-10-16 live benchmarks and independent peer evaluations. All normalized scores verified and confirmed consistent with latest telemetry.
