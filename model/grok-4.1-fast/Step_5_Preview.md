# Grok 4.1 Fast — findings by Step 5 Preview

- Source: xAI / Grok 4.1 Fast (`xai/grok-4.1-fast-reasoning`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's agentic tool-calling workhorse (2025-11-19) — one Grok 4.1-tuned checkpoint served in two API modes (low-latency `grok-4-1-fast-non-reasoning` and `grok-4-1-fast-reasoning`; xAI lists `grok-4-1-fast` as an alias of the reasoning build), 2M context, τ²-bench 93.3% (reasoning) vs 63.7% (plain) at $0.20/$0.50.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning` / `grok-4-1-fast-non-reasoning`), OpenRouter (`x-ai/grok-4.1-fast`), Oracle OCI, Opper; bundled Agent Tools API (web/code/file tools) at ≤$5 per 1,000 successful tool calls. Mode selected by a `reasoning` API parameter — same weights either way. Not on OpenCode Zen.
- **Release / knowledge:** released 2025-11-19 with the Agent Tools API; free through 2025-12-03 at launch via OpenRouter partners; knowledge cutoff not published.
- **IDs:** `xai/grok-4.1-fast-reasoning`, `xai/grok-4-1-fast-non-reasoning` (xAI API), `x-ai/grok-4.1-fast` (OpenRouter).
- **Context window:** 2,000,000 total; ~30,000 max output (folder meta) — the 2M budget is input-dominated.
- **Modalities:** text and image in; text out; reasoning on/off by parameter; tool calling (Agent Tools API).
- **Pricing (as of 2026-10-21):** $0.20/$0.50 per 1M in/out, cached $0.05 — identical for both modes (AI/TLDR); Agent Tools API billed separately (≤$5 per 1,000 successful calls).
- **Architecture:** proprietary transformer tuned from the Grok 4.1 base with large-scale RL across simulated tool-use environments (AI/TLDR).

### Raw benchmarks found

xAI Grok 4.1 Fast launch post (via AI/TLDR) + Artificial Analysis figures via BenchLM (reasoning and non-reasoning modes):

Agent / tool use:

- τ²-bench (Telecom): **100%** (xAI launch, with Agent Tools API — ref: Claude Sonnet 4.5, GPT-5, Grok 4 all lower)
- τ²-bench (Artificial Analysis): **93.3%** reasoning mode / **63.7%** non-reasoning mode
- Berkeley Function Calling Leaderboard v4: **72%** (xAI launch)
- FRAMES: **87.6%** at $0.048/query (xAI; ref: Gemini 3 Pro 90.9%, Claude Sonnet 4.5 85%, GPT-5 86%)
- X Browse: **56.3%** at $0.091/query (xAI; ref: Gemini 3 Pro 26.5%, GPT-5 24.2%, Claude Sonnet 4.5 14.6%)
- Reka Research-Eval: **63.9%** at $0.046/query (xAI; ref: Gemini 3 Pro 55.9%, GPT-5 45.5%)
- Long-context (2M window) retrieval: **67%** (xAI; vs Grok 4's 22%)
- Gert Labs: **47.3%** (Gert Labs via BenchLM, non-reasoning)
- Tau3-Banking / GDPval-AA / OSWorld / MCP-Atlas / Toolathlon / Claw-Eval: no verified public score found

Reasoning / knowledge (Artificial Analysis, reasoning mode / non-reasoning mode):

- GPQA Diamond: **85.3%** (reasoning) / **63.7%** (non-reasoning)
- AA-HLE: **19.3%** (reasoning) / **5.1%** (non-reasoning) — weak
- AA Intelligence Index: **20.4%** (reasoning) / **11.3%** (non-reasoning) — mid-low
- AA-LCR (long-context reasoning): **74.0%** (reasoning) / **31.3%** (non-reasoning)
- CritPt: **2.9%** (reasoning) / **0.0%** (non-reasoning) — very weak
- AA-Omniscience: Accuracy **25.1%**, Hallucination Rate **73.4%** (reasoning) / **17.2% / 82.3%** (non-reasoning)
- AA-IFBench: **52.7%** (reasoning) / **36.5%** (non-reasoning)
- ~half the hallucination rate of Grok 4 Fast at similar task accuracy (AI/TLDR)

Coding:

- Vibe Code Bench: **1.20%** (Vals AI via BenchLM, reasoning mode) — near-zero on full-stack app building
- SWE-bench Verified / SWE-bench Pro / LiveCodeBench / DeepSWE / Terminal-Bench / SciCode: no verified public score found in any harness

Long context:

- xAI launch: **67%** long-context retrieval on the full 2M window (vs Grok 4's 22%); AA-LCR 74.0% (reasoning); no MRCR/RULER/GraphWalks retrieval-at-length figure published.

### Normalized scores (1–100)

- **Tool use: 90/100.** The launch suite is the strongest evidence in this whole report set: τ²-bench Telecom 100%, BFCL-v4 72%, FRAMES 87.6% at $0.048/query, X Browse 56.3% (2.2x Gemini 3 Pro) and AA τ² 93.3% in reasoning mode — the benchmark the model was RL-trained for. Capped by Gert Labs 47.3% and no Tau3/GDPval/OSWorld/MCP-Atlas numbers.
- **Reasoning: 74/100.** GPQA Diamond 85.3% (reasoning mode) is strong, but AA-HLE 19.3%, AA Intelligence Index 20.4%, CritPt 2.9%, IFBench 52.7%, a 73.4% hallucination rate and LCR 74.0% are all mid-to-weak — it is a tool-caller, not a reasoner; the non-reasoning mode is far worse (HLE 5.1%, CritPt 0.0%).
- **Context window: 95/100.** 2,000,000 total with xAI-measured 67% retrieval at the full window (vs Grok 4's 22%) lands in the ≥1M tier; 100 requires ≥98% retrieval-at-512K evidence, which 67% does not meet, and the ~30K max output caps practical response length.
- **Multimodal: 68/100.** Text + image input with text out (image-in tier 60–70); AA-MMMU-Pro 63.3% (reasoning) / 48.4% (non-reasoning) is mid; no video/audio input and no non-text output.
- **Coding: 50/100.** The only published coding number is Vibe Code Bench 1.20% — essentially zero full-stack app-building capability — and no SWE-bench/LiveCodeBench/Terminal-Bench figure exists in any harness; the score reflects that near-zero proxy with the thin-evidence penalty, not a measured mid-band ability.
- **Cost efficiency: 96/100.** $0.20/$0.50 with $0.05 cached input sits inside the ~$0.10/$0.20 ≈ 97–99 reference band; measured agentic query costs of $0.046–$0.091 (vs GPT-5's $0.107–$0.198) are the second-cheapest on the launch board.
- **Overall Score: 75/100.** Mean of (90 + 74 + 95 + 68 + 50) / 5 = 75.4 → 75. Best fit: high-volume customer-support and deep-research agents that chain many tool calls over huge contexts at cents per query — pick a reasoning specialist for anything knowledge- or coding-heavy.

---

## Signature

- Provided by: **Step 5 Preview (stepfun/step-5-preview)** — 2026-10-21
- Method: public internet research (AI/TLDR with xAI launch figures, Artificial Analysis figures via BenchLM for both API modes, opper.ai, grokipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
