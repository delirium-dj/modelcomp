# MiMo V2.5 (Free) — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5 (`opencode/mimo-v2.5-free`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE (text/image/video/audio in) with agentic coding strength; the Free tier on OpenCode Zen caps context at 200K of the native 1M window.
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions); native open weights + hosted APIs (~$0.14/$0.28 per 1M per Zen pricing note).
- **Release / knowledge:** 2026 MiMo V2.5 generation (exact date not verified in my sources); Sibling: MiMo-V2.5-Pro.
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free ID); weights per Zen listing described open-weights.
- **Context window:** native 1M; **200K cap on the Zen Free tier**; 32K max output (Zen listing).
- **Modalities:** text/image/audio/video in; text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0, capped); native ~$0.14/$0.28 per 1M (Zen pricing note).
- **Architecture:** open-weights MoE (Zen listing); params not verified in my sources.

### Raw benchmarks found

Agent / tool use:

- Claw-Eval: **62.3%**; MM-ClawBench: **23.8%**; ResearchClawBench: **16.9%** (benchlm.ai)
- Terminal-Bench 2.0: **65.8%**; TB 2.1 (Vals): **60.7%** (benchlm.ai)
- Gert Labs: **46.9%** (benchlm.ai)
- GDPval-AA / Tau2/Tau3: no verified public score found

Reasoning / knowledge:

- GPQA Diamond (Vals): **81.6%** (benchlm.ai)
- MMLU-Pro (Vals): **82.9%** (benchlm.ai)
- HLE / LCR / CritPt / AA indices / Omniscience: no verified public score found

Coding:

- SWE-bench (Vals): **71.0%**; SWE-bench Pro: **56.1%** (benchlm.ai)
- LiveCodeBench (Vals): **81.5%** (benchlm.ai)
- Terminal-Bench 2.0: **65.8%** (benchlm.ai)
- SciCode / Coding Index: no verified public score found

Long context:

- Native 1M window; no MRCR/RULER/LCR retrieval score found (Zen Free tier caps at 200K anyway).

Multimodal:

- Video-MME (w/ subtitle): **87.7%**; CharXiv: **81.0%**; MMMU-Pro: **77.9%**; Design Arena Website: **1276 Elo** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 68/100.** Claw-Eval 62.3%, TB 2.0 65.8%; capped by MM-ClawBench 23.8% and missing GDPval/Tau rows.
- **Reasoning: 68/100.** GPQA (Vals) 81.6%, MMLU-Pro 82.9%; capped by zero hard-reasoning coverage (no HLE/CritPt/ARC rows).
- **Context window: 70/100.** Native 1M but Free tier capped at 200K and no retrieval measurements; scored for the Zen-usable configuration.
- **Multimodal: 86/100.** True omni breadth incl. video (Video-MME 87.7%) and audio-in; strongest dimension. Text-only output caps slightly.
- **Coding: 74/100.** LiveCodeBench 81.5%, SWE-bench (Vals) 71.0%; capped by SWE-bench Pro 56.1%.
- **Cost efficiency: 98/100.** $0 on Zen Free tier; native hosting ~$0.14/$0.28 is also very cheap.
- **Overall Score: 73/100.** Mean of the five quality dims (68+68+70+86+74)/5 = 73.2 → 73. Best fit: free omni-modal (video/audio) analysis and everyday coding on Zen.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, Zen listing pricing/specs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
