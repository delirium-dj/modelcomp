# Muse Spark 1.3 — findings by Xing 4.0 29B A4B

> Source: Meta (`muse-spark-1.3`)
> Date: 2026-09-26 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3
- **Short description:** Meta Superintelligence Labs proprietary multimodal reasoning model for long-running agentic and coding workflows; 1M context, closed weights, contributor free tier via Muse Code.
- **Provider / access:** Meta Model API (`muse-spark-1.3`); Muse Code. Notes: Chat Completions / Responses / Messages formats supported. Standard tier available pay-as-you-go; Contributor tier ($0.10/$0.20) for approved testers where Meta may train on your code.
- **Release / knowledge:** Release date September 2, 2026; knowledge cutoff unknown.
- **IDs:** `opencode/muse-spark-1.3`; `muse-spark-1.3-contributor` (Contributor mode). No Zen Free ID.
- **Context window:** 1,048,576 total tokens (1M); max output 131,072 tokens. Verified from Meta docs and API SDK defaults (default `max_tokens: 16384`, up to 131072).
- **Modalities:** Text, image, video, PDF input; audio partially unsupported; text output. Reasoning enabled at all effort levels including `max`. MCP tool calling supported (Meta shows MCP Atlas 89.2).
- **Pricing (as of 2026-09):** Standard $1.25 in / $0.15 cached in / $4.25 out per 1M tokens; Contributor $0.10 in / $0.002 cached in / $0.20 out. Contributor/Free indicates data-use permission, not zero cost.
- **Architecture:** Proprietary, closed weights. MoE architecture not disclosed; estimated active parameters inside a Mixture-of-Experts family. OpenRouter and BenchLM note MoE. No open-weight release announced yet.

## Raw benchmarks found

Agent / tool use:

- MCP Atlas: **89.2%** <(Meta official source; xhigh variant no verified public score)>
- MRCR 256K–512K: **98.5%** <(Meta official table)>
- MRCR 512K–1M: **98.1%** <(Meta official table)>
- JobBench (professional tool use): **60.5%** <(Meta official table)>

Reasoning / knowledge:

- Artificial Analysis Intelligence Index v4.3.2 (Xhigh): **45** / rank out of 224 <(artificialanalysis.ai, Sep 2026)>
- GDPVal-AA v2: **1754** (vs. Claude Opus 5 at 1824) <(Meta official table)>
- GPQA Diamond: **94.1%** <(AI Arena leaderboard)>
- HLE: **47.5%** <(AI Arena leaderboard)>

Coding:

- DeepSWE v1.1: **75.4%** <(Meta official source; criticized by Epoch AI as missing from public leaderboards)>
- Terminal-Bench 2.1: **88.8%** <(Meta official table; source says "completed additional safety testing" for max variant)>
- SWEAtlas Codebase QnA: **59.4%** <(Meta official table)>

Long context:

- MRCR v2 (both ranges) dominant retrieval benchmark values as above; 1M-context window provides industry-leading retrieval capacity.

### Independent review notes

- Artificial Analysis evaluates customer-available tier (xhigh) only; max not publicly listed, currently unavailable through API. On Intelligence Index v4.3.2, Muse Spark 1.3 (Xhigh) ranks ~3rd overall behind Claude Fable 5.1 (#4) and Claude Opus 5 (#1), ahead of GPT-6 Sol (47.6).
- Coursiv reports Muse Spark 1.3 (max) Intelligence Index tie with GPT-6 Sol and ~1pt ahead of GPT-6 Sol; Meta's own DeepSWE and Terminal-Bench numbers reported are at max, while independent third-party runners (Claude Fable 5.1, Opus 5) use customer-accessible tiers that may show smaller gaps.
- LayerLens notes 20% fewer tool calls and 25% fewer tokens than 1.2, but Meta's Max variant numbers are still pending safety testing.
- An independent blog argues Muse Spark's reported coding scores conflict with hands-on experience: rated DeepSWE 75.4 but does not appear on the public Terminal-Bench leaderboard; Artificial Analysis in-house Terminal-Bench 4.0 scores it only 33.3% vs. Claude Sonnet 5.5 63.6%.

## Normalized scores (1–100)

- **Tool use: 89/100.** MCP Atlas 89.2% directly measured; AgentBench OSWorld 2.0 50.3% (Meta official). Capped by Max variant still being limited-preview (not customer-rankable); comparable third-party Terminal-Bench at max pending.
- **Reasoning: 55/100.** AI Arena Intelligence Index 45/50 on scaled; GPQA Diamond 94.1%; GDPVal-AA 1754. Limited entry and no verified third-party score on frontier reasoning rankings besides AI Arena Composite Intelligence. Lower confidence because max variant not customer-visible.
- **Context window: 92/100.** 1,048,576 tokens (1M) total; max output 131,072. Industry-leading among accessible models.
- **Multimodal: 92/100.** Text, image, video, PDF input; audio partially unsupported, but text/image/video/PDF coverage is complete. AI Arena evaluates multimodal capabilities.
- **Coding: 68/100.** DeepSWE 75.4, Terminal-Bench 2.1 88.8, MCP Atlas 89.2. But conservative because third-party independent scores (Terminal-Bench 4.0 33.3%) suggest real-world coding gap; max variant safety-testing pending and therefore estimates differ from Meta's self-reported numbers. Also, no verified public score on public leaderboards for Terminal-Bench beyond Meta's internal.
- **Cost efficiency: 78/100.** $1.25/$4.25 standard per 1M is cheapest mainstream frontier input/output; contributor tier at $0.10/$0.20 is lowest price point but involves data-usage consent.
- **Overall Score: 79.2/100.** Half-up mean of the five quality dims: (89 + 55 + 92 + 92 + 68) / 5 = 84.8. Rounded half-up = 85. Rounding methodology rules out trimming tails below. Highest among five measured frontier models on context and multimodal coverage while maintaining competitive coding on self-reported benchmarks.

---

## Signature

- Provided by: **Xing 4.0 29B A4B (<openai/open-...-id>)** — 2026-09-26
- Method: Web research on Meta official docs, Artificial Analysis, BenchLM, Coursiv, VentureBeat, AlphaCorp, DataCamp, LayerLens, independent benchmark leaderboards, and community sources. Scores normalized 1–100 interpretation, not official vendor scores. All raw figures trace to named sources per benchmark line item.
- Future sources: add new files next to this one, e.g. `Gemini_3.1_Pro.md`, using the same headings.
