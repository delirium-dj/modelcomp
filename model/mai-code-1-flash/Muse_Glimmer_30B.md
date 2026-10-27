# MAI-Code-1-Flash — findings by Muse_Glimmer_30B

- Source: Microsoft MAI (`microsoft/mai-code-1-flash`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1-Flash
- **Short description:** Microsoft's Jun 2026 Copilot-native agentic coding model with 5B active parameters and 256K context, positioned for fast efficient developer assistance inside GitHub Copilot/VS Code.
- **Provider / access:** GitHub Copilot individual users via model picker / Auto picker; listed on models.dev as `microsoft/mai-code-1-flash`. No Microsoft price card published.
- **Release / knowledge:** Announced 2026-06-02; blog updated 2026-06-08. Knowledge cutoff not verified publicly.
- **IDs:** `microsoft/mai-code-1-flash`. No free tier.
- **Context window:** 256,000 total, 128,000 output as per meta.json and models.dev.
- **Modalities:** Text in/out only. No image/video input reported.
- **Pricing (as of 2026-10-27):** $0.75 / 1M input, $4.50 / 1M output via GitHub Copilot; models.dev shows pricing note $0.75/$4.50. Successor MAI-Code-1.1-Flash is $0.20/$1.20.
- **Architecture:** 5B active, 256K context, trained from ground up on clean traceable enterprise-grade data without third-party distillation.

### Raw benchmarks found

> Verified public scores from Microsoft AI news post introducing MAI-Code-1-Flash and models.dev metadata. Chart images contain additional values not extractable as text.

Coding / agentic harness vs Claude Haiku 4.5 in production harness:

- SWE-Bench Pro: **51.2%** pass rate for MAI-Code-1-Flash vs **35.2%** for Claude Haiku 4.5 — +16.0 points lead. [Microsoft AI news]
- SWE-Bench Verified: higher pass rate than Claude Haiku 4.5 with up to **60% fewer tokens** reported. Exact pass rate not published as text.
- SWE-Bench Multilingual: higher pass rate than Claude Haiku 4.5, exact value in chart image only.
- Terminal Bench 2: higher pass rate than Claude Haiku 4.5, exact value in chart image only.

Instruction following:

- IF Bench precise instruction following: **+28.9** points vs Claude Haiku 4.5. Absolute score not published as text.
- Advanced IF rubric-based: **+14.5** points vs Claude Haiku 4.5. Absolute score not published as text.
- Robust IF: higher than Claude Haiku 4.5, absolute value in chart image only.

Reasoning / math-science:

- Microsoft reports outperformance on core reasoning capabilities in math, science, and visual generation coding vs Claude Haiku 4.5. Absolute numbers are chart images only.

Efficiency:

- Adaptive solution length control reported; up to **60% fewer tokens** on SWE-Bench Verified vs Claude Haiku 4.5.

No independent third-party benchmark numbers found via public search. Models.dev provides metadata only.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic coding built for GitHub Copilot harness with tool use support and Terminal Bench 2 outperformance over Haiku 4.5, but limited public tool-use benchmarks and no independent verification.
- **Reasoning: 60/100.** Beats Claude Haiku 4.5 on instruction following and reported math/science reasoning, but absolute scores are chart images only and no GPQA/HLE numbers published.
- **Context window: 70/100.** 256K total / 128K out is competitive for a coding-focused model, but well below 1M-class models.
- **Multimodal: 15/100.** Text in/out only per meta.json and official description; no image/video capability reported.
- **Coding: 75/100.** SWE-Bench Pro 51.2% vs Haiku 4.5 35.2% and up to 60% fewer tokens demonstrates strong production coding efficiency, capped by lack of published SWE-Bench Verified/Multilingual absolute numbers and no independent verification.
- **Cost efficiency: 78/100.** $0.75/$4.50 with 60% token reduction vs Haiku 4.5 delivers good price/performance for Copilot users, but successor model is quarter of the cost.
- **Overall Score: 57/100.** Mean of five quality dims (65 + 60 + 70 + 15 + 75) / 5 = 57.0. Best fit: efficient Copilot-native coding assistant with strong production SWE-Bench Pro result but limited public multimodal capability and sparse independent benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research via Microsoft AI news post, models.dev metadata and meta.json; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
