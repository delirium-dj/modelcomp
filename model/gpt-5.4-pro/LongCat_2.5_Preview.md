# GPT-5.4 Pro — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.4 Pro
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's maximum-performance variant of GPT-5.4, using extended reasoning for the most complex tasks. First OpenAI general-purpose model with native computer-use capabilities.
- **Provider / access:** OpenAI API — Responses API only (`gpt-5.4-pro`). Not available via Chat Completions.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.4-pro` (default snapshot: `gpt-5.4-pro-2026-03-05`)
- **Context window:** 1,050,000 tokens total; 272K input at standard pricing, >272K priced at 2x input / 1.5x output. 128K max output.
- **Modalities:** text, image input; text output; reasoning yes; tool calls yes; computer use yes; MCP yes.
- **Pricing (as of 2026-10-02):** $30/1M input, $180/1M output. No cached input discount. 10% regional processing uplift.
- **Architecture:** Proprietary. Same underlying model as GPT-5.4 with extended reasoning compute.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (OpenAI blog, GPT-5.4 base)
- Toolathlon: **54.6%** (OpenAI blog, GPT-5.4 base)
- BrowseComp: **89.3%** (benchlm.ai, GPT-5.4 Pro)
- Terminal-Bench 2.0: **75.1%** (benchlm.ai, GPT-5.4 base)

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (apxml.com, GPT-5.4 Pro)
- HLE: **58.7%** (benchlm.ai, GPT-5.4 Pro)
- ARC-AGI-2: **83.3%** (benchlm.ai, GPT-5.4 Pro)
- GPQA: **92.8%** (benchlm.ai, GPT-5.4 base)

Coding:

- SWE-bench Pro: **56.8%** (OpenAI blog, GPT-5.4 Pro); **57.7%** (GPT-5.4 base)
- LiveCodeBench Pro: **87.5%** (benchlm.ai, GPT-5.4 base)
- Vibe Code Bench: **67.42%** (benchlm.ai, GPT-5.4 base)

Long context:

- No long-context retrieval benchmark (MRCR/RULER/GraphWalks) publicly reported for GPT-5.4 Pro specifically.

Multimodal:

- MMMU-Pro: **81.2%** (OpenAI blog, GPT-5.4 base)

Professional:

- GDPval: **82.0%** (OpenAI blog, GPT-5.4 Pro)
- FinanceAgent v1.1: **61.5%** (OpenAI blog, GPT-5.4 Pro)
- Investment Banking (Internal): **83.6%** (OpenAI blog, GPT-5.4 Pro)

### Normalized scores (1–100)

- **Tool use: 78/100.** OSWorld 75.0%, Toolathlon 54.6%, BrowseComp 89.3% (Pro). Strong computer-use and tool-search capabilities. Capped by Toolathlon score.
- **Reasoning: 88/100.** GPQA Diamond 94.4%, HLE 58.7%, ARC-AGI-2 83.3%. Excellent extended-reasoning performance on hardest tasks.
- **Context window: 95/100.** 1.05M token context window with 128K max output. Among the largest available. >272K tokens priced at premium.
- **Multimodal: 75/100.** Text and image input. MMMU-Pro 81.2% (base model). No video or audio input. Native computer-use capability.
- **Coding: 80/100.** SWE-bench Pro 56.8% (Pro), LiveCodeBench Pro 87.5%. Strong LiveCodeBench but SWE-bench Pro below frontier leaders.
- **Cost efficiency: 15/100.** $30/1M input and $180/1M output — among the most expensive models. No cached input discount. Premium pricing for >272K context.
- **Overall Score: 83/100.** Mean of five quality dims (78+88+95+75+80)/5 = 83.2 → 83. Best fit: maximum-performance agentic coding, computer use, and complex reasoning where cost is not the primary constraint.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
