# Qwen3.5 397B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B — properly **Qwen3.5-397B-A17B**, Alibaba's **open-weight** 397B-total / **17B-active** MoE. BenchLM's canonical slug is `qwen3-5-397b` (**not** `qwen-3.5-397b`, which 404s — the same dotted-slug trap as every Qwen 3.x SKU; note the repo folder name is also ambiguous against the `qwen-3.5-397b` param-size spelling). It scores **55.46/100, #74 of 1,015** with **71 benchmarks** — the second-deepest evidence base in this research series, behind Qwen3.8-27B's 75.
- **Short description:** An **open-weight 397B/17B-active MoE with an unusually deep measured multimodal suite** — 21 visual benchmarks including **AI2D_TEST 93.9%, CountBench 97.2%, RefCOCO 92.3%, V\* 95.8%, OmniDocBench 90.8%, Video-MME 87.5%, VideoMMMU 84.7%** — and **τ²-bench 95.6% [AA]**, the strongest in this batch. Its weaknesses are concentrated and severe: **BenchLM classifies it Non-Reasoning (the sixth such model in this corpus), CritPt is 1.7% (the lowest measured anywhere in this research series), AA-HLE is 29.0%, and the context window is only 128K.**
- **Provider / access:** **Open weights on Hugging Face (`Qwen/Qwen3.5-397B-A17B`)**, Alibaba Cloud Model Studio / QwenCloud, and self-hosting. **Repo meta.json records `noFreeId`** — no Zen free tier. There is also a separately-tracked `Qwen3.5 397B (Reasoning)` sibling with no computed BenchLM score.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.5-397B-A17B` (Hugging Face); `qwen3-5-397b` (BenchLM canonical, AA); `qwen3-5-397b-a17b` (AA's model page slug); `qwen/qwen3.5-397b-a17b` (Openrouter).
- **Context window:** **128,000 tokens** (BenchLM) — the smallest window in this batch and one-eighth of the current 1M standard. This is the binding constraint on the model's ranking.
- **Modalities:** **text, image and video in; text out** — the defining strength, with the deepest measured visual suite in this research series for its size.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape that makes the gap less damaging.**
- **Architecture:** **open-weight sparse MoE, 397B total / 17B active** — a 4.3% activation ratio, which is the model's defining engineering property and the reason its cost-efficiency score is high despite being a 397B model.

### Raw benchmarks found

Qwen's own model card and the Qwen3.6-Plus comparison tables are the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, ARC-adjacent third parties, Epoch AI, Gert Labs, LlamaIndex, ResearchClawBench, Claw-Eval and Openrouter supplying independent rows. **71 benchmarks total — the second-deepest evidence base in this research series.**

Agent / tool use — **broad but weak outside τ²**:

- **τ²-bench: 95.6%** [AA] — the strongest τ²-bench figure in this batch
- **MCP-Tasks: 74.2%**; WideResearch: **74.0%**; BrowseComp: **69.0%** (model card); QwenClawBench: 51.8%
- **τ³-bench: 68.4%**; OSWorld-Verified: **62.2%** (model card); **Claw-Eval: 56.8%** — one of only three measured ClawEval figures in this research series
- **Terminal-Bench 2.0: 52.5%**; VITA-Bench: 43.7%; Toolathlon: 36.3%; DeepPlanning: 37.6%; MCP Atlas: 46.1%
- Gert Labs: 46.76%; **ResearchClawBench: 14.2%**; **APEX-Agents-AA: 15.3%** [AA]
- **Terminal-Bench 2.1/4.0, MazeBench, ALE, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite exists

Reasoning / knowledge — **severe, and the model's defining limitation**:

- **CritPt: 1.7%** — **the lowest CritPt measured anywhere in this research series**
- **GPQA: 88.4%** (vendor) / **AA-GPQA Diamond 89.3%** — fails the 90%+ reference on both
- **HLE: 28.7%** (vendor) / **AA-HLE 29.0%** — fails the 40%+ reference by ~11 points on both
- MMLU-Pro: 87.8%; MMLU-Redux: 94.9%; C-Eval: 93%; SuperGPQA: 70.4%
- **AA-LCR: 77.3%**; LongBench v2: 63.2%; AI-Needle: 68.7%
- IFEval: 92.6%; IFBench: 76.5% (vendor) / **AA-IFBench 78.8%** — the independent run above the vendor
- **AIME26: 93.3%**; HMMT Feb 2025: 94.8%; HMMT Nov 2025: 92.7%; HMMT Feb 2026: 87.9%; MMAnswerBench: 80.9%
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, FrontierMath: no verified public score found** — so **composite depth, reliability and two reasoning references are entirely unmeasured**
- **Note the split: competition mathematics is genuinely strong (AIME26 93.3%, HMMT 87.9–94.8%) while scientific depth is the worst measured in this series (CritPt 1.7%)** — the signature of a Non-Reasoning model that memorises contest maths.

Coding — **mid-frontier**:

- **SWE-bench Verified: 76.2%** (vendor) — 8.8 points under the 85%+ terminal reference
- **LiveCodeBench v6: 83.6%**; SWE Multilingual: **69.3%**; SWE-bench Pro: 50.9%
- **AA-SciCode: 44.8%** — under the 55%+ reference; **NL2Repo: 32.2%** — weak
- **DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, Terminal-Bench: no verified public score found** — so the 74%, 70% and 55% coding references are all unmeasured

Multimodal (image-in) — **the deepest visual suite in this research series**:

- **CountBench: 97.2%** — the highest figure in this research series
- **AI2D_TEST: 93.9%**; **RefCOCO (avg): 92.3%**; **OmniDocBench 1.5: 90.8%**
- **MathVision: 88.6%**; We-Math: 87.9%; DynaMath: 86.3%; **Video-MME (with subtitle): 87.5%** / 83.7% without
- **MLVU (M-Avg): 86.7%**; **VideoMMMU: 84.7%**; RealWorldQA: 83.9%; CC-OCR: 82.0%; **CharXiv: 80.8%**; MMMU: 85.0%
- **V\*: 95.8%** — the second-highest V\* figure in this research series, behind Kimi K2.6's 96.9%
- **MMMU-Pro: 79.0%** (vendor) / **AA-MMMU-Pro 77.3%**; ScreenSpot Pro: 65.6%; MMLongBench-Doc: 61.5%; ERQA: 67.5%; SimpleVQA: 67.1%; ODINW13: 47.0%
- **ExtractBench, BabyVision, ZeroBench, Design Arena, Chartography: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 62/100.** Mid-band and split. The protocol and research half is respectable — **τ²-bench 95.6% [AA] is the strongest in this batch, MCP-Tasks 74.2%, WideResearch 74.0%, BrowseComp 69.0%, τ³-bench 68.4% and Claw-Eval 56.8%** — while the execution half collapses: **Terminal-Bench 2.0 52.5%, Toolathlon 36.3%, DeepPlanning 37.6%, MCP Atlas 46.1%, ResearchClawBench 14.2%, APEX-Agents-AA 15.3%**, and **Terminal-Bench 2.1/4.0, MazeBench, ALE, JobBench, GDPval-AA and the AA Agentic Index have no figure at all** — so two of three frontier references are unmeasured and no composite exists.
- **Reasoning: 56/100.** Below the methodology's mid band, and the report's central caution. **The split is the model's signature: competition mathematics is genuinely strong (AIME26 93.3%, HMMT 87.9–94.8%, MMAnswerBench 80.9%) while scientific depth is the worst measured anywhere in this research series — CritPt 1.7%** — and **AA-HLE 28.7–29.0% fails the 40% reference by ~11 points**. GPQA Diamond fails 90% on both runs. **AA-LCR 77.3% and AA-IFBench 78.8% (above the vendor's 76.5%) are the respectable figures**, and MMLU-Redux 94.9% / C-Eval 93% show broad knowledge. Capped hard by **CritPt 1.7%, and by the total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR and FrontierMath** — so composite depth and reliability are entirely unknown. **BenchLM's Non-Reasoning classification is consistent with this profile and is recorded as a corroborating structural fact rather than a separate finding.**
- **Context window: 70/100.** **128,000 tokens** places it exactly on the methodology's 200K tier boundary but below it, and it is the smallest window in this batch. Scored at 70, the 128K tier's floor, on the strength of **AA-LCR 77.3%** — which means the window that exists is measurably usable. Held at 70 rather than higher because **128K is one-eighth of the current standard**, no MRCR or GraphWalks figure exists, and no max-output limit is published. **This is the single largest constraint on the model's ranking.**
- **Multimodal: 94/100.** Text, image and video in with text out, scored at the top of the methodology's 75–90 band and **above it**, because this is **the deepest measured visual suite in this research series — 21 benchmarks** including **CountBench 97.2% (the series' highest), AI2D_TEST 93.9%, RefCOCO 92.3%, V\* 95.8% (second-highest), OmniDocBench 90.8%, Video-MME 87.5%, VideoMMMU 84.7%, MLVU 86.7%, MathVision 88.6%**, with genuine video understanding across three benchmarks. Held below 95+ because output is text-only, there is no audio input, **ExtractBench, BabyVision, ZeroBench and Design Arena are unmeasured**, and **ODINW13 47.0% and ScreenSpot Pro 65.6%** sit well below the rest of the suite.
- **Coding: 68/100.** Mid-band. **SWE-bench Verified 76.2% and LiveCodeBench v6 83.6% are solid mid-frontier repair figures, and SWE Multilingual 69.3% corroborates.** Capped by SWE-bench Verified sitting 8.8 points under the 85%+ terminal reference, **AA-SciCode 44.8% (under 55%), NL2Repo 32.2%, and the total absence of DeepSWE, the AA Coding Index, Vibe Code Bench, FrontierCode and Terminal-Bench** — so the 74%, 70% and 55% references cannot be checked.
- **Cost efficiency: 92/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 4.3% activation ratio (17B active of 397B total)** means inference cost scales with the 17B active count, not the 397B total, which is one of the most favourable ratios in this research series. Scored at 92 on that basis plus the self-hosting escape. **Explicitly an architecture-based inference, not a price measurement** — held below 95 because no Zen free tier exists (`noFreeId`), no hosted rate is published, and the 128K window keeps prompt costs down without earning a premium.
- **Overall Score: 70/100.** (62 + 56 + 70 + 94 + 68) / 5 = 70 → **70**. Recommendation: **the best open-weight vision model in this research series, and a poor reasoning model.** The 21-benchmark visual suite — CountBench 97.2%, V\* 95.8%, AI2D_TEST 93.9%, RefCOCO 92.3%, OmniDocBench 90.8% and three genuine video benchmarks — combined with **open weights and a 4.3% activation ratio** makes it the strongest self-hostable choice for document, chart, OCR, grounding and video understanding in this corpus. Two hard cautions: **CritPt 1.7% is the lowest measured anywhere in this research series and AA-HLE is 29.0%**, so — with BenchLM classifying the model **Non-Reasoning** despite strong competition-maths figures (AIME26 93.3%, HMMT 87.9–94.8%) — it must never be used as a scientific or deep-reasoning assistant; the maths scores reflect contest-pattern recall, not reasoning. And **128K context is one-eighth of the current standard**, which disqualifies it from long-document work despite the strong document-perception benchmarks. Prefer the separately-tracked `Qwen3.5 397B (Reasoning)` sibling if reasoning is the requirement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card and the Qwen3.6-Plus comparison tables as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 71-row catalog — the second-deepest evidence base in this research series — under its canonical dotted slug `qwen3-5-397b`**, which attributes the independent numbers to Artificial Analysis, Epoch AI, Gert Labs, LlamaIndex, ResearchClawBench and Claw-Eval. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-397b` 404s on BenchLM, and the dotted slug had to be found via Qwen3.8-27B's sibling list; the canonical model name is also `Qwen3.5-397B-A17B`, which the repo folder name does not carry, and the folder spelling is further confusable with the `qwen-3.5-397b` param-size convention.** The report's central analytical finding is a **split rather than a level: competition mathematics is strong (AIME26 93.3%, HMMT 87.9–94.8%) while scientific depth is the worst measured anywhere in this research series (CritPt 1.7%)** — a profile consistent with BenchLM's **Non-Reasoning** classification, which is recorded as a corroborating structural fact and carried into the recommendation. Conflicts are listed side by side — GPQA 88.4% (vendor) / 89.3% [AA]; HLE 28.7% (vendor) / 29.0% [AA]; IFBench 76.5% (vendor) / 78.8% [AA]; MMMU-Pro 79.0% (vendor) / 77.3% [AA]; Video-MME 87.5% with-subtitle / 83.7% without — rather than averaged, with the independent run preferred on each. The series-highest CountBench (97.2%) and series-lowest CritPt (1.7%) are attributed rather than presented bare. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference rather than a measurement. Missing benchmarks (Terminal-Bench 2.1/4.0, MazeBench, ALE, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, FrontierMath, DeepSWE, AA Coding Index, Vibe Code Bench, FrontierCode, Terminal-Bench, ExtractBench, BabyVision, ZeroBench, Design Arena, Chartography) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-397B-A17B model card (primary source)](https://huggingface.co/Qwen/Qwen3.5-397B-A17B)
  - [Qwen — Qwen3.6-Plus comparison tables (source of the large vendor-run row set)](https://qwen.ai/blog?id=qwen3.6)
  - [BenchLM — Qwen3.5 397B benchmark scores (71 rows, 55.46/100, #74/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-397b)
  - [Artificial Analysis — Qwen3.5-397B-A17B](https://artificialanalysis.ai/models/qwen3-5-397b-a17b)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ResearchClawBench leaderboard](https://internscience.github.io/ResearchClawBench-Home/)
  - [Claw-Eval leaderboard](https://claw-eval.github.io/)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - See also: [`model/qwen3-5-397b-reasoning/`](qwen3-5-397b-reasoning.md) — the separately-tracked Reasoning sibling with no computed BenchLM score; [`model/qwen-3.8-27b/`](qwen-3.8-27b.md) — the 27B dense sibling refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
