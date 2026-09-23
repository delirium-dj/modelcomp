# GPT-5.5 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's flagship fully-retrained omnimodal frontier (2026-04-23, codename Spud), 1.05M context, optimized for agentic terminal coding, computer use and long-horizon knowledge work.
- **Provider / access:** OpenAI API `openai/gpt-5.5` (Chat Completions + Responses API) via OpenAI Platform and OpenCode Zen `openai/gpt-5.5`; Codex variant 400K
- **Release / knowledge:** 2026-04-23; knowledge cutoff 2025-12-01
- **IDs:** `openai/gpt-5.5` (no Free tier; paid only, Pro tier $30/$180 for xhigh reasoning)
- **Context window:** 1,050,000 total (~1.05M in / 128,000 out; Codex 400K in) — verified via OpenAI docs, llmreference, aireleasetracker (long-context surcharge above 272K)
- **Modalities:** Text, image, audio, video in; text out; reasoning yes (configurable none/low/medium/high/xhigh); tool calls yes; JSON mode yes; omnimodal natively from base (no stitching)
- **Pricing (as of 2026-09-23):** $5.00 / $30.00 per 1M in/out ($2.50/$15 for GPT-5.4 predecessor; ~4× input vs GPT-5); Pro tier $30/$180 for xhigh workloads
- **Architecture:** Proprietary (first full retrain since GPT-4.5; GB200/GB300 + TensorRT-LLM/vLLM)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%** (aireleasetracker / OpenAI launch — vs Opus 4.7 ~69.4% on TB2.0)
- Terminal-Bench 2.0: **82.7%** (OpenAI launch — S5 Labs: vs Opus 4.7 69.4%, GPT-5.4 75.1%; field-leading at launch)
- Tau3-Banking / Tau2-Bench: **98.0% Tau2-Bench Telecom** (AwesomeAgents AI — no prompt tuning; generic Tau3-banking no verified public score found)
- GDPval-AA: **1769 Elo** (aireleasetracker; OpenAI launch — GDPval win/tie rate 84.9% highest at time, v2 1494 Elo)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **55.6% Toolathlon / 75.3% MCP Atlas** (aireleasetracker — vs Gemini 3.5 Flash 56.5%/83.6%)
- OSWorld-Verified (computer use): **78.7%** (OpenAI launch — vs Opus 4.7 78.0%)
- GDPval win/tie rate: **84.9%** (OpenAI launch)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (S5 Labs / aireleasetracker — OpenAI launch; among highest reported)
- HLE (Humanity's Last Exam): **41.4% no tools / 52.2% with tools** (aireleasetracker — FrontierMath Tier 4 35.4% vs Gemini 3.1 Pro 16.7%)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **55 (xhigh, Artificial Analysis 2026-06-17)** (vs Opus 4.8 56; coderouter variant reports 60 as composite leader pre-Opus 4.8 — rank/context indicates ~55-60 leadership at launch)
- FrontierMath Tier 1-3 / Tier 4: **51.7% / 35.4%** (aireleasetracker)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **82.6% Verified (vals.ai independent harness)** / **58.6% Pro (OpenAI, single attempt)** (S5 Labs notes OpenAI disclosed possible training overlap on Pro public set; vs Opus 4.7 64.3% Pro, Fable 5 95.0% Verified)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE 1.0: **64.3%** (aireleasetracker)
- Expert-SWE (OpenAI internal): **73.1%** (OpenAI launch — vs GPT-5.4 68.5%)
- SWE-Bench Multilingual: **77.8%** (aireleasetracker)
- CyberGym: **81.8%** (aireleasetracker)

Long context:

- MRCR v2 (8-needle): **94.8% at 128K average** (aireleasetracker); 1M pointwise no verified public score found beyond vendor claim of 1.05M window with surcharge above 272K

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 78.2% + TB2.0 82.7% field-leading + GDPval 84.9% win rate + OSWorld 78.7%; capped by Toolathlon 55.6% trailing 3.5 Flash 56.5% and MCP Atlas 75.3% vs 83.6%.
- **Reasoning: 89/100.** GPQA 93.6% elite + FrontierMath Tier4 35.4% doubling Gemini 3.1 Pro + AA Index 55 (xhigh leader at launch); capped by SWE-Pro caveat and no LCR/MRCR 1M proof.
- **Context window: 92/100.** 1,050,000 total (surcharge >272K); tier ≥1M but MRCR v2 94.8% only at 128K, so capped below 96 without 1M pointwise verification.
- **Multimodal: 82/100.** Natively omnimodal text/image/audio/video in → text out (not stitched); CharXiv 84.1% + MMMU-Pro 81.2% solid but Blueprint-Bench 36.2% moderate caps below 90.
- **Coding: 86/100.** SWE-Verified 82.6% independent (3rd behind Fable/Opus 4.8) + SWE-Pro 58.6% + Expert-SWE 73.1% + Terminal 82.7% decisive; trails Opus 4.7/4.8 on Pro, hence below 90.
- **Cost efficiency: 55/100.** $5/$30 paid (4× GPT-5 input, 2× GPT-5.4), Pro $30/$180; no $0 Free ID, so mid-tier despite strong value vs Opus $15/$75.
- **Overall Score: 87/100.** Mean of five non-cost dims (88+89+92+82+86)/5=87.4 → 87; best-fit for agentic terminal coding, computer use and long-knowledge-work at 1M when Opus-grade SWE-Pro not required.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (OpenAI launch, S5 Labs 2026-04-23, aireleasetracker, llmreference, theairankings, coderouter, benchr, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
