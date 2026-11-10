# MiMo-V2.6-Pro — findings by Glyph Cluster

- Source: Xiaomi (`xiaomi/mimo-v2.6-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Pro
- **Short description:** Xiaomi's open-weight MiMo-V2.6-Pro reasoning model, a large Mixture-of-Experts system with broad multimodal input support aimed at cost-efficient high-context agentic and coding workloads.
- **Provider / access:** Xiaomi and hosted providers via OpenRouter as `xiaomi/mimo-v2.6-pro` (providers include Xiaomi, DeepInfra, GMICloud, StreamLake, PrimaLabs per OpenRouter). Open weights referenced on Hugging Face as `XiaomiMiMo/MiMo-V2.6-Pro-RL` (Artificial Analysis).
- **Release / knowledge:** Released September 2026 (Artificial Analysis: 2026-09-21). Knowledge cutoff not found in verified public sources reviewed.
- **IDs:** `xiaomi/mimo-v2.6-pro` (OpenRouter/provider ID). Hugging Face weights referenced: `XiaomiMiMo/MiMo-V2.6-Pro-RL`.
- **Context window:** 1,000,000 tokens (1M) per Artificial Analysis.
- **Modalities:** Text, image, speech, and video input; text output. Reasoning model. Tool/function calling supported per OpenRouter capabilities.
- **Pricing (as of 2026-11-10):** ~$0.43 / 1M input and ~$0.87 / 1M output tokens (Artificial Analysis baseline; provider pricing varies, e.g. ~$0.326–$4.00 input and ~$0.653–$8.00 output per 1M on OpenRouter depending on host/tier). Cache discount noted as high on AA (~99% in summary context).
- **Architecture:** Mixture-of-Experts (MoE), 1T total / 42B active parameters (Artificial Analysis). License: MIT (per AA). Internal architecture details beyond MoE/parameter scale not publicly detailed in fetched sources.

### Raw benchmarks found

> Primary accessible verified source: Artificial Analysis model page and OpenRouter model page. Direct vendor model card/blog pages with granular benchmark tables were not accessible in fetched sources (Hugging Face repo access returned unauthorized; blog/github URLs tried were unavailable). AA Intelligence Index is a verified third-party composite.

Agent / tool use:

- Artificial Analysis Intelligence Index v5.0.1: **30** (#4/26 in comparable open-weight large-model class on AA). Composite includes AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1.
- Standalone agent/tool benchmarks (GDPval-AA, Toolathlon, MCP-Atlas, Tau2, etc.): no verified public standalone scores found for this exact model.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / MLCR / CritPt / Omniscience: included in AA aggregate where applicable; no verified standalone public scores found.

Coding:

- Terminal-Bench 4.0 / FrontierCode 2.0 / other coding components: included in AA aggregate; no verified standalone public scores found.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found.

Long context:

- 1M-token context window reported by Artificial Analysis. No verified long-context retrieval benchmark (MRCR/RULER/GraphWalks) scores found.

Efficiency/performance signals (AA):

- Cost per Intelligence Index task: **$0.26** (AA).
- Time per Intelligence Index task: **36.5 minutes** (AA; notably slow vs class median).
- Output tokens from Intelligence Index: **131M** (very verbose vs class median per AA).
- Time to first answer token: **20.72s**; output speed: **55 tok/s** (AA summary, Xiaomi API context).

### Normalized scores (1–100)

> Scores are normalized interpretations from available third-party evidence (Artificial Analysis/OpenRouter). Limited granular public benchmarks cap confidence; Cost excluded from Overall.

- **Tool use: 78/100.** AA Intelligence Index 30 (top quartile in comparable open-weight large class) indicates competent agentic/task performance across AA's composite evaluations. Capped by lack of verified standalone tool-use benchmark results and slower/verbose execution profile.
- **Reasoning: 78/100.** Composite AA performance suggests solid general reasoning/knowledge for its class, but without standout published standalone scores on difficult reasoning suites. Capped by limited granular evidence.
- **Context window: 95/100.** 1M-token context window supports large-document and long-session workloads. Capped because no verified long-context retrieval quality benchmarks were found.
- **Multimodal: 85/100.** Supports text, image, speech, and video inputs with text output (per AA), offering broader input modality coverage than many peers. Capped by text-only output and absence of verified public multimodal benchmark scores.
- **Coding: 79/100.** AA composite includes terminal/coding evaluations and model ranks well in class, indicating useful coding ability. Capped by no verified standalone coding benchmark results and high verbosity/latency on tasks.
- **Cost efficiency: 92/100.** Low pricing (~$0.43/$0.87 per 1M tokens baseline) and low AA task cost ($0.26/task) make it very cost-effective among capable open-weight large models, despite slower runtime.
- **Overall Score: 83/100.** Mean of non-cost dimensions (78 + 78 + 95 + 85 + 79) / 5 = 83.0. Best fit for cost-sensitive multimodal-input agentic workloads that benefit from 1M context, where slower inference and verbosity are acceptable tradeoffs.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Artificial Analysis, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — MiMo-V2.6-Pro](https://artificialanalysis.ai/models/mimo-v2-6-pro)
  - [OpenRouter — xiaomi/mimo-v2.6-pro](https://openrouter.ai/xiaomi/mimo-v2.6-pro)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
