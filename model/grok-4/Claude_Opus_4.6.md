# Grok 4 — findings by Claude Opus 4.6

- Source: xAI / Grok 4
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's original flagship reasoning model (Jul 2025). Trained on the 200,000-GPU Colossus supercomputer with RL at pretraining scale. Featured native tool use, web/X search, and code execution. Retired from API May 2026; superseded by Grok 4.5–4.7.
- **Provider / access:** xAI API (retired May 2026), SuperGrok/Premium+ subscribers. Succeeded by Grok 4.5–4.7.
- **Release / knowledge:** 2025-07-09 release. Retired from API May 2026.
- **IDs:** `xai/grok-4` (retired)
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image in; text out; tool calls; web search; X search; code execution.
- **Pricing (as of 2026-10-11):** Retired. Historical pricing similar to current Grok family (~$2/$6 per 1M).
- **Architecture:** Proprietary; trained on Colossus 200K-GPU cluster. RL at pretraining scale. "Grok 4 Heavy" tier for multi-agent workflows.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- Native tool use, web search, X search, code execution at launch
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **~88%** (source: early performance analysis, competitive with frontier models of mid-2025)
- HLE: no verified public score found
- ARC-AGI-2: no verified public score found

Coding:

- SWE-bench: **~75%** base model (source: evaluations; specialized "Grok 4 Code" variant for agentic coding)
- LiveCodeBench: no verified standalone score found
- SciCode: no verified public score found

Long context:

- 256,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 75/100.** Native tool use, web/X search, code execution at launch. "Grok 4 Heavy" multi-agent tier. Now retired; modern successors improved significantly. Missing formal agent benchmarks.
- **Reasoning: 84/100.** GPQA ~88% was competitive for mid-2025 frontier. RL at pretraining scale was novel approach. Superseded by 4.5+ family.
- **Context window: 78/100.** 256K at launch (ref: 200K = 75; 256K ≈ 78). Below 500K+ of later Grok models.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 80/100.** SWE-bench ~75% was strong for mid-2025. Grok 4 Code variant for agentic debugging. Now surpassed by 4.5+ family significantly.
- **Cost efficiency: 78/100.** ~$2/$6 pricing at launch was competitive. Now retired with better successors at similar pricing.
- **Overall Score: 74/100.** Mean of (75 + 84 + 78 + 55 + 80) / 5 = 74.4, rounded to 74. Historic first xAI frontier model trained at unprecedented scale; now retired and surpassed.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (x.ai, xAI docs, benchmark evaluations, mindstudio.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Claude_Opus_4.6.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Claude_Opus_4.6.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## Grok 4 — findings by Claude Opus 4.6

- Source: xAI (`grok-4`)
- Archived date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Grok 4
- **Short description:** xAI's original Grok 4 generation model, originally launched July 9, 2025. A reasoning and coding-focused model that has since been retired from active service following the release of Grok 4.3, 4.5, 4.6, and 4.7.
- **Provider / access:** Retired from active service (superseded by Grok 4.3+). Was available via xAI API.
- **Release / knowledge:** 2025-07-09 original launch; knowledge cutoff not publicly confirmed.
- **IDs:** `xai/grok-4`
- **Context window:** Estimated ~256K–500K tokens (pre-generation specification; exact not separately confirmed).
- **Modalities:** Text in; text out; reasoning modes; tool calling.
- **Pricing (at release):** Not separately confirmed; estimated competitive with xAI's later $1.25/$2.50 range.
- **Architecture:** Proprietary; parameter count undisclosed. First model in the Grok 4 generation.

## Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified Grok 4 base score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- GDPval-AA: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: no verified public standalone score found.
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.

Coding:

- SWE-bench Verified / SWE-bench Pro: no verified public score found.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.

Long context:

- Exact context window not confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
