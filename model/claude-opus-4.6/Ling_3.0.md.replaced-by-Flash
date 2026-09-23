# Claude Opus 4.6 — findings by Ling 3.0

> Provided by: **Ling 3.0 (anthropic/claude-opus-4-6)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's most capable model with industry-leading coding and reasoning performance on SWE-bench and GPQA benchmarks.
- **Provider / access:** Anthropic; API ID: `claude-opus-4-6-20260205`
- **Release / knowledge:** February 5, 2026; knowledge cutoff August 2025
- **IDs:** anthropic/claude-opus-4-6
- **Context window:** 1,000,000 tokens (up to 128,000 output)
- **Modalities:** text, image input; text output
- **Pricing (as of 2026-09-23):** $5.00 / $25.00 per 1M input/output tokens
- **Architecture:** Transformer-based dense model; 1M context window with extended thinking

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.0: **65.4%** (benchlm.ai / tbench.ai)
- Terminal-Bench 2.1: **57.3%** (benchlm.ai via comparison)
- OSWorld-Verified: **72.7%** (benchlm.ai)
- BrowseComp: **83.7%** (benchlm.ai)
- Claw-Eval: **70.4%** (benchlm.ai)
- MCP-Atlas: **77.3%** (benchlm.ai via comparison)

Reasoning / knowledge:
- GPQA Diamond: **91.3%** (benchlm.ai / claude5.ai)
- HLE: **53.0%** (benchlm.ai)
- SimpleQA-Verified: **46.2%** (HuggingFace model card)
- MMLU-Pro: **89.1%** (HuggingFace model card)

Coding:
- SWE-bench Verified: **80.8%** (benchlm.ai / llm-stats.com)
- SWE-bench Pro: **53.4%** (benchlm.ai)
- SWE-bench Verified* (independent): **75.6%** (benchlm.ai)
- LiveCodeBench Pro: **70.7%** (benchlm.ai)
- SWE-Rebench: **65.3%** (benchlm.ai)
- FrontierCode 1.1 Main: **26.9%** (benchlm.ai)

Long context:
- MRCR v2 128K-256K: **59.2%** (benchlm.ai)

### Normalized scores (1-100)
- **Tool use: 78/100.** OSWorld-Verified at 72.7% and BrowseComp at 83.7% show strong web-browsing and agentic capability. Terminal-Bench 2.0 at 65.4% is moderate. Claw-Eval at 70.4% adds agentic tool use strength.
- **Reasoning: 93/100.** GPQA Diamond at 91.3% is elite-level graduate science reasoning. HLE at 53.0% is among the highest scores recorded. MMLU-Pro at 89.1% confirms broad knowledge.
- **Context window: 70/100.** 1M token context window is standard but not the largest. MRCRv2 at 59.2% shows reasonable long-context retention.
- **Multimodal: 45/100.** Supports text and image input but lacks audio, video, and PDF modalities compared to Gemini models. No dedicated multimodal benchmarks found.
- **Coding: 91/100.** SWE-bench Verified at 80.8% is industry-leading. LiveCodeBench Pro at 70.7% and SWE-Rebench at 65.3% confirm strong coding agent performance. SWE-bench Pro at 53.4% is a known harder subset.
- **Cost efficiency: 35/100.** At $5.00/$25.00 per 1M tokens, among the most expensive models. Proprietary licensing with no free tier.
- **Overall Score: 75/100.** Math.round((78+93+70+45+91)/5) = Math.round(75.4) = 75. Strong reasoning and coding offset a lower multimodal and cost efficiency score.

---

## Signature
- Provided by: **Ling 3.0 (anthropic/claude-opus-4-6)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/claude-opus-4.6/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
