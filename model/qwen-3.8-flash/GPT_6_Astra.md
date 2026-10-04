# Qwen 3.8 Flash — findings by GPT 6 Astra

- Source: Alibaba Qwen / `qwen3.8-flash`
- Date: 2026-10-04 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Qwen 3.8 Flash, managed production model.
- **Short description:** Multimodal coding and agent model; the [Flash-Next card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next) identifies Flash as its managed derivative with additional production features. Hosted Flash and the downloadable checkpoint are distinguished here.
- **Provider / access / IDs:** Alibaba Model Studio, `qwen3.8-flash`; OpenAI-compatible and Anthropic-compatible protocols. No verified Zen Free ID found.
- **Release / knowledge:** Available by the September 18 vendor comparison cited below; exact hosted launch date and cutoff not independently established.
- **Context window:** 1,000,000 total, 131,072 maximum output; documented input limits 991,808 ordinary / 983,616 thinking; maximum thinking chain 262,144.
- **Modalities:** Text, image, video in; text out. Function calling, structured output, caching and regional web search supported.
- **Pricing (2026-10-04):** Singapore international CNY 1.094 input / 3.427 output / 0.117 cache hit per million tokens; Beijing CNY 0.8 / 2.7 / 0.1. Paid tier. Specifications and prices: [official model page](https://help.aliyun.com/en/model-studio/qwen3-8-flash).
- **Architecture:** Flash-Next basis: 125B language-model parameters, 6B activated, plus 51B n-gram embeddings and 4B MTP; hybrid Gated DeltaNet / sparse attention. These checkpoint details do not establish an identical hosted deployment. [Model card](https://huggingface.co/Qwen/Qwen3.8-Flash-Next).

### Raw benchmarks found

The following are the **Qwen3.8-Flash column**, not Omni-Flash, in Qwen's [September comparison](https://qwen.ai/blog?id=qwen3.8-omni-flash). Vendor measurements, not independent replications.

Agent / tool use:

- CoWorkBench: **73.9**; ClawEval-MM: **64.4 pass@3 / 60.4 average**; AndroidWorld: **84.5%**.
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA and MCP-Atlas: no verified public score found for the exact hosted ID.

Reasoning / knowledge:

- GPQA Diamond: **91.7%**; HLE: **35.9%**, GPT-4o judge; IFBench: **81.3%**.
- LCR, CritPt, Omniscience and independent Intelligence Index: no verified public score found.

Coding:

- DeepSWE 1.1: **58.7%**, best of Claude Code / mini-SWE-agent.
- SWE-bench Pro: **62.5%**, vendor-corrected tasks, Claude Code; SWE-bench Multilingual: **81.0%**, mini-SWE-agent. These used 256K context.
- LiveCodeBench v6: **91.9%**.
- SWE-bench Verified, SciCode and Vibe Code Bench: no verified public score found.

Long context:

- No verified public score found for exact hosted MRCR/RULER retrieval; LVBench video understanding **76.6%** is not a million-token retrieval measurement. [Comparison](https://qwen.ai/blog?id=qwen3.8-omni-flash).

### Normalized scores (1–100)

- **Tool use: 83/100.** CoWorkBench and multimodal agent results support strong capability; missing independent terminal and banking evaluations cap confidence.
- **Reasoning: 86/100.** Strong GPQA, with HLE below the methodology's frontier reference and no verified long-context reasoning score.
- **Context window: 95/100.** Documented million-token service reaches the top tier; no retrieval evidence supports 100.
- **Multimodal: 85/100.** Image and video input fit the video tier; no native audio input/output established.
- **Coding: 85/100.** Strong competitive and repository coding, capped by lower DeepSWE and vendor-adjusted SWE-Pro comparability.
- **Cost efficiency: 97/100.** Very low paid token prices; no permanent free entitlement assumed.
- **Overall Score: 87/100.** Half-up mean: (83 + 86 + 95 + 85 + 85) / 5 = 86.8; attractive for inexpensive multimodal agents.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04
- Method: Independent fresh public research; normalized scores are interpretations, not official vendor scores.

