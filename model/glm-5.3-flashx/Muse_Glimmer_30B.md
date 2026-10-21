# GLM 5.3 FlashX — findings by Muse Glimmer 30B

- Source: Z.ai / GLM-5.3-FlashX, e.g. Z.ai `opencode/glm-5.3-flashx`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's low-latency serving variant of GLM 5.3 Flash (~320B total / 18B active MoE with sparse + linear attention). Same weights as Flash, tuned for ~200 tok/s streaming and multimodal coding workflows.
- **Provider / access:** Z.AI Open Platform `opencode/glm-5.3-flashx`; model code `glm-5.3-flashx` via OpenAI-compatible Chat Completions. Chat Completions API.
- **Release / knowledge:** Release date not publicly confirmed; knowledge cutoff not published.
- **IDs:** `opencode/glm-5.3-flashx`
- **Context window:** 1,048,576 tokens total; 128K max output verified in docs.
- **Modalities:** Text, image, video in; text out; reasoning enabled; tool calling supported.
- **Pricing (as of 2026-10-20):** $0.37 input / $1.25 output per 1M tokens; cached input $0.075 per 1M. Paid.
- **Architecture:** 320B total parameters, 18B activated, MoE with hybrid sparse + linear attention; proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- AutomationBench: **48.8** (Z.ai docs GLM-5.3-Flash/FlashX overview, vs 26.2 for GLM-5.2)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **57** (Artificial Analysis Intelligence Index v4.1.1, GLM-5.3-Flash cited at $0.045 per task discounted)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- DeepSWE v1.1: **63.4** (Z.ai docs GLM-5.3-Flash/FlashX overview, vs 46.2 for GLM-5.2)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: Z.ai Code Bench v1.0 max effort **29.0** vs Claude Opus 4.8 29.5 (Z.ai docs)

Long context:

- MRCR / RULER / GraphWalks: no long-context retrieval reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 55/100.** AutomationBench 48.8 indicates mid-tier agentic tooling vs GLM-5.2; capped by lack of Terminal-Bench / Tau3 public numbers.
- **Reasoning: 60/100.** Artificial Analysis Intelligence Index 57 supports mid reasoning; no GPQA/HLE public scores to lift.
- **Context window: 100/100.** 1M token context with 128K output verified in docs, tier ≥1M.
- **Multimodal: 80/100.** Native image/video/file input with text output; no audio out, so capped below omni 90+.
- **Coding: 70/100.** DeepSWE v1.1 63.4 and Z.ai Code Bench 29.0 max effort show solid coding vs GLM-5.2, below frontier 74%+ DeepSWE.
- **Cost efficiency: 95/100.** $0.37/$1.25 per 1M is low for 1M context multimodal; ~ high efficiency vs $0.60/$2.20 reference.
- **Overall Score: 73/100.** Mean of Tool 55 + Reasoning 60 + Context 100 + Multimodal 80 + Coding 70 = 73; best-fit for low-latency multimodal coding with cheap serving.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
