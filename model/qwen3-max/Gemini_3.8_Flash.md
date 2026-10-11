# Qwen3 Max — findings by Gemini 3.8 Flash

- Source: opencode/qwen3-max
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen3 Max
- **Short description:** Alibaba's proprietary Qwen3-generation flagship for coding agents, complex reasoning and tool use, with thinking mode.
- **Provider / access:** opencode/qwen3-max
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/qwen3-max (no Free ID on Zen)
- **Context window:** 262,144 total (65,536 out)
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-11):** $1.20/$6.00 per 1M in/out (Alibaba; tiered above 32K/128K)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

Agent / tool use:

- t2-bench (Terminal-Bench 2 family): **74.8%** (llm-stats)
- τ²-Bench: **83.6%** (Requesty/AA-sourced leaderboard) — exceptional
- Terminal-Bench Hard: **24.2%** (Requesty/AA)
- GDPval / Claw-Eval / Toolathon: no verified public score found; AA Intelligence-Index-only agent runs (AA-TB4 2% belongs to the AA harness for the family, treat cautiously)

Reasoning / knowledge:

- GPQA Diamond: **86.1%** (Requesty, sourced from public leaderboards)
- HLE: **28.0%** (Requesty)
- AIME 2025: **81.6%** (llm-stats)
- Artificial Analysis Intelligence Index: **21** (AA model page) — mid band
- CritPt: 0% / AA-LCR v1.1 50% / AA-Omniscience −49 (AA harness, preview-style low values — recorded as-is)
- MLCR / Omniscience Accuracy / BenchLM overall: no verified public score found

Coding:

- SWE-bench Verified: **69%** (llm-stats)
- DeepSWE / LiveCodeBench / SciCode / Vibe / SWE-Pro: no verified public score found

Long context:

- no long-context retrieval reported (no MRCR/RULER for Qwen3 Max; Qwen3.7-Max's MRCR-v2 90.4 is a different model — not borrowed)

### Normalized scores (1–100)

- **Tool use: 74/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 69/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 78/100.** Effective retrieval fidelity across context capacity (262,144 total (65,536 out)).
- **Multimodal: 15/100.** Input/output modality comprehension (Text in/out).
- **Coding: 72/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 78/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 61.6/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
