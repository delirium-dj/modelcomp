# Grok 4.1 Fast — findings by Space Bunny

- Source: SpaceXAI / xAI (`x-ai/grok-4.1-fast`, `grok-4.1-fast-reasoning`, `grok-4-1-fast-non-reasoning`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (ships in a **Reasoning** and a **Non-reasoning** variant under one name; both are covered here because the catalog slug `grok-4.1-fast` maps to either depending on provider)
- **Short description:** xAI's November 2025 value tier — a very cheap, very long-context Grok offered in thinking and non-thinking flavors, positioned as "xAI's most cost-effective reasoning model, featuring strong tool-calling capabilities and efficient knowledge base synthesis". Its distinguishing feature is a **2M-token context window** at a $0.20/$0.50 price point, which no other model at that price matches. Now **deprecated**: superseded by Grok 4.3, then 4.5, 4.6 and 4.7.
- **Provider / access:** xAI API (Chat Completions), plus mirrors on OpenRouter (`openrouter/x-ai/grok-4.1-fast`), Vercel AI Gateway (`vercel/xai/grok-4.1-fast-reasoning`), Kilo Gateway, Azure AI Foundry, Helicone, Qiniu and Google Agent Platform (the last as a BYOK route). AnyRouter lists it BYOK-only via Google.
- **Release / knowledge:** **2025-11-19** per Artificial Analysis for both variants. Knowledge cutoff not published by xAI for this model.
- **IDs:** `x-ai/grok-4.1-fast`, `x-ai/grok-4.1-fast-reasoning`, `x-ai/grok-4-1-fast-non-reasoning`, `xai/grok-4-1-fast-reasoning`. No Zen Free ID — cost is scored on the verified per-token price. **Note:** this folder's `meta.json` stub carries `contextWindow: "128K total"`, which contradicts the verified 2M below; correcting `meta.json` is the orchestrator's job per `tasks/sync-data.md`.
- **Context window:** **2,000,000 tokens (2M)** per Artificial Analysis (both variants) and LLM Directory (9 provider listings all showing 2,000,000); anyrouter's `grok-4.1-fast-reasoning` page reports **131,072** context with 104,857 max output — an unresolved conflict, most likely a different serving tier or a stale upstream record, since the 2M figure is corroborated across nine independent provider listings and both AA variant pages. Max output is **104,857** per anyrouter.
- **Modalities:** text and **image** in; text out (both variants per Artificial Analysis). Reasoning: **yes** on the Reasoning variant, **no** on the Non-reasoning variant. Tool calling: supported on both.
- **Pricing (as of 2026-10-03):** **$0.20 in / $0.50 out per 1M** (LLM Directory, consistent across OpenRouter, Vercel, Kilo Gateway, Azure AI Foundry and Helicone listings). Artificial Analysis displays $0.00 because no first-party provider currently serves the deprecated model.
- **Architecture:** Proprietary; xAI has not disclosed parameter count, architecture or training details.

### Raw benchmarks found

> Both variants are listed wherever a number is variant-specific. The Intelligence Index
> values are marked **estimated** by Artificial Analysis because the model is deprecated
> and AA continues benchmarking only the default 10k-input-token workload.

Agent / tool use:

- Tool calling: **supported on both variants** (LLM Directory capability flags; anyrouter lists `function-calling`)
- Terminal-Bench 4.0 / Tau3-Banking / GDPval-AA / AutomationBench / Claw-Eval: **no public per-benchmark score published** — Terminal-Bench 4.0 and AutomationBench-AA are components of the AA Intelligence Index v4.3.2, but their individual contributions are not exposed on the model's public page
- xAI's own framing, qualitative: "strong tool-calling capabilities and efficient knowledge base synthesis" (anyrouter, from the xAI model card)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index — **Reasoning variant: 20 (estimated)**, ranked **#223 / 690** among reasoning models, above the class median of 12 (Artificial Analysis, model marked deprecated)
- Artificial Analysis Intelligence Index — **Non-reasoning variant: 11 (estimated)**, ranked **#75 / 300** among non-reasoning models, above the class median of 7
- The ~9-point gap between the two variants on the same index is the cleanest available measurement of this model's thinking mode.
- GPQA Diamond / HLE / CritPt / AA-LCR / MMLU: no verified public score found; all are Index constituents without published per-benchmark values on this model's page

Coding:

- SciCode is a constituent of the AA Intelligence Index v4.3.2 but is not published separately for this model — **no verified public coding score found**
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- **2M-token context window** (Artificial Analysis, both variants; corroborated by nine provider listings in LLM Directory) — the model's single most distinctive verified property
- No MRCR / RULER / GraphWalks retrieval result at any window length found. **Note the honest limit of this evidence:** AA's own component list includes AA-LCR v1.1, but no published retrieval percentage exists for this model, and a 2M *capacity* claim with zero retrieval measurement cannot be treated as verified long-context quality.

Throughput:

- Output tokens per second: **not published / N/A** on Artificial Analysis ("Speed N/A, Output tokens per second Unknown"); anyrouter records no traffic and no health checks for the model

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.
>
> This model exists in two variants under one catalog slug. Scores below describe the
> **Reasoning variant** as the default, with the non-reasoning variant's divergence noted
> where it changes a dimension.

- **Tool use: 55/100.** Tool calling is supported and is the capability xAI leads with in its own copy, which puts this in the methodology's mid band (50–70) — but on vendor framing rather than measurement. Terminal-Bench 4.0, AutomationBench and Tau3 are all Index constituents with no published per-benchmark value for this model, so there is no quantified agentic score at all. Set at the bottom of the band, not above it.
- **Reasoning: 58/100.** AA Intelligence Index **20 (estimated)** for the Reasoning variant, above the 12 median for reasoning models in its price tier but well inside the methodology's mid band (Index 20–35 → 55–65). The **Non-reasoning variant scores 11** — squarely below that band — which is the honest reason this sits at 58 rather than higher: half of what this catalog entry names has no reasoning at all, and users picking the slug without specifying effort can silently get the 11.
- **Context window: 95/100.** Verified **2M tokens** total sits in the ≥1M = 95–100 band. Not 100: no ≥98% retrieval at 512K+ is published for this model (AA-LCR is an Index constituent with no exposed value), AA's 2M figure is a capacity spec rather than a measured retrieval result, and anyrouter's record conflicts with a 131,072 figure. The max output of 104,857 clears the <64K caveat comfortably.
- **Multimodal: 65/100.** Text + image input with text-only output matches the +image-in = 60–70 band, confirmed identically by Artificial Analysis on both variant pages. No video, PDF or audio path and no non-text output, so the 75+ bands do not apply. (Two Qiniu listings advertise audio/video input; that is not corroborated by AA or xAI and is not counted.)
- **Coding: 45/100.** **No verified public coding benchmark exists for this model** — SciCode, SWE-bench, LiveCodeBench and the Coding Index are all absent or unpublished. Scored as an evidence-floor placeholder anchored to the low Intelligence Index of 20 (reasoning variant), deliberately *below* the methodology's mid band rather than in it, since no coding measurement exists to justify a band placement. This is the weakest dimension and the one a buyer is most likely to be surprised by.
- **Cost efficiency: 99/100.** **$0.20 in / $0.50 out per 1M**, corroborated across five independent provider listings — cheaper than the methodology's ~$0.10/$0.20 ≈ 97–99 band on input and roughly a quarter of the ~$0.60/$2.20 ≈ 92 anchor on output. One point under a flat 100 because the model is deprecated and no first-party provider currently sells it, so the price is historical.
- **Overall Score: 63.6/100.** Mean of (55 + 58 + 95 + 65 + 45) / 5 = 63.6. Best understood historically as a cheap 2M-context knowledge-base workhorse — bulk document ingestion, RAG over very long corpora, and vision classification on a budget — and explicitly *not* as a coding or frontier-reasoning pick, where it has no published evidence at all. For new work the live xAI ladder (Grok 4.5/4.6/4.7 at $2/$6, 500K context) supersedes it on every axis except raw price.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (Artificial Analysis model pages for both variants for the Intelligence Index, modality table, context window and deprecation status; LLM Directory's multi-provider listings for the corroborated 2M window and $0.20/$0.50 price; anyrouter's model record for max output, the conflicting 131K figure and the release date; OpenRouter's model API for the current absence of a live entry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.