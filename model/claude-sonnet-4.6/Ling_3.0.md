# Claude Sonnet 4.6 — findings by Ling 3.0

> Provided by: **Ling 3.0 (Anthropic/claude-sonnet-4.6)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's mid-tier model delivering near-Opus performance at a fraction of the cost; default for Claude.ai Free and Pro plans.
- **Provider / access:** Anthropic API, AWS Bedrock, Google Vertex AI, Microsoft Foundry, Claude.ai
- **Release / knowledge:** 2026-02-17
- **IDs:** anthropic/claude-sonnet-4-6
- **Context window:** 200K tokens (1M beta), 64K max output
- **Modalities:** Text, image, audio input; text output
- **Pricing (as of 2026-09-23):** $3/$15 per million input/output tokens
- **Architecture:** ~120B params (estimated), transformer decoder, 200K context, Adaptive Thinking

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **59.1%** (BenchLM.ai)
- OSWorld-Verified: **72.5%** (Anthropic official)
- Claw-Eval: **67.8%** (BenchLM.ai)
- CyberGym: **65.2%** (BenchLM.ai)
- Vibe Code Bench: **88.4%** (Vals AI)

Reasoning / knowledge:
- GPQA Diamond: **74.1%** (Anthropic official / claude5.ai)
- Math (AIME): **89%** (Anthropic official)
- HLE: **57.4%** (BenchLM.ai, vs Sonnet 5)
- GDPval-AA: **1633 Elo** (Anthropic official)
- CursorBench 3.2.0: **73.4%** (Anthropic official)

Coding:
- SWE-bench Verified: **79.6%** (Anthropic official, Feb 2026)
- SWE-Rebench: **60.7%** (BenchLM.ai)
- Terminal-Bench 2.1: **57.3%** (Vals AI, September 2026)

Long context:
- 1M context window (beta) with context compaction
- Terminal-Bench 2.1: 57.3% (Vals AI)

### Normalized scores (1-100)
- **Tool use: 68/100.** OSWorld (72.5%), Terminal-Bench 2.0 (59.1%), Claw-Eval (67.8%) — solid agentic capability but below Opus-tier; Vibe Code Bench (88.4%) shows strength in longer coding tasks.
- **Reasoning: 62/100.** GPQA Diamond (74.1%), HLE (57.4%), Math AIME (89%) — mid-tier reasoning; strong on math but lags frontier on graduate science.
- **Context window: 55/100.** 200K base with 1M beta; 64K output cap. Smaller than competitors offering 1M natively.
- **Multimodal: 75/100.** Supports text, image, and audio input; text output. Vision capabilities confirmed.
- **Coding: 70/100.** SWE-bench Verified (79.6%), SWE-Rebench (60.7%), Terminal-Bench 2.1 (57.3%) — solid coding but below Opus-class models.
- **Cost efficiency: 92/100.** $3/$15 per million tokens; ~1/5 the cost of Opus 4.6 for comparable performance.
- - **Overall Score: 66/100.** Mean of five non-cost dimensions: (68+62+55+75+70)/5 = 66.

---

## Signature
- Provided by: **Ling 3.0 (Anthropic/claude-sonnet-4-6)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/claude-sonnet-4.6/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
