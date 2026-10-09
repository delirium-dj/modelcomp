# Grok 4 Fast — findings by Claude Opus 5

- Source: xAI / SpaceXAI (`grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's cost-efficiency flagship, built on Grok 4's learnings and optimised for **intelligence density** rather than peak capability. Two structural novelties: a **unified architecture** in which long-chain-of-thought reasoning and instant non-reasoning responses share one set of weights, steered by system prompt rather than by model choice; and a **2M-token context window** at a $0.20/MTok entry price. xAI claims it matches Grok 4 on benchmarks while using **40% fewer thinking tokens**, which combined with the lower rate yields a **98% reduction in price to reach the same frontier-benchmark performance** ([xAI announcement, 2025-09-19](https://x.ai/news/grok-4-fast)). Shipped as two API SKUs (`-reasoning` and `-non-reasoning`) off the same weights; BenchLM tracks the reasoning variant, which is what the independent figures below measure.
- **Provider / access:** xAI API, OpenRouter, and Vercel AI Gateway; plus grok.com and the Grok iOS/Android apps in Fast and Auto modes. **Not listed on OpenCode Zen** (whose Grok line is 4.5 / 4.6 / 4.7 / Build 0.1); this repo records the local route `opencode/grok-4-fast`. `docs.x.ai/developers/models/grok-4-fast` now returns **404**, consistent with removal from the live model reference in favour of Grok 4.1 Fast.
- **Release / knowledge:** Released **2025-09-19**. Knowledge cutoff: no verified public date found — as with Grok 4, xAI positions live web/X search as the substitute.
- **IDs:** `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` (xAI API); `grok-4-fast-search` (LMArena code name *menlo*) and `grok-4-fast` (*tahoe*) were the arena entries. **A genuine free route exists:** xAI made it available "for all users, including free users … without restrictions" on grok.com and the mobile apps — the first xAI frontier model to be fully unrestricted on the free tier. There is no free *API* tier.
- **Context window:** **2,000,000 tokens** on both SKUs, stated directly by xAI and corroborated by [BenchLM](https://benchlm.ai/models/grok-4-fast-reasoning). Max output: no verified public figure found.
- **Modalities:** **Text + image in → text out.** During agentic search it "ingests media (including images and videos on X)", but xAI explicitly lists "enhanced multimodal capabilities" as *future* work, which is a vendor admission that the launch multimodal surface is limited. No audio, no video API input, no generated media. Reasoning: yes — and uniquely, toggleable within one model via system prompt or SKU choice. Tool calls: yes, trained end-to-end with tool-use RL, including deciding *when* to invoke code execution or browsing.
- **Pricing (as of 2026-10-08):** Tiered at 128K prompt tokens — **input $0.20 / MTok below 128K, $0.40 above; output $0.50 / MTok below, $1.00 above; cached input $0.05 / MTok** ([xAI](https://x.ai/news/grok-4-fast)). Note this is a *cheaper* cliff structure than Grok 4.20's (which doubles the rate on the whole request at 200K). Free on consumer surfaces; paid on API.
- **Architecture:** Proprietary, closed weights. Parameter count undisclosed, though xAI repeatedly calls it a "smaller and faster" model and notes that in LMArena's Text Arena "all comparable size models rank 18th or below". The disclosed method is large-scale RL aimed specifically at maximising intelligence per thinking token, plus the unified reasoning/non-reasoning weight sharing.

### Raw benchmarks found

> xAI's launch table is a genuine comparison table with values (unlike the Grok 4 post's unlabelled charts), and it includes competitor columns. Independent Artificial Analysis figures for the reasoning SKU are given alongside, and they track the vendor's numbers closely on the benchmarks both measured — which is a meaningful credibility signal.

Agent / tool use:

- **LMArena Search Arena: #1 with 1163 Elo** as `grok-4-fast-search`, a margin of **+17 over o3-search** (xAI) — a live, blind, human-preference ranking, and the strongest single piece of agentic-search evidence in this report
- LMArena Text Arena: **#8** as `grok-4-fast`, on par with `grok-4-0709`
- SimpleQA: **95.0%** (xAI; Grok 4 94.0%, Grok 3 non-reasoning 82.0%)
- X Bench Deepsearch (zh): **74.0%** (xAI; Grok 4 66.0%)
- Reka Research Eval: **66.0%** (xAI; Grok 4 58.0%)
- X Browse (xAI internal multihop search/browse): **58.0%** (Grok 4 53.2%)
- BrowseComp: **44.9%** (xAI; Grok 4 43.0%); BrowseComp (zh): **51.2%** (Grok 4 45.0%)
- τ²-bench: **65.8%** ([Artificial Analysis](https://artificialanalysis.ai/models/grok-4-fast-reasoning))
- **Terminal-Bench (any version), OSWorld, GDPval-AA, MCP-Atlas, Toolathon, Claw-Eval: no verified public score found.** The agentic evidence is almost entirely *search* agency; there is nothing at all on terminal, computer-use or tool-server orchestration.

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (xAI; equal to GPT-5 High's 85.7%, just under Grok 4's 87.5%). Independently **AA-GPQA Diamond 84.7%** — a 1-point gap, unusually tight
- AIME 2025 (no tools): **92.0%** (xAI; Grok 4 91.7%, GPT-5 High 94.6%)
- HMMT 2025 (no tools): **93.3%** (xAI; equal to GPT-5 High, above Grok 4's 90.0%)
- HLE (no tools): **20.0%** (xAI; Grok 4 25.4%, GPT-5 High 24.8%). Independently **AA-HLE 19.1%** — again within a point
- AA-LCR: **73.7%** (Artificial Analysis)
- CritPt: **2.9%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **17.9**; BenchLM overall **43.64/100, rank #119 of 889** ([BenchLM](https://benchlm.ai/models/grok-4-fast-reasoning), only 12 of 625 benchmarks covered and flagged conservative)
- AA-Omniscience: Index **−29.9**, Accuracy **22.8%**, **Hallucination Rate 68.3%**
- AA-IFBench: **50.5%**
- Token-efficiency evidence (xAI, charted with values on the axes): comparable performance to Grok 4 on AIME 2024, AIME 2025, HMMT 2025 and GPQA Diamond at **~40% fewer thinking tokens**; Artificial Analysis independently verified a **SOTA price-to-intelligence ratio** on its Intelligence Index

Coding:

- LiveCodeBench (Jan–May): **80.0%** (xAI; **above Grok 4's 79.0%**, below GPT-5 High's 86.8%)
- **Vibe Code Bench: 0.00%** ([Vals AI Vibe Code Bench v1.1](https://www.vals.ai/benchmarks/vibe-code)) — a literal zero. Its stablemate Grok 4.20 scored 4.06% on the same harness, so this is almost certainly a scaffold/harness incompatibility across the Grok family rather than a capability reading, and I flag it rather than averaging it in.
- **SWE-bench Verified, SWE-bench Pro, SciCode, FrontierCode: no verified public score found.** No independent repair-task measurement of any kind exists for this model.

Multimodal:

- AA-MMMU-Pro: **61.8%** (Artificial Analysis)
- No MathVision, CharXiv, Video-MME, OCR, document or GUI-grounding number found. xAI's own "stay tuned for … enhanced multimodal capabilities" is the clearest statement of where this stood at launch.

Long context:

- No MRCR / RULER / LongBench / needle-retrieval number at any depth. **AA-LCR 73.7%** is the only quantified long-context signal against a **2M-token** advertised window — a 2M claim resting on one mid-band reasoning score is the largest evidence-to-claim gap in this report.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic *search* here is not merely good, it is externally validated as best-in-class: #1 in LMArena's Search Arena at 1163 Elo with a 17-point margin over o3-search is a blind human-preference result, not a self-report, and it is backed by a clean sweep over Grok 4 on SimpleQA, BrowseComp (both languages), Reka Research, X Bench Deepsearch and X Browse. The score stops at 70 because **search is the only agentic surface measured** — no Terminal-Bench, no OSWorld, no MCP, no GDPval — and τ²-bench 65.8% is merely decent on structured function calling.
- **Reasoning: 69/100.** Exam-style reasoning is excellent for the weight class and, crucially, *independently corroborated*: GPQA Diamond 85.7% vendor vs 84.7% AA, HLE 20.0% vendor vs 19.1% AA — a vendor whose numbers survive outside audit to within a point deserves credit. AIME 2025 92.0% and HMMT 93.3% match or beat GPT-5 High. Capped firmly by the frontier-hard tier: HLE only 20%, CritPt 2.9%, an AA Intelligence Index of 17.9, AA-IFBench 50.5%, and an Omniscience Index of −29.9 with a 68.3% hallucination rate against 22.8% accuracy — it is confidently wrong far more often than it abstains.
- **Context window: 90/100.** 2,000,000 tokens is the largest window in this dataset, vendor-stated, aggregator-confirmed, available on both SKUs, and — unlike several rivals — the price cliff at 128K only doubles the *marginal* tier rather than repricing the whole request. Held below the mid-90s because the window is almost entirely unvalidated: one AA-LCR score of 73.7% is the sole public evidence that anything works beyond the first few hundred thousand tokens.
- **Multimodal: 55/100.** Text and images in, text only out. One hard number exists (AA-MMMU-Pro 61.8%) and nothing else — no chart, document, OCR, video or GUI measurement. xAI itself deferred "enhanced multimodal capabilities" to future work, so this is a correctly-low score rather than a gap in my research. Credit retained for genuine in-the-loop media ingestion during X/web search, which is more than a static vision benchmark captures.
- **Coding: 58/100.** LiveCodeBench (Jan–May) 80.0% is a real result and it *beats the larger Grok 4* — meaningful evidence that the distillation preserved competitive coding. But the dimension is unsupportable above the high 50s: there is **no SWE-bench result of any kind**, no SciCode, no FrontierCode, and the one independent agentic coding harness returned **0.00%**. Even reading that zero charitably as a harness failure, it leaves the agentic-coding capability entirely unevidenced.
- **Cost efficiency: 95/100.** The best value proposition in this dataset, and the claim is third-party verified rather than asserted: **$0.20 in / $0.50 out per MTok** (with $0.05 cached reads) for a 2M-context reasoning model, a **40% thinking-token reduction** versus Grok 4, a resulting **98% price reduction for equal frontier-benchmark performance**, and Artificial Analysis independently confirming a **SOTA price-to-intelligence ratio**. On top of that it is genuinely **free and unrestricted** on grok.com and the mobile apps. Short of 100 only because the free route is consumer-only — the API has no free tier — and the 128K cliff doubles both rates.
- **Overall Score: 68.4/100.** Mean of the five non-cost dims (70 + 69 + 90 + 55 + 58) / 5 = 68.4. Best fit: high-volume real-time search, research and Q&A over very large contexts where price per answer dominates — this is the model to put behind a consumer-facing search or RAG product, and the Search Arena result says so. Avoid it for agentic coding (no SWE-bench, a 0% agentic coding harness), for frontier-hard reasoning (HLE 20%, CritPt 2.9%), and for anything where a 68% hallucination rate is unacceptable.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — xAI's own Grok 4 Fast launch post (release date, 2M context, unified reasoning/non-reasoning architecture, full tiered pricing, free-tier availability, token-efficiency claims, and a competitor comparison table with actual values), BenchLM's aggregated page for the reasoning SKU, and the underlying Artificial Analysis and Vals AI leaderboards. `docs.x.ai/developers/models/grok-4-fast` was requested and returned 404, reported as evidence of retirement from the live reference. The Vals Vibe Code Bench result of 0.00% is flagged as a probable harness incompatibility rather than averaged in as capability, and vendor claims are cross-checked against independent AA figures wherever both exist. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
