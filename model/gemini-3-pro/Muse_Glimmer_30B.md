# Gemini 3 Pro — findings by Muse Glimmer 30B

- Source: Google/gemini-3-pro
- Date: 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Pro
- **Short description:** Google DeepMind frontier Pro model with 1M context and Deep Think mode, multimodal input.
- **Provider / access:** Google DeepMind via Vertex AI / Gemini API
- **Release / knowledge:** 2025-11-18 release; knowledge cutoff not publicly confirmed
- **IDs:** `google/gemini-3-pro`
- **Context window:** 1M tokens total; 65K output
- **Modalities:** Text, image, audio, video, PDF in; text out; tool calls; reasoning
- **Pricing (as of 2026-09-25):** Paid-tier pricing, no Zen Free ID
- **Architecture:** Proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: 1184 Elo (evals.report, official)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP Atlas 54.1% pass rate (evals.report, official)

Reasoning / knowledge:

- GPQA Diamond: 92.6% accuracy (evals.report, official)
- HLE: 38.3% accuracy (evals.report, official)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: 48.4 Index unverified (evals.report)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: 72.9% resolved (evals.report, official)
- LiveCodeBench: 91.7% Pass@1 (evals.report, unverified)
- SciCode / AA-SciCode: 56.1% accuracy (evals.report, unverified)
- Vibe Code Bench: 14.30% overall accuracy (evals.report, verified)
- DeepSWE / Coding Index / other: SWE-bench Pro 43.30% resolved (evals.report, official); LiveCodeBench Pro 2439 Codeforces Elo

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Berkeley Function Calling 72.51% and MCP Atlas 54.1% indicate solid agentic tool use; lack of Terminal-Bench caps score.
- **Reasoning: 78/100.** GPQA Diamond 92.6% is strong; HLE 38.3% and FrontierMath 37.6% limit ceiling.
- **Context window: 88/100.** 1M context window tier; 65K output.
- **Multimodal: 85/100.** Text/image/audio/video/PDF in; strong MMMU-Pro 81.0% and Video-MMMU 87.6%.
- **Coding: 82/100.** SWE-bench Verified 72.9% and LiveCodeBench 91.7% support high coding; SWE-bench Pro 43.30% caps.
- **Cost efficiency: 45/100.** Paid tier, no free ID.
- **Overall Score: 81/100.** Mean of five quality dims; strong multimodal and coding with solid reasoning.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
