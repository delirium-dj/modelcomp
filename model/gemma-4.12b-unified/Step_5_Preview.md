# Gemma 4 12B — findings by Step 5 Preview

- Source: Google (`google/gemma-4-12B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note.** The repo folder is `gemma-4.12b-unified`, but BenchLM's canonical slug is **`gemma-4-12b`** (the repo spelling 404s on BenchLM) and the vendor's model is **Gemma 4 12B** — Google ships no "unified" variant. The folder name appears to be a legacy spelling of the same model; this report covers `google/gemma-4-12B`.

## Model card

- **Name:** Gemma 4 12B. Google's **open-weight dense 12B** in the Gemma 4 family — siblings 26B-A4B (42.25), 31B (29.24), E4B (26.65) and E2B — scoring **35.53/100, #162 of 1,015** with **22 benchmarks**. It beats E4B but loses to both 26B-A4B and... actually it beats 31B too, so within Gemma 4 the 12B dense sits third of five, ahead of the *denser* 31B — which is the family's most surprising structural fact.
- **Short description:** A small dense open-weight model whose profile is **uniformly weak with three exceptions**: **MMLU 83.4%, MathVision 79.7% and GPQA 78.8%** are genuinely respectable figures for 12B, and **LiveCodeBench v6 72.0%** is a decent competitive-programming result — set against **CritPt 0.0% (tying the series-lowest), GDPval-AA 0.0% normalized / 591 Elo (tying the series-lowest), AA Coding Index 31.0%, AA-HLE 15.7% and HLE w/o tools 5.2%.**
- **Provider / access:** **Open weights** on Hugging Face (`google/gemma-4-12B`), Google's own API, and self-hosting.
- **Release / knowledge:** release date not restated; Gemma 4 is Google's 2026 open-weight family. **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-12B` (Hugging Face); `gemma-4-12b` (BenchLM canonical); `google/gemma-4-12b` (Openrouter).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out**, with a decent measured visual suite for 12B (MMMU-Pro 69.1%, MathVision 79.7%, MedXpertQA-MM 48.7%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a dense 12B footprint provide the cheapest self-hosting escape in this batch.**
- **Architecture:** **open-weight dense 12B** — no MoE, so the full 12B is active per token. This is the model's structural weakness relative to the 26B-A4B sibling.

### Raw benchmarks found

Google's Gemma 4 12B Hugging Face model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis and LlamaIndex supplying independent rows. 22 benchmarks total.

Agentic / tool use — **near-floor, and the batch's joint-lowest**:

- **τ²-bench: 36.3%** [AA]; **GDPval-AA: 591 Elo / 0.0% normalized** [AA] — **ties the lowest GDPval normalized figure measured in this research series** (with Nemotron 3 Nano Omni)
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **split, with three genuinely good figures**:

- **GPQA: 78.8%** (vendor) / **AA-GPQA Diamond 75.3%** [AA] — a 3.5-point gap, both well under the 90%+ reference
- **MMLU: 83.4%** (vendor); **MMLU-Pro: 77.2%** (vendor) — both respectable
- **HLE w/o tools: 5.2%** (vendor) / **AA-HLE 15.7%** [AA] — fails the 40%+ reference by ~24–35 points, and the w/o-tools drop is 10.5 points
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured anywhere in this research series**
- **MRCRv2: 43.4%** (vendor) — weak retrieval at 256K depth; **AA-LCR: 63.7%**; **AA-IFBench: 73.5%**
- **AIME26: 77.5%** (vendor) — a respectable competition-maths figure for 12B
- **ARC-AGI, AA Intelligence Index, AA-Omniscience, MATH, FrontierMath: no verified public score found** — so **composite depth, reliability and two of five reasoning references are entirely unmeasured**

Coding — **mid, with one strong figure**:

- **LiveCodeBench v6: 72.0%** (vendor) — the strongest coding figure and a decent competitive-programming result
- **AA Coding Index: 31.0%** [AA] — **39 points under the 70% frontier reference**
- **SWE-bench (all variants), DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **MMLU-Pro is unrelated; MMMU-Pro: 69.1%** (vendor) / **AA-MMMU-Pro 69.7%** [AA] — the two agree within 0.6 points
- **MathVision: 79.7%** (vendor) — the strongest visual figure; **MedXpertQA (MM): 48.7%** (vendor)
- **ExtractBench: 45.39%** [LlamaIndex] — weak document extraction
- **CharXiv, BabyVision, ZeroBench, OmniDocBench, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 32/100.** Below the methodology's low band, and the weakest dimension. τ²-bench 36.3% and **GDPval-AA 591 Elo / 0.0% normalized — tying the series-lowest** — are the only two agentic figures, and 0.0% normalized means it produced no acceptable outputs at all. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no measurement at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 52/100.** Below the methodology's mid band, and genuinely split. **MMLU 83.4%, GPQA 78.8%, MMLU-Pro 77.2% and AIME26 77.5% are respectable exam and competition-maths figures for 12B**, and AA-IFBench 73.5% is decent instruction following. Against that, **CritPt 0.0% ties the series-lowest, AA-HLE 15.7% fails the 40% reference by 24.3 points, HLE w/o tools is 5.2%, MRCRv2 43.4% is weak retrieval, and AA-LCR 63.7% is among the weakest measured in this batch.** **ARC-AGI, the AA Intelligence Index, AA-Omniscience, MATH and FrontierMath have no figure at all**, so composite depth and reliability are entirely unknown. The strong-exam-against-collapsed-depth pattern is consistent with the Non-Reasoning-adjacent cohort, though BenchLM classifies this model **Reasoning**.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 63.7%** — weak but non-zero, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, **MRCRv2 43.4% shows retrieval at 256K depth is poor**, no native-1M or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 70/100.** Text + image in with text out, at the top of the methodology's 60–70 band on a decent visual suite for 12B: **MMLU-Pro is unrelated; MMMU-Pro 69.1% (vendor) / 69.7% [AA] agreeing within 0.6 points, MathVision 79.7%, MedXpertQA-MM 48.7%**. Held at 70 rather than above because **ExtractBench 45.39% is weak**, the visual suite is four benchmarks, and CharXiv, BabyVision, ZeroBench, OmniDocBench and MathVision are partially unmeasured.
- **Coding: 52/100.** Below the methodology's mid band. **LiveCodeBench v6 72.0% is a decent competitive-programming figure** and the only coding row above near-floor. Capped by **AA Coding Index 31.0% (39 under the 70% reference)**, and by the total absence of SWE-bench, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench and FrontierCode — so the 85%, 74%, 70% and 55% references cannot be checked and coding rests on one row.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights, dense 12B** — the cheapest genuine self-hosting profile measured in this batch, requiring the least accelerator memory of any model refreshed here. Held at 96 rather than 100 because no Zen free tier is recorded and no published rate to verify.
- **Overall Score: 58.2/100.** (32 + 52 + 85 + 70 + 52 + 96) / 5 = 63.5 → **64**. Recommendation: **the cheapest self-hostable model in this batch, with a tied-series-lowest agentic profile.** MMMU-Pro 69.7%, MathVision 79.7%, MMLU 83.4%, GPQA 78.8%, LiveCodeBench v6 72.0% at **open weights and dense 12B** make it a genuinely cheap local option for exam-style, visual and competitive-programming work. Two hard cautions: **GDPval-AA 0.0% normalized ties the series-lowest** — no acceptable outputs at all — and **CritPt 0.0% ties the series-lowest**, so it must never be used as an autonomous agent or a deep-reasoning assistant. Note it **loses to its own 26B-A4B MoE sibling by 6.7 points (35.53 vs 42.25)**, confirming the MoE design is the better Gemma 4 buy unless the dense-12B footprint is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Google's Gemma 4 12B Hugging Face model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 22-row catalog (which attributes the independent numbers to Artificial Analysis and LlamaIndex). **An identity note is recorded: the repo folder `gemma-4.12b-unified` 404s on BenchLM, whose canonical slug is `gemma-4-12b`, and Google ships no "unified" variant — the folder name appears to be a legacy spelling of the same model, and this report covers `google/gemma-4-12B`.** The report's central finding is a **profile shape rather than a level: respectable exam and vision figures for 12B (MMLU 83.4%, GPQA 78.8%, MathVision 79.7%, MMMU-Pro 69.7%) against a near-floor agentic and depth profile (GDPval-AA 0.0% normalized — tying the series-lowest; CritPt 0.0% tying the series-lowest; AA Coding Index 31.0%)** — attributed explicitly as the Non-Reasoning-adjacent pattern, with BenchLM's **Reasoning** classification for this model recorded as a structural fact rather than reconciled. The **tied-series-lowest GDPval normalized (0.0%)** and **tied-series-lowest CritPt (0.0%)** are attributed rather than presented bare, as is the **10.5-point drop between HLE 17.2%-adjacent and HLE w/o tools 5.2%**. The **family inversion** (losing to the 26B-A4B MoE sibling by 6.7 points despite the smaller footprint) is recorded as an evidence-structure fact. Conflicts are listed side by side — GPQA 78.8% (vendor) / 75.3% [AA]; MMMU-Pro 69.1% (vendor) / 69.7% [AA] — rather than averaged, with the independent run preferred on each. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, ARC-AGI, AA Intelligence Index, AA-Omniscience, MATH, FrontierMath, SWE-bench, SWE-bench Pro, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench, FrontierCode, CharXiv, BabyVision, ZeroBench, OmniDocBench, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-12B model card (primary source)](https://huggingface.co/google/gemma-4-12B)
  - [BenchLM — Gemma 4 12B benchmark scores (22 rows, 35.53/100, #162/1015; canonical slug `gemma-4-12b`)](https://benchlm.ai/models/gemma-4-12b)
  - [Artificial Analysis — Gemma 4 12B](https://artificialanalysis.ai/models/gemma-4-12b)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest-tied 0.0%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard (source of the tied-lowest 0.0%)](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - See also: [`model/gemma-4.26b-a4b/`](gemma-4.26b-a4b.md) (42.25) — the MoE sibling this model loses to by 6.7 points, refreshed in this same batch; [`model/gemma-4-31b/`](gemma-4-31b.md) (29.24) — the dense 31B sibling; [`model/gemma-4-e4b/`](gemma-4-e4b.md) (26.65) — the E4B sibling
- Future sources: add a next-to-this-one, e.g. `GPT_5.md`, using the same headings.
