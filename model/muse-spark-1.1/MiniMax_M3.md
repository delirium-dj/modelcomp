# Muse Spark 1.1 — findings by MiniMax M3

- Source: Meta Superintelligence Labs (`opencode/muse-spark-1.1`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's July 9, 2026 multimodal agentic reasoning model from Meta Superintelligence Labs; first model to lead Scale SWE-bench Pro on **both** the standardized public set and the private commercial set on the same day. Superseded in the lineup by Muse Spark 1.2 (2026-08-05) and Muse Spark 1.3. ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/), [Scale SWE-bench Pro leaderboard recap](https://contracollective.com/blog/muse-spark-1-1-swe-bench-pro))
- **Provider / access:** Meta Model API public preview (US) `[meta-llama]/meta-muse-spark-1.1` via the Meta AI app and meta.ai (Thinking mode). OpenCode Zen lists `opencode/muse-spark-1.1`; **paid-only** — no verified $0/free tier. ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1), [OpenRouter](https://openrouter.ai/meta/muse-spark-1.1/benchmarks))
- **Release / knowledge:** **2026-07-09** ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1), [Meta AI blog](https://ai.meta.com/blog/muse-spark-1-1/)); no separately verified knowledge cutoff for 1.1 itself (Muse 1.2 published 2026-04 cutoff; 1.1 likely the same vintage).
- **IDs:** `muse-spark-1.1` (Meta), `meta/muse-spark-1.1` (OpenRouter), `opencode/muse-spark-1.1` (Zen). Do not conflate with the initial Muse Spark (April 2026) or the later 1.2/1.3.
- **Context window:** **1,048,576 total (1M in / 131K out)**, actively managed — Meta specifically trains 1.1 to remember prior actions, compact context, and retain critical steps. ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/), [llm-stats API page](https://llm-stats.com/models/opencode/muse-spark-1.1))
- **Modalities:** **Text, image, video, audio, PDF/file → text output**. Per Amjad Masad (Replit CEO, partner quote): "massive million-token context, full multimodal support (images, video, PDFs), built-in search with citations, strong reasoning, top-tier coding abilities (particularly frontend and design), structured output, and parallel tool calling — all in a clean OpenAI-compatible package." ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/))
- **Pricing (as of 2026-10-16):** **$1.25 input / $4.25 output per 1M**; cache read **$0.15/1M** (88-90% discount). ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1), [OpenRouter](https://openrouter.ai/meta/muse-spark-1.1)). Paid only; lower than Claude Opus 4.6 ($15/$75) and roughly 1/8 GPT-6 Astra output pricing; the reason SWE-Pro cost math flips when retained cached context.
- **Architecture:** Proprietary closed weights from Meta Superintelligence Labs; parameters undisclosed. Shares MLA/KDA heritage with the wider Muse family per [Muse_Spark_1.2.md](Muse_Spark_1.2.md).

### Raw benchmarks found

Numbers triangulated across **seven** independent surfaces: Meta's official launch post and evaluation report, Scale/SWE-bench Pro standardized public and private commercial leaderboards, contracollective.com leaderboard recap, agentriot.com agent-results summary, Artificial Analysis independent harness, Vals public-aggregate runs, llm-stats.com live tracker. Benchmarks disagree where harnesses differ — flagged inline. Headline this round is **dual SWE-bench Pro leadership**, which is unusually strong confirmation.

Agent / tool use:

- **Scale SWE-bench Pro (independent standardized leaderboards, as of 2026-09-14)**: Muse Spark 1.1 **leads both boards at once** — **61.5% on the standardized public set** (toppling GPT-5.4 xHigh 59.1%, +2.4 pts) and **51.5% on the private commercial set** (toppling Claude Opus 4.6 47.1%, +4.4 pts). ([contracollective recap](https://contracollective.com/blog/muse-spark-1-1-swe-bench-pro), [Vals](https://www.vals.ai/models/meta_muse_spark_1_1))
- **Agentriot.com agent results**: Toolathlon-Verified **75.6**, OSWorld-Verified **80.8**, WebArena-Verified **69.0**; on the older OSWorld 2.0 it scores only **14.2%** — a wide harness split. ([agentriot.com Muse Spark 1.1 page](https://agentriot.com/models/meta-muse-spark-1.1))
- **Meta vendor-attributed additional** ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/), [BenchLM](https://benchlm.ai/models/muse-spark-1-1) mirror): Terminal-Bench 2.1 **80.0%**, MCP Atlas **88.1%** (leads Ornith 80%), Cybench **92.9% pass@1 / 97.0% pass@10** (Meta report; near ceiling vs Muse Spark 1.0 65.4%/79.0%), JobBench **54.7%**, ExploitGym **0.8%**, GDPval-AA **1375 Elo**, Finance Agent v2 **57.2%**, **TaxEval 79.7%**, **CorpFin 71.3%**.
- **Vals independent rerun (TB 2.1)**: **69.29% ±0.99** vs Meta's vendor **80.0%** — a 10-pt gap that is **harness-sensitive**, not capability. Same with Vals Code Migration **31.11% ±4.07** (vendor-attributed higher) and Vals ProgramBench **0.00%** (constraint on long-horizon coding). ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1))
- **Three named launch partners** ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/)): Replit (Amjad Masad, CEO), Cline (Saoud Rizwan, CEO), Box (Yashodha Bhavnani, VP AI Products) — quote on Box: "*Muse Spark delivered enterprise capabilities competitive with today's leading frontier models*," specifically over professional-services/public-sector/industrial workflows.

Reasoning / knowledge:

- **Vals GPQA Diamond 91.16% ±2.10** ([Vals](https://www.vals.ai/models/meta_muse_spark_1_1)) — the cleanest single number for reasoning among the surveyed sources. **MMLU Pro 88.73% ±0.32**, **TaxEval v2 79.72% ±0.77**.
- **HLE mirroring conflict**: Vals lists **52.2% without tools**; BenchLM mirror attests **62.1% with tools**; AA attests **46.2%** under a different harness. The 16-pt band is tool-state + harness variance — record the band, do not pick the highest. ([BenchLM](https://benchlm.ai/models/muse-spark-1-1), [Vals](https://www.vals.ai/models/meta_muse_spark_1_1))
- **CritPt, AA-LCR, AA-Omniscience, AA Intelligence Index**: each listed as base-generation proxy (no exact 1.1 ID): CritPt 11.3%, AA-LCR 77.0%, Omniscience accuracy 49.6% / hallucination 84.2%. AA Intelligence Index 1.1-exact: **no verified public score**; base proxy 44.3, with AA+8 improvement claim matching the family trajectory (1.0 base 43, 1.2 base 54). ([BenchLM base page](https://benchlm.ai/models/muse-spark))
- **General evidence**: 1.1 trail on AA Intelligence Index held back **SciCode +6 points** over 1.0 to rank #3 (behind Claude Fable 5 ~60% and Gemini 3.1 Pro 59%).

Coding:

- **Dual SWE-bench Pro leadership** (the strongest single coding signal): **61.5% public** (vs GPT-5.4 xHigh 59.1%) and **51.5% commercial** (vs Claude Opus 4.6 47.1%). These are Scale-standardized harnesses on **two independent splits** — the closest thing to a same-harness apples-to-apples coding comparison available. ([contracollective recap](https://contracollective.com/blog/muse-spark-1-1-swe-bench-pro))
- **DeepSWE**: **53.3%** 1.1-exact (Meta/BenchLM mirror) — modest but verified.
- **Vals**: SWE-bench **82.00% ±1.72** (different harness from SWE-Pro), LiveCodeBench **85.91% ±0.99**, Vibe Code Bench v1.1 **72.16% ±3.33**, SciCode vendor-attributed **58.8%**. The "82% SWE" often quoted in vendor aggregates corresponds to SWE-bench Verified, **not** SWE-Pro — and is not the same number as the leaderboard 61.5% public.
- **Meta Internal Coding Bench**: 1.1 "significantly improves upon Muse Spark, competitive with leading alternatives" ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/)) — vendor-claimed, no public figure.

Long context / multimodal:

- **MRCR-v2 at 1M**: **54.1%** 1.1-exact (verified). Use case-real because 1.1 is **trained to actively manage** the 1M window: it remembers prior actions, retrieves from much earlier work, and compacts without losing critical steps — Meta blog states this behavior is co-trained with the long context. ([Meta blog](https://ai.meta.com/blog/muse-spark-1-1/), [evals.report](https://evals.report/models/meta-muse-spark-1-1))
- **Multimodal evidence (BenchLM base + Vals 1.1 paths)**: CharXiv **88.4%**, BabyVision **76.3%**, MMMU-Pro **86.59% ±0.82** (Vals), ScreenSpot Pro **84.1%** (base proxy) — among the strongest visual reasoning numbers in the field, given native 5-modality input.
- **AA-LCR v1.1 77.0–77.7%** (different harnesses), which sits above the median for 1M context.

Real-world behavior (Meta blog, partner quotes):

- **Multi-agent orchestration**: 1.1 is trained as both a main agent (gather context, plan, delegate to parallel subagents) and a subagent (adhere to job, escalate back to main agent). It actively chooses "automate this with a script vs click directly" to optimize end-to-end latency.
- **Computer use**: complex apps + evolving context — e.g. the *dinner party organization* demo: 1.1 notices when an order flow changes mid-task and re-routes without user input.
- **Per-amjad (Replit)**: 1.1's parallel tool calling + structured output + 1M context makes it a "complete agentic foundation."
- **Per-saoud (Cline)**: 1.1 pairs "strong tool use at a price point that makes it viable to run real coding workloads at scale."
- **Per-box**: 1.1 passed Box's enterprise evaluation set as "competitive with today's leading frontier models."

Live operational metrics ([llm-stats API page](https://llm-stats.com/models/opencode/muse-spark-1.1)):

- **TTFT p95**: **3.17 s** — comparable to the cheaper tier of opencode models.
- **Output p5**: **9 c/s** — modest; expect agents to budget for output latency.
- **License**: Proprietary (paid).

Pricing compared to peers (current as of 2026-10-16):

- **vs GPT-5.5**: $1.25/$4.25 is 73%/83% under GPT-5.5 $5/$25 — a known lens for cost-per-resolved-issue math.
- **vs GPT-6 Sol**: $1.25/$4.25 output is **42% of** $10 — important for cost-per-task leaders where Sol nominally posts higher DeepSWE.
- **vs Claude Opus 4.6**: $1.25/$4.25 is **8.3%/5.7%** of Opus pricing — only viable if pass-rate parity is close. SWE-Pro commercial split (51.5% vs 47.1%) suggests it is.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Atlas 88.1, Toolathlon 75.6, OSWorld-Verified 80.8, WebArena 69.0, Cybench 92.9% pass@1 — a strong **agentically native** set; capped by OSWorld-2.0 14.2% (harness tail), Vals TB2.1 69.3 (independent rerun, 10-pt below vendor), ProgramBench 0%, and missing Tau3/Tau2 same-harness reruns.
- **Reasoning: 88/100.** GPQA Diamond 91.16%, MMLU-Pro 88.73%, SciCode 58.8% (#3 frontier), HLE 52.2–62.1% (vendor-tools band), AA-Omniscience accuracy 49.6%; AA Intelligence Index 1.1-exact still unpublished which keeps it under the 90-floor.
- **Context window: 92/100.** Verified 1M window actively managed (co-trained), **131K output**, MRCR-v2 54.1% (verified) at 1M, AA-LCR 77.0–77.7% across harnesses. The 1M-only-on-paper-without-management cap matters and 1.1 explicitly manages; still below 100 because no ≥95% MRCR exists.
- **Multimodal: 93/100.** Full 5-modality input (text/image/video/audio/PDF) with CharXiv 88.4%, MMMU-Pro 86.6%, BabyVision 76.3%; **text-only output** keeps the cap on the output half-modality axis.
- **Coding: 88/100.** Dual SWE-Pro leadership — **61.5% public + 51.5% commercial** — is the strongest single-harness signal in the field; supplemented by SWE-Verified 82.0%, LiveCodeBench 85.9%, DeepSWE 53.3%, SciCode 58.8%. Vals ProgramBench 0% prevents full autonomy claim.
- **Cost efficiency: 82/100.** $1.25/$4.25 with 88% cached-discount into $0.15 — **8× under** Opus 4.6 and 73–83% under GPT-5.5; paid-only and the 9 c/s output penalty hurts tight feedback loops. Caches fully if your harness retains context; loses economics if it rebuilds.
- **Overall Score: 89/100.** Half-up mean of the five non-cost dims: (86 + 88 + 92 + 93 + 88) / 5 = 89.4 → **89**. Best fit: cost-sensitive, **agent-native** coding and multi-modal workflows where SWE-Pro lead + 1M-context active management covers most offline, with paid-only economics optimized by retaining cache state.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Seven-source triangulation (Meta blog + evaluation report, Scale SWE-bench Pro leaderboard recap, contracollective.com, agentriot.com, Artificial Analysis, Vals public aggregates, llm-stats live tracker); conflicting band values retained with provenance where harnesses differ (notably HLE 46.2 / 52.2 / 62.1 and SWE-bench 82% Verified vs 61.5% Pro-public). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
