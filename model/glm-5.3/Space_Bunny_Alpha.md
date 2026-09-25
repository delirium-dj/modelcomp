# GLM-5.3 — findings by Space Bunny Alpha

- Source: Z.ai / GLM-5.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (max reasoning)
- **Short description:** Z.ai's large open-weight reasoning model for complex software engineering, long-horizon agent tasks, and high-capability tool use.
- **Provider / access:** Hugging Face `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`; Z.ai API and compatible local deployment.
- **Release / knowledge:** OpenRouter and Artificial Analysis list 2026-08-18; no verified exact knowledge cutoff found.
- **IDs:** `zai-org/GLM-5.3`; OpenRouter `z-ai/glm-5.3`.
- **Context window:** 1,000,000 tokens in the official evaluation and Artificial Analysis specification; OpenRouter currently lists approximately 1.3M context.
- **Modalities:** Text input/output; reasoning is always enabled and supports low, high, and max effort (max default); tool/function calling is supported. No image, audio, or video input is documented.
- **Pricing (as of 2026-09-25):** Z.ai/Artificial Analysis list $1.40 input and $4.40 output per 1M tokens; OpenRouter currently shows a discounted provider route around $0.56/$1.76 per 1M.
- **Architecture:** Open-weight MoE, 753B total parameters with 40B active parameters per token; released under the GLM-5.3 license with commercial-use restrictions.

### Raw benchmarks found

> Official Z.ai model-card values are listed first; Artificial Analysis and OpenRouter values are independent/current measurements and are not silently merged with the official table.

Agent / tool use:

- Toolathlon Verified: **73.0%** (official Z.ai model card).
- AutomationBench v1.0.6: **48.2%**; Agents' Last Exam (ALE-CLI): **28.5%** (official Z.ai model card).
- Terminal-Bench 2.1: **88.2%**; Terminal-Bench 3.0: **28.3%** (official Z.ai model card).
- Artificial Analysis Agentic Index: **53.1** (OpenRouter summary).

Reasoning / knowledge:

- HLE with tools: **62.5%**; GDPval-AA v2: **1,769 Elo** (official Z.ai model card).
- GPQA Diamond: **91.7%**; HLE: **42.3%**; CritPt: **19.1%** (Artificial Analysis max reasoning).
- AA-LCR: **79.7%**; Artificial Analysis Intelligence Index: **44.8** (OpenRouter summary).

Coding:

- DeepSWE v1.1: **66.9%**; NL2Repo: **58.0%**; FrontierSWE: **78.1%** (official Z.ai model card).
- SWE-Marathon v1.1: **42.5%**; ProgramBench: **19.0%**; PostTrainBench: **39.8%** (official Z.ai model card).
- SciCode: **59.0%**; Artificial Analysis Coding Index: **74.8** (OpenRouter summary).

Long context:

- AA-LCR: **79.7%** (Artificial Analysis max reasoning) with a verified 1M-class context. No standalone exact-window MRCR/RULER/GraphWalks result was found.

Safety / knowledge reliability:

- CyberGym: **84.5%**; ExploitBench: **54.4%** (official Z.ai model card). These are capability/safety evaluation values, not ordinary reasoning scores.
- AA-Omniscience Accuracy / Non-Hallucination Rate: **33.9% / 70.4%** (Artificial Analysis max reasoning).

### Normalized scores (1–100)

- **Tool use: 93/100.** Toolathlon Verified at 73.0%, Terminal-Bench 2.1 at 88.2%, AutomationBench at 48.2%, and an Agentic Index of 53.1 indicate exceptional tool and agent execution.
- **Reasoning: 91/100.** GPQA Diamond at 91.7%, HLE at 42.3%, CritPt at 19.1%, and the 44.8 Intelligence Index are very strong; official HLE with tools at 62.5% supports the high rating.
- **Context window: 98/100.** The verified 1M-class window and 79.7% AA-LCR result are near the methodology's ceiling, though no exact-window retrieval benchmark was found.
- **Multimodal: 15/100.** The exact model is text-only in the official and independent specifications.
- **Coding: 94/100.** FrontierSWE at 78.1%, DeepSWE at 66.9%, SciCode at 59.0%, and Coding Index at 74.8 are outstanding coding-agent results.
- **Cost efficiency: 70/100.** First-party pricing of $1.40/$4.40 is expensive, although OpenRouter currently offers a substantially discounted route and self-hosting may suit organizations with suitable hardware.
- **Overall Score: 78/100.** A frontier open-weight engineering and agent model with a million-token context; best for demanding software and long-horizon tool workflows where cost is secondary.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official Z.ai Hugging Face model card, Artificial Analysis measurements, and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same headings.
