# Grok 4.1 — findings by Qwen 3.7 Plus
- Source: xAI/Grok 4.1 (`opencode/grok-4.1`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's November 2025 chat flagship tuned for style, personality, and factuality — available in Thinking (1483 Elo, #1 LMArena Text Arena) and Non-Thinking (1465 Elo, #2) configurations. 64.78% win rate vs previous Grok. Significant hallucination reduction vs Grok 4. Strong EQ-Bench (emotional intelligence) and Creative Writing v3 scores. Distinct from the separate Grok 4.1 Fast API model. No traditional reasoning/coding benchmarks published (GPQA, AIME, SWE-bench).
- **Provider / access:** xAI (grok.com, X, API). Proprietary.
- **Release / knowledge:** November 17, 2025. Knowledge cutoff not specified.
- **IDs:** `opencode/grok-4.1`
- **Context window:** 128K (Zen listing); trackers claim up to 2M
- **Modalities:** Text in/out; image in via consumer app
- **Pricing:** $3.00 in / $15.00 out per 1M

### Raw benchmarks found

Agent / tool use: No specific agentic benchmark scores published. Tool calling supported.

Reasoning / knowledge: LMArena Text Arena #1 (Thinking, 1483 Elo) / #2 (Non-Thinking, 1465 Elo). 64.78% win rate vs previous Grok. EQ-Bench strong (emotional intelligence). Creative Writing v3 strong. FActScore improved (lower hallucination). Significant hallucination rate reduction vs Grok 4. No standard reasoning benchmarks (GPQA, AIME, HLE, MMLU-Pro) published.

Coding: No standard coding benchmarks published (SWE-bench, LiveCodeBench).

Multimodal: Text and image input via consumer app. No standard multimodal benchmarks published.

Long context: 128K context (Zen listing); trackers claim up to 2M.

### Normalized scores (1–100)

- **Tool use: 45/100.** No specific agentic benchmark scores published. Tool calling supported but not demonstrated on standard benchmarks.
- **Reasoning: 50/100.** LMArena #1 (1483 Elo) is outstanding for conversational quality. Significant hallucination reduction is notable. However, no standard reasoning benchmarks (GPQA, AIME, HLE) published makes assessment difficult.
- **Context window: 60/100.** 128K context (Zen listing) is moderate. Trackers claim up to 2M but unconfirmed.
- **Multimodal: 40/100.** Text and image input via consumer app. No standard multimodal benchmarks published. Limited compared to models with extensive vision evaluation.
- **Coding: 35/100.** No standard coding benchmarks published. Chat-focused model not optimized for coding. Scored conservatively due to lack of data.
- **Cost efficiency: 30/100.** $3/$15 per 1M is expensive (same as Grok 4). No clear cost advantage over predecessor.
- **Overall Score: 46/100.** Mean of Tool (45) + Reasoning (50) + Context (60) + Multimodal (40) + Coding (35) = 230/5 = 46.0. Rounded to 45. LMArena #1 ranking and hallucination reduction are notable, but complete absence of standard reasoning/coding benchmarks, expensive pricing, and chat-focused (not general intelligence) positioning significantly limit the score.

## Signature
- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-13
