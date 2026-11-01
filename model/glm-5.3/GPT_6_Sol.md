# GLM-5.3 — findings by GPT 6 Sol

- Source: Z.ai (`glm-5.3`; open weights `zai-org/GLM-5.3`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** August 2026 post-trained successor to GLM-5.2 using the **same base weights**, but a distinct released model/checkpoint with substantial coding-agent improvements ([Z.ai official card](https://huggingface.co/zai-org/GLM-5.3)). Not GLM-5.3-Flash, which is a different multimodal model.
- **Provider / access:** Z.ai `glm-5.3` via API/Coding Plan and published [`zai-org/GLM-5.3`](https://huggingface.co/zai-org/GLM-5.3) weights under a GLM-5.3-specific license (commercial use subject to terms). The [official API guide](https://docs.z.ai/guides/llm/glm-5.3) supports function calls, structured output, caching, and `low`/`high`/`max` reasoning; reasoning **cannot be disabled**. Scores below concern `max` where reported.
- **Release / knowledge:** August 2026; no verified exact knowledge-cutoff date ([Vals release record](https://www.vals.ai/models/zai_glm-5.3), [vendor release](https://z.ai/blog/glm-5.3)).
- **Context window:** **1M tokens; 128K maximum output** per [Z.ai](https://docs.z.ai/guides/llm/glm-5.3); no independent controlled near-1M retrieval score found in reviewed evidence.
- **Modalities:** **Text in/text out only**. Do not carry GLM-5.3-Flash's vision results into this checkpoint ([Z.ai model guide](https://docs.z.ai/guides/llm/glm-5.3), [independent deployment profile](https://artificialanalysis.ai/models/glm-5-3)).
- **Pricing (2026-11-01):** First-party **$1.40 input / $0.26 cached / $4.40 output per 1M tokens**; web search charged separately ([Z.ai tariff](https://docs.z.ai/guides/overview/pricing)). Self-hosting incurs substantial infrastructure costs. [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3) observes high verbosity (~140M output tokens in its full Index run), so raw token rates understate long-task cost.
- **Architecture:** 753B total / ~40B active sparse MoE, same underlying pretrained base as GLM-5.2, improvements from post-training ([Z.ai card](https://huggingface.co/zai-org/GLM-5.3), [Artificial Analysis](https://artificialanalysis.ai/models/glm-5-3)).

### Raw benchmarks found

- **Tool use / agents:** Vendor [Toolathlon Verified **73.0%**, AutomationBench v1.0.6 **48.2%**, Agents' Last Exam CLI **28.5%**, Terminal-Bench 2.1 **88.2%**](https://huggingface.co/zai-org/GLM-5.3) at documented maximum effort and long budgets. Independent [Vals](https://www.vals.ai/models/zai_glm-5.3) finds Finance Agent v2.1 **65.00% ±2.01**, Tax Agent **39.70% ±3.52**, SRE Bench **9.16% ±1.79**, Terminal-Bench **4.0 38.89% ±1.82**; [Artificial Analysis's separate TB4 run](https://huggingface.co/zai-org/GLM-5.3/discussions/32) is **41.9%**. TB4 is a different benchmark from TB2.1, not a direct contradiction. An earlier Vals TB2.1 **71.5%** used another harness; do not conflate it with Z.ai's 88.2%.
- **Reasoning:** Independent [Vals GPQA Diamond **88.13% ±1.85**, MMLU Pro **86.77% ±0.34**, Vals Index **59.73% ±1.11**](https://www.vals.ai/models/zai_glm-5.3); [Artificial Analysis Intelligence Index v5 **32**](https://artificialanalysis.ai/models/glm-5-3) is an index, not 32% accuracy. Vendor [HLE with tools **62.5%**](https://huggingface.co/zai-org/GLM-5.3) uses external tools and a judge; it does not measure unaided factual recall.
- **Coding:** Vendor [DeepSWE v1.1 **66.9%**, Terminal-Bench 3.0 **28.3%**, NL2Repo **58.0%**, CyberGym **84.5%**](https://huggingface.co/zai-org/GLM-5.3) with disclosed Claude Code/mini-swe-agent harnesses and long timeouts. Independently [Vals SWE-bench **95.40% ±0.94**, LiveCodeBench **80.53% ±1.06**, Vibe Code Bench v1.1 **78.13% ±3.94**, ProgramBench **1.50% ±0.86**](https://www.vals.ai/models/zai_glm-5.3). These task sets and agent settings are not equivalent: 95.4% SWE-bench cannot substitute for 66.9% DeepSWE. Vals' Code Migration **55.07% ±2.12** and TB4 **38.89%** temper generalization.
- **Long context / multimodal:** 1M stated context, but vendor DeepSWE used 400K and HLE used a 300K context-management strategy ([protocol footnotes](https://huggingface.co/zai-org/GLM-5.3)); neither validates near-cap retrieval. No image/audio/video input benchmark applies to this text-only model.

### Normalized scores (1–100)

- **Tool use: 79/100.** Strong vendor Toolathlon and TB2.1, independent finance-agent results, but much lower TB4/SRE outcomes.
- **Reasoning: 83/100.** Independent GPQA 88.13 and MMLU Pro 86.77; tools-enabled HLE separated from unaided reasoning.
- **Context window: 86/100.** Official 1M/128K limits, no near-cap retrieval validation.
- **Multimodal: 28/100.** Text only, no image/audio/video; distinct Flash model has vision.
- **Coding: 84/100.** DeepSWE 66.9, independent SWE-bench 95.4 and LCB 80.53, with harder ProgramBench/TB4 caution.
- **Cost efficiency: 67/100.** $1.40/$4.40 plus caching and open weights; high output verbosity and hosting footprint.
- **Overall Score: 72/100.** Half-up mean (79 + 83 + 86 + 28 + 84) / 5 = 72. Strong coding specialist, with a material text-only penalty in this five-quality-axis comparison.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01
- Method: Multiple independent search queries (including alternate search engines during native search outage), Z.ai official weights/API/pricing, Vals and Artificial Analysis evaluations. Kept benchmark versions and harnesses distinct; scores are interpretive.
- Reference URLs:
  - [Z.ai GLM-5.3 API capabilities](https://docs.z.ai/guides/llm/glm-5.3)
  - [Z.ai GLM-5.3 open-weights model card and evaluation protocols](https://huggingface.co/zai-org/GLM-5.3)
  - [Z.ai pricing](https://docs.z.ai/guides/overview/pricing)
  - [Vals independent GLM-5.3 evaluations](https://www.vals.ai/models/zai_glm-5.3)
  - [Artificial Analysis GLM-5.3 profile](https://artificialanalysis.ai/models/glm-5-3)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
