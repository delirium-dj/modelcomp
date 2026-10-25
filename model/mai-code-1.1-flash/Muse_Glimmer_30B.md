# MAI-Code-1.1-Flash — findings by Muse Glimmer 30B

- Source: Microsoft AI / MAI-Code-1.1-Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's lightweight agentic coding model built for GitHub Copilot workflows. Successor to MAI-Code-1-Flash with added vision input for screenshot/diagram-to-code and an on-device 3-bit quantized variant. Optimized for CLI/.NET tasks and token efficiency.
- **Provider / access:** GitHub Copilot (auto selection for Free/Student, manual for Pro/Pro+/Max/Business/Enterprise), Copilot CLI, VS Code, Visual Studio, JetBrains, Xcode, Eclipse, GitHub Mobile. Microsoft AI API route `microsoft/mai-code-1.1-flash`. Local download announced 2026-10-07 with >120GB RAM recommendation. Chat Completions API via Copilot billing.
- **Release / knowledge:** 2026-08-11 GA in Copilot; on-device local announcement 2026-10-07. Knowledge cutoff not publicly disclosed.
- **IDs:** `microsoft/mai-code-1.1-flash` (Copilot picker / Foundry), `MAI-Code-1.1-Flash` (model card). OpenCode route `opencode/mai-code-1.1-flash` tracked in repo meta; no Free ID on Zen.
- **Context window:** 256K tokens total, 128K max output reported by aggregators. Verified by BenchLM model page and Microsoft model card PDF.
- **Modalities:** Input text, image (screenshots/diagrams); Output text. Tool calls yes, reasoning yes, JSON mode supported. Vision added vs 1.0; no audio/video output.
- **Pricing (as of 2026-10-25):** $0.20 / 1M input, $1.20 / 1M output, $0.02 / 1M cached input via Copilot usage billing. Annual subscribers receive 0.25× premium request multiplier. Local on-device inference has zero per-token charge.
- **Architecture:** Proprietary sparse MoE ~138B total / ~5B active parameters. Trained from MAI-Thinking-1 compressed mid-training checkpoint, continuation in Copilot production harness.

### Raw benchmarks found

> All measured numbers below are Microsoft self-reported in the model card / launch materials and re-published by BenchLM. No independent third-party re-run was found in public sources. Conflicting context figures: some aggregators list 128K window from 1.0; model card and BenchLM confirm 256K.

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (Microsoft model card, BenchLM 2026-10-25)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no overall score assigned, unranked
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **72.6%** (Microsoft model card, BenchLM)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 62.9% shows solid agentic terminal coding in the Copilot harness; capped by absence of independent Tau/GDPval/Claw evaluations.
- **Reasoning: 60/100.** No public GPQA/HLE/LCR/CritPt numbers; model is coding-specialist with vision assist, so reasoning is inferred from coding agents only.
- **Context window: 78/100.** 256K window verified; falls in 200K–500K tier. No MRCR/RULER retrieval score limits the rating.
- **Multimodal: 65/100.** Text + image input, text output, screenshot/diagram-to-code support per GitHub changelog. 60–70 band for image-in text-out; Vision2Web Level3 11.5% reported internally is weak.
- **Coding: 78/100.** SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9% are strong for a 5B-active flash tier, all vendor-reported in the Copilot harness; lack of independent SWE-Pro/LiveCodeBench caps score.
- **Cost efficiency: 94/100.** $0.20/$1.20 per 1M with $0.02 cached and 0.25× annual multiplier, plus free local inference; ~73% cheaper than 1.0 per Microsoft.
- **Overall Score: 70/100.** Mean of five quality dims (68 + 60 + 78 + 65 + 78) / 5 = 69.8 → 70. Best fit: cheap Copilot-native coding/agent subtasks and local on-device coding where self-reported Microsoft scores are accepted.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; three independent web searches: Microsoft AI news article 2026-10-07 on on-device rollout, BenchLM model page for MAI-Code-1.1-Flash, GitHub Changelog 2026-08-11 availability announcement. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
