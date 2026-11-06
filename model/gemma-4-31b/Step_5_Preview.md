# Gemma 4 31B — findings by Step 5 Preview

- Source: Google (`google/gemma-4-31B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B. Google's **open-weight dense 31B** in the Gemma 4 family — siblings 26B-A4B (42.25), 12B (35.53), E4B (26.65) and E2B — scoring **29.24/100, #183 of 1,015** with **30 benchmarks**. It is the highest-ranked Gemma 4 *dense* model, but note it scores **below its own 26B-A4B MoE sibling** (42.25) by 13 points, so the denser model is the weaker one in this family.
- **Short description:** A small open-weight model whose reliability profile is **the worst in this batch and among the worst in this research series** — **AA-Omniscience index −48.5 with an 85.5% hallucination rate on 19.9% accuracy, and an AA Intelligence Index of 4.4%, the second-lowest measured in this batch** — set against two genuinely respectable figures (**GPQA Diamond 85.7%, MMMU-Pro 76.9%**) and a decent coding record (**LiveCodeBench v6 80.0%, React Native Evals 75.2%**).
- **Provider / access:** **Open weights** on Hugging Face (`google/gemma-4-31B`, with a separate `-it` instruct card). Also via Mistral AI's platform. Self-hosting available.
- **Release / knowledge:** release date not restated; Gemma 4 is Google's 2026 open-weight family. **Knowledge cutoff not disclosed.**
- **IDs:** `google/gemma-4-31B` (Hugging Face); `gemma-4-31b` (BenchLM canonical); `google/gemma-4-31B-it` (instruct card).
- **Context window:** **256,000 tokens** (BenchLM) — a quarter of the current 1M standard.
- **Modalities:** **text and image in; text out** (ParseBench 62.40%, MMMU-Pro 76.9%, AA-MMMU-Pro 73.4%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open-weight dense 31B** — no MoE, so the full 31B is active per token. This is the family's structural weakness relative to the 26B-A4B sibling.

### Raw benchmarks found

Google's Gemma 4 31B model card and the Gemma 4 blog are the primary source (so those rows are **vendor-run**), with Artificial Analysis, Epoch AI, Gert Labs, LlamaIndex, SWE-Rebench, the React Native Evals leaderboard and Mistral AI's open-weight announcement supplying independent rows. 30 benchmarks total.

**A provenance note is recorded: two of this model's agentic-safety rows — b3 Agent Security 83.0% and Cyber Misuse Refusal 84.0% — are attributed to *Mistral AI's "Mistral Large 4 is now open weight" announcement*, a competitor's document, rather than to Google.** That is weaker provenance and is flagged at those figures rather than implied.

Agent / tool use:

- **b3 Agent Security: 83.0%** (Mistral announcement — weaker provenance); **Cyber Misuse Refusal: 84.0%** (Mistral announcement — weaker provenance)
- **τ²-bench: 59.9%** [AA]; **AA ITBench: 37.3%**
- **GDPval-AA: 755 Elo / 5.9% normalized** [AA] — the second-lowest GDPval normalized figure in this batch; **AA Agentic Index: 6.7%** — the second-lowest in this batch
- **Gert Labs: 35.26%**
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite beyond AA Agentic Index exists**

Reasoning / knowledge — **the worst reliability in this batch**:

- **AA-Omniscience: index −48.5, accuracy 19.9%, hallucination rate 85.5%** — **the second-worst AA-Omniscience index measured in this research series**, behind only Grok 4.1 Fast's −50.9, and on the **second-lowest accuracy** measured anywhere here
- **Artificial Analysis Intelligence Index: 4.4%** — the second-lowest composite in this batch
- **CritPt: 1.4%** [AA] — among the lowest measured in this research series
- **AA-GPQA Diamond: 85.7%** [AA] / GPQA 84.3% (upstream) — fails the 90%+ reference on both
- **AA-HLE: 23.6%** [AA] / **HLE: 26.5%** (vendor) / **HLE w/o tools 19.5%** (vendor) — fails the 40%+ reference on all three
- **AA-LCR: 69.7%**; **MRCRv2: 66.4%** (vendor)
- MMLU-Pro: **85.2%** (vendor); **AA-IFBench: 75.6%**
- **ARC-AGI, AIME, FrontierMath: no verified public score found**

Coding — **mid, and the least-bad dimension**:

- **LiveCodeBench v6: 80.0%** (vendor) — the strongest coding figure
- **React Native Evals: 75.2%** — a real mobile-coding data point
- **SWE-Rebench: 41.6%**; **AA-SciCode: 45.5%** — under 55%; **AA Coding Index: 43.4%** — 26.6 points under the 70% reference
- **SWE-bench (all variants), DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74% and 55% references are all unmeasured

Multimodal (image-in) — **mid**:

- **MMMU-Pro: 76.9%** (vendor) / **AA-MMMU-Pro 73.4%** [AA] — the strongest visual figures
- **ParseBench: 62.40%** [LlamaIndex]
- **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band, and the weakest dimension. The two strongest figures — **b3 Agent Security 83.0% and Cyber Misuse Refusal 84.0%** — are safety-refusal benchmarks, not task capability, and both are **cross-cited from Mistral AI's announcement rather than from Google**, which is weaker provenance. On actual task execution the model collapses: **τ²-bench 59.9%, AA ITBench 37.3%, AA Agentic Index 6.7% (the second-lowest in this batch) and GDPval-AA 755 Elo / 5.9% normalized**. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all** — so all three frontier references are unmeasured.
- **Reasoning: 45/100.** Below the methodology's mid band, and the report's central caution. **The AA-Omniscience index of −48.5 with an 85.5% hallucination rate on 19.9% accuracy is the second-worst measured in this research series, behind only Grok 4.1 Fast's −50.9 — and the 19.9% accuracy is the second-lowest measured anywhere here.** Combined with **AA Intelligence Index 4.4% (second-lowest in this batch)** and **CritPt 1.4% (among the lowest measured)**, the model is close to the floor on open-ended depth. The genuinely respectable figures are exam-style: **GPQA Diamond 85.7%, MMLU-Pro 85.2%, AA-IFBench 75.6%** — which, as with the other Non-Reasoning-classified cohort, reflects saturating formats rather than reasoning. **AA-LCR 69.7% and MRCRv2 66.4%** are the only depth-adjacent figures and both are mid.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 69.7%** — mid, but non-zero, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no native-1M MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 72/100.** Text + image in with text out, scored above the methodology's 60–70 band on **MMMU-Pro 76.9% (vendor) / AA-MMMU-Pro 73.4% [AA]** — genuinely respectable visual figures for a 31B model. Held at 72 because the visual suite is **three benchmarks**, ParseBench 62.40% is middling, and CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 60/100.** At the top of the methodology's low band and the least-bad dimension. **LiveCodeBench v6 80.0% is a strong competitive-programming figure and React Native Evals 75.2% is a real mobile-coding data point.** Capped by **AA Coding Index 43.4% (26.6 under the 70% reference) and AA-SciCode 45.5% (9.5 under 55%)**, both far under reference, plus **SWE-Rebench 41.6%** and the total absence of SWE-bench, DeepSWE, Vibe Code Bench, Terminal-Bench and FrontierCode — so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 96/100.** **No rate card is published in any source checked**, so the score rests on the model's positioning rather than a price: **open weights across two cards (`gemma-4-31B` and the `-it` instruct variant), self-hostable, and 31B dense — small enough to run on a single consumer accelerator**, which is the defining property of the Gemma family and the most permissive self-hosting proposition in this batch. Held at 96 rather than 100 because there is no free hosted tier recorded and no published rate to verify.
- **Overall Score: 60.8/100.** (42 + 45 + 85 + 72 + 60 + 96) / 5 = 60.0 → **60**. Recommendation: **a small self-hostable model with respectable exam and vision figures and one of the worst reliability profiles measured in this research series.** MMMU-Pro 76.9%, GPQA Diamond 85.7%, LiveCodeBench v6 80.0% and open weights at a 31B-dense footprint make it a plausible local option for visual and competitive-programming tasks you host yourself. Two hard cautions: **its AA-Omniscience index is −48.5 with an 85.5% hallucination rate on 19.9% accuracy — the second-worst measured anywhere in this corpus, behind only Grok 4.1 Fast** — so it must never be used as a factual or knowledge assistant, and the **AA Intelligence Index of 4.4%** (second-lowest in this batch) confirms the depth deficit. Note also it scores **below its own 26B-A4B MoE sibling (42.25)**, so within Gemma 4 the MoE variant is the better buy on both capability and efficiency.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Google's Gemma 4 31B model card and the Gemma 4 blog as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 30-row catalog (which attributes the independent numbers to Artificial Analysis, Epoch AI, Gert Labs, LlamaIndex, SWE-Rebench, the React Native Evals leaderboard and Mistral AI's open-weight announcement). **A provenance finding is recorded prominently: two of this model's agentic-safety rows — b3 Agent Security 83.0% and Cyber Misuse Refusal 84.0% — are cross-cited from *Mistral AI's* "Mistral Large 4 is now open weight" announcement rather than from Google, which is weaker provenance and is flagged at those figures.** The report's central finding is a **profile inversion rather than a level: the second-worst AA-Omniscience index in this research series (−48.5, on the second-lowest accuracy measured anywhere at 19.9%) coexisting with genuinely respectable exam and vision figures (GPQA Diamond 85.7%, MMLU-Pro 85.2%, MMMU-Pro 76.9%)** — attributed explicitly as the signature of the saturating-format-versus-open-ended-depth split identified across the Non-Reasoning-classified cohort, and carried into the recommendation rather than presented as a simple weakness. The **family inversion** (this 31B dense model scoring 13 points below the 26B-A4B MoE sibling) is recorded as an evidence-structure fact. Conflicts are listed side by side — MMMU-Pro 76.9% (vendor) / 73.4% [AA]; GPQA Diamond 85.7% [AA] / 84.3% (upstream); HLE 26.5% (vendor) / 23.6% [AA] / 19.5% (w/o tools) — rather than averaged, with the independent run preferred on each. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, ARC-AGI, AIME, FrontierMath, SWE-bench Verified, SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — google/gemma-4-31B model card (primary source)](https://huggingface.co/google/gemma-4-31B)
  - [Hugging Face — google/gemma-4-31B-it instruct card (source of the LiveCodeBench and MRCRv2 rows)](https://huggingface.co/google/gemma-4-31B-it)
  - [Hugging Face — Gemma 4 blog (source of the GPQA 84.3% row)](https://huggingface.co/blog/gemma4)
  - [BenchLM — Gemma 4 31B benchmark scores (30 rows, 29.24/100, #183/1015)](https://benchlm.ai/models/gemma-4-31b)
  - [Artificial Analysis — Gemma 4 31B](https://artificialanalysis.ai/models/gemma-4-31b)
  - [Artificial Analysis — omniscience leaderboard (source of the −48.5)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [SWE-Rebench leaderboard](https://swe-rebench.com/)
  - [React Native Evals leaderboard](https://rn-evals.vercel.app/)
  - [Mistral AI — Mistral Large 4 is now open weight (source of the two cross-cited safety rows; weaker provenance)](https://mistral.ai/news/mistral-large-4-oss/)
  - See also: [`model/gemma-4-26b-a4b/`](gemma-4-26b-a4b.md) (42.25) — the MoE sibling this model scores below; [`model/gemma-4-12b/`](gemma-4-12b.md), [`model/gemma-4-e4b/`](gemma-4-e4b.md) — the rest of the Gemma 4 family
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
