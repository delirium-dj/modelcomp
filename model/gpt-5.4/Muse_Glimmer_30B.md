# GPT-5.4 — findings by Muse Glimmer 30B

- Source: OpenAI / GPT-5.4
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's 1.05M model with native computer use for professional work; TB 81.8% #2, SWE-Pro 59.1% #2, GPQA 93.3%. Designed for professional work with native computer-use capabilities, tool search, and up to 1M context.
- **Provider / access:** OpenAI API `openai/gpt-5.4`; OpenRouter `openai/gpt-5.4`; ChatGPT as GPT-5.4 Thinking / Pro. Chat Completions / Responses API.
- **Release / knowledge:** 2026-03-05 release announced; knowledge cutoff not published.
- **IDs:** `openai/gpt-5.4`; no Free ID on OpenCode Zen (`noFreeId: true`).
- **Context window:** 1.0-1.05M (1,050,000 listed). Up to 1M tokens for computer-use agents, standard 272K with 2× overage rate beyond. Verified by OpenAI Introducing GPT-5.4 announcement.
- **Modalities:** Text, image in; text out. Native computer-use, vision, tool calling, reasoning.
- **Pricing (as of 2026-10-20):** $2.50 / $15.00 per 1M tokens input/output API standard; $1.25-$2.50 in / $7.50-$15.00 out per 1M per meta tiers. No free tier.
- **Architecture:** Proprietary frontier model. Total / active params not disclosed.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Toolathlon: **54.6%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- BrowseComp: **82.7%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- MCP Atlas: **67.2%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- Tau2-bench Telecom: **98.9%** (OpenAI Introducing GPT-5.4, Mar 5 2026)

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- GDPval: **83.0%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- Humanity's Last Exam (with tools): **52.1%** (OpenAI Introducing GPT-5.4, Mar 5 2026)

Coding:

- SWE-Bench Pro (Public): **57.7%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- Terminal-Bench 2.0: **75.1%** (OpenAI Introducing GPT-5.4, Mar 5 2026)

Long context:

- OpenAI MRCR v2 8-needle 512K–1M: **36.6%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- Graphwalks BFS 256K–1M: **21.4%** (OpenAI Introducing GPT-5.4, Mar 5 2026)

Multimodal / vision:

- MMMU Pro (no tools): **81.2%** (OpenAI Introducing GPT-5.4, Mar 5 2026)
- OSWorld-Verified: **75.0%** (OpenAI Introducing GPT-5.4, Mar 5 2026)

### Normalized scores (1–100)

- **Tool use: 70/100.** Toolathlon 54.6% and MCP Atlas 67.2% show strong multi-tool orchestration, BrowseComp 82.7% strong persistent search. Capped below 80 by Toolathlon and parallel tool-yield latency.
- **Reasoning: 88/100.** GPQA Diamond 92.8% and GDPval 83.0% indicate professional reasoning strength. Capped by FrontierMath Tier 1-3 47.6% and long-horizon math degradation.
- **Context window: 95/100.** 1M token claim verified, MRCR 8-needle 36.6% at 512K-1M and Graphwalks 21.4% at 256K-1M show usable long context with degradation at extreme lengths.
- **Multimodal: 80/100.** MMMU Pro 81.2% no-tools and OSWorld-Verified 75.0% demonstrate image+computer-use competence. Text-only output and no audio/video limits score.
- **Coding: 72/100.** Terminal-Bench 2.0 75.1% and SWE-Bench Pro 57.7% show solid coding with computer-use aid. Capped by SWE-Bench Pro below 60%.
- **Cost efficiency: 65/100.** $2.50/$15 per 1M API standard, higher than earlier GPT-5.2 pricing; token efficiency gains offset partially but remains paid tier with no free ID.
- **Overall Score: 81/100.** Mean of Tool 70, Reasoning 88, Context 95, Multimodal 80, Coding 72. Best fit for professional knowledge work with native computer use.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
