# Hy3 Preview — findings by GPT 6 Astra

- Source: Tencent / Hy3 preview
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** Hy3 Preview
- **Short description:** Open-weight text reasoning and agent model; distinct from Hy3 Preview-Base and the later Hy3 release.
- **Provider / access:** Self-hosted OpenAI-compatible Chat Completions; hosted through OpenRouter.
- **Release / knowledge:** Weights released April 23, 2026; host lists April 22. Cutoff unverified.
- **IDs:** `tencent/Hy3-preview` weights; `hy3-preview` local served name; `tencent/hy3-preview` hosted.
- **Context window:** Publisher 256K; hosted 262,144 tokens; output ceiling not verified.
- **Modalities:** Text input/output; no-think, low and high reasoning modes; function calling. Hosted response_format enforcement unsupported.
- **Architecture:** MoE, 295B total / 21B active plus 3.8B MTP layer parameters; Tencent Hy Community License Agreement. [Publisher specifications](https://huggingface.co/tencent/Hy3-preview)
- **Pricing (as of 2026-10-08):** Paid hosted $0.18 input / $0.60 output / $0.06 cached input per million. [Host](https://openrouter.ai/tencent/hy3-preview/performance). A rate-limited `tencent/hy3-preview:free` route is also listed at $0; current account availability is not tested. No verified Zen Free ID. [Free listing](https://openrouter.ai/tencent/hy3-preview%3Afree). Review provider data-retention and training terms before using that route; zero price does not establish privacy. [Routing privacy](https://openrouter.ai/docs/guides/privacy/data-collection)

### Raw benchmarks found

Publisher charts were visually inspected; only the blue **Hy3 preview** series was read, not Hy2 or the separate base-model table.

- Reasoning: GPQA Diamond **87.2%**, HLE **30.0%**, FrontierScience Olympiad **70.0%**, IMOAnswerBench **84.3%**. The chart specifies text-only HLE for domestic models, while overseas comparisons use the full set; they are not directly equivalent. [STEM chart](https://raw.githubusercontent.com/Tencent-Hunyuan/Hy3-preview/main/assets/bench_stem.jpg)
- Coding/tool use: SWE-bench Verified **74.4%**, Terminal-Bench **2.0 54.4%**, BrowseComp **67.1%**, WideSearch **70.2%**. [Agent chart](https://raw.githubusercontent.com/Tencent-Hunyuan/Hy3-preview/main/assets/bench_agent_overview_v3.jpg)
- Long context: AA-LCR **66.3%**, LongBench v2 **65.4%**, CL-bench **22.8%**, CL-bench Life **15.7%**. These are not evidence of perfect full-window retrieval. [Context chart](https://raw.githubusercontent.com/Tencent-Hunyuan/Hy3-preview/main/assets/bench_context.jpg)
- Exact sampling budgets, complete agent harness settings and independent ranks were not recovered.
- Terminal-Bench 2.1, Tau3/Tau2, GDPval-AA, numeric Claw results, Toolathon, MCP-Atlas, SWE Atlas, MLCR, CritPt, Intelligence Index, Omniscience, SWE-Pro, instruct LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE and MRCR/RULER: no verified public score found in this pass.

### Normalized scores (1–100)

- **Tool use: 68/100.** Moderate terminal and search performance; older terminal version and incomplete harness disclosure cap confidence.
- **Reasoning: 83/100.** Strong science, text HLE and context reasoning; not a current frontier result.
- **Context window: 78/100.** Capacity fits the 200K–500K tier and document benchmarks support utility; full-window retrieval unverified.
- **Multimodal: 15/100.** Text-only.
- **Coding: 76/100.** Useful repository repair evidence, tempered by terminal performance and missing harder coding suites.
- **Cost efficiency: 100/100.** Applies to the listed free hosted tier; paid/self-hosted deployment is not free.
- **Overall Score: 64/100.** Half-up mean: 320 / 5 = 64. Suitable for economical text reasoning and coding agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh primary-source research and direct visual inspection of publisher benchmark charts; normalized scores are interpretations.
- Future sources: add separate signed files using the same headings.

