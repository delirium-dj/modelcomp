# Gemini 3 Pro — findings by GLM 5.3 Flash

- Source: Google (`gemini-3-pro-preview`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro (launched as "Gemini 3 Pro Preview"; Google's current eval tables score the config "Gemini 3 Pro Thinking (High)"). The separate "Gemini 3 Deep Think" mode (HLE 41.0%, GPQA Diamond 93.8%, ARC-AGI-2 45.1%) is a distinct Ultra-subscriber reasoning variant, not this model. Note: the image generator "Nano Banana Pro (Gemini 3 Pro Image)" is a different model — do not conflate.
- **Short description:** Google DeepMind's November 2025 frontier flagship and first Gemini 3 generation model, built for state-of-the-art reasoning, agentic coding and native multimodal understanding (LMArena 1501 Elo at launch). As of 2026-11-02 it is a deprecated/retired model: Google's own lineup and docs now steer to Gemini 3.1 Pro, so it serves mainly as a historical frontier reference point.
- **Provider / access:** Was served by the Gemini API at `https://generativelanguage.googleapis.com/v1beta` with model ID `gemini-3-pro-preview` (Google's generateContent / newer Interactions API, not Chat Completions-native), plus Vertex AI, AI Studio, Gemini CLI and Antigravity. Verified 2026-11-02: deprecated — Google's Gemini 3 developer guide carries a deprecation notice pointing to newer-model docs, Google's current model-family table no longer lists `gemini-3-pro-preview`, and Artificial Analysis marks the model "deprecated … no longer updated" with "No publicly available API" for live benchmarking. Its recommended replacement is `gemini-3.1-pro-preview`.
- **Release / knowledge:** Released 2025-11-18 (Google announcement, "A new era of intelligence with Gemini 3"); knowledge cutoff January 2025 (Google docs table and Artificial Analysis spec).
- **IDs:** `google/gemini-3-pro-preview` (Gemini API / Vertex AI / AI Studio — deprecated; Google recommends `gemini-3.1-pro-preview`). No Free ID on OpenCode Zen verified in this pass.
- **Context window:** 1,000,000-token input context with 64K max output tokens (verified 2026-11-02 via Google's Gemini 3 family docs table "Context Window (In / Out): 1M / 64k" and Artificial Analysis "Context window: 1M"; DeepMind model-information block for the Pro tier shows Input tokens 1M / Output 64k).
- **Modalities:** text, image, video, audio and PDF input; text output; reasoning yes (dynamic thinking via `thinking_level`, default `high` — Google's tables score the Thinking (High) config); tool calls yes (function calling incl. multimodal function responses, structured output/JSON mode, Google Search grounding as a tool, URL context, code execution); thought signatures for cross-call reasoning state.
- **Pricing (as of 2026-11-02):** deprecated endpoint — no live first-party purchase; last published pricing was $2.00 input / $12.00 output per 1M tokens for prompts ≤200K and $4.00 / $18.00 above 200K, with cached input $0.20 per 1M (Artificial Analysis lists the $2.00/$12.00 pair with a 90% cache discount; the tiered $2/$12 → $4/$18 structure appears in Google's current Gemini 3 family docs table for the Pro tier). Paid only; no free API tier.
- **Architecture:** Proprietary, closed weights; parameter count and architecture details undisclosed by Google.

### Raw benchmarks found

> All numbers below were freshly re-verified 2026-11-02. Primary source is Google DeepMind's own model page for the Gemini Pro tier, whose evaluation table retains a dedicated "Gemini 3 Pro Thinking (High)" column (marked "Google 3.1-table" below; methodology: deepmind.google/models/evals-methodology/gemini-3-1-pro), plus the 2025-11-18 launch announcement ("Google launch blog"). Since the model is deprecated, Artificial Analysis no longer publishes independent live scores for it (page shows N/A / "No publicly available API").

Agent / tool use:

- Terminal-Bench 2.0: **54.2%** (Google launch blog, Terminus-2-style tool-use harness); **56.9%** per Google's current 3.1 Pro comparison table (Terminus-2 harness, Thinking (High))
- τ2-Bench: **Retail 85.3% / Telecom 98.0%** (Google 3.1-table, Thinking (High))
- GDPval-AA: **1195 Elo** (Google 3.1-table) — behind the 2026 class in the same table (Sonnet 4.6 1633, Opus 4.6 1606, GPT-5.2 1462)
- MCP-Atlas: **54.1%** (Google 3.1-table, multi-step MCP workflows) — successor Gemini 3.1 Pro reports 69.2%
- BrowseComp: **59.2%** (Google 3.1-table, search + Python + browse) — weakest in its launch-era comparison column
- Vending-Bench 2: **leaderboard-topping at launch** (Andon Labs harness; Google launch blog states it topped the long-horizon planning leaderboard over a simulated year) — no numeric value published in the fetched sources
- Toolathon / Claw-Eval / ClawProBench / SWE Atlas Codebase QnA: no verified public score found
- APEX-Agents (long-horizon professional tasks): **18.4%** (Google 3.1-table)

Reasoning / knowledge:

- GPQA Diamond: **91.9%** (Google launch blog; confirmed no-tools in Google 3.1-table)
- HLE (full set, text + multimodal): **37.5%** no tools / **45.8%** with Search (blocklist) + Code (Google launch blog and Google 3.1-table)
- ARC-AGI-2: **31.1%** (ARC Prize Verified, per Google 3.1-table; Deep Think variant scored 45.1% with code execution)
- MathArena Apex: **23.4%** (Google launch blog — state of the art at launch, matharena.ai)
- LCR / MLCR: no verified public score found
- SimpleQA Verified: **72.1%** (Google launch blog)
- MMMLU (multilingual): **91.8%** (Google 3.1-table)
- LMArena: **1501 Elo**, #1 at launch (Google launch blog, Nov 2025)
- Artificial Analysis Intelligence Index: **N/A / no current rank** — AA marks the deprecated model's index "N/A" and no longer runs its v5.0 suite on it; no verified current AA score found (AA-Omniscience / hallucination-rate: no verified public score found for this model)

Coding:

- SWE-bench Verified: **76.2%**, single attempt (Google launch blog; confirmed in Google 3.1-table)
- SWE-Bench Pro (Public): **43.3%**, single attempt (Google 3.1-table)
- LiveCodeBench Pro: **2439 Elo** (Google 3.1-table) — above GPT-5.2 Thinking's 2393 in the same table
- SciCode: **56%** (Google 3.1-table)
- WebDev Arena: **1487 Elo**, #1 at launch (Google launch blog)
- Vibe Code Bench / AA-FrontierCode / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8-needle): **77.0% average @128k**; **26.3% pointwise @1M** (Google 3.1-table) — strong at 128k, sharp degradation at the full 1M window
- GraphWalks / RULER at window length: no verified public score found (model card is a PDF and could not be parsed in this pass)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong launch-era agentic results — τ2-Bench Telecom 98.0% / Retail 85.3%, Terminal-Bench 2.0 ~54–57% and a leaderboard-topping Vending-Bench 2 run — capped by MCP-Atlas 54.1%, BrowseComp 59.2% and GDPval-AA 1195 Elo, all visibly below its own successor (MCP-Atlas 69.2%) and the 2026 frontier class.
- **Reasoning: 88/100.** GPQA Diamond 91.9%, HLE 37.5% no-tools (45.8% with Search+Code), MathArena Apex 23.4% and LiveCodeBench Pro 2439 Elo were SOTA-at-launch reasoning numbers; capped by ARC-AGI-2 31.1% (vs 77.1% for Gemini 3.1 Pro) and one-generation-old HLE/GPQA gaps vs Opus 4.6.
- **Context window: 90/100.** Full-tier 1M-token input with 64K output (Google docs table; AA spec) earns the top-window rating, but measured retrieval caps it: MRCR v2 8-needle falls from 77.0% @128k to 26.3% pointwise @1M.
- **Multimodal: 90/100.** Text, image, video, audio and PDF input with launch-best MMMU-Pro 81.0% and Video-MMMU 87.6% (Google launch blog; MMMU-Pro confirmed in Google 3.1-table); text-only output and no native image/audio generation cap it below full-omni models.
- **Coding: 84/100.** SWE-bench Verified 76.2%, SciCode 56%, LiveCodeBench Pro 2439 Elo and WebDev Arena 1487 Elo at launch; capped by SWE-Bench Pro 43.3% and successors now at 80%+ SWE-bench Verified (Gemini 3.1 Pro 80.6%, GPT-5.2 80.0% in Google's table).
- **Cost efficiency: 68/100.** No $0 access (deprecated, paid-only); at its last published $2/$12 per 1M (≤200K) with a 90% cache discount it was mid-premium and good value at launch, but the same price now buys the measurably stronger Gemini 3.1 Pro, leaving this model little remaining value at its price point.
- **Overall Score: 87/100.** Mean of the five quality dims (84 + 88 + 90 + 90 + 84) / 5 = 87.2 → 87 (half-up); best treated as a retired late-2025 frontier reference — for new work the same-priced Gemini 3.1 Pro dominates it on every measured dimension.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google blog — A new era of intelligence with Gemini 3 (launch, 2025-11-18)](https://blog.google/products/gemini/gemini-3/)
  - [Google DeepMind — Gemini 3.1 Pro model page (official comparison table incl. "Gemini 3 Pro Thinking (High)" column)](https://deepmind.google/models/gemini/pro/)
  - [Google Gemini API docs — Gemini 3 family guide (model IDs, 1M/64k context, tiered pricing; deprecation notice)](https://ai.google.dev/gemini-api/docs/gemini-3)
  - [Artificial Analysis — Gemini 3 Pro Preview model page (pricing, specs, deprecated status)](https://artificialanalysis.ai/models/gemini-3-pro)
  - [Google DeepMind — Gemini 3 Pro model card](https://deepmind.google/models/model-cards/gemini-3-pro)

---

- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
