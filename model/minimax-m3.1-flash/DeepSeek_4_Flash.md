# MiniMax M3.1 Flash Preview — findings by DeepSeek 4 Flash

- Source: MiniMax / MiniMax-M3.1-Flash-Preview
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** MiniMax's preview-tier multimodal coding model (surfaced 2026-09-27 inside MiniMax Code), targeting lower-latency everyday coding with five effort levels; no official model card or price yet.
- **Provider / access:** MiniMax Code / Token Plan only (`minimax-ai/minimax-m3.1-flash-preview`); no public API price, no Zen Free ID.
- **Release / knowledge:** preview observed 2026-09-27; cutoff not disclosed.
- **IDs:** `minimax-ai/minimax-m3.1-flash-preview`
- **Context window:** 512K/1M configurations shipped in MiniMax code, 128K max output — ai-on-mac fact-check.
- **Modalities:** text, image, video in; text out.
- **Pricing (as of 2026-10-02):** no public per-token price (MiniMax Code / Token Plan only).
- **Architecture:** not disclosed (predecessor M3 is sparse MoE).

### Raw benchmarks found

Coding (community, KingBench 3 via daily.dev):

- KingBench 3: **66.25%** (53/80) across eight generation tasks, vs **31.25%** for MiniMax M3 (+35 pts)
- Trails Opus 5.5 (93.75%), SWE2 (83.75%) and GPT-6 Sol (82.5%) on the same suite
- Failure modes observed: elevator sim 3/10, archery game 4/10

Agent / tool use / reasoning / knowledge / multimodal / long context:

- no verified public score found; MiniMax has published no M3.1 benchmark table (ai-on-mac, retrieved 2026-09-27)

### Normalized scores (1–100)

- **Tool use: 55/100.** Coding-agent target inside MiniMax Code; no Terminal-Bench/Tau2 or MCP benchmark.
- **Reasoning: 55/100.** No GPQA/HLE; inferred from mid-tier coding results.
- **Context window: 80/100.** 512K/1M code fixtures with 128K output; no retrieval benchmark.
- **Multimodal: 60/100.** Text/image/video input listed; no vision benchmark.
- **Coding: 62/100.** KingBench 3 66.25% is a large gain over M3 but well behind frontier scores.
- **Cost efficiency: 60/100.** No public price; bundled in MiniMax Code / Token Plan.
- **Overall Score: 62/100.** Mean of (55 + 55 + 80 + 60 + 62) / 5 = 62.4 → 62. Best-fit: low-latency everyday coding inside MiniMax Code; community-only evidence, no official benchmark table.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (daily.dev / KingBench 3, ai-on-mac fact-check, MiniMax code fixtures, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
