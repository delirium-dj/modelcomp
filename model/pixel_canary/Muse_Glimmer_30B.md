# Pixel Canary — findings by Muse Glimmer 30B

- Source: Vercel / stealth/pixel-canary
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Pixel Canary
- **Short description:** Anonymous stealth large language model distributed via Vercel AI Gateway, tuned for software development, frontend / Next.js application building, refactoring, responsive layouts and mobile app design.
- **Provider / access:** Vercel AI Gateway `stealth/pixel-canary`; also surfaced in Cline, Command Code and other agent model pickers. No public vendor page.
- **Release / knowledge:** 2026-09-25; knowledge cutoff not disclosed.
- **IDs:** `stealth/pixel-canary`
- **Context window:** 262,144 tokens input, 131,072 tokens maximum output per historical Vercel listing.
- **Modalities:** Input text and image per historical spec; Output text. Adjustable reasoning effort, tool use enabled in Vercel OpenCode eval config. Image understanding quality unverified.
- **Pricing (as of 2026-10-27):** Free during stealth preview period; no zero-data-retention, prompts may be used for training.
- **Architecture:** Unknown; anonymous developer, no public parameter count or open weights.

### Raw benchmarks found

> Sources: Vercel AI Gateway Next.js Agent Evals September 2026, aiidelist.com Pixel Canary model page 2026-10-06, Hugging Face blog What Is Pixel Canary 2026-09-26.

Agent / tool use:
- Next.js Agent Evals baseline: **90.3%** (28/31 tasks, Vercel published results)
- Next.js Agent Evals with AGENTS.md: **96.8%** (30/31 tasks, Vercel published results)
- Tool use: enabled in Vercel OpenCode eval config; no independent Terminal-Bench / Tau3 / Claw scores published
- GDPval-AA / Toolathon / Claw-Eval: no verified public score found

Reasoning / knowledge:
- GPQA Diamond / HLE / AIME: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:
- Next.js Agent Evals baseline 90.3% and 96.8% with docs indicate strong Next.js coding / agentic task completion
- SWE-bench Verified / LiveCodeBench / VIBE-Pro: no verified public score found

Long context:
- No MRCR / RULER / GraphWalks public score found; 262K window claimed with no retrieval measurement.

### Normalized scores (1–100)

- **Tool use: 82/100.** Next.js Agent Evals 90.3% baseline / 96.8% with AGENTS.md demonstrate strong agentic coding scaffolding; capped by lack of independent Terminal-Bench / Tau3 / Claw verification and unknown tool fidelity outside Next.js.
- **Reasoning: 50/100.** No GPQA / HLE / AIME public numbers; Next.js task success implies some reasoning but insufficient evidence for scoring.
- **Context window: 70/100.** 262,144 token window places model in 200K–500K tier per methodology; no long-context retrieval benchmark published.
- **Multimodal: 45/100.** Historical spec lists text and image input with text output; no verified multimodal benchmark or image understanding evaluation found, so score stays well below credible vision models.
- **Coding: 85/100.** Next.js Agent Evals 90.3% baseline ties GPT-6 Astra per Vercel; strong frontend/agentic coding signal, capped by absence of SWE-bench / LiveCodeBench independent results.
- **Cost efficiency: 100/100.** Free during stealth preview with no per-token charge.
- **Overall Score: 66/100.** Mean of five quality dims (82+50+70+45+85)/5 = 66.4 → 66. Best-fit: free, anonymous coding-specialist with strong Next.js agent performance, limited evidence outside that niche.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
