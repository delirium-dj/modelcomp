# Exo Free — findings by Step 5 Preview

- Source: OpenCode Zen free route (`exo-free`); lab unknown
- Date: 2026-10-19 (UTC) — re-run; first researched 2026-10-09
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free (`exo-free` on OpenCode Zen)
- **Short description:** OpenCode Zen's short-lived anonymous free route — listed **2026-10-06** and advertised in the docs alongside MiMo, Ling and Nemotron as a feedback-collection freebie ("Exo Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model"), though unlike Big Pickle and Space Bunny Free it was **not** officially labeled a stealth model, and models.dev marks the provider simply "Provider-specific" with no lab page. Its specs were unusually large for an anonymous route: a **1M-token context (1,048,576)**, 131,072-token output, reasoning capability, tool calling, and image input, with reasoning effort fixed at high and temperature unsupported — a configuration that reads like a frontier-adjacent model held back for evaluation. The adoption curve was the strongest evidence it was real: **33.1B tokens, 11,741 unique users and 236,908 completed sessions** in two months, rank #29 by weekly tokens, 99.2% cache-read share (implying long-prompt reuse), zero total cost. **Lifecycle update (2026-10-19): the route has been withdrawn** — models.dev now marks the entry `status: deprecated` (last_updated 2026-10-06) and it is absent from the live Zen models endpoint (85 models, checked 2026-10-19; the current free routes are beam-free, mimo-v2.6-flash-free, nemotron-3.5-super-vl-free, nemotron-3.5-lightning-free, jev-1.13-free, longcat-2.5-preview-free, deepseek-v4.1-flash-free, glm-5.3-flash-free, minimax-m3.1-flash-free). No benchmark score of any kind was ever published.
- **Provider / access:** Was OpenCode Zen only (`https://opencode.ai/zen/v1/chat/completions`, OpenAI-compatible SDK); route now withdrawn; not an OpenRouter model.
- **Release / listing:** 2026-10-06 (usage began 2026-09-30); withdrawn between 2026-10-09 and 2026-10-19.
- **Context window:** 1,048,576 tokens; max output 131,072 (re-confirmed 2026-10-19 on models.dev).
- **Modalities:** Text + image in; text out; reasoning (effort fixed high), tool calling.
- **Pricing (while live):** $0.00 / $0.00 / $0.00 — free for a limited time, data may be used to improve the model.

### Raw benchmarks found

- GPQA, SWE-bench, Terminal-Bench, MMLU, Artificial Analysis Intelligence Index, arena Elo: **no verified public score found** (re-verified 2026-10-19: the model is not listed on Artificial Analysis or BenchLM, and models.dev carries no benchmark entries)
- Production usage (opencode.ai/data/unknown/exo, as of 2026-10-08): 33.1B tokens, 11,741 unique users, 236,908 sessions over 2 months, $0 total cost, 99.2% cache-read share; rank #29 by tokens in the trailing week; first usage 2026-09-30 (1 user), peak 2026-10-07 (6,178 users)
- Verbatim: "Exo Free | exo-free | https://opencode.ai/zen/v1/chat/completions" and "Exo Free | Free | Free | Free" — https://opencode.ai/docs/zen/
- **New in the 2026-10-19 re-run:** models.dev record re-verified (all specs unchanged) with `status: deprecated`; route absent from the live Zen models endpoint of 2026-10-19

### Normalized scores (1–100)

Re-run verdict 2026-10-19: **scores unchanged.** The route's withdrawal does not create evidence about capability — no benchmark ever published — and all re-verified specs (1M context / 131K output / text+image / reasoning / $0) match the 2026-10-09 record exactly. The scores remain spec-and-traffic-derived.

- **Tool use: 42/100.** Native tool calling is confirmed and 236,908 completed agent sessions showed the route being driven through real harness work, but with zero published function-calling or agentic-benchmark scores the spec-only band is capped low-mid.
- **Reasoning: 42/100.** Reasoning mode was fixed at high, implying a reasoning-capable backend; no GPQA/HLE/AIME/AA-index value exists to place it higher.
- **Context window: 85/100.** A verified 1,048,576-token context with 131,072 output is the ≥1M band (95–100), docked because no MRCR/RULER/needle-retrieval curve exists — the 99.2% cache-read share was indirect evidence of genuinely long prompts, not of retrieval accuracy.
- **Multimodal: 60/100.** Image input is acknowledged by trackers, placing it in the image-input band (60–70), scored at the floor because no vision benchmark (MMMU, DocVQA, Math-Vision) was published and audio/video input are not supported.
- **Coding: 40/100.** No SWE-bench, Terminal-Bench or LiveCodeBench figure exists; the route was demonstrably popular with coding-harness traffic (236,908 sessions), which supports function but not quality.
- **Cost efficiency: 95/100.** $0.00/$0.00 was the methodology's $0 tier, docked five points for the limited-time terms and the explicit data-collection clause; the route is now withdrawn, so the price is historical.
- **Overall Score: 54/100.** Best-fit recommendation: a withdrawn two-week experiment — a 1M-context, image-input, high-effort reasoning route at zero cost with verified five-figure adoption, now gone from Zen; its scores are spec-and-traffic-derived and would be revised the moment an independent benchmark (or a re-listed route) publishes.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research, re-run 2026-10-19 — models.dev catalog JSON (specs re-verified; `status: deprecated`), the live OpenCode Zen models endpoint (route absent, 85 current models) and Artificial Analysis / BenchLM checks (no listing); original run used OpenCode Zen docs + usage-data JSON and third-party usage trackers. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Exo_Free_2.md`, using the same headings.
