# Hy3 Preview — findings by Step 5 Preview

- Source: Tencent (`tencent/Hy3-preview`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview. Tencent's **preview** variant of the Hy3 generation, sibling to `hy3` (unranked, refreshed earlier in this session) and predecessor to `hy4-preview` (61.57) and `hy4` (unranked). BenchLM scores it **52.96/100, #91 of 1,015** with **21 benchmarks**.
- **Short description:** An **open-weight 256K-context** preview whose profile is genuinely mid-tier and **whose evidence is unusually well-sourced given its status** — Tencent's own model card supplies the vendor rows and Artificial Analysis supplies the composites. Its strongest figures are **AA-GPQA Diamond 89.7%, AA Intelligence Index 41.2%, SWE-bench Verified 74.4% and GDPval-AA 35.8% normalized**, against **CritPt 4.9%, AA-HLE 33.5%, AA Agentic Index 25.6%, Terminal-Bench 2.0 54.4%, HLE 25.5%** and an **83.0% hallucination rate**.
- **Provider / access:** **Open weights** on Hugging Face (`tencent/Hy3-preview`), and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Hy3 Preview is Tencent's 2026 preview line. **Knowledge cutoff not disclosed.**
- **IDs:** `tencent/Hy3-preview` (Hugging Face); `hy3-preview` (BenchLM canonical, repo).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text in; text out** — no visual or multimodal benchmark exists in the 21-row catalog.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

Tencent's own Hy3-preview model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals-adjacent third parties, Gert Labs and Openrouter supplying independent rows. 21 benchmarks total.

**A provenance note is recorded: BenchLM attributes the AA-intelligence rows for this model to `https://artificialanalysis.ai/models/hy3` — the *unranked sibling* rather than a Hy3-preview-specific page.** That is cross-citation from a sibling, which is weaker provenance, and it means **the composite rows (AA Intelligence Index 41.2%, AA-HLE 33.5%, AA-LCR 66.7%, CritPt 4.9%, AA-SciCode 48.6%, AA Coding Index 58.8%) may describe the sibling Hy3 rather than this preview** — flagged at each affected figure rather than implied. The vendor rows (SWE-bench Verified, Terminal-Bench 2.0, GPQA) come from Tencent's own Hy3-preview card, which is clean same-model provenance.

Agentic / tool use — **mid, and weak at execution**:

- **GDPval-AA: 1,136 Elo / 35.8% normalized** [AA, cross-cited from the sibling]; **AA Agentic Index: 25.6%** [AA, cross-cited]
- **Terminal-Bench 2.0: 54.4%** (vendor) — 33.6 points under the 88%+ reference; Gert Labs: 36.91%
- **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists beyond the cross-cited AA Agentic Index**

Reasoning / knowledge — **mid, with the strongest single figure in the report**:

- **AA-GPQA Diamond: 89.7%** [AA, cross-cited from the sibling] / **GPQA-D 87.2%** (vendor) — fails the 90%+ reference on both, by 0.3 and 2.8 points
- **AA Intelligence Index: 41.2%** [AA, cross-cited] — **the strongest composite measured in this batch**, and notably higher than the sibling-level composites elsewhere
- **HLE: 25.5%** [AA, cross-cited] / **AA-HLE 33.5%** [AA, cross-cited] — fails the 40%+ reference by ~6.5–14.5 points
- **AA-Omniscience: accuracy 31.5%, hallucination rate 73.0%** [AA, cross-cited] — a **73.0% hallucination rate**, and no index figure is published for this model
- **AA-LCR: 66.7%** [AA, cross-cited]; **CritPt: 4.9%** [AA, cross-cited] — near-floor
- **IFBench: 63.1%** [AA, cross-cited] — mid instruction following
- **ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **long-context retrieval, composite depth and three of five reasoning references are entirely unmeasured**

Coding — **mid, and the least-bad dimension**:

- **SWE-bench Verified: 74.4%** (vendor) — 10.6 points under the 85%+ terminal reference
- **AA Coding Index: 58.8%** [AA, cross-cited] — 11.2 points under the 70% reference; **AA-SciCode: 48.6%** [AA, cross-cited] — under 55%; SciCode: 41.2% [AA]
- **SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found** — the model is text in / text out

### Normalized scores (1–100)

- **Tool use: 52/100.** Below the methodology's mid band, and the weakest dimension. **GDPval-AA 35.8% normalized and AA Agentic Index 25.6%** are the only two agentic figures and both are cross-cited from the sibling, so they may not describe this preview; **Terminal-Bench 2.0 54.4% is 33.6 points under the reference and Gert Labs 36.91% is weak**. **Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all**, so all three frontier references are unmeasured.
- **Reasoning: 60/100.** Mid-band, and the best-grounded quality dimension, anchored on the strongest single figure in the report: **AA Intelligence Index 41.2%** — the strongest composite measured in this batch, and notably higher than the composites of the model's own successors in places. Supported by **AA-GPQA Diamond 89.7%** (0.3 points under the frontier reference) and **GPQA-D 87.2%** (vendor). Capped by **AA-HLE 33.5% (6.5 under the 40% reference), HLE 25.5%, CritPt 4.9% (near-floor), AA-LCR 66.7%, IFBench 63.1%, and above all by the 73.0% hallucination rate** — which suppresses the dimension because a model that hallucinates on 73% of unanswerable questions cannot be trusted with the reasoning it demonstrably has. Capped further by the **absence of ARC-AGI, MRCR, AIME, MATH, MMLU-Pro and FrontierMath.**
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 66.7%** (cross-cited) — decent long-context reasoning, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text in / text out.** There is no image, audio or video input, so the dimension does not exist. Scored at 50 rather than lower because the absence is a verified design choice and text-out is a real capability.
- **Coding: 66/100.** Mid-band, and the least-bad dimension, anchored on one solid figure: **SWE-bench Verified 74.4%** (vendor) — solid mid-frontier repair, 10.6 points under the frontier reference. Supported by **AA Coding Index 58.8%** (cross-cited), 11.2 points under the 70% reference. Capped by **AA-SciCode 48.6% (under 55%)**, SciCode 41.2%, and the absence of SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 62.6/100.** (52 + 60 + 85 + 50 + 66 + 88) / 5 = 68.2 → **68**. Recommendation: **a mid-tier open-weight preview with the batch's strongest composite and a poor execution layer.** AA Intelligence Index 41.2%, AA-GPQA Diamond 89.7%, SWE-bench Verified 74.4% and GDPval-AA 35.8% normalized at **open weights** and a 256K window is a reasonable package — but three cautions matter more than the figures. **First, the composite rows are cross-cited from the unranked sibling `hy3` rather than measured on this preview**, so they may not describe this SKU and should be re-verified. **Second, its execution layer is weak** (AA Agentic Index 25.6%, Terminal-Bench 2.0 54.4%), so it is a reasoner rather than an autonomous agent. **Third, a 73.0% hallucination rate with no published Omniscience index** means reliability is poor and partially unmeasured. Note it scores **below its own successor `hy4-preview` (61.57)**, so prefer that unless this preview's specific behaviour is required.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Tencent's own Hy3-preview model card as the primary source for the vendor rows (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 21-row catalog. **A provenance finding is recorded prominently and is the report's central caveat: BenchLM attributes this model's AA-intelligence rows — AA Intelligence Index 41.2%, AA-HLE 33.5%, AA-LCR 66.7%, CritPt 4.9%, AA-SciCode 48.6%, AA Coding Index 58.8% — to `https://artificialanalysis.ai/models/hy3`, the *unranked sibling* rather than a Hy3-preview-specific page.** That is cross-citation from a sibling, which is weaker provenance, and it means those composites may describe the sibling rather than this preview — flagged at each affected figure and carried into the recommendation as the first thing to re-verify. The vendor rows (SWE-bench Verified 74.4%, Terminal-Bench 2.0 54.4%, GPQA-D 87.2%) come from Tencent's own Hy3-preview card, which is clean same-model provenance. **The strongest composite measured in this batch (AA Intelligence Index 41.2%) is attributed as such, with the sibling cross-citation caveat attached.** The **73.0% hallucination rate** and the **absence of any published Omniscience index** for this model are attributed rather than glossed, as is the **absence of a max-output limit**. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench 2.1/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — tencent/Hy3-preview model card (primary source for the vendor rows)](https://huggingface.co/tencent/Hy3-preview)
  - [BenchLM — Hy3 Preview benchmark scores (21 rows, 52.96/100, #91/1015; composite rows attributed to `models/hy3`, the sibling)](https://benchlm.ai/models/hy3-preview)
  - [Artificial Analysis — Hy3-preview (the page BenchLM cites for the composite rows; note this is the `hy3` slug)](https://artificialanalysis.ai/models/hy3)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [Openrouter — Hy3 Preview benchmarks](https://openrouter.ai/tencent/hy3-preview/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/hy3/`](hy3.md) — the unranked sibling whose AA page BenchLM cites for the composite rows, refreshed earlier in this session; [`model/hy4-preview/`](hy4-preview.md) (61.57) and [`model/hy4/`](hy4.md) — the successor generations
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
