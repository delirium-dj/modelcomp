# Muse Spark 1.2 Free — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 Free
- **Short description:** Meta's prior-gen 1M coding/agent model (2026-08-05) co-trained with Muse Code; Free Contributor tier shares weights with standard 1.2, now superseded by 1.3.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.2-contributor-free` (Responses API) and Meta API `muse-spark-1.2`
- **Release / knowledge:** 2026-08-05; knowledge cutoff 2026-04
- **IDs:** `opencode/muse-spark-1.2-contributor-free` (Free), `opencode/muse-spark-1.2` (Standard)
- **Context window:** 1,048,576 total (1M in / 128K out) — verified via Meta docs and felloai review
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** Free Zen tier $0/$0 (training-data consent); Contributor $0.10/$0.20; Standard $1.25/$4.25 per 1M
- **Architecture:** Proprietary (Muse family, co-trained with Muse Code)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta own evaluation in Muse Code vs Opus 5 86.7%, GPT-5.6 Terra 81.8%, Grok Build 81.6%) — AA independent 80%, 1.1→1.2 +2pp
- Terminal-Bench 2.1 (AA): **80%** (Artificial Analysis — up from 78% for 1.1)
- Tau3-Banking: **27%** (Artificial Analysis — +2 vs 1.1)
- GDPval-AA v2: **1,631 Elo** (Artificial Analysis — +260 vs 1,371 for 1.1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Vals Index cost-weighted rank: **5th at $0.69/test** (Vals via felloai) vs 14th pure capability
- Tool use ranking (LLM Stats): **40.4 agent index** (llm-stats)

Reasoning / knowledge:

- GPQA Diamond: **~90.4% per lineage** (BenchLM history for 1.2 class)
- HLE: **slight regression -1 vs 1.1 per AA** (AA notes minor HLE regression; no isolated numeric)
- MRCR v2: **no verified public score found** (1.3 MRCR only)
- Artificial Analysis Intelligence Index: **54 (xhigh)** (Artificial Analysis — up from 51 for 1.1, 43 for April release; vs Opus 5 61, Sol 59)
- LiveBench: **77.2** (BenchLM history for 1.2 via 1.1→1.2 comparison)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **77.4%** (Eigent.ai — 1.2 with SWE-agent harness)
- SWE-bench Pro: **52.4%** (Eigent.ai)
- LiveCodeBench Pro: **80.0%** (Eigent.ai — vs GPT 87.5, Gemini 82.9)
- DeepSWE v1.1: **59.3%** (Meta charts — vs Opus 5 65.0%, Codex 64.8%; +6.3 vs 1.1)
- SciCode: **-2 vs 1.1** (AA — minor regression)
- Meta internal coding bench: **70.6%** (Meta — vs Opus 5 79.4%, 1.1 68.3%)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M context with NoPE MLA + KDA heritage; 1M demonstrated for whole-repo tasks; no MRCR disclosure for 1.2 (98.5 only for 1.3)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 82.9% strong + AA 80% + GDPval 1631 + Tau 27; capped by Opus 5 lead and no Claw-Eval.
- **Reasoning: 87/100.** Index 54 + GPQA ~90 + GDPval jump + LiveBench 77; capped by HLE/SciCode regressions and missing MRCR.
- **Context window: 96/100.** 1,048,576 total; tier 95-100 for ≥1M but capped below 100 vs 1.3's proven 98% retrieval.
- **Multimodal: 90/100.** Broadest input (text/image/audio/video/PDF in) → text out; 90 tier for audio+video; capped below 95 by CharXiv 86.4 not 90+.
- **Coding: 88/100.** SWE-Verified 77.4 + DeepSWE 59.3 + LC Pro 80.0 + Meta 70.6; trails Opus 5/Codex on every Meta chart, hence below 90.
- **Cost efficiency: 100/100.** $0 Free Zen tier (cheaper than all open-weight per musecodes.io map at $0.10/$0.20 contributor).
- **Overall Score: 90/100.** Mean of five non-cost dims (88+87+96+90+88)/5=89.8 → 90; near-frontier free fallback when 1.3 unavailable (self-evaluated).

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Meta 2026-08-05 blog, Artificial Analysis articles, Eigent.ai, musecodes.io, felloai, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
