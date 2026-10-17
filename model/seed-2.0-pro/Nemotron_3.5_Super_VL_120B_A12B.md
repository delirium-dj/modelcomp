# Seed 2.0 Pro — findings by Nemotron 3.5 Super VL 120B A12B

- Source: ByteDance Seed 2.0 Model Card (lf3-static.bytednsdoc.com), Volcengine Ark API `doubao-seed-2-0-pro-260215`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro (Doubao Seed 2.0 Pro)
- **Short description:** ByteDance's general-purpose agent model for long-chain reasoning, complex workflows, multimodal understanding, instruction following, and coding; released Feb 14, 2026; succeeded by Seed 2.1 series. Proprietary (weights not released).
- **Provider / access:** Volcengine Ark API (`doubao-seed-2-0-pro-260215`, OpenAI-compatible); Deep Infra, Merge Gateway, Requesty, EmpirioLabs, Ofox third-party routes. No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released February 14, 2026; knowledge cutoff January 1, 2024 (per llmboard.ai).
- **IDs:** `doubao-seed-2-0-pro-260215` (Volcengine Ark), `ByteDance/Seed-2.0-pro` (Deep Infra), `bytedance/dola-seed-2.0-pro` (Merge Gateway).
- **Context window:** 256K tokens; max output 128K (waitwhichmodel.fyi) or 131.1K (llmboard.ai) — minor conflict on max output.
- **Modalities:** Text, image, and video in; text out; native video tool-use (VideoCut) for re-inspecting footage; tool calls supported; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** $0.47 input / $2.37 output per 1M (Volcengine Ark, per model card Table 1); third-party offers range $0.475-$0.63 input / $2.37-$3.79 output per 1M. Proprietary license.
- **Architecture:** Parameter count not publicly disclosed (llmboard.ai lists N/A); proprietary closed model.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **76.5%** (verified, ByteDance model card Table 11; corroborated by evals.report, llmboard.ai, waitwhichmodel.fyi) — matches meta.json's vendor claim
- Terminal-Bench 2.0: **55.8%** (evals.report; waitwhichmodel.fyi notes this is v2.0, not tracked 2.1)
- BrowseComp: **77.30%** (llmboard.ai, Oct 16, 2026)
- DeepSearchQA: not reported

Reasoning / knowledge:
- GPQA Diamond: **88.9%** (verified, evals.report; corroborated by llmboard.ai, waitwhichmodel.fyi)
- HLE: **32.4%** (verified, evals.report; corroborated by waitwhichmodel.fyi, no-tools text-only)
- ARC-AGI-2: **37.5%** (waitwhichmodel.fyi, from model card Table 3)
- AIME 2025: **98.3%** (llmboard.ai; waitwhichmodel.fyi)
- AIME 2026: **94.20%** (llmboard.ai)
- MMLU-Pro: **87%** (waitwhichmodel.fyi, retired benchmark)

- MMMU-Pro: **78.2%** (evals.report, verified)
- LM Arena Vision: **1,274.19 rating** (llmboard.ai)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100** — Strong on SWE-bench Verified (76.5%), BrowseComp (77.3%), Terminal-Bench 2.0 (55.8%). Capped by weaker SWE-bench Pro (46.9%) and noted gaps on repository-scale coding vs Claude.
- **Reasoning: 78/100.** Strong on GPQA Diamond (88.9%), AIME 2025 (98.3%), AIME 2026 (94.2%). Capped by weak HLE (32.4%) and ARC-AGI-2 (37.5%). Excellent math/reasoning, weaker on hard open-ended reasoning.
- **Context window: 75/100.** 256K native context with 128K-131.1K max output; below 1M native models. Needle-style long-context retrieval noted as a weakness.
- **Multimodal: 75/100.** Text/image/video in, text out; MMMU-Pro 78.2%; native video tool-use (VideoCut). Capped by limited published vision benchmark coverage.
- **Coding: 72/100.** Strong on LiveCodeBench v6 (87.8%), SWE-bench Verified (76.5%). Capped by SWE-bench Pro (46.9%) and ByteDance's own admission of gaps vs Claude on repository-scale coding.
- **Cost efficiency: 50/100.** Paid-tier only; $0.47/$2.37 per 1M (Volcengine Ark); third-party up to $0.63/$3.79. Not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (70 + 78 + 75 + 75 + 72) / 5 = 74. Best-fit recommendation: a capable agent model for reasoning-heavy and math-intensive tasks at moderate cost; verify on HLE-class and agentic coding before production reliance.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench Verified 76.5% (vendor) — matches all three independent sources (evals.report, llmboard.ai, waitwhichmodel.fyi).
- meta.json claims context 256K / 65K out; waitwhichmodel.fyi reports 256K / 128K out, llmboard.ai reports 131.1K max output. Conflict on max output tokens.
- meta.json says "succeeded by Seed 2.1" — confirmed by llmboard.ai (Seed 2.1 Turbo 70.62, Seed 2.1 Pro 75.67 LLMBoard scores).
- meta.json pricingNote "Paid-tier pricing" is vague; independent sources quote $0.47/$2.37 per 1M (Volcengine Ark) with third-party variants up to $0.63/$3.79.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official ByteDance Seed 2.0 Model Card + llmboard.ai + evals.report + waitwhichmodel.fyi); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
Coding:
- LiveCodeBench v6: **87.80%** (llmboard.ai, Oct 16, 2026)
- SWE-bench Pro: **46.9%** (evals.report, verified)
- SWE Multilingual: not reported

Long context:
- No public long-context retrieval score at full 256K window; needle-style retrieval noted as a weakness by waitwhichmodel.fyi.

Multimodal:
- MMMU-Pro: **78.2%** (evals.report, verified)
- LM Arena Vision: **1,274.19 rating** (llmboard.ai)