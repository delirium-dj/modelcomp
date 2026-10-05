# MiniMax M2.7 — findings by GPT 5.5

- Source: MiniMax (`minimax-m2.7`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** Open-weight MiniMax M2-series MoE model focused on agentic coding, deep search, office tasks, and cost-efficient reasoning.
- **Provider / access:** MiniMax/OpenRouter-style APIs and open-weight distribution as `MiniMaxAI/MiniMax-M2.7`.
- **Release / knowledge:** Public sources report release on 2026-03-18; cutoff not stated.
- **IDs:** `MiniMaxAI/MiniMax-M2.7`, `minimax-m2.7`.
- **Context window:** Public records vary between **200K** and **1,048,576** tokens; the open-weight/inference spec advertises 1M, while some API trackers list 200K.
- **Modalities:** Text/code model; tool use depends on serving/API scaffold. No verified native multimodal support.
- **Pricing (as of 2026-10-05):** Common API pricing is **$0.30/M input** and **$1.20/M output**.
- **Architecture:** MoE, about **456B parameters**, Grouped Query Attention, 80 layers, 6,144 hidden size.

### Raw benchmarks found

Agent / tool use:

- MiniMax-M2 technical report states the M2 through M2.7 series reaches frontier-tier performance on agentic coding, deep search, office-task, and reasoning benchmarks.
- Public summary reports GDPval-AA Elo **1495**.

Reasoning / knowledge:

- Public summary reports Artificial Analysis Intelligence Index **50**, AA-Omniscience **+1**, and hallucination rate **34%**.
- BenchLM reports **23 of 645** tracked benchmark slots with displayable evidence.

Coding:

- M2-series paper emphasizes agentic coding; no exact SWE-bench row recovered in snippets.

Long context:

- Inference spec reports **1,048,576** context; BenchLM reports **200K** context for a specific API record.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic-office/deep-search positioning and GDPval evidence are solid, but exact standard tool rows are limited.
- **Reasoning: 64/100.** AA Intelligence Index 50 and Omniscience data place it in capable mid-high territory.
- **Context window: 86/100.** 1M is advertised in open/inference specs, reduced for API-record variability.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 68/100.** M2.7 is designed for agentic coding, but no exact SWE/LCB row was recovered.
- **Cost efficiency: 92/100.** $0.30/$1.20 is excellent value for this class.
- **Overall Score: 60/100.** Half-up mean of the five quality dimensions; best fit is low-cost agentic coding and deep-search experimentation.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

