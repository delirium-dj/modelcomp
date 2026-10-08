# Claude Opus 5 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-10-08 (UTC) — enrichment pass over the 2026-09-24 report (fresh search 2026-10-08: core scores unchanged; BenchLM coverage expanded from ~40 to 96 rows — DRACO, Legal Agent Bench, VulcanBench, HealthBench/science family, Toolathlon detail added)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship Opus reasoning model (adaptive reasoning, max effort default); superseded as daily-driver by Opus 5.5 (Sept 2026) but still served. Top use case: long-horizon agentic coding and expert knowledge work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API/Bedrock/Vertex/Foundry.
- **Release / knowledge:** 2026-07-24; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-5` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specs).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-10-08):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50 — Zen pricing table live 2026-10-08); Anthropic API same headline.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **84.6%** (BenchLM; TB 3.0 **42.7%**)
- Tau3-Banking (AA harness): **42.1%** (BenchLM)
- GDPval-AA: **1862 Elo** (61.2% normalized, AA — clears the 1750+ bar)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **85.8%** / claim coverage **89.1%** (BenchLM); Toolathlon-Verified **80.6%** (Pass@3 **87.0%**, Pass³ **73.1%**, avg 23.5 turns — new 2026-10-08 detail)
- OSWorld 2.0: **70.6%**; BrowseComp **90.8%** (10-agent prerelease **93.6%** — new); DeepSearchQA **95.0%**; DRACO **88.6%** (new); AA Agentic Index **56.2%**; AA Briefcase Elo **1720**; AA Harvey LAB **93.5%**; EnterpriseOps-Gym **47.5%**; AA-AnalystAgent **53.8%** (BenchLM)
- Legal Agent Bench: criterion-pass **93.74%** (Anthropic harness) / **94.1%** (Harvey held-out); all-pass **23.58%** / **11.7%** (new 2026-10-08 evidence)
- AutomationBench (system card): **26.0%**; ApprenticeBench **36%** (new 2026-10-08 evidence — weak spots)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA harness; Vals 93.4%)
- HLE: **56.3%** no tools / **64.7%** with tools / **54.9%** AA / HLE-Verified **54.4%** (BenchLM)
- ARC-AGI-1/2/3: **97.5% / 90.4% / 30.2%** (BenchLM)
- AA-LCR: **79.3%**; CritPt **29.1%**; MLCR-AA **55.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **50.8** (max effort, AA)
- Omniscience Index **37.1**; Accuracy **60.9%** / Hallucination Rate **60.8%** (BenchLM — high hallucination rate is the main weakness)
- IMO 2026: **42/42**; RiemannBench 60.0%/79.0%; ArXivMath Jun 2026 **90.8%/91.3%** (new); MMLU-Pro 91.6%; GMMLU 92.5%; MILU **92.1%**; INCLUDE **89.8%** (new)
- Science/health family (new 2026-10-08): LABBench2 **84.2%**; HealthBench raw **67.1%** / length-adjusted **57.8%** / Professional **59.8%** (raw 73.4%); BioMysteryBench **90.1%** (human-solvable) / **49.4%** (human-difficult); SpatialBench Verified **72.5%**; SingleCellBench **60.6%**; ProteinGym Hard **47.7%**; Protein Design **42.5%**; Organic chemistry V2 **61.6%**; Protocols **61.1%/78.4%**

Coding:

- SWE-bench Verified: **96%** (BenchLM; Vals harness 97.0%)
- SWE-bench Pro: **79.2%**; SWE Multilingual **89.5%**; SWE Multimodal **59.4%** (BenchLM)
- LiveCodeBench (Vals): **89.0%**
- DeepSWE: **68.8%** (BenchLM)
- SciCode / AA-SciCode: **56.4%**; AA Coding Index **78.0%**; CursorBench 3.2 **70.0%** / 4.0 **46.6%** (new); ProgramBench **93.0%** (episode 1 **83.0%** — new); FrontierSWE v2 **52.0%**; FrontierCode 1.1 Main **53.4%** / Extended **63.6%** (new); VulcanBench v3 **87.0%** / CII v1 **96.4%** (new); PostTrainBench v1.1 **35.0%** (new); Bug Hunt Bench **27 fixes** (new)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA); AA-LCR 79.3% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **84.7%**; Chartography (tools) **83.0%** / no tools **29.6%** (new); GDP.pdf **83.4% / 85.5%**; OfficeQA **78.1%** / OfficeQA Pro **66.9%** (new); BenchCAD Vision2Code **0.366 / 0.821** (new); Design Arena Website **1314** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval 1862 clears the frontier bar, MCP-Atlas 85.8%, Toolathlon 80.6% (Pass@3 87.0%), DRACO 88.6%, LAB criterion-pass ~94% and OSWorld 70.6% are all top-tier; TB2.1 84.6% and Tau3 42.1% sit just under the frontier refs; strict-criterion weak spots (LAB all-pass 23.6%, AutomationBench 26.0%, ApprenticeBench 36%) and missing Claw-Eval cap it.
- **Reasoning: 94/100.** GPQA 93.2%, HLE 56–65%, ARC-AGI-2 90.4%, perfect IMO 2026 42/42, AA Index 50.8 and the new science family (LABBench2 84.2%, BioMystery 90.1%, ArXivMath ~91%) are elite; ARC-AGI-3 30.2%, CritPt 29.1%, ProteinGym 47.7% and a 60.8% hallucination rate keep it under 95.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 84.7% and document scores confirm strong vision, while no-tools Chartography 29.6% shows grounding leans on tools.
- **Coding: 95/100.** SWE-bench Verified 96% is the elite anchor, plus SWE-bench Pro 79.2%, LiveCodeBench 89.0%, SciCode 56.4%, Coding Index 78.0%, VulcanBench 87.0/96.4%; DeepSWE 68.8%, PostTrainBench 35.0% and CursorBench 4.0 46.6% are the sub-frontier markers.
- **Cost efficiency: 57/100.** $5/$25 per 1M on the evaluated tier — between the $3/$15 (≈60) and $10/$50 (≈30) anchors; slow (55 tok/s) and verbose (140M tokens on AA Index) worsen effective value.
- **Overall Score: 89.4/100.** (93 + 94 + 95 + 70 + 95) / 5 = 89.4. Best-fit: premium agentic coding + expert knowledge work; Opus 5.5 now delivers similar quality 40% cheaper.

---

## Signature

- Provided by: **GLM 5.3 (zai/glm-5.3)** — 2026-10-08 (enrichment pass over 2026-09-24 report, user-approved)
- Method: public internet research (Artificial Analysis, BenchLM, Anthropic system card, Vals, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores. September core numbers re-verified unchanged; ~50 new BenchLM rows added — no dimension scores changed.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
