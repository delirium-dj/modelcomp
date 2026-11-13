# Iceman — findings by MiMo 2.6 Flash

- Source: OpenCode stealth model (`opencode/iceman-free`, also `opencode-go/iceman-contributor-free`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (Free tier `Iceman Free`, Go tier `Iceman Contributor`) — OpenCode's anonymous stealth reasoning model; no lab has claimed it. Flag: the two tiers are almost certainly one model (same name, same 262,144/131,072 specs, both called a free stealth model by OpenCode; Stealth Models' own analysis says OpenCode "hasn't said the two are one model… so it's very likely the same model"). Vendor identity is an **unverified lead only**: @aitrackerbot reports it self-introduces as "MAI, created and trained by Microsoft AI" with token counts matching MAI Thinking 1 (20/20 tool schemas), and Stealth Models' tokenizer test matches MAI Thinking 1, Glyph Cluster and the OpenAI GPT-6 family exactly — which cannot discriminate between those labs. Not used as identity.
- **Short description:** a closed-weights, free-for-now stealth coding/agent model served on OpenCode's Zen free tier and Go subscription, positioned for reasoning and tool use; identity undisclosed and swappable without notice.
- **Provider / access:** OpenCode Zen `opencode/iceman-free` (Chat Completions, `https://opencode.ai/inference/openai/v1/chat/completions`, also `https://opencode.ai/zen/v1/chat/completions`); OpenCode Go `opencode-go/iceman-contributor-free`. Listed in the OpenCode Console endpoint/pricing tables and the Zen free-models list.
- **Release / knowledge:** first public sighting 2026-10-24 (models.dev commit `bbe1123f`, OpenCode PR 58792; traffic already running 2026-10-23); Zen `Iceman Free` listing added 2026-11-10. Knowledge cutoff: not published.
- **IDs:** `opencode/iceman-free` (Zen) / `iceman-contributor-free` (Go). A Free ID exists on Zen.
- **Context window:** 262,144 in / 131,072 out — verified via models.dev catalog commit, pi.dev (`iceman-free`), Stealth Models and the repo's curated `meta.json`; no long-context retrieval score (no MRCR/RULER row found) so window size is catalog-verified but retrieval-unverified.
- **Modalities:** text in / text out; reasoning yes (effort levels low / medium / high / xhigh — `max` rejected, per Stealth Models' run 2026-10-25); tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-11-13):** $0 input / $0 output / $0 cached on Zen — free for a limited time, **with the caveat that during the free period "collected data is retained and used to improve the model"** (OpenCode docs). Go tier: tokens free with no usage cap but requires a Go subscription (from $10/month) plus consent to "use your prompts and completions to improve the model".
- **Architecture:** proprietary, closed weights; parameter count / MoE layout undisclosed; lab unknown.

### Raw benchmarks found

> Measured numbers (Stealth Models' StealthMark, runs dated 2026-10-25, 58-model field; harness + ranks per their published methodology).

Agent / tool use:

- Foresight (planning game): **3.2/100** (StealthMark, rank **54/54**; survived 0 of 3 levels)
- Latch (cooperative planning game): **3.6/100** (StealthMark, rank **51/55**; cleared 1 of 5 levels)
- Multi-step reasoning efficiency: **37** (StealthMark, rank **25/54** — median); single-step: **29** (rank 52/56)
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval: **no verified public score found**
- Tool calls confirmed in product (reasoning levels + tool schemas tested by Stealth Models), but no standard tool-use leaderboard entry.

Reasoning / knowledge:

- StealthMark **General Intelligence: 11.7/100** (spatial & physical reasoning composite)
- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index: **no verified public score found** — LLM Perks (updated 2026-11-13): "not on the Artificial Analysis leaderboard yet"; BenchLM `/models/iceman` → 404.
- Reasoning speed: 46 tokens/s output, ~0.9 s first token (Stealth Models' measurement, 3 runs at low effort) — faster than only 1 of 51 measured models.

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** — no coding-suite row exists for this stealth model anywhere checked.

Multimodal / visual (StealthMark SVG suite — visual construction, not modality support):

- StealthMark **Visual Intelligence: 31.0/100**; sub-scores: Selfie 39.3, Pelican 38.0, Beach 46.4, Raccoon 29.8, Ground Truth 20.2, Mona Lisa 19.3, Newton's Mirror 10.1 (each rank 46–55 of 58).
- **StealthMark overall: 19.2/100, rank 53/58.**

Long context:

- No long-context retrieval score (no MRCR / RULER / GraphWalks row) — 262,144-token window is catalog-verified only.

### Normalized scores (1–100)

- **Tool use: 30/100.** Tool calling and four reasoning levels are product-verified, and multi-step reasoning efficiency is median (rank 25/54), but the agentic planning games put it at the bottom of the field (Foresight 54/54, Latch 51/55) and no Terminal-Bench / Tau / GDPval number exists — capped by bottom-decile planning evidence.
- **Reasoning: 20/100.** Direct measurement exists: StealthMark General Intelligence 11.7/100 with single-step reasoning efficiency ranked 52/56; no GPQA/HLE/Index row to offset it — capped by the measured low composite.
- **Context window: 72/100.** 262,144 tokens maps to the 200K–500K tier (70 at 200K, + for headroom above it); retrieval quality unverified, so no bonus above the tier.
- **Multimodal: 15/100.** Text in / text out only (tier default for text-only); its decent Visual Intelligence score reflects SVG drawing output, not image input.
- **Coding: 35/100.** Zero verified coding benchmarks (no SWE-bench/LiveCodeBench/SciCode row) and weak measured general reasoning caps it; the visual SVG tasks are not coding evidence.
- **Cost efficiency: 100/100.** $0/$0 on Zen during the free period — caveated: time-limited and prompts/completions are retained for model training; Go tier needs a $10/month subscription plus data consent.
- **Overall Score: 34/100.** (30 + 20 + 72 + 15 + 35) / 5 = 34.4 → **34**. Not recommended for serious coding or agentic work: an unclaimed stealth model with bottom-quartile measured planning scores — fine only as a free experimental sandbox, and re-check before trusting any figure since stealth models can be swapped without notice.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-13
- Method: public internet research (DuckDuckGo HTML, OpenCode Zen/Console docs, Stealth Models' Iceman guide + StealthMark benchmark pages, LLM Perks index, pi.dev, BenchLM 404 check, models.dev commit history); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Iceman Contributor benchmark results (StealthMark 19.2/100, rank 53/58)](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [Stealth Models — Iceman Contributor model guide (identity leads, timeline, specs, speed)](https://stealthmodels.com/iceman-contributor)
  - [OpenCode Zen docs — `iceman-free` listing, free pricing, data-retention terms](https://opencode.ai/docs/zen/)
  - [pi.dev — `iceman-free` (262,144 in / 131,072 out, text in, reasoning, tool calls)](https://pi.dev/models/opencode/iceman-free)
  - [LLM Perks — Iceman (free since 2026-11-07; "not on the Artificial Analysis leaderboard yet")](https://llmperks.com/models/iceman)
  - [models.dev commit — Iceman Contributor catalog entry, 2026-10-24](https://github.com/anomalyco/models.dev/commit/bbe1123f5298480f56be29d1e0f664053c98c6c8)
  - [OpenCode PR 58792 — Iceman added to Go docs / stealth list](https://github.com/anomalyco/opencode/pull/58792)
- Future sources: if a lab claims Iceman, or SWE-bench / Terminal-Bench / AA Intelligence Index numbers appear, re-research and update this file using the same headings.
