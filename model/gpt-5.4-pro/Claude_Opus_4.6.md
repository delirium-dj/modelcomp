# GPT-5.4 Pro — findings by Claude Opus 4.6

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's premium high-reasoning variant of GPT-5.4, released March 5, 2026. Designed for complex agentic workflows with native computer-use capabilities. Now a previous-generation model superseded by GPT-5.5, GPT-5.6, and GPT-6 families.
- **Provider / access:** OpenAI API (`gpt-5.4-pro`). Responses API and Chat Completions API.
- **Release / knowledge:** 2026-03-05 release; knowledge cutoff not explicitly confirmed (likely late 2025).
- **IDs:** `openai/gpt-5.4-pro`
- **Context window:** 1,050,000–1,100,000 tokens total; max output 128,000 tokens (verified via OpenAI docs and OpenRouter).
- **Modalities:** Text + image in; text out; reasoning effort settings (medium, high, xhigh); tool calls; native computer use (screenshots + mouse/keyboard); JSON mode.
- **Pricing (as of 2026-03):** $30.00 / $180.00 per 1M tokens (input / output). Premium tier.
- **Architecture:** Proprietary; parameter count undisclosed. Part of the GPT-5.4 family.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (portkey.ai).
- OSWorld-Verified: **75.0%** (computer use / desktop interaction; OpenAI, dev.to).
- BrowseComp: **89.3%** (agentic web research; ai-tldr.dev, apxml.com).
- GDPval: no verified public score found.
- Tau3-Banking / Tau2-Bench: no verified public score found.
- Claw-Eval / ClawProBench: no verified public score found.
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (ai-tldr.dev, apxml.com).
- ARC-AGI-2: **83.3%** (abstract reasoning; apxml.com).
- FrontierMath (Tier 4): **38.0%** (expert mathematics; apxml.com).
- HLE: no verified public score found.
- LCR / MLCR: no verified public score found.
- CritPt: no verified public score found.
- Omniscience Accuracy / Hallucination Rate: no verified public score found.

Coding:

- SWE-bench Pro: **57.7%** (OpenAI).
- SWE-bench Verified: not separately reported.
- LiveCodeBench: no verified public score found.
- SciCode / AA-SciCode: no verified public score found.
- Vibe Code Bench: no verified public score found.
- DeepSWE / Coding Index: no verified public score found.

Long context:

- 1.05–1.1M-token window confirmed. No specific MRCR / RULER / GraphWalks retrieval score published.

### Normalized scores (1–100)

- **Tool use: 87/100.** Terminal-Bench 2.0 at 75.1% and BrowseComp 89.3% show strong agentic capabilities; OSWorld-Verified 75.0% confirms computer-use proficiency. Capped by being a previous-gen model with no Terminal-Bench 4.0 data.
- **Reasoning: 91/100.** GPQA Diamond 94.4% is excellent; ARC-AGI-2 83.3% strong; FrontierMath 38.0% shows challenging frontier math weakness. Capped by lack of HLE/CritPt data.
- **Context window: 87/100.** 1.05M+ window with 128K output matches top tier. No formal long-context retrieval benchmarks. Capped by absence of MRCR/RULER data.
- **Multimodal: 76/100.** Text + image input with native computer-use vision (screenshots, mouse/keyboard interaction). No audio/video input; text-only output. Capped by no audio/video modalities.
- **Coding: 82/100.** SWE-bench Pro 57.7% was competitive at release but has been significantly exceeded by later models (Claude Opus 5.5 at 89.9%). Terminal-Bench 2.0 at 75.1% is solid. Capped by age and surpassed benchmarks.
- **Cost efficiency: 20/100.** $30/$180 per 1M is extremely expensive premium pricing. Capped by very high absolute cost.
- **Overall Score: 85/100.** Mean of (87 + 91 + 87 + 76 + 82) / 5 = 84.6, rounded to 85. Strong reasoning model showing its age against late-2026 frontier.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-10-03
- Method: Public internet research (OpenAI docs, portkey.ai, apxml.com, dev.to, Wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
