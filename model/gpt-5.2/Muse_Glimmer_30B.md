# GPT-5.2 — findings by Muse Glimmer 30B

- Source: OpenAI/GPT-5.2
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's Instant/Thinking/Pro flagship for science and knowledge work; successor to GPT-5.1 and predecessor to GPT-5.5. Tracked as OpenCode route opencode/gpt-5.2 with image-in / text-out modalities.
- **Provider / access:** OpenCode Zen `opencode/gpt-5.2`. Chat Completions API via OpenCode provider.
- **Release / knowledge:** No verified public release date found; system-card material referenced in repo metadata predates GPT-5.4.
- **IDs:** `opencode/gpt-5.2`. No Free ID on Zen per `meta.json` `noFreeId: true`.
- **Context window:** 400,000 total; 128K output per `meta.json`. Verified via curated metadata.
- **Modalities:** Text, image in; text out. No verified audio/video input. Reasoning supported, tool calls supported.
- **Pricing (as of 2026-10-20):** $1.75/$14.00 per 1M Thinking tier; $21.00/$168.00 per 1M Pro tier; $0.175 cached per `meta.json`. Paid only.
- **Architecture:** Proprietary OpenAI model. Parameter count not publicly verified.

### Raw benchmarks found

> Public benchmark coverage for GPT-5.2 is sparse. The curated `meta.json` short notes AA Index 42 and MCP Atlas 67.6%. No independent system-card benchmark tables were located via webfetch for this exact OpenCode ID.

Agent / tool use:

- MCP Atlas / SWE Atlas Codebase QnA: **67.6%** <curated `meta.json` short description; no independent public source located via webfetch>
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **67.6%** as above

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **42** <curated `meta.json` short description; independent AA page for opencode/gpt-5.2 not located via webfetch>
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- MRCR / RULER / GraphWalks: **no verified public score found**; context window 400K total per metadata, no retrieval benchmark published.

### Normalized scores (1–100)

- **Tool use: 68/100.** MCP Atlas 67.6% from curated metadata provides a tool-use proxy; capped by lack of independent Terminal-Bench / OSWorld verification.
- **Reasoning: 42/100.** AA Index 42 from curated metadata; no GPQA/HLE public numbers located, score reflects that limited evidence.
- **Context window: 85/100.** 400K total / 128K out places it above 128K-class models but below 1M+ frontier models; no long-context retrieval benchmark verified.
- **Multimodal: 45/100.** Image-in / text-out supported per metadata; no verified vision benchmark scores found, so middling multimodal rating.
- **Coding: 40/100.** No verified public coding benchmark scores located for this ID; conservative baseline for legacy OpenAI generation.
- **Cost efficiency: 60/100.** $1.75/$14 Thinking tier is mid-priced for its generation; Pro tier pricing reduces efficiency.
- **Overall Score: 56/100.** Mean of Tool 68, Reasoning 42, Context 85, Multimodal 45, Coding 40 = 56.0. Best fit is a legacy text+image flagship with modest verified reasoning signal and limited independent benchmark coverage.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research via webfetch; scores are normalized 1–100 interpretations, not official vendor scores. Basics taken from `model/gpt-5.2/meta.json`.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
