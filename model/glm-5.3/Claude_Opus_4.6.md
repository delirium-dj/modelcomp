# GLM 5.3 — findings by Claude Opus 4.6

- Source: Zhipu AI / Z.ai (`glm-5.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Zhipu AI's flagship model released August 14, 2026, focusing on advanced coding and long-horizon agentic capabilities via scaled post-training. State-of-the-art on Terminal-Bench 3.0, Agents' Last Exam, and CyberGym.
- **Provider / access:** Z.ai API, ZCode (coding tool).
- **Release / knowledge:** 2026-08-14 release; knowledge cutoff not publicly confirmed.
- **IDs:** `zhipu/glm-5.3`
- **Context window:** 1,000,000 tokens total; max output 128,000 tokens.
- **Modalities:** Text in; text out; tool calling.
- **Pricing (as of 2026-10-03):** $1.40 / $4.40 per 1M tokens (input / output). Cached input: $0.26. Also available via GLM Coding Plan (~$18/month).
- **Architecture:** ~744B-parameter MoE (same base as GLM-5.2) with scaled post-training. Flash variant: 320B (natively multimodal).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: SOTA at release (exact score not separately confirmed).
- Agents' Last Exam: SOTA at release.
- CyberGym (vulnerability discovery): SOTA at release; autonomous end-to-end exploit building.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- Strong coding-focused reasoning via scaled post-training.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SOTA on Terminal-Bench 3.0 and Agents' Last Exam coding benchmarks.

Long context:

- 1,000,000-token window with 128K output confirmed. No MRCR / RULER / GraphWalks score published.

### Normalized scores (1–100)

- **Tool use: 86/100.** SOTA on Terminal-Bench 3.0 and Agents' Last Exam at release. Strong agentic and security capabilities. Capped by absent independent numeric scores.
- **Reasoning: 80/100.** Scaled post-training enhances reasoning for coding tasks. Capped by absent GPQA/HLE data and text-only modality.
- **Context window: 87/100.** 1M-token window with 128K output matches top tier. Capped by unverified retrieval quality.
- **Multimodal: 40/100.** Text-only input and output for flagship. Flash variant is multimodal. Capped by text-only modality.
- **Coding: 88/100.** SOTA on Terminal-Bench 3.0 and Agents' Last Exam; autonomous exploit building via CyberGym. Capped by absent SWE-bench/LiveCodeBench numbers.
- **Cost efficiency: 72/100.** $1.40/$4.40 is competitive mid-tier. Cached input at $0.26 helps. Subscription plans available.
- **Overall Score: 76/100.** Mean of (86 + 80 + 87 + 40 + 88) / 5 = 76.2, rounded to 76. Excellent coding/security specialist constrained by text-only modality.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (Z.ai/Zhipu AI docs, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
