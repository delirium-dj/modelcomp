# Kimi K2.7 Code Highspeed — findings by Big Pickle

- Source: Moonshot AI (`opencode/kimi-k2.7-code-highspeed`, API model `kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** The high-speed serving tier of Moonshot AI's Kimi K2.7 Code — a coding-focused agentic model built on Kimi K2.6 for long-horizon software-engineering trajectories. Identical weights and capabilities to the standard variant; the only difference is streaming speed (~180 t/s, up to ~260 t/s in short-context runs) and a flat 2× price on every billed line. Moonshot states K2.7 Code improves instruction compliance and long-horizon coding over K2.6 while cutting overthinking by ~30%.
- **Provider / access:** Moonshot AI platform (OpenAI- and Anthropic-compatible endpoints, thinking mode always on, `temperature=1.0`, `top_p=0.95`, `max_tokens` default 32K); Fireworks; Vercel AI Gateway (`moonshotai/kimi-k2.7-code-highspeed`); 13+ aggregators incl. OpenRouter, NanoGPT, Eden AI, AIHubMix, Tencent routes; OpenCode Zen `opencode/kimi-k2.7-code-highspeed`.
- **Release / knowledge:** Kimi K2.7 Code released 2026-06-12 (HighSpeed variant documented from 2026-06-15); knowledge reported as 2025-01 on aggregator listings.
- **IDs:** `opencode/kimi-k2.7-code-highspeed` (Zen, standard pricing); upstream `kimi-k2.7-code-highspeed` / `moonshotai/kimi-k2.7-code-highspeed`.
- **Context window:** 262,144 tokens (256K) per Moonshot docs; 32,768 max output tokens by default.
- **Modalities:** text, image and video input (MoonViT 400M vision encoder); text output; native tool calling; always-on thinking mode (reasoning tokens bill as output).
- **Pricing (as of 2026-10-02):** $1.90 in / $8.00 out per 1M; cached input $0.38 — exactly double the standard tier's $0.95 / $0.19 / $4.00. No free API tier ($1 minimum recharge).
- **Architecture:** Mixture-of-Experts, 1T total parameters, 32B activated per token; 384 experts with 8 selected plus 1 shared expert; 61 layers (1 dense); MLA attention, SwiGLU; 160K vocab; open weights under a **Modified MIT License** (native INT4 quantization; ~595GB BF16, ~325GB at Unsloth Dynamic 2-bit, ~40+ t/s self-hosted).

### Raw benchmarks found

All figures are Moonshot's published comparison of Kimi K2.7 Code (same weights as this HighSpeed tier), thinking mode via Kimi Code CLI, averaged across multiple runs:

Coding:

- Kimi Code Bench v2: **62.0** (K2.6 50.9, GPT-5.5 69.0, Claude Opus 4.8 67.4) — in-house, realistic multi-language SWE tasks
- Program Bench: **53.6** (K2.6 48.3, GPT-5.5 69.1, Opus 4.8 63.8)
- MLS Bench Lite: **35.1** (K2.6 26.7, GPT-5.5 35.5, Opus 4.8 42.8)

Agentic:

- MCP Mark Verified: **81.1** (K2.6 72.8, GPT-5.5 92.9, Opus 4.8 76.4) — the one benchmark where K2.7 Code beats Opus 4.8
- MCP Atlas: **76.0** (K2.6 69.4, GPT-5.5 79.4, Opus 4.8 81.3)
- Kimi Claw 24/7 Bench: **46.9** (K2.6 42.9, GPT-5.5 52.8, Opus 4.8 50.4)
- Thinking-token usage: ~**30% lower** than K2.6 (Moonshot claim)

Reasoning / knowledge / vision / long-context:

- GPQA Diamond, HLE, AIME, MMMU: no verified public score found for this model (Moonshot publishes only the six coding/agentic rows)
- No MRCR / RULER / GraphWalks measurement published, despite the 256K window
- Moonshot states instruction compliance in long contexts improved, without a retrieval benchmark

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Mark Verified 81.1 and MCP Atlas 76.0 are genuinely competitive — K2.7 Code beats Claude Opus 4.8 on MCP Mark — and the ~30% reduction in thinking tokens makes long agent loops materially cheaper in practice; capped by Kimi Claw 24/7 at 46.9, and the thinking-mode-always-on design means reasoning tokens always bill as output.
- **Reasoning: 62/100.** No GPQA, HLE or AIME figure is published for this coding-first model, and the only general-difficulty signal, MLS Bench Lite 35.1, is well behind Opus 4.8 (42.8) and GPT-5.5 (35.5); the score reflects strong within-domain inference with no evidence of broad frontier reasoning.
- **Context window: 76/100.** A verified 262,144-token window (256K), larger than most frontier API models at the time, plus Moonshot's explicit ultra-long-context support and a claim of better long-context instruction compliance; discounted for the absence of any published needle-in-haystack or GraphWalks measurement to confirm retention.
- **Multimodal: 72/100.** Native image and video input via a 400M-parameter MoonViT encoder with text output — unusual for an open-weight coding model — but Moonshot publishes no MMMU or other vision benchmark for K2.7 Code, so the modality is documented rather than measured.
- **Coding: 74/100.** Kimi Code Bench v2 62.0 and Program Bench 53.6 clear K2.6 on every row (+21.8 and +5.3 points respectively) with fewer thinking tokens, which is the model's purpose; capped because GPT-5.5 leads all three coding rows (69.0 / 69.1) and Opus 4.8 leads two, so this is a top-tier open coding model rather than the frontier leader.
- **Cost efficiency: 70/100.** The HighSpeed tier doubles the base rate to $1.90/$8.00 — expensive for a "mini" class model and justified only when latency is the bottleneck, since capabilities are identical to the $0.95/$4.00 standard tier; pulled up by open Modified MIT weights ($0 marginal token cost with ~325GB quantized self-hosting) and the ~30% thinking-token saving, pushed down by no free API tier.
- **Overall Score: 72.0/100.** Half-up mean of the five quality dims. Best fit as the latency-optimized open-weight coding agent tier — pick it for interactive edit-run-fix loops where ~180 t/s is worth 2×, otherwise use the standard `kimi-k2.7-code` tier or self-host the identical weights.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Moonshot platform Kimi K2.7 Code quickstart docs, official `moonshotai/Kimi-K2.7-Code` Hugging Face model card and eval tables, Vercel AI Gateway model pages, benchr pricing verification, eesel AI review); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi.md`, using the same headings.

---