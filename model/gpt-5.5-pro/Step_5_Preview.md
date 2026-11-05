# GPT-5.5 Pro — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-5-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro. The `pro` variant of the 5.5 generation, now two generations behind GPT-6.1 Sol and priced **15x higher per token than it**.
- **Short description:** OpenAI's expensive 5.5-generation reasoning tier — and the clearest example in this research series of a model priced on legacy reputation rather than current evidence. BenchLM scores it 72.76/100, #14 of 1009, but on **only 9 recorded benchmarks** — the thinnest evidence base of any top-20 model examined. There is no coding benchmark, no multimodal benchmark, no composite intelligence index and no GPQA Diamond figure anywhere in the catalog.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, ChatGPT Pro/Business/Enterprise, and OpenCode Zen (`opencode/gpt-5-5-pro`) at **$30/$180 per 1M with $30 cached reads** — the most expensive rate card in the entire Zen catalogue, 3x GPT-6 Astra's and 15x GPT-6.1 Sol's.
- **Release / knowledge:** the 5.5 generation launched mid-2026 (the GPT-5.5 launch post supplies most benchmark rows); it has been superseded by GPT-5.6 (Sol/Terra/Luna), GPT-6 (Sol/Luna/Astra) and GPT-6.1 (Sol/Terra). Knowledge cutoff not disclosed for this SKU.
- **IDs:** `openai/gpt-5-5-pro`; `opencode/gpt-5-5-pro`. No Free ID — paid only.
- **Context window:** **1M tokens** (BenchLM). Max output not restated on this SKU's page.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement). **Zero multimodal benchmarks are recorded for this model**, so image capability is unverified.
- **Pricing (as of 2026-11-05):** **$30 input / $30 cached read / $180 output per 1M** on Zen, with a >272K tier at **$60 / $60 / $270**. Batch and Flex at 50%. At these rates a 10K-in/1K-out request costs $0.21 without caching — 7x GPT-6.1 Sol's $0.03.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**Only nine benchmarks exist for this model across all trackers checked.** OpenAI's GPT-5.5 launch post supplies five, Artificial Analysis two, ARC Prize two, and Epoch AI two (with one shared). Everything else is absent, and this is the dominant fact about the model.

Agent / tool use — **one benchmark, total**:

- **BrowseComp: 90.1%** (OpenAI) — a strong browsing figure, and the *only* agentic measurement in existence for this ID
- Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, τ²-bench, GDPval-AA, OSWorld, MCP-Atlas, AgentTime, AutomationBench, JobBench, Toolathlon, MazeBench, Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- **HLE: 57.2%** (OpenAI) / **HLE without tools: 43.1%** — clears the 40%+ frontier reference on both
- **ARC-AGI-1: 95.0%**; **ARC-AGI-2: 84.2%** (ARC Prize official leaderboard)
- **FrontierMath v2 Tiers 1–3: 87.7%**; **Tier 4: 78.05%** (Epoch AI); FrontierMath (legacy): 52.4% (OpenAI)
- **CritPt: 30.6%** — the joint-second-highest physics-reasoning figure in this batch, behind only GPT-5.6 Sol's 32.3%
- **GPQA Diamond, AA Intelligence Index, AA-Omniscience, MMLU-Pro, AA-LCR, MLCR, MRCR: no verified public score found** — including the single most-used frontier reference (GPQA) and every reliability metric

Coding:

- **SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, AA-SciCode, AA Coding Index, Terminal-Bench, Vibe Code Bench, FrontierCode, ProgramBench, Bug Hunt Bench: all — no verified public score found.** There is **no coding benchmark of any kind** for this model.

Multimodal:

- **No verified public score found** for any multimodal benchmark. Image input is stated by OpenAI's lineup-wide modality note but entirely unmeasured.

### Normalized scores (1–100)

- **Tool use: 55/100.** Scored on a single data point. BrowseComp 90.1% is genuinely strong — above GPT-6 Astra's 91.5% by only 1.4 points and well clear of most of the field — but **every other agentic benchmark in the methodology's reference set is absent**: no Terminal-Bench 2.1 or 4.0, no τ³-Banking, no GDPval-AA, no OSWorld, no Claw-Eval. A single browsing number cannot carry a tool-use score, so this sits at the bottom of the mid band.
- **Reasoning: 84/100.** The strongest dimension, and the only one with real evidence. HLE 57.2% / 43.1% clears the 40%+ reference, FrontierMath Tier 4 is 78.05%, Tiers 1–3 is 87.7%, CritPt is 30.6% (joint-second-highest in this batch) and ARC-AGI-1 is 95.0%. Capped by two structural gaps rather than weak numbers: **GPQA Diamond is unpublished** (the methodology's primary frontier reference), and **no composite intelligence index, no AA-LCR and no MRCR figure exists**, so three of the four reasoning references cannot be checked. ARC-AGI-2 at 84.2% is also below its successors' 92–95%.
- **Context window: 95/100.** 1M-token tier, but at the **tier floor** because there is no long-context evidence of any kind — no AA-LCR, no MRCR, no GraphWalks, no published max-output limit. The window's size is asserted by BenchLM; nothing about its usable depth is measured.
- **Multimodal: 65/100.** Image-in/text-out per OpenAI's lineup statement, placing it in the methodology's "+image in" 60–70 band. Scored at the **low** end because **zero multimodal benchmarks exist** for this ID — no MMMU-Pro, no Chartography, no ExtractBench, no ZeroBench — so the band is entered on coverage alone with no measured depth. Compare GPT-6 Astra, which shares the same 70 on coverage but with #1/#2 ranks on five visual benchmarks behind it.
- **Coding: 50/100.** **No coding benchmark of any kind is published for this model** — no SWE-bench Verified or Pro, no DeepSWE, no LiveCodeBench, no SciCode, no Coding Index, no Terminal-Bench, no Vibe Code Bench, no FrontierCode. Scored at 50, below the methodology's 55–65 mid band, because scoring it within that band would require inventing a number; 50 is the neutral floor for "dimension exists, entirely unmeasured".
- **Cost efficiency: 15/100.** **$30/$180 per 1M with $30 cached reads is the most expensive rate card in this research series by a factor of three** over the next tier ($10/$50, which the methodology scores ≈30) and 15x GPT-6.1 Sol's $2/$10. A 10K-in/1K-out request costs $0.21 against GPT-6.1 Sol's $0.03. There is no offset of any kind: no free tier, no published cost-per-task lead, and Batch/Flex at 50% still leaves it at $15/$90. This is the single worst cost-efficiency score in the research series.
- **Overall Score: 70/100.** (55 + 84 + 95 + 65 + 50) / 5 = 69.8 → 70. Recommendation: **do not select it.** At $30/$180 it costs 15x GPT-6.1 Sol per token while being outscored by that model on BenchLM (72.76 vs 85.27), on ARC-AGI-2 (84.2% vs 94.2%) and on FrontierMath Tier 4 (78.05% vs 100%), with a coding record that consists of *zero* published benchmarks. Its one genuine asset is strong reasoning on a very thin evidence base, and even that is unverifiable without GPQA or a composite index. Treat the 70 as a floor imposed by missing evidence, not a ceiling — but there is no pricing justification for discovering which.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.5 launch post as the primary source, cross-checked against BenchLM's 9-row catalog (which attributes each number to OpenAI, Artificial Analysis, ARC Prize or Epoch AI) and OpenCode Zen's pricing table. Because the catalog holds only nine benchmarks, this report's dominant finding is an evidence gap rather than a capability judgement: every absent benchmark is named explicitly (all agentic benchmarks except BrowseComp, all coding benchmarks, all multimodal benchmarks, GPQA Diamond, the AA Intelligence Index, every reliability metric and every long-context metric) rather than silently omitted or substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.5 (launch post; source of HLE, BrowseComp, FrontierMath-legacy figures)](https://openai.com/index/introducing-gpt-5-5/)
  - [BenchLM — GPT-5.5 Pro benchmark scores (9 rows, 72.76/100, #14/1009)](https://benchlm.ai/models/gpt-5-5-pro)
  - [Artificial Analysis — CritPt Benchmark Leaderboard (source of the 30.6% CritPt)](https://artificialanalysis.ai/evaluations/critpt)
  - [ARC Prize — official leaderboard data (ARC-AGI-1 95.0%, ARC-AGI-2 84.2%)](https://arcprize.org/leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard (87.7% / 78.05%)](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
