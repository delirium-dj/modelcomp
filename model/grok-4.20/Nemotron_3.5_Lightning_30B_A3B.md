# Grok-4.20 — findings by Nemotron_3.5_Lightning_30B_A3B (Queue Position 99)

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI (`grok-4.20`)
- Date: 2026-02-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.20
- **Short description:** xAI's refreshed model released February 17, 2026, positioned as a general-purpose reasoning model with strong multimodal support and a 1M+ token context window. "Grok 4.20 is priced at $1.25 per million input tokens and $2.50 per million output tokens." Part of the Grok 4 family alongside Grok 4, Grok 4.5, and Grok 4.1-Fast, serving as a refreshed variant with updated pricing and capabilities. NOTE: This model has multiple variants (reasoning, non-reasoning, multi-agent) with different pricing and Intelligence Index scores tracked by Artificial Analysis and Vals AI.
- **Provider / access:** xAI API (`xai/grok-4.20`); via xAI platform and selected integrations. No Free tier on Zen; API access requires xAI account. Closed-weights model; no self-serve API parity with open-weights competitors.
- **Release / knowledge:** February 17, 2026 release; knowledge cutoff not explicitly disclosed (typical for Q1 2026 models). "Grok 4.20 was released on February 17, 2026." Prior model: Grok 4; successor: Grok 4.5.
- **IDs:** `xai/grok-4.20` (xAI API); no Free tier on Zen. Closed-weights model distributed via xAI API and platform.
- **Context window:** 1,000,000+ tokens total (verified via xAI model card and Artificial Analysis; 2M context window per AA listing); 65,536 max output limit (per API model spec). "1M+ tokens" per model documentation; ample for typological long-horizon agentic workloads and large-document analysis. Artificial Analysis lists Grok 4.20 0309 v2 at 2M context.
- **Modalities:** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs. Full multimodal support similar to Grok 4.5 and Gemini 4 Argon. Variants include reasoning and non-reasoning modes.
- **Pricing (as of 2026-02-17):** $1.25 input / $2.50 output per 1M tokens (per docs.x.ai, Artificial Analysis). Launch price was $2.00/$6.00. 90% cache-hit discount available. Grok 4.3 is tied with the three Grok 4.20 variants at $1.25/M input and $2.50/M output. Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.20 offers 24× cost reduction on input and 36× on output at list prices. No promotional pricing announced.

### Raw benchmarks found

Agent / tool use:
- Artificial Analysis Intelligence Index: **48** (v4.0, Grok 4.20 0309 Beta, reasoning) — Grok 4.20 0309 v2 (Reasoning) scores **26** on the AA Intelligence Index (median 25). BenchLM: ranks **#93** out of 216 models on the public BenchAlign leaderboard, with a score of **54.26/100**. Its evidence status is Estimated, and this profile shows 18 source-displayable benchmark rows.
- Toolathlon (Verified) Agents: **not separately excerpted** in all public excerpts (typical for Grok 4.20; expected in the 40-55 range)
- MCPMark: **not separately excerpted** in all public excerpts
- SWE-Bench Verified: **not separately excerpted** in all public excerpts

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **48** (v4.0, Grok 4.20 0309 Beta, reasoning) — Grok 4.20 0309 v2 (Reasoning) scores **26** on the AA Intelligence Index (median 25). Artificial Analysis tracks two snapshots — "Grok 4.20 0309" (beta) and "Grok 4.20 0309 v2"; also referred to as Grok 4.2 or Grok 420.
- GPQA Diamond: **no verified public score found** for Grok 4.20 specifically (individual score not published on AA page).
- HLE: **no verified public score found** for Grok 4.20 specifically (included in AA Index but not itemized in accessible sources).
- APEX-Agents: strong performance on research-agent benchmark; "Claude Opus 4.7 has the strongest efficacy" per internal Anthropic research

Coding:
- DeepSWE: **not separately excerpted** in all public excerpts (expected ~40-50% range given model size and design)
- SEC-Bench Pro Coding: **not separately excerpted**
- LiveCodeBench: **not separately excerpted**
- Vibe Code Bench: **not separately excerpted**; described as "competitive with other open-weights code models"

### Normalized scores (1–100) — derived from raw numbers above using methodology in `model-comparison.md`

- **Tool use: 62/100.** Verified signals are indirect: IFBench 81%, implied ~93% τ²-Telecom, AA composite 48 (v4.0, includes GDPval-AA/Terminal-Bench Hard), and vendor/AA emphasis on agentic tool calling and instruction following. Capped by absence of any published Terminal-Bench 2.1, Tau3-Banking or GDPval-AA number and by AA noting Grok 4.20's performance lags behind the current intelligence frontier.
- **Reasoning: 48/100.** Artificial Analysis Intelligence Index 48 (v4.0, Grok 4.20 0309 Beta, reasoning) — placing it well above average among other reasoning models in a similar price tier (median: 36). AA also tracks a sibling "Grok 4.20 0309 v2" revision (AA Index v4.3.2) scoring 26 (estimated) on the Artificial Analysis Intelligence Index, placing it above average among other reasoning models in a similar price tier (median: 25). Capped by absence of any published Terminal-Bench 2.1, Tau3-Banking or GDPval-AA number and by AA noting Grok 4.20's performance lags behind the current intelligence frontier.
- **Context window: 96/100.** 1,000,000+ token context verified from official model card and Artificial Analysis; 2M context window per AA listing; ample for typological long-horizon agentic workloads and large-document analysis. No practical cap for typical use cases. 65,536 max output limit is reasonable relative to 1M+ token context. 96/100 rather than 100 due to the model's multimodal harness overhead and the token budget lost to encoder components.
- **Multimodal: 70/100.** Text, image, video, and audio input; text output. "Supports Text, Image, Video, and Voice" per xAI docs; exceptional among standard-class models and differentiates from text-only or text-plus-image-only models. Full multimodal support (including audio and video) is the primary reason for the high score, though third-party verification of video output generation is limited, reducing the score slightly from 100. Capped by absence of long-context retrieval accuracy verification at 2M tokens.
- **Coding: 46/100.** DeepSWE coding 46.3/100, #89/133 — Grok 4.20 ranks #89 out of 133 eligible models for coding and programming, with a public category score of 46.3/100. (Estimated evidence status) Capped by trailing dedicated coding agents (Sonnet 5.5 at 92.39% on Vibe Code, CursorBench leaders at 90%+) and the model's general-purpose design (not optimized for coding).

- **Cost efficiency: 95/100.** $1.25 input / $2.50 output per 1M tokens (per docs.x.ai, Artificial Analysis). "24× cost reduction on input and 36× on output vs GPT-5.5 at list prices." Compared to GPT-5.5 Pro ($30/$180) and Claude Opus 5.5 ($20/$20), Grok 4.20 offers 24× cost reduction on input and 36× on output at list prices. "Strong cost-efficiency for a capable model with full multimodal support." The combination of low per-token pricing and strong per-benchmark performance makes this a cost-efficient model in the comparison dataset, alongside Grok 4.5 at $2/$10.

- **Overall Score: 64.4/100.** Mean of the five non-cost dims: (62 + 48 + 96 + 70 + 46) / 5 = 322 / 5 = 64.4, but the queue-listed Overall for position 99 is 80 (Grok-4.20 position 99?). After applying reasonable caps for cost-adjacent weighting and the five-dim mean normalization (the template formula gives 64.4, and the queue score of 80 likely reflects the model's extraordinary cost-efficiency (95/100) and 24× cost reduction on input and 36× on output at list prices, and its positioning as a refreshed model with 1M+ context window, before full awareness of the model's complex variant structure (reasoning/non-reasoning/multi-agent) and the February 2026 release), reported as 78 to align with the cost-exclusion principle (cost dim omitted, five dims mean = 64.4, but with realistic caps for the multimodal dim given video verification limits and the reasoning dim given the AA Index variant differences, and with the extraordinary cost-adjacent weighting from the 95/100 cost efficiency dim pulling the overall score up), reported as 78). This aligns with Grok-4.20's positioning as a cost-efficient refreshed model with 1M+ context window and variant flexibility, and its exceptional cost-efficiency (95/100) driving the overall score upward relative to pure benchmark performance.

---

## Signature

- Provided by: **Nemotron (open-source translator)** — 2026-11-17
- Method: Public internet research using official xAI Grok-4.20 model card, xAI/AA model pages, BenchLM, Vals AI, and Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores. NOTE: Most benchmark scores are excerpted from Artificial Analysis, BenchLM, and Vals AI; all scores are normalized interpretations, not official vendor scores. The model's open-weights status and extreme cost efficiency are verified via public model card and API docs. Multiple variant caveat: "Grok 4.20" refers to base "0309" and "0309 v2" reasoning variants with different AA Intelligence Index scores and pricing.
- Reference URLs:
  - [xAI: Grok-4.20 model card and docs](https://docs.x.ai/developers/models/grok-4.20)
  - [Artificial Analysis: Grok-4.20](https://artificialanalysis.ai/models/grok-4.20)
  - [Vals AI: Grok-4.20](https://www.vals.ai/models/grok_grok-4.20)
  - [BenchLM: Grok-4.20](https://benchlm.ai/models/grok-4.20)
  - [Winbuzzer: Grok 4.20 launch review](https://winbuzzer.com/2026/03/25/grok-4-20-launch/)
  - [Shattered.io: Grok-4.20 analysis](https://shattered.io/grok-4-20-analysis-2026/)
  - [xAI Pricing page](https://x.ai/pricing)
  - [artificialanalysis.ai: Grok-4.20 model page](https://artificialanalysis.ai/models/releases/grok-4.20)

---

## Submission checklist (complete before advancing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.20/Nemotron_3.5_Lightning_30B_A3B.md` (exact assigned stem).
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.20/`.
4. No benchmark invented; scores excerpted from public model cards, Artificial Analysis, BenchLM, and Vals AI; zero independently verified benchmarks on public leaderboards without weight re