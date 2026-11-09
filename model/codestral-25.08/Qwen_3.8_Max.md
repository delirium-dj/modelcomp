# Codestral 25.08 — findings by Qwen 3.8 Max

- Source: Mistral AI (`opencode/codestral-25.08`; Mistral La Plateforme API id `codestral-2508`, OpenRouter `mistralai/codestral-2508`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08 (API id `codestral-2508`)
- **Short description:** Mistral AI's flagship specialized code-generation model, released 2025-07-30 as the completion centerpiece of the enterprise "Mistral Coding Stack" (alongside the Devstral coding agents, Codestral Embed retrieval, and the Mistral Code IDE extension). Purpose-built for low-latency, high-frequency developer tasks — inline completion, fill-in-the-middle (FIM), code correction and test generation — across 80+ programming languages.
- **Provider / access:** Mistral API / La Plateforme (`codestral-2508`) and OpenRouter (`mistralai/codestral-2508`); OpenCode Zen `opencode/codestral-25.08` (no Free ID — `noFreeId: true`). Enterprise deployment across cloud, VPC, or on-prem. Surfaced in-IDE via the Mistral Code plugin (VS Code / JetBrains).
- **Release / knowledge:** Released 2025-07-30; generally available. Knowledge cutoff not disclosed.
- **IDs:** `opencode/codestral-25.08` (Zen, no Free ID); Mistral API `codestral-2508`; OpenRouter `mistralai/codestral-2508`. No standing $0 tier.
- **Context window:** 256K tokens (verified across official + secondary); max output ~16K per ai-tldr, though `meta.json` lists 8,192 max-out (minor discrepancy — see provenance). No RULER/MRCR retrieval number published.
- **Modalities:** Text and code in; text and code out. **No image/audio/video** (ai-tldr lists modality as "Text"). Not a reasoning model (decoder-only, completion-optimized). Supports chat completions, **function calling**, structured outputs, and dedicated FIM completions — but is tuned for completions, not autonomous multi-turn agentic tool loops.
- **Pricing (as of 2026-11-09):** $0.30 per 1M input / $0.90 per 1M output (Mistral "Premier" list price; identical on OpenRouter). **Proprietary / API-only** — weights are not publicly downloadable (see provenance), so there is no $0 open-weight self-host path (enterprise on-prem is offered commercially).
- **Architecture:** Decoder-only Transformer optimized for low-latency code completion + FIM; supports chat and instruction following. **Parameter count not publicly disclosed.** Distinct from the original open-weight Codestral 22B (24.05): 25.08 is a proprietary Premier release.

### Raw benchmarks found

> Artificial Analysis: **not tracked (404)**. BenchLM: **not tracked (404)** — Codestral is absent from BenchLM's Mistral family list. Hugging Face: **no public card (401)** — consistent with API-only weights. All quantitative claims are therefore **Mistral's own first-party, release-relative deltas** (no absolute independent benchmark score is published for `codestral-2508`). Numbers below are vendor-reported and attributable to 25.08 specifically.

Coding (vendor-reported, relative to Codestral 25.01):

- **+30%** increase in accepted code completions (validated in live IDE usage across production codebases).
- **+10%** more retained code after a suggestion is accepted.
- **50% fewer** "runaway" generations (improves confidence in longer edits).
- **+5%** average MultiplE (multi-language code ability); improved academic-benchmark performance on short- and long-context FIM completion.
- Lineage anchor: predecessor Codestral 25.01 (Jan-2025) reported a **95.3** FIM benchmark and 256K context; 25.08 is an incremental improvement on that base. The original Codestral 22B (24.05) was validated on HumanEval, MBPP, CruxEval(-O), RepoBench and Spider.
- SWE-bench Verified / LiveCodeBench / Terminal-Bench / DeepSWE / SciCode **absolute for 25.08: none published** (the SWE-bench 53.6%/61.6% figures in the launch post belong to **Devstral**, the separate agentic model — not Codestral).

Instruction following / chat:

- **+5%** on IF eval v8 (chat-mode instruction following). No absolute GPQA/HLE/MMLU/reasoning score.

Agent / tool use:

- Function calling + structured outputs are supported (single-turn), but there is **no agentic/tool-loop benchmark** (no τ²-bench, GDPval, BFCL, Terminal-Bench). Positioning is explicitly completion-first; `meta.json` tradeoff: "tuned for completions rather than autonomous multi-turn tool loops."

Multimodal:

- None — text/code only. No vision, audio, or video capability.

Long context:

- 256K window (large for a completion model, aimed at big files / multi-file repos); no retrieval benchmark published.

> Provenance & meta verification:
> - `model/codestral-25.08/meta.json` is **substantially accurate** (256K context, "Text and code in; text and code out", $0.30/$0.90, `noFreeId: true`, correct standout "lightweight, low-latency code engine tuned for IDE autocomplete and inline FIM" and tradeoff "Text and code only; tuned for completions rather than autonomous multi-turn tool loops"). Two clarifications, not corrections: (1) **max output** — `meta.json` says 8,192 while ai-tldr says ~16K (undisclosed officially; the input window is 256K either way, so scoring is unaffected); (2) **license** — 25.08 is a **proprietary Premier API-only** model (weights not downloadable), which `meta.json` implies via `noFreeId`/hosted pricing but does not state; note ai-tldr's own bottom "every version" table inconsistently labels it "open weights," contradicted by its detailed spec table + FAQ + the 401 HF card. The original open-weight Apache-2.0 Codestral is the **22B (24.05)** model — a different folder (`model/codestral`).
> - Benchmark caveat: only vendor-reported **relative** deltas (+30%/+10%/50%/+5%/+5%) and a predecessor lineage anchor (25.01 FIM 95.3) are verified; there is **no absolute independent benchmark** for `codestral-2508`. Dimensions are therefore scored conservatively on verified specs + first-party deltas + lineage, never on invented absolute numbers. (This is more evidence than a zero-benchmark stealth model, so the file is scored rather than self-excluded.)

### Normalized scores (1–100)

- **Tool use: 32/100.** Function calling and structured outputs exist (single-turn), but the model is purpose-built for FIM/inline completion, not autonomous multi-turn tool loops (meta tradeoff), and there is zero verified agentic/tool benchmark (no τ²-bench/GDPval/BFCL/Terminal-Bench) — a completion specialist scores structurally low here.
- **Reasoning: 35/100.** A decoder-only, completion-optimized code model with undisclosed parameters and no reasoning benchmark; the only verified signal is a +5% IF-eval-v8 chat delta. Code generation implies some implicit reasoning, but there is no GPQA/HLE/CritPt evidence, so this stays low-mid.
- **Context window: 72/100.** Verified 256K window sits in the 200K–500K tier (200K ≈ 70) and is unusually large for a low-latency completion model (good for big files / multi-file repos); held at the tier floor because no RULER/MRCR retrieval number is published and max output is capped (~8–16K).
- **Multimodal: 15/100.** Text and code only — no image, audio, or video input or output (ai-tldr modality: "Text"). Squarely in the rubric's text-only band (10–20).
- **Coding: 71/100.** Its verified specialty: a flagship FIM/autocomplete engine across 80+ languages with first-party gains (+30% accepted completions, +10% retained code, 50% fewer runaway generations, +5% MultiplE, improved short/long-context FIM) over an already-strong lineage (25.01 FIM 95.3). Capped in the high-60s/low-70s because only *relative* deltas are published for 25.08 (no absolute HumanEval/MBPP/SWE-bench number) and it targets inline completion, not autonomous software-engineering agents (the rubric's frontier coding band requires absolute agentic-coding scores it does not have).
- **Cost efficiency: 92/100.** $0.30/$0.90 per 1M is inexpensive for a specialized code model (cheaper than the ~$0.60/$2.20 ≈ 92 rubric anchor on input, mid on output); held at ~92 rather than higher because it is proprietary/API-only (no $0 open-weight self-host path) with no standing free tier (`noFreeId`), though enterprise cloud/VPC/on-prem deployment is offered.
- **Overall Score: 45/100.** Half-up mean of the five quality dims (32 + 35 + 72 + 15 + 71) / 5 = 45.0 → 45. **Divergence −5.5 vs the 2-rater cohort (50.5):** a specialized, text-only, completion-tuned model scores structurally low on three of the five quality dims (Tool use, Reasoning, Multimodal) under this general-purpose rubric, even though it is excellent at its actual job; my read credits that narrowness honestly rather than inflating Coding into the agentic frontier band it has no absolute numbers for. Best fit: real-time IDE autocomplete / FIM, multi-language code generation, refactoring and test scaffolding inside the Mistral Code stack or a self-managed VPC — **not** a general reasoning assistant, an autonomous SWE agent (use Devstral for that), or any multimodal workload.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (official Mistral "Announcing Codestral 25.08" launch post + ai-tldr.dev structured spec page, both fetched 2026-11-09; Artificial Analysis, BenchLM and Hugging Face all returned 404/401 — not tracked / no public weights). Scores are normalized 1–100 interpretations against the `model-comparison.md` rubric, not official vendor scores. Only vendor-reported relative deltas + specs + lineage are verified (no absolute independent benchmark), so dimensions are scored conservatively and nothing is invented.
- Reference URLs:
  - [Mistral AI — "Announcing Codestral 25.08 and the Complete Mistral Coding Stack for Enterprise" (2025-07-30: +30% accepted completions, +10% retained code, 50% fewer runaway generations, +5% IF-eval-v8, +5% MultiplE; FIM specialist; Devstral/Codestral Embed/Mistral Code stack)](https://mistral.ai/news/codestral-25-08/)
  - [AI/TLDR — Codestral 25.08 (specs: API id codestral-2508, proprietary Premier API-only, params undisclosed, 256K context, ~16K max-out, decoder-only, function calling + structured outputs + FIM, 80+ languages, $0.30/$0.90, GA)](https://ai-tldr.dev/models/codestral-2508/)
  - [Mistral AI — "Codestral 25.01" (predecessor: 256K, ~2× faster, FIM 95.3 lineage anchor)](https://mistral.ai/news/codestral-2501/)
  - [OpenRouter — mistralai/codestral-2508 ($0.30/$0.90 pricing)](https://openrouter.ai/mistralai/codestral-2508)
- Future sources: an absolute HumanEval/MBPP/CruxEval/RepoBench/MultiplE table for `codestral-2508`, an Artificial Analysis or BenchLM entry, or a disclosed parameter count would let a future pass firm up Coding and Reasoning; add a new file beside this one using the same headings.
