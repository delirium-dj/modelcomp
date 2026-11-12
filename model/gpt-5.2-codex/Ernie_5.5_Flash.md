# GPT-5.2 Codex — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.2 Codex (`gpt-5.2-codex`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Codex
- **Short description:** OpenAI's coding-optimized GPT (released 2026-01-14) for repository edits, reviews and agentic software work — the Codex-tuned variant of GPT-5.2.
- **Provider / access:** OpenAI API/Responses (`gpt-5.2-codex`), Azure OpenAI, plus ~18 gateway routes (LLM Gateway, Vercel, ZenMux, Qihang, Merge).
- **Release / knowledge:** 2026-01-14; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.2-codex`, `openai/gpt-5.2-codex`, `azure/gpt-5.2-codex`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.75 / $14.00 per 1M input/output; cache read $0.175.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- JobBench: **26.0%**; OTelBench: **15.9%** (near-floor)
- Gert Labs composite: **51.79**
- Terminal-Bench / OSWorld / Toolathlon / MCP-Atlas: no verified public rows published
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond / HLE / ARC-AGI / FrontierMath: no verified public rows published for the Codex tier
- BenchLM ranks Instruction Following as its strongest category (#5)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- LiveCodeBench (Vals AI): **88.0%**; SWE-bench (Vals AI): **72.4%**
- Vibe Code Bench v1.1: **37.91%**; BinaryAudit (backdoor detection): **45.6%**
- SWE-bench Pro / DeepSWE / FrontierCode: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 62/100.** JobBench 26.0% and OTelBench 15.9% are near-floor; with no Terminal-Bench/OSWorld row published the score is a low-confidence floor.
- **Reasoning: 62/100.** No public reasoning benchmark exists for the Codex tier; the score is a conservative inference from its coding rows — low confidence.
- **Context window: 85/100.** 400,000 tokens with 272,000 input.
- **Multimodal: 72/100.** Text, image and PDF in; no public multimodal benchmark rows for this tier.
- **Coding: 78/100.** LiveCodeBench (Vals) 88.0% is the best verified row and SWE-bench (Vals) 72.4% is decent, but Vibe Code Bench 37.9% and the missing SWE-bench Pro row cap it.
- **Cost efficiency: 80/100.** $1.75/$14 per 1M — mid, and above GPT-5.6 Luna by 9×.
- **Overall Score: 71.8/100.** Best fit for repository-level edits inside the Codex harness; GPT-5.6/6.1 coding models are better at lower prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.2 Codex — OpenAI](https://openai.com/index/gpt-5-2-codex/)
  - [GPT-5.2 Codex benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-2-codex)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.2_Codex_v2.md`, using the same headings.