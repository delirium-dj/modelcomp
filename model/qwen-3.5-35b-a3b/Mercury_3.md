# Qwen3.5-35B-A3B — findings by Mercury 3

- Source: Qwen / Alibaba (Qwen3.5-35B-A3B)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-35B-A3B
- **Short description:** Alibaba Qwen team's open-weight hybrid MoE vision-language model (released 2026-02-25), 35B total / 3B active with linear attention + sparse MoE for fast, low-cost inference; overall capability comparable to Qwen3.5-27B. Superseded by Qwen3.6-35B-A3B.
- **Provider / access:** Open weights (HF `Qwen/Qwen3.5-35B-A3B`, Apache 2.0); served by 9+ providers (DeepInfra/Skash from $0.14/$1.00, Alibaba, CoreWeave, SiliconFlow, OpenRouter, etc.).
- **Release / knowledge:** Released 2026-02-25; knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-35b-a3b`.
- **Context window:** 262K tokens.
- **Modalities:** text + image + video input; text output; explicit reasoning mode (thinking on/off); tool calling and structured output supported.
- **Pricing (as of 2026-11):** from $0.14 in / $1.00 out per 1M (DeepInfra/Akash; cached ~$0.05 per llm-stats); open weights free.
- **Architecture:** hybrid MoE, 35B total / 3B active (linear attention + sparse experts); Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- AA Agentic Index (independent): **11.8** (Toolprism) — low for agentic workloads

Reasoning / knowledge:

- AA Intelligence Index (independent): **24.0** (Toolprism)
- BenchLM composite: 45.58/100 (#121/216 public; #61/77 source-verified)

Coding:

- AA Coding Index (independent): **37.0** (Toolprism)
- Vendor card benchmarks exist on the FP8 model card; specific numeric values not captured in fetched sources

Long context:

- 262K verified; no independent long-context retrieval benchmark captured

Multimodal:

- Native VLM: text/image/video input, text output; structured-output accuracy praised in modelpicker review (5/5 on structured output, faithfulness, tabular, long context)

### Normalized scores (1–100)

- **Tool use: 62/100.** Independent AA Agentic Index 11.8 is low; tool calling supported but agentic performance unproven.
- **Reasoning: 74/100.** AA Intelligence Index 24.0 fits its 3B-active class; solid but well below the dense 27B sibling and frontier models.
- **Context window: 80/100.** 262K verified.
- **Multimodal: 76/100.** Native text/image/video input with text output; strong structured-output reliability (5/5 in modelpicker review).
- **Coding: 78/100.** AA Coding Index 37.0 — good for a 3B-active model and comparable to the 27B dense sibling.
- **Cost efficiency: 84/100.** $0.14/$1.00 with ~$0.05 cache plus free Apache 2.0 weights — exceptional value in the open-weight class.
- **Overall Score: 74/100.** Mean of the five non-cost dims (62+74+80+76+78)/5 = 74.0. Best-fit: a fast, dirt-cheap open-weight multimodal workhorse; pick it for high-volume structured/vision tasks, not hard agentic work.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-06
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face: Qwen/Qwen3.5-35B-A3B (official)](https://huggingface.co/Qwen/Qwen3.5-35B-A3B)
  - [Toolprism: Qwen3.5-35B-A3B pricing & benchmarks (AA indices)](https://toolprism.io/models/qwen3-5-35b-a3b/)
  - [llm-stats: Qwen3.5-35B-A3B](https://llm-stats.com/models/qwen3.5-35b-a3b)
  - [BenchLM: Qwen3.5-35B-A3B](https://benchlm.ai/models/qwen3-5-35b-a3b)
  - [OpenRouter: qwen/qwen3.5-35b-a3b](https://openrouter.ai/qwen/qwen3.5-35b-a3b)
  - [LLMLearner: Qwen3.5-35B-A3B specs](https://llmlearner.com/models/qwen3-5-35b-a3b)
- Future sources: add a new file next to this one using the same headings.
