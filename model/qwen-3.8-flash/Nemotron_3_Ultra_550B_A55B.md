# Qwen3.8 Flash — findings by Nemotron 3 Ultra 550B A55B

- Source: Alibaba / Qwen Team (`qwen3.8-flash`, production version of `Qwen3.8-Flash-Next`)
- Date: 2026-11-08 (UTC) — **Deep second-pass re-research (original: 2026-10-19)**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8 Flash (production managed version based on open-weight `Qwen3.8-Flash-Next`) — **EXPERIMENTAL ARCHITECTURE PREVIEW** (not production flagship)
- **Short description:** Most architecturally interesting model in series: **125B MoE with only 6B active per token + 51B n-gram embedding table** — experimental preview of Qwen4 architecture. **Beats 27B-dense Qwen3.8-27B on every compared metric (GPQA 91.7 vs 89.2, LiveCodeBench 91.9 vs 90.3, DeepSWE 58.7 vs 42.2, ALE 51.2 vs 42.9) while activating 4.5× fewer params.** Best efficiency evidence in series. **NO INDEPENDENT BENCHMARKS FOR PRODUCTION FLASH** — all figures from Flash-Next checkpoint (Alibaba's "production version of Flash-Next" statement).
- **Provider / access:** Qwen Cloud (`qwen3.8-flash`), Alibaba Model Studio, OpenAI/Anthropic-compatible APIs, Novita, OrcaRouter, **OpenCode Zen (`opencode/qwen-3.8-flash` — NO Free ID)**. Open weights: `Qwen/Qwen3.8-Flash-Next` (Hugging Face/ModelScope). Free via Qoder app for individuals. **Custom Qwen Community License 1.0 (NOT Apache 2.0) — commercial-use terms need verification.**
- **Release / knowledge:** 2026-08-26 release (weights + production API); **knowledge cutoff: not disclosed.**
- **IDs:** `qwen3.8-flash` (Qwen Cloud/OpenRouter); `Qwen/Qwen3.8-Flash-Next` (open weights). Distinct from 27B sibling and Max flagship.
- **Context window:** **Production: 1M tokens default (131K max output, llm-stats/OrcaRouter)**. **Flash-Next native: 262,144 tokens, extensible to 1M via YaRN RoPE scaling** (Alibaba warns static YaRN "can slightly reduce short-context performance").
- **Modalities:** Text, image, video in; text out. Thinking mode default (`enable_thinking`), `reasoning_effort` (xhigh/medium/low), `preserve_thinking`. Tool calls, structured outputs/JSON.
- **Pricing (as of 2026-11-08):** **$0.150 / $0.470 per 1M** (BenchLeader re-verified Nov 5; models.dev blended $0.119/$0.401); cached input $0.015–0.018; 50 tok/s, 1.00s first token. **CHEAPEST CARD IN BATCH ALONGSIDE MiMo-V2.6-Flash**. **$0 self-hosted** (MIT-equivalent but **custom Qwen Community License 1.0 — commercial-use caveat vs 27B sibling's Apache 2.0**). No Free ID on Zen.
- **Architecture:** **125B total / 6B active MoE** (512 experts, 10 routed + 1 shared) + **51B n-gram embedding params** (20M bigrams/trigrams at layer 2 — cheap scaling axis); hybrid attention (Gated DeltaNet linear + Qwen Sparse Attention); 48 layers; 4-branch Gated Residual; Muon+AdamW; 4B MTP. ~180B safetensors.

### Raw benchmarks found

> **DEEP SECOND-PASS UPDATE:** Incorporates findings from 2 recent qualified raters (Step 5 Preview 2026-11-05, GLM 5.3 Flash 2026-11-05) + official Alibaba sources. **Average of 29 qualifying raters: 88.3 Overall** (Tool 86.7, Reasoning 87.1, Context 95.5, Multimodal 84.9, Coding 87.2). Queue: 88.3. Step 5 Preview: 79. GLM 5.3 Flash: 85. My original: 81. **ALL FIGURES VENDOR-RUN (Flash-Next card); NO INDEPENDENT MEASUREMENT OF PRODUCTION FLASH (BenchLeader: "needs 5+ independent results").**

Agent / tool use:

- GDPval-AA: **1,648 Elo** (AA independent; normalized 56.4–56.6%, minor drift) (GLM)
- Toolathlon-Verified: **73.5%** (model card; vs DeepSeek V4 Flash 70.3) (GLM / Step 5)
- CoWorkBench: **73.9%**; JobBench: **55.7%**; AndroidWorld: **84.5%** (GLM / Step 5)
- Agents' Last Exam: **51.2%** (model card score; Pass@1 24.3 in release table — different metric) (GLM / Step 5)
- OSWorld 2.0: **19.4%** (model card — weak) / **52.3% partial** (huge sub-metric gap, Benchgen declined to publish) (GLM / Step 5)
- ClawEval-MM: **Pass@3 64.4% / avg 60.4%** — **BEST MEASURED CLAWEVAL IN SERIES** (Step 5)
- GameBench 2: **31.6** (DuelLab, #146 — NEW) (GLM)
- **Terminal-Bench, τ³-Banking, MCP-Atlas: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **2 of 3 frontier refs unmeasured**
- GDP.pdf: **16.6%** (Epoch Benchmarking Hub, xhigh, #37 — NEW) (GLM)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card) / **92.3%** (AA independent) — **CORROBORATED, CLEARS 90%+ FRONTIER** (GLM / Step 5)
- HLE: **35.9%** (model card) / **38.0%** (AA-HLE) — **FAILS 40%+ REFERENCE** (GLM / Step 5)
- AA Intelligence Index: **39.8** (AA current board — corroborates 40 cited for Flash-Next) (GLM)
- IFBench: **81.3%** (model card) (GLM / Step 5)
- AA-LCR v1.1: **79.7%** (GLM)
- CritPt: **11.1%** (weak) (GLM)
- AA-Omniscience: **24.5% accuracy / 45.3% non-hallucination / −9.7 index** (NEGATIVE INDEX, VERY WEAK) (GLM)
- LiveCodeBench v6: **91.9%** (model card — **HIGHEST LIVECODEBENCH IN BATCH**) (GLM / Step 5)
- **CritPt, AA Intelligence Index (composite), ARC-AGI, FrontierMath, MRCR: NO VERIFIED PUBLIC SCORE** — **4 of 5 reasoning refs + every reliability metric absent** (GLM / Step 5)

Coding:

- AA Coding Index: **73.0%** (AA independent) (GLM)
- AA-SciCode: **50.6%** (AA) — **3.4pts UNDER 55%+ FRONTIER REF** (GLM)
- SWE-bench Pro: **62.5%** (model card, Claude Code harness; vs Opus 4.6 Max 53.4) (GLM / Step 5)
- SWE Multilingual: **81.0%**; NL2Repo: **48.1%** (GLM / Step 5)
- DeepSWE 1.1: **58.7%** (model card) — **15.3pts UNDER 74% FRONTIER REF** (GLM / Step 5)
- LiveCodeBench v6: **91.9%** (model card) — **HIGHEST IN BATCH** (GLM / Step 5)
- **SWE-bench Verified, Vibe Code Bench: NO VERIFIED PUBLIC SCORE** (GLM / Step 5) — **70%-index & SWE-V refs unmeasured**

Multimodal:

- CharXiv: **90.6%** w/tools / **84.6%** w/o (GLM / Step 5)
- MathVision: **90.6%** / **95.7%** w/Python (GLM / Step 5)
- RealWorldQA: **88.5%** (GLM / Step 5)
- LVBench (long video): **76.6%** (GLM / Step 5)
- Vision2Web: **64.0%**; ERQA: **72.3%** (GLM)
- AA-MMMU-Pro: **79.8%** (AA) — measured vision corroborates +video-in band (GLM / Step 5)
- **MMMU-Pro: NO VERIFIED PUBLIC SCORE** (GLM / Step 5)
- **Text + image + video in; text out; NO AUDIO INPUT** — video tier (75-90)

Long context:

- Production serves **1M tokens default (131K max output)**; Flash-Next native **262K, extensible to 1M via YaRN** (Alibaba warns YaRN can hurt short-context perf); **7.6× prefill / 8.6× throughput at 1M vs Qwen3.7-Plus** (GLM / Step 5)
- AA-LCR: **79.7%** (GLM)
- **NO MRCR / RULER / GraphWalks VERIFIED FOR THIS EXACT MODEL** (GLM / Step 5)

### Normalized scores (1–100)

> **DEEP SECOND-PASS RECALCULATION:** Average of 29 qualifying raters = **88.3 Overall** (Tool 86.7, Reasoning 87.1, Context 95.5, Multimodal 84.9, Coding 87.2). Queue: 88.3. Step 5 Preview: 79. GLM 5.3 Flash: 85. My original: 81. **ALL VENDOR-RUN; NO INDEPENDENT PRODUCTION FLASH MEASUREMENT; CUSTOM LICENSE.**

- **Tool use: 72/100.** (was 75) GDPval-AA **1,648 Elo (56.5% norm)**, Toolathlon **73.5%**, CoWorkBench **73.9%**, JobBench **55.7%**, AndroidWorld **84.5%**, ClawEval-MM **64.4% Pass@3 (BEST IN SERIES)**, ALE **51.2** (beats 27B 42.9). **Capped by:** OSWorld 2.0 **19.4%** (huge binary/partial gap), **NO Terminal-Bench/τ³-Banking/MCP-Atlas/GDPval-AA Elo** — 2 of 3 frontier refs unmeasured; all figures vendor-run from Flash-Next card.
- **Reasoning: 78/100.** (was 75) GPQA Diamond **91.7–92.3% (CORROBORATED, clears 90%+)**, IFBench **81.3%**, AA-LCR **79.7%**, AA Index **39.8** (mid-band), LiveCodeBench **91.9% (HIGHEST IN BATCH)**. **Capped by:** HLE **35.9–38.0% (FAILS 40%+ REF)**, CritPt **11.1% (weak)**, AA-Omniscience **−9.7 index / 24.5% accuracy / 45.3% non-hallucination (NEGATIVE INDEX)**, **NO CritPt/ARC-AGI/FrontierMath/MRCR/AA Index (composite)** — 4 of 5 reasoning refs + reliability entirely absent. **All vendor-run, no replication.**
- **Context window: 92/100.** (was 90) **Production: 1M/131K**; Flash-Next native **262K + YaRN to 1M** (Alibaba warns YaRN can hurt short-context). AA-LCR **79.7%**. **Held below native-1M tier (95+): 262K native; YaRN extension not native; NO MRCR/GraphWalks/RULER; hosted caps output at 131K.**
- **Multimodal: 85/100.** (was 85) Text, image, video in; CharXiv **90.6%/84.6%**, MathVision **90.6%/95.7% w/Python**, RealWorldQA **88.5%**, LVBench **76.6%**, AA-MMMU-Pro **79.8%**, ERQA **72.3%**, Vision2Web **64.0%**. **Video tier (75-90), strong for 6B-active.** **Capped by:** NO audio input, NO MMMU-Pro, text-only output, all vendor-run, no replication.
- **Coding: 82/100.** (was 80) LiveCodeBench v6 **91.9% (HIGHEST IN BATCH)**, AA Coding Index **73.0% (independent)**, SWE-Pro **62.5%** (vs Opus 4.6 Max 53.4), SWE Multilingual **81.0%**, DeepSWE **58.7%** (15.3pts under 74% ref), NL2Repo **48.1%**. **Capped by:** DeepSWE **58.7%**, AA-SciCode **50.6% (3.4pts under 55% ref)**, **NO SWE-V/Vibe Code/AA-SciCode (Step 5)** — 70%-index & SWE-V refs unmeasured.
- **Cost efficiency: 92/100.** (was 65) **$0.15/$0.47 (CHEAPEST IN BATCH alongside MiMo-V2.6-Flash)**; **$0 self-hosted** (custom Qwen Community License 1.0 — **commercial-use caveat vs 27B sibling's Apache 2.0**); 50 tok/s serving. **Held at 92 (not 97+): license not permissive; no cost/task measurement; slightly above ~$0.10/$0.20 anchor.**
- **Overall Score: 82/100.** (was 81) Half-up mean of (72 + 78 + 92 + 85 + 82) / 5 = 411 / 5 = 82.2 → **82**. **Below queue (88.3), average of 29 qualifying raters (88.3).** Best-fit: **Most architecturally efficient model in series** — beats 27B-dense on every compared metric at 4.5× fewer active params; **ClawEval-MM 64.4% (BEST IN SERIES)**; LiveCodeBench 91.9% (HIGHEST); $0.15/$0.47 (cheapest) + $0 self-host. **CAUTIONS:** (1) **Experimental architecture preview, not production flagship** — hosted Flash is hardened sibling; (2) **ALL NUMBERS VENDOR-RUN FROM FLASH-NEXT CARD — NO AA/VALS/ARC REPLICATION OF PRODUCTION FLASH** (BenchLeader: "needs 5+ independent results"); (3) **Reliability entirely unmeasured** (CritPt 11.1%, AA-Omniscience −9.7, HLE fails 40%); (4) Custom license (non-Apache) — verify commercial terms.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: **Deep second-pass re-research** (original 2026-10-19). Cross-rater synthesis from 2 recent qualified raters: Step 5 Preview (2026-11-05, Overall 79), GLM 5.3 Flash (2026-11-05, Overall 85) + official Alibaba sources (Qwen3.8-Flash-Next model card, Benchgen, BenchmarkList, llm-stats, codersera, Qwen Cloud pricing). **Average of 29 qualifying raters: 88.3 Overall.** Queue: 88.3. **Critical findings:** Experimental preview (not production flagship); **125B/6B MoE + 51B n-gram = beats 27B dense at 4.5× fewer active params**; LiveCodeBench 91.9% (HIGHEST IN BATCH); ClawEval-MM 64.4% (BEST IN SERIES); GPQA 91.7% (clears 90%+); **NO INDEPENDENT PRODUCTION FLASH MEASUREMENT** (BenchLeader: "needs 5+ independent results"); HLE 35.9% (fails 40% ref); AA-Omniscience −9.7 (NEGATIVE); CritPt 11.1%; 262K native + YaRN to 1M (YaRN can hurt short-context); custom Qwen Community License 1.0 (commercial-use caveat); $0.15/$0.47 cheapest in batch.
- Reference URLs:
  - [Alibaba — Qwen3.8-Flash-Next model card (primary source; full benchmark tables vs 27B/Max)](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)
  - [Benchgen — Qwen3.8-Flash-Next model card and benchmark transcription](https://benchgen.com/models/alibaba/qwen3-8-flash-next)
  - [BenchmarkList — Qwen3.8-Flash-Next (architecture, 125B/6B + 51B n-gram detail)](https://benchmarklist.com/models/qwen-qwen3.8-flash-next/)
  - [llm-stats — Qwen3.8-Flash-Next benchmarks, pricing & context window](https://llm-stats.com/models/qwen3.8-flash-next)
  - [codersera — Qwen 3.8 Flash specs, price & benchmarks](https://codersera.com/blog/qwen-3-8-flash-complete-guide-2026/)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a file next to this one, e.g. `GPT_5.md`, using the same headings.

---