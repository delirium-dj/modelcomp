# Claude Opus 5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (legacy Opus tier; successor to Opus 4.8; new default on Claude Max at launch)
- **Short description:** Anthropic's July 2026 Opus: complex agentic coding and enterprise work at half of Fable 5's per-token price — stronger self-verification, iteration and long-horizon completion, plus gains in scientific research (chemistry, biology, bioinformatics) and visual artifact generation. The 2026-10-11 second pass added the Opus 5 system card rows and AA's independent index: IMO 2026 42/42, GDPval-AA 1862 (still above Opus 5.5's 1846), Toolathlon 80.6%. AA now flags the model as deprecated in favor of Opus 5.5.
- **Provider / access:** Anthropic Messages API (`claude-opus-5`; Vertex `claude-opus-5`; Bedrock `anthropic.claude-opus-5`); also Claude Platform on AWS, Google Cloud, Microsoft Foundry, Claude Code (8 API providers on AA). Messages (not Chat Completions) API. Model IDs are pinned snapshots.
- **Release / knowledge:** released 2026-07-24 (AA confirms Jul 24, 2026). Reliable knowledge cutoff **May 2026**.
- **IDs:** `claude-opus-5` (API/Vertex), `anthropic.claude-opus-5` (Bedrock). No API free tier; chat-plan access via Claude Max (default model at launch).
- **Context window:** 1,000,000 tokens with up to 128K output on the synchronous Messages API; extended output up to **300K tokens** via the Message Batches API (`output-300k-2026-03-24` beta header — Anthropic's models-overview table lists Opus 5 among the 300K-batch-capable models; AA confirms 1M context) — verified 2026-10-11.
- **Modalities:** text + image (vision) in; text out. Adaptive thinking with effort parameter (defaults to high on the API and Claude Code).
- **Pricing (as of 2026-10-11):** $5.00 in / $25.00 out per 1M (AA confirms; blended $3.85) — same rate as Opus 4.8 despite the tier upgrade. Fast mode at ~2× base price for ~2.5× faster output. No free API tier.
- **Architecture:** proprietary, parameters undisclosed; proprietary transformer with adaptive thinking.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (per-model agent harness): **86.7%** with Claude Code (max) — 1st in Meta's 2026-08-05 launch table ahead of Muse Spark 1.2 82.9, GPT-5.6 Terra 81.8 (Meta launch table via ai-tldr); Vals independent: **84.6%**
- Toolathlon-Verified: **80.6%** (Pass@3 87.0%, avg 23.5 turns — Anthropic Opus 5 system card via benchlm.ai, updated 2026-10-10)
- GDPval-AA: **1862 Elo** (system card; AA-normalized 61.2%) — still the highest GDPval row in this repo, above Opus 5.5's 1846
- AA Harvey LAB-AA v1.0: **93.5%** (AA, independent); Harvey held-out all-pass 11.7% / criterion-pass 94.1% (system card)
- MCP Atlas: **85.8%** (claim coverage 89.1% — system card; fills the MCP-Atlas gap the 2026-10-05 pass marked missing)
- OSWorld 2.0: **70.6%** (system card); ApprenticeBench (GUI): **36%** (NeoCognition, independent)
- BrowseComp: **90.8%** (system card; 10-agent prerelease 93.6%)
- AA Agentic Index: **56.2%** (AA, independent); AA-AnalystAgent: **53.8%**
- AutomationBench: **26.0%** (system card — weak spot vs Opus 5.5's 40.0%)
- Terminal-Bench 3.0: **42.7%** (frontierbench.ai leaderboard)
- DeepSWE 1.1: **65.0%** (Meta launch table) / **68.8%** (system card)
- Meta Internal Coding Bench: **79.4%** — 1st (Meta launch table)

Reasoning / knowledge:

- IMO 2026: **42/42** (system card via benchlm.ai — perfect score)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.4%**; ARC-AGI-3: **30.2%** (system card — ARC-AGI-2 above most of the field, just under Opus 5.5's 91.7%)
- HLE: **64.7%** with tools / **56.3%** without (system card); AA independent HLE: **54.9%**
- GPQA Diamond: **93.2%** (AA independent; Vals 93.4%) — fills the gap the 2026-10-05 pass marked missing
- Artificial Analysis Intelligence Index v4.3.2: **51, #16/227** (AA model page, 2026-10-11; BenchLM normalized 50.8%)
- MMLU-Pro: **91.6%** (Vals, independent)
- AA-LCR: **79.3%**; MLCR-AA: **55.6%**; CritPt: **29.1%** (AA)
- AA-Omniscience: **60.9% accuracy / 60.8% hallucination rate / 37.1 index** (AA)
- RiemannBench: **60.0%** no tools / **79.0%** with tools; ArXivMath Jun 2026: **90.8%/91.3%** (system card)
- HealthBench raw: **67.1%**; DeepSearchQA: **95.0%**; DRACO: **88.6%** (system card)

Coding:

- SWE-bench Verified: **96%** (Anthropic Opus 5 system card via benchlm.ai) — consistent with the Vals AI leaderboard's **97.0%** (#1 of 86 models, vals.ai; DataCamp roundup 2026-09-25) that the 2026-10-05 pass cited
- SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%**; SWE Multimodal: **59.4%** (system card — fills the SWE-Pro gap)
- FrontierCode 1.1 Main: **53.4%**; Extended: **63.6%**; FrontierSWE v2: **52.0%** (Proximal); ProgramBench: **93.0%**
- LiveCodeBench: **89.0%** (Vals — fills the LiveCodeBench gap); AA Coding Index: **78.0%** (AA); AA-SciCode: **56.4%**
- CursorBench 3.2: **70.0%**; CursorBench 4.0: **46.6%** (Cursor evals)
- VulcanBench v3: **87.0%**; VulcanBench CII v1: **96.4%** (VulcanBench tech report)
- PostTrainBench v1.1: **35.0%**; Bug Hunt Bench: **27.0 fixes**

Long context:

- Window: **1M tokens / 128K out (300K via batches beta)** (Anthropic docs table + AA, verified 2026-10-11)
- AA-LCR v1.1: **79.3%** (AA — first measured long-context reasoning number)
- MRCR/RULER/GraphWalks at window length: no verified public score found for Opus 5 specifically

Multimodal:

- AA-MMMU-Pro: **84.7%** (AA); Chartography: **83.0%** with tools / **29.6%** without (system card); BenchCAD Vision2Code: **0.821** with tools / **0.366** without; GDP.pdf: **85.5%** with tools (system card)
- Gray Swan IPI (15 attempts): **4.6%** (competitor-reported — Gemini 4 Argon launch chart)

### Normalized scores (1–100)

- **Tool use: 96/100.** The second pass strongly corroborates the top agentic package: GDPval-AA 1862 (still the repo's best), Toolathlon 80.6% (> Opus 5.5's 77.8%), AA Harvey LAB 93.5%, MCP Atlas 85.8%, BrowseComp 90.8%, OSWorld 70.6%; AutomationBench 26.0% and ApprenticeBench 36% are the blemishes that keep it off 98.
- **Reasoning: 91/100.** Was 88 on 2026-10-05, capped by absent evidence; the system card + AA now supply IMO 2026 42/42, ARC-AGI-2 90.4%, GPQA 93.2%, HLE 64.7% (tools) and AA Index 51 (#16/227) — elite but a step below Opus 5.5 (94: Index 58, HLE 67.7, ARC 91.7) and GPT-6 Astra (GPQA 96), so it lands just under 92.
- **Context window: 100/100.** 1M input with a 128K standard output and 300K batch output — the most generous output package measured here (re-verified against the current Anthropic docs table); AA-LCR 79.3% is solid but retrieval-at-window remains unpublished.
- **Multimodal: 82/100.** Text + vision in, text out; measured vision now backs it (MMMU-Pro 84.7%, Chartography 83.0% with tools, SWE Multimodal 59.4%); no audio/video input keeps it out of the 85+ band.
- **Coding: 96/100.** SWE-bench Verified 96–97% (system card + Vals #1 of 86) sits on top of SWE-bench Pro 79.2%, FrontierSWE v2 52.0%, FrontierCode 53.4/63.6, LiveCodeBench 89.0% and ProgramBench 93.0%; only CursorBench 4.0 46.6% and the missing 98+-class rows keep it from 98.
- **Cost efficiency: 20/100.** $5/$25 flagship pricing with no free API route — same expensive tier as Opus 4.6/4.8; Fast mode doubles it; AA adds $5.86/task and a notably slow 53.1 tok/s with 66s TTFT, deepening the poor value.
- **Overall Score: 93.0/100.** Was 92.4 on 2026-10-05. Mean of the five quality dims per `RULES.md` (Cost excluded): (96 + 91 + 100 + 82 + 96) / 5 = 465/5 = 93.0 — raised on the 2026-10-11 second pass because the newly published system card/AA evidence (IMO 42/42, ARC-AGI-2 90.4%, GPQA 93.2%, Toolathlon 80.6%) converts the reasoning score from positioning-based to measurement-based. Best fit: the no-compromise agentic-coding Opus for pinned Anthropic workflows — with the strongest independent SWE-bench Verified and GDPval readings in this repo; Fable 5.1 remains the capability ceiling at 2× the price, and Opus 5.5 now supersedes it at 20% less.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥4 independent sources: artificialanalysis.ai model page, benchlm.ai updated 2026-10-10 citing the Anthropic Opus 5 system card, Vals AI leaderboards, Cursor/Proximal/frontierbench leaderboards via benchlm.ai, plus the prior 2026-09-18/10-05 passes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Claude_Opus_4_8.md`, using the same headings.
