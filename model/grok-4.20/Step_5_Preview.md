# Grok 4.20 — findings by Step 5 Preview

- Source: xAI (`xai/grok-4.20`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20 (the **reasoning** variant; BenchLM's canonical slug is `grok-4-20-beta`, and its separate `Grok 4.20 Multi-agent Beta` sibling has no computed score). Scoring **56.41/100, #62 of 1,015** with **25 benchmarks**, it sits between Grok 4.6 (66.69) and Grok 4.5 (63.03) above and Grok 4.3 (52.89) below — so the 4.20 generation was a genuine step, and it is the **only 2M-context model in this research series**.
- **Short description:** The largest context window measured anywhere here — **2M tokens, twice every other model in this corpus** — attached to a mid-tier capability profile. **SWE-bench Verified 76.7% and LiveCodeBench 84.3% (Vals) are solid coding figures, GPQA Diamond 88.6% (Vals) is only 1.4 points under the frontier reference, and a six-benchmark multimodal cluster gives real depth** — set against a **near-total agentic collapse: Terminal-Bench 2.1 44.2% (Vals), MazeBench 0%, Vibe Code Bench 4.06% and DeepSearchQA 62.8%.**
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; the 4.20 generation is xAI's 2026 mid-cycle line. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-4.20`; `grok-4-20-beta` (BenchLM canonical); `grok_grok-4.20-0309-reasoning` (Vals) — note the Vals slug carries a `-0309-reasoning` suffix that is not part of the model name.
- **Context window:** **2,000,000 tokens** (BenchLM) — the largest in this research series by 2x, and this model's single most distinctive property.
- **Modalities:** **text and image in; text out**, with the deepest measured multimodal cluster of any Grok refreshed in this session (six benchmarks, including a medical suite).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

**A provenance finding is recorded prominently, and it is unusual: the majority of this model's rows are attributed to *Meta AI's "Introducing Muse Spark" comparison chart* rather than to any xAI source.** That is materially weaker provenance than a vendor system card, and it means most of the non-Vals figures may describe how a competitor's *comparison* measured this model rather than how xAI reports it. This is the same cross-citation pattern recorded in Claude Opus 4.5 and Claude Sonnet 4.5's reports, and it is flagged at each affected figure rather than implied. 25 benchmarks total.

Agent / tool use — **the model's defining weakness**:

- **DeepSearchQA: 62.8%** (Meta comparison chart); Terminal-Bench 2.0: 47.1% (Meta chart)
- **Gert Labs: 38.36%**; **Terminal-Bench 2.1 (Vals): 44.2%** — 43.8 points under the 88%+ reference
- **MazeBench: 0%** — near-floor
- **Terminal-Bench 4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so two of three frontier references are unmeasured and **no composite agentic figure exists at all**

Reasoning / knowledge — **solid mid-tier, with a real medical cluster**:

- **GPQA Diamond: 88.6%** (Vals) / **GPQA-D 88.5%** (Meta chart) — the two agree, and both are 1.4–1.5 points under the 90%+ reference
- **MMLU-Pro (Vals): 86.3%**; **HLE w/o tools: 31.6%** (Meta chart) — fails the 40%+ reference
- **HealthBench Hard: 20.3%**; **MedXpertQA (Text): 50.2%**; **MedXpertQA (MM): 65.8%** — a genuine medical-depth cluster, one of the few in this research series
- **ARC-AGI-2: 53.3%** (Meta chart); **ARC-AGI-3: 0.1%** [ARC Prize]
- **AA-LCR, CritPt, AA Intelligence Index, AA-Omniscience, MRCR, AIME, FrontierMath: no verified public score found** — so **long-context reasoning, composite depth, reliability and all mathematics are entirely unmeasured**

Coding — **solid mid-frontier, with one startling outlier**:

- **LiveCodeBench (Vals): 84.3%** — the strongest coding figure
- **SWE-bench Verified: 76.7%** (Meta chart) / **SWE-bench (Vals): 72.2%** — a 4.5-point gap, both mid-frontier
- **LiveCodeBench Pro: 74.2%** (Meta chart); **SWE-bench Pro: 51.8%** (Meta chart)
- **Vibe Code Bench: 4.06%** [Vals] — **a 20x drop from its own LiveCodeBench figure on a neighbouring coding benchmark**, the starkest internal contradiction in this batch
- **DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 74%, 70% and 55% references are unmeasured

Multimodal (image-in) — **the second-strongest dimension**:

- **MMMU-Pro: 75.2%** (Meta chart); **MedXpertQA (MM): 65.8%**; **CharXiv: 60.9%**
- **SimpleVQA: 57.4%**; **ERQA: 54.1%**; Design Arena (website): **1,228 Elo**
- **ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 48/100.** Below the methodology's mid band, and the weakest dimension. DeepSearchQA 62.8% is the only respectable agentic figure, and it is cross-cited from a competitor's chart. **Terminal-Bench 2.1 44.2% (Vals) is 43.8 points under the 88%+ reference, Terminal-Bench 2.0 47.1%, Gert Labs 38.36% and MazeBench 0%**, and **Terminal-Bench 4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no figure at all** — so two of three frontier references are unmeasured and no composite exists. The agentic layer is the clearest reason this model ranks #62 rather than higher.
- **Reasoning: 66/100.** Mid-band. **GPQA Diamond 88.6% (Vals) and 88.5% (Meta chart) agree closely and both fall only 1.4–1.5 points under the 90%+ frontier reference — the narrowest miss in this batch. MMLU-Pro 86.3% is solid, ARC-AGI-2 53.3% is respectable, and the medical cluster (MedXpertQA Text 50.2%, MM 65.8%, HealthBench Hard 20.3%) gives genuine domain depth.** Capped by **HLE w/o tools 31.6% (under 40%), ARC-AGI-3 0.1%, and the total absence of AA-LCR, CritPt, the AA Intelligence Index, AA-Omniscience, MRCR, AIME and FrontierMath** — so long-context reasoning, composite depth, reliability and all mathematics are unknown.
- **Context window: 99/100.** **2,000,000 tokens — the largest context window measured anywhere in this research series, twice every other model in this corpus** — and the model's single most distinctive and genuinely valuable property. Held at 99 rather than 100 for one specific reason: **no AA-LCR, MRCR or GraphWalks figure exists at any depth**, so a 2M window with zero measured retrieval evidence cannot be certified as usable. That is the single largest evidential gap in this report, and it matters more here than for any other model because the window is the headline claim.
- **Multimodal: 72/100.** Text + image in with text out, scored above the methodology's 60–70 band on the deepest multimodal cluster of any Grok refreshed in this session: **MMMU-Pro 75.2%, MedXpertQA (MM) 65.8%, CharXiv 60.9%, SimpleVQA 57.4%, ERQA 54.1%**, with a 1,228-Elo Design Arena. Held at 72 rather than higher because **three of six visual benchmarks sit in the 54–61% range**, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured, and there is no video or audio input.
- **Coding: 70/100.** Mid-band, with the batch's starkest internal contradiction. **LiveCodeBench 84.3% (Vals) is strong and SWE-bench Verified 76.7% / 72.2% (Vals) is solid mid-frontier repair, with LiveCodeBench Pro 74.2% and SWE-bench Pro 51.8% corroborating.** But **Vibe Code Bench 4.06% is a 20x drop from the model's own LiveCodeBench figure on a neighbouring benchmark** — recorded as an unresolved data conflict rather than averaged, and the reason coding is not scored higher. Capped further by the absence of DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked**, so this is a placeholder-for-unknown rather than a sibling-based estimate. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary xAI mid-tier SKU with unverified pricing. **Explicitly an estimate, not a measurement** — the mitigating facts are the 2M window (which genuinely changes the economics of tasks that would otherwise need chunking) and the historical xAI mid-tier pricing, but it is not scored at the unverified floor.
- **Overall Score: 71/100.** (48 + 66 + 99 + 72 + 70 + 60) / 5 = 71.0 → **71**. Recommendation: **the largest context window in this research series, attached to a mid-tier model with a broken agentic layer.** The 2M window is genuinely valuable and unmatched here — for whole-repository, whole-codebase and long-document work it removes a constraint every other model imposes. GPQA Diamond 88.6%, LiveCodeBench 84.3%, SWE-bench Verified 76.7% and a six-benchmark multimodal cluster round out a decent package. **But verify the window before you rely on it: no AA-LCR, MRCR or GraphWalks figure exists at any depth, so "2M" is a spec-sheet claim rather than a measured capability.** Three further cautions: **the agentic layer is near-floor** (Terminal-Bench 2.1 44.2%, MazeBench 0%, no composite at all); **Vibe Code Bench 4.06% against LiveCodeBench 84.3% is a 20x internal contradiction** that must be resolved on your own harness before trusting the coding scores; and **most non-Vals figures are cross-cited from Meta's Muse Spark chart rather than from xAI**, which is weak provenance. Prefer Grok 4.5 (63.03) or 4.6 (66.69) unless the 2M window is decisive.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using BenchLM's 25-row catalog as the direct source, cross-checked against its price registry and the individual leaderboards BenchLM cites. **A provenance finding is recorded prominently: the majority of this model's rows are attributed to *Meta AI's "Introducing Muse Spark" comparison chart* rather than to any xAI source — materially weaker provenance than a vendor system card, meaning those figures may describe how a competitor's comparison measured this model rather than how xAI reports it. It is flagged at each affected figure rather than implied, and it is the same cross-citation pattern recorded in the Claude Opus 4.5 and Claude Sonnet 4.5 reports.** Three conflicts are listed side by side rather than averaged: **SWE-bench Verified 76.7% (Meta chart) vs 72.2% (Vals); GPQA Diamond 88.6% (Vals) vs 88.5% (Meta chart), agreeing closely and noted as a confidence signal; and the 20x internal contradiction between LiveCodeBench 84.3% and Vibe Code Bench 4.06%**, which is recorded as unresolved and is the reason the coding score is not higher. The **series-largest context window (2M)** is attributed as the model's decisive property, and the **absence of any long-context retrieval measurement at that depth (no AA-LCR, MRCR or GraphWalks)** is stated as the report's single largest evidential gap rather than glossed. The **Vals slug's `-0309-reasoning` suffix** is recorded as not part of the model name. Missing benchmarks (Terminal-Bench 4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA-LCR, CritPt, AA Intelligence Index, AA-Omniscience, MRCR, AIME, FrontierMath, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok 4.20 benchmark scores (25 rows, 56.41/100, #62/1015; canonical slug `grok-4-20-beta`)](https://benchlm.ai/models/grok-4-20-beta)
  - [Meta AI — Introducing Muse Spark comparison chart (source of most non-Vals rows; weaker provenance)](https://ai.meta.com/blog/introducing-muse-spark-msl/)
  - [Vals AI — Grok 4.20 (0309 reasoning) leaderboard results](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [Vals AI — Terminal-Bench 2.1 leaderboard](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [Vals AI — LiveCodeBench leaderboard](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [Vals AI — SWE-bench leaderboard](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [Vals AI — Vibe Code Bench v1.1 (source of the 4.06%)](https://www.vals.ai/benchmarks/vibe-code)
  - [ARC Prize — official leaderboard data (source of the ARC-AGI-2 and ARC-AGI-3 rows)](https://arcprize.org/leaderboard)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [MazeBench AI leaderboard](https://mazebench.com/leaderboard/ai)
  - [Openrouter — Grok 4.20 benchmarks](https://openrouter.ai/x-ai/grok-4.20/benchmarks)
  - See also: [`model/grok-4.20-multi-agent-beta/`](grok-4.20-multi-agent-beta.md) — the separately-tracked Multi-agent Beta sibling with no computed BenchLM score, **not** the same identity; [`model/grok-4.5/`](grok-4.5.md) (63.03) and [`model/grok-4.6/`](grok-4.6.md) (66.69) — the models this report recommends preferring
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
