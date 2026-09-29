# Kimi K2.6 — findings by Pixel Canary

- Source: Moonshot AI (`opencode/kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6 (Moonshot AI; OpenCode ID `opencode/kimi-k2.6`; no Zen Free ID)
- **Short description:** The April 2026 refresh of the open-weights Kimi K2 agentic MoE line — a large sparse MoE with a long-context, tool-calling-first design, sold as the cheaper agentic alternative to frontier Western models. This folder's `meta.json` still carries placeholder metadata ("128K total / Text in/out / Standard pricing").
- **Provider / access:** Moonshot Open Platform plus DeepInfra (`moonshotai/Kimi-K2.6`), Cloudflare Workers AI (`@cf/moonshotai/kimi-k2.6`) and other mirrors; OpenAI-compatible API with tool calling and structured output.
- **Release / knowledge:** 2026-04-21 (models.dev `release_date` for `Kimi-K2.6`); knowledge cutoff not published.
- **Context window:** 262,144 tokens. Max output is host-dependent: 16,384 on DeepInfra vs **256,000** on Cloudflare Workers AI. BenchLM's K2-lineage profile still lists 128K.
- **Modalities:** Text in/out (the K2 base line is text-only; Moonshot's multimodal work ships in the separate Omni/Flash lines). Tool calling: yes — the core design goal of the K2 family.
- **Pricing (as of 2026-09-29):** $0.75 / 1M input, $3.50 / 1M output, $0.15 cached reads (DeepInfra); $0.95 / $4.00 with $0.16 cache reads (Cloudflare Workers AI); open weights allow self-hosting.
- **Architecture:** Open-weights sparse-MoE of the Kimi K2 family (Moonshot does not publish a K2.6-specific parameter sheet on the tracked sources; K2.5/K2.7-Code siblings share the same lineage and context size).

### Raw benchmarks found

Closest public profile: BenchLM tracks the K2 base profile `kimi-k2` (composite **26.44/100**, rank **#189 of 512**, only **13 of 486** benchmarks covered, "Non-Reasoning" type). No K2.6-specific profile page exists on BenchLM as of 2026-09-29, so every row below is a lineage proxy, clearly labelled.

- Knowledge (K2 lineage): AA-GPQA Diamond **76.6%**; AA-HLE **7.4%**; AA Intelligence Index **12.7**
- Reasoning: CritPt **0.0%**; FrontierMath v2 Tiers 1–3 **21.4%**, Tier 4 **0.0%**
- Long context: AA-LCR **53.0%**
- Factuality: AA-Omniscience Accuracy **27.4%** / Hallucination Rate **76.6%** / Omniscience Index **−28.3**
- Design: Design Arena Website **1058**

Missing for this exact ID: SWE-bench Verified/Pro, Terminal-Bench 2.x/4.0, LiveCodeBench, GDPval-AA Elo, τ²/τ³-bench, Toolathlon, AutomationBench, MMMU/video suites, MRCR/RULER — i.e. the agentic suite that defines the K2 line is unmeasured for K2.6 in the tracked sources.

### Normalized scores (1–100)

- **Tool use: 70/100.** The K2 family exists for tool calling and the 256K-output Cloudflare tier plus full function-calling/structured-output support make it a practical agent backend, but no K2.6 row for τ-bench, Toolathlon or AutomationBench is published — the score rests on capability surface, not on a measured agentic result.
- **Reasoning: 45/100.** Lineage evidence is weak where it exists: AA Intelligence Index 12.7, AA-HLE 7.4%, CritPt 0.0% and FrontierMath Tier 4 0.0% are bottom-decile — the non-thinking rows dominate what is publicly measurable.
- **Context window: 72/100.** 262K native with up to 256K output is generous for the price, but the only long-context measurement in the family is AA-LCR 53.0% (mid-pack) and there is no MRCR/RULER curve.
- **Multimodal: 35/100.** Text-only in and out for this ID — no image, video, audio or PDF path; only a text-derived Design Arena score (1058) exists, so this dimension is architecturally capped.
- **Coding: 62/100.** The K2 line is positioned as an open agentic coder and the K2.7-Code sibling carries that torch, but for this exact ID there is no SWE-bench, Terminal-Bench or LiveCodeBench number in the tracked sources, so the score is the weakest defensible inference rather than a measured result.
- **Cost efficiency: 80/100.** $0.75/$3.50 with $0.15 cache reads and open weights (self-hostable) is genuinely cheap for 262K context; capped because there is no OpenCode Zen Free ID for this slug and the cheapest host caps output at 16K.
- **Overall Score: 56.8/100.** (70 + 45 + 72 + 35 + 62) / 5 = 56.8 — a cheap, long-context open-weight agent backend whose real-world agentic strength is not yet backed by published K2.6 benchmark rows.

---

## Signature

- Provided by: **Pixel Canary (pixel-canary, early access via Vercel AI Gateway — underlying model not yet announced)** — 2026-09-29
- Method: Public internet research (BenchLM K2-lineage profile `kimi-k2` refreshed 2026-09-28 used as an explicit proxy, models.dev provider/pricing index for `moonshotai/Kimi-K2.6` and `@cf/moonshotai/kimi-k2.6`); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage for this exact ID is thin — treat the scores as provisional.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
