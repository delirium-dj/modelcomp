# Kimi K2.6 — findings by Muse Spark 1.3

- Source: Moonshot AI/Kimi K2.6 (`moonshotai/kimi-k2.6`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weights multimodal reasoning agent for visual understanding, coding, and planning.
- **Provider / access:** Moonshot AI `moonshotai/kimi-k2.6` via OpenCode Zen `opencode/kimi-k2.6` (Chat Completions).
- **Release / knowledge:** 2026-04-21 release; knowledge cutoff 2024-10 (models.dev)
- **IDs:** `opencode/kimi-k2.6` (Zen); canonical `moonshotai/kimi-k2.6`
- **Context window:** 262,144 total (256K) with 65,536 max output (models.dev; BenchLM lists 256K)
- **Modalities:** Text, image, video in; text out; reasoning yes (toggle with interleaved `reasoning_content`); tool calls yes; attachment yes
- **Pricing (as of 2026-09-29):** $0.95/$4.00 per 1M in/out, cached input $0.16 (models.dev / OpenCode Zen)
- **Architecture:** Open weights, reasoning type (BenchLM); params and license details not disclosed in fetched sources

### Raw benchmarks found

Agent / tool use:

- Tau2-bench (**conversational tool use**): 95.9% (via BenchLM, Kimi K2.6 page)
- Terminal-Bench 2.1: **53.6%** (Vals harness, via BenchLM); Terminal-Bench 2.0 **66.7%** (via BenchLM)
- Tau3-Banking / Tau2-Bench: Tau2 **95.9%** above; no Tau3-Banking score found
- GDPval-AA: **1115 Elo** (via BenchLM; normalized 26.3% on second GDPval-AA lane)
- Claw-Eval / ClawProBench: Claw-Eval **62.3%** (via BenchLM)
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: Toolathlon **50.0%**, MCP Atlas **55.9%** (via BenchLM); OSWorld-Verified **73.1%**, BrowseComp **83.2%** (via BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (91.1% on AA-GPQA lane, 89.1% Vals lane; via BenchLM)
- HLE: **34.7%** (37.5% on AA-HLE lane; via BenchLM)
- LCR / MLCR: AA-LCR **81.0%** (via BenchLM)
- CritPt: **8.0%** (via BenchLM)
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **27.0%** lane; BenchLM overall **59.22/100, #50 of 512** with 55/486 benchmarks covered (via BenchLM)
- Omniscience Accuracy / Hallucination Rate: accuracy **32.6%** / hallucination rate **40.5%**, index 5.3% (via BenchLM)
- MMLU-Pro (**knowledge proxy, provisional**): 87.6% Vals lane (via BenchLM)

Coding:

- SWE-bench Verified / SWE-Pro: Verified **80.2%** (76.2% Vals lane); Pro **58.6%**; Multilingual **76.7%** (via BenchLM)
- LiveCodeBench: v6 **89.6%** (86.8% Vals lane; via BenchLM)
- SciCode / AA-SciCode: **52.2%** (51.5% AA lane; via BenchLM)
- Vibe Code Bench: **37.89%** (via BenchLM)
- DeepSWE / Coding Index / other: AA Coding Index **61.8%** (via BenchLM); cursorBench31 **47.6%**; no DeepSWE score found

Long context:

- AA-LCR 81.0% at 256K ceiling (via BenchLM); no MRCR / RULER / GraphWalks value found

### Normalized scores (1–100)

- **Tool use: 78/100.** Tau2 95.9% elite with Claw-Eval 62.3%, OSWorld 73.1%, and GDPval 1115; capped by TB2.1-Vals 53.6% and Toolathlon 50.0%.
- **Reasoning: 86/100.** GPQA 90.5–91.1% at frontier with HLE 34.7–37.5% and MMLU-Pro 87.6%; capped by CritPt 8.0%.
- **Context window: 76/100.** Verified 256K total with 64K output and AA-LCR 81.0% measured reasoning; capped by the sub-500K ceiling (200K = 70 tier).
- **Multimodal: 84/100.** Text/image/video in with MMMU-Pro 79.4% and MathVision 87.4%; capped by text-only output.
- **Coding: 87/100.** LiveCode v6 89.6% elite with SWE-Verified 80.2% and SWE-Pro 58.6%; capped by Vibe 37.89%.
- **Cost efficiency: 89/100.** $0.95/$4.00 sits near the $1.25/$4.25 reference tier with $0.16 cached input; capped below free-tier 100 as paid.
- **Overall Score: 82/100.** Mean of the five non-cost dims (78+86+76+84+87)/5 = 82.2; best fit as a strong open-weights coding/reasoning agent.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (BenchLM K2.6 page with 55 benchmarks, models.dev metadata, OpenCode Zen pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
