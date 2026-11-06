# GPT-6 Luna — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-6-luna`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna. The **luna** variant of the GPT-6 family — siblings Astra (86.04), 6.1 Sol (85.28), 6.1 Terra (80.79), 6 Sol (78.03) and 6 Cyber — scoring **62.53/100, #44 of 1,015** with **46 benchmarks**. It sits *just above* its predecessor GPT-5.6 Luna (63.94) is false — in fact 5.6 Luna scores marginally higher on BenchLM, so the generational step was essentially flat.
- **Short description:** **The most consequential finding in this report is the price: $0.10 input / $0.01 cached / $0.50 output per 1M.** BenchLM's own pricing note records that **on blended price, only 1 of 111 other ranked models with a published API price costs the same or less and scores higher** — which makes this, on price-per-capability, close to the best-value model in the entire ranked corpus. Behind that price sits a genuinely capable all-rounder: **AA-LCR 83.3%, FrontierMath v2 Tier 4 56.1%, ARC-AGI-1 86.7% / ARC-AGI-2 59.3%, AA-MMMU-Pro 79.7%, ExtractBench 91.01%, DeepSWE 66.6%, CritPt 19.4%.**
- **Provider / access:** OpenAI API, Microsoft Azure, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-6 Luna ships alongside GPT-6 Sol in the 2026 GPT-6 launch. **Knowledge cutoff not disclosed.**
- **IDs:** `gpt-6-luna` (OpenAI API model ID per BenchLM's pricing note); `openai/gpt-6-luna`; `openai-gpt-6-luna` (ARC Prize).
- **Context window:** **1.05M tokens** — **the largest window measured anywhere in this research series**, tied with GPT-5.6 Luna, and above every 1M-class model.
- **Modalities:** **text and image in; text out**, with a real measured visual suite (ExtractBench 91.01%, ParseBench 64.13%, AA-MMMU-Pro 79.7%).
- **Pricing (as of 2026-11-05):** **$0.10 input / $0.01 cached / $0.125 cache writes / $0.50 output per 1M.** **Prompts above 272K input tokens are charged at 2x input and cache rates and 1.5x output for the full request** — so the 1.05M window's upper reaches cost $0.20/$0.75. Regional processing adds 10% where available; Batch and Flex are 50% of Standard and Fast is 2x. Methodology anchors put $0.10/$0.50 at or above the 97+ band.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's GPT-6 launch post and the GPT-6 Astra system card are the primary source, with Artificial Analysis, ARC Prize, Epoch AI, Cognition, LlamaIndex, MazeBench, Nous Research, Anthropic's Claude Haiku 5.5 system card and Openrouter supplying independent rows. 46 benchmarks total.

Agent / tool use — **split, with one notable provenance quirk**:

- **OSWorld 2.1 Offline: 48.9%** — attributed to **Anthropic's Claude Haiku 5.5 system card**, i.e. a competitor's document is the source for this row. Recorded as weaker provenance than an AA/Vals row.
- **GDPval-AA: 1,444 Elo** [AA] / **46.6% normalized** [AA]; AA Briefcase: **1,337 Elo**
- **AA AutomationBench: 53.2%**; AA-AnalystAgent: **43.8%**; **AA Cyber Index: 52.7%**; **CWE-Bench-AA: 56.7%**
- **CyberGym-E2E-AA: 77.9%** — strong security-agentic work; DeepsecBench-AA: 23.5%; ExploitGym: 11.6%
- Hermes Bench: **70.5%**; Hermes Index: 33.9% [Nous Research]
- **AA Terminal-Bench 4.0: 12.6%**; GDP.pdf: 22.8%; **MazeBench: 0%** — the three near-floor figures
- **Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so all three of the methodology's agentic frontier references are unmeasured

Reasoning / knowledge — **the strongest dimension**:

- **AA-LCR: 83.3%**; **CritPt: 19.4%**; MLCR-AA: 26.1%
- **ARC-AGI-1: 86.67%**; **ARC-AGI-2: 59.3%**; **ARC-AGI-3: 0.1%** (provider adapter 0.59%) [ARC Prize]
- **FrontierMath v2 Tiers 1–3: 78.9%; Tier 4: 56.1%** [Epoch] — the second-strongest FrontierMath Tier 4 in this research series, behind GPT-5.6 Luna's 58.5%
- **AA-HLE: 38.5%** — 1.5 points under the 40%+ frontier reference
- AA Intelligence Index: **27.9%**
- **AA-Omniscience: index −8.3, accuracy 39.6%, hallucination rate 79.3%** — a negative index, meaning more incorrect than correct answers
- HealthBench (raw) 50.0% / length-adjusted 54.5% / Professional 60.8% / raw 61.2% / Hard 31.4% — five HealthBench rows, a real medical-depth cluster
- **GPQA Diamond, MRCR: no verified public score found** — the primary reasoning reference is missing

Coding — **mid, and thin on the classic benchmarks**:

- **DeepSWE: 66.6%** (vendor) — 7.4 points under the 74% reference
- **AA-SciCode: 54.6%** — 0.4 points under the 55%+ reference, the narrowest miss in this batch
- **FrontierCode 2.0: 21.9%**; Bug Hunt Bench: 18.3 fixes
- **SWE-bench (all variants), AA Coding Index, LiveCodeBench, SWE-bench Pro, Vibe Code Bench, Terminal-Bench: no verified public score found** — so the 85%, 70% and 55% references are entirely unmeasured and coding rests on three benchmarks

Multimodal (image-in):

- **ExtractBench: 91.01%** [LlamaIndex]; **ParseBench: 64.13%** [LlamaIndex]; **AA-MMMU-Pro: 79.7%**
- **ExtractBench Pro: 0%** [LlamaIndex] — a striking internal contradiction: 91.01% on ExtractBench and 0% on ExtractBench Pro
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Below the methodology's mid band. The independent figures are genuinely mixed: **CyberGym-E2E-AA 77.9% and CWE-Bench-AA 56.7% are strong**, GDPval-AA 1,444 Elo / 46.6% normalized and AA AutomationBench 53.2% are respectable, but **AA Terminal-Bench 4.0 is 12.6%, GDP.pdf 22.8%, MazeBench 0%, AA-AnalystAgent 43.8%, and Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench and the AA Agentic Index have no figure at all** — so all three frontier references are unmeasured and no composite exists. Note also that the **OSWorld 2.1 row is sourced from a competitor's system card**, which is weaker provenance.
- **Reasoning: 78/100.** Above the methodology's mid band and the strongest dimension. **AA-LCR 83.3% and CritPt 19.4% are both solid**, **FrontierMath v2 Tier 4 56.1% is the second-strongest in this research series**, ARC-AGI-1 86.7% and ARC-AGI-2 59.3% are strong, and the five HealthBench rows give real medical depth (Professional 61.2% raw). Capped by **AA-HLE 38.5% (1.5 under the 40% reference), ARC-AGI-3 0.1%, MLCR-AA 26.1%, an AA Intelligence Index of 27.9%, an AA-Omniscience index of −8.3 with a 79.3% hallucination rate, and the missing GPQA Diamond** — the methodology's primary reasoning reference.
- **Context window: 97/100.** **1.05M tokens — the largest window measured anywhere in this research series** — with **AA-LCR 83.3%** as strong evidence the window is genuinely usable at depth. Held just under 100 because no MRCR or GraphWalks retrieval run exists at that depth, no max-output limit is published, and **the >272K tier costs 2x input and 1.5x output, so the top of the window is economically gated**.
- **Multimodal: 82/100.** Text + image in with text out, scored in the methodology's upper band on **ExtractBench 91.01%, ParseBench 64.13% and AA-MMMU-Pro 79.7%**. Held at 82 rather than above because of the **stark internal contradiction: ExtractBench Pro 0.0% against ExtractBench 91.01%** — the two LlamaIndex rows cannot both describe the same capability, and this is flagged rather than resolved. Also no video or audio input, output is text-only, and CharXiv, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 62/100.** Mid-band. **DeepSWE 66.6% is 7.4 points under the 74% reference and AA-SciCode 54.6% misses the 55% reference by 0.4 points — the narrowest miss measured in this batch** — with FrontierCode 2.0 21.9% and Bug Hunt Bench 18.3 fixes weak. Capped hard by the **total absence of SWE-bench Verified, SWE-bench Pro, the AA Coding Index, LiveCodeBench, Vibe Code Bench and Terminal-Bench**, so the 85%, 70% and 55% references cannot be checked at all and the dimension rests on three benchmarks.
- **Cost efficiency: 99/100.** **$0.10/$0.01/$0.50 per 1M is below every anchor in the methodology's cost table except the free tiers**, and BenchLM's own note — **only 1 of 111 other ranked models with a published API price costs the same or less and scores higher** — is the strongest price-per-capability statement found anywhere in this research series. The 90% cache-read discount and 50% Batch/Flex rates compound it. Held at 99 rather than 100 because the **>272K tier doubles input and raises output 1.5x**, regional processing adds 10%, Fast mode is 2x, and there is no free tier. **This score is the report's headline.**
- **Overall Score: 75/100.** (58 + 78 + 97 + 82 + 62) / 5 = 75.4 → **75** → **75**. Recommendation: **the best price-per-capability model in this research series, and it is not close.** $0.10/$0.50 with a 1.05M window — the largest measured here — AA-LCR 83.3%, FrontierMath Tier 4 56.1%, ExtractBench 91.01% and ARC-AGI-2 59.3% is a combination nothing else in this corpus matches on price. The value case is so strong that it is worth using even for workloads where a more capable sibling exists. Three cautions: **its agentic-execution layer is weak on newer harnesses** (Terminal-Bench 4.0 12.6%, MazeBench 0%, GDP.pdf 22.8%), so it is not an autonomous agent; **its AA-Omniscience index is −8.3 with a 79.3% hallucination rate**, so it is not a factual assistant; and **the 0% ExtractBench Pro against 91.01% ExtractBench contradiction needs resolving on your own harness** before trusting the document-extraction claim. Note also that GPT-5.6 Luna (63.94) scores marginally higher on BenchLM for presumably more money, so check which rate card applies to your route before choosing between them.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using OpenAI's GPT-6 launch post and the GPT-6 Astra system card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 46-row catalog (which attributes the independent numbers to Artificial Analysis, ARC Prize, Epoch AI, Cognition, LlamaIndex, MazeBench, Nous Research and Openrouter) and **BenchLM's price registry, from which the report's headline finding comes: on blended price, only 1 of 111 other ranked models with a published API price costs the same or less and scores higher**. Two provenance weaknesses are recorded rather than passed over: **the OSWorld 2.1 Offline row is attributed to Anthropic's Claude Haiku 5.5 system card** — a competitor's document — and several HealthBench rows are attributed to the GPT-6 Astra system card rather than a Luna-specific source. The **ExtractBench 91.01% versus ExtractBench Pro 0.0% contradiction** is stated as an unresolved data conflict rather than averaged or silently dropped. The narrowest reference miss in this batch (AA-SciCode 54.6% against 55%) is attributed explicitly, as is the flat generational step from GPT-5.6 Luna (63.94 vs 62.53). Missing benchmarks (Terminal-Bench 2.0/2.1, τ²-bench, τ³-Banking, MCP-Atlas, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, AA Agentic Index, GPQA Diamond, MRCR, SWE-bench Verified, SWE-bench Pro, AA Coding Index, LiveCodeBench, Vibe Code Bench, Terminal-Bench, CharXiv, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — Introducing GPT-6 Sol and Luna (launch post; primary source, source of the DeepSWE row)](https://openai.com/index/introducing-gpt-6-sol-and-luna/)
  - [OpenAI — GPT-6 Luna model documentation (pricing, API model ID, context tiers)](https://developers.openai.com/api/docs/models/gpt-6-luna)
  - [OpenAI — GPT-6 Astra system card (source of the HealthBench and ExploitGym rows)](https://deploymentsafety.openai.com/gpt-6-astra)
  - [BenchLM — GPT-6 Luna benchmark scores (46 rows, 62.53/100, #44/1015) and price registry](https://benchlm.ai/models/gpt-6-luna)
  - [Artificial Analysis — GPT-6 Luna](https://artificialanalysis.ai/models/gpt-6-luna)
  - [ARC Prize — published Semi-Private results for GPT-6 Luna](https://arcprize.org/results/openai-gpt-6-luna)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cognition — FrontierCode 2.0](https://cognition.com/blog/frontier-code-2.0)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [ExtractBench Pro leaderboard (LlamaIndex; source of the contradicting 0% row)](https://www.extractbench.ai/pro#leaderboard)
  - [Nous Research — Hermes Index leaderboard](https://portal.nousresearch.com/bench)
  - [Anthropic — Claude Haiku 5.5 system card (source of the OSWorld 2.1 Offline row)](https://www-cdn.anthropic.com/e1080d6bf5ae2018ea3c2f414064be03232f5be5/Claude%20Haiku%205.5%20System%20Card.pdf)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - See also: [`model/gpt-5.6-luna/`](gpt-5.6-luna.md) — the predecessor, refreshed earlier in this session; [`model/gpt-6-sol/`](gpt-6-sol.md) — the Sol sibling
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
