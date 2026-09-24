# DeepSeek V4 Flash Vision Exp — findings by Muse Spark 1.2

- Source: DeepSeek (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's first experimental multimodal Flash model (2026-08-21) adding native image understanding to V4 Flash 0731 with identical pricing; agentic vision at Flash economics.
- **Provider / access:** DeepSeek API `deepseek-v4-flash-vision-exp` via OpenCode Zen `deepseek/deepseek-v4-flash-vision-exp` (Chat Completions)
- **Release / knowledge:** 2026-08-21; knowledge cutoff not disclosed
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp` (no Free tier; open-weights pending)
- **Context window:** 1,000,000 total (1M in / ~32K out typical) — verified via Artificial Analysis (1M) and DeepSeek HuggingFace README
- **Modalities:** Text, image in; text out; reasoning yes (max effort); tool calls yes; JSON mode yes — no audio/video/PDF
- **Pricing (as of 2026-09-24):** $0.44 in / $1.32 out per 1M (off-peak $0.14 / $0.66); cache hit $0.014; images capped 384 tokens each at same token rate; same as V4 Flash 0731
- **Architecture:** 284B total / 13B active MoE, proprietary experimental (adds visual modules to V4 Flash)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (DeepSeek Harness Minimal Mode, max effort — vs Flash 0731 82.7%, Opus 4.8 85.0% per DeepSeek vendor table 2026-08-21)
- Terminal-Bench 4.0: **12%** (Artificial Analysis, Flash Vision max — vs Flash 0731 12% same)
- Toolathlon-Verified: **75.9%** (DeepSeek vendor — vs Flash 0731 70.3%, Opus 4.8 76.2%)
- Cybergym: **75.3%** (DeepSeek — vs Flash 0731 76.7%, Opus 4.8 78.3%)
- AutomationBench (Public): **25.7%** (DeepSeek — vs Flash 0731 25.1%, Opus 4.8 27.2%) / AutomationBench-AA **47%** (Artificial Analysis)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA v2.1: **1534 Elo** (Artificial Analysis — vs Flash 0731 1427)
- Claw-Eval / ClawProBench: **no verified public score found**
- ApexBench Pass@1: **36.5%** (DeepSeek multimodal — vs Opus 4.8 39.4%, Flash 0731 blind 26.2%)

Reasoning / knowledge:

- GPQA Diamond: **91%** (Toolbit.ai via DeepSeek — multimodal Vision variant proxy)
- HLE: **34%** (Artificial Analysis — vs Flash 0731 39% per AA comparison)
- LCR / MLCR: **AA-LCR 81%** (Artificial Analysis) / MLCR no isolated score
- CritPt: **11%** (Artificial Analysis — vs Flash 0731 17%)
- Artificial Analysis Intelligence Index: **35** (Artificial Analysis Intelligence Index v4, max effort — vs Flash 0731 34, vs V4.1 Flash 39)
- AA-Briefcase v1.1: **1437** (Artificial Analysis) / GDP.pdf **12%**
- Omniscience Accuracy / Hallucination Rate: **AA-Omniscience -18** (Artificial Analysis, negative indicates hallucination-heavy; Flash 0731 -14)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (DeepSWE used instead)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **50% SciCode** (Artificial Analysis — vs Flash 0731 50% same)
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **59.3%** (DeepSeek Harness max — vs Flash 0731 54.4%, Opus 4.8 58.0% — beats Opus on this task)
- NL2Repo-Bench: **57.7%** (DeepSeek — vs Opus 4.8 69.7%, trailing by 12pp)
- DSBench-Hard: **63.6%** (DeepSeek — vs Opus 4.8 71.7%)
- Chartography / ZeroBench: **64.3% / 35.0% Pass@5** (DeepSeek multimodal)

Long context:

- AA-LCR 81% at 1M window (Artificial Analysis); 1M total window verified; no RULER/MRCR at max reported

### Normalized scores (1–100)

- **Tool use: 78/100.** TB2.1 83.9% + Toolathlon 75.9% near Opus 4.8, but AA TB4.0 12% and AutomationBench 25.7% cap; multimodal Apex gains offset by vendor-only harness.
- **Reasoning: 70/100.** AA Index 35 (vs 39 top V4) + HLE 34% + CritPt 11% + LCR 81%; capped by HLE/CritPt regression vs Flash 0731 and negative Omniscience -18.
- **Context window: 94/100.** 1,000,000 total tier 95-100 for ≥1M but capped at 94 by AA-LCR 81% not 90%+ and experimental compression.
- **Multimodal: 72/100.** Text+image in (384 tokens/image) → text out; Chartography 64.3 vs Opus 65.0 and ZeroBench 35.0 beating Opus 34.0; capped by 384-token image cap and no video/audio.
- **Coding: 75/100.** DeepSWE 59.3% beating Opus 58.0 but NL2Repo -12pp and DSBench -8pp vs Opus; SciCode 50% flat; no SWE-bench Verified publication caps.
- **Cost efficiency: 95/100.** $0.44/$1.32 (off-peak $0.14/$0.66) same as Flash; images at token rate; ~95 vs Free 100, cheapest vision-agent per token.
- **Overall Score: 78/100.** Mean of five non-cost dims (78+70+94+72+75)/5=77.8 → 78; best-fit experimental vision-agent at Flash price.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (DeepSeek V4 Flash Vision Exp HuggingFace README 2026-08-21, Artificial Analysis 2026-08, aitoolsreview.co.uk, toolbit.ai, buildfastwithai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
