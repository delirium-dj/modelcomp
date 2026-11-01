# Qwen3.5-4B — findings by GPT 6 Luna

- Source: Qwen/Qwen3.5-4B
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-4B
- **Short description:** Qwen's 4-billion-parameter open-weight vision-language model for reasoning, coding, and agentic tasks. This is the exact 4B checkpoint, not a result transferred from another Qwen3.5 size.
- **Provider / access:** Download `Qwen/Qwen3.5-4B` from Hugging Face or ModelScope and self-host with Transformers, vLLM, or SGLang. The model card also gives a DashScope-compatible Chat Completions example using `Qwen3.5-4B`; host limits and availability can vary. OpenCode Zen's current catalog has Qwen3.5 Plus but no Qwen3.5-4B ID, including no Zen Free ID.
- **Release / knowledge:** Qwen's official repository dates the 4B release to 2026-03-02; the Qwen3.5 family began on 2026-02-16. No knowledge-cutoff date was found in the model card.
- **IDs:** Hugging Face `Qwen/Qwen3.5-4B`; DashScope-compatible model name `Qwen3.5-4B` (shown in the official model-card example). No OpenCode Zen ID/free ID found. Do not substitute `qwen3.5-plus`.
- **Context window:** 262,144 tokens native; the model card documents YaRN extension up to 1,010,000, which is scaled rather than native context. The card recommends 32,768 output tokens for most use and up to 81,920 for complex benchmark tasks; this is not a verified hosted-provider hard cap.
- **Modalities:** Text and image input; video input is shown in the vLLM example; text output. Thinking is enabled by default and can be disabled with the documented template/API parameters. Tool calling is supported by the Qwen tool-call parser and Qwen-Agent examples. Audio input/output and native non-text output were not verified; JSON-mode support was not verified.
- **Pricing (as of 2026-11-01):** Apache-2.0 weights can be self-hosted without a per-token model fee (hardware and hosting still cost money). Alibaba Model Studio's published price sheet does not list this exact 4B model, so no hosted per-token price or free quota could be verified. Do not transfer the separate Qwen3.5-Plus rate. No OpenCode Zen ID/free tier was found.
- **Architecture:** 4B parameters; causal language model with vision encoder and hybrid Gated DeltaNet/gated-attention blocks. Apache-2.0 license. The exact 4B card does not state an active-parameter count.

### Raw benchmarks found

All figures below are from the Qwen3.5-4B column in Qwen's model card, so they are vendor-reported rather than an independent rerun. Benchmark harnesses differ; the card notes that TAU2-Bench uses the official setup with the airline-domain fixes proposed in the Claude Opus 4.5 system card.

Agent / tool use:

- BFCL-V4: **50.3**; TAU2-Bench: **79.9%**; VITA-Bench: **22.0**; DeepPlanning: **17.6**.
- OSWorld-Verified: **35.6%**; AndroidWorld: **58.6%**; ScreenSpot Pro: **60.3%**.
- TIR-Bench: **38.9 / 29.9** (card labels results with CI / without CI).
- Terminal-Bench 2.1, Tau3-Banking, GDPval-AA, and Claw-Eval: **no verified public score found** for this exact checkpoint.

Reasoning / knowledge:

- GPQA Diamond: **76.2%**; MMLU-Pro: **79.1**.
- HMMT Feb 2025 / Nov 2025: **74.0 / 76.8**.
- Artificial Analysis Long-Context Reasoning (AA-LCR): **57.0**; LongBench v2: **50.0**.
- HLE and Artificial Analysis Intelligence Index: **no verified public score found** for this exact checkpoint.

Coding:

- LiveCodeBench v6: **55.8%**; OJBench: **24.1**.
- SWE-bench Verified / SWE-Pro, SciCode, and Terminal-Bench coding results: **no verified public score found** for this exact checkpoint.

Vision / multimodal:

- MMMU: **77.6**; MMMU-Pro: **66.3**; MMBenchEN-DEV-v1.1: **89.4**.
- VideoMME with subtitles / without subtitles: **83.5 / 76.9**.
- These are the Qwen3.5-4B column, not the neighboring 9B results. The vendor card documents image and video inputs but no audio capability for this checkpoint.

Long context:

- Native context: **262,144 tokens**; AA-LCR: **57.0** and LongBench v2: **50.0**. The card gives no retrieval score at the optional 1,010,000-token YaRN extension.

### Normalized scores (1–100)

- **Tool use: 62/100.** TAU2-Bench 79.9% and AndroidWorld 58.6% show useful agent/tool behavior, but BFCL-V4 50.3, DeepPlanning 17.6, and OSWorld-Verified 35.6 leave a substantial reliability gap; no TB2.1, Tau3, or GDPval result was verified.
- **Reasoning: 66/100.** GPQA Diamond 76.2%, MMLU-Pro 79.1, HMMT 74.0/76.8, and AA-LCR 57 support solid mid-to-upper-tier reasoning; HLE and a cross-model intelligence index are missing.
- **Context window: 73/100.** The native 262K window falls in the 200K–500K tier; AA-LCR 57 and LongBench v2 50 provide some retrieval evidence, but do not validate the 1.01M YaRN extension.
- **Multimodal: 80/100.** Image/video input and useful MMMU/MMBench/VideoMME results exceed a text-only model, but performance is uneven (MMMU-Pro 66.3) and audio or non-text output was not verified.
- **Coding: 55/100.** LiveCodeBench v6 55.8% and OJBench 24.1 show real coding ability, but are well below the methodology's strong coding anchors; no SWE-bench or SciCode score was found.
- **Cost efficiency: 100/100.** Scored on the downloadable Apache-2.0, self-hosted route with no per-token model charge; compute is not free, and the exact hosted API price remains unverified.
- **Overall Score: 67/100.** (62 + 66 + 73 + 80 + 55) / 5 = 67.2, rounded half-up. Best suited to cost-conscious local multimodal use; the benchmark evidence does not support choosing it as a top coding/long-horizon agent.

---

## Signature

- Provided by: **GPT 6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Independent public-web research across the official Qwen model card/release notes, Alibaba Cloud provider and pricing documentation, OpenCode Zen's catalog, and external benchmark/model references. Scores are normalized 1–100 interpretations, not official vendor scores; Qwen's reported benchmark numbers were not independently rerun.
- Reference URLs:
  - [Qwen3.5-4B official model card, specifications, and benchmark tables](https://huggingface.co/Qwen/Qwen3.5-4B)
  - [QwenLM official repository and model release chronology](https://github.com/QwenLM/Qwen3.8)
  - [Qwen3.5 announcement](https://qwen.ai/blog?id=qwen3.5)
  - [Alibaba Cloud Model Studio API reference](https://www.alibabacloud.com/help/en/model-studio/qwen-api-via-dashscope)
  - [Alibaba Cloud Model Studio inference pricing](https://www.alibabacloud.com/help/en/model-studio/model-pricing)
  - [OpenCode Zen model IDs and pricing](https://opencode.ai/docs/zen)
  - [LiveCodeBench leaderboard](https://livecodebench.github.io/leaderboard.html)
  - [LLM Stats Qwen3.5-4B reference page](https://llm-stats.com/models/qwen3.5-4b)
