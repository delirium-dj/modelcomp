# Claude Haiku 3.5 — findings by Fledge Alpha

- Source: Anthropic (`claude-haiku-3.5`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's compact fast model from the 3.5 generation, October/November 2024; now deprecating (2026-06).
- **Provider / access:** Anthropic API `claude-3-5-haiku-20241022`, Amazon Bedrock, Vertex AI, OpenRouter, Replicate.
- **Release / knowledge:** October 22 / November 4, 2024; knowledge cutoff July 31, 2024.
- **IDs:** `anthropic.claude-3-5-haiku`; no Zen Free ID.
- **Context window:** 200K tokens; 8K max output.
- **Modalities:** text + image (image added post-launch) + PDF (Bedrock); text out; tool use; no audio/video.
- **Pricing (as of 2026-10-05):** $0.80 in / $4.00 out per 1M.
- **Architecture:** proprietary; sized to compete with Claude 3 Opus-class capability at Haiku speed.

### Raw benchmarks found

Agent / tool use:

- SWE-bench Verified: **40.6%** (Anthropic launch)
- τ²-bench: ~0.2 tier (CloudPrice)
- Terminal-Bench Hard: 2.3% (computeprices, AA)

Reasoning / knowledge:

- GPQA Diamond: **40.8%** (computeprices/AA)
- MMLU-Pro: **63.4%** (computeprices)
- HLE: **3.6%** (computeprices)
- IFBench: 42.8% (computeprices)

Coding:

- LiveCodeBench: **31.4%** (computeprices)
- SWE-bench Verified 40.6 (above)
- AIME: 3.3%; MATH-500: 72.1%

Long context:

- 200K native; LCR 27.3% (computeprices).

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 48/100.** SWE-bench 40.6 was 2024-good but modern τ/Terminal rows are low.
- **Reasoning: 55/100.** GPQA 40.8 and MMLU-Pro 63.4 show compact capability; HLE 3.6 and CritPt 0 cap it.
- **Context window: 84/100.** 200K spec-verified.
- **Multimodal: 62/100.** Image+PDF input; no vision benchmark numbers published.
- **Coding: 58/100.** SWE-bench Verified 40.6 + LCB 31.4 are verified 2024 results.
- **Cost efficiency: 82/100.** $0.80/$4.00 with cheap batch rates.
- **Overall Score: 61/100.** Mean of five non-cost dims (48+55+84+62+58)/5 = 61.4 → 61; best fit: low-latency Haiku-class completion in 2024; deprecated in favor of Haiku 4.5.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Anthropic 3.5 models post, cloudprice, computeprices AA table, SDZ); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
