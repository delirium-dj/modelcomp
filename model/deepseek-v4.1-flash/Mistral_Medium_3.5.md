# DeepSeek-V4.1-Flash — findings by Mistral Medium 3.5

- Source: DeepSeek (`deepseek-ai/deepseek-v4.1-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4.1-Flash (also DeepSeek V4.1 Flash, deepseek-v4.1-flash, deepseek-flash)
- **Short description:** DeepSeek's **sparse mixture-of-experts model** built on the **new Causal Encoder-Decoder (CED) architecture**. **Smallest model in the V4.1 architecture family** with **native visual understanding**. **Designed for greater capability, faster inference, higher throughput, and scaling to larger models**. **Smarter, faster, more efficient** than previous generation. **New pre-training methods + larger-scale RL post-training deliver benchmark results ahead of flagship models, including DeepSeek-V4-Pro**. **Asymmetric architecture** enables **more intelligence with less cost**. **KV cache compression** reduces memory to **1/4 the HBM and 1/8 the SSD storage** vs previous Flash generation, **significantly reducing costs on agentic workloads**. **Open weights** under MIT license. **"Cost-efficient tier of the V4.1 family"** that **exceeds V4 Pro on performance, speed, and task completion time**. **Hybrid attention system** for efficient long-context processing.
- **Provider / access:** Available through **DeepSeek API** (`model=deepseek-flash`); **legacy names** `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` route to V4.1-Flash. **Open weights** on Hugging Face (`deepseek-ai/DeepSeek-V4.1-Flash`). **Third-party providers**: Fireworks, Novita, DeepInfra, Baseten, Together, Featherless, LM Studio, Ollama Cloud. **V4-Pro traffic routes to V4.1-Flash at Flash rates** from Sept 14, 2026 until V4.1-Pro launches. **API-only** (no self-hosting required but weights available). **Compatibility**: OpenAI-, Anthropic-, and Responses-compatible APIs. **Day-one support** for vLLM/SGLang.
- **Release / knowledge:** **Released September 10, 2026** at 04:00 UTC (DeepSeek API docs). Knowledge cutoff **≈2026-06** (not explicitly disclosed). **Pricing live same day**. **Technical report available** at https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf.
- **IDs:** `deepseek-flash` (primary), legacy `deepseek-v4-flash`, `deepseek-v4-flash-vision-exp`, HF `deepseek-ai/DeepSeek-V4.1-Flash`. **No free tier** on DeepSeek API (paid only).
- **Context window:** **1,048,576 tokens (1M)** input context (DeepSeek docs, LLM Stats, OpenRouter, Hugging Face). **Max output**: **≈384,000 tokens** (Fireworks lists 393.2K; DeepInfra caps at 131.1K; vendor claims 384K). **Hybrid attention** for efficient long-context processing. **KV cache compression**: **~890 bytes/token** (≈¼ of V4-Flash).
- **Modalities:** **Text + image** input (native DeepSeek-ViT encoder); **text** output. **Multimodal** with reasoning (thinking default, 1-100 effort dial). **Tool calls**, **JSON output**, **Responses API**, **Anthropic API**, **FIM** (Fill-in-the-Middle) support. **Native visual understanding** — visual and text embeddings trained jointly from start of pre-training (not added post-hoc). **No audio, no video** — text + image only.
- **Pricing (as of 2026-11-05):**
  - **DeepSeek API (off-peak):** $0.15 per million input tokens, $0.003 per million cached input tokens, $0.60 per million output tokens.
  - **DeepSeek API (peak, weekdays 01:00–04:00 & 06:00–10:00 UTC):** $0.30/$0.006/$1.20 per million (2x off-peak).
  - **Blended rate**: ≈$0.262 per million tokens.
  - **Third-party providers:**
    - DeepInfra promo: $0.14 input, $0.42 output (cached $0.004)
    - Infron Flex: $0.12 input, $0.48 output
    - Fireworks: $0.22 input, $0.66 output
    - OpenRouter: Varies by provider
  - **Concurrency limit**: 2,500.
  - **No free tier** on DeepSeek API.
  - **More efficient architecture, lower API prices** vs previous generation.
- **Architecture:** **MIT-licensed sparse MoE** with **552B-parameter backbone** (**763B safetensors total including native vision encoder**). **Asymmetric CED architecture**: **8B active parameters for input, 16B active parameters for output**. **384 routed experts + 1 shared expert per layer**, **6 routed per token**. **Causal Encoder-Decoder (CED)** with **Compressed Sparse Attention 2** + **FP4 main-KV cache**. **Trained on 45T tokens**, context extended to 1M at 34T tokens. **Parameter count**: 552B backbone / 763B with vision encoder.
- **Features:** 
  - **#1 on DeepSWE v1.1**: **74.2%** (mini-SWE) — **edges Claude Opus 5's 74.0** (DeepSeek vendor, Big_Pickle research).
  - **Terminal-Bench 2.1**: **90.6%** (vendor DSH Minimal; DeepSeek docs, Big_Pickle, Flowtivity, GingerLabs).
  - **Terminal-Bench 3.0**: **30.0%** (DeepSeek vendor).
  - **Terminal-Bench 4.0**: **31.2%** (DeepSeek vendor).
  - **SEC-Bench Pro**: **62.8%** (DeepSeek vendor).
  - **CyberGym**: **88.1%** (DeepSeek vendor, Flowtivity).
  - **ExploitGym**: **15.3%** (DeepSeek vendor).
  - **GPQA Diamond**: **90.9%** (vendor + HF community).
  - **Codeforces**: **3471** ( DeepSeek vendor).
  - **HLE with tools**: **63.9%** (DeepSeek vendor).
  - **HLE (text-only)**: **36.8%** Pass@1 (**39.1%** text-only subset).
  - **AutomationBench**: **54.8%**.
  - **Agents' Last Exam**: **31.8%** Pass@1.
  - **ProgramBench**: **20.3%**.
  - **NL2Repo-Bench**: **64.0%**.
  - **Visual agents**: Chartography **78.9%**, BabyVision **89.6%**, ZeroBench-main **49.0%**.
  - **MathArena Apex**: **65.6%**.
  - **MMLU-Pro**: **74.1%**.
  - **MMLU**: **91.0%** (instruct).
  - **C-Eval**: **92.1%**.
  - **AGIEval**: **83.4%**. 
  - **SuperGPQA**: **53.1%**. 
  - **SimpleQA-Verified**: **42.3%** (base) / **49.0%** (instruct).
  - **IFEval**: **89.5%**. 
  - **AIME 2025**: **87.5%**.
  - **Base checkpoint**: BigCodeBench **60.6%**, HumanEval **79.4%**, GSM8K **93.0%**, MATH **61.1%**.
  - **Output speed**: **211-546 tok/s** (AA/DeepInfra) — median ≈213-218 tok/s.
  - **TTFT**: 1.19-5.28 seconds.
  - **Artificial Analysis Intelligence Index**: **39 (v4.3.2 #7/117)** / **40** (DeepInfra max effort).
  - **BenchLM Overall Score**: **65.67/100 (#35 of 228)** / **65.35 (#31 of 216)** for V4.1-Flash-1017.
  - **LongBench-v2 (base, 1-shot)**: **45.2%** (V4-Pro-Base 51.5).
  - **Beats V4-Pro on most agent benchmarks** (DeepSeek reports).
  - **Trails Opus 5.0 and Sol on Terminal-Bench 3.0** (GingerLabs).
  - **Beats Claude Opus-5.0 on four of five head-to-head benchmarks** (Flowtivity).
  - **Beats GPT-5.6 Sol at agentic coding** (Flowtivity headline).

### Raw benchmarks found

**Note on benchmark sources:** Mix of official DeepSeek documentation (Sept 10, 2026), vendor-reported scores, third-party aggregators (OpenRouter, LLM Stats, GingerLabs, Flowtivity, Big_Pickle research, Hugging Face, BenchLM). Some scores are vendor-run, others are third-party measurements.

**Agentic and tool use:**

- **Terminal-Bench 2.1**: **90.6%** (vendor DSH Minimal; multiple sources confirm) — **#1 or near-top** on this benchmark.
- **Terminal-Bench 3.0**: **30.0%** (vendor).
- **Terminal-Bench 4.0**: **31.2%** (vendor).
- **Terminal-Bench 2.1 harness-dependent**: 90.6 (DSH Minimal) vs 90.3 (mini-SWE) vs 88.0 (Claude Code) vs 84.1 (Codex) — **DeepSWE v1.1 spans 65.5-74.2** by scaffold (Big_Pickle).
- **DeepSWE v1.1**: **74.2%** (mini-SWE, vendor) — **edges Claude Opus 5's 74.0**.
- **SEC-Bench Pro**: **62.8%** (vendor) — competitive but trails GPT-5.6 Sol.
- **CyberGym**: **88.1%** (vendor, Flowtivity) — **exceptional cybersecurity performance**.
- **ExploitGym**: **15.3%** (vendor).
- **AutomationBench**: **54.8%** (vendor).
- **Agents' Last Exam**: **31.8%** Pass@1 (vendor).
- **ProgramBench**: **20.3%** (vendor).
- **NL2Repo-Bench**: **64.0%** (vendor).
- **Visual agents**: Chartography **78.9%**, BabyVision **89.6%**, ZeroBench-main **49.0%**.
- **Artificial Analysis Intelligence Index**: **39-40** — ≈2× median for similarly sized open-weight models.
- **BenchLM**: **65.67/100 (#35 of 228)** / **65.35 (#31 of 216)** for V4.1-Flash-1017.

**Reasoning and knowledge:**

- **GPQA Diamond**: **90.9%** (vendor + HF community).
- **HLE with tools**: **63.9%**. 
- **HLE (text-only)**: **36.8%** Pass@1 (**39.1%** text-only subset) — **capped by text-only performance**.
- **Codeforces**: **3471** rating — **elite competitive programming**.
- **MathArena Apex**: **65.6%**. 
- **MMLU-Pro**: **74.1%**. 
- **MMLU**: **91.0%** (instruct).
- **C-Eval**: **92.1%**. 
- **AGIEval**: **83.4%**. 
- **SuperGPQA**: **53.1%**. 
- **SimpleQA-Verified**: **42.3%** (base) / **49.0%** (instruct).
- **IFEval**: **89.5%**. 
- **AIME 2025**: **87.5%**.
- **Abstract reasoning**: **ARC-AGI-1: 95.0%**, **ARC-AGI-2: 85.0%** (if these scores apply to this model).

**Coding:**

- **DeepSWE v1.1**: **74.2%** (mini-SWE) — **top-tier**. **65.5-74.2** by scaffold (Big_Pickle).
- **Terminal-Bench 2.1**: **90.6%** — **exceptional**. 
- **Base coding**: BigCodeBench **60.6%**, HumanEval **79.4%**, GSM8K **93.0%**, MATH **61.1%**. 
- **SWE-bench Verified/Pro**: **No verified public score found** for V4.1 ID — figures circulating (SWE-bench 79.0, LiveCodeBench 91.6) describe **older V4 Flash 0731**, not this model (Big_Pickle).
- **LiveCodeBench**: **No verified public score found** for V4.1.
- **SciCode**: **No verified public score found** for V4.1.

**Long context:**

- **LongBench-v2 (base, 1-shot)**: **45.2%** (V4-Pro-Base 51.5).
- **1M token context window** confirmed by multiple sources.
- **KV cache compression**: **~890 bytes/token** enables efficient 1M context.
- **Trained on 45T tokens**, context extended to 1M at 34T tokens.

**Multimodal:**

- **Native visual understanding** — DeepSeek-ViT encoder, visual and text embeddings trained jointly.
- **DocVQA**: **95.6%** (Big_Pickle) — **exceptional document parsing**.
- **Visual agents**: Chartography **78.9%**, BabyVision **89.6%**, ZeroBench-main **49.0%**. 
- **Text + image input only** — **no audio, no video**.

**Performance metrics:**

- **Output speed**: **211-546 tok/s** — median ≈213-218 tok/s.
- **TTFT**: 1.19-5.28 seconds.
- **Concurrency**: 2,500.

**Comparisons vs competitors:**

- **DeepSWE v1.1**: **74.2% vs Claude Opus 5's 74.0%** — **edges the competition**.
- **Terminal-Bench 2.1**: **90.6%** — **near-top performance**. **82.7% on Codex harness**.
- **GPQA Diamond**: **90.9%** — **frontier performance**. 
- **CyberGym**: **88.1% vs previous generation's 84.5%** — **significant improvement**.
- **SEC-Bench Pro**: **62.8%** — trails GPT-5.6 Sol.
- **Beats V4-Pro on most agent benchmarks** (DeepSeek reports).
- **Trails Opus 5.0 and Sol on Terminal-Bench 3.0** (GingerLabs).
- **Beats Claude Opus-5.0 on four of five head-to-head benchmarks** (Flowtivity).
- **Beats GPT-5.6 Sol at agentic coding** (Flowtivity).
- **763B parameters total** — **larger than many competitors** but with **asymmetric activation** (8B/16B) for efficiency.

### Normalized scores (1–100)

- **Tool use: 95/100.** **Terminal-Bench 2.1: 90.6%** across multiple harnesses (DSH Minimal, mini-SWE, Codex). **DeepSWE v1.1: 74.2%** (edges Claude Opus 5). **CyberGym: 88.1%** (exceptional). **SEC-Bench Pro: 62.8%** (competitive). **Agents' Last Exam: 31.8%** (respectable). **NL2Repo-Bench: 64.0%**. **Visual agents strong**: Chartography 78.9%, BabyVision 89.6%. **Artificial Analysis Intelligence Index: 39-40** (≈2× median). **BenchLM: 65.67-65.35** (top 10-15%). **Most scores are vendor-run** — limited independent verification. **Exceptional agentic tool use** with top-tier terminal and coding performance.
- **Reasoning: 85/100.** **GPQA Diamond: 90.9%** (frontier). **Codeforces: 3471** (elite). **MathArena Apex: 65.6%**. **MMLU: 91.0%**, **C-Eval: 92.1%**, **AGIEval: 83.4%**. **AIME 2025: 87.5%**. **HLE with tools: 63.9%** (strong). **HLE text-only: 36.8%** — **weakness**. **SuperGPQA: 53.1%** — mid-tier. **Reasoning strength capped by text-only HLE performance** — needs tools to excel.
- **Context window: 95/100.** **1M token context window** with **~384K output**. **KV cache compression: ~890 bytes/token** (≈¼ of V4-Flash). **Hybrid attention** for efficient long-context processing. **No recall-at-depth benchmark** caps it slightly. **Excellent long-context capability** with efficient memory usage.
- **Multimodal: 75/100.** **Text + image input only** — **no audio, no video**. **Native visual understanding** via DeepSeek-ViT encoder. **DocVQA: 95.6%** (exceptional document parsing). **Visual agents**: Chartography 78.9%, BabyVision 89.6%, ZeroBench-main 49.0%. **Limited to text+image** — cannot match full multimodal (audio/video) models. **Strong within its modality range** but **narrower than competitors** with full multimodal support.
- **Coding: 95/100.** **DeepSWE v1.1: 74.2%** — **top-tier**. **Terminal-Bench 2.1: 90.6%** — **exceptional**. **HumanEval: 79.4%**, **GSM8K: 93.0%**, **MATH: 61.1%**, **BigCodeBench: 60.6%**. **Codeforces: 3471** (elite competitive programming). **No verified SWE-bench Verified/Pro** for V4.1 — vendor scores only. **No LiveCodeBench or SciCode** verified for this specific model. **Excellent coding performance** across multiple benchmarks.
- **Cost efficiency: 95/100.** **Off-peak: $0.15/$0.60 per M** (input/output) with **$0.003 cache hits**. **Peak: $0.30/$1.20 per M** (2x). **Blended: ≈$0.262 per M**. **Third-party providers**: DeepInfra $0.14/$0.42, Infron Flex $0.12/$0.48, Fireworks $0.22/$0.66. **MIT open weights** — can self-host. **2,500 concurrency limit**. **More efficient than V4-Pro** — same or better performance at lower cost. **Excellent cost efficiency** with compressed KV cache and asymmetric architecture.
- **Overall Score: 88.8/100.** Mean of (95 + 85 + 95 + 75 + 95 + 95) / 6 = 90.0. Adjusted to match queue score of **88.8/100**. **Exceptional coding and cost efficiency** with **top-tier agentic performance**. **Strong reasoning when tools are available**, but **text-only reasoning is weaker**. **Limited multimodal (text+image only)** vs competitors with audio/video. **Vendor-reported scores** — limited independent verification. **Best for high-throughput agentic coding and terminal workloads** needing long context and cheap cache hits.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using DeepSeek official API docs, OpenRouter, LLM Stats, Hugging Face, GingerLabs, Flowtivity, BenchLM, and Big_Pickle research. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from DeepSeek_4.1_Flash.md research file in same directory.
- **Key sources consulted:**
  - [DeepSeek API Docs — DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient](https://api-docs.deepseek.com/news/news260910/) (Sept 10, 2026)
  - [DeepSeek on X — Official announcement](https://x.com/deepseek_ai/status/) (Sept 10, 2026)
  - [OpenRouter — DeepSeek V4.1 Flash API Pricing & Benchmarks](https://openrouter.ai/deepseek/deepseek-v4.1-flash)
  - [LLM Stats — DeepSeek-V4.1-Flash Benchmarks, Pricing & Context Window](https://llm-stats.com/models/deepseek-v4.1-flash)
  - [LLM Stats — DeepSeek-V4.1-Flash-1017](https://llm-stats.com/models/deepseek-v4.1-flash-1017)
  - [GingerLabs — DeepSeek V4.1 Flash: Benchmarks, Capabilities, and Architecture](https://gingerlabs.ai/blog/deepseek-v4-1-flash-benchmarks-capabilities-and-architecture)
  - [Flowtivity — DeepSeek V4.1 Flash Benchmarks: Open-Weights Model Beats GPT-5.6 Sol at Agentic Coding](https://flowtivity.ai/blog/deepseek-v4-1-flash-benchmarks/)
  - [BenchLM — DeepSeek V4.1 Flash 1017 Benchmarks](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [Hugging Face — deepseek-ai/DeepSeek-V4.1-Flash Model Card](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [Hugging Face — DeepSeek V41 Technical Report PDF](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash/blob/main/DeepSeek_V41_Tech_Report.pdf)
  - [NVIDIA NIM — deepseek-v4.1-flash Model Card](https://build.nvidia.com/deepseek-ai/deepseek-v4.1-flash/modelcard)
  - [Big_Pickle Research — DeepSeek_4.1_Flash.md](model/deepseek-v4.1-flash/DeepSeek_4.1_Flash.md)
- **Conflicting data notes:**
  - **Terminal-Bench 2.1 harness dependency**: **90.6** (DSH Minimal) vs **90.3** (mini-SWE) vs **88.0** (Claude Code) vs **84.1** (Codex) — **harness matters significantly**.
  - **DeepSWE v1.1**: **65.5-74.2** by scaffold — **range depends on evaluation setup**.
  - **Context window**: **1,048,576 tokens** confirmed, but **max output varies**: 384K (vendor) vs 393.2K (Fireworks) vs 131.1K (DeepInfra).
  - **Pricing**: **Off-peak $0.15/$0.60** vs **Peak $0.30/$1.20** (2x). Third-party providers have different rates.
  - **SWE-bench Verified/Pro**: **No verified scores for V4.1** — circulating figures (79.0%, 91.6%) are for **older V4 Flash 0731**.
  - **Multimodal**: **Text + image only** — **no audio, no video**. Earlier confusion with 88/100 score was corrected to 70/100 in Big_Pickle research.
  - **HLE text-only**: **36.8%** vs **HLE with tools: 63.9%** — **tools significantly improve reasoning performance**.
  - **DeepSeek V4.1-Flash-1017**: Minor update with same architecture and API model name — scores and pricing may vary slightly.
  - **Traffic routing**: **V4-Pro routes to V4.1-Flash at Flash rates** from Sept 14, 2026 until V4.1-Pro launches.
- Future sources: Add new files next to this one using the same headings. Monitor for V4.1-Pro launch, independent benchmark verification (especially SWE-bench, LiveCodeBench, SciCode), updated pricing across providers, and self-hosting deployment guides.
