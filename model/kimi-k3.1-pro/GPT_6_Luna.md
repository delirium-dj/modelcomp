# Kimi K3.1 Pro — findings by GPT 6 Luna

- Source: Moonshot AI/kimi-k3.1-pro
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's post-trained Kimi K3 model for long-horizon coding, agentic workflows, 3D creation, and financial research. The regular Pro API SKU is distinct from the separately priced Highspeed serving option.
- **Provider / access:** Moonshot's OpenAI-compatible Chat Completions API at `https://api.moonshot.ai/v1`; also available in Kimi's web, Work, and Code products. API access is pay-as-you-go and the official API docs say a successful top-up of at least $1 is required. Moonshot says API Zero Data Retention is available. [API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) · [launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)
- **Release / knowledge:** Released October 23, 2026, per [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3-1-pro). No verified public knowledge-cutoff date found.
- **IDs:** First-party API: `kimi-k3.1-pro`; OpenRouter: `moonshotai/kimi-k3.1-pro`. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) · [OpenRouter listing](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
- **Context window:** 1,048,576 tokens total. The API's `max_completion_tokens` defaults to 131,072 and can be set up to 1,048,576. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) · [pricing docs](https://platform.kimi.ai/docs/pricing/chat)
- **Modalities:** Text, image, and video in; text out. Reasoning is always enabled (effort configurable as low/high/max); function/tool calling and strict JSON Schema output are supported. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
- **Pricing (as of 2026-10-24):** Standard API: $2.00/M input, $10.00/M output, $0.20/M cached input; cache writes are $2.00/M (5-minute TTL) or $4.00/M (1-hour TTL). No free API tier is listed. The separately named Highspeed SKU is not scored here. [Kimi pricing article](https://www.kimi.ai/resources/kimi-k3-1-pro-pricing)
- **Architecture:** Moonshot describes K3.1 Pro as a 3T-class open-weight model and a post-trained Kimi K3 with substantially more post-training/RL compute. As of this report date, the vendor says full weights are scheduled for release by November 4, 2026; no more precise parameter breakdown or license was verified. Artificial Analysis currently classifies it as proprietary. [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3-1-pro)

### Raw benchmarks found

> Vendor-reported results below are not independent measurements unless stated. Moonshot says its results generally use reasoning effort `max`, temperature 1.0, and top-p 0.95; individual harnesses and internal evaluations are identified where available.

Agent / tool use:

- Terminal-Bench 4.0: **65.7%** (Moonshot evaluation with Claude Code harness; realistic terminal-agent tasks with task-specific tests). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)
- BrowseComp: **92.1%** (Moonshot evaluation; its methodology notes context compaction at 200K tokens and a 500-step limit). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- OSWorld 2.1: **79.6%** (Moonshot-reported agent evaluation). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- Terminal-Bench-Science 0.1: **38.1%** (Moonshot result, as indexed with the launch post as source). [Benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Moonshot-reported). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- HLE: **70.0% with tools; 51.1% without tools** (Moonshot-reported; its methodology says the full HLE and HLE-Diamond sets contain 2,500 and 1,000 questions respectively). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- Artificial Analysis Intelligence Index: **46.0** (independent Artificial Analysis evaluation; index v5.0 combines nine evaluations including agentic, coding, science, knowledge, and reasoning tests). [Artificial Analysis model page](https://artificialanalysis.ai/models/kimi-k3-1-pro) · [index methodology](https://artificialanalysis.ai/methodology/intelligence-benchmarking)

Coding:

- DeepSWE v1.1: **75.5%** (Moonshot result, evaluated with Claude Code harness; indexed with the official launch post as source). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- Kimi Code Bench 3.0 Long-horizon: **61.2%**, versus Kimi K3 at **55.95%** (Moonshot internal coding-agent benchmark). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)
- BenchCAD Vision2Code: **92.7% with tools; 72.8% without tools** (Voxel IoU on a 1,000-case subset of the 17,900-case dataset; Moonshot reports Claude Code harness for tool runs). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)

Multimodal / grounded:

- MMMU-Pro: **84.1%**; CharXiv: **93.4%**; PerceptionBench: **68.3%** (Moonshot-reported visual evaluations). [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)

Long context:

- **1,048,576-token** context limit is documented by Moonshot; no verified long-context retrieval accuracy at 512K+ was found. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) · [pricing docs](https://platform.kimi.ai/docs/pricing/chat)

Additional independent operating metrics:

- Artificial Analysis measured **32.1 output tokens/second** and **3.10 seconds** time to first token on the first-party API; the page characterizes it as slow but reports a 46 Intelligence Index score. [Artificial Analysis model page](https://artificialanalysis.ai/models/kimi-k3-1-pro)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 4.0 at 65.7%, BrowseComp at 92.1%, and OSWorld 2.1 at 79.6% show strong agent execution; score is capped because several results are vendor-run and no matched Tau/Claw result was verified. [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)
- **Reasoning: 89/100.** GPQA Diamond at 94.2% and HLE at 70% with tools are frontier-level vendor results, while the independent Artificial Analysis Intelligence Index is 46 rather than a top-end 60+; the vendor benchmark harnesses and tool setting also limit direct comparison. [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [Artificial Analysis](https://artificialanalysis.ai/models/kimi-k3-1-pro)
- **Context window: 95/100.** The documented 1,048,576-token context reaches the ≥1M tier; no 512K+ retrieval-accuracy result was found to justify 100. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart)
- **Multimodal: 82/100.** The API accepts image and video inputs, with Moonshot reporting 84.1% on MMMU-Pro; no audio input or non-text output was verified. [Moonshot API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-1-pro-quickstart) · [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro)
- **Coding: 90/100.** DeepSWE v1.1 at 75.5%, Terminal-Bench 4.0 at 65.7%, Kimi Code Bench long-horizon at 61.2%, and BenchCAD with tools at 92.7% support a very high score; the cap reflects vendor/internal harnesses and limited independently replicated SWE-bench evidence. [Moonshot launch post](https://www.kimi.ai/blog/kimi-k3-1-pro) · [benchmark score index](https://benchlm.ai/models/kimi-3-1-pro)
- **Cost efficiency: 70/100.** Standard input is $2/M and output $10/M; cached input is substantially cheaper at $0.20/M, but this is a paid API with no free tier listed and output is relatively expensive. [Kimi pricing article](https://www.kimi.ai/resources/kimi-k3-1-pro-pricing)
- **Overall Score: 89/100.** Half-up mean of the five quality dimensions: (88 + 89 + 95 + 82 + 90) / 5 = 88.8 → 89. Best suited to long-context agentic coding, visual/CAD work, and research when its capabilities justify the slow measured generation and paid output rate.

---

## Signature

- Provided by: **GPT 6 Luna (openai/gpt-6-luna-fast)** — 2026-10-30
- Method: Fresh public web research using Moonshot's API documentation, launch post and pricing page, plus independent Artificial Analysis measurements; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
