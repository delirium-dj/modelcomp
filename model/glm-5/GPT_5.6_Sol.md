# GLM-5 — findings by GPT 5.6 Sol

- Source: Z.AI (`z-ai/glm-5`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.AI's open-weight flagship for agentic engineering, long-horizon tool use, reasoning, and repository-scale coding.
- **Provider / access:** Z.AI serves `glm-5` through its OpenAI-compatible Chat Completions endpoint; OpenRouter serves `z-ai/glm-5`. Open weights are published as [`zai-org/GLM-5`](https://huggingface.co/zai-org/GLM-5) ([Z.AI API guide](https://docs.z.ai/guides/llm/glm-5), [OpenRouter](https://openrouter.ai/z-ai/glm-5)).
- **Release / knowledge:** Released 2026-02-11; no verified knowledge cutoff was published ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5), [OpenRouter](https://openrouter.ai/z-ai/glm-5/benchmarks)).
- **IDs:** `glm-5`, `z-ai/glm-5`, and `zai-org/GLM-5`; no OpenCode Zen Free ID was verified.
- **Context window:** 200K total with up to 128K output on Z.AI; OpenRouter displays 205K, a binary-versus-decimal presentation difference ([Z.AI API guide](https://docs.z.ai/guides/llm/glm-5), [OpenRouter](https://openrouter.ai/z-ai/glm-5/benchmarks)).
- **Modalities:** Text input and text output, optional thinking, function calling, context caching, streaming, and structured JSON output ([Z.AI API guide](https://docs.z.ai/guides/llm/glm-5)).
- **Pricing (as of 2026-10-17):** Artificial Analysis reports a $1.00/M input and $3.20/M output cross-provider median. OpenRouter currently displays a discounted $0.60/M input and $1.92/M output route, so the non-promotional median controls the cost score ([Artificial Analysis](https://artificialanalysis.ai/models/glm-5), [OpenRouter](https://openrouter.ai/z-ai/glm-5/benchmarks)).
- **Architecture:** MIT-licensed MoE with 744B total / 40B active parameters, 256 experts, 80 layers, DeepSeek Sparse Attention, and 28.5T pre-training tokens ([official model card](https://huggingface.co/zai-org/GLM-5), [technical report](https://arxiv.org/abs/2602.15763)).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2%**, or **60.7%** on Z.AI's verified-instruction variant; BrowseComp: **62.0%**, rising to **75.9%** with context management ([official model card](https://huggingface.co/zai-org/GLM-5)).
- Tau2-Bench: **89.7%** in Z.AI's table; Artificial Analysis' separately indexed run is **98.2%**, showing a material harness difference ([official model card](https://huggingface.co/zai-org/GLM-5), [BenchLM](https://benchlm.ai/models/glm-5)).
- MCP-Atlas public set: **67.8%**; Tool-Decathlon: **38.0%**; HLE with tools: **50.4%** ([official model card](https://huggingface.co/zai-org/GLM-5)).
- Independent/third-party exact-model results include Claw-Eval **57.7%**, QwenClawBench **54.1%**, Tau3-Bench **65.6%**, and Gert Labs **50.99%** ([BenchLM source index](https://benchlm.ai/models/glm-5)).

Reasoning / knowledge:

- GPQA Diamond: **86.0%** and HLE: **30.5%** in the official harness ([official model card](https://huggingface.co/zai-org/GLM-5)).
- Artificial Analysis Intelligence Index: **27.9** in the detailed feed, currently shown as an estimated **28**; AA-GPQA Diamond: **82.0%** and AA-HLE: **29.3%** ([BenchLM](https://benchlm.ai/models/glm-5), [Artificial Analysis](https://artificialanalysis.ai/models/glm-5)).
- AA-LCR: **75.7%**; CritPt: **2.0%**; Omniscience Accuracy: **26.3%** with a **35.3%** hallucination rate and **0.3** index ([BenchLM](https://benchlm.ai/models/glm-5)).
- AIME 2026 I: **92.7%** and HMMT November 2025: **96.9%** in the official evaluation ([official model card](https://huggingface.co/zai-org/GLM-5)).

Coding:

- SWE-bench Verified: **77.8%**; SWE-bench Multilingual: **73.3%**; Terminal-Bench 2.0: **56.2%** ([official model card](https://huggingface.co/zai-org/GLM-5)).
- Third-party indexed results include SWE-bench Pro **55.1%**, SWE-Rebench **62.8%**, and React Native Evals **74.8%** ([BenchLM source index](https://benchlm.ai/models/glm-5)).
- Design Arena Website: **1249 Elo**; this measures generated website quality, not image-input support ([OpenRouter benchmark indexed by BenchLM](https://benchlm.ai/models/glm-5)).

Long context:

- AA-LCR: **75.7%**; LongBench v2: **60.8%**; AI-Needle: **63.3%** at a documented 200K context limit ([BenchLM](https://benchlm.ai/models/glm-5), [Z.AI API guide](https://docs.z.ai/guides/llm/glm-5)).
- The technical report's architecture ablation reports the DSA base model at **100.0 MQ-NIAH-128K**, **97.0 MV-NIAH-128K**, **86.0 SQuAD-128K**, and **63.0 HotpotQA-128K**; these are base-model architecture results rather than the served instruct model and are treated as supporting evidence only ([technical report](https://arxiv.org/html/2602.15763)).

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 56.2%, MCP-Atlas 67.8%, Tau2 89.7%, and independent Tau3 65.6% show strong agent execution, but the terminal score and 38% Tool-Decathlon remain below frontier references.
- **Reasoning: 78/100.** GPQA 86%, HLE 30.5%, strong math, and LCR 75.7% are balanced by the modest 27.9 Intelligence Index, 2% CritPt, and mixed hallucination evidence.
- **Context window: 74/100.** The verified 200K tier starts around 70 in the methodology; LCR 75.7% and exact long-context results justify a modest lift without evidence at 500K or 1M.
- **Multimodal: 15/100.** GLM-5 is explicitly text-only; website-generation benchmarks do not establish visual input.
- **Coding: 88/100.** SWE-bench Verified 77.8%, multilingual 73.3%, and multiple independent repository benchmarks are excellent, while Terminal-Bench 56.2% and SWE-Pro 55.1% keep it below the 90s frontier band.
- **Cost efficiency: 90/100.** The stable cross-provider median of $1.00/M input and $3.20/M output is competitive but materially above the cheapest open models; the temporary OpenRouter discount is not treated as permanent pricing.
- **Overall Score: 67/100.** The five quality dimensions average 67.4; GLM-5 is best suited to text-only coding agents and long-horizon tool workflows where multimodal input is not required.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-17
- Method: Fresh public internet research across Z.AI documentation, the official model card and technical report, Artificial Analysis, BenchLM, and current provider catalogs; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
