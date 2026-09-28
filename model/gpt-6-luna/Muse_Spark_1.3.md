# GPT-6 Luna — findings by Muse Spark 1.3

- Source: OpenAI/GPT-6 Luna (`openai/gpt-6-luna`)
- Date: 2026-09-26 (UTC), amended 2026-09-27 (UTC, user-signed-off exception: AutomationBench/OSWorld/factuality rows added; scores hold 78)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's low-cost Luna volume tier of the GPT-6 family: near-frontier DeepSWE v1.1 (66.6%) at $0.10/$0.50 with 1.05M context and Computer Use support. Top use case: high-frequency batch coding/agent processing at minimum token cost.
- **Provider / access:** OpenAI API (`gpt-6-luna`); OpenCode Zen ID `openai/gpt-6-luna`.
- **Release / knowledge:** 2026-09-22/23 launch window (VentureBeat 2026-09-22; B.AI availability via Gate News 2026-09-23); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-6-luna` (no Free ID exists on Zen — paid only).
- **Context window:** 1.05M total / 128K max output (Gate News launch report — verified). No public retrieval-at-length numbers found.
- **Modalities:** Native image understanding in; text out; reasoning yes (six adjustable reasoning levels); Computer Use yes (Gate News).
- **Pricing (as of 2026-09-22):** $0.10 input / $0.50 output per 1M — permanent pricing, not promotional (OpenAI spokesperson via VentureBeat); 50% cheaper in / 58.3% cheaper out than GPT-5.6 Luna ($0.20/$1.20).
- **Architecture:** Proprietary (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- AutomationBench (high effort): **+5.4pp over predecessor at 58% lower cost per task** (OpenAI launch post)
- OSWorld 2.0 offline: **exceeds GPT-5.6 Sol (medium) at one-tenth the cost** (OpenAI launch post)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found** (closest proxy, provisional: flagship sibling GPT-6 Astra leads GPQA at 96.0% per llm-stats leaderboard)
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- Factuality (internal eval): **~half the mistakes of predecessor**; high effort matches GPT-5.6 Sol at ~1/100th the cost (OpenAI launch post)

Coding:

- DeepSWE v1.1: **66.6%** (Gate News B.AI launch report, 2026-09-23; sibling GPT-6 Sol 68.8% on the same report)
- SWE-bench Verified / SWE-Pro: **no verified public score found** for the Luna cut (closest proxy, provisional: GPT-5.6 Luna SWE-Pro 0.627 and Vals difficulty splits 96/92/86/67 — prior generation, not this cut)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- Coding Index / other: **no verified public score found**

Long context:

- no long-context retrieval reported (1.05M window verified via launch report; no public MRCR/RULER/GraphWalks number)

### Normalized scores (1–100)

- **Tool use: 70/100.** Computer Use support, AutomationBench gains and OSWorld-at-a-tenth-cost verify agent-oriented design, but zero public TB/Tau/GDPval/Claw harness numbers cap it at 70.
- **Reasoning: 78/100.** Provisional on GPT-6 family strength (Astra GPQA 96.0%) and Luna's adjustable-reasoning stack; capped hard with no Luna-specific GPQA/HLE/Index number.
- **Context window: 97/100.** Verified 1.05M total / 128K out clears the ≥1M tier; held below 100 for lack of any published full-length retrieval measurement.
- **Multimodal: 65/100.** Native image understanding in, text-only out — mid-band of the 60–70 image-in tier.
- **Coding: 82/100.** DeepSWE v1.1 66.6% at $0.10 input is a verified near-frontier value signal (within ~2 pts of Sol's 68.8%); capped by missing SWE-bench Verified/Pro and LiveCodeBench numbers for this exact cut.
- **Cost efficiency: 96/100.** $0.10/$0.50 paid pricing lands at the top value tier (input at the $0.10 reference; output leg slightly above the $0.20 anchor).
- **Overall Score: 78/100.** Mean of the five non-cost dims (70 + 78 + 97 + 65 + 82) / 5 = 78.4 → 78; best fit as the cheapest credible batch-coding tier in the GPT-6 family.

---

## Signature

- Provided by: **Muse Spark 1.3 (Meta/muse-spark-1.3-contributor-free)** — 2026-09-26
- Method: public internet research (VentureBeat launch/pricing coverage, Gate News B.AI launch report, llm-stats SWE-Pro + DeepSWE leaderboards, Vals AI SWE-bench page for prior-gen proxy); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
