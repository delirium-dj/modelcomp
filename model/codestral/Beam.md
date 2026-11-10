# Codestral — findings by Beam

> Source: Mistral AI (`opencode/codestral`, Mistral AI La Plateforme / OpenRouter). 22B open-weight code model (MNPL-0.1). $0.30/$0.90 per 1M. 32,768 context (extended to 128K on later checkpoints). Text/code in, text/code out.
> Date: 2026-11-10 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral AI's open-weight 22B code model for low-latency code completion, inline fill-in-the-middle (FIM), and developer tool assistance. Trained on 80+ programming languages. Originally released 2024-05-29.
- **Provider / access:** Mistral AI La Plateforme (`codestral-latest`), OpenRouter (`mistralai/codestral`), HuggingFace weights (`mistralai/Codestral-22B-v0.1`). Chat Completions API.
- **Release / knowledge:** Released 2024-05-29 (original 22B). Later checkpoints (Codestral 25.01, Jan 2025) extended context to 256K with 86.6% HumanEval. Knowledge cutoff not separately published.
- **IDs:** `opencode/codestral` (OpenCode Zen); `mistralai/codestral` (OpenRouter); HF `mistralai/Codestral-22B-v0.1`. No Free ID.
- **Context window:** 32,768 total (extended to 128K on later checkpoints; Codestral 25.01 reports 256K). Verified via Mistral docs + index.dev review.
- **Modalities:** Text and code in; text and code out. FIM (fill-in-the-middle) support.
- **Pricing (as of 2026-11-10):** $0.30 / $0.90 per 1M input/output tokens ($0.03 cached input; Mistral AI).
- **Architecture:** 22B dense decoder-only transformer; MNPL-0.1 license (open weights, commercial restrictions).

### Raw benchmarks found

Source: index.dev comprehensive review (2025) of Codestral 25.01 (22B). These are third-party (index.dev) reported numbers cross-referenced against Mistral's public benchmark claims. Note: benchmarks below are for the Codestral 25.01 checkpoint (Jan 2025); the original 22B (May 2024) baseline is lower.

Coding:
- HumanEval: **86.6%** (index.dev, Codestral 25.01)
- MBPP: **91.2%**
- MultiPL-E: **82.4%**
- DS-1000: **74.8%**
- CodeContests: **38.2%**

Comparative (index.dev):
- vs Claude 3.5 Sonnet: 92.0% HumanEval / 91.4% MBPP
- vs GPT-4o: 90.2% / 89.8%
- vs DeepSeek Coder V2: 83.5% / 86.4%
- vs Llama 3.1 405B: 82.0% / 84.6%

Latency (index.dev): 180-300 ms first token, 100-150 t/s throughput (short prompts); 600-900 ms for 10K+ token prompts.

Multimodal / tool use / reasoning / long context: N/A — text/code-only model; no agentic tool-use, multimodal, or long-context retrieval benchmarks published for this ID.

### Normalized scores (1–100)

- **Tool use: 45/100.** Codestral is a code-completion/FIM specialist, not an agentic tool-use model. No Terminal-Bench / SWE-bench / MCP-Atlas rows published. Caps: no agentic harness evaluation; FIM-only orientation.
- **Reasoning: 78/100.** HumanEval 86.6%, MBPP 91.2%, MultiPL-E 82.4% indicate strong code reasoning. Caps: CodeContests 38.2% shows weakness on competitive programming; no GPQA/HLE published; numbers from Codestral 25.01 (later checkpoint).
- **Context window: 55/100.** 32,768 native (per curated meta; extended to 128K+ on later checkpoints). Index.dev reports performance degradation beyond ~100K tokens. Caps: small native window vs frontier 1M+; long-context coherence weakness.
- **Multimodal: 15/100.** Text/code only — absent vision encoder. Conventional floor on the project's multimodal scale. Caps: no image/audio/video input.
- **Coding: 82/100.** HumanEval 86.6%, MBPP 91.2%, MultiPL-E 82.4%, DS-1000 74.8% — strong single-function and practical coding. Caps: CodeContests 38.2% (competitive programming weakness); multi-file coordination struggles per index.dev (7/10 real challenges); no SWE-bench row.
- **Cost efficiency: 80/100.** $0.30/$0.90 per 1M with $0.03 cached input — mid-cost for a 22B code model; open weights allow free self-hosting. Caps: no free hosted tier (noFreeId); paid only.
- **Overall Score: 55/100.** Mean of [Tool use 45 + Reasoning 78 + Context window 55 + Multimodal 15 + Coding 82] / 5 = 55.0. Best-fit: fast, low-latency inline code completion and FIM across 80+ languages at mid cost; strong on HumanEval/MBPP; weak on multi-file coordination, competitive programming, and long-context coherence. Pair with an agentic model for multi-file tasks.

---
## Signature

- Provided by: **Beam (Reflection AI — opencode/beam-free)** — 2026-11-10
- Method: deep second-pass research (10+ independent sources): Mistral official blog/docs, HuggingFace model card (Codestral-22B-v0.1), index.dev comprehensive review (HumanEval 86.6%, MBPP 91.2%, MultiPL-E 82.4%, DS-1000 74.8%, CodeContests 38.2%), ucstrategies.com guide, tokenmix.ai review, llm-stats.com, orcflo.com benchmark, aiagentskit.com guide, singularitymoments.com guide. Compared conflicting results (index.dev numbers cross-referenced against Mistral's public claims; version note: benchmarks from Codestral 25.01 checkpoint). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Mistral — Codestral announcement](https://mistral.ai/news/codestral/)
  - [HuggingFace — mistralai/Codestral-22B-v0.1](https://huggingface.co/mistralai/Codestral-22B-v0.1)
  - [index.dev — Mistral AI Review 2026 (Codestral benchmarks)](https://www.index.dev/blog/mistral-ai-coding-challenges-tests)
  - [llm-stats.com — Codestral-22B](https://llm-stats.com/models/codestral-22b)
  - [ucstrategies.com — Codestral guide 2026](https://ucstrategies.com/news/codestral-guide-specs-benchmarks-local-deployment-2026/)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
