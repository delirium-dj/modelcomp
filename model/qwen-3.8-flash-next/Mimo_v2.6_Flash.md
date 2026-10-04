# Qwen 3.8 Flash Next — findings by Mimo v2.6 Flash

- Source: Alibaba/Qwen (`qwen3.8-flash-next`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash Next (Qwen3.8-Flash-Next)
- **Short description:** Alibaba Qwen team's open-weight experimental preview of the architecture that will underpin Qwen4 — a multimodal (text/image/video-in) MoE optimized for agentic coding and cost efficiency. Not a variant of `qwen-3.8-flash`: the hosted production API name `qwen3.8-flash` (Qwen Cloud) is a separate serving entry with 1M context by default and built-in tools.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8-flash-next`; OpenRouter `qwen/qwen3.8-flash-next` (Chat Completions; tool calling, structured outputs, reasoning listed); Qwen Cloud `qwen3.8-flash` (OpenAI-compatible Chat Completions + Responses APIs, plus Anthropic-compatible interface); self-host from Hugging Face `Qwen/Qwen3.8-Flash-Next` (vLLM / SGLang / TokenSpeed serve OpenAI-compatible `http://localhost:8000/v1`).
- **Release / knowledge:** 2026-08-26 (HF README changelog, `huggingface.co/Qwen/Qwen3.8-Flash-Next`); knowledge cutoff not stated publicly.
- **IDs:** `opencode/qwen-3.8-flash-next` (Zen), `qwen/qwen3.8-flash-next` (OpenRouter), `qwen3.8-flash` (Qwen Cloud), `Qwen/Qwen3.8-Flash-Next` (HF weights).
- **Context window:** 262,144 tokens native, extensible to 1,000,000 via YaRN (HF card); Artificial Analysis lists 256K; production `qwen3.8-flash` ships 1M context by default (Alibaba Cloud blog, 2026-08-27). Recommended output caps inside the 1M window: 262,144 reasoning tokens / 131,072 final-response tokens (HF README) — how verified: vendor card + AA model page.
- **Modalities:** text, image, video in; text out; reasoning yes (thinking on by default, effort `xhigh`/`medium`/`low`, `preserve_thinking` on by default); tool calls yes; structured/JSON outputs yes (OpenRouter feature list). No audio input.
- **Pricing (as of 2026-10-05):** $0.15 in / $0.47 out per 1M, cache read $0.016 — 89% cache discount (Alibaba price page via Vector Wire; AA; OpenRouter); DeepInfra $0.11 / $0.38 (Vector Wire provider table); Model Studio China batch $0.113 / $0.382; open weights free to self-host under Qwen Community License 1.0 (commercial use allowed with restrictions). Paid access on Zen — no $0 tier found; free-tier caveat: n/a.
- **Architecture:** 125B total / 6B activated MoE + 51B n-gram embedding params + 4B MTP (HF card; AA reports 180B total / 6B active counting the embedding/MTP extras); GDN1 + Attention hybrid (3 of 4 layers Gated DeltaNet) with QSA sparse attention compression; open weights, Qwen Community License 1.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.14%** (Artificial Analysis via Vector Wire, aggregator, 2026-10-04) — BenchmarkList lists 0.9% for the same benchmark (rank 17/194); sources disagree, the AA-attributed 86.14% is corroborated by two aggregators' percentile placement
- Tau3-Banking / τ²-Bench V3 Banking: **45.4%** pass@1 (AA via BenchmarkList, rank 10/176, 95th pct; Vector Wire τ-Bench V3 Banking 45.36)
- GDPval-AA: **1,743 Elo** (BenchmarkList, rank 10/352, 97th pct) / 1,648 Elo (BenchLM) — sources disagree on the Elo; win rate 56.66% (AA via Vector Wire) / 55.6% (BenchLM, BenchLeader)
- Terminal-Bench 4.0 (AA): **25.25%** (Vector Wire / BenchLeader, #46)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon Verified **73.5%** pass@1 (Qwen card, rank 17/41); MCP-Atlas — no verified public score found
- Claw-Eval / ClawProBench: ClawEval-MM **64.4** (multimodal suite, rank 5/12 via HF card leaderboard + BenchmarkList); text-only Claw-Eval — no verified public score found
- AndroidWorld (mobile use): **84.5%** (Qwen card, rank 6/22)
- OSWorld 2.0: **19.4%** strict / 52.3% partial (vendor, HF README + llm-stats)
- Agents' Last Exam: Score **51.2** / pass@1 **24.3%** (Qwen card)
- JobBench **55.7** and CoWorkBench **73.9** (Qwen in-house); AA-Briefcase 1,583 Elo (94th pct, rank 10/145); AA Agentic Index 56.42

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Qwen card) / **92.3%** (AA)
- HLE: **35.9%** (Qwen card, judged by GPT-4o) / **38.0%** (AA)
- LCR / MLCR: AA-LCR v1.1 **79.67** (AA); MLCR — no verified public score found
- CritPt: **11.14%** (AA)
- Artificial Analysis Intelligence Index / BenchLM overall: **39.82** (AA, #7/118 in its class); BenchLM overall — no verified public score found
- Omniscience Accuracy / Hallucination Rate: **24.5%** accuracy / **54.68%** non-hallucination rate (1 − 45.3% hallucination) (AA); AA-Omniscience index −9.72
- LiveBench Reasoning **87.38**, Mathematics **85.82**, Language **74.64**, Data Analysis **74.24** (livebench.ai, verified 2026-10-04); IFBench **81.3** (vendor); MMMU-Pro **79.77** (AA); CharXiv Reasoning **90.6** (vendor)

Coding:

- SWE-bench Verified: no verified public score found; SWE-bench Pro: **62.5%** (Qwen card, Claude Code harness on a corrected/refined task set, rank 20/58)
- SWE-bench Multilingual: **81.0%** (Qwen card, mini-SWE-agent harness, rank 8/49)
- DeepSWE 1.1: **58.7%** (Qwen card, best of Claude Code / mini-SWE-agent, rank 31/52)
- LiveCodeBench: **91.9%** on v6 (Qwen card, rank 3/50)
- SciCode / AA-SciCode: **50.6%** (AA)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: AA Coding Index **73.05**; NL2Repo-Bench **48.1%**; LiveBench Coding **72.55%**, LiveBench Agentic Coding **61.62%**; LMArena WebDev Arena **1637.49** (rank ~9/105)

Long context:

- RULER (Qwen tech report, QSA config): **99.89** ≤128K / **99.62** 128–256K / **98.95** 256–512K / **93.00** 512K–1M; full-attention baseline 99.84 / 99.81 / 97.65 / 90.08
- MRCR 8-needle (Qwen tech report, QSA): **95.98** @128K / **93.00** @256K / **40.53** @512K / **26.44** @1M (macro-avg 80.93); full-attention baseline 97.14 / 94.20 / 30.66 / 20.71 — retrieval degrades sharply past 256K on needle aggregation

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 86.14% sits just under the ~88% frontier reference, τ³-Banking 45.4% just under the ~50% frontier, GDPval-AA 1,743 Elo right at the 1,750 frontier, plus AndroidWorld 84.5 and Toolathlon 73.5; capped because every headline tool reference lands slightly below frontier and OSWorld 2.0 strict is only 19.4%.
- **Reasoning: 86/100.** GPQA Diamond 91.7–92.3 clears the 90% frontier and AA-LCR 79.67 is strong, but HLE 35.9–38.0 misses the 40% frontier and the AA Intelligence Index 39.82 is far below the 60+ frontier (CritPt 11.1 also weak) — that gap caps it below 90.
- **Context window: 80/100.** 262K native (mid 200K–500K tier) with a documented YaRN path to 1M where RULER stays 93.00 beyond 512K; capped by MRCR collapsing to 40.53 @512K and 26.44 @1M, so 1M is a scaling claim rather than reliable needle aggregation.
- **Multimodal: 88/100.** Text/image/video in, text out puts it in the 75–90 video-input tier; near the top of that band on evidence (MMMU-Pro 79.77, CharXiv 90.6, RealWorldQA 88.5, MATH-Vision 95.7, LVBench 76.6); capped because there is no audio input and no non-text output.
- **Coding: 87/100.** Meets the frontier on AA Coding Index 73.05 (70+ frontier) and TB2.1 86.14 (85+ frontier), with LiveCodeBench 91.9 and SWE-bench Multilingual 81; capped by DeepSWE 58.7 (74+ frontier) and AA-SciCode 50.6 (55+ frontier) both short of frontier, and no SWE-bench Verified number.
- **Cost efficiency: 95/100.** $0.15/$0.47 per 1M with an 89% cache discount and $0.37 per AA-Intelligence-Index task — cheaper than 80% of priced models (Vector Wire) and free to self-host open weights; slightly above the $0.10/$0.20 reference band on output price, hence not 97–99.
- **Overall Score: 86/100.** Half-up mean of the five quality dims (88+86+80+88+87)/5 = 85.8 → 86 — best-fit: the cheap open-weight agentic coder/reasoner pick when 262K–1M context and image/video input matter more than peak HLE or factuality.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-05
- Method: public internet research (vendor card + tech report, Artificial Analysis, Vector Wire, BenchLM, BenchmarkList, BenchLeader, LiveBench, OpenRouter/Alibaba pricing pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
