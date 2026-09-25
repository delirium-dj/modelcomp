# Qwen3.8 (Max) — findings by Kimi K3

- Source: Alibaba/Qwen / Qwen3.8-Max (`qwen3.8-max`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (flagship = Qwen3.8-Max)
- **Short description:** Alibaba's 2.4T-parameter MoE flagship (95B active), released August 3, 2026 with 1M context and full multimodality; pitched as the open-ecosystem answer to Claude Fable 5 / GPT-5.6 Sol. **Caution:** all headline scores are vendor-run (Alibaba), unreplicated at my research date. Distinct from small "Qwen3 8B" (2025) and from the open-weight Qwen3.8-27B dense vision model.
- **Provider / access:** Alibaba Model Studio / DashScope API (`qwen3.8-max`), OpenRouter; open weights promised for smaller variants (27B live at $0.094/$4.40 per 1M).
- **Release / knowledge:** Released 2026-08-03 (emergent.sh); knowledge cutoff not verified.
- **IDs:** `qwen/qwen3.8-max`, `qwen/qwen3.8-27b` (open); no Free-tier ID verified on OpenCode Zen.
- **Context window:** 1M tokens input / 131,072 max output (openrouter.ai for 27B; flagship 1M per Alibaba release coverage).
- **Modalities:** text/image/video in (native vision-language per shortlyai.com/openrouter.ai); audio via Qwen3.8-Omni-Flash sibling; text out; reasoning (flexible thinking control); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Max: $2.00/M input, $6.00/M output, $0.25 cached (VentureBeat/Qwen release via emergent.sh). 27B open: $0.094/$4.40 (openrouter.ai).
- **Architecture:** 2.4T total / 95B active MoE (Max); 27B dense open variant; license undisclosed at release.

### Raw benchmarks found

> All flagship rows below are **vendor-published by Alibaba (Aug 2026)** — no independent evaluator had scored Qwen3.8-Max at that time (emergent.sh caveat). Coding rows ran inside Anthropic's Claude Code harness.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor; beats Opus 4.8 84.6 / Fable 5 84.6; GPT-5.6 Sol 88.8)
- OSWorld-Verified: **86.1%** (vendor; vs Fable 5 85.0, GPT-5.6 Sol 83.2)
- TerminalBench 3.0 (0902 refresh): **29.0** (blog.buildfastwithai.com, vendor-published delta)
- JobBench (0902): **64.0** (vendor-published delta)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor; vs Sol 94.1)
- HLE: **43.6%** — last of the four flagships in vendor table (vendor)
- PaperBench: **93.0%** — best-in-table (vendor)
- IFBench: **82.8%** — best-in-table instruction following (vendor)
- Artificial Analysis / BenchLM / Omniscience: no independent index score found

Coding:

- SWE-bench Pro: **67.7%** (vendor; vs Fable 5 80.0, Sol 64.6, Opus 4.8 69.2)
- DeepSWE 1.1 (0902): **69.3%** (vendor-published delta)
- QwenSWE-Bench V2 (0902): **70.0%** (in-house eval)
- Code Arena WebDev snapshot (qwen3.8-max-0902): **1681 Elo** vs Claude Opus 5 1687 (preliminary, per blog.buildfastwithai.com)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window verified by spec; no MRCR/RULER/GraphWalks public score found.

Multimodal:

- MathVision: **95.2%**; LogicVista: **91.9%**; OSWorld-Verified: **86.1%** (all vendor tables; emergent.sh); Qwen3.8-27B LiveBench overall **75.3** (Reasoning 80.0, Coding 75.7, Math 86.2) (LiveBench 2026-06-25 release via shortlyai.com)

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 86.6% + OSWorld-Verified 86.1% are elite even if vendor-run; capped because no independent agentic replication exists.
- **Reasoning: 82/100.** GPQA 92.6% and PaperBench 93.0% are strong; capped by HLE 43.6% (vendor-admitted last-place among flagships).
- **Context window: 88/100.** 1M window with flexible thinking control; capped by zero public long-context retrieval measurements.
- **Multimodal: 88/100.** MathVision 95.2 / LogicVista 91.9 plus a native-vision 27B variant and Omni-Flash audio sibling; text-only output caps it.
- **Coding: 82/100.** TB 2.1 86.6% and TB3 29.0 are good; capped by SWE-bench Pro 67.7% — 12 points behind Fable 5 on the hardest tier (vendor's own table).
- **Cost efficiency: 85/100.** $2/$6 per 1M undercuts Kimi K3 ($3/$15) and is ~1/3 of Claude Opus 5; excellent if quality claims hold.
- **Overall Score: 85/100.** Mean of the five quality dims (85+82+88+88+82)/5 = 85.0. Best fit: cost-sensitive frontier-class multimodal work — pending independent replication of its vendor-run table.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (emergent.sh benchmark breakdown of Alibaba's Aug 2026 launch table, blog.buildfastwithai.com 0902 refresh, openrouter.ai, shortlyai.com LiveBench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
