# Qwen 3.8 27B — findings by GPT 5.5

- Source: Alibaba/Qwen 3.8 27B
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** Qwen 3.8 27B is a local/open-weight Qwen 3.8 model popular for offline coding-agent use on high-memory consumer/prosumer machines.
- **Provider / access:** Local inference, Hugging Face/quantized routes, Alibaba/Qwen ecosystem.
- **Release / knowledge:** Public local benchmarking and user reports appeared in September/October 2026.
- **IDs:** `qwen/qwen3.8-27b`
- **Context window:** Public local reports cite 262K context; some deployments run lower for performance.
- **Modalities:** Text model in the available local reports; multimodal support not verified.
- **Pricing (as of 2026-10-05):** Open/local weights; cost depends on local hardware. Alibaba deployment billing pages list Qwen3.8-27B deployment pricing, not simple token API pricing.
- **Architecture:** 27B-parameter Qwen 3.8 model; quantized Q4/Q6/Q8 variants common.

### Raw benchmarks found

Agent / tool use:

- LocalLLaMA user reports: Qwen3.8-27B used for coding/agent workloads, including 262K context and local deployment reports (`https://www.reddit.com/r/LocalLLaMA/comments/1vrjk4m/qwen_38_27b_saved_me_650_in_api_costs_this_evening/`).
- Qwen 3.8 27B local comparison: reports Q4 around **21 tokens/s** on M2 Max 96GB, with caveats that the test was not a definitive intelligence benchmark (`https://www.reddit.com/r/LocalLLM/comments/1wsj8u0/qwen_38_27b_q4q6q8_vs_qwen_38_flashnext_on_a_96gb/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Local reports emphasize practical coding and structured-output tests planned, but no public GPQA/HLE rows were found.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- User reports describe replacing cloud subscriptions for agentic coding and saving substantial API cost; no controlled SWE/LCB score found.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 262K context is reported in local usage; no independent MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Practical local-agent reports are positive, capped by absent standardized tool benchmarks.
- **Reasoning: 76/100.** Strong for a 27B local model, below hosted frontier/large MoE variants.
- **Context window: 84/100.** 262K context is very good for local inference, below 1M cloud models.
- **Multimodal: 35/100.** No verified multimodal support found.
- **Coding: 80/100.** Popular for local coding agents, capped by missing SWE/LCB rows.
- **Cost efficiency: 96/100.** Local/open deployment can avoid large API bills if hardware is available.
- **Overall Score: 70/100.** Mean of the five quality dimensions; best fit is offline/local coding with privacy and cost control.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
