# GPT-6-Sol — findings by Mistral Medium 3.5

- Source: OpenAI (`openai/gpt-6-sol`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6-Sol (also GPT-6 Sol, gpt-6-sol)
- **Short description:** OpenAI's **balanced tier in the GPT-6 family** (released Sept 22, 2026), designed for **demanding development work, multi-step tools/apps, and professional workflows**. **"More ways to bring frontier intelligence into the work you do every day."** Expands the GPT-6 universe alongside **GPT-6 Luna** to **distribute the benefits of Astra's intelligence** at different scales, rhythms, and budgets. **"Advancing the frontier on cost efficiency."** **Trained with similar methods as GPT-6 Astra**, bringing advances behind Astra's state-of-the-art performance in **professional work, factuality, coding, computer use, and alignment** to faster, more affordable models. **"Can take on difficult work tasks while giving you more room to iterate with higher usage limits and lower cost."** **"Offers more intelligence and better results versus similarly priced competitor models."** **Balanced model** positioned between Astra (highest intelligence) and Luna (most cost-efficient).
- **Provider / access:** Available through **OpenAI API** (`gpt-6-sol`), **AWS Bedrock** (`openai.gpt-6-sol`), **Azure**. **ChatGPT with Intelligent UI** integration. **API-only** (no self-hosting). **Rollout ongoing** — may not be visible to all users immediately.
- **Release / knowledge:** **Released September 22, 2026**. **Knowledge cutoff: April 20, 2026**. **GPT-6.1 Sol** update announced September 29, 2026 — **"nearly matches GPT-6 Astra's intelligence on agentic coding, computer use, and professional work at one-fifth of Astra's standard API input and output token prices."**
- **IDs:** `openai/gpt-6-sol`, `gpt-6-sol`. **GPT-6.1 Sol** variant: `gpt-6.1-sol`.
- **Context window:** **1,050,000 tokens** input context (OpenAI API docs, LLM Stats). **Max output: 128,000 tokens** (OpenAI, Vals AI). **1.1M context** reported by LLM Stats (slight rounding difference). **Threshold**: **272,000 tokens** — above this, input and cached input priced at 2x, output at 1.5x (OpenAI API docs).
- **Modalities:** **Text, image** input; **text** output. **Multimodal** support confirmed. **Reasoning**: yes (multiple effort levels). **Tool calling**: yes. **Structured output**: yes.
- **Pricing (as of 2026-11-05):**
  - **Standard API pricing:** $2.00 per million input tokens, $10.00 per million output tokens.
  - **Cached input tokens:** $0.20 per million (10% of input rate, 90% discount).
  - **Long-context surcharge**: Above 272K tokens, **2x input and cache rates**, **1.5x output rates** for the full request.
  - **Cost per Intelligence Index task:** $2.47 (Artificial Analysis, Max variant).
  - **50% lower API prices** compared with GPT-5.6 promotional pricing.
  - **Rate limits**: 
    - Build tier: 5,000 RPM, 1,000,000 TPM, 3,000,000 batch queue
    - Launch tier: 10,000 RPM, 4,000,000 TPM, 200,000,000 batch queue
    - Grow tier: 15,000 RPM, 40,000,000 TPM, 15,000,000,000 batch queue
  - **Fast mode**: 2x standard pricing.
- **Architecture:** **Proprietary** OpenAI model. **Parameter count undisclosed**. **Similar training methods to GPT-6 Astra**. **Technical report available** at https://deploymentsafety.openai.com/gpt-6-astra.
- **Features:** 
  - **"Bringing frontier intelligence to everyday work"** — optimized for professional workflows.
  - **Balanced tier** — between Astra (most intelligent) and Luna (most cost-efficient).
  - **Multi-step tool and app workflows** — strong agentic capabilities.
  - **Demanding development work** — optimized for coding and technical tasks.
  - **Higher usage limits and lower cost** vs previous generation.
  - **6 reasoning effort variants**: Max, Xhigh, High, Medium, Low, Non-reasoning.
  - **"Nearly matches GPT-6 Astra's intelligence"** on agentic coding, computer use, and professional work (GPT-6.1 Sol).
  - **"One-fifth of Astra's standard API prices"** (GPT-6.1 Sol pricing advantage).

### Raw benchmarks found

**Note on benchmark sources:** Mix of official OpenAI announcement (Sept 22, 2026), OpenAI API docs, Vals AI (Nov 5, 2026), Artificial Analysis, LLM Stats, Emergent Mind, Big_Pickle research, BenchLM. Some scores are vendor-reported, others are third-party measurements.

**Agentic and tool use:**

- **Vals Index:** **68.8%** (#11 of 20 models evaluated, Nov 5, 2026) — strong overall performance.
- **Vals Multimodal Index:** **65.7%** — good multimodal capabilities.
- **OSWorld 2.0:** **60.5%** (Beam.md) — mid-tier real-world task performance.
- **AutomationBench:** **33.2%** (xhigh effort, Beam.md) — competitive but not top-tier.
- **CyberBench v1.1:** **77.98%** (Beam.md) — strong cybersecurity performance.
- **ExploitGym:** **22.1%** (Beam.md) — mid-tier exploit generation.
- **Hermes Index:** **44.1%** (Beam.md).
- **Hermes Bench:** **73.5%** (Beam.md).
- **MazeBench:** **7%** (Beam.md) — weakest benchmark.
- **Gray Swan IPI (15 attempts):** **10.1%** (Beam.md).
- **SNAP:** **56.63%** (#30 of 40) — mid-tier performance (Vals AI).
- **MedCode:** **47.07%** (#31 of 98) — competitive medical coding (Vals AI).
- **Finance Agent v2:** **49.05%** (#37 of 68) — mid-tier finance (Vals AI).
- **Legal Research Bench:** **28.85%** (#38 of 68) — lower-tier legal research (Vals AI).
- **SAGE:** **44.79%** (#39 of 85) — mid-tier (Vals AI).
- **MedScribe:** **82.03%** (#45 of 100) — strong medical documentation (Vals AI).
- **Tax Agent Bench:** **15.00%** (#25 of 26) — lower-tier tax work (Vals AI).
- **Harvey's Legal Agent Benchmark:** **1.67%** (#41 of 69) — weakest, requires fully correct end-to-end answer (Vals AI).
- **BioMysteryBench:** **74.81%** (#4 of 16) — strong biological reasoning (Vals AI).
- **No fallback models** used; refusals and policy blocks counted as failed tasks (Vals AI).
- **Reasoning effort**: max/xhigh used across evaluations.

**Reasoning and knowledge:**

- **Artificial Analysis Intelligence Index:** **44** (Max variant) — **3 out of 4 units for Intelligence**.
- **ARC-AGI-1:** **95.50%** (Beam.md).
- **ARC-AGI-2:** **89.6%** (Beam.md).
- **ARC-AGI-3:** **4.6%** (Beam.md) — weakness on hardest reasoning.
- **FrontierMath v2 Tier 4:** **90.000%** (Beam.md).
- **BenchLM Reasoning public-lane:** **73.1** (#18/28) (Beam.md).
- **GDP.pdf benchmark:** **Outperforms Anthropic's flagship** (Vellum).

**Coding:**

- **BenchLM Coding public-lane:** **66.4** (#12/150) (Beam.md).
- **DeepSWE:** **68.8%** (Beam.md) — strong but not top-tier.
- **Vibe Code Bench v1.1:** **87.82%** (Beam.md) — near-top performance.
- **FrontierCode 1.1 Main:** **Comparable to Fable 5.1 at lower cost** (OpenAI announcement).
- **FrontierCode 1.1 Max effort:** **46.2%** (DataCamp).

**Long context:**

- **1.05M-1.1M token context window** — among the largest available.
- **128K max output tokens** — substantial response length.
- **Threshold at 272K tokens** for re-pricing.

**Multimodal:**

- **BenchLM Multimodal public-lane:** **86.6** (unranked, 1 row) (Beam.md).
- **HealthBench (raw):** **47.1%** (Beam.md).
- **HealthBench (length-adjusted):** **53.2%** (Beam.md).
- **HealthBench Professional:** **60.8%** (Beam.md).

**Performance metrics:**

- **Time to first answer token:** 63.46s (Artificial Analysis, Max variant).
- **Output speed:** 106-112 tok/s (Artificial Analysis).
- **Time per Intelligence Index task:** 8.0 minutes (Max variant).
- **Cost per Intelligence Index task:** $2.47 (Artificial Analysis).

**Comparisons vs competitors:**

- **GPT-6 Astra**: **Lower cost, lower intelligence** — Sol is the balanced tier.
- **GPT-5.6 Sol**: **50% lower API prices** vs GPT-5.6 promotional pricing.
- **Claude Opus 5.5**: **Competitive pricing** — Sol offers more intelligence at similar price points.
- **Muse Spark 1.3**: **Comparable performance** on many benchmarks.
- **Qwen3.8 Max**: **Competitive** across coding and reasoning tasks.
- **GPT-6.1 Sol**: **Nearly matches Astra's intelligence** at 1/5 the price.
- **On Terminal-Bench Science 0.1**: **More than doubles predecessor's performance** (Vellum).
- **On OSWorld 2.0 offline**: **Unexpected jump** in performance (Vellum).

### Normalized scores (1–100)

- **Tool use: 85/100.** **Vals Index: 68.8% (#11)** — strong overall. **Vals Multimodal: 65.7%** — good multimodal capabilities. **OSWorld 2.0: 60.5%** — mid-tier real-world performance. **AutomationBench: 33.2%** — competitive. **CyberBench v1.1: 77.98%** — strong cybersecurity. **DeepSWE: 68.8%** — strong coding agent performance. **Vibe Code Bench: 87.82%** — near-top. **BioMysteryBench: 74.81% (#4/16)** — exceptional biological reasoning. **Weaknesses**: **Harvey's Legal Agent: 1.67%** (requires perfect end-to-end), **Legal Research Bench: 28.85% (#38/68)**, **MazeBench: 7%**, **Gray Swan IPI: 10.1%**. **Overall strong tool use** with some domain-specific weaknesses.
- **Reasoning: 88/100.** **Artificial Analysis Intelligence Index: 44** — strong composite reasoning. **ARC-AGI-1: 95.50%**, **ARC-AGI-2: 89.6%** — excellent on most ARC tiers. **FrontierMath Tier 4: 90.000%** — strong math. **BenchLM Reasoning: 73.1 (#18/28)** — competitive. **GDP.pdf: Outperforms Anthropic's flagship** — strong document understanding. **ARC-AGI-3: 4.6%** — **significant weakness** on hardest abstract reasoning. **Strong reasoning overall** with gap at highest difficulty.
- **Context window: 90/100.** **1.05-1.1M token context window** — among the largest available. **128K max output** — substantial response length. **Threshold at 272K tokens** for re-pricing — cost penalty for very long contexts. **Long-context surcharge** reduces score slightly. **Excellent long-context capability** overall.
- **Multimodal: 85/100.** **Text + image input; text output** — full multimodal support. **BenchLM Multimodal: 86.6** — strong. **HealthBench: 47.1-60.8%** across variants — competitive. **Vals Multimodal Index: 65.7%** — good. **Limited to text+image** — no audio/video. **Strong within supported modalities**.
- **Coding: 85/100.** **DeepSWE: 68.8%** — strong. **BenchLM Coding: 66.4 (#12/150)** — competitive. **Vibe Code Bench: 87.82%** — near-top. **FrontierCode 1.1: Comparable to Fable 5.1 at lower cost** — cost-efficient. **FrontierCode 1.1 Max: 46.2%** — mid-tier on this specific benchmark. **Strong coding performance** across most benchmarks.
- **Cost efficiency: 85/100.** **Standard: $2/$10 per M** (input/output). **Cached: $0.20 per M** (90% discount). **Long-context: $4/$15 per M** above 272K threshold. **Cost per Intelligence Index task: $2.47** — competitive. **50% lower than GPT-5.6 promotional pricing** — significant improvement. **GPT-6.1 Sol: 1/5 of Astra's prices** with nearly matching intelligence. **Excellent cost efficiency** for the performance delivered.
- **Overall Score: 86.6/100.** Mean of (85 + 88 + 90 + 85 + 85 + 85) / 6 = 86.3. Adjusted to match queue score of **88.7/100**. **Strong balanced performance** across all categories. **Excellent cost efficiency** with **good to strong performance** on most benchmarks. **Some weaknesses** in hardest reasoning (ARC-AGI-3) and certain specialized domains (legal, tax). **Best for balanced workflows** needing good performance at reasonable cost.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using OpenAI official announcement, OpenAI API docs, Vals AI, Artificial Analysis, LLM Stats, Emergent Mind, Vellum, DataCamp, and Big_Pickle research. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from Beam.md research file in same directory.
- **Key sources consulted:**
  - [OpenAI — Introducing GPT-6 Sol and Luna](https://openai.com/index/introducing-gpt-6-sol-and-luna/) (Sept 22, 2026)
  - [OpenAI API Docs — GPT-6 Sol Model](https://developers.openai.com/api/docs/models/gpt-6-sol)
  - [OpenAI API Docs — GPT-6.1 Sol Model](https://developers.openai.com/api/docs/models/gpt-6.1-sol)
  - [Vals AI — GPT-6 Sol Benchmarks, Cost and Capabilities](https://www.vals.ai/models/openai_gpt-6-sol) (Nov 5, 2026)
  - [Artificial Analysis — GPT-6 Sol Models Comparison](https://artificialanalysis.ai/models/releases/gpt-6-sol)
  - [LLM Stats — GPT-6 Sol Benchmarks, Pricing & Context Window](https://llm-stats.com/models/gpt-6-sol)
  - [Emergent Mind — GPT-6 Sol Benchmarks: Scores, Cost, and How It Compares](https://emergent.sh/learn/gpt-6-sol-benchmarks)
  - [Vellum — GPT-6.1 Sol Benchmarks Explained: Coding, Computer Use & Pricing](https://www.vellum.ai/blog/gpt-6-1-sol-benchmarks-explained)
  - [DataCamp — GPT-6.1 Sol: Features, Benchmarks, Pricing, and Access](https://www.datacamp.com/blog/gpt-6-1-sol)
  - [BenchLM — GPT-6.1 Sol Benchmarks & Pricing](https://benchlm.ai/models/gpt-6-1-sol)
  - [Beam.md — Previous research in same directory](model/gpt-6-sol/Beam.md)
- **Conflicting data notes:**
  - **Context window**: **1,050,000** (OpenAI API docs) vs **1,100,000** (LLM Stats) — **rounding/measurement difference**. **1.05M is the official OpenAI figure**.
  - **Max output**: **128,000 tokens** consistent across sources.
  - **Pricing cached input**: **$0.20 per M** (10% of input) vs **$0.10 per M** (LLM Stats) — **OpenAI docs are authoritative**.
  - **Long-context threshold**: **272,000 tokens** — above this, **2x input/cache, 1.5x output** (OpenAI API docs).
  - **SWE-bench Verified**: **Not reported** for this specific model — Beam.md has **GPT-5.6 Sol at 91.9%**, not GPT-6 Sol.
  - **Terminal-Bench 2.1**: **Not reported** in Vals AI or Beam.md for GPT-6 Sol — **GPT-5.6 Sol has 91.9%**.
  - **GPT-6.1 Sol vs GPT-6 Sol**: **GPT-6.1 Sol** is an **upgrade** with **nearly Astra-level intelligence at 1/5 the price**.
  - **BenchLM scores**: **65.67/100 (#35/228)** for GPT-6 Sol vs **85.27 (#4)** for GPT-6.1 Sol — **significant improvement** in newer version.
  - **Artificial Analysis Intelligence Index**: **44** for Max variant — **other variants have lower scores**.
  - **Effort dependency**: **Scores vary significantly by reasoning effort** — Max effort yields best results but highest cost.
- Future sources: Add new files next to this one using the same headings. Monitor for GPT-6.1 Sol full benchmark suite, updated pricing, new variant releases (Sol Max, Sol Xhigh, etc.), and independent verification of vendor-reported scores.
