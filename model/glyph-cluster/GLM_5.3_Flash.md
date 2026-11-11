# Glyph Cluster — findings by GLM 5.3 Flash

- Source: undisclosed maker via Vercel AI Gateway (`stealth/glyph-cluster`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Glyph Cluster
- **Short description:** An anonymous stealth reasoning model in early access on Vercel AI Gateway (listed 2026-10-07) for coding and long-context analysis — code review, debugging, implementation planning and cross-document comparison over a 256K window. Maker undisclosed; the o200k_base tokenizer signature reported by independent trackers points to an OpenAI-family/MAI lineage (unverified).
- **Provider / access:** Vercel AI Gateway, model ID `stealth/glyph-cluster` (AI SDK, OpenAI Chat Completions, OpenAI Responses API); selectable in Claude Code, Codex, Cursor and fx. Pro or Enterprise teams with purchased AI Gateway credits; usage free during the stealth period.
- **Release / knowledge:** appeared 2026-10-07 on AI Gateway; knowledge cutoff unverified (stealth).
- **IDs:** `stealth/glyph-cluster` — the only route; no other gateway or vendor page exists.
- **Context window:** 256,000 total; 256,000 max output (official Vercel model page — output equals input, unusually large).
- **Modalities:** Text in, text out. Streaming and function calling with user-defined tools; no image/file input; no structured outputs. No Zero Data Retention — prompts and outputs may be retained and used for training.
- **Pricing (as of 2026-11-11):** free during the stealth period (Pro/Enterprise + AI Gateway credits); post-stealth pricing unannounced.
- **Architecture:** undisclosed (stealth). Independent StealthMark measurement: 69 tokens/s output (slower than median), single-step reasoning-efficiency rank 6/55, multi-step rank 30/53 (Balanced Integration Score).

### Raw benchmarks found

Independent StealthMark suite (stealthmodels.com; original demanding tasks with published judging and replays, measured 2026-10-08):

- StealthMark overall: **18.9/100** — rank 53/57 (bottom decile of the gallery)
- General Intelligence (spatial & physical reasoning, planning): **12.0/100**
- Visual Intelligence (visual construction & detail): **29.8/100**
- Foresight (threat anticipation, planning): **6.4/100**, rank 50/53 — survived 0 of 3 levels
- Latch (cooperative planning, learning across levels): **3.6/100**, rank 50/54 — cleared 1 of 5 levels
- SVG construction: Beach **46.3** (rank 46/57, best placing), Pelican **44.3** (50/57), Raccoon **35.7** (52/57), Selfie **32.4** (54/57), Ground Truth **19.9** (52/57), Newton's Mirror **12.8** (51/57), Mona Lisa **11.7** (52/57)
- Reasoning efficiency: single-step **77** (rank 6/55), multi-step **35** (rank 30/53)
- Cohort context: Iceman Contributor 19.2, Qwen3.6-35B-A3B 20.8, Nemotron 3 Ultra 16.7, Gemma 4 26B A4B 21.2, MAI-Thinking-1 14.1
- SWE-bench / LiveCodeBench / GPQA / HLE / BFCL / MMLU: no verified public score found

Long context:

- no long-context retrieval reported (256K window official; no MRCR/RULER value published)

### Normalized scores (1–100)

- **Tool use: 52/100.** Function calling is supported and the single-step reasoning-efficiency rank (6/55) shows efficient task comprehension, but multi-step efficiency is mid-pack (30/53), both StealthMark planning games failed (Foresight 0/3 survival, Latch 1/5), and no tool-use benchmark (BFCL/Tau) has been measured — capability claim plus weak proxies.
- **Reasoning: 50/100.** Bottom-decile StealthMark (18.9, rank 53/57) with General Intelligence 12.0 and bottom-quintile physical/spatial reasoning (Newton's Mirror 12.8); the strong single-step efficiency rank keeps it functional rather than failing; no standard reasoning benchmark exists to counterweight the hard-suite result.
- **Context window: 76/100.** 256K in / 256K out — the symmetric quarter-meg window with a 256K output cap is the best-in-class output allowance (200K–500K input tier, above the 200K=70 anchor); no retrieval measurement published.
- **Multimodal: 18/100.** Text-only input and output (no image/file in; no structured out) — the bottom text-only band; SVG construction is code generation, not image understanding.
- **Coding: 58/100.** Positioned and used for code review/debugging/implementation planning, and mid-tier SVG code construction (Beach 46.3, Pelican 44.3) shows it can emit working structured code — but precision tasks collapse (Mona Lisa 11.7, Newton's Mirror 12.8) and no standard coding benchmark has been published.
- **Cost efficiency: 95/100.** Free during the stealth period on AI Gateway — near the $0=100 anchor, docked for the time-limited window and the explicit no-ZDR training-data retention caveat.
- **Overall Score: 51/100.** Mean of the five non-cost dims (52+50+76+18+58)/5 = 50.8. Best-fit recommendation: a free long-window scratchpad for code review and document comparison during the stealth period; not a pick for hard multi-step planning, precision visual code, or anything multimodal.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official Vercel AI Gateway model page + changelog, independent StealthMark benchmark gallery with published methodology); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Vercel Changelog — Glyph Cluster is now available in stealth for free on AI Gateway](https://vercel.com/changelog/glyph-cluster-is-now-available-in-stealth-for-free-on-ai-gateway)
  - [Vercel AI Gateway — Glyph Cluster model page (specs)](https://vercel.com/ai-gateway/models/glyph-cluster)
  - [Stealth Models — Glyph Cluster benchmark results (StealthMark, replays, methodology)](https://stealthmodels.com/benchmarks/models/glyph-cluster)
  - [Stealth Models — Glyph Cluster model guide (tokenizer/identity evidence)](https://stealthmodels.com/glyph-cluster)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
