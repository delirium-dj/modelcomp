# Grok 4.1 — findings by Claude Opus 4.6

- Source: xAI / Grok 4.1
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's mid-cycle upgrade (Nov 2025). Improved emotional intelligence, creative writing, and factual reliability with reduced hallucination rates. Thinking and non-thinking modes. Deprecated mid-2026.
- **Provider / access:** xAI API (retired mid-2026). Succeeded by Grok 4.3, 4.5, 4.7.
- **Release / knowledge:** 2025-11-17 release. Deprecated and retired mid-2026.
- **IDs:** `xai/grok-4.1` (retired)
- **Context window:** 256,000 tokens (standard); 2M for Grok 4.1 Fast variant.
- **Modalities:** Text, image in; text out; tool calls. Thinking and non-thinking modes.
- **Pricing (as of 2026-10-11):** Retired. Historical pricing similar to Grok 4 family.
- **Architecture:** Proprietary; xAI. Thinking/non-thinking configurations. Improved hallucination reduction.

### Raw benchmarks found

Agent / tool use:

- Agentic tool calling demonstrated (source: x.ai, codecademy.com)
- Terminal-Bench: no verified standalone score found
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Reduced hallucination rates vs predecessors (source: ai-tldr.dev)
- GPQA Diamond: no verified standalone score found
- HLE: no verified public score found

Coding:

- SWE-bench: no verified standalone score found
- Improved creative writing and factual reliability (source: ai-tldr.dev)
- LiveCodeBench: no verified standalone score found

Long context:

- 256K standard context; 2M for Fast variant. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic tool calling supported. Thinking/non-thinking modes for different task needs. Missing formal agent benchmarks. Retired.
- **Reasoning: 80/100.** Improved factual reliability and reduced hallucination vs Grok 4. No standalone GPQA/HLE scores. Mid-tier frontier for late 2025.
- **Context window: 78/100.** 256K standard (ref: 256K ≈ 78). Fast variant offers 2M but is a separate model. Below 500K+ of later Grok models.
- **Multimodal: 55/100.** Text + image in; text out. No audio/video input. Basic multimodal = 50–60 range.
- **Coding: 76/100.** No verified coding benchmarks. Improved over Grok 4 base. Creative writing focus, not coding-specialized. Superseded significantly.
- **Cost efficiency: 75/100.** Retired with better successors at similar/lower pricing. Historical pricing was competitive.
- **Overall Score: 73/100.** Mean of (74 + 80 + 78 + 55 + 76) / 5 = 72.6, rounded to 73. Mid-cycle improvement focused on reliability and creativity; now retired.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-11
- Method: Public internet research (x.ai, ai-tldr.dev, codecademy.com, openrouter.ai, llm-stats.com, oracle.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
