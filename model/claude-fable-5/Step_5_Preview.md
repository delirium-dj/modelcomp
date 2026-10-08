# Claude Fable 5 — findings by Step 5 Preview

- Source: Anthropic (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first Mythos-class model released for general use (2026-06-09), built for demanding reasoning and long-horizon agentic work. Shares the same underlying weights as Claude Mythos 5 (restricted Project Glasswing variant with fewer safeguards); Fable 5 ships with safety classifiers that can silently route a session to Claude Opus 4.8. Succeeded by Claude Fable 5.1 (2026-07, knowledge cutoff Jun 2026, cheaper cache reads).
- **Provider / access:** Claude API (Messages API) `claude-fable-5`; also Amazon Bedrock (`anthropic.claude-fable-53`), Google Cloud Vertex (`claude-fable-5`), Microsoft Foundry, and GitHub Copilot (Pro+, Max, Business, Enterprise). No OpenCode Zen Free ID found — paid API access only.
- **Release / knowledge:** 2026-06-09 release; reliable knowledge cutoff Jan 2026, training data cutoff Jan 2026. Note: access was briefly suspended (2026-06-12 to 2026-07-01) due to US export controls, then restored globally.
- **IDs:** `claude-fable-5` (Claude API alias `claude-fable-5`; AWS Bedrock `anthropic.claude-fable-53`; Google Cloud `claude-fable-5`). No Free tier ID on Zen.
- **Context window:** 1,000,000 tokens default (no beta header, no long-context price premium — verified on the Anthropic model page and context-windows docs); max output 128,000 tokens per request. Independently, ~830K tokens is the usable envelope in Claude Code once auto-compaction buffers are accounted for (Verdent analysis), and recall degradation is reported from ~400K tokens (~2% effectiveness loss per 100K).
- **Modalities:** Text and images in → text out. Adaptive thinking always on (default effort `high`); tool calls supported; no extended-thinking enable flag (adaptive only). JSON/structured output via tool use.
- **Pricing (as of 2026-10-09):** $10 / MTok input, $50 / MTok output; 5m cache write $12.50, 1h cache write $20 / MTok; cache reads $1 / MTok; Batch API 50% off input and output; US-only inference at 1.1x. A full 1M-token fresh input call costs ~$10 (cached ~$1).
- **Architecture:** Proprietary (weights not released). No disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (vendor disclosures catalogued by TopReviewed; Artificial Analysis measures 84.6% on its harness — harness difference noted)
- Terminal-Bench Hard: **62.9%** (Artificial Analysis via graysoft.dev)
- Terminal-Bench 4.0: **42.4%** (Artificial Analysis via graysoft.dev)
- Terminal-Bench-Science 0.1: **24.7%** (Anthropic's own setup; public leaderboard / Claude Code harness lists 21.4% — both within SE ±3.5–4.5)
- GDPval-AA: **Elo 1932** (Artificial Analysis; #1 at launch, large jump over Opus 4.8's 1890; AA comparison-page v2.1 shows 1613 under the newer index revision — index version noted)
- FrontierCode Diamond: **29.3%** at high effort (Cognition; highest among frontier models even at medium effort — best token efficiency)
- CursorBench 3.1: **72.9%** at max effort (TopReviewed; state-of-the-art per Anthropic)
- OSWorld: **85.0** (AskClash aggregate; caveat: with production safeguards enabled Fable 5 scored zero on the OSWorld 2.0 / AutomationBench author-task variants where safeguards intervened — Anthropic footnote)
- AutomationBench-AA: **54%** (Artificial Analysis comparison page)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE-Atlas Codebase QnA: **SWE-Atlas 83.3** (AskClash); MCP-Atlas no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (Artificial Analysis); Vals AI leaderboard 93.2%; AskClash aggregate 94.5% — behind Opus 4.8 (93.6%) and Gemini 3.1 Pro (94.3%) on AA
- HLE: **55.5%** (Artificial Analysis; 53.3% per the HLE leaderboard update of 2026-07-01, ~7.6 pts ahead of Opus 4.8 at 45.7%; field mean 12.6%); 64.5% with tools (AskClash)
- AA-LCR (long-context reasoning): **82.3%** (Artificial Analysis)
- MLCR-AA: **64.4%** (Artificial Analysis)
- CritPt: **28.6%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **60** on the v4.1 scale, #1 (SiliconReport; older v-scale reading 49.6–50 depending on page revision)
- ARC-AGI-1: **98.5%**, ARC-AGI-2: **89.2%** (ARC Prize verified results)
- MMLU-Pro: **91.5%** (Vals AI)
- AA-Omniscience: **43.3** index; accuracy 65.4% with 63.6% hallucination rate (Artificial Analysis via BenchLM) — new high score on this evalset per AA

Coding:

- SWE-bench Verified: **95.0%** (vendor disclosures; AskClash lists 95.5%) vs Opus 4.8 88.6% and GPT-5.5 88.7%
- SWE-bench Pro: **80.3%** (Anthropic launch; independently hosted at morphllm.com; +11.1 pts over Opus 4.8's 69.2%, +21.7 over GPT-5.5's 58.6%; caveat: run on Anthropic's own scaffold, not yet on AA's page)
- LiveBench: **82.97** overall; coding 86.0; agentic coding 62.2 (row-best); reasoning 89.7; mathematics 96.0; instruction following 75.8; language 90.7; data analysis 89.5 (as of 2026-09-02)
- Artificial Analysis Coding Index: **76.5**
- DeepSWE: **69.7** (AskClash)
- SciCode: **61.0%** (Artificial Analysis)
- Legal Agent Benchmark: **13.3%** vs GPT-5.5 2.1% (Anthropic-cited vendor eval)
- ViBench (end-to-end vibe coding): highest-performing model tested, near-saturating base use cases with fewer tokens (Anthropic launch post)

Long context:

- 1M-token window default, leads GraphWalks (multi-step reasoning across a 512K–1M graph) among compared models (andrew.ooo comparison); independent third-party testing measured ~91% recall accuracy across the full 1M window (Kanopy Labs); **no public MRCR v2 number at 512K–1M published for Fable 5** — closest independent published MRCR reference for the family is Opus 4.6 at 78.3% (8-needle, 1M)

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval-AA Elo 1932 (#1) and TB2.1 88.0% (84.6% on AA's harness) sit at the top of the frontier reference band, backed by CursorBench 3.1 72.9% and the field-leading FrontierCode Diamond 29.3%; capped below 100 by the hard suites that remain far from saturated (TB-Science 24.7%, TB4.0 42.4%, FrontierCode Diamond 29.3%) and by no public MCP-Atlas/Claw-Eval scores.
- **Reasoning: 93/100.** HLE 55.5% and the AA Intelligence Index 60 (v4.1, #1) clear the frontier band, with AA-LCR 82.3% and ARC-AGI-2 89.2% supporting depth; capped by GPQA 92.6% trailing three rivals and CritPt 28.6%.
- **Context window: 96/100.** 1M tokens is the default at standard pricing with 128K max output (≥1M tier). The 100 tier requires ≥98% verified retrieval at 512K+, and no public MRCR number for Fable 5 at that range exists — the 91% independent recall figure and GraphWalks lead support 96 but not the top of tier.
- **Multimodal: 70/100.** Text + image in → text out lands in the image-input band (60–70); placed at the top of the band on state-of-the-art vision evidence (MMMU-Pro 89.3%, CharXiv 83.5%, rebuilding web-app source from screenshots), but no video/audio input or non-text output keeps it below the 75–90 tier.
- **Coding: 96/100.** SWE-bench Pro 80.3% (a class-level +11.1 pts over Opus 4.8), SWE-bench Verified 95.0%, LiveBench coding 86.0 and Coding Index 76.5 all exceed the frontier reference; near-saturating ViBench and best-token-efficiency on FrontierCode reinforce it. Capped because the 80.3% Pro number runs on Anthropic's own scaffold and independent long-horizon suites (DeepSWE 69.7) remain mid-band.
- **Cost efficiency: 30/100.** $10 in / $50 out per MTok is the methodology's $10/$50 ≈ 30 tier — twice Opus 4.8's rate; cache reads $1 and 50%-off batch soften, but not enough to move tiers. No free tier.
- **Overall Score: 90/100.** Best-fit recommendation: the escalation tier for long-horizon agentic coding and complex knowledge work where retry savings at 2x price still win; not a default for interactive or high-volume workloads.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Anthropic model docs and launch post, Artificial Analysis, BenchLM, Vals AI, TopReviewed, AskClash, LiveBench tables, independent long-context analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
