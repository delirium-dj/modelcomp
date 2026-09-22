# Gemini 3.6 Flash — findings by Mimo v2.6 Flash

- Source: Google DeepMind/`gemini-3-6-flash`
- Date: 2026-09-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Flash-tier workhorse (2026-07-21) built on Gemini 3.5 Flash: 17% fewer output tokens on the AA Index, up to 65% fewer on DeepSWE, lower output price, and a large jump in 1M-context retrieval (MRCR 26.6% → 54.0%) and computer use (OSWorld 83.0%). Ships with 3.5 Flash-Lite and restricted 3.5 Flash Cyber.
- **Provider / access:** Google AI Studio / Gemini API `gemini-3.6-flash` (GA, no waitlist); Vertex AI; Gemini app; Android Studio; Antigravity; Enterprise Agent Platform. Free tier on AI Studio.
- **Release / knowledge:** 2026-07-21; knowledge cutoff **March 2026** (model card; some domains may still reflect Jan 2025 Gemini 3-family limits).
- **IDs:** `gemini-3.6-flash`.
- **Context window:** 1,048,576 input; 65,536 max output (64K).
- **Modalities:** text/image/audio/video/PDF in; text out; configurable thinking; tool calls yes (function calling, structured output, code execution, computer use, search grounding); JSON mode yes.
- **Pricing (as of 2026-09-22):** **$1.50 in / $7.50 out per 1M** (output cut from 3.5 Flash's $9.00; input unchanged); cached $0.15 (90% off); batch ~50% off; context-cache storage $1.00/1M tok-hr. Free AI Studio tier. Paid API otherwise. Thinking tokens bill as output.
- **Architecture:** proprietary, "based on Gemini 3.5 Flash" (tuned for precision/token efficiency; params undisclosed).

### Raw benchmarks found

> Measured numbers with (source, rank, harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1 (Terminus-2 harness): **78.0%** (Google model card; beats 3.5 Flash 76.2, behind GPT-5.6 Luna 84.7, Grok 4.5 83.3, Sonnet 5 80.4)
- OSWorld-Verified: **83.0%** (Google; leads Google's comparison table vs Luna 72.6, Sonnet 5 81.2)
- GDPval-AA v2: **1421 Elo** (Google; behind Sonnet 5 1607, Luna 1584, Grok 4.5 1535)
- MLE-Bench: **63.9%** (Google; behind Sonnet 5 66.9, ahead of Luna 47.6)
- MCP Atlas / Toolathlon / Tau3 / Claw-Eval / Finance Agent: no verified public score found for 3.6 Flash

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (Artificial Analysis-measured — not Google-reported)
- Humanity's Last Exam: **38.3%** (AA-measured; trails 3.1 Pro 44.4 class)
- Artificial Analysis Intelligence Index: **50** (third-party AA; note 3.5 Flash scored 55 — reasoning index did not improve)
- FrontierMath / CritPt / LCR: no verified public score found

Coding:

- SWE-Bench Pro (Public): **58.7%** (Google; beats 3.5 Flash 55.1 / 3.1 Pro 54.2, behind Grok 4.5 64.7, Sonnet 5 63.2, Luna 62.7)
- DeepSWE v1.1: **49%** (Google; 37% → 49% gen gain, behind Luna 67, Grok 54, Sonnet 54)
- Terminal-Bench 2.1: **78.0%** (see agent row)
- SWE-bench Verified / LiveCodeBench: no verified public score found

Long context:

- GDM-MRCR v2 8-needle 128K average: **91.8%** (Google; leads Google's table vs 3.5 Flash 77.3, Sonnet 5 71.6)
- GDM-MRCR v2 1M pointwise: **54.0%** (Google; leads — 3.5 Flash 26.6, 3.1 Pro 26.3; still ~50% drop-off at full window)
- GraphWalks / ∞Bench: no verified public score found

Multimodal:

- CharXiv / MMMU-Pro / Blueprint-Bench: no verified public score found for 3.6 Flash specifically (3.5 Flash's 84.2/83.6 class not re-published)
- LMArena text Elo: **1485** (arena.ai listing, rank 12); Frontend Code Arena 1537 (#12)

### Normalized scores (1–100)

- **Tool use: 86/100.** OSWorld-Verified 83.0% (table-leading), TB2.1 78.0%, MLE-Bench 63.9%; capped by GDPval-AA 1421 (below Luna/Sonnet/Grok 1535+) and missing MCP/Tau3/Claw.
- **Reasoning: 78/100.** GPQA 92.8 solid, but HLE 38.3 weak and AA Intelligence Index 50 (down from 3.5 Flash's 55) — efficiency-tuned, not reasoning-upgraded; clearly below Pro/Opus/GPT reasoning tier.
- **Context window: 95/100.** 1M window with MRCR 91.8% @128K and 54.0% @1M — best 1M retrieval in Google's table (roughly 2× predecessor); still short of the ≥98% @512K+ bar → 95, not 100.
- **Multimodal: 90/100.** Native text/image/audio/video/PDF in (audio → 90 band); no image/audio out; no CharXiv/MMMU row for this id (3.5 Flash class held ~84/84).
- **Coding: 86/100.** SWE-Pro 58.7%, DeepSWE 49%, TB2.1 78.0% — clear gen-over-gen gains (+3.6/+12/+1.8) but all three trail Luna/Grok/Sonnet class on raw coding; 65% fewer DeepSWE tokens is a cost win, not a score win.
- **Cost efficiency: 88/100.** $1.50/$7.50 flat (output −17% vs 3.5 Flash) + 17% fewer output tokens on AA Index (+ up to 65% token cut on DeepSWE) + $0.15 cache — best effective $/agentic-task in the Flash line; thinking still bills as output.
- **Overall Score: 87/100.** Mean of five quality dims (86+78+95+90+86)/5 = 87.0 → 87. Best-fit: production agent fleets and long-document pipelines (computer use + 1M retrieval leads); not the pick for pure HLE/ARC reasoning or leaderboard-max coding.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-09-22
- Method: public internet research (DeepMind model card, Google Gemini 3.6/3.5-Lite/Cyber blog, AI/TLDR, Awesome Agents, TechJackSolutions, WaitWhichModel, AA); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
