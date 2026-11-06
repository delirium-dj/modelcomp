# GPT-6.1 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI/GPT-6.1 Sol (`openai/gpt-6.1-sol`; catalogue id `opencode/gpt-6.1-sol`)
- Date: 2026-10-16 (UTC) — rewrite; re-verified 2026-10-18; enriched 2026-10-24; re-researched 2026-11-06
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-research pass — 2026-11-06** (second pass, user-requested). Fresh sources this pass: BenchLM (`gpt-6-1-sol`, **47 rows**, **85.28/100, #4 of 1015** — was 42 rows, 84.32, #2 of 992), OpenAI launch post + system-card addendum, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex.
> **Refreshed values:** **AA Intelligence Index 54.6** (was ~51.8/52); GDPval-AA Elo **1609** (was 1575); AA-Omniscience **42.0 / 61.8% / 51.9%** (hallucination improved from 54.3%); ExtractBench 95.31%; ParseBench 69.63%; Design Arena 1312.
> **Newly captured rows:** **ScarfBench 68.4%**; **FrontierCode 2.0 39.0%** (Cognition); STEMBench 2.76; ARC-AGI-3 provider adapter 96.18%; HealthBench 56.7 raw / 58.5 length-adj / 64.2 Pro / 36.2 Hard.
> **Re-verified unchanged:** TB4.0 56.1% / TB-Science 57.0%; Vals Vibe Code 88.93% (#8/112), IOI 96.89% (#3); DeepSWE 71.9% (max); FrontierMath v2 **Tier-4 100.000%** / T1–3 93.684%; ARC-AGI-2 94.2%; pricing $2/$10 ($0.10 cached; >272K → 2×/1.5×).
> **No score change:** the profile is unchanged and the AI-index refresh moved up; scores held at 83.
> Sources this pass: https://benchlm.ai/models/gpt-6-1-sol · https://openai.com/index/introducing-gpt-6-1-sol/ · https://artificialanalysis.ai/models/gpt-6-1-sol · https://www.vals.ai/models/openai_gpt-6.1-sol

> **Enrichment pass — 2026-10-24** (second pass, user-approved). BenchLM (`gpt-6-1-sol`) re-read on 2026-10-23/25 carried **42 source-displayable rows** (was 24 on 2026-10-18) and computed **84.32/100, #2 of 992** (was #2 of 228). Newly captured then: FrontierMath v2 Tier-4 100.000% / T1–3 93.684% (Epoch AI), GDPval-AA 1596 Elo / 54.8%, AA-Briefcase 1555, AA AutomationBench 64.9%, AA TB4.0 56.1%, TB-Science 57.0%, ExploitGym 35.1%, GDP.pdf 31.0%, AA-AnalystAgent 50.0%, MazeBench 17%, Hermes 57.1/73.9, MLCR-AA 38.3%, HealthBench Pro 64.2%, AA-Omniscience 41.5/62.1/54.3, AA-MMMU-Pro 86.0%, ExtractBench Pro 12%, ParseBench 69.70%, Design Arena 1320, Bug Hunt 44.3 fixes. Scores adjusted that pass: Reasoning 85→86; Overall held 83.

> **Re-verified 2026-10-18.** BenchLM (`gpt-6-1-sol`, 24 rows) computed an overall **84.21/100 (#2 of 228)**. **No score change.**

> **Rewrite pass — 2026-10-16** (≥3 independent sources). Re-sourced: AA (max) Index 52, AA-Briefcase 1564, GDPval-AA 1575, AutomationBench 65%, TB4.0 56%, SciCode 54%, HLE 53%, CritPt 32%, GDP.pdf 31%, ~53.5 t/s, $0.72/task. Vals: Vals Index 61.15% (#9/48), TB4.0 55.05% (#7/48), TB-Science 52.86% (#2/41), Vibe Code 88.93% (#8/112), IOI 96.89% (#3/44), Code Migration 65.12%, ProofBench 99.0%, BioMystery 79.63%, SRE Bench 50.76%, ProgramBench 3.0%, CyberBench 39.29%. OpenAI self: DeepSWE 75.2% (high) / 71.9% (max), OSWorld 2.0 offline 71.4%. Foundry + opencode data: 1.05M ctx, 128K out, text+image+pdf in, $2/$10. Conflicts surfaced: context rounding; DeepSWE effort-peak; AutomationBench effort framing; AA index vs self; slow TTFT at max.

## Model card

- **Name:** GPT-6.1 Sol (OpenAI GPT-6 family, mid-cost tier; paid API only)
- **Short description:** OpenAI's mid-tier GPT-6 reasoning model, shipped at DevDay on 2026-09-29 as a point upgrade to GPT-6 Sol. Near-flagship (GPT-6 Astra) quality on agentic coding, computer use and professional knowledge work at roughly a fifth of Astra's standard token price. Not an alias of GPT-6 Sol — distinct API id, cheaper cache reads, and the "none" reasoning tier is unsupported.
- **Provider / access:** OpenAI API as `gpt-6.1-sol` (Responses with tools), Microsoft Foundry/Azure; ChatGPT Work and Codex for Plus/Pro/Business/Enterprise/Edu. An "Ultrafast" (up to 8×) variant announced but unpriced. US/EU data residency.
- **Release / knowledge:** Released 2026-09-29; knowledge cutoff 2026-04-30.
- **IDs:** `openai/gpt-6.1-sol`. No OpenCode Zen Free ID — paid API only.
- **Context window:** 1,050,000 input tokens (~922K usable before repricing) and 128,000 max output. Any prompt over 272K input tokens reprices the whole request.
- **Modalities:** text, image and PDF/file in, text out; five effort levels (low→max; medium default; "none" unsupported); tool calls, structured output. No audio/video; no fine-tuning.
- **Pricing (as of 2026-11-06):** $2.00 / 1M input, $10.00 / 1M output, $0.10 / 1M cached input (cache write $2.50); long context >272K → 2× input/cache, 1.5× output; Batch/Flex 50% cheaper; Fast mode 2×. Paid only.
- **Architecture:** proprietary; no parameter count. Zero-data-retention option available.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **56.1% (AA)** / **55.05% (Vals, #7/48)**; Terminal-Bench Science **52.86% (Vals, #2/41)** / 57.0% (OpenAI max)
- GDPval-AA: **1609 Elo / 54.8%** (AA); AA-Briefcase **1555 Elo**; AA AutomationBench **64.9%** (AA) / 36.1% (max, vendor)
- OSWorld 2.0 offline 71.4% (max, vendor); Vals SRE Bench **50.76% (#2/35)**; Code Migration 65.12% (#5/77); ExploitGym 35.1%
- Vals Index: **61.15% (#9/48)**; AA-AnalystAgent 50.0%; Hermes 57.1/73.9; MazeBench 17%
- Tau3-Banking / Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE **53% (AA-HLE 52.9)**; CritPt **31.7%** (AA); AA-LCR 83.0%; MLCR-AA 38.3%
- ARC-AGI-1 96.5% / ARC-AGI-2 **94.2%** / ARC-AGI-3 52.7% / provider adapter 96.18% (ARC Prize, Max)
- Artificial Analysis Intelligence Index (max) **54.6** — ~1 behind GPT-6 Astra class; GPQA Diamond **no verified public score found**
- AA-Omniscience **42.0 / 61.8% / 51.9%**; HealthBench 56.7 raw / 58.5 length-adj / 64.2 Pro / 36.2 Hard

Coding:

- DeepSWE v1.1 (high) **75.2%** (vendor; max 71.9%); Vibe Code Bench v1.1 **88.93% (#8/112)** (Vals); IOI **96.89% (#3/44)**; AA-SciCode 54.2%
- **ScarfBench 68.4%**; **FrontierCode 2.0 39.0%**; SWE-bench Multimodal 43.54%; ProgramBench 3.0%; DeepSWE max 71.9% (BenchLM row)
- SWE-bench Verified / LiveCodeBench: **no verified public score found**

Long context / multimodal:

- AA-LCR v1.1 **83.0%**; MLCR-AA 38.3%; no MRCR/RULER/GraphWalks — **not published**; the 1.05M window is catalogue-verified only
- AA-MMMU-Pro **86.0%**; ExtractBench **95.31%** / Pro 12%; ParseBench 69.63%; Design Arena 1312

### Normalized scores (1–100)

- **Tool use: 88/100.** AA TB4.0 56.1%, GDPval-AA 1609, AA AutomationBench 64.9% and Vals TB-Science 52.86% (#2/41) confirm strong agentic ability; held below 90 because the headline DeepSWE/AutomationBench claims are vendor-run and GDPval-AA sits under the ~1750 frontier reference.
- **Reasoning: 86/100.** HLE 53% (AA), ARC-AGI-2 94.2% (verified), CritPt 31.7% and AA-LCR 83.0% are frontier-adjacent, and Epoch's FrontierMath v2 Tier-4 reads **100.0%**; capped by an AA Index of 54.6 (behind Opus 5.5/Astra) and still-missing GPQA Diamond.
- **Context window: 92/100.** 1.05M input / 128K output clears the 1M band; held below 97 by the 272K reprice threshold and the absence of a ≥98%-at-512K recall benchmark (AA-LCR 83.0% is reasoning, not pure recall).
- **Multimodal: 60/100.** Text, image and PDF/file input, text out, with a strong MMMU-Pro 86.0% (AA); clear text+image band; no audio/video keeps it mid-pack.
- **Coding: 91/100.** DeepSWE v1.1 75.2% (high effort) beats Astra's best run at about one-seventh the per-task cost, and independent Vals Vibe Code 88.93% (#8/112), IOI 96.89% (#3), ScarfBench 68.4% and AA-SciCode 54.2% corroborate; capped by vendor-only sourcing on the DeepSWE peak and no SWE-bench Verified.
- **Cost efficiency: 72/100.** $2.00/$10.00 with a $0.10 cache read is mid-price for 2026 (roughly a fifth of Astra, about half of Opus 5.5's per-task cost) but far from the sub-$0.5 open-weight tier.
- **Overall Score: 83/100.** (88 + 86 + 92 + 60 + 91) / 5 = 83.4 → 83. Best fit: high-volume agentic coding, computer-use and document work where near-Astra quality at mid-tier cost beats absolute peak scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-06
- Method: re-research pass (user-requested second pass) over public internet research (OpenAI launch/system-card, BenchLM re-read 2026-11-05, Artificial Analysis, Vals AI, Epoch AI, LlamaIndex). Refreshed AA rows (Index 54.6, GDPval 1609, Omniscience 42.0/61.8/51.9), captured ScarfBench/FrontierCode 2.0/HealthBench rows; scores held. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-6.1 Sol](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [BenchLM — GPT-6.1 Sol benchmark scores](https://benchlm.ai/models/gpt-6-1-sol)
  - [Artificial Analysis — GPT-6.1 Sol](https://artificialanalysis.ai/models/gpt-6-1-sol)
  - [Vals AI — GPT-6.1 Sol](https://www.vals.ai/models/openai_gpt-6.1-sol)
  - [Epoch AI — FrontierMath v2 Tier-4](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
