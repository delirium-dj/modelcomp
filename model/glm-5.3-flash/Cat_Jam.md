# GLM-5.3-Flash — findings by Cat Jam

- Source: Z.ai / GLM-5.3-Flash (`opencode/glm-5-3-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's first natively multimodal GLM-5 model: 320B total / 18B active MoE MoE + hybrid sparse/linear attention (1M context, open weights, MIT). Very cheap ($0.15/$0.50) with near-Opus coding.
- **Provider / access:** Z.ai API (`glm-5.3-flash`), 13 providers on LiteLLM, China/global. Open weights under MIT on Hugging Face (`zai-org/GLM-5.3-Flash`). Reasoning effort low/high/max (default high? docs recommend max).
- **Release / knowledge:** Released 2026-08-26 (preview ran as "ox-alpha"); knowledge cutoff not published in sampled docs.
- **IDs:** `glm-5.3-flash` (Z.ai), `glm-5.3-flashx` faster sibling
- **Context window:** 1,048,576 tokens; max output 128,000. Verified via docs.z.ai, ai.gotry, LiteLLM.
- **Modalities:** Native multimodal text/image/video (maybe audio? docs emphasize image; no audio output). Text out. Tools/function calling, structured output, web search. Reasoning low/high/max.
- **Pricing (as of 2026-10-16):** $0.15/$0.50 per 1M (cache read $0.03, cache write free limited-time). FlashX sibling $0.37/$1.25 (faster). Batch maybe flex; global endpoints.
- **Architecture:** 320B total, 18B active MoE, hybrid sparse+linear attention (3.0x attention compute / 4.4x KV cache vs GLM-5.3), mHC. MIT open weights. Served on domestic Chinese accelerators (Z.ai) with EPD. Max output 128K.

### Raw benchmarks found

Agent / tool use:

- AutomationBench: **48.8%** (vendor DeepSWE-era? from Z.ai blog: 48.8 vs GLM-5.2 26.2)
- OSWorld? no exact sampled number beyond approaching Opus 4.8; CyberGym? not in sampled docs.
- GDPval-AA / ELO? docs not provide; AA benchmark table only internal.
- Tool use/office benchmarks cited: Z.ai Code Bench (run on Claude Code 2.1.207) max effort 29.0 vs Opus 4.8 29.5.
- Terminal-Bench not located in sampled docs (only DeepSWE 63.4).

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.1.1: **57** at $0.045 per task (discounted) — provider claims pushing Pareto frontier; Intelligence Index score cited as 57 (max reasoning setting)
- HLE/GPQA/SimpleQA not individually published in sampled Z.ai blog. Base (GLM-5.3-Flash-Base) competitive with GLM-5-Base; MMLU 88.1 (base), BBH 86.6, HellaSwag 87.1, SimpleQA 33.5.

Coding:

- DeepSWE v1.1: **63.4%** (vs GLM-5.2 46.2)
- Z.ai Code Bench v1.0 (on Claude Code 2.1.207): max effort 29.0 (Opus 4.8 29.5)
- Source table shows GLM-5.3-Flash-Base LiveCodeBench-Base 37.6 (base model only, not instruct)
- No officially sampled SWE-Bench Pro (wait which? User? no)

Long context:

- 1M context with 3.01× attention compute and 4.44× KV cache reduction vs GLM-5.3; MRCR/RULER independent score not in sampled docs.

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench 48.8, Z.ai Code Bench 29.0 (near Opus 4.8's 29.5); AA Index 57; official Terminal-Bench not in sampled docs caps from 95.
- **Reasoning: 88/100.** AA Index 57, base MMLU 88.1, BBH 86.6, LiveCodeBench-Base 37.6; HLE/GPQA not published in sampled docs ⇒ cap to avoid hallucination.
- **Context window: 94/100.** 1M with aggressive linear+sparse hybrid (3× compute, 4.4× KV reduction). No retrieval score in sampled data caps top-end.
- **Multimodal: 86/100.** Native image/video input; text out. No AA multimodal eval named in sampled sources beyond official native support and Code Bench focus.
- **Coding: 88/100.** DeepSWE 63.4 (large gain over 46.2), Z.ai Code Bench 29.0 vs Opus 4.8 29.5. Strong cheap coding.
- **Cost efficiency: 98/100.** $0.15/$0.50 per 1M, MIT weights — top value.
- **Overall Score: 88.8/100.** Mean (88+88+94+86+88)/5 = 88.8. Ultra-cheap frontier baseline; Z.ai claims AA Intelligence Index 57 at low cost — a category surprise.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research (Z.ai docs/blog/pricing, CourionAI, ai.gotry, LiteLLM, Hugging Face); scores are normalized 1–100 interpretations, not official vendor scores. Z.ai benchmark figures are self-reported via launch blog/table (some unpublished AA component URLs).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
