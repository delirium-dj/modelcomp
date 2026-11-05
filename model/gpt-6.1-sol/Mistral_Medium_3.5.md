# GPT-6.1 Sol — findings by Mistral Medium 3.5

- Source: OpenAI/GPT-6.1 Sol
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's upgraded Sol-class model delivering near-Astra intelligence for agentic coding, computer use, and professional work at one-fifth of Astra's cost. Released September 29, 2026 as a substantial improvement over GPT-6 Sol, matching GPT-6 Astra performance on key benchmarks while significantly reducing cost.
- **Provider / access:** `openai/gpt-6.1-sol` via OpenAI API (Responses API), ChatGPT Work, Codex
- **Release / knowledge:** September 29, 2026
- **IDs:** `gpt-6.1-sol` (API), alias `gpt-6-sol` routes to this model for GPT-6 in Chat
- **Context window:** 500,000 tokens (500K) default in Codex and ChatGPT Work; up to 1M supported; prompts >272K tokens priced at 2x input/cache rates and 1.5x output
- **Modalities:** Text input/output; tool calls; code execution; computer use; web search; structured outputs; reasoning effort levels (low/medium/high/xhigh/max, medium default)
- **Pricing (as of 2026-11-05):** $2.00 / $10.00 / $0.10 per 1M input/output/cached input tokens (standard); Fast mode 2x; Batch/Flex 50% lower; Ultrafast 6x. Regional processing +10% premium. Source: OpenAI announcement, API pricing page, Introducing GPT-6.1 Sol
- **Architecture:** Proprietary dense autoregressive decoder-only transformer; no public parameter count disclosed; reasoning effort modes with extended thinking
- **Thinking modes:** Low, medium (default), high, xhigh, max — flexible control over latency and intelligence

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Science 0.1: **57.0%** (max effort; source: OpenAI launch charts, BenchLM, Vellum)
- AutomationBench 1.0.6: **+4.8 percentage points over GPT-6 Sol** at medium effort; **2.2 percentage points above Opus 5.5** at medium effort, ~1/3 the cost (source: OpenAI announcement)
- OSWorld 2.0 (offline set): **+7 percentage points over GPT-6 Sol** at max effort, <1/2 cost; **within 2.1 percentage points of Astra** at max effort, ~1/7 the cost (source: OpenAI announcement)
- GDPval-AA v2.1: **scores higher than Opus 5.5 with fallbacks** at <1/2 the cost per task (source: OpenAI announcement)
- LMArena/Chatbot Arena: **no verified public Elo found**
- Human preference (LMSYS): **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- Artificial Analysis Intelligence Index: **52** (max effort; vs 48 for GPT-6 Sol; source: BenchLM, Emergent.sh, Vellum)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Factuality: **error rate within 1.9 percentage points of Astra** at <1/5 cost; low effort reduces factual errors from 11.4% to 7.7% (32% reduction; source: OpenAI announcement)

Coding:

- SWE-bench Verified: **no verified public score found**
- DeepSWE v1.1: **75.2%** (high effort; matches Astra's peak accuracy of ~74.8%; source: OpenAI announcement, Vellum, BenchLM, OrcaRouter)
- DeepSWE v1.1: **+6.4 percentage points over GPT-6 Sol's best** at lower reasoning effort and cost (source: OpenAI announcement)
- FrontierCode: **no verified public score found**
- Code Arena / CursorBench: **no verified public score found**

Long context:

- 500K default context window in Codex/Work; supports up to 1M
- No specific long-context retrieval benchmarks reported beyond OSWorld 2.0

### Normalized scores (1–100)

- **Tool use: 95/100.** Exceptional agentic performance: 57.0% Terminal-Bench Science 0.1 (max), +7pp over GPT-6 Sol on OSWorld 2.0 offline at 1/2 cost, +4.8pp on AutomationBench 1.0.6 at medium effort. Matches Astra on multiple benchmarks at 1/5-1/7 the cost. Capped only by Astra still leading on hardest scientific tasks.
- **Reasoning: 91/100.** Strong reasoning: Artificial Analysis Intelligence Index at 52 (vs 48 for GPT-6 Sol). Factuality error rate within 1.9pp of Astra at 1/5 cost. Capped by lack of GPQA Diamond and some specialized reasoning benchmarks.
- **Context window: 95/100.** 500K default context, supports 1M. Slightly below maximum tier (1M) but sufficient for most workloads.
- **Multimodal: 85/100.** Text-based with tool use (web search, computer use). No native image/video input in standard API (computer use via tools). Capped by not having native vision like Kimi K3.
- **Coding: 96/100.** Outstanding coding: 75.2% DeepSWE v1.1 (matches Astra), +6.4pp over GPT-6 Sol at lower cost/effort. Near-flagship performance at Sol pricing. Capped only by Astra still leading on most difficult tasks.
- **Cost efficiency: 95/100.** $2/$10 per 1M input/output with $0.10 cached input (95% discount). 1/5 of Astra's $10/$50 pricing. Fast/Batch/Flex modes provide additional flexibility. Best-in-class cost-performance ratio.
- **Overall Score: 92.4/100.** Near-Astra intelligence at Sol pricing. Best balance of capability and cost in OpenAI lineup. Slightly below Astra on hardest tasks but exceptional value proposition.

---

## Signature

- Provided by: **Mistral Medium 3.5 (mistralai/Mistral-Medium-3.5)** — 2026-11-05
- Method: Public internet research via web search; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing GPT-6.1 Sol — OpenAI](https://openai.com/index/introducing-gpt-6-1-sol/)
  - [GPT-6.1 Sol System Card Addendum (PDF)](https://cdn.openai.com/pdf/38e3efcf-545e-44cd-99ec-2b7eb395f4cc/oai_GPT_6_1_Sol.pdf)
  - [GPT-6.1 Sol Model — OpenAI API](https://developers.openai.com/api/docs/models/gpt-6-1-sol)
  - [Using GPT-6 — OpenAI API Docs](https://developers.openai.com/api/docs/guides/latest-model)
  - [Pricing — OpenAI API](https://developers.openai.com/api/docs/pricing)
  - [GPT-6.1 Sol Benchmark Scores — BenchmarkList](https://benchmarklist.com/models/openai-gpt-6.1-sol/)
  - [GPT-6.1 Sol Benchmarks & Pricing — BenchLM.ai](https://benchlm.ai/models/gpt-6-1-sol)
  - [GPT-6.1 Sol Benchmarks Explained — Vellum](https://www.vellum.ai/blog/gpt-6-1-sol-benchmarks-explained)
  - [GPT-6.1 Sol vendor benchmarks analysis — OrcaRouter](https://www.orcarouter.ai/blog/gpt-6-1-sol-vendor-benchmarks)
  - [GPT-6.1 Sol Benchmarks: Near-Astra Scores, Lower Cost — Emergent.sh](https://emergent.sh/learn/gpt-6-1-sol-benchmarks)
