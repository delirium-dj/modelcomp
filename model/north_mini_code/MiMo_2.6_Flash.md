# North Mini Code — findings by Mimo v2.6 Flash

- Source: Cohere Labs (`north-mini-code` / North-Mini-Code-1.0)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** North Mini Code (North-Mini-Code-1.0) — Cohere's first agentic coding model and debut of the North family; free-tier wording applies to OpenRouter's `:free` endpoint.
- **Short description:** Open-weights research release of a 30B-total / 3B-active MoE model optimized for code generation, agentic software engineering, and terminal tasks. Not a variant of another tracked entry (`north` family debut; no sibling slug exists).
- **Provider / access:** Hugging Face weights (Apache 2.0), Cohere API, Cohere Model Vault, OpenRouter (`cohere/north-mini-code:free`), Azure AI Foundry (`coherelabs--north-mini-code-1.0`), OpenCode; OpenAI-compatible chat completions.
- **Release / knowledge:** 2026-06-09 (HF eval-results date, Cohere Labs announcement); knowledge cutoff 2026-01 (Frontier tracker, ~5-month lag).
- **IDs:** `CohereLabs/North-Mini-Code-1.0` (HF), `coherelabs--north-mini-code-1.0` (Foundry), `cohere/north-mini-code:free` (OpenRouter).
- **Context window:** 256,000 tokens (Cohere blog + HF model card) with 64,000 max generation; Microsoft Foundry/HF vLLM config lists 320K — **discrepancy noted**, both figures fall in the same 200K–500K tier.
- **Modalities:** text in, text out (HF quick facts: input text, output text); no image/audio/video/PDF; reasoning (interleaved thinking) yes; tool calls yes (agent-oriented); no image input.
- **Pricing (as of 2026-10-03):** Free — $0.00 in / $0.00 out on OpenRouter `:free` (OpenRouter, AI Benchy price history 2026-08-14); weights free to self-host; no paid per-token price verified for the hosted free endpoint.
- **Architecture:** 30B total / 3B active MoE, one dense layer before sparse layers; two-stage cascaded SFT + RLVR post-training (70,000+ verifiable tasks across ~5,000 repos); Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench v2: **36.0%** (HF `.eval_results/terminal-bench-v2.yaml`, 2026-06-09, ReAct + single terminal tool harness)
- Terminal-Bench Hard: measured via Terminus-2 (Cohere methodology note) — numeric value published only in the model card image; no verified number retrieved
- Tau3 / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **20.6** (Frontier tracker model page)
- GPQA Diamond: no verified public score found
- HLE / LCR / CritPt: no verified public score found

Coding:

- SWE-bench Verified: **67.6%** (HF `.eval_results/swe-bench-verified.yaml`, swe-agent v1.1.0 harness, 2026-06-09); press coverage also cites 80.2% pass@10 and 61.0% pass@1 under the mini-SWE-agent harness (AI Weekly) — pass@10 noted as an inflating metric
- SWE-bench Pro: **40.2%** (HF `.eval_results/swe-bench-pro.yaml`, 2026-06-09)
- Artificial Analysis Coding Index: **33.4** (Cohere blog — tops Devstral 2 123B, Mistral Small 4, Nemotron 3 Super 120B)
- LiveCodeBench v6 / SciCode: run per methodology (Cohere model card) — numeric values published only in the model card image; no verified number retrieved
- Speed: up to 2.8× Devstral Small 2 output throughput (Cohere internal test)

Long context:

- 256K (or 320K per Foundry) declared; no MRCR / RULER figure published

Multimodal:

- None — text-only model; no vision benchmark applicable

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench v2 36.0% is a real measured agentic score but sits below the documented mid band (TB2.1 45–60 → 50–70), and every TB2.1/Tau3/GDPval/Claw-Eval row is missing — mid-band floor at 55.
- **Reasoning: 58/100.** Single signal: AA Intelligence Index 20.6, plus the methodology's mid band for GPQA/HLE (55–65) as the best-fit region for a code-specialized 3B-active model; with no GPQA/HLE/LCR row at all, scored at 58 within that band.
- **Context window: 75/100.** 256K falls in the 200K–500K tier (65–84); 64K max output is a plus; 256K-vs-320K vendor discrepancy noted, both in-tier; no retrieval-at-length measurement.
- **Multimodal: 15/100.** Text-only model — the methodology's explicit "text-only = 10-20 (use 15)" value.
- **Coding: 72/100.** SWE-bench Verified 67.6% and SWE-bench Pro 40.2% are strong for a 3B-active model (AA Coding Index 33.4 leads its size class), but well short of the frontier band (DeepSWE 74+/TB2.1 85+/SciCode 55+), and LCB/SciCode numbers were not retrievable — 72.
- **Cost efficiency: 100/100.** Free endpoint at $0.00/$0.00 (methodology: $0 = 100).
- **Overall Score: 55/100.** (55 + 58 + 75 + 15 + 72) / 5 = 55.0 — best-fit as a free, self-hostable agentic coding specialist for high-volume terminal/SWE tasks where reasoning depth and multimodal input don't matter.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-03
- Method: public internet research (Cohere blog + HF model card and `.eval_results` YAML files, OpenRouter, Microsoft Foundry, AI Weekly, Frontier/LMMarketCap trackers); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
