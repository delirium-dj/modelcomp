# Codestral 25.08 — findings by Qwen 3.8 Flash

- Source: Mistral AI (`codestral-2508` / `codestral-latest`, curated id `opencode/codestral-25.08`), cross-checked against Mistral's launch posts, provider pricing tables, and r/LocalLLaMA / aggregator coverage
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Identity note:** the curated `meta.json` is a **scaffolded placeholder** ("128K / Text in-out / Standard pricing"). First-party evidence overrides it: Codestral 25.08 (a.k.a. "Codestral 2") is a **22B** source-available coding model with a **256K** context window and **$0.30 / $0.90** per-1M hosted pricing. Kept distinct from the bare `codestral` folder (see that report's conflation caveat).

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral AI's **refreshed single-purpose coding model** (announced 2025-07-30) — the successor to Codestral 25.01 and the model behind the current `codestral-latest` API alias. Optimized for **fill-in-the-middle (FIM)** autocomplete, code correction and test generation across 80+ languages; the 25.08 update extended the context window and improved long-context FIM.
- **Provider / access:** Mistral **La Plateforme** API (`codestral-latest` / `codestral-2508`); also Vertex AI, Azure AI Foundry, Amazon Bedrock; source-available weights for local/VPC deployment. Chat + FIM endpoints.
- **Release / knowledge:** announced **2025-07-30**; superseded Codestral 25.01 (deprecated 2025-11-06, retired 2025-11-30). Knowledge cutoff not separately published.
- **IDs:** Mistral `codestral-2508` / `codestral-latest`.
- **Context window:** **~256K tokens** (aggregators list 262K) — a large jump from the 32K original; the scaffold's "128K" is overridden.
- **Modalities:** **text + code in; text out**; no image/audio/video, no native reasoning mode; strong tool/function support for IDE completion.
- **Pricing (as of 2026-11-06):** hosted **~$0.30 / $0.90 per 1M** in/out (aggregator-listed); source-available weights under the **Mistral Non-Production (source-available) License** for self-hosting.
- **Architecture:** ~22B-parameter decoder, tokenizer improved for code; sparse-MoE not used at this size class (dense 22B lineage of Codestral).

### Raw benchmarks found

> Provenance: **all vendor-run** (Mistral's own evaluation tables). **No independent Artificial Analysis Intelligence Index row exists for this exact ID** (it is a coding-specialist, not a general-index model), and agentic/long-context absolutes are not independently reproduced. Numbers inherited from the Codestral line are flagged as family-level.

Coding / completion:

- HumanEval: **81.1%** (vendor; Python pass@1 for the 22B Codestral line)
- HumanEval FIM pass@1 (avg): **~95%** (vendor; the model's headline FIM strength)
- MBPP sanitised: **78.2%** (vendor)
- LiveCodeBench: **31.5%** (vendor; competitive in 2024–25, dated in the late-2026 field)
- LM Arena copilot: previously **#1** for the Codestral line (vendor claim)

Reasoning / knowledge / agent / long context:

- GPQA / HLE / MMLU-Pro / AA Index: **no verified public score found** (not evaluated on general-reasoning leaderboards for this ID)
- Terminal-Bench / τ² / GDPval / MCP-Atlas: **no verified public score found** (not agentic-native)
- MRCR / RULER at 256K: **no long-context retrieval absolute published**
- MMMU-Pro / vision / audio: **not applicable** (text/code-only model)

### Normalized scores (1–100)

- **Tool use: 42/100.** Excellent as an in-IDE autocomplete/FIM tool with function calling, but it is a completion engine rather than an autonomous agent — no verified agentic (Terminal-Bench/τ/GDPval) results.
- **Reasoning: 45/100.** A single-purpose coder with no reasoning/chain-of-thought mode and no general-reasoning leaderboard presence; adequate within its lane, weak on complex multi-step reasoning.
- **Context window: 74/100.** The 25.08 refresh to **~256K** is a genuine strength for whole-repository FIM context; capped by the absence of any published retrieval-quality (MRCR/RULER) proof at that length.
- **Multimodal: 15/100.** **Text/code only** — no image/audio/video input or generation; the template's text-only floor.
- **Coding: 68/100.** Its whole reason to exist — best-in-class FIM autocomplete and solid HumanEval/MBPP — but LiveCodeBench 31.5 and a 22B single-shot architecture place it well below the 2026 agentic-coding frontier (SWE-bench-Verified 80%+ agents).
- **Cost efficiency: 90/100.** Very cheap hosted (~$0.30/$0.90) plus source-available self-hosting weights make it exceptional value for high-volume autocomplete.
- **Overall Score: 48.8/100.** Half-up mean of the five quality dims (42+45+74+15+68)/5 = 48.8 (Cost excluded). Best fit: a **fast, cheap, local or low-latency IDE autocomplete / FIM engine** — not a general or agentic coding assistant. All capability numbers are vendor-run and the model is a 2025-era specialist in a late-2026 field, which caps every general band.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-06
- Method: public internet research — Mistral "Announcing Codestral 25.08 / Codestral 25.01" launch posts and their FIM/HumanEval/MBPP/LiveCodeBench tables (HumanEval 81.1, MBPP 78.2, LiveCodeBench 31.5, FIM pass@1 ~95), plus provider pricing tables (corx-labs: 262K ctx, $0.30/$0.90) and r/LocalLLaMA coverage confirming the 256K context extension and the 25.01→25.08 deprecation timeline. The scaffolded `meta.json` (128K/text/Standard) is overridden with first-party specs. **No independent AA Intelligence Index row exists for this coding-specialist ID**, so capability numbers are flagged vendor-only; scores are normalized 1–100 interpretations, not official scores.
- Reference URLs:
  - [Mistral AI — Codestral](https://mistral.ai/news/codestral/)
  - [Mistral AI — Codestral 25.01 (FIM/HumanEval tables)](https://mistral.ai/news/codestral-2501/)
  - [Codestral 25.01 spec summary (deprecation→25.08 timeline)](https://ai-tldr.dev/models/codestral-2501/)
- Revisit trigger: Mistral publishing an independent same-harness SWE-bench Verified / LiveCodeBench 2026 reproduction for `codestral-2508`, or Artificial Analysis adding a row for this ID.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
