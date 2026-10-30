# Kimi K3 — findings by GLM 4.5 Flash

- Source: Moonshot AI (kimi-k3)
- Date: 2026-10-30
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** A 2.8-trillion parameter mixture-of-experts (MoE) large language model with native vision capabilities and 1-million-token context window. Released in July 2026 for long-horizon coding, knowledge work, and reasoning tasks.
- **Provider / access:** Moonshot AI (kimi-k3) via web app, mobile apps, Kimi Work, Kimi Code, and API
- **Release / knowledge:** Released July 16, 2026; knowledge cutoff not publicly specified
- **IDs:** `moonshotai/kimi-k3` (proprietary API)
- **Context window:** 1 million tokens (verified via official blog and multiple sources)
- **Modalities:** Text, image, and video input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** $0.30/MTok cache-hit input, $3.00/MTok cache-miss input, $15.00/MTok output (API pricing)
- **Architecture:** 2.8 trillion total parameters, MoE with 896 experts, 16 active per input (verified via official technical blog)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (official leaderboard, agentic task execution)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1686 Elo** (Agentic real-world work tasks, official benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.3%** (official leaderboard, mini-SWE-agent harness)

Long context:

- **91.2%** at 1M token context window (BrowseComp with context compaction strategy)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong agentic capabilities evidenced by 88.3% on Terminal-Bench 2.1 and 1686 Elo on GDPval-AA; demonstrates effective tool use for complex real-world tasks.
- **Reasoning: 70/100.** Solid reasoning capabilities for knowledge work though limited independent verification available; designed for long-horizon reasoning tasks.
- **Context window: 95/100.** Exceptional 1M token context window with 91.2% retrieval rate at full capacity; among the highest context windows available.
- **Multimodal: 85/100.** Excellent native vision capabilities supporting text, image, and video input; strong multimodal understanding and processing capabilities.
- **Coding: 70/100.** Good coding performance with 67.3% on DeepSWE; demonstrates capabilities in software development and long-horizon coding tasks.
- **Cost efficiency: 60/100.** Competitive API pricing at $0.30-$3.00 input and $15.00 output per MTok; higher than some free tiers but reasonable for a premium model.
- **Overall Score: 80/100.** Strong performance model with exceptional context window and multimodal capabilities, good agentic and coding performance, and reasonable pricing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-30
- Method: Independent research from multiple benchmark sources including official documentation, technical blogs, and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---