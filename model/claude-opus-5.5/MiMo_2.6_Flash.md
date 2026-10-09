# Claude Opus 5.5 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-opus-5-5`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family model — a hybrid-reasoning flagship for long-running agentic coding, computer use, and knowledge work, positioned at Claude Fable 5.1 capability for ~40% lower run cost than Opus 5. Not a variant/alias of another entry.
- **Provider / access:** Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API (Anthropic format).
- **Release / knowledge:** released 2026-09-22; reliable knowledge cutoff June 2026 (training-data cutoff also Jun 2026).
- **IDs:** `anthropic/claude-opus-5-5` (gateway routes) / `claude-opus-5-5` (native).
- **Context window:** 1,000,000 tokens; max output 128K (Messages API), 300K on Batch API beta (`output-300k-2026-03-24`). Same tokenizer as Opus 5 → 1M ≈ 555k English words.
- **Modalities:** text + images (+ PDF via Files API) in; text out; reasoning yes (adaptive thinking always on, cannot be disabled; effort low→max, default `medium`); tool calls yes; no audio/video input (Anthropic: "text and images → text").
- **Pricing (as of 2026-10-07):** $4 in / $20 out per 1M; cache read $0.20 (0.05× input), 5m cache write $5, 1h $8; Batch API 50% off ($2/$10); Fast mode research preview $8/$40 at 2.5× speed. Paid — no free tier; US-only inference route adds 1.1×.
- **Architecture:** proprietary (parameters undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic system card, xhigh effort, ±2.6 pts — self-run) / **59.6%** (Artificial Analysis independent run, tied with GPT-6 Astra). Terminal-Bench 2.1: no verified public score found.
- GDPval-AA v2.1: **1846** Elo (Anthropic, AA-run; vs Fable 5.1 1735, Opus 5 1708). AA-Briefcase v1.1: **1822** Elo.
- AutomationBench (business workflows): **40.0%** (Zapier early-access run; GPT-6 Astra 41.4%).
- OSWorld 2.0 computer use: **81.8% partial / 48.7% strict** (Anthropic system card).
- Toolathlon Verified: **77.8%** pass@1 (system card §8).
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Tau3-Tau2: no verified public score found.

Reasoning / knowledge:

- HLE: **64.4%** no tools, **67.7%** with tools (Anthropic) — AA independent no-tools run: **61.4%**.
- GPQA Diamond: no verified public score found (Anthropic did not publish GPQA for this release).
- AA Intelligence Index: **58** (Artificial Analysis, 2026-09-23).
- ArXivMath (Aug 2026): 91.2% no tools / 96.9% with tools. GMMLU 42-language: 94.3%. HealthBench Professional: 65.6%. LiveBench / LCR / CritPt / Omniscience: no verified public score found.

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card; vs Opus 5 79.2%). SWE-bench Multilingual **93.9%**, SWE-bench Multimodal **61.4%**. SWE-bench Verified: **not published** by Anthropic — treat any third-party Verified number as unverified.
- DeepSWE v1.1: **74.2%** (system card §8).
- FrontierCode v1.1 (Main): **54.4%**. CursorBench 4.0: **57.8%** (52.5% at default medium effort). Terminal-Bench-Science 0.1: **58.7%**.
- LiveCodeBench / SciCode: no verified public score found.

Long context:

- ProgramBench (long-context, run across the full 1M window): **91.2%** (Anthropic; Fable 5.1 87.6%, Opus 5 85.4%). MRCR / RULER: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** GDPval-AA 1846 and AA-Briefcase 1822 sit well above the 1750+ frontier ref, TB4.0 59.6–66.4 leads its board, OSWorld 2.0 81.8% and Toolathlon 77.8% round out a top agentic profile; capped below 95 by no public Tau3/Claw-Eval number and TB4.0 (not TB2.1) being the only terminal harness reported.
- **Reasoning: 93/100.** HLE 61.4–64.4 no-tools is far above the 40% frontier ref and AA Index 58 nearly reaches the 60+ ref; capped by GPQA Diamond being unpublished for this release (no cross-checkable science-QA number).
- **Context window: 97/100.** 1M window (95–100 tier) with ProgramBench evaluated across the full 1M at 91.2%; not 100 because no ≥98%-style needle retrieval score (MRCR/RULER) is published for 512K+.
- **Multimodal: 78/100.** Images + PDF in, text out (PDF/video band = 75–90); no audio or video input and no non-text output, which caps it below 90 despite strong visual reasoning (Chartography 89.0% with tools).
- **Coding: 94/100.** SWE-bench Pro 89.9%, DeepSWE 74.2% (74%+ frontier ref), SWE-bench Multilingual 93.9%, FrontierCode 54.4% and CursorBench 57.8% all at/above field-leading levels; capped at 94 by the absence of SWE-bench Verified/LiveCodeBench/SciCode rows and DeepSWE being vendor-run.
- **Cost efficiency: 57/100.** $4/$20 sits just above the $3/$15 ≈ 60 anchor (i.e., worse than 60), but the $0.20 cache reads (5% of input, 60% below Opus 5) and 50% batch discount pull real agentic cost down — hence 57 rather than 50.
- **Overall Score: 91/100.** (92+93+97+78+94)/5 = 90.8 → 91 — best-fit paid flagship for long-running agentic coding and computer use where 1M context, PDF input, and cache-heavy cost structure matter more than headline per-token price.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Anthropic announcement + platform docs, system-card tables via MetricNexus/codersera/TechGeum, Artificial Analysis, Tech Bytes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Claude Opus 5.5 — findings by Mimo v2.6 Flash

- Source: Anthropic/Claude Opus 5.5 (`claude-opus-5-5`)
- Date: 2026-10-06 (UTC) — re-run of the 2026-09-24 research
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Claude 5.5-family frontier model (2026-09-22), matching Claude Fable 5.1 on most work at ~40% lower cost than Opus 5; aimed at long-horizon agentic coding, computer use, and professional knowledge work. Not a variant/alias of another entry.
- **Provider / access:** Anthropic Claude API (`claude-opus-5-5`), Amazon Bedrock, Google Cloud, Microsoft Foundry — Chat Completions–style Messages API.
- **Release / knowledge:** 2026-09-22 release; knowledge cutoff June 2026 (system card).
- **IDs:** `anthropic/claude-opus-5-5` (API id `claude-opus-5-5`); no OpenCode Zen Free ID found — paid only.
- **Context window:** 1M input / 128K max output (batch beta 300K out) — Anthropic release + llm-stats.
- **Modalities:** text/image in; text out; adaptive thinking always on (efforts medium→xhigh/max); tool calls; no public JSON-mode claim beyond structured tool use.
- **Pricing (as of 2026-10-06):** $4 / $20 per 1M in/out; cache read $0.20; cache write $5 (5m) / $8 (1h); batch 50% off — Anthropic + BenchmarkList ($4 in · $0.2 cached · $20 out, unchanged). Paid; no free tier ID.
- **Architecture:** proprietary; params not disclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 4.0: **66.4%** (Anthropic, xhigh, Claude Code harness, ±2.6 pts; SOTA vs Fable 5.1 55.8 / Opus 5 52.3; BenchmarkList rank 2/29)
- AutomationBench: **42.5%** (BenchmarkList 2026-10-06, rank 14/48; Zapier-via-Anthropic no-fallback run earlier reported 40.0%) / AutomationBench-AA: **69.5%** (rank 3/26)
- GDPval-AA v2.1: **1846 Elo** (Anthropic/AA, BenchmarkList rank 3/352; +111 over Fable 5.1 — knowledge-work lead)
- OSWorld 2.0: **81.8% partial / 48.7% strict** (Anthropic announcement / system card)
- AA-Briefcase v1.1: **1822 Elo** (Artificial Analysis, rank 2/145; +143 over Fable 5.1)
- Toolathon: **77.8% Pass@1 / 82.4% Pass@3 / 72.2% Pass^3** (BenchmarkList 2026-10-06, rank 7/41 — fills the system-card §8.14.5 gap)
- BrowseComp: **88.5% ±5.0%** (517/520 samples; BenchmarkList rank 13/60); Agents' Last Exam: **38.2%** (rank 10/41)
- PostTrainBench **49.3%** (rank 1/31) · RuneBench **6.7** (3/61) · DRACO **87.4% at max** (3/24) · Vending-Bench 2 **9235.25** (8/60) · AA-Omniscience net **0.58, rank 1/11** (0.76 correct / 0.17 incorrect / 0.07 unsure) — BenchmarkList 2026-10-06
- Tau3-Banking / Claw-Eval: **no verified public score found** (still absent on BenchmarkList/Atlas 2026-10-06)

Reasoning / knowledge:

- Humanity's Last Exam: **67.7% with tools** / 64.4% no tools (Anthropic; BenchmarkList rank 1/478; AA reports 61.4% under its harness — prior best)
- Artificial Analysis Intelligence Index: **58** at max effort, **#1 of 198** (AA leaderboard FAQ, 2026-10-06; BenchmarkList's broader config set lists 57.6, rank 8/427 — same v4.3.2 scale)
- SciCode: **66.9%** (AA, BenchmarkList rank 1/296; prior best 63.1% Fable 5.1)
- GPQA Diamond: **no verified public score found** (still absent from BenchmarkList/Atlas rows as of 2026-10-06)
- CritPt: **31.7%** (BenchmarkList 2026-10-06, rank 2/28 — field leader G-5.6 Sol 32.3%); AA-LCR v1.1: **84.7** (Benchmark Atlas); AA-Omniscience Index: **46.4** (Atlas)
- AIIQ Composite IQ: **143** (BenchmarkList rank 1/147); GDP.pdf: **no verified public score found**

Coding:

- SWE-bench Pro: **89.9%** (Anthropic system card; BenchmarkList rank 1/58)
- SWE-bench Multilingual: **93.9%** (system card; rank 1/49); SWE-bench Multimodal: **61.4%** (rank 1/17)
- DeepSWE v1.1: **74.2%** (system card; BenchmarkList rank 4/52)
- FrontierCode: BenchmarkList headline **65.3%** (rank 1/36; track/variant not labeled in the extract) vs Anthropic v1.1 Main **54.4%** max / 54.6% medium (beats GPT-6 Astra 53.3)
- CursorBench 4.0: **57.8%** max / 52.5% medium (Anthropic; SOTA per launch)
- FrontierSWE v2: **62.3%** (system card, Proximal harness; BenchmarkList rank 2/20)
- Terminal-Bench-Science 0.1: **63.3%** (BenchmarkList 2026-10-06, rank 2/17, field leader G-6 Astra 68.1%; Anthropic launch reported 58.7% ±3.5–5)
- Vibe Code Bench v1.1: **90.3%** (BenchmarkList rank 4/75); SWE-Marathon: **74/160 passing trials** (rank 5/33); KernelBench Mega: **35.46** (rank 1/28)

Long context:

- ProgramBench (Anthropic harness, 166-task golden subset): **91.2%** best hidden-test pass rate (BenchmarkList 2026-10-06, rank 3/10 — fills the system-card §8.10 gap)
- MRCR / RULER retrieval figure: **no verified public score found** (1M window documented)

Multimodal:

- Chartography (with tools): **89.0%** (Anthropic, BenchmarkList rank 2/4); without tools 64.4% (card)
- BenchCAD Vision2Code-1000: **IoU 0.962 with tools** (BenchmarkList 2026-10-06, rank 2/11 — fills the launch-pack gap)
- LVBench (long video): **83.7%** (rank 6/49; field leader G-6 Astra 87.5%) — aggregator-reported; Anthropic modality docs remain text/image-in
- Blueprint-Bench 2: **0.775 ±0.010** (rank 2/31); OSWorld 2.0 computer use as above (81.8% partial / 48.7% strict)

### Normalized scores (1–100)

- **Tool use: 95/100.** TB4.0 66.4% SOTA, GDPval-AA 1846 Elo (rank 3/352), Toolathon 77.8% P@1 (rank 7/41), BrowseComp 88.5%, AutomationBench-AA 69.5%, OSWorld 81.8% partial — capped just short of 100 by missing Tau3/Claw-Eval rows and safeguard fallbacks on some harness runs.
- **Reasoning: 97/100.** AA Intelligence Index 58 (#1/198), HLE-with-tools 67.7% (#1/478), CritPt 31.7% (rank 2/28), AA-LCR 84.7, AA-Omniscience net 0.58 (rank 1) now all measured; capped only by the still-missing GPQA row.
- **Context window: 97/100.** 1M input / 128K out meets the ≥1M tier (95–100); ProgramBench 91.2% (rank 3/10) now published, but MRCR/RULER-style retrieval % still absent, so not 100.
- **Multimodal: 85/100.** Text/image in with strong computer-use and chart scores (OSWorld 81.8 partial, Chartography 89.0 rank 2, BenchCAD IoU 0.962); capped by text-only output, no native audio/video I/O, and strict OSWorld 48.7%.
- **Coding: 96/100.** SWE-Pro 89.9% (#1), SWE-Multilingual 93.9% (#1), DeepSWE 74.2%, Vibe 90.3%, TB-Science 63.3% (#2) — capped only by harness SE and safeguard-induced fallbacks Anthropic says lower some scores.
- **Cost efficiency: 58/100.** $4/$20 list with $0.20 cache reads and claimed ~40% lower cost-per-task than Opus 5; still an expensive Opus-tier token price (methodology anchors: ~$3/$15 ≈ 60).
- **Overall Score: 94/100.** Mean of Tool 95 + Reasoning 97 + Context 97 + Multimodal 85 + Coding 96 = 470/5 = 94.0 — best-fit for frontier long-horizon agentic coding and knowledge work when budget allows Opus-tier pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-06
- Method: public internet research (Anthropic release page + system card, Artificial Analysis launch article, llm-stats/CodingFleet/Tabbit summaries); re-run 2026-10-06 (user-approved enrichment): BenchmarkList model page (58 benchmarks), Benchmark Atlas, and the live AA leaderboard — filled Toolathon, CritPt, AA-LCR, AA-Omniscience, AIIQ, BrowseComp, Agents' Last Exam, Vibe Code Bench, SWE-Marathon, ProgramBench, BenchCAD, LVBench, Blueprint-Bench, PostTrainBench/RuneBench/DRACO/Vending-Bench gaps; Reasoning 96→97. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

