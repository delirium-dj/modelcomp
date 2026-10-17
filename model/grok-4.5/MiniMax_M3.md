# Grok 4.5 — MiniMax M3 findings

> **Stem:** Grok 4.5 (slug `grok-4.5`)
> **Official model ID:** `grok-4.5` (xAI API / SpaceXSI console), `opencode/grok-4.5` (OpenCode Zen)
> **Provider:** xAI (the launch post's logo and metadata carry "SpaceXSI"; SpaceX-SI is the parent reorganization that absorbed xAI's model brand)
> **Window:** **500,000 tokens input** (500K); **up to 450,000 output** (per `meta.json`); cache hits at $0.30/M
> **Modalities:** Text, image, file in; text out
> **Release date:** 2026-07-16 (generally available; co-developed with Cursor)
> **License:** Proprietary (closed weights; hosted access via xAI console, Cursor, Grok Build)
> **Price:** **$2.00 input / $0.30 cached / $6.00 output** per 1M
> **Throughput:** 80 tokens/second sustained — "faster than flash models"
> **Knowledge cutoff:** February 2026
> **Co-developer:** Cursor (used during RL training; default model in Cursor on all plans)
> **Date of research:** 2026-10-17

## Identity & lineage

Grok 4.5 is **xAI's first flagship fully designed and post-trained for token-efficient agentic coding**, released 2026-07-16 as a co-development with Cursor. xAI's framing is "twice greater token efficiency than the latest leading models at the same tasks" — Grok 4.5 is positioned as the **cost-per-completed-task leader** in the frontier tier, not the cheapest absolute token price.

The co-development with Cursor is structurally important: xAI trained Grok 4.5 with Cursor's harness in the loop during RL, and Cursor is the first IDE to ship Grok 4.5 as the default model on **all plans** (including free). The training data pipeline integrates Cursor's per-token-intelligence scoring across hundreds of thousands of multi-step software-engineering tasks, run on **tens of thousands of NVIDIA GB300 GPUs** with highly asynchronous training jobs (agentic rollouts can run for hours while learning continues).

In the lineage: Grok 4.5 sits between **Grok 4 (mid-2025) → Grok 4.5 (Jul 2026) → Grok 4.6 (Aug 2026) → Grok 4.7 (Sep 2026)**. The 4.5 → 4.6 → 4.7 sequence is rapid; 4.7 brings further improvements on CursorBench 4.0, DeepSWE v1.1, and EEBench. Grok 4.5 is the **token-efficiency-first** release in this rapid cadence — every subsequent Grok release targets the same axes plus extended reasoning ceilings.

**Grok 4.5 is succeeded by Grok 4.6 (2026-08-12, 500K context, same $2/$6 pricing tier) and Grok 4.7 (2026-09-21).** As of late October 2026, Grok 4.5 remains available via xAI console and Cursor but is no longer the recommended default for new Cursor deployments (Grok 4.7 holds that position).

The structural positioning relative to xAI's catalog:
- **Grok 4.5** ($2/$6, 500K, July 2026) — token-efficient coding default
- **Grok 4.6** (Aug 2026) — same line, broader agentic improvements
- **Grok 4.7** (Sep 2026) — front of the family

## Architecture & capability claims

xAI does not publish a separate technical paper for Grok 4.5. The launch post confirms:

- **Trained across tens of thousands of NVIDIA GB300 GPUs**
- **Highly asynchronous training stack** so agentic rollouts can run for many hours while learning continues across tens of thousands of GPUs
- **Heavy data filtering/curation** — deduplication, quality scoring, domain-focused selection
- **RL scaled across hundreds of thousands of tasks** focused on multi-step software engineering and other technical work, with automated and model-based grading
- **Per-token intelligence optimization** — RL focuses on efficiency-per-token, not just capability
- **80 TPS sustained throughput** — "faster than flash models"

Capabilities Grok 4.5 supports:
- Text + image + file input
- Tool calling
- Long context (500K input; practical output ~450K)
- Cached input reads at $0.30/M (15% discount vs uncached input)
- Code generation, debugging, explanation across multiple languages (Rust, C/C++, Python, JS, etc.)
- End-to-end app building from natural-language prompts ("incredibly capable at coding, from challenging Rust and C/C++ tasks to end-to-end app building")
- Office work: Excel models, PowerPoint shapes, Word documents (Grok Build is the default xAI surface)

Capabilities Grok 4.5 **does not** explicitly support (per launch post):
- Native audio or video input
- Native image generation (Grok has separate Aurora / Imagine image models)
- Real-time voice (separate Grok Voice product)

## Benchmark scores (xAI launch — and how they read)

- **Overall Score: 84.4/100**

xAI's launch benchmark bar charts include Datacurve-evaluated metrics (DeepSWE, SWE Marathon) and a curated set from xAI's own system card. Notable: DeepSWE 1.0 has **rescaled** compared with Grok 4.5's positioning — third-party independent (Datacurve, run by AA) scores.

### Agentic engineering (DeepSWE family — Datacurve/AA)

| Benchmark | **Grok 4.5** | Fable (max) | GPT 5.5 (xhigh) | Opus 4.8 (max) | Opus 4.7 (max) |
| --- | --- | --- | --- | --- | --- |
| **DeepSWE 1.0 pass@1** | **62.0%** | **66.1%** | 64.31% | 55.75% | 40.12% |
| **DeepSWE 1.1** (mini-swe-agent) | **53%** | **70%** | 67% | 59% | — |
| **SWE Marathon pass@1** | **29.0%** | 24.0% | — | 26.0% | 16.0% |
| **Terminal-Bench 2.1** | **83.3%** | **84.3%** | 83.4% | 78.9% | 78.9% |
| **SWE-Bench Pro** | **64.7%** | **80.4%** | 58.6% | 69.2% | 64.3% |

Grok 4.5's DeepSWE 1.0 score of 62.0% is solid but not ceiling — Fable (max) at 66.1% and GPT-5.5 at 64.31% lead. **Grok 4.5's strongest agentic result is SWE Marathon 29.0% pass@1 — the leading score** (vs Opus 4.8 at 26.0%, Fable at 24.0%, Opus 4.7 at 16.0%). SWE Marathon evaluates longer-horizon engineering; this is where Grok 4.5's per-token efficiency compounds.

The **SWE-Bench Pro 64.7% is mid-pack** — Fable (max) leads at 80.4%, with Opus 4.8 (max) at 69.2%. Grok 4.5 is competitive but not the ceiling on harder multi-language engineering tasks.

### Token efficiency (the headline)

| Metric | Grok 4.5 | Opus 4.8 (max) |
| --- | --- | --- |
| **Avg output tokens / SWE-Bench Pro task** | **15,954** | 67,020 |
| **Token efficiency ratio** | — | **4.2× fewer tokens than Opus 4.8 (max)** |

This is the operational fact that defines Grok 4.5. **Grok 4.5 resolves SWE-Bench Pro tasks with ~4.2× fewer output tokens than Opus 4.8 (max)**, while scoring competitively on Terminal-Bench 2.1 (83.3%) and leading SWE Marathon (29.0%). Combined with **80 TPS throughput** and the **$2/$6 pricing**, Grok 4.5's cost per completed task is structurally lower than Opus 4.8 or Fable 5 at comparable quality on long-horizon coding.

xAI's framing: "Grok 4.5 resolves tasks with 15,954 output tokens on average, about 4.2× fewer than Opus 4.8 (max) at 67,020. Grok 4.5 is served at fast-model speeds of 80 TPS."

### What xAI chose not to report in the launch post

Per Vellum and llm-stats audits, the launch post **omits**: AIME, GPQA, MMLU, MMMLU, HLE, ARC-AGI-2, FrontierMath, AA Intelligence Index, AA Coding Agent Index, MRCR, BrowseComp, OSWorld-Verified, MCP-Atlas, CharXiv-R. The launch post is **coding-centric**, not academic-benchmark-centric. Independent reruns from Cursor, Vercel, and Rakuten (Grok 4.5 was rated #6 overall at 76.97 by benchlm.ai on first measurement) corroborate the agentic improvements in qualitative terms.

## Pricing & deployment

| Channel | Input $/M | Cached $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **xAI API** (canonical) | **$2.00** | **$0.30** | **$6.00** | 500K / ~450K out | The price xAI quotes |
| xAI API (long-prompt >200K) | — | — | — | — | Single-tier pricing, no premium threshold |
| OpenCode Zen | varies | — | varies | 500K (per `meta.json`) | Resale |
| Cursor (all plans) | bundled | — | bundled | 500K | Free default model in Cursor |
| Grok Build (default) | varies | — | varies | 500K | xAI's productized surface |

**Pricing relative to cohort:**
- vs **GPT-5.6 Sol** ($5/$30): Grok 4.5 is 2.5× cheaper input, 5× cheaper output
- vs **GPT-5.6 Terra** ($2/$12): same input price, Grok 4.5 is 2× cheaper output
- vs **GPT-5.6 Luna** ($0.20/$1.20): Luna is 10× cheaper input, 5× cheaper output
- vs **Claude Opus 4.7/4.8/5** ($5/$25): Grok 4.5 is 2.5× cheaper input, 4.17× cheaper output
- vs **Claude Sonnet 5/5.5** (varies): Sonnet competes on price; Grok 4.5 is competitive
- vs **DeepSeek V4 Pro** peak ($1.32/$3.96): Grok 4.5 is 1.5× costlier input, 1.5× costlier output
- vs **Kimi K3** (~$0.60/$2.50): Grok 4.5 is 3.3× costlier input, 2.4× costlier output
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): Grok 4.5 is 1.6× costlier input, ~1.7× cheaper output

**Cost-effectiveness headline**: Grok 4.5's $2/$6 is not the cheapest frontier API price (Luna at $0.20/$1.20 and Kimi K3 at $0.60/$2.50 win on absolute price). But on **cost per completed SWE-Bench Pro task**, Grok 4.5's 4.2× token efficiency advantage makes it **the cost-per-quality coding leader in the frontier tier**.

## Where it fits — and where it does not

**Reasonable fit:**

- **Long-horizon agentic coding** — SWE Marathon 29.0% pass@1 (leads cohort), DeepSWE 1.0 62.0% (vs Fable's 66.1% and GPT-5.5's 64.31%); 4.2× fewer output tokens than Opus 4.8 (max) on SWE-Bench Pro. For multi-step, multi-file, multi-hour coding agents, Grok 4.5 is the structural choice.
- **Cursor IDE users** — default model on all Cursor plans, including free; co-developed with Cursor's harness in the RL loop. For teams already in Cursor, Grok 4.5 is the path-of-least-friction.
- **Cost-sensitive production code generation at frontier quality** — token-efficient post-training means Grok 4.5 solves tasks at lower cost-per-completed-task than Opus 4.8 or Fable 5 even at higher per-token rates.
- **End-to-end app building from a prompt** — Grok 4.5 explicitly markets "build a beautiful simulation of the universe and solar system" in one prompt (React + Three.js + dynamic HUD). For "vibe coding" workflows, this is positioned.
- **Office productivity** — Grok Build uses Grok 4.5 as the default model for Excel (multi-sheet formulas, sticky notes), PowerPoint (native shapes, complex diagrams), Word (clear prose).
- **High-throughput serving** — 80 TPS sustained; faster than flash tier at comparable quality.

**Poor fit:**

- **Frontier academic reasoning ceilings** — Grok 4.5's launch post omits GPQA, AIME, HLE, FrontierMath. Fable 5.1, Claude Opus 5.5, GPT-5.6 Sol lead here.
- **Hard multi-language SWE-bench** — SWE-Bench Pro 64.7% trails Fable 5.1's 80.4%, Opus 4.8 max's 69.2%. For the hardest repo-level coding, Opus-tier or Fable-tier wins.
- **Native multimodal image+text reasoning at the ceiling** — Grok 4.5 supports image input but the launch post doesn't push multimodal on benchmarks. Gemini 2.5 Pro / GPT-5.6 Sol lead multimodal.
- **Real-time voice / native audio / native video** — Grok 4.5 is text + image; no audio, no video.
- **Strict-interpretation prompts** — Grok 4.5 may be more permissive than Claude Opus 4.7 (per Cursor and Vellum characterizations); for explicit literal-instruction workloads, Opus 4.7 wins.
- **Tasks requiring frontier reasoning ceilings on coding** — Terminal-Bench 2.1 83.3% (vs Fable's 84.3%) is solid but not the ceiling. For terminal-workflow correctness at the frontier, Fable 5 or 5.1.

## Triangulated scores

> Source: `model-queue.md` (Overall 84.5). 19 qualifying raters (gate Overall > 84.9). Rounded to nearest integer per the project's half-up convention.

- **Tool use: 87/100.** DeepSWE 1.0 62.0% (mid-pack, vs Fable 66.1% and GPT-5.5 64.31% leading); SWE-Bench Pro 64.7% (mid-pack); Terminal-Bench 2.1 83.3% (close to Fable 84.3%); SWE Marathon 29.0% pass@1 (the cohort lead). Function calling and tool use are first-class; Cursor's harness uses Grok 4.5 by default.
- **Reasoning: 88/100.** Grok 4.5's launch is **coding-centric** — academic benchmarks (AIME, GPQA, HLE, FrontierMath) are not in the public release. SWE Marathon 29.0% pass@1 (cohort lead), DeepSWE 1.0 62.0% are the headline. Per-token intelligence is the operative metric; 4.2× token efficiency over Opus 4.8 (max) at competitive quality.
- **Context window: 88/100.** 500K input / up to 450K output is generous; cache hits at $0.30/M (15% discount). Long-context recall quality not separately benchmarked in the launch post. Cursor's long-context workflows and Grok Build's Office workflows lean on this.
- **Multimodal: 73/100.** Text + image input. Launch post doesn't push multimodal benchmarks. xAI does have separate Aurora / Imagine image models for image generation. For image+text reasoning, Gemini 2.5 Pro, GPT-5.6 Sol, Claude Opus 4.7 lead.
- **Coding: 86/100.** SWE Marathon 29.0% pass@1 (cohort lead); DeepSWE 1.0 62.0% (mid-pack); SWE-Bench Pro 64.7% (mid-pack); Terminal-Bench 2.1 83.3% (close to Fable). The headline isn't ceiling scores — it's **4.2× token efficiency** combined with competitive coding. CursorBench 70%+ in partner measurement. For cost-per-completed-coding-task at frontier quality, this is the operational choice.
- **Cost efficiency: 80/100.** $2/$6 is mid-pack on absolute price (Luna $0.20/$1.20, Kimi $0.60/$2.50 are cheaper). But **4.2× token efficiency + 80 TPS throughput + caching at $0.30/M** place Grok 4.5 at the **frontier-tier cost-per-completed-task leader**. Reading average.md's 80/100 reflects this — competitive but not the Luna-style cheap.
- **Overall: 85/100.** Grok 4.5 is xAI's token-efficiency-first agentic coding flagship, released 2026-07-16 at $2/$6 with 500K context and 80 TPS. Co-developed with Cursor (default model on all Cursor plans). Headline agentic results: SWE Marathon 29.0% pass@1 (cohort lead), DeepSWE 1.0 62.0%, SWE-Bench Pro 64.7%, Terminal-Bench 2.1 83.3%. **Defining operational fact**: 4.2× fewer output tokens than Opus 4.8 (max) on SWE-Bench Pro at competitive quality — making Grok 4.5 the cost-per-completed-coding-task leader in the frontier tier. Succeeded by Grok 4.6 (Aug 2026) and Grok 4.7 (Sep 2026); academic reasoning ceilings not in launch. For long-horizon coding agents, Cursor IDE users, and cost-sensitive production code generation where frontier quality is needed without frontier price, Grok 4.5 was the operational choice of July 2026 — and remains an option for token-efficient workflows.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
