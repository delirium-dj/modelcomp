# GPT-5.5 Pro — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-5-pro`), BenchLM (`https://benchlm.ai/models/gpt-5-5-pro`), OpenAI (`https://openai.com/index/introducing-gpt-5-5`), ARC Prize (`https://arcprize.org/leaderboard`), Epoch AI
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (Xhigh)
- **Short description:** OpenAI's April 2026 Pro variant of GPT-5.5, optimized for maximum performance on complex tasks requiring deep reasoning and agentic workflows.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), ChatGPT Pro
- **Release / knowledge:** Released April 23, 2026; knowledge cutoff August 2025
- **IDs:** `opencode/gpt-5.5-pro` (per `meta.json`); `gpt-5-5-pro` (AA slug, dots→hyphens); `gpt-5.5-pro` (BenchLM slug, model ID)
- **Context window:** 920k total (per AA model page, ~922k confirmed); `meta.json` says 128K — **discrepancy noted**
- **Modalities:** Text and image input, text output (per AA model page); `meta.json` says "Text in/out" — **discrepancy noted**
- **Pricing (as of 2026-10-01):** $30.00 input / $180.00 output per 1M tokens (OpenAI API); $0.00 via ChatGPT Pro subscription; AA lists provider median as $0.00
- **Reasoning:** Yes (extended thinking / chain-of-thought, xhigh effort)
- **Speed:** AA page shows "Unknown" for output tokens per second
- **Status:** Active (AA page notes: "Check the providers page for current API availability")

### Raw benchmarks found

> Sources: OpenAI announcement (`https://openai.com/index/introducing-gpt-5-5`), BenchLM (`https://benchlm.ai/models/gpt-5-5-pro`), Artificial Analysis (`https://artificialanalysis.ai/models/gpt-5-5-pro`), ARC Prize leaderboard (`https://arcprize.org/leaderboard`), Epoch AI FrontierMath v2 leaderboard. BenchLM covers 9 of 618 benchmarks.

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
- **Expert-SWE (Internal):** **73.1%** — (OpenAI: Introducing GPT-5.5 announcement)

Multimodal & grounded:

- **MMMU Pro (no tools):** **81.2%** — (OpenAI: Introducing GPT-5.5 announcement)
- **MMMU Pro (with tools):** **83.2%** — (OpenAI: Introducing GPT-5.5 announcement)

Reasoning / knowledge:

- **ARC-AGI-1 (Verified):** **95.0%** — (ARC Prize official leaderboard via BenchLM)
- **ARC-AGI-2 (Verified):** **84.2%** — (ARC Prize official leaderboard via BenchLM)
- **GPQA Diamond (Pro):** **94.4%** — (OpenAI: Introducing GPT-5.5 announcement; also from AA benchmark data)
- **HLE (with tools):** **57.2%** — (OpenAI: Introducing GPT-5.5 announcement)
- **FrontierMath (legacy):** **52.4%** — (OpenAI: Introducing GPT-5.5 announcement)
- **FrontierMath v2 (Tiers 1-3):** **51.0%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)
- **FrontierMath v2 (Tier 4):** **39.6%** — (Epoch AI: FrontierMath v2 leaderboard via BenchLM)
- **BixBench:** **80.5%** — (OpenAI: Introducing GPT-5.5 announcement)
- **CritPt:** **30.6%** — (Artificial Analysis: CritPt benchmark leaderboard via BenchLM)

Long context (from OpenAI announcement table):

- **OpenAI MRCR v2 8-needle (various ranges):** 98.1% at 4K-8K, 93.0% at 8K-16K, 96.5% at 16K-32K, 90.0% at 32K-64K, 83.1% at 64K-128K, 87.5% at 128K-256K, 81.5% at 256K-512K, 74.0% at 512K-1M
- **Graphwalks BFS 256k:** 73.7%
- **Graphwalks parents 256k:** 90.1%

### AA Intelligence Index

- **Artificial Analysis Intelligence Index:** Not publicly available (AA page states "Unknown" — marked as "Estimate (independent evaluation forthcoming)" on older model pages; GPT-5.5 Pro page shows "Unknown out of 4 units for Intelligence").

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded.
> > Confidence: high — 21 public benchmarks found across 5 sources (OpenAI, BenchLM, AA, ARC Prize, Epoch AI).

- **Tool use: 92/100.** BrowseComp at 90.1% (OpenAI Pro) is exceptional, GDPval wins-or-ties at 84.9% is dominant, MCP Atlas at 75.3% (Scale AI) is strong, OSWorld-Verified at 78.7%, CyberGym at 81.8%, and Tau2-bench Telecom at 98.0% (original prompts, no adjustment) are all excellent. Toolathlon at 55.6% is moderate but still above benchmark threshold. Investment Banking Modeling Tasks at 88.5% is exceptional. No missing Claw-Eval — noted N/A.

- **Reasoning: 94/100.** GPQA Diamond at 94.4% (Pro) is in frontier range. ARC-AGI-1 at 95.0% (ARC Prize, verified) and ARC-AGI-2 at 84.2% are both excellent. HLE at 57.2% (Pro, with tools) is above 40% threshold. FrontierMath Tier 1-3 at 51.0% is solid, Tier 4 at 39.6% is good. BixBench at 80.5% is strong. CritPt at 30.6% is moderate. Overall exceptional reasoning performance across abstract reasoning, math, and knowledge.

- **Context window: 93/100.** 920k tokens per AA model page (confirmed 922k). Just under 1M — in the 500K-1M tier → 85-94 range. At 922k (92% of 1M), scores 93. Meta.json claims 128K — **discrepancy noted**.

- **Multimodal: 74/100.** Supports text and image input (per AA model page: "Supports: text and image" and announcement). MMMU Pro (no tools) at 81.2% and (with tools) at 83.2% show strong visual reasoning. Image input + strong vision benchmark performance justifies high multimodal score. Meta.json claims "Text in/out" — **discrepancy noted**.

- **Coding: 93.5/100.** Terminal-Bench 2.0 at 82.7% is near-frontier (threshold 85%+). SWE-Bench Pro at 58.6% is good but below 74% frontier threshold. Expert-SWE at 73.1% is strong. MRCR 8-needle tests all above 80% up to 512K context. Graphwalks BFS 256k at 73.7% and parents 256k at 90.1% show strong long-context coding. Overall excellent coding performance across agentic coding, benchmark, and internal evals.

- **Cost efficiency: 32.5/100.** $30.00 input / $180.00 output per 1M tokens (OpenAI API pricing). This places it in the >$10/$50 tier at the very high end. However, the model is also available free via ChatGPT Pro subscription and AA lists provider pricing as $0.00. Cost score reflects the API pricing tier — very expensive for API usage.

- **Overall Score: 89.3/100.** Half-up mean of five quality dimensions: (92 + 94 + 93 + 74 + 93.5) / 5 = 446.5 / 5 = 89.3 → 89.3. GPT-5.5 Pro delivers frontier-level reasoning (ARC-AGI-1 95%, GPQA 94.4%), exceptional agentic tool use (Tau2 Telecom 98.0%, BrowseComp 90.1%, GDPval 84.9%), and near-frontier coding (Terminal-Bench 82.7%, Expert-SWE 73.1%) with a 922k context window and multimodal vision capabilities. Limited by very expensive API pricing ($30/$180).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-02
- Method: public internet research via Artificial Analysis, BenchLM, OpenAI, ARC Prize, and Epoch AI; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Future sources: add a new file next to this one, e.g. `OpenAI_GPT_5.5_Pro_System_Card.md`, using the same headings.

---