# Claude Sonnet 4.6 — findings by Muse Spark 1.3 Contributor

- Source: Anthropic/Claude Sonnet 4.6, e.g. Meta (`muse-spark-1.3-contributor-free`)
- Date: 2026-10-12 (UTC) — second-pass refresh (prior Signature 2026-09-18, amended 2026-09-27: Vals/BenchLM absolutes added, 73 → 81; new: VectorWire 152-result record — Tau2 lanes, $3/$15 pricing, capability profile, evidence freshness)
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
- **Pricing (as of 2026-10-12):** Paid $3 in / $15 out per 1M (Anthropic price page; 4 providers tracked, all identical; costs more than 88% of 326 priced models — VectorWire Oct 2026)
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Compared against prior findings (2026-09-18/27, Overall 81): new verified evidence below — VectorWire model record (152 results on 88 benchmarks from 20 sources, 24 independently verified, latest Oct 12 2026; Tau2 Retail/Telecom abs lanes; $3/$15 pricing confirmed across 4 providers; capability profile: strong long context, capable coding, behind leaders elsewhere). Gaps closed: Tau2-Bench absolutes, pricing precision.

Agent / tool use:

- OSWorld-Verified: **78.5%** (Anthropic Sonnet 5 announcement, updated Sonnet 4.6 baseline with revised harness); **72.1%** BenchLM lane (harness differs — both cited)
- Terminal-Bench 2.0: **59.1%** (BenchLM mirror); **59.55% Vals lane (#1)** (Vals suite)
- Claw-Eval: **67.8%** (BenchLM mirror)
- BrowseComp (agentic search): **baseline below Sonnet 5 curve** (Anthropic cost-performance charts; exact % not stated in announcement text)
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **91.70% Tau2 Retail** (vendor, llm-stats); **Tau2 Telecom 78.95% no-reasoning-low / 79.53% no-reasoning-high / 75.73% max** (AA aggregator runs via VectorWire — NEW, closes prior gap)
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (closest proxy as provisional: MM Claw near-parity claim on MiniMax page, unverified absolute)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (BenchLM mirror)
- Finance Agent: **63.3% (#1)** (Vals suite); **TaxEval v2 77.1% (#1)** (Vals suite)
- FrontierMath Tiers 1–3: **32.4%** (BenchLM mirror)
- Vending-Bench Arena: **beats Sonnet 4.5** (Anthropic announcement, capacity-then-profitability play)
- HLE: **34.6% no-tools / 46.8% with-tools** (Anthropic Sonnet 5 announcement, updated grader baseline)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Vals SWE #3 lane; LMC coding leaderboard #2 (81) standing)
- OfficeQA: **matches Opus 4.6** (Anthropic announcement — enterprise document/charts/PDF reasoning)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.0 59.1% (#1 Vals lane) plus OSWorld ~73–78%, Claw-Eval 67.8% and Tau2 Retail 91.7% / Telecom ~76–80% show strong Sonnet agency; capped by no Tau3/GDPval numbers.
- **Reasoning: 86/100.** GPQA 89.9% plus HLE 46.8% with-tools, Finance 63.3% (#1) and TaxEval 77.1% (#1) show strong reasoning; capped by no LCR/CritPt/Index numbers (unchanged — VectorWire adds breadth, not flagship absolutes).
- **Context window: 95/100.** 1M (beta) verified (corrects filed 200K); capped below 97+ with no retrieval-saturation proof.
- **Multimodal: 60/100.** Text+image in, text out; mid coverage.
- **Coding: 80/100.** LMC coding #2 (81) plus Vals SWE #3, Vending-Bench Arena win and OfficeQA-at-Opus show strong Sonnet coding; capped by zero SWE/LiveCodeBench absolutes.
- **Cost efficiency: 58/100.** Paid $3/$15 (confirmed across 4 providers; pricier than 88% of tracked models) — Sonnet value below Opus, but no discount lane (revised down from 60: VectorWire pricing evidence is new and shows premium placement).
- **Overall Score: 81/100.** Mean of the five non-cost dims (85+86+95+60+80)/5 = 81.2; best-fit efficient premium coding when Sonnet 5/Opus unavailable.

---

## Signature

- Provided by: **Muse Spark 1.3 Contributor (meta/muse-spark-1.3)** — 2026-10-12
- Method: second-pass refresh of the 2026-09-18 report (amended 2026-09-27): fresh public internet research (VectorWire Sonnet 4.6 record — 152 results/88 benchmarks, Tau2 abs lanes, $3/$15 pricing, capability profile); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
