# GPT-5.6 Terra — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-09-18→10-05, 2026-10-11, 2026-10-16): the
> model is now a **legacy SKU** (main pricing page delisted, AA marks it deprecated,
> successor GPT-6.1 Terra at half price) and official docs add a 2x-input/1.5x-output
> surcharge over 272K prompts. Newly measured long-context retrieval at depth
> (MRCR 512K–1M 57.9%, Graphwalks 1M 75.5% F1) docks Context 100→96 under the ≥98% rule;
> SWE-V 75.2% and Vibe 74.6% fill coding gaps, AutomationBench 15.2% and Harvey ~1–2.5%
> are weak additions. Tool use 91→90; Overall 89.8→89.

## Model card

- **Name:** GPT-5.6 Terra (balanced mid-tier of the GPT-5.6 series — between flagship Sol and small Luna; tier names are durable capability tiers that advance on their own cadence)
- **Short description:** OpenAI's July 2026 production workhorse: GPT-5.5-level quality at roughly half the cost, 1.05M-token context and Terminal-Bench 2.1 87.4%. Price cut 20% on 2026-07-30. **As of November 2026 it is a legacy SKU**: the main pricing page no longer lists it, Codex shows only GPT-6.1 Terra, and Artificial Analysis labels it deprecated — OpenAI still serves it with no announced shutdown (Azure schedule: 2028-01-11).
- **Provider / access:** OpenAI API ID `gpt-5.6-terra` (Responses API); ~30 gateways (Azure, Databricks, Snowflake, Cloudflare, Vercel, GitHub Copilot, OpenRouter…, $2/$12 standard; outliers $1.5/$2 and $1.5/$9); batch $1/$6. Available across the API, Codex and ChatGPT.
- **Release / knowledge:** limited preview 2026-06-26, public release 2026-07-09 (with Sol and Luna). Knowledge cutoff **2026-02-16** (official docs).
- **IDs:** `gpt-5.6-terra` (OpenAI). **No free tier** — API-only, paid.
- **Context window:** 1,050,000-token window with **maximum input 922,000 tokens** (official docs — new precision); 128,000 max output. Surcharge: prompts >272K input tokens bill at **2x input / 1.5x output** for the full request.
- **Modalities:** text + image in, text out (official docs; repo-catalog audio/video/PDF claims remain unverified). Reasoning efforts: none/low/medium (default)/high/xhigh/max.
- **Pricing (as of 2026-11-05):** $2.00 in / $12.00 out per 1M (stable since the 2026-07-30 cut); cached input $0.20 (90% off); **cache writes 1.25x input ($2.50)** — OpenAI's first cache-write pricing; long-context band as above. Legacy status: successor GPT-6.1 Terra halves input (−50%) and cuts output −58.3%.
- **Architecture:** proprietary, parameters undisclosed; reasoning model; one of three GPT-5.6 tiers (Sol/Terra/Luna, all 1.05M context).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **87.4%** (OpenAI launch table; Best-Reported-Harness rank #6/27) — Vals independent: **77.5%**
- Terminal-Bench 4.0: **22.73% ±2.31** (Vals, #26-31/59 — NEW, weak; BenchmarkList 23.6%); Terminal-Bench Hard (AA): **62.9% Xhigh** (#3, behind Sol — NEW, strong)
- AutomationBench: **15.2%** (OpenAI-reported, Frontier-Log verified — NEW, fills the gap, weak)
- Agents' Last Exam v1: **50.4%** (NEW — strong for the field)
- SEC-bench Pro: **57.7%** (#6 — NEW); ExploitGym 23.2%; ExploitBench 52.9% (#6); CyberGym 81.8%
- Harvey LAB-AA: **2.5%** all-pass (criterion pass 85.2%); Harvey's Legal Agent Bench (Vals): **0.8%** max — both very weak (NEW)
- τ²-bench: **86.3%** (AA); AA ITBench-AA 51.0%; AA Agentic Index 43.7% (frozen Sep 9) / 43.2 (Nov 4 drift); APEX-Agents (Epoch): **58.2%** max; BrowseComp 87.5%; OSWorld 2.0: 50.2% (triple-corroborated); Toolathlon 53.1%; χ-Bench 13.3%; ApprenticeBench 16%; TB3.0 20.8%; MazeBench 6%
- GDPval-AA: **1583** (launch) / 47.7% normalized (AA)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (launch table) / **92.5%** (AA) / **90.91% ±1.91** (Vals x-high, #24/138) — three-source agreement holds
- HLE: AA-HLE **42.9%**; HLE-Verified **51.1%** (Gemini 3.8 Flash card cross-table, #5 of a 6-model field)
- ARC-AGI-2: **83.9%** (ARC Prize verified); ARC-AGI-1: **96.5%** (max); ARC-AGI-3: 0.8%
- FrontierMath: legacy **84.9%**; v2 Tiers 1–3 **84.9%** / Tier 4 **68.3-68.5%** (private set); FrontierMath 2025-02-28 Private: **89.9%**
- ProofBench: **71.0% ±4.56** (x-high, #5 of 53 — NEW, strong); IOI (Vals): **87.61% ±6.53** (#7 of 46 — NEW, strong)
- Artificial Analysis Intelligence Index version chain: **55** (launch, v4.1.1) → **42** (v4.3.2 archived) → **32.2** (v5.0-era, OpenRouter Nov 4) — rescalings, not capability changes
- AA-LCR v1.1: **83.0%** (#20/423, 95th pct); CritPt 30.0% (#3/200); AA-Omniscience: 46.8% accuracy / 87.9% non-hallucination row / 0.1 index (heavy hedging); EnigmaEval-class: n/a
- MMLU-Pro: **86.7%** (Vals); ObviousBench **97.9%** (max, answer-pass³); LegalBench 85.1%; Legal Research 40.9% (#7/27); RedlineBench 49.3%; HealthBench Professional 57.7% (62.4% raw); HealthBench Hard 32.7%; LABBench2 81.2%; AIIQ 130 (#17/168)

Coding:

- SWE-bench Verified: **75.2%** (BenchmarkList, #29/72 — NEW, fills the gap); SWE-bench (Vals): **95.40% ±0.94** (#5/88, joint 5th)
- SWE-bench Pro: **63.4%** (#17/61); DeepSWE 1.1: **69.6%** (#18/61, triple-corroborated)
- Vibe Code Bench v1.1 (Vals): **74.59% ±4.20** (#42/123 — NEW; BenchmarkList reads 67.8%)
- LiveCodeBench (Vals): **85.93%**; AA Coding Index **76.7-77.4** (Coding Agent Index rank #2/10); AA-SciCode 55.0%; VulcanBench v3 87.0%
- FrontierCode 1.1 Extended: **55.8%** (Cognition/Devin); Android Bench **86.8%** (#7/46); ReactBench 40.5% (#5/24); Convex Coding 69.8%; SWE-Marathon 52/160; SWE-sweep 1.5%; CursorBench 3.2 64.9%; CursorBench 4.0 41.3%

Long context:

- Window: 1,050,000 in (max input 922K) / 128K out
- **MRCR v2 (8-needle): 89.6%** overall — **57.9% @512K–1M**, 78.9% @256K–512K, 93.5% @128K (NEW measured depth falloff)
- **Graphwalks BFS: 94.9% F1 @256K / 75.5% F1 @1M** (NEW); Graphwalks >128K: 76.9%
- AA-LCR v1.1: **83.0%**

Multimodal:

- MMMU-Pro: **80.7%** / **82.0%** with tools (OpenAI) / **86.5%** (BenchmarkList x-high, #16/79); MVBench 75.0% (#3/26); Vals Multimodal Index 65.1%

### Normalized scores (1–100)

- **Tool use: 90/100.** CHANGED from 91 — TB-Hard 62.9% (#3), Agents' Last Exam 50.4% and SEC-bench 57.7% are strong additions, but the newly measured TB4.0 22.7%, AutomationBench 15.2% and Harvey ~1–2.5% rows are genuinely weak and join Toolathlon 53.1% on the debit side.
- **Reasoning: 88/100.** Unchanged — ProofBench 71.0% (#5) and IOI 87.6% (#7) add independent strength to GPQA 90.9–92.9% and FrontierMath T4 68.3%; the AA Index rebase to 32.2 tracks the global v5 rescale, not a decline.
- **Context window: 96/100.** CHANGED from 100 — measured retrieval at depth now exists and falls short of the ≥98%-at-512K+ bar for the top score: MRCR 512K–1M 57.9% and Graphwalks 1M 75.5% F1 (vs 94.9% at 256K); 1.05M window and AA-LCR 83.0% keep it in the top tier.
- **Multimodal: 82/100.** Unchanged — text + image in with MMMU-Pro now triple-sourced (80.7/82.0/86.5) and MVBench 75.0%; unverified audio/video/PDF claims; text-only output.
- **Coding: 88/100.** Unchanged — SWE-V 75.2% and Vibe 74.6% fill former gaps mid-band while Vals SWE-bench 95.4%, TB2.1 87.4% and the #2 Coding-Agent-Index rank hold the top; SWE-Pro 63.4% and DeepSWE 69.6% still cap below the frontier band.
- **Cost efficiency: 55/100.** Unchanged — $2.00/$12.00 list with no free tier; the newly documented >272K surcharge (2x input / 1.5x output) and 1.25x cache writes worsen long-context economics; the half-price successor makes staying on Terra a premium choice.
- **Overall Score: 89/100.** CHANGED from 89.8 — (90 + 88 + 96 + 82 + 88) / 5 = 444/5 = 88.8 → 89. Best fit: a strong legacy workhorse still worth pinning for its 1.05M context and measured depth — but GPT-6.1 Terra now beats it on TB4.0, Vibe and price, so new work should justify the premium explicitly.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: OpenAI official docs (token limits, surcharge, cache pricing, efforts) + launch post, datastudios GPT-6.1-vs-5.6 comparison (legacy status, hallucination delta), Vals AI model page + Ridge + theindexofai + BenchmarkList + Frontier Log + benchlm + CtrlAltDebrief/GenMagic price-volume logs); index-version chain documented; estimates excluded; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
