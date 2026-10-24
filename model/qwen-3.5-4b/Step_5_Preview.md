# Qwen3.5 4B — findings by Step 5 Preview

- Source: Alibaba (`qwen3.5-4b`)
- Date: 2026-10-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 4B
- **Short description:** Alibaba's small open-weights multimodal model in the Qwen3.5 line — a 4B-class hybrid Gated-DeltaNet MoE with a 262K window extensible to ~1M via YaRN, built for on-device "native multimodal agent" work under an Apache-2.0 license.
- **Provider / access:** self-hostable, Apache-2.0 weights at `huggingface.co/Qwen/Qwen3.5-4B`. models.dev records 6 providers at $0.00/$0.00. Not listed on OpenRouter. The Qwen3.5 family announcement is "Qwen3.5: Towards Native Multimodal Agents" (Qwen Team, Feb 2026), cited by the model card.
- **Release / knowledge:** released **2026-03-02** (models.dev, Alibaba). Knowledge cutoff not disclosed.
- **IDs:** `alibaba/qwen3.5-4b` (models.dev); `Qwen/Qwen3.5-4B` (Hugging Face).
- **Context window:** **262,144 tokens total, extensible to 1,010,000 via YaRN**. Max output **81,920** (models.dev; recommended for benchmarks, with 32,768 noted as typical).
- **Modalities:** **text, image and video in; text out** (Artificial Analysis; the HF architecture is "Causal LM with Vision Encoder"). Thinking mode is the default. Reasoning model; tool calling supported (BFCL-V4 and τ²-Bench are both reported, so tool use is measured rather than merely claimed).
- **Pricing (as of 2026-10-24):** **$0.00 / $0.00** per 1M (models.dev) because the weights are open. A paid route also exists at **$0.03 in / $0.15 out** per 1M (Artificial Analysis's provider median) — recorded as a conflict below.
- **Architecture:** open weights, **Apache-2.0**. Causal LM with a vision encoder, 32 layers, hybrid Gated DeltaNet + Gated Attention. **Parameter count conflicts:** the HF card says 4B, the HF sidebar says 5B, and Artificial Analysis says 4.7B (4.66B in its FAQ). The sidebar figure is read as including the vision encoder and embedding tables; AA's 4.7B is the most precise and is used.

### Raw benchmarks found

All non-vision figures are from the official Hugging Face model card's Qwen3.5-4B benchmark column; vision figures are from the card's separate vision table.

Reasoning / knowledge:

- GPQA Diamond: **76.2** (HF card; independently confirmed at 76.2 by Hugging Face community evals)
- MMLU-Pro: **79.1** (HF card; confirmed 79.1 by community evals)
- MMLU-Redux: **88.8** (HF card)
- SuperGPQA: **52.9** (HF card)
- HMMT Feb 2025: **74.0**; HMMT Nov 2025: **76.8** (HF card)
- AA-LCR (long-context reasoning): **57.0** (HF card)
- LongBench v2: **50.0** (HF card)
- Artificial Analysis Intelligence Index: **13 (estimated), ranked #27 of 141** (Artificial Analysis; the median comparable model scores 8). AA labels it estimated, so treat the rank as indicative.
- AIME: **no verified public score found** — despite HMMT being reported twice, no AIME figure exists for this model.
- HLE: no verified public score found.
- SciCode: no verified public score found.

Long context:

- AA-LCR **57.0** and LongBench v2 **50.0** (HF card) — the only long-context numbers available, and both mid-to-weak. No MRCR/RULER figure at a stated length exists.
- Window is 262,144 natively, extensible to 1,010,000 via YaRN (HF card).

Agent / tool use:

- BFCL-V4 (function calling): **50.3** (HF card)
- τ²-Bench: **79.9** (HF card) — the strongest agentic result for this model.
- IFEval: **89.8**; IFBench: **59.2**; MultiChallenge: **49.0** (HF card) — instruction-following, listed as adjacent evidence.
- ParseBench (HF community evals): Mean **35.4**, Text Content 88.9, Text Formatting 57.8.
- Terminal-Bench (any version): no verified public score found.
- Tau3-Banking: no verified public score found.
- GDPval-AA Elo: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas: no verified public score found.
- Coding Agents Index: no verified public score found.

Coding:

- LiveCodeBench v6: **55.8** (HF card)
- OJBench: **24.1** (HF card)
- SWE-bench Verified / SWE-Pro: no verified public score found.
- DeepSWE / Vibe Code Bench: no verified public score found.

Vision (multimodal):

- MMMU: **77.6** (HF card, vision table)
- MathVision: **74.6** (HF card)
- VideoMME (w/ subtitles): **83.5** (HF card)
- ScreenSpot Pro: **60.3** (HF card)
- MMMU-Pro, OCRBench, DocVQA, ChartQA: no verified public score found.

Speed / cost:

- Output speed **16.8 tokens/second**, ranked #63 of 64 in its class (Artificial Analysis) — the slowest result in this file by a wide margin.
- Time to first token **0.86 s** (Artificial Analysis).
- Cost per task: not published for this model.

### Conflicts recorded (not silently resolved)

1. **Parameter count:** 4B (HF card text) vs 5B (HF sidebar "Model size") vs 4.7B / 4.66B (Artificial Analysis). Artificial Analysis's figure is used as the most precise; the sidebar is read as including the vision encoder.
2. **Pricing:** $0.00/$0.00 (models.dev) vs $0.03/$0.15 per 1M (Artificial Analysis's provider median). Both recorded; the open-weights $0 route is used for cost scoring since self-hosting is the primary access path for a 4B model.
3. **Structured output:** models.dev's rendered table is ambiguous on this cell (`Yes / Yes / - / Yes`); tool call and reasoning are unambiguous `Yes`. The card's benchmark set implies structured output works, but it is not asserted here.
4. **Availability asymmetry:** `qwen3.5-4b` is absent from OpenRouter while its sibling `qwen3.5-9b` is present — an odd gap, noted because it means the paid API route is harder to reach than the weights.

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench at 79.9 is a genuinely strong agentic-tool result for a 4B model and BFCL-V4 at 50.3 shows real function-calling ability, but IFEval 89.8 is instruction-following rather than tool use, and Terminal-Bench, Tau3, GDPval-AA, Claw-Eval, Toolathon and the Coding Agents Index are all unpublished. 16.8 tok/s output (second-slowest of 64 in class) is a hard practical constraint on any agentic loop. Scored 66 on measured tool competence, capped by the missing terminal evidence and the speed.
- **Reasoning: 64/100.** GPQA Diamond 76.2 and MMLU-Pro 79.1 both sit in the methodology's 60-80% mid band, MMHMT twice at 74.0/76.8 corroborates, and the AA Intelligence Index of 13 (#27/141, estimated) is above its class median of 8. Capped at 64 by SuperGPQA at 52.9 and by the complete absence of AIME and HLE — the two benchmarks that would discriminate this model above the mid band. A solid small-model reasoner with no frontier evidence.
- **Context window: 72/100.** 262,144-token native window (200K-500K band = 65-84, so above the 200K floor) plus documented YaRN extension to 1,010,000. Held to 72 rather than the top of the band because the two published long-context results are weak — AA-LCR 57.0 and LongBench v2 50.0 — so the window is documented but its effective use is measured as mediocre, and no MRCR/RULER figure at a stated length exists.
- **Multimodal: 80/100.** Text, image and video in with text out — the methodology's "+video in" band is 75-90. MMMU 77.6 and MathVision 74.6 are strong for a 4B-class model, VideoMME 83.5 confirms real video comprehension, and ScreenSpot Pro 60.3 shows usable GUI grounding. Held at 80 (not 90) because there is no audio input and no non-text output.
- **Coding: 50/100.** LiveCodeBench v6 at 55.8 is below the methodology's mid-band threshold of ~80%, and OJBench at 24.1 is weak. SWE-bench, SciCode, DeepSWE, Vibe Code Bench and Terminal-Bench are all unpublished. There is no basis for a higher score than the bottom of the mid band, and none for a lower one either — this is a provisional score resting on two numbers.
- **Cost efficiency: 100/100.** Apache-2.0 open weights at $0.00/$0.00 on every provider models.dev lists, self-hostable, with a 16.8 tok/s decode speed that is the real constraint rather than price. Under the methodology's "$0 = 100" rule this is a full-marks cost score; the slow decode is a capability problem already penalised in the other dimensions, not a price one.
- **Overall Score: 66/100.** Mean of the five quality dims (66 + 64 + 72 + 80 + 50 = 332 ÷ 5 = 66.4, half-up → 66). Best fit: cheap, private, on-device multimodal agent work — document and image understanding at 262K context with zero licence cost. Worst fit: coding at any scale (LiveCodeBench 55.8) and long-context retrieval past ~128K (AA-LCR 57.0), plus anything latency-sensitive at 16.8 tok/s.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-24
- Method: public internet research across three independent source families (Alibaba's official Hugging Face model card and its benchmark tables, models.dev's Alibaba catalog, and Artificial Analysis's model page with its independent Intelligence Index measurement), plus Hugging Face community evals that re-ran several numbers; scores are normalized 1-100 interpretations, not official vendor scores.
- Research note: conflicts recorded inline rather than resolved silently — parameter count (4B vs 5B vs 4.7B), pricing ($0.00 vs $0.03/$0.15), and an unusual availability gap (this sibling is absent from OpenRouter while qwen3.5-9b is present). The two most decision-relevant benchmarks for this model's positioning, AIME and HLE, are unpublished.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
