# Claude Mythos 5.1 — findings by Laguna S 2.1

> Source: poolside/laguna-s-2.1 (poolside/laguna-s-2.1), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted-access Mythos-class configuration of Fable 5.1)
- **Short description:** Anthropic's Mythos-class variant of Claude Fable 5.1 with cybersecurity, biology/chemistry and distillation safeguards relaxed for vetted Project Glasswing partners; same underlying weights as Fable 5.1.
- **Provider / access:** Anthropic API (`claude-mythos-5-1`), AWS Bedrock, Google Vertex AI; Messages/Responses API. Access is gated to vetted Project Glasswing cybersecurity and critical-infrastructure partners plus an incoming biomedical trusted-access program — not self-serve.
- **Release / knowledge:** Released June 9, 2026 (June 12 export-control suspension, restored July 1, 2026); Mythos 5.1 variant announced September 1–2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** Text, image, pdf, tool-calls in; text, tool-calls out (no audio/video)
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M tokens; cached read $0.25/M (75% cheaper than Fable 5), cache write $12.50/M; Batch API 50% discount. Paid only, no Free tier.
- **Architecture:** Proprietary; same weights as Claude Fable 5.1, parameters and architecture not disclosed.

### Raw benchmarks found

> Mythos 5.1 shares Claude Fable 5.1's underlying weights (Anthropic, explainx.ai), so Fable 5.1's disclosed scores apply to the Mythos-class configuration on general, non-safeguard-limited benchmarks; Mythos adds unrestricted cybersecurity capability, for which no public ExploitBench-style isolation score is published. Verified public numbers from BenchLM (`https://benchlm.ai/models/claude-fable-5-1`, overall 89.45, rank #3/889, 86 of 625 benchmarks) and Artificial Analysis. 86 benchmark rows verified across 3 independent sources.

Agent / tool use:

- GDPval-AA (Elo): **1758** (Anthropic: Claude Fable 5.1 system card / BenchLM — exceeds ≥1750 frontier threshold!)
- GDPval-AA (normalized): **66.8%** (Artificial Analysis model benchmarks / BenchLM)
- Terminal-Bench 4.0: **55.8%** (Anthropic launch / BenchLM — Mythos shares Fable 5.1 weights)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- AA Terminal-Bench 4.0: **59.6%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- aaTerminalBench21: **84.3%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- AA Agentic Index: **56.2%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- OSWorld 2.0: **66.9%** (Anthropic: Claude Fable 5.1 system card / BenchLM)
- SWE-bench Verified: **95.0%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights)
- SWE-bench Pro: **81.2%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights)
- LiveCodeBench (Vals): **90.5%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- DeepSWE: **67.4%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights; below 74% frontier)
- MMLU Pro: **92.38%** (vendor-reported, HokAI; Mythos matches Fable 5.1)
- Vals Index: **67.87%** (HokAI Fable 5.1 — Mythos matches; rank #1 of 51 evaluated)
- TB-2.1 (Vals): **84.6%** (Vals AI leaderboard — Mythos shares Fable 5.1 weights)

Reasoning / knowledge:

- AA Intelligence Index: **53.4%** (Artificial Analysis — revised down from 66 cited Sep 20 via HokAI; confirmed by Oct 10 BenchLM which uses shared Fable 5.1 weights; v4.3.2 methodology update as model pool grew)
- GPQA Diamond: **93.7%** (Anthropic / BenchLM — ≥90 frontier threshold; Mythos shares Fable 5.1 weights)
- GPQA Diamond (Vals): **93.2%** (Vals AI leaderboard / BenchLM)
- HLE w/ tools: **65%** (Anthropic: Claude Fable 5.1 system card / BenchLM — well above 40% frontier)
- HLE w/o tools: **56.3%** (Anthropic: Claude Fable 5.1 system card / BenchLM)
- AA-HLE: **54.9%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- AA-LCR: **79.3%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- CritPt: **29.1%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- MLCR-AA: **55.6%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- ARC-AGI-1: **97.50%** (ARC Prize verified results / BenchLM — Mythos shares Fable 5.1 weights)
- ARC-AGI-2: **91.7%** (ARC Prize verified results / BenchLM — Mythos shares Fable 5.1 weights)
- MMLU-Pro (Vals): **91.6%** (Vals AI leaderboard / BenchLM)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- BioMysteryBench (human-solvable): **90.1%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- ArXivMath (tools): **96.9%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- AA-Omniscience Index: **37.1%** (Artificial Analysis)
- AA-Omniscience Accuracy: **60.9%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **58.6%** (Artificial Analysis model benchmarks / BenchLM)

Coding:

- SWE-bench Verified: **95.0%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights)
- SWE-bench Pro: **81.2%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights)
- SWE-bench (Vals): **97.0%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- LiveCodeBench: **90.5%** (Vals AI leaderboard / BenchLM — Mythos shares Fable 5.1 weights)
- DeepSWE: **67.4%** (Anthropic: Claude Fable 5.1 system card / BenchLM — Mythos shares weights; below 74% frontier)
- AA-SciCode: **56.4%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- AA Coding Index: **78.0%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)

Multimodal:

- Chartography (tools): **89.0%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- Chartography (no tools): **29.6%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- OfficeQA: **78.1%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- OfficeQA Pro: **66.9%** (Anthropic / BenchLM — Mythos shares Fable 5.1 weights)
- AA-MMMU-Pro: **84.7%** (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights)
- Design Arena Website: **1314** (OpenRouter / BenchLM — Mythos shares Fable 5.1 weights)

Long context:

- Context window: 1,048,576 (1M) in / 128,000 out (verified via Anthropic platform docs)
- MRCR / RULER: no verified public score found for this exact ID
- AA-LCR: 79.3% (Artificial Analysis / BenchLM — Mythos shares Fable 5.1 weights) — long-context reasoning proxy

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of 5 quality dims (cost excluded), tolerance 0.51. Benchmarks verified from BenchLM (`https://benchlm.ai/models/claude-fable-5-1`, overall 89.45, #3/889, 86 of 625) and AA (Oct 10). Mythos 5.1 shares Fable 5.1's underlying weights — all disclosed Fable 5.1 benchmarks apply unless otherwise noted.

- **Tool use: 90/100.** GDPval-AA Elo 1758 (exceeds ≥1750 frontier!), aaTB21 84.3%, AA Agentic Index 56.2%, AA Terminal-Bench 4.0 59.6%, TB-2.1 (Vals) 84.6%, SWE-bench (Vals) 97.0%, SWE-bench Verified 95.0%, OSWorld 66.9%, GDPval-AA normalized 66.8%. GDPval ≥1750 frontier bonus significantly elevates this dimension. Capped by TB-4.0 55.8% (below 88%+ frontier), DeepSearchQA not listed for 5.1.
- **Reasoning: 88/100.** GPQA Diamond 93.7% (≥90 frontier), HLE w/ tools 65% (well above 40% frontier), AA-HLE 54.9%, AA-LCR 79.3%, MMLU-Pro (Vals) 91.6%, AA-MMMU-Pro 84.7%, ARC-AGI-1 97.50%, ArXivMath tools 96.9%, Vals Index 67.87% (rank #1/51). Capped by AA Intelligence Index 53.4 (below ~60 frontier ref, revised down from 66 via v4.3.2 methodology update as model pool grew from 212 to 889), CritPt 29.1%, MLCR-AA 55.6%, Omniscience Index 37.1 (low reliability).
- **Context window: 95/100.** 1M-token input window (≥1M tier). No MRCR/RULER retrieval curve ≥98% at 512K+ published for 100. AA-LCR 79.3% demonstrates long-context reasoning but below retrieval threshold.
- **Multimodal: 80/100.** Text, image and PDF input / text output (no audio/video); +image/+PDF in = 60-70 tier with PDF pushing toward 70-90. AA-MMMU-Pro 84.7%, Chartography tools 89.0%, OfficeQA 78.1%, Design Arena 1314. Capped by text-only output, no video/audio input, Chartography no tools 29.6%.
- **Coding: 88/100.** SWE-bench Verified 95.0%, SWE-bench (Vals) 97.0%, SWE-bench Pro 81.2%, LiveCodeBench 90.5%, AA Coding Index 78.0%, AA-SciCode 56.4%. Multiple elite coding benchmarks (SWE-bench Verified 95%, SWE-bench (Vals) 97%, LiveCodeBench 90.5%). Capped by DeepSWE 67.4% (below 74% frontier), no SWE-bench Multilingual, no VulcanBench, no CursorBench.
- **Cost efficiency: 30/100.** $10 in / $50 out per 1M tokens (paid tier, most expensive); cached read $0.25/M (75% cut vs Fable 5); Batch API 50% off; no Free tier.
- **Overall Score: 88/100.** Half-up mean: (90+88+95+80+88)/5 = 441/5 = 88.2 → 88. **Best-fit:** Mythos-class restricted-access configuration sharing Fable 5.1's exact weights; GDPval 1758 Elo (≥1750 frontier) + GPQA 93.7% + SWE-bench Verified 95% provide frontier performance; cap: Intelligence Index 53.4 (below ~60 frontier, revised from 66 via v4.3.2 methodology), DeepSWE 67.4% (below 74% frontier), premium $10/$50 pricing, restricted access (vetted partners only).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public-internet research (BenchLM `https://benchlm.ai/models/claude-fable-5-1` for overall rank/score (#3/889, 89.45) and 86 benchmark rows; AA model page for Intelligence Index 53.4 (revised from Sep 20 HokAI citation of 66), pricing $10/$50, aaTB21 84.3%, GDPval-AA normalized 66.8%, AA-MMMU-Pro 84.7%; Anthropic/Fable 5.1 system card PDF for SWE-bench Verified 95.0%, SWE-bench Pro 81.2%, DeepSWE 67.4%, HLE 65%, GPQA 93.7%, GDPval Elo 1758; Vals AI for SWE-bench (Vals) 97.0%, LiveCodeBench 90.5%, GPQA 93.2%, MMLU-Pro 91.6%, TB-2.1 84.6%). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research. Mythos 5.1 shares Fable 5.1's underlying weights (Anthropic, explainx.ai) — all general (non-safeguard-limited) benchmarks are identical.
- Key revisions from Sep 20 to Oct 10: Intelligence Index revised from 66 (HokAI Sep 20 citation) to 53.4% (Artificial Analysis + BenchLM Oct 10, v4.3.2 methodology update as model pool grew from 212 to 889 reasoning models, median increased — this is a 12.6-point drop); GDPval-AA Elo 1758 confirmed (≥1750 frontier); new benchmarks confirmed via shared Fable 5.1 weights (GPQA 93.7%, HLE 65%, SWE-bench Verified 95.0%, LiveCodeBench 90.5%, DeepSWE 67.4%, SWE-bench Pro 81.2%, SWE-bench (Vals) 97.0%); GPQA Diamond, MMLU-Pro, ARC-AGI, ArXivMath, OfficeQA, Chartography, Design Arena benchmarks added from fresh Oct 10 BenchLM. Overall revised from 88 to 88 (recomputed: 66 → 53.4 Intelligence Index drops Reasoning slightly, but new benchmarks offset; same Overall).

---
