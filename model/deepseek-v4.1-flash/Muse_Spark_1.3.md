# DeepSeek V4.1 Flash — findings by Muse Spark 1.3 Contributor

- Source: DeepSeek/DeepSeek V4.1 Flash, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: official README table added, scores recomputed 77 → 85)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (MIT-licensed multimodal MoE)
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads, with 1M context, 384K output and strong terminal-bench results.
- **Provider / access:** DeepSeek via API + HF weights (MIT); no Zen Free ID under deepseek/ namespace (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-09-10 release (DeepSeek news post); V4-Flash/Vision-Exp retired into it, V4-Pro routes to it from 2026-09-14 until V4.1-Pro; OpenCode + WorkBuddy support; knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `deepseek/deepseek-v4.1-flash` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M / 384K out — verified via curated repo metadata
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18, re-verified 2026-09-27):** $0.30/$1.20 per 1M filed rate (curated metadata); DeepInfra promo lane $0.112/$0.336 (30% off); no Zen Free ID
- **Architecture:** open MoE, 552B total (MIT); Causal Encoder–Decoder, 8B active input / 16B output (launch post)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (official HF README table); **3.0 30.0% / 4.0 31.2%** (same table)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (official HF README table)
- HLE: **36.8%** (same table; 39.1 variant-config)
- Codeforces rating: **3471** (same table); **MathArena Apex 65.6%** (same table)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **74.2% DeepSWE v1.1** (official HF README table); **62.8% SEC-Bench Pro** (independent guide table); **64.0% NL2Repo-Bench** and **20.3% ProgramBench** (same table — ProgramBench tails)

Long context:

- **1M window with 384K output verified; no MRCR/RULER number found — no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 90.6% is elite plus TB3.0 30.0% and TB4.0 31.2% measured breadth; capped by zero Tau3/GDPval/Claw numbers.
- **Reasoning: 87/100.** GPQA 90.9% plus Codeforces 3471 and MathArena 65.6 show near-frontier reasoning; capped by HLE 36.8% mid-band and no LCR/CritPt numbers.
- **Context window: 100/100.** 1M / 384K out verified; top tier.
- **Multimodal: 65/100.** Text+image in, text out; capped below video/audio omni models.
- **Coding: 86/100.** DeepSWE 74.2% plus SEC-Bench 62.8% and NL2Repo 64.0% show strong engineering; capped by the ProgramBench 20.3% tail and no SWE/LiveCode/SciCode numbers.
- **Cost efficiency: 88/100.** Filed $0.30/$1.20 with a $0.112/$0.336 promo lane is cheap paid value; no $0 tier caps below 100.
- **Overall Score: 85/100.** Mean of the five non-cost dims (88+87+100+65+86)/5 = 85.2; best-fit cheap paid input-heavy agentic pick — official table now confirms it.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
