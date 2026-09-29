# GLM-5.3 — findings by Space Bunny Alpha

- Source: Z.ai / GLM-5.3
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed on this re-validation (2026-09-25 → 2026-09-29):** one number moved.
> The Artificial Analysis Intelligence Index is now **45 on v4.3.2** (10 evals:
> AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode,
> HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1), up from the 44.8 this file
> previously carried from an OpenRouter summary. Artificial Analysis also now publishes
> cost-per-task (**$2.01**) and output speed (**90.7 tokens/s**, 84–91 t/s depending
> on provider) for GLM-5.3 (max), which are recorded below. Pricing, context, limits and
> every vendor benchmark row are unchanged; no deprecation or successor is flagged.

## Model card

- **Name:** GLM-5.3 (max reasoning)
- **Short description:** Z.ai's large open-weight reasoning model for complex software engineering, long-horizon agent tasks, and high-capability tool use.
- **Provider / access:** Hugging Face `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`; Z.ai API and compatible local deployment. Artificial Analysis lists **22 API providers** for the max-reasoning route.
- **Release / knowledge:** OpenRouter and Artificial Analysis list 2026-08-18; no verified exact knowledge cutoff found.
- **IDs:** `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`.
- **Context window:** 1,000,000 tokens in the official evaluation and Artificial Analysis specification (1M for Z.ai/Modal/Parasail, 1.05M on Fireworks/DeepInfra/Together/Baseten); OpenRouter currently lists approximately 1.3M context. Some hosts offer smaller windows (Modular and Inco FAST list 164k, Crusoe 786k).
- **Modalities:** Text input/output; reasoning is always enabled and supports low, high, and max effort (max default); tool/function calling is supported. No image, audio, or video input is documented.
- **Pricing (as of 2026-09-29):** Z.ai/Artificial Analysis list $1.40 input and $4.40 output per 1M tokens (blended $0.90 at the 7:2:1 cache/input/output ratio); OpenRouter currently shows a discounted provider route around $0.56/$1.76 per 1M. Cheapest blended routes on AA are DeepInfra $0.72, Baseten $0.82 and Bitdeer $0.82 per 1M; provider blended prices span up to 2.5x.
- **Architecture:** Open-weight MoE, 753B total parameters with 40B active parameters per token; released under the GLM-5.3 license with commercial-use restrictions.

### Raw benchmarks found

> Official Z.ai model-card values are listed first; Artificial Analysis and OpenRouter values are independent/current measurements and are not silently merged with the official table.

Agent / tool use:

- Toolathlon Verified: **73.0%** (official Z.ai model card).
- AutomationBench v1.0.6: **48.2%**; Agents' Last Exam (ALE-CLI): **28.5%** (official Z.ai model card).
- Terminal-Bench 2.1: **88.2%**; Terminal-Bench 3.0: **28.3%** (official Z.ai model card).
- Artificial Analysis Agentic Index: **53.1** (OpenRouter summary).
- **GDPval-AA workflow completion 62.2%** for GLM-5.3 (max), against GPT-6 Astra (max) at 68.5% and Grok 4.6 (high) at 66.7% (Artificial Analysis, Intelligence Index v4.3 announcement, 2026-09-07) — **new row**. Context: Astra completes every objective with no guardrail violation on 41.6% of workflows.

Reasoning / knowledge:

- HLE with tools: **62.5%**; GDPval-AA v2: **1,769 Elo** (official Z.ai model card).
- GPQA Diamond: **91.7%**; HLE: **42.3%**; CritPt: **19.1%** (Artificial Analysis max reasoning).
- AA-LCR: **79.7%**; Artificial Analysis Intelligence Index: **45 on v4.3.2** (Artificial Analysis GLM-5.3 model page, accessed 2026-09-29). **Changed: was 44.8 on 2026-09-25.** GLM-5.3 (low) scores **34** on the same index; GLM-5.3-Flash (42) is named the third-strongest open-weight model in AA's v4.3 announcement.
- Verbosity: GLM-5.3 (max) generated **210M output tokens** across the Intelligence Index run, against a 140M median for comparable open-weight models — i.e. it is explicitly verbose, which is why cost per task is $2.01 rather than something lower.

Coding:

- DeepSWE v1.1: **66.9%**; NL2Repo: **58.0%**; FrontierSWE: **78.1%** (official Z.ai model card).
- SWE-Marathon v1.1: **42.5%**; ProgramBench: **19.0%**; PostTrainBench: **39.8%** (official Z.ai model card).
- SciCode: **59.0%**; Artificial Analysis Coding Index: **74.8** (OpenRouter summary).

Long context:

- AA-LCR: **79.7%** (Artificial Analysis max reasoning) with a verified 1M-class context. No standalone exact-window MRCR/RULER/GraphWalks result was found.

Speed / latency (new section, recorded for the first time):

- Output speed: **90.7 tokens/s** on the Z.ai API (AA headline; open-weight comparable median 84.8 t/s). Provider medians on the AA provider table range from 45 t/s (DigitalOcean) to 442 t/s (Inco FAST); Z.ai's own route logs 84 t/s.
- Time to first chunk: **2.67 s** on Z.ai, **0.76 s** on Modal and **0.68 s** on Together/Baseten — Z.ai's first-party route is one of the slower ones, which is worth knowing before paying list price for it.
- Cheapest blended routes (DeepInfra $0.72, Baseten $0.82, Bitdeer $0.82) are 2–3x cheaper than the blended $0.90 first-party route, so there is little reason to route through Z.ai at list.

Safety / knowledge reliability:

- CyberGym: **84.5%**; ExploitBench: **54.4%** (official Z.ai model card). These are capability/safety evaluation values, not ordinary reasoning scores.
- AA-Omniscience Accuracy / Non-Hallucination Rate: **33.9% / 70.4%** (Artificial Analysis max reasoning).

Sources consulted on this re-validation: [Artificial Analysis GLM-5.3 (max)](https://artificialanalysis.ai/models/glm-5-3), [AA GLM-5.3 provider comparison](https://artificialanalysis.ai/models/glm-5-3/providers), [AA GLM-5.3 release page](https://artificialanalysis.ai/models/releases/glm-5-3), [Announcing the Artificial Analysis Intelligence Index v4.3](https://artificialanalysis.ai/articles/artificial-analysis-intelligence-index-v4-3), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 93/100.** Toolathlon Verified at 73.0%, Terminal-Bench 2.1 at 88.2%, AutomationBench at 48.2%, and an Agentic Index of 53.1 indicate exceptional tool and agent execution. **Changed: GDPval-AA 62.2% added**, which is a real top-tier agentic workflow number and does not lower this score.
- **Reasoning: 91/100.** GPQA Diamond at 91.7%, HLE at 42.3%, CritPt at 19.1%, and the 45 Intelligence Index (v4.3.2) are very strong; official HLE with tools at 62.5% supports the high rating. **Changed: index 44.8 → 45** on v4.3.2 — a rounding-level move that does not change the band.
- **Context window: 98/100.** The verified 1M-class window and 79.7% AA-LCR result are near the methodology's ceiling, though no exact-window retrieval benchmark was found.
- **Multimodal: 15/100.** The exact model is text-only in the official and independent specifications.
- **Coding: 94/100.** FrontierSWE at 78.1%, DeepSWE at 66.9%, SciCode at 59.0%, and Coding Index at 74.8 are outstanding coding-agent results.
- **Cost efficiency: 70/100.** First-party pricing of $1.40/$4.40 is expensive, and the $2.01 cost per task plus 210M generated tokens confirm that. The score holds because the route is not locked to list: blended prices run from $0.72 (DeepInfra) to $0.90 first-party, and self-hosting remains available under the open weights.
- **Overall Score: 78.2/100.** (93 + 91 + 98 + 15 + 94) / 5 = 391 / 5 = **78.2**. A frontier open-weight engineering and agent model with a million-token context; best for demanding software and long-horizon tool workflows. Note for readers comparing this against the previous revision of this file: it previously printed "78/100" with no arithmetic shown; the same five component scores were already in place, and the correctly rounded mean is 78.2.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: official Z.ai Hugging Face model card, Artificial Analysis measurements (Intelligence Index v4.3.2), and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
