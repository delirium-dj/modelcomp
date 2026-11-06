# Qwen3.5-122B-A10B — findings by Step 5 Preview

- Source: Alibaba / Qwen Team (`Qwen/Qwen3.5-122B-A10B`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-122B-A10B. Alibaba's **open-weight 122B-total / 10B-active MoE** — an **8.2% activation ratio**. BenchLM's canonical slug is `qwen3-5-122b-a10b` (**not** `qwen-3.5-122b-a10b`, which 404s — the same dotted-slug trap; note the repo folder name is also confusable with the param-size convention). It scores **52.92/100, #92 of 1,015** with **31 benchmarks**, placing it just above Qwen3.5 Plus (49.34) and the 27B sibling (49.01).
- **Short description:** A mid-size open-weight model with a genuinely strong **τ²-bench 93.6% [AA] and V\* 93.2%** — the second-highest V\* figure in this research series, behind only Kimi K2.6's 96.9% — set against a **near-total collapse on agentic execution and scientific depth**: **AA Agentic Index 9.6% (the lowest measured in this research series), GDPval-AA 15.7% normalized, and CritPt 0.6%**.
- **Provider / access:** **Open weights** on Hugging Face (`Qwen/Qwen3.5-122B-A10B`), Alibaba Cloud Model Studio / QwenCloud, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; the 3.5 generation is Alibaba's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `Qwen/Qwen3.5-122B-A10B` (Hugging Face); `qwen3-5-122b-a10b` (BenchLM canonical, AA); `qwen/qwen3.5-122b-a10b` (Openrouter).
- **Context window:** **262,144 tokens (262K) native, extensible to 1M with YaRN** — BenchLM records 262K.
- **Modalities:** **text and image in; text out**, with a solid measured visual suite (MMMU-Pro 76.9%, V\* 93.2%, MathVision 86.2%, CharXiv 77.2%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights with a 122B total / 10B active structure provide the self-hosting escape**, and the 8.2% activation ratio is favourable.
- **Architecture:** **open-weight sparse MoE, 122B total / 10B active** — a 8.2% activation ratio.

### Raw benchmarks found

Qwen's own model card is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Vals-adjacent third parties, Epoch AI and the Qwen3.5 blog supplying independent rows. 31 benchmarks total.

Agent / tool use — **the model's defining weakness, with the series' lowest composite**:

- **τ²-bench: 93.6%** [AA] — the strongest agentic figure here and among the best in this research series
- BrowseComp: **63.8%** (vendor); OSWorld-Verified: **58%** (vendor)
- **Terminal-Bench 2.0: 49.4%** (vendor) — far under the 88%+ reference, and on the *older* harness
- **GDPval-AA: 925 Elo / 15.7% normalized** [AA] — near-floor
- **AA Agentic Index: 9.6%** [AA] — **the lowest AA Agentic Index measured anywhere in this research series**
- **Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found** — so two of three frontier references are unmeasured and no composite beyond AA Agentic Index exists

Reasoning / knowledge — **split, and the split is severe**:

- **AA-GPQA Diamond: 85.7%** [AA] / GPQA 86.6% (vendor) — fails the 90%+ reference on both
- **AA-HLE: 25.2%** — fails the 40%+ reference by 14.8 points
- **CritPt: 0.6%** [AA] — among the lowest measured in this research series
- **AA-LCR: 76.3%**; LongBench v2: 60.2%
- MMLU-Pro: 86.7%; SuperGPQA: 67.1%; MMLU-ProX: 82.2%; AA Global-MMLU-Lite: 89.1%
- IFEval: **93.4%**; **AA-IFBench 75.7%**
- **AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **mid, and thin**:

- **SWE-bench Verified: 72%** (vendor) — 13 points under the 85%+ terminal reference
- **LiveCodeBench v6: 78.9%** (vendor)
- **AA Coding Index: 45.7%** — 24.3 points under the 70% reference; **AA-SciCode: 39.7%** — 15.3 points under 55%
- **SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode, Terminal-Bench 4.0: no verified public score found** — so the 74% and 55% references are unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **V\*: 93.2%** (vendor) — **the second-highest V\* figure measured in this research series**, behind only Kimi K2.6's 96.9%
- **MathVision: 86.2%** (vendor); **MMMU-Pro: 76.9%** (vendor) / **AA-MMMU-Pro 75.0%** [AA]
- **MMMU: 83.9%**; **MVU: 74.7%**; CharXiv: 77.2%
- **ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 45/100.** Below the methodology's mid band, and the weakest dimension. The contradiction is the finding: **τ²-bench 93.6% [AA] is among the strongest protocol figures in this research series, while AA Agentic Index 9.6% is the lowest measured anywhere in this corpus** — the same protocol-fluency-without-execution pattern seen in Kimi K2.7 Code. BrowseComp 63.8% and OSWorld-Verified 58% are respectable browsing/computer-use figures, but **Terminal-Bench 2.0 49.4% is ~39 points under the reference, GDPval-AA is 15.7% normalized, and Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all** — so two of three frontier references are unmeasured.
- **Reasoning: 48/100.** Below the methodology's mid band, and the report's central caution. **CritPt 0.6% is among the lowest measured in this research series, AA-HLE 25.2% fails the 40% reference by 14.8 points, and AA-GPQA Diamond 85.7% fails the 90% reference** — despite genuinely strong exam figures (**IFEval 93.4%, AA-IFBench 75.7%, MMLU-Pro 86.7%, AA Global-MMLU-Lite 89.1%**) and a decent **AA-LCR 76.3%**. That split — strong instruction-following and exams against collapsed scientific depth — is the same signature seen in the other Non-Reasoning-classified models. Capped further by the **total absence of the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME and FrontierMath**, so composite depth and reliability are entirely unknown.
- **Context window: 88/100.** **262K native, extensible to 1M via YaRN** — the methodology's 200K–500K band at its ceiling, scored at 88 because **AA-LCR is 76.3%**, so the native window is measurably usable. Held below the ≥1M tier because the 1M is an extension trick rather than native, no MRCR or GraphWalks run exists at either depth, and no max-output limit is published.
- **Multimodal: 82/100.** Text + image in with text out, scored in the methodology's 75–90 "video/PDF in" band's upper region on a genuinely good visual suite: **V\* 93.2% (second-highest in this series), MathVision 86.2%, MMMU-Pro 76.9%, AA-MMMU-Pro 75.0%, MMMU 83.9%, CharXiv 77.2%**. Held below 90+ because **output is text-only, there is no video or audio input, and ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA and Design Arena are unmeasured** — so the document and counting benchmarks that dominate other Qwen models are absent here, and MVU 74.7% sits below the rest of the suite.
- **Coding: 55/100.** Below the methodology's mid band. **SWE-bench Verified 72% and LiveCodeBench v6 78.9% are solid mid-frontier figures.** Capped by **AA Coding Index 45.7% (24.3 under the 70% reference) and AA-SciCode 39.7% (15.3 under 55%)**, both far under reference, and by the absence of SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode and Terminal-Bench 4.0 — so the 74% and 55% references cannot be checked.
- **Cost efficiency: 90/100.** **No rate card is published in any source checked**, so the score rests on the architecture rather than a price: **open weights with a 8.2% activation ratio (10B active of 122B total)** means inference cost scales with the 10B active count, one of the more favourable ratios in this research series and a genuinely cheap self-hosting profile. Scored at 90 on that basis plus the self-hosting escape. **Explicitly an architecture-based inference, not a price measurement** — held below 95 because no Zen free tier is recorded, no hosted rate is published, and the 262K native window keeps prompt costs down without earning a premium.
- **Overall Score: 64/100.** (45 + 48 + 88 + 82 + 55) / 5 = 63.6 → **64**. Recommendation: **a cheap self-hostable vision model with a severe agentic and depth deficit.** V\* 93.2% — the second-highest measured in this research series — plus MathVision 86.2%, MMMU-Pro 76.9% and an 8.2% activation ratio at open weights makes this a genuinely attractive option for visual grounding and document work you host yourself. Two hard cautions: **AA Agentic Index 9.6% is the lowest measured anywhere in this research series and CritPt 0.6% is among the lowest**, so it must never be used as an autonomous agent or as a scientific/deep-reasoning assistant; and **GDPval-AA 15.7% normalized** confirms the execution layer is near-floor despite the strong τ²-bench protocol score. Prefer **Qwen3.8-27B** (refreshed earlier in this session: SWE-bench 86.0%, AA Coding Index 68.1%, also open weights) if coding or agentic depth matters.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Qwen's own model card as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 31-row catalog under its canonical dotted slug `qwen3-5-122b-a10b`** — which attributes the independent numbers to Artificial Analysis, Epoch AI and the Qwen3.5 blog. **A lookup trap is recorded: the repo folder spelling `qwen-3.5-122b-a10b` 404s on BenchLM and the dotted slug had to be found via Qwen3.5-397B's sibling list; the repo folder name is also confusable with the param-size convention.** The report's central finding is a **contradiction rather than a level: τ²-bench 93.6% [AA] is among the strongest protocol figures in this research series while AA Agentic Index 9.6% is the lowest measured anywhere in this corpus** — recorded explicitly as the same protocol-fluency-without-execution pattern identified in the Kimi K2.7 Code report, and carried into the recommendation rather than averaged away. The two series-lows this model holds — **AA Agentic Index 9.6% and (near-lowest) CritPt 0.6%** — are attributed rather than presented bare, as is the **second-highest V\* figure in this research series (93.2%)**. Conflicts are listed side by side — MMMU-Pro 76.9% (vendor) / 75.0% [AA]; GPQA 86.6% (vendor) / 85.7% [AA] — rather than averaged, with the independent run preferred on each. The strong-exam-against-collapsed-depth pattern is stated as consistent with the Non-Reasoning-classified cohort. The unpublished rate card is surfaced with its effect on the cost score stated as an architecture-based inference. Missing benchmarks (Terminal-Bench 2.1/4.0, τ³-bench, MCP-Atlas, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, FrontierMath, SWE-bench Pro, DeepSWE, Vibe Code Bench, FrontierCode, ExtractBench, BabyVision, ZeroBench, OmniDocBench, RealWorldQA, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — Qwen/Qwen3.5-122B-A10B model card (primary source)](https://huggingface.co/Qwen/Qwen3.5-122B-A10B)
  - [Qwen — Qwen3.5 launch blog (source of the MMMU and MMVU rows)](https://qwen.ai/blog?id=qwen3.5)
  - [BenchLM — Qwen3.5-122B-A10B benchmark scores (31 rows, 52.92/100, #92/1015; canonical dotted slug)](https://benchlm.ai/models/qwen3-5-122b-a10b)
  - [Artificial Analysis — Qwen3.5-122B-A10B](https://artificialanalysis.ai/models/qwen3-5-122b-a10b)
  - [Artificial Analysis — aaagenticindex leaderboard (source of the series-lowest 9.6%)](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — tau2-bench leaderboard](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — ifbench leaderboard](https://artificialanalysis.ai/evaluations/ifbench)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Openrouter — Qwen3.5-122B-A10B benchmarks](https://openrouter.ai/qwen/qwen3.5-122b-a10b/benchmarks)
  - See also: [`model/qwen-3.8-27b/`](qwen-3.8-27b.md) and [`model/qwen-3.5-397b/`](qwen-3.5-397b.md) — the sibling open-weight Qwen models refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
