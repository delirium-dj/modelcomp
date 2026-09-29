# Grok 4.7 — findings by Pixel Canary

- Source: xAI (`xai/grok-4.7`), OpenCode catalog `opencode/grok-4.7`
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7 (xAI's late-September 2026 successor to Grok 4.6; **no OpenCode Zen Free ID** — paid tier only)
- **Short description:** xAI's August→September iteration of its 500K-context coding/agentic line: same $2/$6 rate card as Grok 4.6, but a materially better agentic profile — GDPval-AA 1695 Elo, AA AutomationBench 65.6%, Terminal-Bench 4.0 38.0% — and the best honesty profile of any model checked here (AA-Omniscience accuracy 47.4% against a 29.3% hallucination rate).
- **Provider / access:** xAI API (`xai/grok-4.7`) and the OpenCode catalog; official model documentation at `docs.x.ai/developers/grok-4-7` (linked by BenchLM); OpenAI-compatible endpoint with tool calling, structured output, web search and effort levels (Thinking Medium / High / Extra-High in xAI's harness naming).
- **Release / knowledge:** **2026-09-21** (models.dev `release_date` for `xai/grok-4.7`) — eight days before this report; Grok 4.6 was 2026-08-12 with a 2026-02-01 cutoff. No cutoff is published yet for 4.7.
- **IDs:** `xai/grok-4.7`, `opencode/grok-4.7`; no free variant.
- **Context window:** **500,000 tokens** (BenchLM "Context Window = 500K"; models.dev lists 500,000 input **and** 500,000 output limit) — unchanged from Grok 4.6. This folder's `meta.json` still carries the placeholder "128K total / Text in-out / Standard pricing", which contradicts both sources and should be corrected.
- **Modalities:** Text, image and PDF in; text out. Reasoning: yes. Tool calling, structured output, web search: listed. No video or audio input.
- **Pricing (as of 2026-09-29):** **$2.00 / 1M input, $6.00 / 1M output, $0.50 cached input** — identical to Grok 4.6; blended 4:1 ≈ $2.80 / 1M. No batch or off-peak discount published.
- **Architecture:** proprietary, weights not published, parameter count undisclosed.

### Raw benchmarks found

BenchLM profile `grok-4-7` (updated 2026-09-28) — **25 source-displayable rows but no published overall score yet ("Coming soon", Unranked)**, so every number below is a raw row rather than a composite. For reference, the family standings BenchLM does publish: Grok 4.6 **69.02**, Grok 4.5 **65.11**, Grok 4.20 **59.76**, Grok 4.3 **54.66**, Grok 4 **52.70**.

Agentic / tool use:

- GDPval-AA: **1695 Elo** (59.8% normalized) — above MiMo-V2.6-Pro (1673), Grok 4.6 (1643–1663), Qwen3.8 Flash (1648), DeepSeek V4.1-Flash (1632) and GPT-5.4 (1307)
- AA Briefcase: **1657** Elo; AA AutomationBench: **65.6%** (best of the six models compared here)
- Terminal-Bench 4.0: **38.00%** (MiMo 34.9, DeepSeek V4.1-Flash 26.8, Grok 4.6 20.3); AA Terminal-Bench 4.0 25.8%; Terminal-Bench 2.1 (Vals) 73.4%
- AA ITBench 42.1%; AA Harvey LAB 19.6%; GDP.pdf 20.0%

Coding:

- DeepSWE: **71.0%** (DeepSeek V4.1-Flash 74.2, MiMo-V2.6-Pro 71.9, Grok 4.6 65.9–67.5)
- CursorBench 4.0: **46.3%** (Grok 4.6 41.4); EEBench: **64.0%**; AA-SciCode: **57.4%**
- FrontierSWE v2: 29.5%
- SWE-bench Verified / LiveCodeBench / Terminal-Bench 2.1 (non-Vals): no verified public score found for this exact ID

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **46.5** — the highest of the six models compared (MiMo 46.3, Grok 4.6 44.3, Qwen3.8 Flash 39.8, GPT-5.4 39.0, Qwen3.7 Plus 25.2)
- AA-HLE: **43.1%**; HealthBench Professional: **56.7%**; CritPt: 17.7%
- AA-Omniscience: Accuracy **47.4%**, Hallucination Rate **29.3%**, Index **32.0** — the only strongly positive omniscience profile in this group (GPT-5.4 −/91.7% hallucination, DeepSeek 96.5%, Qwen3.7 Plus 27.7%)

Long context:

- AA-LCR: **76.7%**; MLCR-AA (multi-document): **15.0%**
- MRCRv2 / RULER / GraphWalks / Context Arena: no verified public score found for this exact ID

Multimodal:

- Design Arena (website Elo): **1223** (below MiMo 1325, Grok 4.6 1299, Qwen3.7 Plus 1279)
- GDP.pdf 20.0%; no MMMU-Pro, video or audio row published for this ID

### Normalized scores (1–100)

- **Tool use: 84/100.** The strongest agentic block in this comparison group: GDPval-AA **1695 Elo** (top of the six), AA AutomationBench 65.6% (best), AA Briefcase 1657 and Terminal-Bench 4.0 38.00% — well ahead of Grok 4.6's 20.3% on the same board; capped by AA ITBench 42.1%, AA Harvey LAB 19.6% and a Terminal-Bench 2.1 (Vals) of 73.4% that DeepSeek V4.1-Flash beats at 90.6%.
- **Reasoning: 76/100.** AA Intelligence Index **46.5** is the highest of any model compared here, AA-HLE 43.1% and HealthBench Professional 56.7% are solid, and the AA-Omniscience pairing (47.4% accuracy, **29.3%** hallucination, Index 32.0) is the only genuinely honest profile in the group; capped because CritPt is 17.7% and no GPQA/HLE-full row is published yet for this ID.
- **Context window: 70/100.** 500K input (models.dev also lists a 500K output ceiling, unusually generous) with AA-LCR 76.7%; capped because that window is half the 1M now standard among its peers, multi-document aggregation is poor at **MLCR-AA 15.0%**, and no MRCRv2/RULER retrieval-depth curve exists.
- **Multimodal: 52/100.** Text + image + PDF in, text only out, and the measured evidence is thin: Design Arena 1223 (behind three cheaper models) and GDP.pdf 20.0%; there is no MMMU-Pro, chart, screen or video row for this ID, and no audio/video path at all.
- **Coding: 82/100.** DeepSWE 71.0% and CursorBench 4.0 46.3% (vs Grok 4.6's 41.4%) plus EEBench 64.0% and AA-SciCode 57.4% show a real step up from Grok 4.6 in repository work; held below 90 because FrontierSWE v2 is 29.5% and **SWE-bench Verified / LiveCodeBench are still unpublished for this ID**, so the headline coding claim rests on third-party harnesses only.
- **Cost efficiency: 78/100.** $2.00 / $6.00 per 1M with $0.50 cache reads (blended ≈ $2.80) buys the group's best agentic-per-dollar, but there is no OpenCode Zen Free ID, no batch/off-peak discount, and it costs ~3.5× MiMo-V2.6-Pro and ~13× DeepSeek V4.1-Flash.
- **Overall Score: 72.8/100.** (84 + 76 + 70 + 52 + 82) / 5 = 72.8 — the most trustworthy paid agentic coder of this group right now, held back by a 500K window, a near-empty multimodal column and BenchLM not yet publishing an overall score for it.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM profile `grok-4-7` refreshed 2026-09-28, incl. the xAI model documentation link, models.dev pricing/limit index for `xai/grok-4.7`); no composite score exists yet for this ID, so all six dimension scores are interpolations from 25 published rows. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

