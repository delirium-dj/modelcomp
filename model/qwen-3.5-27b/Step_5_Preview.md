# Qwen3.5-27B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-27B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-27B. Alibaba's **open-weight dense 27B** in the Qwen3.5 generation — sibling to 397B (55.46), 122B-A10B (52.92), 35B-A3B (45.58) and 9B/4B/2B — scoring **49.01/100, #107 of 1,015** with **33 benchmarks**. BenchLM's canonical slug is `qwen3-5-27b` (**not** `qwen-3.5-27b`, which 404s — the same dotted-slug trap).
- **Short description:** A small open-weight model whose profile is **a near-clone of its 122B-A10B sibling's**: the same strengths (τ²-bench 93.9% [AA], V\* 93.7%, IFEval 95%, LiveCodeBench v6 80.7%) and the same collapses (**AA-Omniscience index −44.0 with 81.5% hallucination on 20.7% accuracy, CritPt 0.9%, AA Intelligence Index 22.9%**). Its distinguishing property is that it does this at **27B dense** — the strongest small-model value case in this batch.
- **Provider / access:** **Open weights** on Hugging Face (`Qwen/Qwen3.5-27B`), Alibaba Cloud Model Studio / QwenCloud, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.5-27B` (Hugging Face); `qwen3-5-27b` (BenchLM canonical, AA); `qwen/qwen3.5-27b` (Openrouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M with YaRN** — BenchLM records 262K.
- **Modalities:** **text and image in; text out**, with a solid measured visual suite (V\* 93.7%, MMMU-Pro 75%, MathVision 86.0%, CharXiv 79.5%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a dense 27B footprint provide the self-hosting escape**, and 27B is small enough for a single consumer accelerator.
- **Architecture:** **open-weight dense 27B** — no MoE, so the full 27B is active per token.

### Raw benchmarks found

Qwen's own model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Epoch AI, Gert Labs, SWE-Rebench and the Qwen3.5 blog supplying independent rows. 33 benchmarks total.

**A provenance note is recorded: two multimodal rows — MathVision 86.0% and V\* 93.7% — are cross-cited from the *Qwen3.5-122B-A10B model card* rather than from a 27B-specific source, which is weaker provenance and is flagged at those figures.**

Agent / tool use:

- **τ²-bench: 93.9%** [AA] — the strongest agentic figure here and among the best in this research series
- **BrowseComp: 61%** (vendor); **OSWorld-Verified: 56.2%** (vendor); Gert Labs: 39.41%; **AA ITBench: 35.5%**
- **Terminal-Bench 2.0: 41.6%** (vendor) — far under the 88%+ reference, and on the *older* harness
- **Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **split, and the split is severe**:

- **AA-Omniscience: index −44.0, accuracy 20.7%, hallucination rate 81.5%** — **the third-worst AA-Omniscience index measured in this research series**, behind only Grok 4.1 Fast's −50.9 and Gemma 4 31B's −48.5, on the **third-lowest accuracy** measured anywhere here
- **CritPt: 0.9%** [AA] — among the lowest measured in this research series
- **AA-GPQA Diamond: 85.8%** [AA] / GPQA 85.5% (vendor) — fails the 90%+ reference on both
- **AA-HLE: 23.9%** — 16.1 points under the 40%+ reference
- AA Intelligence Index: **22.9%**; **AA-LCR: 77.7%**; LongBench v2: 60.6%
- MMLU-Pro: **86.1%**; SuperGPQA: 65.6%; MMLU-ProX: 82.2%; AA Global-MMLU-Lite: 86.8%
- **IFEval: 95%**; **AA-IFBench: 75.6%**
- **ARC-AGI, MRCR, AIME, FrontierMath: no verified public score found** — so three of five reasoning references are unmeasurable and all mathematics is unmeasured

Coding — **mid**:

- **LiveCodeBench v6: 80.7%** (vendor) — the strongest coding figure
- **SWE-bench Verified: 72.4%** (vendor) — 12.6 points under the 85%+ terminal reference
- **SWE-Rebench: 58.9%**
- **SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **V\*: 93.7%** (cross-cited from the 122B-A10B card — weaker provenance) — the third-highest V\* figure in this research series
- **MathVision: 86.0%** (also cross-cited); **MMMU: 82.3%**; **CharXiv: 79.5%**
- **MMMU-Pro: 75%** (vendor) / **AA-MMMU-Pro 75.0%** [AA] — the two agree exactly
- **MMVU: 73.3%**
- **ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** At the methodology's mid band's lower edge, and the weakest dimension. The contradiction is the finding: **τ²-bench 93.9% [AA] is among the strongest protocol figures in this research series, while there is no composite agentic figure at all and Terminal-Bench 2.0 is 41.6% (~46 points under the reference)**. BrowseComp 61% and OSWorld-Verified 56.2% are respectable, AA ITBench 35.5% is weak, and **Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement** — so two of three frontier references are unmeasured.
- **Reasoning: 46/100.** Below the methodology's mid band, and the report's central caution. **AA-Omniscience index −44.0 with 81.5% hallucination on 20.7% accuracy is the third-worst reliability profile measured in this research series, and CritPt 0.9% is among the lowest.** Against that, the exam cluster is genuinely strong — **IFEval 95%, MMLU-Pro 86.1%, AA-IFBench 75.6%, GPQA Diamond 85.8%, AA-LCR 77.7%** — which, as with the rest of the Non-Reasoning-adjacent cohort, reflects saturating formats rather than reasoning. Capped further by **AA-HLE 23.9% (16.1 under the 40% reference), AA Intelligence Index 22.9%, and the missing ARC-AGI, MRCR, AIME and FrontierMath**.
- **Context window: 88/100.** **262K native, extensible to 1M via YaRN** — the methodology's 200K–500K band at its ceiling, scored at 88 because **AA-LCR is 77.7%**, so the native window is measurably usable. Held below the ≥1M tier because the 1M is an extension trick rather than native, no MRCR or GraphWalks run exists at either depth, and no max-output limit is published.
- **Multimodal: 84/100.** Text + image in with text out, scored in the methodology's 75–90 "video/PDF in" band's upper region on a genuinely strong visual suite for a 27B model: **V\* 93.7% (third-highest in this series), MathVision 86.0%, MMMU 82.3%, CharXiv 79.5%, MMMU-Pro 75% with vendor and AA agreeing exactly**. Held below 90+ because **output is text-only, there is no video or audio input, and ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA and Design Arena are unmeasured** — so the document and counting benchmarks that dominate the larger Qwen models are absent, and MMVU 73.3% sits below the rest of the suite.
- **Coding: 66/100.** Mid-band. **LiveCodeBench v6 80.7% is strong and SWE-bench Verified 72.4% is solid mid-frontier repair**, with SWE-Rebench 58.9% corroborating. Capped by SWE-bench Verified sitting 12.6 points under the 85%+ terminal reference, and by the **total absence of SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the model's positioning rather than a price: **open weights, dense 27B, small enough for a single consumer accelerator** — the most permissive self-hosting proposition in this batch, and the defining property of the Gemma/Qwen small-model families. Held at 96 rather than 100 because there is no free hosted tier recorded and no published rate to verify.
- **Overall Score: 67/100.** (50 + 46 + 88 + 84 + 66) / 5 = 66.8 → **67**. Recommendation: **the best small open-weight vision model in this batch, and a genuinely cheap self-hosting option.** V\* 93.7% — the third-highest measured in this research series — plus MathVision 86.0%, MMMU-Pro 75%, LiveCodeBench v6 80.7%, τ²-bench 93.9% and IFEval 95% at open weights and a 27B-dense footprint is a strong package for document, chart, grounding and competitive-programming work you host yourself. Two hard cautions: **its AA-Omniscience index is −44.0 with an 81.5% hallucination rate on 20.7% accuracy — the third-worst measured anywhere in this corpus** — so it must never be used as a factual or knowledge assistant; and **CritPt 0.9% with AA-HLE 23.9%** confirms it is not a deep-reasoning model despite the strong exam figures. Note it scores **below its own 122B-A10B sibling (52.92)** on BenchLM while carrying nearly the same profile, so the larger model is the better buy unless the 27B-dense self-hosting footprint is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against **BenchLM's 33-row catalog under its canonical dotted slug `qwen3-5-27b`** — which attributes the independent numbers to Artificial Analysis, Epoch AI, Gert Labs, SWE-Rebench and the Qwen3.5 blog. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-27b` 404s on BenchLM and the dotted slug had to be found via Qwen3.5-122B-A10B's sibling list.** **A provenance finding is also recorded: two multimodal rows — MathVision 86.0% and V\* 93.7% — are cross-cited from the *Qwen3.5-122B-A10B* model card rather than from a 27B-specific source, which is weaker provenance and is flagged at those figures.** The report's central finding is a **profile match rather than a level: this 27B model's figure set is a near-clone of its 122B-A10B sibling's** — the same strengths and the same collapses — recorded explicitly and carried into the recommendation, where the sibling comparison (49.01 vs 52.92) is made the deciding factor unless the 27B-dense self-hosting footprint is decisive. The **third-worst AA-Omniscience index in this research series (−44.0, on the third-lowest accuracy measured anywhere at 20.7%)** is attributed rather than presented bare, as is the **third-highest V\* figure (93.7%)**. Conflicts are listed side by side — MMMU-Pro 75% (vendor) / 75.0% [AA], agreeing exactly and noted as a confidence signal; GPQA 85.5% (vendor) / 85.8% [AA] — rather than averaged, with the independent run preferred on each. The strong-exam cluster against collapsed-depth and reliability is stated as consistent with the Non-Reasoning-adjacent cohort. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference. Missing benchmarks (Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, FrontierMath, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-27B model card (primary source)](https://huggingface.co/Qwen/Qwen3.5-27B)
  - [BenchLM — Qwen3.5-27B benchmark scores (33 rows, 49.01/100, #107/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-27b)
  - [Artificial Analysis — Qwen3.5-27B](https://artificialanalysis.ai/models/qwen3-5-27b)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — omniscience leaderboard (source of the −44.0)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [Hugging Face — Qwen3.5-122B-A10B model card (source of the cross-cited MathVision and V\* rows; weaker provenance)](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen — Qwen3.5 launch blog (source of the MMMU and MMVU rows)](https://qwen.ai/blog?id=qwen3.5)
  - See also: [`model/qwen-3.5-122b-a10b/`](qwen-3.5-122b-a10b.md) — the near-clone sibling refreshed in this same batch (52.92); [`model/qwen-3.5-397b/`](qwen-3.5-397b.md) (55.46) — the family flagship, also refreshed in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
