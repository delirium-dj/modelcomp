# GPT-5.6 Sol — findings by DeepSeek 4.1 Flash

- Source: OpenAI (`openai/gpt-5.6-sol`)
- Date: 2026-09-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol (flagship tier of the July 2026 GPT-5.6 family — Sol, Terra, Luna; evaluated as the "max" reasoning-effort configuration)
- **Short description:** OpenAI's frontier closed reasoning/coding model; text + image in, text out. It leads Artificial Analysis' Coding Agent Index and sits second in its Intelligence Index, but BenchLM already marks the profile "Superseded" by GPT-6 Astra (Sep 2026), so treat it as a peak-generation model rather than the current top.
- **Provider / access:** OpenAI first-party API (`https://openai.com/index/gpt-5-6/`), available through 7 API providers per Artificial Analysis. **No OpenCode Zen Free ID** — paid only (`noFreeId`), so cost is scored on paid pricing.
- **Release / knowledge:** Released 2026-07-09 (AA model page, Artificial Analysis launch article, BenchLM and BenchmarkList all agree). Knowledge cutoff not published in the sources checked.
- **IDs:** `openai/gpt-5.6-sol`; Artificial Analysis labels the measured variant `GPT-5.6 Sol (max)`; BenchmarkList slug `openai-gpt-5.6-sol`. No Zen Free ID exists.
- **Context window:** 1M tokens (Artificial Analysis) / 1.05M (BenchLM, BenchmarkList). Maximum output length is tracked separately by those trackers and was not published in the sources checked.
- **Modalities:** text + image in, text out; explicit reasoning with a new "max" effort level; tool use demonstrated by Terminal-Bench / MCP Atlas / Toolathlon / OSWorld runs. Audio, video and PDF input are not claimed.
- **Pricing (as of 2026-09-21):** paid. AA model page and BenchLM list **$4 / 1M input, $20 / 1M output**, cache reads discounted 90% ($0.40) and — new for OpenAI in this generation — cache writes at 1.25× input. The 2026-07-09 AA launch article and BenchmarkList list **$5 / 1M in, $30 / 1M out** ($0.50 cached). Sources disagree; both figures preserved.
- **Architecture:** proprietary, parameter count undisclosed, closed weights (no self-host).

### Raw benchmarks found

> Rows are independently harnessed unless the source is named as a provider page. Evidence base: 48 source-displayable rows (BenchLM) plus 188 benchmark entries (BenchmarkList).

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (BenchLM "best verified" row and BenchmarkList small-field row; provider-exact source: OpenAI GPT-5.6 page via BenchLM)
- Terminal-Bench 2.1 (Vals harness): **85.8%**; Terminal-Bench 2.1 "best reported harness": **89.5%** (rank 1 of 27) — benchmarklist.com
- Terminal-Bench 2.0: **91.9%**; Terminal-Bench 3.0: **34.6%** (rank 2 of 17); Terminal-Bench 4.0: **37.3%**; Terminal-Bench-Science: **22.4%**; Long-Horizon Terminal-Bench: **0.45** — BenchLM / benchmarklist.com
- Tau3-Banking: **44.3%** (rank 12 of 174) — benchmarklist.com
- GDPval-AA v2: **1748** (rank 2 of 2, small field) — benchmarklist.com; AA's launch article adds "scores similarly to Claude Fable 5 (max) in GDPval-AA v2"
- AutomationBench-AA: **51.2%** (BenchLM best-verified row) vs **79.8%** (benchmarklist.com small-field row) — harness disagreement
- AA-Briefcase: **1502 Elo**, rubric score **42%**, Analytical Quality Elo **1592**, highest recorded Presentation Elo of any model — AA launch article
- MCP Atlas: **83.6%** (rank 8 of 44); Toolathlon: **79.3%**; OSWorld 2.0: **62.6%**; BrowseComp: **92.2%** (rank 1 of 44); Vending-Bench 2: **9619.37**; APEX-Agents-AA: **56.7%**; ClawEval-MM: **81.2%**; WildClawBench: **67.2%**; Agents' Last Exam: **27.6% / 53.6%** — benchmarklist.com
- Claw-Eval / ClawProBench: **no verified public score found** (only the multimodal ClawEval-MM variant is published)

Reasoning / knowledge:

- GPQA Diamond: **95.2%** (rank 2 of 117) — benchmarklist.com; BenchLM's GPQA row reads **94.6%** (provider exact, OpenAI GPT-5.6 page)
- HLE: **49.5%** (rank 10 of 466); HLE-Verified (1,811 items): **54.5%**; HLE with tools: **64.5%** (rank 1 of 27) — benchmarklist.com / BenchLM
- Artificial Analysis Intelligence Index: **47** on the current v4.3.2 index (#14 of 200, AA model page); the 2026-07-09 launch article reported **59** on Index v4.1 at $1.04/task; BenchmarkList lists **61** (#5 of 418). Index versions differ — the three are not directly comparable.
- CritPt: **32.3%** (rank 1 of 31) — benchmarklist.com; BenchLM carries the same 32.3%
- MMLU-Pro: **89.1%**; SimpleQA: **71.6%** (rank 2 of 30); AIIQ Composite IQ: **136**; Vals Index: **73.1%** — benchmarklist.com
- ARC-AGI-2: **92.5%** (verified); ARC-AGI-3: **29.3%**; ARC-AGI-1: **97.5%**; FrontierMath Tier 4 v2: **83.0%**; FrontierMath Tier 4 (2025-07-01 private): **75.7%**; FrontierMath (2025-02-28 private): **93.9%**; AIME 2026: **99.9%** — benchmarklist.com
- AA-Omniscience: AA reports "a minor improvement over GPT-5.5 with a small uplift in accuracy coupled with an increase in hallucination rate" — split accuracy/hallucination figures: **no verified public score found**
- CyberGym: **84.5%** (BenchLM) / **83.6%** (rank 10 of 36, benchmarklist.com); Vals CyberBench: **88.1%** (rank 1 of 20)

Coding:

- SWE-bench Verified: **96.2%** (Vals AI run, rank 2 of 72) and **82.2%** (separate run, rank 9 of 46) — the two harnesses disagree by 14 points
- SWE-bench Pro: **64.6%** (rank 10 of 49; 16.6 behind Claude Fable 5.1's best-verified 81.2%) — BenchLM / benchmarklist.com
- DeepSWE: **73.0%** (rank 1 of 24) — benchmarklist.com; **72.7%** (2.7 behind Muse Spark 1.3's 75.4%) — BenchLM
- SciCode: **56.9%** (rank 7 of 458); LiveCodeBench (Vals): **82.6%** (rank 42 of 123); Vibe Code Bench v1.1: **80.5%**; SWE-Atlas Codebase QnA: **53.5%**; SWE-Atlas Test Writing: **45.9%**; FrontierSWE: **71.3%**; FrontierSWE v2: **0.32** mean (rank 4 of 4); CursorBench 3.2: **67.2%**; Senior SWE-Bench: **34.7%**; SWE-Marathon: **35.9%**; KernelBench Hard: **22.4%**; IOI: **86.7%** — benchmarklist.com
- Artificial Analysis Coding Agent Index: **80** — "leads every evaluation", tying Grok 4.5 on SWE-Atlas-QnA (AA launch article); benchmarklist.com ranks it 1 of 10

Long context:

- OpenAI MRCR v2 8-needle 512K–1M: **73.8%** (rank 3 of 9); MRCR v2 8-needle 256K–512K: **91.5%**; MRCR v2 256K (8-needle): **93.8%** — benchmarklist.com
- Graphwalks BFS 1M F1: **83.4%** (rank 1 of 10); Graphwalks BFS 256K F1: **95.4%** (rank 1 of 10) — benchmarklist.com
- AA-LCR v1.1: **77.7%** (rank 24 of 409); Context Arena: **85.5%** (rank 1 of 15); GDP.pdf: **54.5%** — benchmarklist.com
- Retrieval is strong through ~256K and degrades measurably in the 512K–1M band (73.8%), which is the operative limit for 1M-context work.

Multimodal (extra group — the raw template has none, but the Multimodal dimension is scored):

- MMMU-Pro: **88.8%** (rank 3 of 79) / **83.4%** (rank 5 of 74) — two harnesses; MMMU-Pro w/ Python: **84.6%** (BenchLM)
- ScreenSpot-Pro: **76.9%** (rank 9 of 59); Design Arena: **1434** (rank 4 of 343); CharXiv-R: **85.8%**; LVBench: **82.1%**; MathVision: **95.8%**; BabyVision: **88.9%**; Vals Multimodal Index: **72.2%**; LMArena Vision Arena: **1282.42** — benchmarklist.com

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 91.9% (best verified in the catalog), the Coding Agent Index lead (80) and GDPval-AA v2 1748 put it at the methodology's frontier reference (TB2.1 ≥88%, GDPval ≥1750, Tau3 ≥50% → 90–100), but Tau3-Banking 44.3% misses the 50% mark and MCP Atlas 83.6% / AutomationBench-AA 51.2% show real headroom, so it stops just short of the top.
- **Reasoning: 91/100.** GPQA Diamond 95.2% and HLE 49.5% / 54.5% verified clear the frontier refs (GPQA 90%+, HLE 40%+) and CritPt 32.3% is rank 1, but the long-context side (AA-LCR 77.7%, MRCR 512K–1M 73.8%, below the 95%+ MRCR reference) and the mid-frontier live Intelligence Index (47) cap it.
- **Context window: 96/100.** 1M–1.05M lands in the ≥1M tier (95–100); the band's 100 ceiling needs ≥98% retrieval at 512K+ and the published MRCR 512K–1M figure is 73.8% (Graphwalks 1M F1 83.4%), so it stays below 100.
- **Multimodal: 70/100.** Text + image in with genuinely strong image/document numbers (MMMU-Pro 88.8%, Design Arena 1434, ScreenSpot-Pro 76.9%), but no video/audio input and text-only output keep it at the top of the "+image in" band instead of the 75+ band.
- **Coding: 93/100.** SWE-bench Verified 96.2%, DeepSWE 73.0%, Terminal-Bench 2.1 91.9%, SciCode 56.9% and Coding Agent Index 80 meet or exceed the frontier refs (DeepSWE 74%+ is borderline); SWE-bench Pro 64.6% and FrontierSWE 71.3% are what cap it.
- **Cost efficiency: 52/100.** $4/$20 per 1M (AA, BenchLM; $5/$30 per the launch article) is frontier pricing — between the methodology's $3/$15 ≈ 60 and $10/$50 ≈ 30 anchors — only partly offset by the 90% cache-read discount, the new cache-write premium and low token use (~15k output tokens per Index task).
- **Overall Score: 88.4/100.** (92 + 91 + 96 + 70 + 93) / 5 = 88.4. Best fit: top-tier agentic coding and long-horizon professional knowledge work when frontier quality matters more than price; skip it for cheap high-volume text pipelines.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-09-21
- Method: public internet research — primary sources `https://artificialanalysis.ai/models/gpt-5-6-sol`, `https://artificialanalysis.ai/articles/gpt-5-6-has-landed`, `https://benchlm.ai/models/gpt-5-6-sol`, `https://benchmarklist.com/models/openai-gpt-5.6-sol/`; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
