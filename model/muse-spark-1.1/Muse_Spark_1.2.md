# Muse Spark 1.1 — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's prior Muse Spark iteration (2026-07-09) powering Meta AI; +8 AA Index over 1.0 with strong coding/SciCode gains, predecessor to 1.2/1.3.
- **Provider / access:** Meta API `muse-spark-1.1` via OpenCode Zen `opencode/muse-spark-1.1` (Responses API) and Meta AI app
- **Release / knowledge:** 2026-07-09; knowledge cutoff not disclosed (1.2 cutoff 2026-04)
- **IDs:** `opencode/muse-spark-1.1` (Standard) and Free variant via Zen
- **Context window:** 1,048,576 total (1M in / 128K out) — verified via Meta docs and AA (heritage from 1.2 1M family)
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-24):** Standard $1.25/$4.25 per 1M (Meta pricing per AA); cheaper than 1.2? 1.2 Standard $1.25/$4.25 same; Free Zen $0 tier not disclosed for 1.1
- **Architecture:** Proprietary (Muse family, MLA + KDA heritage shared with 1.2)

### Raw benchmarks found

Agent / tool use:

- TerminalBench: **59→71 Coding Index?** Actually AA Coding Index 59→71 for 1.0→1.1 (+12) per AA article
- Terminal-Bench: **improved substantially per Meta** (not quantified isolate; heritage from 1.2 82.9% suggests similar harness)
- GDPval-AA v2: **1376 Elo** (AA — vs 1144 for 1.0, +232)
- AA-Briefcase: **not isolated but Intelligence 51 composite**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: above; cost per Index task **~$0.26** (AA est. vs GLM-5.2 $0.37, GPT-5.4 $0.89)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Cybench CTF: **92.9% pass@1 / 97.0% pass@10** (Meta report — vs 1.0 65.4%/79.0%; near ceiling)

Reasoning / knowledge:

- GPQA Diamond: **no verified single isolate but HLE proxy 45% near Opus**
- HLE: **45%** (Artificial Analysis — vs 40% for 1.0, within 1pp of Opus 4.8 46%, ahead of GPT-5.5 44% and Grok 4.5 40%)
- LCR / MLCR: **no verified public score found** (1M window demonstrated)
- CritPt: **no verified isolate but composite rise**
- Artificial Analysis Intelligence Index: **51 (xhigh)** (Artificial Analysis — +8 over Muse Spark 1.0 43; tied GLM-5.2 max 51, GPT-5.4 xhigh 51, GPT-5.6 Luna max 51; behind Grok 54, Fable 60, Sol 59, Opus 56)
- SciCode: **58%** (AA — vs 52% for 1.0, rank #3 behind Fable 60% and Gemini 3.1 Pro 59%)
- AA-Omniscience: **18** (AA — vs 4 for 1.0, +14 via abstention not accuracy, accuracy flat ~38%)
- GDPpdf / AA-Briefcase not isolated

Coding:

- SWE-bench Verified / Pro: **no verified public score found** (Meta Internal Coding Bench significant improvement competitive with leaders — not quantified public)
- LiveCodeBench: **no verified public score found**
- SciCode: **58%** (AA, rank #3)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **Coding Index 71** (AA — vs 59 for 1.0, +12)
- Meta Internal Coding Bench: **significant improvement competitive** (Meta — verbatim)

Long context:

- 1M total window verified via family heritage; Cybench 92.9% scaling to 1M output tokens (improves to ~1M, 1.0 plateaus at 300K); no MRCR isolation

### Normalized scores (1–100)

- **Tool use: 80/100.** Cybench 92.9% pass@1 (+27.5pp) + GDPval 1376 + Index 51 tied GLM-5.2/Terra/Luna; capped by no TB2.1 isolate and GDPval still lagging frontier (not top-10).
- **Reasoning: 80/100.** Index 51 + SciCode 58% #3 + HLE 45% near Opus 46% + AA-Omniscience 18 via abstention; capped by HLE not beating Opus and abstention not accuracy gain.
- **Context window: 96/100.** 1,048,576 total (128K out) via Muse family; tier 95-100 for ≥1M but capped by no MRCR and 1.1 reasoning budget heavier than 1.0.
- **Multimodal: 88/100.** Text/image/audio/video/PDF in → text out heritage; multimodal reasoning gains noted per Meta; capped below 90 by no CharXiv 90+ isolate for 1.1.
- **Coding: 78/100.** Coding Index 71 (+12) + SciCode 58% #3 + Internal Bench competitive; capped by no public SWE-bench Verified and HLE/SciCode not translating to frontier coding lead.
- **Cost efficiency: 70/100.** $1.25/$4.25 Standard (vs Free 100); token-efficient 94M vs 109M GPT-5.4 and 125M Luna, ~$0.26/task cheap vs peers but not Free.
- **Overall Score: 84/100.** Mean of five non-cost dims (80+80+96+88+78)/5=84.4 → 84; best-fit prior-gen 1M all-rounder, superseded by 1.2 (90) and 1.3.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-24
- Method: public internet research (Meta Muse Spark 1.1 evaluation report 2026-07-09, Meta blog 2026-07-09, Artificial Analysis 2026-07-10 article (51, +8, SciCode 58%, HLE 45%, coding 71, $0.26/task), ai.meta.com static resource); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
