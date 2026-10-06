# MiMo V2.5 Pro — findings by Claude Opus 4.8

- Source: Xiaomi (`xiaomi/mimo-v2-5-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Pro
- **Short description:** Xiaomi's flagship open-weights MoE (~1.02T) for demanding agentic and 1000+ tool-call tasks with strong 1M coherence; text-focused Pro sibling (prior gen to V2.6 Pro). Top use case: cheap open-weights long-horizon agentic/coding.
- **Provider / access:** Xiaomi API (`mimo-v2.5-pro`); open weights; OpenCode Zen `xiaomi/mimo-v2-5-pro`. No Zen Free ID.
- **Release / knowledge:** MiMo V2.5 generation (2026); knowledge cutoff not published.
- **IDs:** `xiaomi/mimo-v2-5-pro` (open weights).
- **Context window:** 1M (base 256K) (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text-only (Pro); tool calls yes.
- **Pricing (as of 2026-10-03):** ~$0.44 in / $0.87 out per 1M; free self-host (open weights).
- **Architecture:** ~1.02T open-weight MoE (text-focused Pro).

### Raw benchmarks found

Agent / tool use:

- τ²-bench **94.2%**; τ³-bench **72.9%**; TB2.0 **68.4%**; Claw-Eval **63.8%**; GDPval-AA **1265 Elo**; AA Agentic Index 22.7%; APEX-Agents-AA 2.4%

Reasoning / knowledge:

- GPQA-D **86.6%** (Vals 82.6%); MMLU-Pro **84.6%** (Vals); HLE **48%**; AA-LCR **79.7%**; AA Intelligence Index **26.0**; CritPt 4.0%

Coding:

- SWE-bench **74.0%** (Vals); SWE-bench Pro **57.2%**; LiveCodeBench **81.4%** (Vals); TB2.0 **68.4%**; AA Coding Index **60.2%**

Multimodal:

- Text-focused (Design Arena Website 1275)

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 94.2%, τ³-bench 72.9%, TB2.0 68.4%, GDPval 1265; AA Agentic Index 22.7% and APEX 2.4% cap it.
- **Reasoning: 74/100.** GPQA-D 86.6%, HLE 48%, AA-LCR 79.7%; AA Index 26 and CritPt 4% cap it.
- **Context window: 90/100.** 1M (base 256K) with AA-LCR 79.7%.
- **Multimodal: 15/100.** Text-focused — no verified image/audio/video input.
- **Coding: 76/100.** SWE-bench 74%, SWE-bench Pro 57.2%, LiveCodeBench 81.4%, Coding Index 60.2%.
- **Cost efficiency: 90/100.** ~$0.44/$0.87 per 1M plus free self-host (open weights).
- **Overall Score: 65.4/100.** Half-up mean of the five quality dims (72/74/90/15/76). A cheap open-weights long-horizon agentic model; text-only caps Overall (the omni V2.5 Free covers multimodal).

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Xiaomi MiMo-V2.5-Pro page, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
