# Claude Opus 4.6 — findings by Qwen 4 Max

- Source: Anthropic/claude-opus-4.6
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's February 5, 2026 flagship upgrade — better planning, longer agentic sustain, large-codebase reliability, self-catching code review; **first Opus-class model with 1M context** (beta at launch). Launch SOTA claims: Terminal-Bench 2.0, HLE (with tools), GDPval-AA (+144 Elo over GPT-5.2, +190 over Opus 4.5), BrowseComp. Introduces **adaptive thinking**, four effort levels, context compaction (beta), and Claude Code agent teams. **Deprecated** per AA — Opus 4.7 is the suggested successor.
- **Provider / access:** claude.ai, Claude API (`claude-opus-4-6`), all major cloud platforms; Claude Code, Cowork, Excel/PowerPoint integrations; proprietary. Effort: low / medium / **high (default)** / max; adaptive thinking decides when to extend reasoning. US-only inference at 1.1x pricing.
- **Release / knowledge:** Released 2026-02-05. Knowledge cutoff not stated in sources read. 1M context GA'd **March 13, 2026 at standard pricing** (community/announcement reports — launch terms were beta + >200K premium; labelled). Feb 23, 2026 correction: HLE w-tools 53.1 → **53.0** after improved cheating detection.
- **IDs:** `claude-opus-4-6`; AA tracks a **non-reasoning (High)** variant; BenchLM sibling "Opus 4.6 (Adaptive)" is the thinking variant; predecessor Opus 4.5, successor Opus 4.7. System card: anthropic.com/claude-opus-4-6-system-card.
- **Context window:** **1M tokens** (first Opus with it), **128K max output**. Launch: >200K prompts at **$10/$37.50** premium (Claude Platform only); March GA at standard pricing per announcements. **MRCR v2 8-needle 1M: 76%** (vs Sonnet 4.5's 18.5%) — genuinely strong deep retrieval; context compaction beta for long-running agents.
- **Modalities:** **Text + image in, text out** (AA + system card). MMMU-Pro 77.3 (vendor) / 72.5 (AA non-reasoning), ScreenSpot-Pro 83.1, ERQA 51.6. No audio/video.
- **Pricing (as of 2026-11-12):** **$5 in / $25 out per 1M** (unchanged from Opus 4.5; 67% below Opus 4.1), **90% cache discount**; >200K premium $10/$37.50 at launch (GA-standard per March reports). AA cost-per-index-task N/A (deprecated). Non-reasoning AA performance: TTFT 2.54s, 46 tok/s.
- **Architecture:** Proprietary, undisclosed; adaptive extended thinking with effort control; agent-teams orchestration in Claude Code; safety profile as good as/better than peers per Anthropic's audit (lowest over-refusal rate of recent Claudes; six new cybersecurity probes).

### Raw benchmarks found

Vendor-reported (launch blog + system card; harness footnotes: Terminus-2 for TB2.0, HLE w-tools with compaction@50K up to 3M total tokens + max effort + adaptive thinking, SWE-V avg of 25 trials, MCP Atlas max effort, BrowseComp max effort/no-thinking with compaction up to 10M):

- TB2.0 **65.4** (launch SOTA), SWE-bench Verified **80.8** (81.42 with prompt modification), OSWorld-Verified **72.7**, BrowseComp **83.7** (86.8 multi-agent harness; cited via Mythos Preview system card), MCP Atlas **62.7 at high effort** (max-effort value in launch table image, not extracted), HLE w-tools **53.0** (corrected from 53.1), GPQA **91.3**, MMMU-Pro **77.3**
- GDPval-AA: launch leader, **+144 Elo vs GPT-5.2, +190 vs Opus 4.5** (exact Elo in chart image; AA-run per footnote)
- MRCR v2 8-needle 1M **76**; Vending-Bench 2 **+$3,050.53** vs Opus 4.5; Harvey BigLaw Bench **90.2** (40% perfect scores); ARC-2 run at max effort / 120K thinking budget (value in table image)
- Third-party comparison tables: SWE-Pro **53.4**, LCB Pro 70.7, DeepSearchQA 73.7, HLE no-tools 40, ScreenSpot-Pro 83.1, ERQA 51.6, MedXpertQA MM 64.8 / Text 52.1, HealthBench Hard 14.8 (Meta Muse Spark chart); AndroidWorld 62.0 (Qwen3.8-27B card); SuperGPQA 95, MMLU-Pro 82 (Qwen3.6-Plus table); SWE-V 75.6, GPQA-D 89.2, MMLU-Pro 89.1, AIME25 99.8 (Arcee Trinity table)

Independent runs:

- AA (**non-reasoning High variant** — thinking-mode gaps labelled): index N/A live (deprecated); BenchLM carries historical **26.4** (version unstated); AA-HLE **19.1**, AA-GPQA **84.0**, AA-LCR **67.0**, CritPt **2.8**, Omniscience Index **2.4** (accuracy 45.8, hallucination 80.1), IFBench **44.6**, MMMU-Pro 72.5, τ² 84.8, TB-Hard 48.5 — all non-reasoning, never compared directly with vendor adaptive-thinking rows
- ARC Prize (semi-private): ARC-AGI-3 **0.5**
- Epoch AI: FrontierMath v2 T1-3 **65.965**, Tier 4 **26.829**
- Leaderboards: CyberGym **66.6**, SWE-Rebench 65.3, RN Evals 84.1, Claw-Eval 70.4, Vibe Code 57.57 (Vals), FrontierCode 1.1 Main **26.9** (Cognition), JobBench 36.7, ResearchClawBench 19.9, ApprenticeBench 5, ParseBench 53.80, Gert Labs 61.85, Design Arena 1,288
- MorphLLM (prior cross-model table): SWE-V 80.8 / SWE-Pro 51.9†; SEAL SWE 51.9
- BenchLM aggregate **61.95/100, #48 of 1026** (59/815 coverage)

### Normalized scores (1–100)

- **Tool use: 86/100.** Launch GDPval-AA leader (+144 over GPT-5.2), BrowseComp 83.7/86.8, DeepSearchQA 73.7, OSWorld-V 72.7, τ² 84.8, MCP Atlas 62.7 (high effort), CyberGym 66.6, agent teams + compaction for long-horizon work; capped by JobBench 36.7, ApprenticeBench 5, TB-Hard 48.5, ResearchClawBench 19.9.
- **Reasoning: 87/100.** HLE w-tools 53.0 (launch leader, corrected), GPQA 91.3, AIME25 99.8, BigLaw Bench 90.2, FM v2 T1-3 66.0; capped by FM v2 T4 **26.8**, HLE no-tools 40, ARC-3 0.5, and non-reasoning AA rows (HLE 19.1, CritPt 2.8, Omniscience 2.4 w/ 80.1% hallucination) showing heavy dependence on thinking mode.
- **Context window: 92/100.** 1M with **MRCR v2 8-needle 1M 76%** — best-in-class deep retrieval at launch (vs Gemini-class ~26), 128K output, compaction; deducted for the launch >200K premium ($10/$37.50, later GA-standard per reports) and beta-only availability at release.
- **Multimodal: 74/100.** Image-in only; MMMU-Pro 77.3 vendor / 72.5 AA, ScreenSpot-Pro 83.1 (strong GUI grounding); capped by ParseBench **53.80** (weak document parsing), ERQA 51.6, no audio/video.
- **Coding: 85/100.** TB2.0 65.4 (launch SOTA), SWE-V 80.8 (25-trial avg), SWE-Pro 53.4/51.9, SWE-Rebench 65.3, RN Evals 84.1, LCB Pro 70.7, strong code-review/debugging endorsements (Cursor, Cognition, GitHub); capped by FrontierCode 1.1 Main **26.9** and Vibe Code 57.57 — newest hardest repo evals trail the frontier.
- **Cost efficiency: 52/100.** $5/$25 is premium-tier (2.5x/2.5x the $2/$10 class) despite 90% cache discount and effort controls; adaptive thinking adds latency/cost on simple tasks (Anthropic's own caveat), deprecated in favor of Opus 4.7, and launch-era >200K premium doubled long-context rates.
- **Overall Score: 84.8/100.** Mean of the five quality dims (86+87+92+74+85)/5 = 84.8. Best-fit (historical): Feb–mid-2026 frontier agentic coding, deep-retrieval long-context research, and professional knowledge work (legal/finance) where its 1M MRCR strength and GDPval lead mattered; today prefer Opus 4.7+/5-class — 4.6 remains notable for the best 1M needle retrieval of its generation, with weak hard-math T4 and non-reasoning factuality.

---

## Signature

- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (Anthropic's official launch post fetched in full including harness footnotes and the Feb 23 HLE correction, Artificial Analysis' live non-reasoning-variant page, BenchLM's 59-row sourced profile, launch/GA pricing announcements via search); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: **AA independent rows are the NON-REASONING variant** (index 26.4 historical/version-unstated, HLE 19.1, GPQA 84.0) vs vendor adaptive-thinking/max-effort rows (HLE 53.0, GPQA 91.3) — mode gap, never averaged; SWE-V 80.8 (Anthropic 25-trial) vs 81.42 (prompt-modified) vs 75.6 (Arcee table) — all cited; SWE-Pro 53.4 (Meta chart) vs 51.9 (MorphLLM); MMLU-Pro 82 (Qwen table) vs 89.1 (Arcee); HLE 53.1→53.0 vendor correction noted; 1M pricing $10/$37.50 >200K premium (launch) vs standard-pricing GA (Mar 13 reports) — dated. GDPval-AA and MCP Atlas max-effort exact values live in chart images not extracted — qualitative claims only. Identity: Opus 4.6 ≠ 4.6 Adaptive sibling ≠ 4.5 ≠ 4.7; TB2.0 ≠ TB2.1 ≠ TB-Hard; MRCR v2 8-needle 1M ≠ MRCRv2 aggregate; FrontierCode 1.1 Main ≠ Extended.
- Reference URLs:
  - [Introducing Claude Opus 4.6 — Anthropic](https://www.anthropic.com/news/claude-opus-4-6)
  - [Claude Opus 4.6 system card — Anthropic](https://www.anthropic.com/claude-opus-4-6-system-card)
  - [Claude Opus 4.6 (Non-reasoning, High) — Artificial Analysis](https://artificialanalysis.ai/models/claude-opus-4-6)
  - [Claude Opus 4.6 benchmark profile — BenchLM](https://benchlm.ai/models/claude-opus-4-6)
  - [Claude Opus 4.6 — OpenRouter](https://openrouter.ai/anthropic/claude-opus-4.6)
  - [1M context GA at standard pricing (Mar 13, 2026) — Cursor forum](https://forum.cursor.com/t/anthropic-just-announced-1m-context-ga-at-standard-pricing-for-opus-4-6-sonnet-4-6-when-will-cursor-reflect-this/154701)
  - [Epoch AI FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Cognition FrontierCode 1.1](https://cognition.com/blog/frontier-code-1.1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.