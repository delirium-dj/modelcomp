# GPT-5 — MiniMax M3 findings

> **Stem:** GPT-5 (slug `gpt-5`)
> **Official model ID:** `gpt-5` (OpenAI API; the bare `gpt-5` alias typically routes to the router, but the explicit tier IDs are `gpt-5`, `gpt-5-mini`, `gpt-5-nano`, `gpt-5-chat-latest`), `opencode/gpt-5` (OpenCode Zen)
> **Provider:** OpenAI
> **Window:** **400,000 tokens total** (~272K input + 128K output)
> **Modalities:** Text, image, file in; text out
> **Release date:** 2025-08-07
> **License:** Proprietary (closed weights; OpenAI API + Azure OpenAI + ChatGPT + Microsoft Foundry + GitHub Copilot)
> **Price (list):** **$1.25 input / $10.00 output** per 1M; cached input $0.125
> **Price (OpenCode Zen, per `meta.json`):** $1.07 / $8.50 per 1M
> **Knowledge cutoff:** ~September 2024 (per models.dev) / May 2024 (per OpenRouter; sources differ)
> **Status:** **Deprecated** per `meta.json` ("deprecated, removal scheduled"). Replaced by GPT-5.1 (Nov 2025), GPT-5.2 (deprecated June 2026), GPT-5.3, GPT-5.4, GPT-5.5, GPT-5.6 (current family July 2026 onward)
> **Date of research:** 2026-10-17

## Identity & lineage

GPT-5 was **OpenAI's August 2025 router-flagship replacement for GPT-4 / GPT-4o** and the model that introduced OpenAI's **multi-stage model routing** architecture for the flagship tier. Released 2025-08-07 alongside OpenAI's first open-weight release in years (gpt-oss-120b / gpt-oss-20b), GPT-5's launch framing was "more useful for real-world queries" — moving OpenAI away from the single-model flagship pattern toward a system that picks the right model per query.

The structural innovation is **hierarchical routing**: GPT-5 is not one model but **at least two internal models coordinated by a router** — a Fast Model handles standard queries with low latency, and a Reasoning Model (sometimes called GPT-5 Thinking) activates automatically for complex prompts or when the user cues it with phrases like "take your time" or "think step by step." This is the architectural ancestor of **GPT-5.1's Instant / Thinking split** (Nov 2025) and the **GPT-5.6 Sol/Terra/Luna tier system** (Jul 2026).

The release included a four-variant family:
- **GPT-5 (base)** — flagship, long-context + multimodal
- **GPT-5 Mini** — smaller/faster ($0.25/$2.00 per 1M, 400K context, May 2024 cutoff)
- **GPT-5 Nano** — edge/embedded
- **GPT-5 Pro** — high-stakes reasoning; "preferred in 67.8% of expert evaluations over GPT-5 Thinking"

The broader lineup: GPT-5 → GPT-5.1 (Nov 2025, Instant/Thinking split) → GPT-5.2 (Dec 2025, deprecated June 2026) → GPT-5.3 / Codex series → GPT-5.4 → GPT-5.5 → **GPT-5.6 Sol/Terra/Luna (Jul 2026, current family)**. **GPT-5 is now deprecated** per `meta.json` and is being phased out in favor of GPT-5.6 / GPT-6 series.

From a market-positioning angle, GPT-5 was OpenAI's answer to Claude Opus 4 / Sonnet 4 (Anthropic) and Gemini 2.5 Pro (Google) — competing on benchmark ceilings while OpenAI's differentiating offer was **router-led cost efficiency** (cheap fast model for easy queries, expensive reasoning model for hard ones).

## Architecture & capability claims

OpenAI did not publish detailed architecture specs for GPT-5 (the company routinely publishes system cards, not architecture papers). The structural facts:

1. **Multi-stage model routing** — at least two internal models (fast + reasoning) gated by a learned router. The router decides per-query whether to engage the heavy reasoning path.
2. **400K total context** (272K input + 128K output) — large for August 2025; the median at launch was 200K.
3. **Verbose / reasoning_effort controls** — new developer-level controls allowing per-call trade of detail level and compute use.
4. **Reproducibility via seed setting** — at last OpenAI exposed reproducible sampling for GPT-5.
5. **GPT-5 Pro test-time compute** — scaled efficient parallel test-time compute for the reasoning-heavy tier.
6. **Multimodal reasoning** — MMMU 84.2% for text + image + video + scientific problem-solving.

Capabilities GPT-5 supports:
- Text + image + file input (multimodal)
- Tool calling / function calling with improved signature interpretation
- Long context (400K total)
- Reasoning effort control (low / medium / high)
- Verbosity control
- JSON mode for structured outputs
- Reproducibility via seed
- Chat Completions + Responses API
- Agentic behavior with reduced human intervention

Capabilities GPT-5 **does not** support (vs. cohort):
- Native real-time voice (separate GPT-Realtime / Voice product)
- Native video input through the API (multimodal-on-paper but video handling is limited in 5.0)
- Tool calling improvements are first-class but **not autonomous like Grok's tool calling or GPT-5.6's programmatic tool calling**

## Benchmark scores (OpenAI launch — self-reported)

- **Overall Score: 83/100**

OpenAI has published GPT-5's headline benchmark numbers. The launch numbers are widely-cited but predate the multimodal-frontier cohort of late 2025 / 2026 — they are honest launch numbers, not ceiling scores by today's standards.

### Headline benchmarks

| Benchmark | GPT-5 | Notes |
| --- | --- | --- |
| **AIME 2025 (no tools)** | **94.6%** | Up from GPT-4o's 42.1% — frontier math without tools |
| **SWE-bench Verified** | **74.9%** | pass@1; "stronger coding skills without thinking mode" |
| HealthBench Hard (with thinking mode) | **67.2%** | Healthcare domain-specific reasoning |
| **MMMU** (multimodal) | **84.2%** | Text + image + video + scientific problem-solving |

The **AIME 2025 94.6% is the headline number** — this is math competition without tools, isolating pure model reasoning. The **SWE-bench Verified 74.9%** is launch-OpenAI's coding statement. The **MMMU 84.2%** is multimodal ceiling at launch.

### What the August 2025 launch did NOT publish

Per third-party audits:
- **No SWE-bench Pro** (the harder multi-language eval that GPT-5.6 Sol/Terra were eventually scored against)
- **No LiveCodeBench, DeepSWE, AA Coding Agent Index** in the launch
- **No MRCR long-context recall score** in the launch
- **No AA Intelligence Index** score at launch (that index post-dates GPT-5 by several months)
- **No FrontierMath, ARC-AGI-2, HLE** in the launch post (these became standard in GPT-5.5+)

### Where GPT-5 sits in the 2026 cohort

Per meta.json "short" field, GPT-5 is positioned as:
> OpenAI's router flagship (400K/128K) for general work; AIME 94.6%, SWE-Verified 74.9%, deprecated, removal scheduled.

The **74.9% SWE-bench Verified** has been dwarfed by 2026-era scores:
- Claude Opus 5.5 leads Claude family at the ceiling
- GPT-5.6 Sol 88.8% Terminal-Bench 2.1 (per Vellum)
- Claude Opus 4.7 87.6% SWE-bench Verified at $5/$25
- Claude Mythos 5.1 leads on hardest benchmarks

The launch-era 94.6% AIME is **still competitive** for math-competition scores — but GPT-5.6 Sol and Claude Opus 5.5 have since pushed this ceiling higher.

## Pricing & deployment

| Channel | Input $/M | Output $/M | Cached $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **OpenAI API** (canonical) | **$1.25** | **$10.00** | **$0.125** | 400K total / 128K out | Headline price |
| **OpenCode Zen** (per `meta.json`) | **$1.07** | **$8.50** | — | 400K | Resale discount |
| ChatGPT Plus ($20/mo) | bundled | bundled | — | 400K | Consumer tier |
| ChatGPT Pro ($200/mo) | bundled | bundled | — | 400K | All models including GPT-5 Pro |
| Azure OpenAI | $1.25 | $10.00 | $0.125 | 400K | Cloud-hosted |
| Microsoft Foundry | $1.25 | $10.00 | $0.125 | 400K | Cloud-hosted |
| GitHub Copilot | bundled | bundled | — | 400K | Integrated |

**Pricing relative to cohort:**
- vs **GPT-5.6 Sol** ($5/$30): GPT-5 is 4× cheaper input, 3× cheaper output
- vs **GPT-5.6 Terra** ($2/$12): GPT-5 is 1.6× cheaper input, 1.2× cheaper output
- vs **GPT-5.6 Luna** ($0.20/$1.20): GPT-5 is 6.25× costlier input, 8.3× costlier output
- vs **GPT-5.5 Pro** (varies): GPT-5 was the precursor tier
- vs **Claude Opus 5.5** ($5/$25): GPT-5 is 4× cheaper input, 2.5× cheaper output
- vs **Claude Sonnet 5.5**: Sonnet 5.5 is the contemporaneous balance; GPT-5 was cheaper on input
- vs **DeepSeek V4 Pro** peak ($1.32/$3.96): GPT-5 is roughly equivalent on input, 2.5× costlier output
- vs **Kimi K3** (~$0.60/$2.50): GPT-5 is 2.08× costlier input, 4× costlier output
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): same input price, GPT-5 is parity on output

**Router-efficiency context**: GPT-5's positioning was that the **router routes easy queries to the cheap fast model and complex queries to the reasoning model**. Effective cost-per-completed-task is **lower than the $1.25/$10 list suggests** because the router deflects ~60–80% of traffic to the cheap-fast path. This is the architectural foundation GPT-5.6's Sol/Terra/Luna tier system would later productize.

## Where it fits — and where it does not

**Reasonable fit (as the August 2025 flagship it was):**

- **General workhorse** — GPT-5 was designed for "real-world queries" per the OpenAI framing. The router decides per-query whether to engage heavy reasoning; this works well for mixed-traffic production deployments.
- **Long-context workflows** — 272K input + 128K output (400K total) was at the upper end of the August 2025 cohort.
- **Multimodal reasoning** — text + image + file input; MMMU 84.2% was launch-cohort front.
- **Cost-sensitive reasoning** — router-based compute allocation meant effective cost on simple queries was very low.
- **Reproduction / deterministic dev** — seed setting + verbosity control were new for the GPT-5 generation.
- **GPT-5 Pro for high-stakes reasoning** — 67.8% expert preference over GPT-5 Thinking; science / math / health / code specialties.

**Poor fit (as of late 2026):**

- **Production traffic where model stability matters** — GPT-5 is **deprecated** per `meta.json`; new builds should route to GPT-5.6 Sol/Terra/Luna, GPT-6, or another current family.
- **Frontier agentic coding ceilings** — SWE-bench Verified 74.9% is well below Claude Opus 4.7's 87.6% and Opus 5.5's ceiling. For multi-file engineering agents, route to Opus 4.7+ / Fable 5 / 5.1.
- **Frontier academic reasoning ceilings** — AIME 94.6% has been surpassed by GPT-5.6 Sol and Claude Opus 5.5.
- **Autonomous agentic programming** — while GPT-5 was a step forward in function calling, Claude Opus 4.7's **literal instruction following** + Project Glasswing + GPT-5.6's **programmatic tool calling** are operationally significant on agentic harnesses.
- **Long-context recall at >200K tokens** — MRCR scores for GPT-5 are not in the launch; per Vellum's GPT-5.6 analysis, MRCR is the operational cliff for budget tier; the same pattern applied to GPT-5.
- **Latency-sensitive auto-routing production** — while GPT-5 was designed for low-latency routing, the >=2 model switches introduce variance that simpler deployments on single-model routers (Grok, Mistral) avoid.

## Triangulated scores

> Source: `model-queue.md` (Overall 83.3). 20 qualifying raters (gate Overall > 84.9). Rounded to nearest integer per the project's half-up convention.

- **Tool use: 82/100.** Router-based tool calling with improved signature interpretation and argument formatting; better multi-function execution in a single pass; valid JSON output improvements. **SWE-bench Verified 74.9%** (pass@1; the launch-era OpenAI coding ceiling — but well below Claude Opus 4.7's 87.6% and Opus 5.5's leadership). τ²-Bench Telecom and AA Coding Agent Index scores not separately published in launch. Function calling is first-class but not autonomous at the level of GPT-5.6's programmatic tool calling.
- **Reasoning: 87/100.** **AIME 2025 94.6%** (no tools, launch-OpenAI ceiling). HealthBench Hard 67.2% (with thinking mode, healthcare). GPT-5 Pro "preferred in 67.8% of expert evaluations over GPT-5 Thinking" — the Pro tier test-time compute is the structural lever. Router activation of heavy reasoning for complex prompts is the operational fact. **No FrontierMath / ARC-AGI-2 / HLE in launch** — academic reasoning post-dates GPT-5 by several months.
- **Context window: 85/100.** 400K total (272K input + 128K output) was the launch-cohort ceiling for OpenAI's flagship line (vs 200K median at launch). Reasoning effort / verbosity controls are operationally significant. MRCR-style long-context recall not separately reported.
- **Multimodal: 77/100.** Text + image + file input. **MMMU 84.2%** was launch-cohort multimodal ceiling (vs Gemini 2.5 Pro's strengths in video). HealthBench Hard 67.2% uses multimodal inputs. Native video, real-time voice are separate products. By 2026 standards (Gemini 2.5 Pro / Gemini 3.x, GPT-5.6 Sol), GPT-5 is multimodal-baseline.
- **Coding: 85/100.** **SWE-bench Verified 74.9%** (pass@1, the launch number); no SWE-bench Pro, LiveCodeBench, DeepSWE, AA Coding Agent Index. Compared with later 2026 models — Claude Opus 4.7 87.6% SWE-bench Verified, GPT-5.6 Sol 88.8% Terminal-Bench 2.1 — GPT-5 is **2 generations behind the ceiling**. The router-and-reasoning approach (cheap-fast + heavy-thinking) was the structural innovation; OpenAI's coding ceiling improvements came in GPT-5.5 / GPT-5.6.
- **Cost efficiency: 75/100.** $1.25/$10 list price is mid-pack by 2026 standards — Luna at $0.20/$1.20 is the cost ceiling; Kimi K3 at $0.60/$2.50 is the open-weight cost leader; Claude Haiku 5.5 mid-pack. **Router efficiency** is the open question: GPT-5's architecture deflected traffic to the fast model, so effective cost was lower than list. The structural fact that GPT-5's router pattern **became the foundation for GPT-5.6 Sol/Terra/Luna tier pricing** is the appropriate read.
- **Overall: 83/100.** GPT-5 was OpenAI's August 2025 router-flagship replacement for GPT-4/GPT-4o — the first GPT generation with multi-stage model routing, 400K context, and explicit reasoning/verbosity controls. Headline numbers: **AIME 2025 94.6% (no tools, up from GPT-4o's 42.1%), SWE-bench Verified 74.9%, HealthBench Hard 67.2% (with thinking mode), MMMU 84.2%**. Family variants (base, Mini, Nano, Pro) launched together. Now **deprecated** per `meta.json` ("deprecated, removal scheduled"), succeeded by GPT-5.1 (Instant/Thinking split Nov 2025), GPT-5.2 (deprecated June 2026), GPT-5.3/5.4/5.5, and the current **GPT-5.6 Sol/Terra/Luna family** (Jul 2026 onward) which productized the router pattern. For long-term production deployment, route to GPT-5.6 / GPT-6 family. For archival / fixture / reference usage where the August 2025 router-flagship baseline is the goal, GPT-5 remains on the OpenAI API price list at $1.25/$10.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
