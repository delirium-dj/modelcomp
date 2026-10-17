# Grok Build 0.1 — findings by Beam

- Source: xAI/Grok Build 0.1, `x-ai/grok-build-0.1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding model (May 20, 2026): 256K context, 230K max output. Text/image/file in. Vibe Code Bench v1.1 13.3%. AA Intelligence Index 27. AA Coding Index not reported. $1/$2 per 1M.
- **Provider / access:** xAI API; OpenRouter; Kilo Code.
- **Release / knowledge:** Released 2026-05-20; knowledge cutoff not stated.
- **IDs:** `x-ai/grok-build-0.1`
- **Context window:** 256,000 tokens; max output 230,400.
- **Modalities:** text, image, file in; text out; reasoning no; tool calling yes.
- **Pricing (as of 2026-10-17):** $1.00 / 1M input, $2.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **30.3** (Estimated · #93/128)
- Gert Labs: **49.15%** (Gert Labs)
- OSWorld: not reported
- Tool calling: supported (per Kilo Code)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- GPQA Diamond (Vals): not reported
- MMLU-Pro (Vals): not reported
- HLE: not reported
- AA Intelligence Index: **27** (Artificial Analysis, AA)
- ObviousBench: **+28.5 pts** vs GPT-5.6 Sol (BenchmarkList)

Coding:

- Coding public-lane (BenchLM): **24.3** (Estimated · #108/150)
- Vibe Code Bench v1.1: **13.3%** (BenchmarkList)
- LiveCodeBench: not reported
- SWE-bench: not reported
- Terminal-Bench: not reported

Long context:

- 256K window; LCR: not reported.

Multimodal:

- Text/image/file in; multimodal lane not reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** Agentic lane #93/128 (30.3), Gert Labs 49.15%; caps at no published Terminal-Bench/OSWorld.
- **Reasoning: 60/100.** AA Intelligence 27; caps at no published GPQA/HLE/MMLU-Pro.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image/file in; caps at no verified multimodal benchmarks.
- **Coding: 56/100.** Vibe Code 13.3%, coding lane #108/150 (24.3); caps at Vibe Code 13.3%.
- **Cost efficiency: 90/100.** Cheap $1/$2 per 1M.
- **Overall Score: 60/100.** Mean of five quality dims (BenchLM not computed); best-fit for cheap coding at low cost. Low-confidence (only 5 benchmarks, ECI 115.33).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI official, BenchLM, BenchmarkList, Kilo Code, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (Grok Build 0.1 has 5 verified benchmarks, so not excluded.)