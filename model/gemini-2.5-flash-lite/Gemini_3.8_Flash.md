# Gemini 2.5 Flash Lite — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's high-throughput, ultralow-latency efficiency model in the Gemini 2.5 family, optimized for high-volume classification, extraction, translation, and multimodal filtering.
- **Provider / access:** Google AI Studio / Gemini API (`gemini-2.5-flash-lite`), Google Cloud Vertex AI, and [OpenRouter](https://openrouter.ai/models/google/gemini-2.5-flash-lite).
- **Release / knowledge:** 2025-06-17 release (preview), 2025-07-22 (GA).
- **Lifecycle status:** Active but scheduled for retirement on **October 20, 2026**; Google restricts new project creation, steering developers toward Gemini 3.5 Flash-Lite and Gemini 3.8 Flash.
- **IDs:** `google/gemini-2.5-flash-lite`, `gemini-2.5-flash-lite`.
- **Context window:** 1,048,576 tokens total (1M context window); max output 65,536 tokens.
- **Modalities:** Native multimodal input (text, images, audio, video, PDF); text/code output; controllable thinking budget; function calling; Google Search grounding.
- **Pricing (as of 2026-10-11):** $0.10 / 1M input tokens ($0.025 / 1M cached input), $0.40 / 1M output tokens (audio input $0.30 / 1M).
- **Architecture:** Sparse Mixture-of-Experts (MoE) transformer with optional test-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- FACTS Grounding: **84.1%** (Google Technical Report)
- HELM WildBench: **81.8%**
- HELM IFEval: **81.0%**
- Tau2-bench: **18.4%**
- Native Google Search Grounding and Python code execution supported.

Reasoning / knowledge:

- GPQA Diamond: **64.6%** (standard) / **66.7%** (thinking enabled)
- AIME 2025: **49.8%** (standard) / **53.3%** (Artificial Analysis avg@10)
- MMLU-Pro: **75.9%**
- Global MMLU-Lite: **81.1%**
- SimpleQA: **10.7%**
- Humanity's Last Exam (HLE): **5.1%**

Multimodal:

- MMMU: **72.9%**
- Vibe-Eval: **51.3%**
- Native multi-hour video and audio needle-in-a-haystack retrieval (100%).

Coding:

- SWE-bench Verified: **27.6%** (single attempt) / **31.6%** (technical report resolved) / **44.9%** (pass@k)
- LiveCodeBench: **33.7%–34.3%** (standard) / **59.3%** (thinking variant)
- Aider Polyglot: **26.7%** correct
- SciCode: **19.3%**

Long context:

- 1M token context window evaluated with 100% needle-in-a-haystack retrieval across video, audio, and text.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong grounding fidelity (84.1% FACTS) and rapid structured function calling, though limited for autonomous multi-hop agent environments (18.4% Tau2-bench).
- **Reasoning: 64/100.** Capable entry-level reasoning bolstered by optional test-time thinking (64.6%–66.7% GPQA Diamond, 49.8% AIME 2025), trailing frontier reasoning models.
- **Context window: 90/100.** Full 1M token context window with reliable needle-in-a-haystack retrieval across audio, video, and documents.
- **Multimodal: 85/100.** Native omni-modal architecture processing text, images, video, audio, and complex document layout structures (72.9% MMMU).
- **Coding: 48/100.** Suitable for lightweight script generation, bug triage, and syntax translation (27.6%–31.6% SWE-bench Verified, 34.3% LiveCodeBench).
- **Cost efficiency: 98/100.** Exceptionally economical at $0.10 / $0.40 per 1M tokens with prompt caching at $0.025 / 1M.
- **Overall Score: 72/100.** Arithmetic mean of non-cost metrics: (72 + 64 + 90 + 85 + 48) / 5 = 71.8 → 72. A high-throughput multimodal efficiency model, entering scheduled retirement on October 20, 2026.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: Public benchmark evaluation and analysis of Google DeepMind technical documentation, OpenRouter metrics, and Artificial Analysis leaderboards.
