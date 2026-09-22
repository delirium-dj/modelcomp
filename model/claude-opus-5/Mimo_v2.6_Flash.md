# Claude Opus 5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-opus-5`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's strongest Opus-tier hybrid reasoning model (released 2026-07-24) for long-running agents, serious coding, and knowledge work; positioned as near-Fable-class intelligence at half Fable's input price, with largest gains in agentic coding, computer use, and long-horizon knowledge work.
- **Provider / access:** Claude API `claude-opus-5` (Messages API); Amazon Bedrock, Google Cloud, Microsoft Foundry; Claude apps. Fast mode = 2× price, ~2.5× speed.
- **Release / knowledge:** 2026-07-24; knowledge cutoff May 2026.
- **IDs:** `claude-opus-5` (Anthropic); mirrored on Azure/Bedrock/GCP IDs. No Zen Free ID identified — paid pricing.
- **Context window:** 1M tokens (default and max); 128K max output (Batch API beta 300K).
- **Modalities:** text + image in; text out; adaptive thinking always on (effort low/medium/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-22):** $5 in / $25 out per 1M; cache read $0.50; batch 50% off; Fast mode $10/$50. Paid only.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **86.7%** (Meta harness, Claude Code, max — vendor-vs-vendor) / **89.1%** (Google model-card citation)
- Terminal-Bench 4.0: **52.3%** (Anthropic) / **52.6%** (OpenAI comparison table)
- Terminal-Bench-Science 0.1: **29.0%** (Anthropic public-board reproduction; leaderboard 30.0%)
- GDPval-AA v2: **1861 Elo** (Codersera/Anthropic launch; also cited 1824 and 1852 in Meta/OpenAI tables)
- OSWorld 2.0: **75.4% partial** (Anthropic Fable-comparison charts) / **70.6%** (OpenAI table); beats Fable 5 peak at ~1/3 cost per Anthropic
- AutomationBench: **50.3%** (Meta max-effort comparison) / **26.9%** (Anthropic Fable-5.1 family chart for Opus 5)
- Zapier AutomationBench flow: **100%** full churn-prevention flow (Anthropic narrative)
- CursorBench 3.2: **within 0.5 pts of Fable 5 peak** at max (Anthropic); ~70.0 in Fable-5.1 chart
- BrowseComp: strong (Anthropic system card; exact % not isolated in sources read)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam: **56.6% no tools / 63.6% with tools** (Anthropic)
- GPQA Diamond: **93.7%** (OpenAI comparison citing Anthropic)
- FrontierMath Tier 4 v2: **73.2** (OpenAI table) / **56.1** (GPT-5.6 table) — harness variance
- ARC-AGI-3: **30.2%** (Anthropic; ~3× next-best at launch)
- Artificial Analysis Intelligence Index: **63.1** (OpenAI/AA citation)
- CritPt / LCR: no verified public score found

Coding:

- Frontier-Bench v0.1: **43.3%** (Anthropic SOTA; GPT-5.6 Sol 34.4%, Fable 5 33.7%)
- SWE-bench Pro: **79.2%** (Anthropic; Mythos 5 80.3%, Fable 5 80.0%)
- DeepSWE v1.1: **74.0%** (Meta/Google tables) / **65.0%** (Meta Muse-Code harness)
- SWE-bench Verified: no verified public score found in sources read
- LiveCodeBench: no verified public score found

Long context:

- Programbench (system card long-context section): results published in Anthropic system card; exact retrieval % not isolated — no verified public MRCR row found for Opus 5 in sources read.

### Normalized scores (1–100)

- **Tool use: 96/100.** TB4.0 ~52–53, TB2.1 86.7–89.1, GDPval 1861, OSWorld ~70–75, AutomationBench leading at cost; capped slightly by TB-Science 29% and missing Tau3/Claw rows.
- **Reasoning: 96/100.** HLE 56.6/63.6, AA Index 63.1, ARC-AGI-3 30.2 (3× field), GPQA 93.7; capped by FrontierMath T4 harness variance and HLE below Fable 5.1's 60.9+.
- **Context window: 95/100.** 1M window documented; no public ≥98% retrieval at 512K+ MRCR row for this model → 95.
- **Multimodal: 70/100.** Text + image in (strong chart/filing vision per system-card multimodal section); no video/audio/non-text out → top of 60–70 image band.
- **Coding: 96/100.** Frontier-Bench 43.3% SOTA, SWE-Pro 79.2%, DeepSWE ~74, TB4.0 ~52; capped by missing SWE-bench Verified/LCB rows and TB-Science behind Fable/Astra.
- **Cost efficiency: 50/100.** $5/$25 sits between the $3/$15≈60 and $10/$50≈30 anchors (~half of Fable's input price); cache read $0.50 and batch 50% help agentic loads.
- **Overall Score: 91/100.** Mean of five quality dims (96+96+95+70+96)/5 = 90.6 → 91. Best-fit: daily-driver frontier coding/knowledge agent at half Fable pricing; escalate to Fable 5.1 only for multi-day autonomy or TB-Science-class research.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (Anthropic news/system card/platform docs, Codersera, Meta/OpenAI comparison tables, GPT-5.6 launch tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
