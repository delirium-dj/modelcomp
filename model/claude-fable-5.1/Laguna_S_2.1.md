# Claude Fable 5.1 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1 (Anthropic; Mythos-class flagship, above the Opus class)
- **Short description:** Anthropic's top-tier model for demanding reasoning and long-horizon agentic work; gains on agentic terminal/scientific coding over Fable 5 and Opus 5, with cheaper cache reads. Paid API/Claude plans only (no free tier).
- **Provider / access:** Anthropic. API model ID `claude-fable-5-1`; also Bedrock, Google Cloud, Microsoft Foundry, Claude Platform on AWS. Function-calling + JSON/structured outputs; extended thinking (Adaptive, always on), per-message effort (high).
- **Release / knowledge:** Released 1 September 2026. Knowledge/training cutoff: June 2026 (Anthropic Platform docs, verified 2026-09-11).
- **IDs:** `anthropic/claude-fable-5-1` (Anthropic). noFreeID — no Zen Free ID; paid Claude/API accounts only.
- **Context window:** 1,000,000 input tokens / 128,000 output tokens (Anthropic docs; ≥1M tier; 128K output exceeds the 64K caveat).
- **Modalities:** Text, image and PDF input; text output (no audio/video).
- **Pricing (as of 2026-09-23):** $10.00 / $50.00 per 1M in/out (paid API); cache reads $0.25/MTok (75% cheaper than Fable 5); 5-min cache write $12.50, 1-hour $20; Batch API 50% off. No free tier on Anthropic's own API (noFreeID; some aggregators list $0 via third parties).
- **Architecture:** Proprietary (closed weights); param count undisclosed. Same weights as Claude Mythos 5.1 (relaxed safeguards, vetted US orgs only).

### Raw benchmarks found

> Verified public numbers from BenchLM (`https://benchlm.ai/models/claude-fable-5-1`, overall 89.45, rank #3/889, 86 of 625 benchmarks) and Artificial Analysis. 86 benchmark rows verified across 3 independent sources.

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (Anthropic launch, 1 Sep 2026 / BenchLM)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic launch / BenchLM)
- AA Terminal-Bench 4.0: **59.6%** (Artificial Analysis / BenchLM)
- aaTerminalBench21: **84.3%** (Artificial Analysis / BenchLM)
- GDPval-AA (Elo): **1758** (Anthropic: Claude Fable 5.1 system card / BenchLM — exceeds ≥1750 frontier threshold!)
- GDPval-AA (normalized): **66.8%** (Artificial Analysis model benchmarks / BenchLM)
- AA Briefcase (Elo): **1710** (Anthropic: Claude Fable 5.1 system card / BenchLM)
- AA Agentic Index: **56.2%** (Artificial Analysis model benchmarks / BenchLM)
- AA ITBench: **38.2%** (Artificial Analysis / BenchLM)
- OSWorld 2.0: **66.9%** (Anthropic: Claude Fable 5.1 system card / BenchLM)
- AutomationBench: **51.3%** (Anthropic / BenchLM)
- GDP.pdf: **21.8%** (Artificial Analysis / BenchLM)
- ApprenticeBench: **36%** (NeoCognition / BenchLM)
- Toolathlon / MCP-Atlas: no verified public score found
- SWE-bench Verified: **95.0%** (Anthropic: Claude Fable 5.1 system card / BenchLM — NEW: prior Sep 23 file had "not published")
- SWE-bench Pro: **81.2%** (Anthropic: Claude Fable 5.1 system card / BenchLM — NEW)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard / BenchLM — NEW)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — NEW)
- DeepSWE: **67.4%** (Anthropic: Claude Fable 5.1 system card / BenchLM — NEW, below 74% frontier)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (Anthropic / BenchLM — ≥90 frontier threshold)
- GPQA Diamond (Vals): **93.2%** (Vals AI leaderboard / BenchLM)
- AA-GPQA-D: **93.7%** (Artificial Analysis / BenchLM)
- HLE w/ tools: **65%** (Anthropic: Claude Fable 5.1 system card / BenchLM — well above 40% frontier)
- HLE w/o tools: **56.3%** (Anthropic: Claude Fable 5.1 system card / BenchLM)
- AA-HLE: **54.9%** (Artificial Analysis / BenchLM)
- AA Intelligence Index: **53** (Artificial Analysis — confirmed stable from Sep 23; tied 1st with GPT-6 Astra)
- AA-LCR: **79.3%** (Artificial Analysis / BenchLM)
- CritPt: **29.1%** (Artificial Analysis / BenchLM)
- MLCR-AA: **55.6%** (Artificial Analysis / BenchLM)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM)
- ARC-AGI-2: **91.7%** (ARC Prize verified results / BenchLM)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard / BenchLM)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM)
- BioMysteryBench (human-solvable): **90.1%** (Anthropic / BenchLM)
- ArXivMath (tools): **96.9%** (Anthropic / BenchLM)
- AA-Omniscience Index: **37.1%** (Artificial Analysis)
- AA-Omniscience Accuracy: **60.9%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **58.6%** (Artificial Analysis model benchmarks / BenchLM)

Multimodal:

- Chartography (tools): **89.0%** (Anthropic / BenchLM)
- Chartography (no tools): **29.6%** (Anthropic / BenchLM)
- OfficeQA: **78.1%** (Anthropic / BenchLM)
- OfficeQA Pro: **66.9%** (Anthropic / BenchLM)
- Design Arena Website: **1314** (OpenRouter / BenchLM)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM)
- AA-Video-MME: no verified public score found

Long context:

- Context window: 1,000,000 input tokens (1M) / 128,000 output tokens (verified via Anthropic platform docs)
- MRCR / RULER: no verified public score found for this exact ID
- AA-LCR: 79.3% (Artificial Analysis / BenchLM) — long-context reasoning proxy

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (overall 89.45, #3/889, 86 of 625) and AA as of 2026-10-10.

- **Tool use: 90/100.** GDPval-AA Elo 1758 (exceeds ≥1750 frontier!), aaTB21 84.3%, AA Agentic Index 56.2%, TB-4.0 55.8%, AA Terminal-Bench 4.0 59.6%, AA ITBench 38.2%, GDP.pdf 21.8%, ApprenticeBench 36%, AA Briefcase 1710 Elo, OSWorld 66.9%. GDPval ≥1750 frontier bonus. Capped by TB-4.0 55.8% (below 88%+ frontier), GDPval-AA normalized 66.8%, no SWE-bench Verified/LiveCodeBench for this ID on Oct 1 BenchLM fetch (added below).
- **Reasoning: 88/100.** GPQA Diamond 93.7% (≥90 frontier), HLE w/ tools 65% (well above 40% frontier), AA-HLE 54.9%, AA-LCR 79.3%, MMLU-Pro 91.6%, AA Global-MMLU-Lite 92.2%, ARC-AGI-1 97.50%, AA-MMMU-Pro 84.7%. Capped by AA Intelligence Index 53 (below ~60 frontier ref), CritPt 29.1%, MLCR-AA 55.6%, Omniscience Index 37.1 (low reliability), no GPQA Diamond published for this exact ID on BenchLM (AA-GPQA-D 93.7% used).
- **Context window: 95/100.** 1M-token input window (≥1M tier). No MRCR/RULER retrieval curve ≥98% at 512K+ published for 100. AA-LCR 79.3% demonstrates long-context reasoning capability but below retrieval threshold.
- **Multimodal: 80/100.** Text, image and PDF input / text output (+image/+PDF in = 60-70 tier with PDF pushing toward 70-90); AA-MMMU-Pro 84.7%, Chartography tools 89.0%, OfficeQA 78.1%, Design Arena 1314. Capped by text-only output, Chartography no tools 29.6%, no video/audio input, no AA-Video-MME.
- **Coding: 88/100.** SWE-bench Verified 95.0% (NEW — prior file had "not published"), SWE-bench (Vals) 97.0%, SWE-bench Pro 81.2%, LiveCodeBench 90.5%, DeepSWE 67.4%, AA Coding Index 78.0% (revised up from 76.5%), VulcanBench not listed. Capped by DeepSWE 67.4% (below 74% frontier), no SWE-Atlas, no SciCode, VulcanBench not listed.
- **Cost efficiency: 30/100.** $10.00 / $50.00 per 1M in/out (paid tier, most expensive). Cache reads 75% cheaper; no free tier.
- **Overall Score: 88/100.** Half-up mean: (90+88+95+80+88)/5 = 441/5 = 88.2 → 88. **Best-fit:** Mythos-class frontier model for demanding long-horizon agentic/reasoning and coding; GDPval 1758 Elo (≥1750 frontier) + GPQA 93.7% + SWE-bench Verified 95% lead performance; cap: Intelligence Index 53 (below ~60 frontier), DeepSWE 67.4% (below 74% frontier), premium $10/$50 pricing, no free tier. Same weights as Claude Mythos 5.1.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-fable-5-1` for overall rank/score (#3/889, 89.45) and 86 benchmark rows including GPQA-D 93.7%, HLE 65%, SWE-bench Verified 95.0%, LiveCodeBench 90.5%, DeepSWE 67.4%, GDPval-AA Elo 1758, TB-4.0 55.8%; AA model page `https://artificialanalysis.ai/models/claude-fable-5-1` for Intelligence Index 53, pricing $10/$50, aaTB21 84.3%, AA Agentic Index 56.2%, AA Terminal-Bench 4.0 59.6%, GDP.pdf 21.8%, AA-MMMU-Pro 84.7%; Anthropic system card PDF for SWE-bench Verified 95.0%, SWE-bench Pro 81.2%, LiveCodeBench 90.5%, DeepSWE 67.4%, HLE 65%, GPQA 93.7%, GDPval Elo 1758). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research.
- Key revisions from Sep 23 to Oct 10 fresh BenchLM fetch: GDPval-AA Elo 1758 confirmed (≥1750 frontier); new benchmarks confirmed (GPQA-D 93.7%, HLE 65%, SWE-bench Verified 95.0%, LiveCodeBench 90.5%, DeepSWE 67.4%, SWE-bench Pro 81.2%, SWE-bench (Vals) 97.0%); aaTB21 84.3% and AA Terminal-Bench 4.0 59.6% added from AA. Overall revised from 87 to 88.

---
