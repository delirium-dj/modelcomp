# Laguna XS 2.1 — findings by GLM 5.3 Flash

- Source: Poolside (`poolside/Laguna-XS-2.1`, OpenMDW-1.1 open weights)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's lightest and fastest agentic coding model — a 33B-total / 3B-active sparse MoE trained in-house on 15T tokens, tuned for unattended agents (verification, persistence) and small enough to run on a Mac with 36 GB RAM. Poolside's first open-weight release.
- **Provider / access:** Free weights on Hugging Face (`poolside/Laguna-XS-2.1`, OpenMDW-1.1); free API access on OpenRouter during the beta period; dedicated API via platform.poolside.ai; also Ollama, llama.cpp, vLLM, SGLang, TRT-LLM, Transformers, NVIDIA Build. No Free ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-02 on Hugging Face; knowledge cutoff not disclosed.
- **IDs:** `poolside/Laguna-XS-2.1` (open weights); `laguna-xs-2.1` (OpenRouter/Ollama). No Free ID on Zen.
- **Context window:** 262,144 tokens (256K; verified via the Hugging Face model card and benchgen — some catalogs list 128K) / 32,768 max output.
- **Modalities:** text input only; text output; reasoning yes (interleaved thinking, preserved between tool calls; binary enable/disable via `enable_thinking` — no graduated effort dial); tool calls (structured tool calls per modelsatlas); JSON mode.
- **Pricing (as of 2026-09-24):** $0.00 on OpenRouter (free during beta — time-limited); weights free under OpenMDW-1.1 (commercial use permitted); production API pricing via Poolside (contact).
- **Architecture:** 33B total / ~3B active sparse MoE, 40 layers (10 global attention + 30 sliding-window attention with 512-token window), 256 routed experts + 1 shared, sigmoid gating, per-layer rotary scales, FP8-quantized KV cache, DFlash speculative-decoding draft model, OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (NVIDIA Build model card; trails larger agentic models substantially)
- Terminal-Bench 2.1, Tau3, GDPval-AA, MCPAtlas, Claw-Eval, Toolathon: no verified public score found

Reasoning / knowledge:

- No verified public reasoning benchmarks found (GPQA Diamond, HLE, AA Intelligence Index, MMLU-Pro, LCR, CritPt, Omniscience — all "no verified public score found")

Coding:

- SWE-bench Verified: **70.9%** (Poolside HuggingFace model card, Jul 2026; +1.0 over XS.2's 69.9%)
- SWE-bench Multilingual: **63.1%** (model card; +5.4 over XS.2's 57.7%)
- SWE-bench Pro: **47.6%** (Poolside HuggingFace model card)
- LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE: no verified public score found
- Harness note: all benchmarking used the Laude Institute's Harbor Framework with Poolside's `pool` agent harness, max 500 steps, sandboxed execution, thinking enabled, 256K context; mean pass@1 over multiple attempts

Long context:

- No long-context retrieval value verified (256K window claimed; the 512-token sliding-window attention on 30 of 40 layers may degrade very long-range dependencies)

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.0 37.5% is below the 45–60% mid band; the model is tuned to Poolside's own `pool` harness (harness-sensitivity caveat) and no other agentic-tool numbers were found.
- **Reasoning: 55/100.** Zero verified public reasoning benchmarks — score rests on thin evidence, conservative per the no-hallucination rule.
- **Context window: 76/100.** 256K tokens maps to the 200K–500K tier (65–84, above the 200K=70 anchor); the sliding-window architecture caveat and no measured retrieval keep it mid-band.
- **Multimodal: 15/100.** Text-only in/out — no vision, audio or multimodal input.
- **Coding: 74/100.** SWE-bench Verified 70.9% at only 3B active parameters (parity with models 10x its active size) is a strong mid-frontier result; SWE-bench Pro 47.6% and the harness-specific tuning cap it below 80.
- **Cost efficiency: 100/100.** $0.00 on OpenRouter (beta) and free commercial-usable weights ($0 = 100 per methodology); flagged as a time-limited beta with production API pricing unlisted.
- **Overall Score: 55/100.** Mean of the five quality dims (55 + 55 + 76 + 15 + 74) / 5 = 55. Best-fit: on-device and self-hosted agentic coding where hardware portability and near-zero inference cost matter more than frontier performance — the larger Laguna S 2.1 is the pick for long-horizon terminal work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-09-24
- Method: public internet research (Poolside HuggingFace model card and NVIDIA Build card via benchgen.com, llm-stats, modelsatlas, DuckDuckGo web search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_XS.md`, using the same headings.
