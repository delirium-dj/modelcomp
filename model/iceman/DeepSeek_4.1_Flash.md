# Iceman — findings by DeepSeek 4.1 Flash

- Source: undisclosed lab (OpenCode stealth) — `opencode/iceman-free` / `iceman-contributor-free`
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman (OpenCode stealth; "Iceman Free" on Zen, "Iceman Contributor" on OpenCode Go)
- **Short description:** OpenCode's anonymous free reasoning-model slot (live since 2026-10-23/24) — text-only, 262K context, tool calling, four reasoning levels; token-fingerprint analysis points to **Microsoft's MAI** (self-identifies as "MAI, created and trained by Microsoft AI" per @aitrackerbot; token counts match MAI Thinking 1 exactly), but **no lab has claimed it** as of check time.
- **Provider / access:** OpenCode Zen (`iceman-free`, free in the OpenCode app for a limited time, added 2026-11-10) and OpenCode Go (`iceman-contributor-free`, free with a Go subscription ≥$10/mo, requires opting into "allow paid endpoints that train on request data"). Direct API via `https://opencode.ai/inference/openai/v1/chat/completions` (usage-limited).
- **Release / knowledge:** first traffic 2026-10-23; public listing 2026-10-24; knowledge cutoff not disclosed. Closed weights.
- **IDs:** `opencode/iceman-free`; `iceman-contributor-free` (Go).
- **Context window:** 262,144 in / 131,072 out.
- **Modalities:** text in, text out only; reasoning effort low/medium/high/xhigh (max rejected); tool calls.
- **Pricing (as of 2026-11-10):** free during the limited preview — **in exchange for data**: prompts and completions are retained and used to improve the model ("Contributor" trade). No standard paid lane yet.
- **Architecture:** undisclosed; closed weights.

### Raw benchmarks found

> StealthMark (Stealth Models' independent hard-task suite: original SVG scene construction + planning games, judged on requirements met) — Iceman Contributor run, 2026-10-25. These are deliberately novel tasks, not classic evals; low scores indicate weak generalization to unseen hard problems rather than classic benchmark weakness.

Agent / tool use:

- No classic agentic benchmark rows (Terminal-Bench / Tau / SWE) published
- StealthMark planning games: Foresight **3.2** (rank 52/52 — survived 0 of 3 levels), Latch **3.6** (rank 49/53 — cleared 1 of 5)
- Reasoning efficiency: single-step **30** (rank 49/54), multi-step **37** (rank 25/52)
- Speed (Stealth Models runs): **46 tok/s** average (18–62 range), ~0.9 s to first answer

Reasoning / knowledge:

- StealthMark General Intelligence: **11.7/100** (spatial & physical reasoning)
- Classic GPQA/HLE/AA Index: no verified public score found

Coding:

- No classic coding benchmark rows published (heavy real-world coding usage on OpenCode, ~417B tokens in its first day across ~10,856 users; ~3.37T tokens by 2026-11-04 across two IDs)

Multimodal:

- Text-only (StealthMark "Visual Intelligence" 31.0 refers to SVG construction ability, not image input)

Composite:

- **StealthMark overall: 19.2/100, rank 51 of 56** (compare: Glyph Cluster 18.9, Qwen3.6-35B-A3B 20.8, Nemotron 3 Ultra 16.7); sub-scores — Selfie 39.3, Mona Lisa 19.3, Beach 46.4 (best), Newton's Mirror 10.1, Ground Truth 20.2, Raccoon 29.8, Pelican 38.0

### Normalized scores (1–100)

- **Tool use: 58/100.** Tool calling with four reasoning levels and massive real-world agent traffic, but zero classic agentic benchmark rows and the weakest planning-game scores in the StealthMark field cap it.
- **Reasoning: 55/100.** StealthMark General Intelligence 11.7 on hard novel tasks and mid-low planning tests suggest a workhorse rather than a frontier reasoner; no GPQA/HLE-classic rows exist.
- **Context window: 80/100.** 262K in / 131K out is the mid-high tier; no measured retrieval.
- **Multimodal: 15/100.** Text-only by definition (template floor).
- **Coding: 58/100.** Pointed at coding/agent work by OpenCode and used at enormous volume, but with no verifiable coding benchmark score, only mid-tier retained.
- **Cost efficiency: 98/100.** Free during preview with no usage cap on Go; the price is data retention for training — a real caveat, not a cash cost.
- **Overall Score: 53/100.** (58 + 55 + 80 + 15 + 58) / 5 = 53.2 → 53. Best fit: bulk non-sensitive coding prototypes and synthetic tasks where zero token cost outweighs the training-data trade and unproven hard-task reasoning.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-10
- Method: public internet research (Stealth Models guide + StealthMark benchmark page, @aitrackerbot token-count analysis, OpenCode Zen/Go docs and release PRs, models.dev commit). StealthMark is an independent harness; all scores are its hard-task suite and labelled as such. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Stealth Models — Iceman Contributor guide](https://stealthmodels.com/iceman-contributor)
  - [Stealth Models — Iceman Contributor benchmark scores](https://stealthmodels.com/benchmarks/models/iceman-contributor)
  - [@aitrackerbot — token-count match with Microsoft MAI Thinking 1](https://x.com/aitrackerbot/status/2114122939545088257)
  - [OpenCode Zen docs — Iceman Free](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
