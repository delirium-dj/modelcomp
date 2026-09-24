# DeepSeek V4 Flash Vision Experimental — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`; retired experimental multimodal model)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Experimental
- **Short description:** DeepSeek's experimental multimodal extension of V4 Flash, designed to combine V4 Flash's text reasoning and agent behavior with image input and tool-using workflows.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`); Chat Completions, Messages, and Responses APIs. The model is now retired; legacy requests are served by DeepSeek-V4.1-Flash and billed at the Flash price.
- **Release / knowledge:** Official release date 2026-08-21. The official release states the model matched V4 Flash on text capabilities, including agents, reasoning, and world knowledge; no separate knowledge cutoff was shown.
- **IDs:** `deepseek-v4-flash-vision-exp`; legacy alias `deepseek-v4-flash`.
- **Context window:** The current pricing page lists 1M context and 384K maximum output for the replacement `deepseek-flash` / V4.1 Flash route, but it does not preserve a separate current limit for the retired experimental model. The original release page did not expose a distinct limit.
- **Modalities:** Mixed text and image input; text output; reasoning, agent execution, and tool use supported. Images can be supplied as base64, external URLs, or Files API file IDs.
- **Pricing (as of 2026-09-24):** The experimental release said images were tokenized for billing at up to 384 tokens each, using V4 Flash pricing. The current page says legacy requests are billed at the replacement Flash price, so current V4.1 Flash rates are not claimed as original V4 Vision Exp rates.
- **Architecture:** Proprietary/API model; the official release does not disclose parameter count. The official announcement positions it as an experimental V4 Flash variant, not a separately documented open-weight checkpoint.

### Raw benchmarks found

Agent / tool use:

- Official release says multimodal agent performance made a major leap over V4 Flash and was “close to Opus-4.8,” but gives **no exact benchmark value**.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Official release says text capabilities match V4 Flash, including agents, reasoning, and world knowledge, but gives **no exact reasoning benchmark value**.
- GPQA, HLE, MRCR, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- No exact SWE-bench, DeepSWE, LiveCodeBench, SciCode, or Vibe Code Bench value for the retired experimental model was found.
- The official release's agent-performance claim is not a numeric coding benchmark and is not converted into a score without evidence.

Long context:

- No original exact-model retrieval-at-length result was found. The current replacement route reports 1M context, but that value is not presented as an original V4 Vision Exp measurement.

Sources consulted: [official DeepSeek V4 Flash Vision Exp release](https://api-docs.deepseek.com/news/news260821) and [current DeepSeek models and pricing](https://api-docs.deepseek.com/quick_start/pricing), accessed 2026-09-24. Retirement and replacement are explicitly separated from the original model description.

### Normalized scores (1–100)

- **Tool use: 68/100.** The official release explicitly emphasizes multimodal agents and broad tool frameworks, but supplies no exact agent benchmark; conservative scoring reflects strong positioning without measured values.
- **Reasoning: 68/100.** Official claims text reasoning and world knowledge match V4 Flash, but no exact GPQA/HLE/Index value is available for the retired model.
- **Context window: 85/100.** The current replacement route reports 1M, while the original model has no separately verified limit or retrieval result.
- **Multimodal: 85/100.** Mixed text/image input is officially documented; audio/video and multimodal output are not.
- **Coding: 65/100.** Tool/agent integration is documented, but no exact coding benchmark exists for this retired experimental model.
- **Cost efficiency: 85/100.** The original release used V4 Flash pricing and billed images by tokens; the current legacy route is served and billed at Flash pricing, but the original rate card is not preserved.
- **Overall Score: 74.2/100.** (68 + 68 + 85 + 85 + 65) / 5 = 74.2. Best fit: historical deployments that explicitly require the retired multimodal V4 Flash ID; new requests should use the documented replacement only after confirming that image capabilities are acceptable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of DeepSeek's official release and current pricing documentation; qualitative claims were not converted into invented benchmark numbers. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
