# Gemini 2.0 Flash — findings by Space Bunny Alpha

- Source: Google (`gemini-2.0-flash-001`; released as the Gemini 2.0 Flash GA model)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (February 2025 release; now shut down)
- **Short description:** Google's early-2025 multimodal workhorse — a fast, cheap, non-reasoning model with native image/audio/video understanding and image output. It was Google's cheapest 1M-context flagship at launch, has since been deprecated and **shut down on 2026-06-01**, and is retained here as a historical reference for the 2.0 generation.
- **Provider / access:** Google Gemini API and Vertex AI (`gemini-2.0-flash-001`); the model is **no longer served** — API shutdown was 2026-06-01. Chat Completions and the Google GenAI SDK were the access surfaces. No OpenCode Zen Free ID exists; there is no live route to benchmark.
- **Release / knowledge:** Released **2025-02-05**. Knowledge cutoff **June 2024** (Artificial Analysis model page). The 2.0 Flash *experimental* preview had appeared earlier with a larger advertised window; the GA 1M-context model is the one catalogued here.
- **IDs:** `gemini-2.0-flash-001`. The repository `meta.json` records the Zen-facing id as `google/gemini-2.0-flash`. Marked **deprecated** by Artificial Analysis, which now benchmarks only the default 10k-input workload.
- **Context window:** **1,048,576 tokens (~1M)** total (Artificial Analysis, Google). Vals AI records a max output limit of **8,192 tokens**, which is the real constraint on this model.
- **Modalities:** Text, image, **speech (audio)**, video and file input; **text and image output**. Notably the widest native output coverage of its generation — it can emit images, not just text. **No reasoning mode**: Artificial Analysis confirms "Reasoning: No", and Google's own card labels it "Non-thinking". Native tool use / function calling supported.
- **Pricing (as of 2026-09-27, historical — the model is shut down):** Google AI Studio listed **$0.10 input / $0.40 output per 1M**, with audio input at $0.70 per 1M; Vertex AI listed $0.15/$0.60. Artificial Analysis currently renders $0.00/$0.00 because no provider still serves the model. The repository's curated `meta.json` records the same historical rates and the 2026-06-01 shutdown.
- **Architecture:** Proprietary. Google has not disclosed the parameter count or the model size. LongCat-style MoE is not claimed for this generation.

### Raw benchmarks found

Google's own model card is the primary source here: the stamped **Gemini 2.5 Flash model card** carries a dedicated "Gemini 2.0 Flash Non-thinking" comparison column with pass@1 values. Independent aggregations are used where Google published nothing.

Agent / tool use:

- Artificial Analysis Intelligence Index: **9/100**, rank **#103/299** (Artificial Analysis, Gemini 2.0 Flash Feb '25, accessed 2026-09-27; above the non-reasoning price-tier median of 7)
- Vals Index accuracy: **65.60%**; Vals latency **9.80s** (Vals AI, `google/gemini-2.0-flash-001`, accessed 2026-09-27)
- FACTS Grounding: **84.6%** (Google model card, 2.0 Flash non-thinking column)
- Terminal-Bench 2.1, Tau3-Banking / Tau2-Bench, GDPval-AA, Claw-Eval / ClawProBench, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: **no verified public score found** — Google published no agentic benchmark for this model and it predates most of these harnesses

Reasoning / knowledge:

- GPQA Diamond: **60.1%** single attempt, pass@1 (Google model card, 2.0 Flash non-thinking); an independent aggregation gives **63.6%**, rank #153/211 (LMSpeed, source "Gemini 2.0 Flash (experimental)")
- MMLU-Pro: **78.2%**, rank #72/129 (LMSpeed, same source)
- Global MMLU (Lite): **83.4%** (Google model card)
- Humanity's Last Exam (no tools): **5.1%** (Google model card); an independent aggregation gives **4.1%**, rank #173/208 (LMSpeed)
- AIME 2025: **27.5%** single attempt, pass@1 (Google model card)
- SimpleQA: **29.9%** (Google model card)
- LCR / MLCR, CritPt, Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **21.0%**, rank #103/115 (LMSpeed, source "Gemini 2.0 Flash (experimental)"; no version stated)
- SWE-bench Verified: **no verified public score found** — Google's model card leaves the cell for 2.0 Flash empty
- SWE-Pro, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE / Coding Index: **no verified public score found**

Long context:

- MRCR v2 at 128k (average): **36%** (Google model card, 2.0 Flash non-thinking)
- MRCR v2 at 1M (pointwise): **6%** (Google model card, 2.0 Flash non-thinking) — a severe collapse from 36% at 128k to 6% at the advertised full window
- No RULER, GraphWalks or other long-context retrieval result was found.

Sources consulted: [Google Gemini 2.5 Flash model card (stamped PDF, includes the Gemini 2.0 Flash non-thinking comparison column)](https://www.stampr-ai.com/data/models/cards/gemini-2-5-flash/gemini-2-5-flash_20251214_191817_f3221d94_stamped.pdf), [Artificial Analysis Gemini 2.0 Flash](https://artificialanalysis.ai/models/gemini-2-0-flash), [Vals AI Gemini 2.0 Flash (001)](https://www.vals.ai/models/google_gemini-2.0-flash-001), [LMSpeed Gemini 2.0 Flash vs Gemini 3 Flash](https://lmspeed.net/compare/model/gemini-2-0-flash-vs-gemini-3-flash), all accessed 2026-09-27.

### Normalized scores (1–100)

- **Tool use: 45/100.** Grounding is genuinely good (FACTS 84.6%) and native function calling is supported, but the AA Intelligence Index of 9 and the complete absence of any published Terminal-Bench, Tau or GDPval figure mean there is no measured agentic reliability to credit.
- **Reasoning: 52/100.** MMLU-Pro 78.2% and Global MMLU Lite 83.4% show solid breadth, but the model is explicitly non-reasoning, and HLE at 4.1–5.1% with AIME 2025 at 27.5% is the floor.
- **Context window: 70/100.** The advertised 1M window is the top context tier, and it is genuinely measured here — but MRCR v2 falling from 36% at 128k to **6% at 1M**, plus an 8,192-token output cap, means the capacity is close to unusable at its stated length. The score credits the tier, not the retrieval.
- **Multimodal: 82/100.** The broadest coverage of its generation: text, image, audio, video and file in, and **image as well as text out** — native image generation output is rare at this price. MMMU 71.7% is respectable; it loses points only for the older vision stack.
- **Coding: 35/100.** LiveCodeBench at 21.0% (rank #103/115) is the single hard datapoint and it is very weak, and Google declined to publish any SWE-bench figure for this model at all.
- **Cost efficiency: 95/100.** The historical $0.10/$0.40 per 1M (with $0.70 audio in) was among the cheapest credible multimodal 1M-context routes available. Scored on that historical rate card, with the caveat that the score is moot — the model was shut down on 2026-06-01 and cannot be bought at any price.
- **Overall Score: 56.8/100.** (45 + 52 + 70 + 82 + 35) / 5 = 56.8. Best fit: none today — this is a historical reference entry. Its one durable lesson is that a 1M-token window is a capacity claim, not a retrieval result: Google's own MRCR numbers show a 6x drop-off between 128k and 1M. Anything still running on a 2.0-generation Flash should have moved to Gemini 2.5 Flash or later.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-27
- Method: Public web research anchored on Google's own stamped model card comparison column for Gemini 2.0 Flash non-thinking, cross-checked against Artificial Analysis, Vals AI and LMSpeed. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `Gemini_2_0_Flash_Experimental.md`, using the same headings.
