# Kimi K2.5 — findings by Qwen 3.7 Plus
- Source: Moonshot AI/Kimi K2.5 (`opencode/kimi-k2.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's January 2026 open-weight 1T-parameter MoE flagship (1T total / 32B active) for long-context agents, coding, and multimodal work. Achieves 95.9% on τ²-bench, 95.8% on AIME 2026, 87.6% on GPQA Diamond, 85.0% on LiveCodeBench v6, 76.8% on SWE-bench Verified, 88.8% on OmniDocBench 1.5, 87.4% on Video-MME, and 84.3% on MMMU. 86 benchmarks covered on BenchLM. AA-Omniscience Index -7.3% (65.7% hallucination rate). IFEval 93.9% shows excellent instruction following. 256K context with 65K max output. Non-reasoning base model; reasoning variant available.
- **Provider / access:** Moonshot AI (Kimi API). Open weights — self-hostable.
- **Release / knowledge:** January 27, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/kimi-k2.5`
- **Context window:** 262,144 tokens (256K), 65,536 max output
- **Modalities:** Text, image, video in; text out
- **Pricing:** $0.60/$3.00 per 1M in/out; $0.08 cached input

### Raw benchmarks found

Agent / tool use: τ²-bench 95.9% · DeepSearchQA 77.1% · WideResearch 72.7% · BrowseComp 60.6% · OSWorld-Verified 63.3% · MCP-Tasks 59.1% · Claw-Eval 52.3% · Terminal-Bench 2.0 50.8% · BFCL v4 68.3% · τ³-bench 65.7% · Toolathlon 27.8% · MCP Atlas 29.5% · GDPval-AA 936 / 17.0%.

Reasoning / knowledge: AIME 2026 95.8% · AIME 2025 96.1% · HMMT Feb 2025 95.4% · HMMT Feb 2026 87.1% · GPQA 87.6% · GPQA Diamond 87.6% / 87.9% (AA) · MMLU-Pro 87.1% · MMLU-Redux 94.5% · C-Eval 94% · IFEval 93.9% · IFBench 70.2% · HLE 30.1% / 30.7% (AA) · AA Intelligence Index 23.5% · AA-LCR 78.0% · CritPt 3.1% · AA-Omniscience -7.3% (accuracy 35.2%, hallucination 65.7%) · FrontierMath v2 Tiers 1-3 27.9%.

Coding: LiveCodeBench v6 85.0% · SWE-bench Verified 76.8% · SWE Multilingual 73% · SWE-bench Pro 50.7% · SWE-Rebench 58.5% · React Native Evals 77.2% · SciCode 48.7% · Terminal-Bench 2.0 50.8% · NL2Repo 32% · AA Coding Index 46.8%.

Multimodal: MMMU 84.3% · MMMU-Pro 78.5% / 75.4% (AA) · OmniDocBench 1.5 88.8% · Video-MME 87.4% · VideoMMMU 86.6% · MLVU 85.0% · MathVision 84.2% · AI2D 90.8% · CountBench 94.1% · RefCOCO 87.8% · SimpleVQA 71.2% · CharXiv 77.5%.

Long context: 256K native context. LongBench v2 61%. AA-LCR 78.0%.

### Normalized scores (1–100)

- **Tool use: 60/100.** τ²-bench 95.9% is outstanding. DeepSearchQA 77.1%, WideResearch 72.7%, and BFCL v4 68.3% are strong. OSWorld-Verified 63.3% and BrowseComp 60.6% are moderate. MCP Atlas 29.5% and Toolathlon 27.8% are modest.
- **Reasoning: 62/100.** AIME 2026 95.8%, AIME 2025 96.1%, and HMMT Feb 2025 95.4% are outstanding mathematics. GPQA Diamond 87.9% and MMLU-Pro 87.1% are strong. IFEval 93.9% shows excellent instruction following. However, HLE 30.1% and AA-Omniscience -7.3% (65.7% hallucination) are concerns. CritPt 3.1% is very low.
- **Context window: 70/100.** 256K context with 65K max output is good. LongBench v2 61% and AA-LCR 78.0% show solid long-context capability.
- **Multimodal: 78/100.** Comprehensive multimodal coverage: MMMU 84.3%, OmniDocBench 88.8%, Video-MME 87.4%, VideoMMMU 86.6%, MathVision 84.2%, AI2D 90.8%, CountBench 94.1%. Strong vision, video, document, and chart understanding.
- **Coding: 68/100.** LiveCodeBench v6 85.0% and SWE-bench Verified 76.8% are strong. SWE Multilingual 73% and React Native Evals 77.2% are solid. SWE-bench Pro 50.7% and AA Coding Index 46.8% are moderate.
- **Cost efficiency: 75/100.** $0.60/$3.00 per 1M is competitive. $0.08 cached input is excellent. Open weights enable free self-hosting.
- **Overall Score: 68/100.** Mean of Tool (60) + Reasoning (62) + Context (70) + Multimodal (78) + Coding (68) = 338/5 = 67.6. Rounded to 68 given outstanding mathematics and comprehensive multimodal coverage.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
