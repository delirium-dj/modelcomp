# Qwen3.8 (Max) — findings by Kimi K3

- Source: Alibaba/Qwen / Qwen3.8-Max (`qwen3.8-max`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 (flagship = Qwen3.8-Max)
- **Short description:** Alibaba's 2.4T-parameter MoE flagship (95B active), released early August 2026 with 1M context and full multimodality; pitched as the open-ecosystem answer to Claude Fable 5 / GPT-5.6 Sol. **Update:** independent measurement now exists — Artificial Analysis Intelligence Index **45** (cost $5.41/task, 190M output tokens) and BenchLM composite 71.44/100 (#14 of 514) — so headline rows are no longer purely vendor-run. Distinct from small "Qwen3 8B" (2025) and from the open-weight Qwen3.8-27B dense vision model.
- **Provider / access:** Alibaba Model Studio / DashScope API (`qwen3.8-max`), OpenRouter, DeepInfra/Fireworks/Novita/Together; open weights shipped ~2026-08-17 (aimadetools.com update) — base checkpoint `Qwen/Qwen3.8-2.4T-A95B` is text-only under a custom Qwen3.8-Max License; the 27B variant is Apache 2.0 and hosted at $0.50/$3.00 per 1M (respan.ai).
- **Release / knowledge:** Released 2026-08-02 (llm-stats.com) / 2026-08-03 (aireleasetracker.com, codersera.com) — previewed July 19, 2026; knowledge cutoff not verified.
- **IDs:** `qwen/qwen3.8-max`, `qwen/qwen3.8-27b` (open); no Free-tier ID verified on OpenCode Zen.
- **Context window:** 1M tokens input / 131,072 max output (llm-stats.com provider table; flagship 1M per Alibaba release coverage; DeepInfra's open-checkpoint deployment is 256K).
- **Modalities:** text/image/video in (native vision-language per shortlyai.com/openrouter.ai; open 2.4T checkpoint text-only per respan.ai); audio via Qwen3.8-Omni-Flash sibling; text out; reasoning (flexible thinking control, `xhigh` default); tool calls; JSON mode.
- **Pricing (as of 2026-09-29):** Max: $2.00/M input, $6.00/M output, $0.25 cached (VentureBeat/Qwen release; matches Novita/Fireworks listings). 27B open: $0.094/$4.40 (openrouter.ai) or $0.50/$3.00 Alibaba-hosted.
- **Architecture:** 2.4T total / 95B active MoE (Max); 27B dense open variant (Apache 2.0); Flash-Next open MoE 125B/6B-active under qwen-community-1.0 (respan.ai).

### Raw benchmarks found

> The Aug 2026 headline rows below are **vendor-published by Alibaba**; since Sept 2026 independent rows exist (Artificial Analysis Index 45, BenchLM composite 71.44 #14/514) — noted per section. Coding rows ran inside Anthropic's Claude Code harness.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor; beats Opus 4.8 84.6 / Fable 5 84.6; GPT-5.6 Sol 88.8)
- OSWorld-Verified: **86.1%** (vendor; vs Fable 5 85.0, GPT-5.6 Sol 83.2)
- TerminalBench 3.0 (0902 refresh): **29.0** (blog.buildfastwithai.com, vendor-published delta)
- JobBench (0902): **64.0** (vendor-published delta); JobBench (benchlm.ai): **53.4%** — inconsistent, treat with care
- Tau3-Banking / GDPval-AA / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor; vs Sol 94.1)
- HLE: **43.6%** — last of the four flagships in vendor table (vendor)
- PaperBench: **93.0%** — best-in-table (vendor)
- IFBench: **82.8%** — best-in-table instruction following (vendor)
- Artificial Analysis Intelligence Index: **45** (independent; $5.41/task, ~190M output tokens at default effort, respan.ai × artificialanalysis.ai); BenchLM composite: **71.44/100, #14 of 514**; Omniscience: no verified public score found

Coding:

- SWE-bench Pro: **67.7%** (vendor; vs Fable 5 80.0, Sol 64.6, Opus 4.8 69.2)
- DeepSWE 1.1 (0902): **69.3%** (vendor-published delta); DeepSWE (benchlm.ai): **56.6%**
- QwenSWE-Bench V2 (0902): **70.0%** (in-house eval)
- Code Arena WebDev snapshot (qwen3.8-max-0902): **1681 Elo** vs Claude Opus 5 1687 (preliminary, per blog.buildfastwithai.com)
- LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window verified by spec; **MRCRv2: 92.9%** now measured (benchlm.ai multi-round retrieval, up to 1M) — previously unmeasured at research date; LongBench v2: **66.3%**.

Multimodal:

- MathVision: **95.2%**; LogicVista: **91.9%**; OSWorld-Verified: **86.1%** (vendor tables; emergent.sh); benchlm.ai now adds MMMU-Pro 82.3%, CharXiv 93.5%, OmniDocBench 1.5 92.1%, VideoMMMU 88.7%. Qwen3.8-27B LiveBench overall **75.3** (Reasoning 80.0, Coding 75.7, Math 86.2) (LiveBench 2026-06-25 release via shortlyai.com)

### Normalized scores (1–100)

- **Tool use: 85/100.** TB 2.1 86.6% + OSWorld-Verified 86.1% are elite even if vendor-run; capped because JobBench 53.4% (benchlm.ai vs vendor 64.0 delta) keeps agentic consistency unproven.
- **Reasoning: 82/100.** GPQA 92.6%, PaperBench 93.0%, independent AA Index 45; capped by HLE 43.6% (vendor-admitted last-place among flagships).
- **Context window: 90/100.** 1M window now with measured MRCRv2 92.9% (benchlm.ai); capped by LongBench v2 66.3%.
- **Multimodal: 88/100.** MathVision 95.2 / LogicVista 91.9 plus a native-vision 27B variant and Omni-Flash audio sibling; text-only output caps it; hosted Max vision rows now independently mirrored on benchlm.ai.
- **Coding: 82/100.** TB 2.1 86.6% and TB3 29.0 are good; capped by SWE-bench Pro 67.7% — 12 points behind Fable 5 on the hardest tier (vendor's own table).
- **Cost efficiency: 80/100.** $2/$6 per 1M undercuts US flagships ~3x on tokens but AA per-task cost ($5.41) nearly matches Opus 5.5 ($5.98) due to 190M output bloat at default reasoning effort — lands on the $2/$6 ≈ 80 band.
- **Overall Score: 85.4/100.** Mean of the five quality dims (85+82+90+88+82)/5 = 85.4. Best fit: cost-sensitive frontier-class multimodal work — now with independent replication (AA Index 45, BenchLM 71.44) backing the vendor table.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-29
- Method: fresh public web research (emergent.sh benchmark breakdown of Alibaba's Aug 2026 launch table, blog.buildfastwithai.com 0902 refresh, openrouter.ai, shortlyai.com LiveBench, respan.ai × artificialanalysis.ai index data, benchlm.ai); scores are normalized 1–100 interpretations, not official vendor scores. Reverified 2026-09-29: independent measurement now exists — AA Intelligence Index 45 ($5.41/task) and BenchLM 71.44/100 #14/514 replace "no independent index" caveat; MRCRv2 92.9% long-context row added (context score 88 → 90); release date corrected to 2026-08-02/03; 27B license confirmed Apache 2.0 with $0.50/$3.00 Alibaba-hosted rate; open weights shipped ~Aug 17 under custom license; cost efficiency recalibrated 85 → 80 ($2/$6 band + output-token bloat); overall 85 → 85.4 (mean of quality dims).
- Future sources: add a new file next to this one using the same headings.
