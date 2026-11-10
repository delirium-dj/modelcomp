# GLM-5.3-Flash — findings by Glyph Cluster

- Source: Z.ai (`z-ai/glm-5.3-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.ai's native multimodal GLM-5 series model using a hybrid sparse/linear attention MoE architecture, optimized for efficient long-context coding, agentic workflows, and visual understanding (with GLM-5.3-FlashX as a faster variant).
- **Provider / access:** Z.ai API (`glm-5.3-flash`, `glm-5.3-flashx`; GLM Coding Plan availability noted for Flash) and hosted providers via OpenRouter as `z-ai/glm-5.3-flash`.
- **Release / knowledge:** Release date not explicitly stated in fetched Z.ai docs; model documented as GLM-5.3-Flash/FlashX in current Z.ai docs (accessed 2026-11-10). Knowledge cutoff not stated.
- **IDs:** `glm-5.3-flash`, `glm-5.3-flashx` (Z.ai API model codes); `z-ai/glm-5.3-flash` (OpenRouter).
- **Context window:** 1,000,000 tokens (1M); maximum output tokens 128K (Z.ai docs).
- **Modalities:** Video, image, text, and file input; text output. Reasoning/thinking mode supported (`thinking.type` enabled; `reasoning_effort` configurable). Tool/function calling, streaming, structured output, and context caching supported.
- **Pricing (as of 2026-11-10):** Low-cost serving emphasized by vendor. OpenRouter provider pricing varies widely (roughly ~$0.04–$0.175 / 1M input and ~$0.078–$0.625 / 1M output depending on provider/tier; Z.ai listed at ~$0.15/$0.50 per 1M on OpenRouter). Exact official Z.ai list pricing not fully specified in fetched docs.
- **Architecture:** MoE with hybrid sparse and linear attention (KDA-style efficiency claims), 320B total / 18B activated parameters, 45 layers, Manifold-Constrained Hyper-Connections (mHC), MXFP-style/quantized serving optimizations mentioned in ecosystem context; native multimodal (Z.ai docs). FlashX offers higher inference speed (~200 tokens/s claimed).

### Raw benchmarks found

> Sources: Z.ai model documentation/blog content (GLM-5.3-Flash page) and OpenRouter model page. AA Intelligence Index version referenced by vendor is v4.1.1 (not AA v5.0.1 used elsewhere in this project); treated as vendor-reported verified benchmark claim.

Agent / tool use:

- Artificial Analysis Intelligence Index v4.1.1 (vendor-reported): **57** at ~$0.045 per task (discounted), per Z.ai docs text.
- AutomationBench: **48.8** (Z.ai docs; vs GLM-5.2 26.2, reported comparison).
- Office/finance/document agentic capabilities described qualitatively; no additional verified public standalone agent benchmark scores found.

Reasoning / knowledge:

- GPQA Diamond / HLE / MMLU-Pro / AA-Omniscience: no verified public standalone scores found for this exact model in fetched sources.
- "Stronger intelligence than GLM-5.2" stated by vendor (qualitative).

Coding:

- DeepSWE v1.1: **63.4** (Z.ai docs; vs GLM-5.2 46.2).
- Z.ai Code Bench v1.0 (Claude Code 2.1.207, max effort): **29.0** (Z.ai docs; near Claude Opus 4.8 29.5 per vendor comparison).
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode: no verified public standalone scores found.

Long context:

- 1M-token context window and 128K max output specified (Z.ai docs). Vendor claims reduced attention compute/KV cache vs prior GLM; no verified public long-context retrieval benchmark scores (MRCR/RULER/GraphWalks) found.

Multimodal:

- Native multimodal visual understanding/coding described (images/video/files, UI observation, visual feedback loops). No verified public multimodal benchmark scores (MMMU, MathVista, etc.) found in fetched sources.

### Normalized scores (1–100)

> Derived from Z.ai documentation claims and OpenRouter metadata. Evidence includes some vendor-reported benchmark numbers but limited third-party granular breakdowns; scores are normalized interpretations, not official vendor scores. Cost excluded from Overall.

- **Tool use: 84/100.** Strong agentic positioning with tool calling, streaming tools, structured output, context caching, and vendor-reported AutomationBench 48.8 plus AA Index v4.1.1 57 (vendor-reported). Capped by limited independent/standalone agent benchmark disclosures.
- **Reasoning: 82/100.** Vendor-reported AA Intelligence Index v4.1.1 score of 57 and claims of improved intelligence over GLM-5.2 suggest solid reasoning, but no verified standalone GPQA/HLE/ARC-style public scores found. Capped by evidence breadth.
- **Context window: 96/100.** 1M-token context and 128K max output with architecture designed for long-context efficiency. Capped because no verified public long-context retrieval quality benchmark scores were found.
- **Multimodal: 86/100.** Native support for video/image/text/file inputs and vision-driven coding/use-case descriptions indicate strong multimodal capability. Capped by text-only output and lack of verified public multimodal benchmark scores.
- **Coding: 86/100.** Verified vendor-reported coding results include DeepSWE v1.1 63.4 and Z.ai Code Bench v1.0 29.0 (max effort), with strong coding-agent positioning. Capped by missing widely used third-party public coding benchmark scores (e.g. SWE-bench Verified, LiveCodeBench).
- **Cost efficiency: 96/100.** Marketed as exceptionally low-cost; OpenRouter shows very competitive pricing across many providers (often far below $1/1M combined) with strong intelligence-per-cost claims. Best suited for high-volume, cost-sensitive workloads.
- **Overall Score: 87/100.** Mean of non-cost dimensions (84 + 82 + 96 + 86 + 86) / 5 = 86.8, rounded to 87. Best fit for cost-efficient long-context coding and multimodal agentic workflows where fast/cheap inference and broad tool support are priorities.

---

## Signature

- Provided by: **Glyph Cluster (kilocode/glyph-cluster-free)** — 2026-11-10 UTC
- Method: Fresh public web research (Z.ai model documentation, OpenRouter model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai docs — GLM-5.3-Flash/FlashX](https://docs.z.ai/guides/llm/glm-5.3-flash)
  - [Z.ai blog — GLM-5.3-Flash](https://z.ai/blog/glm-5.3-flash)
  - [OpenRouter — z-ai/glm-5.3-flash](https://openrouter.ai/z-ai/glm-5.3-flash)
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
