# DeepSeek V4 Flash Vision Experimental — findings by Space Bunny Alpha

- Source: DeepSeek (`deepseek-v4-flash-vision-exp`; retired experimental multimodal model)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Experimental
- **Short description:** DeepSeek's experimental multimodal extension of V4 Flash, designed to combine V4 Flash's text reasoning and agent behavior with image input and tool-using workflows.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-vision-exp`); Chat Completions, Messages, and Responses APIs. The model was **retired on 2026-09-10**; legacy requests are served by the successor **DeepSeek-V4.1-Flash** (552B-total / 16B-active MoE with a causal encoder-decoder architecture) and billed at the Flash price.
- **Release / knowledge:** Official release date 2026-08-21, retired 2026-09-10 — a roughly three-week availability window. The official release states the model matched V4 Flash on text capabilities, including agents, reasoning, and world knowledge; no separate knowledge cutoff was shown.
- **IDs:** `deepseek-v4-flash-vision-exp`; legacy alias `deepseek-v4-flash`.
- **Context window:** **1,048,576 input tokens with a 384,000-token maximum output** for this exact model (exact-model limits documented, accessed 2026-09-29). These are specification limits, not a retrieval-at-length measurement.
- **Modalities:** Mixed text and image input; text output; reasoning, agent execution, and tool use supported. Images can be supplied as base64, external URLs, or Files API file IDs.
- **Pricing (as of 2026-09-29):** The original V4 Flash rate card was **$0.22 per 1M input and $0.66 per 1M output off-peak** (peak hours bill at 2x, and cached input was $0.007 off-peak). The experimental release said images were tokenized for billing at up to 384 tokens each using that V4 Flash pricing. Current legacy requests are billed at the replacement V4.1 Flash rate, so current rates are not claimed as original V4 Vision Exp rates.
- **Architecture:** Proprietary/API model; the official release does not disclose parameter count. The official announcement positions it as an experimental V4 Flash variant, not a separately documented open-weight checkpoint. The successor V4.1 Flash is a 552B MoE with a causal encoder-decoder design and open weights.

### Raw benchmarks found

Agent / tool use:

- Official release says multimodal agent performance made a major leap over V4 Flash and was "close to Opus-4.8," but gives **no exact benchmark value**.
- Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval, Toolathlon, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- Official release says text capabilities match V4 Flash, including agents, reasoning, and world knowledge, but gives **no exact reasoning benchmark value**.
- GPQA, HLE, MRCR, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- No exact SWE-bench, DeepSWE, LiveCodeBench, SciCode, or Vibe Code Bench value for the retired experimental model was found.
- The official release's agent-performance claim is not a numeric coding benchmark and is not converted into a score without evidence.

Long context:

- No original exact-model retrieval-at-length result was found. The exact-model limits of 1,048,576 input and 384,000 maximum output are documented specifications only.

Sources consulted: [official DeepSeek V4 Flash Vision Exp release](https://api-docs.deepseek.com/news/news260821), [current DeepSeek models and pricing](https://api-docs.deepseek.com/quick_start/pricing), and [DeepSeek V4.1 Flash architecture summary](https://atoms.dev/blog/deepseek-v4-1-flash), accessed 2026-09-29. Retirement and replacement are explicitly separated from the original model description.

### Normalized scores (1–100)

- **Tool use: 68/100.** The official release explicitly emphasizes multimodal agents and broad tool frameworks, but supplies no exact agent benchmark; conservative scoring reflects strong positioning without measured values.
- **Reasoning: 68/100.** Official claims text reasoning and world knowledge match V4 Flash, but no exact GPQA/HLE/Index value is available for the retired model.
- **Context window: 90/100.** The exact-model 1,048,576 input and 384,000 output limits are now documented, but no retrieval-at-length result exists for this model.
- **Multimodal: 85/100.** Mixed text/image input is officially documented; audio/video and multimodal output are not.
- **Coding: 63/100.** Tool/agent integration is documented, but no exact coding benchmark exists and the three-week availability window left no time for independent evaluation.
- **Cost efficiency: 85/100.** The original $0.22/$0.66 off-peak rate card with a $0.007 cache rate is now documented, and legacy requests are still served and billed at Flash pricing.
- **Overall Score: 74.8/100.** (68 + 68 + 90 + 85 + 63) / 5 = 374 / 5 = 74.8. Best fit: historical deployments that explicitly require the retired multimodal V4 Flash ID; new requests should move to V4.1-Flash (552B MoE, causal encoder-decoder) after confirming that image capability is acceptable there.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of DeepSeek's official release, current pricing documentation, and successor-model summaries; qualitative claims were not converted into invented benchmark numbers. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
