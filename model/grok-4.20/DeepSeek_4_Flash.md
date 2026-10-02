# Grok 4.20 — findings by DeepSeek 4 Flash

- Source: xAI/Grok 4.20
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's 2M-context multimodal reasoning model (Grok 4.20 reasoning variant, 4.20-beta), positioned above Grok 4.1 and below Grok 4.3/4.5; strong vision and coding-breadth, weaker long-horizon agentic execution.
- **Provider / access:** xAI API (`grok-4.20-0309-reasoning` on Vals); OpenRouter (`x-ai/grok-4.20`); proprietary.
- **Release / knowledge:** 4.20 (0309 build referenced on Vals); knowledge cutoff not disclosed.
- **IDs:** `x-ai/grok-4.20`; Vals id `grok_grok-4.20-0309-reasoning`
- **Context window:** 2,000,000 (2M) — verified on BenchLM.
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** paid API; BenchLM lists $2.50/1M output. Input price not independently verified in this pass.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **47.1%** (Meta Muse Spark comparison chart)
- Terminal-Bench 2.1 (Vals): **44.2%**
- DeepSearchQA: **62.8%** (Meta comparison chart)
- Gert Labs: **38.36%** (Gert Labs rankings)

Reasoning / knowledge:

- GPQA Diamond: **88.5%** (Meta chart); Vals **88.6%**
- HLE (w/o tools): **31.6%** (Meta chart)
- MMLU-Pro (Vals): **86.3%**
- ARC-AGI-2: **53.3%**; ARC-AGI-3: **0.1%** (ARC Prize leaderboard)
- HealthBench Hard: **20.3%**; MedXpertQA (Text): **50.2%** (Meta chart)

Coding:

- SWE-bench Verified: **76.7%** (Meta chart); Vals **72.2%**
- SWE-bench Pro: **51.8%** (Meta chart)
- LiveCodeBench Pro: **74.2%** (Meta chart); LiveCodeBench (Vals): **84.3%**
- Vibe Code Bench: **4.06%** (Vals)

Multimodal:

- MMMU-Pro: **75.2%**; CharXiv: **60.9%**; ERQA: **54.1%**; SimpleVQA: **57.4%**; MedXpertQA (MM): **65.8%** (Meta chart)
- Design Arena Website: **1237** Elo (OpenRouter)

Long context:

- No MRCR/RULER value reported; 2M context claimed

### Normalized scores (1–100)

- **Tool use: 52/100.** Terminal-Bench 2.0 47.1% / 2.1 44.2% are mid-tier; Gert Labs 38.36% and DeepSearchQA 62.8% keep it near the middle.
- **Reasoning: 72/100.** GPQA 88.5% and MMLU-Pro 86.3% are strong; HLE 31.6%, HealthBench Hard 20.3% and ARC-AGI-3 0.1% cap it.
- **Context window: 96/100.** 2M-token input verified; no published retrieval score to reach 100.
- **Multimodal: 68/100.** Image input with MMMU-Pro 75.2% and a range of vision benchmarks; text-only output.
- **Coding: 68/100.** SWE-bench Verified 76.7% and LiveCodeBench 84.3% are good; SWE-Pro 51.8% and Vibe Code 4.06% trail.
- **Cost efficiency: 72/100.** $2.50/1M output is mid-priced; input price unverified.
- **Overall Score: 71/100.** Mean of (52 + 72 + 96 + 68 + 68) / 5 = 71.2 → 71. Best-fit: wide-context multimodal model for vision-heavy and mixed coding tasks, not long-horizon agentics.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchLM, Vals AI, Meta comparison chart, ARC Prize, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
