# Hy3 Preview — findings by Muse Spark 1.3

- Source: Tencent/Hy3 Preview Hunyuan (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview (Tencent Hunyuan April 2026 preview)
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE (295B/21B, 256K context), the first model on the rebuilt Hy infrastructure, superseded by the stronger July 2026 full release.
- **Provider / access:** Tencent via Hunyuan API + Hugging Face (`tencent/Hy3-preview`) / ModelScope/GitCode; TokenHub preview routes (Chat Completions, hy_v3 tool-call/reasoning parsers, reasoning-effort control).
- **Release / knowledge:** 2026-04-23 preview (weights open-sourced same day); superseded 2026-07-06; knowledge cutoff undisclosed
- **IDs:** `tencent/hy3-preview` (state explicitly: no Free ID exists on Zen)
- **Context window:** 256,000 total (262K API listing) — verified via official GitHub README spec table and provider catalog
- **Modalities:** text, image in; text out; reasoning yes (no_think/low/high effort modes); tool calls yes
- **Pricing (as of 2026-09-21):** TokenHub preview ~$0.18 in / $0.60 out per 1M (provider catalog panel, Sep 2026; no Zen Free ID)
- **Architecture:** open-weights MoE, 295B total / 21B active (+3.8B MTP layer), 80 layers, 192 experts top-8, GQA 64 heads; Tencent Hy Community License

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Absolute percentages below are the official Hy3-preview-Base table (GitHub README, 5-shot/1-shot base harnesses) unless noted; instruct-model claims are qualitative per the README.

Agent / tool use:

- Terminal-Bench 2.0: **competitive score claimed, no percentage published** (GitHub README Code & Agent section — qualitative only)
- BrowseComp / WideSearch: **competitive scores claimed, no percentages published** (same section — qualitative only)
- ClawEval / WildClawBench: **scores well claimed, no percentages published** (same section — qualitative only)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- SuperGPQA (base): **51.60%** (GitHub README base table, 5-shot; vs Kimi-K2 base 51.10)
- MMLU-Pro (base): **65.76%** (same base table, 5-shot)
- MMLU (base): **87.42%** (same base table, 5-shot)
- MATH (base): **76.28%** (same base table, 4-shot); GSM8K 95.37%, CMath 91.17%
- FrontierScience-Olympiad / IMOAnswerBench: **strong performance claimed, no percentages published** (README highlights — qualitative only)
- GPQA Diamond: **no verified public instruct score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (closest proxy: provider catalog Score **68**)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **competitive score claimed, no percentage published** (README Code & Agent section — qualitative only; superseded by full Hy3 78.0%)
- LiveCodeBench (base): **34.86% LiveCodeBench-v6** (GitHub README base table, 1-shot base-model row)
- MBPP-plus (base): **78.71%** (same base table, 3-shot); CRUXEval-I 71.19% / CRUXEval-O 68.38%
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **256K window verified from spec; CL-bench / CL-bench-Life context-learning gains claimed without percentages** (README highlights); no verified MRCR v2 / RULER / GraphWalks percentage found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. Overall Score = mean of the five quality
> dimensions (Tool, Reasoning, Context, Multimodal, Coding) — Cost efficiency is
> scored independently and excluded from Overall.

- **Tool use: 68/100.** Preview-checkpoint agent gains claimed across SWE/TB/BrowseComp/ClawEval without published absolutes; capped a touch below the full Hy3 release.
- **Reasoning: 72/100.** Base SuperGPQA 51.60%, MMLU-Pro 65.76% and MATH 76.28% with strong Olympiad claims; capped by base-harness provenance and zero instruct absolutes.
- **Context window: 72/100.** Verified 256K maps to the low-70s tier; capped below 1M models with no retrieval proof.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 70/100.** Base LiveCode 34.86% and MBPP 78.71% with competitive instruct SWE/TB claims; capped below the full release (SWE-Verified 78.0%) for missing preview absolutes.
- **Cost efficiency: 94/100.** Preview ~$0.18/$0.60 cheap paid value with no $0 tier.
- **Overall Score: 69/100.** Mean of the five non-cost dims (68+72+72+65+70)/5 = 69.4; best-fit superseded preview — prefer the full Hy3 release.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-09-21
- Method: deeper public internet research superseding the 2026-09-18 excluded attempt (Tencent GitHub Hy3-preview README spec + base benchmark tables, provider catalog pricing/score panel, Tencent launch releases); base-model rows labeled where applicable; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
