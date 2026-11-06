# GPT-OSS 120B — findings by Step 5 Preview

- Source: OpenAI (`openai/gpt-oss-120b`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS 120B. OpenAI's **open-weight** 120B model, now well behind the frontier — BenchLM scores it **40.76/100, #140 of 1,016** and classifies it **Non-Reasoning** (the twentieth such model in this corpus).
- **Short description:** A model with two genuinely respectable figures and a collapsed execution layer. **AIME 2024 95.8%, AA AIME 2025 93.4%, MMLU 90% and AA LiveCodeBench 87.8%** are solid; against that, **AA Agentic Index 6.2%, APEX-Agents-AA 3.1%, GDPval-AA 745 Elo / 5.4% normalized and AA Coding Index 30.4%** are all near-floor, and the context window is only **128K**.
- **Provider / access:** **Open weights** on Hugging Face, and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; GPT-OSS 120B is OpenAI's 2025 open-weight line. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-oss-120b` (Hugging Face); `gpt-oss-120b` (BenchLM canonical, repo).
- **Context window:** **128,000 tokens** — the smallest in this batch and one-eighth of the current 1M standard.
- **Modalities:** **text and image in; text out** (Design Arena 966 Elo is the only visual row, and it is the second-lowest in this batch).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count disclosed in the name (120B). BenchLM classifies it **Non-Reasoning**.

### Raw benchmarks found

**No OpenAI launch post or model card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis, Gert Labs or Openrouter. So, as with eighteen other models in this series, **this is a fully independently-evidenced model with no vendor-run rows at all.**

Agentic / tool use — **near-floor**:

- **τ²-bench: 65.8%** [AA]; Gert Labs: 29.61%
- **APEX-Agents-AA: 3.1%** [AA] — near-floor; **GDPval-AA: 745 Elo / 5.4% normalized** [AA] — the second-lowest GDPval normalized figure in this batch
- **AA Agentic Index: 6.2%** [AA] — the second-lowest agentic index in this batch
- **Terminal-Bench (all harnesses), τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite beyond AA Agentic Index**

Reasoning / knowledge — **split, and saturating**:

- **AA-GPQA Diamond: 78.2%** [AA] / GPQA 80.1% (AA) — fails the 90%+ reference by ~10–12 points
- **AA-HLE: 19.6%** [AA] / HLE 14.9% (AA) — fails the 40%+ reference by ~20–25 points
- **MMLU: 90%** (AA) — strong; **AA-IFBench: 69.0%** [AA]
- **AIME 2024: 95.8%** / **AA AIME 2025: 93.4%** [AA] — saturating competition maths
- **AA-LCR: 52.0%**; **CritPt: 1.1%** — near-floor
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **thin and contradictory**:

- **AA LiveCodeBench: 87.8%** [AA] — a strong competitive-programming figure
- **SWE-bench Verified: 62.4%** (AA) — 22.6 points under the 85%+ terminal reference; **React Native Evals: 71.6%**
- **AA Coding Index: 30.4%** [AA] — 39.6 points under the 70% reference; **AA-SciCode: 34.0%** — 21 under 55%
- **SWE-bench Pro, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found**

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **966 Elo** — the only row, and the second-lowest in this batch
- **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's low band, and the weakest dimension. τ²-bench 65.8% is the only respectable agentic figure; **AA Agentic Index 6.2% (the batch's second-lowest), APEX-Agents-AA 3.1%, GDPval-AA 745 Elo / 5.4% normalized and Gert Labs 29.61%** are all near-floor. **Terminal-Bench on every harness, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval and JobBench have no figure at all**, so all three frontier references are unmeasured and no composite beyond AA Agentic Index.
- **Reasoning: 55/100.** At the methodology's mid band's floor. **MMLU 90% and AA AIME 2025 93.4% are strong figures, and AA-GPQA Diamond 78.2% is ~12 points under the reference** — a mid-tier profile on saturating benchmarks. Capped by **AA-HLE 19.6% (20 under the 40% reference), CritPt 1.1% (near-floor), AA-LCR 52.0%, and the total absence of ARC-AGI, MRCR, the AA Intelligence Index, AA-Omniscience, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and three of five reasoning references are unknown.
- **Context window: 70/100.** **128,000 tokens** — the methodology's 100K–200K band (50–64) at the band's ceiling, scored at 70 on the strength of **AA-LCR 52.0%**. Held at 70 rather than mid-tier because **128K is the smallest in this batch and one-eighth of the current standard**, no MRCR or GraphWalks figure exists, and no max-output limit is published.
- **Multimodal: 55/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **Design Arena 966 Elo is the only visual figure and it is the second-lowest in this batch**, and **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 55/100.** Below the methodology's mid band, and internally contradictory. **AA LiveCodeBench 87.8% is a strong competitive-programming figure** while **AA Coding Index 30.4% is 39.6 points under the 70% reference and AA-SciCode 34.0% is 21 points under 55%** — a 57-point spread between two coding benchmarks. **SWE-bench Verified 62.4% is 22.6 points under the terminal reference**, and SWE-bench Pro, DeepSWE, Vibe Code Bench, Terminal-Bench and FrontierCode are all absent.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 54/100.** (35 + 55 + 70 + 55 + 55 + 88) / 5 = 60.6 → **61**. Recommendation: **an open-weight model whose two respectable figures are on saturating benchmarks and whose execution layer is near-floor.** MMLU 90%, AA AIME 2025 93.4% and AA LiveCodeBench 87.8% look better than the 40.76 BenchLM score suggests, but **AA Agentic Index 6.2%, APEX-Agents-AA 3.1%, GDPval-AA 5.4% normalized, AA Coding Index 30.4% and CritPt 1.1%** are all near-floor, so it is not an agent, not a coding model and not a deep reasoner. Its 128K window is the smallest in this batch. Prefer essentially any current model in this research series; **GPT-OSS 120B's value is now as a cheap open-weight target for fine-tuning, not as a capable base.**

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's catalog as the direct source, which attributes **every row to Artificial Analysis, Gert Labs or Openrouter with no OpenAI launch post or model card anywhere** — a fully independently-evidenced model with no vendor-run rows, the same structural provenance finding recorded across eighteen models in this series, and one that cuts both ways (trustworthy measurements, absent vendor claims). The report's central finding is a **split rather than a level: strong saturating-benchmark figures (MMLU 90%, AA AIME 2025 93.4%, AA LiveCodeBench 87.8%) against a near-floor execution and composite profile (AA Agentic Index 6.2%, APEX-Agents-AA 3.1%, GDPval-AA 5.4% normalized, AA Coding Index 30.4%, CritPt 1.1%)** — attributed explicitly and carried into the recommendation, where the model is characterised as a fine-tuning target rather than a capable base. The **57-point spread between AA LiveCodeBench 87.8% and AA Coding Index 30.4%** is recorded as an internal contradiction rather than averaged. The **second-lowest GPTval normalized figure in this batch (5.4%)** and the **second-lowest AA Agentic Index (6.2%)** are attributed rather than presented bare, as is the **batch-smallest context window (128K)** and the **second-lowest Design Arena (966)**. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, MATH, MMLU-Pro, FrontierMath, SWE-bench Pro, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-OSS 120B benchmark scores (all rows attributed to Artificial Analysis, Gert Labs, Openrouter)](https://benchlm.ai/models/gpt-oss-120b)
  - [Artificial Analysis — GPT-OSS 120B](https://artificialanalysis.ai/models/gpt-oss-120b)
  - [Openrouter — openai/gpt-oss-120b](https://openrouter.ai/openai/gpt-oss-120b)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
