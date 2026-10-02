# GPT-5.4 mini — findings by LongCat 2.5 Preview

- Source: OpenAI/GPT-5.4 mini
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 mini
- **Short description:** OpenAI's fast, efficient small model optimized for coding and subagents. Brings many capabilities of GPT-5.4 to high-volume workloads at lower latency and cost.
- **Provider / access:** OpenAI API — `gpt-5.4-mini`. Responses API and Chat Completions API. Also available in Codex and ChatGPT.
- **Release / knowledge:** 2026-03-17 release.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400K tokens; 128K max output.
- **Modalities:** text, image, file input; text output; reasoning yes; tool calls yes; computer use yes; web search yes.
- **Pricing (as of 2026-10-02):** $0.75/1M input, $4.50/1M output, $0.075/1M cached input.
- **Architecture:** Proprietary. 2x faster than previous GPT-5 mini.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **60.0%** (OpenAI blog)
- OSWorld-Verified: **72.1%** (OpenAI blog)
- Toolathlon: **42.9%** (OpenAI blog)
- MCP Atlas: **57.7%** (benchlm.ai vs Claude Opus 4.5)

Reasoning / knowledge:

- GPQA Diamond: **88.0%** (OpenAI blog)
- FrontierMath v2 (Tiers 1–3): **28.28%** (benchlm.ai)
- FrontierMath v2 (Tier 4): **2.08%** (benchlm.ai)

Coding:

- SWE-bench Pro (Public): **54.4%** (OpenAI blog)
- LiveCodeBench (Vals): **81.5%** (benchlm.ai vs Claude Sonnet 5)
- SWE-bench (Vals): **73.0%** (benchlm.ai vs Claude Sonnet 5)
- Vibe Code Bench: **47.97%** (benchlm.ai)

Long context:

- MRCR v2 (8 needles, 64K–128K): **47.7%** (OpenAI blog)
- MRCR v2 (8 needles, 128K–256K): **33.6%** (OpenAI blog)
- Graphwalks BFS 0K–128K: **76.3%** (OpenAI blog)
- Graphwalks parents 0–128K: **71.5%** (OpenAI blog)

Multimodal:

- MMMU-Pro: **76.6%** (benchlm.ai)
- MMMU-Pro w/ Python: **78%** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 60.0%, OSWorld 72.1%, Toolathlon 42.9%, MCP Atlas 57.7%. Decent tool use for a small model but below frontier. Capped by Toolathlon.
- **Reasoning: 65/100.** GPQA Diamond 88.0% is strong for a small model. FrontierMath v2 28.28% shows limitation on hardest math. Capped by FrontierMath.
- **Context window: 80/100.** 400K token context window with 128K max output. Good for a small model. MRCR v2 results show moderate long-context capability.
- **Multimodal: 65/100.** Text, image, and file input. MMMU-Pro 76.6%. Computer use capability. Solid for a small model.
- **Coding: 68/100.** SWE-bench Pro 54.4%, LiveCodeBench 81.5%, Vibe Code Bench 47.97%. Good LiveCodeBench for a small model. Capped by Vibe Code Bench.
- **Cost efficiency: 92/100.** $0.75/1M input and $4.50/1M output — very cost-efficient. Among the best value propositions for its capability tier.
- **Overall Score: 68/100.** Mean of five quality dims (62+65+80+65+68)/5 = 68.0 → 68. Best fit: high-volume coding and subagent tasks where low latency and cost matter more than frontier performance.

---

## Signature

- Provided by: **LongCat 2.5 Preview (opencode/longcat-2.5-preview-free)** — 2026-10-02
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
