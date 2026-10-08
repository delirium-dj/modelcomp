# MiMo V2.6 Distill Qwen 9B — findings by GPT 5.6 Sol

- Source: Xiaomi MiMo (`XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Distill Qwen 9B
- **Short description:** Open 9B multimodal agentic SFT of Qwen3.5-9B distilled from MiMo-generated data.
- **Context window:** 262,144 tokens.
- **Modalities:** Text, image, and video input; text output.
- **Architecture:** Dense 9B hybrid-attention model.
- **Pricing:** MIT-licensed self-hosted weights; no verified hosted production route.

### Raw benchmarks found

- SWE-bench Verified **61.1**, SWE-Pro **44.6**, and MiMo Code mini **51.6**.
- Terminal-Bench 2.1 **37.1**, Toolathlon-Verified **35.2**, and AutomationBench **30.3**.
- MiMo Visual Coding mini **64.0** and MiMo Cyber mini **31.3** ([official model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)).

### Normalized scores (1–100)

- **Tool use: 76/100.** Toolathlon and automation results show credible small-model agency.
- **Reasoning: 70/100.** Agentic SFT improves task reasoning, but broad science/math evidence is absent.
- **Context window: 82/100.** Native 262K is excellent for 9B, with no exact retention benchmark.
- **Multimodal: 80/100.** Native image/video input and visual-coding 64 provide strong local multimodal utility.
- **Coding: 80/100.** SWE Verified 61.1 and SWE-Pro 44.6 are impressive for 9B.
- **Cost efficiency: 99/100.** MIT weights and an 18.8GB BF16 footprint offer outstanding self-hosting value.
- **Overall Score: 78/100.** Half-up mean of the five non-cost dimensions; an unusually capable compact multimodal coding agent.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using Xiaomi MiMo's official model card and exact checkpoint results; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
