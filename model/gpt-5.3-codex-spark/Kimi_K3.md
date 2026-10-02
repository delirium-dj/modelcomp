# GPT-5.3-Codex-Spark — findings by Kimi K3

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** OpenAI's first real-time coding model — a smaller, distilled/pruned sibling of GPT-5.3-Codex served on Cerebras Wafer-Scale Engine 3 hardware at >1,000 tokens/sec. Research preview for interactive, in-the-flow edits; explicitly a companion to (not replacement for) full Codex models.
- **Provider / access:** Research preview for ChatGPT Pro users in the latest Codex app, CLI, and VS Code extension; separate preview rate limits (usage does not count against standard limits, may queue under load). API access limited to select design partners at launch — no public per-token API pricing or public API model page found.
- **Release / knowledge:** Released 2026-02-12 (official announcement; first milestone of the OpenAI–Cerebras partnership announced Jan 2026). Knowledge cutoff not published.
- **IDs:** `openai/gpt-5.3-codex-spark` (API, design partners only). No Free ID exists on OpenCode Zen.
- **Context window:** 128K tokens (official announcement).
- **Modalities:** Text-only in/out at launch (official announcement; multimodal and longer context promised for later family members). Agentic coding loop with minimal, targeted default edit style.
- **Pricing (as of 2026-10-01):** No published per-token pricing — research preview bundled with ChatGPT Pro under separate rate limits; API pricing for design partners not public. Cost score is provisional on subscription-bundled access.
- **Architecture:** Proprietary smaller/distilled variant of GPT-5.3-Codex mapped to Cerebras WSE-3 SRAM/compute profile; served on wafer-scale hardware for >1,000 tok/s generation, with 80% lower client/server roundtrip overhead and 50% lower time-to-first-token via persistent WebSocket (official announcement). Same safety training as mainline models; below Preparedness Framework High thresholds for cyber/bio.

### Raw benchmarks found

Agent / tool use / coding:

- Terminal-Bench 2.0: **~58.4%** — third-party estimate (CometAPI analysis, 2026-02), PROVISIONAL; OpenAI's own chart (image-only) shows "strong performance in a fraction of the time" without extractable numbers. Cerebras (vendor partner) states it beats GPT-5.1-Codex-mini on SWE-Bench Pro and Terminal-Bench 2.0.
- SWE-Bench Pro (public): stronger than GPT-5.1-Codex-mini per OpenAI/Cerebras (qualitative); **no verified numeric score found** (chart image not extractable).
- GDPval-AA / Tau3-Banking / Claw-Eval / OSWorld / Toolathon / MCP-Atlas: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt: **no verified public score found** for this variant.
- Qualitative only: OpenAI/Cerebras describe reduced multi-step reasoning depth versus full GPT-5.3-Codex (distillation trade-off).

Long context:

- **No long-context retrieval benchmark reported** (128K window; no MRCR/RULER/GraphWalks published).

### Normalized scores (1–100)

> Confidence is low across the board: the only numeric score is a third-party provisional estimate. Treat this report as a placeholder-grade assessment pending official numbers.

- **Tool use: 60/100.** Terminal-Bench 2.0 ~58.4% (provisional, third-party) maps to the upper-mid band; capped by estimate-only status and no Tau3/GDPval-AA. Real-time steerability is a genuine workflow strength not captured by the references.
- **Reasoning: 55/100.** No published reasoning benchmarks for this variant; scored mid-band as a distilled small-model sibling, explicitly provisional — the distillation trade-off (vendor-acknowledged weaker multi-step reasoning) risks this being optimistic.
- **Context window: 62/100.** Tier mapping: 128K sits near the top of the 100K–200K band (50–64); no retrieval-depth numbers published.
- **Multimodal: 15/100.** Text-only in and out at launch (official) → text-only band (10–20).
- **Coding: 65/100.** Beats GPT-5.1-Codex-mini on SWE-Bench Pro + TB 2.0 (vendor, qualitative) with the ~58.4% TB 2.0 estimate and >1000 tok/s interactivity; capped by the absence of verified SWE-bench numbers and correctness-first tasks where the full model is materially superior per vendor testing.
- **Cost efficiency: 75/100 (provisional).** No per-token price published; bundled with a ChatGPT Pro subscription under separate preview rate limits. Scored as cheap-but-ungated-billing-unknown, pending a public API price.
- **Overall Score: 51/100.** Half-up mean of the five quality dims: (60 + 55 + 62 + 15 + 65) / 5 = 51.4 → 51. Text-only modality and provisional benchmark coverage drag the composite; the value is in speed for interactive work. Best fit: ultra-low-latency coding sidekick (inline edits, quick refactors, boilerplate) paired with a full Codex-class model for verification; not a standalone agentic coder.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.3-Codex-Spark", 2026-02-12; Cerebras partnership blog, 2026-02-12; CometAPI comparison analysis, 2026-02, provisional estimate); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark picture is thin — revisit when OpenAI publishes official numeric results or API pricing.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4.md`, using the same headings.
