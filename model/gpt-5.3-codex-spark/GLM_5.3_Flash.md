# GPT 5.3 Codex Spark — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.3 Codex Spark
- **Short description:** A distilled, Cerebras-accelerated variant of OpenAI's GPT-5.3 Codex, purpose-built for low-latency code generation (1,000+ tokens/sec, ~15x the standard Codex 5.3). Sibling of `gpt-5.3-codex`, not an alias — a stripped-down sibling optimized for throughput over reasoning depth.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.3-codex-spark` via `https://opencode.ai/zen/v1/responses` (Responses API, paid); research preview for ChatGPT Pro subscribers via OpenAI (`gpt-5.3-codex-spark`, also listed as `chatgpt/gpt-5.3-codex-spark`).
- **Release / knowledge:** Launched 2026-02-12 (Turing College; family is the GPT-5.3 generation, Feb 2026). Knowledge cutoff: no verified public data found.
- **IDs:** `opencode/gpt-5.3-codex-spark` (Zen); `gpt-5.3-codex-spark` (OpenAI)
- **Context window:** 128K tokens (CloudPrice API; Turing College comparison table); max output: no verified public number found. Caveat: developers loading large codebases report Spark losing coherence toward the window's end — the full Codex 5.3 handles 400k+.
- **Modalities:** text (and image per CloudPrice input flag) in, text out; function calling yes; parallel function calling yes; structured outputs yes (flagged unreliable in practice — see benchmarks).
- **Pricing (as of 2026-10-02):** OpenCode Zen paid — $1.75 / 1M input, $14.00 / 1M output, cache read $0.175 (identical to GPT-5.3 Codex on Zen). No first-party per-token price verified (research preview via ChatGPT Pro subscription).
- **Architecture:** Proprietary (OpenAI); distilled variant of GPT-5.3 Codex accelerated on Cerebras Wafer Scale Engine 3; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found (no AA model page)
- Tool-call reliability: multiple X threads flagged **unreliable structured output formatting** — JSON schemas missing fields, function signatures with phantom parameters (Turing College compilation); Turing College sequential-chain tests: **drops critical constraints after 6–8 steps**

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Reasoning depth: **drifts after 6–8 steps** in sequential chain tests vs 12+ for full Codex 5.3 (Turing College)

Coding:

- SWE-Bench Pro: **~56%** (Turing College, vs GPT-5.3-Codex standard's ~72% — a ~16-point drop)
- Snake game test (Turing College): working version in **50 seconds** (~90% complete) but with a one-pixel collision blind spot on the left wall and a memory-leaking restart function — full Codex 5.3 took 6 minutes, correct on first pass
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- no long-context retrieval reported (128K window; developers report coherence loss toward the window's end)

Token speed:

- **1,000+ tokens/sec** (Cerebras-powered, ~15x the standard Codex 5.3's ~65–70 tok/s; official OpenAI/Cerebras announcements via Turing College)

### Normalized scores (1–100)

- **Tool use: 55/100.** Function calling and structured outputs are supported, but multiple independent reports flag unreliable tool-call formatting (missing JSON fields, phantom parameters) and constraint-dropping after 6–8 steps — no verified agentic benchmark (TB2.1/Tau3/GDPval) to lift it.
- **Reasoning: 58/100.** A distilled variant that drifts after 6–8 steps in sequential-chain tests (vs 12+ for full Codex 5.3); no GPQA/HLE/LCR benchmarks exist — mid-low band on the documented multi-step drift.
- **Context window: 58/100.** 128K tokens lands in the 100K–200K tier (50–64); documented coherence loss toward the window's end for large codebases (full Codex 5.3 handles 400k+) keeps it mid-band.
- **Multimodal: 60/100.** Image input flagged by CloudPrice alongside text, text output only — the +image-in band (60–70) floor, unverified by any benchmark.
- **Coding: 60/100.** SWE-Bench Pro ~56% is a ~16-point drop from standard Codex 5.3's ~72%; rapid prototyping, single-file edits and frontend iteration are genuinely strong (working snake game in 50s), but multi-step architecture, stateful debugging and security-critical work fall apart — mid band.
- **Cost efficiency: 65/100.** Zen pricing $1.75/$14.00 per 1M sits near the expensive end of the inverse-pricing rubric ($3/$15 = ~60), with no throughput discount despite the 15x speed; the ChatGPT Pro research-preview route hides the per-token cost entirely.
- **Overall Score: 58/100.** Mean of the five quality dims (55+58+58+60+60)/5 = 58.2 → 58. Best fit: rapid prototyping, targeted single-file edits, and iterative frontend loops where sub-second iteration matters — never for security-critical code, database migrations, or multi-service orchestration; the winning pattern is Spark drafts, Codex 5.3 reviews.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-02
- Method: public internet research (Turing College comparison, CloudPrice REST API, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
