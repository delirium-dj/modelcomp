# Claude Opus 5 — findings by Mimo v2.6 Flash

- Source: Anthropic/`claude-opus-5`
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-22 research
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
- **Pricing (as of 2026-10-06):** $5 in / $25 out per 1M; cache read $0.50; batch 50% off; Fast mode $10/$50 — re-confirmed by BenchmarkList/VectorWire (4 providers, $5/$25 consistent; VectorWire notes it costs more than 93% of 328 priced models at the 3:1 blend). Paid only.
- **Architecture:** proprietary (closed weights).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **89.1%** (BenchmarkList 2026-10-06 — confirms the Google-cited 89.1; rank in top 3% of 194) / **86.7%** (Meta harness, Claude Code, max) (vendor-vs-vendor)
- Terminal-Bench 3.0: **43.3%** (BenchmarkList, rank 1/20 — first TB3 row found)
- Terminal-Bench 4.0: **52.3%** (Anthropic; BenchmarkList rank 7/29) / **52.6%** (OpenAI comparison table)
- Terminal-Bench-Science 0.1: **30.0%** (BenchmarkList rank 4/17; Anthropic public-board reproduction 29.0%, leaderboard 30.0%)
- Toolathlon: **80.6% Pass@1 / 87.0% Pass@3 / 73.1% Pass^3, 23.5 turns** (BenchmarkList, rank 1/41 — fills the Toolathlon gap)
- Tau3-Banking: **44.7%** (BenchmarkList, rank 11/176 — fills the Tau3 gap)
- MCP Atlas: **87.0%** (BenchmarkList, rank 3/48)
- GDPval-AA: **1861 Elo** (Codersera/Anthropic launch; BenchmarkList rank 1/352; also cited 1824 and 1852 in Meta/OpenAI tables)
- BrowseComp: **90.8%** single-agent (BenchmarkList rank 6/60) / **93.6%** multi-agent (rank 1, small field)
- OSWorld-Verified: **83.4%** (BenchmarkList, rank 9/70 — supersedes the partial-metric75.4% chart reading; OpenAI table 70.6% on its own harness)
- AutomationBench: **50.3%** (BenchmarkList rank 6/48 — confirms the Meta max-effort 50.3; Anthropic Fable-5.1-family chart 26.9% for Opus 5)
- APEX-Agents **41.8% (1/8)** · JobBench **67.8% (1/48)** · ITSMBench **46.1% (1/5)** · DRACO **88.6% (1/24)** · Hex DataBench **88.0% (1/8)** · Vending-Bench 2 **11181.87 (4/60)** · NanoGPT Speedrun Frontier **53.6% (2/17)** · RuneBench **5.7 (12/61)** · AA-Briefcase **1720 (3/145)** (BenchmarkList 2026-10-06)
- CursorBench 3.2: **70.0% at max** (BenchmarkList rank 4/17; low 62.8 / medium 64.3 / high 66.7 / xhigh 69.3 — matches the "within 0.5 pts of Fable 5 peak" launch claim)
- Zapier AutomationBench flow: **100%** full churn-prevention flow (Anthropic narrative)
- Claw-Eval: no verified public score found (still absent 2026-10-06)

Reasoning / knowledge:

- Humanity's Last Exam: **56.6% no tools / 63.6% with tools** (Anthropic)
- GPQA Diamond: **93.7%** (OpenAI comparison citing Anthropic)
- FrontierMath Tier 4 v2: **73.2** (OpenAI table) / **56.1** (GPT-5.6 table) — harness variance
- ARC-AGI-3: **30.2%** (Anthropic; ~3× next-best at launch)
- Artificial Analysis Intelligence Index: **51** (AA v4.3.2 model page, 2026-09-28 — #13/216 at max effort; prior 63.1 citation superseded, see Fresh-source note)
- ARC-AGI-2: **90.4%** (BenchmarkList, rank 4/99 — much higher than the pre-launch era; ARC-AGI-1 **97.5%** (6/97))
- CritPt / AA-LCR: no verified public score found (still absent 2026-10-06); AA-Omniscience net **0.49** (BenchmarkList, rank 5/11)

Coding:

- Frontier-Bench v0.1: **44.4%** (BenchmarkList 2026-10-06, rank 1/9 — Anthropic launch cited 43.3%; GPT-5.6 Sol 34.4%, Fable 5 33.7%)
- SWE-bench Pro: **79.2%** (Anthropic; Mythos 5 80.3%, Fable 5 80.0%)
- SWE-bench Verified: **97.0% / 96.0%** (BenchmarkList 2026-10-06, rank 1 of 72 and 1 of 50 on the two tracked harness variants — fills the former gap; treat the two rows as harness/version variants)
- LiveCodeBench: **89.0%** (BenchmarkList, rank 2/123 — fills the former gap)
- DeepSWE v1.1: **74.0%** (Meta/Google tables; BenchmarkList field leader O-5.5 74.2) / **65.0%** (Meta Muse-Code harness)
- ProgramBench (Anthropic harness): **93.0%** (BenchmarkList, rank 1/10)
- SWE-Marathon: **48.0%** complexity-ranked (1/8) / **80 / 160 passing trials** (2/33)
- ReactBench: **42.1% at high** (BenchmarkList, 2026-10-04; field leader G-5.6 Sol 46.7)
- NL2Repo **75.3% (1/34)** · Code Migration **57.5% (1/33)** · Android Bench **91.8% (1/46)** · KernelBench CUDA **79.3% (1/11)** (BenchmarkList 2026-10-06)

Long context:

- ProgramBench (Anthropic harness): **93.0%** (BenchmarkList, rank 1/10 — long-horizon program execution); no verified public MRCR row found for Opus 5 (re-checked 2026-10-06)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 51** (#13/216) contradicts the original 63.1; AA also now marks Claude Opus 5 **deprecated** (superseded by Claude Opus 5.5) — scores unchanged pending re-derivation.
- Fresh-source note (2026-10-06 re-run, user-approved enrichment): BenchmarkList model page (158 benchmarks) filled the four long-standing gaps — SWE-bench Verified **97.0/96.0 (rank 1)**, LiveCodeBench **89.0 (rank 2)**, Toolathlon **80.6/87.0/73.1 (rank 1)**, Tau3-Banking **44.7 (rank 11)** — plus MCP Atlas 87.0, OSWorld-Verified 83.4, ARC-AGI-2 90.4, TB3.0 43.3 (rank 1). Coding 96→97; Overall re-derived: (96+96+95+70+97)/5 = 90.8 → 91 (display unchanged).

### Normalized scores (1–100)

- **Tool use: 96/100.** TB4.0 ~52–53, TB2.1 89.1, Toolathlon 80.6/87.0 (rank 1), GDPval 1861 (rank 1), OSWorld-Verified 83.4, AutomationBench 50.3, BrowseComp 90.8 — capped only by missing Claw-Eval row and TB4.0/TB-Science behind the 60%+ class.
- **Reasoning: 96/100.** HLE 56.6/63.6, AA Index 51 (v4.3.2 refresh — see Fresh-source note), ARC-AGI-2 90.4 (rank 4) and ARC-AGI-3 30.2 (rank 2), GPQA 93.7; capped by FrontierMath T4 harness variance, missing CritPt/AA-LCR rows, and HLE below Fable 5.1's 60.9+.
- **Context window: 95/100.** 1M window documented; ProgramBench 93.0% (rank 1) is strong long-horizon evidence but no public MRCR ≥98% retrieval row → 95.
- **Multimodal: 70/100.** Text + image in (strong chart/filing vision per system-card multimodal section); no video/audio/non-text out → top of 60–70 image band.
- **Coding: 97/100.** SWE-bench Verified 97.0/96.0 (rank 1 of both tracked sets), LiveCodeBench 89.0 (rank 2), Frontier-Bench 44.4 (rank 1), SWE-Pro 79.2, DeepSWE ~74, ProgramBench 93.0 — filled-gap re-rate 2026-10-06; capped only by TB-Science 30% behind Fable/Astra and harness SE.
- **Cost efficiency: 50/100.** $5/$25 sits between the $3/$15≈60 and $10/$50≈30 anchors (~half of Fable's input price); cache read $0.50 and batch 50% help agentic loads.
- **Overall Score: 91/100.** Mean of five quality dims (96+96+95+70+97)/5 = 90.8 → 91. Best-fit: daily-driver frontier coding/knowledge agent at half Fable pricing; escalate to Fable 5.1 only for multi-day autonomy or TB-Science-class research.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic news/system card/platform docs, Codersera, Meta/OpenAI comparison tables, GPT-5.6 launch tables); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (158 benchmarks) + VectorWire pricing verification — filled SWE-V/LCB/Toolathlon/Tau3/MCP-Atlas/BrowseComp/OSWorld-Verified/ARC-AGI-2 gaps; Coding 96→97, Overall re-derived to 90.8→91. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
