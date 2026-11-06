# Hy3 — findings by Step 5 Preview

- Source: Tencent (`tencent/hy3`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (the **instruct** variant). Tencent's Hy-family model, sibling to `hy3-preview` (52.96) and predecessor to `hy4` (unranked, refreshed earlier in this session) and `hy4-preview` (61.57). **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only 10 source-displayable benchmark rows with no overall score** — its own text reads *"has 10 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)". So the repo queue's Overall of 72.3 is a **roster artefact, not a measured figure** — the same discrepancy documented across the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash and Hy4 reports.
- **Short description:** An unranked **open-weight** 256K-context model with **10 rows, every one of them attributed to Artificial Analysis** — a fully independently-evidenced model with no vendor-run rows at all, which is the cleanest provenance in this batch. Its profile is mid-tier and internally consistent: **AA-GPQA Diamond 89.7%, AA-LCR 79.0%, AA Coding Index 58.8%, AA Agentic Index 25.6%, GDPval-AA 28.2% normalized** — against **CritPt 4.9% and AA-HLE 33.5%**.
- **Provider / access:** **Open weight** (BenchLM records Source Type "Open Weight"), OpenRouter (`tencent/hy3`), and self-hosting. No Zen free tier is recorded.
- **Release / knowledge:** release date not restated; Hy3 is Tencent's 2025/2026 line, positioned between Hy3-preview (52.96) and Hy4 in the repo queue. **Knowledge cutoff not disclosed.**
- **IDs:** `tencent/hy3` (BenchLM canonical, Openrouter); `hy3` (repo). Note the separately-tracked `Hy3 Preview` sibling is a distinct identity.
- **Context window:** **256,000 tokens** — a quarter of the current 1M standard, though **AA-LCR is 79.0%**, so the window is measurably usable.
- **Modalities:** **text in; text out** — the multimodal table carries exactly one Design Arena row (1,180 Elo) and no visual benchmark, so this is a text-focused model whose visual capability is unproven.
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified; **open weights provide the self-hosting escape.**
- **Architecture:** **open weight**; parameter count undisclosed.

### Raw benchmarks found

**A provenance note is recorded: every one of this model's 10 rows is attributed to Artificial Analysis** — no Tencent launch post, model card or benchmark appendix appears in the attribution. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash, GPT-5.1-Codex, Gemini 2.5 Flash, Gemini 2.0 Flash and Gemini 1.5 Pro, **this is a fully independently-evidenced model with no vendor-run rows at all** — which is the cleanest provenance in this batch, but which also means the model's own claims are absent entirely. 10 benchmarks total.

Agentic / tool use — **mid**:

- **GDPval-AA: 1,136 Elo / 28.2% normalized** [AA]; **AA Agentic Index: 25.6%** [AA]
- **Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge:

- **AA-GPQA Diamond: 89.7%** [AA] — **0.3 points under the 90%+ frontier reference, the narrowest miss measured in this batch**
- **AA-HLE: 33.5%** [AA] — 6.5 points under the 40%+ frontier reference
- **AA-LCR: 79.0%** [AA] — solid long-context reasoning; **CritPt: 4.9%** [AA] — near-floor
- **ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **composite depth, reliability and three of five reasoning references are entirely unmeasured**

Coding — **mid**:

- **AA Coding Index: 58.8%** [AA] — 11.2 points under the 70% frontier reference
- **AA-SciCode: 48.6%** [AA] — 6.4 points under the 55%+ reference
- **SWE-bench (all variants), LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found** — so the 85%, 74% and 55% references are all unmeasured

Multimodal (image-in) — **effectively unmeasured**:

- Design Arena (website): **1,180 Elo** — the only row
- **MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 50/100.** At the methodology's mid band's floor, and the weakest dimension. **GDPval-AA 28.2% normalized / 1,136 Elo and AA Agentic Index 25.6%** are the only two agentic figures and both are mid-to-weak, and **Terminal-Bench on every harness, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench and AA AutomationBench have no figure at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 72/100.** Mid-band and the strongest dimension. **AA-GPQA Diamond 89.7% misses the 90%+ frontier reference by 0.3 points — the narrowest miss measured in this batch — AA-HLE 33.5% is 6.5 under the 40% reference, and AA-LCR 79.0% is solid long-context reasoning.** Capped by **CritPt 4.9% (near-floor), and the missing ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro and FrontierMath** — so composite depth, reliability and three of five reasoning references are entirely unknown.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 because **AA-LCR is 79.0%** — solid long-context reasoning, so the window is measurably usable. Held below the ≥1M tier because it is a quarter of the current standard, no MRCR or GraphWalks run exists, and no max-output limit is published.
- **Multimodal: 55/100.** **Text in; text out**, scored at the bottom of the methodology's 60–70 band and marginally below it, because the entire measured visual evidence is one Design Arena result of 1,180 Elo and **MMLU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision have no figure whatsoever**. Scored as a text-focused model with an unproven visual side.
- **Coding: 58/100.** Below the methodology's mid band. **AA Coding Index 58.8% is 11.2 points under the 70% frontier reference and AA-SciCode 48.6% is 6.4 points under the 55% reference** — both shortfalls, and the only two coding rows that exist. **SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74% and 55% references cannot be checked.
- **Cost efficiency: 88/100.** **No rate card is published in any source checked**, so the score rests on access rather than a price: **open weights, self-hostable** — a genuinely permissive proposition, and the model's strongest structural property. Scored at 88 on that basis. **Explicitly an access-based inference, not a price measurement** — held below 92 because no hosted rate is published to verify and no free tier is recorded.
- **Overall Score: 64/100.** (50 + 72 + 85 + 55 + 58) / 5 = 64 → **64**. Recommendation: **an unranked open-weight model whose queue figure of 72.3 is a roster artefact.** BenchLM leaves it unranked with 10 of 744 benchmarks — but those 10 rows are the cleanest provenance in this batch, every one independently measured by Artificial Analysis with no vendor claim anywhere. What they show is a consistent mid-tier model: **AA-GPQA Diamond 89.7% (0.3 under the frontier reference), AA-LCR 79.0%, AA Coding Index 58.8%** at **open weights** and a 256K window. Its limits are equally clear: **CritPt 4.9%, GDPval-AA 28.2% normalized, and an essentially absent agentic and coding evidence base**. Benchmark it yourself on your own harness — specifically SWE-bench Verified, Terminal-Bench and a general coding index — before relying on it, and note that **Hy4 (unranked) and Hy4-preview (61.57)** are the newer generations.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research whose frame is an **evidence-status finding: BenchLM carries a page for `hy3` with 10 source-displayable benchmark rows but no overall score** — its own text reads *"has 10 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 10 of 744"*, with Overall Score "Not computed (unranked)". **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 72.3 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL, DeepSeek V4 Flash, Grok Build 0.1, MAI-Code-1.1-Flash and Hy4 reports. **A provenance finding is recorded and is the report's redeeming structural fact: all 10 rows are attributed to Artificial Analysis with no Tencent launch post, model card or benchmark appendix anywhere** — a fully independently-evidenced model with no vendor-run rows, which is the cleanest provenance in this batch and cuts both ways (trustworthy measurements, absent vendor claims). The **narrowest reference miss in this batch (AA-GPQA Diamond 89.7% vs the 90%+ reference, 0.3 points)** is attributed as such, as is the near-floor **CritPt (4.9%)**. The unpublished rate card is surfaced with its effect on the cost score stated as an access-based inference. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, AA AutomationBench, AA ITBench, ARC-AGI, MRCR, AA Intelligence Index, AA-Omniscience, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench, Terminal-Bench, FrontierCode, and every visual benchmark except Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Hy3 (10 benchmark rows, no overall score, unranked; all rows attributed to Artificial Analysis)](https://benchlm.ai/models/hy3)
  - [Artificial Analysis — Hy3 (primary independent source)](https://artificialanalysis.ai/models/hy3)
  - [Artificial Analysis — gpqa-diamond leaderboard (source of the 89.7%)](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — aaagenticindex leaderboard](https://artificialanalysis.ai/evaluations/aaagenticindex)
  - [Artificial Analysis — gdpval-aa leaderboard](https://artificialanalysis.ai/evaluations/gdpval-aa)
  - [Artificial Analysis — lcr leaderboard](https://artificialanalysis.ai/evaluations/lcr)
  - [Artificial Analysis — critpt leaderboard](https://artificialanalysis.ai/evaluations/critpt)
  - [Artificial Analysis — aacodingindex leaderboard](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — scicode leaderboard](https://artificialanalysis.ai/evaluations/scicode)
  - [Artificial Analysis — humanitys-last-exam leaderboard](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Openrouter — Hy3 benchmarks](https://openrouter.ai/tencent/hy3/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/hy3-preview/`](hy3-preview.md) (52.96) — the separately-tracked Preview sibling, **not** the same identity; [`model/hy4/`](hy4.md) and [`model/hy4-preview/`](hy4-preview.md) (61.57) — the newer generations
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
