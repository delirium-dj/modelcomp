# Grok 4.3 — findings by Ling 3.1 Flash

- Source: SpaceXAI (`opencode/grok-4.3`; API `grok-4.3`; Grok API, Grok app with live X/web access)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** SpaceXAI's April-2026 reasoning model (beta 2026-04-17, GA 2026-04-30) — GPQA Diamond 90.1%, GDPval-AA 1500 Elo (+321 over Grok 4.20), τ²-Bench Telecom 97.7–98%, CaseLaw v2 79.3% (#1) — across a 1M context at $1.25/$2.50 per 1M (below 200K); AA Intelligence Index 53, with weak coding (Coding Index 41–42.2%, Terminal-Bench Hard 38.0%) and a documented NYT Connections regression (93.4%→67.5%).
- **Provider / access:** SpaceXAI (xAI) — Grok API, Grok app (live X/web access for real-time research); native document generation (PDF/Excel/PowerPoint); image/video-frame input. `noFreeId`.
- **Release / knowledge:** beta 2026-04-17, GA 2026-04-30; knowledge cutoff Dec 2025 (ARMES).
- **IDs:** `opencode/grok-4.3` / `grok-4.3`. NOTE: the repo `meta.json` is stale — it says "128K total" and "Text in/out"; the model has a 1M-token window (131K max output via console, up to 1M via API) and takes text, image and video-frame input.
- **Context window:** 1,000,000 tokens (131,000 max output via console; up to 1M via API).
- **Modalities:** text, image, video-frame in; text out (plus native PDF/Excel/PowerPoint document generation).
- **Pricing (as of 2026-10-02):** $1.25/$2.50 per 1M input/output below 200K prompt tokens; $2.50/$5.00 at 200K+ (higher rate for the whole request); cached input $0.20/M ($0.40 ≥200K, 16% of input).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Independent (Artificial Analysis launch, 2026-04-30; AA Intelligence Index v4.0, a 10-eval composite incl. GDPval-AA, τ²-Bench Telecom, Terminal-Bench Hard, SciCode, AA-LCR, AA-Omniscience, IFBench, HLE, GPQA Diamond, CritPt):

- AA Intelligence Index: **53** (vs Grok 4.20 0309 v2: 49; just above Muse Spark and Claude Sonnet 4.6; GPT-5.5 xhigh leads at 60, Opus 4.7 at 57)
- GDPval-AA: **1500 Elo** (+321 vs Grok 4.20's 1179) — surpasses Gemini 3.1 Pro Preview, Muse Spark, GPT-5.4 mini (xhigh) and Kimi K2.5; trails GPT-5.5 (xhigh) by 276 Elo (~17% expected win rate)
- τ²-Bench Telecom: **97.7–98%** (+5 over Grok 4.20; in line with GLM-5.1)
- IFBench: **81.0%** (maintained from Grok 4.20)
- AA-Omniscience: accuracy **+8pp** over Grok 4.20, but non-hallucination rate **-8pp** (Grok 4.20 still leads, then MiMo-V2.5-Pro, then Grok 4.3)
- Cost to run the full AA Intelligence Index: **$395** (~20% less than Grok 4.20 0309 v2 despite ~44% more output tokens); input prices -37.5%, output -58.3% vs Grok 4.20

ARMES (independent harness):

- CaseLaw v2 (legal statutory analysis): **79.3%** — **#1**, +25pp over Grok 4.20
- CorpFin (corporate finance parsing): **#1**
- GPQA Diamond: **90.1%**; HLE: **35.0%**
- SciCode: **47.3%**; AA Coding Index: **41–42.2%**
- Terminal-Bench Hard: **38.0%**
- NYT Connections: **67.5%** (vs Grok 4.20's 93.4% — lateral/creative reasoning regressed)
- Caveats: "computational narcolepsy" (idle pauses) and structural looping in long unattended agent runs; elevated jailbreak risk flagged on Azure red-teaming; strong sycophancy resistance (holds reasoning under misleading prompts)

Coding (beyond the above):

- SWE-bench, LiveCodeBench, DeepSWE, Terminal-Bench 2.1, MCP Atlas, Toolathlon: no verified public score found

Long context / multimodal:

- 1M window; no MRCR/RULER/AA-LCR figure published separately (AA-LCR is part of the Index composite); no MMMU/Video-MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 73/100.** τ²-Bench Telecom 97.7–98% (in line with GLM-5.1), GDPval-AA 1500 Elo (above Gemini 3.1 Pro Preview, Muse Spark and GPT-5.4 mini xhigh) and CaseLaw v2 79.3% (#1, +25pp over Grok 4.20) lead; Terminal-Bench 2.1 at 39.7% (high — 13th percentile), Terminal-Bench Hard 37.9–38.0%, τ³-Banking 12.2%, the AA Coding Index of 41–42.3% and ARMES's "computational narcolepsy"/structural-looping caveats in long unattended runs cap the score, and MCP Atlas/Toolathlon were not captured.
- **Reasoning: 73/100.** GPQA Diamond 90.1% (AA) / 91.4% (Vals) reaches the 90%+ frontier band and MMLU-Pro 85.8% (Vals) supports; the AA Intelligence Index now reads 37.6 (high, v4.3.2 — vs 53 on the launch-era v4.0, a version-drift flag), and HLE 35.0% (AA) / 37.2% (AA text, no tools), SciCode 47.3%, AA-LCR 64.3%, AA-Omniscience (34.6% accuracy, 25.0% hallucination rate), the NYT Connections regression (67.5% vs Grok 4.20's 93.4%) and the 6-month knowledge-cutoff lag (2025-11) cap the score.
- **Context window: 95/100.** 1M-token window (131K max output via console, up to 1M via API); no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 68/100.** text/image/video-frame in with text out (plus native PDF/Excel/PowerPoint document generation) — the top of the +image-in band (60–70); no MMMU/Video-MMMU figure captured.
- **Coding: 65/100.** LiveCodeBench (Vals) **84.5%** and SWE-bench (Vals) **71.4%** are strong independent fills, but the AA Coding Index of 41.0–42.3%, SciCode 47.3%, Terminal-Bench Hard 37.9–38.0% and Terminal-Bench 2.1 at 39.7% are all well under the frontier bands, and DeepSWE was not captured; CaseLaw v2 #1 and CorpFin #1 are domain strengths outside coding.
- **Cost efficiency: 90/100.** $1.25/$2.50 per 1M below 200K (blended ~$1.56/M at 3:1) beats the ~$1.25/$4.25≈88 anchor on output price; ≥200K prompts bill the whole request at $2.50/$5.00, cache reads are 16% of input, and it costs ~$395 (~20% less than Grok 4.20) to run the AA Intelligence Index.
- **Overall Score: 75/100.** (73+73+95+68+65)/5 = 74.8 → 75 — an April-2026 cost-efficiency play (GPQA 90.1%, GDPval-AA 1500, τ²-Telecom ~98%, CaseLaw #1 at $1.25/$2.50 with a 1M window) whose weak agentic coding (TB 2.1 39.7%, TB Hard 38.0%, Coding Index 41%), HLE 35–37% and long-run stability caveats keep it below the October-2026 frontier.

---

## Update 2026-10-08 (6-day re-research)

Frontier (loggel), Vals, BenchLM, llmboard and OpenRouter rows found:

- Full AA effort ladder (Frontier, high/medium/low/non-reasoning): Intelligence Index 37.6/36.0/35.4/24.8; Coding Index 41.0/35.1/31.6/25.1; GPQA 90.1/89.0/84.3/65.8%; HLE 35.0/28.1/17.3/6.5%; SciCode 47.3/44.6/41.9/37.4%; IFBench 81.3/83.3/81.0/47.6% (medium **leads the frontier** at 83.3%); AA-LCR 64.3/65.0/64.0/24.7%; TB Hard 37.9/30.3/26.5/18.9%; **TB 2.1 39.7%** (high; non-reasoning 34.1% — 13th percentile vs the 84.6% frontier); τ³-Banking 12.2%; τ²-Telecom 97.7/91.2/88.9/65.8%
- **AA-LCR 64.3% (high) fills the long-context retrieval gap** on file ("no MRCR/RULER/AA-LCR figure published separately")
- Coding fills: LiveCodeBench (Vals) **84.5%**, SWE-bench (Vals) **71.4%** — strong independent rows that conflict with the AA Coding Index composite (41–42.3%); both are single-harness reads, so the spread is noted rather than resolved
- Other fills: GPQA Diamond (Vals) 91.4%, MMLU-Pro (Vals) 85.8%, AA-HLE 37.2% (text, no tools; llmboard: 37.21%, rank 37/200), AA-Omniscience accuracy 34.6% / hallucination rate 25.0% / Index 18.0%, AA-SciCode 48.3%
- Vals Index: accuracy 24.29% ± 0.81, $0.676/test, 5m38s latency; Vals lists max output 1M tokens
- Version drift flagged: the AA Intelligence Index reads **37.6** (high) on the current v4.3.2 methodology vs **53** on the launch-era v4.0 — the same downward revision seen across the April-2026 cohort; Frontier also reads the context window at 256K (vs 1M on Vals/launch docs) — access-tier conflict noted
- Knowledge-cutoff lag: 2025-11 (6 months) per Frontier
- **Scores revised**: Tool 74→73 (TB 2.1 39.7% at the 13th percentile), Reasoning 76→73 (AA Index 37.6 current read, HLE 35–37% under the 40% bar), Coding 62→65 (LiveCodeBench 84.5% / SWE-bench 71.4% Vals fills); Overall unchanged at 75 ((73+73+95+68+65)/5 = 74.8)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (SpaceXAI Grok 4.3 docs + pricing, Artificial Analysis launch article, ARMES docs, OfficeChai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_3.md`, using the same headings.
