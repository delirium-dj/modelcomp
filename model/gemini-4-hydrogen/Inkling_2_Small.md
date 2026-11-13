# Gemini 4 Hydrogen — findings by Inkling 2 Small

- Source: Google (`gemini-4-hydrogen`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Hydrogen
- **Short description:** Google's Gemini 4 "everyday" model for coding and agentic workflows, positioned below Gemini 4 Carbon and above Gemini 4 Argon on price/performance. Now the default model for the Antigravity agent in Gemini Managed Agents. Successor to the Flash slot (Gemini 3.8 Flash).
- **Provider / access:** Gemini API via Google AI Studio and GenerateContent / Interactions API (`gemini-4-hydrogen`, stable); free tier and paid tier; also Batch, Flex, and Priority inference; available on Vertex AI and via aggregators (Eden AI, Kilo Gateway, Merge Gateway, OpenCode Zen, OpenRouter, Vercel AI Gateway) per models.dev (11 providers tracked).
- **Release / knowledge:** Released 2026-11-12 (Google developer docs; GA on free + paid tiers). Knowledge cutoff: 2026-03 (models.dev). Latest model update: November 2026.
- **IDs:** `google/gemini-4-hydrogen` (Gemini API `gemini-4-hydrogen`; Vertex `vertex/gemini-4-hydrogen`)
- **Context window:** 1,048,576 tokens unified input+output+thinking window (shared, not separate budgets); 65,536 max output default synchronous hop; up to 1,048,576 with background execution / long decode (64K hops). Verified against Google model card + ArtificialWatch spec read.
- **Modalities:** Text, image, video, audio, and PDF in; text out. Reasoning yes (`low`, `medium`, `high` default, and new `xhigh`); tool calls yes (incl. computer use + code execution + search/maps grounding); structured outputs yes; implicit context caching only (explicit caching not supported); no image generation, no Live API, no audio generation.
- **Pricing (as of 2026-11-13):** Free tier (rate-limited); paid $1.50 / 1M input, $7.50 / 1M output (thinking tokens included); $0.075 / 1M cached input via implicit caching (95% off). Batch/Flex: $0.75 / $3.75 ($0.0375 cached); Priority: $2.70 / $13.50 ($0.135 cached). No introductory discount. Gemini 3.8 Flash (previous gen): $0.75/$3.75 through 2026-12-31, rising to $1.50/$7.50 on 2027-01-01. Google Search grounding billed per query. models.dev median provider price differs (Kilo/Eden/Vertex: $0.75/$3.75 listed at some gateways vs Google's own $1.50/$7.50) — use Google's official page as truth.
- **Architecture:** Proprietary (Google, Gemini 4 family). Parameter count undisclosed; shares 1M unified context + long decode architecture with Carbon and Argon.

### Raw benchmarks found

Agent / tool use:

- CursorBench (Cursor's coding benchmark, at High): **54.3%** — 12th of the settings Cursor lists; between Claude Sonnet 5.5 Max (55.5%) and xhigh (53.1%); ahead of Gemini 4 Argon High (52.9%) (source: ArtificialWatch, 2026-11-12)
- Google claim (not independent): >5x fewer fabricated claims vs Gemini 3.8 Flash by flagging missing context instead of guessing; parallel batched read/search tool calls; adaptive retry on failed tool calls (source: ai.google.dev "What's new in Gemini 4 Hydrogen")
- Default model for Antigravity agent in Gemini Managed Agents (source: ai.google.dev)
- Terminal-Bench / Tau3 / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (at xhigh, read 2026-11-12): **54** — above Gemini 4 Argon (50) and GPT-6.1 Terra (51); one point below Claude Sonnet 5.5 (55); well above Gemini 3.8 Flash (31); below Gemini 4 Carbon (60) (source: ArtificialWatch, citing Artificial Analysis)
- GPQA Diamond / HLE / CritPt / Omniscience: no verified public score found for Hydrogen specifically

Coding:

- CursorBench: see Agent/tool use (54.3% @ High)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode: no verified public score found

Long context:

- Unified 1,048,576-token window shared across input/thinking/output; up to 1M-token long decode via background execution or client-side continuation (source: ai.google.dev). No public long-context retrieval benchmark (MRCR/RULER) published yet.

### Normalized scores (1–100)

- **Tool use: 74/100.** Default Antigravity/Managed-Agents model with computer use, code execution, and parallel read/search tool-call batching; CursorBench 54.3% @ High; AAII 54. Capped by zero published Tau2/Tau3/Terminal-Bench numbers — strongest evidence is Google's own positioning.
- **Reasoning: 72/100.** AAII xhigh = 54 sits a point under Sonnet 5.5 (55) and above Argon (50); new `xhigh` thinking level is unproven beyond the single index read. Mostly one-source evidence — capped accordingly.
- **Context window: 90/100.** Unified 1M window (input+thinking+output shared) with up to 1M long decode — genuinely architectural, not marketing; synchronous hop cap 65,536. Spec-verified, not independently measured at the full window.
- **Multimodal: 70/100.** Text/image/video/audio/PDF in — broadest input coverage in the Gemini 4 family so far (audio and video included); agentic video understanding supported. Text out only; no image generation/Live API. No MMMU-type number published → capped.
- **Coding: 72/100.** CursorBench 54.3% @ High (12th of Cursor's listed settings; beats Argon High 52.9%); targets everyday coding/agents with xhigh headroom. No SWE-bench Verified/LiveCodeBench figure yet.
- **Cost efficiency: 80/100.** $0 free tier (rate-limited) + $1.50/$7.50 paid with 95% implicit-cache discount; Batch/Flex halves it to $0.75/$3.75. Not the cheapest frontier option (Flash-Lite exists), but strong value for this capability tier.
- **Overall Score: 76/100.** Mean of the five quality dims (74+72+90+70+72)/5 = 75.6 → 76. Best fit: everyday coding and agentic work where it can run as a standalone worker or fast paired subagent next to Carbon/Argon — especially tool-heavy workflows and multimodal document pipelines; not a Carbon-replacement for hardest reasoning.

---

## Signature

- Provided by: **Inkling 2 Small (openrouter/thinkingmachines/inkling-2-small:free)** — 2026-11-13
- Method: public internet research (Google AI developer docs/model card, models.dev catalog, ArtificialWatch's source-verified wire item summarizing Artificial Analysis + CursorBench reads, 2026-11-12); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 4 Hydrogen — What's new (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/whats-new-gemini-4-hydrogen)
  - [Gemini 4 Hydrogen — Model card (Google AI for Developers)](https://ai.google.dev/gemini-api/docs/models/gemini-4-hydrogen)
  - [Gemini 4 Hydrogen is live: $1.50/$7.50, free tier, 1M context — ArtificialWatch (2026-11-12)](https://artificialwatch.com/wire/gemini-4-hydrogen-is-live-1-50-7-50-free-tier)
  - [Gemini 4 Hydrogen — models.dev](https://models.dev/models/google/gemini-4-hydrogen)
- Future sources: add a new file next to this one, e.g. `Inkling_2_Small.md`, using the same headings.
