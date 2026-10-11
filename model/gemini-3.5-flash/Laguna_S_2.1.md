# Gemini 3.5 Flash — findings by Laguna S 2.1

- Source: poolside/laguna-s-2.1 (Poolside AI), e.g. Google DeepMind model card, Artificial Analysis, BenchLM
- Date: 2026-10-10 (UTC)
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

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3-5-flash`, Overall 62.52/100, #44/889, 50 of 625 benchmarks, 2026-10-10); Artificial Analysis (`https://artificialanalysis.ai/models/gemini-3-5-flash`, Intelligence Index 33, #85/227 reasoning class); Vals AI; Google DeepMind launch.

Agent / tool use:

- Terminal-Bench 2.1: 76.2% (Google / Google DeepMind launch screenshots)
- Terminal-Bench 2.1 (Vals): 74.2% (Vals AI)
- τ²-bench: 95.3% (BenchLM cross-ref — AI leaderboard)
- GDPval-AA (normalized): 42.2% (Artificial Analysis)
- GDPval-AA (Elo): 1345 (BenchLM)
- MCP Atlas: 83.6% (Google launch)
- OSWorld-Verified: 78.4% (Google launch)
- Toolathlon: 56.5% (Google launch)
- AAA-MMMU-Pro: not verified for this exact ID on BenchLM
- AA Agentic Index: 27.3% (Artifical Analysis)
- Intelligence Index: 33 (#85/227 reasoning, median 26)

Reasoning / knowledge:

- GPQA Diamond: 92.7% (Vals AI) / AA-GPQA Diamond: 92.2% (Artificial Analysis)
- HLE: 40.2% (Google launch) / AA-HLE: 42.7% (Artificial Analysis)
- GPQA: 92.2% (Artificial Analysis)
- MMLU-Pro (Vals): 89.5% (Vals AI)
- AA Intelligence Index: 33 (AA v4.3.2)
- AA-LCR: 69.3% (Artificial Analysis)
- AA-Omniscience Accuracy: 51.9% (Artificial Analysis)
- AA-Omniscience Index: 21.2% (Artificial Analysis)
- CritPt: 13.1% (Artificial Analysis)

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
- Design Arena Website: 1271 (OpenRouter)

Long context:

- Context window: 1,000,000 tokens (≥1M tier; ≈1,500 A4 pages)
- MRCR v2 64K-128K: 83.1% (BenchLM)
- MRCR v2 128K-256K: 87.5% (BenchLM)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM and AA as of 2026-10-10.

- **Tool use: 82/100.** Terminal-Bench 2.1 76.2% (below ~88% frontier ref), GDPval-AA 42.2% (normalized; Elo 1345, below 1750 frontier), MCP Atlas 83.6%, OSWorld-Verified 78.4%; Intelligence Index 33 (mid). Strong τ²-bench 95.3% offsets weak GDPval. Capped by GDPval-AA 42.2% and no TB-4.0.
- **Reasoning: 83/100.** GPQA Diamond 92.7% (Vals) / 92.2% (AA) — at frontier ≥90% threshold; HLE 40.2% (at 40% threshold); MMLU-Pro 89.5% (Vals); AA-LCR 69.3%; ARC-AGI-1 92.5% (ARC Prize). Intelligence Index 33 (mid-tier) caps the score below frontier 90-100 range. CritPt 13.1% is weak.
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier). MRCR v2 64K-128K 83.1%, 128K-256K 87.5%; no ≥98% retrieval at 512K+ figure for 100.
- **Multimodal: 90/100.** Verified text, image, speech, and video input, text output (+image +video +speech-in); CharXiv 84.2%, AA-MMMU-Pro 84.3%. Audio input confirmed via AA + Google launch.
- **Coding: 80/100.** SWE-bench (Vals) 78.8% + LiveCodeBench (Vals) 87.6% (excellent) + AA Coding Index 70.1% + AA-SciCode 53.9%; SWE-bench Pro 55.1%; no DeepSWE or SWE-bench Verified published. HumanEval 94.1% (prior data). Capped by no SWE-bench Verified and no DeepSWE.
- **Cost efficiency: 75/100.** Cost-effective pricing ($1.50 in / $9.00 out per 1M tokens).
- **Overall Score: 86/100.** (82 + 83 + 95 + 90 + 80) / 5 = 430 / 5 = 86.0 → 86. Fast 1M-context multimodal reasoning model with strong coding (LiveCodeBench 87.6%) and reasoning (GPQA 92.7%, HLE 40.2%); cap: Intelligence Index 33 (mid) and GDPval-AA 42.2% below frontier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model page for Intelligence Index 33 and cost-per-task; Google DeepMind launch for modalities/specs; Vals AI for GPQA/HLE/LiveCodeBench). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 62.52/100, #44/889, 50 of 625 benchmarks, 2026-10-10); AA model page (Intelligence Index 33, #85/227 reasoning); Google DeepMind Gemini 3.5 Flash launch (modalities, pricing, architecture); Vals AI (GPQA, HLE, LiveCodeBench, SWE-bench).
- Future sources: add a new file next to this one using the same headings.

---
