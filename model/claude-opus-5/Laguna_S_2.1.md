# Claude Opus 5 — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Anthropic (`anthropic/claude-opus-5`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Claude 5-gen model for the deepest reasoning and longest autonomous coding/research runs, with a 1M-token context and on-by-default extended thinking.
- **Provider / access:** Anthropic Messages API & Message Batches API beta, AWS Bedrock, Google Vertex AI, Microsoft Foundry (`anthropic/claude-opus-5`).
- **Release / knowledge:** Released July 24, 2026 (successor to Claude Opus 4.8). Knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** 1,048,576 (1M) in / 128,000 out (300,000 out via Message Batches API beta header)
- **Modalities:** text, image, pdf in; text, tool-calls out (parallel function calling; no native audio/video)
- **Pricing (as of 2026-09-20):** $5 in / $25 out per 1M tokens (unchanged from Opus 4.8); Fast Mode $10/$50; Batch API 50% off ($2.50/$12.50); prompt caching 90% off input from the 512-token threshold. Paid only, no Free tier.
- **Architecture:** Proprietary; parameters and architecture type not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- GDPval-AA / tau3-Bench / AutomationBench-AA / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found (Anthropic skipped several industry benchmarks at launch)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (vendor-reported, Anthropic/HokAI, rank 6 of 44; Jul 24 2026)
- ARC-AGI-3 (high reasoning effort): **30.16%** (HokAI, Jul 24 2026; ~4x GPT-5.6 Sol, ~20x Opus 4.8)
- AA Intelligence Index: **61** (Artificial Analysis, max-effort mode; HokAI cites 61 at high / 63 at max; Sep 2026)
- Humanity's Last Exam: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt / BenchLM overall / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **97.0%** (vendor-reported, Anthropic/HokAI, rank 1 of 28; Jul 24 2026 — highest published to date)
- SWE-bench Pro: **79.2%** (HokAI, Jul 24 2026; +10 pts vs Opus 4.8's 69.2%)
- DeepSWE / LiveCodeBench / SciCode / Vibe Code Bench / SWE-Atlas: no verified public score found

Long context:

- MRCR / RULER: no verified public score found (1M window asserted by HokAI; output speed 54 tok/s, Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 90/100.** SWE-bench Pro 79.2% (+10 vs Opus 4.8) and ARC-AGI-3 30.16% (best-in-class reasoning), but Terminal-Bench 2.1 / GDPval-AA / tau3-Bench were not disclosed.
- **Reasoning: 91/100.** GPQA Diamond 94.1% (#6/44) and AA Intelligence Index 61 (max 63); capped by HLE/SWE-agentic-knowledge evals absent.
- **Context window: 95/100.** 1M-token input window (top tier).
- **Multimodal: 80/100.** Text, image and PDF input with native parallel tool-calls; no audio/video.
- **Coding: 96/100.** SWE-bench Verified 97.0% (#1/28) — the highest published result — plus SWE-bench Pro 79.2%.
- **Cost efficiency: 40/100.** Premium paid tier ($5/$25 per 1M), no Free tier.
- **Overall Score: 90/100.** Mean of the five quality dimensions; the strongest publicly disclosed coding/reasoning scores in the Frontier tier.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, Anthropic); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.

---
