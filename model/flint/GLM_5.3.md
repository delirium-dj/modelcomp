# Flint 40B Free — findings by GLM 5.3

- Source: Recursive Superintelligence, Inc. (`RecursiveSI/flint`, OpenCode Zen free lane `flint-40b-free`, OpenRouter `recursive/flint` free variant)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Supersedes `GLM_5.3.md.excluded` (2026-10-21): at release the model had zero public benchmark numbers. The official HF model card (with a three-benchmark evaluation table) and 38 community quantizations landed within two days — genuinely new verified evidence, so this fresh scored report is written per the twin procedure.

## Model card

- **Name:** Flint 40B Free
- **Short description:** Recursive Flint — Recursive Superintelligence, Inc.'s from-scratch open-weight MoE language model purpose-built for coding agents (investigating codebases, fixing bugs, implementing features, writing tests), built by Recursive's "Eureka Machine" autoresearch system. Served free on OpenCode Zen as `flint-40b-free` (limited-time; data may be used for training during the free period and retained 30 days) and on OpenRouter as a free variant.
- **Provider / access:** OpenCode Zen `opencode/flint-40b-free` (live endpoint + docs, verified 2026-10-23); OpenRouter `recursive/flint` ($0/$0); HF weights `RecursiveSI/flint` (BF16, ~80 GB) with an SGLang serving kit for one B300 or H200 per replica; 38 community quantizations (GGUF, MXFP4, MLX, NVFP4) for local execution.
- **Release / knowledge:** released 2026-10-21 (OpenRouter, models.dev, Zen); stated knowledge cutoff June 2026.
- **IDs:** `RecursiveSI/flint` (HF), `recursive/flint` (OpenRouter), `flint-40b-free` (Zen).
- **Context window:** 262,144 tokens documented (prompt + output share the window) — the card explicitly notes this is a capacity limit, "not a guarantee of uniform accuracy across all sequence lengths".
- **Modalities:** text in; text out; extended reasoning (reasoning_content must be preserved in history); multi-turn OpenAI-compatible tool use; structured tool-call grammar.
- **Pricing (as of 2026-10-23):** $0/$0 free on Zen and OpenRouter (privacy caveat above); Apache 2.0 weights — free self-host.
- **Architecture:** 39.8B total / ~2.5B active per token (~2.2B body + output head); 49 layers (2 dense + 47 MoE); 256 routed experts with top-6 routing + 1 shared expert; hybrid attention — 35 sliding-window layers (513-token window) + 14 full-attention layers; 32 query heads / 4 KV heads, per-head QK RMSNorm + learned attention sinks; RoPE on sliding-window layers only; vocab 150,144; trained from scratch through pretraining, mid-training, SFT, and RL.

### Raw benchmarks found

> All rows are vendor-measured by Recursive (marked †-style in the official card) with disclosed harnesses: temperature 1.0, top-p 0.95, top-k 20; Terminal-Bench via Terminus 2; SWE-bench via mini-swe-agent; agentic scores are average pass@1 over at least five attempts. No independent aggregator coverage exists yet (BenchLM 404, AA 404 as of 2026-10-23) — the model is two days old.

Coding:

- SWE-bench Verified: **74.2%** (official card, mini-swe-agent, pass@1 ≥5 attempts) — clears the 74% frontier reference
- SWE-bench Pro v2: **89.7%** (official card) — an unusually high Pro figure (Pro suites are typically harder than Verified); harness-specific, reported as measured

Agent / tool use:

- Terminal-Bench 2.1: **54.9%** (official card, Terminus 2) — **stricter protocol**: solutions obtained through web retrieval are counted as unsuccessful; the card notes developer-reported comparison scores may not apply the same adjustment, so this figure reads conservative vs. peers

Reasoning / knowledge:

- GPQA / HLE / AIME / LCR: **no verified public score found** — extended reasoning is a documented capability but no general-reasoning benchmark is published

Long context:

- No MRCR/RULER figure published — no verified public score found; 262,144 documented as a capacity configuration

### Normalized scores (1–100)

- **Tool use: 62/100.** TB2.1 54.9% sits mid-band (45–60% → 50–70) under a deliberately stricter-than-peers protocol, with native multi-turn tool calling and demonstrated agentic SWE harness competence (mini-swe-agent); capped by the absence of τ²/Tau3/GDPval rows and vendor-only measurement.
- **Reasoning: 42/100.** No verified public general-reasoning score found — extended reasoning is a shipped feature but entirely unmeasured outside coding; score reflects absence of evidence, not measured weakness.
- **Context window: 72/100.** Documented 262,144 tokens (vendor card + Zen/OpenRouter/models.dev agree) — upper-middle of the 200K–500K tier; no retrieval benchmark published and the card itself flags non-uniform accuracy across lengths.
- **Multimodal: 15/100.** Text in / text out only (official card).
- **Coding: 88/100.** SWE-bench Verified 74.2% is frontier-tier (reference: DeepSWE 74%+ → 90–100 band) and SWE-bench Pro v2 89.7% is exceptional for a 39.8B/2.5B-active model; capped by vendor-only measurement (no independent rows yet) and the unverified Pro-v2 > Verified inversion.
- **Cost efficiency: 100/100.** $0/$0 on the evaluated Zen free tier and OpenRouter; Apache 2.0 self-host at ~2.5B-active compute (fast even partially offloaded to CPU per community benchmarks). Free-period training-data caveat noted for confidential work.
- **Overall Score: 56/100.** (62+42+72+15+88)/5 = 55.8 → 56. Best-fit recommendation: the standout free/open coding agent of its size class — near-frontier SWE-bench Verified at 40B/2.5B-active and free; text-only, with general reasoning and tool breadth still unmeasured, so treat it as a coding specialist pending independent coverage.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-23
- Method: public internet research (official RecursiveSI/flint HF model card incl. evaluation table, OpenRouter catalog + free-variant listing, OpenCode Zen docs + live endpoint, models.dev registry, community quantization cards that corroborate the official specs, BenchLM/AA absence checks). Scores are normalized 1–100 interpretations, not official vendor scores; vendor-measured rows are labelled and the stricter Terminal-Bench protocol is noted.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
