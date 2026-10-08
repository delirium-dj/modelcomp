# Claude Sonnet 5.5 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Anthropic's second Claude 5.5-family model (announced September 28, 2026) — a hybrid-reasoning Sonnet that runs 30%+ faster than Sonnet 5 and costs up to 30% less per task, built for well-scoped everyday coding, agents, and polished documents/slides. The faster, lower-cost complement to Opus 5.5; Haiku 5.5 joins the family in coming weeks.
- **Provider / access:** Claude Platform `claude-sonnet-5-5` (Messages API); also on Amazon Bedrock (`anthropic.claude-sonnet-5-5`), Google Cloud, Microsoft Foundry, and Azure. Verified via Anthropic Models overview docs. No Free ID on OpenCode Zen was verified during research.
- **Release / knowledge:** Released 2026-09-28 (Anthropic announcement); reliable knowledge and training data cutoff June 2026 (verified via Models overview docs).
- **IDs:** `claude-sonnet-5-5` (pinned dateless snapshot); Bedrock `anthropic.claude-sonnet-5-5`; Vertex/Foundry `claude-sonnet-5-5`.
- **Context window:** 1M total tokens with 128K max output (verified via Anthropic Models overview docs; up to 300K output on the Batch API with the `output-300k-2026-03-24` beta header).
- **Modalities:** Text and image input; text output; reasoning yes (adaptive thinking, effort levels Low–Max; apps default Medium, Platform default High; thinking-off uses the new `between_tools` setting); tool calls yes; vision yes; structured outputs supported (a pre-release structured-output bug seen by AA was fixed before launch).
- **Pricing (as of 2026-10-08):** $2 in / $10 out / $0.10 cache reads (cut from $0.20 on 2026-10-07 alongside the Haiku 5.5 launch — DataCamp, Anthropic announcement) / $2.50 cache writes per 1M tokens (same base price as Sonnet 5); batch API 50% off; up to 90% savings with prompt caching; US-only inference at 1.1x. Paid only; zero data retention.
- **Architecture:** Proprietary; hybrid-reasoning model; parameter count undisclosed.

### Raw benchmarks found

> Verified via the official Anthropic Sonnet 5.5 announcement page (with effort-level breakdowns) and the Anthropic Models overview docs; comparison baselines are Anthropic-reported.

Agent / tool use:

- GDPval-AA v2.1: **1844 Elo** (Anthropic, pre-release AA run; vs Sonnet 5 1449, Opus 5.5 1846, GPT-6 Sol 1487)
- AA-Briefcase v1.1: **1811 Elo** (Anthropic; vs Sonnet 5 1359, Opus 5.5 1822, GPT-6 Sol 1483)
- Terminal-Bench 4.0: **70.6%** (Anthropic; vs Sonnet 5 10.3%, Opus 5.5 66.4% at Xhigh)
- CursorBench 4.0: **55.5%** (Anthropic; vs Sonnet 5 34.1%, Opus 5.5 57.8% — second only to Opus 5.5 per SpaceXAI)
- FrontierCode 1.1 (Main): **46.2% at Max effort / 52.1% at Xhigh** (Anthropic; vs Sonnet 5 42.4%, Opus 5.5 54.4%, GPT-5.6 Sol 49.3%)
- OSWorld 2.1: **80.1% partial** (Anthropic; vs Sonnet 5 57.0%, Opus 5.5 81.8%)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- HLE (Humanity's Last Exam): **64.5% with tools** (Anthropic; vs Sonnet 5 54.9%, Opus 5.5 67.7%)
- GPQA Diamond: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- Terminal-Bench 4.0: **70.6%** (see above — primary agentic coding evidence)
- FrontierCode 1.1 (Main): **46.2%** (see above)
- CursorBench 4.0: **55.5%** (see above)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**

Long context:

- No long-context retrieval reported (1M window advertised; no MRCR/RULER/GraphWalks value found for this model)

Visual (supplementary): Chartography **61.6%** no tools (Anthropic/Surge AI; vs Sonnet 5 15.6%, Opus 5.5 64.4%); first Sonnet to beat Pokémon Red working only from screenshots.

### Normalized scores (1–100)

- **Tool use: 91/100.** GDPval-AA 1844 Elo is two points below Opus 5.5 and well past the ~1750+ frontier reference, with AA-Briefcase 1811, OSWorld 80.1%, and the fewest failed tool calls in Base44's 118 app builds; capped just under Opus 5.5 by CursorBench (55.5% vs 57.8%) and the missing Tau3/Claw evidence.
- **Reasoning: 90/100.** HLE 64.5% with tools clears the 40%+ frontier reference and sits second only to Opus 5.5's 67.7%; no verified GPQA Diamond or AA Intelligence Index for this model caps it at the band floor.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100), capped at the band floor because no ≥98%-retrieval measurement at 512K+ was published (128K max output noted as caveat).
- **Multimodal: 85/100.** Image input with Chartography 61.6% (no tools) and screenshot-only Pokémon Red play are strong vision results, but text-only output and no audio/PDF-in evidence keep it below omni-input models.
- **Coding: 88/100.** Terminal-Bench 4.0 70.6% beats Opus 5.5's 66.4%, CursorBench 55.5% is within two points of Opus, and FrontierCode 46.2% trails Opus's 54.4%; no verified SWE-bench Verified/LiveCodeBench keeps it under the 90+ band.
- **Cost efficiency: 76/100.** $2/$10 per 1M with cache reads halved to $0.10 on 2026-10-07 and up to 30% lower cost per task than Sonnet 5 (Balyasny: best quality-to-cost tradeoff of seven models tested) is strong mid-tier pricing for near-Opus quality, but well above budget Flash/Lite tiers and there is no free tier.
- **Overall Score: 89.8/100.** Mean of the five non-cost dims (91 + 90 + 95 + 85 + 88) / 5 = 89.8 — best fit as the default high-volume workhorse that nearly matches Opus 5.5 at half the price; switch to Opus 5.5 or Fable 5.1 for complex, open-ended judgment work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-08
- Method: public internet research (official Anthropic Sonnet 5.5 announcement page, Anthropic Models overview docs verified 2026-09-28); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
