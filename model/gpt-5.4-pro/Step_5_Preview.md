# GPT-5.4 Pro — findings by Step 5 Preview

- Source: OpenAI (`gpt-5-4-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro. The `pro` variant of the 5.4 generation, now three generations behind GPT-6.1 Sol and sharing a **$30/$180 rate card** with GPT-5.5 Pro — the joint-most-expensive tier in the Zen catalogue.
- **Short description:** A 5.4-generation reasoning specialist whose genuine strengths are physics-competition maths (**IPhO 2025 Theory 93.5%**) and long-exam reasoning (HLE 58.7%), priced at the top of the market. BenchLM scores it 68.23/100, #20 of 1009, on **only 12 recorded benchmarks** — the second-thinnest top-20 evidence base after GPT-5.5 Pro's nine.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, ChatGPT Pro/Business/Enterprise, and OpenCode Zen (`opencode/gpt-5-4-pro`) at **$30/$180 per 1M with $30 cached reads**, and a **>272K tier at $60 / $60 / $270**.
- **Release / knowledge:** release date not restated for this SKU; the 5.4 generation is the 2026 mid-cycle predecessor of 5.5/5.6/6. Knowledge cutoff not disclosed.
- **IDs:** `openai/gpt-5-4-pro`; `opencode/gpt-5-4-pro`. No Free ID — paid only.
- **Context window:** **1.05M tokens** (BenchLM). Max output not restated.
- **Modalities:** text + image in; text out (OpenAI's lineup-wide statement). **Zero multimodal benchmarks recorded**, so image capability is unverified.
- **Pricing (as of 2026-11-05):** **$30 input / $30 cached / $180 output per 1M**, with >272K at $60 / $60 / $270. A 10K-in/1K-out request costs $0.21 without caching — the same as GPT-5.5 Pro and 7x GPT-6.1 Sol's $0.03. Batch and Flex at 50% still leaves $15/$90.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**Only twelve benchmarks exist for this model across all trackers checked** — one agentic, eight reasoning/maths, and nothing at all for coding or multimodality. OpenAI's GPT-5.4 launch post supplies most, with Artificial Analysis, ARC Prize, Meta's Muse Spark comparison chart and Epoch AI supplying the rest.

Agent / tool use — **one benchmark, total**:

- **BrowseComp: 89.3%** (OpenAI) — a strong browsing figure, and the *only* agentic measurement in existence for this ID (above GPT-5.5's 84.4% and GPT-5.5 Pro's 90.1% is the only higher)
- Terminal-Bench 2.1, Terminal-Bench 4.0, τ³-Banking, τ²-bench, GDPval-AA, OSWorld, MCP-Atlas, JobBench, Toolathlon, MazeBench, Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- **HLE: 58.7%** (OpenAI) / **HLE without tools: 42.7%** — clears the 40%+ frontier reference on both, and the higher of the two is the best HLE figure in this batch
- **ARC-AGI-1: 94.5%** (ARC Prize verified); **ARC-AGI-2: 83.3%**
- **IPhO 2025 (Theory): 93.5%** (Meta's Muse Spark chart) — the standout result, and a physics-olympiad score no other model in this research series approaches
- FrontierMath v2 Tiers 1–3: **82.5%**; Tier 4: **58.5%**; FrontierMath (legacy): 50%
- **CritPt: 30.0%** — the joint-second-highest physics-reasoning figure in this batch, behind only GPT-5.6 Sol's 32.3%
- FrontierScience: 36.7%
- **GPQA Diamond, Artificial Analysis Intelligence Index, AA-LCR, MLCR, AA-Omniscience, MRCR, MMLU-Pro: no verified public score found** — including the methodology's primary reasoning reference and every reliability metric

Coding:

- **SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, AA-SciCode, AA Coding Index, Terminal-Bench, Vibe Code Bench, FrontierCode, ProgramBench: all — no verified public score found.** There is **no coding benchmark of any kind** for this model.

Multimodal:

- **No verified public score found** for any multimodal benchmark. Image input is stated by OpenAI's lineup-wide modality note but entirely unmeasured.

### Normalized scores (1–100)

- **Tool use: 52/100.** Scored on a single data point, exactly as with GPT-5.5 Pro. BrowseComp 89.3% is genuinely strong — above GPT-5.5's 84.4% and only 2.2 points behind GPT-5.6 Sol's 92.2% — but **every other agentic benchmark in the methodology's reference set is absent**: no Terminal-Bench 2.1 or 4.0, no τ³-Banking, no GDPval-AA, no OSWorld, no Claw-Eval, no MCP-Atlas. One browsing number cannot carry the dimension, so this sits at the bottom of the mid band.
- **Reasoning: 83/100.** The strongest dimension and the one real reason to consider this model. HLE 58.7% / 42.7% clears the 40%+ reference (the higher figure is the best in this batch), **IPhO 2025 Theory 93.5% is a physics-competition result no other model in this series approaches**, CritPt 30.0% is joint-second-highest, and ARC-AGI-1 is 94.5%. Capped by three structural gaps: **GPQA Diamond is unpublished** (the methodology's primary frontier reference), **no composite intelligence index exists**, and no AA-LCR or MRCR — so three of the five reasoning references cannot be checked. FrontierMath Tier 4 at 58.5% and ARC-AGI-2 at 83.3% are also well behind successors.
- **Context window: 95/100.** 1.05M-token tier, at the **tier floor** because there is no long-context evidence of any kind — no AA-LCR, no MRCR, no GraphWalks, no published max-output limit. The window's size is asserted by BenchLM; its usable depth is entirely unmeasured.
- **Multimodal: 65/100.** Image-in/text-out per OpenAI's lineup statement, placing it in the methodology's "+image in" 60–70 band. Scored at the **low** end because **zero multimodal benchmarks exist** for this ID — no MMMU-Pro, CharXiv, ExtractBench, ZeroBench or Chartography — so the band is entered on coverage alone with no measured depth whatsoever.
- **Coding: 50/100.** **No coding benchmark of any kind is published for this model** — no SWE-bench Verified or Pro, no DeepSWE, no LiveCodeBench, no SciCode, no Coding Index, no Terminal-Bench, no Vibe Code Bench, no FrontierCode. Scored at 50, below the methodology's 55–65 mid band, because scoring within that band would require inventing a number; 50 is the neutral floor for "dimension exists, entirely unmeasured" — the same treatment given to GPT-5.5 Pro.
- **Cost efficiency: 15/100.** **$30/$180 per 1M with $30 cached reads is the joint-most-expensive rate card in this research series** (level with GPT-5.5 Pro), mapping below the methodology's ~$10/$50 (≈30) anchor by a factor of three. A 10K-in/1K-out request costs $0.21 against GPT-6.1 Sol's $0.03 at the same token volumes. There is no offset of any kind: no free tier, no published cost-per-task lead, and Batch/Flex at 50% still leaves it at $15/$90. This is the joint-worst cost-efficiency score in the series.
- **Overall Score: 69/100.** (52 + 83 + 95 + 65 + 50) / 5 = 69 → **69** → 69. Recommendation: **do not select it.** Its one real asset — physics-competition and long-exam reasoning (IPhO 93.5%, HLE 58.7%, CritPt 30.0%) — is real but unverifiable against the standard references, because GPQA Diamond, every composite index and every coding benchmark are missing. At $30/$180 it costs 15x GPT-6.1 Sol per token while being outscored by that model on BenchLM (68.23 vs 85.27), on ARC-AGI-2 (83.3% vs 94.2%) and on FrontierMath Tier 4 (58.5% vs 100%), with a coding record consisting of *zero* published benchmarks. Treat the 69 as a floor imposed by missing evidence; there is no pricing justification for finding out more.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using OpenAI's GPT-5.4 launch post as the primary source, cross-checked against BenchLM's 12-row catalog (which attributes each number to OpenAI, Artificial Analysis, ARC Prize, Meta's Muse Spark comparison chart or Epoch AI) and OpenCode Zen's pricing table. Because the catalog holds only twelve benchmarks, this report's dominant finding is an evidence gap rather than a capability judgement: every absent benchmark is named explicitly (all agentic benchmarks except BrowseComp, all coding benchmarks, all multimodal benchmarks, GPQA Diamond, the AA Intelligence Index, AA-LCR, AA-Omniscience, MMLU-Pro and MRCR) rather than silently omitted or substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-5.4 (launch post; source of HLE, BrowseComp, FrontierMath-legacy, FrontierScience, ARC-AGI-2 figures)](https://openai.com/index/introducing-gpt-5-4/)
  - [BenchLM — GPT-5.4 Pro benchmark scores (12 rows, 68.23/100, #20/1009)](https://benchlm.ai/models/gpt-5-4-pro)
  - [Artificial Analysis — GPT-5.4 Pro (CritPt source)](https://artificialanalysis.ai/models/gpt-5-4-pro)
  - [ARC Prize — GPT-5.4 Pro (XHigh) verified results](https://arcprize.org/leaderboard)
  - [Meta AI — Muse Spark comparison chart (source of IPhO 2025 and FrontierScience rows)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
