# Gemma 4 26B A4B — findings by Step 5 Preview

- Source: Google (`google/gemma-4-26B-A4B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B. Google's **open-weight MoE** in the Gemma 4 family — **26B total / 4B active, a 15.4% activation ratio** — scoring **42.25/100, #134 of 1,015** with **21 benchmarks**. It is the **highest-ranked Gemma 4 model**, ahead of 12B (35.53) and the dense 31B (29.24) — confirming the MoE architecture is the better Gemma 4 design.
- **Short description:** A small efficient MoE whose profile is genuinely split: **GPQA 82.3%, MMMU-Pro 73.8%, MMLU-Pro 82.6%, ExtractBench 70.27% and LiveCodeBench v6 77.1% are respectable figures for a 4B-active model**, against **CritPt 0.0% (tying the series-lowest), GDPval-AA 3.2% normalized / 713 Elo, AA Coding Index 39.3%, AA-HLE 19.3% and HLE w/o tools 8.7%.**
- **Provider / access:** **Open weights** on Hugging Face (`google/gemma-4-26B-A4B`, with a separate `-it` instruct card), Google's own API, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Gemma 4 is Google's 2026 open-weight family. **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-26B-A4B` (Hugging Face); `gemma-4-26b-a4b` (BenchLM canonical); `google/gemma-4-26B-A4B-it` (instruct card).
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, and the binding constraint on this model's ranking.
- **Modalities:** **text and image in; text out**, with a solid measured visual suite (MMMU-Pro 73.8%, ExtractBench 70.27%, ParseBench 58.50%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with only 4B active provide the cheapest self-hosting escape in this batch.**
- **Architecture:** **open-weight sparse MoE, 26B total / 4B active** — a 15.4% activation ratio, and the reason this model beats its dense 31B sibling.

### Raw benchmarks found

Google's Gemma 4 26B A4B model card and instruct card are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Kaggle's ScarfBench and LlamaIndex supplying independent rows. 21 benchmarks total.

Agentic / tool use — **near-floor**:

- **τ²-bench: 43.6%** [AA]; **GDPval-AA: 713 Elo / 3.2% normalized** [AA] — the batch's third-lowest GDPval normalized figure
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge — **split, and near-floor on depth**:

- **GPQA: 82.3%** (vendor) / **AA-GPQA Diamond 79.2%** [AA] — a 3.1-point gap, both well under the 90%+ reference
- **MMLU-Pro: 82.6%** (vendor) — a respectable exam figure
- **HLE: 17.2%** (vendor) / **HLE w/o tools 8.7%** (vendor) / **AA-HLE 19.3%** [AA] — fails the 40%+ reference by ~21–31 points on all three, and the w/o-tools drop is 8.5 points
- **CritPt: 0.0%** [AA] — **ties the lowest CritPt measured anywhere in this research series**
- **MRCRv2: 44.1%** (vendor) — weak retrieval at 256K depth; **AA-LCR: 65.7%**; **AA-IFBench: 72.4%**
- **ARC-AGI, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and two of five reasoning references are entirely unmeasured**

Coding — **mid, and thin**:

- **LiveCodeBench v6: 77.1%** (vendor) — the strongest coding figure and the batch's best here
- **AA Coding Index: 39.3%** [AA] — 30.7 points under the 70% reference; **AA-SciCode: 40.0%** — under 55%
- **ScarfBench: 24.4%** [Kaggle/IBM] — near-floor
- **SWE-bench (all variants), DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **MMLU-Pro is unrelated; MMMU-Pro: 73.8%** (vendor) / **AA-MMMU-Pro 69.2%** [AA] — a 4.6-point gap
- **ExtractBench: 70.27%** [LlamaIndex]; **ParseBench: 58.50%** [LlamaIndex]
- **CharXiv, MathVision, BabyVision, ZeroBench, OmniDocBench, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's low band, and the weakest dimension. τ²-bench 43.6% and **GDPval-AA 713 Elo / 3.2% normalized** — the batch's third-lowest — are the only two agentic figures, and both are near-floor. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and the AA Agentic Index have no measurement at all**, so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 54/100.** Below the methodology's mid band, and genuinely split. **GPQA 82.3%, MMLU-Pro 82.6% and LiveCodeBench v6 77.1% are respectable figures for a 4B-active model**, and AA-IFBench 72.4% is decent instruction following. Against that, **CritPt 0.0% ties the series-lowest, AA-HLE 19.3% fails the 40% reference by 20.7 points, HLE w/o tools is 8.7%, MRCRv2 44.1% is weak retrieval, and AA-LCR 65.7% is the second-weakest in this batch.** **ARC-AGI, the AA Intelligence Index, AA-Omniscience, AIME, MATH and FrontierMath have no figure at all**, so composite depth and reliability are entirely unknown. The strong-exam-against-collapsed-depth pattern is consistent with the Non-Reasoning-adjacent cohort, though BenchLM classifies this model **Reasoning**.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 65.7%** — weak but non-zero, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, **MRCRv2 44.1% shows retrieval at 256K depth is poor**, no native-1M or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 72/100.** Text + image in with text out, scored above the methodology's 60–70 band on a solid visual suite: **MMLU-Pro is unrelated; MMMU-Pro 73.8% (vendor) / 69.2% [AA], ExtractBench 70.27%, ParseBench 58.50%**. Held at 72 rather than higher because **ParseBench is middling**, the visual suite is three benchmarks, and CharXiv, MathVision, BabyVision, ZeroBench and OmniDocBench are unmeasured.
- **Coding: 58/100.** Below the methodology's mid band. **LiveCodeBench v6 77.1% is a respectable competitive-programming figure** and the only coding row above near-floor. Capped by **AA Coding Index 39.3% (30.7 under the 70% reference)**, AA-SciCode 40.0% (under 55%), **ScarfBench 24.4% (near-floor)**, and the total absence of SWE-bench, DeepSWE, Vibe Code Bench, Terminal-Bench and FrontierCode — so the 85%, 74%, 70% and 55% references cannot be checked and coding rests on one row.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 15.4% activation ratio (4B active of 26B total)** — the cheapest genuine self-hosting profile measured in this batch, requiring a fraction of the accelerator memory of every dense model here. Held at 96 rather than 100 because no Zen free tier is recorded and no published rate to verify.
- **Overall Score: 60.8/100.** (35 + 54 + 85 + 72 + 58 + 96) / 5 = 66.6 → **67**. Recommendation: **the cheapest self-hostable MoE in this batch, with a near-floor agentic profile.** GPQA 82.3%, MMMU-Pro 73.8%, ExtractBench 70.27%, LiveCodeBench v6 77.1% and MMMU-Pro's visual cluster at **open weights and 4B active** make it a genuinely cheap local option for exam-style, document and competitive-programming work. Two hard cautions: **CritPt 0.0% ties the series-lowest, GDPval-AA 3.2% normalized is the batch's third-lowest, and AA Coding Index 39.3% is 30.7 under the frontier reference** — so it must never be used as an autonomous agent or a deep-reasoning model. Note it **beats its own dense 31B sibling by 13 points (42.25 vs 29.24)** and **its 12B sibling by 6.7 points**, confirming the MoE design is the better Gemma 4 buy — and this is the model to pick within the family unless the dense-12B or dense-31B footprint is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Google's Gemma 4 26B A4B model card and instruct card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 21-row catalog (which attributes the independent numbers to Artificial Analysis, Kaggle's ScarfBench and LlamaIndex). The report's central finding is a **profile shape rather than a level: respectable exam and vision figures for a 4B-active model (GPQA 82.3%, MMMLU-Pro is unrelated — MMMU-Pro 73.8%, MMLU-Pro 82.6%, ExtractBench 70.27%) against a near-floor agentic and depth profile (CritPt 0.0% tying the series-lowest; GDPval-AA 3.2% normalized, the batch's third-lowest; AA Coding Index 39.3%)** — attributed explicitly as the Non-Reasoning-adjacent pattern, with BenchLM's **Reasoning** classification recorded as a structural fact rather than reconciled. The **tied-series-lowest CritPt (0.0%)** and the **batch-third-lowest GDPval normalized (3.2%)** are attributed rather than presented bare, as is the **8.5-point drop between HLE 17.2% and HLE w/o tools 8.7%**. The **family inversion** (beating the dense 31B sibling by 13 points and the 12B sibling by 6.7) is recorded as the model's defining evidence-structure fact and carried into the recommendation, where it is named the model to pick within Gemma 4. Conflicts are listed side by side — GPQA 82.3% (vendor) / 79.2% [AA]; MMMU-Pro 73.8% (vendor) / 69.2% [AA] — rather than averaged, with the independent run preferred on each. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference, with the 15.4% activation ratio as the decisive structural fact. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA Agentic Index, ARC-AGI, AA Intelligence Index, AA-Omniscience, AIME, MATH, FrontierMath, SWE-bench, SWE-bench Pro, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, CharXiv, MathVision, BabyVision, ZeroBench, OmniDocBench, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-26B-A4B model card (primary source)](https://huggingface.co/google/gemma-4-26B-A4B)
  - [Hugging Face — google/gemma-4-26B-A4B-it instruct card (source of the LiveCodeBench v6, GPQA and MRCRv2 rows)](https://huggingface.co/google/gemma-4-26B-A4B-it)
  - [BenchLM — Gemma 4 26B A4B benchmark scores (21 rows, 42.25/100, #134/1015)](https://benchlm.ai/models/gemma-4-26b-a4b)
  - [Artificial Analysis — Gemma 4 26B A4B](https://artificialanalysis.ai/models/gemma-4-26b-a4b)
  - [Artificial Analysis — critpt leaderboard (source of the series-lowest-tied 0.0%)](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Kaggle — ScarfBench leaderboard (IBM Research)](https://www.kaggle.com/benchmarks/ibm-research/scarfbench)
  - [ExtractBench leaderboard (LlamaIndex)](https://www.extractbench.ai/#leaderboard)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - See also: [`model/gemma-4-31b/`](gemma-4-31b.md) (29.24) — the dense 31B sibling this model beats by 13 points, refreshed in an earlier batch; [`model/gemma-4.12b-unified/`](gemma-4.12b-unified.md) (35.53) — the dense 12B sibling, refreshed in this same batch
- Future sources: add a next-to-this-one, e.g. `GPT_5.md`, using the same headings.
