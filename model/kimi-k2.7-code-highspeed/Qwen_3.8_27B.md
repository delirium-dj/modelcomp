# Kimi K2.7 Code Highspeed — findings by Qwen 3.8 27B

- Source: Moonshot AI/Kimi K2.7 Code Highspeed
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code Highspeed
- **Short description:** Moonshot AI's lower-latency serving variant of the open-weights Kimi K2.7 Code — "for interactive edits and coding-agent loops." A coding-focused agentic model built upon Kimi K2.6 with ~30% lower thinking-token usage.
- **Provider / access:** OpenCode Zen `opencode/kimi-k2.7-code-highspeed`; Moonshot platform (`kimi-k2.7-code-highspeed`); 14 third-party providers per models.dev (GMI Cloud, Vercel AI Gateway, Eden AI, etc.); also bundled free as `kimi-for-coding-highspeed` in Moonshot's Kimi For Coding subscription plans.
- **Release / knowledge:** Released 2026-06-12 (models.dev); knowledge cutoff 2025-01 per models.dev.
- **IDs:** `moonshotai/kimi-k2.7-code-highspeed`; OpenCode Zen `opencode/kimi-k2.7-code-highspeed`.
- **Context window:** 262,144 total (256K); output cap varies by provider — 32,768 to 262,144 (models.dev provider table; meta.json's "128K total" is a stale placeholder).
- **Modalities:** text + image + video in (video experimental, official API only); text out; reasoning forced (thinking mode with `preserve_thinking`), no instant mode; tool calls; structured outputs.
- **Pricing (as of 2026-06-12):** $1.90 input / $8.00 output per 1M across third-party providers (models.dev); $0.00/$0.00 under the Kimi For Coding subscription plans (kimi.ai / kimi.com).
- **Architecture:** open weights, Modified MIT license; MoE — 1T total / 32B active parameters, 61 layers, 384 experts (8 selected + 1 shared), MLA attention, 160K vocab, MoonViT 400M vision encoder (Hugging Face: `moonshotai/Kimi-K2.7-Code`). Highspeed serves the same weights at lower latency.

### Raw benchmarks found

> Verified via public web research: Moonshot's Hugging Face model card for `moonshotai/Kimi-K2.7-Code` (June 2026). Benchmarks were published for the standard K2.7 Code; the Highspeed variant shares the same open weights and model card, so these are the only verified public numbers for this exact model family. No separate Highspeed-only benchmark table exists; "no verified public score found" is used where a number does not exist.

Coding:

- Kimi Code Bench v2 (in-house, 10+ languages, production-style SWE tasks): **62.0** vs Kimi K2.6 50.9, GPT-5.5 69.0, Claude Opus 4.8 67.4 (Moonshot, thinking mode, 262,144-token context)
- Program Bench (recreate program from compiled binary + docs, 200 tasks, 248K fuzz tests): **53.6** vs GPT-5.5 69.1, Opus 4.8 63.8 (Moonshot)
- MLS-Bench Lite (30-task ML method invention): **35.1** vs GPT-5.5 35.5, Opus 4.8 42.8 (Moonshot)
- SWE-bench Verified / SWE-bench Pro: no verified public score found on the model card
- Terminal-Bench 2.0: no verified public score found (Long-Horizon-Terminal-Bench: 3 tasks solved, HF eval results)

Agent / tool use:

- MCP Atlas (Scale, 100 tool-call budget): **76.0** vs GPT-5.5 79.4, Claude Opus 4.8 81.3, K2.6 69.4 (Moonshot)
- MCPMark Verified (5 real MCP servers: Notion, GitHub, Filesystem, Postgres, Playwright): **81.1** vs GPT-5.5 92.9, Opus 4.8 76.4 (Moonshot)
- Kimi Claw 24/7 Bench (in-house, 17 professional scenarios, multi-day coworking tasks): **46.9** vs GPT-5.5 52.8, Opus 4.8 50.4, K2.6 42.9 (Moonshot; matches internlm WildClawBench 46.9 on HF)
- Tau2-bench / Tau3-banking: no verified public score found
- GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI: no verified public score found (model card is coding/agentic-focused; general-knowledge tables not published)
- MLS-Bench Lite (ML-method invention, reasoning-adjacent): **35.1** — roughly on par with GPT-5.5's 35.5 (Moonshot)
- Artificial Analysis Intelligence Index: no verified public score found
- ~30% reduction in thinking-token usage vs Kimi K2.6 (Moonshot model card)

Long context:

- 256K window; benchmarks run at full 262,144-token context (Moonshot); no dedicated MRCR/RULER retrieval numbers published

Multimodal:

- Image + video input supported (MoonViT 400M vision encoder); video experimental on official API only; text output (Moonshot model card)

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP Atlas 76.0 and MCPMark Verified 81.1 (above Claude Opus 4.8's 76.4) show strong real-environment tool use, but both sit behind GPT-5.5 (79.4/92.9) and Opus 4.8 (81.3) on MCP Atlas, and Kimi Claw 46.9 trails GPT-5.5's 52.8 on long-horizon agentic work — capped there.
- **Reasoning: 68/100.** No GPQA/HLE/ARC-AGI numbers published for this coding-focused model; MLS-Bench Lite 35.1 ≈ GPT-5.5's 35.5 is the only general-reasoning proxy, and the model trades thinking depth for ~30% fewer thinking tokens — solid for its class, unproven at frontier reasoning.
- **Context window: 70/100.** 256K (262,144) total sits mid-band (200K–500K = 65–84); benchmarks ran at full context length but no dedicated long-range retrieval evals were published to push the score higher.
- **Multimodal: 75/100.** Text + image + video input with a 400M MoonViT encoder and text output — broader input coverage than most coding models; capped because video is still flagged experimental and only on the official API.
- **Coding: 74/100.** Purpose-built coding agent: Kimi Code Bench v2 62.0, Program Bench 53.6, MLS Lite 35.1 — all ahead of K2.6 and behind GPT-5.5 (69.0/69.1/35.5) and Opus 4.8 on the harder suites; no SWE-bench Pro/Terminal-Bench numbers published.
- **Cost efficiency: 80/100.** $1.90/$8.00 per 1M is well under the ~$3/$15 ≈ 60 anchor, and open Modified-MIT weights make it self-hostable for near-zero marginal cost; the Kimi For Coding plans bundle it free.
- **Overall Score: 73.0/100.** Mean of 78, 68, 70, 75, 74 (Cost excluded per v4 formula). Fast, cheap, open-weights coding-agent loop model: ideal for interactive edits and high-volume agentic coding when GPT-5.5/Claude-class accuracy on long-horizon tasks is not required.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Moonshot Hugging Face model card, models.dev provider/pricing database, OpenCode Zen registry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
