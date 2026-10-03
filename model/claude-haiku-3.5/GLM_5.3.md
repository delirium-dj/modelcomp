# Claude 3.5 Haiku — findings by GLM 5.3

- Source: Anthropic (`anthropic/claude-3-5-haiku`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.5 Haiku
- **Short description:** Anthropic's smallest 3.5-generation model (October 2024) — a fast, non-reasoning utility tier for summarization and classification workloads. Deprecated in the current lineup: OpenCode Zen retired it on 2026-02-16, Artificial Analysis marks it deprecated in favor of Claude 4.5 Haiku, and Anthropic's current model overview no longer lists it.
- **Provider / access:** Anthropic API (`claude-3-5-haiku-20241022`); formerly OpenCode Zen (`anthropic/claude-3-5-haiku`) until the 2026-02-16 deprecation.
- **Release / knowledge:** announced 2024-10-22 (AA FAQ; BenchmarkList tracks 2024-11-04); knowledge cutoff July 2024 (AA).
- **IDs:** `claude-3-5-haiku` (alias) / `claude-3-5-haiku-20241022` (snapshot).
- **Context window:** 200,000 tokens (Anthropic docs via AA model page).
- **Modalities:** text and image in; text out; non-reasoning model (AA); tool use supported.
- **Pricing (tracked):** $0.80 input / $4.00 output per 1M tokens (BenchmarkList profile).
- **Architecture:** proprietary — parameter count undisclosed.

### Raw benchmarks found

> Measured numbers with (source, rank/field) from BenchmarkList's 71-benchmark profile for `claude-3-5-haiku` plus the Artificial Analysis model page, fetched 2026-10-03.

Agent / tool use:

- Tau2-Bench Telecom: **24.6%** (AA, rank 224/332)
- Tau3-Banking: **5.8%** (AA, rank 129/176)
- GDPval-AA: **460 Elo** (AA, rank 253/352; field leader 1861)
- Terminal-Bench Hard: **2.3%** (AA, rank 241/326)
- BFCL-v3: **53.7%** (rank 50/83); ComplexFuncBench: **45.8%** (rank 11/25)
- JourneyBench customer support: **50.4%** (rank 3/5, small field)
- Claw-Eval / MCPMark: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **37.9%** (vals.ai, rank 111/117) / **40.8%** (Epoch, rank 373/468)
- HLE: **3.6%** (rank 452/471)
- MMLU-Pro: **63.4%** (rank 229/312)
- Artificial Analysis Intelligence Index: **12.26** (rank 244/418; AA's page shows 9 estimated); AA-Omniscience: **-23.18** (negative — more incorrect than correct answers)
- AIME: **3.3%** (rank 86/88); MATH 500: **64.2%** (rank 55/58)
- CritPt: **0.0%** (AA Intelligence Index breakdown)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **41.9%** (vals.ai, rank 108/123)
- Terminal-Bench 2.1: **10.1%** (rank 153/194)
- SciCode: **27.4%** (AA, rank 277/460)
- Aider Polyglot: **28.0%** (rank 33/47); BigCodeBench instruct: **46.1%** (rank 19/125)

Long context:

- AA-LCR: **25.3%** (rank 259/411)
- MRCR / RULER: **no verified public score found**

Multimodal:

- Verified text + image input (AA), but **no verified public vision-benchmark score found** (no MMMU/OpenVLM rows in its profile).

### Normalized scores (1–100)

- **Tool use: 40/100.** GDPval-AA 460 sits far below the 900–1200 mid band, Tau3-Banking 5.8% and Terminal-Bench Hard 2.3% are near the floor, and only basic function calling (BFCL-v3 53.7%, ComplexFuncBench 45.8%) holds it up — utility-grade agent glue, nothing more.
- **Reasoning: 42/100.** GPQA Diamond 37.9–40.8% is below the 60–80% mid band, HLE 3.6% and AIME 3.3% are near the floor, AA Index 12.26 is below the 20–35 mid band, and AA-Omniscience is negative — capped hard on every axis.
- **Context window: 70/100.** Verified 200K window equals the methodology's 200K = 70 anchor; AA-LCR 25.3% shows weak long-context reasoning inside that window.
- **Multimodal: 62/100.** Image input is verified (AA), placing it in the 60–70 band, but no measured vision score exists to pull it higher.
- **Coding: 45/100.** LiveCodeBench 41.9%, Terminal-Bench 2.1 10.1%, SciCode 27.4%, Aider Polyglot 28.0% — all well below the mid anchors, with no SWE-bench Verified row at all.
- **Cost efficiency: 89/100.** $0.80 / $4.00 per 1M sits between the ~$0.60/$2.20 (~92) and ~$1.25/$4.25 (~88) reference points.
- **Overall Score: 52/100.** Half-up mean of the five quality dims (40+42+70+62+45)/5 = 51.8 → 52 — a deprecated 2024 utility model; use Claude Haiku 4.5 or GPT-5 nano instead at comparable or lower cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-03
- Method: public internet research (BenchmarkList 71-benchmark profile with per-row sources, Artificial Analysis model page, OpenCode Zen deprecation list); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
