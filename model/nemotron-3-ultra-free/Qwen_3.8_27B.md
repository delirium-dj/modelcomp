# Nemotron 3 Ultra Free — findings by Qwen 3.8 27B

- Source: NVIDIA/Nemotron 3 Ultra (`opencode/nemotron-3-ultra-free`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (NVIDIA Nemotron 3 Ultra 550B A55B, reasoning variant, via OpenCode Zen free tier)
- **Short description:** NVIDIA's open-weights frontier-reasoning/orchestration MoE (550B total / 55B active, hybrid Mamba/Transformer) released June 2026 — strong scientific reasoning, fast and low-hallucination, aimed at complex agents; the free tier is the OpenCode Zen listing of the same weights, time-limited.
- **Provider / access:** OpenCode Zen free tier `opencode/nemotron-3-ultra-free`; paid via OpenRouter `nvidia/nemotron-3-ultra-550b-a55b` (4 providers) and 8 API providers total per Artificial Analysis; self-hostable from Hugging Face (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`).
- **Release / knowledge:** released 2026-06-04 (Artificial Analysis / OpenRouter); knowledge cutoff not disclosed in sources found.
- **IDs:** `opencode/nemotron-3-ultra-free` (Zen Free — evaluated tier); `nvidia/nemotron-3-ultra-550b-a55b` (paid OpenRouter); `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` (Hugging Face).
- **Context window:** 262,144 tokens total (OpenRouter; AA rounds to 262k/260k), max output 16,384 (OpenRouter) — noted as caveat per methodology (max output <64K). Some trackers (BenchLM via HF card) claim up to 1M context; not confirmed by AA or OpenRouter, so scored at the verified 262K.
- **Modalities:** Text in, text out — explicitly no image input (AA: "does not support image input"). Reasoning: yes (explicit reasoning mode; non-reasoning variant may exist). Tool calls: yes (Tau2/Tau3/Terminal-Bench/MCP-Atlas agentic runs).
- **Pricing (as of 2026-09-30):** Free tier $0 (OpenCode Zen, time-limited; free-tier outputs may carry training-data caveats). Paid equivalent: $0.50 in / $2.20 out / $0.10 cached in per 1M (OpenRouter); AA cross-provider median $0.60/$2.50, $0.60 per AA Intelligence Index task.
- **Architecture:** 550B total / 55B active MoE, hybrid Mamba/Transformer (BenchmarkList profile + AA model-size data); open weights, OpenMDW/NVIDIA Open Model License; open training data and recipes. Speed: 185.3 t/s, TTFT 1.10s (AA median across providers).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **56.4%** (rank 3/11 in small cohort, 80th pct overall — Vals via BenchmarkList 2026-06-04; field leader GLM-5.3 88.3%)
- Terminal-Bench Hard: **36.4%** (rank 43/326, 87th pct — AA, via BenchmarkList 2026-06-10)
- Tau2-Bench Telecom: **83.3%** (rank 80/332, 76th pct — AA, 2026-06-10)
- Tau3-Banking: **14.2%** (rank 73/174, 58th pct — AA, 2026-09-02); TAU3-Bench overall **70.9%** (Airline 81.5 / Retail 86.4 / Telecom 92.9 / Banking 22.6 — model card, 2026-06-04)
- GDPval-AA: **1164** Elo (independent AA run, 2026-07-15; model card claims 1448; earlier AA index snapshot 1379.02)
- PinchBench (OpenClaw agent): **90** best score (rank 7/73, 92nd pct — model card, field leader at that date)
- AA-Briefcase: **875** Elo, rubric pass rate 22.0% (rank 29/56 — AA, verified 2026-08-27)
- MCP Atlas: **44.7%** (rank 42/44); Toolathon: **34.3%** (rank 36/37); BrowseComp: **44.4%** (rank 39/44); AutomationBench-AA: **5.7%** (rank 13/13, 0th pct — AA, verified 2026-08-26)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.1%** (Vals, 72nd pct, 2026-07-28) / **87.0%** (epoch/model card run, rank 5/10, 2026-06-04) / 86.7% (AA index component)
- HLE: **28.4%** (AA data, 85th pct, 2026-09-02); HLE with tools: **37.4%** (2026-06-04 snapshot)
- LCR / MLCR: AA-LCR **71.0%** (rank 80/409, 81st pct — AA data, 2026-09-02); MLCR: no verified public score found
- CritPt: **3.1%** (rank 23/31 — AA, verified 2026-09-02)
- AIME 2026: **94.2%** (rank 20/36 — model card, 2026-06-04); MMLU-Pro: **86.8%** (94th pct — model card); MMLU Pro (Vals): **85.8%**
- Artificial Analysis Intelligence Index: **23 / #36 of 117** (current AA page, median 18; 3/4 units Intelligence) — earlier cross-class snapshot **47.67** (2026-06-10, with GDPval-AA Elo 1379, GPQA 86.7)
- Omniscience: AA-Omniscience Index **+24.1** (accuracy 24.1%, hallucination rate 21.3%, non-hallucination 78.7% — model card, 50th pct)
- ObviousBench answer pass³: **96.5%**; IFBench: **81.7** (rank 2/6, 80th pct — strong instruction following)

Coding:

- SWE-bench Verified: **69.0%** (Vals, thinking, 2026-07-28) / **70.7%** (OpenAI-harness row, 2026-07-15)
- SWE-bench Pro: **46.4%** (rank 48/49, 2nd pct — 2026-07-15)
- SWE-bench Multilingual: **67.7%** (rank 33/46)
- LiveCodeBench: **86.0%** (Vals, 2026-07-28) / **89.0%** pass@1 (official leaderboard, rank 10/49 — model card)
- SciCode: **44.6%** (rank 6/12 in small cohort; field leader Fable 5.1 62.0%)
- Vibe Code Bench v1.1: **7.6%** (rank 58/71, 19th pct — Vals, 2026-07-28)
- CWE-Bench (security audit-and-patch): **18.5%** pass@1 (rank 13/14 — cwe-bench.com, verified 2026-09-02)

Long context:

- AA-LCR 71.0% (above) and LongBench v2 **61.9%** w/ CoT (rank 9/45, 82nd pct — model card, 2026-06-04); vendor reports RULER ~95% at 256K (NVIDIA launch blog, not independently re-verified this pass). No 512K+ retrieval measurement (window is 262K).

### Normalized scores (1–100)

- **Tool use: 74/100.** TB2.1 56.4% (80th percentile), TB Hard 36.4% (87th pct), Tau2-Telecom 83.3%, TAU3 airline/retail/telecom 81.5/86.4/92.9 and PinchBench 90 (92nd pct, then field leader) put it firmly upper-mid; capped by Tau3-Banking 14.2%, AutomationBench-AA 5.7% (last of 13) and Toolathlon 34.3%.
- **Reasoning: 72/100.** GPQA Diamond 86–87% is just under the 90%+ frontier line, AIME 2026 94.2% and MMLU-Pro 86.8% are strong, low 21.3% hallucination and 96.5% ObviousBench; capped by HLE 28.4%, CritPt 3.1% and a mid-band AA Intelligence Index (23).
- **Context window: 74/100.** Verified 262,144-token window sits in the 200K–500K band (200K = 70); solid AA-LCR 71.0% and LongBench v2 61.9% support the upper-mid of that band, while the 16,384-token max-output cap is recorded as a caveat and the unverified 1M extended-claims are not credited.
- **Multimodal: 15/100.** Text-only in and out — no image/audio/video input (AA confirms no image support), per the 10–20 text-only band.
- **Coding: 76/100.** LiveCodeBench 86–89% and SWE-bench Verified 69–70.7% with TB2.1 56.4% exceed the 65–75 mid profile; SWE-bench Pro 46.4%, Vibe Code 7.6% and SciCode 44.6% keep it out of the top band.
- **Cost efficiency: 100/100.** $0 on the evaluated OpenCode Zen free tier (time-limited; free-tier outputs may carry training-data caveats). Paid equivalent $0.50/$2.20 would score ~88–90 on its own.
- **Overall Score: 62.2/100.** Mean of (74 + 72 + 74 + 15 + 76)/5 = 62.2. Best fit: fast, honest, cheap-or-free open-weights orchestrator for scientific/math-heavy reasoning, instruction-following and conversational agent loops — escalate multimodal, long-horizon agentic (banking/SaaS automation) or hard SWE work to frontier models.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-10-01
- Method: public internet research (Artificial Analysis model page, BenchmarkList 62-row profile with per-benchmark sources/dates, OpenRouter/llm-stats spec + pricing data, Hugging Face model card rows, Vals.ai runs, cwe-bench.com leaderboard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_4.md`, using the same headings.
