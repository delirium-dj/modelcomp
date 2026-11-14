- Source: Alibaba/Qwen3.5-Plus
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus
- **Short description:** Alibaba's 2026-02-16 open-source flagship of the Qwen3.5 generation, built on the Qwen3-Next architecture with higher-sparsity MoE and Gated DeltaNet + Gated Attention hybrid attention. Comparable to GPT-5.2 and Gemini 3 Pro on several benchmarks. A distinct model; `qwen-3.5-397b` is the related open-weight checkpoint tracked separately in this dataset, and the bare `qwen-3.5` family name is a deleted phantom folder per the project identity roster.
- **Provider / access:** API service and open-source release; Huawei Ascend adaptation announced the day after launch for training and inference deployment.
- **Release / knowledge:** 2026-02-16; knowledge cutoff: no verified public score found.
- **IDs:** `qwen3.5-plus` family ID as cited. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**.
- **Modalities:** native multimodal — vision-language-code deep fusion via early text-vision fusion on mixed visual/text pretraining tokens; text out. Language coverage expanded **119 → 201 languages**, vocabulary **150K → 250K**. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** no rate card in the retrieved pages — no verified public price found. Open weights enable free self-hosting.
- **Architecture:** Qwen3-Next with higher-sparsity MoE, **397B total / 17B active** parameters; Gated DeltaNet + Gated Attention hybrid attention (Gated Attention from Alibaba's own research). Open source.

### Raw benchmarks found

Agent / tool use:

- Benchmark results reported as close to GPT-5.2 and Gemini 3 Pro (directional; no per-benchmark numbers in the retrieved primary excerpt)
- A secondary CSDN evaluation reports Qwen3.5-Plus at **+1.8 percentage points** over qwen3-max-think-2026-01-23's 72.8% on an unnamed reasoning benchmark — relative delta on an unnamed harness, labelled secondary and not assigned a score
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Comparable to GPT-5.2 / Gemini 3 Pro on multiple benchmarks (directional)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Vision-language-code deep fusion with code capability (qualitative); no named numeric coding benchmark found
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 1M-token window; no MRCR / RULER / GraphWalks figure found — no verified public score found

Related generation context (not this model): the Qwen3.5 family spans 0.8B→397B with a 9B variant beating the previous 120B model on reasoning (secondary series analysis); Qwen3.5-Omni-Plus is a separate omni model.

### Normalized scores (1–100)

- **Tool use: 85/100.** GPT-5.2/Gemini-3-Pro-class standing with a 1M window, 201-language coverage and 17B active params; capped by no scored agent harness and directional-only comparisons.
- **Reasoning: 86/100.** Qwen3-Next hybrid attention with a documented generational improvement and parity claims vs GPT-5.2 / Gemini 3 Pro; capped by no published named reasoning benchmark for this exact ID.
- **Context window: 93/100.** A verified 1M-token window with efficient higher-sparsity MoE (17B active from 397B); capped by no long-context retrieval measurement.
- **Multimodal: 89/100.** Native early-fusion vision-language-code pretraining on mixed visual/text tokens; capped by text-only output, no verified audio/video input, and no published multimodal benchmark.
- **Coding: 85/100.** Vision-language-code fusion and generational architecture gains; capped by zero published named coding benchmark scores for this exact ID.
- **Cost efficiency: 92/100.** Free open weights, only 17B active params, 1M context and Day-1 domestic Ascend support; capped by no verifiable API rate card. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 85, 86, 93, 89, 85 = 87.6 → 88. Best fit: multilingual and multimodal long-document workloads on self-hosted open weights, especially on domestic accelerator hardware.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Qwen3.5-Plus article retrieved via public web search excerpt (release, 397B/17B MoE, 1M context, hybrid attention, 201 languages, open source, Ascend adaptation). A secondary CSDN relative delta and a series-wide architecture note are labelled secondary/other-model context, never merged into Qwen3.5-Plus's rows. Identity handling follows the project's generated roster: the bare `qwen-3.5` generation name is a deleted phantom folder and is never scaffolded; `qwen-3.5-397b` is a separate tracked checkpoint. Directional comparisons are not assigned numeric scores. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Qwen3.5-Plus — 百度百科 (retrieved via search excerpt; architecture, context, modalities, release)](https://baike.baidu.com/item/Qwen3.5-Plus/67392693)
