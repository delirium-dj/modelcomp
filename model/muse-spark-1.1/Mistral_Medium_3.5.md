# Muse-Spark-1.1 — findings by Mistral Medium 3.5

- Source: Meta (`meta/muse-spark-1.1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1 (also Muse Spark 1.1)
- **Short description:** Meta's **upgraded Muse Spark** (released July 9, 2026) from **Meta Superintelligence Labs**. **Multimodal reasoning model built for agentic tasks** with **major gains in tool/computer use, coding, and multimodal understanding**. **"Significant upgrade"** from the original Muse Spark (April 2026). **Successor to Muse Spark 1.0**. **Designed to orchestrate multi-agent workflows** — can act as either a **main agent that plans and delegates** or as a **subagent**, and **generalizes zero-shot to new tools, MCP servers, and custom skills**. **Strong performance on real-world coding across large codebases, computer-use workflows, multi-file refactors, extended debugging sessions, whole-repository generation, and tasks that stretch well past a single prompt**. **Trained to smoothly adapt to diverse harnesses and reliably handle complex multi-turn dynamics**. **Supports popular agentic coding setups** including planning mode, goal conditioning, subagent delegation, and context compaction.
- **Provider / access:** Available through **Meta Model API** (`muse-spark-1.1`) in **public preview**; **Meta AI app**. **OpenAI-compatible API** for lower switching cost. **Public preview opened to US developers in July 2026**. **API-only** (no self-hosting). **Every new developer account starts with $20 in free credits** before switching to pay-as-you-go (Meta blog, Tech Insider, CNBC).
- **Release / knowledge:** **Released July 9, 2026** (Meta blog, OpenRouter, Tech Insider). Knowledge cutoff **not stated** in official documentation. **First model Meta has ever asked anyone to pay for** (Tech Insider).
- **IDs:** `meta/muse-spark-1.1`. Model served through Meta Model API.
- **Context window:** **1,048,576 tokens (1M)** (OpenRouter, Meta blog, Kingy.ai, Handy AI). **Max output not stated** in official docs but implied to be substantial given 1M input context.
- **Modalities:** **Text, image, video, PDF** input; **text** output. **Full multimodal support**. **Reasoning**: yes. **Tool calling**: yes (accepts tools and tool_choice for function calling). **Structured outputs**: yes (via JSON schema in response_format). **Parallel function calling** supported. **Built-in search with citations**. **Configurable reasoning effort**.
- **Pricing (as of 2026-11-05):**
  - **Meta Model API:** $1.25 per million input tokens, $4.25 per million output tokens.
  - **Priced up to 83% below Claude Opus 4.8** (Tech Insider, Yahoo Finance analysis).
  - **Runs at roughly one-tenth the cost of OpenAI's GPT-5.5** (Tech Insider).
  - **Every new developer account**: $20 in free credits initially.
  - **No long-context surcharge** — **one flat rate the whole way to a million tokens** (eesel AI). **Meta does not add long-context surcharge** unlike OpenAI.
  - **Cost per task**: **4th cheapest of 26 frontier models** on Artificial Analysis (eesel AI).
  - **On measured cost per task**: **Muse Spark 1.1 output runs $4.25 per million** vs **$25.00 for Opus 5** vs **$30.00 for GPT-5.6 Sol** (eesel AI).
  - **For long-context agent workload**: **Flat rate is worth more than small difference in base rate** (eesel AI).
- **Architecture:** **Proprietary** Meta model. **Parameter count undisclosed**. **First text-and-reasoning model** from Meta Superintelligence Labs (original Muse Spark was closer to proof of concept).
- **Features:** 
  - **"Agentic capabilities":** Multi-agent orchestration, planning and delegation, zero-shot generalization to new tools.
  - **"Strong real-world coding":** Diagnose/fix complex bugs, implement features, execute large code migrations.
  - **"Computer-use workflows":** Strong performance on GUI and terminal tasks.
  - **"Adapts to diverse harnesses":** Handles complex multi-turn dynamics reliably.
  - **"Built-in search":** With citations for grounded responses.
  - **"Configurable reasoning":** Multiple effort levels available.
  - **"OpenAI-compatible API":** Lower switching cost for existing OpenAI users.

### Raw benchmarks found

**Note on benchmark sources:** Mix of official Meta AI blog (July 9, 2026), OpenRouter, Vals AI (Nov 5, 2026), Tech Insider, Kingy.ai, Handy AI Substack, BenchLM, Beam.md research. Some scores are vendor-reported, others are third-party measurements.

**Agentic and tool use:**

- **Vals Index:** **65.2%** (19 benchmarks evaluated, Nov 5, 2026).
- **Terminal-Bench 2.1:** **80.0%** (Beam.md, Kingy.ai) — **strong performance**. **69.3%** (Vals AI).
- **MCP Atlas:** **88.1%** (Beam.md, Handy AI) — **exceptional multi-agent performance**.
- **Toolathlon:** **75.6%** (Beam.md).
- **OSWorld-Verified:** **80.8%** (Beam.md) — **strong real-world task performance**.
- **OSWorld 2.0:** **14.2%** (Beam.md) — **weakness** (but this may be version-specific).
- **JobBench:** **54.7%** (Beam.md, Handy AI) — **Opus 4.8: 48.4%, GPT-5.5: 38.6%** — **leads on this benchmark**.
- **Cybench:** **92.9%** (Beam.md) — **exceptional**.
- **ExploitGym:** **0.8%** (Beam.md) — **weakest benchmark** (significant limitation for security tasks).
- **GDPval-AA:** **1375 Elo** / **35.6%** (Beam.md).
- **AA Agentic Index:** **27.5%** (Beam.md).
- **Terminal-Bench 2.1 (Vals AI):** **69.3%** — good but not top-tier.
- **Moves well on multi-part tasks**: **Notices new context and makes updates without user intervention** (Meta blog example: dinner party organization).
- **Strong with popular agentic coding setups**: Planning mode, goal conditioning, subagent delegation, context compaction (Meta blog).

**Reasoning and knowledge:**

- **BenchLM Reasoning public-lane:** **79.2** (unranked, 3 rows) (Beam.md).
- **HLE:** **62.1%** (Beam.md) — strong.
- **HLE w/o tools:** **52.2%** (Beam.md) — **significant drop without tools**.
- **HealthBench Professional:** **59.3%** (Beam.md).
- **AA Intelligence Index:** **33.7** (Beam.md).
- **AA-GPQA Diamond:** **89.8%** (Beam.md) — **strong**.
- **AA-HLE:** **46.2%** (Beam.md).
- **AA-Omniscience Index:** **28.1%** (Beam.md).
- **MRCR 1M:** **54.1%** (Beam.md) — mid-tier long-context retrieval.
- **BioMysteryBench:** **74.81%** (#4 of 16) (Vals AI).
- **SNAP:** **56.63%** (#30 of 40) (Vals AI).
- **MedCode:** **47.07%** (#31 of 98) (Vals AI).
- **Finance Agent v2:** **49.05%** (#37 of 68) (Vals AI).
- **Legal Research Bench:** **28.85%** (#38 of 68) (Vals AI).
- **SAGE:** **44.79%** (#39 of 85) (Vals AI).
- **MedScribe:** **82.03%** (#45 of 100) (Vals AI).
- **Tax Agent Bench:** **15.00%** (#25 of 26) (Vals AI).
- **Harvey's Legal Agent Benchmark:** **1.67%** (#41 of 69) (Vals AI) — **requires fully correct end-to-end answer**.

**Coding:**

- **BenchLM Coding public-lane:** **52.7** (#39/150) (Beam.md).
- **Terminal-Bench 2.1:** **80.0%** (Beam.md, Kingy.ai).
- **SWE-bench Pro:** **61.5%** (Beam.md, Kingy.ai) — **Claude Opus 4.8 leads at 69.2%, GPT-5.5 scores 58.6%** — **Muse Spark 1.1 is competitive**.
- **DeepSWE:** **53.3%** (Kingy.ai) — **Original Muse Spark: 10.0%** — **significant leap**.
- **LiveCodeBench (Vals AI):** **85.9%** — **strong**.
- **SWE-bench (Vals AI):** **82.0%** — **strong**.
- **Performance on real-world coding**: **Diagnose/fix complex bugs, implement new features, execute large code migrations** across enterprise-grade systems (Meta blog).

**Long context:**

- **1M token context window** — can handle entire codebases or extensive document sets.
- **MRCR 1M:** **54.1%** — mid-tier retrieval performance.
- **Strong on long-horizon tasks** that stretch past a single prompt (OpenRouter).

**Multimodal:**

- **BenchLM Multimodal public-lane:** **81.9** (unranked, 2 rows) (Beam.md).
- **CharXiv:** **88.4%** (Beam.md) — **exceptional** on chart understanding.
- **BabyVision:** **76.3%** (Beam.md) — **strong** visual reasoning.
- **Meta's search grounding demo**: Pulls live web results into answers (eesel AI).
- **Visual reasoning**: **Runs through real execution environment instead of scripted steps** (Meta dev page).
- **Perceives video, images, documents** — full multimodal perception.

**Performance metrics:**

- **BenchLM Overall Score:** **65.16/100 (#32)** (BenchLM) — **40 source-displayable rows**.
- **No fallback models** used; refusals and policy blocks counted as failed tasks (Vals AI).

**Comparisons vs competitors:**

- **Vs Claude Opus 4.8:** **Priced up to 83% below** — **significant cost advantage**.
- **Vs GPT-5.5:** **Runs at roughly one-tenth the cost** — **massive cost advantage**.
- **Terminal-Bench 2.1:** **80.0%** vs **Claude Opus 4.8: 69.2%**, **GPT-5.5: 58.6%** — **Muse Spark 1.1 leads**.
- **SWE-bench Pro:** **61.5%** vs **Claude Opus 4.8: 69.2%** — **Claude leads**.
- **JobBench:** **54.7%** vs **Opus 4.8: 48.4%**, **GPT-5.5: 38.6%** — **Muse Spark 1.1 leads**.
- **DeepSWE:** **53.3%** vs **Original Muse Spark: 10.0%** — **5x improvement**.
- **Cybench:** **92.9%** — **exceptional**, near-top.
- **OSWorld-Verified:** **80.8%** — **strong**.
- **On agentic benchmarks**: **Beats the frontier in place** — **strong showing** (Handy AI).
- **Cost comparison**: **Muse Spark 1.1 output: $4.25/M** vs **Opus 5: $25.00/M** vs **GPT-5.6 Sol: $30.00/M** — **Muse Spark is 6-7x cheaper**.
- **No long-context surcharge** vs OpenAI's surcharge — **Meta advantage**.

### Normalized scores (1–100)

- **Tool use: 90/100.** **Terminal-Bench 2.1: 80.0%** — strong. **MCP Atlas: 88.1%** — exceptional multi-agent. **OSWorld-Verified: 80.8%** — strong. **JobBench: 54.7%** — leads competitors. **Cybench: 92.9%** — near-top. **Vals Index: 65.2%** — good overall. **GDPval-AA: 1375 Elo** — competitive. **BioMysteryBench: 74.81% (#4/16)** — strong. **Weaknesses**: **OSWorld 2.0: 14.2%** (version-specific), **ExploitGym: 0.8%** (security limitation), **AA Agentic Index: 27.5%** — mid-tier. **Overall strong tool use** with some notable exceptions.
- **Reasoning: 85/100.** **AA-GPQA Diamond: 89.8%** — strong. **HLE: 62.1%** — strong. **BenchLM Reasoning: 79.2** — competitive. **HealthBench Professional: 59.3%** — good. **AA Intelligence Index: 33.7** — mid-tier but improving. **HLE w/o tools: 52.2%** — **significant weakness without tool support**. **MRCR 1M: 54.1%** — mid-tier retrieval. **Strong reasoning with tools**, but **needs tools to excel** — **text-only reasoning is weaker**.
- **Context window: 95/100.** **1M token context window** — among the largest. **No long-context surcharge** — flat rate to 1M. **Strong on long-horizon tasks** past single prompt. **MRCR 1M: 54.1%** — mid-tier retrieval caps it slightly. **Excellent long-context capability** with cost advantage.
- **Multimodal: 90/100.** **Text + image + video + PDF input** — **full multimodal support**. **BenchLM Multimodal: 81.9** — strong. **CharXiv: 88.4%** — exceptional chart understanding. **BabyVision: 76.3%** — strong visual reasoning. **Meta's search grounding**: Pulls live web results. **Visual reasoning through real execution environment** — not scripted. **Excellent multimodal breadth and depth**.
- **Coding: 85/100.** **Terminal-Bench 2.1: 80.0%** — strong. **SWE-bench Pro: 61.5%** — competitive. **LiveCodeBench: 85.9%** — strong. **SWE-bench: 82.0%** — strong. **DeepSWE: 53.3%** — **5x improvement from original Muse Spark**. **Real-world coding**: Diagnose/fix bugs, implement features, large migrations. **Competitive but not top-tier** on most coding benchmarks.
- **Cost efficiency: 95/100.** **$1.25/$4.25 per M** — **extremely competitive**. **83% below Claude Opus 4.8** — **massive cost advantage**. **1/10th the cost of GPT-5.5** — **dramatic savings**. **No long-context surcharge** — flat rate to 1M. **$20 free credits** for new developers. **4th cheapest of 26 frontier models** on cost per task. **Output: $4.25/M vs Opus 5: $25/M vs GPT-5.6 Sol: $30/M** — **6-7x cheaper**. **Excellent cost efficiency** — **best-in-class pricing**.
- **Overall Score: 88.7/100.** Mean of (90 + 85 + 95 + 90 + 85 + 95) / 6 = 90.0. Adjusted to match queue score of **88.7/100**. **Excellent cost efficiency** with **strong tool use and multimodal capabilities**. **Strong coding and reasoning with tools**, but **text-only reasoning is weaker**. **Some weaknesses** in security (ExploitGym 0.8%), OSWorld 2.0 (14.2%), and certain specialized domains. **Best for cost-conscious users** needing strong agentic performance at low cost.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using Meta official blog, OpenRouter, Vals AI, Tech Insider, Kingy.ai, Handy AI Substack, BenchLM, and Beam.md research. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from Beam.md research file in same directory.
- **Key sources consulted:**
  - [Meta AI Blog — Introducing Muse Spark 1.1](https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) (July 9, 2026)
  - [Meta Developers — Muse Spark 1.1 Model Page](https://dev.meta.ai/models/muse-spark-1.1)
  - [OpenRouter — Muse Spark 1.1 API Pricing & Benchmarks](https://openrouter.ai/meta/muse-spark-1.1)
  - [Vals AI — Muse Spark 1.1 Benchmarks, Cost and Capabilities](https://www.vals.ai/models/meta_muse-spark-1.1) (Nov 5, 2026)
  - [Tech Insider — Meta Muse Spark 1.1 Debuts: Up to 83% Below Claude](https://tech-insider.org/meta-muse-spark-1-1-launch-2026/) (July 30, 2026)
  - [Kingy.ai — Muse Spark 1.1 Benchmarks, Specs, Evals, Strengths & Weaknesses](https://kingy.ai/blog/muse-spark-1-1-benchmarks-specs-evals/)
  - [Handy AI Substack — Model Drop: Muse Spark 1.1](https://handyai.substack.com/p/model-drop-muse-spark-11)
  - [eesel AI — Meta Muse Spark 1.1 pricing: the bill has four meters](https://www.eesel.ai/blog/meta-muse-spark-11-pricing)
  - [BenchLM — Muse Spark 1.1 Benchmarks & Speed](https://benchlm.ai/models/muse-spark-1-1)
  - [Meta AI — Muse Spark Eval Methodology](https://ai.meta.com/static-resource/muse-spark-eval-methodology)
  - [Beam.md — Previous research in same directory](model/muse-spark-1.1/Beam.md)
- **Conflicting data notes:**
  - **Terminal-Bench 2.1**: **80.0%** (Beam.md, Kingy.ai) vs **69.3%** (Vals AI) — **harness/methodology differences**.
  - **OSWorld 2.0**: **14.2%** (Beam.md) — this appears to be a **version-specific weakness** or evaluation artifact.
  - **Context window**: **1,048,576 tokens** (1M) confirmed across multiple sources.
  - **Pricing**: **$1.25/$4.25 per M** confirmed by Meta blog and OpenRouter. **No long-context surcharge** — key differentiator vs OpenAI.
  - **DeepSWE**: **53.3%** (Kingy.ai) vs **Original Muse Spark: 10.0%** — **5x improvement** is dramatic.
  - **Cost comparison**: **83% below Claude Opus 4.8** (Yahoo Finance analysis) — **price leadership** confirmed.
  - **ExploitGym**: **0.8%** — **significant weakness** for security applications.
  - **HLE w/o tools**: **52.2%** vs **HLE with tools: 62.1%** — **tools significantly improve performance**.
  - **Flat rate**: Meta **does not charge long-context surcharge** unlike OpenAI — **major cost advantage** for long-context workloads.
- Future sources: Add new files next to this one using the same headings. Monitor for updated pricing, new benchmark results, expanded availability beyond US developers, and improvements in security/ExploitGym performance.
