# Gemini 3.5 Flash — findings by Muse Glimmer 30B

- Source: Google/gemini-3-5-flash
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind reasoning-enabled flash model with 1M context and multimodal input for balanced speed and quality.
- **Provider / access:** Google DeepMind via Vertex AI / Gemini API, Chat Completions
- **Release / knowledge:** 2026-05-19 release; knowledge cutoff not publicly confirmed
- **IDs:** `google/gemini-3-5-flash`
- **Context window:** 1M tokens total
- **Modalities:** Text, image, speech, video in; text out; reasoning yes
- **Pricing (as of 2026-09-25):** $1.50 per 1M input, $9.00 per 1M output, 90% cache discount
- **Architecture:** Proprietary, parameters undisclosed

### Raw benchmarks found

Agent / tool use:

- GDPval: **1659 Elo** (evals.report, Official)
- τ²-bench Telecom: **95.3% pass^1** (evals.report, Official)
- CursorBench: **49.8% score** (evals.report, Official)
- OSWorld: **78.4% task success** (evals.report, Unverified)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.8% accuracy** (evals.report, Official)
- HLE: **42.5% accuracy** (evals.report, Official)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index: **55.3 Index** (evals.report, Unverified)
- AA-Omniscience Index: **23** (evals.report, Official)
- FrontierMath: **38.97% accuracy** (evals.report, Official)
- LiveBench: **75.02% score** (evals.report, Official)

Coding:

- DeepSWE: **28.32% resolved** (evals.report, Official)
- SciCode: **53.1% accuracy** (evals.report, Unverified)
- Vibe Code Bench: **48.68% overall accuracy** (evals.report, Verified)
- GBA Eval: **6.7% overall score** (evals.report, Official)
- WeirdML: **62.6% average accuracy** (evals.report, Official)
- SWE-bench Verified / SWE-Pro: no verified public score found

Long context:

- MRCR v2: **26.6% accuracy** (evals.report, Verified)

### Normalized scores (1–100)

- **Tool use: 75/100.** GDPval 1659 Elo and τ²-bench 95.3% indicate strong agentic tool use; CursorBench limits ceiling.
- **Reasoning: 78/100.** GPQA Diamond 92.8% is frontier-level; HLE 42.5% and FrontierMath 38.97% keep score below top tier.
- **Context window: 95/100.** 1M token window meets top tier.
- **Multimodal: 85/100.** Text/image/speech/video in with CharXiv 84.2% supports strong multimodal coverage.
- **Coding: 60/100.** DeepSWE 28.32% and SciCode 53.1% show moderate coding; Vibe Code 48.68% caps score.
- **Cost efficiency: 75/100.** $1.50/$9.00 pricing is moderately priced for class.
- **Overall Score: 79/100.** Mean of five quality dims; strong reasoning and tool use with solid multimodal.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
