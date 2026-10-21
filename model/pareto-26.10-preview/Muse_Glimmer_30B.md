# Pareto 26.10 Preview — findings by Muse Glimmer 30B

- Source: Unbiased (unbiased/pareto-26.10-preview)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite multimodal preview (1M context, 131K out) for research, coding and agents; DeepSWE 69.9% at $0.24/task, preview with limited independent verification.
- **Provider / access:** OpenRouter `unbiased/pareto-26.10-preview` (single Unbiased-hosted provider); OpenAI-compatible Chat Completions API. Accepts tools/tool_choice for function calling; no enforced JSON response_format.
- **Release / knowledge:** 2026-10-01 release (Unbiased announcement, OpenRouter listing); knowledge cutoff unknown.
- **IDs:** `unbiased/pareto-26.10-preview` (OpenRouter); `opencode/pareto-26.10-preview` (Zen).
- **Context window:** 1,000,000 in; 131,000 max output (meta.json, Unbiased model card states ~1M in, model card does not publish an exact API limit — treated as provisional spec).
- **Modalities:** Text + image in; text out (meta.json, Unbiased model card).
- **Pricing (as of 2026-10-20):** $0.80/$3.20 per 1M in/out, cache read $0.03 (meta.json; Unbiased model card https://unbiased.ai/model-card/). No free tier (`noFreeId: true` in meta.json).
- **Architecture:** proprietary composite/blend (vendor wording); params undisclosed.

### Raw benchmarks found

> All figures below are preliminary vendor self-reported October 1, 2026 runs from Unbiased model card https://unbiased.ai/model-card/ unless noted. They may change before final publication and use a settling serving stack; competitor points are transcribed third-party results, not independently rerun.

Agent / tool use:

- Terminal-Bench 4.0: **50.8%** (Unbiased preliminary run 2026-10-01, model card; mean cost/task $0.48)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (Unbiased preliminary run 2026-10-01, model card; mean cost/task $0.004)
- HLE (text-only): **49.9%** (Unbiased preliminary run 2026-10-01, model card; mean cost/task $0.008)
- LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / BenchLM overall / Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **69.9%** (Unbiased preliminary run 2026-10-01, model card; mean cost/task $0.24; vendor notes parity with Pareto 26.9 70.0% on 30-task slice)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: **no verified public score found**

Long context / multimodal:

- No verified MRCR / RULER / GraphWalks score found; 1M window is spec-only.
- Multimodal spec: text + image in, text out; no published vision benchmark for this exact preview.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 4.0 50.8% preliminary vendor run shows frontier-parity agentic terminal ability, capped by absence of independent rerun or corroborating Tau/GDPval/Claw scores.
- **Reasoning: 92/100.** GPQA Diamond 92.4% and HLE text-only 49.9% are elite preliminary vendor results; capped for vendor-only source, preliminary status, and text-only HLE qualifier.
- **Context window: 94/100.** 1,000,000 in / 131,000 max out spec meets the 1M tier, capped at 94 with no measured retention benchmark.
- **Multimodal: 67/100.** Text + image in, text out spec confirmed in meta.json and model card; no measured vision score or video/audio support.
- **Coding: 87/100.** DeepSWE v1.1 69.9% at $0.24/task is a strong agentic-coding signal at parity with 26.9; capped for single vendor-run harness and lack of SWE-bench/LiveCodeBench corroboration.
- **Cost efficiency: 86/100.** $0.80/$3.20 per 1M with $0.03 cached is low for the performance tier, but paid with no free tier.
- **Overall Score: 85/100.** Mean of five non-cost dims (85+92+94+67+87)/5 = 85.0; best fit for preview-stage research/coding pilots where preliminary reasoning and coding at low task cost outweigh instability.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: meta.json curated metadata + Unbiased model card webfetch (https://unbiased.ai/model-card/ 2026-10-20); scores are normalized 1–100 interpretations, not official vendor scores. All raw figures are provisional vendor self-reports.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
