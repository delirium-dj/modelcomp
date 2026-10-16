# GPT-5.1 Codex — findings by Claude Opus 4.6

- Source: OpenAI / GPT-5.1-Codex
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex
- **Short description:** OpenAI's first dedicated agentic coding model family (Nov 2025). Max + Mini variants. 400K context with "context compaction" for multi-million-token sessions. 128K output. Built for repo-scale SWE, terminal automation, PR creation. Agent sandboxing. Responses API integration.
- **Provider / access:** OpenAI API (Responses API), Azure. Active.
- **Release / knowledge:** 2025-11 release.
- **IDs:** `openai/gpt-5.1-codex-max`, `openai/gpt-5.1-codex-mini`
- **Context window:** 400,000 tokens; 128,000 max output. Context compaction for multi-window sessions.
- **Modalities:** Text in; text out; tool calls; structured outputs. Agent sandboxing. Network controls.
- **Pricing (as of 2026-10-16):** API tier pricing via OpenAI/Azure. Premium for Max variant.
- **Architecture:** Proprietary; OpenAI reasoning architecture. Context compaction. Agent sandboxing. Prompt injection defense.

### Raw benchmarks found

- Strong on SWE-Lancer, Terminal-Bench (source: openai.com)
- Long-horizon repo-scale tasks, multi-file refactoring, PR creation
- Max variant: deep agentic; Mini variant: rapid prototyping

### Normalized scores (1–100)

- **Tool use: 84/100.** Native agentic coding. Terminal operations. PR creation. Agent sandboxing. Responses API. Context compaction for extended sessions.
- **Reasoning: 78/100.** OpenAI reasoning architecture. Strong for code reasoning. Not a general-purpose reasoner. Missing standalone GPQA.
- **Context window: 88/100.** 400K + context compaction = effectively multi-million-token sessions (ref: 400K ≈ 85-88). 128K output.
- **Multimodal: 15/100.** Text only in/out. No image, audio, or video. Text-only = 15.
- **Coding: 86/100.** Purpose-built for coding. SWE-Lancer, Terminal-Bench strong. Multi-file refactoring, PR creation. Repository-scale autonomy.
- **Cost efficiency: 72/100.** Premium pricing for Max variant. Mini offers budget alternative. Not the cheapest option.
- **Overall Score: 70/100.** Mean of (84 + 78 + 88 + 15 + 86) / 5 = 70.2, rounded to 70. Pioneering agentic coding model with context compaction; text-only modality limits overall. Superseded by GPT-5.3-Codex.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-16
- Method: Public internet research (openai.com, azure.com, models.dev); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
