# Claude Opus 4.5 — findings by Qwen 3.7 Plus
- Source: Anthropic/Claude Opus 4.5 (`anthropic/claude-opus-4.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's November 2025 Opus flagship that cut Opus-tier pricing by 67% ($5/$25) while reaching SOTA real-world software engineering at launch. Achieved 80.9% on SWE-bench Verified, 95.1% on AIME 2026, 89.5% on MMLU-Pro, 87% on GPQA, and 86.3% on τ²-bench. Comprehensive multimodal support with 80.7% MMMU, 84.4% VideoMMMU, and 87.7% OmniDocBench. Non-reasoning model with 200K context. Superseded by Opus 4.6 through 5.5 but still active. Comprehensive benchmark coverage (74 benchmarks on BenchLM). AA-Omniscience Index is -4.1% (76.2% hallucination rate).
- **Provider / access:** Anthropic (API, Claude.ai). Proprietary.
- **Release / knowledge:** November 2025. Knowledge cutoff not specified.
- **IDs:** `anthropic/claude-opus-4.5`
- **Context window:** 200,000 tokens (200K)
- **Modalities:** Text, image in; text out
- **Pricing:** $5/$25 per 1M (paid-tier)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.0 59.3% · OSWorld-Verified 66.3% · τ²-bench 86.3% · τ³-bench 70.2% · Gert Labs 64.23% · WideResearch 76.4% · MCP-Tasks 71.8% · CyberGym 50.6% · Toolathlon 43.5% · MCP Atlas 42.3%.

Reasoning / knowledge: GPQA 87% · GPQA Diamond 81.0% (AA) · MMLU-Pro 89.5% / 88.9% (AA) · HLE 30.8% / 13.2% (AA) · AA Intelligence Index 23.7% · AA-LCR 70.7% · AA-Omniscience -4.1% (accuracy 40.9%, hallucination 76.2%) · CritPt 0.3% · LongBench v2 64.4% · IFEval 90.9% · AIME 2026 95.1% · HMMT Feb 2025 92.9% · HMMT Feb 2026 85.3% · FrontierMath v2 Tiers 1-3 20.7% · FrontierMath v2 Tier 4 4.2%.

Coding: SWE-bench Verified 80.9% · LiveCodeBench v6 84.8% · SWE-bench Pro 57.1% · SWE Multilingual 77.5% · NL2Repo 43.2% · Terminal-Bench 2.0 59.3%.

Multimodal: MMMU 80.7% · MMMU-Pro 70.6% / 71.2% (AA) · VideoMMMU 84.4% · MLVU 81.7% · OmniDocBench 1.5 87.7% · Video-MME 77.6%/81.4% · MathVision 74.3% · CountBench 90.6% · AI2D 87.7% · ScreenSpot Pro 45.7%.

Long context: 200K native context window.

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 86.3%, WideResearch 76.4%, MCP-Tasks 71.8%, and τ³-bench 70.2% show strong agentic capability. OSWorld-Verified 66.3% and Gert Labs 64.23% are solid. CyberGym 50.6% and Toolathlon 43.5% are modest.
- **Reasoning: 65/100.** AIME 2026 95.1%, HMMT Feb 2025 92.9%, MMLU-Pro 89.5%, and GPQA 87% are outstanding. IFEval 90.9% shows excellent instruction following. However, AA-Omniscience -4.1% (76.2% hallucination), CritPt 0.3%, and AA Intelligence Index 23.7% show knowledge reliability concerns.
- **Context window: 60/100.** 200K context is good but trails current frontier models offering 1M+ context.
- **Multimodal: 72/100.** Comprehensive multimodal support: MMMU 80.7%, VideoMMMU 84.4%, OmniDocBench 87.7%, CountBench 90.6%, AI2D 87.7%. Strong vision, video, and document understanding. ScreenSpot Pro 45.7% is modest.
- **Coding: 70/100.** SWE-bench Verified 80.9%, LiveCodeBench v6 84.8%, and SWE Multilingual 77.5% are strong. SWE-bench Pro 57.1% is moderate. SOTA real-world software engineering at launch.
- **Cost efficiency: 35/100.** $5/$25 per 1M is expensive. No free tier. Cut pricing by 67% from prior Opus but still premium.
- **Overall Score: 65.8/100.** Mean of Tool (62) + Reasoning (65) + Context (60) + Multimodal (72) + Coding (70) = 329/5 = 65.8. Adjusted to 62 given expensive pricing and supersession.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
