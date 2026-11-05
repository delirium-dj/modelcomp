# Muse Spark 1.1 — findings by GLM 5.3 Flash

- Source: Meta (`muse-spark-1.1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-09, 2026-10-16): the model is stable and
> still served — Meta Model API unchanged at $1.25/$4.25, two-plus providers, no
> deprecation. The headline claim re-verifies: **MCP Atlas 88.1% still leads the live
> independent board** (#1 of 32, ahead of Fable 5.1's 87.2). New Vals x-high rows
> (TaxEval v2 79.7% #2/145, Vibe 72.2%, SkillsBench 59.2%, MedScribe 88.9%) and a
> LiveBench profile added. All dimensions hold; Overall stays 90.

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' multimodal reasoning model built for agentic tasks — the second ground-up post-Llama model; still leads the live MCP Atlas board on tool use, with free consumer access in the Meta AI app. Closed-weight and proprietary (a reversal of Meta's Llama-era open-weights strategy). Lineage: Muse Spark (2026-04-08) → 1.1 (2026-07-09) → 1.2 (2026-08-05) → 1.3 (2026-09-02) → Spark Open (2026-10-15).
- **Provider / access:** Meta Model API (`muse-spark-1.1`, public preview with expanded global access, wire-compatible with OpenAI and Anthropic SDKs); OpenRouter (`meta/muse-spark-1.1`) and EmpirioLabs ($1.25/$4.25 both); consumers free in the Meta AI app (Thinking mode). No Free ID on OpenCode Zen. No EU access at launch.
- **Release / knowledge:** Released 2026-07-09 (same day as GPT-5.6; some catalogs carry noisy dates — OpenCode Data lists the 1.0 lineage date, Kilo the July 16 OpenRouter creation). Knowledge cutoff not verified.
- **IDs:** `muse-spark-1.1` (Meta Model API). No Free ID on Zen.
- **Context window:** 1,048,576 tokens with active context management that compacts long sessions automatically; **max output 131,072** (LiteLLM/AnotherWrapper — confirmed; Kilo's 943,718 figure is the route output cap).
- **Modalities:** text, image, video, audio and PDF input; text-only output; reasoning yes (Thinking mode); tool calls with zero-shot MCP generalization and parallel subagent orchestration; computer use first-class; structured output/JSON; built-in web search; Files API; prompt caching.
- **Pricing (as of 2026-11-05):** $1.25 / $4.25 per 1M in/out, cached $0.15 (Meta Model API + OpenRouter + EmpirioLabs identical; LiteLLM ranks it the cheapest Muse Spark at $2.00 blended); consumer free in the Meta AI app; $20 free credits for new accounts.
- **Architecture:** Proprietary, closed-weight, parameters undisclosed; AA-measured output speed **231 tok/s** (TTFT 12.4s) — fast for its class.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **88.1%** — **still #1 on the live independent board** (LLMBenchmark, Nov 3 read: leads 32 measured models, +0.9 over Claude Fable 5.1's 87.2; median 75.8)
- Terminal-Bench 2.1: **80.0%** (Meta evaluation report, x-high) / **Vals 69.29% ±0.99**; BenchmarkList's Best-Reported-Harness roll-up reads **76.2% ±1.2** (46th pct)
- Toolathlon-Verified: **75.6%** (Meta report); OSWorld-Verified: **80.8%** (Meta report) vs OSWorld 2.0 **14.2%** (hard split, trails Opus 4.8)
- WebArena-Verified: **69%**; Cybench: **92.9%**; CyberGym 59.0%; ExploitGym 0.8%
- GDPval-AA: **1375–1381 Elo** (Meta report / BenchmarkList x-high re-read — minor drift) / AA-normalized 35.6%
- Vals x-high rows (NEW): TaxEval v2 **79.72% ±0.77** (#2 of 145), SkillsBench **59.19%** (#10/35), Finance Agent v2 **57.21%** (#17/81), Public Benefits 61.30%, MortgageTax 66.14%, Legal Research 37.98%, EMB 56.36%, MedScribe **88.89%** (#10/109 — was #1 at launch), LegalBench **84.98%**, Code Migration 31.11%, ProgramBench 0.0%, Time-Horizon KSP 1.7%
- JobBench 54.7%; DeepSearchQA 84.9%; AA Agentic Index 27.5%
- Tau3/Tau2/Claw-Eval/Toolathon: no verified public score found

Reasoning / knowledge:

- HLE: **62.1% with tools** / **52.2%** without (Meta report — far above AA's reading); AA-HLE row consistent with the launch-era 46.2% snapshot
- AA-GPQA Diamond: **89.8%** (AA) / **91.16% ±2.10** (Vals, #23/138)
- LiveBench (NEW): Reasoning **87.7**, Mathematics 87.1, Data Analysis 72.5, Language 74.3, IF 69.6, overall 75.3
- AA-LCR: **77.7%**; CritPt 15.1%; MRCR at 1M: **54.1%** (trails GPT-5.5's 74.0)
- Artificial Analysis Intelligence Index: **33.7** (current recalibrated board; launch-era 51 on v4.1, then 53.2 — the version chain is documented, not comparable across scales)
- AA-Omniscience: index 28.1, accuracy 52.1%, hallucination 50.0%; MMLU-Pro (Vals): **88.7%**; HealthBench Professional 59.3%

Coding:

- SWE-bench (Vals): **82.0% ±1.72** (independent, mini-SWE-agent — #21/88; Meta published no SWE-V of its own); SWE-bench Pro: **61.5% ±3.1**
- LiveCodeBench (Vals): **85.91%** (#29/143); AA-SciCode: **58.8%** (#5/458 per BenchmarkList); AA Coding Index 71.3%
- Vibe Code Bench v1.1 (Vals): **72.16% ±3.33** (NEW — fills the gap; the +52.5-pt generational jump from 1.0's 19.67%)
- SWE-Atlas: **42.2%** (#3/14) / Test-Writing 41.5% (#9/24) — NEW
- DeepSWE: **53.3%** (Meta report; below the 74%+ frontier threshold)
- Arena WebDev: **1539.84** (#23/105); LMArena coding rows n/a; Kilo Terminal-Bench 2.0: 59.8%
- Atomic coding suite (Meta internal): 67.0% pass@1 / 82.5% pass@20

Long context:

- MRCR **54.1%** at the 1M window; AA-LCR **77.7%**; hands-on: retrieval solid to ~400K, vaguer beyond; active compaction can silently drop early constraints (buildfastwithai)

Multimodal / vision:

- CharXiv: **88.4%**; BabyVision: **76.3%**; MMMU-Pro (Vals): **86.59% ±0.82** (NEW); Design Arena Website: **1275**

### Normalized scores (1–100)

- **Tool use: 90/100.** Unchanged — the MCP Atlas #1 board position re-verifies (88.1% over Fable 5.1), TB2.1 80.0%/69.3%, OSWorld-Verified 80.8%, Toolathlon 75.6% and Cybench 92.9% clear the frontier references; OSWorld 2.0 14.2%, ExploitGym 0.8% and AA Agentic Index 27.5% cap it below 95.
- **Reasoning: 88/100.** Unchanged — HLE 52.2/62.1% and GPQA 89.8–91.2% clear the frontier references; the LiveBench Reasoning 87.7 row strengthens the evidence; AA Index 33.7 (current scale) and CritPt 15.1% cap below 90.
- **Context window: 92/100.** Unchanged — 1M tokens with measured MRCR 54.1% at 1M and AA-LCR 77.7%; below frontier-grade retrieval at the far end.
- **Multimodal: 95/100.** Unchanged — text, image, video, audio and PDF input in one API (the audio+Files-API combination keeps it at the top of the 90–100 band); MMMU-Pro 86.59% (Vals) added; text-only output the only gap.
- **Coding: 85/100.** Unchanged — the new Vibe 72.16% and SWE-Atlas 42.2% (#3) rows fill former gaps mid-band; SWE-V 82.0% (Vals), LCB 85.9%, SciCode 58.8% and SWE-Pro 61.5% are solid while DeepSWE 53.3% trails the frontier threshold.
- **Cost efficiency: 88/100.** Unchanged — $1.25/$4.25 (blended $2.00, cheapest of the Muse Spark line) sits exactly on the methodology's ~88 reference; 231 tok/s measured speed adds value; consumer free tier and $20 credits help evaluation.
- **Overall Score: 90/100.** (90 + 88 + 92 + 95 + 85) / 5 = 450/5 = 90.0 → 90 (unchanged). Best-fit: tool-heavy MCP stacks and multimodal (especially audio) ingestion where per-tool reliability matters — still the MCP-Atlas board leader, now two generations behind the line's frontier but priced accordingly.

---

## Signature

- Provided by: **GLM 5.3 Flash (z.ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: LLMBenchmark MCP Atlas live board (Nov 3), Meta evaluation-report rows via benchlm/OpenCode Data/evals.report, Vals AI x-high model page + BenchmarkList + AI Agent Store LiveBench profile + ComputePrices/LiteLLM/AnotherWrapper pricing and speed); no deprecation found; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.2.md`, using the same headings.
