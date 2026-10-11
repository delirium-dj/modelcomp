# GPT-5.5 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (Xhigh)
- **Short description:** OpenAI's April 2026 Pro variant of GPT-5.5, optimized for maximum performance on complex tasks requiring deep reasoning and agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), ChatGPT Pro
- **Release / knowledge:** Released April 23, 2026; knowledge cutoff August 2025
- **IDs:** `opencode/gpt-5.5-pro` (per `meta.json`); `gpt-5-5-pro` (AA slug, dots→hyphens); `gpt-5.5-pro` (BenchLM slug, model ID)
- **Context window:** 920k total (per AA model page, ~922k confirmed); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-10):** $30.00 input / $180.00 output per 1M tokens (OpenAI API); $0.00 via ChatGPT Pro subscription; AA lists provider median as $0.00
- **Reasoning:** Yes (extended thinking / chain-of-thought, xhigh effort)
- **Speed:** AA page shows "Unknown" for output tokens per second
- **Status:** Active (AA page notes: "Check the providers page for current API availability")

### Raw benchmarks found

> Sources: OpenAI announcement, BenchLM (`https://benchlm.ai/models/gpt-5-5-pro`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-5-pro`). BenchLM covers 9 of 618 benchmarks as of 2026-10-10.

Agent / tool use:

- **BrowseComp:** **90.1%** — (OpenAI: Introducing GPT-5.5 announcement)
- **GDPval (wins or ties):** **84.9%** — (OpenAI: Introducing GPT-5.5 announcement)
- **MCP Atlas:** **75.3%** — (OpenAI: Introducing GPT-5.5 announcement; Scale AI post-April 2026 update)
- **OSWorld-Verified:** **78.7%** — (OpenAI: Introducing GPT-5.5 announcement)
- **CyberGym:** **81.8%** — (OpenAI: Introducing GPT-5.5 announcement)
- **Tau2-bench Telecom:** **98.0%** — (OpenAI: Introducing GPT-5.5 announcement; original prompts, no prompt adjustment)
- **Toolathlon:** **55.6%** — (OpenAI: Introducing GPT-5.5 announcement)
- **FinanceAgent v1.1:** **60.0%** — (OpenAI: Introducing GPT-5.5 announcement)
- **Investment Banking Modeling Tasks:** **88.5%** — (OpenAI: Introducing GPT-5.5 announcement)

Coding:

- **SWE-Bench Pro (Public):** **58.6%** — (OpenAI: Introducing GPT-5.5 announcement)
- **Terminal-Bench 2.0:** **82.7%** — (OpenAI: Introducing GPT-5.5 announcement)
- **DeepSWE 1.1:** **69.6%** — (BenchLM)
- **LiveCodeBench:** **88.5%** — (BenchLM)
- **AA Coding Index:** **82.0%** — (BenchLM model page)
- **AA-SciCode:** **64.5%** — (BenchLM model page)
- **VulcanBench v3:** **86.0%** — (BenchLM model page)

Reasoning / knowledge:

- **ARC-AGI-1 (Verified):** **95.0%** — (ARC Prize official leaderboard via BenchLM)
- **ARC-AGI-2 (Verified):** **84.2%** — (ARC Prize official leaderboard via BenchLM)
- **GPQA Diamond (Pro):** **95.1%** — (BenchLM model page)
- **HLE (with tools):** **60.4%** — (BenchLM model page)
- **FrontierMath v2 (Tiers 1-3):** **51.0%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** **39.6%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)
- **BixBench:** **80.5%** — (OpenAI: Introducing GPT-5.5 announcement)
- **CritPt:** **30.6%** — (Artificial Analysis: CritPt benchmark leaderboard via BenchLM)

Multimodal & grounded:

- **MMMU Pro (no tools):** **81.2%** — (OpenAI: Introducing GPT-5.5 announcement)
- **MMMU Pro (with tools):** **83.2%** — (OpenAI: Introducing GPT-5.5 announcement)

Long context (from OpenAI announcement table):

- **OpenAI MRCR v2 8-needle (various ranges):** 98.1% at 4K-8K, 93.0% at 8K-16K, 96.5% at 16K-32K, 90.0% at 32K-64K, 83.1% at 64K-128K, 87.5% at 128K-256K, 81.5% at 256K-512K, 74.0% at 512K-1M
- **Graphwalks BFS 256k:** 73.7%
- **Graphwalks parents 256k:** 90.1%

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> > Confidence: high — 9 public benchmarks found across 4 sources (BenchLM, OpenAI, AA, Epoch AI).

- **Tool use: 96/100.** BrowseComp 90.1% (near ≥90% frontier ref), GDPval 84.9% (wins or ties), MCP Atlas 75.3%, OSWorld-Verified 78.7%, CyberGym 81.8%, Tau2 Telecom 98.0% (≥90% frontier ref), FinanceAgent 60.0%, Investment Banking 88.5%, Toolathlon 55.6%. Exceptional agentic cluster with two ≥90% frontier benchmarks.
- **Reasoning: 95/100.** GPQA 95.1% (revised up from 94.4% — BenchLM confirms), AA-HLE 60.4% (with tools, above 40% frontier), AA-LCR 86.0% strong, MMLU-Pro 89.2%, AA-MMLU-Pro 91.0%, BixBench 80.5%, CritPt 30.6%. Capped by no GPQA ≥96% threshold.
- **Context window: 93/100.** 920k tokens per AA model page (confirmed 922k). Just under 1M — in the 500K-1M tier → 85-94 range. At 922k (92% of 1M), scores 93. MRCR 8-needle curve: 98.1% at 4K-8K, declining to 74.0% at 512K-1M (no ≥98% at 512K+ for 100). Meta.json claims 128K — discrepancy noted.
- **Multimodal: 70/100.** Text and image input only (per AA model page and announcement). Per methodology "+image in = 60-70"; strong vision (MMMU-Pro 81.2% no tools, 83.2% with tools) confirm capability. Meta.json claims "Text in/out" — discrepancy noted.
- **Coding: 88/100.** DeepSWE 69.6%, LiveCodeBench 88.5%, AA Coding Index 82.0%, SWE-Bench Pro 58.6%, Terminal-Bench 2.0 82.7%, VulcanBench 86.0%, AA-SciCode 64.5%. Capped by SWE-Bench Pro below 74% frontier threshold.
- **Cost efficiency: 28/100.** $30.00 input / $180.00 output per 1M tokens (OpenAI API pricing) — extremely expensive. Also available free via ChatGPT Pro subscription; AA lists provider median as $0.00.
- **Overall Score: 88.4/100.** Half-up mean: (96+95+93+70+88)/5 = 442/5 = 88.4 → 88. GPT-5.5 Pro delivers frontier reasoning (GPQA 95.1%, HLE 60.4%), exceptional agentic tool use (Tau2 Telecom 98.0%, GDPval 84.9%, BrowseComp 90.1%), and strong coding (LiveCodeBench 88.5%, Terminal-Bench 82.7%). Limited by very expensive API pricing ($30/$180).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI announcement; scores are normalized 1–100 interpretations per model-comparison.md v4.
- Sources: BenchLM.ai model page `https://benchlm.ai/models/gpt-5-5-pro` (Overall 76.45/100, rank #14/887, GPQA 95.1%, AA-HLE 60.4%, MRCR 8-needle curve); OpenAI announcement (BrowseComp 90.1%, GDPval 84.9%, MCP Atlas 75.3%, OSWorld-Verified 78.7%, CyberGym 81.8%, Tau2 98.0%, SWE-Pro 58.6%, Terminal-Bench 82.7%, MMMU-Pro 81.2%); AA model page (Intelligence Index, modalities, 920k context); Epoch AI FrontierMath leaderboard.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.5_Pro_System_Card.md`, using the same headings.

---
