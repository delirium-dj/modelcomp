# Mistral Medium 3.5 — findings by Qwen 3.7 Plus
- Source: Mistral/Mistral Medium 3.5 (`opencode/mistral-medium-3.5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's April 2026 flagship dense 128B open-weight model unifying instruction-following, reasoning, and coding. Scores 66.4% on SWE-bench Verified (verified) / 77.6% (self-reported), 50.6% on Terminal-Bench 2.1, 94.2% on Tau2-Bench Telecom, 74.8% on GPQA Diamond, 75.3% on MMLU Pro, and 68.8% on IFBench. 256K context window. Configurable reasoning (fast/deep thinking toggle). Text and image input. AA-Omniscience Index -36.8 (high hallucination). Modified MIT license (free for individuals/startups, enterprise requires commercial arrangement). Best self-hosted on four H100 GPUs.
- **Provider / access:** Mistral AI (open weights, Modified MIT). Self-hostable. API at $1.50/$7.50 per 1M.
- **Release / knowledge:** April 29, 2026. Knowledge cutoff not specified.
- **IDs:** `opencode/mistral-medium-3.5`
- **Context window:** 256,000 tokens (256K)
- **Modalities:** Text, image in; text out
- **Pricing:** $1.50 in / $7.50 out per 1M

### Raw benchmarks found

Agent / tool use: Tau2-Bench Telecom 94.2%. Terminal-Bench 2.1 50.6%. Terminal-Bench 2.0 30.3%. GDPval-AA 936 Elo. Strong agentic tool-use capabilities. Vibe cloud coding agent opens PRs autonomously.

Reasoning / knowledge: GPQA Diamond 74.8%. MMLU Pro 75.3%. Humanity's Last Exam 13.8%. AA Intelligence Index 29.95. AIIQ Composite IQ 103. AA-Omniscience Index -36.8 (very high hallucination rate). Moderate reasoning with significant factual reliability issues.

Coding: SWE-bench Verified 66.4% (verified by AA) / 77.6% (self-reported by Mistral). Terminal-Bench 2.1 50.6%. SciCode 40.2%. ProofBench 10.0%. WebDev Arena 1265 Elo. Strong coding but not frontier-leading.

Multimodal: MMMU-Pro 64.9%. Text and image input. Vision encoder trained from scratch. Moderate multimodal capability.

Long context: 256K context window. AA-LCR 69.3%. Context Arena 17.6% / 32.0% (with thinking). Good long-context support.

### Normalized scores (1–100)

- **Tool use: 65/100.** Tau2-Bench Telecom 94.2% is excellent. Terminal-Bench 2.1 50.6% is moderate. Strong agentic tool-use with Vibe cloud agent integration.
- **Reasoning: 50/100.** GPQA Diamond 74.8% and MMLU Pro 75.3% are moderate. Humanity's Last Exam 13.8% is low. AA-Omniscience -36.8 indicates severe hallucination problems. Configurable reasoning helps but factual reliability is a major concern.
- **Context window: 75/100.** 256K context is good. Larger than Claude Sonnet 4.6 (200K) and GPT-4o (128K). AA-LCR 69.3% is solid.
- **Multimodal: 55/100.** MMMU-Pro 64.9% is moderate. Text and image input with custom vision encoder. Basic multimodal capability.
- **Coding: 60/100.** SWE-bench Verified 66.4% (verified) is good but not frontier-leading (Claude Sonnet 4.6 at 79.6%). Terminal-Bench 2.1 50.6% is moderate. Self-reported 77.6% is closer to frontier. Strong coding but not best-in-class.
- **Cost efficiency: 45/100.** $1.50/$7.50 per 1M is moderate. Cheaper than Claude Sonnet ($3/$15) but more expensive than smaller open-weight alternatives. Requires 4×H100 for self-hosting. Modified MIT license has enterprise restrictions.
- **Overall Score: 61/100.** Mean of Tool (65) + Reasoning (50) + Context (75) + Multimodal (55) + Coding (60) = 305/5 = 61. Rounded to 58 given severe hallucination issues (AA-Omniscience -36.8), moderate benchmark scores, and enterprise license restrictions. Strong agentic capabilities and good context window, but factual reliability is a significant concern.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
