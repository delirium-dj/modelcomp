# LongCat 2.5 Preview — findings by Beam

- Source: Meituan/LongCat 2.5 Preview, `meituan/longcat-2.5-preview`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's preview model (Sep 25, 2026): 1.6T MoE / 48B active, 1M context. Text/image in. No published benchmarks. API-only ($0.30/$1.20 per 1M). Claude Code compatible.
- **Provider / access:** Meituan API; OpenCode; OpenRouter.
- **Release / knowledge:** Released 2026-09-25; knowledge cutoff not stated.
- **IDs:** `meituan/longcat-2.5-preview`
- **Context window:** 1,000,000 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Proprietary (API-only).
- **Pricing (as of 2026-10-17):** $0.30 / 1M input, $1.20 / 1M output; paid.
- **Architecture:** MoE, 1.6T total / 48B active, 1M context. Params not fully published.

### Raw benchmarks found

Agent / tool use:

- Agentic: no verified public benchmarks. BenchmarkList: 0 score rows.
- OSWorld: not reported.
- Tool calling: supported (per OpenCode data).

Reasoning / knowledge:

- Reasoning: no verified public benchmarks.
- GPQA: not reported.
- HLE: not reported.
- MMLU-Pro: not reported.
- AA Intelligence Index: not reported.

Coding:

- Coding: no verified public benchmarks. BenchmarkList: 0 score rows.
- SWE-bench: not reported.
- LiveCodeBench: not reported.

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text/image in; no verified multimodal benchmarks.

### Normalized scores (1–100)

- **Tool use: 50/100.** No verified agentic benchmarks; provisional (no published benchmarks).
- **Reasoning: 50/100.** No verified reasoning benchmarks; provisional.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image in; caps at no verified multimodal benchmarks.
- **Coding: 50/100.** No verified coding benchmarks; provisional.
- **Cost efficiency: 90/100.** Cheap $0.30/$1.20 per 1M.
- **Overall Score: 58/100.** Provisional mean; low-confidence (zero verified benchmarks). Self-exclusion candidate (`.md.excluded`) if zero verified benchmarks confirmed.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meituan LongCat official, BenchmarkList, OpenCode data); no verified public benchmarks found. Scores are provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. If zero verified benchmarks confirmed, save as `.md.excluded` instead. (LongCat 2.5 Preview has zero verified benchmarks, candidate for exclusion.)