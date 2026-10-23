# GLM 5.3 FlashX — findings by DeepSeek 4.1 Flash

- Source: Z.ai/GLM-5.3-FlashX (`glm-5.3-flashx`)
- Date: 2026-10-18 (UTC); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** FlashX has no standalone BenchLM page; it shares the GLM-5.3-Flash capability stack, whose independent coverage has grown substantially since the first draft (BenchLM now exposes ~45 rows, including SWE-bench Verified 92.0% and AA-GPQA Diamond 91.2%). Reasoning and Coding are nudged up; the Overall moves **87 → 88**.

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** The high-speed serving variant of Z.ai's GLM-5.3-Flash — same 320B/18B native-multimodal weights, retuned for up to 200 tokens/s interactive agent and coding work. Not a separate open-weight checkpoint; capability equals GLM-5.3-Flash, latency and price are the differentiators.
- **Provider / access:** Z.ai BigModel (`glm-5.3-flashx`); also on OpenRouter `z-ai/glm-5.3-flashx`, Vercel AI Gateway, and OpenCode (`opencode/glm-5.3-flashx`). OpenAI-compatible Chat Completions with streaming, tool calls, structured output, and context caching.
- **Release / knowledge:** 2026-09-18 (FlashX serving tier; GLM-5.3-Flash base released 2026-08-26). Knowledge cutoff not disclosed.
- **IDs:** `glm-5.3-flashx` (Z.ai BigModel), `z-ai/glm-5.3-flashx` (OpenRouter)
- **Context window:** 1,048,576 (1M) total; up to 128K max output (Z.ai docs; OminiGate lists 131.1K). Verified against Z.ai developer docs and OpenRouter.
- **Modalities:** text, image, video, and files in; text out. Reasoning (thinking always enabled), tool calls, JSON/structured output, context caching.
- **Pricing (as of 2026-10-18):** $0.37 / $1.25 per 1M input/output on Z.ai/OpenRouter; $0.09 per 1M cached input. Roughly 2.5x standard GLM-5.3-Flash ($0.15/$0.50) — the premium buys serving speed, not new intelligence.
- **Architecture:** 320B total / 18B active, hybrid sparse + linear attention (KDA-linear + NoPE-sparse-MLA) with IndexPool, mHC, 30T-token multimodal corpus; ~3.0x less attention compute and 4.4x smaller KV cache than GLM-5.3. Weights not released for FlashX (serving SKU); base Flash weights are MIT on HF.

### Raw benchmarks found

> FlashX shares the GLM-5.3-Flash capability stack; numbers below are for the Flash/FlashX family. Vendor (Z.ai model card) and independent (Vals AI / Artificial Analysis / BenchLM) readings differ — both listed.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai); **62.9%** independent (Vals AI) — big vendor/independent gap
- Toolathlon-Verified: **78.4%** (Z.ai); AutomationBench **48.8%** (Z.ai) vs **60.4%** (AA AutomationBench)
- GDPval-AA: **1773 Elo** (Z.ai; frontier ref ~1750+); AA Tau3 Banking **47.2%**; Agents' Last Exam **26.3%**
- AA Briefcase **1454**, AA ITBench **51.2%**, AA EnterpriseOps-Gym **33.2%**, GDP.pdf **15.4%**, AA-AnalystAgent **25.0%**
- Hermes Bench **68.9%** / Hermes Index **35.0%**; MazeBench **0%** (ASCII mode)
- Benchable independent suite: General Knowledge 100%, Reasoning 100%, Instruction Following 78.0%, non-hallucination 98.0%

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis) — **86.4%** (Vals AI); AA-HLE **39.9%**; HLE (with tools) **55.3%** (Z.ai)
- AA-LCR: **80.0%**; MLCR-AA **51.1%**; CritPt **15.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **57** at launch (Z.ai/AA, 2026-08-27) vs **41.8** current (AA, via BenchLM) — version drift; treat 41.8–57 as the band
- MMLU-Pro **86.1%** (Vals); OfficeQA Pro **62.4%** (Z.ai); BenchLM overall **58.52/100, #58 of 954**

Coding:

- SWE-bench (Vals): **92.0%** (Vals AI); LiveCodeBench (Vals) **80.5%**
- DeepSWE v1.1: **63.4%** (Z.ai; vs GLM-5.2 46.2); NL2Repo **56.3%** (Z.ai)
- AA-SciCode **51.6%**; FrontierSWE v2 **18.1%**; OpenHarmony Bench **57.3%**; Coding Index **71.5** (OpenRouter AA)
- Z.ai Code Bench v1.0 (max effort): **29.0** (vendor-authored, discount)

Multimodal / long context:

- CharXiv **89.4%**, MMVU **80.5%**, BabyVision **53.4%**, Chartography (tools) **78.0%** (Z.ai); Design Arena Website **1274** (OpenRouter)
- 1M window advertised with hybrid attention and IndexPool; no published MRCR/RULER at 800K+ — long-context quality at the extreme remains unmeasured.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 84.3 (vendor) / 62.9 (Vals), Toolathlon 78.4, GDPval-AA 1773 and AA AutomationBench 60.4 place it just behind the frontier; capped by the large vendor/independent TB gap, weak MazeBench/GDP.pdf and no Claw-Eval.
- **Reasoning: 85/100.** AA-GPQA Diamond 91.2% and Vals 86.4%, HLE-with-tools 55.3%, AA-LCR 80.0%; capped by AA-HLE 39.9%, CritPt 15.4% and AA Intelligence Index version drift (41.8–57).
- **Context window: 95/100.** A true 1,048,576-token window with 128K max output earns the top tier, held below a full 100 because no 512K+ retrieval-accuracy evidence exists (compression trades precision for cost).
- **Multimodal: 83/100.** Native text/image/video/file input (30T-token multimodal corpus, CharXiv 89.4%, MMVU 80.5%) with text-only output; no audio-in and no non-text generation caps it in the video/PDF band.
- **Coding: 88/100.** SWE-bench (Vals) 92.0%, LiveCodeBench 80.5%, DeepSWE 63.4, SciCode 51.6; capped below the frontier by DeepSWE 63.4 (ref 74%+) and the vendor-authored Code Bench.
- **Cost efficiency: 94/100.** $0.37/$1.25 with $0.09 cached input sits just under the ~$0.60/$2.20 ≈ 92 band and is ~2.5x standard Flash; the speed premium is real but the AA blended cost (~$0.10/1M) makes it efficient.
- **Overall Score: 88/100.** (88 + 85 + 95 + 83 + 88) / 5 = 87.8 → **88**. Best fit: latency-sensitive multimodal coding/agent work where a near-frontier model at ~2.5x standard Flash pricing still beats flagship rates.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research (Z.ai launch/model card, BenchLM, Vals AI, Artificial Analysis, OpenRouter, glm5.app, Benchable, OpenRouter AA panel); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
