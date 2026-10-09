# Claude Opus 4.6 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.6
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Claude Opus 4.6 is an Anthropic flagship model with thinking support for complex multi-step work, coding, and document reasoning.
- **Provider / access:** Anthropic Claude API and cloud partners.
- **Release / knowledge:** Public coverage places Opus 4.6 around February 2026.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** Repo metadata tracks 200K; public discussion of some Opus 4.6 contexts mentioned larger research/route settings.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-09):** Paid Anthropic Opus-tier pricing; exact route pricing varies by cloud partner.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Claude Opus 4.6 System Card: reports qualitative issues in complex codebase tasks and discusses SWE-bench Verified in capability evaluations (`https://www-cdn.anthropic.com/14e4fb01875d2a69f646fa5e574dea2b1c0ff7b5.pdf`).
- Putnam 2025/Rocq-MCP experiment: Claude Opus 4.6 with MCP tools autonomously proved **10 of 12** Putnam 2025 problems in Rocq.
- Community analysis reports long-context retrieval improved from **18.5%** to **76%** on Anthropic internal benchmark versus Opus 4.5 (`https://www.reddit.com/r/ClaudeAI/comments/1qx6tfj/claude_opus_46_analysis_context_handling_vs/`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- System card and release analysis position Opus 4.6 as a flagship reasoning-capable model, but exact GPQA/HLE rows were not exposed in accessible text.
- Financial Touchstone benchmark paper reports Claude Opus 4.6 achieved the highest accuracy, **88.4%**, across financial text-comprehension tasks.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- System card discusses SWE-bench Verified capability evaluation and notes codebase planning weaknesses from participants.
- System card snippets report SWE-bench Verified with max effort and **62.7%** with high effort.
- SWE-bench Verified: **62.7% high-effort public snippet**
- LiveCodeBench: **no verified public score found**

Long context:

- MRCR v2 8-needle 1M variant: **76%**, from Anthropic launch coverage.

### Normalized scores (1–100)

- **Tool use: 86/100.** MCP Putnam performance and Claude tool lineage support strong tool use, with codebase caveats.
- **Reasoning: 88/100.** Financial Touchstone 88.4 and Opus flagship positioning support high reasoning.
- **Context window: 82/100.** 200K tracked context is solid, and internal retrieval improved strongly, but not 1M-class in repo metadata.
- **Multimodal: 70/100.** Text and image input only.
- **Coding: 84/100.** SWE-bench Verified 62.7 high-effort and codebase evidence are strong but below later Claude models.
- **Cost efficiency: 55/100.** Opus-tier pricing is expensive relative to newer and cheaper alternatives.
- **Overall Score: 82/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude Opus reasoning/coding workflows with strong retrieval needs.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: refreshed public internet research and comparison against the 2026-10-05 file; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
