# Gemini 3.5 Flash-Lite — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / Gemini 3.5 Flash-Lite
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google DeepMind's fastest, most cost-effective 3.5-class model — a sparse MoE, natively multimodal reasoning model for high-throughput execution and agentic subagents; on many agentic and coding evals it even outperforms Gemini 3 Flash.
- **Provider / access:** Google — Gemini API / Google AI Studio / Vertex AI; free tier on Google AI Studio and OpenCode Zen; GA 2026-07-21 (per TopReviewed, which notes Google names it as Gemini 3.1 Flash-Lite's replacement, earliest shutdown 2027-05-07 for the 3.1 tier). ~350 output tok/s (Artificial Analysis Index; 339–363 tok/s across aggregators).
- **Release / knowledge:** 2026-07-21. Knowledge cutoff not stated in captured sources.
- **IDs:** `google/gemini-3.5-flash-lite` (repo meta.json); `gemini-3.5-flash-lite` (Gemini API model code, stable).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text, image, video, audio, PDF in; text out. Thinking levels minimal/low/medium/high.
- **Pricing (as of 2026-10):** $0.30 input / $2.50 output per 1M, flat regardless of prompt length (blended 3:1 ≈ $0.85/M, HokAI #22/61); no batch-API or cached-input discount published for this tier.
- **Architecture:** Sparse mixture-of-experts transformer (per HokAI); first-answer latency ~0.6–0.9 s (Google AI Studio).

### Raw benchmarks found

Google DeepMind model card / product page (deepmind.google/models/gemini/flash-lite/, model card updated 2026-07-21; comparison vs Gemini 3.1 Flash-Lite, GPT-5.4 mini, Claude Haiku 4.5):

Agentic / tool use:

- SWE-Bench Pro (Public): **54.2%** (3.1 Flash-Lite: 38.3%; GPT-5.4 mini: 54.4%; Claude Haiku 4.5: 39.5%).
- Terminal-bench 2.1 (Terminus-2 harness): **54.0%** (31.0%; 59.2%; 44.2%).
- OSWorld-Verified (agentic computer use): **74.0%** (54.3%; 72.1%; 50.7%) — ahead of GPT-5.4 mini.
- GDPVal-AA v2 (knowledge work, Elo): **1140** (642; 1171; 907).
- MLE-Bench (machine learning engineering): **39.2%** (22.0%; —; —).
- AA Agentic Index: **14.3**; AutomationBench-AA: **25%** (vs Grok 4.5 High's 58%); τ-Bench Banking: **17.5%**; AA-Briefcase v1.1: **650** (vs Grok's 1281); GDPval-AA v2.1: **983** (vs the card's GDPVal-AA v2 Elo 1140 — version difference kept); GDP.pdf: **14%**.

Multimodal:

- CharXiv Reasoning (no tools): **74.5%** (73.2%; 80.3%; 61.7%); with tools: **76.5%** (75.6%).
- MMMU-Pro: **83.6%** (Vals); MedScribe: **70.9%**; MedCode: **43.5%**.

Long context:

- GDM-MRCR v2 (8-needle), 128K average: **72.2%** (60.1%; 42.7%; 35.3%); 1M pointwise: **21.3%** (12.3%).
- AA-LCR v1.1: **76.0%** (vs Gemini 3 Pro Preview low's 74% and Grok 4.5 High's 79%) — strong independent retrieval read on the native 1M window.
- LMArena (blind votes, 2026-09-30): Text **1454** (#70/410; 35,335 votes), WebDev **1440** (#69/137), Vision **1264** (#38/156), Agent **#45/46** (23,248 sessions).

Reasoning (third-party, not vendor):

- GPQA Diamond: **86.9%** vendor-reported (HokAI, 2026-09-09); Epoch: 74.2% minimal / 75.8% low / 83.3% high; AA: **83.8%**; Vals: **83.8%**.
- HLE: **18.8%** (AA); LMArena Hard Prompts Elo **1474** (BenchLeader) / 1477 (AnotherWrapper); LiveBench Reasoning 60.2% (high); AA Intelligence Index **23** (HokAI).
- HokAI cross-generation notes: SWE-bench Pro 54.2% vs Gemini 3 Flash's 49.6%; OSWorld-Verified 74.0% vs 65.1%; Terminal-bench 2.1 54.0% vs 31.0% (3.1 Flash-Lite); GDM-MRCR v2 72.2% vs 60.1%.
- MMLU-Pro: **85.8%** (Vals); AA Intelligence Index: **22.2** (#41/180; 59M tokens per Index run — concise vs the 100M median); AA-Omniscience Index: **5.2** (accuracy 29.5%, hallucination rate 34.4% / non-hallucination 65.6%). AA Index version caveat: the launch-era v4.1.1 read was **36** (vs 3.1 Flash-Lite's 25, per orcarouter); the current v4.3.2 rescored it to 22.2 — the ~14-point gap is the rebase, not a regression (HokAI's 23 aligns with the current read).
- SWE-bench Verified (Vals, mini-swe-agent bash-only harness): **75.0%** ±1.94 (#45/88; within 3.8 points of Gemini 3.5 Flash's 78.8% — inside the combined error bars — for a fifth of the input price); LiveCodeBench (Vals): **79.0%** ±1.10 (#75/143; Gemini 3.5 Flash: 87.6%); LiveBench Coding: **76.07** (livebench.ai, 2026-06-25 snapshot); SciCode: **41.3%** (AA); AA Coding Index: **49.3**; Vibe Code Bench v1.1: **37.2%**; IOI v1: **26.2%**; EMB: **43.2%**; Code Migration: **6.1%**; ProgramBench: **0.0%**.
- Terminal-bench 2.1 reads across harnesses: vendor **54.0%** (Terminus-2), AA **53.6%**, Vals **50.2%** — consistent mid-pack.
- Vals domain rows: LegalBench **84.1%**; TaxEval v2 **72.6%**; CorpFin v2 **60.7%**; CyberBench v1.1 **59.1%**; Finance Agent v2 **47.4%**; SAGE **47.3%**; MortgageTax **68.7%**; ProofBench v1 **13.0%**; Legal Research Bench **13.9%**; Tax Agent Bench **7.3%**; Harvey's Legal Agent **0.0%**; Vals Index **51.0%**.
- SWE-bench Verified, AIME, MCP-Atlas: no verified public score found for this tier.

### Normalized scores (1–100)

- **Tool use: 69/100.** OSWorld-Verified 74.0% (ahead of GPT-5.4 mini's 72.1%) and Terminal-bench 2.1 54.0% are strong for the tier; SWE-Bench Pro 54.2% ≈ GPT-5.4 mini; GDPVal 1140 and MLE-Bench 39.2% trail the mini flagships. AutomationBench-AA 25% (vs Grok 4.5's 58%), τ-Bench Banking 17.5% and the AA Agentic Index of 14.3 cap the score — stands at 69. Returnsignals' independent e-commerce catalog agent (2026-07-23) is the counter-signal: no 3.5 Flash-Lite thinking level beat 3.1 Flash-Lite end-to-end (91.4%/88.6%/91.4% vs 3.1 medium's 97.1%) at ≥50% higher cost per pass — a single 55-example task, so it caps rather than moves the score.
- **Reasoning: 64/100.** GPQA Diamond 86.9% (vendor) / 83.8% (AA) and MMLU-Pro 85.8% (Vals) are frontier-adjacent, but HLE 18.8%, LiveBench Reasoning 60.2% and the AA-Omniscience Index of 5.2 (34.4% hallucination rate) sit well below the 2026 frontier — stands at 64.
- **Context window: 86/100.** Full 1M window with published retrieval evidence: GDM-MRCR v2 72.2% at 128K (average) but only 21.3% pointwise at 1M — strong mid-range, weak extreme-range recall. AA-LCR v1.1 76.0% (ahead of Gemini 3 Pro Preview low's 74%, behind Grok 4.5's 79%) supports the score — stands at 86, held below the 94–95 tier by the 1M pointwise read.
- **Multimodal: 80/100.** Natively multimodal (text/image/video/audio/PDF in); CharXiv Reasoning 74.5% (76.5% with tools) and MMMU-Pro 83.6% (Vals) are the verified vision scores. Revised 78→80 on the MMMU-Pro 83.6% fill.
- **Coding: 67/100.** LiveCodeBench 79.0% (Vals) and SWE-bench Verified 75.0% (Vals, mini-swe-agent bash-only) are strong fills, but Terminal-bench 2.1 reads (54.0% vendor / 53.6% AA / 50.2% Vals), SciCode 41.3%, Vibe Code 37.2% and ProgramBench 0.0% hold the score down. Revised 63→67 on the LiveCodeBench/SWE-bench Verified fills.
- **Cost efficiency: 94/100.** $0.30/$2.50 per 1M flat (blended $0.85/M) with a free tier — the price floor of Google's 3.5 lineup, ~73% cheaper than Gemini 3.5 Flash; SmophyAI confirms $0.85/M blended across 2 providers (batch variant #46/90 by AA quality, 22.7).
- **Overall Score: 73.2/100.** Mean of the five quality dimensions (69+64+86+80+67)/5 = 73.2. The model beats its 3.1 Flash-Lite predecessor by 15–23 points on agentic evals and matches GPT-5.4 mini on several, at a third of the mini's price; the folder's peer average (76.7) is higher. Revised from 72.0 on the Multimodal (78→80) and Coding (63→67) revisions.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**Revised: Multimodal 78→80, Coding 63→67; Overall 72.0→73.2** — Tool 69 / Reasoning 64 / Context 86 / Cost 94 unchanged. This pass surfaced the AA model page, the full OpenRouter AA+Vals board, BenchLM, two AA head-to-head comparisons and SmophyAI's batch analysis:

- **AA composite reads:** Intelligence Index **22.2** (#41/180; 59M tokens per Index run — concise vs the 100M median); Coding Index **49.3**; Agentic Index **14.3**; GPQA Diamond **83.8%** (AA = Vals); HLE **18.8%**; SciCode **41.3%**; CritPt **0.0%**; Terminal-Bench 4.0 **1.0%** (a documented cap, consistent with the flash-lite tier).
- **AA agentic/head-to-head rows (vs Grok 4.5 High and Gemini 3 Pro Preview low):** AutomationBench-AA **25%** (Grok: 58%); AA-Briefcase v1.1 **650** (Grok: 1281); GDPval-AA v2.1 **983** (Grok: 1386); τ-Bench Banking **17.5%**; GDP.pdf **14%**; AA-Omniscience Index **5.2** (Grok: 25) with accuracy **29.5%** and hallucination rate **34.4%** (non-hallucination 65.6%).
- **Vals board fills:** LiveCodeBench **79.0%**; SWE-bench **75.0%**; MMLU-Pro **85.8%**; MMMU-Pro **83.6%**; TaxEval v2 **72.6%**; MedScribe **70.9%**; MortgageTax **68.7%**; CorpFin v2 **60.7%**; CyberBench v1.1 **59.1%**; Finance Agent v2 **47.4%**; SAGE **47.3%**; MedCode **43.5%**; EMB **43.2%**; IOI v1 **26.2%**; Legal Research Bench **13.9%**; ProofBench v1 **13.0%**; Tax Agent Bench **7.3%**; Vibe Code Bench v1.1 **37.2%**; Code Migration **6.1%**; Harvey's Legal Agent **0.0%**; ProgramBench **0.0%**; Vals Index **51.0%**.
- **Terminal-bench 2.1 harness spread:** vendor **54.0%** (Terminus-2), AA **53.6%**, Vals **50.2%** — three consistent mid-pack reads; SWE-Bench Pro 54.2% ≈ GPT-5.4 mini's 54.4%.
- **Long context:** AA-LCR v1.1 **76.0%** — ahead of Gemini 3 Pro Preview low (74%) and behind Grok 4.5 High (79%); GDM-MRCR v2 72.2% at 128K average but only 21.3% pointwise at 1M.
- **Deployment:** ~350 output tok/s (AA Index; 339–363 across aggregators; AA currently measures 344 tok/s with a 7.0 s average first answer, thinking included); first-answer latency ~0.6–0.9 s (Google AI Studio); free tier on Google AI Studio and OpenCode Zen; batch variant ranks #46/90 by AA quality (22.7) with #59/337 real-usage share (0.34% over 73 days, SmophyAI); GA 2026-07-21, named as Gemini 3.1 Flash-Lite's replacement (earliest 3.1 shutdown 2027-05-07, per TopReviewed).
- **Speed/cost-per-task (AA standardized workload, via dervity):** time-per-task 0.6 min (vs 3.1 Flash-Lite's 1.0) on 13K avg output tokens/task (down from 20K), but cost-per-task roughly doubled ($0.04→$0.09) because per-token prices rose ($0.30/$2.50 vs 3.1's $0.25/$1.50) — quality and latency up, unit token cost up.
- **Safety (DeepMind model card):** Text-to-Text Safety −8.14% and Multilingual Safety −0.92% (lower is better), Tone +3.04%, but Unjustified-refusals +5.32% (more refusals on sensitive topics — a slight regression); Frontier Safety assessed via Gemini 3.1 Pro — no Critical Capability Levels reached.
- **API notes (benchr/Vals):** max output **65,536** tokens; default thinking level `minimal` (Google recommends `medium`/`high` for multi-step subagents); sampling controls (temperature/top_p/top_k) deprecated for this generation and a trailing prefilled model turn returns a 400; computer use is a built-in tool (Google blog).
- Still open: SWE-bench Verified, AIME, LiveCodeBench from non-Vals harnesses, MCP-Atlas, and the vendor's own reasoning-suite rows (AIME/GPQA vanilla) for this tier.
- Score impact: Multimodal 78→80 (MMMU-Pro 83.6% Vals fill, alongside CharXiv 74.5%/76.5%); Coding 63→67 (LiveCodeBench 79.0% and SWE-bench Verified 75.0% Vals fills, capped by the TB 2.1 ~50–54% three-read cluster, SciCode 41.3%, Vibe Code 37.2% and ProgramBench 0.0%); Overall 72.0→73.2 ((69+64+86+80+67)/5). Tool 69 stands (AutomationBench-AA 25%, τ-Bench Banking 17.5% and AA Agentic Index 14.3 cap OSWorld 74.0% and TB 2.1 54.0%; the returnsignals downstream loss to 3.1 Flash-Lite is a single narrow task — documented, not score-moving); Reasoning 64 stands (MMLU-Pro 85.8% supports; HLE 18.8%, LiveBench 60.2% and AA-Omniscience 5.2 cap; the AA Index 22.2 is the current v4.3.2 read — the launch-era 36 is the rebase, not a regression); Context 86 stands (AA-LCR 76.0% supports; GDM-MRCR v2 1M pointwise 21.3% holds it below the 94–95 tier); Cost 94 stands.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03 (updated 2026-10-11)
- Method: public internet research (web search and direct model-card/page fetches; Artificial Analysis, Google DeepMind model card, OpenRouter AA/Vals boards, BenchLM, SmophyAI, TopReviewed); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
