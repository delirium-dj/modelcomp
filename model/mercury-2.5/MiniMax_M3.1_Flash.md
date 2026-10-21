# Mercury 2.5 — findings by MiniMax M3.1 Flash

- Source: Inception AI (Mercury 2.5, diffusion LLM), `inception/mercury-2.5`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2.5
- **Short description:** Inception's September 2026 **diffusion** language model — tokens are generated in parallel rather than autoregressively, giving sub-300 ms time-to-first-token and 780–1,100 tokens/second. It reports a **96.0% τ³-bench** (its standout number) but only a 12 AA Intelligence Index, and it was **closed to new users on 2026-10-19**.
- **Provider / access:** Inception API (`https://api.inceptionlabs.ai/v1/chat/completions`, model `mercury-2.5`, OpenAI-compatible), Baseten, OpenRouter `inception/mercury-2.5`, Vercel AI Gateway, Kilo, Nano-GPT (a `mercury-2.5-preview` id), AIMLAPI, Venice. **Proprietary — no Mercury weights exist on Hugging Face** (the lab's open models are the Apache-2.0 Jais-3 family).
- **Release / knowledge:** **2026-09-08** (Inception blog; AA "Released September 2026"; models.dev/OpenRouter timestamps). Knowledge cutoff **2025-11-01**.
- **IDs:** `mercury-2.5` (Inception), `inception/mercury-2.5` (OpenRouter/Vercel/models.dev).
- **Context window:** **260,000** tokens, **65,536** max output.
- **Modalities:** text in / text out; reasoning with `reasoning_effort` low/medium/high; tool calling and schema-aligned JSON; tunable reasoning.
- **Pricing (as of 2026-10-20):** **$0.20/M in, $0.75/M out, $0.02/M cached** (Inception's own list; launch promo 80% off at $0.04/$0.15, which is what OpenRouter and Vercel still list). **Status:** "Mercury 2 and Mercury 2.5 are no longer available to new users. Existing customers with usage before October 19, 2026 will keep access until November 15, 2026"; the successor is **Mercury 3** (2026-10-19, 1M context).
- **Architecture:** proprietary diffusion LM (parallel decoding, not autoregressive).

### Raw benchmarks found

> Inception's launch chart (via BenchLM) plus Artificial Analysis and Vals AI.

Agent / tool use:

- Tau3-bench: **96.0%** (Inception launch chart) — the standout agentic number
- DeepSearchQA: **34.0%** (Inception) · Terminal-Bench 2.1: **34.5%** (Vals AI) · Terminal-Bench 4.0: **0%** (AA) · GDPval-AA: **474.8 Elo / 0.0% normalized** (AA) · AutomationBench: **2.35%** (AA) · OSWorld / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **79.0%** (Inception) · HLE: **11.77%** (AA) · AA-LCR: **68.0%** (Inception) / **71.67%** (AA) · IFBench: **77%** (Inception) · CritPt: **0%** (AA) · Omniscience Index / Accuracy / Hallucination Rate: **−39.5 / 22.65% / 80.33%** (AA)
- Artificial Analysis Intelligence Index: **12** (page header) / **12.3%** (BenchLM row), rank **#96 of 173**; **781.4 output tok/s** (#2 of 151), $0.12 per Index task, 35M output tokens (concise)

Coding:

- SciCode: **38.54%** (AA) / **38%** (Inception) · SWE-bench Verified / SWE-bench Pro / LiveCodeBench / HumanEval: **no verified public score found** — the model publishes no code benchmark

Speed:

- Inception's claim: **1,107 tokens/second** on widely available NVIDIA GPUs, sub-300 ms TTFT, ~170 ms median model response latency in customer voice agents (AA measures a lower **781.4 tok/s**)

### Normalized scores (1–100)

- **Tool use: 55/100.** τ³-bench 96.0% is a genuinely strong tool row, but Terminal-Bench 2.1 34.5%, Terminal-Bench 4.0 0%, GDPval-AA 475 Elo and AutomationBench 2.4% show the agentic picture is narrow.
- **Reasoning: 58/100.** GPQA 79.0%, IFBench 77% and AA-LCR 68–71.7% are mid-band, capped by HLE 11.8%, CritPt 0% and an Intelligence Index of 12.
- **Context window: 80/100.** 260,000 tokens with 65,536 max output, discounted for the absence of any long-context retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 40/100.** SciCode 38.5% is the only code-facing number — no SWE-bench, LiveCodeBench or HumanEval figure exists, so the coding profile is effectively unmeasured.
- **Cost efficiency: 91/100.** $0.20/M in and $0.75/M out at Inception's list (the $0.04/$0.15 launch price still shown on OpenRouter and Vercel), with a $0.02/M cache read; the real caveat is availability — new users lost access on 2026-10-19.
- **Overall Score: 50/100.** Mean of the five quality dims = (55 + 58 + 80 + 15 + 40) / 5 = 49.6 → **50**. Best fit: latency-critical subagents — 780–1,100 tok/s with sub-300 ms TTFT for voice and interactive loops — where the model's reasoning and coding depth are secondary.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Inception AI blog and model docs, Artificial Analysis, BenchLM, Vals AI, models.dev, OpenRouter API, Hugging Face API for the Jais-3 open-weight contrast); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mercury_3.md`, using the same headings.
