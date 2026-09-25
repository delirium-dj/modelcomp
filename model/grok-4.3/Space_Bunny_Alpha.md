# Grok 4.3 — findings by Space Bunny Alpha

- Source: SpaceXAI / Grok 4.3
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3 (high reasoning)
- **Short description:** SpaceXAI's reasoning-first model for agentic tool use, instruction following, multimodal workflows, and long-context enterprise analysis.
- **Provider / access:** xAI API `grok-4.3` (alias `grok-4.3-latest`); OpenRouter `x-ai/grok-4.3`; Amazon Bedrock `xai.grok-4.3` through its OpenAI-compatible Mantle endpoint.
- **Release / knowledge:** OpenRouter dated slug `grok-4.3-20260430`; released 2026-04-30. No verified exact knowledge cutoff found.
- **IDs:** xAI `grok-4.3` / `grok-4.3-latest`; OpenRouter `x-ai/grok-4.3`; Bedrock `xai.grok-4.3`.
- **Context window:** 1,000,000 tokens; xAI documents higher-context pricing above 200K.
- **Modalities:** Text and image input, text output; configurable reasoning (`none`, `low`, `medium`, `high`, with the current docs also listing `xhigh`), function/tool calling, and structured outputs. OpenRouter additionally lists file input.
- **Pricing (as of 2026-09-25):** xAI standard pricing is $1.25 input / $0.20 cached input / $2.50 output per 1M tokens; requests above 200K use higher rates.
- **Architecture:** Proprietary; parameter count and architecture were not publicly disclosed.

### Raw benchmarks found

> Artificial Analysis measurements below are for the high-reasoning variant unless noted. Its Intelligence Index was revised after launch, so current and original launch values are not directly comparable.

Agent / tool use:

- Tau2-Bench Telecom: **97.7%** (Artificial Analysis high-reasoning run).
- IFBench instruction following: **81.3%** (Artificial Analysis high reasoning).
- Terminal-Bench Hard: **37.9%** (Artificial Analysis high reasoning).
- GDPval-AA: **21.2%**; the release measurement was **1,500 Elo** (Artificial Analysis).
- Agentic Index: **15.5** (OpenRouter Artificial Analysis metadata).

Reasoning / knowledge:

- GPQA Diamond: **90.1%**; HLE: **37.2%** (Artificial Analysis high reasoning).
- AA-LCR long-context reasoning: **73.0%** (Artificial Analysis high reasoning).
- Artificial Analysis Intelligence Index: **24.9** current score; the original 2026-04-30 release evaluation was **53** under the then-current index.
- AA-Omniscience Accuracy / Non-Hallucination Rate: **34.8% / 74.2%** (Artificial Analysis high reasoning).
- CritPt: **8.0%** (Artificial Analysis high reasoning).

Coding:

- Artificial Analysis Coding Index: **42.2** (high reasoning).
- SciCode: **48.3%** (Artificial Analysis high reasoning).
- No verified public SWE-bench Verified, LiveCodeBench, or Vibe Code Bench score found for Grok 4.3.

Long context:

- No long-context retrieval benchmark at the full 1M window was found. The 1M limit is a verified specification, not a retrieval-quality result.

### Normalized scores (1–100)

- **Tool use: 88/100.** Tau2 Telecom at 97.7% and IFBench at 81.3% demonstrate exceptional structured tool use and instruction following; the Agentic Index at 15.5 and Terminal-Bench Hard at 37.9% cap the score.
- **Reasoning: 84/100.** GPQA Diamond at 90.1% is frontier-level, while HLE at 37.2%, CritPt at 8.0%, and the revised Intelligence Index at 24.9 cap an otherwise strong result.
- **Context window: 98/100.** The verified 1M-token window is near the methodology's top tier; no full-window retrieval benchmark was found.
- **Multimodal: 64/100.** Text and image input are supported and text is returned, but no exact-model visual benchmark was verified.
- **Coding: 72/100.** SciCode at 48.3%, Terminal-Bench Hard at 37.9%, and Coding Index at 42.2 show solid coding ability without frontier-leading independent evidence.
- **Cost efficiency: 91/100.** At $1.25 input and $2.50 output per 1M tokens, first-party inference is inexpensive, though the premium above 200K reduces the benefit for maximum-context work.
- **Overall Score: 81/100.** Strong agentic execution, high-tier reasoning, and a 1M window; best suited to multimodal enterprise agents and long-context workflows, with independent coding evidence less exceptional.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: public xAI model documentation, Artificial Analysis release material and model measurements, OpenRouter API metadata, and Amazon Bedrock documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
