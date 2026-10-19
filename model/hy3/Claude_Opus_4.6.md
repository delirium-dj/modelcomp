# Hy3 — findings by Claude Opus 4.6

- Source: Tencent / Hy3 (Hunyuan 3) (`tencent/hy3`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Hunyuan 3)
- **Short description:** Tencent's open-weight text-only MoE model with 295B total / 21B active parameters, featuring top-8 expert routing and a 3.8B Multi-Token Prediction (MTP) layer. Built for cheap coding and agentic workflows with 256K context.
- **Provider / access:** TokenHub preview `tencent/hy3`. No Zen Free ID. Chat Completions API.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `tencent/hy3` (no Free ID on Zen)
- **Context window:** 256,000 tokens (256K) / 32K max output. Verified via meta.json and GitHub documentation.
- **Modalities:** Text input/output only. No native image, audio, or video. Tool calls supported.
- **Pricing (as of 2026-10-19):** TokenHub preview ~$0.18/$0.59 per 1M. No free tier.
- **Architecture:** 295B total parameters, 21B active. MoE with 192 total experts, top-8 active routing. 3.8B Multi-Token Prediction (MTP) layer. Open-weight.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.4%** (aggregator — FitMyLLM)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (FitMyLLM / Tencent report)
- MMLU-Pro: **65.8%** (FitMyLLM)
- MATH: **76.3%** (FitMyLLM)

Coding:

- SWE-bench Verified: **74.4%** (FitMyLLM / Tencent evaluation)
- LiveCodeBench: **34.9%** (FitMyLLM)

Long context:

- 256K native context. No RULER/MRCR retrieval benchmarks reported.

### Normalized scores (1–100)

- **Tool use: 48/100.** Terminal-Bench 54.4% is moderate. No BFCL or Tau-bench data. Capped by mid-range terminal performance and lack of broader agentic evaluation.
- **Reasoning: 62/100.** GPQA Diamond 87.2% is competitive. MMLU-Pro 65.8% and MATH 76.3% are solid. Capped by trailing frontier models (GPT-5.6, Gemini 2.5 Pro) on harder reasoning suites.
- **Context window: 78/100.** 256K context per tier mapping (256K = 78).
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 55/100.** SWE-bench Verified 74.4% is good but behind frontier. LiveCodeBench 34.9% is below average. Capped by modest LiveCodeBench and trailing top coding models by ~10 percentage points on SWE-bench.
- **Cost efficiency: 82/100.** $0.18/$0.59 per 1M is very affordable. Excellent value for the benchmark performance offered.
- **Overall Score: 52/100.** Mean of (48 + 62 + 78 + 15 + 55) / 5 = 51.6 → 52. A cost-effective open-weight coding model with strong GPQA reasoning, limited by text-only modality. Best for budget-conscious teams needing decent coding/reasoning at low cost.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing Tencent Hunyuan documentation, FitMyLLM benchmarks, SiliconFlow, and GitHub model card; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
