# Gemma 4 31B IT — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`gemma-4-31b`) — instruction-tuned (IT) release; public sources label it simply "Gemma 4 31B"
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned release) — Google DeepMind's open-weight Gemma 4 generation; the repo folder carries the `-it` suffix. Not an alias of any Gemini model: it is DeepMind's self-hostable counterpart, not a Gemini API tier.
- **Short description:** A 30.7B-parameter dense open-weight multimodal transformer released 2026-04-02 for self-hosted document analysis, research and high-volume inference where per-token API pricing does not fit; strong on core reasoning, weaker on autonomous agentic/terminal work.
- **Provider / access:** Apache-2.0 open weights on Hugging Face (self-host, commercial use allowed) plus third-party hosts — OpenRouter is the main one ($0.09 in / $0.34 out per 1M, $0.05 cached, plus a separate rate-limited free tier). Native function calling and structured output are built in; no OpenCode Zen ID exists for this model family.
- **Release / knowledge:** Released 2026-04-02 (vendor page, checked 2026-09-16). Knowledge cutoff: no verified public value found.
- **IDs:** `gemma-4-31b` (open weights); host IDs vary by provider (e.g. OpenRouter). No Zen Free ID, so cost is scored on the open-weight/self-host position plus the cheapest paid host.
- **Context window:** 262,144 tokens (262K) in. Max output: no verified public value found. Hybrid attention interleaves local sliding-window layers with periodic full global attention.
- **Modalities:** text and image in; text out (including tool calls and structured formats); native multimodal input with MMMU-Pro 76.9%. No audio or video support in this release. Fluency claimed across 140+ languages; a configurable thinking mode trades latency for multi-step reasoning per request.
- **Pricing (as of 2026-09-20):** self-hosting the open weights costs only hardware/electricity (effectively $0 per token); OpenRouter $0.09 in / $0.34 out per 1M with $0.05 cached input; a rate-limited free host tier also exists. No per-token vendor API.
- **Architecture:** 30.7B-parameter dense transformer (not MoE), open weights under Apache 2.0, 140+ languages, thinking mode toggled per request.

### Raw benchmarks found

Agent / tool use (the model's weakest area):

- MCP-Atlas: **54.2%** (from Meta's own published comparison for rival Muse Glimmer, which scored 75.5)
- DeepSearch QA: **61.7** (same comparison; Muse Glimmer 74.6)
- Tau2-Bench: **59.9** (vendor-reported)
- Terminal-Bench Hard: **36.4** (vendor-reported — reported as "modest" by independent reviewers, better suited to supervised automation than autonomous computer use)
- Claw-Eval / ClawProBench / Toolathon / SWE Atlas Codebase QnA / GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (vendor-reported; rank #26 of 44 peers, median 88.3%)
- AIME 2026: **89.2%**; MMLU-Pro: **85.2%** (vendor-reported)
- LMArena rank: **#3** among evaluated models at launch (vendor-reported)
- Artificial Analysis Intelligence Index: **15.4** (cited AA, 2026-09-16 — implausibly low versus its own component benchmarks, so flagged rather than used)
- HLE / LCR / MLCR / CritPt / Omniscience accuracy / Hallucination rate: no verified public score found

### Normalized scores (1–100)

- **Tool use: 78/100.** MCP-Atlas 54.2%, Tau2-Bench 59.9%, and Terminal-Bench Hard 36.4% indicate solid but sub-frontier agentic capabilities.
- **Reasoning: 84/100.** GPQA Diamond 85.7%, AIME 89.2%, and MMLU-Pro 85.2% demonstrate strong core reasoning.
- **Context window: 82/100.** 262K hybrid attention context window.
- **Multimodal: 75/100.** Text and image input with MMMU-Pro 76.9%.
- **Coding: 76/100.** Competent open weights code generation and reasoning.
- **Cost efficiency: 95/100.** Apache 2.0 open weights for self-hosting or cheap third-party hosting.
- **Overall Score: 79/100.** (78+84+82+75+76)/5 = 79.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-09-20
- Method: public internet research; scores are normalized 1–100 interpretations.
