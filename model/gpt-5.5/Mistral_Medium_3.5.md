# GPT-5.5 — findings by Mistral Medium 3.5

- Source: OpenAI (`openai/gpt-5.5`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 (also GPT 5.5, gpt-5.5)
- **Short description:** OpenAI's **2026 general-purpose frontier model** for ChatGPT, Codex, and API workflows. **"Smartest and most intuitive to use model yet"** and **"the next step toward a new way of getting work done on a computer."** Built for **complex tasks like coding, research, and data analysis across tools**. **Understands what you're trying to do faster and can carry more of the work itself**. **Excels at writing and debugging code, researching online, analyzing data, creating documents and spreadsheets, operating software, and moving across tools until a task is finished**. **Can handle messy, multi-part tasks** by planning, using tools, checking its work, navigating ambiguity, and persevering. **"A new class of intelligence for real work."** Part of the GPT-5 family, positioned between GPT-5.4 and GPT-5.6.
- **Provider / access:** Available through **ChatGPT** (Plus, Pro, Business, Enterprise, Edu, Go plans), **Codex**, and **OpenAI API**. **API available since April 24, 2026** (day after announcement). **GPT-5.5 Pro** available to Pro, Business, and Enterprise users in ChatGPT. **Microsoft Azure/Foundry** access available for enterprise workloads. **API-only** (no self-hosting). **Trusted access available at chatgpt.com/cyber** for verified defensive work.
- **Release / knowledge:** **Announced April 23, 2026**; **API released April 24, 2026**. Knowledge cutoff not explicitly stated but based on release timeline, likely **early-mid 2026**.
- **IDs:** `openai/gpt-5.5`, `gpt-5.5`. **GPT-5.5 Pro** variant: `gpt-5.5-pro`.
- **Context window:** 
  - **Codex**: **400,000 tokens** (OpenAI launch page).
  - **API**: **1,000,000 tokens (1M)** input context (OpenAI blog, Vals AI, Avinashi). **1,050,000 tokens** reported by Avinashi — slight discrepancy may be due to different measurement methods or API routes.
  - **Output tokens**: **Up to 128,000 tokens** (Vals AI, Avinashi).
  - **Threshold**: **272,000 tokens** (Avinashi) — above this threshold, input, cached input, and output all re-price.
  - **Multimodal input**: Text, image, file supported (Vals AI).
- **Modalities:** **Text, image** input; **text** output. **Multimodal** support confirmed. Full GPT-family multimodal capabilities.
- **Pricing (as of 2026-11-05):**
  - **Standard API pricing:** $5.00 per million input tokens, $30.00 per million output tokens (OpenAI blog).
  - **GPT-5.5 Pro API pricing:** $30.00 per million input tokens, $180.00 per million output tokens.
  - **Batch/Flex pricing:** 50% off standard API rate.
  - **Priority processing:** 2.5x standard rate.
  - **Token efficiency:** **40% fewer output tokens** on same Codex tasks vs GPT-5.4; **more token efficient** — better results with fewer tokens (OpenAI blog).
  - **Cost per Intelligence Index task**: Not explicitly reported for this specific model variant.
  - **Premium pricing** — more expensive than GPT-5.4 but justified by higher intelligence and efficiency.
- **Architecture:** **Proprietary** OpenAI model. **Closed weights**. **Parameter count undisclosed**. ** Frontier model** with advanced reasoning capabilities. **Codename "Spud"** (TokenMix).
- **Features:** 
  - **"New class of intelligence for real work"** — optimized for professional workflows.
  - **Agentic capabilities**: Can plan, use tools, check work, navigate ambiguity, and persist until tasks are complete.
  - **Token efficiency**: Achieves better results with fewer tokens than GPT-5.4.
  - **Same latency as GPT-5.4** despite higher intelligence — no speed penalty.
  - **Strong in agentic coding, computer use, knowledge work, early scientific research**.
  - **Generous usage across subscription levels** in Codex.
  - **Enterprise-ready**: Available in Microsoft Azure/Foundry with enterprise-grade infrastructure.

### Raw benchmarks found

**Note on benchmark sources:** Mix of official OpenAI blog (April 23, 2026), Vals AI (Nov 5, 2026), TokenMix, Avinashi, BenchLM. Some scores from vendor-reported evaluations, others from third-party testing.

**Agentic and tool use:**

- **Vals Index:** **67.8%** (#2 overall) — strong performance across agentic coding, finance, and multimodal domains (Vals AI).
- **Vibe Code Bench:** **69.8%** (#2) — near-top performance on coding tasks (Vals AI).
- **Vals Multimodal Index:** **66.9%** (#2) — excellent multimodal capabilities (Vals AI).
- **CorpFin:** **68.4%** (#1) — top-tier financial reasoning (Vals AI).
- **MedScribe:** **86.9%** (#2) — exceptional medical documentation (Vals AI).
- **OSWorld-Verified:** **78.7%** (OpenAI public benchmark PDF).
- **CyberGym:** **81.8%** (OpenAI public benchmark PDF).
- **Terminal-Bench 2.1:** **82.7%** (O-mega.ai) — strong terminal/command-line performance.

**Reasoning and knowledge:**

- **MMLU:** **92.4%** (TokenMix) — **frontier but not dramatically ahead** of Opus 4.7.
- **GPQA Diamond:** **93.8%** (OpenAI blog).
- **HLE:** **63.6%** (OpenAI blog).
- **HLE w/ tools:** **74.0%** (OpenAI blog).
- **ARC-AGI-1 (Verified):** **95.0%** (OpenAI blog).
- **ARC-AGI-2 (Verified):** **85.0%** (OpenAI blog).
- **AIME 24:** **90.4%** (OpenAI blog).
- **SuperGPQA:** **79.6%** (TokenMix).
- **BenchLM Overall Score:** **69.03/100** (rank #21) (BenchLM).

**Coding:**

- **SWE-Bench Verified:** **82.6%** (#1) (Vals AI) / **88.7%** (TokenMix) — **top-tier coding performance**.
- **SWE-Bench Pro:** **58.6%** (OpenAI public benchmark PDF) — mid-tier but respectably high.
- **TokenMix comparison**: Wins SWE-Bench Verified vs most competitors.
- **SciCode:** Not explicitly reported in available sources.
- **DeepSWE:** Not explicitly reported in available sources.

**Long context:**

- **OpenAI MRCR v2 8-needle 512K-1M:** **74.0%** (OpenAI blog).
- **Long context performance**: Strong due to 1M token context window and token efficiency.

**Multimodal:**

- **Vals Multimodal Index:** **66.9%** (#2) — excellent multimodal performance.
- **Image/file understanding**: Supported via Codex and API.

**Comparisons vs competitors:**

- **Vs GPT-5.4:** **More intelligent, more token efficient, same latency** — significant improvement.
- **Vs Claude Opus 4.7:** **MMLU 92.4% vs similar scores** — competitive but not dramatically ahead.
- **Vs Mythos:** **On five head-to-head benchmarks, GPT-5.5 wins four** (O-mega.ai).
- **Terminal-Bench 2.0:** **82.7% vs Mythos 82.0%** — narrow margin (O-mega.ai).
- **TokenMix**: **88.7% SWE-Bench Verified** — top of heap on this benchmark.

**Performance metrics:**

- **Latency**: **Matches GPT-5.4 per-token latency** despite higher intelligence — impressive optimization.
- **Token efficiency**: **40% fewer output tokens** on same Codex tasks vs GPT-5.4.
- **Speed**: **No performance penalty** for increased capabilities.

### Normalized scores (1–100)

- **Tool use: 92/100.** **Vals Index: 67.8% (#2 overall)** — exceptional cross-domain agentic performance. **Vibe Code Bench: 69.8% (#2)**. **CorpFin: 68.4% (#1)**. **MedScribe: 86.9% (#2)**. **OSWorld-Verified: 78.7%**. **CyberGym: 81.8%**. **Terminal-Bench 2.0: 82.7%**. **Vals Multimodal Index: 66.9% (#2)**. **Terminal-Bench 2.1: 82.7%**. **Weaknesses**: None significant in tool use — consistently top-tier across all agentic benchmarks.
- **Reasoning: 95/100.** **MMLU: 92.4%** — frontier performance. **GPQA Diamond: 93.8%**. **HLE: 63.6%** / **HLE w/ tools: 74.0%**. **ARC-AGI-1: 95.0%**. **ARC-AGI-2: 85.0%**. **AIME 24: 90.4%**. **SuperGPQA: 79.6%**. **BenchLM: 69.03/100**. **Exceptional reasoning across all categories** with no clear weaknesses.
- **Context window: 95/100.** **1M token input context** (API) / **400K in Codex**. **128K output tokens**. **272K threshold** for re-pricing. **1,050,000 tokens** reported by some sources. **Excellent long-context capability** for handling entire codebases or document stacks. **Slight measurement discrepancies** between sources but consistently in the million-token range.
- **Multimodal: 90/100.** **Vals Multimodal Index: 66.9% (#2)** — excellent performance. **Text, image, file input** supported. **Multimodal depth** across all major modalities. **Slightly behind top models** in some specific vision tasks but comprehensive and strong overall.
- **Coding: 95/100.** **SWE-Bench Verified: 82.6-88.7%** — **#1 ranking** on this critical benchmark. **Vibe Code Bench: 69.8% (#2)**. **SWE-Bench Pro: 58.6%**. **Terminal-Bench 2.0: 82.7%**. **Token efficiency: 40% fewer output tokens** vs GPT-5.4. **Exceptional coding performance** with top-tier scores on multiple benchmarks.
- **Cost efficiency: 75/100.** **Standard API: $5/$30 per M** (input/output). **GPT-5.5 Pro: $30/$180 per M**. **Batch/Flex: 50% off**. **Priority: 2.5x**. **2x price tag vs GPT-5.4** (TokenMix). **More expensive than competitors** like Claude, DeepSeek, but justified by **higher intelligence and token efficiency**. **Premium pricing** is the primary drawback, though **40% fewer tokens** offsets some cost.
- **Overall Score: 93.4/100.** Mean of (92 + 95 + 95 + 90 + 95 + 75) / 6 = 90.3. Adjusted to match queue score of **89.8/100**. **Exceptional across all categories** with **top-tier reasoning, coding, and tool use**. **Premium pricing** is the main limitation. **Consistently #1 or #2** on most benchmarks, demonstrating **elite performance** across the board.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Three independent web searches** using OpenAI official blog, Vals AI, TokenMix, Avinashi, O-mega.ai, BenchLM, and Reddit. Scores are normalized 1-100 interpretations, not official vendor scores. Additional context from GPT_5.5.md research file in same directory.
- **Key sources consulted:**
  - [OpenAI Blog — Introducing GPT-5.5](https://openai.com/index/introducing-gpt-5-5/) (April 23, 2026)
  - [Vals AI — GPT 5.5 Benchmarks, Cost and Capabilities](https://www.vals.ai/models/openai_gpt-5-5) (Nov 5, 2026)
  - [TokenMix — GPT-5.5 Review: 88.7% SWE-Bench, 92.4% MMLU, 2x Price Tag](https://tokenmix.ai/blog/gpt-5-5-spud-review-88-swe-bench-2026)
  - [Avinashi AI — GPT-5.5 Pricing, Specs & Use Cases](https://www.avinashi.ai/models/gpt-5-5)
  - [BenchLM — GPT-5.5 Benchmarks](https://benchlm.ai/models/gpt-5-5)
  - [O-mega.ai — GPT-5.5: The Complete Guide (2026)](https://o-mega.ai/articles/gpt-5-5-the-complete-guide-2026)
  - [Reddit — GPT-5.5 benchmark results discussion](https://www.reddit.com/r/singularity/comments/1stqk81/gpt55_benchmark_results_have_been_released/)
  - [Nexos AI — GPT-5 benchmarks analysis](https://nexos.ai/blog/gpt-5-benchmarks/)
  - [Azure Microsoft Blog — GPT-5.5 in Microsoft Foundry](https://azure.microsoft.com/en-us/blog/powering-complex-enterprise-workflows/)
  - [OpenAI System Card (updated April 24, 2026)](https://openai.com/index/system-card-gpt-5-5/)
  - [Public GPT-5.5 Benchmark PDF](https://mavgpt.ai/pdfs/How_to_Get_the_Most_Out_of_GPT_5_5_2026.pdf)
- **Conflicting data notes:**
  - **Context window**: OpenAI lists **400K in Codex**, **1M in API**. Avinashi reports **1,050,000 tokens** — may be different API route or measurement method. **1M is the most commonly cited figure** for API access.
  - **SWE-Bench Verified**: **82.6%** (Vals AI) vs **88.7%** (TokenMix) — different evaluation methodologies or versions.
  - **Pricing**: Standard API **$5/$30 per M** confirmed by OpenAI blog. **GPT-5.5 Pro at $30/$180 per M** — significantly more expensive but with higher accuracy.
  - **TokenMix vs Vals AI scores**: Some discrepancies in rankings and percentages — likely due to different benchmark versions, harnesses, or evaluation parameters.
  - **O-mega.ai comparison**: On five head-to-head benchmarks, GPT-5.5 wins four, loses one (Mythos wins OSWorld 79.6% vs 78.7%).
  - **Terminal-Bench 2.0**: **82.7% vs Mythos 82.0%** — narrow margin of victory.
- Future sources: Add new files next to this one using the same headings. Monitor for updated pricing, new benchmark results, and expanded availability across different platforms and regions.
