# Grok 4.6 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (Particleside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- Name: Grok 4.6 (xAI)
- Short description: xAI's flagship frontier reasoning model for coding, agentic tasks, and knowledge work (per repo `meta.json` short). Released with a 500K-token context window and strong coding performance.
- Provider / access: xAI API (`https://docs.x.ai/developers/grok-4-6`); ID `grok-4.6`. Also available through multiple providers. No Free ID on Zen (noFreeId per repo `meta.json`).
- Release: 2026 (Grok 4.6). Knowledge cutoff: not published by vendor.
- IDs: `grok-4.6` (BenchLM canonical slug `grok-4-6`; repo meta `opencode/grok-4.6`). noFreeId per repo `meta.json`.
- Context window: **500,000** (per `meta.json` and BenchLM).
- Modalities: **Text and image in; text out** (per `meta.json`). Reasoning yes; tool/function calls yes; JSON mode yes.
- Pricing (as of 2026-10-01): **$2 in / $6 out per 1M tokens** (per `meta.json`); $0.50 cached input; doubles to $4/$12 above 200K prompt. 3:1 input/output price ratio band >$1 per 1M.
- Architecture: Proprietary dense transformer (xAI). No parameter count disclosed.

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/grok-4-6`, overall 69.38, rank #22/637) and Vals AI leaderboards (referenced from BenchLM).

Agent / tool use:

- Terminal-Bench 3.0: **26.5%** (FrontierBench leaderboard)
- APEX-Agents: **57.5%** (xAI launch post)
- GDPval-AA: **55.5%** (AA model benchmarks)
- AA Tau3 Banking: **50.7%** (AA leaderboard)
- AA EnterpriseOps-Gym: **48.3%** (AA leaderboard)
- Terminal-Bench 2.1 (Vals): **78.3%** (Vals AI leaderboard)
- AA AutomationBench: **66.7%** (AA leaderboard)
- GDPval-AA (Elo): **1643** (AA leaderboard)
- AA Agentic Index: **53.4%** (AA model benchmarks)
- ApprenticeBench: **13%** (NeoCognition)
- CWE-bench v1: **57.0%** (CWE-bench leaderboard)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44.3%** (BenchLM; rank #22/637)
- AA-GPQA Diamond: **94.9%** (AA leaderboard)
- AA-HLE: **42.9%** (AA model benchmarks)
- AA-Omniscience Index: **30.5%** (AA model benchmarks)
- AA-Omniscience Accuracy: **48.2%** (AA leaderboard)
- AA-Omniscience Hallhallucination Rate: **34.3%** (AA leaderboard — relatively low hallucination)
- GPQA Diamond (Vals): **94.7%** (Vals AI leaderboard)
- MMLU-Pro (Vals): **89.4%** (Vals AI leaderboard)
- CritPt: **17.1%** (AA leaderboard)
- AA-LCR: **80.3%** (AA model benchmarks)
- ARC-AGI-1: **87.00%** (ARC Prize verified results)
- ARC-AGI-2: **67.1%** (ARC Prize verified results)
- ARC-AGI-3: **2.1%** (ARC Prize verified results)

Coding:

- SWE-bench (Vals): **95.6%** (Vals AI leaderboard)
- LiveCodeBench (Vals): **88.2%** (Vals AI leaderboard)
- DeepSWE: **65.9%** (xAI launch post)
- CursorBench 3.2: **70.8%** (Cursor evals)
- FrontierCode 1.1 Extended: **61.3%** (xAI launch post)
- AA-SciCode: **56.5%** (AA leaderboard)
- VulcanBench v3: **87.0%** (VulcanBench leaderboard)
- FrontierSWE v2: **25.3%** (FrontierSWE leaderboard)
- AA Coding Index: **76.8%** (AA model benchmarks)
- CursorBench 4.0: **41.4%** (Cursor evals)
- Bug Hunt Bench: **27 fixes** (Bug Hunt Bench public data)

Multimodal:

- Design Arena Website: **1299** (OpenRouter model benchmarks)

Long context:

- **no MRCR / RULER / GraphWalks** retrieval figure found

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 69.38, #22/637) and Vals AI leaderboards as of 2026-10-01.

- **Tool use: 80/100.** TB-2.1 (Vals) 78.3%, GDPval-AA 55.5% (Elo 1643, near ~1750+ frontier), AA AutomationBench 66.7%, AA Agentic Index 53.4%, APEX-Agents 57.5%, AA Tau3 Banking 50.7%, CWE-bench 57%. Strong AAAE cluster but capped by TB-3.0 26.5%, ApprenticeBench 13%, and no BrowseComp/OSWorld-Verified published.
- **Reasoning: 82/100.** GPQA-D (Vals) 94.7%, AA-GPQA-D 94.9%, AA-LCR 80.3%, ARC-AGI-1 87%. Capped by AA Intelligence Index 44.3 (well below ~60 frontier ref), CritPt 17.1% (poor), AA Omniscience Index 30.5% (low), ARC-AGI-2 67.1% and ARC-AGI-3 2.1% (weak).
- **Context window: 90/100.** Verified **500,000** tokens (per `meta.json` and BenchLM; methodology: 500K–1M = 85-94). Above 256K tier but well below 1M frontier; no retrieval-curve figure published.
- **Multimodal: 67/100.** Verified text+image input, text output only (per `meta.json`; methodology "+image in = 60-70"). Score at midpoint; benchmark-limited (Design Arena Website 1299 points only, no AAA/MMMU-Pro published).
- **Coding: 87/100.** SWE-bench (Vals) 95.6%, LiveCodeBench (Vals) 88.2%, VulcanBench 87%, AA Coding Index 76.8%, CursorBench 3.2 70.8%, DeepSWE 65.9%. Capped by FrontierSWE v2 25.3% and CursorBench 4.0 41.4%.
- **Cost efficiency: 85/100.** $2 in / $6 out per 1M (per `meta.json`) falls in the "$1.25-$3" band → ~84-88 per methodology ~$1.25/$4.25 = ~88. 90% cache discount + $0.50 cached input. Paid-tier, no Free ID.
- **Overall Score: 81/100.** (80 + 82 + 90 + 67 + 87) / 5 = 406 / 5 = 81.2 → 81. **Best-fit:** strong xAI frontier reasoning model with elite coding (SWE-bench Vals 95.6%, LiveCode 88.2%) and knowledge (GPQA 94.9%); cap: low Intelligence Index (44.3), poor CritPt (17.1%), weak multimodal coverage, 500K context (not 1M+); no verified Free ID on Zen.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-01
- Method: public-internet research (BenchLM `https://benchlm.ai/models/grok-4-6` for overall rank/score (69.38, #22/637) and full benchmark tables; Vals AI leaderboards for SWE-bench 95.6%, LiveCodeBench 88.2%, GPQA 94.7%, MMLU-Pro 89.4%; xAI launch post for agentic/coding benchmarks; AA model page for Intelligence Index, GDPval-AA 55.5%, Omniscience data; repo `meta.json` for modalities/context/pricing). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Future sources: add a new file next to this one, e.g. `Grok_4_7.md`, using the same headings.
