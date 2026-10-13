# Grok 4 Fast — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4 Fast (`opencode/grok-4-fast`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's September 2025 cost-efficient reasoning model built on Grok 4 learnings, delivering frontier-level performance at ~1/15 of Grok 4 cost. Achieves 85.7% on GPQA Diamond, 92.0% on AIME 2025, 93.3% on HMMT 2025, 80.0% on LiveCodeBench, 48.0% on SWE-bench Verified, and #1 on LMArena Search Arena (1163 Elo). 2M token context window. Unified reasoning/non-reasoning architecture. 40% fewer thinking tokens than Grok 4. 98% price reduction for same benchmark performance. Now deprecated in favor of Grok 4.1 Fast (May 2026).
- **Provider / access:** xAI (API, grok.com). Proprietary.
- **Release / knowledge:** September 19, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/grok-4-fast`
- **Context window:** 2,000,000 tokens (2M); 30,000 max output
- **Modalities:** Text and image in; text out
- **Pricing:** $0.20 in / $0.50 out per 1M (<128K); $0.40 in / $1.00 out per 1M (≥128K); $0.05 cached input

### Raw benchmarks found

Agent / tool use: BrowseComp 44.9% · SimpleQA 95.0% · Reka Research Eval 66.0% · BrowseComp (zh) 51.2% · X Bench Deepsearch (zh) 74.0% · X Browse 58.0%. Native tool-use RL training. #1 LMArena Search Arena 1163 Elo.

Reasoning / knowledge: GPQA Diamond 85.7% (xAI) / 60.0% (serenitiesai) · AIME 2025 92.0% · HMMT 2025 93.3% · HLE 20.0% · MMLU-Pro 80.0% · GSM8K 94.0% · MATH 84.0% · ARC-AGI 38.0% · Chatbot Arena ELO 1370.

Coding: LiveCodeBench 80.0% (xAI) / 52.0% (serenitiesai) · SWE-bench Verified 48.0% · HumanEval+ 85.0%.

Multimodal: Text and image input. No standard multimodal benchmarks reported.

Long context: 2M native context window. Tiered pricing above 128K.

### Normalized scores (1–100)

- **Tool use: 58/100.** BrowseComp 44.9% and X Bench Deepsearch 74.0% are strong for search. SimpleQA 95.0% is outstanding. Native tool-use RL training. #1 LMArena Search Arena 1163 Elo. No τ²-bench or standard agentic benchmark reported.
- **Reasoning: 65/100.** AIME 2025 92.0% and HMMT 2025 93.3% are outstanding. GPQA Diamond 85.7% (xAI) is excellent. MMLU-Pro 80.0% and GSM8K 94.0% are strong. However, HLE 20.0% is modest. serenitiesai reports lower GPQA Diamond 60.0% and MATH 84.0%.
- **Context window: 90/100.** 2M token context is best-in-class. Tiered pricing ($0.20/$0.50 under 128K, $0.40/$1.00 above) is very reasonable for the capacity.
- **Multimodal: 40/100.** Text and image input supported. No standard multimodal benchmarks reported. Limited compared to models with extensive vision evaluation.
- **Coding: 55/100.** LiveCodeBench 80.0% (xAI) is strong. HumanEval+ 85.0% is strong. SWE-bench Verified 48.0% is moderate. serenitiesai reports lower LiveCodeBench 52.0%.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M is extremely cheap — 98% reduction vs Grok 4 for same performance. $0.05 cached input. SOTA price-to-intelligence ratio per Artificial Analysis. 40% fewer thinking tokens than Grok 4.
- **Overall Score: 61.6/100.** Mean of Tool (58) + Reasoning (65) + Context (90) + Multimodal (40) + Coding (55) = 308/5 = 61.6. Rounded to 61. Outstanding math performance (AIME 92%, HMMT 93.3%), massive 2M context, and exceptional cost efficiency are highlights, but deprecated status, limited multimodal benchmarks, and moderate SWE-bench limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
