# GPT-6.1 Terra — findings by Qwen 4 Max

- Source: Vendor (OpenAI) + independent trackers; subject slug `gpt-6.1-terra`
- Date: 2026-11-12 (UTC)
- See also: [../../model-comparison.md](../../model-comparison.md) · [../../model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-6.1 Terra (`gpt-6.1-terra`)
- **Short description:** OpenAI's "fast, efficient model for visual reasoning, precise computer use, and clear, natural writing" — the efficiency tier of the four-model GPT-6 line (Astra hardest / Sol balanced / Terra fast-efficient / Luna high-volume). Replaces GPT-5.6 Terra at half the price.
- **Provider/access:** OpenAI API (Chat Completions + Responses; tool calling requires Responses), ChatGPT Work and Codex (Plus/Pro/Enterprise/Edu — not Free/Business at launch), Amazon Bedrock (`openai.gpt-6.1-terra`), Google Cloud private preview; 6 AA-tracked providers. Tools: web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, MCP, tool_search. Streaming, structured outputs, prompt caching; no fine-tuning, no audio/video/realtime.
- **Release/knowledge:** Released October 26 2026 (API changelog + announcement). Knowledge cutoff **June 1 2026** — newest in OpenAI's lineup (Sol/Astra Apr 30, Luna May 18, GPT-5.6 Terra Feb 16).
- **IDs:** `gpt-6.1-terra` (single snapshot); Bedrock `openai.gpt-6.1-terra`; Flex variant `gpt-6.1-terra:flex`.
- **Context window:** 1,050,000 tokens; max input 922,000; max output 128,000. **>272K input: 2× input/cache + 1.5× output for the full request.**
- **Modalities:** Text + image in; text out. Audio/video explicitly unsupported.
- **Pricing (as of 2026-11-12, per 1M tokens):** $1.00 in / $0.05 cached (95% discount) / $5.00 out; cache writes $1.25 (30-min) / $2.50 (12-h); Batch & Flex 50% off; Fast mode 2×; regional +10%. AA blended $0.73 (7:2:1), **$0.96 per Intelligence Index task** (max effort). Half of GPT-6.1 Sol ($2/$10) and GPT-5.6 Terra ($2/$12).
- **Architecture:** Proprietary reasoning model; parameters undisclosed. `reasoning.effort`: none, low, **medium (default)**, high, xhigh, max (Astra/Sol lack `none`). AA tracks max. Preparedness Framework: **meets Critical cybersecurity threshold** (inherits Astra protections).

### Raw benchmarks found

Vendor-reported (OpenAI launch page + system-card addendum, via BenchLM/CellCog; harness = OpenAI's own runs):
- Agents' Last Exam v1 (effort/cost curve): low 55.9% @$0.16, medium 57.6% @$0.29 (**ties GPT-6 Astra medium at 1/17 the cost**), max 60.0% @$1.01 (Opus 5.5 max 63.2% @$8.82 — ~9× cost for +3.2pp). Beats Sol at every effort (52.4/53.8/58.6). GPT-5.6 Terra: medium 42.6, max 50.7.
- Terminal-Bench 4.0 max 50.3 (vs GPT-5.6 Terra 21.5); TB-Science 0.1 max 58.3 (beats Sol, within 5pp of Opus 5.5 at <1/5 cost); OSWorld 2.1 Offline 74.2 (passes 5.6 Terra's best at medium); MMMU-Pro 85.5 (beats 5.6 Terra at every setting).
- Error-inducing prompts: low effort 53.6%→16.7% vs 5.6 Terra; max down 18pp to 4.3%.
- System-card addendum: HealthBench raw 51.1 / length-adjusted 55.1; Professional 62.7 / raw 64.2; Hard 31.4.
- Explicit caveat: "For the most complex coding tasks, GPT-6.1 Sol and GPT-6 Astra remain the better choice."

Independent runs:
- Artificial Analysis (max, v5.0.1, live 2026-11-12): **Intelligence Index 51, #19/74** (class median 40); Briefcase 1403, AutomationBench-AA 60.2, TB4.0 55.6, GDPval-AA 1476, GDP.pdf 28.6, MKA 43.8, SciCode 55.1, MMMU-Pro 84.7, LCR 82.7, CritPt 28.0, MLCR 30.6, AA-HLE 46.2, Omniscience 29.6 (accuracy 47.6, hallucination 34.5). Performance: 71 tok/s, **TTFT 159.79s** (max effort; class median 13.48s), 14.0 min/task, 99.4M output tokens (median 72.8M). Launch-era AA reading 48 @$0.40/task (ComputingForgeeks Oct 27) — labelled conflict vs current live 51 @$0.96.
- Epoch AI FrontierMath v2: **Tiers 1–3 90.877, Tier 4 92.683** — top-tier math. LlamaIndex: ParseBench 73.64, ExtractBench 94.28, ExtractBench Pro 27. MazeBench 16 (tools).
- BenchLM aggregate: 80.13/100, **#10 of 1026** (43/815 rows, partial coverage).

### Normalized scores (1–100)

- **Tool use: 86/100.** ALE 60.0 max / 57.6 medium (ties Astra medium), OSWorld 2.1 Offline 74.2, AutomationBench-AA 60.2, GDPval 1476, Briefcase 1403, full computer-use toolset — near-Sol agentic capability at half price; below Sol (GDPval 1608) and Opus 5.5 (ALE 63.2).
- **Reasoning: 87/100.** AA-HLE 46.2, CritPt 28.0, FrontierMath v2 90.9/92.7 (exceptional), Omniscience 29.6 with only 34.5% hallucination — strong reliable reasoning; trails Sol (HLE 52.9, FM T4 100) but beats Grok 4.6 (84) on math/physics.
- **Context window: 87/100.** 1.05M/922K/128K with LCR 82.7 (AA) — matches the GPT-5.4 anchor (LCR 82 + surcharge); >272K 2×/1.5× surcharge and 922K input cap prevent higher.
- **Multimodal: 82/100.** Text+image only (no audio/video), but MMMU-Pro 84.7 (AA) / 85.5 (vendor) plus visual-reasoning focus (technical drawings, catalog matching) and ExtractBench 94.28 — strong image tier, narrow modality breadth.
- **Coding: 82/100.** TB4.0 55.6 (AA) / 50.3 (vendor), TB-Science 58.3, SciCode 55.1 — solid terminal/science coding, but OpenAI explicitly routes hard coding to Sol/Astra; no SWE-V/DeepSWE/FrontierCode coverage.
- **Cost efficiency: 88/100.** $1/$5 with 95% cache (blended $0.73), $0.96/task, ALE medium $0.29/task, Batch/Flex 50% off — outstanding value; deducted for max-effort TTFT 159.79s, 14 min/task, and >272K surcharge.
- **Overall Score: 84.8/100.** Mean of the five quality dimensions (Cost excluded): (86+87+87+82+82)/5 = 84.8. The efficiency-tier standout of the GPT-6.1 line: near-Sol agentic/reasoning quality at half the price, succeeding GPT-5.6 Terra (84.6) with a generational leap (AA 51 vs 32) while staying below Sol (87.8).

---

## Signature
- Provided by: **Qwen 4 Max (qwen4-max)** — 2026-11-12
- Method: public internet research (OpenAI official model docs, Artificial Analysis live, BenchLM, CellCog launch analysis reading OpenAI's chart data points, ComputingForgeeks/llm-stats/Requesty snippets); scores are normalized 1–100 interpretations, not official vendor scores. Conflicts labelled, never averaged: AA index (51 live v5.0.1 max vs 48 launch-era Oct 27 reading); cost/task ($0.96 live vs $0.40 launch-era); TB4.0 (50.3 vendor vs 55.6 AA); MMMU-Pro (85.5 vendor vs 84.7 AA); context (1.05M official vs 1.1M Requesty flex listing); ALE is OpenAI's own benchmark/runs (no outside lab results at launch per CellCog).
- Reference URLs:
  - [GPT-6.1 Terra model documentation — OpenAI](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [GPT-6.1 Terra (Max) — Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra)
  - [GPT-6.1 Terra Benchmark Scores — BenchLM](https://benchlm.ai/models/gpt-6-1-terra)
  - [GPT-6.1 Terra: $1/$5 Price, Benchmarks vs Sol and Opus — CellCog](https://cellcog.ai/blog/gpt-6-1-terra/)
  - [Introducing GPT-6.1 Terra — OpenAI (via BenchLM/CellCog attribution; openai.com/index 403)](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [GPT-6.1 Terra system card addendum — OpenAI Deployment Safety (via BenchLM attribution)](https://deploymentsafety.openai.com/gpt-6-1-terra)
  - [GPT-6.1 Sol vs Terra — ComputingForgeeks (via search snippet)](https://computingforgeeks.com/gpt-6-sol-luna-released-features-benchmarks/)
  - [GPT-6.1 Terra — llm-stats (via search snippet)](https://llm-stats.com/models/gpt-6.1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.