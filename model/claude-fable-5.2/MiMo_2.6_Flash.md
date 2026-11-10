# Claude Fable 5.2 — findings by MiMo 2.6 Flash

- Source: Anthropic (`claude-fable-5-2`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.2
- **Short description:** Anthropic's latest flagship reasoning model for demanding reasoning and long-horizon agentic work (hours-long agent sessions, deep research, document/spreadsheet/deck completion). The base sibling of Claude Mythos 5.2 (`claude-mythos-5-2`), which is the same model gated to verified organizations — Mythos is not a separate capability tier.
- **Provider / access:** Claude API (`claude-fable-5-2`), Amazon Bedrock (`anthropic.claude-fable-5-2`), Google Cloud (managed), Microsoft Foundry, Claude Platform on AWS. Chat Completions-style Messages API (Anthropic format). Note: 30-day data retention required (not available under zero data retention unless authorized); forced tool choice (`tool_choice: any|tool`) returns 400.
- **Release / knowledge:** released 2026-11-09; reliable knowledge cutoff June 2026; training data cutoff Jun 2026.
- **IDs:** `anthropic/claude-fable-5-2` (gateway) / `claude-fable-5-2` (native).
- **Context window:** 1,000,000 tokens; max output 128K (synchronous Messages API; no 300K beta listed for this model). Verified on Anthropic model docs and BenchLM (Context Window 1M).
- **Modalities:** text + images in; text out ("Text and images → text"); reasoning yes — adaptive thinking always on, cannot be disabled; effort parameter controls depth, default `high`; tool calls yes; JSON mode via tool use.
- **Pricing (as of 2026-11-10):** $8 in / $40 out per 1M; 5m cache write $10, 1h $16; cache read $0.20 (2.5% of input); Batch API 50% off ($4/$20); fast mode available at premium pricing. Paid — no free tier. Same price as Claude Mythos 5.2.
- **Architecture:** proprietary (parameters undisclosed; weights not publicly available).

### Raw benchmarks found

> BenchLM model page snapshot 2026-11-10: overall **91.19/100, rank #1 of 1020**, coverage 55/804 (BenchLM notes coverage is partial, so its overall is conservative). Rows below carry their source.

Agent / tool use:

- Terminal-Bench 4.0: **67.60%** (Anthropic system card 2026-11-09) / **59.6%** (Artificial Analysis independent run).
- GDPval-AA: **1831** Elo (system card); AA Briefcase **1785** Elo; AA-Briefcase (rubric) **66.1%**.
- AutomationBench: **51.4%** (system card) / AA AutomationBench **76.4%** (AA leaderboard). WANDR **82.1%**, Remote Labor Index **41.3%**, DRACO **87.7%**, Real-World Finance v2 **1637** Elo, RoboDojo Sim **64.9%** (system card / announcement).
- OSWorld 2.1 Offline: **89.3%** (system card).
- Harvey LAB-AA v1.1: **7.2%** (system card — domain-law rubric row, very hard harness); GDP.pdf (AA): **24.2%**.
- Terminal-Bench-Science 0.1: **74.6%** (system card).
- Tau3-Banking / Tau2-Bench / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found.

Reasoning / knowledge:

- HLE: **74.2%** with tools / **73.2%** without tools (system card); AA independent HLE **74.3%**.
- Artificial Analysis Intelligence Index: **64.6** (AA leaderboard — 60+ frontier band).
- ARC-AGI-3: **65.7%** raw / **94.90%** with provider adapter (system card).
- AA-Omniscience Index **66.8**, accuracy **79.1%**, hallucination rate **59.3%**; AA-LCR **83.3%**, CritPt **35.4%** (AA leaderboards).
- STEM Professor Bench **61.8%**, PhysicianBench **64.4%**, HealthBench raw **58.8%** / length-adjusted **59.6%**, HealthBench Professional raw **71.1%** (system card / AA).
- GMMLU **96.0%**, MILU **94.1%** (system card, multilingual knowledge).
- GPQA Diamond / FrontierMath: no verified public score found.

Coding:

- SWE-bench Pro: **93%** (system card). SWE-bench Multilingual **96.6%**, SWE-bench Multimodal **74.1%**.
- DeepSWE: **74.3%** (system card). ProgramBench: **85.6%** (system card).
- FrontierSWE v2: **69.9%** (Proximal leaderboard); FrontierCode 2.0: **49.1%** (Cognition); AA-SciCode **67.7%** (AA); CursorBench 4.0 **60.0%** (Cursor evals).
- LiveCodeBench / SWE-bench Verified: no verified public score found.

Long context:

- 1M window declared (Anthropic docs, BenchLM); ProgramBench 85.6% runs across long contexts but is not a window-length retrieval score. MRCR / RULER / GraphWalks: no verified public score found.

Multimodal:

- Chartography: **91.6%** with tools / **73.4%** without tools (system card).
- OfficeQA **83.4%**, OfficeQA Pro **72.9%**, BenchCAD 2.1 **75.4%** / **83.5%** with tools (system card).
- Image understanding is further evidenced by the shared-base Mythos 5.2 row: biomedical image analysis **80.7%** (system card).
- LVBench / audio / video input / general MMMU-class row: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 93/100.** TB4.0 67.6% (59.6% AA), GDPval-AA 1831, AA Briefcase 1785 Elo, OSWorld 2.1 89.3%, AA AutomationBench 76.4% and WANDR 82.1% are all frontier-band; capped because Tau3-Banking, Claw-Eval and Toolathlon remain unpublished (the standing cap) and the Harvey LAB-AA 7.2% row shows rubric-domain fragility.
- **Reasoning: 93/100.** HLE 73.2–74.3% and AA Intelligence Index 64.6 both clear the 60+/40% frontier references, with ARC-AGI-3 65.7% (94.90% adapter) and 79.1% Omniscience accuracy alongside; held at 93 because GPQA Diamond and FrontierMath are unpublished for this release.
- **Context window: 95/100.** 1M window confirmed on Anthropic docs and BenchLM (95–100 tier); no measured long-context retrieval score (MRCR/RULER/GraphWalks) exists, which caps the upper band.
- **Multimodal: 78/100.** Chartography 91.6% with tools, OfficeQA 83.4%, BenchCAD 83.5% and the shared-base biomedical image 80.7% prove solid image/document understanding; capped well below 90 because output is text-only, there is no audio/video input, and no general vision benchmark (MMMU-class) row is published.
- **Coding: 94/100.** SWE-bench Pro 93%, SWE-bench Multilingual 96.6%, DeepSWE 74.3% (74%+ frontier ref), FrontierSWE v2 69.9% and CursorBench 4.0 60.0% are field-leading across five harnesses; held at 94 because SWE-bench Verified and LiveCodeBench stay unpublished and FrontierCode 2.0 (49.1%, harder v2 harness) doesn't lift the ceiling.
- **Cost efficiency: 40/100.** $8/$40 per 1M is the premium band (twice Opus 5.5, far above the $3/$15 ≈ 60 anchor); $0.20 cache reads (2.5%) and the 50% batch discount materially cut agentic run cost — same calibration as Claude Mythos 5.2.
- **Overall Score: 90.6/100.** (93+93+95+78+94)/5 = 453/5 = 90.6 — best-fit paid flagship for hours-long agentic sessions, deep research and large-scale coding where top-tier benchmark performance justifies premium per-token pricing; BenchLM ranks it #1 overall (91.19).

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-10
- Method: public internet research (BenchLM model page snapshot 2026-11-10, Anthropic platform model docs and system card 2026-11-09 rows as indexed by BenchLM, Artificial Analysis / Proximal / Cognition / Cursor leaderboard rows); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Fable 5.2 (BenchLM, snapshot 2026-11-10)](https://benchlm.ai/models/claude-fable-5-2)
  - [Claude Fable 5.2 model docs (Anthropic)](https://platform.claude.com/docs/en/models/fable-5-2/overview)
  - [Claude Fable 5.2 and Claude Mythos 5.2 system card (Anthropic, 2026-11-09)](https://assets.claude.com/27d60918d218125e7504bc7354c4b4626ec56b11.pdf)
  - [Anthropic announcement — Claude Fable 5.2 and Claude Mythos 5.2](https://www.anthropic.com/claude-fable-and-mythos-5-2)
  - [Artificial Analysis Intelligence Index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
