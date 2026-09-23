# GPT-5.6 Luna — findings by Ling 3.0

> Provided by: **Ling 3.0 (OpenAI/gpt-5.6-luna)** — 2026-09-23 UTC
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier, offering strong reasoning and agentic capabilities at a fraction of flagship pricing.
- **Provider / access:** OpenAI (`openai/gpt-5.6-luna`, `gpt-5.6-luna`)
- **Release / knowledge:** July 9, 2026
- **IDs:** openai/gpt-5.6-luna
- **Context window:** 1,050,000 / 128K output tokens
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-09-23):** Paid $0.20/$1.20 per 1M tokens (no Zen Free ID)
- **Architecture:** Part of GPT-5.6 family (Sol/Terra/Luna tiers); Luna is the fastest/cheapest variant

### Raw benchmarks found
Agent / tool use:
- Terminal-Bench 2.1: **84.7%** (OpenAI launch table, mirrored by tech-insider.org)
- Terminal-Bench 4.0 (max reasoning): **14.3%** (benchlm.ai)
- Agents' Last Exam: **50.3%** (OpenAI launch table)
- HealthBench Consensus: **95.1%** (llm-stats.com)

Reasoning / knowledge:
- GPQA Diamond: **92.3%** (llm-stats.com, OpenAI launch table)
- HLE (Humanity's Last Exam): **37.2%** (tech-insider.org, independent max-effort)
- ARC-AGI-2: **59.5%** (tech-insider.org, independent)
- Artificial Analysis Intelligence Index: **51** (tech-insider.org)

Coding:
- SWE-bench Pro (Sol): **62.7%** (OpenAI launch table, Sol variant)
- AA Coding Agent Index: **74.6** (tech-insider.org)
- SWE-bench Verified: **not directly published for Luna** (Sol at 62.7% on Pro)

Long context:
- No specific long-context benchmark found; 1.05M context window is frontier-class

### Normalized scores (1-100)
- **Tool use: 75/100.** Terminal-Bench 2.1 at 84.7% is strong agentic performance; Agents' Last Exam 50.3% and Terminal-Bench 4.0 14.3% show mixed results across harnesses; HealthBench Consensus 95.1% demonstrates reliable tool-following in multi-turn scenarios.
- **Reasoning: 75/100.** GPQA Diamond 92.3% is near-frontier; however, HLE 37.2% and Intelligence Index 51 show that Luna's reasoning is optimized for efficiency rather than maximum depth; ARC-AGI-2 59.5% is solid.
- **Context window: 90/100.** 1,050,000 token context window is excellent and at the frontier standard; supports large codebases and long documents.
- **Multimodal: 65/100.** Supports image input but multimodal-specific benchmarks are not prominently reported; primarily text-focused with image as supplementary input.
- **Coding: 70/100.** AA Coding Agent Index 74.6 and Terminal-Bench 2.1 84.7% indicate strong coding capability; SWE-bench Pro not directly published for Luna (Sol at 62.7%); LiveCodeBench data not found.
- **Cost efficiency: 100/100.** No free tier (noFreeId: true), but at $0.20/$1.20 per 1M, Luna is the most cost-effective GPT-5.6 variant; ~$0.21 per task according to tech-insider.org.
- **Overall Score: 75/100.** Strong reasoning (GPQA 92.3%) and agentic coding (Terminal-Bench 84.7%) with excellent context window, making it a balanced cost-performance tier within GPT-5.6.

---

## Signature
- Provided by: **Ling 3.0 (OpenAI/gpt-5.6-luna)** — 2026-09-23
- Method: Public internet research; scores are normalized 1-100 interpretations.

---

## Submission checklist (delete before finishing)
1. All placeholders replaced
2. Filename is model/gpt-5.6-luna/Ling_3.0.md
3. Relative links resolve
4. No raw benchmark invented
5. Zero verified benchmarks → Ling_3.0.md.excluded
