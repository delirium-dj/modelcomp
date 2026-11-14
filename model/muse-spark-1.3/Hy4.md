- Source: Meta/Muse Spark 1.3
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta's closed-weight multimodal reasoning model for long-horizon agent workflows and coding, released 2026-09-02 as the fourth Muse Spark iteration in five months. A distinct model version. Per the project's identity roster, every Muse Spark 1.3 tier name (Contributor / Free / Standard / Max and the -free / -max / -contributor spellings) is one model — only price and Meta's training-data use differ; reasoning_effort max is a paid-Standard option, never a separate model. No tier-duplicate folder is researched.
- **Provider / access:** Meta Model API and Muse Code at launch; slated to enter Facebook, Instagram and Meta AI apps within days of release. Chat Completions-style access (`muse-spark-1.3` model ID; a published integration example uses `https://api.meta.ai/muse/v1`, but that snippet is illustrative developer code, not a verified vendor endpoint).
- **Release / knowledge:** 2026-09-02 (US time); knowledge cutoff: no verified public score found.
- **IDs:** `muse-spark-1.3` (as cited in launch coverage); `meta/muse-spark-1.3` family ID. No free Zen ID verified.
- **Context window:** 1,000,000 tokens (OSCHINA launch analysis); input / max-output split: no verified public score found.
- **Modalities:** text, image, video and document input; text output (described as a closed-source multimodal reasoning model). Extended reasoning with existing effort tiers; the highest `max` tier was still awaiting additional safety testing at launch. Native tool use for agentic coding. No verified audio input or non-text output.
- **Pricing (as of 2026-11-14):** no verified per-1M-token price found in the pages retrieved this pass; coverage claims a large (~8x) inference-cost reduction for the series, but that is a secondary-source headline, not a vendor price sheet. Free/Contributor/Standard/Max are access tiers of the same weights.
- **Architecture:** Proprietary, closed weights ("权重保持封闭"); not an architectural rebuild of the series. Parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis general-intelligence independent test: **62 points** (Baidu Baike, as reported at launch)
- Reported global rank **#6** at launch (OSCHINA headline)
- Tool-call count in coding tasks: **~20% fewer** than Muse Spark 1.2; token usage **~25% fewer** (Meta's launch claim via Baidu Baike)
- Long-horizon agent / coding improvements over 1.2, including a claim of beating GPT-5.6 Sol on programming tasks (secondary-source headline, no reproducible harness)
- Terminal-Bench 4.0 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- AA general-intelligence score **62** as above; no AA Index v5.0 figure verified for this ID
- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- Reported to beat GPT-5.6 Sol on programming tasks (secondary-source launch headline; exact benchmark and score not published in the retrieved pages)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M-token context window as above; no MRCR / RULER / GraphWalks retrieval figure found for this exact ID — no verified public score found

### Normalized scores (1–100)

- **Tool use: 92/100.** A 62-point AA general-intelligence result, #6 global placement and ~20% fewer tool calls / ~25% fewer tokens on coding workflows than 1.2 support a strong agentic profile; capped because no named agent harness (Terminal-Bench, τ-bench, GDPval) score was verifiable for this exact ID.
- **Reasoning: 93/100.** The independent AA score of 62 is at the frontier for its release window and the model is explicitly positioned as a reasoning model with effort tiers; capped by the absence of GPQA/HLE figures and by the `max` tier being withheld pending safety testing at launch.
- **Context window: 95/100.** A verified 1M-token window; capped because the input/output split and any long-context retrieval measurement (GraphWalks/MRCR/RULER) could not be verified.
- **Multimodal: 90/100.** Text/image/video/document input is broad coverage; capped by text-only output, no verified audio input, and no published multimodal benchmark score.
- **Coding: 93/100.** Coding and long-horizon agents are the release's central focus, with credible efficiency gains and a headline win over GPT-5.6 Sol; capped because no reproducible SWE-bench / LiveCodeBench / FrontierSWE number was published in the retrieved sources.
- **Cost efficiency: 80/100.** A large series-level inference-cost reduction and free/low-cost access tiers are reported; capped because no vendor per-token price sheet was retrievable this pass, so the figure is indicative rather than verified. Excluded from Overall.
- **Overall Score: 93/100.** Half-up mean of 92, 93, 95, 90, 93 = 92.6 → 93. Best fit: long-running coding agents on a 1M-token budget where tool-call and token efficiency matter.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Muse Spark 1.3 article (release date, AA score, efficiency deltas, closed weights), the OSCHINA launch analysis (context window, modality list, global rank) plus 36Kr/CSDN launch coverage. Secondary-source headlines are explicitly labelled as such and are not treated as measured benchmarks; every raw row without a retrievable figure is marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores. Identity/tier handling follows the project's single generated identity roster, not a new folder.
- Reference URLs: only URLs actually fetched this pass.
  - [Muse Spark 1.3 — 百度百科 (release, AA score, closed weights, efficiency)](https://baike.baidu.com/item/Muse%20Spark%201.3/68841681)
  - [刚刚！Meta Muse Spark 1.3 发布，全球第 6 — OSCHINA (1M context, modalities)](https://my.oschina.net/u/9487999/blog/19753836)
  - [Muse Spark 1.3 来了，Meta 开始拼 AI 智能体效率 — 36氪](https://36kr.com/p/3967796330082819)
