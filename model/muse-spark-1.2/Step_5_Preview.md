# Muse Spark 1.2 — findings by Step 5 Preview

- Source: Meta / Meta AI (FAIR) (`muse-spark-1-2`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2. The 5.5-generation `1.2` variant, now **two generations behind** the current Muse Spark 1.3 and behind Muse Wonder (62.78) and Muse Wonder Full (68.96) in the family. BenchLM scores it 65.41/100, #28 of 1009.
- **Short description:** A 1.2-generation workhorse with a notably **good reliability profile for a Meta model (AA-Omniscience hallucination rate 33.3%, the third-best in this batch)** and a solid coding record (SWE-bench 86.6% Vals, VulcanBench v3 87.0%, AA Coding Index 72.2%), whose weakness is concentrated in agentic execution (MazeBench 0%, GDPval-AA 1,631 Elo against the 1,750 reference) and deep reasoning (CritPt 17.7%, no ARC-AGI or FrontierMath figure at all).
- **Provider / access:** Meta Model API, Muse Code, OpenRouter, Vercel AI Gateway, and OpenCode Zen (`opencode/muse-spark-1-2`) at **$1.25/$4.25/$0.15** — the same rate card as Muse Spark 1.3.
- **Release / knowledge:** release date not restated for this SKU; the 1.2 generation is the 2026 mid-cycle predecessor of 1.3 (2026-09-02). **Knowledge cutoff not disclosed by Meta.**
- **IDs:** `muse-spark-1-2` (Zen, Meta Model API); `meta/muse-spark-1.2` (OpenRouter, Vercel).
- **Context window:** **1M tokens** (BenchLM and Meta's lineup comparison agree). Max output not published.
- **Modalities:** the Muse Spark 1.2 model page exists but no modality statement is captured in the benchmark sources; the 1.3 generation documents text + image + video + audio input. **Recorded as inferred from lineage rather than vendor-verified for this SKU.**
- **Pricing (as of 2026-11-05):** **$1.25 input / $0.15 cached / $4.25 output per 1M** on Zen — the identical rate card as the newer 1.3, so this SKU is strictly dominated on price-equal terms. Batch API 50% off; search grounding $2.50/1,000 queries.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Meta's Muse Spark 1.2 model page is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, VulcanBench's effort study, Proximal, OpenAI's LifeVal-style rows and OpenRouter supplying independent measurements.

Agent / tool use:

- **Terminal-Bench 2.1: 82.9%** (Meta) / **69.7%** (Vals) — a 13.2-point spread across harnesses, and the vendor figure sits just under the 88% reference
- **GDPval-AA: 1,631 Elo** / 48.6% normalized (AA) — 119 Elo points under the 1,750 frontier reference
- AA Agentic Index: 44.0%; AA EnterpriseOps-Gym: 47.3%; **MazeBench: 0%**
- **τ³-Banking, τ²-bench, OSWorld, BrowseComp, MCP-Atlas, Toolathlon, JobBench, ALE, Claw-Eval: no verified public score found** — the entire agentic reference set beyond Terminal-Bench 2.1 and GDPval is absent

Reasoning / knowledge:

- **AA-GPQA Diamond: 90.4%** — just clears the 90%+ frontier reference
- **AA-HLE: 45.5%** — clears the 40%+ frontier reference
- **AA-Omniscience: index 27.2, accuracy 45.4%, hallucination rate 33.3%** — the third-best reliability profile in this batch, behind only MiniMax M3.1 Flash's and GPT-6.1 Sol's figures
- MMLU-Pro (Vals): 88.3%; AA-LCR: **79.0%**; **CritPt: 17.7%**
- Artificial Analysis Intelligence Index: **39.6**
- **ARC-AGI-1/2, FrontierMath, MRCR: no verified public score found** — so three of the methodology's five reasoning references cannot be checked

Coding:

- **AA Coding Index: 72.2%** — clears the 70% frontier reference
- **SWE-bench (Vals): 86.6%**; **VulcanBench v3: 87.0%**
- Terminal-Bench 2.1: 82.9% — just under the 85% reference
- **AA-SciCode: 57.4%** — clears the 55% reference
- **DeepSWE: 59.3%** — 14.7 points under the 74% reference
- **FrontierSWE v2: 12.0%** — one of the two weakest figures in this batch
- **SWE-bench Verified, LiveCodeBench, Vibe Code Bench, FrontierCode: no verified public score found**

Multimodal (image-in):

- Design Arena (website): **1,312 Elo** — the only measured visual result
- **MMMU-Pro, CharXiv, ExtractBench, ZeroBench: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** The weakest dimension. Terminal-Bench 2.1 82.9% (Meta's own run) sits just under the 88% reference and Vals measures it at only 69.7%; GDPval-AA is 1,631 Elo against 1,750; and **τ³-Banking, OSWorld, BrowseComp, MCP-Atlas, Toolathlon and Claw-Eval are all absent**, so two of the three frontier references cannot be checked at all. MazeBench 0% and AA Agentic Index 44.0% confirm the agentic-execution layer is not competitive.
- **Reasoning: 74/100.** Mid-band. AA-GPQA Diamond 90.4% and AA-HLE 45.5% both clear their references, and the **33.3% hallucination rate is the third-best in this batch** — genuinely reliable for a model at this price point. Capped by an AA Intelligence Index of 39.6, CritPt 17.7%, and the complete absence of ARC-AGI, FrontierMath and MRCR, leaving three of five reasoning references unmeasurable.
- **Context window: 95/100.** 1M-token tier at the tier floor, because the only long-context evidence is AA-LCR 79.0% — no MRCR, no GraphWalks, no published max-output limit. The window's size is confirmed; its usable depth is not.
- **Multimodal: 72/100.** Scored in the methodology's "+image in" 60–70 band and marginally above it, on the basis of a 1,312-Elo Design Arena result plus the Muse Spark lineage (1.3 documents text + image + video + audio input). **Explicitly an inference, not a vendor claim for this SKU**: no MMMU-Pro, CharXiv, ExtractBench or ZeroBench figure exists, so if the 1.2 modality set is narrower than 1.3's this would drop sharply.
- **Coding: 78/100.** The strongest dimension. AA Coding Index 72.2% clears the 70% reference, SWE-bench 86.6% (Vals) and VulcanBench v3 87.0% are solid, and AA-SciCode 57.4% clears the 55% reference. Capped by DeepSWE 59.3% (14.7 points under the reference), FrontierSWE v2 12.0%, Terminal-Bench 2.1 82.9%, and no SWE-bench Verified or LiveCodeBench figure.
- **Cost efficiency: 86/100.** $1.25/$0.15/$4.25 per 1M is the methodology's ≈88 anchor rate card, and it was a genuine Pareto-leader price when this model shipped. Held at 86 rather than 88 because the newer **Muse Spark 1.3 sits on the identical rate card** and scores 8 BenchLM points higher (and Muse Spark Open, also open-weight, offers self-hosting), so the price advantage is no longer differentiating within the family.
- **Overall Score: 75/100.** (58 + 74 + 95 + 72 + 78) / 5 = 75.4 → **75** → 75. Recommendation: **a superseded SKU with no remaining reason to select it.** Every dimension is matched or beaten by a same-price or cheaper Meta model — Muse Spark 1.3 shares its $1.25/$4.25 card and scores 8 BenchLM points higher, and Muse Spark Open adds open weights. Its one distinctive asset is reliability (33.3% hallucination), but that does not justify a two-generation-old model at full price. Migrate to 1.3 or Open.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Meta's Muse Spark 1.2 model page as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 24-row catalog (attributing independent numbers to Artificial Analysis, Vals AI, VulcanBench's effort study, Proximal and OpenRouter) and OpenCode Zen's pricing table. Vendor-vs-independent conflicts are listed side by side — Terminal-Bench 2.1 82.9% vs 69.7% across Meta and Vals — rather than averaged. Missing benchmarks (τ³-Banking, τ²-bench, OSWorld, BrowseComp, MCP-Atlas, Toolathlon, JobBench, ALE, Claw-Eval, ARC-AGI, FrontierMath, MRCR, SWE-bench Verified, LiveCodeBench, and all multimodal benchmarks except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta — Muse Spark 1.2 model page (primary benchmark source)](https://developer.meta.com/ai/models/muse-spark/)
  - [BenchLM — Muse Spark 1.2 benchmark scores (24 rows, 65.41/100, #28/1009)](https://benchlm.ai/models/muse-spark-1-2)
  - [Artificial Analysis — Muse Spark 1.2](https://artificialanalysis.ai/models/muse-spark-1-2)
  - [Vals AI — Muse Spark 1.2 leaderboard results](https://www.vals.ai/models/meta_muse_spark_1_2)
  - [VulcanBench Report 19 — Muse Spark 1.2 effort study (source of the 87.0% VulcanBench v3)](https://vulcanbench.com/benchmarks/19-musespark-effort.html)
  - [OpenRouter — Muse Spark 1.2 benchmarks and pricing](https://openrouter.ai/meta/muse-spark-1.2/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
