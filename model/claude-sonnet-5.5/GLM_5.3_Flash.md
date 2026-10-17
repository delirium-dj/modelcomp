# Claude Sonnet 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's second Claude 5.5-family model (announced September 28, 2026) — a hybrid-reasoning Sonnet that runs 30%+ faster than Sonnet 5 and costs up to 30% less per task, built for well-scoped everyday coding, agents, and polished documents/slides. BenchLM now ranks it #4 of 889 (83.92) — ahead of Fable 5.1 — and AA's independent boards show it matching or beating Opus-class agentic rows.
- **Provider / access:** Claude Platform `claude-sonnet-5-5` (Messages API); also on Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud, Microsoft Foundry, and Claude Platform on AWS (verified via Anthropic Models overview docs, re-checked 2026-10-11). No Free ID on OpenCode Zen was verified during research.
- **Release / knowledge:** Released 2026-09-28 (Anthropic announcement); reliable knowledge and training data cutoff June 2026; retirement commitment not sooner than Sept 28, 2027 (models overview).
- **IDs:** `claude-sonnet-5-5` (pinned dateless snapshot); Bedrock `anthropic.claude-sonnet-5-5`; Vertex/Foundry `claude-sonnet-5-5`.
- **Context window:** 1M total tokens with 128K max output (verified via Anthropic Models overview docs; up to 300K output on the Batch API with the `output-300k-2026-03-24` beta header).
- **Modalities:** Text and image input; text output; reasoning yes (adaptive thinking, effort levels Low–Max; apps default Medium, Platform default High; thinking-off uses the new `between_tools` setting); tool calls yes; vision yes; structured outputs supported (a pre-release structured-output bug seen by AA was fixed before launch).
- **Pricing (as of 2026-10-11):** $2 in / $10 out / $0.10 cache reads (cut from $0.20 on 2026-10-07 alongside the Haiku 5.5 launch) / $2.50 cache writes per 1M tokens (same base price as Sonnet 5; docs table re-verified); batch API 50% off; US-only inference at 1.1x. Paid only; zero data retention.
- **Architecture:** Proprietary; hybrid-reasoning model; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA v2.1: **1844 Elo** (Anthropic, pre-release AA run; vs Sonnet 5 1449, Opus 5.5 1846); AA-normalized: **67.0%** (AA model benchmarks — best normalized in this repo's coverage)
- AA-Briefcase v1.1: **1811 Elo** (Anthropic system card; corroborated by benchlm.ai 2026-10-10)
- Terminal-Bench 4.0: **70.6%** (Anthropic — best vendor row in the family; vs Sonnet 5 10.3%, Opus 5.5 66.4%); AA independent: **63.6%** (best independent TB4.0 in this repo's coverage)
- AA AutomationBench-AA: **71.8%** (AA, independent — best measured; vs Opus 5.5's 69.5%); Zapier AutomationBench 1.0.6: **44.7%** (system card)
- AA Harvey LAB-AA v1.0: **93.1%** (AA, independent); Harvey held-out all-pass 10.0% / criterion-pass 93.1% (system card)
- Toolathlon-Verified: **77.8%** (Pass@3 85.2%, avg 31.6 turns — system card)
- DRACO: **87.0%**; Terminal-Bench-Science 0.1: **59.9%** (system card — best measured)
- FrontierCode 1.1 Main: **46.2% at Max / 52.1% at Xhigh** (Anthropic; Extended: **59.1%**)
- CursorBench 4.0: **55.5%** (Anthropic; vs Opus 5.5 57.8%)
- OSWorld 2.1: **80.1% partial** (Anthropic)
- AA-AnalystAgent: **57.5%**; AA GDP.pdf: **25.8%** (AA)
- Tau3-Banking / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **56.0** (AA leaderboard via benchlm.ai, 2026-10-10 — fills the gap the 2026-10-08 pass marked missing; second only to Opus 5.5's 58 in the family, ahead of Fable 5.1's 53 and Opus 5's 51)
- HLE: **64.5% with tools** (Anthropic; vs Opus 5.5 67.7%); **56.9% without tools** (system card); AA independent: **55.0%**
- MLCR-AA: **75.0%** (AA — best measured in this repo); AA-LCR v1.1: **82.7%** (AA); CritPt: **31.4%** (AA)
- AA-Omniscience: **54.0% accuracy / 47.0% non-hallucination row / 32.3 index** (AA)
- ArXivMath Aug 2026: **86.8%** no tools / **95.2%** with tools (system card); GMMLU: **92.1%**; MILU: **91.6%**
- HealthBench raw: **69.4%**; BioMysteryBench: **89.2%** human-solvable / **44.7%** human-difficult (system card)
- FrontierMath v2: Tiers 1–3 **88.8%**, Tier 4 **80.5%** (Epoch AI leaderboard — added 2026-10-16, previously unmeasured; elite — second only to Opus 5.5's 95% Tier 4)
- MazeBench ASCII: **8%**; Hermes Bench **73.5%** / Hermes Index **53.1%** (both added 2026-10-16)
- GPQA Diamond / ARC-AGI: no verified public score found

Coding:

- SWE-bench Pro: **81.3%** (Anthropic Sonnet 5.5 system card via benchlm.ai, updated 2026-10-10 — third behind Opus 5.5's 89.9% and ahead of Fable 5.1's 81.2%); SWE Multilingual: **90.3%**; SWE Multimodal: **54.3%**
- FrontierSWE v2: **61.9%** (Proximal — ahead of Opus 5's 52.0%, behind Opus 5.5's 62.3%)
- DeepSWE: **71.0%** (system card); ProgramBench: **79.7%**
- Terminal-Bench 4.0: **70.6% / 63.6% independent** (as above)
- CursorBench 4.0: **55.5%**; FrontierCode 1.1: **46.2%/59.1%** (as above)
- AA-SciCode: **61.0%** (AA); Bug Hunt Bench: **51.3 fixes** (best measured)
- SWE-bench Verified / LiveCodeBench: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1: **82.7%** (AA — first measured long-context number; fills the 2026-10-08 gap)
- No MRCR/RULER/GraphWalks value found for this model (1M window advertised)

Visual (supplementary):

- Chartography: **61.6%** no tools / **90.2%** with tools (system card — best measured); BenchCAD Vision2Code: **0.747** no tools / **0.963** with tools (best measured); Biomedical image analysis: **72.2%**; OfficeQA: **76.9%**; Design Arena Website: **1322**; first Sonnet to beat Pokémon Red working only from screenshots.

### Normalized scores (1–100)

- **Tool use: 92/100.** (Was 91 on the prior pass.) The second pass adds independent corroboration across the board: AA AutomationBench 71.8% and AA Harvey 93.1% both beat Opus 5.5's rows, GDPval normalized 67.0% is the best measured, and TB4.0 63.6% independent leads the family; the missing Tau3/Claw rows and CursorBench's second place keep it level with Opus 5.5 rather than above.
- **Reasoning: 94/100.** CHANGED from 92 — the AA Index at 56.0 (second in the family, ahead of Fable 5.1's 53 and Opus 5's 51), MLCR 75.0% (best measured), AA-LCR 82.7%, HLE 64.5% (tools), and the newly measured FrontierMath v2 88.8%/80.5% (Epoch, elite) now exceed the frontier refs; still no GPQA/ARC rows cap it below Opus 5.5's 96.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100); AA-LCR 82.7% is the first measured long-context evidence; no ≥98%-retrieval measurement at 512K+ keeps it at the band floor (128K max output noted as caveat).
- **Multimodal: 85/100.** Image input with best-measured vision rows (Chartography 90.2% with tools, BenchCAD 0.963); text-only output and no audio/PDF-in evidence keep it below omni-input models.
- **Coding: 90/100.** (Was 88 on the prior pass.) SWE-bench Pro 81.3%, SWE Multilingual 90.3%, FrontierSWE v2 61.9% (ahead of Opus 5's 52.0%) and the family-best TB4.0 70.6%/63.6% fill the evidence gap; SWE-bench Verified and LiveCodeBench remain unpublished, capping it below Opus 5.5's 92+ tier.
- **Cost efficiency: 76/100.** $2/$10 per 1M with cache reads halved to $0.10 and up to 30% lower cost per task than Sonnet 5 (Balyasny: best quality-to-cost tradeoff of seven models tested) is strong mid-tier pricing for near-Opus quality, but well above budget Flash/Lite tiers and there is no free tier.
- **Overall Score: 91/100.** Mean of the five quality dims per `RULES.md` (Cost excluded): (92 + 94 + 95 + 85 + 90) / 5 = 456/5 = 91.2 → 91 — the 2026-10-16 FrontierMath elite rows lift Reasoning (92→94). Best fit: the default high-volume workhorse that nearly matches Opus 5.5 at half the price; switch to Opus 5.5 or Fable 5.1 for complex, open-ended judgment work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: Anthropic Models overview docs re-checked 2026-10-11, benchlm.ai updated 2026-10-10 citing the Claude Sonnet 5.5 system card + AA/Vals/Cursor/Proximal leaderboards, plus the prior 2026-10-08 pass on the official announcement page; 2026-10-16 re-check: FrontierMath v2 88.8/80.5 (elite), MazeBench 8%, Hermes rows added — Reasoning 92→94, Overall 91 holds (91.2)); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
