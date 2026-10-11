# Qwen3.8 Max — findings by Kimi K3

- Source: Alibaba / Qwen3.8 Max (`qwen3.8-max`; open weights `Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max
- **Short description:** Alibaba's open-weight 2.4T-A95B MoE flagship (HF model card live) — exceptional multimodal suite (MathVision 95.2, CharXiv 93.5, Video MMUs ~85–91%) with strong agentic numbers and 1M context. Distinct deployments: this folder tracks the Max flagship (incl. the 0902 refresh); see `qwen-3.8` for the base-release view.
- **Provider / access:** Alibaba Model Studio/DashScope (`qwen3.8-max`), OpenRouter, **OpenCode Zen `opencode/qwen3.8-max`** (route live with real weekly usage; exists as `alibaba/qwen3.8-max` on OpenCode Data); open weights at huggingface.co/Qwen/Qwen3.8-2.4T-A95B.
- **Release / knowledge:** Base released 2026-08-03 (OpenCode Data confirms); 0902 refresh (qwen3.8-max-0902) published September 2026 (blog.buildfastwithai.com); knowledge cutoff not stated.
- **IDs:** `qwen/qwen3.8-max`, `alibaba/qwen3.8-max` (no Free-tier ID on Zen).
- **Context window:** 1M tokens (OpenCode Data; benchlm.ai); max output **131K** (OpenCode Data — previously unverified).
- **Modalities:** text/image/video/PDF in (OpenCode Data; 24 multimodal bench rows measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-10-11):** $2.00/M input, $6.00/M output, $0.25/M cached (OpenCode Data catalog; matches the emergent.sh-reported Qwen release pricing).
- **Architecture:** 2.4T total / 95B active params, MoE, open weights on HF (benchlm.ai Source Type: Open Weight; note OpenCode Data's hosted-route row lists "Open weights: No" — the catalog reflects the hosted route, not the HF repo, which is the benchmark-table source).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (avg@10): **86.6%** (official HF card via OpenCode Data; Vals harness 67.4%); Terminal-Bench 3.0 (0902): **29.0%** (vendor delta, blog.buildfastwithai.com)
- OSWorld-Verified: **86.1%** (note OSWorld 2.0: 19.4%); AndroidWorld: **85.3%**; AndroidBench: **75.1%** avg@3 (official HF card, new this pass); MobileWorld: **77.8%**; WebArena-Verified: **66.8%** (benchlm.ai)
- Toolathlon-Verified: **72.5%** pass@1 (official HF card; matches benchlm.ai); Agents' Last Exam: **52.4** score / **27%** pass@1 (official HF card, both rows); WideSearch/WideResearch: **81.9%** avg F1 (official); CoWorkBench: **74.8**; WorkSpaceBench: **67.7** (official, new); SkillsBench: **70.2** avg@3 (official); AutomationBench: **27.3%** pass@1 (official, new); JobBench: **53.4** (official)
- HLE w/ tools: **56.2%** (official HF card; matches benchlm.ai)
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (official HF card; Vals 93.7%)
- HLE: **43.6%** no tools; **56.2%** w/ tools (official HF card; matches benchlm.ai)
- MRCRv2: **92.9%**; LongBench v2: **66.3%**; $OneMillion-Bench: **52.5** expert score; HealthBench: **60.2**; PLawBench: **73.2**; PRBench: **57.6/58.3** (official HF card via OpenCode Data — new rows resolving my earlier "no $1M/Health/PLaw/PR rows" gaps)
- IFBench: **82.8%** (official; matches benchlm.ai)
- BenchLM overall: **71.8/100, #12 of 507**
- AA-Omniscience / CritPt / AA-LCR: no verified public score found

Coding:

- SWE-bench Pro: **67.7%** resolved (official HF card; matches benchlm.ai); SWE-bench (Vals): **85.6%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **87.9%** (benchlm.ai)
- DeepSWE: **56.6%** (official HF card; 0902 refresh: **69.3%**, vendor delta via blog.buildfastwithai.com); FrontierSWE: **73.5** dominance (official); FrontierSWE v2: **15.8%** (benchlm.ai)
- PaperBench: **93.0%**; NL2Repo: **55.9**; MLS-Bench-Lite: **41** (official, new); QwenSWEBench: **80.7**, QwenQoderBench: **58.4**, QwenSVGBench: **1713 Elo**, QwenReactBench: **1724 Elo** (vendor benches, official HF card, new)
- VulcanBench v3: **81.2%** (benchlm.ai); Code Arena WebDev (0902): **1681** preliminary (blog.buildfastwithai.com)

Long context:

- MRCRv2: **92.9%** at up-to-1M multi-round retrieval (official HF card); LongBench v2 66.3%; $OneMillion-Bench 52.5 expert score.

Multimodal (sweep, benchlm.ai): MathVision 95.2% (w/ Python 97.7%), CharXiv 93.5%, OmniDocBench 1.5 92.1%, VideoMMMU 88.7%, MLVU 90.8%, LVBench 81.8%, ScreenSpot Pro 84.5%, ZeroBench w/ Python 49.0%.

### Normalized scores (1–100)

- **Tool use: 86/100.** Unchanged: TB 2.1 86.6%, OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon 72.5% — all now confirmed on the official HF card; capped by OSWorld 2.0 19.4%, AutomationBench 27.3% and missing AA GDPval/Tau3 rows.
- **Reasoning: 84/100.** Unchanged: GPQA 92.6%, HLE w/ tools 56.2%, MRCRv2 92.9%, IFBench 82.8% (official-confirmed); capped by HLE no-tools 43.6%.
- **Context window: 92/100.** Unchanged: 1M window / 131K output (OpenCode-verified) with MRCRv2 92.9%; capped slightly by LongBench v2 66.3%.
- **Multimodal: 93/100.** Unchanged: deep vision/video sweep (MathVision 95.2, VideoMMMU 88.7, CharXiv 93.5) — best multimodal coverage measured this cohort; text-only output.
- **Coding: 84/100.** Unchanged: SWE-bench (Vals) 85.6%, SWE-Bench Pro 67.7% (official-confirmed), LiveCodeBench 87.9%, PaperBench 93.0%, FrontierSWE 73.5%; capped by FrontierSWE v2 15.8%.
- **Cost efficiency: 85/100.** Unchanged, now catalog-verified: $2/$6 per 1M ($0.25 cached) with open weights — a third of Claude Opus 5's rate for comparable top-table claims.
- **Overall Score: 88/100.** Mean of the five quality dims (86+84+92+93+84)/5 = 87.8 → 88. Best fit: open-weight frontier multimodal + agentic stack at very aggressive pricing; verify vendor-run rows before production trust.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-11
- Method: fresh public web research (official Qwen HF model-card benchmark table transcribed by OpenCode Data `alibaba/qwen3.8-max` incl. usage/pricing/modalities; benchlm.ai scorecard from first pass; blog.buildfastwithai.com 0902 refresh coverage). Second pass over my 2026-09-24 file: verified release date, 131K max output, Zen route availability and catalog pricing; added the HF-card rows previously marked missing ($OneMillion-Bench, HealthBench, PLawBench, PRBench, MLS-Bench-Lite, AndroidBench, WorkSpaceBench, AutomationBench); flagged the hosted-route "not open weights" catalog row vs the open HF repo. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
