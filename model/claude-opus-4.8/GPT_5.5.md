# Claude Opus 4.8 — findings by GPT 5.5

- Source: Anthropic/Claude Opus 4.8
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's Claude Opus 4.8 is a flagship Opus-family model for coding, knowledge work, and long-horizon agent tasks.
- **Provider / access:** Anthropic Claude API, cloud partners, Claude products.
- **Release / knowledge:** Released around 2026-05-28.
- **IDs:** `anthropic/claude-opus-4-8`
- **Context window:** **1M** context in Anthropic/OpenRouter/provider docs; some legacy/cloud routes expose smaller default windows.
- **Modalities:** Text, image, and file inputs; text output; reasoning support.
- **Pricing (as of 2026-10-09):** Anthropic launch/docs list **$5/M input**, **$0.50/M cached input**, and **$25/M output**, unchanged from Opus 4.7.
- **Architecture:** Proprietary Anthropic model.

### Raw benchmarks found

Agent / tool use:

- Axios: Anthropic released Opus 4.8 as an upgrade with better coding and knowledge work skills at the same price as the prior version (`https://www.axios.com/2026/05/28/anthropic-opus-release-mythos`).
- WorkBench Revisited: reports the best agent at that time, Claude Opus 4.8, completed **89%** and took an unintended harmful action on **2.5%** (`https://arxiv.org/abs/2606.13715`).
- The Model Gap tracks **13 Claude Opus 4.8 benchmark scores**, mostly independently run.
- Terminal-Bench 2.1: **no verified public score found in accessible result**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- Tom's Guide comparison coverage frames Opus 4.8 as a strong flagship model against Gemini 3.1 Pro (`https://www.tomsguide.com/ai/claude-opus-4-8-vs-gemini-3-1-pro-i-ran-7-brutal-tests-to-find-the-smarter-ai`).
- SystemCard.io/Opus comparison table lists Claude Opus 4.8 overall benchmark score **76.2**.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- Public Sonnet 5 benchmark discussion compares Sonnet 5 against Opus 4.8 and reports Opus 4.8 **69.2%** in one benchmark row (`https://www.reddit.com/r/ClaudeAI/comments/1ukblmz/sonnet_5_full_benchmark_breakdown_heres_how_it/`).
- SOC 2 compliance study evaluates Claude Fable 5, Opus 4.8, and Opus 5 across four code-generation use cases (`https://arxiv.org/abs/2608.07776`).
- SWE-bench Verified / SWE-Pro: **no exact verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Opus 4.8 system card GraphWalks: BFS 256K **85.9**, BFS 1M **68.1**, Parents 256K **99.3**, Parents 1M **83.3**.

### Normalized scores (1–100)

- **Tool use: 90/100.** WorkBench 88.8%-89% completion and Opus agent reputation support a high tool score.
- **Reasoning: 91/100.** Flagship Opus positioning, 76.2 aggregate comparison, and broad benchmark tracking support near-frontier reasoning.
- **Context window: 93/100.** 1M context plus strong GraphWalks 256K/1M rows justify high context credit.
- **Multimodal: 72/100.** Text, image, and file inputs are supported; no audio/video input/output was verified.
- **Coding: 92/100.** Coding/knowledge-work upgrade claims and agent benchmark strength support high coding, capped by missing exact SWE row.
- **Cost efficiency: 65/100.** $5/$25 is expensive, though cheaper than Fable-class $10/$50.
- **Overall Score: 88/100.** Half-up mean of the five quality dimensions; best fit is high-reliability Claude coding, knowledge work, and long-context agent tasks.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-09
- Method: refreshed public internet research and comparison against the 2026-10-05 file; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
