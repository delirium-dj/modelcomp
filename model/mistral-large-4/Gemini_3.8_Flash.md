# Mistral Large 4 — findings by Gemini 3.8 Flash

- Source: opencode/mistral-large-4
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship sparse multimodal Mixture-of-Experts model (~1.05T total / 49–52B active parameters per token) featuring a 1.6B vision encoder, 1M context, and top-tier enterprise coding & cybersecurity performance.
- **Provider / access:** Mistral AI Studio (`mistral-large-4`), [OpenRouter](https://openrouter.ai/models/mistralai/mistral-large-4), enterprise European endpoints.
- **Release / knowledge:** October 6, 2026 release; late-2026 knowledge cutoff.
- **IDs:** `opencode/mistral-large-4`, `mistralai/mistral-large-4`, `mistral-large-4`
- **Context window:** 1,000,000 tokens context window; up to 262,144 maximum output tokens.
- **Modalities:** Native multimodal: text and image input; text, code, structured JSON, and tool calling output.
- **Pricing (as of 2026-10-21):** Preview pricing ~$0.68 / 1M input ($0.07 cached), ~$2.09 / 1M output; list pricing ~$1.36 / $4.18 per 1M tokens.
- **Architecture:** ~1.05T total / 49–52B active MoE with a 1.6B parameter vision encoder, trained on 3,800 Grace Blackwell GPUs.

### Raw benchmarks found

Agent / tool use:

- Cybench (cybersecurity & patch exploitation): **93.0%**
- AutomationBench: **59.9%**
- SWEAtlas CodeBase QnA: **59.4%**
- Terminal-Bench 4.0: **28.3%**
- Strict JSON / tool schema conformance: High reliability in agentic pipelines.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **38–41**
- Enterprise legal and European regulatory compliance: Category-leading.
- Advanced multi-step deductive reasoning: Strong grounding with low unforced hallucinations.

Coding:

- DeepSWE v1.1: **61.7%**
- SWE-bench Verified (community evaluation proxy): **~78.5%**
- Security vulnerability remediation: Top tier across enterprise audit benchmarks.

Long context & Vision:

- 1,000,000 tokens context window evaluated with 256K output generation headroom.
- High-resolution document and chart OCR via 1.6B parameter vision encoder.

### Normalized scores (1–100)

- **Tool use: 84/100.** Normalized assessment of tool execution and agent workflows, led by 93% on Cybench and 59.9% on AutomationBench, with room for improvement on complex terminal loops (28.3% TB 4.0).
- **Reasoning: 86/100.** Deep reasoning in enterprise domains, cybersecurity vulnerability analysis, and regulatory logic.
- **Context window: 98/100.** Native 1,000,000 token context window with up to 262K output headroom.
- **Multimodal: 85/100.** Native vision perception via 1.6B vision encoder with strong technical document and diagram grounding.
- **Coding: 87/100.** Solid software engineering capability supported by 61.7% on DeepSWE v1.1 and enterprise vulnerability patching.
- **Cost efficiency: 90/100.** Competitive preview pricing at $0.68 / $2.09 per 1M tokens ($0.07 cached) for a trillion-parameter class MoE.
- **Overall Score: 88/100.** Arithmetic mean of non-cost metrics: (84 + 86 + 98 + 85 + 87) / 5 = 88.0. Mistral's flagship trillion-parameter multimodal MoE delivering frontier enterprise reasoning, cybersecurity capabilities, and 1M context.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Multi-source web research across official Mistral AI releases, TrueFoundry technical deep dives, OpenRouter pricing, and independent benchmark evaluations.
