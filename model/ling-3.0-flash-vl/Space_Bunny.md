# Ling 3.0 Flash VL — findings by Space Bunny

- Source: inclusionAI (`inclusionAI/Ling-3.0-flash-VL`, also served as `inclusionai/ling-3.0-flash-vl` on OpenRouter)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** inclusionAI's native multimodal (vision-language) variant of Ling 3.0 Flash — a 124B-total / 5.5B-active MoE that keeps the text model's language and long-context ability while adding image and video input for visual reasoning, verification and interface-acting (GUI agent) workflows. MIT-licensed open weights; a step below the Ling 3.1 Flash line in recency but far cheaper than frontier VL models.
- **Provider / access:** Open-weight weights on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`) and ModelScope; served via OpenRouter as `inclusionai/ling-3.0-flash-vl` (OpenAI-compatible Chat Completions), with NovitaAI and DeepInfra hosting on HF Inference and NovitaAI on OpenRouter.
- **Release / knowledge:** Released **2026-09-10** (OpenRouter listing date; HF model repo created 2026-09-04). Knowledge cutoff not published; training-content summary is disclosed by inclusionAI as a PDF on its AI-Transparency page.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF), `inclusionai/ling-3.0-flash-vl` (OpenRouter). No Zen Free ID — cost is scored on the paid per-token price.
- **Context window:** **256K** per the official model card ("up to 256K tokens"); OpenRouter serves **262,144** with a **32,768 max output**. Both figures are first-party or catalog-verified.
- **Modalities:** text, **image** and **video** in; text out; reasoning/thinking on by default (switchable off per request); tool calling supported; thinking and tool-call parsers both `ling3`.
- **Pricing (as of 2026-10-03):** **$0.021 in / $0.0616 out per 1M** on OpenRouter (72% off list; NovitaAI cache read $0.0042, cache write $0.015); DeepInfra on HF Inference lists ~$0.18/M output and ~$0.021/M input-class rates. Paid only — no free Zen ID.
- **Architecture:** Sparse MoE, **124B total / 5.5B active** parameters per token, MIT license. ViT visual encoder + two-layer MLP projector; VideoRoPE for spatial/temporal position encoding; 42-layer hybrid backbone alternating KDA and Gated MLA layers at a 5:1 ratio. Recommended sampling: temperature 1.0, top_p 0.95, top_k 20.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Agentic Index: **28.7**
- Artificial Analysis GDPval-AA: **32.5%** (percentile-style AA professional-work metric, not Elo)
- Tool calling: **supported** — vLLM `--enable-auto-tool-choice --tool-call-parser ling3`; HF Inference providers report `toolCalling: true`
- Terminal-Bench 2.1 / Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **24.6** (current AA index; the vendor's own card cites **42** on AA Intelligence Index **v4.1.1** at launch, +4 over Ling 3.0 Flash's 38 — index versions differ, so both are recorded and neither is comparable across versions)
- GPQA Diamond: **86.2%**
- HLE: **22.0%**
- AA-LCR (long-context reasoning): **78.3%**
- CritPt: **2.0%**
- AA-Omniscience Accuracy: **14.3%**; Non-Hallucination Rate: **78.0%**

Coding:

- Artificial Analysis Coding Index: **57.0**
- SciCode: **44.2%**
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **78.3%** (Artificial Analysis long-context reasoning suite) at the model's 256K window; no MRCR / RULER / GraphWalks figure at full window published.

Throughput (measured):

- OpenRouter / NovitaAI: **109 tokens/s**, 1.41 s latency, 99.92% uptime
- HF Inference NovitaAI: **~241.7 tokens/s** (deepinfra ~32.0 tokens/s)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.

- **Tool use: 55/100.** AA Agentic Index 28.7 and GDPval-AA 32.5% sit at the methodology's mid band (GDPval ~900–1200 → 50–70), and tool calling is genuinely wired up (`ling3` parser, provider-flagged). Capped at the low end of that band because Terminal-Bench, Tau3 and Claw-Eval are all absent — the agentic index, not a Terminal-Bench number, is the primary evidence.
- **Reasoning: 62/100.** GPQA Diamond 86.2% is above the methodology's GPQA 60–80% mid band, AA-LCR 78.3% is strong for long-context reasoning, and HLE 22.0% clears the "<10% → 55–65" floor decisively. Held under the frontier band (GPQA 90%+, HLE 40%+, Index 60+) with two real drags: CritPt 2.0% is near-floor, and Omniscience Accuracy 14.3% signals heavy hallucination on obscure knowledge despite a 78.0% non-hallucination rate.
- **Context window: 80/100.** Official 256K total (262,144 as served) / 32,768 max output maps to the 200K–500K = 65–84 band with 200K = 70 as the anchor. AA-LCR 78.3% at that window earns the upper half of the band; held well below the 500K–1M tier because 256K is the model's ceiling, not a midpoint.
- **Multimodal: 82/100.** Native image **and video** input with text output lands in the 75–90 band (video/PDF in), above plain +image-in. Not higher: output is text-only, there is no audio path, and the vendor's own multimodal tables are published as an image rather than as extractable per-benchmark numbers — independent MMMU/MathVista figures were not found.
- **Coding: 62/100.** AA Coding Index 57.0 plus SciCode 44.2% put it in the methodology's mid range (SciCode <40% would cap lower; 44.2% clears it, but the frontier anchor is 55%+). The Ling 3.0 Flash lineage's coding reputation is not transferred here — no SWE-bench, LiveCodeBench or DeepSWE figure exists for the VL variant.
- **Cost efficiency: 96/100.** $0.021 in / $0.0616 out per 1M (OpenRouter, 72% off list) with a $0.0042 cache-read rate is an order of magnitude below frontier prices and close to the ~$0.10/$0.20 band, so it scores near the $0 ceiling without reaching it — this is a paid tier with real per-token billing, not a free one.
- **Overall Score: 68.2/100.** Mean of (55 + 62 + 80 + 82 + 62) / 5 = 68.2. Best fit as a cheap open-weights multimodal workhorse: high-volume visual document/chart/UI understanding, GUI-agent loops and video QA where latency and cost matter more than frontier reasoning depth.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (official Hugging Face model card and raw README for Ling-3.0-flash-VL, OpenRouter model API + model page for pricing/context/throughput and the Artificial Analysis benchmark suite, HF Inference provider metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.0_Flash.md`, using the same headings.