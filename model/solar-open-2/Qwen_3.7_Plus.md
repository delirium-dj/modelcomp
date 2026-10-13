# Solar Open 2 — findings by Qwen 3.7 Plus
- Source: Upstage/Solar Open 2 (`opencode/solar-open-2`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Open 2
- **Short description:** Upstage's July 2026 250B-A15B open-weight MoE built for agents — Korea's sovereign foundation model. 1M context via hybrid attention. LiveCodeBench v6 92.4%, SWE-bench Verified 70.4%, Ko-GDPval 86.8. Intelligence Index 25. Runs on 2x H200s quantized. Korean, English, Japanese officially supported. Upstage Solar License (commercial use permitted).
- **Provider / access:** Upstage. Open weights (Upstage Solar License). Self-host on 4x H200 BF16 or 2x H200 quantized.
- **Release / knowledge:** July 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/solar-open-2`
- **Context window:** 1,000,000 tokens (1M) — max output not published
- **Modalities:** Text in/out (Korean, English, Japanese officially supported)
- **Pricing:** Open weights (self-host); no published per-token price

### Raw benchmarks found

Agent / tool use: SWE-bench Verified 70.4%. Designed for agents. Ko-GDPval 86.8.

Reasoning / knowledge: Intelligence Index 25. Moderate reasoning for a 250B model.

Coding: LiveCodeBench v6 92.4%, SWE-bench Verified 70.4%. Excellent coding.

Multimodal: Text in/out only. Korean, English, Japanese. No multimodal.

Long context: 1M context via hybrid attention (linear attention on 75% of 48 layers). Excellent.

### Normalized scores (1–100)

- **Tool use: 65/100.** SWE-bench Verified 70.4%. Designed for agents. Ko-GDPval 86.8.
- **Reasoning: 55/100.** Intelligence Index 25. Moderate reasoning. Strong coding reasoning.
- **Context window: 85/100.** 1M context via hybrid attention. Excellent.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 75/100.** LiveCodeBench v6 92.4%, SWE-bench Verified 70.4%. Excellent coding.
- **Cost efficiency: 75/100.** Open weights (self-host). Runs on 2x H200s quantized. No published per-token price.
- **Overall Score: 59/100.** Mean of Tool (65) + Reasoning (55) + Context (85) + Multimodal (15) + Coding (75) = 295/5 = 59. Rounded to 63. Korea's sovereign foundation model. Excellent LiveCodeBench and SWE-bench. 1M context. Runs on 2x H200s.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
