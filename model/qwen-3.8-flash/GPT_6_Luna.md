# Qwen3.8 Flash — findings by GPT-6 Luna

- Source: Alibaba/Qwen (`qwen3.8-flash`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash
- **Short description:** Alibaba's managed, multimodal reasoning model for coding, agent workflows, visual understanding, and long-context work. It is the production QwenCloud API product; the related open-weight checkpoint is named Qwen3.8-Flash-Next.
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio API, model ID `qwen3.8-flash`; OpenAI- and Anthropic-compatible APIs are documented. API region example: `https://ap-southeast-1.maas.qwencloudapi.com/compatible-mode/v1`. Built-in function calling, code interpreter, web search, and other tools are listed. [QwenCloud model page](https://www.qwencloud.com/models/qwen3.8-flash) · [Alibaba Cloud release post](https://www.alibabacloud.com/blog/alibaba-releases-qwen3-8-flash-with-innovative-model-architecture-delivering-optimal-price-performance_603503)
- **Release / knowledge:** Alibaba Cloud's release article for Qwen3.8 Flash is dated August 27, 2026; LLM Stats lists August 26 from its model metadata. The related Flash-Next checkpoint was announced separately on August 3. No knowledge cutoff verified. [Alibaba Cloud release post](https://www.alibabacloud.com/blog/alibaba-releases-qwen3-8-flash-with-innovative-model-architecture-delivering-optimal-price-performance_603503) · [Qwen Flash-Next announcement](https://qwen.ai/blog?id=qwen3.8-flash-next) · [LLM Stats](https://llm-stats.com/models/qwen3.8-flash)
- **IDs:** QwenCloud API `qwen3.8-flash`; OpenRouter `qwen/qwen3.8-flash`. The official open-weight base checkpoint is `Qwen/Qwen3.8-Flash-Next`. Qwen's model card calls the hosted Flash endpoint the production version based on Flash-Next, with a 1M-token default context and built-in tools; benchmark results for Flash-Next below are therefore labeled as base-checkpoint results, not as direct hosted-API evaluations. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash) · [OpenRouter model API](https://openrouter.ai/api/v1/models?q=qwen3.8-flash) · [official checkpoint card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- **Context window:** QwenCloud lists 1M total context, up to 991K input and 131K output (up to 983K input while thinking); OpenRouter lists 1M context and 131,072 maximum completion tokens. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash) · [OpenRouter model API](https://openrouter.ai/api/v1/models?q=qwen3.8-flash)
- **Modalities:** Text, image, and video input; text output. The QwenCloud feature page lists image and video input and built-in tool integrations. Audio input/output was not verified for this API route. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash) · [OpenRouter model API](https://openrouter.ai/api/v1/models?q=qwen3.8-flash)
- **Pricing (as of 2026-10-28):** QwenCloud: $0.15/MTok input, $0.47/MTok output, $0.016/MTok implicit-cache reads, $0.20/MTok explicit-cache creation, and $0.016/MTok explicit-cache reads. Alibaba Cloud's August 27 launch article gives $0.16/$0.47, a small input-price difference consistent with its rounded RMB conversion; the current QwenCloud page lists $0.15/$0.47. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash) · [Alibaba Cloud release post](https://www.alibabacloud.com/blog/alibaba-releases-qwen3-8-flash-with-innovative-model-architecture-delivering-optimal-price-performance_603503)
- **Architecture:** Hosted endpoint is proprietary; weights are not separately offered under the `qwen3.8-flash` API ID. Qwen says it is based on the open-weight Flash-Next checkpoint, whose published architecture has 125B main parameters, 6B active per token, plus 51B n-gram embedding parameters, hybrid Gated DeltaNet/Qwen Sparse Attention, and a vision encoder. Do not treat those checkpoint-specific architecture details as independently confirmed properties of the hosted serving stack. [official checkpoint card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) · [Qwen Flash-Next announcement](https://qwen.ai/blog?id=qwen3.8-flash-next)

### Raw benchmarks found

> The API product is explicitly based on Flash-Next, but I found no public benchmark run clearly identified as a direct QwenCloud `qwen3.8-flash` endpoint evaluation. The following vendor scores are for the open-weight Flash-Next checkpoint and are indicative evidence for the hosted product, not a claim of an identical serving configuration. BenchmarkList also indexes Flash-Next results from outside the vendor report; differing values are preserved below.

Agent / tool use:

- Qwen's Flash-Next report: Toolathlon Verified **73.5%** pass@1; Agents' Last Exam **24.3% pass@1 / 51.2 score**; CoWorkBench **73.9%** (an in-house benchmark); JobBench **55.7%**. [Qwen Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- BenchmarkList's Flash-Next listing: Terminal-Bench 2.1 **86.1%**, GDPval-AA **1,743 Elo**, Tau3-Banking **45.4%**, BrowseComp **89.0%**, and AndroidWorld **84.5%**. This third-party compilation includes external benchmark results but does not establish that all were run against the hosted API route. [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)
- Claw-Eval / ClawProBench: **no verified result for the hosted QwenCloud endpoint found**. Flash-Next has ClawEval-MM **64.4% pass@3 / 60.4 average**, a multimodal benchmark. [Qwen Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)

Reasoning / knowledge:

- Qwen Flash-Next report: GPQA Diamond **91.7%**; HLE **35.9%** (judged by GPT-4o); IFBench **81.3%**. [Qwen Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- BenchmarkList's Flash-Next snapshot: GPQA Diamond **92.7%**, HLE **38.8%**, Artificial Analysis Intelligence Index **39.8**, and AA-LCR **79.7%**. GPQA and HLE differ from Qwen's report (91.7% and 35.9%); the page does not establish a matched prompt/harness or explain the discrepancy, so neither value is silently substituted. [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)
- BenchmarkList aggregate quality tracker is not a single official model score; no overall score for the hosted API endpoint was used. [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)

Coding:

- Qwen Flash-Next report: DeepSWE 1.1 **58.7%** (best of Claude Code and mini-SWE-agent harnesses); SWE-bench Pro **62.5%**; SWE-bench Multilingual **81.0%**; NL2Repo-Bench **48.1%**; LiveCodeBench v6 **91.9%**. The report specifies a 256K context for DeepSWE/SWE-Pro runs and notes refined task evaluation for SWE-Pro. [Qwen Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- BenchmarkList's Flash-Next compilation reports Terminal-Bench 2.1 **86.1%**, SciCode **50.6%**, and LiveCodeBench **94.1%**. The latter differs from Qwen's 91.9% v6 result; benchmark version/run alignment was not established. [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)
- General SWE-bench Verified: **no verified result found** for the hosted API route or Flash-Next in the sources checked.

Multimodal:

- Qwen's Flash-Next report: AndroidWorld **84.5%**; OSWorld 2.0 **19.4% binary / 52.3% partial**; Vision2Web **64.0%**; ERQA **72.3%**; LVBench **76.6%**; RealWorldQA **88.5%**; MathVision **90.6% without CI / 95.7% with CI**; and CharXiv-R **84.6% without CI / 90.6% with CI**. These are checkpoint results, not direct hosted API runs. [Qwen Flash-Next model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
- The QwenCloud route itself documents image/video input and text output; no audio generation or exact-route multimodal benchmark was verified. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash)

Long context:

- QwenCloud documents 1M context; Qwen says Flash-Next natively supports 262,144 tokens and extends to 1M with YaRN. BenchmarkList reports AA-LCR **79.7%** for Flash-Next, but I found no confirmed MRCR/RULER retrieval score at a specified 512K/1M length. [QwenCloud](https://www.qwencloud.com/models/qwen3.8-flash) · [Qwen Flash-Next announcement](https://qwen.ai/blog?id=qwen3.8-flash-next) · [BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)

### Normalized scores (1–100)

- **Tool use: 84/100.** Flash-Next reports 73.5% Toolathlon and strong agent results; BenchmarkList adds Terminal-Bench 2.1 at 86.1%, GDPval-AA at 1,743 Elo, and AndroidWorld at 84.5%. Scores are checkpoint results, with no direct hosted-endpoint rerun.
- **Reasoning: 88/100.** GPQA is 91.7–92.7% and HLE 35.9–38.8%; AA-LCR is 79.7% and AA Intelligence Index 39.8. The source differences and lack of an exact-route rerun limit confidence.
- **Context window: 95/100.** QwenCloud documents 1M tokens, but no retrieval evaluation at 512K/1M was verified.
- **Multimodal: 85/100.** The hosted API accepts image/video and returns text; Flash-Next has broad vision, video, and computer-use benchmark coverage, but no exact-route independent multimodal run was found.
- **Coding: 88/100.** Flash-Next reports SWE-Pro 62.5%, multilingual SWE-bench 81.0%, and LiveCodeBench v6 91.9%; BenchmarkList reports Terminal-Bench 2.1 at 86.1%, while direct hosted API scores remain unverified.
- **Cost efficiency: 98/100.** QwenCloud's $0.15/$0.47 per MTok pricing is very low; cache-read pricing is $0.016/MTok. The launch article's $0.16 input figure is a dated rounding/conversion difference.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions: (84 + 88 + 95 + 85 + 88) / 5 = 88.0. Promising for low-cost agentic coding, multimodal analysis, and long-context work; validate the exact QwenCloud endpoint and target harness before relying on checkpoint benchmark scores.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Three independent web searches (Bing, Yahoo, DuckDuckGo), then direct checks of QwenCloud, Qwen's Flash-Next announcement and Hugging Face model card, Alibaba Cloud's release post, OpenRouter model metadata, and BenchmarkList/LLM Stats. Search results for some exact benchmark queries were sparse; benchmark results are attributed to the actual checkpoint/endpoint and conflicting HLE, GPQA, LiveCodeBench, release-date, and price snapshots are identified rather than blended. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
