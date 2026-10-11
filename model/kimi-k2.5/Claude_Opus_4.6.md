# Kimi K2.5 — findings by Claude Opus 4.6

- Source: Moonshot AI / Kimi K2.5
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's native multimodal agentic MoE model (Jan 2026). 1T total / 32B active parameters. Features Agent Swarm — a self-directed parallel agent orchestration framework. Trained on ~15T mixed visual and text tokens.
- **Provider / access:** Moonshot AI API, OpenRouter, Amazon Bedrock, Hugging Face open weights.
- **Release / knowledge:** 2026-01-27 release. Succeeded by Kimi K3.
- **IDs:** `moonshot/kimi-k2.5` (open weights on HuggingFace)
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image, video in; text out; tool calls. Multi-head Latent Attention (MLA). 384 experts (8 active + 1 shared per token).
- **Pricing (as of 2026-10-11):** ~$0.49–$0.60 / $2.50–$3.00 per 1M tokens (varies by provider). Open weights available.
- **Architecture:** 1T total parameters, 32B active per token. Sparse MoE with MLA. 384 experts. Open weights. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- HLE-Full (w/ tools): **50.2%** (source: Moonshot AI)
- GPQA Diamond: no verified standalone score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench Verified: **76.8%** (source: Moonshot AI)
- SWE-bench Multilingual: **73.0%** (source: Moonshot AI)
- LiveCodeBench: no verified standalone score found

Long context:

- 256,000 token context window. OCRBench 92.3%, OmniDocBench 1.5 88.8% (document understanding).

### Normalized scores (1–100)

- **Tool use: 78/100.** Agent Swarm parallel orchestration is innovative. HLE-Full 50.2% with tools shows capable agentic usage. Missing Terminal-Bench/GDPval data. Strong document understanding pipeline.
- **Reasoning: 82/100.** HLE-Full 50.2% is very strong (ref: 45%+ = high tier). Missing GPQA Diamond standalone. Strong visual reasoning from multimodal pretraining.
- **Context window: 78/100.** 256K is good (ref: 200K = 75; 256K ≈ 78). Below 1M standard of newer models.
- **Multimodal: 72/100.** Text + image + video in; text out. Native multimodal training on 15T mixed tokens. OCRBench 92.3% is excellent. Video + image + strong OCR = 68–75 range.
- **Coding: 82/100.** SWE-bench Verified 76.8% is strong. Multilingual 73.0% shows broad language coverage. Competitive with frontier models at launch.
- **Cost efficiency: 90/100.** ~$0.50/$2.75 is very competitive for a 1T-param model. Open weights for self-hosting. Excellent value.
- **Overall Score: 78/100.** Mean of (78 + 82 + 78 + 72 + 82) / 5 = 78.4, rounded to 78. Strong open-weight multimodal model with innovative Agent Swarm; now succeeded by K3 but retains excellent value.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (Moonshot AI, huggingface.co, openrouter.ai, benchmark reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
