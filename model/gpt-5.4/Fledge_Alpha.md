# GPT-5.4 — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's Mar 5, 2026 unified mainline model (folds in GPT-5.3-Codex's coding focus, native computer use, 1M context); superseded as flagship by GPT-5.5 six weeks later.
- **Provider / access:** OpenAI API (`gpt-5.4`), ChatGPT Plus/Team/Pro, Codex.
- **Release / knowledge:** 2026-03-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,000,000 tokens (922K input, 128K max output); >272K input reprices the whole session to ~$5/$22.50.
- **Modalities:** text + image in; text out; reasoning none→xhigh; native computer use/tool search (47% token reduction).
- **Pricing (as of 2026-10-02):** $2.50/M in, $0.25/M cache, $15/M out; Batch/Flex 50%; Priority 2x; >272K doubles input.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **75.0%** (above the 72.4% human baseline — first general-purpose OpenAI model to fold in computer use)
- Terminal-Bench 2.0: **75.1%** (general-purpose leader among GPT-5 family, slightly behind GPT-5.3-Codex's 77.3%)
- GDPval (wins/ties): **83.0%**; WebArena-Verified: 67.3%
- Spreadsheet modeling: 87.5%; IB modeling tasks: 87.3%

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (AA-confirmed 92.0% in their harness)
- HLE (with tools): **52.1%**; FrontierMath Tier 1–3: 47.6%; Tier 4: 27.1%
- ARC-AGI-2: **73.3%**; AA Intelligence Index: **57** (xhigh; tied with Gemini 3.1 Pro at launch)

Coding:

- SWE-bench Verified: **77.2–80.0%** (OpenAI's own aggregate and third-party tracker both reported; Anthropic's restatement differs — use ~78)
- SWE-Bench Pro (Public): **57.7%** (leads 5.3-Codex's 56.8%)
- HumanEval 95.1%; MATH 97.2%

Long context:

- MRCR v2 8-needle: **86.0%** through 128K, dropping to **36.6%** at 512K–1M (the weakest documented long-context result among 1M-window peers)
- GraphWalks BFS 0–128K: **93.0%**; at 256K–1M: **21.4%**

### Normalized scores (1–100)

- **Tool use: 82/100.** OSWorld 75% and Terminal-Bench 2.0 75.1% were frontier general-purpose results at launch; no verified GDPval-AA Elo row beyond the 83% win-rate.
- **Reasoning: 81/100.** GPQA 92.8% and AA Index 57 tied-for-top at launch; FrontierMath Tier 4 27.1% modest.
- **Context window: 85/100.** Native 1M window, but MRCR collapses to 36.6% above 512K — usable for breadth, not strict full-window recall.
- **Multimodal: 65/100.** Text + image in; no audio/video input.
- **Coding: 78/100.** SWE-bench Verified ~78% and Pro 57.7% at launch matched 5.3-Codex; superseded by GPT-5.5's 88.7%.
- **Cost efficiency: 75/100.** $2.50/$15 undercuts Claude Opus 4.6 by ~2x, but 272K pricing cliff and lack of audio/video cap it.
- **Overall Score: 78/100.** Mean of the five quality dims; the March 2026 unification release — now mid-lineup below GPT-5.5/5.6 and GPT-6 Astra.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch materials, Analytics DeepLearning.AI, DigitalApplied, HokAI, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
