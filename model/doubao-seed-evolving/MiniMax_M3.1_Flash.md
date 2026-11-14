# Doubao Seed Evolving — findings by MiniMax M3.1 Flash

- Source: ByteDance/Volcengine Ark (`doubao-seed-evolving`)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao Seed Evolving
- **Short description:** ByteDance's rolling, server-updated Seed model for coding and agent workflows. The single `doubao-seed-evolving` model ID is updated in place, so published evaluations describe dated snapshots rather than one immutable checkpoint.
- **Provider / access:** ByteDance Volcengine Ark; the OpenAI-compatible Chat API and Ark Responses API both accept model ID `doubao-seed-evolving`.
- **Release / knowledge:** First released 2026-06-23; latest official rolling update 2026-11-05. Knowledge cutoff not publicly specified.
- **IDs:** `doubao-seed-evolving` on Volcengine Ark; Epoch AI tracks the measured snapshot as “Doubao Seed Evolving (Nov 2026).” No verified public free-tier ID was found.
- **Context window:** 1,024K context and maximum input; 256K maximum output/reasoning-chain length, verified in Ark's current model documentation.
- **Modalities:** Text, image, video, and document input; text output; reasoning enabled by default with seven reasoning-effort levels; function/tool calls, MCP, knowledge-base search, web search, GUI-task processing, structured output, and context caching supported. Audio and video-audio understanding are not supported.
- **Pricing (as of 2026-11-14):** Paid regular online inference: RMB 6.00/M input tokens, RMB 30.00/M output tokens, RMB 1.20/M cache-hit input tokens, and RMB 0.017/M-token/hour cache storage.
- **Architecture:** Proprietary closed weights; parameter count and training details are not public.

### Raw benchmarks found

Agent / tool use:

- No verified public tool-use benchmark score found for the exact rolling `doubao-seed-evolving` model ID; Ark documents function calling, MCP, web search, GUI tasks, and multi-step execution, but publishes no comparable numeric evaluation for this alias.

Reasoning / knowledge:

- GPQA Diamond: **93%** (Epoch AI, Doubao Seed Evolving Nov 2026 snapshot; Toolin independently reports 93.1% from third-party data)
- OTIS Mock AIME 2024–2025: **99%** (Epoch AI, Nov 2026 snapshot)
- SimpleQA Verified: **42%** (Epoch AI, Nov 2026 snapshot; Toolin reports 41.9%)
- Chess Puzzles: **40%** (Epoch AI, Nov 2026 snapshot; Toolin reports 40)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found for the exact rolling model ID
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No long-context retrieval result reported; the verified 1,024K context limit is therefore a capability claim, not a measured retrieval score.

### Normalized scores (1–100)

- **Tool use: 68/100.** Ark verifies native function calling, MCP, web search, GUI-task processing, and tool-aware reasoning, but no exact-model numeric agent/tool benchmark was found.
- **Reasoning: 94/100.** The November snapshot scores 93% on GPQA Diamond and 99% on OTIS Mock AIME 2024–2025; SimpleQA Verified at 42% and Chess at 40% prevent a top score.
- **Context window: 96/100.** Ark verifies a 1,024K input context and 256K maximum output, placing it in the top context tier, capped slightly by the absence of a published long-context retrieval test.
- **Multimodal: 85/100.** Text, image, video, and document inputs are supported with text output, but audio input is explicitly unsupported.
- **Coding: 68/100.** Coding and agentic code generation are the vendor's stated focus and receive recurring model updates, but no verified public coding benchmark for the exact rolling ID was found.
- **Cost efficiency: 70/100.** Regular Ark pricing is RMB 6/M input and RMB 30/M output, with a cheaper RMB 1.20/M cache-hit rate.
- **Overall Score: 82.2/100.** A strong reasoning-and-context foundation for Chinese-language coding and agent workloads, with multimodal breadth, but no verified public tool or coding benchmark for the rolling model ID.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimaxai/minimax-m3.1-flash)** — 2026-11-14
- Method: Fresh public-web research using direct `webfetch` of current official Ark model, capability, and pricing documentation plus Epoch AI and two public benchmark aggregators after web search was unavailable (HTTP 402). The November benchmark rows are explicitly treated as a rolling-model snapshot; official Ark documentation is preferred over stale third-party context-window metadata. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Volcengine Ark — Doubao Seed Evolving latest-model documentation](https://docs.volcengine.com/docs/zh/ark/latest-model.md)
  - [Volcengine Ark — text-generation model list and capabilities](https://docs.volcengine.com/docs/zh/ark/model-list.md)
  - [Volcengine Ark — model pricing](https://docs.volcengine.com/docs/zh/ark/model-pricing.md)
  - [Epoch AI — Doubao Seed Evolving (Nov 2026)](https://epoch.ai/models/doubao-seed-evolving-nov-2026)
  - [Toolin — Doubao Seed Evolving benchmark snapshot](https://toolin.ai/en/llm/models/doubao-seed-evolving)
  - [The Known Good — doubao-seed-evolving model page](https://theknowngood.com/models/doubao-seed-evolving/)
