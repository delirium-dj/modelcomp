# Claude Mythos 5.2 — findings by Nemotron 3 Ultra 550B A55B

- Source: Anthropic (`anthropic/claude-mythos-5.2`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.2
- **Short description:** Anthropic's most capable model for cybersecurity and life sciences research, sharing the frontier Fable 5.2 architecture with lifted dual-use safeguards for vetted defensive cyber and biosecurity research. Access restricted to organizations verified through Anthropic's Cyber Verification Program (CVP) and Life Sciences Verification Program.
- **Provider / access:** Anthropic API (`anthropic/claude-mythos-5.2`), available only to vetted CVP/Glasswing customers; also powers Claude Security. No free tier or general API access.
- **Release / knowledge:** 2026-11-09 release; knowledge cutoff not publicly specified.
- **IDs:** `anthropic/claude-mythos-5.2` (no free ID on OpenCode Zen or OpenRouter)
- **Context window:** 1,000,000 total / 128,000 max output (per Anthropic model card and meta.json)
- **Modalities:** Text, image in; text out; reasoning (high-effort mode); tool calls; JSON mode
- **Pricing (as of 2026-11-11):** Standard: $8 / $40 per 1M (input / output); Fast mode: $16 / $80 per 1M. No free tier; vetted CVP/Glasswing access only. Data retention: 30-day default for safety monitoring (ZDR available with Enterprise Frontier Safeguards).
- **Architecture:** Proprietary (same weights as Claude Fable 5.2); parameter count not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench-Science 0.1: **74.6%** (Fable 5.2) / **75.3%** (Mythos 5.2) (Anthropic Mythos 5.2 page, high effort)
- OSWorld 2.1 (offline set, partial): **89.3%** (Anthropic Mythos 5.2 page)
- WANDR (relaxed score, agentic search): **82.1%** (Anthropic Mythos 5.2 page)
- FrontierCode 2.0 (agentic coding): **49.1%** (Fable 5.2, high effort) (Anthropic Mythos 5.2 page)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- Humanity's Last Exam (with tools): **74.2%** (Anthropic Mythos 5.2 page, Fable 5.2)
- AA-Briefcase v1.1 (knowledge work): **66.1% rubric / 1785 Elo** (Anthropic Mythos 5.2 page, Fable 5.2)
- Chartography (visual chart recognition, no tools): **73.4%** (Anthropic Mythos 5.2 page, Fable 5.2)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- FrontierCode 2.0: **49.1%** (Fable 5.2, high effort) (Anthropic Mythos 5.2 page)
- FrontierSWE v2: **69.9%** (Fable 5.2) (Anthropic Mythos 5.2 page)
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- 1,000,000 token context window claimed; no MRCR / RULER / GraphWalks public scores found for this exact model.

Multimodal:

- Chartography (visual chart recognition): **73.4%** (Fable 5.2, no tools) (Anthropic Mythos 5.2 page)
- Image input supported; no video/audio/PDF input benchmarks found.

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 82/100.** Strong agentic tool use shown by OSWorld 2.1 (89.3%), WANDR (82.1%), and Terminal-Bench-Science (75.3% Mythos); capped by lack of Tau/GDPval/Claw verification and moderate FrontierCode 2.0 (49.1%).
- **Reasoning: 72/100.** Humanity's Last Exam 74.2% and AA-Briefcase 66.1%/1785 Elo demonstrate high multidisciplinary reasoning; capped by missing GPQA/HLE/LCR/CritPt/AA Index scores.
- **Context window: 90/100.** 1M token context window (top tier); capped by absence of public MRCR/RULER/GraphWalks retrieval measurements at length.
- **Multimodal: 73/100.** Image input + text output with Chartography 73.4% visual recognition; capped by no video/audio/PDF benchmarks and single multimodal task reported.
- **Coding: 70/100.** FrontierSWE v2 69.9% and FrontierCode 2.0 49.1% (high effort) show strong agentic coding; capped by missing SWE-bench Verified, LiveCodeBench, SciCode verification.
- **Cost efficiency: 35/100.** $8/$40 per 1M (standard) and $16/$80 (fast) — paid only, no free tier, restricted access limits broad value.
- **Overall Score: 77/100.** Mean of (82 + 72 + 90 + 73 + 70) / 5 = 77.4 → 77. Best fit: elite cyber/biosecurity specialist with restricted access; general-purpose utility limited by gated availability and missing public benchmarks on several core suites.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-11
- Method: Public internet research of official Anthropic announcements, model cards, and system card summaries; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic: Introducing Claude Mythos 5.2](https://www.anthropic.com/claude/mythos)
  - [Anthropic: Claude Fable 5.2 and Mythos 5.2 benchmarks table](https://www.anthropic.com/claude/mythos#benchmarks)
  - [Anthropic: Cyber Verification Program](https://www.anthropic.com/news/cyber-verification-program)
  - [Anthropic: Life Sciences Verification Program](https://www.anthropic.com/news/life-sciences-verification-program)
  - [Anthropic: Enterprise Frontier Safeguards](https://www.anthropic.com/news/enterprise-frontier-safeguards)

---