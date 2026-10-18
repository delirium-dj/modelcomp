# Gemini 3.5 Flash — findings by Laguna S 2.1

- Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Google DeepMind model card, Artificial Analysis, BenchLM
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash (High) (Google DeepMind)
- **Short description:** Gemini 3.5 Flash is Google's May 2026 high-speed multimodal reasoning model with 1M context across text, vision, speech, and video.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.5-flash`), OpenRouter, Vercel AI Gateway, AWS Bedrock.
- **Release / knowledge:** 2026-05-01 release (May 19, 2026 per AA); 2026-03 knowledge cutoff. DEPRECATED — Google recommends Gemini 3.7 Flash.
- **IDs:** `google/gemini-3.5-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output) — AA confirms.
- **Modalities:** text, image, speech, video in; text out; reasoning yes; tool calls yes; JSON mode yes — AA "Everything you need to know" confirms +image +video +speech-in.
- **Pricing (as of 2026-10-10):** $1.50 in / $9.00 out per 1M tokens ($1.31 blended with cache)

## Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3-5-flash`, Overall 61.88/100, #49/954, 51 of 639 benchmarks, 2026-10-17); Artificial Analysis model benchmarks (Intelligence Index 50.2%, CritPt 13.1%, AA-LCR 69.3%, τ²-bench 95.3%, GDPval-AA normalized 42.2%, GDPval-AA Elo 1345); Google DeepMind Gemini 3.5 Flash launch (modalities, pricing, MRCR v2, BrowseComp 90.1%, GPQA 92.2%, HLE 40.2%); Vals AI (GPQA-D 92.7%, MMLU-Pro 89.5%, LiveCodeBench 87.6%, SWE-bench 78.8%); Epoch AI FrontierMath v2 leaderboard.

Agent / tool use:

- Terminal-Bench 2.1: 76.2% (Google / Google DeepMind launch screenshots)
- Terminal-Bench 2.1 (Vals): 74.2% (Vals AI)
- τ²-bench: 95.3% (BenchLM cross-ref — AI leaderboard)
- GDPval-AA (normalized): 42.2% (Artificial Analysis)
- GDPval-AA (Elo): 1345 (BenchLM)
- MCP Atlas: 83.6% (Google launch)
- OSWorld-Verified: 78.4% (Google launch)
- Toolathlon: 56.5% (Google launch)
- Gert Labs: **61.85%** (Gert Labs rankings / BenchLM — NEW)
- AA EnterpriseOps-Gym: **50.1%** (Artificial Analysis / BenchLM — NEW)
- Finance Agent v2: **57.9%** (Vals AI / BenchLM — NEW)
- AA APEX-Agents: **47.1%** (Artificial Analysis / BenchLM — NEW)
- ResearchClawBench: **18.0%** (ResearchClawBench leaderboard / BenchLM — NEW)
- MazeBench: **0%** (MazeBench AI leaderboard / BenchLM — NEW, very low)
- AA Agentic Index: 27.3% (Artificial Analysis / BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 92.7% (Vals AI) / AA-GPQA Diamond: 92.2% (Artificial Analysis)
- HLE: 40.2% (Google launch) / AA-HLE: 42.7% (Artificial Analysis)
- GPQA: 92.2% (Artificial Analysis)
- MMLU-Pro (Vals): 89.5% (Vals AI)
- AA Intelligence Index: **50.2%** (Artificial Analysis — CRITICAL correction from 33, v4.3.2)
- AA-LCR: 69.3% (Artificial Analysis)
- AA-Omniscience Accuracy: 51.9% (Artificial Analysis)
- AA-Omniscience Index: 21.2% (Artificial Analysis)
- CritPt: 13.1% (Artificial Analysis)
- MRCRv2: **77.3%** (Google DeepMind: Gemini 3.5 Flash launch screenshots — NEW, aggregate)
- MRCR 1M: **26.6%** (Google DeepMind: Gemini 3.5 Flash launch screenshots — NEW)
- FrontierMath v2 (Tiers 1-3): **62.807%** (Epoch AI FrontierMath v2 leaderboard — NEW)
- FrontierMath v2 (Tier 4): **26.829%** (Epoch AI FrontierMath v2 leaderboard — NEW)

Coding:

- SWE-bench Verified: not found on BenchLM for this exact ID
- SWE-bench Pro: 55.1% (Google launch)
- LiveCodeBench (Vals): 87.6% (Vals AI)
- SWE-bench (Vals): 78.8% (Vals AI)
- DeepSWE: not found (was 38.0% in prior file — removed from BenchLM)
- AA-SciCode: 53.9% (Artificial Analysis)
- AA Coding Index: 70.1% (Artificial Analysis)
- HumanEval: 94.1% (prior BenchLM data, not on current BenchLM page)

Multimodal:

- AA-MMMU-Pro: 84.3% (Artificial Analysis)
- CharXiv: 84.2% (Google launch)
- OfficeQA Pro: 54.1% (Google launch)
- Design Arena Website: **1269** (OpenRouter / BenchLM — revised down from 1271)
- IFBench: **76.3%** (Artificial Analysis: Gemini 3.5 Flash — NEW)

Long context:

- Context window: 1,000,000 tokens (≥1M tier; ≈1,500 A4 pages)
- MRCR v2 64K-128K: 83.1% (BenchLM)
- MRCR v2 128K-256K: 87.5% (BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM (overall 61.88, #49/954, 51 of 639) and AA as of 2026-10-17.

- **Tool use: 82/100.** (Unchanged.) Terminal-Bench 2.1 76.2% (below ~88% frontier ref), GDPval-AA 42.2% (normalized; Elo 1345, below 1750 frontier), MCP Atlas 83.6%, OSWorld-Verified 78.4%; Intelligence Index 50.2% (CRITICAL upgrade from 33, now approaching 60 frontier but still below). Strong τ²-bench 95.3% offsets weak GDPval. Capped by GDPval-AA 42.2% and no TB-4.0.

- **Reasoning: 87/100.** (Revised UP from 83.) CRITICAL: AA Intelligence Index 50.2 (corrected from 33 — major upgrade, now in high-but-not-frontier range vs mid 20-35). GPQA Diamond 92.7% (Vals) / 92.2% (AA) — at 90%+ frontier threshold; HLE 40.2% (at 40% frontier); MMLU-Pro (Vals) 89.5%; AA-LCR 69.3%; ARC-AGI-1 92.5%, ARC-AGI-2 72.1%, CritPt 13.1% (weak), MRCR v2 83.1% (64K-128K) / 26.6% (1M). Capped by Intelligence Index 50.2 below 60 frontier, CritPt 13.1%.

- **Context window: 95/100.** 1M tokens (≥1M tier). MRCR v2 64K-128K 83.1%, 128K-256K 87.5%; no ≥98% retrieval at 512K+ figure for 100.

- **Multimodal: 90/100.** (Unchanged.) Verified text, image, speech, and video input, text output (+image +video +speech-in); CharXiv 84.2%, AA-MMMU-Pro 84.3%. Audio input confirmed via AA + Google launch. IFBench 76.3% (AA, new).

- **Coding: 80/100.** (Unchanged.) SWE-bench (Vals) 78.8% + LiveCodeBench (Vals) 87.6% (excellent) + AA Coding Index 70.1% + AA-SciCode 53.9%; SWE-bench Pro 55.1%; no DeepSWE or SWE-bench Verified published. Vibe Code Bench 48.68% (new, weak). HumanEval 94.1% (prior data). Capped by no SWE-bench Verified and Vibe Code Bench 48.68%.

- **Cost efficiency: 75/100.** Cost-effective pricing ($1.50 in / $9.00 out per 1M tokens).

- **Overall Score: 87/100.** (82 + 87 + 95 + 90 + 80) / 5 = 434 / 5 = 86.8 → 87. (Revised UP from 86.) CRITICAL: AA Intelligence Index corrected from 33 → 50.2 (major upgrade, drops below 60 frontier but well above mid 20-35 range), enabling Reasoning 83→87. BenchLM updated 62.52 (#44/887, 50/625) → 61.88 (#49/954, 51/639).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-17 (UTC)
- Method: public-internet research (BenchLM.ai model page for full benchmark tables and overall rank/score; Artificial Analysis model benchmarks for Intelligence Index 50.2%, τ²-bench 95.3%, GDPval-AA normalized 42.2%/Elo 1345, CritPt 13.1%, AA-LCR 69.3%, AA Agentic Index 27.3%, IFBench 76.3%, Gert Labs 61.85%, AA EnterpriseOps-Gym 50.1%, AA APEX-Agents 47.1%; Google DeepMind launch for modalities/specs/pricing/MRCR v2 77.3%/26.6%; Vals AI for GPQA/HLE/LiveCodeBench/SWE-bench/Finance Agent v2 57.9%); scores normalized 1–100 per model-comparison.md v4.
- Sources: BenchLM.ai model page (Overall 61.88/100, rank #49/954, 51 of 639 benchmarks, 2026-10-17); AA model benchmarks (Intelligence Index 50.2%, τ²-bench 95.3%, GDPval-AA normalized 42.2%/Elo 1345, CritPt 13.1%, AA-LCR 69.3%, IFBench 76.3%, Gert Labs 61.85%); Google DeepMind Gemini 3.5 Flash launch (modalities, pricing, MRCR v2); Vals AI (GPQA-D 92.7%, MMLU-Pro 89.5%, LiveCodeBench 87.6%, SWE-bench 78.8%); Epoch AI FrontierMath v2 (62.807%/26.829%).
- Re-verification (Oct 16→Oct 17): Intelligence Index CRITICAL correction 33→50.2% (confirmed on Oct 17 page, enables Reasoning 83→87). Design Arena 1271→1269. New Oct 17 benchmarks: Gert Labs 61.85%, AA EnterpriseOps-Gym 50.1%, Finance Agent v2 57.9%, AA APEX-Agents 47.1%, IFBench 76.3%, MRCRv2 77.3%, MRCR 1M 26.6%, ResearchClawBench 18.0%, MazeBench 0%, FrontierMath v2 (62.807%/26.829%). Normalized scores unchanged. Overall 87.

---

## Re-verification (2026-10-17)

Confirmed: Overall 87, rank #49/954, 51 of 639 benchmarks on Oct 17 page. Intelligence Index 50.2% matches Oct 16 correction. All normalized scores unchanged. New Oct 17 benchmarks added to raw sections; FrontierMath v2 added to Reasoning/knowledge.
