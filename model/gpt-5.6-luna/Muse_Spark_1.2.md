# GPT-5.6 Luna — findings by Muse Spark 1.2

- Source: OpenAI (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-efficient Luna tier (2026-07-09) for high-volume work; nano-class with 1.1M context, coding 62.7% SWE Pro, deep reasoning effort control.
- **Provider / access:** OpenAI API `openai/gpt-5.6-luna` via OpenCode Zen `openai/gpt-5.6-luna` (Responses API, effort none/low/medium/high/xhigh/max)
- **Release / knowledge:** 2026-07-09; knowledge cutoff 2026-02-16
- **IDs:** `openai/gpt-5.6-luna` (no Free tier expected; also `gpt-5.6-luna` in Codex)
- **Context window:** 1,100,000 total (1.1M in / 128,000 out) — verified via OpenAI API docs (llm-stats, developers.openai.com)
- **Modalities:** Text, image, audio in (via tools); text out; reasoning yes (adjustable effort); tool calls yes (web search, image gen, code interpreter, hosted shell, apply_patch, computer use, tool search); JSON mode yes
- **Pricing (as of 2026-09-24):** $0.20 in / $1.20 out per 1M; cached $0.02 — promo was $1.00/$6.00 launch, now $0.20/$1.20 (80% cut); vs Sol $5/$30, Terra $2.50/$15
- **Architecture:** Proprietary (GPT-5.6 family, Luna = nano distillation)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0/2.1: **84.7%** (OpenAI, Luna — vs Sol 88.8% (91.9 ultra), Terra 87.4%, vs Opus 4.8 78.9%)
- Terminal-Bench 4.0: **no verified public score found** (not published for Luna)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (Luna coding index covers)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** but CursorBench 3.2 **61.1%** / 4.0 **35.9%** as cursor-agent proxy

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (Easy Benchmarks, Luna)
- HLE: **no verified public score found** (not isolated for Luna; Terra family HLE not published)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **51 (v4.1, max)** (OpenAI — ~80% lower cost/task $0.21 vs Sol $1.04) / **51.2** (Easy Benchmarks overall)
- AA-SciCode: **53.6%** (BenchLM, Luna)
- LiveBench Mathematics: **87.2% #17** (Easy Benchmarks proxy)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Pro: **62.7%** (OpenAI via gpt-5.6 post — vs Sol 64.6%, Terra 63.4%, Fable 80%, Mythos 80.3%)
- SWE-bench (Vals): **93.0%** (BenchLM Vals proxy)
- LiveCodeBench: **no verified public score found** (but SciCode proxy 53.6% and Coding Index 71.5–75)
- SciCode: **52.5%** (Easy Benchmarks) / AA-SciCode **53.6%**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **67.2%** (OpenAI, Luna — vs Sol 72.7%, Terra 69.6%, Fable 69.7%)
- FrontierCode 1.1 Extended: **55.1%** (BenchLM)
- AA Coding Index: **71.5–74.6** (OpenAI v1.1, Luna — vs Sol 80, Terra 77.4, Fable 77.2, Opus 72.5)

Long context:

- 1.1M total verified; no MRCR/RULER at max reported; 1.1M demo for high-volume workloads

### Normalized scores (1–100)

- **Tool use: 78/100.** TB 84.7% strong near Sol 88.8% + Coding Agent Index 71.5–74.6 + CursorBench 61.1%; capped by no Tau3/Claw and dependency on low/medium effort default.
- **Reasoning: 76/100.** GPQA 91.1% + AA Index 51 + Math 87.2% + SciCode 53.6%; capped by missing HLE/LCR and AA Coding Index -8 vs Sol.
- **Context window: 96/100.** 1,100,000 total (128K out) verified via OpenAI; tier 95-100 for ≥1M but capped by no MRCR disclosure and Luna low-reasoning lane focus.
- **Multimodal: 80/100.** Text/image in + web search/image gen/code interpreter/shell/computer-use tools → text out; capped below 90 by no video/PDF native vision vs Gemini.
- **Coding: 80/100.** SWE Pro 62.7% + DeepSWE 67.2% + Frontier 55.1% solid but trails Sol 64.6%/72.7% and Fable/Mythos 80%+; capped by SWE Pro generation gap.
- **Cost efficiency: 85/100.** $0.20/$1.20 (80% cut from $1/$6) — ~85 vs Free 100; cheapest GPT-5.6 tier at 1/25 Sol input cost but still paid vs Free stealth models.
- **Overall Score: 82/100.** Mean of five non-cost dims (78+76+96+80+80)/5=82.0 → 82; best-fit high-volume coder at lowest GPT-5.6 cost.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (OpenAI gpt-5.6 post 2026-07-09, benchlm.ai Aug 2026, llm-stats.com, developers.openai.com gpt-5.6-luna page, easy-benchmarks.com, coderabbit.ai, AI Coding Daily YouTube 2026-08-24); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
