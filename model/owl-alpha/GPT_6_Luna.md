# Owl Alpha — findings by GPT-6 Luna

- Source: OpenRouter/Owl Alpha (`openrouter/owl-alpha`)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** An anonymously developed, hosted model listed by OpenRouter for tool use and long-context agent workloads. Its underlying developer and checkpoint are undisclosed; do not attribute it to a rumored lab or neighboring stealth model.
- **Provider / access:** OpenRouter hosted route, historically listed as `openrouter/owl-alpha`. OpenRouter's model-specific embed still identifies the route and 1.0M context, but the normal listing was unavailable during this review; current route availability and API pricing are unverified. OpenRouter's standard API is OpenAI-compatible.
- **Release / knowledge:** OpenRouter directory/search records date its listing to 2026-04-28; this is a first-seen listing date, not a confirmed model release date. No knowledge cutoff verified.
- **IDs:** `openrouter/owl-alpha` (OpenRouter listing); ClawBench result key `openrouter-owl-alpha`. Underlying vendor/model ID not disclosed.
- **Context window:** OpenRouter's model-specific embed says 1.0M tokens; the exact OpenRouter-hosted listing/search record gives 1,048,576. Another third-party card reports 1,048,756, a small conflicting metadata value. Use 1,048,576 as the listed limit; no long-context retrieval accuracy at that limit was found.
- **Modalities:** Text input and text output; tool use/function calling is listed. No exact-route evidence for image, audio, or video input/output found.
- **Pricing (as of 2026-11-01):** Current per-token price not verified. BenchmarkList says price not published; a third-party model page labels it free, but the actual OpenRouter page no longer exposes an accessible pricing record. ClawBench reports $0.3704 average cost/task for its particular run, which is not a token tariff and is not generalized here.
- **Architecture:** Unknown, closed hosted API route; no weights, parameter count, architecture, or confirmed developer identified.

### Raw benchmarks found

> Exact-route results are separated from the less traceable imported coding row. ClawBench's zero reward is a measured result (0/130 rewarded tasks), not an absence of evaluation.

Agent / tool use:

- **ClawBench V2, Hermes harness:** **0.0% reward-lenient**, **0.0% reward-strict**, **14.6% intercepted**, **0/130 rewarded tasks**, average run cost **$0.3704/task**. The TIGER-Lab leaderboard README places `openrouter-owl-alpha` fifth among eight V2 entries; the published results CSV contains the exact row `openrouter-owl-alpha,hermes,v2,0,130,14.6,0.0,,0.0,0.3704` (BenchmarkList separately reports rank 6/6 in its filtered view). Sampled 2026-08-27 per BenchmarkList. This is a browser-agent benchmark, not a Claw-Eval score.

Reasoning / knowledge:

- No verified exact-route GPQA Diamond, HLE, MMLU-Pro, Intelligence Index, or other standalone reasoning result found.

Coding:

- **BLXBench:** **83.6% score**, **312/373 tests** (83.65% pass rate), rank **4/25**, sampled 2026-05-06 in BenchmarkList's exact Owl Alpha row. This is a secondary imported result; BLXBench's own site currently displays an infrastructure-maintenance notice and its run logs/fixtures were not accessible, so treat the attribution as lower-confidence and do not equate it with SWE-bench or a reproducible coding score.
- No exact-route SWE-bench, LiveCodeBench, SciCode, or Terminal-Bench result found.

Long context:

- Listed context is 1,048,576 tokens, but no exact-route retrieval result at a stated context length was found.

Multimodal:

- No exact-route image/audio/video benchmark or capability evidence found; the accessible catalog record describes a text-in/text-out model.

### Normalized scores (1–100)

- **Tool use: 15/100.** ClawBench V2 rewarded 0 of 130 tasks (0% lenient/strict) despite 14.6% request interception. This is a poor result on one real-world browser-agent setup; one harness/task suite limits generalization.
- **Reasoning: 35/100.** No standalone reasoning benchmark is verified. The ClawBench outcome is only a weak end-to-end proxy for planning and instruction completion, not a pure reasoning test, so confidence is low and the score remains provisional.
- **Context window: 95/100.** OpenRouter lists 1,048,576 tokens, which meets the ≥1M tier; no retrieval result at 512K+ supports a 100 score.
- **Multimodal: 15/100.** The exact route is listed as text input/output; no non-text modality evidence found.
- **Coding: 68/100.** The archived BLXBench row reports 83.6% and 312/373, but its primary site is currently unavailable and no task logs could be checked. The single secondary-source result is therefore heavily capped; no SWE-bench-family corroboration was found.
- **Cost efficiency: 50/100.** No current token price could be verified. The $0.3704/task ClawBench cost is run-specific and cannot be normalized against token pricing; this is a low-confidence midpoint, not a measured cost rating.
- **Overall Score: 46/100.** Half-up mean of the five quality dimensions: (15 + 35 + 95 + 15 + 68) / 5 = 45.6 → 46. The score is evidence-sparse and confidence-limited; current route status, the single weak agent benchmark, and unreproducible coding snapshot prevent a stronger recommendation.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-11-01
- Method: Fifteen distinct model-focused public searches (14 returned results), then direct checks of the OpenRouter model embed, BenchmarkList exact-model profile/data, the TIGER-Lab ClawBench paper/leaderboard/results CSV, and the BLXBench source status. Only the exact `openrouter/owl-alpha` / `openrouter-owl-alpha` identity is used; no score is borrowed from another OpenRouter stealth model. The BLXBench figure is retained as secondary-only, with the source outage disclosed. Normalized scores are interpretations, not vendor ratings; reasoning and cost are explicitly low-confidence because no direct benchmark/tariff was verified.
- Reference URLs:
  - [OpenRouter Owl Alpha model record](https://openrouter.ai/openrouter/owl-alpha)
  - [OpenRouter Owl Alpha model embed (ID and context metadata)](https://openrouter.ai/openrouter/owl-alpha/discord-embed.json)
  - [BenchmarkList Owl Alpha profile](https://benchmarklist.com/models/openrouter-owl-alpha)
  - [BenchmarkList Owl Alpha sourced result data](https://benchmarklist.com/model-data/openrouter-owl-alpha.json)
  - [TIGER-Lab ClawBench leaderboard and methodology](https://github.com/TIGER-AI-Lab/ClawBench)
  - [ClawBench V2 published results CSV](https://huggingface.co/datasets/TIGER-Lab/ClawBench/resolve/main/leaderboard/results.csv)
  - [ClawBench leaderboard space](https://huggingface.co/spaces/TIGER-Lab/ClawBench)
  - [ClawBench paper](https://arxiv.org/abs/2604.08523)
  - [BLXBench exact-model profile and imported score](https://benchmarklist.com/models/openrouter-owl-alpha)
  - [BLXBench source site status](https://blxbench.com/)
