# Muse Spark 1.1 — findings by Space Bunny

- Source: Meta Superintelligence Labs (`Muse Spark 1.1`; reasoning, xhigh on published benchmarks)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's second Muse Spark model and the launch vehicle for the paid **Meta Model API** (public preview). A multimodal reasoning model built for agentic tasks, with major gains over Muse Spark in tool and computer use, coding, and multimodal understanding. **Actively manages its own 1M-token context window** — remembering actions, retrieving from much earlier work, and compacting while preserving the critical steps. Now two generations behind (1.2, 1.3).
- **Provider / access:** **Meta Model API** (OpenAI-compatible); OpenCode Zen `opencode/muse-spark-1.1`; OpenRouter, Vercel AI Gateway, Merge, LLM Gateway, EmpirioLabs, Abacus, NanoGPT, Kilo Gateway. Developer preview was **US-only at launch**; **free for consumers in the Meta AI app** in Thinking mode.
- **Lifecycle:** **Superseded.** Muse Spark 1.2 and Muse Spark 1.3 have both shipped since (1.3 is the nearest family release). No discontinuation date published.
- **Release / knowledge:** Released **2026-07-09**. No public knowledge cutoff disclosed.
- **IDs:** `Muse Spark 1.1`; `opencode/muse-spark-1.1`.
- **Context window:** **1,048,576 tokens** (up from 262K on Muse Spark 1.0). Max output **131,072 tokens** per most catalogs — **conflict:** ModelRegistry lists 32K. The 1M figure is Meta-verified.
- **Modalities:** **Text, image, video, audio, and PDF input; text output.** Full multimodal support, **built-in search with citations**, structured output, and **parallel tool calling** in a clean OpenAI-compatible package. Runs as a main agent that plans and delegates, or as a subagent, and generalizes zero-shot to new tools, MCP servers, and custom skills.
- **Pricing (verified 2026-10-10 — this corrects the prior pass's "no comparable first-party price"):** **$1.25 per 1M input / $4.25 per 1M output**, cache hits **$0.15** per 1M. Built-in web search is billed separately at **$0.003 per search call**. Artificial Analysis estimated **~$0.26 per Intelligence Index task** at these rates — behind only GPT-5.6 Luna among models at or above its intelligence, and roughly 3× cheaper than GPT-5.4's $0.89.
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

**Official — Meta "Introducing Muse Spark 1.1" evaluation report (2026-07-09):**

| Benchmark | Score | Harness / notes |
| --- | --- | --- |
| MCP Atlas | **88.1%** | |
| Terminal-Bench 2.1 | **80.0%** | bash-tool-only agent, 6 CPU cores, 8 GB RAM, 5 attempts, xhigh, 89 tasks |
| Toolathlon-Verified | **75.6%** | |
| OSWorld-Verified | **80.8%** | |
| OSWorld 2.0 | **14.2%** | different benchmark version |
| WebArena-Verified | **69%** | |
| DeepSearchQA | **84.9%** | |
| SWE-bench Pro | **61.5%** | attributed to the Scale AI leaderboard (731 public tasks, mini-swe-agent, xhigh) |
| DeepSWE 1.1 | **53.3%** (DataCurve: **53.0% ±3**) | 113 tasks, bash-only mini-swe-agent fork, 5 attempts, no internet, xhigh |
| HLE | **62.1%** with tools / **52.2%** without | |
| GDPval-AA | **1375 Elo** | |
| Finance Agent v2 | **57.2%** | |
| JobBench | **54.7%** | |
| HealthBench Professional | **59.3%** | |
| CharXiv Reasoning | **88.4%** | |
| BabyVision | **76.3%** | |
| CyberGym | **59.0%** | |
| Cybench | **92.9%** | |
| **ExploitGym** | **0.8%** | effectively a zero |
| Meta Internal Coding Bench | improved over Muse Spark | no absolute value published |

**Independent — Artificial Analysis:**

- Intelligence Index **33.7** (current v4.3.2). **Version conflict:** the AA launch article of 2026-07-10 recorded **51** on the then-current composite — an 8-point gain over Muse Spark 1.0's 43. Both are retained with their labels; the composite has since been rebuilt twice.
- GPQA Diamond **89.8%**; **HLE 46.2%**
- **AA-Omniscience: Index 28.1, Accuracy 52.1%, Hallucination Rate 50.0%**
- AA-SciCode **58.8%** — **#3 of every model Artificial Analysis has benchmarked**, behind only Claude Fable 5 (60%) and Gemini 3.1 Pro Preview (59%)
- AA Coding Index **71.3%** (up 12 points from 59); AA Agentic Index **27.5%**; GDPval-AA 35.7%
- **AA-LCR 77.7%**; **CritPt 15.1%**; AA-Briefcase **850.55 Elo**
- Token efficiency: **94M output tokens** to run the Index — fewer than GPT-5.4 xhigh (109M), GPT-5.6 Luna max (125M), and GLM-5.2 max (141M), though more than Fable 5 and Grok 4.5

**Independent — Vals AI and other boards:**

- **GPQA Diamond 91.2% ±2.10 (rank 17/129)**; MMLU-Pro **88.7%**
- **SWE-bench 82.0%**; **LiveCodeBench 85.9%**
- **Terminal-Bench 2.1: 69.3%** (Terminus 2) — **10.7 points below Meta's 80.0%**
- MRCR 1M: **54.1%** (deep retrieval)
- LiveBench: reasoning **87.4**, data analysis **72.5**, language/instruction **71.7**, coding **65.98**
- APEX-Agents 1.1 **46.2%**; Harvey Legal Agent Benchmark **20%**; Code Migration **31.11%**; **ProgramBench 0**; SimpleQA Verified **0.578**
- Arena Text Style-Controlled: **1478.6 Elo**

**Conflicts retained:** Terminal-Bench 2.1 **80.0% (Meta) vs. 69.3% (Vals)**; Intelligence Index **51 (v4.0-era) vs. 33.7 (v4.3.2)**; max output **131,072 (most catalogs) vs. 32,000 (ModelRegistry)**.

Sources consulted: [Introducing Muse Spark 1.1 (AI at Meta, 2026-07-09)](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/), [Artificial Analysis — Muse Spark 1.1 (2026-07-10)](https://artificialanalysis.ai/articles/muse-spark-1-1-everything-you-need-to-know), [BenchLM Muse Spark 1.1](https://benchlm.ai/models/muse-spark-1-1), [AI Model Timeline — Muse Spark 1.1](https://ai-model-timeline.org/models/meta-muse-spark-1-1), [ModelRegistry Muse Spark 1.1](https://modelregistry.net/models/meta/muse-spark-1-1), [Writingmate Muse Spark 1.1](https://writingmate.ai/models/meta/muse-spark-1.1), [modelscale.dev Muse Spark 1.1 (observed 2026-10-08)](https://modelscale.dev/models/muse-spark-1-1), and [Artificial Analysis Muse Spark](https://artificialanalysis.ai/models/muse-spark-1-1), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 94/100.** Unchanged. **MCP Atlas 88.1%** is the strongest tool-orchestration number in this dataset, alongside Toolathlon-Verified **75.6%**, OSWorld-Verified **80.8%**, Terminal-Bench 2.1 **80.0%**, WebArena-Verified **69%**, DeepSearchQA **84.9%**, and documented **parallel tool calling** plus zero-shot generalization to new tools and MCP servers. Held at 94 by a cluster of hard failures: **OSWorld 2.0 at 14.2%**, **ExploitGym at 0.8%**, **ProgramBench at 0**, **APEX-Agents 1.1 at 46.2%**, **Harvey Legal Agent at 20%**, and an **AA-Briefcase Elo of just 850.55** against a 1375 GDPval — the model is strong on the agentic benchmarks Meta ran and thin on several it did not.
- **Reasoning: 89/100.** Raised from 88. **Vals GPQA Diamond 91.2% (rank 17/129)** and **AA GPQA 89.8%** are both frontier-adjacent, MMLU-Pro **88.7%**, **HLE 52.2% without tools / 62.1% with**, **LiveBench reasoning 87.4%**, and **AA-SciCode 58.8% — #3 across every model Artificial Analysis has ever benchmarked.** Grounding is the cap: **AA-Omniscience Hallucination Rate of 50.0%** is roughly 10 points worse than Claude Sonnet 5's 39.4%, and **CritPt at 15.1%** and **SimpleQA Verified at 0.578** show the weakness is research-level recall rather than general reasoning.
- **Context window: 97/100.** Raised from 95. **Meta documents that Muse Spark 1.1 actively manages its 1M-token window** — retaining prior actions, retrieving from much earlier work, and compacting while preserving critical steps. That is a stronger claim than a raw capacity number: it means the long context is designed to be used, not merely advertised. Retrieval evidence exists on both sides: **MRCR 1M at 54.1%** and **AA-LCR at 77.7%**. Deducted for the mediocre MRCR figure at full length.
- **Multimodal: 82/100.** Raised from 65. The prior pass recorded "text and image input" only because Meta's modality list was not found. Meta's own post specifies **text, image, video, audio, and PDF input** with text output, and the evaluation report carries real vision scores: **CharXiv Reasoning 88.4%**, **BabyVision 76.3%**, and **OSWorld-Verified 80.8%** as a vision-driven agent result. Not raised further: text-only output, no image or audio generation, and no MMMU-Pro or ChartMuseum figure published.
- **Coding: 90/100.** Reduced from 91. **SWE-bench 82.0% (Vals)**, **LiveCodeBench 85.9% (Vals)**, **SWE-bench Pro 61.5%**, **DeepSWE 53.0% ±3**, and **AA Coding Index 71.3%** (a 12-point jump over Muse Spark 1.0) are all strong. The reduction reflects what the newer and independent boards show: **ProgramBench at 0**, **Code Migration at 31.11%**, **Vals Terminal-Bench 2.1 at 69.3%** against Meta's 80.0%, and **LiveBench coding at 65.98** — a marked gap between contest/repo coding and long-horizon engineering work.
- **Cost efficiency: 82/100.** Raised from 75. The prior pass scored on an assumption because no price was published. **$1.25 / $4.25 with $0.15 cache hits** is genuinely cheap for a 1M-context multimodal model, and Artificial Analysis's **~$0.26 per Intelligence Index task** is behind only GPT-5.6 Luna among models at its intelligence level. The model is also **free for consumers in the Meta AI app**, and at 94M index output tokens it is the most token-efficient model in its tier. Deducted for the **$0.003 per web-search call** (material for search-heavy agent loops) and because this is a superseded generation — **Muse Spark 1.2 and 1.3 exist**, and 1.3 is the current one to price against.
- **Overall Score: 90.4/100.** (94 + 89 + 97 + 82 + 90) / 5 = 452 / 5 = 90.4, up from 86.6. The prior pass materially under-scored Multimodal and Cost for lack of Meta's own documentation. **Best fit:** tool-heavy multimodal agents and long-horizon coding at low token cost — the MCP Atlas 88.1% and SciCode 58.8% combination is unique in this dataset. **Prefer Muse Spark 1.3 for new deployments.** If you evaluate this generation, the two things to test first are the **50% hallucination rate** and **ProgramBench at 0**.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Meta's own Muse Spark 1.1 launch post and evaluation report, Artificial Analysis (model page and launch article), Vals AI, DataCurve DeepSWE, Arena, LiveBench, and independent spec trackers; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: three conflicts retained unresolved — **Terminal-Bench 2.1 80.0% (Meta) vs. 69.3% (Vals)**; **Intelligence Index 51 (v4.0-era launch article) vs. 33.7 (current v4.3.2)**, which is a composite rebuild and not a capability regression; **max output 131,072 vs. 32,000 (ModelRegistry)**. Meta's evaluation report attributes its SWE-bench Pro figure to the Scale AI leaderboard rather than an internal run — recorded as such.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_1_Recheck.md`, using the same headings.