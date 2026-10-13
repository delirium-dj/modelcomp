# Grok 4.20 — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4.20 (`opencode/grok-4.20`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's March 2026 multi-agent generation model featuring a unique 4-agent council system (Grok, Harper, Benjamin, Lucas) that debates in parallel before generating responses. Achieves 88.5% on GPQA Diamond, 86.3% on MMLU-Pro, 76.7% on SWE-bench Verified, 84.3% on LiveCodeBench (Vals), 75.2% on MMMU-Pro, 53.3% on ARC-AGI-2, and 31.6% on HLE (no tools). 2M token context window — largest in class. AA Intelligence Index 26 (below average). #1 on Alpha Arena live trading (+34.59% returns). #2 on ForecastBench. Now deprecated in favor of Grok 4.3+.
- **Provider / access:** xAI (API, SuperGrok subscription). Proprietary.
- **Release / knowledge:** March 9, 2026 (0309 v2). Knowledge cutoff not specified.
- **IDs:** `opencode/grok-4.20`
- **Context window:** 2,000,000 tokens (2M)
- **Modalities:** Text and image in; text out
- **Pricing:** $1.25 in / $2.50 out per 1M (<200K); $2.50 in / $5.00 out per 1M (≥200K)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.0 47.1% · DeepSearchQA 62.8% · Gert Labs 38.36% · Terminal-Bench 2.1 (Vals) 44.2%.

Reasoning / knowledge: GPQA Diamond 88.5% / 88.6% (Vals) · MMLU-Pro 86.3% (Vals) · HLE w/o tools 31.6% · ARC-AGI-2 53.3% · ARC-AGI-3 0.1% · HealthBench Hard 20.3% · MedXpertQA (Text) 50.2% · AA Intelligence Index 26.

Coding: SWE-bench Verified 76.7% · LiveCodeBench Pro 74.2% · SWE-bench Pro 51.8% · LiveCodeBench (Vals) 84.3% · SWE-bench (Vals) 72.2% · Vibe Code Bench 4.06%.

Multimodal: MMMU-Pro 75.2% · CharXiv 60.9% · ERQA 54.1% · SimpleVQA 57.4% · MedXpertQA (MM) 65.8%.

Long context: 2M native context window.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 2.0 47.1% and Terminal-Bench 2.1 44.2% are moderate. DeepSearchQA 62.8% is solid. Gert Labs 38.36% is modest. Unique 4-agent council architecture provides built-in debate and fact-checking but no explicit tool-use benchmark like τ²-bench reported.
- **Reasoning: 53/100.** GPQA Diamond 88.5% and MMLU-Pro 86.3% are excellent. ARC-AGI-2 53.3% is strong. HLE 31.6% is moderate. However, AA Intelligence Index 26 is below average (median 27). ARC-AGI-3 0.1% is extremely low. HealthBench Hard 20.3% is modest.
- **Context window: 90/100.** 2M token context is best-in-class — among the largest available. Tiered pricing ($1.25/$2.50 under 200K, $2.50/$5.00 above) is reasonable for the capacity.
- **Multimodal: 50/100.** MMMU-Pro 75.2% is strong. MedXpertQA (MM) 65.8% is solid. CharXiv 60.9% and SimpleVQA 57.4% are moderate. ERQA 54.1% is modest. Text and image input supported; text output only.
- **Coding: 71/100.** LiveCodeBench (Vals) 84.3% and SWE-bench Verified 76.7% are outstanding. SWE-bench (Vals) 72.2% and LiveCodeBench Pro 74.2% are strong. SWE-bench Pro 51.8% is moderate. Vibe Code Bench 4.06% is very low.
- **Cost efficiency: 75/100.** $1.25/$2.50 per 1M is very competitive (below median $2/$10). 84% cache discount. 93.7 t/s output speed is above average. Multi-agent overhead may increase actual costs.
- **Overall Score: 62/100.** Mean of Tool (48) + Reasoning (53) + Context (90) + Multimodal (50) + Coding (71) = 312/5 = 62.4. Rounded to 62. The unique multi-agent council architecture, massive 2M context, and strong coding are highlights, but low AA Intelligence Index (26) and ARC-AGI-3 failure (0.1%) limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
