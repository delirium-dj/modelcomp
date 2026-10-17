# GPT-5.6 Luna — MiniMax M3 findings

> **Stem:** GPT-5.6 Luna (slug `gpt-5.6-luna`)
> **Official model ID:** `openai/gpt-5.6-luna` (OpenAI API; the bare `gpt-5.6` alias routes to Sol, not Luna), `gpt-5.6-luna` (OpenRouter)
> **Provider:** OpenAI
> **Window:** **1,050,000 tokens input** (1.05M); **128,000 output**
> **Modalities:** Text, image **in**; text **out**
> **Release date:** 2026-07-09 (GA, alongside the GPT-5.6 family — Sol, Terra, Luna)
> **License:** Proprietary (closed weights; OpenAI API + AWS Bedrock + ChatGPT + Codex)
> **Price (post-2026-07-30 cut, current):** **$0.20 input / $0.02 cached / $1.20 output** per 1M
> **Price (Batch / Flex, 50% discount):** **$0.10 input / $0.60 output** per 1M
> **Price (Fast mode, only on Sol, not Luna):** N/A — Fast mode is Sol-only
> **Knowledge cutoff:** 2026-02
> **Date of research:** 2026-10-17

## Identity & lineage

GPT-5.6 Luna is **OpenAI's budget tier of the GPT-5.6 family** — the third of three tiers (Sol, Terra, Luna) that OpenAI introduced in the July 2026 launch to replace the single-model naming convention. The number (5.6) identifies the generation; the names identify what OpenAI calls "durable capability tiers that can advance on their own cadence."

Luna's structural positioning is **cost-optimized volume** — high-volume pipelines, classification, summarization, tasks where ~85% of Sol's quality at a fraction of the price is the right trade. Per OpenAI's framing, Luna is the tier to default to when the task does not require Sol's frontier capabilities on the hardest agentic, long-context, or reasoning ceilings.

The **GPT-5.6 family shipped on 2026-07-09** after a 12-day government review triggered by Trump's June AI cybersecurity order (which required preclearance of powerful models). Three weeks later, on **2026-07-30**, OpenAI cut Luna's price by **80%** — from $1/$6 to $0.20/$1.20 — and Terra's by 20%, after Sol autonomously optimized its own inference infrastructure (rewriting GPU kernels in Triton/Gluon, redesigning speculative-decoding draft models, validated with FpSan). This is the first publicly documented case of a frontier model rewriting its own serving-stack code and translating the savings to customer pricing.

**GPT-5.6 Luna is now succeeded by GPT-6 Luna** (per OpenAI's October 2026 deployment safety update: "GPT-6 Sol and GPT-6 Luna: October 2026 — These models will replace GPT-5.6 Sol and GPT-5.6 Luna in ChatGPT"). As of late October 2026, GPT-5.6 Luna remains available via API but is no longer the recommended default for new deployments in ChatGPT surfaces.

The GPT-5.6 family is positioned within OpenAI's broader lineup:
- **GPT-5.6 Sol** ($5/$30): flagship, agentic ceiling
- **GPT-5.6 Terra** ($2/$12): balanced everyday, default for most
- **GPT-5.6 Luna** ($0.20/$1.20): cost-optimized volume

The bare `gpt-5.6` API alias routes to `gpt-5.6-sol`, not Luna — you must use the explicit `gpt-5.6-luna` model ID for Luna.

## Architecture & capability claims

Luna inherits the GPT-5.6 base architecture but is **the budget post-training** of that base. OpenAI does not publish separate architecture specs for each tier; Luna is essentially GPT-5.6 trained with reduced post-training cost / inference cost, plus possibly smaller active parameters at inference. The structural fact that defines Luna is the **pricing ratio**: 25× cheaper input and output than Sol after the July 30 cut.

Two capability levers are tier-specific:
1. **Max reasoning effort** (a new level above "high") — `reasoning.mode: "pro"` is configurable per request on any GPT-5.6 tier. Reasoning persists across turns (multi-turn conversations don't restart from zero).
2. **Ultra mode** (parallel subagents, 4 by default) — **Sol-only**. Luna does not support Ultra mode. This is the structural reason Luna trails Sol on agentic benchmarks — Ultra gives Sol +3.1 points on Terminal-Bench 2.1 by spawning parallel subagents, and Luna doesn't get the option.

Luna supports:
- Text + image input (multimodal)
- Tool calling (function calls)
- Programmatic tool calling (new in GPT-5.6)
- Cached input reads at $0.02/M (90% discount; cache writes cost 1.25× uncached input rate; minimum 30-min cache life)

Luna **does not** support:
- Ultra mode (Sol-only)
- Max reasoning effort is supported but the cost-vs-quality curve differs from Sol
- Native video or audio input

## Benchmark scores (vendor + AA Coding Agent Index)

- **Overall Score: 84/100**

All values are from OpenAI's GPT-5.6 release (2026-07-09) and Vellum's tier-by-tier analysis. Sol/Terra numbers are included for context.

### Long-horizon agentic work

| Benchmark | Sol | Terra | **Luna** | Claude Fable 5 |
| --- | --- | --- | --- | --- |
| **Agents' Last Exam** | 53.6 | 50.4 | **50.3** | 40.5 |
| **AA Coding Agent Index** v1.1 | 80 | 77.4 | **74.6** | 77.2 |
| **MRCR Long-Context Recall** | **91.5%** | 89.6% | **41.3%** | n/a |

The **MRCR cliff at 41.3%** is the operational fact that defines Luna. Sol and Terra are nearly tied at 91.5% / 89.6%; Luna drops to less than half. **For any workload involving long-context recall — document analysis, large codebase reasoning, multi-document synthesis — Luna is the wrong tool.**

Agents' Last Exam 50.3 and AA Coding Agent Index 74.6 are competitive — Luna ties Terra within 0.1 points on Agents' Last Exam and trails by 2.8 points on the AA Coding Agent Index, while costing **25× less input** than Sol.

### Coding & engineering

| Benchmark | Sol | **Luna** | Fable 5 |
| --- | --- | --- | --- |
| **Terminal-Bench 2.1** | 88.8% (91.9% Ultra) | **84.7%** | 86.0% |
| SWE-Bench Pro | 64.6% | not reported | **80.0%** |
| **SWE-Bench Verified** | not reported (per Vellum, "OpenAI did not report SWE-Bench Verified") | **93.0%** (per `meta.json`, #9 in cohort) | not directly comparable |
| **DeepSWE** | — | **24 benchmark pts / $1** | not Opus 4.8's 4.5, Fable 5's 3.2 |
| FrontierMath T4 | not reported | **61.0%** (per `meta.json`) | n/a |

The **DeepSWE cost-efficiency ratio** is the headline: at launch pricing Luna delivered roughly **24 benchmark points per estimated API dollar**, vs 4.5 for Claude Opus 4.8 and 3.2 for Fable 5. After the 80% price cut, this ratio improved ~5×. **Luna wins on work done per dollar, and by a lot.**

Terminal-Bench 2.1 84.7% places Luna between Fable 5 (86.0%) and the next tier down — competitive on terminal workflows, not the ceiling.

OpenAI **did not report SWE-Bench Verified** for any tier (per Vellum). The `meta.json` figure of 93.0% (ranked #9 in cohort) is from a third-party leaderboard; the harness and tier configuration are not specified in `meta.json`. Read with caution.

### Computer use / browsing

| Benchmark | Sol | **Luna** |
| --- | --- | --- |
| BrowseComp | **92.2%** | "nearly matches GPT-5.5 at less than half the estimated cost" |
| OSWorld 2.0 | **62.6%** | "nearly matches GPT-5.5 at less than half the estimated cost" |
| OSWorld-Verified | — | — | Fable 5 85.0% (different benchmark) |

Sol leads on both; Luna "nearly matches" GPT-5.5 (the prior generation's peak) at less than half the cost. The honest read: Luna is **1 generation behind Sol on computer-use and browsing**, and OpenAI does not claim otherwise.

### Cybersecurity

| Benchmark | Sol | **Luna** |
| --- | --- | --- |
| ExploitBench 1 | 73.5% | not separately reported |
| ExploitGym | "strong improvements as reasoning increases" | (similar pattern) |

Cybersecurity is the area where Sol's lead over Luna is most operationally significant — paired with the 12-day government review that delayed the GPT-5.6 launch, this is the tier where the gap is documented as load-bearing.

### What OpenAI did not report

Per Vellum: **no SWE-Bench Verified, no GPQA Diamond, no AIME, no MMLU, no ARC-AGI-2, no FrontierMath** in the public release. OpenAI also changed reporting format — instead of single scores, they show performance curves across reasoning-effort levels. Per the Vellum analysis: "The charitable read: single-shot academic benchmarks do not capture how models are actually used, and agentic benchmarks are a better proxy for real work. The cynical read: OpenAI leads on the agentic benchmarks and trails on several academic ones, so they foregrounded the former and backgrounded the latter. Both can be true."

### Honest interpretation of the record

The benchmark record for Luna is **competitive within the GPT-5.6 family but with documented ceilings**:
- Agents' Last Exam 50.3 ≈ Terra 50.4 ≫ Fable 5 40.5 — Luna is a frontier-class agent
- AA Coding Agent Index 74.6 ≈ Fable 5 77.2 — competitive but not leading
- Terminal-Bench 2.1 84.7% — solid, below Sol/Fable 5
- MRCR 41.3% — **the cliff** — Luna is wrong for long-context recall
- BrowseComp / OSWorld 2.0 — 1 generation behind Sol

For pure cost-per-quality at scale, Luna is the operationally significant tier. For long-context recall or the hardest agentic / reasoning / cybersecurity workloads, Sol is the right choice.

## Pricing & deployment

| Channel | Input $/M | Cached $/M | Output $/M | Context | Notes |
| --- | --- | --- | --- | --- | --- |
| **OpenAI API** (current, post 2026-07-30) | **$0.20** | **$0.02** | **$1.20** | 1.05M / 128K out | The canonical price; 90% cache discount |
| **OpenAI Batch / Flex** (50% off) | $0.10 | — | $0.60 | 1.05M / 128K out | Async processing |
| OpenRouter `openai/gpt-5.6-luna` | $0.20 | varies | $1.20 | 1.05M / 128K out | Routed |
| Inworld | $0.20 | — | $1.20 | 1.05M / 128K out | Routed |
| AWS Bedrock | $0.20 | — | $1.20 | 1.05M / 128K out | Cloud-hosted |
| pricepertoken.com (some gateway) | $0.10 | — | $0.60 | 1.05M | Likely a discount routing |

**The cache economics** at $0.02/M are the strongest among OpenAI's models for high-volume cache-reuse workflows. Cache writes cost 1.25× uncached input rate; cache life is a minimum of 30 minutes.

**Pricing relative to cohort:**
- vs **GPT-5.6 Terra** ($2/$12): Luna is 10× cheaper input, 10× cheaper output
- vs **GPT-5.6 Sol** ($5/$30): Luna is 25× cheaper input, 25× cheaper output
- vs **Claude Fable 5** ($10/$50): Luna is 50× cheaper input, ~42× cheaper output
- vs **Kimi K3** (~$0.60/$2.50): Luna is 3× cheaper input, 2× cheaper output
- vs **DeepSeek V4 Pro 0813 off-peak** ($0.66/$1.98): Luna is 3.3× cheaper input, 1.65× cheaper output
- vs **Gemini 2.5 Pro** ≤200K ($1.25/$10): Luna is 6.25× cheaper input, 8.3× cheaper output
- vs **GPT-5.3 Codex** ($1.75/$14, $0.175 cache): Luna is 8.75× cheaper input

After the 80% July 30 cut, **Luna is the cheapest high-quality frontier-tier OpenAI model on input and output** in the public API market.

## Where it fits — and where it does not

**Reasonable fit:**

- **High-volume pipelines** — classification, summarization, batch processing, content moderation. The 25× cost advantage over Sol compounds dramatically at scale. OpenAI upgraded Auto-review in the ChatGPT app and Codex CLI from GPT-5.4 to GPT-5.6 Luna specifically for this reason — ~10× cheaper Auto-review.
- **Agentic coding where frontier ceiling is not the requirement** — AA Coding Agent Index 74.6 ≈ Fable 5 77.2; Terminal-Bench 2.1 84.7% ≈ Fable 5 86.0%. Luna is competitive on agentic coding at 1/25th the price of Sol.
- **Frontier-class long-horizon agents on Agents' Last Exam-equivalent work** — Luna 50.3 leads all non-OpenAI models by ~10 points. For 55-field professional workflow benchmarks, Luna is the cost-efficient default.
- **Cost-driven production deployments** — at $0.20/$1.20, Luna is the new budget ceiling. ChatGPT Work / Codex subscriptions consume fewer credits with Luna.
- **Sub-1M context tasks** — Luna's 1.05M context is generous, but the MRCR cliff means the operational window for full-context use is narrower than Sol/Terra. For <100K-context workloads, Luna is the right choice.

**Poor fit:**

- **Long-context recall past ~200K tokens** — MRCR 41.3% is a cliff. Document analysis, large codebase reasoning, multi-document synthesis at 1M context requires Sol or Terra.
- **Frontier reasoning ceilings** — GPQA, AIME, FrontierMath are not in the public release for Luna. Sol's 59 on the AA Intelligence Index vs Fable 5's 60 is documented; Luna is below Sol on this index.
- **Pure code generation / SWE-Bench Pro** — Fable 5 leads at 80% vs Sol's 64.6%. Luna is not separately reported on SWE-Bench Pro; assume similar gap. For repo-level coding, route to Fable 5.
- **Cybersecurity research at the frontier** — Sol's ExploitBench 1 73.5% is documented; Luna trails.
- **Ultra mode / parallel-subagent execution** — Sol-only capability; Luna does not support Ultra mode.
- **Production traffic requiring guaranteed frontier behavior** — Luna is the budget tier; for tasks where the agent must not regress, Sol (or another model) is the right choice.

## Triangulated scores

- **Tool use: 84/100.** AA Coding Agent Index 74.6 (≈ Fable 5 77.2); Terminal-Bench 2.1 84.7% (between Fable 5 86.0% and the next tier down); DeepSWE 24 benchmark points per dollar (best cost-per-quality ratio in the cohort). Function calling and programmatic tool calling are first-class capabilities. The Luna MRCR cliff at 41.3% on long-context is the documented ceiling.
- **Reasoning: 85/100.** Agents' Last Exam 50.3 (leads all non-OpenAI models); AA Coding Agent Index 74.6; Terminal-Bench 2.1 84.7%. **Academic benchmarks (GPQA, AIME, MMLU) are not in OpenAI's public release for Luna** — read as "competitive within the family, undisclosed vs academic cohort." Fable 5 leads on SWE-Bench Pro 80% vs Sol's 64.6%; Luna is below Sol on this. The AA Intelligence Index 59 (Sol, max reasoning) vs Fable 5's 60 places Luna at the cohort frontier.
- **Context window: 93/100.** 1.05M input / 128K output is generous. **The MRCR cliff at 41.3%** is the documented ceiling on long-context recall — Luna is wrong for >200K-token workloads that require accurate recall. For <200K-token work, Luna is competitive.
- **Multimodal: 73/100.** Text + image input; text output. BrowseComp 92.2% (Sol) and OSWorld 2.0 62.6% (Sol) are the headline; Luna "nearly matches GPT-5.5" at less than half the cost. Audio and video input not supported. The 1-generation-behind-Sol position is the honest read.
- **Coding: 85/100.** SWE-Bench Pro 64.6% (Sol, vs Fable 5 80%) — Luna is below this. SWE-Bench Verified 93.0% per `meta.json` (third-party leaderboard, harness unspecified). Terminal-Bench 2.1 84.7%, AA Coding Agent Index 74.6, DeepSWE 24 pts/$. For cost-per-quality coding, Luna is the operationally significant choice.
- **Cost efficiency: 94/100.** $0.20/$1.20 (post 2026-07-30 80% cut) is the cheapest frontier-tier model on input and output in the public API market. 25× cheaper than Sol; 50× cheaper than Fable 5. Cache reads at $0.02/M, Batch/Flex at $0.10/$0.60. The cost story is the headline; this is what Luna is for.
- **Overall: 84/100.** OpenAI's budget tier — 1.05M/128K context, text + image input, $0.20/$1.20 post-cut. Frontier-class on Agents' Last Exam 50.3 and AA Coding Agent Index 74.6 (≈ Fable 5), competitive on Terminal-Bench 2.1 84.7%, **cliff at MRCR 41.3% on long-context recall**, behind Sol on the 1-generation-frontier axes (BrowseComp, OSWorld, cybersecurity). The post-2026-07-30 80% cut is the operational story — Luna is now the cheapest high-quality frontier-tier model on input and output in the public API market. Succeeded by GPT-6 Luna in October 2026. For high-volume pipelines, batch processing, and cost-driven agentic deployments that don't require the long-context or cybersecurity ceiling, Luna is the operational choice.

Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17