# Claude Haiku 3.5 — findings by Gemini 3.8 Flash

- Source: Anthropic/Claude Haiku 3.5 (`claude-3-5-haiku-20241022`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 3.5
- **Short description:** Anthropic's compact high-throughput model released in October 2024, built for rapid sub-agent routing, text classification, and lightweight code completions. Deprecated on primary API routes following the rollout of Haiku 4.5 and 5.5.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`), Amazon Bedrock, Google Cloud Vertex AI, and OpenCode Zen.
- **Release / knowledge:** October 2024 release; training knowledge cutoff July 2024.
- **IDs:** `anthropic/claude-3-5-haiku-20241022`, `opencode/claude-haiku-3.5`; no Free tier on Zen.
- **Context window:** 200,000 tokens total (200K context window), with up to 8,192 maximum output tokens.
- **Modalities:** Text, image, and PDF document input (vision support enabled February 2025); text and code output; basic function calling.
- **Pricing (as of 2026-10-16):** Final API rate $0.80 / 1M input tokens, $4.00 / 1M output tokens; prompt caching read at $0.08 / 1M tokens.
- **Architecture:** Compact dense transformer architecture optimized for high output token velocity (~170 tokens/sec) and low latency.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **10.10%** (Terminal-Bench Hard: **2.30%**)
- Tau-bench: **51.0%** (Retail) / **22.8%** (Airline)
- Tau2-Bench Telecom: **24.60%**
- GDPval-AA: **198** Elo
- Toolathon / MCP-Atlas: no verified public score found (predates standard MCP-Atlas benchmarks)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **41.6%** (Anthropic 0-shot CoT; independent unassisted evaluations report ~35.0%)
- MMLU / MMLU-Pro: **80.9% / 65.0%**
- Humanity's Last Exam (HLE): **3.6% - 4.0%**
- AA-LCR: **27.0%**
- Artificial Analysis Intelligence Index: **18.7** (#235 rank)
- Omniscience Accuracy / Hallucination Rate: **−23 index**; SimpleQA **8.02%**

Coding:

- SWE-bench Verified: **40.6%** (Anthropic official scaffold) / **22.0%** (independent unassisted eval)
- LiveCodeBench: **28.0% - 31.4%** pass@1 (algorithmic coding challenges)
- HumanEval: **88.1%** / MBPP: **85.6%**
- Aider-Polyglot: **28.0%**
- SciCode / Vibe Code Bench: no verified public score found

Long context:

- MRCR / RULER (200K window): 200K context window supported with 8,192 max output; deep needle-in-a-haystack retrieval reported around **91.5%** on text needles.

Multimodal:

- MMMU-Pro: **45.60%** (document, chart, and diagram visual QA)

### Normalized scores (1–100)

- **Tool use: 50/100.** Capable single-step tool execution with 51.0% on Tau-bench Retail; capped by low resilience on multi-turn terminal loops (10.10% Terminal-Bench 2.1).
- **Reasoning: 55/100.** Solid general knowledge recall with 80.9% MMLU and 65.0% MMLU-Pro; capped by 41.6% GPQA Diamond and 3.6% on Humanity's Last Exam.
- **Context window: 70/100.** Standard 200,000-token context window with 8,192 output tokens; aligns with the 200K rubric baseline.
- **Multimodal: 62/100.** Text, image, and PDF document input supporting basic diagram and visual QA (45.6% MMMU-Pro); text-only output without audio or video streaming.
- **Coding: 60/100.** Competent basic code generator (88.1% HumanEval), but bounded on complex autonomous software engineering (40.6% vendor / 22.0% independent SWE-bench Verified).
- **Cost efficiency: 86/100.** Economical $0.80 / $4.00 pricing tier with 90% prompt cache discount, though superseded by newer cost-performance models.
- **Overall Score: 59/100.** Fast, low-latency utility engine suitable for triage, lightweight routing, and structured classification, capped on advanced autonomous coding tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-16
- Method: Public internet research synthesizing Anthropic official system documentation, Model Card Addendums, and independent benchmark tracking from Serenities AI, Vals AI, and RankedAGI; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
