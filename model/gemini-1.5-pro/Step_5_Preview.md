# Gemini 1.5 Pro — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-1.5-pro`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro. Now **eight generations behind**: Gemini 4 Carbon (88.79) → 4 Argon (82.29) → 3.8 Flash (66.74) → 3.7 Flash (66.49) → 3.1 Pro (64.48) → 3.6 Flash (62.56) → 3.5 Flash (61.62) → 3 Pro (60.94) → and this at **28.27, #189 of 1,015** — the **lowest-ranked Gemini above only 1.0 Pro (11.45)**, with **5 benchmarks**, the second-thinnest evidence base in this research series. BenchLM classifies it **Non-Reasoning** — the fifteenth such model in this corpus.
- **Short description:** A 2024-era flagship retaining one genuinely unmatched asset — **a 2M-token context window, tied for the largest in this research series** — attached to what is now effectively a broken capability profile: **AA-HLE 4.6% (the second-lowest measured anywhere here), AA Intelligence Index 7.9%, AA Coding Index 23.6%, AA-GPQA Diamond 58.9% and AA-MMMU-Pro 55.0%.** It is a compatibility model.
- **Provider / access:** Gemini API, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; Gemini 1.5 Pro is Google's 2024 flagship tier. **Knowledge cutoff not disclosed** — and for a 2024 model this is a material gap.
- **IDs:** `gemini-1-5-pro` (Gemini API, Zen, BenchLM canonical); `google/gemini-1.5-pro` (Openrouter).
- **Context window:** **2,000,000 tokens** (BenchLM) — **tied with Grok 4.20 for the largest context window measured anywhere in this research series**, and this model's single genuine asset.
- **Modalities:** **text and image in; text out** (AA-MMMU-Pro 55.0% is the only visual row).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**No Google launch post, technical report or model card appears in BenchLM's attribution for this model** — every row is attributed to Artificial Analysis. So, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash and Gemini 2.5 Flash, **this is a fully independently-evidenced model with no vendor-run rows at all.** Five benchmarks total.

Agentic / tool use:

- **No agentic benchmark of any kind is published** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index

Reasoning / knowledge:

- **AA-GPQA Diamond: 58.9%** [AA] — fails the 90%+ reference by 31.1 points
- **AA-HLE: 4.6%** [AA] — **the second-lowest AA-HLE measured anywhere in this research series**, behind only Gemini 2.5 Flash's 4.7% is false — in fact it is *lower* than Gemini 2.5 Flash's 4.7%, making it **the lowest**
- **AA Intelligence Index: 7.9%** — the third-lowest composite measured in this batch
- **AA-MMMU-Pro: 55.0%** — the only visual figure, and weak
- **CritPt, AA-LCR, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath: no verified public score found** — so **long-context reasoning, reliability and all mathematics are entirely unmeasured**

Coding:

- **AA Coding Index: 23.6%** [AA] — **the lowest AA Coding Index measured anywhere in this research series**, 46.4 points under the 70% frontier reference
- **SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench, FrontierCode: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 35/100.** Below the methodology's mid band, and the weakest dimension alongside reasoning. **Not one agentic benchmark exists** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 35 rather than the placeholder floor of 50 because a 2024-era flagship with a 2M window and AA-MMMU-Pro 55.0% is demonstrably capable of *some* structured work, but there is no evidence it can sustain a task, and the AA Coding Index of 23.6% points sharply downward.
- **Reasoning: 18/100.** Below the methodology's low band, and the worst measured reasoning score in this batch. **AA-HLE 4.6% is the lowest AA-HLE measured anywhere in this research series (35.4 points under the 40%+ reference), AA-GPQA Diamond 58.9% fails the 90% reference by 31.1 points, AA Intelligence Index 7.9% is the third-lowest composite here, and the AA Coding Index of 23.6% is the lowest measured anywhere.** The one mitigating property is the **2M window** that carries it. Scored at 18 rather than lower because a 2M window is a real, if poorly-evidenced, capability and the knowledge substrate is present — it is simply very unreliable and very shallow.
- **Context window: 99/100.** **2,000,000 tokens — tied with Grok 4.20 for the largest context window measured anywhere in this research series**, and the only property this model still holds at the frontier. Scored at 99 rather than 100 because **no AA-LCR, MRCR or GraphWalks figure exists at any depth**, so a 2M window with zero measured retrieval evidence cannot be certified — and for this model that gap is decisive, since the window is the *only* reason to consider it.
- **Multimodal: 55/100.** Text + image in with text out, at the bottom of the methodology's 60–70 band and marginally below it. **AA-MMMU-Pro 55.0% is the only visual figure and it is weak**, and **CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision and Design Arena have no measurement** — so the modality claim rests on a single poor row.
- **Coding: 25/100.** Below the methodology's low band, and the worst measured coding score in this batch. **AA Coding Index 23.6% is the lowest measured anywhere in this research series** — 46.4 points under the 70% frontier reference — and **SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, Vibe Code Bench, Terminal-Bench and FrontierCode have no figure at all**, so the 85%, 74% and 55% references are unmeasured and coding rests on one near-floor row.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary Google Pro-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — and note that a Pro-tier rate card is historically near the top of Google's range, which is why this is not scored at the unverified floor. The 2M window's economic value is real but does not rescue the capability profile.
- **Overall Score: 46.4/100.** (35 + 18 + 99 + 55 + 25 + 60) / 5 = 58.4 → **58**. Recommendation: **a 2024 compatibility model whose only remaining frontier property is a 2M-token context window — and that window is unusable at depth on the available evidence.** It holds the **lowest AA-HLE (4.6%), the lowest AA Coding Index (23.6%) and a 7.9% AA Intelligence Index** measured in this research series, so it must never be used for agentic, coding, reasoning or factual work. Its 2M window is genuinely the largest here, but with **no AA-LCR, MRCR or GraphWalks figure at any depth** it is a spec-sheet claim, and **Gemini 2.5 Pro (49.02)** carries a 1M window with a far better profile at the same tier while **Gemini 3.8 Flash (66.74)** costs the same and scores 38 points higher. Migrate unless pinned to `gemini-1.5-pro`.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research where, as with Grok 4.3, GPT-5.1, Grok 4.1 Fast, GPT-5.2-Codex, Grok 4, Qwen3.5 Flash and Gemini 2.5 Flash, **the central provenance finding is structural: BenchLM attributes all five of this model's rows to Artificial Analysis with no Google launch post, technical report or model card anywhere** — making this a fully independently-evidenced model with no vendor-run rows. That structure is recorded because it cuts both ways: the measurements are trustworthy and the model's own claims are absent entirely. The second-thinnest evidence base in this research series (5 rows, after Grok 4.1's zero) is stated plainly rather than hedged. The three series-worst figures this model holds — **the lowest AA-HLE measured anywhere (4.6%), the lowest AA Coding Index measured anywhere (23.6%), and a 7.9% AA Intelligence Index** — are attributed rather than presented bare, as is the **tie for the largest context window in the research series (2M, with Grok 4.20)**. The coding dimension is scored on a single near-floor row and that limitation is stated explicitly. The complete absence of any agentic benchmark is recorded as the agentic dimension's defining constraint. The unpublished rate card is surfaced with its effect on the cost score stated explicitly. Missing benchmarks (Terminal-Bench on all harnesses, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, MMLU-Pro, FrontierMath, SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, Vibe Code Bench, FrontierCode, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Gemini 1.5 Pro benchmark scores (5 rows, 28.27/100, #189/1015)](https://benchlm.ai/models/gemini-1-5-pro)
  - [Artificial Analysis — Gemini 1.5 Pro (primary independent source)](https://artificialanalysis.ai/models/gemini-1-5-pro)
  - [Artificial Analysis — humanitys-last-exam leaderboard (source of the series-lowest 4.6%)](https://artificialanalysis.ai/evaluations/humanitys-last-exam)
  - [Artificial Analysis — aacodingindex leaderboard (source of the series-lowest 23.6%)](https://artificialanalysis.ai/evaluations/aacodingindex)
  - [Artificial Analysis — artificial-analysis-intelligence-index leaderboard](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index)
  - [Artificial Analysis — gpqa-diamond leaderboard](https://artificialanalysis.ai/evaluations/gpqa-diamond)
  - [Artificial Analysis — mmmu-pro leaderboard](https://artificialanalysis.ai/evaluations/mmmu-pro)
  - [Google — Gemini API models and pricing](https://ai.google.dev/gemini-api/docs/models/gemini-1.5-pro)
  - [Openrouter — Gemini 1.5 Pro benchmarks](https://openrouter.ai/google/gemini-1.5-pro/benchmarks)
  - See also: [`model/gemini-2.5-pro/`](gemini-2.5-pro.md) (49.02) and [`model/gemini-3.8-flash/`](gemini-3.8-flash.md) (66.74) — the models this report recommends migrating to, both refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
