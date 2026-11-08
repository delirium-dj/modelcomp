# Ling 3.0 Flash — findings by GLM 5.3 Flash

- Source: InclusionAI / Ant Group (`ling-3.0-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash (`Ling-3.0-flash`)
- **Short description:** InclusionAI's (Ant Group's AGI lab) next-generation native hybrid-reasoning MoE — 124B total / 5.1B active — engineered for speed, compute efficiency, and production agentic workflows (coding, general, deep-research agents). Matches or outperforms its 1T-class predecessor Ring-2.6-1T on key benchmarks. Superseded by Ling 3.1 Flash (AA now benchmarks only the default 10K-input workload).
- **Provider / access:** open weights on Hugging Face (`https://huggingface.co/inclusionAI/Ling-3.0-flash`) and ModelScope; self-hosted via SGLang (MTP/NEXTN, 256K YaRN) or vLLM; hosted on Novita AI (HF Inference Provider) and OpenRouter — including a Free route `openrouter.ai/inclusionai/ling-3.0-flash:free`. Chat Completions API; runs Claude Code, Kilo Code, Qwen Code, Hermes Agent, OpenClaw.
- **Release / knowledge:** 2026-08-04 release (AA); knowledge cutoff not stated.
- **IDs:** `inclusionAI/Ling-3.0-flash` (self-host), `novita-ai/...` (HF provider), `openrouter/inclusionai/ling-3.0-flash` + `:free` Free route on OpenRouter (no Free ID on OpenCode Zen verified).
- **Context window:** 262,144 total (AA/LLM trackers list 262K; HF card gives the 8K → 32K → 256K context training schedule, i.e. 256K native via YaRN) — verified against both sources; max output 32K used in official SWE-bench evals. CONFLICT added 2026-10-16: llm-stats' DeepInfra provider row lists 131.1K/131.1K served — likely a truncated hosted window vs the native 256K+; the HF-card figure remains authoritative.
- **Modalities:** text in, text out; reasoning yes (thinking mode enabled by default, `enable_thinking: false` to disable); tool calls yes (`ling3` tool-call parser, auto tool choice); JSON mode not explicitly documented.
- **Pricing (as of 2026-10-16):** $0.075 in / $0.22 out per 1M (AA, InclusionAI API; 80% cache discount, blended ~$0.05/1M); DeepInfra now lists $0.060 in / $0.012 cached / $0.180 out per 1M (llm-stats provider row, added 2026-10-16 — the cheapest tracked route). Paid, plus a time-limited `$0` Free route on OpenRouter (not OpenCode Zen).
- **Architecture:** 124B total / 5.1B active MoE; native hybrid-linear attention (35 KDA + 7 Gated MLA layers, 5:1 stacking, fine-grained diagonal gating), 512 routed + 1 shared experts (8 activated), 157,184 vocab; 10,000+ interactive training environments; SGLang HiCache + Mooncake hierarchical caching (TTFT reduced 60–80% on long inputs); MIT license.

### Raw benchmarks found

Agent / tool use:

- **NEW — BenchLM page surfaced (fetched 2026-11-07, 40 rows; the prior passes recorded 404/chart-only)**: Terminal-Bench 2.1 **57.0%** (numeric; Vals independent **50.2%**), AA Tau3-Banking **28.0%** (weak), MCP Atlas **65.5%**, skillsBench 44.8%, BFCL v4 **73.0%**, GDPval-AA **1107 / 22.4%** (weak), WideResearch 73.6%, BrowseComp 72.2%, DRACO 70.4%, AA Agentic Index **21.0%** (weak), Hermes Index 21.6% / Hermes Bench 53.8%
- Artificial Analysis Intelligence Index: **20 / #3 of 65 in class** (AA model page; well above the small-open-weight median of 8; only the default 10K-input workload is still benchmarked; Nov 7 re-read 20.1%)

Reasoning / knowledge:

- AIME 2026: **93.2%** (official HF eval results, MathArena)
- HMMT Feb 2026: **87.0%** (official HF eval results, MathArena)
- HLE: **22.7%** (official HF eval results)
- **GPQA Diamond: 85.0%** (NEW — the model card row now numeric via BenchLM Nov 7; AA-GPQA 85.5%, Vals 84.8% — three-source agreement; fills the gap the prior passes marked missing)
- **AA-LCR: 73.0% measured** (NEW, BenchLM Nov 7 — the prior passes found no LCR value); CritPt: **1.7%** (near-zero)
- MMLU-Pro (Vals): **82.0%**; IFBench: 74.5%; IMOAnswerBench 83.7% (NEW); AA-Omniscience: Index **−17.9** / accuracy 18.2% / hallucination 44.1% (NEW — weak)

Coding:

- SWE-bench Pro: **56.6%** (official HF eval results; OpenHands harness, 256K context, 32K output)
- SWE-bench Multilingual: **72.4%** (official HF eval results)
- **LiveCodeBench v5: 82.8%** (NEW — fills the previously-missing LCB; strong); SciCode: **41.2%** (NEW) / AA-SciCode **42.0%**; **LCB (Vals): 84.0% / SWE-bench (Vals): 65.2% / AA Coding Index: 50.6%** (NEW, BenchLM Nov 7)
- SWE-bench Verified / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- no long-context retrieval reported (AA-LCR/MRCR/RULER not published; 256K YaRN is the design claim)

Speed: 332.1 output tokens/s (#1 of 65 in class, AA, InclusionAI API) — class-defying; TTFT 2.50s. Very verbose: 260M output tokens across the Intelligence Index run.

### Normalized scores (1–100)

> Recalculated 2026-11-08 on the newly surfaced 40-row BenchLM profile — the prior
> scores rested on chart-only vendor rows with the GPQA/LCR/LCB gaps marked missing.

- **Tool use: 58/100.** CHANGED from 60 — the charted rows are now numeric and mid-weak: TB2.1 57.0% (Vals 50.2%), MCP Atlas 65.5%, GDPval 22.4%, AA Agentic Index 21.0%, Tau3-Banking 28.0%; BFCL v4 73.0% and BrowseComp 72.2% hold it above the floor.
- **Reasoning: 68/100.** CHANGED from 65 — GPQA Diamond 85.0% (three-source agreement) fills the largest gap, AIME26 93.2% and AA-LCR 73.0% (measured) support the class; HLE 22.7%, CritPt 1.7%, the −17.9 Omniscience index and AA Index 20.1 cap it below frontier.
- **Context window: 74/100.** CHANGED from 72 — 262K total / 32K output with AA-LCR 73.0% now measured (solid for the tier).
- **Multimodal: 15/100.** Text-only input and output per the official HF card and AA.
- **Coding: 70/100.** CHANGED from 68 — LiveCodeBench v5 82.8% (Vals 84.0%) fills the missing LCB strongly, SWE-ML 72.4% and SWE-Pro 56.6% stand; SciCode 41.2%, AA Coding Index 50.6% and Vals SWE 65.2% temper it.
- **Cost efficiency: 98/100.** CHANGED from 97 — $0.075/$0.22 per 1M sits at the ~$0.10/$0.20 ≈ 97–99 reference with an 80% cache discount and ~$0.05/1M blended rate, and the newly tracked DeepInfra route ($0.06/$0.18, $0.012 cached) undercuts it further; among the cheapest hosted models benchmarked by AA. Paid, not $0 — not counted toward Overall.
- **Overall Score: 57/100.** CHANGED from 56 — mean of the five quality dims (58 + 68 + 74 + 15 + 70) / 5 = 285/5 = 57.0 → 57. The surfaced BenchLM page converts the chart-only evidence into measurements: the GPQA/LCR/LCB fills raise Reasoning/Context/Coding while the numeric agentic rows dock Tool use. Best-fit recommendation: ultra-fast, ultra-cheap workhorse for high-volume agentic coding and text workflows; escalate to a frontier model for deep reasoning, multimodal, or terminal-heavy tasks.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-08 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM's Ling 3.0 Flash page surfaced for the first time (fetched 2026-11-07 — 40 rows; the prior passes recorded 404/chart-only evidence) — GPQA 85.0% (three-source), TB2.1 57.0%, MCP Atlas 65.5%, LCB v5 82.8%, AA-LCR 73.0% and the AA/Vals/Hermes rows are new measurements; Tool 60→58, Reasoning 65→68, Context 72→74, Coding 68→70, Overall 56→57; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
