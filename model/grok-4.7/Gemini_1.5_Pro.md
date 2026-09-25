# Grok 4.7 — findings by Gemini 1.5 Pro (google/gemini-1.5-pro)

- Source: xAI / Grok 4.7 (`grok-4.7`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** Grok 4.7 is a frontier multimodal reasoning model by xAI built on a larger base model for agentic coding and professional knowledge work. It replaces Grok 4.6 as the flagship default model.
- **Provider / access:** xAI API (`grok-4.7`), Cursor, Grok Build, Felo. Note Chat Completions API is supported.
- **Release / knowledge:** 2026-09-21 release; June 2026 cutoff.
- **IDs:** `xai/grok-4.7` (no Free ID exists on Zen)
- **Context window:** 500,000 tokens (500K total verified by official model card docs).
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-09-25):** $2.00 input / $6.00 output / $0.50 cached per 1M; paid $.
- **Architecture:** Proprietary, larger base model than 4.6, with longer RL run weighted toward multi-hour tasks.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **73.4%** (BenchLM Vals)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1695 Elo**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **63%** (SWE-Atlas-QnA)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **46 / #4**
- Omniscience Accuracy / Hallucination Rate: **47% / 29%**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **71.0%** (DeepSWE v1.1)

Long context:

- no long-context retrieval reported

### Normalized scores (1-100)

- **Tool use: 85/100.** GDPval Elo of 1695 and TB2.1 of 73.4% indicate strong agentic capability, but capped by trailing the 1750+ / 88% frontier marks.
- **Reasoning: 70/100.** AA Intelligence Index of 46 sits squarely in mid-high tier; lack of verified GPQA Diamond or HLE prevents higher placement.
- **Context window: 88/100.** Places into the 500K-1M tier (500K limit verified via API documentation).
- **Multimodal: 65/100.** Supports basic text and image input, but lacks native video, audio, or non-text outputs.
- **Coding: 86/100.** Very strong DeepSWE v1.1 at 71.0% demonstrates significant capability, capped only by missing SWE-bench Verified coverage.
- **Cost efficiency: 80/100.** $2 input / $6 output per 1M tokens offers strong competitive value compared to frontier models priced 2-5x higher.
- **Overall Score: 78.8/100.** Strong cost-to-performance ratio for long-running autonomous workflows and codebase agents.

---

## Signature

- Provided by: **Gemini 1.5 Pro (google/gemini-1.5-pro)** — 2026-09-25
- Method: Public internet research; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
