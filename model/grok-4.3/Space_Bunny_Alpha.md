# Grok 4.3 — findings by Space Bunny Alpha

- Source: SpaceXAI / Grok 4.3
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (high)
- **Short description:** SpaceXAI's reasoning-first Grok model for agentic tool use, instruction following, enterprise document analysis, and multimodal applications.
- **Provider / access:** xAI API `grok-4.3` (alias `grok-4.3-latest`), plus OpenRouter `x-ai/grok-4.3` and Amazon Bedrock `xai.grok-4.3`; xAI and OpenRouter expose the API directly, while Bedrock's Mantle endpoint is an OpenAI-compatible Responses endpoint.
- **Release / knowledge:** Released 2026-04-30; no verified exact knowledge cutoff found.
- **IDs:** `x-ai/grok-4.3`; xAI `grok-4.3` / `grok-4.3-latest`; Bedrock `xai.grok-4.3`.
- **Context window:** 1,000,000 tokens (xAI model card and Artificial Analysis); xAI states higher-context pricing applies above 200K.
- **Modalities:** Text and image input, text output; configurable reasoning (`none`, `low`, `medium`, `high`), function/tool calling, and structured outputs. OpenRouter additionally lists file input.
- **Pricing (as of 2026-09-24):** $1.25 input / $0.20 cached input / $2.50 output per 1M tokens at xAI; requests above 200K use higher rates. Amazon Bedrock Standard in-region pricing matches these figures.
- **Architecture:** Proprietary; parameter count and architecture were not publicly disclosed.

### Raw benchmarks found

> The strongest reasoning configuration is reported separately as “high.” The first-party xAI release post says the model ranked #1 on its cited Artificial Analysis Omniscience and Tau2 Telecom comparisons; Artificial Analysis supplies the independent measurements below.

Agent / tool use:

- Tau2-Bench Telecom: **97.7%** (Artificial Analysis high-reasoning run; xAI reported #1 among major frontier labs at release).
- IFBench instruction following: **81.3%** (Artificial Analysis, high reasoning).
- Terminal-Bench Hard: **37.9%** (Artificial Analysis, high reasoning).
- GDPval-AA: **21.2%** / 1,500 Elo at release (Artificial Analysis high-reasoning measurement).

Reasoning / knowledge:

- GPQA Diamond: **90.1%** (Artificial Analysis, high reasoning).
- HLE: **37.2%** (Artificial Analysis, high reasoning).
- AA-LCR long-context reasoning: **73.0%** (Artificial Analysis, high reasoning).
- Artificial Analysis Intelligence Index: **24.9** current score; the original 2026-04-30 release evaluation was **53** under the then-current index. The index was subsequently revised, so these values are not directly comparable.
- AA-Omniscience Accuracy / Non-Hallucination Rate: **34.8% / 74.2%** (Artificial Analysis, high reasoning).

Coding:

- Artificial Analysis Coding Index: **42.2** (high reasoning).
- SciCode: **48.3%** (Artificial Analysis, high reasoning).
- No verified public SWE-bench Verified, LiveCodeBench, or Vibe Code Bench score found for Grok 4.3.

Long context:

- No long-context retrieval benchmark at the full 1M window was found. The 1M limit is a verified specification, not a retrieval-quality result.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2 Telecom at 97.7% and IFBench at 81.3% demonstrate exceptional structured tool use and instruction following; the composite Agentic Index and more moderate Terminal-Bench result cap the score.
- **Reasoning: 84/100.** GPQA Diamond at 90.1% is frontier-level, while HLE at 37.2%, CritPt at 8.0%, and the revised 24.9 Intelligence Index cap an otherwise strong result.
- **Context window: 98/100.** The verified 1M-token window is near the methodology's top tier; no full-window retrieval benchmark was found.
- **Multimodal: 64/100.** Text and image input are supported and text output returned, but no exact-model visual benchmark was verified.
- **Coding: 72/100.** SciCode at 48.3%, Terminal-Bench Hard at 37.9%, and Coding Index at 42.2 show solid coding ability without frontier-leading independent evidence.
- **Cost efficiency: 91/100.** At $1.25 input and $2.50 output per 1M tokens, first-party inference is inexpensive, though the premium above 200K reduces the benefit for maximum-context work.
- **Overall Score: 81/100.** Strong agentic execution, high-tier reasoning, and a 1M window; best suited to multimodal enterprise agents and long-context workflows, with independent coding evidence less exceptional.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: public xAI documentation, xAI and Artificial Analysis release material, Artificial Analysis model measurements, OpenRouter API metadata, and Amazon Bedrock documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
