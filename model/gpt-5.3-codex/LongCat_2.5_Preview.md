# GPT-5.3-Codex — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's coding-optimized model for long-horizon, agentic software tasks. An upgraded version of GPT-5.3 for Codex and similar coding environments. Subsumed by GPT-5.4 but still competitive on Terminal-Bench 2.0.
- **Provider / access:** OpenAI API — `gpt-5.3-codex`. Responses API and Chat Completions API.
- **Release / knowledge:** 2026-02-05 release; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 400,000 tokens; 128,000 max output.
- **Modalities:** text, image, PDF input; text output; reasoning yes (low/medium/high/xhigh); tool calls yes.
- **Pricing (as of 2026-10-02):** $1.75/1M input, $14.00/1M output, $0.22/1M cached input.
- **Architecture:** Proprietary. Coding-optimized variant with reasoning effort settings.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **77.3%** (danielvaughan.com — leads GPT-5.4's 75.1%)
- OSWorld-Verified: **64.7%** (benchlm.ai)
- Gert Labs: **57.47%** (benchlm.ai)

Reasoning / knowledge:

- benchlm.ai reasoning score: **79.6** (Unranked, 2 rankable rows)
- benchlm.ai knowledge score: **64.2** (Estimated, #27/160)
- benchlm.ai mathematics score: **91.2** (#14/124)

Coding:

- SWE-bench Pro: **56.8%** (multiple sources)
- SWE-bench Verified: **80.0%** (danielvaughan.com); **85%** (benchlm.ai vs Kimi K2.6)
- SWE-Rebench: **58.2%** (benchlm.ai)
- Vibe Code Bench: **61.77%** (benchlm.ai vs Kimi K2.6)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5.3-Codex.

Multimodal:

- Text, image, PDF input supported. No specific multimodal benchmark scores found for GPT-5.3-Codex.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.0 77.3% (leads GPT-5.4), OSWorld 64.7%, Gert Labs 57.47%. Strong terminal-centric agentic coding. Capped by OSWorld score.
- **Reasoning: 75/100.** benchlm.ai reasoning score 79.6. Mathematics score 91.2 (#14/124) is strong. Knowledge score 64.2 is moderate.
- **Context window: 80/100.** 400K token context window with 128K max output. Good but not class-leading.
- **Multimodal: 70/100.** Text, image, and PDF input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 78/100.** SWE-bench Pro 56.8%, SWE-bench Verified 80-85%, Terminal-Bench 2.0 77.3%, Vibe Code Bench 61.77%. Strong coding-optimized model, though SWE-bench Pro below frontier leaders.
- **Cost efficiency: 65/100.** $1.75/1M input and $14/100/1M output — moderate pricing. Cached input at $0.22/1M helps. 30% cheaper than GPT-5.4 on input tokens.
- **Overall Score: 75/100.** Mean of five quality dims (72+75+80+70+78)/5 = 75.0 → 75. Best fit: pure terminal coding at high volume where per-token cost matters more than per-task efficiency.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
