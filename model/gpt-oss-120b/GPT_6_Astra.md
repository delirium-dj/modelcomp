# GPT-OSS 120B — findings by GPT 6 Astra

- Source: OpenAI / gpt-oss-120b
- Date: 2026-10-08 (UTC)
- [Overview and scoring methodology](../../model-comparison.md)
- [Cross-model signed log](../../model-findings.md)

## Model card

- **Name:** GPT-OSS 120B (OpenRouter free tier evaluated).
- **Short description:** Open-weight text reasoning model for locally controlled deployments and hosted agents; distinct from the safeguard fine-tune.
- **Provider / access:** Local inference or third-party hosts including Groq and OpenRouter. OpenRouter provides Chat Completions-compatible access; these weights are not served by the OpenAI API.
- **Release / knowledge:** August 5, 2025; June 2024 knowledge cutoff.
- **IDs:** `openai/gpt-oss-120b`, OpenRouter `openai/gpt-oss-120b:free`; no verified Free Zen ID.
- **Context window:** 131,072 tokens on the evaluated gateway; output limit depends on host and was not verified for the free route.
- **Modalities:** Text input/output; low/medium/high reasoning, function calling and structured outputs. Browsing/Python require an integrating harness.
- **Pricing (as of 2026-10-08):** Gateway free listing has $0 prompt/completion token charges with rate limits. Listing is not a successful live inference test; provider availability and data terms apply. Self-hosted compute is not free.
- **Architecture:** MoE, approximately 117B total / 5.1B active; native MXFP4 expert weights fit on an 80GB GPU. Apache 2.0.

Sources: [official specifications](https://developers.openai.com/api/docs/models/gpt-oss-120b), [deployment/access clarification](https://help.openai.com/en/articles/11870455-openai-open-weight-models), [gateway tier](https://openrouter.ai/openai/gpt-oss-120b:free).

### Raw benchmarks found

OpenAI model card, Table 3, **high reasoning**:
- **Tools:** Tau-Bench retail **67.8%**, airline **49.2%**. These are original Tau-Bench results, not Tau2 or Tau3.
- **Reasoning:** GPQA Diamond **80.1% without / 80.9% with tools**; HLE **14.9% without / 19.0% with tools**; AIME 2025 **92.5% without / 97.9% with tools**.
- **Coding:** SWE-bench Verified **62.4%**, Aider Polyglot **44.4%**; Codeforces **2463 Elo without tools / 2622 with tools**.
- **Harness limits:** SWE evaluation uses 477 verified tasks. Scores describe vendor evaluation, not a guarantee for every quantization, host, parser or tool harness.
- **Long context:** No verified full-window retrieval score found.
- **Missing:** Terminal-Bench 2.1, Tau3, GDPval-AA, Claw-Eval, Toolathlon, LCR, CritPt, Omniscience, LiveCodeBench, SciCode, Vibe Code Bench and DeepSWE: no verified public score found in inspected sources.

[Official model card](https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf). Tool-assisted and unaided results are kept separate.

### Normalized scores (1–100)

- **Tool use: 60/100.** Competent retail tool use, weaker airline result and limited broader agent evidence.
- **Reasoning: 71/100.** Solid GPQA and competition math; unaided HLE limits difficult general reasoning.
- **Context window: 56/100.** Verified 131k window, with full-window retrieval unverified.
- **Multimodal: 15/100.** Text-only.
- **Coding: 66/100.** Good competition coding, moderate SWE and weaker Aider editing.
- **Cost efficiency: 100/100.** Verified free gateway listing, subject to quotas and provider availability.
- **Overall Score: 54/100.** Half-up mean: (60 + 71 + 56 + 15 + 66) / 5 = 53.6. Best fit: inexpensive text reasoning and customizable bounded agents.

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-08
- Method: Fresh official model documentation, model card and gateway research; scores are normalized interpretations, not official scores.
- Future sources: Add a separate signed report alongside this file.

