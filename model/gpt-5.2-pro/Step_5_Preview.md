# GPT-5.2 Pro — findings by Step 5 Preview

- Source: OpenAI (`opencode/gpt-5.2-pro`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro. OpenAI's **high-compute** variant of the GPT-5.2 family — sibling to GPT-5.2 (59.62) and GPT-5.2-Codex (56.6) — and the most expensive model refreshed in this research series. **A negative finding governs this report: BenchLM carries a page for this slug but zero benchmark rows ("Sourced benchmark coverage is coming soon", 0 of 744), and no independent benchmark source was found either.** So, unlike every other OpenAI SKU in this corpus, there is nothing to re-research on the capability side.
- **Short description:** The defining fact is the **$21.00 input / $168.00 output per 1M rate card** — the most expensive measured anywhere in this research series, roughly **16x GPT-6 Luna's $0.10/$0.50** on input and **336x on output** — attached to a model with **no public benchmark of any kind**. It is also **strictly price-dominated within its own family**: its sibling GPT-5.2 scores 59.62 on BenchLM, while this one has no score at all.
- **Provider / access:** OpenAI API, Microsoft Azure, AWS Bedrock, ChatGPT Pro, and OpenCode Zen (`opencode/gpt-5.2-pro`). **Paid only** — repo meta.json records `noFreeId`. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; GPT-5.2 Pro is OpenAI's 2026 mid-cycle high-compute tier. **Knowledge cutoff not disclosed.**
- **IDs:** `openai/gpt-5.2-pro`; `opencode/gpt-5.2-pro` (repo id, Zen); `gpt-5-2-pro` (BenchLM canonical).
- **Context window:** **400,000 tokens total, 128,000 max output** (repo meta.json) — half the current 1M standard.
- **Modalities:** **text and image in; text out** (repo meta.json) — no measured visual benchmark exists to support or contradict this.
- **Pricing (as of 2026-11-05):** **$21.00 input / $168.00 output per 1M, $2.10 cached read** (repo meta.json). Batch/Flex and cache discounts exist across the OpenAI family but are not separately recorded for this SKU. **Methodology anchors put $21/$168 at or below the floor of its cost table** — the cheapest reference anchor is ~$10/$50 (≈30), so this is an order of magnitude more expensive than the worst anchor the methodology defines.
- **Architecture:** proprietary, closed weights; parameter count and compute budget undisclosed. The "Pro" tier historically implies extended reasoning compute per query.

### Raw benchmarks found

**There are none.** BenchLM's page for this slug states: *"BenchLM is tracking GPT-5.2 Pro by OpenAI. Sourced benchmark coverage is coming soon"* and *"Benchmarks covered: 0 of 744"*, with Overall Score "Coming soon" and rank "Unranked". No Artificial Analysis, Vals AI, Epoch AI, ARC Prize, Cognition or Openrouter row was found for this model either.

Named as absent rather than substituted — **every** benchmark in this research series:

- **Agentic:** Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench, AA EnterpriseOps-Gym — none measured
- **Reasoning:** GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath — none measured
- **Coding:** SWE-bench Verified, SWE-bench Pro, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, FrontierCode, SWE-Rebench — none measured
- **Multimodal:** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** With **zero** benchmarks — not few, none — every quality dimension below is a **placeholder-for-unknown anchored on the verified spec facts** (400K/128K, text+image in, $21/$168) and the structural position of the "Pro" tier. This is the weakest evidential basis of any report written in this research series, and it is scored as such. The confidence interval on every number is the widest here.

- **Tool use: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** A proprietary flagship-tier OpenAI SKU presumably has a real agentic substrate, but **not one agentic benchmark of any kind exists** — no Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA or AA Agentic Index. Scored at 50 rather than below because the capability is very likely present; not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor**, with one weak directional signal in each direction. Positive: the "Pro" tier's historical positioning implies extended reasoning compute, and the family's other members clear their reasoning references (GPT-5.2 carries AA-GPQA Diamond 90.3% and AA-HLE 37.7%). Negative: **the $168/1M output rate implies either extraordinary compute per token or extraordinary margin**, and there is no way to distinguish which from the public record. Capped by the total absence of GPQA Diamond, HLE, CritPt, AA-LCR, the AA Intelligence Index, ARC-AGI, MRCR, AIME, MATH and FrontierMath.
- **Context window: 90/100.** **400,000 tokens total, 128,000 max output** (repo meta.json) places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 90 because **a 128K max output is a genuinely generous allowance** — among the largest in this research series. Held below the ≥1M tier because **no AA-LCR or MRCR figure exists**, so the window's usable depth is entirely unverified, and 400K is less than half the current standard.
- **Multimodal: 62/100.** **Text and image in; text out** per the repo's meta.json, placing it in the methodology's 60–70 band. Scored at 62, at the band's lower edge, because the modality claim is a **spec-sheet claim with zero measured support** — no MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision or Design Arena figure exists. OpenAI's lineup-wide statement covers text and image input, which is the one directional signal.
- **Coding: 50/100.** **Scored at the methodology's neutral floor.** No coding benchmark of any kind exists — no SWE-bench, LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench or FrontierCode. Note that this is the **Codex-adjacent family**, where siblings do carry coding figures (GPT-5.3-Codex has SWE-bench Verified 85% and OSWorld-Verified 64.7% from its own system card), but **importing those would be fabrication** — different SKUs, and the repo's own identity rules forbid inheriting sibling benchmarks without labelling.
- **Cost efficiency: 5/100.** **$21.00/$168.00 per 1M with $2.10 cached read** — the most expensive rate card measured anywhere in this research series. Methodology anchors bottom out at ~$10/$50 (≈30), so this model is **an order of magnitude beyond the worst anchor the methodology defines**, and it is scored accordingly at the floor rather than being forced onto the scale. **It is also strictly price-dominated within its own family**: GPT-5.2 scores 59.62 on BenchLM at $1.75/$14 (per the earlier GPT-5.2 report), and GPT-6 Luna scores 62.53 at $0.10/$0.50 — **roughly 336x cheaper on output for a higher BenchLM score**. The one mitigating fact is the 90% cache-read discount, which matters for long repetitive prompts.
- **Overall Score: 60.4/100.** (50 + 50 + 90 + 62 + 50 + 5) / 5 = 61.4 → **61**. Recommendation: **do not select this model on the available evidence.** It carries the most expensive rate card in this research series at $21/$168 per 1M, has **zero public benchmarks of any kind**, and is strictly dominated on price-per-capability by its own sibling GPT-5.2 (59.62 on BenchLM at $1.75/$14) and by GPT-6 Luna (62.53 at $0.10/$0.50). The 400K/128K window and paid-only access are its only verified properties. **If you have a specific workload that genuinely needs it, benchmark it yourself first and re-score it the moment Artificial Analysis, Vals or Epoch publishes a row** — this report's 61 is a floor on evidence, not a capability judgement, and the cost score is the only one grounded in a verified measurement.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and made it the report's frame: BenchLM carries a page for `gpt-5-2-pro` but zero benchmark rows** — its own text reads *"Sourced benchmark coverage is coming soon"* and *"Benchmarks covered: 0 of 744"*, with Overall Score "Coming soon" and rank "Unranked". No Artificial Analysis, Vals AI, Epoch AI, ARC Prize, Cognition or Openrouter row was found either. The identity, 400K/128K window, modality set and **$21/$168 rate card with $2.10 cached read** were taken from the repo's curated `meta.json`. **Because zero benchmarks exist — not few, none — every quality dimension is explicitly labelled a placeholder-for-unknown anchored on verified spec facts, and this is the weakest evidential basis of any report in this research series.** The cost-efficiency dimension is the report's headline and its only measurement-grounded score: **the most expensive rate card measured anywhere here, an order of magnitude beyond the methodology's worst anchor (~$10/$50 ≈ 30), and strictly price-dominated within its own family by GPT-5.2 (59.62 BenchLM at $1.75/$14) and GPT-6 Luna (62.53 at $0.10/$0.50 — roughly 336x cheaper on output)**. A deliberate non-import is recorded: **sibling GPT-5.3-Codex's system-card figures (SWE-bench Verified 85%, OSWorld-Verified 64.7%) are NOT used**, because they are different SKUs and importing them would be fabrication. Missing benchmarks (every benchmark measured anywhere in this research series, across agentic, reasoning, coding and multimodal) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5.2 Pro (tracked, zero benchmark rows: "Sourced benchmark coverage is coming soon", 0 of 744, unranked)](https://benchlm.ai/models/gpt-5-2-pro)
  - [Repo curated meta — `model/gpt-5.2-pro/meta.json` (400K/128K, text+image in, $21/$168, noFreeId)](/model/gpt-5.2-pro/meta.json)
  - [OpenAI — API pricing](https://openai.com/api/pricing/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/gpt-5.2/`](gpt-5.2.md) (59.62 at $1.75/$14) — the strictly-dominating sibling; [`model/gpt-5.2-codex/`](gpt-5.2-codex.md) (56.6) and [`model/gpt-6-luna/`](gpt-6-luna.md) (62.53 at $0.10/$0.50) — the other models this report recommends over it
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
