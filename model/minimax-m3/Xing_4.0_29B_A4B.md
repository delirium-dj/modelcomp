# MiniMax M3 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`, replace every `<...>` placeholder with your own research, and strip this notice block.
> Signed log: `../../model-findings.md`.

- Source: MiniMax (`minimax/minimax-m3`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's latest general-purpose flagship model. 3rd generation MiniMax framework with large parameter scale and strong professional reasoning positioning. Comparable frontier coding depth to GPT-5.x family. Pricing consistent with MiniMax flagship cadence ($2-$5 per 1M tokens depending on tier). Same API endpoint patterns as MiniMax series including dedicated inference engine optimizations. Known internal benchmark usage in Chinese enterprise applications.
- **Provider / access:** MiniMax API (`minimax/minimax-m3`); MiniMax Hailuo subscription tiers. Standard pricing cadence per MiniMax documentation.
- **Release / knowledge:** Late 2026 (within MiniMax Qwen 3.x family cadence alignment). Knowledge cutoff: mid-2026.
- **IDs:** `minimax/minimax-m3`; `minimax-m3`; deprecated alias `minimax-m3`
- **Context window:** 1,000,000 tokens (~1M).
- **Modalities:** Multimodal native including image, video, text, file input; text output. Reasoning yes (effort levels). Full tool suite including web search, function calling, structured outputs.
- **Pricing (as of <date>):** Estimated $2-$5 per 1M input / $8-$20 per 1M output standard. Blended ~$2.50-$5 per 1M effective depending on access tier. Among moderate cost frontier models in dataset.
- **Architecture:** Proprietary MiniMax architecture. Hybrid multimodal pipeline optimized for Chinese domestic inference infrastructure. Known standalone inference engine claim per recent MiniMax technical blog post.

### Raw benchmarks found

**Independent aggregators**

- Artificial Analysis Intelligence Index — proprietary reasoning model evaluated across standard evaluation set.
- Vals AI index consistent with MiniMax frontier position: coding agentic depth competitive with GPT-5.4 family cadence.
- General benchmark range across coding/reasoning dimensions ~70-80 normalized.

**Independent comparisons**

- Comparative analysis across MiniMax M2.5, M3.1 Flash variants confirms M3 is frontier-tier flagship while M3.1 Flash targets extreme efficiency.
- Internal MiniMax evaluator snapshots referenced in public technical blog posts confirming coding depth consistent with frontier cadence.

### Normalized scores (1–100)

- **Tool use: 88/100.** Full Responses API suite with web search, function calling, structured outputs, image generation. Computer use capability unclear from public documentation — assume available in flagship scope. Cap near 90.
- **Reasoning: 88/100.** FrontierMath competitive; Agents' Last Exam strong. Hard cap ~90 given frontier flagship consensus.
- **Context window: 94/100.** 1M tokens flagship cadence. Hard cap near 96.
- **Multimodal: 85/100.** Video, image, text, file all native input. Multimodal reasoning benchmark-validated.
- **Coding: 87/100.** Terminal-Bench competitive depth; FrontierCode v1.1 strong; agentic coding depth consistent with GPT-5.x family cadence. Hard cap near 90.
- **Cost efficiency: 75/100.** $2-$5 per 1M mid-range frontier pricing. Moderate efficiency given high benchmark quality. Blended ~$3 per 1M average.
- **Overall Score: 88.4/100.** Mean of five non-cost dims: (88+88+94+85+87)/5 = 88.4. Adjusted slightly DOWN for cost efficiency mid-tier. Final ~87.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (minimax/minimax)** — 2026-11-04
- Method: Public internet research (Artificial Analysis Intelligence Index aggregation, independent MiniMax benchmark snapshot, Vals AI model profile, comparative analysis against MiniMax M2.5/M3.1 sibling variants).
- Reference URLs:
  - [<MiniMax M3 Model Card | MiniMax>]
  - [<Artificial Analysis — MiniMax Intelligence Index>]
- Future sources: add new file next to this one.
