# Qwen3.8-Max — findings by GLM 5.3 Flash

- Source: Alibaba Cloud / Qwen Team (`qwen3.8-max`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Re-researched 2026-11-05 (prior passes 2026-10-08, 2026-10-11, 2026-10-16): the tracked
> SKU now maps to the **0902 snapshot** (Sept 2 post-training update), whose vendor-measured
> coding gains (DeepSWE 56.6→69.3, TB3.0 11.3→29.0) and new independent Vals rows
> (TB 4.0 34.3%, Vibe v1.1 64.7%, IOI 68.9%) move Coding 82→84, Tool use 87→88,
> Reasoning 84→85 and Cost 74→75. Overall 84.8→85.6.

## Model card

- **Name:** Qwen3.8-Max (also written Qwen 3.8-Max; "0902" API snapshot tracked by Artificial Analysis since 2026-09-05)
- **Short description:** Alibaba's flagship 2.4T-parameter sparse MoE for coding, office/agent work, research and long-horizon tasks — the first Max-scale Qwen with an open-weights release (Qwen3.8-2.4T-A95B, Aug 12, 2026). The 0902 snapshot (2026-09-02) upgrades coding depth and agentic collaboration at unchanged pricing.
- **Provider / access:** Alibaba Cloud Model Studio / DashScope OpenAI-compatible endpoint (`https://dashscope.aliyuncs.com/compatible-mode/v1`), IDs `qwen3.8-max` / `qwen3.8-max-0902`; now also on 12+ third-party routes (LiteLLM): DeepInfra, Fireworks, GMI, Novita, AIHubMix, SCX.ai ($1.65–$2.23 in) — several serving the open weights at 256K context. Not on OpenCode Zen.
- **Release / knowledge:** Released August 3, 2026; 0902 snapshot September 2, 2026 (endpoint default since 2026-09-05). Knowledge cutoff not verified in reviewed sources.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (DashScope); open weights `Qwen/Qwen3.8-2.4T-A95B` (HF).
- **Context window:** 1,000,000 tokens configured (max input 991K; 983K with thinking; AA measures 984K on 0902); **max output 131,072** (LiteLLM/Alibaba — corrects the 65,536 harness figure from the prior pass; reasoning budget up to 262K).
- **Modalities:** Text + image + video in (≤2,048 images, ≤64 videos, ≤2h video); text out. Thinking and non-thinking modes; parallel tool calls; structured output; built-in tool ecosystem.
- **Pricing (as of 2026-11-05):** unchanged — $2.00 in / $6.00 out per 1M (Singapore international; $1.65/$4.951 China/Frankfurt/Virginia); implicit cache read $0.25 (explicit $2.50 write / $0.17 read); batch 50% off; cheapest third-party blended promo $2.31/1M (Scx-ai-gp, −23% since Oct 12). AA blended $1.18/1M; cost per Index task $5.41 (verbosity-inflated).
- **Architecture:** 2.4T total / ~95B activated sparse MoE (Qwen 3.5 foundation). Open weights Qwen3.8-2.4T-A95B (custom Qwen license, text-only, thinking-on); served API proprietary. RL-scaling caveat from the launch report: curve peaks at 0.725 near 4,000 environments then declines.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (Qwen blog, vendor, Claude Code harness avg@10) — **Vals independent: 67.4%** (#24/25), a −19.2-pt vendor-vs-independent gap (unchanged)
- Terminal-Bench 4.0: **34.3%** (Vals AI, #20 of 59 — NEW; AA estimate 26.3%)
- Terminal-Bench 3.0: **11.3% → 29.0%** on 0902 (vendor; original gap vs Opus 5's 42.7 remains)
- Terminal-Bench-Science (Vals): **12.86%** (#14 of 43 — weak, NEW)
- OSWorld-Verified: **86.1%** (vendor) — conflicts with OSWorld 2.0 **19.4%** (same blog, different harness)
- Toolathlon-Verified: **72.5% → 73.3%** (0902); AndroidWorld **85.3%**; MobileWorld **77.8%**; WebArena-Verified **66.8%**
- JobBench: **53.4% → 64.0%** (0902, +10.6); SkillsBench **70.2%**; Agents' Last Exam **52.4%** (score) / 27.0% (pass); AutomationBench **27.3%** (weak)
- CoWorkBench **74.8% → 76.1%**; WorkArena Elo **1348 → 1468** (0902); WideResearch **81.9%**
- Long-horizon case: ~16 days autonomous (265 commits, 127 PRs, 151 issues); ~125 continuous hours reproducing a paper
- GDPval-AA / MCP Atlas / Claw-Eval: no verified public score found (benchgap estimates excluded); Hermes Index **36.2%** / Hermes Bench **70.5%**; MazeBench ASCII **0%**

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor) / **93.69% ±1.22** (Vals, #6 of 138) — corroborated
- HLE: **56.2% with tools** / **43.6%** without (vendor)
- PaperBench: **93.0%** (vendor; leads its table)
- IFBench: **82.8%**; MMLU-Pro: **88.6%** (Vals)
- IOI (Vals): **68.89% ±5.20** (#13 of 46 — NEW, strong competitive programming); ProofBench v1.1: **58.00%** (NEW)
- Artificial Analysis Intelligence Index: **45, #17/200** on v4.3.2 (Oct) → **34, #14 of 26** on v5.0 (as of 2026-11-04, Ridge) — scale change, not a capability drop; treat versions separately
- Arena+ Elo: **1506** (joint 19th of 36, NEW)

Coding:

- SWE-bench Pro: **67.7%** (vendor; Fable 5 at 80.0)
- SWE-bench (Vals): **85.60% ±1.57**; SWE-bench Multimodal (Vals): **42.50%** (NEW); LiveCodeBench (Vals): **87.9%**
- DeepSWE 1.1: **56.6% → 69.3%** on 0902 (+12.7, vendor) — the tracked SKU inherits the gain
- 0902 coding package (vendor): NL2Repo 55.9→64.9, ProgramBench 10.5→28.0, SWE-Marathon 39.1→44.8, MLS-Bench-Lite 41.0→50.1, SWE-Atlas QnA 60.3→66.3, QwenSWEBench V2 55.1→70.0
- FrontierSWE: **73.5%** (vendor) — FrontierSWE v2: **15.8%** (Proximal, independent — very weak)
- Vibe Code Bench v1.1 (Vals): **64.70% ±5.36** (#54 of 123 — NEW, fills the prior gap)
- QwenReactBench **1724**; VulcanBench v3 **81.2%**; OpenHarmony **60.8%**; Bug Hunt **25.7**
- SWE-bench Verified / SciCode: no verified public score found (benchgap SWE-V 81.6% is an estimate)

Long context:

- 1M window (984K AA-measured, 991K spec); MRCR v2 8-needle: **92.9%** @256K (no 512K+/1M retrieval verified); LongBench v2: **66.3%**

Multimodal:

- MMMU-Pro **82.3%** (82.7% on 0902); MathVision **95.2%**/**97.7%** w/ Python; CharXiv **93.5%**/**88.4%**; OmniDocBench 1.5 **92.1%**; CC-OCR **79.6%**; OCRBench V2 **74.2%**; RealWorldQA **88.0%**; ScreenSpot-Pro **84.5%**; MedXpertQA-MM **80.4%**; Video-MME **90.4%** (w/ subs); VideoMMMU **88.7%**; MLVU **90.8%**; LVBench **81.8%**; ERQA **77.8% → 78.3%** (0902); BabyVision **82.0%**/**91.3%** w/ Python; ZeroBench **24.0%**/**49.0%** w/ Python; FrontierMath v2 (Epoch): **74.7%** T1–3 / **46.3%** T4

### Normalized scores (1–100)

- **Tool use: 88/100.** CHANGED from 87 — TB 4.0 34.3% (Vals, #20/59) and the 0902 agent gains (JobBench +10.6, WorkArena +120 Elo, Toolathlon 73.3) add measured breadth; the Vals TB2.1 gap (67.4 vs 86.6) and 27.3% AutomationBench still cap it below cross-checked frontier agents.
- **Reasoning: 85/100.** CHANGED from 84 — new Vals IOI 68.9% (#13/46) and ProofBench 58% add independent strength alongside GPQA 92.6/93.7 and PaperBench 93.0; AA v5.0's 34 is a scale rebase, docked accordingly rather than read as decline.
- **Context window: 93/100.** Unchanged — 1M window (991K spec / 984K measured), max output corrected to 131,072; MRCR still only measured at 256K.
- **Multimodal: 78/100.** Unchanged — image+video in with the richly corroborated vision suite; no audio, text-only out; SWE-bench Multimodal 42.5% (Vals) is the one new weak row.
- **Coding: 84/100.** CHANGED from 82 — the tracked 0902 snapshot's vendor-measured DeepSWE 69.3% (+12.7) and QwenSWEBench V2 70.0 lift the band, corroborated by Vals SWE-V 85.6% and the new Vibe v1.1 64.7%; SWE-bench Pro 67.7% and FrontierSWE v2 15.8% still hold it below the 2026 frontier coding class.
- **Cost efficiency: 75/100.** CHANGED from 74 — list unchanged ($2/$6), but 12+ competing routes now price as low as $1.65/$4.95 and the blended promo hit $2.31; verbosity ($5.41/task) still docks it.
- **Overall Score: 86/100.** (88 + 85 + 93 + 78 + 84) / 5 = 428/5 = 85.6 → 86 (was 84.8). Best fit: long-horizon coding + office/agent work at a third to a fifth of Opus-class pricing — strongest when you can absorb the vendor-heavy evidence base and the 0902 snapshot's verbosity.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-05 (re-research pass; prior 2026-10-16)
- Method: public internet re-research (3 web searches: Alibaba Cloud Model Studio pricing/model pages (updated Nov 2/11), LiteLLM 12-provider price table, Ridge/AA v5.0 reading, Vals AI model page (TB4.0, Vibe v1.1, IOI, SWE-Multimodal, ProofBench), datastudios/DataCamp 0902 delta tables, benchgap measured-vs-estimated screen, Nikkei/MarkTechPost launch coverage); conflicts kept inline (TB2.1 86.6 vs 67.4, OSWorld 86.1 vs 19.4, AA index scale v4.3.2→v5.0); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
