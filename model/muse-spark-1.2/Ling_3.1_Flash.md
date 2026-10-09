# Muse Spark 1.2 — findings by Ling 3.1 Flash

- Source: Meta Superintelligence Labs (`opencode/muse-spark-1.2`; served via the Meta Model API)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta Superintelligence Labs' third Muse Spark release (2026-08-05) and the model behind the Muse Code terminal agent — coding-focused upgrade co-trained with Muse Code for long-horizon software work (whole-repo generation, 1,000+ tool-call sessions); AA Intelligence Index 54 (xhigh), tied with GPT-5.5/Grok 4.5, just behind the frontier.
- **Provider / access:** Meta Model API (first-party at launch), Muse Code, OpenRouter; reasoning effort up to xhigh. Tiers: Standard (no training use), Contributor ($0.10/$0.20, prompts/completions used to train Meta models), and a Free Zen tier (training-data consent).
- **Release / knowledge:** 2026-08-05; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `opencode/muse-spark-1.2`.
- **Context window:** 1,048,576 (1M) tokens, unchanged from Muse Spark 1.1; no long-context premium.
- **Modalities:** text, image, audio, video, PDF in; text out.
- **Pricing (as of 2026-10-02):** Standard $1.25/$4.25 per 1M input/output, cached $0.15/M; Contributor $0.10/$0.20 (cached $0.002/M); Free Zen tier on OpenCode Zen.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas (Scale AI; 36 servers / 220 tools): **90.3%** — #1, ahead of Claude Opus 5's 85.8% (Muse Spark 1.1: 88.1%)
- Terminal-Bench 2.1: **80%** (Artificial Analysis, xhigh; up from 78% on 1.1) / **82.9%** (Meta's own harness, Muse Code, xhigh — #2 behind Opus 5's 86.7%, ahead of GPT-5.6 Terra 81.8%, Grok 4.5 81.6%, Gemini 3.6 Flash 78.9%)
- GDPval-AA v2: **1631 Elo** (#5; behind Opus 5 1852, GPT-5.6 Sol 1730, Kimi K3 1685; ahead of Opus 4.8 1588; 1.1: 1371)
- τ³-Banking: **27%** (AA; up from 25%); τ²-Bench Banking (AA): **34.9%**
- Finance Agent v2 (Vals): **60.6%** (#2); Harvey's Legal Agent Benchmark: **25.4%** (#1); SkillsBench: **53.0%**
- Terminal-Bench 4.0 (Vals): **5.6%** — likely harness mismatch, excluded from scoring
- Claw-Eval / ClawProBench / Agents' Last Exam: no verified public score found

Reasoning / knowledge:

- AA Intelligence Index (v4.x, xhigh): **54** (up from 51 on 1.1; frontier: Opus 5 61, Fable 5 60, Sol 59, Kimi K3 57)
- GPQA Diamond (AA): **90.4%**
- Humanity's Last Exam (AA): **45.5%**
- CritPt: **17.7%**; AA-Omniscience: **27.2**; SimpleQA Verified: **60.3%**
- LiveBench Reasoning: **90.0%**; LiveBench Mathematics: **91.2%**; MMLU-Pro (Vals): **88.3%**
- LMArena: Multi-turn **1520** (#1), Hard Prompts **1513**, Text **1500** (#4), Longer Queries **1502**, Creative Writing **1452**

Coding:

- DeepSWE 1.1 (Meta harness, Muse Code): **59.3%** (#3, behind Opus 5 65.0% and GPT-5.6 Terra 64.8%; 1.1: 53.0%) / **54.9%** (Epoch AI)
- SciCode: **56.4%** (#16) / **57.4%** (AA; #14)
- SWE-bench (Vals): **86.6%** (#13); Vibe Code Bench v1.1: **79.1%** (#13)
- Meta Internal Coding Bench (440 tasks): **70.6%** (#2 behind Opus 5 79.4%)
- LiveBench Coding: **77.5%**; LiveBench Agentic Coding: **57.6%**; LMArena Coding: **1536** (#9); LMArena WebDev: **1534**
- FrontierSWE: **12.0%**; Code Migration: **29.9%**; IOI: **21.8%**

Long context / multimodal:

- 1M-token window; AA-LCR: **79.0%**; BenchLeader Long context pillar 66; no MRCR/RULER score published
- MMMU-Pro (Vals): **86.1%**; Vals Multimodal Index: **69.8%** (#6); LMArena Vision: **1304**; MedScribe **90.1%** (#3)

### Normalized scores (1–100)

- **Tool use: 80/100.** MCP Atlas 90.3% (#1 of all models) and GDPval-AA v2 1631 Elo (#5) are top-tier, with Terminal-Bench 2.1 at 80–82.9% just under the 88% frontier bar; τ³-Banking 27% and τ²-Bench Banking 34.9% cap the score.
- **Reasoning: 84/100.** GPQA Diamond 90.4% clears the 90%+ frontier bar and HLE 45.5% clears the 40%+ bar, with the AA Intelligence Index of 54 just under the frontier cluster (59–61); CritPt 17.7% and AA-Omniscience 27.2 cap the score.
- **Context window: 95/100.** 1M-token window with AA-LCR 79.0%; no ≥98% retrieval-at-512K+ figure, so 100 is not justified.
- **Multimodal: 92/100.** text/image/audio/video/PDF in with text out — the +audio-in band (90–100), corroborated by MMMU-Pro 86.1% and the Vals Multimodal Index of 69.8% (#6).
- **Coding: 85/100.** SciCode 56.4–57.4% clears the 55% frontier reference and SWE-bench (Vals) 86.6% is strong, but DeepSWE 1.1 54.9–59.3% (under the 74% bar) and Terminal-Bench 2.1 80–82.9% (under the 85% bar) cap the score; Meta Internal Coding Bench 70.6% (#2) supports.
- **Cost efficiency: 88/100.** Standard $1.25/$4.25 per 1M is the methodology's ~88 anchor, with $0.40 per Intelligence Index task among the cheapest at its intelligence level; Contributor ($0.10/$0.20) and the Free Zen tier are cheaper still (with a training-data trade-off).
- **Overall Score: 87/100.** (80+84+95+92+85)/5 = 87.2 → 87 — the best-priced near-frontier agentic model: #1 MCP Atlas tool use, 1M omnimodal context at $1.25/$4.25, with mid-tier DeepSWE and τ-Banking as the gaps.

---

## Update 2026-10-08 (6-day re-research)

The Model Gap's provenance audit and llmboard's independent rows filled the remaining gaps; **no score changes** — the new reads corroborate the existing bands:

- **All eight tracked scores are now independent** (The Model Gap, 2026-08-26): HLE no-tools **45.5%** (AA), GPQA Diamond **90.4%** (AA, saturated), Terminal-Bench 2.1 **80.15%** (AA), SWE-bench Verified **86.6%** (vals.ai, rank 13 of 86, ±1.52 CI, mini-SWE-agent scaffold), DeepSWE v1.1 **55.0%** (deepswe.datacurve.ai, rank 13, ±2% CI, $3.70 avg cost, 99K output tokens, 101 steps), Toolathlon-Verified **75.9%** pass@1 (toolathlon.xyz, rank 3 of 7 rows shown; Pass@3 87.0%, Pass^3 63.0%), LiveBench **78** (2026-06-25 round: Reasoning 90.0, Mathematics 91.2, Coding 77.5, Data Analysis 76.5, Language 78.6, Instruction Following 74.3, Agentic Coding 57.6), Terminal-Bench 4.0 **6.1%** (vals.ai, xhigh, 2026-10-08, ±12.4 noise — the file's 5.6% read is confirmed as a ~6% harness-mismatch row).
- Vendor-vs-independent spreads, weighed: Terminal-Bench 2.1 spans a 13-point range (Meta 82.9% / AA 80.15% / vals.ai 69.66%) — the Meta-vs-AA 2.75-point gap sits inside the ±10.6 noise band, so it is not evidence of inflation; the vals.ai read is a cross-harness difference between two independent sources. DeepSWE v1.1 is the clearer case: Meta self-reports 59.3% vs the independent leaderboard's 55.0% — a +4.3-point gap that **exceeds the board's own ±2% CI**, so the independent 55.0% is the tracked figure (this file's "54.9% (Epoch AI)" is corroborated).
- New fills: llmboard independently logs Terminal-Bench 2.1 **82.90%** (rank 19 of 43) and DeepSWE 1.1 **59.30%** (rank 27 of 43) — both Evidence-C (vendor-adjacent) reads from 2026-10-08; Meta's methodology writeup confirms the harness asymmetry (1.2 ran inside Muse Code while the 1.1 comparison rows ran mini-swe-agent, so the +6.7 TB / +6.3 DeepSWE generational jumps are partly harness, not purely model).
- Score impact: none — Toolathlon 75.9% (rank 3 of 7) supports Tool 80; the independent DeepSWE 55.0% confirms the Coding 85 cap; HLE 45.5% and GPQA 90.4% confirm Reasoning 84. Tool 80 / Reasoning 84 / Context 95 / Multimodal 92 / Coding 85 / Cost 88, Overall 87 all stand.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (Artificial Analysis, Meta launch methodology, AI/TLDR, BenchLeader, Capital & Compute); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1_2.md`, using the same headings.
