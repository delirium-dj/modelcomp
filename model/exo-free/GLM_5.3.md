# Exo Free — findings by GLM 5.3

- Source: OpenCode Zen stealth free tier (`opencode/exo-free`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Exo Free
- **Short description:** An anonymous stealth model OpenCode Zen slipped into the free picker around 2026-10-07, $0 with ~1M context and reasoning. Community fingerprinting points to Claude Opus 5.5 at 99.4% confidence; vendor officially unknown.
- **Provider / access:** OpenCode Zen `opencode/exo-free` at `https://opencode.ai/zen/v1` (OpenAI-compatible Chat Completions).
- **Release / knowledge:** appeared ~2026-10-07 (unannounced); knowledge cutoff unknown.
- **IDs:** `opencode/exo-free` (Free ID; limited-time free tier — "the team is using this time to collect feedback and improve the model").
- **Context window:** 1,048,576 tokens total, 131,072 max output (Zen listing / pi.dev catalog entry).
- **Modalities:** text + image in → text out; reasoning on; tool use supported; caching supported (LLMRates capability flags).
- **Pricing (as of 2026-10-16):** $0 input / $0 output / $0 cached during the promo (LLMRates, Zen). Caveat: no zero-data-retention guarantee — prompts and uploads may be used for future model training; endpoint is volatile (429s and dropouts under load).
- **Architecture:** undisclosed; fingerprint evidence (99.4% match to `claude-opus-5.5`, lm.ikale.io probe, runner-up claude-fable-5.1 at 0.4%) suggests either a blind evaluation of Opus 5.5, a routing exposure, or a high-quality distill — closed-set matching cannot distinguish these.

### Raw benchmarks found

Agent / tool use:

- Tool use supported natively (Zen/LLMRates capability flags) — no Terminal-Bench / Tau / MCP-Atlas rows exist
- No verified public agent-benchmark score found for this ID

Reasoning / knowledge:

- lm.ikale.io fingerprint: **99.4% match to claude-opus-5.5** (numeric-generation bias + tokenizer probing, ~300-sample probe; community run reported 2026-10-07) — identity evidence, not a capability benchmark
- Pelican-on-a-Bicycle spatial geometry test (Blender/Three.js render): **passed** — feet-on-pedals, wings-on-handlebars, ground contact without clipping (community stress test, freeaiapi.org hands-on)
- GPQA / HLE / standard reasoning suites: no verified public score found

Coding:

- Convenience-store Blender modeling: **complete Blender Python script generated cleanly on first attempt** — structured depth and shading (community hands-on)
- Microservice architecture diagram debugging + mobile error-screenshot diagnostics: accurate, actionable (community hands-on)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window listed; no MRCR/RULER retrieval score published — no verified long-context retrieval score found.

### Normalized scores (1–100)

> Provisional: no standard benchmark rows exist for this stealth ID; scores rest on the fingerprint proxy (Opus 5.5-class) plus hands-on community tests, and can shift or vanish if the endpoint is pulled or swapped.

- **Tool use: 78/100.** Native tool use + reasoning verified, and the fingerprint proxy implies Opus-5.5-grade orchestration; capped by zero measured agent-bench numbers and the swap risk inherent to stealth endpoints.
- **Reasoning: 80/100.** Fingerprint points to a top-tier reasoning model and the hands-on spatial/architecture tests passed cleanly; provisional because no leaderboard suite was run under this ID.
- **Context window: 95/100.** 1M (1,048,576) with 131K output verified in the Zen catalog — ≥1M tier, no published retrieval proof.
- **Multimodal: 65/100.** Text + image input with working vision diagnostics in hands-on tests; text-only output; no audio/video/PDF.
- **Coding: 78/100.** First-attempt Blender script generation and diagram/screenshot debugging are strong qualitative signals; no SWE-bench/LiveCodeBench coverage under this ID caps it.
- **Cost efficiency: 95/100.** $0 in/out/cached during the promo — maximum efficiency tier, discounted from 100 for the training-data consent caveat and heavy volatility (429s, dropouts).
- **Overall Score: 79/100.** (78+80+95+65+78)/5 = 79.2 → 79. If the fingerprint holds, this is frontier-grade compute for free — use it for experiments, never for confidential code or production dependencies.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (OpenCode Zen catalog + LLMRates + pi.dev entry, freeaiapi.org hands-on review with lm.ikale.io fingerprint result, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
