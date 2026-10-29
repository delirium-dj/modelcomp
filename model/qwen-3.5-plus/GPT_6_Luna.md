# Qwen3.5-Plus — findings by GPT-6 Luna

- Source: Alibaba Cloud Model Studio/Qwen3.5-Plus
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Alibaba's hosted, proprietary Plus model in the Qwen3.5 native vision-language family. It supports thinking and non-thinking modes and is intended for multimodal, coding, and agent workflows; it is distinct from Qwen3.5 open-weight models such as Qwen3.5-397B-A17B.
- **Provider / access:** Alibaba Cloud Model Studio API, model ID `qwen3.5-plus`. The official model documentation says the undated alias is functionally equivalent to snapshot `qwen3.5-plus-2026-02-15`. It also documents a distinct, newer `qwen3.5-plus-2026-04-20` snapshot, described as better at agentic coding; the scores below come from the February release and are not assigned to the April snapshot.
- **Release / knowledge:** The February snapshot is dated 2026-02-15 in Alibaba's docs; Vals AI records Qwen3.5-Plus's release as 2026-02-16. No training-data cutoff was verified.
- **IDs:** Alibaba Cloud Model Studio `qwen3.5-plus` (current alias → `qwen3.5-plus-2026-02-15`); explicit snapshot IDs `qwen3.5-plus-2026-02-15` and `qwen3.5-plus-2026-04-20` ([official docs](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-5-plus)).
- **Context window:** 1,000,000 tokens; max input 991,808, max output 65,536. In thinking mode, max input is 983,616; max output is 65,536 and max chain-of-thought is 81,920 tokens. No retrieval-quality score was found.
- **Modalities:** Text, image, and video input; text output. Official Model Studio docs list function calling and structured outputs; web search is supported on the relevant service scopes. No audio input or non-text output verified.
- **Pricing (as of 2026-10-29):** Alibaba Model Studio's original rates exclude promotions and vary by service scope and prompt length. International scope: $0.40 input / $2.40 output per 1M tokens up to 256K input; $0.50 / $3.00 for 256K–1M. Beijing rates are lower at short lengths ($0.115 / $0.688 through 128K), then $0.287 / $1.72 at 128K–256K and $0.573 / $3.44 above 256K. Explicit cache read/create charges are separate; no free API tier was verified.
- **Architecture:** Alibaba describes a hybrid architecture combining linear attention with sparse mixture-of-experts. The official API documentation does not disclose parameter count or publish weights; treat it as a proprietary hosted model.

### Raw benchmarks found

Three independent public web searches were followed by checks of Alibaba's exact [Model Studio model page](https://docs.modelstudio.console.alibabacloud.com/en/model-studio/qwen3-5-plus), the exact-model [Vals AI page](https://www.vals.ai/models/alibaba_qwen3.5-plus-thinking), and BenchLeader's source-linked Qwen3.5-Plus record. Vals AI says its default provider was Alibaba, temperature 0.6, and max output 65,536; it warns that some benchmarks can use different providers/parameters. The public Vals measurements are associated with the February 2026 Qwen3.5-Plus evaluation, not the newer April 20 snapshot.

Agent / tool use:

- Terminal-Bench 2.0 (Vals AI): **41.57% ± 5.25**, rank **31/67**. Vals also reports the model at **#10 overall** in its Vals Index at launch (57.1% index accuracy) and **#8** on its Finance Agent v1.1 subset; these are separate composite/private evaluations.
- No exact-model GDPval-AA, Tau3-Banking, or Claw-Eval score verified.

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **87.37% ± 1.67**, rank **38/138**; MMLU Pro: **87.18% ± 0.33**, rank **34/138**; AIME (Vals AI): **86.0%**, rank **33**.
- No exact-model HLE score verified. Vals AI says the model ranked #6 on its GPQA Diamond and #9 on MMLU Pro at release, first among the open-weight models it compared; those are Vals rankings, not vendor claims or evidence that this hosted Plus model has open weights.

Coding:

- SWE-bench (Vals AI): **71.20% ± 2.03**, rank **59/88**; LiveCodeBench: **85.33% ± 1.00**, rank **34/143**; Vibe Code Bench v1.1: **15.74% ± 3.18**, rank **95/121**.
- Terminal-Bench 2.0: **41.57% ± 5.25** (Vals AI); do not present this as Terminal-Bench 2.1.
- BenchLeader's October 29 record independently lists Vals AI results for GPQA, LiveCodeBench, SWE-bench, and Terminal-Bench 2.0; its source-linked rows agree with the Vals page. No exact-model SciCode result found.

Vision and long context:

- MMMU-Pro (Vals AI): **22.77% ± 1.01**, rank **93/93**. This is weak in that evaluation despite the documented image/video input modalities.
- The API supports up to 1M tokens, but no exact-model MRCR/RULER retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 67/100.** Terminal-Bench 2.0 at 41.57% is modest; Vals Index and Finance Agent ranks show stronger performance in some agent workflows, but there is no exact GDPval/Tau3 result and the TB score is not version 2.1.
- **Reasoning: 84/100.** GPQA Diamond 87.37%, MMLU Pro 87.18%, and AIME 86.0% are strong; no HLE result was found and GPQA is below the methodology's 90% frontier reference.
- **Context window: 95/100.** The verified hosted limit is 1M tokens, fitting the methodology's top tier; no retrieval benchmark supports a higher score.
- **Multimodal: 78/100.** Official docs confirm video, image, and text input, which fits the methodology's video-input range; text-only output and the low MMMU-Pro score (22.77%) cap the rating.
- **Coding: 79/100.** SWE-bench 71.20% and LiveCodeBench 85.33% are solid, while Terminal-Bench 2.0 is 41.57% and Vibe Code Bench 15.74%; the February evaluation does not establish performance for the later April snapshot.
- **Cost efficiency: 92/100.** International rates of $0.40/$2.40 per 1M tokens are near the methodology's low-cost reference tier, with a higher $0.50/$3.00 rate for >256K prompts. Beijing short-prompt rates are lower, but prices depend on region and context tier.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions (67, 84, 95, 78, 79 = 80.6), excluding cost; best fit is inexpensive hosted multimodal work with long context, while weaker Vals agentic/MMMU-Pro results and output-only text are limitations.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by primary-source verification against Alibaba's exact Model Studio docs and exact-model Vals AI measurements; BenchLeader used as a source-linked cross-check. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
