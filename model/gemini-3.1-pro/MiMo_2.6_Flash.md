# Gemini 3.1 Pro — findings by MiMo 2.6 Flash

- Source: Google DeepMind (`gemini-3.1-pro-preview`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's frontier generalist released in preview on 2026-02-19 as the next iteration of Gemini 3 Pro — long-horizon coding, agentic workflows, multimodal understanding, and complex reasoning at a 1M-token context. Not a variant/alias; separate entry from Gemini 3 Pro and 3.5 Pro.
- **Provider / access:** Gemini API / AI Studio (`gemini-3.1-pro-preview`), Vertex AI, Gemini app, Gemini CLI, GitHub Copilot. Chat Completions-compatible and native generateContent routes.
- **Release / knowledge:** released 2026-02-19 (preview status; GA per The AI Rankings); knowledge cutoff not disclosed on the model card.
- **IDs:** `google/gemini-3.1-pro-preview` (gateway routes) / `gemini-3.1-pro-preview` (native).
- **Context window:** 1,000,000 input tokens; max output 64,000 (65,536 listed by some providers).
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (thinking levels low/medium/high); tool calls yes (function calling, code execution, search, Deep Research routes); JSON/structured outputs supported.
- **Pricing (as of 2026-10-07):** $2.00 in / $12.00 out per 1M at ≤200K context; **$4.00 / $18.00 above 200K** up to 1M; context-cache hit $0.50/M. Gemini app free with limits (AI Pro $19.99/mo, Ultra tier above). Paid API.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2 harness): **68.5%** (Google model card; GPT-5.3-Codex 77.3%). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA (Elo): **1317** (Google comparison via NxCode — Claude Opus 4.6 leads at 1606).
- MCP Atlas: **69.2%**; BrowseComp (search+python+browse): **85.9%**; APEX-Agents long-horizon professional tasks: **33.5%**.
- τ2-bench: Google ran it (standard sierra framework, airline excluded) but no score captured in retrieved tables — no verified public score found.
- Claw-Eval / Toolathon / OSWorld: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.3%** no tools (Google, self-computed; highest reported at release).
- HLE: **44.4%** no tools (full text+MM set), **51.4%** with search + code (Google).
- ARC-AGI-2: **77.1%** (ARC Prize Verified, semi-private set).
- MMMU-Pro: **75.8%**. Multilingual MMLU: strong (per model card) — exact value not captured.
- AA Intelligence Index / LCR / CritPt / Omniscience: no verified public score found.

Coding:

- SWE-bench Verified: **80.6%** (Google, single attempt, 10× runs; +0.6% adjusted for 3 broken harness items).
- SWE-bench Pro (Public): **54.2%** (Google, 5× runs) / ~46.1% on the standardized public leaderboard.
- LiveCodeBench Pro: **2887 Elo** (public leaderboard).
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found for this exact model (SciCode sourced from AA but value not retrieved).

Long context:

- MRCR v2 (8-needle): **84.9%** at 128K average (cumulative) — but **26.3%** pointwise at the full 1M window; competitors mostly unsupported at 1M. Google released the dataset for reproducibility.

### Normalized scores (1–100)

- **Tool use: 76/100.** TB2.0 68.5% leads the Google-run table's Claude column, BrowseComp 85.9% is excellent, but GDPval-AA 1317 only lands just above the mid band (900–1200 → 50–70), APEX-Agents 33.5% is mid, and there is no TB2.1/Tau3/Claw-Eval number — caps it at 76.
- **Reasoning: 90/100.** GPQA 94.3 and HLE 44.4 (no tools) both clear the frontier refs (90%+/40%+), ARC-AGI-2 77.1 is field-leading; not higher because no AA Intelligence Index/LCR row exists for cross-checking and HLE-with-tools 51.4 trails frontier peers.
- **Context window: 90/100.** Window is 1M (≥1M tier), but MRCR retrieval collapses to 26.3% pointwise at the full 1M and is 84.9% at 128K — well short of the ≥98%-at-512K bar for 100, so it sits mid-tier at 90.
- **Multimodal: 93/100.** Text/image/video/audio/PDF in with text out = audio-in band (90–100), corroborated by MMMU-Pro 75.8; no non-text output keeps it below 95.
- **Coding: 88/100.** SWE-bench Verified 80.6% and SWE-bench Pro 54.2% are top-tier but trail GPT-5.3-Codex/Claude leads; TB2.0 68.5% and LiveCodeBench Pro 2887 Elo are strong; capped below 90 by no DeepSWE/SciCode/Vibe rows and second-place positions on the hardest coding boards.
- **Cost efficiency: 70/100.** $2/$12 under 200K is a frontier-bargain (between the $1.25/$4.25 ≈ 88 and $3/$15 ≈ 60 anchors, so ~70); the >200K tier doubling to $4/$18 — exactly where its 1M-context advantage lives — and $0.50 cache hits pull it down.
- **Overall Score: 87/100.** (76+90+90+93+88)/5 = 87.4 → 87 — best-fit cheap frontier generalist for 1M-window multimodal work and science reasoning; weaker on long-window retrieval, expert-task GDPval, and terminal-agent polish.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Google DeepMind model card + evaluation PDF, Gemini API pricing, AISO Tools, NxCode, LLM Stats, The AI Rankings, MyClaw); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Gemini 3.1 Pro — findings by Mimo V2.6 Flash

- Source: Google DeepMind/`gemini-3.1-pro`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-23 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's February 2026 flagship reasoning model — the "0.1" refresh of Gemini 3 Pro with large gains on ARC-AGI-2, GPQA, and agentic coding while holding $2/$12 pricing. Not an alias of Gemini 3 Pro (measurably stronger evals).
- **Provider / access:** Google AI Studio / Gemini API (Chat Completions-style `generateContent`), Vertex AI, Gemini CLI; also surfaced as `google/gemini-3.1-pro` and free-tier access on OpenCode Zen. Free tier available on AI Studio; paid API on Google's price list.
- **Release / knowledge:** 2026-02-19 (DeepMind model card / release trackers); BenchLeader's release table dates it **5 Mar 2026** (conflict noted, 2026-10-06); knowledge cutoff not separately published for 3.1 Pro in the sources reviewed.
- **IDs:** `gemini-3.1-pro` (Google API; often `gemini-3.1-pro-preview` at launch); Zen `google/gemini-3.1-pro`.
- **Context window:** 1M tokens input common tier (Google pricing tables; >200K billed at a higher tier implies long-window support); 64K max output reported in site metadata / model-card notes. Verified via Google pricing tiers and model-card eval tables (MRCR v2 reported at 128K and 1M points).
- **Modalities:** text, image, audio, video, PDF in; text out; thinking/adaptive reasoning (low/medium/high); tool calls; structured output supported.
- **Pricing (as of 2026-10-06):** $2.00 / $12.00 per 1M in/out up to 200K context; $4.00 / $18.00 over 200K context; context-cache hits ~$0.50 input. BenchLeader provider table (2026-10-06) also shows a **$1.00 / $6.00 Google AI Studio route** alongside Vertex $2/$12 (studio promo/measure difference — cheapest verified entry point). Free tier on AI Studio (rate-limited). Paid.
- **Architecture:** proprietary closed weights.

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **70.3%** (AI Release Tracker / Google-published suite) / **80.2% (BenchLeader #3 of 80 configurations, 2026-10-06)** — harness/panel spread, both kept
- Terminal-Bench 2.0: **68.5%** (DeepMind model card, Terminus-2 harness)
- Tau2-Bench: **95.6%** (Dataconomy aggregated card; harness as listed there)
- MCP Atlas: **78.2%** (AI Release Tracker; Dataconomy lists 69.2% — harness/version drift, both noted)
- Toolathlon: **48.8%** (AI Release Tracker)
- OSWorld-Verified: **76.2%** (AI Release Tracker)
- GDPval-AA: **1314** (AI Release Tracker; Dataconomy 1317)
- BrowseComp: **85.9%** (AI Release Tracker / DeepMind suite)
- IFBench: **77.1%** (Dataconomy)
- Claw-Eval / ClawProBench: **no verified public score found**
- APEX-Agents: **33.5%** (Dataconomy; topped Mercor leaderboard at launch per press)

Reasoning / knowledge:

- GPQA Diamond: **94.3%** (DeepMind model card, no tools) / **94.4% #7 / 94.1% #10** (Epoch AI Benchmarking Hub via BenchLeader, 2026-10-06 — independent confirmation)
- HLE: **44.4%** no tools / **51.4%** search+code (DeepMind model card); **46.4% (BenchLeader #3 of 46 configs, 2026-10-06)** as the current independent row
- ARC-AGI-2: **77.1%** (DeepMind model card, ARC Prize verified)
- FrontierMath (T1–3): **36.9%** (AI Release Tracker)
- LCR: **82%** (Dataconomy)
- AA Intelligence Index: **57.2** (Dataconomy); Coding Index **55.5** — **conflict flag:** BenchLeader's AA row (2026-10-06) reads **29.7 (#113)** on the v4.3.2 scale while Dataconomy's 57.2 predates the rescale (same vintage issue as Opus 5/Fable 5.1) — both kept, treat 57.2 as launch-era scale; BenchLeader composite index **62.5 (#77 of 750, best config)** with categories Reasoning 69 / Knowledge 67 / Instruction-following 70 / Long-context 66 / Coding 57 / Agents&tools 57
- LiveBench: **77.0% (#25)**; SimpleBench **79.6 (#3)**; MultiChallenge **71.4 (#3)**; AIME 2026 **98.3% (#4)**; MathArena Apex **60.9 (#5)** (BenchLeader 2026-10-06)
- Omniscience / hallucination: **no verified public score found** (AA-Omniscience not in the rows reviewed)

Coding:

- SWE-bench Verified: **80.6%** (DeepMind model card, single attempt)
- SWE-bench Pro (Public): **54.2%** (DeepMind model card)
- LiveCodeBench Pro: **2887 Elo** (Google / MetricNexus)
- SciCode: **58.7%** (Dataconomy)
- DeepSWE 1.1: **12%** (AI Release Tracker — atypical vs SWE-V; listed as published, possible harness mismatch)
- Next.js Evals: **75%** (AI Release Tracker)
- MLE-Bench: **42.6%** (AI Release Tracker)
- Vibe Code Bench: **no verified public score found**

Long context:

- MRCR v2 (8-needle) 128K average: **84.9%**; 1M pointwise: **26.3%** (AI Release Tracker / Google) — strong at 128K, soft at 1M pointwise. AA-LCR: **82.0% (#42)** (Artificial Analysis via BenchLeader, 2026-10-06 — independent long-context confirmation)
- RULER: **no verified public score found**

Multimodal:

- MMMU-Pro: **80.5%** (DeepMind / Dataconomy)
- CharXiv Reasoning: **83.3%** (AI Release Tracker)
- Audio/video/PDF input confirmed in model card; non-text output: none.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 70.3 / TB2.0 68.5, Tau2 95.6, MCP Atlas 78.2, OSWorld 76.2, GDPval-AA 1314 — frontier tool/OS competence; capped below mid-90s by Toolathlon 48.8 and GDPval still trailing Claude Opus-class leaders.
- **Reasoning: 95/100.** GPQA 94.3 and ARC-AGI-2 77.1 were top-at-release; HLE 44.4–51.4 and Index 57.2 confirm depth — capped only by HLE-with-tools still under top Fable/Opus-tier 60%+ results.
- **Context window: 96/100.** 1M production window (≥1M tier 95–100); MRCR 84.9% at 128K verifies real retrieval, 1M pointwise 26.3% keeps it from a perfect 100. (Site meta lists 2M / 64K out — even at 2M the tier stays 95–100; 64K output is a noted cap.)
- **Multimodal: 88/100.** Text/image/audio/video/PDF in with MMMU-Pro 80.5 and CharXiv 83.3; text-only out and no audio out keeps it under 90+.
- **Coding: 90/100.** SWE-V 80.6 ties Opus 4.6-class, SWE-Pro 54.2 and LCB Pro 2887 are solid; capped by TB gap vs GPT-5.3-Codex (77.3 TB2.0) and the anomalous DeepSWE 12% row.
- **Cost efficiency: 74/100.** $2/$12 paid (≤200K) sits between the ~$1.25/$4.25≈88 and $3/$15≈60 anchors; free AIStudio tier and cache pricing improve practical cost but the evaluated path is paid standard pricing.
- **Overall Score: 92/100.** Mean of Tool 90 + Reasoning 95 + Context 96 + Multimodal 88 + Coding 90 = 459/5 = 91.8 → **92** (best-fit: top all-around paid pick when free-tier quotas or $2/$12 budget fit — strongest GPQA/ARC profile in this class).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (DeepMind model card, AI Release Tracker, Dataconomy, MetricNexus, NxCode); re-run 2026-10-06 (user-approved enrichment): BenchLeader model page (index 62.5 #77/750, category scores, GPQA 94.4/94.1 Epoch, HLE 46.4 #3, TB2.1 80.2 #3, LiveBench 77.0 #25, AA-LCR 82.0 #42, AIME 98.3, provider pricing incl. $1/$6 studio route) — independent confirmations added, AA-index scale conflict flagged; scores unchanged: (90+95+96+88+90)/5 = 91.8 → 92. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

