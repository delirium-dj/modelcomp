# Qwen3.8 (Max) — findings by Kimi K3

- Source: Alibaba/Qwen / Qwen3.8-Max (`qwen3.8-max`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (flagship = Qwen3.8-Max)
- **Short description:** Alibaba's 2.4T-parameter MoE flagship (95B active), released August 3, 2026 with 1M context and full multimodality; pitched as the open-ecosystem answer to Claude Fable 5 / GPT-5.6 Sol. **Caution:** all headline scores are vendor-run (Alibaba). Distinct from small "Qwen3 8B" (2025) and from the open-weight Qwen3.8-27B dense vision model.
- **Provider / access:** Alibaba Model Studio / DashScope API (`qwen3.8-max`), OpenRouter, OpenCode Zen route `opencode/qwen3.8-max` live (sibling catalog entry); open weights promised for smaller variants (27B live at $0.094/$4.40 per 1M).
- **Release / knowledge:** Released 2026-08-03 (OpenCode Data confirms); knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.8-max`, `qwen/qwen3.8-27b` (open); no Free-tier ID verified on OpenCode Zen.
- **Context window:** 1M tokens input / 131,072 max output (27B via openrouter.ai; flagship 1M per Alibaba release coverage; OpenCode Data lists 131K max output for the Max deployment).
- **Modalities:** text/image/video/PDF in; text out; reasoning (flexible thinking control); tool calls; JSON mode. Audio via Qwen3.8-Omni-Flash sibling.
- **Pricing (as of 2026-10-11):** Max: $2.00/M input, $6.00/M output, $0.25 cached (OpenCode Data catalog; matches VentureBeat/Qwen release via emergent.sh). 27B open: $0.094/$4.40 (openrouter.ai).
- **Architecture:** 2.4T total / 95B active MoE (Max); 27B dense open variant; license undisclosed at release.

### Raw benchmarks found

> All flagship rows below are **vendor-published by Alibaba (Aug 2026 + 0902 refresh + HF card)**. The official HF model-card table (`Qwen/Qwen3.8-2.4T-A95B`, transcribed by OpenCode Data) now documents the flagship rows directly.

Agent / tool use:

- Terminal-Bench 2.1 (avg@10): **86.6%** (official HF card via OpenCode Data; matches emergent.sh)
- OSWorld-Verified: **86.1%** (vendor; vs Fable 5 85.0, GPT-5.6 Sol 83.2); AndroidBench: **75.1%**; WideSearch: **81.9%** F1 (HF card)
- TerminalBench 3.0 (0902 refresh): **29.0** (blog.buildfastwithai.com, vendor-published delta)
- JobBench: **64.0** (0902 vendor delta); **53.4** on the HF card's scope (variant; both retained); SkillsBench: **70.2**; CoWorkBench: **74.8**; WorkSpaceBench: **67.7** (HF card — new this pass); Agents' Last Exam: **52.4 / 27% pass@1** (HF card, new); AutomationBench: **27.3%** pass@1 (HF card, new)
- Toolathlon-Verified: **72.5%** pass@1 (HF card, new)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (official HF card; matches vendor table; Vals 93.7%)
- HLE: **43.6%** no tools; **56.2%** w/ tools (official HF card; matches vendor table)
- PaperBench: **93.0%** — best-in-table (HF card, confirmed); IFBench: **82.8%** (HF card, confirmed)
- MRCR: **92.9%**; LongBench v2: **66.3%**; $OneMillion-Bench: **52.5** expert; HealthBench: **60.2**; PLawBench: **73.2**; PRBench: **57.6/58.3** (HF card — new this pass, resolving first-pass context gaps)
- Artificial Analysis / BenchLM / Omniscience: no independent index score found

Coding:

- SWE-bench Pro: **67.7%** (official HF card; matches vendor table; vs Fable 5 80.0, Sol 64.6, Opus 4.8 69.2)
- DeepSWE 1.1 (0902): **69.3%** (vendor-published delta); DeepSWE **56.6** on the HF card (base); FrontierSWE **73.5** dominance; MLS-Bench-Lite **41** (HF card, new)
- QwenSWE-Bench V2 (0902): **70.0%**; QwenSWEBench **80.7**, QwenQoderBench **58.4**, QwenSVGBench **1713 Elo**, QwenReactBench **1724 Elo** (in-house, HF card)
- NL2Repo: **55.9** (HF card, new)
- Code Arena WebDev snapshot (qwen3.8-max-0902): **1681 Elo** vs Claude Opus 5 1687 (preliminary, per blog.buildfastwithai.com)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- MRCR: **92.9%** (official HF card); LongBench v2: **66.3%**; $OneMillion-Bench **52.5** — measured long-context retrieval now exists (vendor-run).

Multimodal:

- MathVision: **95.2%**; LogicVista: **91.9%**; OSWorld-Verified: **86.1%** (all vendor tables; emergent.sh); Qwen3.8-27B LiveBench overall **75.3** (Reasoning 80.0, Coding 75.7, Math 86.2) (LiveBench 2026-06-25 release via shortlyai.com)

### Normalized scores (1–100)

- **Tool use: 85/100.** Unchanged: TB 2.1 86.6% + OSWorld-Verified 86.1% elite even if vendor-run; capped by missing independent agentic replication and ALE 27% pass@1.
- **Reasoning: 82/100.** Unchanged: GPQA 92.6% and PaperBench 93.0% strong (official-confirmed); capped by HLE no-tools 43.6%.
- **Context window: 90/100.** Raised from 88: official MRCR 92.9% and LongBench v2 66.3% now provide measured long-context retrieval (vendor-run); capped by absent independent probes.
- **Multimodal: 88/100.** Unchanged: MathVision 95.2 / LogicVista 91.9 plus native-vision 27B variant and Omni-Flash audio sibling; text-only output caps it.
- **Coding: 82/100.** Unchanged: TB 2.1 86.6% strong; capped by SWE-bench Pro 67.7% (12 points behind Fable 5 on the hardest tier) and FrontierSWE v2-style gaps.
- **Cost efficiency: 85/100.** Unchanged, catalog-verified: $2/$6 per 1M undercuts Kimi K3 ($3/$15) and is ~1/3 of Claude Opus 5.
- **Overall Score: 85/100.** Mean of the five quality dims (85+82+90+88+82)/5 = 85.4 → 85. Best fit: cost-sensitive frontier-class multimodal work — pending independent replication of its vendor-run table.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official Qwen HF model-card table `Qwen/Qwen3.8-2.4T-A95B` transcribed by OpenCode Data `alibaba/qwen3-8-max`; OpenCode Data `alibaba/qwen3-8` stub; emergent.sh + blog.buildfastwithai.com vendor-table coverage from first pass). Second pass over my 2026-09-24 file: verified release date and prices; added the HF-card long-context and agentic rows (MRCR 92.9, LongBench v2 66.3, $OneMillion-Bench, HealthBench, PLawBench, PRBench, ALE, AutomationBench, Toolathlon, etc.). Scores are normalized 1–100 interpretations, not official vendor scores; vendor-run caveat stands.
- Future sources: add a new file next to this one using the same headings.
