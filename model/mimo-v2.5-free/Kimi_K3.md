# MiMo V2.5 (Free) — findings by Kimi K3

- Source: Xiaomi / MiMo-V2.5 (`opencode/mimo-v2.5-free`; HF `XiaomiMiMo/MiMo-V2.5`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Xiaomi's native omni-modal open-weights MoE (text/image/video/audio in) — 310B total / 15B active trained on 48T tokens — with agentic coding strength; the Free tier on OpenCode Zen caps context at 200K of the native 1M window (mimo.xiaomi.com).
- **Provider / access:** OpenCode Zen `opencode/mimo-v2.5-free` (Chat Completions); open weights on HF/ModelScope under MIT (commercial use + fine-tuning allowed, no extra authorization); Xiaomi MiMo Open Platform API + AI Studio + Token Plan (V2.5 at 1x credits, no 1M-window multiplier).
- **Release / knowledge:** Announced 2026-04-22 (mimo.xiaomi.com); weights open-sourced 2026-04-27/28 (HF createdAt; mimo.mi.com news). Knowledge cutoff not stated. Sibling: MiMo-V2.5-Pro; successor: MiMo-V2.6 series (2026-09-21).
- **IDs:** `opencode/mimo-v2.5-free` (Zen Free ID); HF `XiaomiMiMo/MiMo-V2.5` (and `MiMo-V2.5-Base`, 256K context, FP8 mixed).
- **Context window:** native 1M (post-training extended 32K→256K→1M per official page); **200K cap on the Zen Free tier**; 32K max output (Zen listing).
- **Modalities:** text/image/audio/video in (dedicated in-house vision + audio encoders via lightweight projectors); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** Free Zen tier ($0, capped); Xiaomi MiMo API V2.5-class rates ≈$0.14/$0.28 per 1M (llm-stats.com Flash-class listing; V2.6 announcement confirms V2.5-series prices unchanged).
- **Architecture:** Sparse MoE 310B total / 15B active, hybrid sliding-window attention backbone inherited from MiMo-V2-Flash, in-house pretrained vision and audio encoders with lightweight projectors, FP8 (E4M3) mixed precision, 48T training tokens (mimo.xiaomi.com).

### Raw benchmarks found

Agent / tool use:

- Claw-Eval (general subset): **62.3%** — Pareto-frontier per vendor (mimo.xiaomi.com; benchlm.ai concurs); MM-ClawBench: **23.8%**; ResearchClawBench: **16.9%** (benchlm.ai)
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
- MiMo Coding Bench: strong internal results, "matching MiMo-V2.5-Pro at half the cost" (vendor claim, mimo.xiaomi.com); Terminal-Bench 2.0: **65.8%** (benchlm.ai)
- SciCode / Coding Index: no verified public score found

Long context:

- Native 1M window; no MRCR/RULER/LCR retrieval score found (Zen Free tier caps at 200K anyway).

Multimodal:

- Video-MME (w/ subtitle): **87.7%**; CharXiv: **81.0%**; MMMU-Pro: **77.9%**; Design Arena Website: **1276 Elo** (benchlm.ai)
- Vendor positioning: matches Gemini 3 Pro on video understanding and Claude Sonnet 4.6 on multimodal agentic tasks (mimo.xiaomi.com)

### Normalized scores (1–100)

- **Tool use: 68/100.** Claw-Eval 62.3%, TB 2.0 65.8%; capped by MM-ClawBench 23.8% and missing GDPval/Tau rows.
- **Reasoning: 68/100.** GPQA (Vals) 81.6%, MMLU-Pro 82.9%; capped by zero hard-reasoning coverage (no HLE/CritPt/ARC rows).
- **Context window: 70/100.** Native 1M but Free tier capped at 200K and no retrieval measurements; scored for the Zen-usable configuration (200K sits in the ~256K/70s band).
- **Multimodal: 86/100.** True omni breadth incl. video (Video-MME 87.7%) and audio-in — inside the omni band; strongest dimension. Text-only output caps slightly.
- **Coding: 74/100.** LiveCodeBench 81.5%, SWE-bench (Vals) 71.0%; capped by SWE-bench Pro 56.1%.
- **Cost efficiency: 100/100.** $0 on Zen Free tier; caveats: 200K context cap, 32K max output, free-tier rate limits. Native hosting ≈$0.14/$0.28 is also very cheap if the caps bite.
- **Overall Score: 73/100.** Mean of the five quality dims (68+68+70+86+74)/5 = 73.2 → 73. Best fit: free omni-modal (video/audio) analysis and everyday coding on Zen.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (mimo.xiaomi.com official V2.5 page, mimo.mi.com news, benchlm.ai scorecard, llm-stats.com, HF hub metadata, Zen listing pricing/specs); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: release pinned to 2026-04-22 announce / 2026-04-27-28 open-weights; architecture verified (310B/15B, V2-Flash hybrid-SWA backbone, in-house vision+audio encoders, 48T tokens, FP8); HF IDs added; vendor multimodal parity claims (Gemini 3 Pro video, Sonnet 4.6 agentic) recorded; Cost 98→100 per free-tier band.
- Future sources: add a new file next to this one using the same headings.
