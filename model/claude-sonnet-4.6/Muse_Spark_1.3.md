# Claude Sonnet 4.6 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Sonnet 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-09-18 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: Vals/BenchLM absolutes added, 200K claim corrected to 1M, scores recomputed 73 → 81); re-verified 2026-09-29 (UTC, user-signed-off re-research: SWE-V 79.6 + GDPval 1633 + Tau2 91.7/97.9 + MCP 61.3 + ARC-AGI-2 added, Tool 84 → 86 — Overall holds 81)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6 (Anthropic high-performance)
- **Short description:** Anthropic's high-performance, reasoning-capable model optimized for efficiency and complex coding tasks; predecessor baseline that Sonnet 5 narrows toward Opus.
- **Provider / access:** Anthropic via API `claude-sonnet-4-6` + Claude Code; no Zen Free ID (Messages API, tool calling + MCP).
- **Release / knowledge:** 2026-02-17 release (Anthropic announcement); knowledge cutoff undisclosed (amended 2026-09-27).
- **IDs:** `anthropic/claude-sonnet-4.6` (state explicitly: no Free ID exists on Zen)
- **Context window:** 1M (beta; Vals record) — verified via Anthropic announcement + Vals AI (corrects filed 200K claim; amended 2026-09-27).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-09-18):** Paid $3 in / $15 out per 1M (same as Sonnet 4.5 — re-verified 2026-09-29)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.5%** (Anthropic Sonnet 5 announcement, updated Sonnet 4.6 baseline with revised harness); **72.5%** launch-harness (Anthropic launch; within 0.2 of Opus 4.6 72.7% — re-verified 2026-09-29); **72.1%** BenchLM lane (harness differs — all cited)
- Terminal-Bench 2.0: **59.1%** (BenchLM mirror); **59.55% Vals lane (#1)** (Vals suite)
- Claw-Eval: **67.8%** (BenchLM mirror)
- BrowseComp (agentic search): **baseline below Sonnet 5 curve** (Anthropic cost-performance charts; exact % not stated in announcement text)
- Terminal-Bench 2.1: **no verified public score found**
- Tau2-Bench Retail: **91.7%** / Telecom: **97.9%** (Anthropic launch; vs 4.5 88.0%/94.2% — re-verified 2026-09-29)
- Tau3-Banking: **no verified public score found**
- GDPval-AA (Office): **1633 Elo** (Anthropic launch; best-in-class office productivity, vs 4.5 1375 and Opus 4.6 1559 — re-verified 2026-09-29)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas (scaled tool use): **61.3%** (Anthropic launch; vs Opus 4.6 60.3 — re-verified 2026-09-29)
- Toolathon / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (BenchLM mirror); **74.1%** (Anthropic launch table — harness/methodology variance vs mirror noted, re-verified 2026-09-29)
- Finance Agent: **63.3% (#1)** (Vals suite); **TaxEval v2 77.1% (#1)** (Vals suite)
- FrontierMath Tiers 1–3: **32.4%** (BenchLM mirror)
- Vending-Bench Arena: **beats Sonnet 4.5** (Anthropic announcement, capacity-then-profitability play)
- ARC-AGI-2: **58.3–60.4%** (launch coverage; vs 4.5 13.6% — reporter variance noted, re-verified 2026-09-29)
- HLE: **34.6% no-tools / 46.8% with-tools** (Anthropic Sonnet 5 announcement, updated grader baseline)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified: **79.6%** (Anthropic launch; 80.2% with prompt modification over 10 trials; vs 4.5 77.2%, Opus 4.6 80.8% — re-verified 2026-09-29); Vals SWE #3 lane and LMC coding #2 (81) retained as secondary standing
- OfficeQA: **matches Opus 4.6** (Anthropic announcement — enterprise document/charts/PDF reasoning)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.0 59.1% plus Tau2 91.7%/97.9%, GDPval-Office 1633 (best-in-class), OSWorld 72.5–78.5%, MCP-Atlas 61.3% and Claw-Eval 67.8% show strong Sonnet agency; capped by no Tau3 numbers.
- **Reasoning: 86/100.** GPQA 89.9% mirror (74.1% launch-table variant noted) plus HLE 46.8% with-tools, ARC-AGI-2 ~59%, Finance 63.3% (#1) and TaxEval 77.1% (#1) show strong reasoning; capped by no LCR/CritPt/Index numbers.
- **Context window: 95/100.** 1M (beta) verified (corrects filed 200K); capped below 97+ with no retrieval-saturation proof.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage.
- **Coding: 80/100.** SWE-Verified 79.6% (80.2% prompt-mod) plus LMC coding #2 (81), Vals SWE #3, Vending-Bench Arena win and OfficeQA-at-Opus show strong Sonnet coding; capped by no SWE-Pro/LiveCodeBench absolutes.
- **Cost efficiency: 60/100.** Paid Sonnet-class pricing, cheaper than Opus; mid paid value.
- **Overall Score: 81/100.** Mean of the five non-cost dims (86+86+95+60+80)/5 = 81.4 → 81; best-fit efficient premium coding when Sonnet 5/Opus unavailable.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-09-18
- Method: public internet research (Anthropic Sonnet 5 announcement baselines, MiniMax MM Claw context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
