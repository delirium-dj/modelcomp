# Grok Build 0.1 — findings by Step 5 Preview

- Source: xAI (`xai/grok-build-0.1`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1. **A negative finding governs this report and is its headline: BenchLM carries a page for this slug but only one benchmark row and no overall score** — its own text reads *"has 1 source-displayable benchmark rows but no public overall score. It remains unranked"*, with Overall Score "Not computed (unranked)" and *"Benchmarks covered: 1 of 744"*. BenchLM classifies it **Non-Reasoning** — the eighteenth such model in this corpus.
- **Short description:** An **unranked model with essentially no public evidence**: one benchmark row (Gert Labs 49.15%), a 256K context window, and nothing else. There is no capability figure to assess, no rate card to verify, and no launch material in any source checked. Its ranking in the repo's queue (Overall 74.5) is therefore a **roster artefact, not a measured figure** — the same situation as Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max and Ling 3.0 Flash VL.
- **Provider / access:** xAI's own API, Cloudflare, Vercel AI Gateway, OpenRouter, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; the "Build" line is xAI's 2026 build/agent-tooling tier, positioned between Grok 4.20 (80.4) and Grok 4.1 Fast (80.3) in the repo queue. **Knowledge cutoff not disclosed.**
- **IDs:** `xai/grok-build-0.1`; `grok-build-0-1` (BenchLM canonical). Note xAI's separately-tracked Voice, Realtime and TTS lines are distinct identities.
- **Context window:** **256,000 tokens** (BenchLM) — a quarter of the current 1M standard, and one of only two verified properties for this model.
- **Modalities:** **not stated in any source checked** — BenchLM's model-details table omits the field entirely, and no visual or multimodal benchmark exists. Treated as unverified rather than assumed.
- **Pricing (as of 2026-11-06):** **not published in any source checked** — BenchLM's row carries no pricing block. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count and compute budget undisclosed. The "Build" tier name implies a build-agent specialisation, which is unverified.

### Raw benchmarks found

**There is one.** Gert Labs **49.15%**, attributed to the Gert Labs rankings — an independent source, and a mid-tier result.

Named as absent rather than substituted — **every** benchmark in this research series:

- **Agentic:** Terminal-Bench (all harnesses), τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, AA AutomationBench, AA ITBench — none measured
- **Reasoning / knowledge:** GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, MATH, FrontierMath, MMLU-Pro — none measured
- **Coding:** SWE-bench (all variants), LiveCodeBench, DeepSWE, AA-SciCode, AA Coding Index, Vibe Code Bench, Terminal-Bench, FrontierCode — none measured
- **Multimodal:** MMMU-Pro, CharXiv, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena — none measured

### Normalized scores (1–100)

> **Methodology note.** With **one** benchmark row — and it a mid-tier agentic result — every quality dimension below is a **placeholder-for-unknown** anchored on the single verified spec (256K context window) and the structural position of a base-tier Grok. This is the joint-weakest evidential basis of any report in this research series, alongside Grok 4.1, and it is scored as such.

- **Tool use: 52/100.** Anchored on the one measured row: **Gert Labs 49.15%** — a mid-tier agentic result, and the only evidence that exists. Held at 52, just above the mid band's floor, because a single benchmark on a single harness cannot establish a level and because the result is genuinely mid rather than poor. Capped by the **total absence of Terminal-Bench, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 50/100.** **Scored at the methodology's neutral floor for "dimension claimed, entirely unmeasured."** Not one reasoning benchmark exists — no GPQA Diamond, HLE, CritPt, AA-LCR, AA Intelligence Index, ARC-AGI, MRCR, AIME, MATH, FrontierMath or MMLU-Pro. Scored at 50 rather than lower because a proprietary xAI base-tier SKU presumably has a reasoning substrate; **not scored above 50 because an unmeasured capability claim must not be scored as though it were demonstrated**, and BenchLM's **Non-Reasoning** classification is the one structural signal pointing downward.
- **Context window: 85/100.** **256,000 tokens** places it in the methodology's 200K–500K band (65–84) at the band's ceiling, scored at 85 — the model's single most valuable verified property, and a full quarter of the current standard. Held at the band's ceiling rather than the ≥1M tier because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published.
- **Multimodal: 50/100.** **Scored at the methodology's neutral floor, because the modality set itself is unverified.** BenchLM's model-details table omits the field entirely, no source states what inputs the model accepts, and no visual or multimodal benchmark exists. Scored at 50 rather than assuming text+image on family grounds — the repo's rule is that an untested capability claim must not be scored as though it were demonstrated, and here even the *claim* is absent.
- **Coding: 50/100.** **Scored at the methodology's neutral floor.** Not one coding benchmark exists — no SWE-bench, LiveCodeBench, DeepSWE, AA Coding Index, AA-SciCode, Vibe Code Bench, Terminal-Bench or FrontierCode. Scored at 50 rather than lower on the inference that a base-tier Grok with a "Build" name has a coding substrate — the tier name implies build-agent work — but it is not scored above 50 because there is nothing to support it.
- **Cost efficiency: 60/100.** **No rate card is published in any source checked** — BenchLM's row carries no pricing block at all, which is weaker evidence than a missing price field on a page that otherwise has one. Scored at 60 on the methodology's ~$3/$15 anchor as a neutral default for a proprietary xAI base-tier SKU with entirely unverified pricing. **Explicitly a placeholder, not an estimate** — the sibling rate cards (Grok 4.5 and 4.6 at $2/$6 per the earlier Grok 4.5 report) are the only directional signal available, and they are the reason this is not scored at the unverified floor.
- **Overall Score: 57/100.** (52 + 50 + 85 + 50 + 50) / 5 = 57.4 → **57**. Recommendation: **do not select this model on the available evidence, and do not treat the queue's 74.5 as a capability figure.** BenchLM leaves it **unranked with 1 of 744 benchmarks**, and that single row is a mid-tier Gert Labs result. The only verified property is a **256K context window** — a genuine asset, but one shared by Grok 4 (51.56), Grok 4.3 (52.89) and Grok 4.20 (56.41), all of which have far better-evidenced profiles at presumably similar prices. **Prefer any of those.** If you specifically need Grok Build 0.1, benchmark it yourself on your own harness first: this report's 61 is a floor on evidence, not a capability judgement, and four of its six dimensions rest on nothing at all.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research that established a **negative finding first and made it the report's frame: BenchLM carries a page for `grok-build-0-1` but only one benchmark row and no overall score** — its own text reads *"has 1 source-displayable benchmark rows but no public overall score. It remains unranked"* and *"Benchmarks covered: 1 of 744"*, with Overall Score "Not computed (unranked)". No Artificial Analysis, Vals AI, Epoch AI or ARC Prize row was found either. The single measured figure — **Gert Labs 49.15%, attributed to the Gert Labs rankings, an independent source** — is the entire capability evidence base. The 256K context window and the Non-Reasoning classification were taken from BenchLM's model-details table; **the modality field is absent from that table and from every source checked, so modality is recorded as unverified rather than assumed on family grounds**, even though the family's other members carry text+image suites. Because only one benchmark exists, every quality dimension is explicitly labelled a placeholder-for-unknown, and the context dimension (the only one resting on a verified spec) is the best-grounded score in the report. **The gap between BenchLM's "unranked" verdict and the repo queue's computed Overall of 74.5 is recorded as a roster artefact rather than resolved in either direction** — the same discrepancy documented in the Grok 4.1, Grok 4.7, Gemini 2.0 Flash, GPT-5.1-Codex-Max, Ling 3.0 Flash VL and DeepSeek V4 Flash reports. The unpublished rate card is surfaced with its effect on the cost score stated as a placeholder. Missing benchmarks (every benchmark measured anywhere in this research series) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — Grok Build 0.1 (1 benchmark row, 0 of 744 with a score, unranked)](https://benchlm.ai/models/grok-build-0-1)
  - [Gert Labs rankings (source of the single 49.15% row)](https://gertlabs.com/rankings)
  - [xAI — API documentation and pricing](https://x.ai/api)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
  - See also: [`model/grok-4/`](grok-4.md) (51.56), [`model/grok-4.3/`](grok-4.3.md) (52.89), [`model/grok-4.20/`](grok-4.20.md) (56.41) — the better-evidenced Groks this report recommends preferring, all refreshed earlier in this session
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
