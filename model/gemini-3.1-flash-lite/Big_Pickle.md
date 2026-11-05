# Gemini 3.1 Flash Lite — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's most cost-efficient model family, billed as the "most cost-effective AI model yet," targeting massive-scale throughput with a full 1M-token context at lite-tier prices.
- **Provider / access:** Google Gemini API (Gemini Developer API / Vertex AI), `gemini-3.1-flash-lite`.
- **Release / knowledge:** Published 2026-03-03 (DeepMind model card); knowledge aligned with the March 2026 release.
- **IDs:** `gemini-3.1-flash-lite` (proprietary; no open weights, `open_weights = false`)
- **Context window:** 1,000,000 tokens (text, image, audio, video input).
- **Modalities:** text, image, audio, video input; text output.
- **Pricing (as of 2026-09-20):** $0.25 in / $1.50 out per 1M tokens; output speed ~363 tokens/s.
- **Architecture:** Proprietary, undisclosed; lite-optimized variant engineered for cost and throughput rather than peak reasoning.

### Raw benchmarks found

Reasoning / knowledge:

- HLE (Humanity's Last Exam, no tools): **16.0%** (DeepMind model card, 2026-03).
- GPQA Diamond (no tools): **86.9%** (DeepMind model card, 2026-03).

Long context:

- MRCR v2: 128K avg **60.1%**; 1M pointwise **12.3%** (DeepMind model card, 2026-03).

Agent / tool use:

- Tool/agentic benchmarks: **no verified public score found**.

Coding:

- Coding benchmarks: **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 74/100.** Function-calling support is standard for the Flash Lite tier, but no agentic benchmark results are published; score is a capability-based estimate for a cost-first model.
- **Reasoning: 78/100.** GPQA Diamond 86.9% is excellent for the tier, but HLE 16.0% shows the ceiling drops sharply on frontier-hard questions.
- **Context window: 68/100.** The 1M window is top-tier in span, but MRCR 128K avg 60.1% and 1M pointwise 12.3% show real retrieval degradation at long ranges.
- **Multimodal: 72/100.** Text/image/audio/video input is fully supported; text-only output keeps it below omni models.
- **Coding: 65/100.** No published coding benchmarks; 363 tok/s throughput is well-suited to high-volume generation, but the lite tier is not a coding specialist.
- **Cost efficiency: 92/100.** $0.25/$1.50 per 1M at 363 tok/s makes it arguably the best cost-to-capability ratio on the market.
- **Overall Score: 71/100.** Mean of the five quality dims (74+78+68+72+65)/5 = 71.4. A ruthlessly cost-efficient 1M-context workhorse; quality dims are led by strong GPQA for the price and held back by long-context retrieval and the lack of coding/agentic evals.

## Re-verification — 2026-10-01 (11 days after original)

Original research date 2026-09-20. Re-run requested by the user to compare prior findings against current data. Original findings above are preserved; corrections are marked inline.

| Dimension | 2026-09-20 | 2026-10-01 | Change |
| --- | --- | --- | --- |
| Tool use | 74 | 74 | — |
| Reasoning | 78 | 78 | — |
| Context window | 68 | 68 | — |
| Multimodal | 72 | 72 | — |
| Coding | 65 | 65 | — |
| Cost efficiency | 92 | 92 | — |
| **Overall** | **71** | **71** | **—** |

**Throughput re-confirmed, slightly better than recorded:** independent benchmarking measured **381 output tokens/s** (blog.buildfastwithai.com head-to-head vs 2.5 Flash's 232), consistent with the ~363 tok/s recorded on 2026-09-20. No price change found ($0.25/$1.50 stands).

**Still no tier-specific benchmark movement:** no agentic or coding evals specific to `gemini-3.1-flash-lite` have appeared since — Tool use and Coding remain capability estimates, exactly as flagged. No deprecation signal; it remains the current cost floor of the Gemini 3.x line (3.8 Flash Lite exists above it).

**Net assessment:** report holds as written; the speed claim is now independently corroborated. Scores unchanged.

## Re-verification — 2026-11-05 (46 days after original; 35 after the first re-run)

Second re-run requested by the user. The 2026-09-20 and 2026-10-01 findings above are preserved; this section records what the first independent benchmark rows changed.

| Dimension | 2026-09-20 | 2026-10-01 | 2026-11-05 | Change |
| --- | --- | --- | --- | --- |
| Tool use | 74 | 74 | 66 | **−8** (first measured agentic rows) |
| Reasoning | 78 | 78 | 78 | — |
| Context window | 68 | 68 | 68 | — |
| Multimodal | 72 | 72 | 72 | — |
| Coding | 65 | 65 | 63 | **−2** (Vibe Code Bench 0.00%) |
| Cost efficiency | 92 | 92 | 92 | — |
| **Overall** | **71** | **71** | **69** | **−2** |

**The two "no verified public score found" gaps are now closed — and they close downward.** The 2026-10-01 re-run correctly said Tool use and Coding were capability estimates with no tier-specific evals. BenchLM now carries 12 rows for this model, and the first measured agentic results are weak: **Terminal-Bench 2.1 (Vals) 34.1%** and **Gert Labs 38.46%**. Tool use drops 74 → 66 because an estimate has been replaced by a measurement, not because the model changed.

**Coding: Vibe Code Bench 0.00%.** The first measured coding rows are **SWE-bench (Vals) 62.8%**, **LiveCodeBench (Vals) 80.1%** and **Vibe Code Bench 0.00%** — the same LiveCode-high/Vibe-zero shape the methodology maps to the 65–75 band's floor. Coding moves 65 → 63; the LiveCode number is respectable for the tier, the zero is not a rounding artefact.

**Reasoning holds at 78, with a caveat.** **GPQA Diamond (Vals) 81.1%** against the vendor card's 86.9%, **MMLU-Pro (Vals) 86.2%**, **FrontierMath v2 (T1–3) 27.719%**, plus two JevBench readings (14.26 / 19.58). The vendor GPQA figure was measured on Google's own harness; 81.1% is the independent number, and it is still strong for a lite tier.

**Multimodal is confirmed but still unmeasured at the top end.** **ParseBench 56.66%** and **CharXiv 73.2%** confirm real image understanding; no independent board exercises the audio or video input that the model card claims. Score unchanged at 72.

**SKU caveat.** The Vals rows are published for the **`gemini-3.1-flash-lite-preview`** SKU. They are the closest public measurement of this configuration, but they are not literally the GA ID.

**Pricing and lifecycle.** List price **$0.25 in / $1.50 out** is unchanged, but the model is **absent from the `opencode` provider catalogue** in `models.dev/api.json`, so it is no longer reachable through Zen. Google's deprecation schedule lists **shutdown on 2027-05-07**, which gives it a longer runway than 2.5 Flash but no gateway here.

**Net assessment.** The October pass was right to flag the estimates; the November pass is the first one with evidence, and the evidence says the agentic and greenfield-coding story is weak for this tier. It remains a cheap 1M-context reader, not an agent.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-01 (re-verified; original research 2026-09-20)
- Re-verified by: **Big Pickle (opencode/big-pickle)** — 2026-11-05
- Method: public web research (deepmind.google model cards, blog.google, ai.google.dev; BenchLM, Vals AI, Google's deprecation schedule and models.dev on re-run); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini API deprecations (shutdown schedule)](https://ai.google.dev/gemini-api/docs/deprecations)
  - [BenchLM — Gemini 3.1 Flash-Lite](https://benchlm.ai/models/gemini-3-1-flash-lite)
  - [Vals AI — Gemini 3.1 Flash-Lite (preview) rows](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)
  - [models.dev — provider catalogue](https://models.dev/api.json)
  - [OpenCode Zen — models and pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `Gemini_3.1_Flash_Lite_2.md`, using the same headings.