# Seed 2.0 Pro — findings by DeepSeek 4.1 Flash

- Source: ByteDance/Seed 2.0 Pro (`ByteDance/Seed-2.0-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (default version, released 2026-02-14; official tables label the checkpoint `Seed2.0 Pro (0215)`)
- **Short description:** ByteDance's general-purpose agent model for long-chain reasoning, complex workflows, multimodal understanding, instruction following and coding — the largest of three Seed2.0 tiers (Pro / Lite / Mini). A later Seed 2.1 Pro (scored 76.34 on llmboard vs this model's 68.2) supersedes it, so this is one generation back. Not an alias of Seed 2.0 Lite (which gained audio input in its 0428 update) or Seed 2.0 Mini.
- **Provider / access:** ByteDance Seed / Volcengine Ark; six tracked offerings use IDs `ByteDance/Seed-2.0-pro`, `bytedance/dola-seed-2.0-pro`, `seed-2.0-pro` and `volcengine/doubao-seed-2.0-pro`. OpenCode Zen route `opencode/seed-2.0-pro`.
- **Release / knowledge:** released 2026-02-14 (llmboard release record; the 0215 checkpoint appears on ByteDance's model card). **Knowledge cutoff: 2024-01-01 (llmboard)** — over two and a half years stale at the time of writing, a real limitation for knowledge-heavy work.
- **IDs:** `ByteDance/Seed-2.0-pro` (global) and the Volcengine Ark `doubao` variants; Zen `opencode/seed-2.0-pro`. No Free ID verified on the evaluated route → cost scored on tracked third-party pricing (no official PAYG list price is published).
- **Context window:** 256K tokens with 131.1K max output tokens.
- **Modalities:** image, text and video in → text out; proprietary licence, no open weights; parameter count undisclosed.
- **Pricing (as of 2026-09-24):** no official standard PAYG price published; tracked rates are **$0.50 in / $3.00 out** per 1M (Merge Gateway, Requesty), $0.63/$3.79 (EmpirioLabs), $0.67/$3.36 (Ofox), with the lowest tracked offer at **$0.475 / $2.37** via Volcengine Ark.
- **Architecture:** proprietary; parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.30%** (rank 26 of 67, 62nd percentile — llmboard, evidence class C, evaluated 2026-09-23)
- Terminal-Bench (any version), Tau3-Banking, τ²-bench, GDPval-AA, OSWorld, Toolathlon and MCP-Atlas: **no verified public score found**
- Official card (Seed2.0 Pro 0215) evidences agent-adjacent strengths only through GUI/video suites and notes agent capability qualitatively — no numeric tool-harness result was exposed for Pro

Reasoning / knowledge:

- GPQA: **88.90%** (rank 35 of 250, 86th percentile — llmboard; the label is "GPQA", not explicitly the Diamond subset)
- AIME 2025: **98.30%** (rank 13 of 122, 90th percentile); AIME 2026: **94.20%** (rank 11 of 26)
- HLE, LCR/MRCR, CritPt, MMLU-Pro and any artificial-intelligence index: **no verified public score found**
- Official card (0215): MMMU_Pro **78.2**, HiPhO **74.1**, MedXpertQA-MM **68.1**, SimpleVQA **71.4**, CharXiv-DQ **93.5** / CharXiv-RQ **80.5**, ERQA **68.5**, VLMBias **77.4**, BabyVision **60.6**, WorldVQA **49.9**

Multimodal (from ByteDance's official card, Seed2.0 Pro 0215):

- VideoMMMU **86.9**, MMVU **78.2**, VideoSimpleQA **71.9**, SciVideo **52.3**, VideoReasonBench **77.8**, VideoHolmes **67.4**, Minerva **66.5**, TVBench **75.0**, TOMATO **59.9**, EgoTempo **71.8**, MotionBench **75.2**, ContPhy **67.4**, VideoMME **89.5**, LongVideoBench **80.3**, LVBench **76.4**, OVBench **69.2**, ODVBench **72.5**, OVOBench **77.0**, ViSpeak **78.5**, CrossVid **61.0**, OmniVideoBench **49.5**, AVMeme **61.2**, JointAVBench **62.3**, WorldSense **57.0**

Coding:

- SWE-bench Verified: **76.50%** (rank 31 of 116, 74th percentile — llmboard, evidence class C, evaluated 2026-09-23)
- LiveCodeBench v6: **87.80%** (rank 9 of 66, 88th percentile — llmboard)
- SWE-bench Pro, DeepSWE, SciCode, Vibe Code Bench: **no verified public score found**

Arenas (llmboard, evaluated 2026-09-13):

- LM Arena Text **1447.59** (rank 39/214), Text Factuality **1418.29**, LM Arena Vision **1274.64** (rank 28/111), Vision Style Control **1256.70**

Long context:

- No long-context retrieval evaluation (MRCR / RULER / AA-LCR) was found for this ID; the 256K window and 131.1K output cap are documented specifications without a measured retention figure.

### Normalized scores (1–100)

- **Tool use: 72/100.** BrowseComp 77.30% is an excellent information-seeking score, but every tool-use harness the methodology anchors on (Terminal-Bench, Tau3-Banking, GDPval-AA, OSWorld, Toolathlon) had no published result for this ID, so the score rests on one benchmark plus ByteDance's qualitative agent claims.
- **Reasoning: 86/100.** GPQA 88.90% with AIME 2025 at 98.30% and AIME 2026 at 94.20% is near-frontier maths and science; held below 90 by the missing HLE/CritPt/index rows and by an unusually stale knowledge cutoff (2024-01-01) that drags knowledge-heavy reasoning down in practice.
- **Context window: 74/100.** 256K input sits in the 200K–500K band (65–84) with a generous 131.1K output allowance; no retention measurement exists to push it higher.
- **Multimodal: 85/100.** Image and video in → text out is the "+video/PDF in = 75–90" band, and the video evidence is unusually deep (VideoMME 89.5, LongVideoBench 80.3, VideoMMMU 86.9, MMMU_Pro 78.2, CharXiv-DQ 93.5); scored at the top of the band rather than 90+ because there is no audio input on the Pro tier (only Lite gained it) and no non-text output.
- **Coding: 83/100.** SWE-bench Verified 76.50% and LiveCodeBench v6 87.80% (rank 9 of 66) are genuinely strong; capped by the absence of SWE-bench Pro, DeepSWE, SciCode and Vibe Code Bench rows, so it cannot claim the top band on evidence.
- **Cost efficiency: 90/100.** With no official list price, tracked rates of $0.50/$3.00 (and as low as $0.475/$2.37 via Volcengine Ark) land just below the ~$0.60/$2.20 ≈ 92 anchor — excellent value, though the score stays provisional until ByteDance publishes an official PAYG price.
- **Overall Score: 80/100.** (72 + 86 + 74 + 85 + 83) / 5 = 80.0 → **80**. Best fit: cheap, video-heavy multimodal coding and long-chain agent work — strong SWE/AIME numbers at mid-tier prices, with two real caveats: a 2024 knowledge cutoff and no official price sheet.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-23 (UTC)
- Method: public internet research (ByteDance Seed official Seed2.0 model page and card for the 0215 checkpoint benchmark tables, llmboard.ai model page for release date, specs, pricing, licence and the 11-row benchmark/arena tables); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
