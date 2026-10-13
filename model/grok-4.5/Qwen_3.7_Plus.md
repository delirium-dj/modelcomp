# Grok 4.5 — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4.5 (`opencode/grok-4.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's July 2026 flagship for token-efficient agentic coding and knowledge work, co-developed with Cursor. Delivers Opus-class capability at mid-range pricing ($2/$6 per 1M). Achieved 86.6% on SWE-bench (Vals), 83.3% on Terminal-Bench 2.1, 93.1% on GPQA Diamond, and 89.9% on VulcanBench v3. The 500K context window supports up to 450K output tokens. AA-Omniscience Index is a positive 25.3% (54.1% hallucination rate), one of the better knowledge reliability scores. AA Coding Index 72.5% and CursorBench 66.7% confirm strong real-world coding utility.
- **Provider / access:** xAI (X Platform, API). Proprietary.
- **Release / knowledge:** July 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/grok-4.5`
- **Context window:** 500,000 tokens (500K); up to 450K output
- **Modalities:** Text, image, file in; text out
- **Pricing:** $2.00/$6.00 per 1M; $0.30 cached

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 83.3% (self-reported) / 67.8% (Vals) · Terminal-Bench 3.0 15.7% · deepSwe 53% · AA Agentic Index 42.1% · GDPval-AA 44.3% · PostTrainBench v1.1 23.4%.

Reasoning / knowledge: GPQA Diamond 93.1% / 92.9% (Vals) · HLE 42.7% · MMLU-Pro 89.2% · AA Intelligence Index 38.8% · AA-LCR 79.3% · AA-Omniscience 25.3% (accuracy 51.6%, hallucination 54.1%) · ARC-AGI-1 85.67% · ARC-AGI-2 52.6% · ARC-AGI-3 0.3% · CritPt 15.4%.

Coding: SWE-bench Pro 64.7% · SWE Multilingual 78% · SWE-bench (Vals) 86.6% · CursorBench 3.2 66.7% · VulcanBench v3 89.9% · LiveCodeBench (Vals) 87.4% · AA Coding Index 72.5% · AA-SciCode 55.0%.

Multimodal: AA-MMMU-Pro 80.4% · Design Arena Website 1285.

Long context: 500K native context window with up to 450K output tokens.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 83.3% (self-reported) / 67.8% (Vals) and deepSwe 53% show strong agentic coding capability. AA Agentic Index 42.1% is moderate. Terminal-Bench 3.0 at 15.7% shows regression on harder tasks.
- **Reasoning: 68/100.** GPQA Diamond 93.1%, MMLU-Pro 89.2%, and ARC-AGI-1 85.67% are strong. HLE 42.7% is competitive. AA-Omniscience 25.3% (positive) is one of the better knowledge reliability scores. However, ARC-AGI-3 at 0.3% and CritPt 15.4% show limits on frontier reasoning.
- **Context window: 92/100.** 500K context with up to 450K output is exceptional. Among the largest output capacities available.
- **Multimodal: 55/100.** Text and image input only (no audio/video). MMMU-Pro 80.4% is solid for vision understanding. Design Arena 1285 shows web design capability. Limited by lack of audio/video support.
- **Coding: 78/100.** Excellent coding performance: SWE-bench 86.6% (Vals), LiveCodeBench 87.4%, VulcanBench 89.9%, SWE Multilingual 78%, CursorBench 66.7%. Co-developed with Cursor confirms real-world coding utility. AA Coding Index 72.5%.
- **Cost efficiency: 65/100.** $2.00/$6.00 per 1M with $0.30 cached is reasonable for Opus-class capability. No free tier but mid-range pricing.
- **Overall Score: 70/100.** Mean of Tool (58) + Reasoning (68) + Context (92) + Multimodal (55) + Coding (78) = 351/5 = 70.2.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
