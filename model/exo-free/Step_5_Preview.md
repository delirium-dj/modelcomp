# Exo Free — findings by Step 5 Preview

- Source: OpenCode Zen free route (`exo-free`); lab unknown
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free (`exo-free` on OpenCode Zen)
- **Short description:** OpenCode Zen's newest anonymous free route — listed **2026-10-06** and advertised in the docs alongside MiMo, Ling and Nemotron as a feedback-collection freebie ("Exo Free is available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model"), though unlike Big Pickle and Space Bunny Free it is **not** officially labeled a stealth model, and models.dev marks the provider simply "Provider-specific" with no lab page. Its specs are unusually large for an anonymous route: a **1M-token context (1,048,576)**, 131,072-token output, reasoning capability, tool calling, and image input, with reasoning effort fixed at high and temperature unsupported — a configuration that reads like a frontier-adjacent model held back for evaluation. The adoption curve is the strongest evidence it is real: **33.1B tokens, 11,741 unique users and 236,908 completed sessions** in two months, rank #29 by weekly tokens, 99.2% cache-read share (implying long-prompt reuse), zero total cost. The first usage logged 2026-09-30 with a single user, peaking at 6,178 users on 2026-10-07. **No benchmark score of any kind is published** — Artificial Analysis does not list it and the data endpoint returns an empty benchmark array — so every capability line below rests on verified specs and production traffic rather than evals.
- **Provider / access:** OpenCode Zen only (`https://opencode.ai/zen/v1/chat/completions`, OpenAI-compatible SDK); not an OpenRouter model.
- **Release / listing:** 2026-10-06 (usage began 2026-09-30).
- **Context window:** 1,048,576 tokens; max output 131,072.
- **Modalities:** Text + image in; text out; reasoning (effort fixed high), tool calling.
- **Pricing (as of 2026-10-09):** $0.00 / $0.00 / $0.00 — free for a limited time, data may be used to improve the model.

### Raw benchmarks found

- GPQA, SWE-bench, Terminal-Bench, MMLU, Artificial Analysis Intelligence Index, arena Elo: **no verified public score found** (model not listed on Artificial Analysis; models.dev and the OpenCode data endpoint both carry no benchmark entries)
- Production usage (opencode.ai/data/unknown/exo, updated 2026-10-08): 33.1B tokens, 11,741 unique users, 236,908 sessions over 2 months, $0 total cost, 99.2% cache-read share; rank #29 by tokens in the trailing week; first usage 2026-09-30 (1 user), peak 2026-10-07 (6,178 users)
- Verbatim: "Exo Free | exo-free | https://opencode.ai/zen/v1/chat/completions" and "Exo Free | Free | Free | Free" — https://opencode.ai/docs/zen/

### Normalized scores (1–100)

- **Tool use: 42/100.** Native tool calling is confirmed and 236,908 completed agent sessions show the route is being driven through real harness work, but with zero published function-calling or agentic-benchmark scores the spec-only band is capped low-mid.
- **Reasoning: 42/100.** Reasoning mode is fixed at high, implying a reasoning-capable backend; no GPQA/HLE/AIME/AA-index value exists to place it higher.
- **Context window: 85/100.** A verified 1,048,576-token context with 131,072 output is the ≥1M band (95–100), docked because no MRCR/RULER/needle-retrieval curve exists — the 99.2% cache-read share is indirect evidence of genuinely long prompts, not of retrieval accuracy.
- **Multimodal: 60/100.** Image input is acknowledged by trackers, placing it in the image-input band (60–70), scored at the floor because no vision benchmark (MMMU, DocVQA, Math-Vision) is published and audio/video input are not supported.
- **Coding: 40/100.** No SWE-bench, Terminal-Bench or LiveCodeBench figure exists; the route is demonstrably popular with coding-harness traffic (236,908 sessions), which supports function but not quality.
- **Cost efficiency: 95/100.** $0.00/$0.00 is the methodology's $0 tier, docked five points for the limited-time terms and the explicit data-collection clause.
- **Overall Score: 54/100.** Best-fit recommendation: the free 1M-context frontier-tier experiment — a 1M-context, image-input, high-effort reasoning route at zero cost with verified five-figure adoption; its scores are spec-and-traffic-derived and should be revised the moment an independent benchmark publishes.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenCode Zen docs and usage-data JSON, models.dev provider entry, third-party listing/usage trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Exo_Free_2.md`, using the same headings.
