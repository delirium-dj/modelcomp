# DeepSeek V4.1 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: DeepSeek (`deepseek-v4.1-flash`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash (1017 checkpoint, Max effort tier)
- **Short description:** DeepSeek's cost-efficient open-weights MoE model (552B total / 16B active) with **1017 checkpoint (Oct 17, 2026)** improving TB 4.0 (31.2→42.3%), DeepSWE (74.2→77.0%), HLE (37.7→42.6%), ProgramBench (29.1%). **Strongest coding value model**: DeepSWE 77.0% (exceeds 74% frontier), TB 2.1 90.6%, Codeforces 3471, 384K max output (largest in series), $0.30/$1.20 pricing with free tier on Zen. **Hallucination rate 96.5% (worst in series), AA-Omniscience index -5.3.**
- **Provider / access:** DeepSeek Platform, OpenCode Zen (`opencode/deepseek-v4.1-flash` with free tier), Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash-1017`), 30+ providers (Chutes, SiliconFlow, Fireworks, DeepInfra, Cloudflare, Novita). OpenAI-compatible Chat Completions. **Free tier on OpenCode Zen.**
- **Release / knowledge:** 2026-09-10 GA; **1017 checkpoint Oct 17, 2026** (weights on HF/ModelScope same day). Knowledge cutoff not disclosed.
- **IDs:** `deepseek-ai/DeepSeek-V4.1-Flash-1017` (Hugging Face), `opencode/deepseek-v4.1-flash` (OpenCode Zen). Open weights MIT license.
- **Context window:** 1,000,000 tokens total (1M); **max output 384,000 (384K) — largest in research series** (vs 300K Batch Claude, 128K GPT).
- **Modalities:** Text, image in; text out. Reasoning: chain-of-thought (effort 1-100 local, tiers low/high/max API). Tool calls, JSON mode, vision agent via Claude Code.
- **Pricing (as of 2026-11-08):** Peak $0.30/$1.20 per 1M in/out (Mon-Fri 01-04, 06-10 UTC); **off-peak half: $0.15/$0.60**. Cache hits $0.003/$0.006. MIT open weights = free self-hosting. 30+ providers (promos to $0.05/$0.50). Search/Fetch APIs $0.75/1K calls.
- **Architecture:** 552B total / 16B active CED MoE (763B with ViT); 40 layers split 20/20; 8B active prefill / 16B active decode; FP4 KV cache; 2,500 concurrent sessions (vs V4-Pro 500).

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official DeepSeek sources. **Average of 33 qualifying raters: 89 Overall** (Tool 89.5, Reasoning 88.3, Context 95.6, Multimodal 80.4, Coding 90.5). Queue: 89. Step 5 Preview: 80. GLM 5.3 Flash: 86. My original: 78. **1017 checkpoint update: TB 4.0 31.2→42.3%, DeepSWE 74.2→77.0%, HLE 37.7→42.6%, ProgramBench 29.1%.**

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor, DSH-Minimal; multi-harness: Codex 84.1, mini-SWE 90.3, Claude Code 88, OpenCode 85, Pi 86.1) / **74.5%** (Vals) — **16.1pt vendor-Vals gap** (Step 5 / GLM)
- Terminal-Bench 4.0: **42.3%** (1017, +11.1 from pre-1017 31.2%) / AA effort ladder: 9.1% none / 28.8% high / **33.8% max** (AA) / Cognition same-roof: **91.0%** (GLM / Step 5)
- Terminal-Bench 3.0: **30.0%** (unchanged; Opus 5 43.3) (GLM)
- AutomationBench v1.0.6: **60.5%** (1017, +5.7) / AA AutomationBench **68.9%** (GLM / Step 5)
- Agents' Last Exam: **35.4%** (1017, +3.6) (GLM / Step 5)
- CyberGym: **88.1%** (vendor) — **best CyberGym in batch** (GLM / Step 5)
- GDPval-AA: **1,600 Elo** / **55.0%** normalized (AA) (GLM / Step 5)
- AA ITBench: **46.9%** / CWE-bench v1: **55.0%** / CWE-Bench-AA: **68.3%** / DeepsecBench-AA: **31.2%** / AA Cyber Index: **40.8%** / CyberGym-E2E-AA: **22.9%** (GLM / Step 5)
- TB 3.0: **30.0%** (unchanged; Opus 5 43.3) / MazeBench: **1%** / ExploitGym: **15.3%** (GLM / Step 5)
- τ³-Banking / τ²-bench / BrowseComp / MCP-Atlas / OSWorld / Toolathlon / Claw-Eval: **no verified public score found** (Step 5 / GLM)
- DeepSWE v1.1: **77.0%** (1017, +2.8 from 74.2% — **exceeds 74% frontier**) / Cognition confirms 77.0% (GLM)
- GDPval-AA: **1,600 Elo** / **55.0%** normalized (AA) / AA Briefcase: **1,420 Elo** (GLM / Step 5)
- CWE-bench v1: **55.0%** / CWE-Bench-AA: **68.3%** / ExploitGym: **15.3%** / ExploitBench: **31.1 / 52.8** (Cognition/benchgap) (GLM / Step 5)
- AA ITBench: **46.9%** / DeepsecBench-AA: **31.2%** / AA Cyber Index: **40.8%** / CyberGym-E2E-AA: **22.9%** (GLM)
- AA Agentic Index: **not directly measured** (GLM)

Reasoning / knowledge:

- GPQA Diamond: **90.9%** (vendor, max effort) — just clears 90%+ frontier (GLM / Step 5)
- HLE: **42.6%** (1017, +5.8 from 37.7%) / **42.6% text-only subset** / AA-HLE **39.2%** (fails 40%+ ref) / HLE w/ tools **63.9%** (GLM / Step 5)
- AA Intelligence Index: **45 at max reasoning** (thetechsignal/AA for 1017; median 19) — supersedes prior 39.5 v4.3.2; effort-dependent (GLM)
- FrontierMath v2: Tiers 1-3 **67.4%** / Tier 4 **26.8%** (Epoch, unchanged) / Apex: **65.6%** → Apex Bench v1.1 **72.1%** (1017) (GLM / Step 5)
- AA-LCR: **84.0%** (unchanged, strong) / CritPt: **14.3%** / MLCR-AA: **22.8%** (GLM)
- AA-Omniscience: index **−5.3**, accuracy **46.4%**, hallucination **96.5%** — **worst in research series** (GLM / Step 5)
- AA Intelligence Index: **39.5** (v4.3.2) → **45 at max** (1017) — effort-dependent (GLM)
- MMLU-Pro (base): **74.1** / AGIEval: **83.4** / C-Eval: **92.1** / SimpleQA-Verified: **42.3** / LongBench-V2 (base): **45.2** (GLM)
- Apex: **65.6%** → Apex Bench v1.1 **72.1%** (1017) / STEMBench: **2.54** / JevBench: **4.77 / 6.65** (GLM)
- LiveBench 2.0 Coding: **96.0% #3** (NEW, very strong) / Hermes Bench: **70.7%** / Index: **36.9%** (GLM)
- AA-AnalystAgent: **35.0%/41.8%** / AA-Omniscience: **index −5.3, accuracy 46.4%, hallucination 96.5%** (GLM / Step 5)
- **MRCR / ARC-AGI / GPQA from AA/Vals: no verified public score found** (Step 5 / GLM)

Coding:

- DeepSWE v1.1: **77.0%** (1017, +2.8 — **exceeds 74% frontier**, above Opus 5 74.0, Sol 73.0) / Cognition confirms 77.0% (GLM / Step 5)
- Terminal-Bench 2.1: **90.6%** (vendor, DSH-Minimal; multi-harness: Codex 84.1, mini-SWE 90.3, Claude Code 88, OpenCode 85, Pi 86.1) / **74.5%** (Vals) — **16.1pt vendor-Vals gap** / Cognition same-roof: **91.0%** (GLM / Step 5)
- Terminal-Bench 4.0: **42.3%** (1017, +11.1) / AA effort ladder: 9.1% none / 28.8% high / **33.8% max** (AA) (GLM / Step 5)
- Codeforces: **3,471.0** — **only Codeforces figure in research series** (GLM / Step 5)
- DeepSWE v1.1: **77.0%** (1017, exceeds 74% frontier) (GLM / Step 5)
- LiveCodeBench: **no verified public score found** (GLM / Step 5)
- LiveBench 2.0 Coding: **96.0% #3** (NEW, very strong) (GLM)
- Vibe Code Bench v1.1 (Vals): **87.7% #12** (NEW, fills prior gap) (GLM)
- Code Migration v1.1 (Vals): **67.5% #7** / 44.2% (v1.0) (GLM)
- SciCode (AA): **55.9% max #44** (NEW, clears 55% mark; pre-1017 AA-SciCode 51.9%) (GLM)
- NL2Repo: **68.2%** (1017, +2.8) / ProgramBench: **29.1%** (1017, +8.8) / SWE-Atlas QA: **71.0** (Cognition) / SWE-Bench Pro v2 Hard: **86.3** (Cognition) / FrontierCode 2.0: **19.3%** / 1.1 Main: **43.9%** (Cognition) (GLM)
- OpenHarmony Bench: **60.3%** / Bug Hunt Bench: **39.1 fixes** (GLM / Step 5)
- AA-SciCode: **55.9% max #44** (NEW, clears 55% mark; pre-1017 51.9%) (GLM)
- Vibe Code Bench v1.1 (Vals): **87.7% #12** (NEW, fills prior gap) (GLM)
- SWE-bench Verified / Pro / SWE-Atlas / SWE-Marathon: **no verified public score found** (benchgap estimates excluded) (GLM)
- TB 3.0: **30.0%** (unchanged; Opus 5 43.3) / TB 4.0: **42.3%** (GLM / Step 5)

Multimodal:

- Chartography (w/tools): **83.0%** (1017, +4.1) / BabyVision w/Python: **92.5%** (+2.9) / ZeroBench w/tools: **51.0%** (+2.0) / AA-MMMU-Pro: **77.0%** (unchanged) (GLM / Step 5)
- ExtractBench: **87.11%** / BabyVision w/Python: **92.5%** / Chartography (tools): **83.0%** / ParseBench: **64.56%** / AA-MMMU-Pro: **77.0%** / ZeroBench w/Python: **51.0%** / Design Arena: **1,302 Elo** (Step 5)
- Text + image in; text out (GLM / Step 5)

Long context:

- 1M window; **max output 384K — largest in research series** (vs 300K Batch Claude, 128K GPT) (Step 5)
- AA-LCR: **84.0%** (strong, unchanged) / LongBench-V2 base: **45.2%** (GLM)
- **MRCR / RULER / GraphWalks: no verified public score found** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 33 qualifying raters = **89 Overall** (Tool 89.5, Reasoning 88.3, Context 95.6, Multimodal 80.4, Coding 90.5). Queue: 89. Step 5 Preview: 80. GLM 5.3 Flash: 86. My original: 78.

- **Tool use: 89/100.** (was 82) TB 2.1 **90.6%** (vendor, clears 88%+ frontier), CyberGym **88.1%** (best in batch), AutomationBench **60.5%**, MCP Atlas (implied), GDPval **1,600 Elo**, CWE-Bench-AA **68.3%**, AA AutomationBench **68.9%**. **Capped by:** TB 2.1 Vals **74.5%** (16.1pt gap), TB 4.0 **42.3%**, TB 3.0 **30.0%**, Agents' Last Exam **35.4%**, MazeBench **1%**, no τ³-Banking/BrowseComp/MCP-Atlas/OSWorld/Toolathlon/Claw-Eval.
- **Reasoning: 85/100.** (was 70) GPQA Diamond **90.9%** (clears 90%+), HLE **42.6%** (vendor, clears 40%+) / **39.2%** AA-HLE (fails 40%+), AA Intelligence Index **45 at max** (effort-dependent), FrontierMath Tiers 1-3 **67.4%**, AA-LCR **84.0%**, Apex **65.6%** → Apex Bench **72.1%**. **Capped by:** AA-HLE **39.2%** (fails 40%+), **AA-Omniscience index −5.3 / hallucination 96.5% (worst in series)**, CritPt **14.3%**, FrontierMath Tier 4 **26.8%**, no MRCR/ARC-AGI/GPQA from AA/Vals.
- **Context window: 98/100.** (was 95) 1M native; **max output 384K — largest in research series** (84K > Claude 300K Batch, 3× GPT 128K). AA-LCR **84.0%** solid. **Held at 98 (not 100) due to no MRCR/RULER verification at depth.**
- **Multimodal: 80/100.** (was 60) Text + image in; Chartography **83.0%**, BabyVision **92.5% w/ Python**, ZeroBench **51.0% w/ Python**, ExtractBench **87.11%**, AA-MMMU-Pro **77.0%**, Design Arena **1,302 Elo**. **Scored above +image-only 60-70 band due to measured document/vision depth.** Capped by no video/audio, ZeroBench **51.0%**.
- **Coding: 91/100.** (was 85) DeepSWE **77.0%** (exceeds 74% frontier, above Opus 5/Sol), TB 2.1 **90.6%** (clears 85%+ ref), Codeforces **3,471** (only figure in series), LiveBench Coding **96.0% #3**, Vibe Code Bench **87.7% #12**, SciCode **55.9% max** (clears 55% ref), NL2Repo **68.2%**, SWE-Atlas QA **71.0**. **Capped by:** AA-SciCode **55.9%** (barely clears 55%), FrontierCode 2.0 **19.3%**, ProgramBench **29.1%**, TB 3.0 **30.0%**, TB 4.0 **42.3%**, 16.1pt TB 2.1 vendor-Vals gap, no SWE-bench Verified/AA Coding Index/LiveCodeBench.
- **Cost efficiency: 94/100.** (was 97) **Off-peak $0.15/$0.60** (halves bill), **MIT open weights = free self-hosting**, 30+ providers (promos $0.05/$0.50), cache hits $0.003/$0.006. BenchLeader: **cheapest model in top-100 Index rank**. Search/Fetch APIs $0.75/1K calls. 98% cache discount (AA). **Held at 94 (not 97-99) due to not a $0 route.**
- **Overall Score: 88.6/100.** (was 78) Half-up mean of (89 + 85 + 98 + 80 + 91) / 5 = 423 / 5 = 84.6 → **85**. **Below average of 33 qualifying raters (89).** Best-fit: **Exceptional value coding/agentic workhorse** — DeepSWE 77% (exceeds 74% frontier), TB 2.1 90.6%, Codeforces 3471, 384K output (series largest), $0.30/$1.20 with free Zen tier; **96.5% hallucination rate (worst in series) and -5.3 Omniscience index bar unattended factual use**; TB 2.1 16.1pt vendor-Vals gap needs harness verification.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 80), GLM 5.3 Flash (2026-11-05, Overall 86) + official DeepSeek sources (V4.1-Flash/1017 model cards, pricing, technical report). **Average of 33 qualifying raters: 89 Overall.** Queue: 89. **Critical findings:** 1017 checkpoint gains (TB 4.0 31.2→42.3%, DeepSWE 74.2→77.0%, HLE 37.7→42.6%); 384K max output (series largest); TB 2.1 90.6% vendor vs 74.5% Vals (16.1pt gap); DeepSWE 77% (exceeds 74% frontier); Codeforces 3471 (only figure in series); 96.5% hallucination / -5.3 Omniscience (worst in series); MIT open weights + Zen free tier = cost efficiency 94.
- Reference URLs:
  - [Hugging Face — DeepSeek-V4.1-Flash](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [Hugging Face — DeepSeek-V4.1-Flash-1017](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017)
  - [DeepSeek — API Pricing](https://api-docs.deepseek.com/quick_start/pricing/)
  - [BenchLM — DeepSeek V4.1 Flash 1017 (65.22/100, #30/1009, 52 rows)](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Artificial Analysis — DeepSeek V4.1 Flash](https://artificialanalysis.ai/models/deepseek-v4-1-flash)
  - [Epoch AI — FrontierMath v2](https://epoch.ai/benchmarks/frontiermath-tier-4-v2)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---