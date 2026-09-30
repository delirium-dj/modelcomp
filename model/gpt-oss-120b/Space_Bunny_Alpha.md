# GPT-OSS-120B (high) — findings by Space Bunny Alpha

- Source: OpenAI / gpt-oss-120b
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-OSS-120B (high reasoning)
- **Short description:** OpenAI's larger open-weight mixture-of-experts reasoning model for production agents, local or private deployment, and customization on high-end hardware.
- **Provider / access:** Hugging Face `openai/gpt-oss-120b`; OpenRouter `openai/gpt-oss-120b`; Ollama `gpt-oss:120b`; local Transformers Serve, vLLM, or PyTorch/Triton.
- **Release / knowledge:** Released 2025-08-05; Artificial Analysis reports a May 2024 cutoff and OpenRouter metadata reports 2024-06-30.
- **IDs:** `openai/gpt-oss-120b`; OpenRouter `openai/gpt-oss-120b`; Ollama `gpt-oss:120b`.
- **Context window:** 131,072 tokens (Artificial Analysis and OpenRouter).
- **Modalities:** Text in/out only; configurable low/medium/high reasoning, exposed chain-of-thought, function calling, built-in browser and Python tools, and Structured Outputs.
- **Pricing (as of 2026-09-25):** OpenAI does not provide a first-party hosted API for this open-weight model. OpenRouter lists $0.15 input / $0.075 cached input / $0.60 output per 1M tokens; self-hosting requires substantial hardware.
- **Architecture:** Apache-2.0 open-weight MoE, 117B total and 5.1B active parameters, MXFP4 quantized; the official model card says it fits on one 80 GB NVIDIA H100 or AMD MI300X.

### Raw benchmarks found

> OpenAI's model card supplies the primary low/medium/high table. Current Artificial Analysis/OpenRouter values use newer harnesses and are kept separate from the older official results.

Agent / tool use:

- Tau-Bench Retail / Airline: **67.8% / 49.2%** (OpenAI model card, high reasoning).
- Tau2-Bench Telecom: **65.8%**; IFBench: **69.0%** (Artificial Analysis high reasoning).
- Terminal-Bench Hard: **23.5%**; GDPval-AA: **4.8%** (Artificial Analysis high reasoning).
- Artificial Analysis Agentic Index: **3.7** (OpenRouter metadata).

Reasoning / knowledge:

- AIME 2024, no tools / with tools: **95.8% / 96.6%**; AIME 2025, no tools / with tools: **92.5% / 97.9%** (OpenAI model card, high).
- GPQA Diamond, no tools / with tools: **80.1% / 80.9%**; HLE, no tools / with tools: **14.9% / 19.0%** (OpenAI model card, high).
- Artificial Analysis current high-reasoning values: GPQA **78.2%**, HLE **19.6%**, Intelligence Index **11.6**.
- MMLU: **90.0%**; MMMLU average: **81.3%** (OpenAI model card, high).
- AA-LCR: **52.0%**; AA-Omniscience Accuracy / Non-Hallucination Rate: **21.8% / 9.2%** (Artificial Analysis high).

Coding:

- SWE-bench Verified: **62.4%** (OpenAI model card, high).
- Codeforces, no tools / with tools: **2,463 / 2,622 Elo**; Aider Polyglot: **44.4%** (OpenAI model card, high).
- SciCode: **34.0%**; Artificial Analysis Coding Index: **30.4** (current high-reasoning measurements).

Long context:

- AA-LCR: **52.0%** (Artificial Analysis high reasoning). No exact-window MRCR/RULER/GraphWalks result was found.

### Normalized scores (1–100)

- **Tool use: 76/100.** Tau-Bench Retail at 67.8%, Tau2 Telecom at 65.8%, and IFBench at 69.0% show usable native tool use, while Terminal-Bench Hard at 23.5% and Agentic Index at 3.7 limit agentic expectations.
- **Reasoning: 83/100.** Near-ceiling AIME, Codeforces, GPQA, and MMLU results are excellent; HLE, CritPt, and low Omniscience reliability keep the score below frontier proprietary models.
- **Context window: 65/100.** The verified 131K window and 52.0% AA-LCR support substantial long-context work, but it is far below million-token models.
- **Multimodal: 15/100.** The exact model is text-only, with no image, audio, or video input.
- **Coding: 78/100.** SWE-bench Verified at 62.4%, Codeforces at 2,622 Elo with tools, and Aider Polyglot at 44.4% are strong; SciCode at 34.0% shows uneven scientific-code performance.
- **Cost efficiency: 94/100.** OpenRouter hosted inference is inexpensive and self-hosting avoids vendor fees, though the full model still needs an 80 GB-class GPU.
- **Overall Score: 63/100.** A high-value open-weight reasoning and coding model for private deployment and agent prototypes, with excellent contest reasoning but moderate agentic, long-context, and factual reliability.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-25
- Method: official OpenAI model card and Hugging Face documentation, Artificial Analysis measurements, and OpenRouter API metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_OSS.md`, using the same headings.
