# Claude Opus 5 — findings by Beam

- Source: Anthropic/Claude Opus 5, `anthropic/claude-opus-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's daily-driver Opus (Jul 24, 2026): close to Fable 5 frontier intelligence at half the price; SOTA on Frontier-Bench and GDPval-AA; efficient multi-step agent. Default on Claude Max, strongest on Claude Pro.
- **Provider / access:** Anthropic API `claude-opus-5`; OpenRouter; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-24; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-5`
- **Context window:** not published in sources (BenchLM lists null); max output not stated. (Treat as 200K-class pending verification.)
- **Modalities:** text, image, file in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input, $25.00 / 1M output; paid. Fast mode 2.5x speed at 2x price.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **78.5** (#3/128)
- Terminal-Bench 2.1 (Vals): **84.6%**
- OSWorld 2.0: **70.6%**
- BrowseComp: **90.8%**; DeepSearchQA: **95.0%**
- MCP Atlas: **85.8%**; MCP-Atlas claim coverage: **89.1%**
- Toolathlon-Verified: **80.6%**; Pass@3 87.0%
- AutomationBench: **26.0%**
- ApprenticeBench: **36%**; MazeBench: **12%**
- GDPval-AA: **1708 Elo** (Opus 5.5 cites Opus 5 1708)

Reasoning / knowledge:

- HLE w/ tools: **64.7%**
- FrontierMath v2 (Tiers 1-3): **85.614%**; Tier 4: **73.171%**
- MMLU-Pro (Vals): **91.6%**
- ARC-AGI / GPQA: no verified public score found
- Artificial Analysis Intelligence Index: no verified figure found

Coding:

- SWE-bench Verified: **96%**
- SWE-bench Pro: **79.2%**
- CursorBench 3.2: **70.0%**
- LiveCodeBench (Vals): **89.0%**
- Vibe Code Bench: not individually reported (coding lane 70.7)
- Bug Hunt Bench: **27.0 fixes**

Long context:

- Context window not published in sources; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Agentic lane #3/128 (78.5), BrowseComp 90.8%, DeepSearchQA 95%, MCP-Atlas 85.8%, Terminal-Bench 2.1 Vals 84.6%; caps at AutomationBench 26%.
- **Reasoning: 88/100.** FrontierMath Tier4 73.17%, HLE w/ tools 64.7%, MMLU-Pro 91.6%; caps at no published ARC-AGI/GPQA.
- **Context window: 75/100.** Context size not published in sources; caps pending verification (likely 200K-class).
- **Multimodal: 85/100.** Text/image/file in, text out; no published multimodal benchmark in sources.
- **Coding: 85/100.** SWE-bench Verified 96%, SWE-bench Pro 79.2%, LiveCodeBench Vals 89.0%, CursorBench 70.0%; coding lane #9/150 (70.7).
- **Cost efficiency: 75/100.** Paid at $5/$25 per 1M.
- **Overall Score: 84/100.** Mean of five quality dims (BenchLM aggregate 79.61); best-fit for daily agentic coding + knowledge work.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news, iThome, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.