# Claude Fable 5.1 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's Mythos-class flagship (2026-09-01) for most demanding coding and knowledge work, same weights as Mythos 5.1 with general safeguards, 1M context and 128K output.
- **Provider / access:** Anthropic Claude API `claude-fable-5-1`, AWS Bedrock `anthropic.claude-fable-5-1`, Google Cloud, Microsoft Foundry
- **Release / knowledge:** 2026-09-01; knowledge cutoff 2026-01
- **IDs:** `anthropic/claude-fable-5.1` (no Zen Free ID — paid only)
- **Context window:** 1,000,000 total (1M / 128K out) — verified via Anthropic release post and Vals
- **Modalities:** Text, image, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $10.00 in / $50.00 out per 1M; cache reads $0.25 / 1M (75% cut vs Fable 5); estimated -25% typical / -45% agentic cost
- **Architecture:** Proprietary (Claude 5 generation)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.02%** (Vals evaluation 2026-09-01 — #2 behind GPT-5.6 Sol 85.77%, up from Fable 5 80.52%)
- Terminal-Bench 4.0: **55.8%** (Anthropic launch table; Mythos 5.1 60.9%) vs Fable 5 42.0%, Opus 5 52.3%, GPT-5.6 Sol 37.3%
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch table) vs Fable 5 24.7%, Opus 5 29.0%, GPT-5.6 Sol 22.4%
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2: **1,853 Elo** (Anthropic launch table) vs Fable 5 1,723, Opus 5 1,824, GPT-5.6 Sol 1,711
- Claw-Eval / ClawProBench: **no verified public score found**
- OSWorld 2.0: **scored 0 on safeguards-intervened tasks** (Anthropic note — safeguards routed; not counted)
- AutomationBench: **0 on safeguards-intervened tasks** (Anthropic note)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (Fable 5 family historically 87% on GPQA)
- HLE: **scored 0 on safeguards-intervened variant per Anthropic table note**; independent HLE not published
- LCR / MLCR: **no verified public score found**
- ARC-AGI-1 Semi-Private: **97.5% max effort at $1.40/task** (ARC Prize verified; xhigh 96.5%, high 96.0%)
- ARC-AGI-2 Semi-Private: **90.0% max/xhigh at $4.49/task** (ARC Prize; high 88.8%)
- RSI Index: **35.03% #1 overall** (Vals 2026-09-04 — vs Opus 5 32.10% at $1,886)
- Artificial Analysis Intelligence Index: **66** (independent AA vs Astra 61; kie.ai summary; also ranked #1 on Vals Index 67.87%)
- Vals Index: **67.87% #1** (Vals 2026-09-01 vs Opus 5 67.21% and Fable 5 66.04%)
- Omniscience Accuracy / Hallucination Rate: **hallucination regression noted by AA (attempts wrong answers more often)** — no numeric rate disclosed

Coding:

- SWE-bench Verified / SWE-Pro: **no verified isolated public score found for 5.1** (Fable 5 was 80.3% SWE-Pro SOTA; 5.1 expected ≥ that but not published separately)
- SWE-bench Multilingual/Multimodal: **no verified public score found**
- LiveCodeBench (Vals mirror): **90.52% overall #1 of 143** (Vals 2026-09-01 — leads Fable 5 89.78% and Gemini 3.8 Flash 89.48%)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench v1.1: **90.26%** (Vals — within noise of Fable 5 leading 90.35%)
- FrontierCode: **state-of-the-art** (Anthropic claim for Fable 5; 5.1 maintains lead — numeric not disclosed)
- ProofBench v1.1: **100.00%** (Vals — up from 95.00% for Fable 5, matched by AlephProver)

Long context:

- 1M context with file-based memory: Slay the Spire 3× better than Opus 4.8 (Anthropic Fable 5 blog); no MRCR/RULER numeric

### Normalized scores (1–100)

- **Tool use: 92/100.** TB4.0 55.8 + TB-Science 52.6 doubling predecessor + LiveCode 90.52% #1 + GDPval 1853 leader; capped by safeguards-zeroing OSWorld/Automation.
- **Reasoning: 95/100.** ARC-AGI 97.5/90.0 + RSI 35.03% #1 + Vals 67.87% #1 + AA Index 66 #1; strongest reasoning profile in independent eval.
- **Context window: 96/100.** 1M / 128K; tier 95-100 for ≥1M but capped below 100 without MRCR ≥98% disclosure.
- **Multimodal: 65/100.** Text/image/PDF in; lacks video/audio in needed for 75+; vision strong on scientific figures/screenshot rebuild per Anthropic.
- **Coding: 96/100.** LiveCode 90.52% #1 + Vibe 90.26% + ProofBench 100% + FrontierCode SOTA + TB-Science lead; capped below 98 without isolated SWE-Pro number.
- **Cost efficiency: 35/100.** $10/$50 flagship pricing (highest tier) mitigated by 75% cache cut saving ~25-45%; efficiency low vs free/cheap models.
- **Overall Score: 89/100.** Mean of five non-cost dims (92+95+96+65+96)/5=88.8 → 89; best-fit for frontier coding/science where cost secondary and safeguards acceptable.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Anthropic news 2026-09-01, Vals.ai, ARC Prize, Artificial Analysis, claudefa.st); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
