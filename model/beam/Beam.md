# Beam — findings by Beam

- Source: Reflection AI/Beam, `beam`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Beam
- **Short description:** Reflection AI's open-weight MoE (Oct 5, 2026): 501B total / 23B active, 1M context. Text-only. Self-reported: SWE-bench Verified 80.9%, Terminal-Bench 2.1 80.1%, AIME 2026 97.8%. Open weights (Apache 2.0, weights pending release). $0.10/$0.40 per 1M (via OpenCode). #10 on OpenCode by tokens.
- **Provider / access:** Reflection AI API; OpenCode Zen `beam`; OpenRouter.
- **Release / knowledge:** Released 2026-10-05; knowledge cutoff not stated.
- **IDs:** `beam` (Reflection)
- **Context window:** 1,000,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0, pending release).
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.40 / 1M output; paid.
- **Architecture:** MoE, 501B total / 23B active, 1M context, Apache 2.0 (weights pending). Pretrained on 23.8T tokens.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported
- Terminal-Bench 2.1: **80.1%** (self-reported, Reflection AI)
- OSWorld: not reported
- Tool calling: supported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not individually reported
- AIME 2026: **97.8%** (self-reported, Reflection AI)
- GPQA Diamond: not reported
- HLE: not reported
- MMLU-Pro: not reported
- AA Intelligence Index: not reported
- OpenCode coding score: **42.36/80** (#43 on LLM Coding Leaderboard)

Coding:

- Coding public-lane (BenchLM): not individually reported
- SWE-bench Verified: **80.9%** (self-reported, Reflection AI)
- Terminal-Bench 2.1: **80.1%** (self-reported, Reflection AI)
- LiveCodeBench: not reported
- SWE-bench Pro: not reported
- OpenCode coding score: **42.36/80** (#43)

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 80.1% (self-reported); caps at no published OSWorld/τ²-bench.
- **Reasoning: 68/100.** AIME 97.8% (self-reported); caps at no published GPQA/HLE/MMLU-Pro/AA Intelligence.
- **Context window: 80/100.** 1M window; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 70/100.** SWE-bench 80.9%, Terminal-Bench 2.1 80.1%, OpenCode coding 42.36/80; caps at no published LiveCodeBench/SWE-bench Pro.
- **Cost efficiency: 96/100.** Cheap $0.10/$0.40 per 1M.
- **Overall Score: 65.2/100.** Mean of five quality dims (self-reported benchmarks, not independently verified); best-fit for open-weight agentic coding at low cost. Low-confidence (self-reported only, weights pending release).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Reflection AI official blog, TechCrunch, OpenCode data, AI Coding Daily); scores are normalized 1–100 interpretations, not official vendor scores. All benchmarks are self-reported by Reflection AI and not independently verified. Weights pending release (Apache 2.0, expected Oct 2026).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Beam is Reflection AI's first open-weight model (501B total / 23B active). Superseded by nothing yet (first release). Reflection is a US-based startup (Brooklyn, NY). Trained on 23.8T tokens.<|end|>>2>