# Pareto 26.10 Preview — findings by Muse Spark 1.3

- Source: Unbiased (unbiased/pareto-26.10-preview)
- Date: 2026-10-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's multimodal composite preview for research, coding, and agentic workflows; preview of the next Pareto version that may change without notice (vendor points stable users to pareto-26.9).
- **Provider / access:** OpenRouter `unbiased/pareto-26.10-preview` (single Unbiased-hosted provider); OpenAI-compatible Chat Completions API. Accepts tools/tool_choice for function calling; no enforced JSON response_format.
- **Release / knowledge:** 2026-10-01 release (Unbiased announcement, OpenRouter listing); knowledge cutoff unknown.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter); `opencode/pareto-26.10-preview` (Zen).
- **Context window:** 1,048,576 input; 131,072 max output (OpenRouter specs, verified).
- **Modalities:** text + image in; text out (OpenRouter, verified). Reasoning undisclosed; tool calls yes; JSON mode not enforced.
- **Pricing (as of 2026-10-06):** $0.80/$3.20 per 1M in/out, cache read $0.03 (OpenRouter + Unbiased blog, verified). Zero-data-retention tier on OpenRouter/Cloudflare traffic.
- **Architecture:** proprietary composite/blend (vendor wording); params undisclosed.

### Raw benchmarks found

> Vendor-run preliminary numbers (Unbiased blog 2026-10-01, model card): serving stack still settling, may change before final publication. Competitor points on vendor charts are transcribed third-party results, not counted here.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (vendor reports Terminal-Bench 4.0 instead — see below)
- Terminal-Bench 4.0: **50.8%** (Unbiased preliminary run 2026-10-01, vendor blog + model card; mean cost/task $0.48)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased preliminary run 2026-10-01, vendor blog; science-reasoning table, mean cost/task $0.004)
- HLE: **49.9% text-only** (Unbiased preliminary run 2026-10-01, vendor blog; HLE text-only qualifier, mean cost/task $0.008)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found** (BenchLM model page renders no extractable score table as of 2026-10-06)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **DeepSWE v1.1 69.9%** (Unbiased preliminary run 2026-10-01, vendor blog + model card; mean cost/task $0.24; vendor notes parity with Pareto 26.9 70.0% on a 30-task slice and Fable 5 70.0% historical comparator)

Long context:

- No verified MRCR / RULER / GraphWalks score found; 1M window verified via spec only, no measured retention.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 4.0 50.8% preliminary vendor run is a frontier-parity agentic-terminal result; capped because it is a single vendor-run harness with a settling serving stack and no Tau/GDPval/Claw corroboration.
- **Reasoning: 94/100.** GPQA-Diamond 92.4% plus HLE text-only 49.9% are both elite preliminary vendor runs; capped because both are vendor-run, preliminary, and HLE carries a text-only qualifier with no third-party confirmation.
- **Context window: 96/100.** 1,048,576 in / 131,072 max out verified spec hits the 1M+ tier (95–100); capped at 96 with no measured MRCR/RULER retention score.
- **Multimodal: 68/100.** Text + image in, text out verified spec is above text-only but narrow (no video/audio/PDF, no measured vision score); capped by unverified vision quality.
- **Coding: 89/100.** DeepSWE v1.1 69.9% preliminary vendor run at parity with the 70.0% comparators is a strong agentic-coding signal; capped because it is a single vendor-run benchmark with no SWE-bench/LiveCodeBench/SciCode corroboration.
- **Cost efficiency: 88/100.** $0.80/$3.20 ($0.03 cached) is 57–88% below Pareto 26.9 and far below $10/$50-class frontier pricing, but paid so below a $0 tier.
- **Overall Score: 87/100.** Mean of the five non-cost dims (87+94+96+68+89)/5 = 86.8, half-up 87; best fit for agentic research/coding pilots where preliminary frontier-parity reasoning and coding at low task cost outweigh preview instability.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3)** — 2026-10-06
- Method: public internet research (Unbiased pareto-26.10-preview announcement blog 2026-10-01, Unbiased model card, OpenRouter model page specs/pricing, BenchLM model page check); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
