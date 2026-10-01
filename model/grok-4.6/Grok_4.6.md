# Grok 4.6 — findings by Grok 4.6

- Source: xAI / SpaceXAI (`grok-4.6` / `spacexai/grok-4.6`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI frontier reasoning model released 2026-08-12: Grok 4.5 successor at the same 500K context and $2/$6 list (under 200K), aimed at long agent loops, coding, and knowledge work. Four reasoning levels including `xhigh`.
- **Provider / access:** xAI API `grok-4.6`; Vercel AI Gateway `spacexai/grok-4.6`. Text + image in, text out. Priority processing `service_tier: "priority"` at 2× (LLM Stats).
- **Release / knowledge:** 2026-08-12; knowledge cutoff **2026-02-01** (LLM Stats / Vercel).
- **IDs:** `xai/grok-4.6`, `spacexai/grok-4.6`. No OpenCode Zen Free ID found.
- **Context window:** 500,000 tokens; Vercel lists max output 500,000. LLM Stats: no published text output cap in xAI docs.
- **Modalities:** text and image in; text out; reasoning (`high` default, `xhigh` on 4.6 only); tools / agent loops.
- **Pricing (as of 2026-10-01):** **$2 / $6** per 1M in/out under 200K; cached input **$0.50**. At **≥200K**, whole request **$4 / $12**, cache **$1.00** (eesel / xAI docs via The Model Gap). Cached input is **higher** than Grok 4.5’s $0.30.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (Artificial Analysis / eesel; The Model Gap independent 2026-08-20)
- Tau-3-Banking: **50.7%** (eesel / AA)
- GDPval-AA v2: **1753** Elo (eesel / xAI High / AA)
- AA-Briefcase: **1577** Elo (eesel)
- Terminal-Bench v3.0: **26.0%** (xAI High table via CodingFleet / LLM Stats)
- APEX-Agents: **57.5%** (xAI High)
- CursorBench v3.2: **69.9%** (xAI High)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** #1 of 246 (AA / eesel); Vals **94.7%** (The Model Gap)
- HLE (no tools): **42.9%** (AA 2026-08-17)
- Artificial Analysis Intelligence Index: **61** (CodingFleet / Vercel); eesel **60.92**
- SciCode: **53.6%** (eesel)
- AA-LCR: **75.0%** (eesel)

Coding:

- DeepSWE v1.1: **65.9%** xAI High; independent DeepSWE leaderboard **67.0%** (The Model Gap / DataCurve)
- LiveCodeBench: **88.2%** (Vals.ai, The Model Gap)
- FrontierCode v1.1 Ext: **61.3%**; APEX-SWE: **56.4%** (xAI High)
- SWE-bench Verified: Vals.ai **95.6%** labeled **saturated** (The Model Gap, 2026-08-17) — unusual vs DeepSWE 66–67%; cite as independent but do not treat as an unsaturated SWE-V frontier score
- SciCode: **53.6%** (also under reasoning)

Long context:

- 500K native. AA-LCR **75%** — not ≥98% at 512K+. MRCR / RULER / GraphWalks: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** TB 2.1 88.4% and Tau-3-Banking 50.7% hit the methodology frontier refs; GDPval-AA 1753 is at the ~1750+ band. Capped by TB v3.0 26% and missing Claw-Eval.
- **Reasoning: 92/100.** Index 61 meets 60+; GPQA 94.9% and HLE 42.9% are frontier. Capped by LCR 75% and SciCode 53.6% (not a knowledge miss, but not 58%+ SciCode).
- **Context window: 88/100.** 500K maps to 85–94. LCR 75% blocks 95–100 (≥1M / 98% retrieval). 200K whole-request price doubling is a cost caveat.
- **Multimodal: 65/100.** Official I/O is text + image in, text out (60–70). No native audio/video.
- **Coding: 88/100.** LiveCodeBench 88.2% is high; SciCode 53.6% is near 55%+; TB 2.1 88.4% helps agents. Capped by DeepSWE 65.9–67% (below 74%+) and TB v3.0 26%. Saturated Vals SWE-V 95.6% is not used as the coding cap-lifter.
- **Cost efficiency: 78/100.** $2/$6 is better on output than $2/$10 (Sonnet) but far from $1.25/$4.25 ≈88. Cache $0.50 is worse than 4.5’s $0.30. ≥200K $4/$12 pulls long jobs down. Not $0.
- **Overall Score: 85/100.** (92+92+88+65+88)/5 = 85.0. Best-fit: default xAI long-agent / knowledge-work model at $2/$6; verify DeepSWE on your repo before making it the only coder.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (eesel, LLM Stats, CodingFleet, The Model Gap, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
