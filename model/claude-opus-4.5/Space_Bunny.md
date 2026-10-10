# Claude Opus 4.5 — findings by Space Bunny

- Source: Anthropic (`claude-opus-4-5-20251101`; non-reasoning base variant unless a row states otherwise)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **Two material changes, in opposite directions.** (1) **Lifecycle corrected:** the prior pass recorded this model as deprecated on the strength of an Artificial Analysis banner. Anthropic's own model-deprecations table lists `claude-opus-4-5-20251101` as **Active**, with tentative retirement **not sooner than 2026-11-24** — the AA banner reflects *frozen evaluation*, not vendor deprecation. (2) **Substantial new evidence, mostly downward:** the Qwen3.6-Plus and Qwen3.5-397B-A17B comparison tables publish ~35 previously-unavailable figures, including **FrontierMath v2 Tier 4 at 4.167%** (Epoch AI), **ScreenSpot Pro 45.7%**, **DeepPlanning 26.4%**, **VITA-Bench 23.3%**, and a full video-input suite (**Video-MME 81.4%, MLVU 81.7%, VideoMMMU 84.4%**). Net: **Tool use 78 → 76**, **Reasoning 76 → 74**, **Multimodal 70 → 76**, Overall **76.2 → 76.6**.

## Model card

- **Name:** Claude Opus 4.5 (non-reasoning base variant)
- **Short description:** Anthropic's late-2025 flagship, released 2025-11-24 as the SWE-bench record holder at launch. Two serving variants exist — a non-reasoning base and a hybrid "extended thinking" mode — and they score differently on independent indexes; a sibling **Claude Opus 4.5 Thinking** row also exists. The base variant is scored here unless a row states otherwise.
- **Provider / access:** Anthropic Messages API, model ID `claude-opus-4-5-20251101`; Amazon Bedrock and Google Vertex AI. OpenRouter route `anthropic/claude-opus-4.5` (Design Arena Website 1253). No Free-tier ID exists.
- **Lifecycle — corrected this pass:** **Active.** Anthropic's model-deprecations table lists `claude-opus-4-5-20251101` as **Active**, tentative retirement **not sooner than 2026-11-24**. Artificial Analysis separately freezes its benchmarking to the default 10k-input-token workload and suggests **Claude Opus 4.6 (max)** — that is an evaluation status, not a vendor retirement. **The prior revision conflated the two and should be corrected on that point.**
- **Release / knowledge:** Released **2025-11-24**; knowledge cutoff **August 2025** (Artificial Analysis). Now 14 months stale.
- **IDs:** `claude-opus-4-5-20251101` (Anthropic/Bedrock/Vertex); `anthropic/claude-opus-4.5` (OpenRouter).
- **Context window:** **200,000 tokens** — this is the evaluated ceiling (Anthropic's GPQA Diamond run used a 200K window; Artificial Analysis and BenchLM both list 200k). A 1M-token beta existed for the Claude 4.x family but is **not** the default limit for this model.
- **Modalities:** Text and image in; text out. PDF via document blocks, image via vision, **video** (see Multimodal below — the Qwen comparison tables publish Video-MME, MLVU, and VideoMMMU figures, so video *input* is supported). Extended/interleaved thinking yes; tool calls via server-side `tools` plus computer-use and memory tools. Strict JSON mode not advertised for this generation.
- **Pricing (verified 2026-10-10, unchanged):** **$5.00 per 1M input / $25.00 per 1M output** (Anthropic list). Artificial Analysis shows a blended **$3.90 per 1M** and flags both legs "expensive" against $2/$10 class medians. Prompt caching and batch discounts exist but are not the list rate.
- **Speed:** Artificial Analysis records **46 tokens/s** (reasoning variant) and **45 tokens/s** (non-reasoning) on the 10k workload; benchmarking beyond that workload is frozen.
- **Architecture:** Proprietary — no weights, no parameter count published.

### Raw benchmarks found

**Official — Anthropic Claude Opus 4.5 system card:**

- SWE-bench Verified **80.9%** (no thinking) / **80.6%** (64k thinking), averaged over 5 trials — the launch number that topped the leaderboard
- Terminal-Bench 2.0 **59.3%** (Terminus-2 in Harbor, 128k thinking budget, 59.27% ±1.34% over 1,335 trials; 57.8% at 64k)
- OSWorld-Verified **66.3%** (66.26% P@1 avg@5, 1080p, 100 steps); WebArena 65.3%
- GPQA Diamond **86.95%** (64k thinking, interleaved scratchpads, 200K window, high effort, 5 trials)
- τ²-bench: Retail **88.9%**, Telecom **98.2%**, Airline-original 70.1%, Airline-corrected 87.8%

**Independent — Qwen3.6-Plus comparison table** (a third-party cross-vendor table, not an Anthropic publication):

- SWE-bench Pro **57.1%**; SWE Multilingual **77.5%**; NL2Repo **43.2%**; LiveCodeBench v6 **84.8%**
- τ³-bench **70.2%**; Toolathlon **43.5%**; MCP Atlas **42.3%**; MCP-Tasks **71.8%**; WideResearch **76.4%**; DeepPlanning **26.4%**
- MMLU-Pro **89.5%**; MMLU-Redux **96.6%**; C-Eval **92.2%**; SuperGPQA **70.6%**; HLE **30.8%**; MMLU-ProX 85.7%; NOVA-63 56.7%
- AIME26 **95.1%**; HMMT Nov 2025 **93.3%**; HMMT Feb 2025 92.9%; HMMT Feb 2026 85.3%; MMAnswerBench 84.0%
- IFEval **90.9%**; IFBench 58%
- MMMU-Pro **70.6%**; MathVision 74.3%; CharXiv 68.5%; **ScreenSpot Pro 45.7%**; V* 67.0%; **VideoMMMU 84.4%**
- LongBench v2 **64.4%**; AI-Needle **74%**

**Independent — Qwen3.5-397B-A17B model card comparison table:**

- **Video-MME 81.4% without subtitle / 77.6% with subtitle**; **MLVU (M-Avg) 81.7%**
- **OmniDocBench 1.5 87.7%**; MMMU 80.7%; RealWorldQA 77.0%
- CountBench **90.6%**; AI2D_TEST 87.7%; DynaMath 79.7%; PolyMath 79.0%; MAXIFE 79.2%; We-Math 70.0%; INCLUDE 86.2%; SimpleVQA 65.7%; ERQA 46.8%

**Independent — Artificial Analysis:**

- **Intelligence Index 23.7** (was 29 reasoning / 24 non-reasoning on the prior pass)
- AA-GPQA Diamond **81.0%**; **AA-HLE 13.2%**; AA MMLU-Pro **88.9%**; AA-MMMU-Pro 71.2%; AA-IFBench 43.0%
- **AA-Omniscience: Index −4.1%, Accuracy 40.9%, Hallucination Rate 76.2%**
- **AA-LCR 70.7%**; CritPt 0.3% (treated as a harness artifact — the model is not on the CritPt leaderboard); τ²-bench 86.3%

**Independent — Epoch AI:** **FrontierMath v2 Tiers 1–3: 20.690%**; **Tier 4: 4.167%**

**Other:** Claw-Eval **59.6%**; QwenClawBench 52.3%; VITA-Bench **23.3%** (VitaBench leaderboard); CyberGym 50.6%; Gert Labs 64.23%; JobBench 32.3%; Design Arena Website 1253; BenchLM overall **54.14/100**, rank **#74 of 889**; sibling **Claude Opus 4.5 Thinking 54.19**.

Sources consulted: [Claude Opus 4.5 System Card (Anthropic PDF)](https://www-cdn.anthropic.com/bf10f64990cfda0ba858290be7b8cc6317685f47.pdf), [BenchLM Claude Opus 4.5 (updated 2026-10-10)](https://benchlm.ai/models/claude-opus-4-5), [Artificial Analysis Claude Opus 4.5](https://artificialanalysis.ai/models/claude-opus-4-5), [Claude Platform model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [Qwen3.6-Plus comparison table](https://qwen.ai/blog?id=qwen3.6), [Qwen3.5-397B-A17B model card comparison table](https://huggingface.co/Qwen/Qwen3.5-397B-A17B), [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard), and [VitaBench leaderboard](https://vitabench.github.io/), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 76/100.** Reduced from 78. **OSWorld-Verified 66.3%**, **Terminal-Bench 2.0 59.3%** over 1,335 trials, **τ²-bench 86.3%**, **MCP-Tasks 71.8%**, and **WideResearch 76.4%** are real strengths. The new Qwen table supplies the weak rows the prior pass could not see: **Toolathlon 43.5%**, **MCP Atlas 42.3%**, **DeepPlanning 26.4%**, **VITA-Bench 23.3%**, **JobBench 32.3%**, and **ScreenSpot Pro 45.7%**. Still no Terminal-Bench 2.1, 3.0, or 4.0 row, and no AA-Briefcase, AutomationBench-AA, or GDPval-AA v2.1 entry — so the model cannot be confirmed on any *current* agentic harness.
- **Reasoning: 74/100.** Reduced from 76. **GPQA Diamond 86.95%** (Anthropic, 5 trials) vs. **81.0%** (AA), **MMLU-Pro 89.5%**, **AIME26 95.1%**, **IFEval 90.9%**, and **MMLU-Redux 96.6%** are strong. Deducted for the newly visible frontier-exam ceiling: **FrontierMath v2 Tier 4 at 4.167%** and T1–3 at only 20.690% (Epoch AI), **HLE 30.8% and AA-HLE 13.2%**, **CritPt 0.3%**, an **AA-Omniscience Index of −4.1% with a 76.2% hallucination rate**, and an **AA Intelligence Index that has fallen to 23.7**. This is a strong applied-reasoning model with weak frontier-science recall.
- **Context window: 72/100.** Unchanged. The documented and evaluated ceiling is **200K**, which the methodology maps to 70; the small uplift rests on **LongBench v2 64.4%**, **AI-Needle 74%**, and **AA-LCR 70.7%** showing the window is genuinely usable. Still no MRCR / RULER / GraphWalks result at window length, and a 64K max-output ceiling.
- **Multimodal: 76/100.** Raised from 70. The prior pass scored text-and-image on methodology bands alone and noted that "the 84.4% VideoMMVU row reflects frame sampling, not a video-input capability." The new evidence resolves that: **Video-MME 81.4% without subtitles**, **MLVU 81.7%**, and **VideoMMMU 84.4%** establish that video input is genuinely supported. Document understanding is also strong — **OmniDocBench 1.5 87.7%**, **CountBench 90.6%**, **AI2D 87.7%** — alongside **RealWorldQA 77.0%**. Held at 76 by **ERQA 46.8%**, **ScreenSpot Pro 45.7%**, and **SimpleVQA 65.7%**: perception is much better than GUI grounding.
- **Coding: 85/100.** Unchanged. The launch **SWE-bench Verified record of 80.9%**, **LiveCodeBench v6 84.8%**, and **SWE Multilingual 77.5%** are genuine frontier coding numbers, and **Aider Polyglot 89.4%** remains a provisional single-source figure. Held below the 90+ band by **SWE-bench Pro 52.0% (Anthropic) / 57.1% (Qwen table)**, **Terminal-Bench 2.0 at 59.3%**, **NL2Repo 43.2%**, and the absence of any SciCode, DeepSWE, or Vibe Code Bench row.
- **Cost efficiency: 42/100.** Unchanged. **$5.00 / $25.00** is among the most expensive tiers in this dataset, with a $3.90 blended rate that Artificial Analysis still flags "expensive" against $2/$10 medians. The Active-until-2026-11-24 correction prevents a further penalty but does not improve the economics — Claude Opus 4.8 and Claude Opus 5 are both $5/$25 with substantially better measured performance, and Opus 5.5 is $4/$20.
- **Overall Score: 76.6/100.** (76 + 74 + 72 + 76 + 85) / 5 = 383 / 5 = 76.6, up from 76.2. Essentially flat: **Multimodal 70 → 76** is offset by **Tool use 78 → 76** and **Reasoning 76 → 74**. **Best fit: high-end coding and document-analysis work for organizations that can absorb premium pricing and want Anthropic's tool-use discipline.** **Migrate for:** anything reasoning-heavy (FrontierMath Tier 4 at 4.167%, AA-HLE 13.2%) or anything where hallucination matters (76.2% rate). The lifecycle correction matters operationally — **this model has roughly 45 days of guaranteed API life**, and Opus 4.8, 4.7, 5, and 5.5 all sit strictly above it.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Anthropic's Opus 4.5 System Card, the Claude Platform deprecations table, Artificial Analysis, BenchLM, Vals-independent Qwen comparison tables (Qwen3.6-Plus launch blog, Qwen3.5-397B-A17B model card), Epoch AI's FrontierMath v2 leaderboard, and the VitaBench leaderboard; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **lifecycle correction:** the prior pass recorded this model as vendor-deprecated based on an Artificial Analysis banner. **Corrected** — Anthropic lists it Active, not sooner than 2026-11-24. Same conflation pattern previously corrected for Claude Sonnet 4.6. Several of the largest benchmark additions come from **third-party Qwen comparison tables**, not from Anthropic, and are labelled as such; SWE-bench Pro is recorded with both figures (**52.0% Anthropic / 57.1% Qwen table**) rather than merged. CritPt's 0.3% is treated as a harness artifact, not a capability signal. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Opus_4_5_Recheck.md`, using the same headings.