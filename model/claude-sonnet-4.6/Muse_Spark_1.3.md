# Claude Sonnet 4.6 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Sonnet 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic high-performance)
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks; predecessor baseline that Sonnet 5 narrows toward Opus.
- **Provider / access:** Anthropic via API `claude-sonnet-4-6` + Claude Code; no Zen Free ID (Messages API, tool calling + MCP).
- **Release / knowledge:** 2026-H1 lineage (pre-Sonnet 5 2026-06-30); knowledge cutoff undisclosed
- **IDs:** `anthropic/claude-sonnet-4.6` (state explicitly: no Free ID exists on Zen)
- **Context window:** 200K — verified via curated repo metadata + Anthropic Sonnet 5 announcement (Sonnet 4.6 baseline references)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid-tier pricing (standard Sonnet $3/$15 class at announcement-chart time)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.5%** (Anthropic Sonnet 5 announcement, updated Sonnet 4.6 baseline with revised harness)
- BrowseComp (agentic search): **baseline below Sonnet 5 curve** (Anthropic cost-performance charts; exact % not stated in announcement text)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (closest proxy as provisional: MM Claw near-parity claim on MiniMax page, unverified absolute)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **34.6% no-tools / 46.8% with-tools** (Anthropic Sonnet 5 announcement, updated grader baseline)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 80/100.** OSWorld-Verified 78.5% is strong computer-use evidence; capped by missing TB/Tau/GDPval harness numbers and Sonnet 5 strictly improving on it.
- **Reasoning: 78/100.** HLE 46.8% with-tools is solid; capped by 34.6% no-tools and missing GPQA/CritPt.
- **Context window: 70/100.** 200K standard maps to 70 tier; capped below 1M models.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage.
- **Coding: 78/100.** Strong Sonnet-class coding reputation with OSWorld carryover; capped by zero public SWE/LiveCodeBench numbers.
- **Cost efficiency: 60/100.** Paid Sonnet-class pricing, cheaper than Opus; mid paid value.
- **Overall Score: 73/100.** Mean of the five non-cost dims (80+78+70+60+78)/5 = 73.2; best-fit efficient premium coding when Sonnet 5/Opus unavailable.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Sonnet 5 announcement baselines, MiniMax MM Claw context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
