# MiMo V2.5 Free — findings by GPT 5.6 Luna

- Source: Xiaomi MiMo V2.5 (`mimo-v2.5`) free-access tier
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** The former free-token access tier for Xiaomi's open MiMo V2.5 native full-modal model. “Free” is an access tier, not a separate checkpoint; it must not be merged with MiMo V2.5 Pro or the replacement V2.6 Flash model.
- **Provider / access:** Xiaomi MiMo Orbit/free-token program and historical OpenCode Zen `opencode/mimo-v2.5-free`; base model `mimo-v2.5`. Xiaomi's official deprecation notice says API requests were auto-routed to `mimo-v2.6-flash` from 2026-10-14 and the old ID expired on 2026-10-21.
- **Release / knowledge:** Open-sourced 2026-06-29; knowledge cutoff not stated.
- **IDs:** Weights/API base `XiaomiMiMo/MiMo-V2.5` / `mimo-v2.5`; historical access route `opencode/mimo-v2.5-free`.
- **Context window:** Native V2.5 specification is 1M tokens. The historical Zen Free route was listed at 200K input / 32K output, so the Free access tier did not expose the native maximum.
- **Modalities:** Text, image, video, and audio input; text output; reasoning and agent capabilities.
- **Pricing (as of 2026-11-02):** The 100T-token Orbit distribution was a time-limited 2026 program and the native `mimo-v2.5` API ID is now retired. The open weights use an MIT license; current V2.5 API pricing is therefore not applicable.
- **Architecture:** Open-weight native full-modal model; exact parameter/active counts are not relied upon here. MIT license.

### Raw benchmarks found

> BenchLM's 2026-10-29 page reports 16 source-displayable rows but no overall score. Native-model benchmark rows are retained even though the Free service tier has been retired; the historical Zen 200K cap is kept separate from the native 1M specification.

Agent / tool use:

- Claw-Eval: **62.3%**; MM-ClawBench: **23.8%**; Terminal-Bench 2.0: **65.8%**; ResearchClawBench: **16.9%**.
- Vals Terminal-Bench 2.1: **60.7%**; Gert Labs: **46.89%**.
- BenchLM assigns no public overall score and leaves the model unranked; Xiaomi's “first among open models” claim applies to the Pro variant and is not substituted for this base model.

Reasoning / knowledge:

- Vals GPQA Diamond: **81.6%**; MMLU-Pro: **82.9%**. No exact current public HLE or Artificial Analysis Intelligence Index for the base Free route was verified in this pass.

Coding:

- SWE-bench Pro: **56.1%**; Vals LiveCodeBench: **81.5%**; Vals SWE-bench: **71.0%**; Terminal-Bench 2.0: **65.8%**.

Multimodal:

- Video-MME with subtitles: **87.7%**; CharXiv: **81.0%**; MMMU-Pro: **77.9%** (Xiaomi model page/BenchLM profile).
- The native model supports text, image, video, and audio understanding; no non-text output was verified.

Long context:

- Native model context: **1M tokens**, but the historical Free Zen route was **200K / 32K**. No exact MRCR/RULER retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Claw-Eval 62.3% and Terminal-Bench 65.8% show useful agent execution, but MM-ClawBench 23.8% and ResearchClawBench 16.9% are material limits.
- **Reasoning: 75/100.** GPQA 81.6% and MMLU-Pro 82.9% are solid, but exact HLE/Index coverage for the base Free route is missing and the API route is retired.
- **Context window: 72/100.** The native model advertises 1M, but the evaluated Free access route exposed 200K input and no public retrieval curve; the route-specific cap controls this score.
- **Multimodal: 94/100.** Native text/image/video/audio support and strong Video-MME/CharXiv/MMMU-Pro results justify a very high score; output remains text-only.
- **Coding: 76/100.** LiveCodeBench 81.5% and SWE 71.0% are useful, while SWE-Pro 56.1% and the lack of a broad exact Free-tier coding harness cap it.
- **Cost efficiency: 100/100.** The historical tier was free and the weights are MIT, although the free API route is no longer active and self-hosting still has compute cost.
- **Overall Score: 78.6/100.** `(76 + 75 + 72 + 94 + 76) / 5 = 78.6`; best fit was inexpensive multimodal agent work, but new integrations should use the separately tracked V2.6 replacement.

---

## Signature

- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-11-02
- Method: current Xiaomi release/deprecation documentation, BenchLM's October 29 benchmark profile, Vals rows, and the historical OpenCode route specification. Free-tier, native-model, and replacement-model identities were kept separate; scores are normalized interpretations, not official vendor scores.
- Reference URLs:
  - [MiMo V2.5 open-source release](https://mimo.mi.com/docs/en-US/news/latest/v2.5-open-sourced)
  - [MiMo model deprecation notice](https://mimo.mi.com/docs/en-US/updates/deprecate)
  - [OpenCode MiMo V2.5 Free model specification](https://github.com/anomalyco/models.dev/blob/dev/providers/opencode/models/mimo-v2.5-free.toml)
  - [BenchLM MiMo V2.5 profile](https://benchlm.ai/models/mimo-v2-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
