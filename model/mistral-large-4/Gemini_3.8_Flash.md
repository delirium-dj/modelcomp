# Mistral Large 4 — findings by Gemini 3.8 Flash

- Source: Mistral AI (`opencode/mistral-large-4`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier multimodal Mixture-of-Experts (MoE) foundation model (codenamed "Le Chonk"), scaling to 1.05T total parameters with 52B active parameters per token. Features native multimodal perception via an integrated ~1.6B Pixtral-style vision encoder and a 1M token context window, delivering state-of-the-art open-weight capabilities in coding, enterprise agents, and cybersecurity analysis.
- **Provider / access:** Mistral AI Studio API, NVIDIA NIM, and OpenCode (`opencode/mistral-large-4`). Open weights distributed under the Mistral Ecosystem Open-Weight License.
- **Release / knowledge:** 2026-10-06 preview announcement; full open-weights release 2026-11-03. Knowledge cutoff mid-2026.
- **IDs:** `mistral-large-4`, `opencode/mistral-large-4` (no free-tier route on Zen).
- **Context window:** 1,000,000 tokens total (1M context window); max output 128,000 tokens.
- **Modalities:** Multimodal text and image input; text and structured JSON output; advanced function calling and tool execution.
- **Pricing (as of 2026-11-06):** $0.70 / 1M input tokens ($0.07 cached read), $2.10 / 1M output tokens (standard list price on Mistral Studio API).
- **Architecture:** 1.05T total / 52B active parameter Mixture-of-Experts (MoE) with native 1.6B visual encoder; native FP8 and NVFP4 checkpoints.

### Raw benchmarks found

Agent / tool use:

- Coding Agent Index (Composite): **49.8%** (vendor evaluation across terminal and software tasks)
- Terminal-Bench 4.0: **28.3%** (native Mistral agent harness), **22.7% - 24.7%** (neutral Artificial Analysis mini-swe-agent harness)
- SWE-Atlas-QnA: **59.4%**
- AutomationBench: **59.9%**

Reasoning / knowledge:

- MMLU (5-shot): **88.4%**
- Artificial Analysis Intelligence Index: **26** (Max / High effort mode)
- Cybench / Cyber Security Defense: **93.0%** (vulnerability reproduction and automated patch verification)

Coding:

- DeepSWE v1.1: **61.7%**
- FrontierCode 2.0: **19.7%** (enterprise multi-repo code evaluation)
- LiveCodeBench: **46.8%**

Long context:

- 1,000,000 token context window verified in official specs; 128k–1M needle-in-a-haystack retrieval reported robust across document and code repositories.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong tool coordination and automation with 59.9% on AutomationBench and 49.8% Coding Agent Index, though neutral Terminal-Bench 4.0 (22.7–24.7%) indicates variance across third-party scaffolds.
- **Reasoning: 83/100.** Highly proficient logic and enterprise compliance (MMLU 88.4%, Cybench 93%), scoring 26 on the Artificial Analysis Intelligence Index.
- **Context window: 92/100.** Full 1M token context window officially supported at production scale, scaling well beyond early 128K preview estimates.
- **Multimodal: 86/100.** High-fidelity document and visual image comprehension backed by the integrated 1.6B Pixtral visual encoder; lacks audio/video generation.
- **Coding: 84/100.** Exceptional open-weights coding profile with 61.7% on DeepSWE v1.1 and 59.4% SWE-Atlas-QnA.
- **Cost efficiency: 91/100.** Excellent economic value at $0.70/M input ($0.07 cached) and $2.10/M output, coupled with freely deployable open weights.
- **Overall Score: 85/100.** Half-up arithmetic mean of the five non-cost quality dimensions ((82 + 83 + 92 + 86 + 84) / 5 = 427 / 5 = 85.4 -> 85). Leading open-weights flagship for enterprise codebase management, security auditing, and document intelligence.

---

## Signature

- Provided by: **Gemini 3.8 Flash (gemini/gemini-3.8-flash)** — 2026-11-06
- Method: Public internet research verifying Mistral AI technical announcements, open-weights release documentation, Artificial Analysis benchmarking, and independent reviews; scores are normalized 1–100 interpretations.
- Reference URLs:
  - [Mistral AI Mistral Large 4 Announcement](https://mistral.ai/news/mistral-large-4)
  - [Artificial Analysis Mistral Large 4 Evaluation](https://artificialanalysis.ai)
  - [Hugging Face Mistral Large 4 Model Card](https://huggingface.co/mistralai)
