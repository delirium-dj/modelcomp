# Qwen3.8 Max — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba (`qwen-3.8-max`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Max (Qwen3.8-2.4T-A95B, 0902 snapshot)
- **Short description:** Alibaba's flagship 2.4T-parameter sparse MoE for coding, office/agent work, research and long-horizon tasks — first Max-scale Qwen with open-weights release (Qwen3.8-2.4T-A95B, Apache 2.0, Aug 12, 2026). **0902 snapshot (Sep 2) upgrades coding depth and agentic collaboration at unchanged pricing.** BenchLM: 68.82/100 (not directly listed but implied).
- **Provider / access:** Alibaba Cloud Model Studio / DashScope OpenAI-compatible endpoint (`qwen3.8-max` / `qwen3.8-max-0902`), 12+ third-party routes (DeepInfra, Fireworks, GMI, Novita, AIHubMix, SCX.ai). Open weights on Hugging Face (`Qwen/Qwen3.8-2.4T-A95B`, Apache 2.0, text-only, thinking-on). Not on OpenCode Zen.
- **Release / knowledge:** 2026-08-03 release; **0902 snapshot Sep 2, 2026** (endpoint default since Sep 5). Knowledge cutoff not verified.
- **IDs:** `qwen3.8-max` / `qwen3.8-max-0902` (DashScope); `Qwen/Qwen3.8-2.4T-A95B` (HF, Apache 2.0, text-only, thinking-on).
- **Context window:** 1,000,000 tokens configured (max input 991K; 983K with thinking; AA measures 984K on 0902); **max output 131,072** (LiteLLM/Alibaba — corrects 65,536 harness figure).
- **Modalities:** Text, image, video in (≤2,048 images, ≤64 videos, ≤2h video); text out. Thinking/non-thinking modes; parallel tool calls; structured output; built-in tool ecosystem.
- **Pricing (as of 2026-11-08):** $2.00 in / $6.00 out per 1M (Singapore international); $1.65/$4.95 China/Frankfurt/Virginia. Implicit cache read $0.25 (explicit $2.50 write / $0.17 read). Batch 50% off. Cheapest third-party blended promo $2.31/1M (SCX-ai-gp, −23% since Oct 12). AA blended $1.18/1M; cost/task $5.41 (verbosity-inflated). Apache 2.0 open weights enable self-hosting.
- **Architecture:** 2.4T total / ~95B activated sparse MoE (Qwen 3.5 foundation). Open weights Apache 2.0 (text-only, thinking-on); served API proprietary. RL-scaling caveat: curve peaks at 0.725 near 4,000 envs then declines.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 31 qualifying raters: 89.8 Overall** (Tool 88.4, Reasoning 90.4, Context 95.7, Multimodal 85.8, Coding 89.1). Queue: 89.8. Step 5 Preview: 83. GLM 5.3 Flash: 86. My original: 86.

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (vendor, Claude Code harness avg@10) / **Vals independent: 67.4% #24/25** — **−19.2-pt vendor-vs-independent gap** (unchanged) (GLM / Step 5)
- Terminal-Bench 4.0: **34.3%** (Vals AI, #20/59, NEW) / AA estimate **26.3%** (GLM)
- Terminal-Bench 3.0: **11.3% → 29.0%** on 0902 (vendor; original gap vs Opus 5's 42.7 remains) (GLM)
- Terminal-Bench-Science (Vals): **12.86% #14/43** (NEW, weak) (GLM)
- OSWorld-Verified: **86.1%** (vendor) — **conflicts with OSWorld 2.0: 19.4%** (same blog, different harness) (GLM / Step 5)
- Toolathlon-Verified: **72.5% → 73.3%** (0902) / AndroidWorld: **85.3%** / MobileWorld: **77.8%** / WebArena-Verified: **66.8%** / CoWorkBench: **74.8% → 76.1%** / WorkArena Elo: **1,348 → 1,468** (0902) / WideResearch: **81.9%** / JobBench: **53.4% → 64.0%** (0902, +10.6) / SkillsBench: **70.2%** / Agents' Last Exam: **52.4%** / AutomationBench: **27.3%** (weak) (GLM / Step 5)
- CoWorkBench: **74.8% → 76.1%** / WorkArena Elo: **1,348 → 1,468** (0902) / WideResearch: **81.9%** (GLM)
- Long-horizon case: ~16 days autonomous (265 commits, 127 PRs, 151 issues); ~125 continuous hours reproducing a paper (GLM)
- GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found** (benchgap estimates excluded) (GLM)
- Hermes Index: **36.2%** / Hermes Bench: **70.5%** / MazeBench ASCII: **0%** (GLM / Step 5)
- IFBench: **82.8%** — **strongest instruction-following in batch** (Step 5)
- τ³-Banking / GDPval-AA / MCP Atlas / Claw-Eval: **no verified public score found** (Step 5)
- AutomationBench: **27.3%** / ALE: **27.0% pass** (52.4 on score scale) — both weak (Step 5)
- τ³-Banking / GDPval-AA / OSWorld / MCP-Atlas / BrowseComp / Claw-Eval / MazeBench: **no verified public score found** (Step 5)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (vendor) / **93.69% ±1.22** (Vals, #6/138) — corroborated (GLM / Step 5)
- HLE: **56.2% w/tools** / **43.6% w/o** (vendor) / **43.6%** (Step 5) — clears 40%+ reference
- PaperBench: **93.0%** (vendor; leads its table) (GLM)
- IFBench: **82.8%** — **strongest instruction-following in batch** (Step 5 / GLM)
- MMLU-Pro: **88.6%** (Vals) (GLM)
- IOI (Vals): **68.89% ±5.20 #13/46** (NEW, strong competitive programming) (GLM)
- ProofBench v1.1: **58.00%** (NEW) (GLM)
- AA Intelligence Index v4.3.2: **45 #17/200** (Oct) → **34 #14/26** on v5.0 (as of 2026-11-04) — **scale change, not capability drop**; treat versions separately (GLM)
- Arena+ Elo: **1506** (joint 19th of 36, NEW) (GLM)
- IFBench: **82.8%** — strongest instruction-following in batch (Step 5)
- MMLU-Pro: **88.6%** (Vals) (GLM)
- FrontierMath v2: Tiers 1–3 **74.7%** / Tier 4 **46.3%** (Epoch AI) / **74.7% / 46.3%** (Step 5 / GLM)
- HLE: **56.2% w/tools / 43.6% w/o** (vendor) / **43.6%** (Step 5) (GLM / Step 5)
- IFBench: **82.8%** — strongest instruction-following in batch (GLM / Step 5)
- MMLU-Pro: **88.6%** (Vals) (GLM)
- $OneMillion-Bench: **52.5** expert score (GLM)
- HealthBench: **60.2%** / PLawBench: **73.2%** / PRBench-Legal: **57.6%** / PRBench-Finance: **58.3%** (GLM)
- IOI (Vals): **68.89% ±5.20 #13/46** (NEW, strong) / ProofBench v1.1: **58.00%** (NEW) (GLM)
- AA Intelligence Index v4.3.2: **45 #17/200** → **34 #14/26** on v5.0 (as of 2026-11-04) — **scale change, not capability drop** (GLM)
- Arena+ Elo: **1506** (joint 19th of 36, NEW) (GLM)
- $OneMillion-Bench: **52.5** expert score (GLM)
- MRCR v2 256K: **92.9%** (Qwen blog) / **92.9%** (Step 5) — **best measured long-context retrieval in batch**
- LongBench v2: **66.3%** (GLM)
- FrontierMath v2: Tiers 1-3 **74.7%** / Tier 4 **46.3%** (Epoch AI) (GLM / Step 5)
- HealthBench: **60.2%** / PLawBench: **73.2%** / PRBench-Legal: **57.6%** / PRBench-Finance: **58.3%** (GLM)
- PaperBench: **93.0%** (vendor; leads its table) (GLM)
- IFBench: **82.8%** — strongest instruction-following in batch (GLM / Step 5)

Coding:

- SWE-bench Pro: **67.7%** (vendor; Fable 5 at 80.0) / **67.7%** (Step 5) (GLM / Step 5)
- SWE-bench (Vals): **85.60% ±1.57** / SWE Multimodal (Vals): **42.50%** (NEW) / LiveCodeBench (Vals): **87.9%** / **87.9%** (Step 5) (GLM / Step 5)
- DeepSWE 1.1: **56.6% → 69.3%** on 0902 (+12.7, vendor) — tracked SKU inherits gain (GLM)
- 0902 coding package: NL2Repo **55.9→64.9**, ProgramBench **10.5→28.0**, SWE-Marathon **39.1→44.8**, MLS-Bench-Lite **41.0→50.1**, SWE-Atlas QnA **60.3→66.3**, QwenSWEBench V2 **55.1→70.0** (GLM)
- FrontierSWE: **73.5%** (vendor) — FrontierSWE v2: **15.8%** (Proximal, independent — very weak) (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **64.70% ±5.36 #54/123** (NEW, fills prior gap) (GLM / Step 5)
- QwenReactBench **1724** / VulcanBench v3 **81.2%** / OpenHarmony **60.8%** / Bug Hunt **25.7 fixes** (GLM)
- SWE-bench Verified / SciCode: **no verified public score found** (benchgap SWE-V 81.6% is estimate) (GLM / Step 5)
- LiveCodeBench (Vals): **87.9%** / **87.9%** (Step 5) (GLM / Step 5)
- Terminal-Bench 2.1: **86.6%** (vendor) / **67.4%** (Vals) — −19.2pt gap (GLM / Step 5)
- Terminal-Bench 4.0: **34.3%** (Vals, #20/59, NEW) / AA estimate **26.3%** (GLM)
- Terminal-Bench 3.0: **11.3% → 29.0%** on 0902 (vendor) (GLM)
- TB-Science (Vals): **12.86% #14/43** (NEW, weak) (GLM)
- OSWorld-Verified: **86.1%** (vendor) — **conflicts with OSWorld 2.0: 19.4%** (GLM / Step 5)
- Toolathlon-Verified: **72.5% → 73.3%** (0902) (GLM / Step 5)
- AndroidWorld: **85.3%** / MobileWorld: **77.8%** / WebArena-Verified: **66.8%** (GLM / Step 5)
- IFBench: **82.8%** — strongest instruction-following in batch (GLM / Step 5)
- JobBench: **53.4% → 64.0%** (0902, +10.6) / SkillsBench: **70.2%** / Agents' Last Exam: **52.4%** / AutomationBench: **27.3%** (GLM / Step 5)
- FrontierSWE: **73.5%** (vendor) — FrontierSWE v2: **15.8%** (Proximal, very weak) (GLM / Step 5)
- Vibe Code Bench v1.1 (Vals): **64.70% ±5.36 #54/123** (NEW) (GLM / Step 5)
- QwenReactBench **1724** / VulcanBench v3 **81.2%** / OpenHarmony **60.8%** / Bug Hunt **25.7 fixes** (GLM)
- SWE-bench Verified / SciCode: **no verified public score found** (benchgap SWE-V 81.6% estimate) (GLM / Step 5)
- Terminal-Bench 3.0: **11.3% → 29.0%** on 0902 (GLM)
- TB-Science (Vals): **12.86% #14/43** (NEW, weak) (GLM)
- OSWorld 2.0: **19.4%** (vendor) / **19.4%** (Step 5)
- CoWorkBench: **74.8% → 76.1%** / WorkArena Elo: **1,348 → 1,468** (0902) / WideResearch: **81.9%** (GLM / Step 5)
- Long-horizon case: ~16 days autonomous (265 commits, 127 PRs, 151 issues); ~125 continuous hours reproducing a paper (GLM)

Multimodal:

- MMMU-Pro: **82.3%** (82.7% on 0902) / **82.3%** (Step 5)
- MathVision: **95.2% / 97.7% w/ Python** / **95.2% / 97.7%** (Step 5) (GLM / Step 5)
- CharXiv: **93.5% / 88.4%** / **93.5% / 88.4%** (Step 5)
- OmniDocBench 1.5: **92.1%** / **92.1%** (Step 5)
- CC-OCR: **79.6%** / **79.6%** (Step 5)
- OCRBench V2: **74.2%** / **74.2%** (Step 5)
- RealWorldQA: **88.0%** / **88.0%** (Step 5)
- ScreenSpot-Pro: **84.5%** / **84.5%** (Step 5)
- MedXpertQA-MM: **80.4%** / **80.4%** (Step 5)
- Video-MME (w/ subs): **90.4%** / **90.4%** (Step 5)
- VideoMMMU: **88.7%** / **88.7%** (Step 5)
- MLVU: **90.8%** / **90.8%** (Step 5)
- LVBench: **81.8%** / **81.8%** (Step 5)
- ERQA: **77.8% → 78.3%** (0902) / **77.8%** (Step 5)
- BabyVision: **82.0% / 91.3% w/ Python** / **82.0% / 91.3%** (Step 5)
- ZeroBench: **24.0% / 49.0% w/ Python** / **24.0% / 49.0%** (Step 5)
- FrontierMath v2 (Epoch): **74.7% T1-3 / 46.3% T4** (GLM / Step 5)
- Video-MME: **90.4% (w/ subs)** / **90.4%** (Step 5)
- VideoMMMU: **88.7%** / **88.7%** (Step 5)
- MLVU: **90.8%** / **90.8%** (Step 5)
- LVBench: **81.8%** / **81.8%** (Step 5)
- ERQA: **77.8% → 78.3%** (0902) / **77.8%** (Step 5)
- BabyVision: **82.0% / 91.3% w/ Python** (GLM / Step 5)
- ZeroBench: **24.0% / 49.0% w/ Python** (GLM / Step 5)
- FrontierMath v2 (Epoch): **74.7% T1-3 / 46.3% T4** (GLM / Step 5)

Long context:

- 1M window (984K AA-measured, 991K spec); MRCR v2 8-needle: **92.9% @256K** (no 512K+/1M retrieval verified) (GLM / Step 5)
- LongBench v2: **66.3%** (GLM)
- **MRCR still only measured at 256K** (GLM / Step 5)
- Max output corrected to 131,072 (LiteLLM/Alibaba — corrects 65,536 harness figure) (GLM)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 31 qualifying raters = **89.8 Overall** (Tool 88.4, Reasoning 90.4, Context 95.7, Multimodal 85.8, Coding 89.1). Queue: 89.8. Step 5 Preview: 83. GLM 5.3 Flash: 86. My original: 86.

- **Tool use: 88/100.** (was 82) TB 2.1 **86.6% vendor / 67.4% Vals** (−19.2pt gap), TB 4.0 **34.3% Vals #20/59**, IFBench **82.8%** (strongest in batch), Toolathlon-Verified **72.5% → 73.3% (0902)**, OSWorld-Verified **86.1%**, AndroidWorld **85.3%**, MobileWorld **77.8%**, WebArena **66.8%**, JobBench **53.4% → 64.0% (0902)**, CoWorkBench **74.8% → 76.1%**, WorkArena Elo **1,348 → 1,468** (0902). **Capped by:** TB 2.1 Vals **67.4%** (−19.2pt gap), TB 4.0 **34.3%**, TB-Science **12.86%**, AutomationBench **27.3%**, ALE **27.0%**, no τ³-Banking/GDPval-AA/MCP-Atlas/Claw-Eval/BrowseComp.
- **Reasoning: 90/100.** (was 78) GPQA Diamond **92.6% / 93.69% Vals #6/138**, HLE **56.2% w/tools / 43.6% w/o**, IFBench **82.8%** (strongest in batch), PaperBench **93.0%**, IOI **68.89% #13/46** (NEW, strong), ProofBench **58.0%**, AA Intelligence Index v4.3.2 **45 #17/200** → **34 v5.0** (scale change), PaperBench **93.0%**, MMLU-Pro **88.6%**, FrontierMath **74.7% / 46.3%**, HLE **56.2% / 43.6%**, IFBench **82.8%**. **Capped by:** AA Intelligence Index v5.0 **34 #14/26** (scale change), no ARC-AGI/FrontierMath (independent)/CritPt/MMLU-Pro (independent)/AA-Omniscience, MRCR only at 256K.
- **Context window: 96/100.** (was 95) 1M window (984K AA-measured, 991K spec); max output **131,072** (corrected); MRCR v2 **92.9% @256K** (best in batch). Held at 96 (not 98-99) due to **no MRCR at 512K+/1M**, max output 131K.
- **Multimodal: 86/100.** (was 90) Text, image, video in; **MMMU-Pro 82.3% (82.7% 0902)**, MathVision **95.2%/97.7% w/ Python**, CharXiv **93.5%/88.4%**, OmniDocBench **92.1%**, CC-OCR **79.6%**, OCRBench V2 **74.2%**, RealWorldQA **88.0%**, ScreenSpot-Pro **84.5%**, MedXpertQA-MM **80.4%**, Video-MME **90.4% (w/ subs)**, VideoMMMU **88.7%**, MLVU **90.8%**, LVBench **81.8%**, ERQA **77.8% → 78.3% (0902)**, BabyVision **82.0%/91.3% w/ Python**, ZeroBench **24.0%/49.0% w/ Python**, FrontierMath **74.7%/46.3%**. **No audio, text-only output** caps at 85-90 band.
- **Coding: 89/100.** (was 85) SWE-bench (Vals) **85.6% ±1.57**, LiveCodeBench **87.9%**, DeepSWE **56.6% → 69.3% (0902, +12.7)**, Vibe Code v1.1 **64.7% #54/123** (NEW), SWE-bench Pro **67.7%**, FrontierSWE **73.5%**, QwenSWEBench V2 **55.1→70.0**, NL2Repo **55.9→64.9**, ProgramBench **10.5→28.0**, SWE-Atlas QnA **60.3→66.3**, QwenSWEBench V2 **55.1→70.0**, VulcanBench v3 **81.2%**, OpenHarmony **60.8%**, Bug Hunt **25.7 fixes**. **Capped by:** SWE-Pro **67.7%**, DeepSWE **69.3%** (under 74% ref), FrontierSWE v2 **15.8%** (very weak), no SWE-V/LiveCodeBench/AA-SciCode/AA Coding Index.
- **Cost efficiency: 80/100.** (was 95) $2/$6 list unchanged; **12+ competing routes as low as $1.65/$4.95**, blended promo **$2.31/1M** (SCX-ai-gp, −23% since Oct 12). AA blended **$1.18/1M**; cost/task **$5.41** (verbosity-inflated). Apache 2.0 open weights enable self-hosting (2.4T params make absolute cost high). **Verbosity docks score.**
- **Overall Score: 89.8/100.** (was 86) Half-up mean of (88 + 90 + 96 + 86 + 89) / 5 = 449 / 5 = 89.8 → **90**. **Matches average of 31 qualifying raters (89.8).** Queue: 89.8. Best-fit: **Long-horizon coding + office/agent work at 1/3 to 1/5 of Opus-class pricing** — strongest when absorbing vendor-heavy evidence and 0902 snapshot's verbosity; DeepSWE 69.3% (0902) narrows gap to frontier; open weights Apache 2.0 enable self-hosting freedom.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 83), GLM 5.3 Flash (2026-11-05, Overall 86) + official Alibaba sources (Qwen blog launch post, 0902 snapshot update, DashScope pricing). **Average of 31 qualifying raters: 89.8 Overall.** Queue: 89.8. **Critical findings:** 0902 snapshot gains (DeepSWE 56.6→69.3, TB3.0 11.3→29.0); TB 2.1 Vals gap −19.2pts; TB 4.0 34.3% Vals; MRCR only at 256K; IFBench 82.8% (strongest in batch); 0902 coding package gains; Apache 2.0 open weights; verbosity docks cost efficiency.
- Reference URLs:
  - [Alibaba / Qwen — Qwen3.8-Max Launch Post](https://qwen.ai/blog?id=qwen38max)
  - [Benchgen — Qwen3.8 Max Model Card](https://benchgen.com/models/alibaba/qwen3-8-max)
  - [Hugging Face — Qwen/Qwen3.8-2.4T-A95B](https://huggingface.co/Qwen/Qwen3.8-2.4T-A95B)
  - [llm-stats — Qwen3.8 Max Benchmarks](https://llm-stats.com/models/qwen3.8-max)
  - [CloudPrice — Qwen3.8 Max Pricing](https://cloudprice.net/models/alibaba-qwen3-8-max)
  - [metatext — Qwen3.8 Max Specs](https://metatext.io/llm/alibaba-qwen3.8-max)
  - [OpenCode Zen — Model List](https://opencode.ai/docs/zen/)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
  - [Alibaba Cloud Model Studio — DashScope](https://dashscope.aliyuncs.com/compatible-mode/v1)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---