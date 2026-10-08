# GPT-5.6 Luna — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-5.6-luna`; API `gpt-5.6-luna`; OpenAI API, ChatGPT Work, Codex, Azure, Amazon Bedrock, OpenAI Flex/Fast)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's fastest, most affordable GPT-5.6 tier (nano-class; 80% price cut on 2026-07-30) — Terminal-Bench 2.1 84.7%, GPQA Diamond 92.3%, FrontierMath Tier 1–3 78.6%, DeepSWE v1.1 67.2%, SWE-bench Pro 62.7%, Agents' Last Exam 50.3% (near Sol's 52.7%) across a 1.05M context at $0.20/$1.20 per 1M; the strongest price-performance point in the GPT-5.6 family.
- **Provider / access:** OpenAI API (reasoning effort none/low/medium-default/high/xhigh/max), ChatGPT Work and Codex (Free/Go: Terra; Plus/Pro/Business/Enterprise: Terra and Luna), Azure, Amazon Bedrock, OpenAI Flex (50% off) and Fast (2×). `noFreeId`.
- **Release / knowledge:** GPT-5.6 family GA 2026-07-09; Luna price cut 2026-07-30; knowledge cutoff not captured.
- **IDs:** `openai/gpt-5.6-luna` / `gpt-5.6-luna`. (The repo `meta.json` is accurate: 1,050,000/128K, text/image in, $0.20/$1.20.)
- **Context window:** 1,050,000 tokens in; 128,000 out.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $0.20/$1.20 per 1M input/output; cached input $0.02/M (10%); cache writes 1.25× uncached input ($0.25/M); >272K prompts billed 2× input and 1.5× output for the full request; Flex $0.10/$0.60; Fast $0.40/$2.40; web search $10/1K calls; 143 tok/s (max), 0.85s TTFT (non-reasoning).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

GPT-5.6 family launch (OpenAI, 2026-07-09; Luna column):

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (vs Sol 88.8%, Terra 87.4%, GPT-5.5 85.6%, Fable 5 83.1%, Opus 4.8 78.9%)
- DeepSWE v1.1: **67.2%** (vs Sol 72.7%, Terra 69.6%, GPT-5.5 67%, Fable 5 69.7%, Opus 4.8 59%)
- SWE-bench Pro: **62.7%** (vs Sol 64.6%, Terra 63.4%, GPT-5.5 59.4%, Fable 5 80%, Opus 4.8 69.2%)
- AA Coding Agent Index v1.1: **74.6** (vs Sol 80 SOTA, Terra 77.4, GPT-5.5 76.4, Fable 5 77.2, Opus 4.8 72.5)
- Agents' Last Exam: **50.3%** (vs Sol 52.7%, Terra 50.4%, GPT-5.5 46.9%, Fable 5 40.5%, Opus 4.8 45.2%)
- GDPval-AA v2: **1591.8 Elo** (vs Sol 1747.8, Terra 1593, GPT-5.5 1493.7, Fable 5 1759.6, Opus 4.8 1600.1)
- BrowseComp: **83.3%** (vs Sol 90.4%/Ultra 92.2%, Terra 87.5%, GPT-5.5 84.4%, Opus 4.8 85.9%)
- OSWorld 2.0: **45.6%** (vs Sol 62.6%, Terra 50.2%, GPT-5.5 47.5%, Fable 5 47.5%, Opus 4.8 54.8%)
- BenchCAD: **63.1%** (73.9% with Python tool; vs Sol 70.6%/83.4%)
- Capture-the-Flag: **85.2%**; SEC-Bench Pro: **48.9%**; ExploitBench: **33.2%**; ExploitGym: **12.4%**
- Management Consulting Tasks (internal): **35.4%**; Big Finance Bench: **36%**; HealthBench Professional: **55.7%**

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (vs Sol 94.6%, GPT-5.5 93.6%, Fable 5 92.6%, Opus 4.8 92%, Gemini 3.1 Pro 94.3%)
- FrontierMath Tier 1–3 (v2): **78.6%**; Tier 4 (v2): **58.5%** (vs Sol 89%/83%, Fable 5 87%/87.8%, Opus 4.8 80%/56.1%)
- AA Intelligence Index v4.1 (launch): **51.2** (vs Sol 58.9, Terra 55, GPT-5.5 54.8, Fable 5 59.9, Opus 4.8 55.7, Gemini 3.5 Flash 50.2)
- LifeSciBench: **51.2%**; GeneBench Pro: **10.8%**; MedChemBench (internal): **30.4%**

Independent (Artificial Analysis, current, per effort — max unless noted):

- Intelligence Index: **37.3** (xhigh 34.6, high 32.1, medium 25.0, low 21.0, non-reasoning 15.5)
- Coding Index: **71.4**; Agentic Index: **42.1**
- HLE: **39.5%** (high 33.4%); AA-LCR: **83.7%**; GDPval-AA: **48.2%**; CritPt: **20.6%**; SciCode: **53.6%**
- AA-Omniscience: accuracy **42.7%**, non-hallucination **7.4%** (very weak)
- MRCR v2 8-needle 256K–512K: **41.3%**; 512K–1M: **41.3%** (weak needle retrieval at depth)
- GraphWalks BFS 256K f1: **81.3%**; 1M f1: **51.2%**
- Internal Research Debugging: **50.8%**; KernelGen 1P: **22.4%**; NanoGPT: **1.66%**; PostTrainBench Lite: **29.6%**; RSI Index: **41.9%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 84.7% nearly reaches the 85% frontier bar, with DeepSWE v1.1 67.2%, SWE-bench Pro 62.7%, the AA Coding Agent Index of 74.6, BrowseComp 83.3% and Agents' Last Exam 50.3% (near Sol's 52.7%) supporting; OSWorld 2.0 45.6%, SEC-Bench Pro 48.9%, MRCR v2 41.3% and the AA Agentic Index of 42.1 (max) cap the score.
- **Reasoning: 78/100.** GPQA Diamond 92.3%, FrontierMath Tier 1–3 78.6% and HLE 39.5% (max) are frontier-adjacent, with FrontierMath Tier 4 58.5% supporting; the AA Intelligence Index of 37.3 (max, current Index — 51.2 on the launch v4.1), CritPt 20.6% and AA-Omniscience non-hallucination of 7.4% cap the score.
- **Context window: 90/100.** 1.05M-token window (128K out) with AA-LCR 83.7% (max) and GraphWalks BFS 81.3% at 256K; MRCR v2 at 41.3% (256K–1M) and GraphWalks 51.2% at 1M show weak needle retrieval at depth, so this stays below the 95+ band.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU figure captured.
- **Coding: 77/100.** Terminal-Bench 2.1 84.7% (vendor) / 80.9% (AA) / 79.03% (vals.ai) and the AA Coding Agent Index (74.6 at launch, 71.4 max on the current index) lead, with SWE-bench Verified 93.0% (vals.ai, rank 9/86, bash-only harness, $0.04/test), DeepSWE v1.1 67.0–67.2% ($0.61/task) and SWE-bench Pro 62.7% supporting; LiveBench Agentic Coding 48.4%, SciCode 53.6%, KernelGen 1P 22.4%, NanoGPT 1.66% and PostTrainBench Lite 29.6% cap the score.
- **Cost efficiency: 95/100.** $0.20/$1.20 per 1M (blended ~$0.40/M at 3:1) with 10%-of-input cache reads ($0.02/M) and a 50%-off Flex tier ($0.10/$0.60) sits between the ~$0.10/$0.20≈97–99 and ~$1.25/$4.25≈88 anchors; the >272K repricing (2× input, 1.5× output for the whole request) is the main caveat.
- **Overall Score: 78/100.** (78+78+90+65+77)/5 = 77.6 → 78 — a nano-priced model with frontier-adjacent reasoning (GPQA 91.7–92.3%, FrontierMath T1-3 78.6%) and near-frontier agentic coding (TB2.1 84.7%, SWE-bench Verified 93.0%, DeepSWE 67.2%) at $0.20/$1.20, held back by weak needle retrieval (MRCR 41.3%), OSWorld 2.0 (45.6%) and AA-Omniscience non-hallucination (7.4%).

---

## Update 2026-10-08 (6-day re-research)

Full independent scorecard found (The Model Gap, 2026-08-26; Datacurve; Writingmate; goml):

- SWE-bench Verified: **93.0%** (vals.ai, rank 9/86, minimal bash-tool harness, $0.04/test) — fills the gap; ~29× cheaper than Sol's 96.2% ($1.15/test) for a 3.2-point gap
- Terminal-Bench 2.1: **80.9%** (AA, e2b sandbox, pass@1 averaged over 3 repeats) / **79.03% ± 0.99** (vals.ai's own Terminus-2 run) / **75.7% ± 1.3** (Codex harness, 5 attempts, run 2026-07-11) — three independent readings bracketing the vendor's 84.7%
- DeepSWE v1.1: **67.0% ± 4** (Datacurve, mini-swe-agent via Pier, max effort; $0.61/task, 73K output tokens, 102 steps) — ~11× cheaper than Sol's 73% ($6.46/task) for a 6-point gap
- Agents' Last Exam (Snorkel): **30.3%** pass rate (perfect-run share); the same Codex/xhigh run's partial-credit Score is **49.4%** — the two metrics are not interchangeable; ~3× cheaper than Sol ($235 vs $772) for a marginal gap
- ARC-AGI-2 (max): **59.6%** (ARC Prize, dated 2026-07-30 — the price-cut date, possibly a later checkpoint); ARC-AGI-1 90.7%
- LiveBench (2026-06-25 release, max effort): **73.6%** overall (Reasoning 85.6, Coding 82.9, Agentic Coding 48.4, Mathematics 87.2, Data Analysis 78.0, Language 72.6, Instruction Following 60.1; $0.169/successful task); GPQA Diamond 91.7% (vals.ai, rank 16/135 — saturated board)
- goml cross-check: AA Intelligence Index v4.1 (max) 51%, AA Coding Agent Index 75%, ~80% lower cost per task than Sol ($0.21 vs $1.04), Pareto-frontier position ahead of Terra
- Absent boards (checked, no Luna row): LiveCodeBench (vals.ai), Toolathlon-Verified (entire GPT-5.6 family), HMMT Feb 2026 (all GPT-5.6 tiers)
- **Coding revised 75→77** (SWE-bench Verified 93.0% is a strong fill); Overall 77→78 ((78+78+90+65+77)/5 = 77.6)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (OpenAI GPT-5.6 launch + Luna price-cut posts, OpenAI API docs, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5_6_Luna.md`, using the same headings.
