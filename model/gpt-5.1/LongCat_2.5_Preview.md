# GPT-5.1 — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.1
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 (Thinking)
- **Short description:** OpenAI's advanced reasoning model released November 2025, featuring adaptive thinking time that varies dynamically based on task complexity. Balances intelligence and speed for agentic and coding tasks.
- **Provider / access:** OpenAI API — `gpt-5.1` (Thinking), `gpt-5.1-chat-latest` (Instant). Responses API and Chat Completions API.
- **Release / knowledge:** 2025-11-12 release.
- **IDs:** `openai/gpt-5.1`
- **Context window:** 400K tokens (Thinking); 128K max output.
- **Modalities:** text, image input; text output; reasoning yes (adaptive: low/medium/high/xhigh/none); tool calls yes; apply_patch tool; shell tool.
- **Pricing (as of 2026-10-02):** $1.25/1M input, $10.00/1M output.
- **Architecture:** Proprietary. Adaptive reasoning with dynamic thinking time allocation.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench Hard: **45.5%** (Requesty / Artificial Analysis)
- τ²-Bench: **81.9%** (Requesty / Artificial Analysis)
- Gert Labs: **41.24%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **87.3%** (Requesty / Artificial Analysis)
- AIME 2025: **94.0%** (Requesty / Artificial Analysis)
- HLE: **28.5%** (Requesty / Artificial Analysis)
- MMLU-Pro: **87.0%** (Requesty / Artificial Analysis)
- GDPval: **38.8%** (OpenAI blog, GPT-5.1 Thinking)

Coding:

- SWE-bench Verified: **76.3%** (OpenAI blog)
- LiveCodeBench: **86.8%** (Requesty / Artificial Analysis)
- Vibe Code Bench: **24.61%** (benchlm.ai)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5.1.

Multimodal:

- Text and image input supported. No specific multimodal benchmark scores found for GPT-5.1.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench Hard 45.5%, τ²-Bench 81.9%, Gert Labs 41.24%. Moderate agentic tool use; Terminal-Bench Hard is a relative weakness. Capped by Terminal-Bench Hard and Gert Labs scores.
- **Reasoning: 72/100.** GPQA Diamond 87.3%, AIME 94.0%, HLE 28.5%. Strong math reasoning but HLE is low. Knowledge score 52.2 (Estimated, #53/160) is moderate.
- **Context window: 80/100.** 400K token context window with 128K max output. Good but not class-leading.
- **Multimodal: 65/100.** Text and image input supported. No specific multimodal benchmark scores found. Capability inferred from input modalities.
- **Coding: 72/100.** SWE-bench Verified 76.3%, LiveCodeBench 86.8%, Vibe Code Bench 24.61%. Good LiveCodeBench but weak Vibe Code Bench. Capped by Vibe Code Bench.
- **Cost efficiency: 70/100.** $1.25/1M input and $10/100/1M output — moderate pricing. Adaptive reasoning improves token efficiency. 1.2x cheaper than GPT-6.1 Sol per token.
- **Overall Score: 70/100.** Mean of five quality dims (62+72+80+65+72)/5 = 70.2 → 70. Best fit: balanced agentic coding and reasoning tasks where adaptive thinking time and cost efficiency matter.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
