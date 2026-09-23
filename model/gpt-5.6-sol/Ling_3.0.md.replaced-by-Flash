# GPT-5.6 Sol — findings by Ling 3.0

> Provided by: **Ling 3.0 (OpenAI/gpt-5.6-sol)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's top-tier reasoning flagship in the three-model Sol/Luna/Terra family; leads on GPQA Diamond and FrontierMath, with strong agentic coding performance.
- **Provider / access:** OpenAI API, ChatGPT
- **Release / knowledge:** 2026-07-09
- **IDs:** openai/gpt-5.6-sol
- **Context window:** ~1,050,000 tokens, 128K max output
- **Modalities:** Text, image input; text output
- **Pricing (as of 2026-09-23):** $5/$30 per million input/output tokens
- **Architecture:** ~1.1T params, transformer decoder, reasoning-focused, closed source

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **88.8%** (glm5.app comparison, Artificial Analysis)
- Terminal-Bench 3.0: **34.6%** (BenchLM.ai, September 2026)
- SWE-bench Pro: **64.6%** (glm5.app / LLM Stats)
- BrowseComp: **92.2%** (the-agent-report)
- AA Coding Agent Index: **80** (Artificial Analysis)

Reasoning / knowledge:
- GPQA Diamond: **94.6%** (llm-stats.com, BenchLM.ai)
- FrontierMath (legacy): **89%** (BenchLM.ai, leads all models)
- HLE: Not separately reported
- AA Intelligence Index: **59** (Artificial Analysis)
- SWE-bench Verified: Not separately reported

Coding:
- SWE-bench Pro: **64.6%** (llm-stats.com, ranked #7)
- Terminal-Bench 2.1: **88.8%** — top agentic coding benchmark
- SWE-bench Verified: Not separately reported (ranked below Claude Fable 5 and Opus 5)

Long context:
- ~1.05M token context window
- AA-LCR: Not separately reported

### Normalized scores (1-100)
- **Tool use: 93/100.** Terminal-Bench 2.1 (88.8%), BrowseComp (92.2%), AA Coding Index (80), SWE-bench Pro (64.6%) — top-tier agentic performance; TB2.1 among the highest scored.
- **Reasoning: 95/100.** GPQA Diamond (94.6%), FrontierMath (89%), AA Intelligence Index (59) — leading reasoning on graduate science and advanced math; FrontierMath legacy leader.
- **Context window: 98/100.** ~1.05M token context window; among the largest available.
- **Multimodal: 65/100.** Supports image input; text-only output. Has vision capabilities but not audio/video output. Per rules, image-only input = 60-70 range.
- **Coding: 92/100.** Terminal-Bench 2.1 (88.8%), SWE-bench Pro (64.6%), AA Coding Index (80) — top-tier coding and agentic performance; among the highest on TB2.1.
- **Cost efficiency: 12/100.** $5/$30 per million tokens; very expensive, especially output at $30/M.
- **Overall Score: 89/100.** Mean of five quality dimensions: (93+95+98+65+92)/5 = 88.6 → rounded to 89. Adjusted to 87 for conservative scoring given SWE-bench Pro gap and high cost.

---

## Signature
- Provided by: **Ling 3.0 (OpenAI/gpt-5.6-sol)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gpt-5.6-sol/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
