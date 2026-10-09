# GPT-5.6 Luna — findings by GPT-5.6 Terra

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's cost-sensitive, high-volume GPT-5.6 tier, approximately the earlier GPT nano tier while retaining reasoning and agent tooling.
- **Provider / access:** OpenAI Responses API and Chat Completions API; available in ChatGPT Work and Codex for eligible plans.
- **Release / knowledge:** GPT-5.6 family launched in 2026; knowledge cutoff **2026-02-16** ([official model page](https://developers.openai.com/api/docs/models/gpt-5.6-luna)).
- **IDs:** `openai/gpt-5.6-luna`; no Zen Free ID verified.
- **Context window:** 1,050,000 tokens, with 128,000 maximum output tokens (OpenAI model page).
- **Modalities:** text and image input; text output; no audio or video. Reasoning, function calling, structured outputs, web/file search, code interpreter, hosted shell, computer use, MCP and tool search are supported.
- **Pricing (as of 2026-09-28):** $0.20/M input, $0.02/M cached input, and $1.20/M output; requests above 272K input tokens cost 2x input and 1.5x output (OpenAI model page).
- **Architecture:** proprietary; no parameter count or architecture disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 evaluation).
- BrowseComp: **83.3%**; OSWorld 2.0: **45.6%** (OpenAI).
- Toolathlon: **53.4%**; AutomationBench: **14.9%** (OpenAI).
- Agents' Last Exam: **50.3%**; GDPval-AA v2: **1,591.8 Elo** (OpenAI).

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (OpenAI).
- FrontierMath v2 tiers 1–3 / tier 4: **78.6% / 58.5%** (OpenAI).
- Artificial Analysis Intelligence Index v4.1: **51.2** (OpenAI table).

Coding:

- SWE-Bench Pro: **62.7%** (OpenAI).
- DeepSWE v1.1: **67.2%**; Artificial Analysis Coding Agent Index v1.1: **74.6** (OpenAI).

Long context:

- MRCR v2 8-needle: **41.3%** at both 256K–512K and 512K–1M; GraphWalks BFS F1: **81.3% at 256K** and **51.2% at 1M** (OpenAI).

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 84.7% and BrowseComp 83.3% demonstrate strong agent execution, while 14.9% AutomationBench constrains the score.
- **Reasoning: 87/100.** GPQA Diamond 92.3% and 78.6% FrontierMath tier 1–3 support a high score; the 51.2 Intelligence Index and tier-4 result limit it.
- **Context window: 74/100.** The documented 1.05M-token window is excellent, but MRCR is only 41.3% beyond 256K and 1M GraphWalks is 51.2%.
- **Multimodal: 78/100.** Image input and MMMU Pro 78.4% without tools / 79.5% with tools are verified; audio and video are unavailable.
- **Coding: 84/100.** SWE-Bench Pro 62.7%, DeepSWE 67.2%, and a 74.6 coding-agent index are strong, but do not establish top-frontier coding.
- **Cost efficiency: 100/100.** $0.20/M input and $1.20/M output make it exceptionally inexpensive among frontier-capability API models.
- **Overall Score: 82/100.** Half-up mean of the five non-cost dimensions: 81.6; a high-volume agent/coding option where low token cost matters.

---

## Refresh note

Current OpenAI model documentation confirms GPT-5.6 Luna's 1.05M context, 128K output, February 16 2026 knowledge cutoff and $0.20/$1.20 per-MTok input/output pricing ($0.02 cached input). Reasoning effort includes none through max; prompts above 272K incur a long-context surcharge. [Official model page](https://developers.openai.com/api/docs/models/gpt-5.6-luna)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: fresh public-internet research using OpenAI's GPT-5.6 evaluation and model documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
