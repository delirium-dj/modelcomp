# Qwen3.5 Flash — findings by GPT 6 Astra

- Source: Alibaba / Qwen3.5-Flash
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [Methodology](../../model-comparison.md)
- Cross-model signed log: [Findings](../../model-findings.md)

## Model card

- **Identity:** Production-hosted counterpart of Qwen3.5-35B-A3B, with a larger default window and managed features; exact hosted evaluations take precedence over open-checkpoint proxies.
- **IDs / access:** Alibaba `qwen3.5-flash`, functionally equivalent to `qwen3.5-flash-2026-02-23`; OpenRouter `qwen/qwen3.5-flash-02-23`; Vercel `alibaba/qwen3.5-flash`, Chat Completions-compatible access. No distinct Zen Free ID verified.
- **Release / cutoff:** Snapshot February 23, 2026; gateways may show February 25 listing date. Knowledge cutoff unverified.
- **Architecture:** Related 35B/3B-active hybrid linear-attention MoE; hosted implementation details not independently disclosed. Related checkpoint weights are Apache 2.0, but the hosted Flash route should not itself be called a downloadable checkpoint.
- **Context / output:** Official 1,000,000 total, 991,808 maximum ordinary input / 983,616 thinking input, 65,536 maximum output. Vercel lists 64,000 output, a provider-specific limit.
- **Modalities:** Text/image/video input, text output, thinking, function calling, structured output, managed web search and caching. No native audio established.
- **Pricing (2026-10-27):** Singapore $0.10 input/$0.40 output per million; explicit cache creation $0.125/read $0.01. Beijing tiers $0.029/$0.287 through 128K, $0.115/$1.147 through 256K and $0.172/$1.72 above. OpenRouter lists $0.065/$0.26. Introductory quotas are not permanent free service.

Sources: [official model documentation](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-5-flash.md), [pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing), [Vercel](https://vercel.com/ai-gateway/models/qwen3.5-flash), [OpenRouter](https://openrouter.ai/qwen/qwen3.5-flash-02-23), and [checkpoint relationship](https://huggingface.co/Qwen/Qwen3.5-35B-A3B).

### Raw benchmarks found

**Direct independent hosted-model evaluation:** [Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash), default Alibaba provider, temperature 1 and 65,536 maximum output; some tests can override provider/settings:

- GPQA Diamond **82.83% ±1.90**.
- LiveCodeBench **83.28% ±1.04**.
- SWE-bench **64.40% ±2.14** in the current table.
- Terminal-Bench **2.0 24.72% ±4.60**.
- MMLU-Pro **84.06%** and MMMU-Pro **81.91%**, labels corroborated in [BenchLM](https://benchlm.ai/models/qwen3-5-flash) and [BenchLeader](https://www.benchleader.com/models/qwen3-5-flash).
- Vals' March 2 update instead says SWE-bench Verified **54.9%**, Finance Agent **46.7%**, and Vals Index **49.6%**. These are historical/subset captures, not interchangeable with the current SWE table. Reported uncertainty is preserved as displayed, without assuming a confidence level.

**Additional independent-source aggregation:** [SuperIndex](https://superindex.app/models/alibaba/qwen3.5-flash/) and [llmmetric](https://www.llmmetric.com/models/qwen3-5-flash) attribute Epoch GPQA **82.3%**, OTIS Mock AIME **84.4%**, SimpleQA Verified **20.3%**, and FrontierMath tiers 1–3 v2 **18.2%** and **9.5%** to different configurations. The effort attribution is counterintuitive (18.2 marked no reasoning), so these are kept separate, not cherry-picked as one best-thinking profile. No directly verified exact-hosted HLE, CritPt or AA Intelligence Index result found.

**Related-checkpoint vendor evidence, provisional only:** Qwen3.5-35B-A3B card reports BFCL v4 67.3%, Tau2 81.2%, SWE Verified 69.2%, TB2 40.5%, GPQA 84.2%, HLE CoT 22.4%, AA-LCR 58.5%, LongBench v2 59.0%, MMMU-Pro 75.1%, VideoMME without subtitles 82.5%. These are not re-labeled as measurements of the hosted Flash service. In particular, the hosted Vals terminal result is substantially lower.

No verified exact-hosted 512K+ MRCR/RULER retrieval result, Claw-Eval, MCP-Atlas, Toolathon, DeepSWE or SciCode was established.

### Reconciliation

[Benchgap](https://benchgap.net/model/qwen3-5-flash) explicitly labels 36 rows as predictions; its HLE, AA index, SciCode and SWE-Pro estimates are excluded. [BenchGecko](https://benchgecko.ai/model/qwen3-5-flash-02-23) renders Arena Elo as percentages, so those malformed labels are not used. Many sites repeat the same Vals/Epoch runs and do not count as independent replications. Pricing differences reflect region, context tiers and gateway discounts, while native 1M capacity is not proof of reliable 1M retrieval.

### Normalized scores (1–100)

- **Tool use: 48/100.** Direct Vals TB2 24.72 and historical Finance Agent 46.7 outweigh stronger related-checkpoint tool proxies; autonomy is limited.
- **Reasoning: 72/100.** Two independent-source GPQA results around 82–83 and math evidence support useful reasoning, capped by SimpleQA 20.3 and missing exact HLE.
- **Context window: 95/100.** Official native hosted 1M qualifies for the bottom of the 1M tier; no verified high-recall long-window test warrants 100.
- **Multimodal: 80/100.** Direct MMMU-Pro 81.91 and documented image/video input support broad visual understanding, without audio or non-text generation.
- **Coding: 68/100.** Direct LiveCodeBench 83.28 and SWE 64.4 are useful, but low terminal execution and historical SWE disagreement cap agent coding.
- **Cost efficiency: 97/100.** $0.10/$0.40 international and cache-read $0.01 offer excellent value; regional long-context pricing is higher.
- **Overall Score: 73/100.** (48 + 72 + 95 + 80 + 68) / 5 = 72.6 → 73; inexpensive long-context visual assistance rather than high-confidence terminal autonomy.

## Signature

- Provided by: **GPT 6 Astra (openai/gpt-6-astra-ultrafast)** — 2026-10-27 UTC
- Method: Four targeted public web searches including direct independent Vals verification, primary provider specifications and cross-site reconciliation; normalized scores are interpretations, not vendor scores.
