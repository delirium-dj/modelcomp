# GPT 5.4 Pro — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): lifecycle and pricing
> precision added (active on the OpenAI API; Azure Foundry retirement 2027-09-07; 2x
> long-context billing over 272K input tokens; no caching discount), knowledge cutoff
> filled (2025-08-31), one missed verified tool row recovered (Tau2-Telecom 98.7%), and
> rank refreshes (ARC-AGI-2 #17/89, WeirdML top 30%). Tool use 80→81; Overall holds at 82.

## Model card

- **Name:** GPT 5.4 Pro
- **Short description:** The maximum-performance variant of OpenAI's GPT-5.4 generation (Mar 2026) — for people who want the best results on the most complex tasks; BrowseComp state of the art at announcement (89.3%), GPQA Diamond 94.6% (#6-7), HLE 58.7% with tools. Available in ChatGPT Pro/Enterprise and the API.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.4-pro` (paid, $30/$180); OpenAI API `gpt-5.4-pro` (Responses API; snapshot `gpt-5.4-pro-2026-03-05`; **not available in Chat Completions**); ChatGPT Pro/Enterprise; Azure AI Foundry (`gpt-5.4-pro:2026-03-05`). Base model is `gpt-5.4` — Pro is a distinct, slower, pricier variant.
- **Release / knowledge:** Released 2026-03-04/05 with the GPT-5.4 family; knowledge cutoff **2025-08-31** (modelbenchmark.io — fills the prior gap).
- **IDs:** `opencode/gpt-5.4-pro` (Zen, paid); `gpt-5.4-pro` (OpenAI API)
- **Lifecycle (verified Nov 1–2, 2026):** Active — no deprecation announced on the OpenAI API; Azure AI Foundry retirement scheduled **2027-09-07**.
- **Context window:** 1,050,000 tokens / 128,000 max output (models.dev; BenchLeader 1.1M). **Billing caveat: requests over 272K input tokens bill at 2x long-context rates ($60 in / $270 out).**
- **Modalities:** Text and image in, text out; reasoning yes; models.dev lists Tool Call **No** for the Pro variant (conflicts with OpenAI's agentic browsing claims — the Pro API surface may not expose direct tool calls); structured outputs not listed.
- **Pricing (as of 2026-11-05):** $30 / 1M input, $180 / 1M output (OpenAI, Azure, OpenRouter identical; **cache read $30 — no caching discount**); Batch/Flex at half rate ($15/$90 short-context); Priority 2x ($60/$360); long-context band 2x over 272K input. Output speed ~6 tok/s, first token ~7.0s.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **89.3%** — state of the art at announcement (OpenAI-reported)
- Tau2-Bench Telecom: **98.7%** (OpenAI launch table, GPT-5.4 Pro column — RECOVERED this pass; the prior report marked Tau2 missing)
- GDPval (wins or ties vs professionals): **82.0%** (OpenAI-reported; GPT-5.4 base: 83.0%)
- FinanceAgent v1.1: **61.5%** (OpenAI-reported); Investment Banking Modeling (internal): **83.6%**
- MultiChallenge: **69.2%** (#5, Scale AI SEAL); TutorBench: **56.6%** (#2)
- MCP Atlas: no verified public score found for Pro (— in the launch table; base: 67.2%)
- Terminal-Bench 2.0: no verified public score found for Pro (base: 75.1%)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.6% ±1.6** (Epoch AI, #7 of 108 — corroborates OpenAI's 94.4%)
- HLE: **58.7% with tools** (OpenAI table) / **42.7%** no tools; Scale/Epoch reading 44.3% (#5 of 46)
- ARC-AGI-1 (verified): **94.5%** (#19 of 89); ARC-AGI-2 (verified): **83.3%** — now **#17 of 89** (Epoch) and **#37 of 280** on the ARC Prize board (X-High, published 2026-11-02 — rank improved from #34)
- SimpleBench: **74.1%** (#9 of 77); EnigmaEval: **23.8%** (#5 of 38 — NEW)
- CritPt: **30.0%** (#10 of 154, xhigh); Chess Puzzles: **59%** (#11 of 80, updated 2026-10-14)
- FrontierMath: Tiers 1–3 **82.5% ±2.3** (#13 of 71) / Tier 4 **58.5% ±7.8** (#14 of 58) (Epoch v2, xhigh — vs v1 announcement 50.0%/38.0%)
- MathArena Apex: **69.8%** (#3); SimpleQA Verified: **46.3% ±1.6** (#30 of 68, Epoch 2026-08-27); MultiNRC: **62.3%** (#4); Frontier Science Research: **36.7%** (OpenAI); IPhO 2025 Theory: **93.5%**
- Epoch Capabilities Index: **159.8–160.2** (#16 of 210-225, updated)
- BenchLeader Index: **63.6 ±3.3** (#60 of 760); ARBITER aggregate: **#16 of 146** (83.8); Noometry Index: **59.1, #20 of 362** (Nov 2026, knowledge rank #9)
- FORTRESS (safety/honesty): **14.8%** (#54, Scale AI SEAL)
- AA Intelligence Index: still no published row for Pro (benchgap's "33.2%" is an estimate — excluded)

Coding:

- WeirdML: **57.4%** — now **#35 of 119, top 30%** (Epoch; rank improved from #53)
- SWE-Bench Pro (Public): no verified public score found for Pro (— in the launch table; base: 57.7%)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- no long-context retrieval measurement for Pro (base reports Graphwalks parents 256K–1M 98.2% / MRCR v2 rows; not applied here)

Computer use and vision:

- VISTA (visual language understanding): **53.9%** (#2 of 57, Scale AI SEAL)
- OSWorld-Verified / MMMU Pro: no Pro-specific verified rows (launch-table columns ambiguous — excluded)

### Normalized scores (1–100)

- **Tool use: 81/100.** CHANGED from 80 — the recovered Tau2-Telecom 98.7% row (launch table) adds a verified top-tier tool result alongside BrowseComp 89.3% SOTA and GDPval 82.0%; the models.dev "Tool Call: No" flag and missing Terminal-Bench/MCP-Atlas numbers for Pro still cap it.
- **Reasoning: 94/100.** Unchanged — GPQA 94.6% (#7 of 108, Epoch), HLE 58.7% w/ tools, ARC-AGI-2 83.3% (#17/89, rank improved), FrontierMath 82.5%/58.5%, EnigmaEval #5, MathArena Apex #3 — frontier band confirmed.
- **Context window: 95/100.** Unchanged — 1.05M verified (≥1M tier); still no Pro long-context retrieval measurement; the 2x billing over 272K input is a cost caveat, not a capability limit.
- **Multimodal: 72/100.** Unchanged — text + image in with measured VISTA 53.9% (#2 of 57); below omni-input models.
- **Coding: 68/100.** Unchanged — WeirdML 57.4% (rank improved to top 30%) remains the only coding-adjacent measured number; SWE-Bench Pro and Terminal-Bench 2.0 are still "—" for Pro.
- **Cost efficiency: 12/100.** Unchanged — $30/$180 per 1M (blended $67.50/M short-context) is far beyond the $10/$50 ≈ 30 reference; the 2x long-context band and the absent caching discount (cache read = input price) make heavy workloads worse, not better.
- **Overall Score: 82/100.** (81 + 94 + 95 + 72 + 68) / 5 = 410/5 = 82.0 → 82 (unchanged). Best fit: maximum-quality knowledge work, deep research and hard reasoning where budget is secondary; superseded-in-family by GPT-5.5 Pro for most Pro-plan users, and not viable for routine coding or cost-sensitive workloads.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: OpenAI launch post re-read + help-center release notes, TeqEngine/AIWire/Model retirement schedule lifecycle checks, Noometry + Epoch-sourced rank refreshes, ModelCap archive, modelbenchmark.io spec/cutoff, benchgap measured-vs-estimated screen); one missed launch-table row (Tau2-Telecom 98.7%) recovered and attributed; estimates excluded throughout; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.5.md`, using the same headings.
