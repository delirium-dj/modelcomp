# GPT-5.3 Codex — findings by Ernie 5.5 Flash

- Source: OpenAI/GPT-5.3 Codex (`gpt-5.3-codex`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3 Codex
- **Short description:** OpenAI's coding-optimized GPT (released 2026-02-05) for repository edits, reviews and agentic software work — a Codex-tuned variant of the GPT-5.3 base.
- **Provider / access:** OpenAI API/Responses (`gpt-5.3-codex`), Azure OpenAI, plus ~25 gateway routes (FastRouter, LLM Gateway, Vercel, Prime, AI/ML API).
- **Release / knowledge:** 2026-02-05; knowledge cutoff 2025-08-31 (models.dev).
- **IDs:** `gpt-5.3-codex`, `openai/gpt-5.3-codex`, `azure/gpt-5.3-codex`, `opencode/gpt-5.3-codex`.
- **Context window:** 400,000 total (272,000 input / 128,000 max output).
- **Modalities:** text, image and PDF in; text out; reasoning and tool calls.
- **Pricing (as of 2026-11-11):** $1.75 / $14.00 per 1M input/output; cache read $0.175.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%**; OSWorld-Verified: **64.7%**; JobBench: **33.7%**
- Gert Labs composite: **57.47**
- Terminal-Bench 2.1 / 4.x / Toolathlon / MCP-Atlas: no verified public rows published

Reasoning / knowledge:

- HLE / GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published for the Codex tier
- BenchLM ranks Instruction Following as its strongest category (#19)
- Omniscience accuracy / hallucination rate: no verified public score found

Coding:

- SWE-bench Verified: **85%** (Vals **78.0%**); LiveCodeBench (Vals AI): **87.3%**
- SWE-bench Pro: **56.8%**; SWE-Rebench: **58.2%**; Vibe Code Bench v1.1: **61.77%**
- BinaryAudit (backdoor detection): **42.1%**
- DeepSWE / FrontierCode: no verified public rows published

Long context:

- 400K context (272K input) documented; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 72/100.** TB2.0 77.3% is decent and OSWorld-Verified 64.7% mid; JobBench 33.7% is weak and no Terminal-Bench 4.x row was published.
- **Reasoning: 65/100.** No public reasoning benchmark exists for the Codex tier; the score is a conservative inference — low confidence.
- **Context window: 85/100.** 400,000 tokens with 272,000 input — below the 1M frontier.
- **Multimodal: 70/100.** Text, image and PDF in; no public multimodal benchmark rows for this tier.
- **Coding: 82/100.** SWE-bench Verified 85% and LiveCodeBench 87.3% are good, Vibe Code Bench 61.8% decent; SWE-bench Pro 56.8% and SWE-Rebench 58.2% are mid.
- **Cost efficiency: 80/100.** $1.75/$14 per 1M — the same rate as GPT-5.2 for a narrower model.
- **Overall Score: 74.8/100.** Best fit for repository-level edits and review inside the Codex harness; superseded by GPT-5.6/6.1 coding models at lower prices.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (OpenAI model documentation, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-5.3 Codex — OpenAI](https://openai.com/index/gpt-5-3-codex/)
  - [GPT-5.3 Codex benchmarks & sources — BenchLM](https://benchlm.ai/models/gpt-5-3-codex)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `GPT_5.3_Codex_v2.md`, using the same headings.