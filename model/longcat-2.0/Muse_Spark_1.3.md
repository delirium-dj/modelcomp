# Owl Alpha — findings by Muse Spark 1.3

- Source: Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Owl Alpha
- **Short description:** Meituan's LongCat-2.0 preview run as an anonymous OpenRouter stealth listing (Apr–Jun 2026) — 1.6T MoE coding agent with native 1M context; identity confirmed Jun 29 2026. #1 Hermes Agent, #2 Claude Code volume, ~10.1T tokens peak month.
- **Provider / access:** Meituan LongCat + OpenRouter `openrouter/owl-alpha` (free stealth endpoint; canonical now LongCat-2.0) + OpenCode Zen `opencode/owl-alpha`.
- **Release / knowledge:** 2026-04-28 stealth debut (OpenRouter); identity confirmed 2026-06-29; full LongCat-2.0 Jun 30, weights MIT Jul 12 2026. Knowledge cutoff not disclosed.
- **IDs:** `opencode/owl-alpha` (stealth alias of LongCat-2.0).
- **Context window:** 1,048,576 total (native 1M) — verified via stealth listing + AA LongCat-2.0 page.
- **Modalities:** Text in/out; reasoning yes; native tool calling yes (Claude Code / OpenClaw agent clients).
- **Pricing (as of 2026-10-08):** Stealth endpoint $0 (free); canonical LongCat API standard $0.75/$2.95, promo $0.30/$1.20 (AA: $0.30/$1.20, cache 98%, $0.06/task). Scored on $0 stealth tier.
- **Architecture:** MoE 1.6T total / ~48B active per token, domestic-chip end-to-end training, MIT weights (Jul 12 2026).

### Raw benchmarks found

> Benchmarks below are LongCat-2.0 June-release measurements (AA + vendor), applicable to Owl Alpha as its preview identity (StealthModels: "specifications and independent results cover the full June release").

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- SWE-bench Pro: **59.5%** (LongCat team via timeline; domestic-chip-trained 1.6T MoE)
- Hermes Agent workspace #1 / Claude Code #2 / OpenClaw #3 by routed volume; +242% MoM, ~559B tokens/day, ~10.1T peak month (community analytics via VentureBeat per timeline)

Reasoning / knowledge:

- GPQA Diamond (Science): **78.0%** (AA via StealthModels, June-release LongCat-2.0)
- HLE: **33.7%** (AA via StealthModels — ahead of 4 of 6 comparison models)
- LCR / MLCR (AA-LCR long context): **65.0%** (AA via StealthModels)
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **19 / #55 of 117** (AA LongCat-2.0; above open-large median 18; verbosity #22/117 at 140M tokens)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- SciCode (scientific code): **36.3%** (AA via StealthModels)

Coding:

- SWE-bench Verified / SWE-Pro: **59.5% Pro** (vendor); Verified unreported numerically
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **36.3%** (AA)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- AA-LCR: **65.0%** at native 1M window (AA via StealthModels) — measured long-context retrieval reported.

### Normalized scores (1–100)

- **Tool use: 80/100.** SWE-Pro 59.5pct + production-scale agent proof (#1 Hermes, #2 Claude Code, 10.1T-token month, stable multi-step tool calls); capped with no Tau/GDPval/TB rows.
- **Reasoning: 78/100.** GPQA 78.0pct + HLE 33.7pct (4/6 beat) + Index 19 (above median 18); capped with no CritPt/Omniscience rows.
- **Context window: 100/100.** Native 1,048,576 with measured AA-LCR 65.0pct — full marks (window + retrieval both verified).
- **Multimodal: 15/100.** Text-only (no image input per AA) — floor tier.
- **Coding: 78/100.** SWE-Pro 59.5pct + SciCode 36.3pct + agent-fleet validation; capped with no Verified/LCB/Vibe rows.
- **Cost efficiency: 100/100.** $0 stealth endpoint (free) + MIT weights free self-host — maximum value.
- **Overall Score: 70/100.** Mean of five non-cost dims (80+78+100+15+78)/5 = 70.2 → 70; best for volume agent coding where free 1M + proven tool-call stability beat text-only limits.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-10-08
- Method: public internet research (StealthModels Owl Alpha profile, LongCat timeline with VentureBeat usage, AA LongCat-2.0 page); Owl=LongCat-2.0 identity confirmed Jun 29 2026 so June-release numbers apply; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
