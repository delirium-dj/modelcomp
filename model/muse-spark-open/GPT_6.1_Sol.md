# Muse Spark Open — findings by GPT-6.1 Sol

- Source: Meta / `meta-models/Muse-Spark-Open-816B-A42B`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md); current Overall contract in `../../RULES.md`
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Muse Spark Open
- **Short description:** Meta's open-weight, multimodal coding/agent model, derived from the earlier hosted Muse Spark with additional standalone safety post-training. It is not merely the hosted Spark subscription's free tier.
- **Provider / access:** Self-hosted inference and hosted partners including Fireworks, Groq, Together, and OpenRouter; [Meta's deployment overview](https://dev.meta.ai/docs/muse-spark-open) verifies the ecosystem. OpenRouter lists `meta/muse-spark-open` for OpenAI-compatible inference; endpoint-specific limits and tool support should be checked before deployment.
- **Release / knowledge:** October 2026 according to Artificial Analysis; an exact release day and reliable knowledge cutoff were not verified in the accessed sources.
- **IDs:** `meta-models/Muse-Spark-Open-816B-A42B` (official weights); `meta/muse-spark-open` (OpenRouter). BF16/NVFP4 are checkpoint formats, not additional model families. No Zen Free ID verified.
- **Context window:** Official 1,048,576 tokens. OpenRouter's catalog advertises the same global window, but its top-provider entry reports 1,000,000 context and 262,144 maximum completion tokens; these serving limits are not extra context beyond the unified window.
- **Modalities:** Official text, image, audio, and video inputs; text output; built-in perception encoders, reasoning, and tool calling. File/document understanding is also advertised by Meta. No native non-text output verified.
- **Pricing (as of 2026-11-10):** OpenRouter catalog $1.25 input / $4.25 output / $0.15 cache read per 1M tokens ([live pricing claimant](https://openrouter.ai/api/v1/models)). Self-hosting avoids per-token vendor billing but requires substantial hardware; it is not $0 inference. No verified free hosted tier.
- **Architecture:** Official sparse MoE, 816B total / 42B active, Muse Model License and acceptable-use policy. Meta documents approximately 1.65 TB BF16 weights or 537 GB NVFP4 weights, with additional serving memory required; open weights are not an unrestricted Apache/MIT license.

### Raw benchmarks found

Meta's [model page](https://dev.meta.ai/models/muse-spark-open) has a numerical column explicitly labeled **Muse Spark Open (xhigh)**. The figures below retain that attribution. Most cells print a score without a unit; they are retained as reported rather than assigning undocumented denominators. Elo and composite/net scores are distinguished from accuracy.

Agent / tool use:

- JobBench: **61.8**; MCP-Atlas: **89.2** (Meta, reported scores).
- GDPval-AA **v2: 1401 Elo** (Meta; do not pool with unspecified older GDPval versions).
- Terminal-Bench **2.1: 76.4** (Meta; Terminus 2 agent).
- Tau3-Banking/Tau2-Bench, Claw-Eval/ClawProBench, Toolathon, and SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- HLE-Diamond: **26.1**, **no tools** (Meta; distinct from original HLE).
- AA-Omniscience: **25** (Meta; not labeled accuracy or hallucination rate, so neither is inferred).
- Artificial Analysis Intelligence Index **v5.0.1: 25**, **rank 12/26** among the page's comparison class, Xhigh ([independent profile](https://artificialanalysis.ai/models/muse-spark-open)). The identical numeral in AA-Omniscience is a different metric, not the same observation.
- GPQA Diamond, original HLE, LCR/MLCR, CritPt, and separate Omniscience accuracy/hallucination rate: no verified numerical result found.

Coding:

- DeepSWE **1.1: 60**, best-available/self-reported harness; SciCode: **58.5**; Terminal-Bench **2.1: 76.4**, Terminus 2 (Meta).
- SWE-bench Verified/SWE-Pro, LiveCodeBench, and Vibe Code Bench: no verified exact-ID public score found.

Long context:

- No verified MRCR/RULER/GraphWalks retrieval number found; the documented 1M window is not proof of near-perfect retention.

Multimodal and performance evidence:

- ZeroBench: **50.0**; BabyVision: **80.2**; SimpleVQA: **73.6**, under Meta's **multimodal with tools** heading. These are not no-tools measurements.
- Artificial Analysis independently reports **198 output tokens/s**, **10.14 seconds to first answer token**, **5.6 minutes per Intelligence Index task**, and **$2.02 per task**; endpoint/workload-dependent, not guarantees.

### Normalized scores (1–100)

- **Tool use: 89/100.** MCP-Atlas 89.2 and TB2.1 76.4 support capable agents; GDPval-AA v2 at 1401 and missing legacy tool coverage cap the score below top frontier agents.
- **Reasoning: 80/100.** Exact HLE-Diamond 26.1 and independent AA v5.0.1 at 25 support useful reasoning, but no verified GPQA/original-HLE breakdown and changed index definitions prevent a frontier maximum.
- **Context window: 95/100.** Official 1M capacity reaches the top window tier, but no measured retrieval and provider-specific limits support 100.
- **Multimodal: 93/100.** Official native audio/video/image inputs and numerical visual-task results support broad perception; text-only output and tool-assisted visual harnesses cap the score.
- **Coding: 89/100.** DeepSWE 1.1 at 60, SciCode 58.5, and TB2.1 76.4 indicate strong technical work; absent exact SWE/LiveCode results and self-reported harness selection limit the grade.
- **Cost efficiency: 86/100.** $1.25/$4.25 and fast serving offer useful paid value, but AA's $2.02/task and large self-host hardware requirements prevent treating open weights as free inference.
- **Overall Score: 89/100.** Half-up mean: (89 + 80 + 95 + 93 + 89) / 5 = 89.2, rounded to 89; cost excluded. Best suited to self-controlled multimodal agents and coding workflows with adequate infrastructure.

---

## Signature

- Provided by: **GPT 6.1 Sol (agentrouter/gpt-6.1-sol)** — 2026-11-10
- Method: Fresh public-source lookup, official Meta model/specification pages, live provider-catalog verification, and independent Artificial Analysis comparison. No peer findings read. Publisher table scores retain their printed metric labels and harnesses; normalized scores are independent interpretations, not official scores. The official Hugging Face raw card returned HTTP 401; configured search returned HTTP 402, so accessible primary pages and direct evaluator results were used.
- Reference URLs:
  - [Meta model page and exact-model benchmark column](https://dev.meta.ai/models/muse-spark-open)
  - [Meta architecture, native modalities, licensing, and context](https://dev.meta.ai/docs/muse-spark-open)
  - [OpenRouter live model/pricing catalog](https://openrouter.ai/api/v1/models)
  - [Artificial Analysis: Muse Spark Open (Xhigh)](https://artificialanalysis.ai/models/muse-spark-open)
- Future sources: Add a separately signed file and preserve this report.
