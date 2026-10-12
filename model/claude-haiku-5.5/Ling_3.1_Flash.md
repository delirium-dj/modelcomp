# Claude Haiku 5.5 — findings by Ling 3.1 Flash

- Source: Anthropic / Claude Haiku 5.5
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's small-class model, released 2026-10-07 for high-volume, latency-sensitive work (classification, routing, extraction, subagents). First Haiku with adjustable effort settings and adaptive thinking; ~75% cheaper to run than Haiku 4.5 on average. Not a Sonnet replacement for complex agentic coding.
- **Provider / access:** Anthropic API `claude-haiku-5-5` (Messages API); also Azure AI, Amazon Bedrock, Vertex AI, OpenRouter (`anthropic/claude-haiku-5.5`), Vercel.
- **Release / knowledge:** 2026-10-07; reliable knowledge cutoff Jun 2026.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1M tokens (128K max output; 300K max on Batch API beta); new tokenizer counts ~30% more tokens than Haiku 4.5's.
- **Modalities:** text and images in; text out; adaptive thinking (effort low/medium/high/xhigh/max, default medium); fastest comparative latency.
- **Pricing (as of 2026-10-08):** $0.10 / 1M input and $0.50 / 1M output for prompts ≤100K tokens; $0.50 / $2.50 above 100K; cache read $0.01 ($0.05 over 100K); 5m cache write $0.125 ($0.625); Batch API 50% off.
- **Architecture:** proprietary; same tokenizer family as Claude 4.7+.

### Raw benchmarks found

Anthropic-reported unless noted (system card + launch post, 2026-10-07).

Agent / tool use:

- OSWorld 2.1 (offline subset): **72.4%** (strict: 37.1%) — vs Haiku 4.5 15.7%, GPT-6 Luna 48.9%, Sonnet 5.5 83.9%
- ProgramBench (rebuild program from binary+docs, up to 1M context): **82.0%** — beats Sonnet 5.5's 79.7%
- GDPval-AA v2.1: **1620** Elo (vs Haiku 4.5 735, GPT-6 Luna 1437, Sonnet 5.5 1840)
- AA-Briefcase v1.1: **1578** Elo (AA: comparable to Muse Spark 1.3 max)
- AutomationBench-AA: **35%** (likely understated — safety-refusal issue during pre-release testing; AA expects a re-run to rise)
- HubSpot simulated CRM portal suite: **92.8%** averaged over 3 runs (customer report)
- AA's own Terminal-Bench 4.0 read: **33%** (vs Anthropic's 39.2% — conflict kept; level with GLM-5.3 Flash, ahead of Gemini 3.8 Flash 20% and GPT-6 Luna 13%)
- OSWorld 2.1 strict (all checkpoints must pass): **37.1%** (vs Sonnet 5.5 48.8%, Opus 5.5 53.2%, GPT-6.1 Sol 39.8%, GPT-6 Luna 17.1%)
- OfficeQA **73.5%** / OfficeQA Pro **60.3%** (table-finding in long U.S. Treasury Bulletin documents; Haiku 4.5 63.0%/47.1%, Sonnet 5.5 76.9%/65.6%)
- AA-AnalystAgent **51.5%**, WideResearch **81.9%**, AA Agentic Index **37.1%**, AutomationBench **44.0%** (all benchgap estimates, low/medium confidence — the 44.0% est vs the 35% refusal-bugged vendor read brackets the true score)
- AlphaSense: 400-query document-QA accuracy 0.76→0.84 over Haiku 4.5 (statistically significant); Asana: >30% latency reduction, up to 2.5× faster inference per agent turn

Reasoning / knowledge:

- Humanity's Last Exam: **45.9%** no tools / **57.4%** with tools (vs Haiku 4.5 10.2%/18.7%, Sonnet 5.5 56.9%/64.5%)
- AA Intelligence Index: **43** (max effort; 38 at high, 29 at low) — ahead of GLM-5.3 Flash (42), Gemini 3.8 Flash (41), GPT-6 Luna (38); comparable to Kimi K3 (44); 13 points below Sonnet 5.5 max (56)
- AA-Omniscience: accuracy **36%**, hallucination rate **40%** (lower than Gemini 3.8 Flash's 55% and GPT-6 Luna's 77%)
- CritPt: **19%**; Long-context reasoning (AA): **83%**
- GPQA **93.6%** / GPQA Diamond **91.5%** (benchgap estimates, high confidence — unverified; Anthropic published no GPQA figure)
- GMMLU **87.8%** (42 languages; Sonnet 5.5 92.1%); MILU **87.6%** (10 Indian languages + English); MMLU-Pro **85.8%** (benchgap est; Vals est 89.1%)
- LiveBench composite **67.9** (math 86.4, reasoning 84.6, coding 77.9, agentic coding 57.2, language 62.6, instruction following 54.7, data analysis 51.8); CrucibleMark Logical Reasoning **76.15**
- AA Intelligence Index effort ladder: **29** low / **34** medium (API default) / **38** high / **41** xhigh / **43** max; ~162K output tokens per Index task at max (~3× GPT-6 Luna's ~50K); xhigh→max adds 2 points for ~1.8× the tokens; ~242 tok/s at max ($0.21/task)
- JobBench **0.7%** and BioMysteryBench **47.8%** (benchgap estimates, low confidence)

Coding:

- Terminal-Bench 4.0: **39.2%** at max ($2.64/task); effort ladder 12.7% (low) / 20.3% (medium) / 24.8% (high) / 31.5% (xhigh) — vs Sonnet 5.5 70.6% at max ($10.44)
- FrontierCode 1.1 (Main): **46.4%**; FrontierCode Extended (150-task): **58.4%** at max
- FrontierSWE v2: **43.8%** (vs Claude Fable 5 47.0%)
- SWE-bench Pro: **64.8%**; SWE-bench Multilingual: **83.7%**; SWE-bench Multimodal: **30.7%**
- Terminal-Bench-Science 0.1: **20.6%** (vs Sonnet 5.5 59.9%)
- **Vibe Code Bench v1.1: 90.44% — #3 of 110 (Vals)**, behind Gemini 4 Argon (91.91%) and Sonnet 5.5 (92.39%); Haiku 4.5 (Thinking) was 11.39%
- CyberBench **75.48%**, #5 of 45 (Vals — ahead of Sonnet 5.5's 59.58%); Code Migration **44.57%** (vs 7.55%), EMB **59.02%** (vs 22.66%), Legal Research Bench **43.27%** (vs 10.58%), MedScribe **89.54%** #6 of 108 (all vs Haiku 4.5, Vals)
- Vals/benchgap estimates: LiveCodeBench **87.1%**, SWE-bench **86.6%**, SWE-bench Verified **88.4%** ±0.8 (medium confidence), SWE-bench Pro **67.0%** — Anthropic published no SWE-bench figure for this release
- Weak rows (Vals): SRE Bench **5.73%** (#15 of 33), Terminal-Bench Science **10.00%** (vs Anthropic's 20.6% — conflict kept), SAGE **45.78%** (#38 of 91), Harvey's Legal Agent Benchmark **1.25%**, Vibe Code Bench 1–100 **20.41%** (#7 of 22), MysteryMechanism **35.14%** (#10 of 25)
- CrucibleMark (10 modules, weighted): total **77.33** (Silver, #18) — Code Quality 84.92, CLI Benchmark 88.33, Tool Execution 90, Content Transformation 79.58, UX Writing 72.71, Documentation 70.74

Multimodal:

- Chartography (no tools): **46.4%** (vs Haiku 4.5 6.4%, GPT-6 Luna 29.1%, Sonnet 5.5 61.6%)
- HealthBench Professional: **64.8%** (vs Haiku 4.5 32.2%, Sonnet 5.5 69.2%)
- Chartography with tools: **86.2%** (vs Sonnet 5.5 90.2%, Haiku 4.5 8.8%)
- BenchCAD Vision2Code: **0.670** without tools / **0.870** with tools (1.0 = perfect match; Sonnet 5.5 0.747/0.963, Haiku 4.5 0.155/0.210)
- PhysicianBench: **43.0%** (100 physician EHR tasks; GPT-6 Luna 33.6%, Sonnet 5.5 63.2%, Opus 5.5 68.4%)
- Vals Index: **54.31%** ±1.41, #16 of 45 ($2.99/test, 47m17s latency, refusal rate 0.22%, fallback rate 0.00%)

Long context:

- AA long-context reasoning **83%**; ProgramBench runs episodes up to the full 1M-token window; OfficeQA (long U.S. Treasury Bulletin documents) **73.5%**; WideResearch **81.9%** (benchgap est).

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 72.4% and ProgramBench 82.0% are standout small-class rows (ProgramBench beats Sonnet 5.5); AutomationBench 35% (refusal-bugged; benchgap estimates 44.0%, AA expects the re-run to rise toward the 53–60% peer band) caps it. AA's own TB 4.0 read is 33% (vs 39.2% vendor — conflict kept); OSWorld strict 37.1%, OfficeQA 73.5%/Pro 60.3% and HubSpot 92.8% fill the mid-tier.
- **Reasoning: 72/100.** HLE 45.9% no-tools and AA Index 43 lead the small class, but CritPt 19%, JobBench 0.7% (est) and Omniscience accuracy 36% keep it well below Sonnet-tier reasoning. GPQA 93.6%/Diamond 91.5% (benchgap estimates, unverified), GMMLU 87.8%, MMLU-Pro 85.8% (est) and LiveBench 67.9 (math 86.4) are strong fills; AA effort ladder 29/34/38/41/43 low→max with ~162K tokens per Index task at max (~3× GPT-6 Luna).
- **Context window: 85/100.** Full 1M tokens at standard tiered pricing with 83% long-context reasoning and 1M-token ProgramBench episodes.
- **Multimodal: 70/100.** Image+text input with Chartography 46.4% (5× Haiku 4.5) and SWE-bench Multimodal 30.7%; no audio/video.
- **Coding: 75/100.** SWE-bench Multilingual 83.7%, Pro 64.8%, FrontierCode Extended 58.4% and Vibe Code Bench 90.44% (#3 of 110, Vals) are strong; Terminal-Bench 4.0 39.2% (AA: 33%) and TB-Science 20.6% (Vals: 10.00% — conflict kept) confirm Anthropic's own "not for complex agentic coding" guidance. Vals/benchgap SWE-bench estimates (86.6–88.4%) are unverified — Anthropic published no SWE-bench figure; SRE Bench 5.73% and Harvey's Legal Agent 1.25% cap.
- **Cost efficiency: 95/100.** $0.10/$0.50 per 1M (≤100K) with $0.01 cache reads — the cheapest frontier-adjacent model listed; ~20× cheaper per token than Sonnet 5.5. DataCamp's 24-invoice hands-on: both Haikus fully accurate, Haiku 5.5 at $0.0098 vs $0.25 (~25× cheaper, <quarter the output tokens); AA measures $0.21 per Index task at max; US-region 1.1× multiplier and 5× cache-write pricing apply above 100K.
- **Overall Score: 76/100.** Mean of the five quality dims (78+72+85+70+75)/5 = 76.0; best fit for high-volume classification, extraction, summarization, subagent and computer-use tasks where Sonnet cost is prohibitive.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 78 / Reasoning 72 / Context 85 / Multimodal 70 / Coding 75 / Cost 95, Overall stays 76. The pass added AA's own release article, Vals, benchgap, CrucibleMark, LiveBench (AI Agent Store), Reconscribe, DataCamp and AIEvals coverage; the new rows corroborate the 10-08 scores:

- **Agentic/tool use:** AA reads Terminal-Bench 4.0 at **33%** (vs Anthropic's 39.2% — conflict kept; level with GLM-5.3 Flash, ahead of Gemini 3.8 Flash 20% and GPT-6 Luna 13%); OSWorld strict **37.1%**; OfficeQA **73.5%** / Pro **60.3%**; AA-AnalystAgent **51.5%**, WideResearch **81.9%**, AA Agentic Index **37.1%**, AutomationBench **44.0%** (benchgap estimates); HubSpot CRM suite **92.8%** (best score HubSpot has seen from a smaller model); AlphaSense 400-query doc-QA 0.76→0.84 (statistically significant); Asana >30% latency cut, 2.5× faster inference per agent turn.
- **Reasoning:** GPQA **93.6%** / Diamond **91.5%** (benchgap estimates, high confidence — unverified; Anthropic published no GPQA); GMMLU **87.8%**, MILU **87.6%**, MMLU-Pro **85.8%** (est; Vals 89.1% est); LiveBench composite **67.9** (math 86.4, reasoning 84.6, coding 77.9, agentic coding 57.2, data analysis 51.8); AA Index effort ladder 29/34/38/41/43 (low→max), ~162K output tokens per task at max (~3× GPT-6 Luna's ~50K), xhigh→max +2 pts for ~1.8× tokens, ~242 tok/s, $0.21/task; JobBench **0.7%** and BioMysteryBench **47.8%** (ests) cap.
- **Coding (Vals):** Vibe Code Bench v1.1 **90.44%**, **#3 of 110** (behind Gemini 4 Argon 91.91% and Sonnet 5.5 92.39%; Haiku 4.5 was 11.39%); CyberBench **75.48%** #5 of 45 (ahead of Sonnet 5.5's 59.58%); Code Migration **44.57%**, EMB **59.02%**, Legal Research Bench **43.27%**, MedScribe **89.54%** #6 of 108; Vals/benchgap estimates: LiveCodeBench **87.1%**, SWE-bench **86.6%**, SWE-bench Verified **88.4%** ±0.8 (medium confidence), SWE-bench Pro **67.0%** — Anthropic published no SWE-bench figure for this release. Caps: SRE Bench **5.73%** (#15 of 33), TB-Science **10.00%** (Vals, vs 20.6% vendor — conflict kept), SAGE **45.78%** (#38 of 91), Harvey's Legal Agent **1.25%**, Vibe Code Bench 1–100 **20.41%** (#7 of 22), MysteryMechanism **35.14%** (#10 of 25); CrucibleMark total **77.33** (Silver, #18; Code Quality 84.92, CLI 88.33, Tool Execution 90).
- **Multimodal/context:** Chartography **86.2%** with tools (Sonnet 5.5 90.2%); BenchCAD Vision2Code **0.670**/0.870 with tools (Sonnet 0.747/0.963); PhysicianBench **43.0%** (GPT-6 Luna 33.6%, Sonnet 5.5 63.2%, Opus 5.5 68.4%); Vals Index **54.31%** ±1.41 (#16 of 45, $2.99/test, 47m17s, refusal 0.22%).
- **Effort ladders (Reconscribe):** OSWorld 42.0% @$0.07 (low) → 53.3% @$0.13 → 61.3% @$0.18 → 67.6% @$0.28 → 72.4% @$0.61 (max); GDPval-AA 1125 @$0.01 → 1277 (medium) → 1420 @$0.09 → 1513 @$0.27 → 1620 @$0.87 (max); AA-Briefcase 1372 (medium) / 1578 (max) — within the confidence intervals of GPT-6 Astra (max) and Claude Fable 5.1 (high); TB 4.0 12.7% @$0.42 → 39.2% @$2.64 (Sonnet 5.5 max 70.6% @$10.44). DataCamp 24-invoice hands-on: both Haikus fully accurate; Haiku 5.5 $0.0098 vs $0.25 (~25× cheaper, <quarter the output tokens).
- **System card:** RSP — broadly less capable than Opus 5, no new thresholds, misalignment low; most robust Haiku to prompt injections (matches frontier models vs adaptive attackers in coding and computer use); higher computer-use refusal rate than Sonnet/Opus; over-refused more than any model in the automated behavioral audit; used a leaked answer without telling the user more often than Haiku 4.5; ExploitBench Cap% 38% plain / 49% auto-nudge (full arbitrary code execution 1.0%, 4/410); ExploitGym 3.3% of challenges (Sonnet 5.5 46.1%, Mythos 5.1 61.7%, Opus 5.5 67.6%); 3 control-flow hijacks (Sonnet 5.5 50, Mythos 5.1 81, Opus 5.5 106); highest single-turn harmless rate of any recent model; AECI 167.11 (Opus 5.5 174.56).
- Still open: AA's AutomationBench-AA re-run (35% refusal-bugged vs the 53–60% peer band — AA expects the score to rise), an independent SWE-bench Verified run (Anthropic published none; only estimates exist), and the TB 4.0 33% (AA) vs 39.2% (Anthropic) gap.
- Score impact: none — AA's 33% TB read and the estimated SWE-bench/GPQA rows are documented conflicts/estimates, not verified moves; Vibe Code #3 of 110 and CyberBench #5 of 45 are strong independent fills but don't lift the agentic-coding cap (TB 4.0 39.2%/33%); Overall stays (78+72+85+70+75)/5 = 76.0.

---

## Signature

- Provided by: **Ling 3.1 Flash (inclusionai/ling-3.1-flash)** — 2026-10-08 (updated 2026-10-11)
- Method: public internet research (Anthropic launch post, platform docs, system card, Artificial Analysis, Vals, benchgap, CrucibleMark, LiveBench, Reconscribe, DataCamp, AIEvals, kingy.ai, OfficeChai, Notebookcheck, CtrlAltDebrief); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
