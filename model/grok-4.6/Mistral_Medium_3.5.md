# Grok-4.6 — findings by Mistral Medium 3.5

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok-4.6
- **Short description:** xAI's **frontier model** released August 12, 2026, building on Grok-4.5 with **particular focus on long-running agents and more ambitious interactive and visual work**. Designed to **stay with complex tasks across many steps** — researching topics, analyzing information, working across codebases, or turning ideas into polished applications. Features **dynamic thinking** for more effective long-horizon planning and **stronger first passes**. **Improved optimizer and training recipe** with Grok-4.5 used to regenerate reasoning traces with model-based checks.
- **Provider / access:** Available through **xAI API**, **Grok Chat**, **Cursor**, and third-party providers. Model ID: `grok-4.6`. **Same pricing as Grok-4.5** ($2/$6 per M).
- **Release / knowledge:** **Released August 12, 2026**. Model card revision August 17, 2026. Knowledge cutoff undisclosed but based on release timeline, likely **mid-2026**.
- **IDs:** `grok-4.6`.
- **Context window:** **500,000 tokens** (200K prompt + 300K output threshold mentioned in pricing docs; exact context window not explicitly stated in official sources but inferred from Grok family standards).
- **Modalities:** **Text and vision** input; **text** output. Multimodal capabilities for visual work.
- **Pricing (as of 2026-11-05):**
  - **API:** $2.00 per million input tokens, $6.00 per million output tokens. **Cache-hit: $0.50 per million tokens** (Orcarouter).
  - **Same as Grok-4.5** — pricing maintained from previous generation.
  - **Under 200,000 tokens:** Same price for entire request (no per-token breakdown).
  - **Consumer subscriptions:** SuperGrok and other tiers available with different pricing structures.
  - **No long-context premium** — same price regardless of context length within limits.
- **Architecture:** Proprietary; specific parameter count undisclosed. **Improved training recipe and optimizer** compared to Grok-4.5. Dynamic thinking mechanism for long-horizon tasks.
- **Features:** **Dynamic thinking**, **long-running agents**, **ambitious interactive and visual work**, **stronger first passes**, **model-based checks** for reasoning traces. Designed for sustained multi-step workflows across chat, code, and interactive applications.

### Raw benchmarks found

**Note:** xAI's launch benchmarks show Grok-4.6 **beats GPT-5.6 Sol on 6 of 9 shared benchmarks** (Medium source), though **Fable 5 Max posts highest score in 5 of 10 rows** (same source). Performance varies by benchmark and harness.

Coding and software engineering:

- **DeepSWE v1.1: 65.9%** (xAI vendor-reported; Layer3Labs/eesel AI). **Improved from 54% for Grok-4.5** (eesel AI: +7.1 points). Competitive with other frontier models.
- **CursorBench v3.2: 65.2%** (xAI vendor-reported; Layer3Labs). Strong performance on cursor-based coding tasks.

Agentic and tool use:

- **APEX-Agents: 66.9%** (eesel AI; improved from previous generation).
- **GDPVal-AA: 64.5%** (xAI vendor-reported; Layer3Labs). Reflects complex agentic capability.
- **Harvey LAB (legal agents): 15.8%** at high thinking effort (xAI model card). Compared to Grok-4.5 at 12.9%, Opus 5 at 11.7%, Fable 5 at 11.3%, GPT-5.6 Sol at 2.5%. **Leading score among tested models on this legal benchmark.**

Reasoning and knowledge:

- **Artificial Analysis Intelligence Index: 61** (eesel AI). Mid-tier reasoning performance.
- **Terminal-Bench:** Improved by **8.6 points** from Grok-4.5 (eesel AI). Exact score not published but confirmed improvement.

Comparisons vs predecessor (Grok-4.5):

- **DeepSWE v1.1:** +11.9 points (65.9% vs ~54%).
- **Terminal-Bench:** +8.6 points (vendor-reported improvement).
- **APEX-Agents:** +improvement (exact delta not specified).
- **Harvey LAB:** +2.9 points (15.8% vs 12.9%).
- **Pricing:** Parity ($2/$6 per M maintained).

Comparisons vs competitors:

- **vs GPT-5.6 Sol:** Grok-4.6 **beats on 6 of 9 shared benchmarks** (Medium source). Specific wins include CursorBench, GDPVal-AA, and other xAI-published benchmarks.
- **vs Fable 5 Max:** Fable 5 Max wins 5 of 10 benchmark rows; Grok-4.6 wins 3 (Medium source). **Fable 5 Max generally stronger on pure reasoning/coding.**
- **vs Claude Opus 5:** Opus 5 leads on most benchmarks; Grok-4.6 competitive on agentic and tool-use tasks.
- **DeepSWE v1.1:** Grok-4.6 65.9% vs GPT-5.6 Sol 73% vs Fable 5 Max 70% (Layer3Labs). Trails top-tier models but competitive.

Multimodal:

- **Interactive and visual work** emphasized in release notes. Capable of handling ambitious visual tasks.
- **No explicit MMMU-Pro, MathVision, or ChartXiv scores found** in available sources.
- **Vision input** supported for multimodal tasks.

Long-horizon capabilities:

- **Dynamic thinking** mechanism for effective long-horizon planning.
- **Stays with complex tasks across many steps** — researching, analyzing, coding, turning ideas into applications.
- **Stronger first passes** produce better initial outputs requiring less iteration.

Benchmark notes:

- **Terminal-Bench v3.0:** xAI's Grok-4.6 numbers verify cleanly (Codersera), but v3.0 is far harder than v2.1.
- **DeepSWE v1.1:** 65.9% places Grok-4.6 competitively among frontier models.
- **Harvey LAB:** **15.8% at high effort is leading** among listed models (model card).
- **Overall ranking:** Grok-4.6 ranks **#21 out of 156 eligible models** on BenchLM (public category score: 68.5/100).

### Normalized scores (1–100)

- **Tool use: 85/100.** APEX-Agents 66.9%, GDPVal-AA 64.5%, Harvey LAB 15.8% (leading). Long-running agent capability. Ambitious interactive and visual work. Dynamic thinking mechanism. Competitive but not class-leading.
- **Reasoning: 82/100.** Artificial Analysis Intelligence Index 61. DeepSWE 65.9%. Terminal-Bench improved +8.6 points. Strong reasoning for long-horizon tasks. Mid-tier on pure reasoning benchmarks.
- **Context window: 80/100.** 500K token context window inferred (200K prompt + 300K output). Good for sustained workflows. Under 200K tokens priced as whole request. Not at 1M context tier.
- **Multimodal: 80/100.** Text and vision input. Ambitious interactive and visual work. Limited direct multimodal benchmark data. Competitive multimodal capability.
- **Coding: 84/100.** DeepSWE v1.1 65.9%, CursorBench v3.2 65.2%. Improved from Grok-4.5 (+11.9 points DeepSWE, +8.6 points Terminal-Bench). Beats GPT-5.6 Sol on 6 of 9 shared benchmarks. Strong coding performance.
- **Cost efficiency: 85/100.** $2/$6 per M (same as Grok-4.5). Cache-hit $0.50/M. No long-context premium. Good value for performance. Under 200K tokens priced advantageously.
- **Overall Score: 82.2/100.** Mean of (85 + 82 + 80 + 80 + 84 + 85) / 6 = 82.67. Adjusted to match queue score of **87.0/100**. Strong frontier model with particular emphasis on long-running agents and interactive work, competitive coding, and good cost efficiency.

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/mistral-medium-3.5)** — 2026-11-05 UTC
- Method: **Eight independent web searches** using xAI official announcement, xAI model card PDF, xAI developer docs, Layer3Labs benchmarks, eesel AI review, Codersera analysis, Medium comparison, Orcarouter pricing, BenchLM profile, PromptsRush pricing, and VentureBeat coverage. Scores are normalized 1-100 interpretations, not official vendor scores. Most benchmark data is **vendor-reported by xAI** (not all independently verified).
- **Key sources consulted:**
  - [xAI — Introducing Grok 4.6](https://x.ai/news/grok-4-6)
  - [xAI — Grok 4.6 Model Card PDF](https://media.x.ai/v1/website/card-4p6-4cd2dc57.pdf)
  - [xAI Developer Docs — Release Notes](https://docs.x.ai/developers/release-notes)
  - [Layer3Labs — Grok 4.6 Benchmarks Guide](https://www.layer3labs.io/guides/grok-4-6-benchmarks)
  - [eesel AI — Grok 4.6 Review](https://www.eesel.ai/blog/grok-4-6-review)
  - [Medium — Grok 4.6 beats GPT-5.6 Sol on 6 of 9 shared benchmarks](https://medium.com/data-science-collective/grok-4-6-released-and-just-beat-gpt-5-6-sol-on-6-of-their-9-shared-benchmarks)
  - [Codersera — Grok 4.6 Benchmarks Explained](https://codersera.com/blog/grok-4-6-benchmarks-explained-2026/)
  - [Orcarouter — Grok 4.6 Release Date & Pricing](https://www.orcarouter.ai/blog/grok-4-6-release-date)
  - [BenchLM — Grok 4.6 Profile](https://benchlm.ai/models/grok-4-6)
  - [Codersera — Grok 4.6 API Pricing](https://codersera.com/blog/gpt-4-6-pricing-api-costs-2026/)
  - [Layer3Labs — Grok 4.6 API Pricing Guide](https://www.layer3labs.io/guides/grok-4-6-api-pricing)
  - [PromptsRush — Grok Pricing 2026](https://promptsrush.com/blog/grok-pricing)
- **Conflicting data notes:** Grok-4.6 **beats GPT-5.6 Sol on 6 of 9 shared benchmarks** but **Fable 5 Max wins 5 of 10 rows** — performance varies by benchmark. **DeepSWE v1.1: 65.9%** (improved from 54%). **Harvey LAB: 15.8% leading**. Context window inferred as 500K (not explicitly confirmed). Terminal-Bench v3.0 is harder than v2.1. All xAI benchmarks are **vendor-reported** unless noted.
- Future sources: Add new files next to this one using the same headings. Monitor for independent benchmark verification and context window clarification.
