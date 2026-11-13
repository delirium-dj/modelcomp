# GLM-5.2 — findings by Glyph Cluster

- Source: Z AI (`zai-org/GLM-5.2`, folder slug `glm-5.2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Open-weight flagship model from Z AI for long-horizon reasoning, coding, and agentic tasks, emphasizing solid 1M-token context and high-effort problem solving.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-5.2`, MIT license). Served via Z.ai API platform and multiple inference providers (per OpenRouter/AA listings) with OpenAI-compatible APIs.
- **Release / knowledge:** Model card/blog context indicates GLM-5.2 release in June 2026 timeframe (AA lists June 2026). Knowledge cutoff not explicitly stated on fetched sources.
- **IDs:** `zai-org/GLM-5.2` (Hugging Face), `z-ai/glm-5.2` (OpenRouter/provider ID).
- **Context window:** 1,000,000 tokens (per Hugging Face model card and Artificial Analysis).
- **Modalities:** Text input and text output in fetched sources; reasoning supported.
- **Pricing (as of 2026-11-13):** Open weights (MIT); hosted pricing varies by provider. AA snapshot for GLM-5.2 (Max): ~$1.40/M input, ~$4.40/M output (cache discount ~81%). OpenRouter lists a wide provider price range.
- **Architecture:** MoE with 753B total parameters and 40B activated parameters; 1M context; MIT license (per Hugging Face/AA). Model card references architectural improvements including IndexShare and enhanced speculative decoding (MTP).

### Raw benchmarks found

> Values below are benchmark figures reported on the fetched Hugging Face model card for GLM-5.2 unless noted. Figures not present in fetched sources are marked as no verified public score found.

Reasoning / knowledge:

- HLE: **40.5** (HF card)
- HLE (w/ Tools): **54.7** (HF card)
- CritPt: **20.9** (HF card)
- AIME 2026: **99.2** (HF card)
- HMMT Nov. 2025: **94.4** (HF card)
- HMMT Feb. 2026: **92.5** (HF card)
- IMOAnswerBench: **91.0** (HF card)
- GPQA-Diamond: **91.2** (HF card)

Coding:

- SWE-bench Pro: **62.1** (HF card)
- NL2Repo: **48.9** (HF card)
- DeepSWE: **46.2** (HF card)
- ProgramBench: **63.7** (HF card)
- Terminal Bench 2.1 (Terminus-2): **81.0** (HF card)
- Terminal Bench 2.1 (Best Reported Harness): **82.7** (HF card)
- FrontierSWE (Dominance): **74.4** (HF card)
- PostTrainBench: **34.3** (HF card)
- SWE-Marathon: **13.0** (HF card)

Agentic / tool use:

- MCP-Atlas (Public Set): **76.8** (HF card)
- Tool-Decathlon: **48.2** (HF card)

Long context / multimodal / other common standalone benchmarks:

- Explicit long-context retrieval benchmark scores (e.g. MRCR/RULER/AA-LCR): no verified public score found in fetched sources beyond 1M-context capability claims.
- Multimodal benchmarks (MMMU, MathVista vision, etc.): no verified public score found in fetched sources (text-only model evidence).
- Artificial Analysis Intelligence Index: **no verified public score found** in fetched AA snapshot (reported as N/A / no publicly available API).

### Normalized scores (1–100)

> Scores are normalized 1–100 interpretations based on available evidence, not official vendor scores. Overall is the half-up mean of the five non-cost dimensions.

- **Tool use: 84/100.** Strong agentic and tool-use evidence (MCP-Atlas 76.8, Terminal Bench 2.1 81.0–82.7, HLE w/ Tools 54.7, FrontierSWE Dominance 74.4), indicating robust long-horizon tool-augmented performance, though some hard agentic suites remain challenging (Tool-Decathlon 48.2, SWE-Marathon 13.0).
- **Reasoning: 90/100.** Excellent reasoning/math/science results (AIME 2026 99.2, HMMT 94.4/92.5, IMOAnswerBench 91.0, GPQA-Diamond 91.2) with competitive but not top-tier open-ended exam performance (HLE 40.5, CritPt 20.9).
- **Context window: 90/100.** Solid 1M-token context is a core documented capability of this exact model; while standardized long-context retrieval scores were not found in fetched sources, the claimed and productized 1M long-horizon focus supports a high tier rating.
- **Multimodal: 15/100.** Text-only input/output in verified fetched evidence for this exact model/ID; no verified multimodal benchmark evidence found.
- **Coding: 86/100.** Strong coding and software-engineering performance (SWE-bench Pro 62.1, ProgramBench 63.7, Terminal Bench 2.1 81.0–82.7, FrontierSWE 74.4, NL2Repo 48.9), with mixed results on harder/longer coding evaluations (DeepSWE 46.2, PostTrainBench 34.3).
- **Cost efficiency: 78/100.** Open-weight MIT model with 40B active parameters offers deployment flexibility, but hosted pricing (around $1.40/$4.40 per 1M in AA snapshot) is higher than many efficient open alternatives; value depends on self-hosting vs API use.
- **Overall Score: 73/100.** Mean of the five non-cost dims (Tool use 84, Reasoning 90, Context 90, Multimodal 15, Coding 86) = 73.0, rounded to 73. Best fit: demanding text-only long-horizon reasoning, coding, and tool-using agent workflows where 1M context and strong benchmark performance matter.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-13 UTC
- Method: Fresh public-web research (web search unavailable with HTTP 402; fallback used direct `webfetch` of public sources). This is a re-evaluation of an existing self-excluded twin: new verified benchmark evidence was found on the official Hugging Face model card, so a scored report is produced. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass.
  - [Hugging Face — zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
  - [Artificial Analysis — GLM-5.2](https://artificialanalysis.ai/models/glm-5-2)
  - [OpenRouter — z-ai/glm-5.2](https://openrouter.ai/z-ai/glm-5.2)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
