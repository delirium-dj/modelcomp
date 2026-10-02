# GPT-5.2 — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.2
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 (Thinking)
- **Short description:** OpenAI's flagship reasoning model released December 2025, featuring major improvements in general intelligence, long-context understanding, agentic tool-calling, and vision over GPT-5.1.
- **Provider / access:** OpenAI API — `gpt-5.2` (Thinking), `gpt-5.2-pro` (Pro), `gpt-5.2-chat-latest` (Instant). Responses API and Chat Completions API.
- **Release / knowledge:** 2025-12-11 release; knowledge cutoff 2025-08-31.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 272K tokens (some sources report 400K via Azure); 128K max output.
- **Modalities:** text, image input; text output; reasoning yes; tool calls yes; structured outputs yes; PDF input.
- **Pricing (as of 2026-10-02):** $1.75/1M input, $14/1M output, $0.17/1M cached input.
- **Architecture:** Proprietary. Reasoning model with xhigh reasoning effort setting.

### Raw benchmarks found

Agent / tool use:

- GDPval: **70.9%** (OpenAI blog, SOTA — at/above human expert level across 44 occupations)
- τ²-Bench Telecom: **85%** (opper.ai)
- Terminal-Bench Hard: **47%** (opper.ai)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (OpenAI blog, Thinking); **93.2%** (Pro)
- AIME 2025: **100.0%** (OpenAI blog); **99%** (opper.ai)
- FrontierMath (Tier 1–3): **40.3%** (OpenAI blog)
- HLE: **38%** (opper.ai)
- ARC-AGI-1: **86.2%** (Thinking); **90%+** (Pro, first model to cross 90%)
- CharXiv Reasoning: **88.7%** (OpenAI blog)
- MMLU-Pro: **87%** (opper.ai)

Coding:

- SWE-bench Pro: **55.6%** (OpenAI blog)
- SWE-bench Verified: **80.0%** (OpenAI blog)
- LiveCodeBench: **89%** (opper.ai)

Long context:

- MRCRv2 (8 needles, 4k–8k): **98.2%** (OpenAI blog)
- MRCRv2 (8 needles, 8k–16k): **89.3%**
- MRCRv2 (8 needles, 16k–32k): **95.3%**
- MRCRv2 (8 needles, 32k–64k): **92.0%**
- MRCRv2 (8 needles, 64k–128k): **85.6%**
- MRCRv2 (8 needles, 128k–256k): **77.0%**
- BrowseComp Long Context 128k: **92.0%**
- BrowseComp Long Context 256k: **89.8%**
- GraphWalks bfs <128k: **94.0%**
- Graphwalks parents <128k: **89.0%**

### Normalized scores (1–100)

- **Tool use: 72/100.** GDPval 70.9% (SOTA), τ²-Bench Telecom 85%, Terminal-Bench Hard 47%. Strong knowledge-work agentic capability but Terminal-Bench Hard is moderate. Capped by Terminal-Bench Hard.
- **Reasoning: 85/100.** GPQA Diamond 92.4%, AIME 100%, FrontierMath 40.3%, HLE 38%. Excellent math and science reasoning; FrontierMath and HLE show room for improvement on hardest tasks.
- **Context window: 78/100.** 272K token context window. Good but not class-leading. MRCRv2 results show strong long-context retrieval up to 256K.
- **Multimodal: 70/100.** Text and image input. CharXiv Reasoning 88.7%. No video or audio input. Solid but not class-leading multimodal understanding.
- **Coding: 78/100.** SWE-bench Pro 55.6%, SWE-bench Verified 80.0%, LiveCodeBench 89%. Strong LiveCodeBench but SWE-bench Pro below frontier leaders.
- **Cost efficiency: 65/100.** $1.75/1M input and $14/1M output — moderate pricing. Cached input at $0.17/1M helps. More expensive than some competitors but token-efficient.
- **Overall Score: 77/100.** Mean of five quality dims (72+85+78+70+78)/5 = 76.6 → 77. Best fit: professional knowledge work, science/math reasoning, and agentic coding where balanced performance matters.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
