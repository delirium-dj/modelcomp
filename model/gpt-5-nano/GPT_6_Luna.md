# GPT-5 Nano — findings by GPT-6 Luna

- Source: OpenAI/GPT-5 Nano
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5 Nano
- **Short description:** OpenAI's smallest GPT-5 API model, positioned for fast, low-cost summarization and classification. It is a distinct reasoning-enabled API model, not GPT-5.4 Nano; OpenAI now marks it deprecated.
- **Provider / access:** OpenAI API model ID `gpt-5-nano`, supported on Responses and Chat Completions. The current OpenAI model documentation marks the snapshot deprecated. OpenCode's model-data catalog records the provider-qualified ID `openai/gpt-5-nano`; that catalog listing is not treated as confirmation of a current OpenCode Zen route.
- **Release / knowledge:** Released August 7, 2025; default snapshot `gpt-5-nano-2025-08-07`; knowledge cutoff May 31, 2024. OpenAI recommends newer models for new deployments.
- **IDs:** `gpt-5-nano`; dated snapshot `gpt-5-nano-2025-08-07` (deprecated).
- **Context window:** 400,000 total: up to 272,000 input and 128,000 reasoning/output tokens, per OpenAI's model documentation.
- **Modalities:** Text and image input; text output. Reasoning token support, function calling, structured outputs, and built-in tools are documented. No audio/video input or non-text output verified.
- **Pricing (as of 2026-11-01):** OpenAI API: $0.05 per 1M input tokens, $0.005 cached input, and $0.40 output. Paid; no free OpenAI API ID documented.
- **Architecture:** Proprietary; parameter count and architecture details not disclosed.

### Raw benchmarks found

OpenAI's developer benchmark tables report a separate **GPT-5 Nano (high)** column. The figures below are only for Nano; the explicitly identified no-tools/Python task setups are retained. No results from base GPT-5, GPT-5 mini, or GPT-5.4 Nano are transferred.

Agent / tool use:

- Tau2-Bench (high reasoning): Airline **41.0%**, Retail **62.3%**, Telecom **35.5%** (OpenAI developer evaluation).
- Scale MultiChallenge (high; o3-mini grader): **54.9%**; COLLIE (high): **96.9%** (OpenAI developer evaluation).
- Tau2-Bench Telecom on Artificial Analysis: **36.5%**, independently measured/collated; different evaluation record from OpenAI's 35.5% and not substituted for it.
- Berkeley Function-Calling Leaderboard overall accuracy: **51.5%**, rank 20/85 (BenchmarkList record, sampled 2026-05-27).
- Terminal-Bench Hard: **17.4%**, rank 118/326 (BenchmarkList record, sampled 2026-06-10; Hard subset, not Terminal-Bench 2.1).
- GDPval-AA: **756 Elo**, rank 171/358 (BenchmarkList record, sampled 2026-05-28).
- Claw-Eval / ClawProBench: no verified public score found.

Reasoning / knowledge:

- AIME 2025, no tools: **85.2%**; HMMT 2025, no tools: **75.6%** (OpenAI, GPT-5 Nano high).
- GPQA Diamond, no tools: **71.2%**; HLE, no tools: **8.7%**; FrontierMath with Python tool: **9.6%** (OpenAI, GPT-5 Nano high).
- Artificial Analysis Intelligence Index: **19.87**, rank 158/324 in BenchmarkList's record sampled 2026-07-21. Artificial Analysis now marks the model deprecated and does not update most workloads.

Coding:

- SWE-bench Verified: **54.7%** (OpenAI, GPT-5 Nano high; OpenAI omits 23 of 500 tasks that did not reliably run on its infrastructure).
- Aider Polyglot, diff format: **48.4%** (OpenAI, GPT-5 Nano high).
- LiveCodeBench: **70.2%**, thinking mode high, rank 77/123 (BenchmarkList record, sampled 2026-07-28).

Long context:

- OpenAI-MRCR, 2-needle: **43.2% at 128K** and **34.9% at 256K** (OpenAI, GPT-5 Nano high).
- BrowseComp Long Context: **80.4% at 128K** and **68.4% at 256K**; Graphwalks BFS <128K **64.0%** and Parents <128K **43.8%** (OpenAI, GPT-5 Nano high).

Image benchmarks (OpenAI, GPT-5 Nano high): MMMU **75.6%** and MMMU-Pro **62.6%**. These are image-capability evaluations, not evidence of video input support.

### Normalized scores (1–100)

- **Tool use: 64/100.** Tau2 results range from 35.5% to 62.3%, with BFCL at 51.5%; this indicates useful basic tool calling but mixed multi-step agent performance. OpenAI's high COLLIE score is a positive instruction-following result, while the low Terminal-Bench Hard score caps the assessment. Sources: [OpenAI](https://openai.com/index/introducing-gpt-5-for-developers/), [BenchmarkList](https://benchmarklist.com/models/openai-gpt-5-nano/).
- **Reasoning: 66/100.** AIME 2025 at 85.2% is strong, but GPQA Diamond is 71.2% and HLE 8.7% (all no-tools, high effort), placing it below frontier on difficult broad reasoning. Source: [OpenAI](https://openai.com/index/introducing-gpt-5-for-developers/).
- **Context window: 73/100.** The specified 400K total context falls in the 200K–500K tier, but MRCR declines to 34.9% at 256K; the nominal window is not evidence of consistently strong retrieval at its upper end. Sources: [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5-nano), [OpenAI](https://openai.com/index/introducing-gpt-5-for-developers/).
- **Multimodal: 65/100.** Image input is supported and Nano scores 75.6% MMMU / 62.6% MMMU-Pro; output remains text-only and no audio/video modality is verified. Sources: [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5-nano), [OpenAI](https://openai.com/index/introducing-gpt-5-for-developers/).
- **Coding: 67/100.** SWE-bench Verified is 54.7% and Aider Polyglot 48.4% at high effort; independent LiveCodeBench is 70.2% high. The mixed results show practical coding competence, not a leading coding profile. Sources: [OpenAI](https://openai.com/index/introducing-gpt-5-for-developers/), [BenchmarkList](https://benchmarklist.com/models/openai-gpt-5-nano/).
- **Cost efficiency: 99/100.** At $0.05/$0.40 per 1M input/output tokens, Nano is exceptionally inexpensive; it is still paid, and its deprecated status makes it a poor default for new integrations. Source: [OpenAI model documentation](https://developers.openai.com/api/docs/models/gpt-5-nano).
- **Overall Score: 67/100.** Half-up mean of the five quality dimensions: (64 + 66 + 73 + 65 + 67) / 5 = 67. Cost is excluded. Best suited to inexpensive, short-turn classification and summarization when an existing integration depends on it; use a supported successor for new work.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Fresh public-web research across OpenAI's exact-model API docs and GPT-5 developer evaluation, plus independent benchmark/catalog records. Search coverage included separate exact-ID queries for official model specs, Nano-specific benchmarks, and current provider listing. High-effort results, no-tools results, and tool-assisted results are explicitly distinguished. Scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [OpenAI GPT-5 Nano model documentation](https://developers.openai.com/api/docs/models/gpt-5-nano)
  - [OpenAI: Introducing GPT-5 for developers (Nano benchmark tables)](https://openai.com/index/introducing-gpt-5-for-developers/)
  - [BenchmarkList GPT-5 Nano benchmark record](https://benchmarklist.com/models/openai-gpt-5-nano/)
  - [Artificial Analysis GPT-5 Nano](https://artificialanalysis.ai/models/gpt-5-nano)
  - [OpenCode GPT-5 Nano data record](https://opencode.ai/data/openai/gpt-5-nano)
  - [Models.dev GPT-5 Nano catalog](https://models.dev/models/openai/gpt-5-nano)

---
