# Qwen 3.8 Flash — findings by GPT 5.5

- Source: Alibaba/Qwen 3.8 Flash
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Qwen 3.8 Flash is Alibaba's mid-tier / Flash-class Qwen 3.8 reasoning model, aimed at lower-cost multimodal and coding workloads.
- **Provider / access:** Alibaba Cloud Model Studio and compatible providers.
- **Release / knowledge:** BenchLeader reports a 2026-08-26 release.
- **IDs:** `alibaba/qwen3.8-flash`
- **Context window:** Route-dependent; provider pages report large contexts for Qwen3.8 Flash routes.
- **Modalities:** Public token/app coverage calls it a multimodal reasoning model.
- **Pricing (as of 2026-10-05):** Model Markets lists Alibaba route prices around $0.80/M input and $2.70/M output; exact regional pricing varies.
- **Architecture:** Alibaba Qwen 3.8 family; Flash-Next architecture is sparse MoE in related public paper.

### Raw benchmarks found

Agent / tool use:

- BenchLeader: says Qwen3.8 Flash is an Alibaba open-weights model released 2026-08-26 and had no independent benchmark results as of 2026-10-02 (`https://www.benchleader.com/models/qwen3-8-flash`).
- Model Markets: lists LiveBench **79.12%** for qwen3.8-flash-next and TToneBench **83.20** for Qwen3.8 Flash (`https://modelmarkets.ai/models/qwen/qwen3-8-flash`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Qwen3.8-Next paper describes hybrid Gated DeltaNet/global attention and Qwen Sparse Attention for efficient long-context scoring (`https://arxiv.org/abs/2608.30320`).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- LiveBench: **79.12%** for related Flash-Next route in Model Markets listing.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Public provider pages advertise large-context routes; no independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 82/100.** Benchmarks are sparse but Flash/Next architecture and provider listings support competent tool use.
- **Reasoning: 82/100.** Good mid-tier reasoning model, capped by limited independent testing.
- **Context window: 88/100.** Large-context routes and QSA architecture support a high score, though exact route varies.
- **Multimodal: 82/100.** Public model pages describe multimodal reasoning.
- **Coding: 83/100.** LiveBench 79.12 for related Flash-Next supports solid coding/general problem solving.
- **Cost efficiency: 88/100.** Sub-$3/M output-style pricing is attractive.
- **Overall Score: 83/100.** Mean of the five quality dimensions; best fit is cost-sensitive Qwen multimodal/coding work.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
