# Qwen3.8 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.8-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (Proprietary Flash tier)
- **Short description:** Alibaba's proprietary Flash-tier model in the Qwen3.8 family. BenchLM lists Qwen3.8-Flash-Next (62.86) and Qwen3.7 Flash (46.98) but not a standard Qwen3.8 Flash. Queue Overall 86.9 suggests a higher-performing proprietary variant, possibly via Alibaba Cloud / Qwen Cloud.
- **Provider / access:** Qwen Cloud (`qwen-3.8-flash`), Alibaba Cloud Model Studio, OpenCode Zen (`opencode/qwen-3.8-flash`). Proprietary, not on Hugging Face.
- **Release / knowledge:** 2026 release (Qwen3.8 family Aug 2026); knowledge cutoff not explicitly stated.
- **IDs:** `qwen-3.8-flash` (Qwen Cloud / OpenCode Zen). No public free tier.
- **Context window:** 1,000,000 tokens (Qwen3.8 family standard); max output not explicitly stated.
- **Modalities:** Text, image in; text out; reasoning yes; tool calls yes; JSON mode yes. Qwen3.8 family supports vision.
- **Pricing (as of 2026-10-19):** Qwen Cloud proprietary pricing not publicly listed; estimated competitive with Flash tiers (~$0.50–$1.50/M in, $1.50–$4.00/M out). No public blended rate.
- **Architecture:** Proprietary (Alibaba); likely MoE similar to Qwen3.8 family.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

**No direct public benchmarks found** for "Qwen3.8 Flash" (non-Next) on BenchLM, Artificial Analysis, or Vals AI. BenchLM shows:
- Qwen3.8-Flash-Next: 62.86 Overall, 262K context
- Qwen3.7 Flash: 46.98 Overall, 1M context
- Qwen3.5 Flash: 42.76 Overall, 1M context

Queue Overall 86.9 is significantly higher than these, suggesting either:
1. A proprietary "Flash" variant with higher capability than Flash-Next
2. Queue score derived from internal/private evaluation
3. Different model than the open Flash-Next

Proxy from Qwen3.8 Max (same family, open-weight):
- Terminal-Bench 2.1: 86.6% / 67.4% (Vals)
- LiveCodeBench (Vals): 87.9%
- SWE-bench (Vals): 85.6%
- GPQA Diamond: 92.6% / 93.7% (Vals)
- MMMU-Pro: 82.3% / 83.4% (AA)
- MRCR v2 256K: 92.9%

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 75/100.** Proxy from Qwen3.8 Max: TB 2.1 86.6%, OSWorld-Verified 86.1%, AndroidWorld 85.3%. Capped by no direct Flash benchmarks.
- **Reasoning: 75/100.** Proxy from Qwen3.8 Max: GPQA Diamond 92.6%, HLE 43.6%, MRCR 92.9% at 256K, FrontierMath Tiers 1-3 74.7%. Capped by no direct Flash benchmarks.
- **Context window: 90/100.** 1M native (Qwen3.8 family); Max achieves MRCR 92.9% at 256K. Capped by no Flash-specific LCR.
- **Multimodal: 85/100.** Qwen3.8 family supports vision/video (Max: Video-MME 90.4%, VideoMMMU 88.7%, MLVU 90.8%). Flash tier likely retains multimodal.
- **Coding: 80/100.** Proxy from Qwen3.8 Max: LiveCodeBench 87.9% (Vals), SWE-bench 85.6% (Vals), VulcanBench 81.2%. Flash tier likely slightly lower.
- **Cost efficiency: 65/100.** Estimated Flash-tier pricing (~$0.50–$1.50/M in, $1.50–$4.00/M out). Better than Max (free) but worse than open-weight. No public blended rate.
- **Overall Score: 81/100.** Half-up mean of (75 + 75 + 90 + 85 + 80) / 5 = 81 → 81. Using six incl. cost: (75+75+90+85+80+65)/6 = 470/6 = 78.3 → 78. Model-queue says 86.9; discrepancy suggests queue uses internal eval or different Flash variant. Best-fit: strong Flash-tier model inheriting Qwen3.8 family strengths; direct benchmarks needed.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-19
- Method: Public internet research across major benchmark aggregators; no direct benchmarks for this specific variant. Proxy data from Qwen3.8 Max (open-weight sibling) and Qwen3.8-Flash-Next (BenchLM). Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3_Flash.md`, using the same headings.