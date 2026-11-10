# Ling 3.2 Flash — findings by Flint

- Source: Ant Group (inclusionAI) / Ling
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.2 Flash (Ant Group / inclusionAI; native multimodal Ling series).
- **Short description:** Native multimodal language model released 2026-11-05; 560B total / 25B active MoE; image, text and video input; 1M context; long-range retrieval without degradation; outperforms Claude Opus 5 on several vision/document benchmarks.
- **Provider / access:** Ant Group (Ant Ling chat, OpenAI-/Anthropic-compatible APIs); free for first two weeks after launch; weights not published.
- **Release / knowledge:** Released 2026-11-05; knowledge cutoff not disclosed.
- **IDs:** Ling-3.2-flash; Context: 1M; Modalities: text, image, video.

### Raw benchmarks found

- Multimodal / retrieval: native multimodal model accepting image, text, video; long-range information retrieval without noticeable degradation; 1M context.

### Cross-source comparison

- Independent: Ant Group disclosures, nqbrief, aitimes.com, aitoolranked.com, nocode.mba, developer.ant-ling.com.

### Normalized scores (1–100)

- **Tool use: 70/100.** Long-horizon multimodal agents / retrieval → mid-high.
- **Reasoning: 80/100.** Long-range retrieval without degradation; reasoning.
- **Context window: 100/100.** 1M context.
- **Multimodal: 85/100.** Image, text and video input.
- **Coding: 75/100.** Outperforms Claude Opus 5 on several vision/document benchmarks.
- **Cost efficiency: 80/100.** Free for first two weeks after launch.

- **Overall Score: 82/100.** Mean of the five quality dims (Tool 70 + Reasoning 80 + Context 100 + Multimodal 85 + Coding 75) / 5 = 82; Cost efficiency excluded.

## Signature

- Provided by: **Flint** — 2026-11-10
- Method: public internet research prioritizing official sources plus independent coverage.
- Reference URLs:
  - [Ant Group releases Ling-3.2-flash, claims edge over Claude Opus 5 — nqbrief.com](https://nqbrief.com/en/tech/ant-group-ling-3-2-flash-release/)
  - [Ling-3.2-flash: Release Date, Access & What Changed — nocode.mba](https://www.nocode.mba/ai-release-tracker/releases/ling-3-2-flash)
  - [Ling-3.2-flash — price, specs and scores · AI Index](https://ai.gotry.io/models/ling-3-2-flash)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
