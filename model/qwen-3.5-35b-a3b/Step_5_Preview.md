# Qwen3.5-35B-A3B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-35B-A3B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B. Alibaba's **open-weight 35B-total / 3B-active MoE** — an **8.6% activation ratio**, one of the most efficient structures in this research series. BenchLM's canonical slug is `qwen3-5-35b-a3b` (**not** `qwen-3.5-35b-a3b`, which 404s — the same dotted-slug trap). It scores **45.58/100, #121 of 1,015** with **33 benchmarks**, sitting below its 27B sibling (49.01) and above Qwen3.5 Flash (42.58).
- **Short description:** A small hyper-efficient MoE whose profile is a **scaled-down clone of the 27B and 122B-A10B siblings'**: the same strengths (**τ²-bench 89.2% [AA], V\* 92.7%, ExtractBench 88.00%, IFEval 91.9%**) and the same collapses (**AA-Omniscience index −48.1 with an 85.4% hallucination rate on 20.1% accuracy, CritPt 0.9%, AA Intelligence Index 19.3%**). Its distinguishing property is the **3B active parameter count** — the cheapest genuine self-hosting profile in this batch.
- **Provider / access:** **Open weights** on Hugging Face (`Qwen/Qwen3.5-35B-A3B`), Alibaba Cloud Model Studio / QwenCloud, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (Hugging Face); `qwen3-5-35b-a3b` (BenchLM canonical, AA); `qwen/qwen3.5-35b-a3b` (Openrouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M with YaRN** — BenchLM records 262K.
- **Modalities:** **text and image in; text out**, with a solid measured visual suite (V\* 92.7%, ExtractBench 88.00%, MMMU-Pro 75.1%, MathVision 83.9%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a 3B active count provide the cheapest self-hosting escape in this batch.**
- **Architecture:** **open-weight sparse MoE, 35B total / 3B active** — an **8.6% activation ratio**.

### Raw benchmarks found

Qwen's own model card is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Epoch AI, Gert Labs, LlamaIndex, SWE-Rebench and the Qwen3.5 blog supplying independent rows. 33 benchmarks total.

**A provenance note is recorded: two multimodal rows — MathVision 83.9% and V\* 92.7% — are cross-cited from the *Qwen3.5-122B-A10B model card* rather than from a 35B-A3B-specific source, which is weaker provenance and is flagged at those figures** — the same cross-citation pattern recorded in the Qwen3.5-27B report.

Agent / tool use:

- **τ²-bench: 89.2%** [AA] — the strongest agentic figure here
- **BrowseComp: 61%** (vendor); **OSWorld-Verified: 54.5%** (vendor); Gert Labs: **28.96%**
- **Terminal-Bench 2.0: 40.5%** (vendor) — ~47 points under the 88%+ reference, and on the *older* harness
- **Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **split, and the split is severe**:

- **AA-Omniscience: index −48.1, accuracy 20.1%, hallucination rate 85.4%** — **the fourth-worst AA-Omniscience index measured in this research series**, behind only Grok 4.1 Fast's −50.9, Gemma 4 31B's −48.5 and Qwen3.5-27B's −44.0, on the **fourth-lowest accuracy** measured anywhere here
- **CritPt: 0.9%** [AA] — among the lowest measured in this research series
- **AA-GPQA Diamond: 84.5%** [AA] / GPQA 84.2% (vendor) — fails the 90%+ reference on both
- **AA-HLE: 21.0%** — fails the 40%+ reference by 19 points
- AA Intelligence Index: **19.3%**; **AA-LCR: 72.0%**; LongBench v2: 59.0%
- MMLU-Pro: **85.3%**; SuperGPQA: 63.4%; MMLU-ProX: 81.0%; AA Global-MMLU-Lite: 86.4%
- **IFEval: 91.9%**; **AA-IFBench: 72.5%**
- **ARC-AGI, MRCR, AIME, FrontierMath: no verified public score found** — so three of five reasoning references are unmeasurable and all mathematics is unmeasured

Coding — **mid-low**:

- **LiveCodeBench v6: 74.6%** (vendor) — the strongest coding figure
- **SWE-bench Verified: 69.2%** (vendor) — 15.8 points under the 85%+ terminal reference
- **SWE-Rebench: 53.7%**
- **SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **V\*: 92.7%** (cross-cited from the 122B-A10B card — weaker provenance) — the fourth-highest V\* figure in this research series
- **ExtractBench: 88.00%** [LlamaIndex] — the strongest document-extraction figure in this batch
- **MathVision: 83.9%** (also cross-cited); **MMMU: 81.4%**; **CharXiv: 77.5%**
- **MMMU-Pro: 75.1%** (vendor) / **AA-MMMU-Pro 72.7%** [AA]; MMVU: 72.3%
- **BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band, and the weakest dimension. The contradiction is the finding: **τ²-bench 89.2% [AA] is a strong protocol figure, while there is no composite agentic figure at all and Terminal-Bench 2.0 is 40.5% (~47 points under the reference).** BrowseComp 61% and OSWorld-Verified 54.5% are respectable, Gert Labs 28.96% is near-floor, and **Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement** — so all three frontier references are unmeasured. This is the same protocol-fluency-without-execution pattern now confirmed across five models in this research series.
- **Reasoning: 44/100.** Below the methodology's mid band, and the report's central caution. **AA-Omniscience index −48.1 with 85.4% hallucination on 20.1% accuracy is the fourth-worst reliability profile measured in this research series, and CritPt 0.9% is among the lowest.** Against that, the exam cluster is genuinely strong — **IFEval 91.9%, MMLU-Pro 85.3%, AA-IFBench 72.5%, GPQA Diamond 84.5%, AA-LCR 72.0%** — which, as with the rest of the Non-Reasoning-adjacent cohort, reflects saturating formats rather than reasoning. Capped further by **AA-HLE 21.0% (19 under the 40% reference), AA Intelligence Index 19.3%, and the missing ARC-AGI, MRCR, AIME and FrontierMath**.
- **Context window: 88/100.** **262K native, extensible to 1M via YaRN** — the methodology's 200K–500K band at its ceiling, scored at 88 because **AA-LCR is 72.0%**, so the native window is measurably usable. Held below the ≥1M tier because the 1M is an extension trick rather than native, no MRCR or GraphWalks run exists at either depth, and no max-output limit is published.
- **Multimodal: 84/100.** Text + image in with text out, scored in the methodology's 75–90 tier's upper region on a genuinely strong visual suite: **V\* 92.7% (fourth-highest in this series), ExtractBench 88.00% (batch-strongest), MathVision 83.9%, MMMU 81.4%, CharXiv 77.5%, MMMU-Pro 75.1% with AA agreeing at 72.7%**. Held below 90+ because **output is text-only, there is no video or audio input, and BabyVision, ZeroBench, OmniDocBench, RealWorldQA and Design Arena are unmeasured** — so the counting and document benchmarks are partially absent, and MMVU 72.3% sits below the rest of the suite.
- **Coding: 62/100.** Mid-band. **LiveCodeBench v6 74.6% is strong and SWE-bench Verified 69.2% is solid mid-frontier repair**, with SWE-Rebench 53.7% corroborating. Capped by SWE-bench Verified sitting 15.8 points under the 85%+ terminal reference, and by the **total absence of SWE-bench Pro, DeepSWE, AA-SciCode, the AA Coding Index, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 97/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 3B active parameter count of 35B total (an 8.6% activation ratio)** — the cheapest genuine self-hosting profile measured in this batch, requiring a fraction of the accelerator memory of every dense model here. Held at 97 rather than 100 because there is no free hosted tier recorded and no published rate to verify.
- **Overall Score: 65.2/100.** (48 + 44 + 88 + 84 + 62 + 97) / 5 = 70.5 → **71**. Recommendation: **the cheapest self-hostable vision model in this batch, with a severe reliability deficit.** V\* 92.7% — the fourth-highest measured in this research series — plus ExtractBench 88.00%, MathVision 83.9%, τ²-bench 89.2% and a **3B active parameter count** make this the most efficient self-hosting option here for document, chart, grounding and visual work. Two hard cautions: **its AA-Omniscience index is −48.1 with an 85.4% hallucination rate on 20.1% accuracy — the fourth-worst measured anywhere in this corpus** — so it must never be used as a factual or knowledge assistant; and **CritPt 0.9% with AA-HLE 21.0%** confirms it is not a deep-reasoning model. Note it scores **below its own 27B dense sibling (49.01)** despite the 3B active count, so the efficiency gain comes at a real capability cost — prefer the 27B if you can host it.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 33-row catalog under its canonical dotted slug `qwen3-5-35b-a3b`** — which attributes the independent numbers to Artificial Analysis, Epoch AI, Gert Labs, LlamaIndex and SWE-Rebench. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-35b-a3b` 404s on BenchLM and the dotted slug had to be found via Qwen3.5-397B's sibling list.** **A provenance finding is also recorded: two multimodal rows — MathVision 83.9% and V\* 92.7% — are cross-cited from the *Qwen3.5-122B-A10B* model card rather than from a 35B-A3B-specific source, which is weaker provenance and is flagged at those figures** — the same cross-citation pattern recorded in the Qwen3.5-27B report. The report's central finding is a **family profile match rather than a level: this 3B-active model's figure set is a scaled-down clone of its 27B and 122B-A10B siblings'** — the same strengths and the same collapses — recorded explicitly and carried into the recommendation, where the sibling comparison (45.58 vs 49.01 vs 52.92) is made the deciding factor. The **fourth-worst AA-Omniscience index in this research series (−48.1, on the fourth-lowest accuracy measured anywhere at 20.1%)** is attributed rather than presented bare, as is the **batch-strongest ExtractBench (88.00%)** and the **fourth-highest V\* (92.7%)**. Conflicts are listed side by side — MMMU-Pro 75.1% (vendor) / 72.7% [AA]; GPQA 84.2% (vendor) / 84.5% [AA] — rather than averaged, with the independent run preferred on each. The strong-exam cluster against collapsed-depth and reliability is stated as consistent with the Non-Reasoning-adjacent cohort. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference. Missing benchmarks (Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, ARC-AGI, MRCR, AIME, FrontierMath, SWE-bench Pro, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-35B-A3B model card (primary source)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [BenchLM — Qwen3.5-35B-A3B benchmark scores (33 rows, 45.58/100, #121/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-35b-a3b)
  - [Artificial Analysis — Qwen3.5-35B-A3B](https://artificialanalysis.ai/models/qwen3-5-35b-a3b)
  - [Artificial Analysis — omniscience leaderboard (source of the −48.1)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/?insight=sep_2025)
  - [Hugging Face — Qwen3.5-122B-A10B model card (source of the cross-cited MathVision and V\* rows; weaker provenance)](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen — Qwen3.5 launch blog (source of the MMMU and MMVU rows)](https://qwen.ai/blog?id=qwen3.5)
  - See also: [`model/qwen-3.5-27b/`](qwen-3.5-27b.md) (49.01) — the dense sibling this report scores below; [`model/qwen-3.5-122b-a10b/`](qwen-3.5-122b-a10b.md) (52.92) and [`model/qwen-3.5-397b/`](qwen-3.5-397b.md) (55.46) — the rest of the family, all refreshed earlier this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
