# Grok 4.1 Fast — findings by GLM 5.3 Flash

- Source: xAI (`grok-4.1-fast`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's best agentic tool-calling model (launched 2025-11-19 with the Agent Tools API), built for high-volume real-world tasks like customer support and deep research rather than frontier "brain" work. Tuned from the Grok 4.1 base with heavy RL across simulated tool-use environments. The 2026-10-11 second pass documents a major vendor-vs-independent gap on the non-reasoning base board.
- **Provider / access:** xAI API `grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning` (one model, two modes via the reasoning parameter, same price); OpenRouter `x-ai/grok-4.1-fast`; Oracle Cloud OCI Generative AI `xai.grok-4-1-fast-*`. Chat Completions API. Not listed on OpenCode Zen (no Zen Free ID exists).
- **Release / knowledge:** Released 2025-11-19; free (model + Agent Tools API) through 2025-12-03 at launch via partners including OpenRouter. Knowledge cutoff not published.
- **IDs:** `x-ai/grok-4.1-fast` (OpenRouter); no Free ID on Zen — explicitly stated. BenchLM tracks the non-reasoning base (#150 of 889, 36.37) and a stronger Reasoning sibling (#unranked-value 46.31) separately.
- **Context window:** 2M total tokens (xAI launch post; BenchLM lists 1M for the base — conflict); measured long-context retrieval 67% on the 2M window per HostZealot launch coverage, but AA's base-variant AA-LCR reads 31.3% — the retrieval story is variant-dependent. Max output not published.
- **Modalities:** text and image in (JPG/PNG for vision-assisted agent steps); text out; reasoning yes (reasoning mode emitting thinking tokens; non-reasoning low-latency mode also available); tool calls yes (plus the bundled Agent Tools API — web/code/file tools); JSON mode not verified.
- **Pricing (as of 2026-10-11):** $0.20 in / $0.50 out / $0.05 cached per 1M (same price for both modes); Agent Tools API billed separately at no more than $5 per 1,000 successful tool calls; free through 2025-12-03 at launch.
- **Architecture:** proprietary transformer, API-only weights, trained with large-scale RL on tool use; roughly half the hallucination rate of Grok 4 Fast at similar task accuracy per xAI (no published rate).

### Raw benchmarks found

Agent / tool use:

- τ²-bench Telecom: **100%** (xAI launch post — vendor claim) — **conflicts with AA's independent 63.7% on the non-reasoning base variant**; the reasoning mode is the marketed configuration
- BFCL-V4: **72%** (xAI launch post)
- Reka Research-Eval: **63.9%** at **$0.046**/query (vs GPT-5 45.5%/$0.107, Claude Sonnet 4.5 41.2%/$0.065); X Browse: **56.3%** at **$0.091** (vs GPT-5 24.2%/$0.198) — cost-per-query leadership stands
- Gert Labs: **47.32%** (independent, new)
- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **11.3** (AA, non-reasoning base — the Reasoning sibling scores materially higher per BenchLM's 46.31 composite); AA-GPQA Diamond: **63.7%** (AA — **far below the frontier class**); AA-HLE: **5.1%** (AA)
- FRAMES: **87.6%** (xAI launch post; vs GPT-5 86%, Gemini 3 Pro 90.9%)
- AA-LCR v1.1: **31.3%** (AA base — **conflicts with the vendor-measured 67% at 2M**); CritPt: **0.0%** (AA)
- AA-Omniscience: **17.2% accuracy / 82.3% non-hallucination row / −50.9 index** (AA — worst index measured in this repo)
- AA-IFBench: **36.5%** (AA)
- LCR / MLCR / CritPt: no verified public score found for the reasoning variant

Coding:

- No verified SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench numbers exist for either variant — the tool-calling strength does not translate into verified coding benchmarks

Long context:

- 2M window (vendor) vs BenchLM 1M (base listing) — conflict; AA-LCR 31.3% (base) vs vendor-measured 67% (reasoning mode at 2M) — retrieval is variant-dependent

Multimodal:

- AA-MMMU-Pro: **48.4%** (AA base — mid-low measured vision)

### Normalized scores (1–100)

- **Tool use: 88/100.** (Was 92 on the prior pass.) The τ² Telecom 100% vendor claim and the Reka/X Browse cost-per-query leadership stand, but AA's independent 63.7% (non-reasoning base) and the missing Terminal-Bench/GDPval verification temper the frontier-tier call.
- **Reasoning: 56/100.** (Was 62 on the prior pass.) The AA base board is weak (Index 11.3, GPQA 63.7%, HLE 5.1%, CritPt 0.0%) while the Reasoning sibling is the stronger config (BenchLM 46.31 composite) — the dual-mode ID lands between, docked for the unresolved variant split and the −50.9 Omniscience index.
- **Context window: 88/100.** (Was 94 on the prior pass.) 2M claimed (vendor) vs 1M (BenchLM base listing); AA-LCR 31.3% (base) vs the vendor's 67% at 2M — the retrieval evidence no longer supports the top-tier call without variant resolution.
- **Multimodal: 62/100.** (Was 65 on the prior pass.) Image input with measured MMMU-Pro 48.4% (AA base) — mid-low for the band.
- **Coding: 55/100.** (Was 58 on the prior pass.) Still no verified coding benchmark for either variant — provisional low-mid score capped entirely by missing data.
- **Cost efficiency: 95/100.** $0.20/$0.50 per 1M with $0.05 cached input is near the ~$0.10/$0.20 → 97–99 band, and the $0.046–$0.091 per-query agent costs beat GPT-5 and Sonnet 4.5 by 2–3×; no Zen Free ID (scored on paid pricing; free promo ended 2025-12-03).
- **Overall Score: 69.8/100.** (Was 74.2 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (88 + 56 + 88 + 62 + 55) / 5 = 349/5 = 69.8 — lowered on the 2026-10-11 second pass as AA's independent base-variant board documents a large gap behind the launch-day vendor claims. Best fit: the default cheap workhorse for tool-chaining support agents and 2M-context deep research in its reasoning mode — not a primary coder or frontier reasoner, and verify the variant before benchmark-sensitive deployments.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai non-reasoning base page + Reasoning sibling reference updated 2026-10-10 with AA citations, the prior 2026-10-03 pass on the xAI launch post via AI/TLDR + HostZealot, OpenRouter/Oracle OCI listings; 2026-10-16 re-check: BenchLM 12-row refresh corroborates every row, no new data (rank drift: base #150/889 36.37 → #154/954 36.45; Reasoning sibling 46.31 → 45.83) — no score changes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
