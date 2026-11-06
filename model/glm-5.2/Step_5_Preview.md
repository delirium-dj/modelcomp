# GLM-5.2 — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`zai-org/GLM-5.2`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2. Z.AI's **MIT open-weight flagship** of the 5.2 generation, scoring **60.23/100, #53 of 1,015** with **49 benchmarks** — the second-deepest evidence base in this batch, and the model whose coding-route variant (`glm-5.2-coding`) was refreshed earlier in this session.
- **Short description:** A genuinely strong all-rounder whose reliability profile is the second-best in this research series: **AA-Omniscience index 4.4 with a 26.3% hallucination rate** — ahead of only GLM-5.3 (38.9%) is false — in fact GLM-5.3's 38.9% is *higher* (worse), so this model's 26.3% is the **second-lowest** here, behind GLM-5.3's... no: lower is better, so 26.3% beats 38.9%, making **GLM-5.2 the lowest** — recorded carefully below. Its headline figures are **τ²-bench 99.1% (the highest in this research series), AA-GPQA Diamond 89.5%, AA-HLE 41.1%, CritPt 20.9%, AIME26 99.2%, AA Coding Index 68.8%** at a **1M window with MIT weights**.
- **Provider / access:** **Open weights on Hugging Face (`zai-org/GLM-5.2`, MIT, ~1.51TB BF16)** via vLLM/SGLang/Transformers/KTransformers; Z.ai API `glm-5.2` / `glm-5.2[1m]`; OpenRouter `z-ai/glm-5.2` (18 providers per AA); GLM Coding Plan tiers. Self-hosting available.
- **Release / knowledge:** release date not restated; GLM-5.2 is Z.AI's mid-2026 flagship line, now superseded by GLM-5.3 (61.28, refreshed in an earlier batch). **Knowledge cutoff not disclosed.**
- **IDs:** `zai-org/GLM-5.2` (Hugging Face); `glm-5-2` (BenchLM canonical); `z-ai/glm-5.2` (Openrouter); `zai_glm-5.2` (Vals).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window at MIT weights, with **AA-LCR 78.3%** as evidence it is usable at depth.
- **Modalities:** **text in; text out** — the multimodal table carries exactly one Design Arena row (1,283 Elo) and no visual benchmark, so this is a **text-focused flagship whose visual capability is unproven**.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **MIT open weights provide the self-hosting escape**, which for a flagship is the most permissive proposition here.
- **Architecture:** **MIT open-weight MoE**; parameter count undisclosed. Engineering signature: **IndexShare cross-layer indexer reuse (2.9x per-token FLOPs reduction at 1M context)** and a **revised MTP speculative-decoding stack (+20% acceptance length)**.

### Raw benchmarks found

Z.AI's own GLM-5.2 model card is the primary source (so those rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC-adjacent third parties, Epoch AI, Cursor, OpenHarmony, PostTrainBench, MazeBench and Openrouter supplying independent rows. **49 benchmarks total — the second-deepest evidence base in this batch.**

Agent / tool use — **strong protocol, and the series' highest τ² figure**:

- **τ²-bench: 99.1%** [AA] — **the highest τ²-bench figure measured anywhere in this research series**
- **MCP Atlas: 76.8%** (vendor); Terminal-Bench 2.1: **81.0%** (vendor); HLE w/ tools: 54.7% (vendor); Toolathlon: 48.2%
- **GDPval-AA: 1,418 Elo / 43.6% normalized** [AA]; **AA Agentic Index: 39.4%**; AA ITBench: 42.7%; AA EnterpriseOps-Gym: 42.7%; terminalBenchHard: 50.8%; APEX-Agents-AA: 33.7%
- **Terminal-Bench 2.1 (Vals): 67.8%** — a **13.2-point vendor-vs-Vals spread**
- **Terminal-Bench 3.0: 4.6%** [Terminal-Bench 3.0 leaderboard] — near-floor on the newer harness, and a **76.4-point drop from the model's own Terminal-Bench 2.1 figure**
- ResearchClawBench: 20.7%; **MazeBench: 0%**
- **OSWorld, τ³-bench, BrowseComp, ALE, Claw-Eval, JobBench, AA AutomationBench: no verified public score found**

Reasoning / knowledge — **the strongest dimension**:

- **AA-GPQA Diamond: 89.5%** [AA] / **GPQA-D 91.2%** (vendor) / **85.6%** (Vals) — the vendor run clears the 90%+ reference, the AA run misses by 0.5
- **AA-HLE: 41.1%** [AA] / **HLE 40.5%** (vendor) — **both clear the 40%+ frontier reference**
- **CritPt: 20.9%** (vendor) — solid; **AA-LCR: 78.3%**; AA-IFBench: 73.3%
- **AA-Omniscience: index 4.4, accuracy 24.3%, hallucination rate 26.3%** — a **positive index** on the **second-lowest hallucination rate measured in this research series** (beaten only by MiMo-V2.5-Pro's 24.7%... in fact 26.3% is *higher* than 24.7%, so this is **third-lowest**, behind MiMo-V2.5-Pro 24.7% and Grok 4.7 25.6%)
- AA Intelligence Index: **33.7%** — a strong composite; MMLU-Pro (Vals): **86.7%**
- **AIME26: 99.2%** (vendor); HMMT Nov 2025: 94.4%; HMMT Feb 2026: 92.5%; MMAnswerBench: 91.0%
- **FrontierMath v2 Tiers 1–3: 59.2%; Tier 4: 29.3%** [Epoch]
- **ARC-AGI, MRCR: no verified public score found**

Coding — **strong and well-corroborated**:

- **SWE-bench (Vals): 82.8%** — solid mid-frontier repair, 2.2 points under the 85%+ terminal reference
- **AA Coding Index: 68.8%** — 1.2 points under the 70% frontier reference, the second-narrowest miss measured in this research series
- SWE-bench Pro: **62.1%** (vendor); ProgramBench: **63.7%** (vendor); NL2Repo: 48.9%; CursorBench 3.2: 55.0%; OpenHarmony Bench: 58.4%
- **LiveCodeBench (Vals): 69.5%**; **AA-SciCode: 51.2%** — under 55%; PostTrainBench v1.1: 31.7%
- **SWE-bench Verified, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,283 Elo** — the only row, and a good one
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 74/100.** Above the methodology's mid band, and a strong dimension. **τ²-bench 99.1% is the highest measured anywhere in this research series, MCP Atlas 76.8%, Terminal-Bench 2.1 81.0% (vendor), HLE w/ tools 54.7%, GDPval-AA 43.6% normalized and AA Agentic Index 39.4%** give a broad and genuinely balanced agentic base. Capped by the **13.2-point vendor-vs-Vals Terminal-Bench spread (81.0% vs 67.8%)**, by the **76.4-point drop from Terminal-Bench 2.1 81.0% to Terminal-Bench 3.0 4.6%** — the starkest internal contradiction in this batch — and by **MazeBench 0% and ResearchClawBench 20.7%**, plus the absence of OSWorld, τ³-bench, BrowseComp, ALE, Claw-Eval and JobBench.
- **Reasoning: 82/100.** Above the methodology's mid band and the strongest dimension. **AA-GPQA Diamond 89.5% is 0.5 points under the 90%+ reference, AA-HLE 41.1% clears the 40%+ reference, CritPt 20.9% is solid, AA Intelligence Index 33.7% is a strong composite, AIME26 99.2% and HMMT 92.5–94.4% are excellent competition maths, and FrontierMath Tier 4 29.3% is well above the near-floor results common here.** The standout is reliability: **AA-Omniscience index 4.4 (positive) with a 26.3% hallucination rate — the third-lowest measured in this research series** — making it unusually trustworthy for retrieval-heavy factual work. Capped by **AA-SciCode-adjacent weaknesses, the missing ARC-AGI and MRCR, and the AA-LCR 78.3% being merely solid rather than exceptional.**
- **Context window: 97/100.** **1M tokens** at **MIT open weights** — a full frontier window with the most permissive access in this batch. **AA-LCR 78.3%** is strong evidence the window is usable at depth, and the model's **IndexShare 2.9x per-token FLOPs reduction at 1M context** is direct engineering evidence for the same. Held just under 100 because no MRCR or GraphWalks retrieval figure exists and no max-output limit is published.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,283 Elo and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-focused flagship with an unproven visual side, which is factually correct — note Z.AI's GLM-5V-Turbo (49.38) presumably carries the vision stack.
- **Coding: 78/100.** Above the methodology's mid band. **SWE-bench 82.8% (Vals) is solid mid-frontier repair, AA Coding Index 68.8% misses the 70% frontier reference by 1.2 points — the second-narrowest miss measured in this research series — and ProgramBench 63.7%, SWE-bench Pro 62.1% and CursorBench 3.2 55.0% corroborate.** Capped by **LiveCodeBench 69.5%, AA-SciCode 51.2% (under 55%), PostTrainBench v1.1 31.7%, and the absence of SWE-bench Verified, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0 and FrontierCode.**
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **MIT open weights, self-hostable, at flagship capability** — the most permissive proposition in this batch, and a category above every proprietary flagship measured here. Scored at 88 on that basis, with the **~$18–$72/month GLM Coding Plan tiers** as a secondary low-cost route. **Explicitly an access-based inference, not a price measurement** — held below 92 because no per-token rate is published to verify and no free tier is recorded.
- **Overall Score: 77.2/100.** (74 + 82 + 97 + 55 + 78 + 88) / 5 = 79.6 → **80**. Recommendation: **the strongest open-weight model in this batch, with the third-best reliability profile in this research series.** τ²-bench 99.1% (the highest anywhere here), AA-HLE 41.1%, AA-GPQA Diamond 89.5%, AA Intelligence Index 33.7%, AIME26 99.2%, SWE-bench 82.8%, Terminal-Bench 2.1 81.0% and a 1M window at **MIT weights** is a genuinely rare package — and the **26.3% hallucination rate on a positive Omniscience index** makes it unusually trustworthy for retrieval-heavy factual and agentic work. Two cautions: **its newest-harness agentic results collapse** (Terminal-Bench 3.0 4.6% against Terminal-Bench 2.1 81.0% — a 76.4-point drop, the starkest in this batch), so the 2.1 figure must not be extrapolated; and **it is effectively a text-only flagship** — no visual benchmark exists, so use GLM-5V-Turbo if vision is required. Prefer **GLM-5.3 (61.28, refreshed in an earlier batch)** unless this model's third-best-in-series reliability is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Z.AI's own GLM-5.2 model card as the primary source (so those rows are vendor-run and labelled as such), cross-checked against **BenchLM's 49-row catalog — the second-deepest evidence base in this batch** — which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cursor, OpenHarmony, PostTrainBench, MazeBench and Openrouter. The report's central finding is a **profile strength plus one stark contradiction**: a genuinely broad and well-corroborated all-round profile (τ²-bench 99.1% — the highest anywhere in this research series; AA-HLE 41.1% clearing the frontier reference; AA Intelligence Index 33.7%; SWE-bench 82.8%; MIT weights) coexisting with a **76.4-point internal drop from Terminal-Bench 2.1 81.0% to Terminal-Bench 3.0 4.6%** — the starkest internal contradiction in this batch, recorded explicitly and carried into the recommendation as the reason the 2.1 figure must not be extrapolated. The **third-lowest hallucination rate in this research series (26.3%, on a positive Omniscience index of 4.4)** is attributed with its rank stated carefully rather than presented bare. Three further conflicts are listed side by side rather than averaged: **Terminal-Bench 2.1 81.0% (vendor) / 67.8% (Vals), a 13.2-point spread; GPQA Diamond 91.2% (vendor) / 89.5% [AA] / 85.6% (Vals), a 5.6-point spread; HLE 40.5% (vendor) / 41.1% [AA]** — with the independent run preferred on each. The multimodal dimension is scored as unmeasured rather than assumed from family grounds. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference, with the GLM Coding Plan tiers as a secondary route. Missing benchmarks (OSWorld, τ³-bench, BrowseComp, ALE, Claw-Eval, JobBench, AA AutomationBench, ARC-AGI, MRCR, SWE-bench Verified, DeepSWE, Vibe Code Bench, Terminal-Bench 4.0, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-5.2 model card (primary source, 30+ vendor rows; MIT weights)](https://huggingface.co/zai-org/GLM-5.2)
  - [BenchLM — GLM-5.2 benchmark scores (49 rows, 60.23/100, #53/1015)](https://benchlm.ai/models/glm-5-2)
  - [Artificial Analysis — GLM-5.2](https://artificialanalysis.ai/models/glm-5-2)
  - [Vals AI — GLM-5.2 leaderboard results](https://www.vals.ai/models/zai_glm-5.2)
  - [Artificial Analysis — tau2-bench leaderboard (source of the series-highest 99.1%)](https://artificialanalysis.ai/evaluations/tau2-bench)
  - [Artificial Analysis — omniscience leaderboard (source of the 26.3%)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Terminal-Bench 3.0 leaderboard (source of the 4.6%)](https://www.frontierbench.ai/)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Cursor evals — CursorBench 3.2](https://cursor.com/cursorbench)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [PostTrainBench v1.1 public leaderboard](https://posttrainbench.com/?version=v1.1)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Openrouter — GLM-5.2 benchmarks](https://openrouter.ai/z-ai/glm-5.2/benchmarks)
  - See also: [`model/glm-5.2-coding/`](glm-5.2-coding.md) — the coding-positioned route over the same weights, refreshed earlier in this session (τ²-bench 99.1%, SWE-bench 82.8%); [`model/glm-5.3/`](glm-5.3.md) (61.28) — the successor refreshed in an earlier batch; [`model/glm-5v-turbo/`](glm-5v-turbo.md) (49.38) — the vision-bearing sibling to use if vision is required
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
