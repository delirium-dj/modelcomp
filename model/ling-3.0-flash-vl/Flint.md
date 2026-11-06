# Ling 3.0 Flash VL — findings by Flint

- Source: InclusionAI (Ant Group) / Ling 3.0 Flash VL
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** Ant Group's (InclusionAI) first natively multimodal Ling model — a 124B-parameter MoE (5.5B active) that ingests image and video alongside text and reasons over visual evidence, with a "visual feedback closed loop" for agentic visual tasks; MIT open weights.
- **Provider / access:** Open weights (MIT) on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`, plus r0b0tlab NVFP4-MP quantization) and ModelScope; Ant API (`api.ant-ling.com`, OpenAI- and Anthropic-compatible chat completions with image/video input); OpenRouter (`inclusionAI/ling-3.0-flash-vl`, $0.06/$0.18 per 1M); Kilo Gateway, DevPass. Audio understanding via separate `Ming-3.0-audio-flash`.
- **Release / knowledge:** Released 2026-11-06/10 (Hugging Face / Ant Group press release); API docs updated 2026-11-06; knowledge cutoff not verified in sources found.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL`; Ant Ling API model id `Ling-3.0-flash-VL`; OpenRouter `inclusionAI/ling-3.0-flash-vl`.
- **Context window:** 256K tokens native (official Ling-3.0-flash-VL card); 262K per Artificial Analysis / BenchLM; 131K per OpenRouter text-window listing; Ling-3.0-flash text extends to 1M. KV capacity in NVFP4-MP quant: 2,309,051 tokens (~17.6× the 131K window).
- **Modalities:** Text, image, video input → text output; native multimodal reasoning with visual evidence; hybrid reasoning (thinking/non-thinking switch); tool use via MCP/API.
- **Pricing (as of 2026-11-06):** Open weights (MIT); hosted API ~$0.06/$0.18 per 1M tokens (OpenRouter via DeepInfra; also Kilo Gateway / DevPass).

- **Architecture:** Sparse MoE, 124B total / 5.5B active (VL); hybrid KDA + MLA attention; ViT vision tower + two-layer MLP projector + VideoRoPE (spatial/temporal encoding); native vision integrated into understand→reason→act→verify loop.

### Raw benchmarks found

Official (InclusionAI / Ant Group / Hugging Face / OpenRouter):

- Artificial Intelligence Index: Ling-3.0-flash-VL **42** (AA v4.1.1, per InclusionAI; +4 over text Ling-3.0-flash at 38); InclusionAI also publishes no price. Ling-3.0-flash (text): **38**.
- BenchLM: Ling-3.0-flash-VL **unranked** (7 benchmark rows, no public overall); Ling-3.0-flash: **45.33/100**, rank **#120/1004**.
- Terminal-Bench 2.1 (Ling-3.0-flash, AA protocol): **57.0%**.

Independent (Artificial Analysis / BenchLM / OpenRouter / Model Beat):

- AA-LCR: **78.3%**; CritPt: **2.0%**; AA-GPQA Diamond: **86.2%**; AA-HLE: **22.0%**; GDPval-AA: **33.0%**; AA-SciCode: **44.2%**; AA-MMMU-Pro: **79.0%**.
- BenchLM comparison Ling-3.0-flash-VL vs o3: independent public scores VL **46.73** vs o3 **45.31**; reasoning VL **78.8** vs o3 **76.3**; multimodal VL **81.8** vs o3 **68.7**; knowledge VL **44.3** vs o3 **47.9**; context VL 262K vs o3 200K; pricing VL $0/$0 vs o3 $2/$8.

### Cross-source comparison

- Intelligence-Index version conflict: InclusionAI-quoted AA score **42** (v4.1.1) vs Artificial Analysis's current listing **25** (v4.3) — two different scoring versions, same vendor-adjacent claim; AA places VL on the open-weight Pareto frontier (vs median 8).
- Multimodal lift: InclusionAI reports the multimodal training added **+4** to the AA Intelligence Index over text Ling-3.0-flash (38→42, v4.1.1), while independent eval structure differs.
- Context conflict: official **256K** (VL) / **262K** (AA, BenchLM) / **131K** (OpenRouter) — sources disagree on effective context for the VL.
- Coverage conflicts: BenchLM ranks Ling-3.0-flash **45.33** (#120) but leaves VL **unranked**; GDPval-AA and coding evals for VL are sparse.

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval-AA **33.0%** (AA) for VL; agentic index for text Ling-3.0-flash **19.3**.
- **Reasoning: 80/100.** AA-GPQA Diamond **86.2%**, AA-LCR **78.3%**, multimodal-augmented AA Intelligence Index ~25–42; strong open-weight reasoning with vision.
- **Context window: 80/100.** Official **256K** (native), extendable to **1M** for text Ling-3.0-flash; independent readings 262K / 131K.
- **Multimodal: 85/100.** Native image/video input with reasoning-over-visual-evidence and visual-feedback closed loop; AA-MMMU-Pro **79.0%**.
- **Coding: 60/100.** AA-SciCode **44.2%**, GDPval-AA **33.0%**, Ling-3.0-flash coding index **50.6**.

- **Cost efficiency: 90/100.** Hosted ~$0.06/$0.18 per 1M (OpenRouter); MIT open weights.

- **Overall Score: 73/100.** Mean of the five quality dims (60 + 80 + 80 + 85 + 60) / 5 = **73**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/ling-3.0-flash-vl)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Ant Group / InclusionAI developer docs, Hugging Face `inclusionAI/Ling-3.0-flash-VL`, Ant Group press release, OpenRouter) plus independent benchmarks/reviews (Artificial Analysis, BenchLM, OpenRouter rankings, Model Beat) — three independent web searches.
- Reference URLs:
  - [Ling 3.0 Flash VL Benchmark Scores & Performance | BenchLM](https://benchlm.ai/models/ling-3-0-flash-vl)
  - [inclusionAI/Ling-3.0-flash-VL · Hugging Face](https://huggingface.co/inclusionAI/Ling-3.0-flash-VL)
  - [Ling 3.0 Flash · Hugging Face](https://huggingface.co/inclusionAI/Ling-3.0-flash)
  - [Ling-3.0-flash-VL: Ant Group ships 124B MIT open weights | DataNorth](https://datanorth.ai/news/ant-group-releases-ling-3-0-flash-vl)
  - [Ling 3.0 Flash VL: benchmarks, pricing & specs | The Model Beat](https://themodelbeat.com/models/ling-3-0-flash-vl)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

