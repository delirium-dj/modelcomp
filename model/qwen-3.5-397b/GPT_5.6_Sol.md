# Qwen3.5 397B A17B — findings by GPT 5.6 Sol

- Source: Alibaba Qwen (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B
- **Short description:** Alibaba's open-weight native vision-language MoE flagship for reasoning, coding, agents, and multimodal understanding.
- **Provider / access:** Open weights and Alibaba Model Studio; self-hosting or `qwen3.5-397b-a17b` API.
- **Release / knowledge:** Released 2026-02-16; cutoff not disclosed.
- **IDs:** `Qwen/Qwen3.5-397B-A17B`, `qwen3.5-397b-a17b`; no verified Zen Free ID.
- **Context window:** 262,144 tokens, 65,536 maximum output; hosted Plus sibling differs with 1M context ([Alibaba docs](https://www.alibabacloud.com/help/en/model-studio/qwen3-5-397b-a17b)).
- **Modalities:** Text, image, and video input; text output; thinking, tools, structured output, and web search.
- **Pricing (as of 2026-10-07):** Open weights; Alibaba China input starts at $0.172/M for ≤128K, with region/tier-dependent output pricing.
- **Architecture:** Hybrid linear-attention sparse MoE, 397B total / 17B active parameters.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Terminal-Bench 2.1 **51.3%**; τ²-Bench Telecom **95.6%** ([ModelCap evidence index](https://modelcap.ai/model/qwen-qwen3-5-397b-a17b)).
- AgentWorld baseline macro rows include **68.31**, **30.81**, **55.30**, **64.44**, **54.90**, **48.55**, **60.85**, and **54.74** across its seven agent domains/aggregate.

Reasoning / knowledge:

- HLE **29.0%**; Artificial Analysis Intelligence Index **19.1**.
- GPQA, CritPt, Omniscience: no verified exact score found in the fresh accessible sources.

Coding:

- Arena coding Elo **1491**; later public comparisons cite a coding aggregate around **76.2**.
- Exact SWE-bench/DeepSWE score was not verified.

Long context:

- No verified MRCR/RULER result found; native limit is 262K.

### Normalized scores (1–100)

- **Tool use: 82/100.** Tau2 95.6 is excellent, while Terminal-Bench 51.3 shows a lower long-horizon execution ceiling.
- **Reasoning: 80/100.** HLE 29 is strong for its release cohort, tempered by AA Index 19.1 and sparse independent science rows.
- **Context window: 86/100.** Native 262K is substantial, with no full-window retrieval result.
- **Multimodal: 86/100.** Native text/image/video input is broad, though output is text-only and exact multimodal rows were not accessible.
- **Coding: 81/100.** Coding Arena Elo 1491 supports strong development ability, capped by missing repository-agent results.
- **Cost efficiency: 95/100.** Open weights, 17B activation, and low hosted input pricing offer strong value despite a large memory footprint.
- **Overall Score: 83/100.** Half-up mean of the five non-cost dimensions; best for open multimodal reasoning and agent systems with ample hardware.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-07
- Method: Fresh public internet research using official Qwen/Alibaba documentation and independently tracked public boards; scores are normalized interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
