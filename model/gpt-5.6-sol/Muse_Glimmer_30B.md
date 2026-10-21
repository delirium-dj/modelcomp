# GPT-5.6 Sol — findings by Muse Glimmer 30B

- Source: OpenAI/gpt-5.6-sol
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's reasoning/coding specialist for agentic software engineering, 1M/128K context, built for tool-heavy agentic coding with state-of-the-art coding index.
- **Provider / access:** OpenAI API `openai/gpt-5.6-sol`, ChatGPT, Codex. Responses API with Programmatic Tool Calling. No Free ID on Zen.
- **Release / knowledge:** 2026-07-09 general availability; knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1M total / 128K output, verified via OpenAI launch post.
- **Modalities:** Text, image in; text out. Reasoning yes, tool calls yes, JSON mode.
- **Pricing (as of 2026-07-09):** Paid $5 / $30 per 1M input / output. Cache writes 1.25× input, reads at 90% discount per OpenAI pricing.
- **Architecture:** proprietary

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.8%** (OpenAI GPT-5.6 launch post, 2026-07-09)
- GDPval-AA v2: **1,747.8 Elo** (OpenAI launch post)
- OSWorld 2.0: **62.6%** (OpenAI launch post)
- BrowseComp: **90.4%** (OpenAI launch post)
- AutomationBench: **18.1%** (OpenAI launch post)
- Toolathlon: **58%** (OpenAI launch post)

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (OpenAI launch post)
- Artificial Analysis Intelligence Index v4.1: **58.9 Index score** (OpenAI launch post)
- FrontierMath Tier 1-3 v2: **89%** (OpenAI launch post)
- FrontierMath Tier 4 v2: **83%** (OpenAI launch post)
- Agents' Last Exam: **52.7%** (OpenAI launch post)
- Management Consulting Tasks: **43.2%** (OpenAI launch post)
- Big Finance Bench: **53%** (OpenAI launch post)

Coding:

- Artificial Analysis Coding Agent Index v1.1: **80 Index score** (OpenAI launch post, SOTA)
- SWE-Bench Pro: **64.6%** (OpenAI launch post)
- DeepSWE v1.1: **72.7%** (OpenAI launch post)
- Terminal-Bench 2.1: **88.8%** (OpenAI launch post)

Long context:

- OpenAI MRCR v2 8-needle 256K-512K: **91.5%** (OpenAI launch post)
- OpenAI MRCR v2 8-needle 512K-1M: **73.8%** (OpenAI launch post)
- GraphWalks BFS 256k f1: **90.7%** (OpenAI launch post)
- GraphWalks BFS 1mil f1: **77.1%** (OpenAI launch post)

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 88.8% and GDPval 1,747.8 Elo are frontier-level; capped by AutomationBench 18.1% and modest OSWorld.
- **Reasoning: 93/100.** GPQA Diamond 94.6% and FrontierMath 89% are top-tier; Intelligence Index 58.9 limits the top band.
- **Context window: 98/100.** 1M total with 128K output and MRCR 91.5% at 256-512K; slight drop to 73.8% at 512K-1M caps at 98.
- **Multimodal: 68/100.** Image input with text output; no audio/video generation.
- **Coding: 92/100.** Coding Agent Index 80 SOTA, Terminal-Bench 88.8%, DeepSWE 72.7%, SWE-Pro 64.6%; capped below 95 by SWE-Pro.
- **Cost efficiency: 45/100.** Paid $5/$30 per 1M with no free tier.
- **Overall Score: 88/100.** Mean of Tool, Reasoning, Context, Multimodal, Coding = 88; best-fit for high-end agentic coding specialist with premium pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
