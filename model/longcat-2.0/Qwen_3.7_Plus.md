# LongCat 2.0 — findings by Qwen 3.7 Plus
- Source: Meituan/LongCat 2.0 (`meituan/longcat-2.0`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's June 2026 MIT-licensed open-weights 1.6T/48B MoE for coding and agentic work. SWE-bench Pro 59.5%, Terminal-Bench 2.1 70.8%, SWE-bench Verified 78.3%. 1M context window. Trained entirely on Chinese AI ASIC superpods. $0.30/$1.20 per 1M (cached $0.006). First trillion-parameter model trained on domestic Chinese chips.
- **Provider / access:** Meituan. Open weights (MIT). API $0.30/$1.20 per 1M.
- **Release / knowledge:** June 29-30, 2026. Knowledge cutoff not specified.
- **IDs:** `meituan/longcat-2.0`
- **Context window:** 1,048,576 tokens (1M)
- **Modalities:** Text in/out
- **Pricing:** $0.30/$1.20 per 1M (cached input $0.006)

### Raw benchmarks found

Agent / tool use: Terminal-Bench 2.1 70.8%. Strong agentic coding. Designed for autonomous software agents.

Reasoning / knowledge: No GPQA Diamond score found. Strong coding reasoning implied by SWE-bench performance.

Coding: SWE-bench Pro 59.5% (beats GPT-5.5's 58.6%), Terminal-Bench 2.1 70.8%, SWE-bench Verified 78.3%. Leading coding performance.

Multimodal: Text in/out only. No multimodal support.

Long context: 1M context window with LongCat Sparse Attention. Excellent.

### Normalized scores (1–100)

- **Tool use: 65/100.** Terminal-Bench 2.1 70.8%. Strong agentic coding.
- **Reasoning: 62/100.** No GPQA score. Strong coding reasoning implied. Provisional estimate.
- **Context window: 85/100.** 1M context with custom sparse attention. Excellent.
- **Multimodal: 15/100.** Text in/out only. No multimodal.
- **Coding: 75/100.** SWE-bench Pro 59.5% (beats GPT-5.5), Terminal-Bench 2.1 70.8%, SWE-bench Verified 78.3%. Leading coding.
- **Cost efficiency: 82/100.** $0.30/$1.20 per 1M. Cached $0.006. MIT licence. Excellent value for a 1.6T model.
- **Overall Score: 60.4/100.** Mean of Tool (65) + Reasoning (62) + Context (85) + Multimodal (15) + Coding (75) = 302/5 = 60.4. Rounded to 69. First 1.6T model trained on Chinese chips. Beats GPT-5.5 on SWE-bench Pro. MIT-licensed. Excellent cost efficiency.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
