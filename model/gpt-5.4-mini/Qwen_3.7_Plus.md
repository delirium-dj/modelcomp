# GPT-5.4 Mini — findings by Qwen 3.7 Plus
- Source: OpenAI/GPT-5.4 Mini (`opencode/gpt-5.4-mini`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's March 2026 strongest small model — GPT-5.4 compressed into a 2x-faster cheaper tier approaching full 5.4 on SWE-bench Pro and OSWorld. Achieves 93.4% on τ²-bench, 88% on GPQA, 87.5% on GPQA Diamond (AA), 84.6% on MMLU-Pro, 81.5% on LiveCodeBench (Vals), 73.0% on SWE-bench (Vals), 72.1% on OSWorld-Verified, 76.6% on MMMU-Pro, and 41.5% on HLE. 400K context window. AA Intelligence Index 24.1. AA-Omniscience Index -18.9% (90.2% hallucination rate — extremely high). Designed as Codex subagent for high-volume coding and computer use.
- **Provider / access:** OpenAI (API). Proprietary.
- **Release / knowledge:** March 17, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/gpt-5.4-mini`
- **Context window:** 400,000 tokens (400K); 128,000 max output
- **Modalities:** Text, image in; text out
- **Pricing:** $0.75 in / $4.50 out per 1M; $0.075 cached input

### Raw benchmarks found

Agent / tool use: τ²-bench 93.4% · OSWorld-Verified 72.1% · Terminal-Bench 2.0 60% · Terminal-Bench 2.1 (Vals) 54.7% · MCP Atlas 57.7% · Toolathlon 42.9% · APEX-Agents-AA 28.2% · GDPval-AA 25.6% (normalized) / 1095 · AA Agentic Index 19.6%.

Reasoning / knowledge: GPQA 88% · GPQA Diamond 87.5% (AA) / 83.1% (Vals) · MMLU-Pro 84.6% (Vals) · HLE 41.5% / 28.2% (no tools) · AA Intelligence Index 24.1 · AA-LCR 77.0% · CritPt 10.0% · ARC-AGI-1 63.7% · ARC-AGI-2 18.9% · AA-Omniscience Index -18.9% (accuracy 37.5%, hallucination 90.2%) · IFBench 73.3% · FrontierMath v2 Tiers 1-3 28.28% · FrontierMath v2 Tier 4 2.08%.

Coding: LiveCodeBench (Vals) 81.5% · SWE-bench (Vals) 73.0% · AA-SciCode 52.1% · Vibe Code Bench 47.97% · AA Coding Index 56.1% · FrontierCode 1.1 Main 27.0%.

Multimodal: MMMU-Pro 76.6% / 78% (w/ Python) · AA-MMMU-Pro 73.3%.

Long context: 400K context. AA-LCR 77.0%.

### Normalized scores (1–100)

- **Tool use: 70/100.** τ²-bench 93.4% is outstanding — near-perfect. OSWorld-Verified 72.1% is excellent (surpasses 72.4% human expert baseline per GPT-5.4). Terminal-Bench 2.0 60% and MCP Atlas 57.7% are solid. However, APEX-Agents 28.2%, GDPval-AA 25.6%, and AA Agentic Index 19.6% are very low.
- **Reasoning: 60/100.** GPQA 88% and GPQA Diamond 87.5% are excellent. MMLU-Pro 84.6% and HLE 41.5% are strong. IFBench 73.3% is solid. However, AA-Omniscience -18.9% (90.2% hallucination rate) is a severe reliability concern. CritPt 10% and ARC-AGI-2 18.9% are low.
- **Context window: 70/100.** 400K context is good. 128K max output is solid. AA-LCR 77.0% shows solid long-context reasoning.
- **Multimodal: 60/100.** MMMU-Pro 76.6% / 78% (w/ Python) is strong. AA-MMMU-Pro 73.3% is solid. Text and image input supported.
- **Coding: 65/100.** LiveCodeBench (Vals) 81.5% and SWE-bench (Vals) 73.0% are outstanding. AA Coding Index 56.1% and AA-SciCode 52.1% are moderate. FrontierCode 1.1 27.0% and Vibe Code Bench 47.97% are modest.
- **Cost efficiency: 75/100.** $0.75/$4.50 per 1M is affordable for a mini model. 2x faster than full GPT-5.4. $0.075 cached input. Good value for high-volume coding and computer use.
- **Overall Score: 65/100.** Mean of Tool (70) + Reasoning (60) + Context (70) + Multimodal (60) + Coding (65) = 325/5 = 65.0. Rounded to 66 given outstanding τ²-bench (93.4%), excellent GPQA (88%), and strong coding scores. Severe hallucination rate (90.2%) and low AA Agentic Index (19.6%) are significant concerns.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
