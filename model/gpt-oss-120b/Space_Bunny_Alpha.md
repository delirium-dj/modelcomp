# GPT-OSS-120B (high) — findings by Space Bunny Alpha

- Source: OpenAI / gpt-oss-120b
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B (high reasoning)
- **Short description:** OpenAI's larger open-weight mixture-of-experts reasoning model, intended for production agent workflows, local or private deployment, and customization on high-end hardware.
- **Provider / access:** Hugging Face / Ollama `openai/gpt-oss-120b`; OpenRouter `openai/gpt-oss-120b`; locally through Transformers Serve or vLLM with an OpenAI-compatible endpoint. OpenAI's model card says it is compatible with the Responses API.
- **Release / knowledge:** Released 2025-08-05; Artificial Analysis reports a May 2024 knowledge cutoff (OpenRouter labels it June 2024).
- **IDs:** `openai/gpt-oss-120b`; OpenRouter `openai/gpt-oss-120b`; Ollama `gpt-oss:120b`.
- **Context window:** 131,072 tokens (Artificial Analysis and OpenRouter); the official model card confirms the Harmony response format but does not state a larger window.
- **Modalities:** Text in/out only; configurable low/medium/high reasoning, exposed chain-of-thought, function calling, built-in browser and Python tools, and Structured Outputs.
- **Pricing (as of 2026-09-24):** OpenAI does not serve this as a hosted first-party API. OpenRouter displays provider-dependent rates from about $0.03 input / $0.17 output per 1M tokens; Artificial Analysis's provider median is $0.15 / $0.595. Self-hosting incurs hardware/hosting cost, with MXFP4 weights fitting on one 80 GB GPU.
- **Architecture:** Apache-2.0 open-weight MoE, 117B total parameters and 5.1B active per token, MXFP4 quantized; the official card says it fits on an 80 GB NVIDIA H100 or AMD MI300X.

### Raw benchmarks found

> OpenAI's August 2025 model card provides the primary apples-to-apples low/medium/high table. Current Artificial Analysis/OpenRouter values use newer harnesses and should not be merged numerically with the older table.

Agent / tool use:

- Tau-Bench Retail / Airline: **67.8% / 49.2%** (OpenAI model card, high reasoning).
- Tau2-Bench Telecom: **65.8%** (Artificial Analysis high-reasoning run).
- IFBench instruction following: **69.0%** (Artificial Analysis, high reasoning).
- Terminal-Bench Hard: **23.5%** (Artificial Analysis, high reasoning).
- GDPval-AA: **4.8%** (Artificial Analysis, high reasoning).

Reasoning / knowledge:

- AIME 2024, no tools / with tools: **95.8% / 96.6%**; AIME 2025, no tools / with tools: **92.5% / 97.9%** (OpenAI model card, high reasoning).
- GPQA Diamond, no tools / with tools: **80.1% / 80.9%** (OpenAI model card, high); an independent newer Artificial Analysis run reports **78.2%**.
- HLE, no tools / with tools: **14.9% / 19.0%** (OpenAI model card, high); Artificial Analysis reports **19.6%**.
- MMLU: **90.0%**; MMMLU average: **81.3%** (OpenAI model card, high).
- Artificial Analysis Intelligence Index: **11.6** current high-reasoning result.
- AA-LCR: **52.0%**; AA-Omniscience Accuracy / Non-Hallucination Rate: **21.8% / 9.2%** (Artificial Analysis, high).

Coding:

- SWE-bench Verified: **62.4%** (OpenAI model card, high reasoning).
- Codeforces, no tools / with tools: **2,463 / 2,622 Elo** (OpenAI model card, high reasoning).
- Aider Polyglot: **44.4%** (OpenAI model card, high).
- SciCode: **34.0%**; Artificial Analysis Coding Index: **30.4** (independent current measurements, high reasoning).

Long context:

- AA-LCR: **52.0%** (Artificial Analysis high-reasoning run), providing a public long-context reasoning result, though no exact-window MRCR/RULER/GraphWalks score was found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau-Bench Retail at 67.8%, Tau2 Telecom at 65.8%, and IFBench at 69.0% show usable native tool use, while Terminal-Bench Hard at 23.5% and the current Agentic Index cap frontier-agent expectations.
- **Reasoning: 83/100.** Near-ceiling AIME and Codeforces results plus 80.1% GPQA and 90.0% MMLU are excellent; much weaker HLE, CritPt, and Omniscience results keep it from a top score.
- **Context window: 65/100.** The verified 131K window and 52.0% AA-LCR result support substantial long-context work, but it is far below current million-token models.
- **Multimodal: 15/100.** The exact model is text-only, with no image, audio, or video input.
- **Coding: 78/100.** SWE-bench Verified at 62.4%, Codeforces at 2,622 Elo with tools, and Aider Polyglot at 44.4% are strong; SciCode at 34.0% shows uneven scientific-code performance.
- **Cost efficiency: 94/100.** Hosted open-weight inference is very cheap and self-hosting avoids vendor fees, though running the full model still requires substantial hardware.
- **Overall Score: 63/100.** A high-value open-weight reasoning and coding model for private deployment and agent prototypes, with excellent contest reasoning but only moderate agentic, long-context, and factual reliability.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: official OpenAI model card and Hugging Face documentation, Artificial Analysis measurements, OpenRouter API metadata, and public pricing/provider data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_OSS.md`, using the same headings.
