# Claude Sonnet 4.5 — findings by Muse Spark 1.2

- Source: Anthropic (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's balanced Sonnet tier (2025-09-29) leading SWE-bench Verified 77.2% and OSWorld 61.4%; 1M reasoning model for 30h+ agentic focus.
- **Provider / access:** Anthropic API `claude-sonnet-4.5` via OpenCode Zen `anthropic/claude-sonnet-4.5` (Chat Completions / Responses)
- **Release / knowledge:** 2025-09-29; knowledge cutoff 2025-07-01
- **IDs:** `anthropic/claude-sonnet-4.5` (no Free tier)
- **Context window:** 1,000,000 total (1M in / ~64K out typical) — verified via Anthropic release and Artificial Analysis (1M)
- **Modalities:** Text, image in; text out; reasoning yes (extended thinking up to 64K, interleaved); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** $3.00 in / $15.00 out per 1M; cache hit $0.30 — vs Haiku $1/$5 cheaper, vs Opus 4.8 $5/$25 cheaper
- **Architecture:** Proprietary (Claude 4 family, Sonnet tier)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **35.6%** (Artificial Analysis, reasoning — AA Terminal-Bench Hard)
- Terminal-Bench 4.0: **0%** (Artificial Analysis, Sonnet 4.5 Reasoning vs Sonnet 5 14% and Opus 4.8 22%)
- AutomationBench-AA: **14%** (Artificial Analysis, Reasoning — vs Sonnet 5 37%, Opus 4.8 46%)
- Tau2-Bench: **78.1%** (DesignForOnline via Anthropic/AI — vs other Sonnet 78.1% strong)
- OSWorld: **61.4%** (Anthropic — leads, vs Sonnet 4 42.2% prior)
- GDPval-AA v2: **989** (Artificial Analysis, Reasoning — vs Opus 4.8 1489, Sonnet 5 1501)
- Claw-Eval / ClawProBench: **no verified public score found**
- Finance Agent (Vals): **published by Vals AI leaderboard** (Anthropic — extended thinking + interleaved)

Reasoning / knowledge:

- GPQA Diamond: **83.4%** (DesignForOnline via AA/HF)
- HLE: **17.3%** (DesignForOnline — vs Sonnet 5 41% large gap)
- LCR / MLCR: **AA-LCR 72%** (Artificial Analysis, Reasoning) / LCR 65.7% (DesignForOnline)
- CritPt: **1%** (Artificial Analysis — vs Sonnet 5 17%)
- Artificial Analysis Intelligence Index: **21 (Reasoning) / 29–36 blended** (Artificial Analysis v4.3 — Reasoning 21 vs median 25, Non-reasoning 19, overall 29–36 depending tier; deprecated but 1M window maintained)
- MMLU Pro: **87.5%** (DesignForOnline)
- AIME 2025: **88%** (DesignForOnline, sampling temp 1.0, 64K reasoning)
- Omniscience / GDP.pdf: **AA-Omniscience 0 / GDP.pdf 5%** (Artificial Analysis)

Coding:

- SWE-bench Verified: **77.2% avg (10 trials, 200K thinking, bash+edit scaffold) / 82.0% high-compute parallel sampling** (Anthropic official — vs Sonnet 5 not published, Fable/Opus 80%+)
- LiveCodeBench: **71.4%** (DesignForOnline)
- SciCode: **44.7–46%** (DesignForOnline / AA 46% Reasoning)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **52.1 Coding Index** (VectorWire via AA) / AA Coding Index 33.47 non-reasoning
- IFBench: **57.3%** (DesignForOnline)

Long context:

- AA-LCR 72% at 1M; MRCR not isolated; 1M total with extended thinking demonstrates 30h focus on multi-step tasks

### Normalized scores (1–100)

- **Tool use: 70/100.** OSWorld 61.4% lead strong + Tau2 78.1% + TB Hard 35.6% but AA Automation 14% + TB4.0 0% + GDPval 989 vs 1489 cap; computer-use leans not tool-orchestration.
- **Reasoning: 70/100.** GPQA 83.4% + MMLU 87.5% + AIME 88% strong but HLE 17.3% + AA Index 21 + CritPt 1% + LCR 65.7% drag; deprecated tier limits.
- **Context window: 90/100.** 1,000,000 total verified; tier 95-100 for ≥1M but capped at 90 by AA-LCR 72% and LCR 65.7% below 80% peers.
- **Multimodal: 65/100.** Text+image in → text out only; no video/audio/PDF; capped vs Gemini/GLM vision models.
- **Coding: 85/100.** SWE-bench Verified 77.2% (82% high-compute) SOTA for Sonnet + LCB 71.4 + SciCode 46%; capped by AA Coding Index 52.1 vs Opus 78 and no DeepSWE leadership.
- **Cost efficiency: 40/100.** $3/$15 paid (cache $0.30); cheaper than Opus $5/$25 but ~40 vs Free 100 and 20× Luna $0.20/$1.20.
- **Overall Score: 76/100.** Mean of five non-cost dims (70+70+90+65+85)/5=76.0 → 76; best-fit balanced Sonnet coder with leading OSWorld/SWE.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Anthropic claude-sonnet-4-5 post 2025-09-29, Artificial Analysis 2025-09-29 (Index 21/36), designforonline.com, vectorwire.ai, AA comparisons vs Sonnet 5/Opus 4.8); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
