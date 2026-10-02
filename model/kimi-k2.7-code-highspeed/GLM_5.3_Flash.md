# Kimi K2.7 Code HighSpeed — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k2.7-code-highspeed`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's low-latency serving mode for Kimi K2.7 Code, the agentic coding fine-tune of the Kimi K2.6 base (1T-parameter open-weight MoE). Sibling of `kimi-k2.7-code`, not an alias.
- **Provider / access:** Moonshot native Kimi API (HighSpeed mode beta-gated via the Kimi Code Beta channel), plus OpenRouter, Cloudflare Workers AI, Vercel AI Gateway, Aihubmix and other gateways — OpenAI-compatible Chat Completions-style API. Not in the current OpenCode Zen endpoint list — no Zen Free ID.
- **Release / knowledge:** Kimi K2.7 Code released 2026-06-12; the HighSpeed serving mode followed 2026-06-15 (Kimi Code Beta channel). Knowledge cutoff: no verified public data found.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`, `kimi-k2.7-code-highspeed` (OpenRouter), `aihubmix/kimi-k2.7-code-highspeed` (no Zen ID currently listed)
- **Context window:** 262,144 tokens total (HokAI + OpenRouter listings); max output 49,152 (HokAI) vs 32,768 (CloudPrice API, 2026-10-01) — sources conflict on max output, total window is corroborated at 262K.
- **Modalities:** text, image, video in (native MoonViT encoder); text, tool-calls, code out; extended thinking always on (interleaved thinking across tool calls); function calling yes; structured outputs yes.
- **Pricing (as of 2026-10-02):** Paid — Moonshot native API $0.95 / 1M input, $4.00 / 1M output, cached input $0.19 (HokAI, checked 2026-08-31); provider routes quote $1.90 / $8.00 with cached $0.32–$0.38 (Aihubmix, Vercel AI Gateway, Serenities). OpenRouter is quoted $0.74/$3.50 by HokAI but $1.90/$8.00 by Serenities — conflicting; Cost efficiency scored on the two-source-corroborated $1.90/$8.00 rate.
- **Architecture:** Open weights under a Modified MIT License (Hugging Face/GitHub): MoE transformer, 1T total / 32B active parameters, 61 layers, 384 experts (8 routed + 1 shared per token), Multi-head Latent Attention (MLA), SwiGLU, 160K vocabulary, 400M-parameter MoonViT vision encoder; FP8 weights plus native quantization-aware-trained INT4 weights (vLLM/SGLang/KTransformers serving).

### Raw benchmarks found

Agent / tool use:

- MCP Mark Verified: **81.1** (vendor-reported on a third-party tool-invocation benchmark covering Notion, GitHub, Postgres, Filesystem, and Playwright environments; ahead of Claude Opus 4.8's 76.4 on that specific test — HokAI, 2026-06-12)
- Terminal-Bench 2.1: no verified public score found (HokAI notes Opus 4.8 leads on broader suites like Terminal-Bench 2.1, but no K2.7 Code HighSpeed number is published)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- MLS Bench Lite (Moonshot in-house): **35.1** (vendor-reported, 2026-06-12; +31.5% relative vs K2.6's 26.7)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found (Moonshot has not submitted K2.7 Code to any independently audited benchmark suite as of late June 2026; closest open-weight rival GLM-5.2 holds 62.1% SWE-bench Pro)
- Kimi Code Bench v2 (Moonshot in-house): **62.0** (vendor-reported, 2026-06-12; vs K2.6's 50.9, a 21.8% relative gain)
- Program Bench (Moonshot in-house): **53.6** (vendor-reported, 2026-06-12; vs K2.6's 48.3, +11.0%)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- no long-context retrieval reported (262K window documented; no MRCR/RULER/GraphWalks published)

### Normalized scores (1–100)

- **Tool use: 82/100.** Third-party MCP Mark Verified 81.1 beats Claude Opus 4.8's 76.4 across five distinct environments; the absence of published Terminal-Bench 2.1 / GDPval-AA numbers caps it below frontier tool agents.
- **Reasoning: 63/100.** No verified public GPQA Diamond, HLE, or LCR scores; only Moonshot's in-house MLS Bench Lite 35.1 is public — mid-tier placement capped by absent third-party reasoning evidence.
- **Context window: 72/100.** Verified 262,144-token total window (200K–500K tier); no measured long-context retrieval published (no MRCR/RULER), keeping it mid-tier.
- **Multimodal: 78/100.** Native MoonViT vision encoder takes image and video input alongside text without a captioning step; text-only output keeps it below audio-out models.
- **Coding: 67/100.** Strong in-house Kimi Code Bench v2 62.0 and Program Bench 53.6, but zero independently audited coding scores (no SWE-bench Verified/Pro, LiveCodeBench) — GLM-5.2's audited 62.1% SWE-bench Pro marks the gap.
- **Cost efficiency: 79/100.** Paid: $1.90/$8.00 per 1M (blended 3:1 ≈ $3.43/M) on the corroborated provider rate; HokAI quotes a lower native rate of $0.95/$4.00 with $0.19 cached input; the ~30% reasoning-token cut lowers real-world agentic cost further.
- **Overall Score: 72.4/100.** Mean of the five non-cost dims (82 + 63 + 72 + 78 + 67) / 5 = 72.4; best fit: MCP-heavy agentic coding stacks wanting open weights, native INT4 self-hosting, and high tool-call reliability.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (HokAI model hub, Serenities AI, web searches); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
