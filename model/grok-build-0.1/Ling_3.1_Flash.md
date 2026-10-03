# Grok Build 0.1 — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Grok Build 0.1
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's first model purpose-built for agentic coding — the engine behind the Grok Build CLI, with always-on reasoning, native MCP support, and 100+ tokens/second throughput.
- **Provider / access:** xAI (docs brand it "SpaceXAI") — xAI API public beta (announced 2026-05-29; model on API 2026-05-20), OpenRouter, Vercel AI Gateway; best in agentic harnesses (Grok Build, Cursor, Hermes Agent, OpenClaw, Kilo Code, OpenCode). Grok Build CLI beta launched 2026-05-14 (requires SuperGrok $30/mo or X Premium+ $40/mo; the API does not).
- **Release / knowledge:** 2026-05-14 (CLI) / 2026-05-20 (API). Knowledge cutoff not captured.
- **IDs:** `grok-build-0.1`; aliases `grok-code-fast-1`, `grok-code-fast`, `grok-code-fast-1-0825`.
- **Context window:** 256,000 tokens; max output 230,400 (no output cap for extended autonomous sessions per xAI docs); 100+ tok/s.
- **Modalities:** Text and image in, text out.
- **Pricing (as of 2026-10):** $1.00 / $2.00 per 1M input/output under 200K tokens ($2.00 / $4.00 at/above 200K); cached input $0.20 / $0.40.
- **Architecture:** ~314B-parameter MoE per third-party trackers (xAI confirmed the MoE design at a high level; no parameter-count whitepaper published).
- **Reasoning:** Always-on and non-configurable — no `reasoning_effort` parameter at all; every call reasons before responding.

### Raw benchmarks found

**Vendor-reported (xAI):**
- SWE-bench Verified **70.8%** — xAI's internal evaluation harness; the figure originally belongs to predecessor `grok-code-fast-1`, which grok-build-0.1 is aligned with; whether grok-build-0.1 improves on it is unverified (xAI published no updated SWE-bench score for the new model).
- "Official xAI benchmarks are limited" (Awesome Agents); most performance claims trace to xAI's own harness.

**Independent:**
- **Vals AI:** SWE-bench **71.40% ± 2.02** — slightly above the predecessor figure; one of the few third-party data points.
- **Kilo Bench (Terminal-Bench 2.0 completion): 50.6%**, average cost $30.70 per task (expensive — Claude Code and Codex CLI complete similar tasks for less).
- **PinchBench (OpenClaw tasks): 88.9% overall, #7 of 50 official models**; top categories: Log Analysis 97.0%, CSV Analysis 96.1%, Writing 95.8%, Analysis 95.1%; 100.0% on Access Control Log Anomaly Detection, Calendar Event Creation, Commit Message Writer, Create Project Structure, Dockerfile Optimization, Earnings Analysis.
- **Benchable (independent):** coding accuracy **95.0%** (90th percentile), general knowledge 99.5%, reasoning 96.0%, mathematics 93.0%, email classification 99.0%, hallucination 100%, ethics 100%, reliability 100%; **instruction following 60.0% (53rd percentile — the identified weak spot)**; speed 33rd percentile.
- **Artificial Analysis Intelligence Index v4.3.2: 27** (above average; median 24; page 2026-06-16).
- **BenchLM excludes grok-build-0.1** from its public leaderboard — "still lacks enough non-generated benchmark coverage to rank safely."
- Comparisons: Claude Sonnet 4.7 SWE-bench 72.7%, Claude Opus 4.7 87.6%, GPT-5.5 (Codex CLI) 88.7%; vs Claude Sonnet 4.6 — 70.8% vs 79.6% SWE-bench at $1/$2 vs $3/$15 (7.5x less output cost); 256K trails GPT-4.1's 1M for very large codebases.

## Scores

- **Tool use: 69/100.** PinchBench 88.9% (#7/50), native MCP (`"type": "mcp"` in the tools array), function calling, structured outputs, ACP support; local stdio MCP servers unsupported; AA Index 27.
- **Reasoning: 61/100.** Always-on reasoning with Benchable reasoning 96.0% and AA Index 27 (above average), but no GPQA/HLE/AIME captured; reasoning cannot be disabled (a cost/latency penalty on simple calls).
- **Context window: 70/100.** 256K tokens; no long-context retrieval benchmark captured; trails 1M-window rivals for very large codebases.
- **Multimodal: 61/100.** Text and image in (UI mockups, architecture diagrams, error screenshots), text out.
- **Coding: 71/100.** SWE-bench Verified 70.8% (vendor) / 71.40% (Vals AI), Benchable coding 95.0%, PinchBench 88.9%; offset by TB 2.0 completion 50.6% at $30.70/task and the ~17-point gap to Opus 4.7 / GPT-5.5.
- **Cost efficiency: 91/100.** $1.00/$2.00 per 1M (<200K) with $0.20 cached input — 7.5x cheaper output than Sonnet 4.6; premium positioning vs sub-$1 models.
- **Overall Score: 66.4/100.** Mean of Tool use 69, Reasoning 61, Context window 70, Multimodal 61, Coding 71 = 66.4.

> **Gap vs folder average (68.0): −1.6.** The model is a narrow, fast coding agent: its SWE-bench 70.8-71.4% and PinchBench 88.9% are credited in Tool use and Coding, while 256K context, text+image-only I/O, and thin independent coverage (BenchLM exclusion; xAI's own harness behind the headline SWE-bench) hold Reasoning and Context at mid-band.

## Notes

- Verification trail: xAI news "Grok Build 0.1 on API" (2026-05-29; pricing; 100+ tok/s; MCP support), xAI developer docs (modalities; 256K; aliases; reasoning always-on), Awesome Agents profile (release timeline; benchmark table; limitations), Kilo.ai (Kilo Bench 50.6% @ $30.70; PinchBench 88.9% #7/50; max output 230,400), Benchable (percentile profile), Artificial Analysis (Index 27), AgentRiot (Vals AI 71.40% ± 2.02; BenchLM exclusion; timeline), ChatForest (pricing tiers; ~314B MoE; reasoning non-configurable).
- Known conflicts: release date 2026-05-20 (model on API) vs 2026-05-29 (xAI news announcement) vs 2026-06-01 (ChatForest's "opened public API"); SWE-bench 70.8% is the predecessor's number, adopted for the aligned successor.
- Open questions: grok-build-0.1's own SWE-bench score; parameter count whitepaper; GPQA/HLE and long-context measurements.

Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03

Future sources: xAI's own SWE-bench row for grok-build-0.1, parameter-count confirmation, independent GPQA/HLE runs.
