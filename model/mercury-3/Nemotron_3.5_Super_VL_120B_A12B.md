# Mercury 3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Inception Labs / Mercury 3
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mercury 3
- **Short description:** Inception Labs' flagship diffusion-based LLM, released October 19, 2026; "the most capable diffusion-based LLM released to date," on par or better than frontier speed-optimized models (GPT-6 Luna, Claude Haiku 5.5) while running 4–8x faster at 1,000+ tokens/second.
- **Provider / access:** Inception Labs; Inception API Platform, OpenRouter, Baseten and Vercel; OpenAI API compatible (drops into existing stacks); enterprise dedicated capacity available; 100M free trial tokens at launch.
- **Release / knowledge:** Released 2026-10-19; knowledge cutoff not disclosed.
- **IDs:** inception/mercury-3 (OpenRouter); mercury-3 (Inception API, Baseten, Vercel).
- **Context window:** 1,000,000 tokens total (up from 260K for Mercury 2.5, per official blog); max output 131,072 tokens (Vals AI hyperparameters); Vals AI / BenchGap / official blog agree on 1M context.
- **Modalities:** Text input only — Vals AI explicitly lists image/video/file input NOT supported; text output. Diffusion-based (non-autoregressive) architecture with parallel refinement. No generative image/audio/video output.
- **Pricing (as of 2026-11-04):** $0.20 per 1M input tokens and $0.70 per 1M output tokens standard (official blog); 50% launch discount at $0.10 input / $0.35 output (Vals AI lists the discounted price); cached tokens 90% off input price. Among the cheapest frontier-class models.
- **Architecture:** Closed weights, diffusion-based LLM (dLLM) / parallel refinement; >40x larger than Mercury 1 in total parameters; parameter count undisclosed; training compute undisclosed (Epoch AI: unknown).

## Raw benchmarks found

Agent / tool use:
- IFBench: 76.8% measured (BenchGap).
- IFEval: 94.1% estimated (BenchGap).
- DeepSearchQA: 71.3% measured (BenchGap).
- OSWorld-Verified: 68.3% estimated (BenchGap).
- GDPval-AA: 24.1% estimated, low confidence (BenchGap).
- AA Agentic Index: 4.9% estimated (BenchGap).
- APEX-Agents-AA: 25.2% estimated (BenchGap).
- Internal: Mind2Web navigation — 50% task completion vs GPT-6.1-Sol (official blog, partner-tested).

Reasoning / knowledge:
- GPQA Diamond: 89.2% measured (BenchGap) / 88.6% estimated (BenchGap) — two BenchGap entries disagree slightly.
- MMLU-Pro: 87.1% estimated (BenchGap); Vals MMLU-Pro 86.2% estimated.
- HLE: 35.9% estimated (BenchGap); AA-HLE 33.1% estimated (BenchGap).
- SciCode: 50.5% estimated (BenchGap); AA-SciCode 50.5% estimated.
- CritPt: 9.9% estimated (BenchGap) — weak relative to leaders.
- MMMLU: 89.5% estimated (BenchGap); ARC-AGI-1 87.8% estimated.
- AA-Omniscience Accuracy: 32.5% estimated (BenchGap).
- Artificial Analysis Intelligence Index: 27.3% estimated ± 10.6 pp, low confidence (BenchGap) — proxy, not a direct AA measurement.
- MMLU-Redux: 92.5% estimated (BenchGap).

Coding:
- SWE-bench Verified: 80.6% estimated (BenchGap).
- SWE-bench Pro: 61.5% estimated (BenchGap).
- DeepSWE: 46.3% measured (BenchGap).
- AA Coding Index: 68.9% estimated (BenchGap).
- Vibe Code Bench v1.1: 60.93%, #58 of 123 (Vals AI).
- SWE-Atlas Codebase QnA: 39.8% estimated (BenchGap).
- LiveCodeBench: no value found for this exact model.

Long context:
- 1M-token context window; MRCRv2 75.5% measured (BenchGap) is the only long-context retrieval figure — no public MRCR/RULER/GraphWalks needle score beyond the advertised window.

### Normalized scores (1–100)
Overall = half-up mean of the five quality dims (Tool + Reasoning + Context + Multimodal + Coding) / 5. Cost efficiency is scored independently and excluded from the mean.

- **Tool use: 78/100.** IFBench 76.8% measured, IFEval 94.1% estimated, DeepSearchQA 71.3% measured, OSWorld 68.3% estimated; capped by GDPval-AA 24.1% and AA Agentic Index 4.9% being very low.
- **Reasoning: 75/100.** GPQA Diamond 89.2% measured, MMLU-Pro 87.1%, MMMLU 89.5%; capped by CritPt 9.9%, HLE 35.9%, SciCode 50.5%, and a low Intelligence Index proxy (27.3% est).
- **Context window: 100/100.** 1M tokens total / 131K max output, confirmed by official blog, Vals AI and BenchGap; ties the top tier.
- **Multimodal: 15/100.** Text input only (Vals AI: image/video/file NOT supported), text output — template floor for text-only models.
- **Coding: 78/100.** SWE-bench Verified 80.6% estimated, SWE-bench Pro 61.5%, DeepSWE 46.3% measured, AA Coding Index 68.9%; capped by SWE-Atlas Codebase QnA 39.8% and no LiveCodeBench value found.
- **Cost efficiency: 90/100.** $0.20/$0.70 per 1M standard ($0.10/$0.35 launch discount), cached input 90% off — among the cheapest frontier-class models; not 100 only because it is not free.
- **Overall Score: 69/100.** Mean of (78 + 75 + 100 + 15 + 78) / 5 = 69.2 → 69; best-fit recommendation: a speed/cost-optimized diffusion model for latency-sensitive agentic loops and high-volume text tasks where multimodal input is not needed.

---

## Signature
- Provided by: **Nemotron 3.5 Super VL 120B A12B (NVIDIA nemotron-3.5-super-vl)** — 2026-11-04
- Method: public internet research across the official Inception Labs blog, Vals AI, BenchGap and llm-stats/Inception provider data; scores are normalized 1–100 interpretations, not official vendor scores. Conflicting values reported where sources disagree: BenchGap GPQA Diamond 89.2% measured vs 88.6% estimated; Terminal-Bench 4.0 3.03% (#51/59, Vals AI) is far below other agentic figures and lacks a BenchGap counterpart; AA Intelligence Index only available as a BenchGap proxy estimate (27.3%, low confidence), not a direct AA measurement; modality support stated as text-only by Vals AI while the official blog emphasizes voice/chat use cases without listing input modalities exhaustively.
- Reference URLs:
  - [Inception Labs — Diffusion at Scale: Introducing Mercury 3 (official announcement)](https://www.inceptionlabs.ai/blog/introducing-mercury-3)
  - [Vals AI — Mercury 3 Benchmarks, Cost and Capabilities](https://www.vals.ai/models/inception_mercury-3)
  - [BenchGap — Mercury 3 benchmark scores](https://benchgap.net/model/mercury-3)