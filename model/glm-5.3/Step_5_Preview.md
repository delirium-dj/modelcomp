# GLM-5.3 — findings by Step 5 Preview

- Source: Z.AI / Zhipu (`zai-org/GLM-5.3`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3. Z.AI's **flagship open-weight** model — the **highest-ranked GLM in BenchLM's corpus** at **61.28/100, #50 of 1,015** with **63 benchmarks**, ahead of GLM-5.2 (60.23), 5.3-Flash (58.37), 5.1 (56.09), 5 (54.58) and 5-Turbo (53.55).
- **Short description:** A genuinely strong all-rounder with **the deepest evidence base in this batch** and the best reliability profile in it: **AA-Omniscience index 6.0 with a 38.9% hallucination rate — the fifth-lowest measured in this research series** — plus **SWE-bench 95.4% (Vals, the strongest SWE-bench figure in this batch), AA Coding Index 74.8% clearing the 70% frontier reference, AA-GPQA Diamond 91.7%, AA-HLE 42.3%, AA-LCR 79.7%, CritPt 19.1% and Terminal-Bench 2.1 88.2% clearing the 88% reference**. Its weaknesses are narrow: **terminalBench3 28.3%, AA Terminal-Bench 4.0 41.9%, MazeBench 0%, GDP.pdf 11.2% and ProgramBench 19.0%.**
- **Provider / access:** **Open weights on Hugging Face (`zai-org/GLM-5.3`)**, Z.AI's own API, OpenRouter, and OpenCode Zen. Self-hosting available.
- **Release / knowledge:** release date not restated; GLM-5.3 is Z.AI's 2026 flagship line. **Knowledge cutoff not disclosed.**
- **IDs:** `zai-org/GLM-5.3` (Hugging Face); `glm-5-3` (BenchLM canonical); `z-ai/glm-5.3` (Openrouter); `zai_glm-5.3` (Vals).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window at open weights, with **AA-LCR 79.7%** as evidence it is usable at depth.
- **Modalities:** **text and image in; text out** — the multimodal table carries exactly one row (Design Arena 1,289 Elo) and no visual benchmark of any kind, so this is a **text-focused flagship whose visual capability is unproven**.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape**, which for a flagship is the most permissive proposition in this batch.
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

Z.AI's own GLM-5.3 model card is the primary source (so the large majority of rows are **vendor-run**), with Artificial Analysis, Vals AI, ARC-adjacent third parties, Epoch AI, Cognition, Nous Research, Mistral AI, VulcanBench, LlamaIndex, OpenHarmony, Proximal, Gray Swan, Google's Gemini 4 Argon launch chart and Openrouter supplying independent rows. **63 benchmarks total — the deepest evidence base in this batch.**

**Two provenance notes are recorded: (1) three rows — Finch 65.1%, b3 Agent Security 93.0% and Cyber Misuse Refusal 87.0% — are cross-cited from *Mistral AI's* "Mistral Large 4 is now open weight" announcement rather than from Z.AI, which is weaker provenance; (2) the Gray Swan IPI row (31.5%) is attributed to *Google's Gemini 4 Argon launch chart*, also a competitor's document.** Both are flagged at the affected figures rather than implied.

Agent / tool use — **strong, with the best composite in this batch**:

- **Terminal-Bench 2.1: 88.2%** (vendor) — **clears the 88%+ frontier reference**, the strongest terminal figure in this batch
- **aaTerminalBench21: 83.9%** [AA] — a 4.3-point gap with the vendor run, both strong
- **AA Agentic Index: 53.4%** — **the strongest composite agentic figure measured in this batch**
- **GDPval-AA: 1,769 Elo** (vendor) / **57.5% normalized** [AA] — **the strongest GDPval normalized figure in this batch**
- **AA AutomationBench: 62.2%**; Hermes Bench: **71.8%**; Toolathlon-Verified: **73.0%**; AA Briefcase: **1,503 Elo**
- **b3 Agent Security: 93.0%** and **Cyber Misuse Refusal: 87.0%** (Mistral chart — weaker provenance) — strong safety figures
- **CyberGym: 84.5%** (vendor); **CWE-Bench-AA: 55.8%**; HLE w/ tools: 62.5% (vendor); AA Tau3 Banking: 50.3%; AA ITBench: 46.1%
- Finch: 65.1% (Mistral chart); AutomationBench: 48.2% (vendor); AA-AnalystAgent: 38.8%; Hermes Index: 39.2%; Agents' Last Exam: 28.5%
- **terminalBench3: 28.3%** (vendor) — a 59.9-point drop from its own Terminal-Bench 2.1 figure on the newer harness, the starkest internal contradiction in this batch
- **AA Terminal-Bench 4.0: 41.9%** — also far under the 2.1 figure; **MazeBench: 0%**; GDP.pdf: 11.2%; ExploitGym: 15.0%; AA EnterpriseOps-Gym: 36.4%; AA Cyber Index: 36.4%; DeepsecBench-AA: 24.3%; CyberGym-E2E-AA: 29.0%
- **OSWorld, MCP-Atlas, BrowseComp, ALE, Claw-Eval, JobBench: no verified public score found**

Reasoning / knowledge — **strong, and the best reliability in this batch**:

- **AA-GPQA Diamond: 91.7%** [AA] / **GPQA Diamond (Vals): 88.1%** — clears the 90%+ reference on the AA run
- **AA-HLE: 42.3%** [AA] — **clears the 40%+ frontier reference**
- **AA-Omniscience: index 6.0, accuracy 32.3%, hallucination rate 38.9%** — a **positive index**, meaning more correct than incorrect answers, on the **fifth-lowest hallucination rate measured in this research series**
- **CritPt: 19.1%**; **AA-LCR: 79.7%**; MLCR-AA: 17.2%
- AA Intelligence Index: **31.6%** — the strongest composite in this batch
- MMLU-Pro (Vals): **86.8%**
- **FrontierMath v2 Tiers 1–3: 68.8%; Tier 4: 29.3%** [Epoch] — a solid Tier 4 figure, well above the near-floor results common in this research series
- Gray Swan IPI (15 attempts): 31.5% (Google chart — weaker provenance)
- **ARC-AGI, MRCR, AIME, HMMT: no verified public score found**

Coding — **strong, and the best-evidenced dimension here**:

- **SWE-bench (Vals): 95.4%** — **the strongest SWE-bench figure measured in this batch**
- **AA Coding Index: 74.8%** — **clears the 70%+ frontier reference**, the strongest coding index in this batch
- **AA-SciCode: 59.0%** — **clears the 55%+ reference**
- **FrontierSWE: 78.1%** (vendor); **VulcanBench v3: 78.3%**; **LiveCodeBench (Vals): 80.5%**
- **DeepSWE: 66.9%** — 7.1 points under the 74% reference; **NL2Repo: 58%**; OpenHarmony Bench: 60.8%; sweMarathon: 42.5%; PostTrain Bench: 39.8%
- **FrontierSWE v2: 30.2%**; **ProgramBench: 19.0%**; Bug Hunt Bench: 19.0 fixes
- **SWE-bench Verified, SWE-bench Pro, Vibe Code Bench, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,289 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 76/100.** Above the methodology's mid band and the strongest dimension. **Terminal-Bench 2.1 88.2% (vendor) / 83.9% [AA] clears the reference, AA Agentic Index 53.4% is the strongest composite in this batch, GDPval-AA 1,769 Elo / 57.5% normalized is the strongest GDPval figure here, and AA AutomationBench 62.2%, Toolathlon-Verified 73.0%, Hermes Bench 71.8% and CyberGym 84.5% corroborate a genuinely broad agentic base.** Capped by **the 59.9-point internal drop from Terminal-Bench 2.1 88.2% to terminalBench3 28.3%**, **AA Terminal-Bench 4.0 41.9%, MazeBench 0%, GDP.pdf 11.2%**, and the absence of OSWorld, MCP-Atlas, BrowseComp, ALE, Claw-Eval and JobBench — so the newest harnesses still defeat it.
- **Reasoning: 78/100.** Above the methodology's mid band. **AA-GPQA Diamond 91.7% clears the 90%+ reference, AA-HLE 42.3% clears the 40%+ reference, AA Intelligence Index 31.6% is the strongest composite in this batch, CritPt 19.1% is solid, and FrontierMath Tier 4 29.3% is well above the near-floor results common here.** The standout is reliability: **AA-Omniscience index 6.0 (positive) with a 38.9% hallucination rate — the fifth-lowest measured in this research series** — making it unusually trustworthy for retrieval-heavy factual work. Capped by **MLCR-AA 17.2%, the Vals GPQA Diamond at 88.1% (under 90%), and the missing ARC-AGI, MRCR and AIME.**
- **Context window: 97/100.** **1M tokens** at open weights — a full frontier window with the most permissive access in this batch. **AA-LCR 79.7%** is strong evidence the window is usable at depth. Held just under 100 because no MRCR or GraphWalks retrieval figure exists and no max-output limit is published.
- **Multimodal: 55/100.** **Text and image in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,289 Elo and **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-focused flagship with an unproven visual side, which is factually correct — note this is a real gap relative to Z.AI's own GLM-5V-Turbo (49.38), which presumably carries the vision stack.
- **Coding: 82/100.** Above the methodology's mid band and a genuinely strong dimension. **SWE-bench 95.4% (Vals) is the strongest SWE-bench figure in this batch, AA Coding Index 74.8% clears the 70%+ frontier reference as the batch's strongest coding index, AA-SciCode 59.0% clears the 55% reference, and FrontierSWE 78.1%, VulcanBench v3 78.3% and LiveCodeBench 80.5% all support.** Capped by **DeepSWE 66.9% (7.1 under the 74% reference), FrontierSWE v2 30.2%, ProgramBench 19.0%, Bug Hunt Bench 19.0, and the absence of vendor SWE-bench Verified, SWE-bench Pro, Vibe Code Bench and FrontierCode.**
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable, at flagship capability** — the most permissive proposition in this batch, and a category above every proprietary flagship measured here. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 78/100.** (76 + 78 + 97 + 55 + 82) / 5 = 77.6 → **78**. Recommendation: **the strongest open-weight model in this batch and one of the best in this research series.** SWE-bench 95.4%, AA Coding Index 74.8%, AA Agentic Index 53.4%, GDPval-AA 57.5% normalized, AA-HLE 42.3%, AA-GPQA Diamond 91.7% and a 1M window at open weights is a genuinely rare package — and the reliability profile (**AA-Omniscience index 6.0, 38.9% hallucination, the fifth-lowest measured here**) makes it unusually trustworthy for retrieval-heavy factual and agentic work. Three cautions: **its newest-harness agentic results collapse** (terminalBench3 28.3% against Terminal-Bench 2.1 88.2%, AA Terminal-Bench 4.0 41.9%), so the 2.1 figure should not be extrapolated; **it is effectively a text-only flagship** — no visual benchmark exists, so use GLM-5V-Turbo if vision is required; and **three of its rows are cross-cited from Mistral's announcement and one from Google's Gemini 4 Argon chart**, which is weaker provenance. On price-per-capability it is the strongest case in this batch.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Z.AI's own GLM-5.3 model card as the primary source (so the large majority of rows are vendor-run and labelled as such), cross-checked against **BenchLM's 63-row catalog — the deepest evidence base in this batch** — which attributes the independent numbers to Artificial Analysis, Vals AI, Epoch AI, Cognition, Nous Research, VulcanBench, LlamaIndex, OpenHarmony, Proximal and Openrouter. **Two provenance findings are recorded prominently: (1) three rows — Finch 65.1%, b3 Agent Security 93.0% and Cyber Misuse Refusal 87.0% — are cross-cited from *Mistral AI's* "Mistral Large 4 is now open weight" announcement rather than from Z.AI; (2) the Gray Swan IPI row (31.5%) is attributed to *Google's Gemini 4 Argon launch chart*. Both are competitor documents, which is weaker provenance than a Z.AI system card, and both are flagged at the affected figures rather than implied** — the same cross-citation pattern recorded in the Claude Opus 4.5, Claude Sonnet 4.5, Grok 4.20 and Gemma 4 31B reports. The report's central analytical finding is the **59.9-point internal drop from Terminal-Bench 2.1 88.2% to terminalBench3 28.3%** — the starkest internal contradiction in this batch — recorded explicitly and carried into the recommendation as the reason the 2.1 figure must not be extrapolated. The **fifth-lowest hallucination rate in this research series (38.9%, on a positive Omniscience index of 6.0)** and the **strongest SWE-bench (95.4%) and AA Coding Index (74.8%) figures in this batch** are attributed rather than presented bare. Conflicts are listed side by side — Terminal-Bench 2.1 88.2% (vendor) / 83.9% [AA]; GPQA Diamond 91.7% [AA] / 88.1% [Vals] — rather than averaged, with the independent run preferred on each. The multimodal dimension is scored as unmeasured rather than assumed from the family. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (OSWorld, MCP-Atlas, BrowseComp, ALE, Claw-Eval, JobBench, ARC-AGI, MRCR, AIME, HMMT, SWE-bench Verified, SWE-bench Pro, Vibe Code Bench, FrontierCode, MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — zai-org/GLM-5.3 model card (primary source, 50+ vendor rows)](https://huggingface.co/zai-org/GLM-5.3)
  - [BenchLM — GLM-5.3 benchmark scores (63 rows, 61.28/100, #50/1015)](https://benchlm.ai/models/glm-5-3)
  - [Artificial Analysis — GLM-5.3](https://artificialanalysis.ai/models/glm-5-3)
  - [Vals AI — GLM-5.3 leaderboard results](https://www.vals.ai/models/zai_glm-5.3)
  - [Artificial Analysis — aaagenticindex leaderboard (source of the batch-strongest 53.4%)](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — terminalbench-v2-1 leaderboard](https://artificialanalysis.ai/evaluations/terminalbench-v2-1)
  - [Artificial Analysis — terminalbench-v4-0 leaderboard](https://artificialanalysis.ai/evaluations/terminalbench-v4-0)
  - [Artificial Analysis — omniscience leaderboard (source of the 38.9%)](https://artificialanalysis.ai/evaluations/omniscience)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [VulcanBench Eval Suite 3 leaderboard](https://vulcanbench.com/leaderboard.html)
  - [Proximal — FrontierSWE v2 leaderboard](https://www.frontierswe.com/)
  - [OpenHarmony Bench official leaderboard](https://bench.matrix.openharmony.cn/)
  - [Nous Research — Hermes Index leaderboard](https://portal.nousresearch.com/bench)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Mistral AI — Mistral Large 4 is now open weight (source of the three cross-cited safety/Finch rows; weaker provenance)](https://mistral.ai/news/mistral-large-4-oss/)
  - [Google — Gemini 4 Argon launch chart (source of the cross-cited Gray Swan IPI row; weaker provenance)](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/)
  - [Openrouter — GLM-5.3 benchmarks](https://openrouter.ai/z-ai/glm-5.3/benchmarks)
  - See also: [`model/glm-5.3-flash/`](glm-5.3-flash.md) (58.37) — the Flash sibling refreshed earlier in this session; [`model/glm-5v-turbo/`](glm-5v-turbo.md) (49.38) — the vision-bearing sibling to use if vision is required
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
