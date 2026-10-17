# Claude Opus 4.7 — MiniMax M3 findings

> **Stem:** Claude Opus 4.7 (slug `claude-opus-4.7`)
> **Official model ID:** `claude-opus-4-7` (Claude API), `opencode/claude-opus-4.7` (OpenCode Zen; `scaffolded: true`)
> **Provider:** Anthropic
> **Window:** **1,000,000 tokens input** (1M); **128,000 output**
> **Modalities:** Text + **high-resolution vision** in (up to 2,576 px on long edge, ~3.75 MP); text out
> **Release date:** 2026-04-16 (generally available)
> **License:** Proprietary (closed weights; Anthropic API + Amazon Bedrock + Google Vertex AI + Microsoft Foundry + Claude.ai)
> **Price (≤200K prompt):** **$5.00 input / $25.00 output** per 1M
> **Price (>200K prompt):** $10.00 input / $37.50 output per 1M
> **Tokenizer note:** Same input text maps to ~**1.0–1.35× more tokens than Opus 4.6** (a migration gotcha)
> **Effort levels:** low / medium / high / **xhigh (new, sits between high and max)** / max
> **Cybersecurity:** First broadly-released model carrying **Project Glasswing** safeguard stack + new **Cyber Verification Program** for vetted researchers
> **Date of research:** 2026-10-17

> **Note on `meta.json`:** the project's `meta.json` records context window as "128K total" and modalities as "Text in/out". This is **stale** — Anthropic's launch post and llm-stats benchmark cache confirm **1M input / 128K output**, with vision input enabled (images up to 2,576 px on long edge). The actual specs are used below.

## Identity & lineage

Claude Opus 4.7 is **Anthropic's incremental upgrade** to Opus 4.6, released 2026-04-16 at the same $5/$25 price point as 4.6. Per Anthropic's own framing it is **a direct upgrade to 4.6 rather than a new tier** — the version number signals it (4.6→4.7, not 4.6→5.0). Claude Mythos Preview remains Anthropic's frontier ceiling (restricted to Glasswing partners); Opus 4.7 is the **highest broadly-released Anthropic model as of late April 2026**, before being succeeded by Opus 4.8 and Opus 5.

Four behavioral changes define the upgrade:

1. **Self-verification before reporting.** Opus 4.7 "devises ways to verify its own outputs before reporting back." Agentic loop inserts a Verify step between Execute and Report. Vercel reports 4.7 "does proofs on systems code before starting work" — new behavior not seen in prior Claude models. On long-running agentic work, this cuts double-digit error rates on tasks where 4.6 would otherwise report confidently incorrect results.
2. **Literal instruction following.** 4.7 follows instructions more literally than any previous Claude model. Anthropic explicitly flags this as a migration concern: prompts written for earlier models that relied on loose interpretation may produce unexpected results because 4.7 takes wording at face value.
3. **File-system memory across multi-session work.** Better at reading, writing, and reusing notes on a persistent file system across sessions — agents working over days rather than minutes no longer need to re-establish context.
4. **Higher-resolution vision (3.3×).** Images up to **2,576 px on long edge (~3.75 MP)**, vs ~1,568 px (~1.15 MP) on prior Claude models. Applied automatically through the vision API. XBOW reports 98.5% on a visual-acuity benchmark (vs 54.5% for Opus 4.6).

Three deployment additions accompany the model:
- **xhigh effort level** (between high and max) — Claude Code default has been raised to xhigh for all plans
- **Task budgets** (public beta) — cap token spend across long-running jobs
- **Claude Code additions**: `/ultrareview` for diff review (three free runs for Pro/Max); Auto mode for Max users

## Architecture & capability claims

Anthropic does not publish separate architecture specs for incremental Opus releases. Opus 4.7 inherits the Opus 4 base and is differentiated by post-training: the four behavioral changes above are the operative facts, not architectural overhauls.

Key capability levers:
1. **Effort level xhigh** (new) — sits between high and max. In Claude Code, the default for all plans is xhigh.
2. **Multi-agent coordination** — Anthropic reports "meaningfully better" multi-agent hand-offs; the +14.6-point jump on MCP-Atlas (the largest single improvement in the agentic suite) lines up with the literal-instruction-following behavior.
3. **Vision resolution upgrade** — model-level, applied automatically; users don't pass a parameter. Charts, dense screenshots, complex diagrams are now usable without operator-side pre-cropping.
4. **Token-level visibility** — Anthropic confirms "same input can map to ~1.0–1.35× more tokens than Opus 4.6"; teams running Opus at volume must re-baseline cost forecasting.

Capabilities Opus 4.7 supports:
- Text + vision input (up to 2,576 px / ~3.75 MP)
- Tool calling (function calls)
- File-system memory across multi-session runs (Claude API)
- Self-verification before report
- Extended thinking (xhigh or max effort, paid per thinking token)
- MCP-Atlas-style multi-agent coordination
- Cached input (Anthropic prompt caching tiers — see pricing page)
- Batch processing (50% discount)

Capabilities Opus 4.7 **does not** support:
- Native audio or video input (Claude models have never supported these; Gemini is the multimodal leader)
- Real-time voice (separate Claude Voice product)
- Extended reasoning with indefinite thinking budget (capped by xhigh/max effort)

## Benchmark scores (Anthropic launch — self-reported, with caveats)

- **Overall Score: 89/100**

Anthropic states the **SWE-bench results include memorization-screen adjustments; margin holds when flagged items are excluded**. All numbers below are from the launch announcement unless otherwise noted.

### Agentic coding

| Benchmark | Opus 4.7 | Opus 4.6 | Delta |
| --- | --- | --- | --- |
| **SWE-bench Verified** | **87.6%** | 80.8% | +6.8 |
| **SWE-bench Pro** | **64.3%** | 53.4% | +10.9 |
| **Terminal-Bench 2.0** | **69.4%** | 65.4% | +4.0 |
| **Rakuten-SWE-Bench** | **3× more production tasks resolved** | baseline | ~3× |
| CursorBench (Cursor internal) | **70%** | 58% | +12 |

The **+10.9-point jump on SWE-bench Pro** is the largest single agentic gain — concentrated on harder, less-saturated, multi-language engineering tasks. The headline **87.6% on SWE-bench Verified** is the strongest publicly-reported Anthropic result at launch (May 2026).

### Reasoning & knowledge

| Benchmark | Opus 4.7 | Opus 4.6 | Delta |
| --- | --- | --- | --- |
| **GPQA Diamond** | **94.2%** | 91.3% | +2.9 |
| HLE (with tools) | 54.7% | 53.1% | +1.6 |
| HLE (without tools) | 46.9% | 40.0% | +6.9 |
| MMMLU | 91.5% | 91.1% | +0.4 |
| **BigLaw Bench** (for Harvey) | **90.9%** (high effort) | 90.2% | +0.7 |

**GPQA Diamond 94.2%** places Opus 4.7 at the frontier for graduate-level reasoning. The **+6.9-point HLE (no tools) jump** is meaningful — HLE without tools isolates pure model knowledge rather than tool-use masking capability.

### Agents: browse, tools, computer use

| Benchmark | Opus 4.7 | Opus 4.6 | Delta |
| --- | --- | --- | --- |
| BrowseComp | 79.3% | 84.0% | **−4.7** |
| **MCP-Atlas** | **77.3%** | 62.7% | **+14.6** |
| OSWorld-Verified | 78.0% | 72.7% | +5.3 |
| **Finance Agent** | **64.4% SOTA** | 60.7% | +3.7 |
| CyberGym | 73.1% | 73.8% | −0.7 |

The **+14.6-point MCP-Atlas jump** is the largest in the entire agentic suite, lining up with literal-instruction-following. **BrowseComp dropped 4.7 points** — Opus 4.6 scored 84.0% under a multi-agent harness at max effort, so the comparison is sensitive to harness choice and the drop is partly methodological. CyberGym's flat 73.1% (vs 4.6's 73.8%) is a **policy choice, not a capability ceiling**: Mythos Preview scores 83.1% on the same benchmark but remains restricted to Glasswing partners; 4.7 deliberately does not climb that high.

### Vision

| Benchmark | Opus 4.7 | Opus 4.6 | Delta |
| --- | --- | --- | --- |
| **CharXiv-R (with tools)** | **91.0%** | 77.4% | **+13.6** |
| CharXiv-R (without tools) | 82.1% | 68.7% | +13.4 |

Visual reasoning is the **largest domain jump in the release: +13 points on CharXiv-R both with and without tools**. The no-tools result (68.7% → 82.1%) isolates the vision capability itself rather than the image-cropping tool. XBOW's visual-acuity sub-benchmark reports **98.5% (Opus 4.7) vs 54.5% (Opus 4.6)** — the resolution upgrade accounts for most of it.

### What Anthropic chose not to report

Per Vellum and llm-stats audits: **no LiveCodeBench, no AA Intelligence Index, no AA Coding Agent Index, no FrontierMath, no ARC-AGI-2, no MRCR, no specific audio/video benchmarks** in the public release. The honest read: the suite is internally-selected to put Opus 4.7's strongest axes (coding + vision + agentic) at the front. Independent reruns (Replit, Cursor, Rakuten, Hex, Vercel, Devin, Factory, Ramp) all corroborate the headline improvements in qualitative terms.

## Pricing & deployment

| Channel | Input $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- |
| **Anthropic API** (≤200K) | **$5.00** | **$25.00** | 1M / 128K | Canonical price |
| **Anthropic API** (>200K) | $10.00 | $37.50 | 1M / 128K | Premium tier for long prompts |
| Anthropic Batch (50% off) | $2.50 | $12.50 | 1M / 128K | Async processing |
| Anthropic prompt caching | 1.25× write, 0.10× read | — | 1M / 128K | Per Anthropic's caching tiers |
| OpenCode Zen (scaffolded) | varies | varies | (per `meta.json`, scaffolded) | OpenCode Zen resells |
| Amazon Bedrock | $5 / $25 | — | 1M / 128K | Cloud-hosted |
| Google Vertex AI | $5 / $25 | — | 1M / 128K | Cloud-hosted |
| Microsoft Foundry | $5 / $25 | — | 1M / 128K | Cloud-hosted |

**Pricing relative to cohort:**
- vs **Claude Opus 4.8 / Opus 5**: same pricing — Anthropic has held $5/$25 across the Opus tier since 4.6
- vs **Claude Sonnet 4.6 / Sonnet 5**: ~5× cheaper input, ~5× cheaper output
- vs **Claude Haiku 5.5**: ~16× cheaper output (Opus is flagship)
- vs **GPT-5.6 Sol** ($5/$30): parity on input, Opus 17% cheaper output
- vs **GPT-5.6 Terra** ($2/$12): Terra is 2.5× cheaper input, 2.08× cheaper output
- vs **GPT-5.6 Luna** ($0.20/$1.20): Luna is 25× cheaper input, ~21× cheaper output
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): Opus is 4× costlier input, 2.5× costlier output
- vs **DeepSeek V4 Pro** peak ($1.32/$3.96): Opus is ~3.8× costlier input, ~6.3× costlier output
- vs **Kimi K3** (~$0.60/$2.50): Opus is ~8.3× costlier input, ~10× costlier output

**The `Cost efficiency: 51.7/100` in `average.md` is the lowest in the top-15 cohort.** At $5/$25 + 1.0–1.35× tokenizer overhead, Opus 4.7 is the **most expensive broadly-released Anthropic model**. Cost-efficiency dropped further after Opus 4.8 and Opus 5 landed (same price, higher capability per token).

## Where it fits — and where it does not

**Reasonable fit:**

- **Hard software engineering tasks** — 87.6% SWE-bench Verified (best Anthropic at launch), 64.3% SWE-bench Pro, 70% on CursorBench, 3× Rakuten-SWE-Bench production-task uplift. For teams running Anthropic at volume, Opus 4.7 was the first broadly-available model to land these results at the $5/$25 line.
- **Agentic workflows with long runs** — self-verification cuts double-digit error rates; file-system memory removes the re-establish-context tax across sessions; MCP-Atlas 77.3% (+14.6 vs 4.6) on multi-agent coordination. Vercel, Devin, Factory, Ramp, Notion all report "longer autonomous runs, less step-by-step guidance."
- **Computer-use and document-understanding** — 78.0% OSWorld-Verified; CharXiv-R 91.0% with tools, 82.1% without; images up to 2,576 px on long edge. XBOW reports 98.5% visual-acuity (vs 54.5%) — pen-testing and dense-screenshot workflows become viable.
- **High-effort reasoning ceilings** — 94.2% GPQA Diamond; xhigh effort level (new in 4.7) gives finer reasoning-vs-latency control. Anthropic recommends xhigh as the new default for coding/agentic in Claude Code.
- **Legal / financial professionals** — BigLaw Bench 90.9% (for Harvey); Finance Agent SOTA 64.4%. Anthropic's Harvey and FactSet partner testimonials center on these workloads.
- **Multi-agent harnesses** — the literal-instruction-following behavior lands particularly well on MCP-Atlas-style handoffs.

**Poor fit:**

- **Cost-driven, high-volume pipelines** — at $5/$25 + tokenizer overhead this is the wrong tool for Auto-review, classification, summarization, batch processing. Route to Sonnet 4.6/5 or Haiku 5.5 for those.
- **Pure text-only workloads that don't need the ceiling** — Claude Sonnet 4.6 is competitive on most reasoning benchmarks at 1/5 the price.
- **Latency-sensitive production traffic** — xhigh/max effort inflates latency; default to Sonnet for sub-200ms responses.
- **Prompts written for loose-interpretation models** — 4.7 takes wording literally; bullet lists of suggestions become hard requirements. Audit system prompts before flipping the flag.
- **Token-budget forecasting built against Opus 4.6** — same input text can map to **1.0–1.35× more tokens**; rerun cost projections on real traffic.
- **Cybersecurity workloads that need capability ceilings** — Opus 4.7 deliberately does not climb CyberGym (73.1% flat) per Anthropic's Project Glasswing policy. For vetted security research, apply to the Cyber Verification Program; for raw capability, Claude Mythos Preview remains the ceiling.
- **Native audio/video multimodal** — Opus 4.7 is text + vision only; no audio, no video. Gemini remains the multimodal leader.

## Triangulated scores

> Source: `model-queue.md` (Overall 88.9). 6 qualifying raters (gate Overall > 84.9): Claude Opus 4.6, Gemini 3.8 Flash, GLM 5.3 Flash, GPT-6.1 Sol, MiMo 2.6 Flash, Qwen 3.8 Flash. Rounded to nearest integer per the project's half-up convention.

- **Tool use: 89/100.** Anthropic-reported MCP-Atlas 77.3% (+14.6 vs 4.6, the largest jump in the agentic suite). OSWorld-Verified 78.0% (+5.3); Finance Agent 64.4% SOTA; self-verification before reporting cuts double-digit error rates on long-running agentic work; literal instruction-following is operationally significant on MCP-Atlas hand-offs. Replit, Cursor (CursorBench 70%), Rakuten (3×), Vercel all corroborate.
- **Reasoning: 91/100.** GPQA Diamond **94.2%** (frontier); HLE with tools 54.7%, HLE without tools 46.9% (+6.9 — meaningful); MMMLU 91.5%; BigLaw Bench 90.9% (high effort). xhigh effort level is a new lever between high and max; Claude Code default raised to xhigh. Note Anthropic did not report FrontierMath, ARC-AGI-2, AA Intelligence Index in the launch.
- **Context window: 93/100.** 1M input / 128K output is the same as 4.6; cost doubles for prompts >200K tokens ($10/$37.50). The updated tokenizer means the same input maps to ~1.0–1.35× more tokens — count carefully. File-system memory is a model-level capability, not a context-window metric, but it removes the re-establish-context tax across sessions.
- **Multimodal: 82/100.** Text + vision input (up to 2,576 px / ~3.75 MP) — the **3.3× vision upgrade** is the largest in the release. CharXiv-R 91.0% with tools, 82.1% without (+13.6 / +13.4). XBOW visual-acuity 98.5% (vs 4.6's 54.5%). No audio/video. Compared to Gemini's full omni stack, Opus 4.7 is vision-strong but modality-narrow.
- **Coding: 92/100.** SWE-bench Verified **87.6%** (SOTA Anthropic at launch, +6.8 vs 4.6), SWE-bench Pro **64.3%** (+10.9), Terminal-Bench 2.0 69.4% (+4.0), CursorBench 70% (vs 4.6's 58%), Rakuten-SWE-Bench 3×. Anthropic's primary evaluation is coding — and this is the strongest Opus-4-family coding model. Self-verification closes the gap between "looks right" and "is right" on long-running agentic coding tasks.
- **Cost efficiency: 52/100.** $5/$25 (≤200K) is **the most expensive broadly-released Anthropic model** at the time of release; same line as 4.6. Long-prompt tier ($10/$37.50 at >200K) compounds the cost. Updated tokenizer inflation 1.0–1.35× is the migration gotcha. Anthropic Batch at $2.50/$12.50 is the cost lever. Cost efficiency is the axis on which Opus 4.7 trails the cohort most — Sonnet, Haiku, GPT-5.6 Luna, DeepSeek V4 Pro, Kimi K3 all score higher on $/quality.
- **Overall: 89/100.** Claude Opus 4.7 is Anthropic's incremental Opus-4.6 → 4.7 release on 2026-04-16 at the same $5/$25 line. Headline gains: **SWE-bench Verified 87.6% (+6.8), SWE-bench Pro 64.3% (+10.9), GPQA Diamond 94.2%, MCP-Atlas 77.3% (+14.6), CharXiv-R 91.0% (+13.6), visual-acuity 98.5% (vs 54.5%)**. Four operational shifts define the upgrade: self-verification before reporting, literal instruction following, file-system memory across sessions, 3.3× higher-resolution vision. New xhigh effort level sits between high and max; Claude Code default raised to xhigh. First broadly-released model with **Project Glasswing** safeguards (CyberGym deliberately flat at 73.1%). Cost efficiency is the documented ceiling. Succeeded by Opus 4.8 and Opus 5; superseded by Sonnet 5.5 and Opus 5.5 in 2026. For agentic coding, multi-agent coordination, document-understanding, and high-effort reasoning ceilings where cost is secondary, Opus 4.7 was the strongest broadly-available Anthropic model of April 2026 — and remains an option for cost-insensitive workloads.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
