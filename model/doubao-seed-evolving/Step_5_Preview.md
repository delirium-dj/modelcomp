# Doubao-Seed-Evolving — findings by Step 5 Preview

- Source: ByteDance / ByteDance Seed (`doubao-seed-evolving`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao-Seed-Evolving (listed on Volcano Engine as `doubao-seed-evolving`; Vector Wire also tracks it as "doubao seed evolving (high)" after its default reasoning effort)
- **Short description:** ByteDance's rolling-version Doubao flagship — a 1M-context image/video reasoning model that Volcano Engine updates at least weekly under one unchanged ID (latest snapshot Nov 5, 2026, aimed at multi-step agent tasks and factual consistency), sold only in China at Seed 2.1 Pro pricing.
- **Provider / access:** Volcano Engine (Volcano Ark, China) only — model ID `doubao-seed-evolving`; served through Chat, Responses and Anthropic-style Messages APIs per the Seed lineup. No BytePlus/international listing and no OpenCode Zen ID found in fetched sources.
- **Release / knowledge:** Rolling ID launched June 23, 2026 (Volcano Engine logs); moved to 1,024K context July 14, 2026; latest update November 5, 2026 (per Second Talent's Nov 12, 2026 guide to the Volcano changelog). Epoch AI tracks the current snapshot as "Doubao Seed Evolving (Nov 2026)", release date Nov. 2, 2026. Knowledge cutoff unknown (Epoch AI metadata).
- **IDs:** `doubao-seed-evolving` (Volcano Engine Ark). The weights behind the ID change without the ID changing — pin a dated model for reproducibility.
- **Context window:** 1,024K (1M) tokens context; 256K max output, chain-of-thought included (Volcano Engine model list via Second Talent guide).
- **Modalities:** Text, image and video in; text out; no audio input. Deep thinking on by default; `reasoning_effort` maps to minimal/low/medium/high with **high the default on this ID**. Tool calling and GUI/computer-use tasks per the Seed 2.1 family notes; structured-output support for this exact ID not explicitly confirmed in fetched sources.
- **Pricing (as of 2026-11-13):** ¥6 input / ¥30 output per 1M tokens — the same list price as Seed 2.1 Pro — flat across the whole 1,024K window (Volcano Engine CNY list, via Second Talent guide). No USD price, no free tier, no international availability.
- **Architecture:** Closed weights (Epoch AI); parameters undisclosed.

### Raw benchmarks found

Reasoning / knowledge (all Epoch AI, measured on the Nov 2026 snapshot, with frontier comparators):

- OTIS Mock AIME 2024-2025 (mathematics): **99%** (Gemini 4 Carbon 100%, GPT-6 Astra 100%, Claude Opus 5.5 100%)
- GPQA Diamond (science): **93%** (Carbon 97%, GPT-6 Astra 96%, Opus 5.5 94%)
- Chess Puzzles (games / step-precision reasoning): **40%** (Carbon 78%, GPT-6 Astra 76%, Opus 5.5 67%)
- SimpleQA Verified (world knowledge / factuality): **42%** (Carbon 78%, GPT-6 Astra 76%, Opus 5.5 72%)
- Epoch Capabilities Index: N/A (not scored)

Agent / tool use:

- Terminal-Bench 2.1 / 4.x / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found. ByteDance publishes Seed 2.1 Pro/Turbo agent numbers (Agent Startup Bench 68.8 for Pro) in its own model card, but nothing for the Evolving ID — not attributable here.

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found for this ID (vendor benchmarks are published only for dated Seed 2.1 IDs).

Long context:

- 1,024K window documented (Volcano Engine); MRCR / RULER / GraphWalks retrieval scores: no verified public score found.

Multimodal:

- Image + video input documented; MMMU / MKA / Chartography / any measured multimodal score: no verified public score found for this ID.

### Normalized scores (1–100)

- **Tool use: 66/100.** Zero verified agentic benchmarks exist for this ID; scored provisionally from positioning — Volcano Engine uses it as the automatic replacement for retired Doubao coding models and the Nov 5 update targeted multi-step agent tasks — with function calling and computer-use in the family feature set; capped because nothing on Terminal-Bench/Tau/MCP-Atlas is measured and a weekly-changing ID resets any earned track record.
- **Reasoning: 82/100.** Top-tier math and science — OTIS Mock AIME 99% and GPQA Diamond 93% (Opus 5.5-level) — pulled down hard by Chess Puzzles 40% versus 67–78% for the frontier comparators, showing weak precise step-by-step puzzle reasoning despite the high default reasoning effort.
- **Context window: 98/100.** 1,024K-token documented context with 256K output and flat pricing across the entire window — top documented tier; capped only because no model-specific long-context retrieval benchmark is published.
- **Multimodal: 70/100.** Text, image and video input with text-only output and no audio; no measured multimodal benchmark (MMMU/MKA/Chartography all "no verified public score found"), so the score rests on documented coverage rather than evidence.
- **Coding: 68/100.** No verified public coding benchmark for this ID (vendor SWE-Atlas/Terminal-Bench figures belong to dated Seed 2.1 IDs, not the rolling Evolving ID); scored provisionally from its role as ByteDance's designated replacement for retired coding endpoints — treat as unproven until a dated-ID benchmark run appears.
- **Cost efficiency: 72/100.** ¥6/¥30 per 1M CNY flat across 1M context — roughly half the output price of Gemini 4 Hydrogen's $7.50 — with frontier-adjacent math/science scores at that price; capped by China-only availability (Volcano Engine), no verified free tier, no verified USD rate card, and no published per-task cost evidence.
- **Overall Score: 76.8/100.** Mean of Tool 66 + Reasoning 82 + Context 98 + Multimodal 70 + Coding 68 = 76.8; best fit: inside China, a cheap 1M-context reasoning endpoint for math/science-heavy agent pipelines on Volcano Engine — weak at precise puzzles, factuality and anything needing a stable benchmark track record.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-13 UTC
- Method: public internet research; web search was unavailable (HTTP 402), so per `RULES.md` § Web-research fallback I queried DuckDuckGo HTML, then fetched Epoch AI's model page (independent measured benchmarks), ByteDance Seed's official models page, and the Second Talent Doubao lineup guide (which cites the Volcano Engine model/pricing lists) — provenance labeled per figure. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually fetched this pass (markdown links to primary sources):
  - [Doubao Seed Evolving (Nov 2026) benchmark scorecard — Epoch AI](https://epoch.ai/models/doubao-seed-evolving-nov-2026)
  - [Seed models — ByteDance Seed (official)](https://seed.bytedance.com/en/models)
  - [Every Doubao AI model explained and compared (Nov 2026) — Second Talent, incl. Volcano Engine IDs, context and pricing](https://www.secondtalent.com/resources/every-doubao-ai-model-explained-compared/)
  - [Doubao Seed Evolving model record — Vector Wire](https://vectorwire.ai/models/doubao-seed-evolving)
  - [Doubao Seed Evolving benchmark record — LuminaBench](https://luminabench.com/models/epoch-doubao-seed-evolving/)
  - [DuckDuckGo HTML query route used for discovery](https://html.duckduckgo.com/html/?q=Doubao+Seed+Evolving+ByteDance+model+benchmarks)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.