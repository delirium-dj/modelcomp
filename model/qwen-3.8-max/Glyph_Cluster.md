# Qwen3.8 Max — findings by Glyph Cluster

- Source: Alibaba / Qwen (`qwen/qwen3.8-max`, snapshot `0902` as listed by Artificial Analysis)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (0902)
- **Short description:** Proprietary multimodal reasoning model from Alibaba's Qwen family. Public aggregator data positions it as a below-average-intelligence, high-context, paid model with relatively slow/verbose inference characteristics for its class.
- **Provider / access:** Listed by Artificial Analysis under Alibaba; API/provider comparison page indicates availability via 2 providers (exact provider IDs/endpoints not fully enumerated in fetched sources). No verified OpenCode Zen free ID found.
- **Release / knowledge:** Released 2026-09-02 (Artificial Analysis). Knowledge cutoff: no verified public value found in fetched sources.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (as referenced by Artificial Analysis). No verified OpenRouter or OpenCode route ID confirmed in this pass.
- **Context window:** 984k tokens total (Artificial Analysis; ~1475 A4 pages stated by source). Input/max output split: no verified public breakdown found.
- **Modalities:** Text and image input; text output; reasoning model (Artificial Analysis).
- **Pricing (as of 2026-11-13, per fetched source):** $2.00 / 1M input tokens, $6.00 / 1M output tokens, 88% cache discount stated (Artificial Analysis, Alibaba API pricing shown). Paid model.
- **Architecture:** Proprietary; parameter count not disclosed (Artificial Analysis FAQ).

### Raw benchmarks found

> Values below are measured figures reported by Artificial Analysis for this model where available. Benchmarks not reported in fetched sources are marked as no verified public score found.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1 (overall composite including agentic/workflow evaluations such as AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode-AA 2.0, GDP.pdf, EnterpriseOps-Gym-AA, etc.; per AA methodology): **34** (Artificial Analysis, rank shown as #50/80 in comparable class context on model page)
- AA-Briefcase v1.1 (agentic knowledge work): no verified public score found (individual sub-score not extractable from fetched page text)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA Elo / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v5.0.1 (includes AA-Omniscience v1.1, HLE-Diamond, CritPt v2 Hard Subset, Terminal-Bench-Science 0.1 among others): **34** overall (Artificial Analysis)
- AA-Omniscience v1.1 Accuracy / Non-Hallucination Rate: no verified public score found (individual sub-score not extractable from fetched page text)
- GPQA Diamond / HLE / LCR / MLCR / CritPt standalone: no verified public score found

Coding:

- Artificial Analysis Intelligence Index v5.0.1 (includes coding/engineering evaluations such as Terminal-Bench 4.0, FrontierCode-AA 2.0): **34** overall (Artificial Analysis)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- Context window: **984k tokens** (Artificial Analysis). No dedicated long-context retrieval benchmark (MRCR/RULER/GraphWalks) score found in fetched sources.

Performance/cost context (non-benchmark, from Artificial Analysis):

- Time to first answer token: **116.12s**; Output speed: **57 tok/s**; Time per Intelligence Index task: **50.4 min**; Cost per Intelligence Index task: **$10.02**; Output tokens from Intelligence Index: **150M** (all Artificial Analysis, noted as notably slow/verbose for class).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 42/100.** AA Intelligence Index v5.0.1 overall is 34 (below-average vs median 41 in comparable class), and that index includes agentic/tool-use evaluations (e.g. AA-Briefcase, AutomationBench, Terminal-Bench components). Without disclosed per-benchmark tool-use breakdowns, score is capped by limited granular evidence and below-median overall positioning.
- **Reasoning: 40/100.** Same AA overall index (34) includes reasoning/knowledge components (Omniscience, HLE-Diamond, CritPt v2 hard subset, etc.), indicating below-median general reasoning performance in that aggregate; capped by lack of standalone verified reasoning benchmark scores.
- **Context window: 93/100.** Verified 984k-token context window (Artificial Analysis) places it in the ~1M-token class, supporting very long inputs; capped slightly below top tier due to no verified >1M context or long-context retrieval benchmark evidence.
- **Multimodal: 55/100.** Verified text and image input with text output and reasoning (Artificial Analysis), but no evidence of audio/video input, image generation, or broader multimodal output; stronger than text-only, capped by limited modality coverage.
- **Coding: 41/100.** AA overall index 34 includes coding/engineering evaluations (e.g. Terminal-Bench 4.0, FrontierCode-AA 2.0), suggesting below-median coding/agentic engineering in aggregate; capped by absence of specific verified coding benchmark figures.
- **Cost efficiency: 72/100.** Paid pricing at $2.00/$6.00 per 1M input/output with 88% cache discount (Artificial Analysis) is moderate/competitive for a proprietary frontier-class offering but not free; value tempered by high task time/cost and verbosity reported by AA.
- **Overall Score: 54/100.** Mean of the five non-cost dims (Tool 42, Reasoning 40, Context 93, Multimodal 55, Coding 41) = 54.2, rounded to 54. Best fit: long-context multimodal reasoning/coding tasks where large input window matters more than top-tier benchmark efficiency or speed.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark/metadata evidence was found on Artificial Analysis (not present in the prior exclusion notes), so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Artificial Analysis — Qwen3.8 Max (0902)](https://artificialanalysis.ai/models/qwen3-8-max)
  - [Artificial Analysis — Models overview](https://artificialanalysis.ai/models)
  - [OpenRouter — Models](https://openrouter.ai/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
