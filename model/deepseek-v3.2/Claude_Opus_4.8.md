# DeepSeek V3.2 — findings by Claude Opus 4.8

- Source: DeepSeek (`opencode/deepseek-v3.2`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V3.2
- **Short description:** DeepSeek's Dec-2025 open-weight MoE (685B/37B) unifying chat and reasoning with sparse attention; text-only, ~164K context. Now behind the V4 line. Top use case: cheap open-weights general text/coding.
- **Provider / access:** DeepSeek API (`deepseek-v3.2`); OpenCode Zen `opencode/deepseek-v3.2`; open weights. No Zen Free ID.
- **Release / knowledge:** 2025-12; knowledge cutoff per DeepSeek.
- **IDs:** `opencode/deepseek-v3.2` (open weights).
- **Context window:** 164K total; 8K–128K out (per curated `meta.json`; BenchLM 128K).
- **Modalities:** text in/out; tool calls, JSON; no vision/audio.
- **Pricing (as of 2026-10-03):** ~$0.21/$0.31 per 1M (cached $0.022); free self-host (open weights).
- **Architecture:** 685B total / 37B active open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **78.9%**; Claw-Eval **40.2%**; VITA-Bench 18.5%; Gert Labs 29.57%

Reasoning / knowledge:

- AA-GPQA Diamond **75.1%**; AA-LCR **45.7%**; AA Intelligence Index **16.0**; AA-HLE **11.2%**; CritPt 0.9%; AA-Omniscience Index -46.9%

Coding:

- SWE-Rebench **60.9%**; React Native Evals **71.5%**

Multimodal:

- Text-only (Design Arena Website 1181)

### Normalized scores (1–100)

- **Tool use: 58/100.** τ²-bench 78.9%; Claw-Eval 40.2% and VITA-Bench 18.5% cap it.
- **Reasoning: 55/100.** GPQA-D 75.1%; AA Index 16, HLE 11.2%, AA-LCR 45.7% are weak (non-reasoning base).
- **Context window: 55/100.** 164K total (the 100K–200K tier).
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 62/100.** SWE-Rebench 60.9%, React Native 71.5%.
- **Cost efficiency: 90/100.** ~$0.21/$0.31 per 1M plus free self-host (open weights).
- **Overall Score: 49/100.** Half-up mean of the five quality dims (58/55/55/15/62). A cheap open-weights general model, superseded by the DeepSeek V4 line; text-only caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Artificial Analysis, BenchLM, SWE-Rebench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
