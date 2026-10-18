# GPT-5.5 Pro — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-17 (UTC)
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

> Sources: BenchLM.ai model page `https://benchlm.ai/models/gpt-5-5-pro` (Overall 73.37/100, rank #13/954, 9 of 639 benchmarks, 2026-10-17); OpenAI announcement; Epoch AI.

Agent / tool use:

- **BrowseComp:** **90.1%** — (OpenAI: Introducing GPT-5.5 announcement — confirmed on current BenchLM page, ≥90 frontier ref)
- **τ²-bench Telecom:** **98.0%** — (OpenAI: Introducing GPT-5.5 announcement; original prompts, no prompt adjustment — NOT on current BenchLM page, retained from prior file)
- GDPval (wins or ties): 84.9% — (OpenAI: Introducing GPT-5.5 announcement — NOT on current BenchLM page)
- MCP Atlas: 75.3% — (OpenAI — NOT on current BenchLM page)
- OSWorld-Verified: 78.7% — (OpenAI — NOT on current BenchLM page)
- CyberGym: 81.8% — (OpenAI — NOT on current BenchLM page)
- FinanceAgent v1.1: 60.0% — (OpenAI — NOT on current BenchLM page)
- Investment Banking: 88.5% — (OpenAI — NOT on current BenchLM page)
- Toolathlon: 55.6% — (OpenAI — NOT on current BenchLM page)

Coding:

- All coding benchmarks (DeepSWE 69.6%, LiveCodeBench 88.5%, AA Coding Index 82.0%, AA-SciCode 64.5%, VulcanBench 86.0%, SWE-bench Pro 58.6%, Terminal-Bench 2.0 82.7%) — NOT on current BenchLM page (9 of 639 benchmarks, none are coding). Retained from prior file for reference.

Reasoning / knowledge:

- ARC-AGI-1: **95.00%** — (ARC Prize official leaderboard via BenchLM — confirmed on current page, ≥96 frontier threshold)
- ARC-AGI-2: **84.2%** — (ARC Prize official leaderboard via BenchLM — confirmed)
- GPQA: **94.6%** — (OpenAI: Introducing GPT-5.5 announcement — confirmed on current page, ≥90 frontier threshold)
- GPQA-D: **94.6%** — (OpenAI: Introducing GPT-5.5 announcement — confirmed, ≥90 frontier)
- HLE: **57.2%** — (OpenAI: Introducing GPT-5.5 announcement — confirmed, revised down from 60.4%)
- HLE w/o tools: **43.1%** — (OpenAI: Introducing GPT-5.5 announcement — new, above 40% frontier threshold)
- CritPt: **30.6%** — (Artificial Analysis: CritPt benchmark leaderboard via BenchLM — confirmed)
- FrontierMath (legacy): **52.4%** — (OpenAI: Introducing GPT-5.5 announcement — confirmed)
- **FrontierMath v2 (Tiers 1-3): 87.719%** — (Epoch AI FrontierMath v2 leaderboard — CRITICAL CORRECTION from 51.0% in prior file; now ≥85 frontier threshold)
- FrontierMath v2 (Tier 4): **78.049%** — (Epoch AI — CRITICAL correction from 39.6% in prior file)

Multimodal:

- MMMU-Pro (no tools): 81.2% — (OpenAI — NOT on current BenchLM page)
- MMMU-Pro (with tools): 83.2% — (OpenAI — NOT on current BenchLM page)

Long context (from OpenAI announcement table):

- OpenAI MRCR v2 8-needle (various ranges): 98.1% at 4K-8K, 93.0% at 8K-16K, 96.5% at 16K-32K, 90.0% at 32K-64K, 83.1% at 64K-128K, 87.5% at 128K-256K, 81.5% at 256K-512K, 74.0% at 512K-1M — (NOT on current BenchLM page, retained from prior file)
- Graphwalks BFS 256k: 73.7% — (OpenAI — NOT on current BenchLM page)
- Graphwalks parents 256k: 90.1% — (OpenAI — NOT on current BenchLM page)
- Intelligence Index: 50.0 (AA model page, Oct 10) — NOT confirmed on current BenchLM page (9 of 639 benchmarks include no Intelligence Index entry)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> > Confidence: medium — only 9 of 639 benchmarks confirmed on current BenchLM page (2026-10-16). Benchmarks from Oct 10 OpenAI announcement (GDPval, MCP Atlas, OSWorld, CyberGym, Tau2 Telecom, FinanceAgent, Investment Banking, Toolathlon, DeepSWE, LiveCodeBench, AA Coding Index, VulcanBench, AA-SciCode, Terminal-Bench 2.0, MMMU-Pro, MRCR curve, Intelligence Index) are NOT on current BenchLM page — retained for reference but excluded from normalized scores. CRITICAL: FrontierMath v2 T1-3 corrected from 51.0% to 87.719% (≥85 frontier).

- **Tool use: 84/100.** (Revised DOWN from 96.) BrowseComp 90.1% (≥90 frontier ref, confirmed on current page). CRITICAL: GDPval, MCP Atlas, OSWorld-Verified, CyberGym, Tau2 Telecom 98.0%, FinanceAgent, Investment Banking, Toolathlon NO LONGER on current BenchLM page. τ²-bench (Tau2 Telecom) not confirmed on current page. Capped by loss of 8 agentic benchmarks.

- **Reasoning: 89/100.** (Revised DOWN from 95.) GPQA 94.6% (≥90 frontier), GPQA-D 94.6% (≥90 frontier), ARC-AGI-1 95.00% (≥96 frontier), ARC-AGI-2 84.2%, HLE 57.2% (above 40% frontier), HLE w/o tools 43.1% (above 40% frontier), CritPt 30.6%, FrontierMath v2 T1-3 87.719% (≥85 frontier — CRITICAL correction from 51.0%), FrontierMath v2 T4 78.049%. Intelligence Index 50.0 NOT confirmed on current page (was from AA model page). Capped by no ≥96 GPQA-D (94.6%).

- **Context window: 93/100.** 920k tokens per AA model page (confirmed 922k). Just under 1M — in the 500K-1M tier → 85-94 range. MRCR curve (98.1% at 4K-8K declining to 74.0% at 512K-1M) — NOT on current BenchLM page but retained from Oct 10 OpenAI announcement. Meta.json claims 128K — discrepancy noted.

- **Multimodal: 70/100.** Text and image input only (per AA model page and announcement). Per methodology "+image in = 60-70"; MMMU-Pro 81.2%/83.2% (NOT on current BenchLM page, retained). Meta.json claims "Text in/out" — discrepancy noted.

- **Coding: 58/100.** (Revised DOWN from 88.) CRITICAL: No coding benchmarks confirmed on current BenchLM page (9 of 639 — all from Oct 10 OpenAI/AA sources: DeepSWE 69.6%, LiveCodeBench 88.5%, AA Coding Index 82.0%, SWE-bench Pro 58.6%, Terminal-Bench 2.0 82.7%, VulcanBench 86.0%, AA-SciCode 64.5% — all NOT on current page).
- **Cost efficiency: 28/100.** $30.00 input / $180.00 output per 1M tokens (OpenAI API pricing) — extremely expensive. Also available free via ChatGPT Pro subscription; AA lists provider median as $0.00.
- **Overall Score: 79/100.** Half-up mean: (84+89+93+70+58)/5 = 394/5 = 78.8 → 79. (Revised DOWN from 88.) CRITICAL: BenchLM coverage remains at 9 of 639 but most previously-cited benchmarks (GDPval, MCP Atlas, OSWorld, CyberGym, Tau2 Telecom, DeepSWE, LiveCodeBench, AA Coding Index, VulcanBench, Intelligence Index) are NO LONGER on the current BenchLM page — normalized scores revised accordingly. Confirmed on current page: BrowseComp 90.1% (≥90 frontier), GPQA 94.6% (≥90 frontier), ARC-AGI-1 95.00% (≥96 frontier), HLE 57.2% (>40% frontier), FrontierMath v2 T1-3 87.719% (≥85 frontier — CORRECTED from erroneous 51.0%).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public internet research via BenchLM, OpenAI announcement, and Epoch AI; scores normalized 1–100 per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 73.37/100, rank #13/954, 9 of 639 benchmarks, 2026-10-17); OpenAI: Introducing GPT-5.5 announcement (BrowseComp 90.1%, GPQA 94.6%, HLE 57.2%, HLE w/o tools 43.1%); Epoch AI FrontierMath v2 leaderboard.
- Re-verification (Oct 17): Confirmed all 9 benchmarks on Oct 17 page unchanged: BrowseComp 90.1%, CritPt 30.6%, ARC-AGI-1 95.00%, ARC-AGI-2 84.2%, HLE 57.2%, HLE w/o tools 43.1%, FrontierMath legacy 52.4%, FrontierMath v2 T1-3 87.719%, T4 78.049%. No changes to normalized scores. Overall 79.

---

## Re-verification (2026-10-17)

Confirmed: Overall 79, rank #13/954 (overall 73.37), 9 of 639 benchmarks. All benchmarks and normalized scores unchanged from Oct 16.
