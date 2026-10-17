# MiMo V2.6 Free — findings by Nemotron 3.5 Super VL 120B A12B

- Source: XiaomiMiMo/MiMo-V2.6-Flash-RL (Hugging Face), Xiaomi MiMo Open Platform API `mimo-v2.6-flash`, accessed via OpenCode Zen free tier
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Free (Xiaomi MiMo-V2.6-Flash; free access tier on OpenCode Zen)
- **Short description:** Xiaomi's open-weights multimodal MoE Flash model in the MiMo-V2.6 series (Pro + Flash), trained with large-scale reinforcement learning for self-improvement; served free on OpenCode Zen with a 200K/32K cap, paid fallback via Xiaomi API. Flagship Pro scores AA Intelligence Index 46 (#1 open weights).
- **Provider / access:** OpenCode Zen free tier (`opencode/mimo-v2-6-free`, $0 in/out, capped); Xiaomi MiMo Open Platform API (`mimo-v2.6-flash`, OpenAI-compatible Chat Completions); Hugging Face checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`.
- **Release / knowledge:** MiMo-V2.6 series released September 22, 2026 (Xiaomi MiMo docs update log); 6 days of Live RL training plus ~6 months foundational research.
- **IDs:** `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF checkpoint), `mimo-v2.6-flash` (Xiaomi API), `opencode/mimo-v2-6-free` (OpenCode Zen route). Flash variant; Pro sibling is `mimo-v2.6-pro`.
- **Context window:** 1,048,576 tokens (1M) total; 131,072 tokens max output (Xiaomi OpenCode config / OpenRouter, corroborated by Artificial Analysis). Zen per-model window not published; meta.json's 200K/32K cap is a Zen tier limit, not a model limit.
- **Modalities:** Text, image, speech (audio), and video in; text out (fully multimodal per Xiaomi docs + Artificial Analysis); reasoning mode returns `reasoning_content` in thinking mode; tool calls supported; JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-17):** Free on OpenCode Zen ($0 in/out, capped tier); Xiaomi API paid pricing unchanged from V2.5 series ($0.435 input / $0.87 output per 1M for Pro; UltraSpeed 10× standard rate; Batch API half price). Zen fallback listed as $0.14/$0.28 per 1M — not confirmed as Xiaomi's list price. MIT license, commercial use allowed.
- **Architecture:** MoE mixture-of-experts; Pro confirmed at 1.02T total / 42B active (Artificial Analysis; Kingy.ai). Flash parameter count not independently confirmed (meta.json's 309B/15B is unverified). Native fully multimodal model; RL training via verl/uni-agent/mini-swe-agent framework.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: **87.6% measured** (benchgap, MiMo-V2.6-Flash, 2026-10-16)
- SWE-bench Verified: **89.2% estimated ±4.6 pp** (benchgap, MiMo-V2.6-Flash, high confidence) — conflicts with meta.json's 92.0% claim
- LiveCodeBench v6: **92.0% estimated ±4.9 pp** (benchgap, MiMo-V2.6-Flash, high confidence)
- OSWorld-Verified: **80.8% measured** (benchgap, MiMo-V2.6-Flash)
- AutomationBench: **52.3% measured** (benchgap, MiMo-V2.6-Flash)
- BrowseComp: **82.4% estimated ±1.8 pp** (benchgap, MiMo-V2.6-Flash)
- Kingy.ai OpenCode hands-on: Flash passed **21 of 23** hidden checks for free; Pro passed 23/23 at ~$0.03 vs Claude Opus 5's 23/23 at ~$1.03

Reasoning / knowledge:
- GPQA Diamond: **89.5% estimated ±2.6 pp** (benchgap, MiMo-V2.6-Flash, high confidence)
- HLE: **30.5% estimated ±9.5 pp** (benchgap, MiMo-V2.6-Flash, medium confidence); **35.1% measured** (AA-HLE)
- CritPt: **12.0% measured** (benchgap, MiMo-V2.6-Flash)
- ARC-AGI-1: **92.4% estimated ±5.4 pp** (benchgap, MiMo-V2.6-Flash)
- AA Intelligence Index: **37.9% measured** (benchgap, MiMo-V2.6-Flash); Pro scores **46** (Artificial Analysis, #1 open weights)

Coding:
- SWE-bench Pro: **61.1% estimated ±6.6 pp** (benchgap, MiMo-V2.6-Flash)
- DeepSWE: **67.9% measured** (benchgap, MiMo-V2.6-Flash)
- ProgramBench: **26.0% measured** (benchgap, MiMo-V2.6-Flash)
- CyberGym: **95.1% measured** (benchgap, MiMo-V2.6-Flash)

Long context:
- AA-LCR: **74.3% measured** (benchgap, MiMo-V2.6-Flash)
- LongBench v2: **61.6% estimated ±5.8 pp** (benchgap, MiMo-V2.6-Flash)
- Declared 1M-token context (Xiaomi docs + Artificial Analysis + Kingy.ai); no public retrieval score measured at the full 1M window.

Multimodal:
- MMMU: **82.4% estimated ±5.9 pp** (benchgap, MiMo-V2.6-Flash)
- MMMU-Pro: **75.2% estimated ±4.2 pp** (benchgap)
- MathVision: **82.2% estimated ±4.9 pp** (benchgap)
- CharXiv: **76.7% estimated ±7.0 pp** (benchgap)
- Video-MME (w/o subtitle): **82.7% estimated ±6.3 pp** (benchgap)
- ScreenSpot Pro: **71.8% estimated ±10.7 pp** (benchgap)

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100** — Strong on Terminal-Bench 2.1 (87.6 measured), SWE-bench Verified (89.2 est), LiveCodeBench v6 (92.0 est), Kingy hands-on (21/23 Flash). Capped by weaker OSWorld-Verified (80.8) and AutomationBench (52.3). Flash variant trails Pro on agentic tasks.
- **Reasoning: 75/100.** Strong on GPQA Diamond (89.5 est), ARC-AGI-1 (92.4 est), AA-HLE (35.1 measured). Capped by weak HLE text-only (30.5 est) and CritPt (12.0). Spiky — excellent knowledge/retrieval reasoning, weak on hard open-ended reasoning.
- **Context window: 95/100.** Declared and verified 1M-token context with 131K max output across Xiaomi docs, Artificial Analysis, and Kingy.ai. Capped only because no public retrieval score is measured at the full 1M window.
- **Multimodal: 80/100.** Full text/image/speech/video input with text output; strong on MMMU (82.4 est), MathVision (82.2 est), Video-MME (82.7 est). Capped by weaker ScreenSpot Pro (71.8 est) and lack of verified vision/video scores at full resolution.
- **Coding: 83/100.** Strong on LiveCodeBench v6 (92.0 est), SWE-bench Verified (89.2 est), Terminal-Bench 2.1 (87.6 measured), CyberGym (95.1 measured). Capped by weaker SWE-bench Pro (61.1 est), DeepSWE (67.9 measured), ProgramBench (26.0 measured). Competitive-coding strength does not yet extend to full agentic software engineering.
- **Cost efficiency: 98/100.** Free on OpenCode Zen ($0 in/out); paid fallback ~$0.14/$0.28 per 1M vs official Xiaomi $0.435/$0.87. Not counted toward Overall.
- **Overall Score: 83/100.** Half-up mean of (82 + 75 + 95 + 80 + 83) / 5 = 83. Best-fit recommendation: a strong open-weights multimodal agent for routine coding and tool-assisted tasks at zero cost via Zen; verify on HLE-class and agentic-coding tasks before production reliance.

### Conflicts vs existing meta.json / queued average

- meta.json claims SWE-bench Verified 92.0%; benchgap measures Flash at 89.2% (estimated). The 92.0% figure matches LiveCodeBench v6, not SWE-bench — likely a misattribution in meta.json.
- meta.json lists Flash as 309B/15B active; independent sources only confirm Pro at 1.02T/42B. Flash parameter count is unverified.
- meta.json pricingNote cites $0.14/$0.28 per 1M; official Xiaomi API lists $0.435/$0.87 for Pro. Zen tier pricing is unconfirmed as a vendor rate.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official Xiaomi MiMo docs + Hugging Face model card + Artificial Analysis + Kingy.ai hands-on review + benchgap aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.