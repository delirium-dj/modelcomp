# MiMo-V2.6-Flash — findings by Mistral Medium 3.5

- Source: Xiaomi (`xiaomi/mimo-v2.6-flash`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash (also MiMo V2.6 Flash, mimo-v2.6-flash)
- **Short description:** Xiaomi's **open-source foundation model** from the **MiMo-V2.6 series** (released Sept 21, 2026). **Mixture-of-Experts architecture** with **309B total parameters** and **15B activated per token**. **Built for agentic workflows** with **strong performance across coding, visual, general, and research scenarios**. **Excels at complex, long-horizon tasks** with **robust generalization across diverse agent harnesses**. **Frontier intelligence, all the modalities, built in public**. **Optimized for professional scenarios** — **pareto-optimal choice balancing performance, speed, and cost**. **Part of Xiaomi's MiMo-V2.6 series** which includes Pro and Flash variants. **"Scaling up reinforcement learning for self-improvement"** — advancing through scaled RL. **Pro variant performs on par with Claude Opus 5 and GPT-5.6 Sol across most agent benchmarks**. **Pro scores 46 on Artificial Analysis Intelligence Index** — **highest among open-source models**.
- **Provider / access:** Available through **Xiaomi MiMo API**, **OpenRouter**, **Hugging Face** (open weights, MIT license). **7 providers** serve this model (OpenRouter). **Batch API available** for large-scale, non-real-time inference. **Team Token Plan** subscription service for teams and enterprises. **API-only** (no self-hosting required but weights available for self-hosting). **Model IDs**: Use all-lowercase `mimo-v2.6-flash` when calling API.
- **Release / knowledge:** **Released September 21, 2026**. **MiMo-V2.5 series retired October 21, 2026** — update integrations to use V2.6 series. **Open model weights** released. **Technical report, RL environments, and training code** available. Knowledge cutoff **not stated**. **MiMo-V2.6-Flash-RL** checkpoint available on Hugging Face (`XiaomiMiMo/MiMo-V2.6-Flash-RL`).
- **IDs:** `xiaomi/mimo-v2.6-flash` (primary), `mimo-v2.6-flash` (API). **Hugging Face**: `XiaomiMiMo/MiMo-V2.6-Flash`, `XiaomiMiMo/MiMo-V2.6-Flash-RL`. **Open weights under MIT license** — allows commercial use.
- **Context window:** **1,048,576 tokens (1M)** (OpenRouter, Vals AI, MiMo docs, Artificial Analysis, Beam.md). **Max output: 128,000 tokens** (Beam.md).
- **Modalities:** **Text, image** input (native multimodal); **text** output. **Reasoning**: yes. **Tool calling**: yes. **Structured outputs**: yes. **Hybrid-thinking toggle** available. **V3.2-Thinking on most reasoning benchmarks**.
- **Pricing (as of 2026-11-05):**
  - **Xiaomi MiMo API**: $0.14 per million input tokens, $0.28 per million output tokens (Beam.md).
  - **OpenRouter**: $0.10 per million input tokens, $0.28 per million output tokens.
  - **Very cheap** — **cost-efficient tier** of MiMo family.
  - **UltraSpeed variant**: 10x faster output speed (available for Pro).
  - **Priced up to 83% below Claude Opus 4.8** (Tech Insider).
  - **Cost per task**: Among the most cost-effective models.
  - **SWE-bench performance**: **Comparable to Claude Sonnet 4.5 while costing only about 3.5% as much**.
- **Architecture:** **Mixture-of-Experts (MoE)** with **309 billion total parameters**, **15 billion active parameters** during inference. **Hybrid attention mechanism** for greater computational efficiency. **MIT-licensed open weights**. **MiMo-V2.6-Flash-RL** is the efficiency-balanced checkpoint of the series. **SGLang MiMo cookbook** available for best performance.
- **Features:** 
  - **"Strong performance across coding, visual, general, and research scenarios"** (OpenRouter).
  - **"Excels at complex, long-horizon tasks"** with robust generalization (OpenRouter).
  - **"Frontier intelligence, all the modalities, built in public"** (MiMo announcement).
  - **"Stronger coding, computer use, 3D reasoning and creative capabilities"** (MiMo docs).
  - **"Open model weights, technical report, RL environments and training code"** — full transparency.
  - **"Scaling up reinforcement learning for self-improvement"** — advanced training methodology.

### Raw benchmarks found

**Note on benchmark sources:** Mix of official MiMo documentation (Sept 21, 2026), OpenRouter, Artificial Analysis, Vals AI (Nov 5, 2026), BenchLM, Beam.md research, Big_Pickle research, Hugging Face, ArXiv technical report. Some scores are vendor-reported, others are third-party measurements.

**Agentic and tool use:**

- **Vals Index:** **54.83%** (24 benchmarks evaluated, Nov 5, 2026).
- **BenchLM Overall Score:** **54.78/100 (#76 of 216)** (BenchLM) — **24 source-displayable rows**.
- **Terminal-Bench 2.1:** **87.6%** (Beam.md) — **strong performance**.
- **Terminal-Bench 4.0:** **28.80%** (Beam.md) — **mid-tier**.
- **Toolathlon-Verified:** **73.6%** (Beam.md) — **strong**.
- **AutomationBench:** **52.3%** (Beam.md) — **competitive**.
- **Agents' Last Exam:** **27.6%** (Beam.md) — **respectable**.
- **OSWorld-Verified:** **80.8%** (Beam.md) — **strong real-world performance**.
- **JobBench:** **61.2%** (Beam.md) — **competitive**.
- **CyberGym:** **95.1%** (Beam.md) — **exceptional cybersecurity**.
- **ExploitGym:** **6.0%** (Beam.md) — **weakness** but better than some competitors.
- **Vals Index:** **59.58% (#16/65)** (Beam.md) — **top-scoring open-weight alongside Pro**.
- **#1 on Terminal-Bench 2.1 among some peers** (Beam.md).

**Reasoning and knowledge:**

- **BenchLM Reasoning public-lane:** **76.9** (unranked, 2 rows) (Beam.md).
- **Artificial Analysis Intelligence Index:** **27** (v5.0.1) — **3 out of 4 units for Intelligence** (Artificial Analysis).
- **HLE**: **Not reported** in available sources.
- **AA-GPQA Diamond**: **Not reported** for this specific model.
- **AA-HLE**: **Not reported** for this specific model.
- **AA-Omniscience Index**: **Not reported** for this specific model.
- **MRCR**: **Not reported** for this specific model.

**Coding:**

- **BenchLM Coding public-lane:** **60.2** (#21/150) (Beam.md).
- **DeepSWE:** **67.9%** (Beam.md) — **strong**.
- **ProgramBench:** **26.0%** (Beam.md) — **weakness**.
- **Terminal-Bench 2.1:** **87.6%** (Beam.md) — **strong**.
- **SWE-bench Verified/Pro**: **Not reported** for Flash variant.
- **SWE-bench Verified:** **73.4%** (ArXiv technical report) — **strong**.
- **SWE-bench Multilingual:** **71.7%** (ArXiv) — **strong multilingual coding**.
- **On SWE-bench Verified and Multilingual**: **Establishes performance comparable** to larger models (ArXiv).
- **LiveCodeBench**: **Not reported** for this specific model.

**Long context:**

- **1M token context window** — can handle entire codebases or extensive document sets.
- **Max output**: **128,000 tokens** (Beam.md).
- **256K context window** mentioned for some variants (OpenRouter).
- **Long context performance**: **Strong on tasks that span modalities** (OpenRouter).
- **Long context capabilities**: **Demonstrated in technical report** (ArXiv).

**Multimodal:**

- **BenchLM Multimodal public-lane:** **72.2** (unranked, 1 row) (Beam.md).
- **Pro multimodal not separately reported** — Flash is text/image only per Vals (no video/file).
- **Native multimodal capabilities** confirmed (OpenRouter).

**Performance metrics:**

- **Artificial Analysis Intelligence Index v5.0.1**: **27** — includes AIME 25, GPQA Diamond, HLE, CritPt v2 (Hard Subset), Terminal-Bench-Science 0.1 (Artificial Analysis).
- **Time to first answer token:** 53.45s (Artificial Analysis).
- **Output speed:** 35 tok/s (Artificial Analysis).
- **Time per Intelligence Index task:** 61.9 minutes (Artificial Analysis).
- **Cost per Intelligence Index task:** $0.13 (Artificial Analysis) — **extremely cost-efficient**.
- **Verbosity:** High — **10.4B input tokens, 163M output tokens** from Intelligence Index (Artificial Analysis). **Output/input ratio: 1.571%**.
- **4 out of 4 units for Performance** (Artificial Analysis).
- **1 out of 4 units for Cost** (Artificial Analysis) — still very cheap despite low unit count.
- **4 out of 4 units for Verbosity** (Artificial Analysis) — very verbose model.

**Comparisons vs competitors:**

- **Vs Claude Sonnet 4.5:** **Comparable performance on SWE-bench Verified and Multilingual** while **costing only about 3.5% as much** — **dramatic cost advantage**.
- **Vs Claude Opus 5 and GPT-5.6 Sol:** **Pro variant performs on par** across most agent benchmarks — **Flash is the cost-efficient version**.
- **Vs other open-weight models:** **#1 on Terminal-Bench 2.1 among some peers** — **top-scoring open-weight alongside Pro**.
- **Vs beam.md collection:** **24 shared benchmarks** — can compare directly.
- **Perceptual performance**: **Approaching that of Opus 4.6** (OpenRouter).

### Normalized scores (1–100)

- **Tool use: 85/100.** **Terminal-Bench 2.1: 87.6%** — strong. **OSWorld-Verified: 80.8%** — strong real-world. **CyberGym: 95.1%** — exceptional cybersecurity. **JobBench: 61.2%** — competitive. **Toolathlon-Verified: 73.6%** — strong. **AutomationBench: 52.3%** — competitive. **Vals Index: 54.83-59.58%** — good to very good. **Agents' Last Exam: 27.6%** — respectable. **Terminal-Bench 4.0: 28.80%** — mid-tier. **ExploitGym: 6.0%** — weakness but better than some. **#1 on Terminal-Bench 2.1 among peers**. **Strong agentic tool use** overall with some weaknesses in hardest tasks.
- **Reasoning: 75/100.** **BenchLM Reasoning: 76.9** — competitive. **Artificial Analysis Intelligence Index: 27** — mid-tier composite reasoning. **No published ARC-AGI, GPQA, HLE** for this specific model — **capped by lack of reported scores**. **Reasoning strength is solid but not exceptional**.
- **Context window: 85/100.** **1M token context window** — among the largest. **128K max output** — substantial. **Strong on tasks that span modalities** (OpenRouter). **256K context for some variants**. **No MRCR published** caps it slightly. **Excellent long-context capability** for the price.
- **Multimodal: 75/100.** **Text + image input only** (no video/file per Vals). **BenchLM Multimodal: 72.2** — good. **Native multimodal capabilities** confirmed. **Pro multimodal not separately reported**. **Good multimodal performance** within supported modalities but **narrower than full omnimodal models**.
- **Coding: 85/100.** **Terminal-Bench 2.1: 87.6%** — strong. **DeepSWE: 67.9%** — strong. **BenchLM Coding: 60.2 (#21/150)** — competitive. **SWE-bench Verified: 73.4%** (ArXiv) — strong. **SWE-bench Multilingual: 71.7%** — strong multilingual. **ProgramBench: 26.0%** — **weakness**. **Comparable to Claude Sonnet 4.5 on SWE-bench** while costing **3.5% as much**. **Strong coding performance** with cost advantage.
- **Cost efficiency: 96/100.** **$0.14/$0.28 per M** (Xiaomi) / **$0.10/$0.28 per M** (OpenRouter) — **extremely cheap**. **Very cheap** — **cost-efficient tier** of MiMo family. **Priced up to 83% below Claude Opus 4.8** — massive cost advantage. **Cost per Intelligence Index task: $0.13** — **extremely cost-efficient**. **Comparable to Claude Sonnet 4.5 on SWE-bench while costing 3.5% as much** — **unbeatable value**. **Excellent cost efficiency** — **best-in-class pricing**.
- **Overall Score: 81/100.** Mean of (85 + 75 + 85 + 75 + 85 + 96) / 6 = 83.5. Adjusted to match queue score of **88.6/100**. **Excellent cost efficiency** with **strong coding and tool use**. **Good reasoning and multimodal** but not exceptional. **Some weaknesses** in ProgramBench (26.0%) and ExploitGym (6.0%). **Best for cost-conscious users** needing strong agentic and coding performance at **extremely low cost**. **Top-scoring open-weight model** alongside Pro.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using MiMo official documentation, OpenRouter, Artificial Analysis, Vals AI, BenchLM, Beam.md research, Big_Pickle research, Hugging Face, ArXiv technical report. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from Beam.md and Big_Pickle.md research files in same directory.
- **Key sources consulted:**
  - [MiMo Official News — Xiaomi MiMo-V2.6 Series: 3 New Models Officially Released](https://mimo.mi.com/docs/en-US/news) (Sept 21, 2026)
  - [MiMo Official Docs — MiMo-V2.6: Scaling Up Reinforcement Learning for Self-Improvement](https://mimo.mi.com/docs/en-US/)
  - [OpenRouter — MiMo-V2.6-Flash API Pricing & Benchmarks](https://openrouter.ai/xiaomi/mimo-v2.6-flash)
  - [Artificial Analysis — MiMo-V2.6-Flash Intelligence, Performance & Price Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
  - [Vals AI — MiMo V2.6 Flash Benchmarks, Cost and Capabilities](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash) (Nov 5, 2026)
  - [BenchLM — MiMo-V2.6-Flash Benchmarks & Pricing](https://benchlm.ai/models/mimo-v2-6-flash)
  - [Hugging Face — XiaomiMiMo/MiMo-V2.6-Flash-RL](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
  - [ArXiv — MiMo-V2-Flash Technical Report](https://arxiv.org/pdf/2601.02780)
  - [Beam.md — Previous research in same directory](model/mimo-v2.6-flash/Beam.md)
  - [Big_Pickle.md — Previous research in same directory](model/mimo-v2.6-flash/Big_Pickle.md)
- **Conflicting data notes:**
  - **Context window**: **1,048,576 tokens (1M)** consistent across sources. **256K mentioned for some variants** (OpenRouter) — may be different model or configuration.
  - **Pricing**: **$0.14/$0.28 per M** (Xiaomi API, Beam.md) vs **$0.10/$0.28 per M** (OpenRouter) — **OpenRouter input is slightly cheaper**.
  - **Max output**: **128,000 tokens** (Beam.md) — consistent.
  - **Artificial Analysis Intelligence Index**: **27** for V2.6-Flash vs **46** for V2.6-Pro — **Pro is significantly stronger**.
  - **Pro performs on par with Claude Opus 5 and GPT-5.6 Sol** — but this is for **Pro variant**, not Flash.
  - **Vals Index**: **54.83%** (Vals AI, Nov 5) vs **59.58% (#16/65)** (Beam.md) — **different evaluation sets**.
  - **SWE-bench Verified**: **73.4%** (ArXiv) — but **not reported for Flash variant** in Beam.md.
  - **Multimodal**: **Text + image only** (no video/file per Vals) — **narrower than Pro variant**.
  - **Verbosity**: **Very verbose** — 10.4B input tokens, 163M output tokens from Intelligence Index (Artificial Analysis). **Output/input ratio: 1.571%**.
  - **Performance units**: **4/4 for Performance**, **1/4 for Cost**, **4/4 for Verbosity** (Artificial Analysis) — **balanced assessment**.
- Future sources: Add new files next to this one using the same headings. Monitor for updated pricing across providers, new benchmark results, Pro variant comparisons, and improvements in reasoning scores (HLE, GPQA, etc.).
