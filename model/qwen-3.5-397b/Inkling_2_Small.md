# Qwen3.5 397B A17B — findings by Fledge Alpha

- Source: Alibaba Cloud / Qwen Team (`qwen/qwen3.5-397b-a17b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 397B A17B
- **Short description:** Qwen's 3.5-series open-weight native vision-language flagship: a 397B/17B-active hybrid (linear attention + sparse MoE) model for chat, RAG, vision/video understanding, GUI interaction, and agentic workflows.
- **Provider / access:** QwenCloud (`qwen3.5-397b-a17b`), OpenRouter `qwen/qwen3.5-397b-a17b` (10 providers), DeepInfra, NVIDIA NIM (build.nvidia.com). Chat Completions with `enable_thinking` toggle.
- **Release / knowledge:** 2026-02-16 (Hugging Face + build.nvidia.com, NVIDIA NGC).
- **IDs:** `qwen/qwen3.5-397b-a17b` (no Free ID on Zen found)
- **Context window:** 262,144 (262K) tokens; max output 65K (81K max reasoning, thinking mode) — QwenCloud rate-limits page.
- **Modalities:** text/image/video in (early-fusion vision-language training); text out; thinking mode; function calling; structured outputs; context caching; batch; web search / code interpreter / image search built-in tools.
- **Pricing (as of 2026-10-08):** QwenCloud $0.60 input / $3.60 output per 1M; OpenRouter from $0.39/$2.34; DeepInfra $0.45/$3.00. Open weights (Apache 2.0).
- **Architecture:** 397B total / 17B active, 60-layer hybrid linear-attention + sparse MoE; Apache 2.0 (NVIDIA NGC listing).

### Raw benchmarks found

Agent / tool use:

- LLM Stats Agents index: **19.9** (#70, llm-stats)
- GUI-interaction and agent-task SOTA claims among open models (QwenCloud overview; no single scored row captured)
- Terminal-Bench / Tau suite: no verified public score found

Reasoning / knowledge:

- LLM Stats Score: **38.7** (#70, 37 evals); Reasoning index **38.5** (#69, 27 evals) (llm-stats, Sep 2026)
- MorphLLM guide: beats GPT-5.2 on 80% of evaluated categories (vendor-leaning guide; treat as directional)
- GPQA Diamond / HLE: no verified public score found in this pass

Coding:

- LLM Stats Coding index: **22.9** (#86, llm-stats)
- SWE-bench Lite: **20.0%** (LayerLens via pricepertoken leaderboard, Sep 2026)

Long context:

- 262K window verified (QwenCloud, llm-stats); no MRCR/RULER public number found.

### Normalized scores (1–100)

- **Tool use: 68/100.** Function calling plus built-in web search/code interpreter and GUI-agent claims; capped by Agents index 19.9 and no Terminal-Bench row.
- **Reasoning: 72/100.** LLM Stats reasoning 38.5 with an 81K-token thinking budget; capped by missing GPQA/HLE rows.
- **Context window: 62/100.** 262K verified window — mid-tier by late-2026 standards.
- **Multimodal: 80/100.** Native early-fusion VLM with text/image/video input — the model's standout trait; text-only output caps it.
- **Coding: 62/100.** SWE-bench Lite 20% and Coding index 22.9 are well behind 2026 coding specialists.
- **Cost efficiency: 80/100.** $0.39–0.60 / $2.34–3.60 per 1M plus Apache-2.0 weights for self-hosting — strong value at this size.
- **Overall Score: 69/100.** Mean of (68, 72, 62, 80, 62) = 68.8 → 69. Best fit: self-hostable multimodal (image/video) understanding and GUI-agent workloads where open weights and low token prices matter more than peak coding.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (QwenCloud model page, NVIDIA NGC, OpenRouter, llm-stats, pricepertoken/LayerLens, MorphLLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
