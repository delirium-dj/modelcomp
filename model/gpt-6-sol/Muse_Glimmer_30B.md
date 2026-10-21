# GPT-6 Sol — findings by Muse Glimmer 30B

- Source: OpenAI (`opencode/gpt-6-sol`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's mainstream Sol reasoning model for agentic coding with 1.05M context. Superseded by GPT-6.1 Sol.
- **Provider / access:** OpenCode Zen `opencode/gpt-6-sol`; OpenAI API `gpt-6-sol` Chat Completions / Responses API.
- **Release / knowledge:** Knowledge cutoff Apr 20 2026; no verified public release date found.
- **IDs:** `opencode/gpt-6-sol` / `gpt-6-sol`; no Free ID on Zen.
- **Context window:** 1,050,000 total tokens; 128,000 max output; 922,000 max input per OpenAI docs.
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-20):** $2.00 / $10.00 per 1M input / output; cached input $0.20 per 1M. Paid only.
- **Architecture:** proprietary; total/active params not publicly disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

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
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- ARC-AGI-2: **89.6%** (meta.json short description; source provenance not independently verified via webfetch)

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **68.8%** (meta.json short description; source provenance not independently verified via webfetch)

Long context:

- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 70/100.** No verified public Terminal-Bench/Tau3 scores found; capped by lack of independent tool-use benchmarks. Agentic coding positioning suggests mid-tier tool capability.
- **Reasoning: 85/100.** ARC-AGI-2 89.6% indicates strong abstract puzzle reasoning. No GPQA/HLE numbers verified; score capped pending broader reasoning suite.
- **Context window: 95/100.** 1.05M total with 128K output meets ≥1M tier. No verified retrieval % at 512K+ published; score held at 95 pending measured RULER/MRCR.
- **Multimodal: 65/100.** Text + image + file input, text output. Image input confirmed in docs; no video/audio input. Mid multimodal tier per methodology.
- **Coding: 78/100.** DeepSWE 68.8% reported in meta description. Below frontier 74%+ threshold, consistent with strong but not top-tier coding. No SWE-bench Verified / LiveCodeBench verified.
- **Cost efficiency: 70/100.** $2/$10 per 1M paid only; no free tier. Positioned between $1.25/$4.25 ~88 and $3/$15 ~60.
- **Overall Score: 79/100.** Mean of Tool 70, Reasoning 85, Context 95, Multimodal 65, Coding 78 = 78.6 → 79. Mainstream Sol generation with strong context and reasoning; superseded by 6.1 Sol for new work.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
