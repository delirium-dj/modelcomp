# Owl Alpha — findings by GLM 5.3

- Source: OpenRouter stealth provider (`openrouter/owl-alpha`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** A free stealth foundation model routed via OpenRouter (vendor unnamed), positioned for agentic workloads, tool use, long-context tasks, code generation, and automated workflows. Identity/specs conflict with this folder's curated `meta.json` (which lists `opencode/owl-alpha`, 65,536 ctx, $0.50/$2.00); the measured evidence below is tied to the distinct OpenRouter route — treated as the same "Owl Alpha" name, scores cite the measured ID only.
- **Provider / access:** OpenRouter `openrouter/owl-alpha` (Chat Completions). The curated `opencode/owl-alpha` ID remains absent from live Zen lists; the OpenRouter route is live and free.
- **Release / knowledge:** surfaced 2026-04-28 (OpenRouter page date); knowledge cutoff unknown; vendor unknown (stealth).
- **IDs:** `openrouter/owl-alpha` (also archived `openrouter-owl-alpha-medium` on AI BENCHY). No Zen Free ID.
- **Context window:** 1,048,756 tokens (OpenRouter / benchable.ai) — CONFLICT with curated 65K meta; scored on the measured OpenRouter route.
- **Modalities:** text in → text out (free-model.com: "text support"); native tool use / function calling; no image/audio/video evidence; reasoning unspecified.
- **Pricing (as of 2026-10-16):** $0 — free during the preview window on OpenRouter (free-model.com verified live; AI BENCHY total benchmark cost $0.000). Caveat: free stealth preview in exchange for usage data that helps the unnamed developer tune the next release (roborhythms review) — do not use for confidential work.
- **Architecture:** undisclosed (stealth vendor; weights/training unknown).

### Raw benchmarks found

Agent / tool use:

- ClawBench (browser agents, live websites): **Reward (Lenient) 0.0%, Reward (Strict) 0.0%, Intercepted 14.6%** over 130 attempted tasks, avg cost/task $0.37 (BLXBench source via BenchmarkList, verified 2026-08-27)
- Native tool/function calling supported (OpenRouter listing) — no tool-bench efficiency numbers
- Terminal-Bench / Tau / GDPval-AA: no verified public score found
- Benchable.ai harness: 99% success rate across eight benchmarks (reliability of execution, not accuracy)

Reasoning / knowledge:

- No GPQA / HLE / LCR / MMLU rows found — no verified public score found
- AI BENCHY composite: score **5.6**, rank #267, pass rate 37.9% (aggregate, medium effort config, archived)

Coding:

- BLXBench (community coding/debugging/reasoning/refactoring/security slices): **83.6% score, 83.7% pass rate (312/373 tests)**, avg latency 8.7s, decode throughput 996.7 tok/s (BenchmarkList, verified 2026-05-06)
- SWE-bench / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1.05M window listed; no MRCR/RULER retrieval score published — no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 50/100.** Native tool calling and agentic positioning, but the only measured agent benchmark (ClawBench browser tasks) scored 0.0% reward with 14.6% of requests intercepted — capped hard by that measured failure.
- **Reasoning: 55/100.** No public GPQA/HLE numbers; AI BENCHY composite 5.6 with 37.9% pass rate is weak-mid; BLXBench reasoning/debugging slices partially offset.
- **Context window: 95/100.** 1.05M listed on the measured route (≥1M tier) with no published retrieval proof; curated 65K meta conflicts and is noted.
- **Multimodal: 15/100.** Text-only in/out per all listing surfaces.
- **Coding: 70/100.** BLXBench 83.6% (312/373) with ~997 tok/s decode is a solid community-harness result; capped by no SWE-bench/LiveCodeBench coverage and weak aggregate pass rate elsewhere.
- **Cost efficiency: 95/100.** $0 during the free preview with usage-data caveat (stealth vendor may collect prompts for tuning) — not scored 100 given the data-usage trade and swap risk.
- **Overall Score: 57/100.** (50+55+95+15+70)/5 = 57.0. A free long-context coding scratchpad with real BLXBench chops but a failing browser-agent score — usable for cheap code tasks, not for trusted agentic deployments.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16
- Method: public internet research (OpenRouter, BenchmarkList/BLXBench, AI BENCHY, benchable.ai, free-model.com, roborhythms review, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
