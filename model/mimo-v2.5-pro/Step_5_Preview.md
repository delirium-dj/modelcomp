# MiMo-V2.5-Pro — findings by Step 5 Preview

- Source: Xiaomi (`xiaomi/mimo-v2.5-pro`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.5-Pro. Xiaomi's **1.02T-total / 42B-active text-only open-weight MoE** (April 2026, MIT), sibling to MiMo-V2.5 (no computed BenchLM score) and predecessor to MiMo-V2-Pro (55.30). BenchLM scores it **55.55/100, #72 of 1,015** with **33 benchmarks**, and classifies it **Reasoning**.
- **Short description:** The model whose reliability profile is the best in this batch and among the best in this research series: **AA-Omniscience index 3.3 (positive) with a 24.7% hallucination rate — the lowest measured anywhere in this corpus** — paired with genuinely strong protocol and exam figures (**τ²-bench 94.2%, HLE 48% vendor, GPQA Diamond 82.6–86.6%, AA-LCR 79.7%, AA-IFBench 79.9%**). Its defining weakness is execution: **APEX-Agents-AA 2.4% (the lowest in this batch), AA Agentic Index 22.7%, GDPval-AA 31.0% normalized, MazeBench 0%.**
- **Provider / access:** **MIT open weights** on Hugging Face (`XiaomiMiMo/MiMo-V2.5-Pro`), Xiaomi's FP8 API route, and OpenRouter. Self-hosting available. Repo meta records pricing at **$0.435/$0.87 per 1M with $0.0036 cached reads**.
- **Release / knowledge:** release date not restated; the V2.5 generation is Xiaomi's April-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `XiaomiMiMo/MiMo-V2.5-Pro` (Hugging Face); `mimo-v2-5-pro` (BenchLM canonical); `xiaomi_mimo-v2.5-pro` (Vals).
- **Context window:** **1M** (repo meta records "1M (Base 256K)") — a full frontier window at open weights.
- **Modalities:** **text in/out only** — deliberately, per repo meta: "Text-only, and the omni-modal MiMo-V2.5/V2.6 line covers images and audio."
- **Pricing (as of 2026-11-06):** **$0.435/$0.87 per 1M with $0.0036 cached reads** (repo meta, Xiaomi FP8 route), plus **free self-hosting (MIT)**. Methodology anchors put $0.435/$0.87 near the 97+ band.
- **Architecture:** **MIT open-weight MoE, 1.02T total / 42B active** — a 4.1% activation ratio, one of the most favourable in this research series.

### Raw benchmarks found

Xiaomi's own MiMo-V2.5-Pro model page is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, Gert Labs, Claw-Eval, MazeBench and Openrouter supplying independent rows. 33 benchmarks total.

Agent / tool use — **the model's defining weakness**:

- **τ²-bench: 94.2%** [AA] — the strongest agentic figure here and among the best in this research series
- **τ³-bench: 72.9%** (vendor); **Gert Labs: 62.70%**; Terminal-Bench 2.0: 68.4% (vendor)
- **Claw-Eval: 63.8%** — one of only three measured ClawEval figures in this research series
- **APEX-Agents-AA: 2.4%** [AA] — **the lowest measured in this batch**, and a stark contrast with the model's own τ²-bench
- **GDPval-AA: 1,265 Elo** (vendor) / **31.0% normalized** [AA]; **AA Agentic Index: 22.7%**; terminalBenchHard: 43.2%; AA ITBench: 38.2%
- **Terminal-Bench 2.1 (Vals): 57.3%** — 30.7 points under the 88%+ reference
- **MazeBench: 0%**
- **MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, JobBench, AA AutomationBench: no verified public score found**

Reasoning / knowledge — **the best reliability in this batch**:

- **HLE: 48%** (vendor) / **HLE w/o tools 34%** (vendor) / **AA-HLE 35.7%** [AA] — a **12.3-point vendor-vs-AA gap**, the largest in this batch
- **AA-GPQA Diamond: 86.6%** [AA] / **GPQA Diamond (Vals): 82.6%** — fails the 90%+ reference on both
- **AA-Omniscience: index 3.3, accuracy 22.4%, hallucination rate 24.7%** — a **positive index** on the **lowest hallucination rate measured anywhere in this research series**
- AA Intelligence Index: **26.0%**; **AA-LCR: 79.7%**; CritPt: 4.0%; **AA-IFBench: 79.9%**
- MMLU-Pro (Vals): **84.6%**
- **ARC-AGI, MRCR, AIME, MATH, FrontierMath: no verified public score found** — so three of five reasoning references are unmeasurable and all mathematics is unmeasured

Coding — **mid**:

- **LiveCodeBench (Vals): 81.4%**; **SWE-bench (Vals): 74.0%** — 11 points under the 85%+ terminal reference
- **AA Coding Index: 60.2%** — 9.8 points under the 70% reference; **AA-SciCode: 50.6%** — under 55%; SWE-bench Pro: 57.2% (vendor)
- **SWE-bench Verified, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured, by design**:

- Design Arena (website): **1,266 Elo** — the only row, and a good one
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found** — the model is text-only by design, so this is a deliberate gap rather than an oversight

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band, and the model's most contradictory dimension. The protocol half is strong — **τ²-bench 94.2% is among the best in this research series, τ³-bench 72.9%, Gert Labs 62.7%, Terminal-Bench 2.0 68.4% and Claw-Eval 63.8%** — while the execution half collapses: **APEX-Agents-AA 2.4% (the batch's lowest), AA Agentic Index 22.7%, GDPval-AA 31.0% normalized, terminalBenchHard 43.2%, Terminal-Bench 2.1 57.3% and MazeBench 0%.** **MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, JobBench and AA AutomationBench have no figure at all**, so two of three frontier references are unmeasured.
- **Reasoning: 76/100.** Above the methodology's mid band, and the strongest dimension. **AA-GPQA Diamond 86.6% is 3.4 points under the 90%+ reference, AA-HLE 35.7% is 4.3 under, AA-LCR 79.7% and AA-IFBench 79.9% are both solid, and MMLU-Pro 84.6% corroborates.** The standout is reliability: **AA-Omniscience index 3.3 (positive) with a 24.7% hallucination rate — the lowest measured anywhere in this research series** — which makes it unusually trustworthy for retrieval-heavy factual work despite its low 22.4% accuracy. Capped by **CritPt 4.0%, AA Intelligence Index 26.0%, and the missing ARC-AGI, MRCR, AIME, MATH and FrontierMath.**
- **Context window: 97/100.** **1M tokens** (repo meta: "1M (Base 256K)") at **MIT open weights** — a full frontier window with the most permissive access in this batch. **AA-LCR 79.7%** is strong evidence the window is usable at depth. Held just under 100 because no MRCR or GraphWalks retrieval figure exists and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor: the model is text-only by design** — repo meta records "Text-only, and the omni-modal MiMo-V2.5/V2.6 line covers images and audio." There is no image, audio or video input, so the dimension does not exist. The single Design Arena row (1,266 Elo) is the only adjacent evidence and is recorded as such rather than used to claim a visual capability.
- **Coding: 70/100.** Mid-band. **LiveCodeBench 81.4% (Vals) is strong and SWE-bench 74.0% (Vals) is solid mid-frontier repair**, with SWE-bench Pro 57.2% corroborating. Capped by SWE-bench sitting 11 points under the 85%+ terminal reference, **AA Coding Index 60.2% (9.8 under the 70% reference)**, AA-SciCode 50.6% (under 55%), and the absence of SWE-bench Verified, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 97/100.** **$0.435/$0.87 per 1M with $0.0036 cached reads** (repo meta, Xiaomi FP8 route) — below the methodology's ~$0.60/$2.20 (≈92) anchor and near the 97+ band, with a **99% cache-read discount**. Scored at 97 on the rate card plus the decisive structural fact: **MIT open weights with a 4.1% activation ratio (42B active of 1.02T total)**, so inference cost scales with the 42B active count — one of the most favourable ratios in this research series. Held at 97 rather than 100 because no free hosted tier is recorded.
- **Overall Score: 71/100.** (62 + 76 + 97 + 50 + 70) / 5 = 71 → **71**. Recommendation: **the most factually reliable open-weight model in this research series, with a broken execution layer.** AA-Omniscience index 3.3 with a 24.7% hallucination rate — **the lowest measured anywhere in this corpus** — plus τ²-bench 94.2%, AA-LCR 79.7%, AA-IFBench 79.9%, SWE-bench 74.0% and a 1M window at **MIT weights and $0.435/$0.87** is a genuinely rare combination for retrieval-heavy factual and coding work. Two hard cautions: **APEX-Agents-AA 2.4% is the batch's lowest and AA Agentic Index 22.7%**, so it is a researcher rather than an autonomous agent — its protocol fluency does not translate into task completion; and **it is text-only by design**, so use the V2.5/V2.6 omni-modal siblings if vision or audio is required. Note the sibling **MiMo-V2.5-Free** (refreshed in an earlier batch) is a *different* model — the base, not the Pro.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Xiaomi's own MiMo-V2.5-Pro model page as the primary source (so those rows are vendor-run and labelled as such), cross-checked against BenchLM's 33-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, Gert Labs, Claw-Eval, MazeBench and Openrouter). The report's central finding is a **profile inversion rather than a level: the lowest hallucination rate measured anywhere in this research series (24.7%, on a positive Omniscience index of 3.3) coexisting with the batch's lowest APEX-Agents-AA (2.4%) and a 22.7% AA Agentic Index** — attributed explicitly as the same protocol-fluency-without-execution pattern confirmed across ten models in this series, and carried into the recommendation rather than averaged away. The **lowest hallucination rate in this research series (24.7%)** is attributed rather than presented bare, as is the **12.3-point vendor-vs-AA HLE gap (48% vs 35.7%)**, the batch's largest, resolved in favour of the independent run. Conflicts are listed side by side — GPQA Diamond 86.6% [AA] / 82.6% [Vals]; HLE 48% (vendor) / 35.7% [AA]; HLE w/o tools 34% (vendor) — rather than averaged, with the independent run preferred on each. The **text-only-by-design** modality set is scored at the methodology's placeholder floor and recorded as a deliberate gap rather than an oversight, with the omni-modal siblings named as the alternative. The **1M / Base-256K spec nuance** from repo meta is recorded rather than silently dropped. The unpublished BenchLM rate card is surfaced, with the repo's verified $0.435/$0.87/$0.0036 rates used for the cost score. Missing benchmarks (MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, JobBench, AA AutomationBench, Terminal-Bench 4.0, ARC-AGI, MRCR, AIME, MATH, FrontierMath, SWE-bench Verified, DeepSWE, Vibe Code Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Xiaomi — MiMo-V2.5-Pro model page (primary source)](https://mimo.xiaomi.com/mimo-v2-5-pro)
  - [BenchLM — MiMo-V2.5-Pro benchmark scores (33 rows, 55.55/100, #72/1015)](https://benchlm.ai/models/mimo-v2-5-pro)
  - [Artificial Analysis — MiMo-V2.5-Pro](https://artificialanalysis.ai/models/mimo-v2-5-pro)
  - [Vals AI — MiMo-V2.5-Pro leaderboard results](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro)
  - [Artificial Analysis — omniscience leaderboard (source of the series-lowest 24.7%)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — apex-agents-aa leaderboard (source of the batch-lowest 2.4%)](https://artificialanalysis.ai/evaluations/apex-agents-aa)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Openrouter — MiMo-V2.5-Pro benchmarks](https://openrouter.ai/xiaomi/mimo-v2.5-pro/benchmarks)
  - [Repo curated meta — `model/mimo-v2.5-pro/meta.json` (1.02T/42B, 1M (Base 256K), text-only, $0.435/$0.87/$0.0036, MIT)](/model/mimo-v2.5-pro/meta.json)
  - See also: [`model/mimo-v2.5-free/`](mimo-v2.5-free.md) — the **base** model on a free tier, a **different** model refreshed earlier in this session; [`model/mimo-v2.6-pro/`](mimo-v2-6-pro.md) (57.27) — the successor generation
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
