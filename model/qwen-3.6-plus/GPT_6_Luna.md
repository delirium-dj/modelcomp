# Qwen3.6-Plus — findings by GPT-6 Luna

- Source: Alibaba/Qwen3.6-Plus
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.6-Plus
- **Short description:** Alibaba's proprietary hosted Plus model in the Qwen3.6 vision-language family, positioned for agentic coding, frontend work, and multimodal perception. It is distinct from the open Qwen3.6-27B checkpoint and the newer Qwen3.7-Plus entry.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen Cloud API (OpenAI-compatible Completions API); paid. The vendor documentation describes the current `qwen3.6-plus` model as functionally equivalent to snapshot `qwen3.6-plus-2026-04-02`.
- **Release / knowledge:** The verified snapshot is dated 2026-04-02. No training-data or knowledge cutoff was verified.
- **IDs:** Current Alibaba API ID `qwen3.6-plus`; snapshot ID `qwen3.6-plus-2026-04-02` ([Alibaba Cloud model documentation](https://www.alibabacloud.com/help/en/model-studio/qwen3-6-plus)).
- **Context window:** 1M tokens. Max output 65,536 tokens; max input 991,808 (983,616 in thinking mode), per Alibaba Cloud docs. Singapore hosted pricing rises for inputs above 256K; the 1M limit is not priced at the short-prompt rate for all tokens.
- **Modalities:** Text, image, and video input; text output. Function calling, structured outputs, and web search are supported on Alibaba Cloud Model Studio.
- **Pricing (as of 2026-10-29):** Region- and context-tier-dependent. Alibaba lists Singapore $0.50 input / $3.00 output per 1M tokens for inputs up to 256K, and $2.00 / $6.00 for the 256K–1M input tier. Beijing prices are $0.276 / $1.651 up to 256K and $1.101 / $6.602 above 256K. Cache and batch rates are also available; promotions excluded. See [Alibaba Cloud pricing](https://www.alibabacloud.com/help/en/model-studio/qwen3-6-plus).
- **Architecture:** Proprietary hosted model; parameter count and detailed architecture were not disclosed in the official serving documentation reviewed. Artificial Analysis classifies its evaluated version as proprietary and reasoning-capable.

### Raw benchmarks found

Three independent public search queries were followed by checks of Alibaba Cloud Model Studio docs, Qwen Cloud's model listing, Artificial Analysis, and BenchLM's model record. Benchmark values below are identified as vendor-published or independent-run; no scores from Qwen3.7-Plus or a Qwen open-weights model are attributed to this entry.

Agent / tool use:

- Terminal-Bench 2.0: **61.6%** (BenchLM lists provider evidence for exact `Qwen: Qwen3.6-Plus`).
- Terminal-Bench 2.1: **53.2%** in a Vals AI run (independent harness, as cataloged by BenchLM); do not conflate with the Terminal-Bench 2.0 provider score.
- Tau3-bench: **70.7%**; Toolathlon: **39.8%**; MCP Atlas: **48.2%**; Claw-Eval: **58.8%** (BenchLM's provider-exact entries). No exact-model GDPval-AA score verified.

Reasoning / knowledge:

- GPQA Diamond: **90.4%**; HLE: **28.8%**; AIME 2026: **95.3%**; HMMT February 2026: **87.8%**; HMMT November 2025: **94.6%** (BenchLM's provider-exact entries).
- BenchLM's summary lists 49 source-displayable benchmark rows and identifies Qwen3.6-Plus as the provider model for these results. No independently replicated HLE or GPQA result using the same harness was verified.
- Artificial Analysis currently marks the evaluated model deprecated and reports no Intelligence Index result; it says its non-default workload metrics are historical. It reports the same 1M context, image/video input, text output, and $0.50/$3.00 pricing at the evaluated shorter-input tier.

Coding:

- SWE-bench Pro: **56.6%** (provider-exact BenchLM entry); SWE-bench Verified: **78.8%** (provider-exact entry); LiveCodeBench v6: **87.1%** (provider-exact entry).
- Terminal-Bench 2.0: **61.6%** (provider-exact); Terminal-Bench 2.1: **53.2%** (separate Vals AI run). Methodology and benchmark version differ; scores are reported separately.
- Other provider-exact BenchLM entries include NL2Repo **37.9%** and SWE Multilingual **73.8%**. No verified exact-model SciCode score found.

Long context:

- Alibaba Cloud documents a 1M-token window, but no exact-model MRCR/RULER retrieval score was found. Artificial Analysis reports 1M context but likewise presents no retrieval score.

Multimodal:

- Official Alibaba Cloud and Qwen Cloud docs confirm image/video input with text output. No exact-model multimodal benchmark score was verified in the sources reviewed.

### Normalized scores (1–100)

- **Tool use: 75/100.** Tau3-bench at 70.7% and Claw-Eval at 58.8% show usable tool/agent ability, but Terminal-Bench 2.1 is 53.2% in the independent Vals run, below frontier reference performance; no GDPval-AA result was found.
- **Reasoning: 86/100.** GPQA Diamond 90.4% and AIME 2026 95.3% are strong; HLE 28.8% is below the methodology's 40%+ frontier reference.
- **Context window: 95/100.** Verified 1M hosted window fits the methodology's 95–100 tier; no long-context retrieval score supports 100.
- **Multimodal: 85/100.** Verified video and image input fit the methodology's video-input range; output is text-only and no multimodal score was found.
- **Coding: 82/100.** SWE-bench Verified 78.8% and LiveCodeBench v6 87.1% are strong, while SWE-bench Pro 56.6% and the 53.2% independent Terminal-Bench 2.1 result keep it below frontier coding-agent scores.
- **Cost efficiency: 88/100.** The short-prompt $0.50/$3.00 rate is comparatively moderate; the Singapore >256K tier rises to $2/$6 per 1M tokens, a meaningful caveat for long-context workloads.
- **Overall Score: 85/100.** Half-up mean of the five quality dimensions (75, 86, 95, 85, 82), excluding cost; best fit is hosted multimodal and coding work where a 1M context is useful, with higher rates for long prompts and no verified long-context retrieval score.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by primary-source checks of Alibaba Cloud Model Studio and Qwen Cloud; BenchLM provider-exact benchmark records and Artificial Analysis were used as cross-checks. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
