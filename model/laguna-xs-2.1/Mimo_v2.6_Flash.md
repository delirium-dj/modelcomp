# Laguna XS 2.1 — findings by Mimo v2.6 Flash

- Source: Poolside/Laguna XS 2.1
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1 (Poolside, open weights)
- **Short description:** 33B-total / 3B-active MoE coding model for agentic, long-horizon work on a local machine — Poolside's upgraded Laguna XS.2 (best move: +5.4 pts SWE-bench Multilingual). Not a variant of `laguna-s-2.1` (the larger 118B/8B sibling) — a distinct model.
- **Provider / access:** OpenCode Zen `opencode/laguna-xs-2.1` (OpenAI-compatible Chat Completions); Poolside's own API (free **and** paid endpoints, Chat Completions); OpenRouter `poolside/laguna-xs-2.1` ($0.06/$0.12 per this repo's `meta.json`); local: vLLM, SGLang, TensorRT-LLM, HF transformers, Ollama, llama.cpp (FP8/NVFP4/INT4 quants + open-weight DFlash speculators).
- **Release / knowledge:** 2026-07-02 (Poolside blog "Introducing Laguna XS 2.1"); knowledge cutoff not published.
- **IDs:** `opencode/laguna-xs-2.1` (Zen), `poolside/laguna-xs-2.1` (OpenRouter/poolside API), `poolside/Laguna-XS-2.1` (HF). Free endpoints verified on Poolside's API ("Free and paid endpoints are both available"); no Zen Free-ID row confirmable this session.
- **Context window:** 262,144 tokens (HF model card); served at 256K on Poolside's API and OpenRouter, and all official benchmarking ran at 256K context.
- **Modalities:** text in; text out (HF: "Modality: text-to-text"); native reasoning — interleaved thinking between tool calls, toggleable per request (`enable_thinking`); tool calls (first-class, chat template emits `tool_calls` with reasoning preserved); JSON/structured outputs via tool-call format — no dedicated JSON-mode flag documented.
- **Pricing (as of 2026-09-25):** Poolside API $0.10 in / $0.20 out / $0.05 cache-read per 1M (matched to XS.2); OpenRouter $0.06/$0.12 per `meta.json`; free endpoints available on Poolside's API; open weights = self-host at $0. Meta lists no `noFreeId`, and the blog confirms free endpoints — scored on the free tier, paid fallback noted.
- **Architecture:** 33B total / 3B active sparse MoE — 256 experts + 1 shared, 40 layers (10 global + 30 sliding-window-attention, window 512), mixed SWA/global 3:1, sigmoid gating with per-layer rotary scales, FP8 KV cache, Muon optimizer; license **OpenMDW-1.1** (fully permissive, commercial use allowed).

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness). Missing rows say "no verified public score found".

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (Poolside blog / HF card, Laude Harbor framework + Poolside agent harness, mean pass@1 over 5 attempts, 48 GB RAM/32 CPUs, thinking on, 256K context)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found (no AA entry found for this model)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **70.9%** (Poolside blog / HF card, Harbor, mean pass@1 over 4 attempts; predecessor XS.2: 69.9%)
- SWE-bench Multilingual: **63.1%** (Poolside / HF, +5.4 pts over XS.2's 57.7%)
- SWE-bench Pro (public dataset): **47.6%** (Poolside / HF, mean pass@1 over 2 attempts)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 256K serving/eval context (Poolside API/OpenRouter; HF card 262,144); MRCR / RULER / GraphWalks retrieval: **no long-context retrieval reported** — no retrieval quality figure published at any window length

### Normalized scores (1–100)

- **Tool use: 50/100.** Only one agentic number exists — Terminal-Bench 2.0 37.5% — which falls below the methodology's mid band (TB2.1-equivalent 45–60 → 50–70), and there is no Tau3, GDPval, Toolathon or Claw-Eval figure to offset it (missing suites = slight penalty); tool calling itself is first-class (interleaved thinking between tool calls), which keeps it at 50 rather than lower.
- **Reasoning: 55/100.** Zero verified public reasoning/knowledge benchmarks (no GPQA, HLE, LCR, AA Index for this model), so the score stays conservative at the bottom of the mid band (methodology mid = 55–65) — the only signal that reasoning exists at all is solid agentic coding (SWE-V 70.9% with thinking on); what caps it is simply the absence of any measured reasoning evidence.
- **Context window: 72/100.** 262,144 native / 256K served and benchmarked — inside the 200K–500K tier (65–84), a couple of points above the "200K = 70" anchor; held down from the 80s by the complete absence of a retrieval result (MRCR/RULER) to prove the window actually works at length.
- **Multimodal: 15/100.** Text-to-text only (HF model card) — methodology assigns 10–20 for text-only inputs.
- **Coding: 72/100.** SWE-bench Verified 70.9% and Multilingual 63.1% are genuinely strong mid-band results for a 3B-active model (frontier ref: DeepSWE 74%+ / TB 85%+ → 90–100; mid: 65–75), but SWE-bench Pro 47.6% trails the field (GLM-5.1: 58.4), Terminal-Bench 2.0 37.5% is well below mid, and LiveCodeBench/SciCode/Vibe are all missing — those gaps are the cap.
- **Cost efficiency: 100/100.** Free endpoints verified on Poolside's API (blog: "Free and paid endpoints are both available") and the model runs locally at $0 under a fully permissive license — $0 = 100; even paid is cheap ($0.06/$0.12 on OpenRouter, $0.10/$0.20/$0.05 cache-read first-party → ~97–98 if the free tier lapsed).
- **Overall Score: 53/100.** (50 + 55 + 72 + 15 + 72) / 5 = 52.8 → 53 — best-fit: a pocket-sized (3B-active) open-weights coder you run on your own machine for local, private SWE-bench-class fixes (70.9% Verified), not a frontier reasoning or long-context workhorse.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-25
- Method: public internet research (Poolside release blog 2026-07-02, Hugging Face model card `poolside/Laguna-XS-2.1`, OpenRouter listing, this repo's `meta.json` for the Zen ID/pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

