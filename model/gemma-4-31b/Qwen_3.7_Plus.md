# Gemma 4 31B — findings by Qwen 3.7 Plus
- Source: Google/Gemma 4 31B (`google/gemma-4-31b-it`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's April 2026 open-weights 31B instruction-tuned dense model with strong reasoning, tool use, and coding capabilities. Achieves 89.2% on AIME 2026 (no tools), 85.7% on GPQA Diamond (AA), 85.2% on MMLU-Pro, 80.0% on LiveCodeBench v6, 76.9% on MMMU-Pro, and 59.9% on τ²-bench. 256K context window. Apache 2.0 license. AA-Omniscience Index -47.9% (85% hallucination rate — very high). IFBench 75.6% shows solid instruction following. AA Intelligence Index 14.7.
- **Provider / access:** Google (Hugging Face, API). Open weights (Apache 2.0) — self-hostable.
- **Release / knowledge:** April 2, 2026. Knowledge cutoff not specified.
- **IDs:** `google/gemma-4-31b-it`
- **Context window:** 262,144 tokens (256K)
- **Modalities:** Text in/out (meta.json); multimodal benchmarks reported (MMMU-Pro 76.9%)
- **Pricing:** Free open weights; standard API hosting ~$0.09/M input

### Raw benchmarks found

Agent / tool use: τ²-bench 59.9% · GDPval-AA 755 / 6.0% (normalized) · Gert Labs 35.26% · AA Agentic Index 6.7%.

Reasoning / knowledge: AIME 2026 89.2% (no tools) · GPQA Diamond 84.3% / 85.7% (AA) · MMLU-Pro 85.2% · HLE 26.5% / 19.5% (no tools) / 23.6% (AA) · AA Intelligence Index 14.7 · AA-LCR 69.7% · MRCRv2 66.4% · CritPt 1.4% · IFBench 75.6% · AA-Omniscience -47.9% (accuracy 20.0%, hallucination 85.0%).

Coding: LiveCodeBench v6 80.0% · React Native Evals 75.2% · SWE-Rebench 41.6% · AA-SciCode 45.5% · AA Coding Index 43.4%.

Multimodal: MMMU-Pro 76.9% / 73.4% (AA).

Long context: 256K native context. AA-LCR 69.7%. MRCRv2 66.4%.

### Normalized scores (1–100)

- **Tool use: 40/100.** τ²-bench 59.9% is moderate. GDPval-AA 6.0% and AA Agentic Index 6.7% are very low. Gert Labs 35.26% is modest.
- **Reasoning: 50/100.** AIME 2026 89.2% and GPQA Diamond 85.7% are outstanding. MMLU-Pro 85.2% and IFBench 75.6% are strong. However, HLE 26.5% and AA-Omniscience -47.9% (85% hallucination) are severe concerns. CritPt 1.4% is very low.
- **Context window: 65/100.** 256K context is good. AA-LCR 69.7% and MRCRv2 66.4% show solid long-context capability.
- **Multimodal: 45/100.** MMMU-Pro 76.9% is strong. Meta.json says text-only but multimodal benchmarks reported. Limited multimodal coverage.
- **Coding: 58/100.** LiveCodeBench v6 80.0% and React Native Evals 75.2% are strong. AA Coding Index 43.4% and SWE-Rebench 41.6% are modest.
- **Cost efficiency: 90/100.** Free open weights (Apache 2.0). ~$0.09/M input on standard hosting. Self-hostable on consumer hardware (31B dense).
- **Overall Score: 51.6/100.** Mean of Tool (40) + Reasoning (50) + Context (65) + Multimodal (45) + Coding (58) = 258/5 = 51.6. Rounded to 51 given severe hallucination issues (AA-Omniscience -47.9%, 85% hallucination) and low agentic scores.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
