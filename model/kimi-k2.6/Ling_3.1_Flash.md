# Kimi K2.6 — findings by Ling 3.1 Flash

- Source: Moonshot AI (`moonshotai/kimi-k2.6`; Kimi.com, Kimi App, API, Kimi Code)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's 1T-parameter open-weight flagship (2026-04-21) — HLE-Full 54.0% with tools (top of its release table), GPQA Diamond 88.4–90.5%, DeepSearchQA 92.5 F1 (best in table), SWE-bench Verified 80.2%, LiveCodeBench 89.6%, agent swarms scaling to 300 sub-agents / 4,000 coordinated steps; $0.95/$4.00 per 1M.
- **Provider / access:** Moonshot AI API (Kimi.com, Kimi App, Kimi Code), OpenRouter, Vercel AI Gateway, Cloudflare Workers AI, and ~40 third-party hosts ($0.30/$1.20 to $1.79/$8.94); open weights (1T, KimiK25ForConditionalGeneration); thinking mode; function calling; vision. Web search is not in the base mode table (eval harnesses equipped search, code-interpreter and browsing tools).
- **Release / knowledge:** 2026-04-21 (84 days after K2.5); knowledge cutoff not stated.
- **IDs:** `moonshotai/kimi-k2.6` / `opencode/kimi-k2.6`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 262K window and vision.
- **Context window:** 262,144 (256K) tokens in and out; evals ran at 262,144 with per-step limits (e.g., 49,152 for HLE-Full with tools) and simple context management (only the most recent tool round retained past the threshold).
- **Modalities:** text, image in (vision); text out (ARMES claims native text/image/video — video unverified by Moonshot's own materials).
- **Pricing (as of 2026-10-02):** $0.95/$4.00 per 1M input/output; cached input $0.16/M; third-party hosts from $0.30/$1.20 (Vultr) to $1.79/$8.94 (Privatemode AI); free listings on Nvidia and Alibaba Token Plan.
- **Architecture:** 1.06T-parameter open-weight (KimiK25ForConditionalGeneration).

### Raw benchmarks found

Agent / tool use (Moonshot tech blog; thinking mode, temp 1.0, top-p 1.0, 262,144 context; baselines: Kimi K3, GPT-5.4 xhigh, Claude Opus 4.6 max, Gemini 3.1 Pro high):

- BrowseComp: **83.2%** (behind Gemini 3.1 Pro's 85.9% and Opus 4.6's 83.7%, ahead of GPT-5.4's 82.7% and K2.5's 74.9%); BrowseComp (Agent Swarm): **86.3%** (K2.5: 78.4%)
- DeepSearchQA: **92.5 F1** / **83.0 accuracy** — best in table (Opus 4.6: 91.3/80.6; GPT-5.4: 78.6/63.7; Gemini 3.1 Pro: 81.9/60.2; K2.5: 89.0/77.1)
- WideSearch: **80.8 item-F1** (K2.5: 72.7)
- Toolathlon: **50.0%** (GPT-5.4 54.6, Gemini 3.1 Pro 48.8, Opus 4.6 47.2, K2.5 27.8)
- MCPMark: **55.9%** (GPT-5.4 62.5, Opus 4.6 56.7, Gemini 3.1 Pro 55.9, K2.5 29.5)
- Claw Eval: **62.3 pass^3** / **80.9 pass@3** (Opus 4.6: 70.4/82.4; GPT-5.4: 60.3/78.4)
- APEX-Agents: **27.9** (GPT-5.4 33.3, Opus 4.6 33.0, Gemini 3.1 Pro 32.0, K2.5 11.5)
- OSWorld-Verified: **73.1%** (GPT-5.4 75.0, Opus 4.6 72.7, K2.5 63.3)
- GDPval-AA: **1520 Elo** (vs K2.5's 1309); hallucination rate **39%** (vs K2.5's 65%)
- Agent swarm: scales to **300 sub-agents executing 4,000 coordinated steps** (vs 100/1,500 in K2.5)
- Terminal-Bench 4.0: **0.5%** (AA standardized — a genuine read; see the 2026-10-11 update on the Moonshot-family collapse on TB 4.0's new format); Terminal-Bench 2.1: **65.9%** (AA) / **53.6%** (Vals); Terminal-Bench Hard: **43.9%** (AA); τ²-Bench Telecom: **95.9%** (AA); τ-Bench Banking: **23.3%** (AA); ITBench SRE: **31.2%** (AA); Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (Full, w/ tools): **54.0%** — top of its release table (K3 58.7, GPT-5.4 52.1, Opus 4.6 53.0, Gemini 3.1 Pro 51.4, K2.5 50.2); HLE-Full (no tools): **34.7%** (text-only subset: 36.4% without tools, 55.5% with tools)
- GPQA Diamond: **88.4%** (Moonshot blog; third-party trackers cite 90.5%) — behind K3's 91.2 and GPT-5.4's 89.6 in the blog table
- AIME 2026: **93.3** (blog; 96.4 per trackers); HMMT 2026 (Feb): **92.7**; IMO-AnswerBench: **86.0**
- BullshitBench v2: **65%**; Arena Elo — Text **1461**, Code **1513**; WebDev Arena **1513**
- AA Intelligence Index: **27** (v4.3.2, #21 of 117; 180M tokens on the Index run — "very verbose" vs the 140M median; was 43–44 on the v4.1.1 edition — the 16-point drop is the v4.3.2 rebase, which rescored every model 12–19 points lower, not a capability change). v4.3.2 components: AA-Briefcase v1.1 **820**, GDPval-AA v2.1 **1038 Elo** (27.0–34.5% depending on snapshot), AutomationBench-AA **13%**, Terminal-Bench 4.0 **1%** (0.5% unrounded), SciCode **52%**, HLE **37%** (no-tools), GDP.pdf **13%**, CritPt **8%**, AA-Omniscience **5** (accuracy 32.6%, non-hallucination 59.5%), AA-LCR v1.1 **81%**; non-reasoning variant: Index 24

Coding:

- Terminal-Bench 2.0 (Terminus-2): **66.7%** (K3 71.8, Gemini 3.1 Pro 68.5, GPT-5.4 65.4, Opus 4.6 65.4, K2.5 50.8)
- SWE-bench Verified: **80.2%** (Opus 4.6 80.8, Gemini 3.1 Pro 80.6, K2.5 76.8)
- SWE-bench Pro: **58.6%** (K3 63.4, GPT-5.4 57.7, Opus 4.6 53.4, K2.5 50.7)
- SWE-bench Multilingual: **76.7%** (Opus 4.6 77.8, Gemini 3.1 Pro 76.9, K2.5 73.0)
- SciCode: **52.2%** — under the 55% reference (GPT-5.4 56.6, Gemini 3.1 Pro 58.9, Opus 4.6 51.9)
- LiveCodeBench v6: **89.6%** (Gemini 3.1 Pro 91.7, Opus 4.6 88.8, K2.5 85.0)
- OJBench (python): **60.6%**; CursorBench v3.1: **47.6%**; Next.js Evals: **67%**; Kimi Code Bench 2.0 (internal): **72.9%**
- DeepSWE: **24%** pass@1 (Datacurve board; corroborated by an independent air-gapped mini-swe-agent run — the same protocol that measured MiniMax-M3 at 13.3%); FrontierSWE: no verified public score found; AA Coding Index: **61.8**; AA Agentic Index: **20.5**; Vibe Code Bench v1.1: **37.9%** (Vals); LiveCodeBench (Vals): **86.8%** (vs 89.6% vendor); SWE-bench Verified (Vals): **76.2%** (vs 80.2% vendor, 10-run in-house harness); FrontierMath Tier 4: **25.6%** (Together)

Long context / multimodal:

- 262K window; no MRCR/RULER/GraphWalks score published; AA-LCR v1.1: **81%** (AA — strong retrieval within the window; a 2026-08-19 snapshot read 76.7%)
- MMMU-Pro: **79.4%** (80.1% w/ python); MathVision: **87.4%** (93.2% w/ python); CharXiv (RQ): **80.4%** (86.7% w/ python); BabyVision: **39.8%** (68.5% w/ python); V* (w/ python): **96.9%**

### Normalized scores (1–100)

- **Tool use: 79/100.** DeepSearchQA 92.5 F1 (best in table), BrowseComp 83.2% (86.3% with the agent swarm), Toolathlon 50.0% (at the ~50% frontier bar), τ²-Bench Telecom 95.9% (AA — a top-tier tool-use read, near GPT-5.4's 98.9%) and IFBench 76% (AA) are strong, with MCPMark 55.9%, OSWorld-Verified 73.1%, Claw Eval 62.3 pass^3, TaxEval v2 74.7 (Vals) and Terminal-Bench Hard 43.9% supporting; Terminal-Bench 4.0 0.5% (AA — a genuine read; Moonshot models collapse on TB 4.0's new format: K3 12.63%, K2.7-Code 1.01%), the AA Agentic Index of 20.5, τ-Bench Banking 23.3%, Terminal-Bench 2.1 53.6% (Vals) and GDPval-AA 1520 Elo (under the ~1750+ frontier) cap the score.
- **Reasoning: 84/100.** HLE-Full 54.0% with tools tops its release table (the largest tool leverage in the table: +19.3pp over its own 34.7% no-tools, vs +12.3/+13.0/+7.0pp for GPT-5.4/Opus 4.6/Gemini 3.1 Pro — K2.6 is the most tool-dependent HLE performer) and GPQA Diamond 90.5% (card; 91.1% per AA and Together) clears the 90%+ frontier band, with AIME 2026 96.4%, HMMT 92.7% and IMO-AnswerBench 86.0% supporting; HLE-Full 34.7% without tools (AA's no-tools read: 37–37.5%), CritPt 8%, GDP.pdf 13% and the AA Intelligence Index of 27 (v4.3.2 — dragged down by the TB 4.0 component, not by the reasoning core) cap the score.
- **Context window: 74/100.** 262,144-token window (in and out) — above the 200K=70 reference with no ≥98%-at-512K+ figure; well under the 1M frontier.
- **Multimodal: 72/100.** text/image in with text out — the +image-in band (60–70) pushed to 72 by a strong vision suite (MMMU-Pro 79.4%, MathVision 93.2% w/ python, V* 96.9% w/ python); ARMES claims native video input, unverified by Moonshot's own materials.
- **Coding: 78/100.** SWE-bench Verified 80.2%, LiveCodeBench v6 89.6% and SWE-bench Multilingual 76.7% are strong, with the AA Coding Index of 61.8 supporting; but independent runs read 2.8–12pp below vendor (SWE-bench Verified 76.2% and LiveCodeBench 86.8% per Vals; Terminal-Bench 2.1 53.6% per Vals vs 65.9% per AA — the in-house SWE-agent harness, averaged over 10 runs, inflates), and Terminal-Bench 2.0 66.7% (under the 85% bar), SciCode 52.2% (under the 55% bar), SWE-bench Pro 58.6% (mid-tier), CursorBench 47.6%, DeepSWE 24% (two independent reads) and Vibe Code Bench 37.9% (Vals) cap the score.
- **Cost efficiency: 89/100.** $0.95/$4.00 per 1M (cached $0.16/M) sits just under the ~88 ($1.25/$4.25) anchor, with open weights and third-party hosts from $0.30/$1.20 as further offsets.
- **Overall Score: 77/100.** (79+84+74+72+78)/5 = 77.4 → 77 — a strong-value open-weight agentic model: best-in-table DeepSearchQA, HLE 54.0% with tools, SWE-bench Verified 80.2%, LiveCodeBench 89.6%, τ²-Bench Telecom 95.9% at $0.95/$4.00; the 262K context, TB 4.0 0.5% (AA), TB2.0 66.7%, SciCode 52.2% and DeepSWE 24% are the gaps.

---

## Update 2026-10-08 (6-day re-research)

Hugging Face model card, SemiAnalysis and aggregator rows found — the file's figures check out against the vendor's own card:

- HF card confirms: GPQA Diamond **90.5%** (the card's own table — the blog's 88.4% was the conservative read), AIME 2026 **96.4%** (card; blog 93.3%), HLE-Full no-tools 34.7%, HMMT 92.7%, IMO-AnswerBench 86.0%, MMMU-Pro 79.4% (80.1% w/ python), CharXiv-RQ 80.4% (86.7% w/ python), MathVision 87.4% (93.2% w/ python), BabyVision 39.8% (68.5% w/ python), V* 96.9% (w/ python)
- Evaluation-protocol footnotes (HF card): Terminal-Bench 2.0 via Terminus-2 with the JSON parser in preserve-thinking mode; SWE-bench family via an in-house SWE-agent adaptation (bash/createfile/insert/view/strreplace/submit tools), **averaged over 10 independent runs**; BrowseComp with the same discard-all context management as K2.5/DeepSeek-V3.2; DeepSearchQA with no context management (over-length tasks counted as failed); WideSearch under the "hide tool result" setting; Claw Eval v1.1 at 16,384 max-tokens-per-step; APEX-Agents over 452 of the 480 public tasks (excluding Investment Banking Worlds 244/246); vision evals at 98,304 max tokens (avg@3), python-tool settings at 65,536/50 steps
- Other fills: Chatbot Arena **1462** (2026-05-17), HumanEval 92.0%, MMLU PRO 84.6%, Instruction-Following 89.8%; SemiAnalysis tracks K2.7-Code's in-house benchmark at 62.0 vs K2.6's 50.9 (K2.7-Code is the coding-focused successor); Verdent notes the SEAL mini-swe-agent harness reads GPT-5.4 at 59.1% and Opus 4.6 at 51.9% on SWE-bench Pro (vs Moonshot's in-house reads of 57.7%/53.4%) — harness choice moves these numbers by ~2 points
- No score change: all headline figures (SWE-bench Verified 80.2%, Pro 58.6%, LiveCodeBench 89.6%, HLE-Full 54.0% w/tools) are confirmed by the vendor's own card; no new independent agentic boards (TB 2.1, DeepSWE, AA Coding Index) have appeared for K2.6

---

## Update 2026-10-11 (deep second pass, 4 independent searches)

**No score change: Tool use 79 / Reasoning 84 / Context 74 / Multimodal 72 / Coding 78 / Cost 89 / Overall 77** — the AA Intelligence Index and the full independent row set are now in; they cut both ways (τ²-Bench Telecom 95.9% and IFBench 76% support; Terminal-Bench 4.0 0.5% and DeepSWE 24% cap):

- **AA Intelligence Index: 27 (v4.3.2, #21 of 117; 180M tokens on the Index run — "very verbose" vs the 140M median; 52 tok/s).** The April–July reads of 43–44 were the v4.1.1 edition; v4.3.2 "rescored every model 12–19 points lower" (cheapestinference's tracking note), so the 43→27 drop is the rebase, not a capability change. Full v4.3.2 component set (Reasoning): AA-Briefcase v1.1 820, GDPval-AA v2.1 1038 Elo (27.0% per OpenRouter's AA pull, 34.5% on a 2026-08-19 Continuum snapshot — snapshot drift), AutomationBench-AA 13%, Terminal-Bench 4.0 1% (0.5% unrounded), SciCode 52% (51.5–53.5% across snapshots), HLE 37% (no-tools; 37.5% on OpenRouter's pull), GDP.pdf 13%, CritPt 8%, AA-Omniscience 5 (accuracy 32.6%, non-hallucination 59.5%), AA-LCR v1.1 81% (76.7% on the older snapshot). Non-reasoning variant: Index 24, 56 tok/s.
- **Terminal-Bench 4.0's 0.5% is a genuine AA read, not a parsing artifact** — confirmed across AA's model page, OpenRouter's AA pull, Tokens or Towers, BenchLeader (#130) and AIEvals (0.51%, effort "not specified", #63 of 76). It sits 65 points below K2.6's own TB 2.1 read (65.9%, AA) on the same provider's harness family. The collapse is Moonshot-family-wide: Kimi K3 (max) 12.63% and Kimi K2.7-Code 1.01% — TB 4.0's new multi-hour format breaks the Kimi line specifically, not just this model. Treated as a hard cap on Tool use, offset by the strongest new rows below.
- **Strongest new rows:** τ²-Bench Telecom **95.9%** (AA — near GPT-5.4's 98.9% xhigh, a top-tier tool-use read), IFBench **76%** (AA), TaxEval v2 **74.7** (Vals), Terminal-Bench Hard **43.9%** (AA), ITBench SRE **31.2%** (AA), AA Coding Index **61.8**, Terminal-Bench 2.1 **65.9%** (AA — matches the vendor's TB 2.0 66.7%), GPQA Diamond **91.1%** (AA — third independent read at the card's 90.5%).
- **Independent coding reads run 2.8–12pp below vendor:** SWE-bench Verified 76.2% (Vals, vs 80.2% vendor), LiveCodeBench 86.8% (Vals, vs 89.6%), Terminal-Bench 2.1 53.6% (Vals, vs 65.9% AA), Vibe Code Bench v1.1 37.9% (Vals), DeepSWE 24% (Datacurve board — corroborated by an independent air-gapped mini-swe-agent run at the same 24%, the run that also measured MiniMax-M3 at 13.3%). The vendor's SWE-bench family used an in-house SWE-agent adaptation averaged over 10 runs; harness choice moves these numbers by ~2–4 points (Verdent's SEAL read of GPT-5.4 at 59.1% vs Moonshot's 57.7% on SWE-bench Pro shows the same effect in reverse).
- **HLE tool-leverage analysis:** K2.6's +19.3pp tool gain (34.7% → 54.0%) is the largest in its release table (GPT-5.4 +12.3, Opus 4.6 +13.0, Gemini 3.1 Pro +7.0) — K2.6 is the most tool-dependent HLE performer in the comparison set; without tools it is last in its own table (34.7% vs GPT-5.4's 39.8%, Opus 4.6's 40.0%, Gemini 3.1 Pro's 44.4%).
- **Context:** AA-LCR v1.1 81% (AA) — strong retrieval within the 262K window (older snapshot: 76.7%); still no MRCR/RULER/GraphWalks read, and the window itself (262K) remains the cap.
- **Successors:** Kimi K3 (2026-07-28): 2.8T MoE (104B active), 1M context, AA Index 44 on AA's current page (an earlier collection tracked 57) — TB 2.1 88.3% (#7 of the board), but TB 4.0 only 12.63%. Kimi K2.7-Code (coding-focused successor): Kimi Code Bench v2 62.0 vs K2.6's 50.9 (in-house); TB 4.0 1.01% — the same TB 4.0 collapse.
- **Price drift:** AA now tracks $0.80/M input (vs the April $0.95 list; a byteiota piece claimed $0.60 — unverified); output $4.00/M and cached $0.16/M unchanged. Cost 89 unchanged.
- **Also found:** Vals Index 55.2%, Vals Multimodal Index 56.4%, ALE-Bench 1092.7 (#44, Epoch AI Benchmarking Hub), Design Arena (listed on OpenRouter's AA/Vals pull, score not rendered).
- Score impact: none — supports (τ²-Telecom 95.9%, IFBench 76%, Coding Index 61.8, LCR 81%) and caps (TB 4.0 0.5%, DeepSWE 24%, Vibe Code 37.9%, Agentic Index 20.5) balance; Overall stays 77.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Moonshot Kimi K2.6 tech blog + HF model card, Artificial Analysis, Vals AI, Datacurve, OpenRouter, Tokens or Towers, Continuum, Together AI, SemiAnalysis, BenchLeader, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2_6.md`, using the same headings.
