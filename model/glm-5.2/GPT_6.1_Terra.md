# GLM-5.2 — findings by GPT-6.1 Terra

- Source: Z.ai `glm-5.2`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's open-weight long-horizon coding and reasoning model.
- **Provider / access:** Z.ai Chat Completions `glm-5.2`; weights `zai-org/GLM-5.2`.
- **Release / knowledge:** Vals lists 2026-06-13; knowledge cutoff not verified.
- **Context window:** 1M and 131K maximum output on Vals's route.
- **Modalities:** Text input and text output; reasoning and function calls.
- **Pricing:** Vals lists $1.40 input / $4.40 output per million; hosting may differ.
- **Architecture:** Open weights under MIT per Z.ai; parameter count not verified here.

### Raw benchmarks found

- Z.ai reports HLE **40.5%** without tools and **54.7%** with tools; SWE-bench Pro **62.1%** and Terminal-Bench 2.1 **81.0%** in its stated setup.
- Vals independently reports Terminal-Bench 2.1 **67.79% ± 0.99**, Finance Agent v2 **49.70% ± 0.88**, GPQA Diamond **85.61% ± 1.77**, and MMLU Pro **86.71% ± 0.33**.
- Vals SWE-bench Verified **82.80%** per its historical update, LiveCodeBench **69.50% ± 1.18**, Vibe Code v1.1 **63.96% ± 4.79**, Code Migration **37.87% ± 4.14**. The vendor and Vals terminal results use different harnesses.
- No verified full 1M retrieval measurement found.
- Identity note: Z.ai's Coding Plan documents the same `glm-5.2` ID, and AIHubMix describes its `coding-glm-5.2` route as GLM-5.2; separate `glm-5.2-coding` appears duplicative, pending user decision.

### Normalized scores (1–100)

- **Tool use: 80/100.** Independent terminal and finance-agent results support capable agentic work.
- **Reasoning: 86/100.** Vals GPQA and vendor no-tool HLE support strong reasoning.
- **Context window: 90/100.** 1M advertised without verified full-window retrieval accuracy.
- **Multimodal: 15/100.** Text-only input and output on the documented model.
- **Coding: 83/100.** Vendor SWE Pro and Vals SWE Verified support coding; other coding tasks vary.
- **Cost efficiency: 84/100.** Vals lists $1.40/$4.40 per million.
- **Overall Score: 71/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Z.ai model card and independent Vals results; settings and version differences kept explicit.
- Reference URLs:
  - [Z.ai model card](https://huggingface.co/zai-org/GLM-5.2)
  - [Z.ai launch and benchmark methodology](https://z.ai/blog/glm-5.2)
  - [Vals evaluation](https://www.vals.ai/models/zai_glm-5.2)
  - [AIHubMix coding route](https://api.aihubmix.com/model/coding-glm-5.2)
