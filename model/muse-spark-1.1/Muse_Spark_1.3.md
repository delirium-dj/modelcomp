# Muse Spark 1.1 — findings by Muse Spark 1.3

- Source: Meta/Muse Spark 1.1, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta Superintelligence Labs' July-2026 multimodal reasoning model for agentic tasks — multi-agent orchestration, computer use, and active 1M-context management at entry-frontier pricing. Prior generation to 1.2/1.3. Best fit for cost-sensitive agentic coding and computer-use pilots.
- **Provider / access:** Meta Model API (public preview; `muse-spark-1.1`), Meta AI app / meta.ai ("Thinking" mode); OpenCode Zen `opencode/muse-spark-1.1`.
- **Release / knowledge:** 2026-07-09 (Meta Research and ai.meta.com launch posts; llm-stats confirms); knowledge cutoff: no verified public statement found
- **IDs:** `opencode/muse-spark-1.1` (paid tier; cost scored on paid pricing $1.25/$4.25)
- **Context window:** 1M total tokens (1.04858M catalog value), 131K max output — verified via llm-stats API page and ModelBench catalog (12 providers)
- **Modalities:** Text, image, file in (base-model Vals profile: video not supported); text out; reasoning yes; tool calls, JSON mode, MCP servers, custom skills, subagent delegation yes
- **Pricing (as of 2026-09-23):** $1.25/$4.25 per 1M in/out, cached input $0.15/1M (verified via llm-stats, Computerworld, ModelBench). No $0 tier — paid only; ~86% below GPT-5.5 output pricing per analyst commentary.
- **Architecture:** Proprietary closed weights (undisclosed params)

### Raw benchmarks found

> Exact-ID rows (SWE-Pro, BenchLM overall) are 1.1-specific. Meta's launch claims for 1.1 name benchmark suites without exact figures — those are cited as vendor-claimed. Base-Muse-Spark (April 2026) rows are the closest measured proxy, marked provisional per the template rule.

Agent / tool use:

- Terminal-Bench 2.1: no verified 1.1-exact number found; Meta vendor-claims 1.1 competitiveness on Terminal-bench (no figures). Proxy (base, provisional): TB 2.0 **59.55%** (Vals independent) / TB 2.1 **62.2%** (AA via temperature2)
- Tau3-Banking / Tau2-Bench: no verified 1.1-exact number found. Proxy (base, provisional): Tau2-bench **91.5%** (AA via temperature2)
- GDPval-AA: no verified 1.1-exact number found. Proxy (base, provisional): **1145** (BenchLM base page)
- Claw-Eval / ClawProBench: no verified 1.1-exact number found. Proxy (base, provisional): Claw-Eval **63.8%** (BenchLM base page)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Meta vendor-claimed (no figures): 1.1 competitive with Opus 4.8 / Gemini 3.1 Pro / GPT-5.5 on BrowseComp, SpreadsheetBench, OSWorld (Computerworld summary of Meta blog)

Reasoning / knowledge:

- GPQA Diamond: no verified 1.1-exact number found. Proxy (base, provisional): **88.4%** (AA via temperature2) / 89.5% GPQA-D (BenchLM base page)
- HLE: no verified 1.1-exact number found. Proxy (base, provisional): **40.7%** (AA via temperature2); LM Council lists "Muse Spark" 40.56% no-tools (variant ambiguous — provisional)
- LCR / MLCR: no verified 1.1-exact number found. Proxy (base, provisional): AA-LCR **77.0%** (temperature2)
- CritPt: proxy (base, provisional) **11.3%** (BenchLM base page)
- Artificial Analysis Intelligence Index / BenchLM overall: BenchLM **71.78** 1.1-exact overall; AA Index 1.1-exact: no verified public score found (base 44.3 — provisional proxy)
- Omniscience Accuracy / Hallucination Rate: proxy (base, provisional) accuracy 49.6% / hallucination 84.2% (BenchLM base page)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-Pro **61.5%** 1.1-exact (llm-stats leaderboard, #16); Verified 1.1-exact: no verified public score found — proxy (base, provisional) Verified **77.4%** (BenchLM base page)
- LiveCodeBench: no verified 1.1-exact number found. Proxy (base, provisional): LiveCode Pro **80.0%** (BenchLM base page)
- SciCode / AA-SciCode: no verified 1.1-exact number found. Proxy (base, provisional): **51.5%** (temperature2/BenchLM base)
- Vibe Code Bench: no verified 1.1-exact number found. Proxy (base, provisional): 19.67% (BenchLM base — low, harness caveat, not scored on)
- DeepSWE / Coding Index / other: no verified 1.1-exact number found. Proxy (base, provisional): AA Coding Index 58.6 (index, noted only)
- Meta Internal Coding Bench: 1.1 "significantly improves upon Muse Spark, competitive with leading alternatives" (Meta launch post — vendor-claimed, no figures)

Long context:

- 1M window 1.1-exact verified; active context management (action memory, compaction) vendor-described; no verified 1.1-exact MRCR/RULER percentage found

### Normalized scores (1–100)

- **Tool use: 70/100.** No 1.1-exact tool numbers; base proxies (TB ~60%, Tau2 91.5%, Claw 63.8%) plus vendor-claimed 1.1 parity with Opus 4.8-class agents justify low-70s, capped by provisional status.
- **Reasoning: 80/100.** Base proxies (GPQA 88.4, HLE ~40.7, LCR 77) with claimed 1.1 gains point to low-80s; no 1.1-exact numbers cap it there.
- **Context window: 90/100.** Verified 1M window with vendor-described active context management, but zero verified retrieval percentages keep it off the 95+ tier.
- **Multimodal: 85/100.** Natively multimodal with base proxies (MMMU-Pro 80.4, CharXiv 86.4, ScreenSpot Pro 84.1) and claimed 1.1 multimodal gains; text-only output caps it.
- **Coding: 76/100.** 1.1-exact SWE-Pro 61.5% trails the 67%+ leaders; base proxies (SWE-V 77.4, LiveCode Pro 80) support mid-70s, capped by the exact-ID gap to the leaders.
- **Cost efficiency: 88/100.** $1.25/$4.25 paid pricing is the entry-frontier tier (~86% under GPT-5.5 output); not $0.
- **Overall Score: 80/100.** Mean of (70 + 80 + 90 + 85 + 76) / 5 = 80.2 → 80; best fit for cost-sensitive agent pilots that need 1M-context orchestration cheaply. (Provisional-leaning report: re-score when 1.1-exact harness numbers publish.)

---

## Signature

- Provided by: **Muse Spark 1.3 (muse-spark-1.3-contributor-free)** — 2026-09-23
- Method: public internet research (Meta 1.1 launch posts, llm-stats 1.1 API page, llm-stats SWE-Pro leaderboard, BenchLM 1.1/base pages, Vals base-model eval, Computerworld launch coverage, ModelBench catalog); 1.1-exact numbers used where they exist, base-generation rows explicitly marked provisional. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
