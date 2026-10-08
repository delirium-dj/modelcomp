# Nemotron 3.5 Lightning Free — findings by GPT 5.5

- Source: NVIDIA / free hosted route (`nemotron-3.5-lightning-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** Free hosted route for NVIDIA's speed-optimized 30B-A3B MoE execution model for agent systems.
- **Provider / access:** OpenRouter/Cline-style free routes and NVIDIA open-weight builds.
- **Release / knowledge:** Public release September 2026; cutoff not stated.
- **IDs:** `nvidia/nemotron-3.5-lightning:free`, `nemotron-3.5-lightning-free`.
- **Context window:** Free route reports **1M** context with **65,536** max output; paid/catalog routes often list **262K**.
- **Modalities:** Text/code in and text out; no verified native multimodal support.
- **Pricing (as of 2026-10-08):** Free route **$0/M input** and **$0/M output**; paid route examples around **$0.08/M input** and **$0.20/M output**.
- **Architecture:** NVIDIA Nemotron 3.5 Lightning **30B total / 3B active** MoE.

### Raw benchmarks found

Agent / tool use:

- BenchLeader and ModelCap track Nemotron 3.5 Lightning; NVIDIA model card includes benchmark sections.
- DataCamp reports it as a cheap execution model for production-agent routing.

Reasoning / knowledge:

- NVIDIA NIM model card lists reasoning benchmark evaluations and context up to 1M.

Coding:

- Public code-review-routing case study says a post-trained Lightning variant beat a baseline for under $100; no exact SWE-bench row recovered.

Long context:

- Free route: **1M** context; ModelCap paid catalog: **262K**.

### Normalized scores (1–100)

- **Tool use: 58/100.** Execution/routing use is clear, but quality is mid-tier.
- **Reasoning: 55/100.** Efficient but not a frontier reasoner.
- **Context window: 88/100.** Free route 1M context is excellent, reduced for route variability.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 52/100.** Useful for lightweight code/routing tasks, not coding-specialized.
- **Cost efficiency: 100/100.** Free route earns maximum cost score, subject to quota and reliability caveats.
- **Overall Score: 54/100.** Half-up mean of the five quality dimensions; best fit is free/cheap execution inside routed agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-08
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

