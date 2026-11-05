# GPT-6 Astra — findings by Step 5 Preview

- Source: OpenAI (`gpt-6-astra`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra (OpenAI's hyphenated vendor style — never "GPT 6 Astra" as a model name).
- **Short description:** OpenAI's flagship proprietary reasoning model (released 2026-09-03) for complex reasoning, coding, computer use, research and document work. State-of-the-art on computer use, browsing, software engineering, cybersecurity, science and professional work; saturates FrontierMath Tier 4 (97.6–98%), ARC-AGI-3 (99.9%) and ExploitBench (100%). Also the first model OpenAI assigned to the **Critical** cybersecurity capability threshold under its Preparedness Framework.
- **Provider / access:** OpenAI API (`gpt-6-astra`), Microsoft Azure, AWS Bedrock, ChatGPT Plus/Pro/Business/Enterprise (Astra Pro on Pro/Business/Enterprise), OpenCode Zen (`opencode/gpt-6-astra`, Responses-API-compatible). Both **Chat Completions and Responses** endpoints are supported; Batch is supported at 50% of Standard rates. Zero Data Retention available for eligible API customers.
- **Release / knowledge:** 2026-09-03 (API); knowledge cutoff **2026-04-30** (stated explicitly by OpenAI and confirmed by Artificial Analysis).
- **IDs:** `openai/gpt-6-astra`; `opencode/gpt-6-astra`. No Free ID on OpenCode Zen — paid only.
- **Context window:** **1,050,000 tokens** total, 922,000 max input, **128,000 max output** (all three stated on OpenAI's model page and confirmed by LLMLearner). Note the pricing step: prompts above **272K input tokens are charged at 2x input and cache rates and 1.5x output for the entire request** — the 1M window is affordable only below 272K.
- **Modalities:** text + image in; text out. Reasoning model (`reasoning.effort` = `low`, `medium`, `high`, `xhigh`, `max`). Features: streaming, structured outputs, function calling, file_search, image_input, web search, prompt caching. Tools (Responses API): `web_search`, `file_search`, `image_generation`, `code_interpreter`, `hosted_shell`, `apply_patch`, `skills`, `computer_use`, `mcp`, `tool_search`.
- **Pricing (as of 2026-11-04):** **$10 input / $1 cached / $12.50 cache write / $50 output per 1M** (in/cached/write/out). Batch and Flex at 50%, Fast mode at 2x (up to 2x speed). Above 272K input tokens: $20 / $2 / $25 / $75 (Zen publishes the same two-tier split, so the surcharge is passed through). BenchLM notes this is 2.5x GPT-5.6 Sol's $4/$20.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

OpenAI's launch chart reports the maximum score at any effort; LLMLearner and BenchLM curate per-harness results. Where the same benchmark has three results, all three are shown.

Agent / computer use / tool use:

- Terminal-Bench 4.0: **57.9%** (OpenAI) / **59.1%** (Artificial Analysis, xhigh) / **58.2%** (LLMLearner, max)
- Terminal-Bench 2.1: **87.3%** (Vals AI) / **87.4%** (LLMLearner, thinking high) / **88.4%** (AA leaderboard) / **83.0%** (AA Coding Agent Index v1.4 harness)
- Agents' Last Exam: **59.3%** (OpenAI launch chart; confirmed by BenchLM) — but LLMLearner's catalog records **34.2%** at "Max (With Tools), limited comparability" for the same benchmark: a large, unresolved harness/effort conflict
- OSWorld 2.0 (offline set, partial score): **72.6%** (OpenAI) — vs 65.7% for GPT-5.6 Sol, achieved in ~47% less time per task (~40 min vs ~75 min); OSWorld 2.1: **75.8%**
- ScreenSpot-Pro (no tools, GUI grounding): **92.7%** #1/2
- AutomationBench: **41.4%** (OpenAI) vs 18.1% GPT-5.6 Sol; **AutomationBench-AA: 68.5%**
- BrowseComp: **91.5%** #2/56
- τ³-Banking: **43.1%** #16/119 (LLMLearner) / **41.4%** (Artificial Analysis / BenchLM)
- GDPval-AA v2: **1,584 Elo** (AA) / **53.7%** normalized (BenchLM); AA-Briefcase: **1,568 Elo**
- AA Coding Agent Index: **67.0** (v1.4, Codex harness) / **61.68** #8/11 (v1.5); AA Coding Index **76.9%**
- DeepSWE: **74.1%** #11/59 (OpenAI) / **67.0%** (AA v1.4 harness)
- SWE-Atlas-QnA: **59.1%** #6/17 (Scale AI) / **51.0%** (AA Codex harness)
- AA-AnalystAgent: **51.2–51.3%** #8/37; APEX-Agents: **64.7%** #10/56
- OfficeQA Pro: **66.2%** #4/11; AgentTime v1.1: **51.4** #1/9; BenchCAD: **95.9%** #2/6; Hermes Index 56.3 / Hermes Bench 73.7
- MazeBench: **23%**; ApprenticeBench: 68%; AA ITBench: 48.6%
- Cybersecurity (run **without guardrails**): ExploitBench **100.0%** #1/10 (vs 78.5% GPT-5.6 Sol); ExploitGym **42.4%**; SEC-Bench Pro **85.4%** #2/10; SRE-Bench **88.0%** single-attempt / **99.2%** within four attempts (vs 55.9%/68.7% for Sol); ExploitBench (Jun–Aug 2026) 39.0% — during this run Astra discovered two previously unknown zero-days, both disclosed to maintainers; CWE-bench v1 **68.0%** #2/12; AA Cyber Index 33.4; DeepsecBench-AA 36.9; CyberGym-E2E-AA 0.0%
- **Claw-Eval / ClawProBench: no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (OpenAI) / **96.3%** #2/198 (Artificial Analysis) / **96.1%** (AA leaderboard)
- HLE (with tools): **57.2%** #22/144; **HLE-Diamond (no tools): 65.8%** #1/6; AA-HLE: **54.7%**
- ARC-AGI-1: **98.5%** #1/82; ARC-AGI-2: **95.0%** #1/75; **ARC-AGI-3: 62.7%** (ARC Prize published semi-private standard run) / **99.9%** (OpenAI, Responses-API harness) / **98.55%** (provider adapter) — a **37-point source conflict driven by harness settings**
- FrontierMath Tier 4 (v2): **97.6%** #2/71 — saturated; FrontierMath v2 (with tools) 93.7% #1/83; FrontierMath Tiers 1–3: 93.68%; FrontierMath Erdős: **2.9%** #2/13 (essentially unsolved)
- ProofBench v1.1 (Lean 4): **99.0%** #5/53; Riemann-bench: **72.0%** #2/42; MysteryMechanism: **53.1%** #1/29; GoBench: **2,568 Elo** #1/18
- SciCode: **56.5%** #25/98; **CritPt: 31.7%**; Terminal-Bench-Science 0.1: **64.6%** (OpenAI) / **68.1%** #1/34 (LLMLearner)
- AA-Omniscience: accuracy **61.6%** (AA) vs 43.7% net score (LLMLearner); **hallucination rate 4.2%** #1/2 (AA, no-tools, #1/2) vs **49.8%** in BenchLM's AA-Omniscience v1.1 entry — conflicting metrics/harnesses, flagged not averaged
- Artificial Analysis Intelligence Index: **61.2** (v4.1, OpenAI's own launch chart) / **55** #1/2 (v4.2) / **52.7** #6/16 (v4.3) / **56.9** #3/37 (v5.0); AA's own page reports **55** for xhigh. The four numbers are **non-comparable across index redesigns** — v5 adds private datasets and 2 new benchmarks, so a falling number does not mean a falling model.

Coding:

- SWE-Bench Pro V2: **96.9%** #4/10 (thinking high); Hard subset: **90.2%** #3/12
- FrontierSWE v2: **65.5%** #1/23; FrontierCode 1.1 Extended **64.5%** #2/6; Main **53.3%** #4/46; **FrontierCode 2.0: 42.8%** #2/23
- Code Migration: **67.7%** #3/78; GSO: **79.4%** #2/24; Internal Database Migration: 63.9%; Apex-SWE: 50.0% #14/61; SWE-Marathon: **42.5%** #8/14
- **IOI (Vals v2): 100%** #1/45; WeirdML v3: **0.42** (0–1 scale) #1/24; ProgramBench: 50.0% #4/8; ScarfBench: 65.4%; Bug Hunt Bench: 45.0 fixes; PostTrainBench v1.1: 44.3%
- **Vibe Code Bench 1-100: 27.6%** #5/25; **Vibe Code Bench v1.1: 89.6%** #7/114 — two different harnesses, both listed
- **SWE-bench Verified: no verified public score found**

Long context:

- OpenAI MRCR v2 (8-needle) 256K–512K: **100.0%** #1/2; 512K–1M: **96.3%** #1/2
- AA-LCR: **80.7%**; GraphWalks BFS 256K–1M: 71.8%; MLCR-AA: **41.7%**; EBR-bench: **76.2%** #2/28

Multimodal:

- BabyVision: **96.6%** #2/16; Chartography: **91.0%** #1/16; CharXiv RQ: **92.8%** #3/20; GDP.pdf: **32.2%** #4/90; **MMMU-Pro: 87.8%** #4/131 (86.9% on AA's leaderboard); PerceptionBench: **77.6%** #1/10; ZeroBench Main: **58.0%** #4/11
- Creative Writing: **2,174** #1/116; OpenScore String Quartets: **0.84** #1/2; Wordsmith Model Bench 75.3 #5/10; STEMBench: 2.81
- Document extraction: ExtractBench **91.91%**; ExtractBench Pro 58%; ParseBench 69.88%

Safety / alignment (all **OpenAI self-reported**, none independently replicated):

- Internal computer-use safety benchmark: **2.4%** vs 22.0% for GPT-5.6 Sol (1.8% with AutoReview); internal circumvention benchmark: **0.0%**; ExploitGym honeypot: **0.0%** vs 48.2% for Sol; impossible-ExploitGym: **100%**; internal hallucination benchmark: **4.2%** vs 12.2%
- Gray Swan indirect prompt injection (15 attempts): **8.5%**; Circumvention: 0.0 #1/2 (better); computer-use safety 2.4 / 1.8 with AutoReview
- Cost of the safety stack: extra checks "can sometimes interrupt legitimate work"; Astra "will refuse to comply with more advanced cybersecurity tasks such as creating proof-of-concept exploits" until the Daybreak rollout
- **Monitorability**: OpenAI found Astra's written reasoning *harder* to monitor than GPT-5.6 Sol's — it has greater control over written reasoning on simpler tasks and solves problems with fewer written steps. A safety regression despite the behavioural scores.

Efficiency (independent of quality): 1.9x faster task completion than GPT-5.6 Sol on Mind2Web; ~65% fewer output tokens than Claude Opus 5 on Agents' Last Exam; Higgsfield AI reports up to 20% fewer tokens on complex creative workflows; Cost per Intelligence Index task **$3.66** (AA, xhigh) — LLMLearner's editorial notes Claude Opus 5.5 reaches a higher index score at $1.82/task vs Astra's $3.26.

### Normalized scores (1–100)

- **Tool use: 92/100.** Dominates computer use and browsing (OSWorld 2.0 72.6%, ScreenSpot-Pro 92.7% #1, Agents' Last Exam 59.3%, AutomationBench 41.4% vs Sol's 18.1%, BrowseComp 91.5%, Terminal-Bench 4.0 57.9% — all new highs) with best-in-class efficiency, but τ³-Banking (43.1%, #16/119) and GDPval-AA (1,584 Elo) sit below the 50%/1,750 frontier reference and MazeBench (23%) is weak, which caps the score.
- **Reasoning: 95/100.** GPQA Diamond 96.0–96.3%, HLE 57.2% (65.8% on HLE-Diamond, #1/6), MRCR 100%/96.3% to 1M and AA Intelligence Index 61.2 (v4.1) / 56.9 (v5.0, #3/37) all clear the frontier reference, plus saturated FrontierMath Tier 4 (97.6%) and #1 ARC-AGI-2/1. Capped by mid-tier CritPt (31.7%), SciCode (56.5%), AA-LCR (80.7%) and AA-Omniscience accuracy (61.6%).
- **Context window: 97/100.** 1.05M tokens — top tier — with the best measured long-context retrieval in its class: OpenAI MRCR v2 **100.0% at 256K–512K** and **96.3% at 512K–1M** (#1/2 on both). Held just under 100 because 96.3% is below the ≥98%-retrieval threshold for a 100, and the **>272K surcharge doubles input pricing**.
- **Multimodal: 70/100.** Image-in/text-out only — no video or audio input and no non-text output, so it sits at the top of the "+image in" band rather than the 75–90 "+video/PDF" tier. Justification for the band ceiling: #1/#2 ranks on ScreenSpot-Pro, Chartography, BabyVision, PerceptionBench and MMMU-Pro #4, plus 91.9% ExtractBench document handling.
- **Coding: 96/100.** SWE-Bench Pro V2 96.9%, FrontierSWE v2 65.5% #1/23, FrontierCode 1.1 Extended 64.5% #2/6, DeepSWE 74.1%, Terminal-Bench 2.1 87.3–88.4%, SciCode 56.5% and AA Coding Index 76.9% all clear the frontier reference; IOI 100% #1/45. Capped by Vibe Code Bench 1-100 (27.6%), FrontierCode 2.0 (42.8%), SWE-Marathon (42.5%), the unpublished SWE-bench Verified figure, and a DeepSWE measurement that is 7.1 points lower on AA's harness (67.0%) than on OpenAI's (74.1%).
- **Cost efficiency: 30/100.** $10/$50 per 1M with $1 cached reads maps directly onto the methodology's ~30 anchor, with no offset: Artificial Analysis explicitly calls it "particularly expensive when comparing to other models of similar price" at $3.66 per index task, and Claude Opus 5.5 scores higher at $1.82/task. Mitigators (Batch/Flex at 50%, 90% cache discount, 1.9x faster completion, ~65% fewer output tokens than Opus 5 on agentic tasks) are efficiency gains, not a lower price point.
- **Overall Score: 90/100.** (92 + 95 + 97 + 70 + 96) / 5 = 90.0 → 90. Recommendation: the right pick when the task is the ceiling — agentic computer use, terminal work, frontier maths/science coding and document-grade output, especially under 272K input tokens where the surcharge does not bite. For anything where cost per task or long-form professional knowledge work is the deciding factor, cheaper models match or beat it; and confidential cyber work needs the Daybreak/administrator access path rather than the default API refusal.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-04
- Method: public internet research using OpenAI's official model documentation and launch post as the primary source, cross-checked against Artificial Analysis's model page and Intelligence Index v5 coverage, LLMLearner's 119-result benchmark catalog, BenchLM's 86-benchmark table, and the OpenCode Zen pricing model list. The Zero Data Retention availability for eligible API customers is noted on OpenAI's launch post. Where sources conflict (ARC-AGI-3 99.9% vs 62.7%; Agents' Last Exam 59.3% vs 34.2%; hallucination rate 4.2% vs 49.8%; DeepSWE 74.1% vs 67.0%; AA Intelligence Index 61.2 / 55 / 52.7 / 56.9 across four index versions), both figures are listed with their harness rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI — GPT-6 Astra model documentation (context, limits, pricing, endpoints, tools)](https://platform.openai.com/docs/models/gpt-6-astra)
  - [OpenAI — GPT-6 Astra: A new generation of intelligence (official benchmark chart, 2026-09-03)](https://openai.com/index/gpt-6-astra/)
  - [OpenAI — GPT-6 Astra system card](https://deploymentsafety.openai.com/gpt-6-astra)
  - [Artificial Analysis — GPT-6 Astra (xhigh) model page](https://artificialanalysis.ai/models/gpt-6-astra-xhigh)
  - [LLMLearner — GPT-6 Astra (119 curated benchmark results with ranks)](https://llmlearner.com/models/gpt-6-astra)
  - [BenchLM — GPT-6 Astra benchmark scores & performance (86 benchmarks, 86.07/100 overall)](https://benchlm.ai/models/gpt-6-astra)
  - [ARC Prize — published semi-private results for GPT-6 Astra](https://arcprize.org/results/openai-gpt-6-astra)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
