# DeepSeek V4 Flash 0731 — findings by Step 5 Preview

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4-Flash`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash 0731 — the **flash-reasoning (0731)** variant of the V4 Flash family. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug with 57 source-displayable benchmark rows but no overall score** — its own text reads *"has 57 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 75.0 is a **roster artefact, not a measured figure** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max and Ling 3.0 Flash VL reports.
- **Short description:** Despite being unranked, this is **the best-evidenced unranked model in this research series at 57 rows**, and the evidence is genuinely strong: **ARC-AGI-1 89.0% / ARC-AGI-2 61.4%, AA-GPQA Diamond 90.8% clearing the 90%+ reference, AA-HLE 38.6%, AA Intelligence Index 34.3%, AA-LCR 79.7%, CritPt 16.6%, MRCR 1M 78.7%, SWE-bench 88.8% (Vals), VulcanBench v3 88.4%, Terminal-Bench 2.1 82.7%, AA Coding Index 69.1%** — a 1M-context open-weight model with a broad, well-corroborated profile. Its one serious defect is **AA-Omniscience hallucination 91.7% with an index of −14.3**.
- **Provider / access:** **Open weights** on Hugging Face, DeepSeek's own API, and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** release date not restated; the 0731 tag is DeepSeek's 2026-07-31 revision of the V4 Flash line. **Knowledge cutoff not disclosed.**
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash` (Hugging Face); `deepseek-v4-flash-0731` (BenchLM canonical, Vals, ARC); `deepseek_deepseek-v4-flash-0731` (Vals); `deepseek/deepseek-v4-flash` (Openrouter).
- **Context window:** **1M tokens** (BenchLM) — with **MRCR 1M 78.7% and CorpusQA 1M 60.5% both measured at full depth**, the strongest long-context retrieval evidence in this research series.
- **Modalities:** **text in; text out as the primary mode** — the multimodal table carries exactly one Design Arena row (1,206 Elo) and no visual benchmark, so this is a **text-focused model whose visual capability is unproven**.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape**.
- **Architecture:** **open weight** MoE; parameter count undisclosed.

### Raw benchmarks found

DeepSeek's own DeepSeek-V4 technical report and the V4 Flash 0731 API update are the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC Prize, Epoch AI, VulcanBench, OpenHarmony, MazeBench and Openrouter supplying independent rows. **57 benchmarks total — the second-deepest evidence base in this research series**, behind only Kimi K2.5's 84.

Agent / tool use — **broad and well-corroborated**:

- **Terminal-Bench 2.1: 82.7%** (0731 update) — 5.3 points under the 88%+ reference
- **Terminal-Bench 2.1 (Vals): 67.0%** — a **15.7-point vendor-vs-Vals spread**, the second-largest in this batch
- **MCP Atlas: 69%** (tech report); **Toolathlon-Verified: 70.3%** (0731 update); Toolathlon: 47.8%; BrowseComp: 73.2%
- **GDPval-AA: 1,189 Elo** (tech report) / **46.7% normalized** [AA]
- **AA Agentic Index: 41.7%** — a solid composite; **AA Tau3 Banking: 39.4%**
- CyberGym: 76.7% (0731 update); Agents' Last Exam: 25.2%; AutomationBench: 25.1%; HLE w/ tools: 45.1%
- **Terminal-Bench 2.0: 56.9%** (tech report); **MazeBench: 0%**
- **OSWorld, τ³-bench, Claw-Eval, ALE, JobBench, AA AutomationBench, AA ITBench: no verified public score found**

Reasoning / knowledge — **the strongest dimension**:

- **ARC-AGI-1: 89.0%**; **ARC-AGI-2: 61.4%** [ARC Prize] — both strong
- **AA-GPQA Diamond: 90.8%** [AA] / **GPQA-D 88.1%** (tech report) / **89.9%** (Vals) — **the AA run clears the 90%+ frontier reference**
- **AA-HLE: 38.6%** [AA] / **HLE 34.8%** (tech report) — fails the 40%+ reference by 1.4 points on the independent run
- **AA Intelligence Index: 34.3%** — the strongest composite measured in this batch
- **CritPt: 16.6%**; **AA-LCR: 79.7%**; **MRCR 1M: 78.7%**; **CorpusQA 1M: 60.5%**
- **AA-Omniscience: index −14.3, accuracy 40.4%, hallucination rate 91.7%** — a negative index on a **91.7% hallucination rate, the second-worst in this batch**
- MMLU-Pro: **86.2%** (both runs agree); Chinese-SimpleQA: 78.9%
- **HMMT Feb 2026: 94.8%**; IMOAnswerBench: 88.4%; Apex Shortlist: 85.7%; Apex: 33.0%
- **AIME, FrontierMath: no verified public score found**

Coding — **strong and unusually corroborated**:

- **LiveCodeBench Pass@1-COT: 91.6%** (tech report) / **LiveCodeBench (Vals): 87.3%**
- **SWE-bench Verified: 79%** (tech report) / **SWE-bench (Vals): 88.8%** — a **9.8-point gap in the favourable direction**, with the independent run scoring above the vendor
- **AA Coding Index: 69.1%** — 0.9 points under the 70% frontier reference, the narrowest miss in this batch
- **VulcanBench v3: 88.4%**; **DSBench-FullStack: 68.7%**; **DSBench-Hard: 59.6%**; SWE Multilingual: 73.3%; SWE-bench Pro: 52.6%; Codeforces: 3,052
- **NL2Repo: 54.2%**; **DeepSWE: 54.4%** — 19.6 points under the 74% reference; **AA-SciCode: 50.3%** — under 55%; OpenHarmony Bench: 53.8%
- **FrontierCode, Vibe Code Bench, Terminal-Bench 4.0: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,206 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 72/100.** Above the methodology's mid band, and well-corroborated. **Terminal-Bench 2.1 82.7% is 5.3 points under the reference, MCP Atlas 69%, Toolathlon-Verified 70.3%, BrowseComp 73.2%, GDPval-AA 46.7% normalized and AA Agentic Index 41.7%** give a broad and genuinely balanced agentic base — one of the better ones in this research series. Capped by the **15.7-point vendor-vs-Vals Terminal-Bench spread (82.7% vs 67.0%)**, by **MazeBench 0%, AutomationBench 25.1% and Agents' Last Exam 25.2%**, and by the absence of OSWorld, τ³-bench, Claw-Eval, ALE, JobBench and AA AutomationBench.
- **Reasoning: 80/100.** Above the methodology's mid band and the strongest dimension. **ARC-AGI-1 89.0% / ARC-AGI-2 61.4% are both strong, AA-GPQA Diamond 90.8% clears the 90%+ reference, AA Intelligence Index 34.3% is the strongest composite in this batch, CritPt 16.6% is solid, and MRCR 1M 78.7% / CorpusQA 1M 60.5% give the best long-context retrieval evidence in this research series.** HMMT 94.8% and IMOAnswerBench 88.4% corroborate. Capped by **AA-HLE 38.6% (1.4 under the 40% reference)**, **Apex 33.0%**, and above all by **AA-Omniscience index −14.3 with a 91.7% hallucination rate, the second-worst in this batch** — which suppresses the dimension because a model that hallucinates on 91.7% of unanswerable questions cannot be trusted with the reasoning it demonstrably has.
- **Context window: 99/100.** **1M tokens with MRCR 1M 78.7% and CorpusQA 1M 60.5% both measured at full depth** — the strongest long-context retrieval evidence measured anywhere in this research series, and the reason this scores higher than the other 1M models. Held at 99 rather than 100 because no GraphWalks run exists and no max-output limit is published.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,206 Elo and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-focused model with an unproven visual side, which is factually correct.
- **Coding: 78/100.** Above the methodology's mid band. **LiveCodeBench 91.6% (tech report) / 87.3% (Vals) is strong, SWE-bench Verified 79% (vendor) / 88.8% (Vals) is solid, and AA Coding Index 69.1% misses the 70% frontier reference by 0.9 points — the narrowest miss in this batch.** VulcanBench v3 88.4%, DSBench-FullStack 68.7% and SWE Multilingual 73.3% corroborate. Note the **9.8-point SWE-bench gap runs in the favourable direction (Vals 88.8% above the vendor's 79%)**, which is the reverse of the usual pattern and is recorded as a confidence signal. Capped by **DeepSWE 54.4% (19.6 under the 74% reference), AA-SciCode 50.3% (under 55%), NL2Repo 54.2%, and the absence of FrontierCode, Vibe Code Bench and Terminal-Bench 4.0**.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable, at Flash tier** — a genuinely permissive proposition, and DeepSeek's Flash line is historically the cheapest open-weight route in this research series. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no Zen free tier is recorded.
- **Overall Score: 76.8/100.** (72 + 80 + 99 + 55 + 78 + 88) / 5 = 78.6 → **79**. Recommendation: **the best-evidenced unranked model in this research series, and one of the strongest open-weight long-context reasoners here.** 57 benchmarks — the second-deepest base in this corpus — with ARC-AGI-1 89.0%, AA-GPQA Diamond 90.8%, AA Intelligence Index 34.3%, CritPt 16.6%, MRCR 1M 78.7%, SWE-bench 88.8% (Vals) and Terminal-Bench 2.1 82.7% at a 1M window with open weights is a genuinely strong package, unusual for a Flash tier. **But note the queue's 75.0 is a roster artefact: BenchLM leaves this model unranked despite 57 rows**, so treat the roster figure as indicative rather than measured. One hard caution: **AA-Omniscience index −14.3 with a 91.7% hallucination rate, the second-worst in this batch** — it is an excellent reasoning and coding model and an actively dangerous factual assistant, so never route knowledge questions to it. Prefer **DeepSeek V4.1 Flash 1017 (65.35, refreshed earlier this session)** for the newer generation, or **DeepSeek V4 Pro (62.65)** for the flagship — but note this model's 57-row evidence base is the deepest of the three.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `deepseek-v4-flash-0731` with 57 source-displayable benchmark rows but no overall score** — its own text reads *"has 57 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 57 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 75.0 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max and Ling 3.0 Flash VL reports. **This is the best-evidenced unranked model in this research series (57 rows, second only to Kimi K2.5's 84 overall), and that is stated as the report's redeeming structural fact.** DeepSeek's own DeepSeek-V4 technical report and the V4 Flash 0731 API update are the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against BenchLM's 57-row catalog (which attributes the independent numbers to Artificial Analysis, Vals AI, ARC Prize, Epoch AI, VulcanBench, OpenHarmony, MazeBench and Openrouter). Four conflicts are listed side by side rather than averaged: **Terminal-Bench 2.1 82.7% (vendor) / 67.0% (Vals) — a 15.7-point spread, the second-largest in this batch; SWE-bench Verified 79% (vendor) / 88.8% (Vals) — a 9.8-point gap running in the *favourable* direction, the reverse of the usual pattern and recorded as a confidence signal; GPQA Diamond 90.8% [AA] / 89.9% (Vals) / 88.1% (vendor); AA-HLE 38.6% [AA] / 34.8% (vendor)** — with the independent run preferred on each. The **second-worst AA-Omniscience hallucination rate in this batch (91.7%, on an index of −14.3)** is attributed rather than presented bare, as are the **batch-strongest AA Intelligence Index (34.3%)**, the **narrowest reference miss in this batch (AA Coding Index 69.1% vs the 70% frontier)** and the **best long-context retrieval evidence in this research series (MRCR 1M 78.7%)**. The multimodal dimension is scored as unmeasured rather than assumed from family grounds. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (OSWorld, τ³-bench, Claw-Eval, ALE, JobBench, AA AutomationBench, AA ITBench, AIME, FrontierMath, FrontierCode, Vibe Code Bench, Terminal-Bench 4.0, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena beyond the single row) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — DeepSeek-V4 technical report (primary source, 40+ vendor rows)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro/resolve/main/DeepSeek_V4.pdf?download=true)
  - [DeepSeek — V4 Flash 0731 API update (source of the Terminal-Bench 2.1, CyberGym, Toolathlon-Verified, NL2Repo and DeepSWE rows)](https://api-docs.deepseek.com/zh-cn/updates/)
  - [BenchLM — DeepSeek V4 Flash 0731 (57 benchmark rows, no overall score, unranked)](https://benchlm.ai/models/deepseek-v4-flash-0731)
  - [Artificial Analysis — DeepSeek V4 Flash](https://artificialanalysis.ai/models/deepseek-v4-flash)
  - [Vals AI — DeepSeek V4 Flash 0731 leaderboard results](https://www.vals.ai/models/deepseek_deepseek-v4-flash-0731)
  - [ARC Prize — published Semi-Private results for DeepSeek V4 Flash 0731](https://arcprize.org/results/deepseek-v4-flash-0731)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — omniscience leaderboard (source of the 91.7%)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Openrouter — DeepSeek V4 Flash benchmarks](https://openrouter.ai/deepseek/deepseek-v4-flash/benchmarks)
  - See also: [`model/deepseek-v4.1-flash-1017/`](deepseek-v4.1-flash-1017.md) (65.35) — the newer generation this report recommends preferring; [`model/deepseek-v4-pro/`](deepseek-v4-pro.md) (62.65) — the flagship, both refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
