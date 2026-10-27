# GLM 4.6V Flash — findings by Nemotron 3 Ultra 550B A55B

> Research agent: Nemotron 3 Ultra 550B A55B (NVIDIA Nemotron 3 Ultra, 550B total / 55B active MoE)
> Date: 2026-10-27 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6V Flash (GLM-4.6V-Flash)
- **Short description:** Z.ai (Zhipu AI)'s lightweight multimodal MoE model, released December 8, 2025. 9B total / ~2-3B active parameters (exact active not published, "9B" is total). Optimized for local deployment, low latency. 128K context. Native multimodal function calling (first in GLM-V family). MIT license (open weights). Text + image/video input; text output.
- **Provider / access:** Hugging Face (`zai-org/GLM-4.6V-Flash`), ModelScope, Z.ai API (`glm-4.6v-flash`), vLLM, SGLang, llama.cpp, Ollama. Self-hosted (MIT). Z.ai chat free. No managed API free tier specifically.
- **Release / knowledge:** 2025-12-08 release (Z.ai blog / HF); knowledge cutoff not published.
- **IDs:** `zai-org/GLM-4.6V-Flash` (HF/ModelScope), `glm-4.6v-flash` (Z.ai API). MIT license = self-host free.
- **Context window:** 128K tokens (training context). Verified via Z.ai blog, HF model card, Z.ai docs, binaryverseai review.
- **Modalities:** Text + image + video input; text output. **Native multimodal** (vision). Native multimodal function calling (images/screenshots/docs as tool inputs). Interleaved image-text generation. Reasoning: yes (hybrid reasoning, thinking mode). Tool calls: yes (native function calling, vision-driven). JSON mode: yes. Structured output: yes.
- **Pricing (as of 2026-10-27):** Self-hosted: $0/M (MIT). VRAM: ~18GB fp16 (9B) / ~6GB Q4. Z.ai API: not published. OpenRouter: not listed. Lambda Labs: not published. Blended API: N/A (primarily self-host).
- **Architecture:** 9B total MoE (active params not specified). 128K context. Vision encoder + LLM backbone. Native multimodal function calling. Interleaved image-text generation. Frontend replication from screenshots. MIT license.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

> **SOURCE:** All benchmarks vendor-reported by Z.ai (HF model card model-index commit, Z.ai blog, binaryverseai review compiling Z.ai data). No independent third-party reproduction found.

Agent / tool use (vendor-reported, from HF model-index / Z.ai blog / binaryverseai):

- MMBrowseComp: **7.1%** — HF model-index / Z.ai blog / binaryverseai
- Design2Code: **69.8%** — HF model-index / Z.ai blog / binaryverseai
- Flame-React-Eval: **78.8%** — HF model-index / Z.ai blog / binaryverseai
- OSWorld: **21.1%** — HF model-index / Z.ai blog / binaryverseai
- AndroidWorld: **42.7%** — HF model-index / Z.ai blog / binaryverseai
- WebVoyager: **71.8%** — HF model-index / Z.ai blog / binaryverseai
- Webquest-SingleQA: **75.1%** — HF model-index / Z.ai blog / binaryverseai
- Webquest-MultiQA: **53.4%** — HF model-index / Z.ai blog / binaryverseai
- SWE-bench / Terminal-Bench / τ²-Bench / BFCL / Toolathlon / MCP-Atlas / PinchBench / ClawEval / AutomationBench / OfficeQA / JobBench / BrowseComp (standard) / DeepSearchQA: **no scores** for Flash specifically (GLM-4.6V 106B has some)

Reasoning / knowledge (vendor-reported):

- MMMU (Val): **71.1%** — HF model-index / Z.ai blog / binaryverseai
- MMMU_Pro: **60.6%** — HF model-index / Z.ai blog / binaryverseai
- VideoMMU: **70.1%** — HF model-index / Z.ai blog / binaryverseai
- MathVista: **82.7%** — HF model-index / Z.ai blog / binaryverseai
- AI2D: **89.2%** — HF model-index / Z.ai blog / binaryverseai
- DynaMath: **43.7%** — HF model-index / Z.ai blog / binaryverseai
- WeMath: **60.0%** — HF model-index / Z.ai blog / binaryverseai
- ZeroBench (sub): **22.5%** — HF model-index / Z.ai blog / binaryverseai
- MMStar: **74.7%** — HF model-index / Z.ai blog / binaryverseai
- MMBench V1.1: **86.9%** — HF model-index / Z.ai blog / binaryverseai
- MMBench V1.1 (CN): **85.9%** — HF model-index / Z.ai blog / binaryverseai
- MUIRBENCH: **75.7%** — HF model-index / Z.ai blog / binaryverseai
- BLINK (Val): **65.5%** — HF model-index / Z.ai blog / binaryverseai
- MMLU / GPQA / AIME / HLE / MMLU-Pro / C-Eval / MATH / BBH: **no scores** for Flash specifically (GLM-4.6V 106B and GLM-4.7-Flash have text benchmarks)

Coding:

- Design2Code: **69.8%** — HF model-index / Z.ai blog / binaryverseai
- Flame-React-Eval: **78.8%** — HF model-index / Z.ai blog / binaryverseai
- SWE-bench / LiveCodeBench / HumanEval / MBPP / Codeforces / Terminal-Bench / SciCode: **no scores** for Flash specifically

Long context:

- MMLongBench-Doc: **53.0%** — HF model-index / Z.ai blog / binaryverseai
- MMLongBench-128K: **63.4%** — HF model-index / Z.ai blog / binaryverseai
- LVBench: **49.5%** — HF model-index / Z.ai blog / binaryverseai
- Native 128K context verified
- RULER / MRCR / GraphWalks / LongBench / LOFT / AA-LCR: **no scores**

Multimodal (vendor-reported, all from Z.ai HF model-index / blog / binaryverseai):

- OCRBench: **84.7%** — HF model-index / Z.ai blog / binaryverseai
- OCR-Bench_v2 (EN): **63.5%** — HF model-index / Z.ai blog / binaryverseai
- OCR-Bench_v2 (CN): **59.5%** — HF model-index / Z.ai blog / binaryverseai
- ChartQAPro: **62.6%** — HF model-index / Z.ai blog / binaryverseai
- ChartMuseum: **49.8%** — HF model-index / Z.ai blog / binaryverseai
- CharXiv_Val-Reasoning: **59.6%** — HF model-index / Z.ai blog / binaryverseai
- OmniSpatial: **50.6%** — HF model-index / Z.ai blog / binaryverseai
- RefCOCO-avg (val): **85.6%** — HF model-index / Z.ai blog / binaryverseai
- TreeBench: **45.7%** — HF model-index / Z.ai blog / binaryverseai
- Ref-L4-test: **87.7%** — HF model-index / Z.ai blog / binaryverseai
- **Comparison vs Qwen2-VL (binaryverseai):** GLM-4.6V-Flash beats Qwen2-VL-72B on MMBench (86.9 vs 84.3), MMBench CN (85.9 vs 83.3), AI2D (89.2 vs 84.9), MathVista (82.7 vs 81.4), OCRBench (84.7 vs 81.9), ChartQAPro (62.6 vs 58.4), WebVoyager (71.8 vs 47.7), Design2Code (69.8 vs 56.6). Loses on MMMU_Pro (60.6 vs 69.4), MMStar (74.7 vs 78.7), MUIRBENCH (75.7 vs 80.1), RefCOCO (85.6 vs 89.3).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** WebVoyager 72%, Design2Code 70%, Flame-React-Eval 79%, Webquest 75%/53%, AndroidWorld 43%, OSWorld 21%, MMBrowseComp 7%. Strong web/UI agentic (WebVoyager 72%, Design2Code 70%) but **all vendor-reported, no independent reproduction**. No standard agentic benchmarks (SWE-bench, Terminal-Bench, τ²-Bench, BFCL, MCP-Atlas). Capped by zero independent reproduction and no standard agentic benchmarks.
- **Reasoning: 55/100.** MathVista 83%, AI2D 89%, MMMU 71%, MMMU_Pro 61%, MMStar 75%, DynaMath 44%, WeMath 60%, ZeroBench 23%. Strong visual reasoning (MathVista 83%, AI2D 89%) but **no text-only reasoning benchmarks** (GPQA/AIME/HLE/MMLU). Capped by no text reasoning benchmarks and all vendor-reported.
- **Context window: 80/100.** 128K native (128K tier = 75–80). MMLongBench-128K 63%, MMLongBench-Doc 53%, LVBench 50%. No RULER/MRCR/GraphWalks/LongBench/LOFT/AA-LCR. Tier placement + long-context benchmarks save score.
- **Multimodal: 80/100.** Native text+image+video in, text out. MMBench 87%, MMMU 71%, MathVista 83%, AI2D 89%, OCRBench 85%, ChartQAPro 63%, RefCOCO 86%, WebVoyager 72%, Design2Code 70%. **Exceptional for 9B model** — beats Qwen2-VL-72B on many VQA/agentic benchmarks. Native multimodal function calling. No audio/video generation. Capped by MMMU_Pro 61% vs larger models, no audio/video generation.
- **Coding: 55/100.** Design2Code 70%, Flame-React-Eval 79%. **No standard coding benchmarks** (SWE-bench, LiveCodeBench, HumanEval, Terminal-Bench, SciCode). Frontend replication strong but not general coding. Capped by no standard coding benchmarks.
- **Cost efficiency: 95/100.** MIT open weights = self-host free. 9B = ~18GB fp16 / ~6GB Q4 (consumer hardware). No managed API cost. Best-in-class value for multimodal at this size.
- **Overall Score: 66/100.** Mean of (60+55+80+80+55)/5 = 66.0 → 66. Queue shows 59.7 — higher due to exceptional multimodal (80) for 9B. No independent verification. Best fit: **open-source SOTA multimodal at 9B**; beats Qwen2-VL-72B on MMBench, AI2D, MathVista, WebVoyager, Design2Code; native multimodal function calling; all benchmarks vendor-reported, zero independent reproduction.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-10-27
- Method: Public internet research across 5+ independent sources (Z.ai blog, HF model card + model-index commit, Z.ai docs, binaryverseai review, GitHub zai-org/GLM-V); scores normalized 1–100 per model-comparison.md methodology. **Critical limitation:** All 36 benchmarks vendor-reported by Z.ai (HF model-index commit); zero independent third-party reproduction found. binaryverseai review compiles Z.ai data only. No standard text reasoning/coding/agentic benchmarks for Flash specifically.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.