I'll start by searching for public information on this model.The first results are useful but conflicting in places. I'll check the official announcement and pricing.Pricing and context are well corroborated. Next I'll look for independent reasoning and intelligence-index numbers.I have Artificial Analysis numbers now. One more search for the agentic and tool-use benchmarks named in the template.# GPT-6.1 Sol — findings by Claude Haiku 5.5

- Source: OpenAI/GPT-6.1 Sol (`gpt-6.1-sol`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (paid only; no free tier verified)
- **Short description:** OpenAI's mid-tier model in the GPT-6 series, positioned below GPT-6 Astra and above GPT-6 Luna, and aimed at coding agents, computer use, and professional work at lower cost. It replaces GPT-6 Sol. Variant note: GPT-6.1 Sol Pro is the same model served with `reasoning.mode` set to `pro`; a `gpt-6.1-sol-fast` alias appears on the Vercel AI Gateway with unverified pricing.
- **Provider / access:** OpenAI API `gpt-6.1-sol` (Responses API per aggregator docs citing OpenAI; Chat Completions support not verified). Also OpenRouter `openai/gpt-6.1-sol`, Amazon Bedrock `openai.gpt-6.1-sol`, and Perplexity `perplexity/openai/gpt-6.1-sol`. OpenCode Zen: no listing found in my searches.
- **Release / knowledge:** 2026-09-29 release (OpenAI); knowledge cutoff 2026-04-30 (aggregators citing OpenAI's API docs). One secondary blog reports a WSJ story about a scrapped October release; I could not verify it and did not use it.
- **IDs:** `openai/gpt-6.1-sol` (OpenRouter) and `gpt-6.1-sol` (OpenAI API). No Free ID exists on Zen as verified.
- **Context window:** 1,050,000 input tokens; 128,000 max output (OpenAI-cited docs and aggregator specs; one aggregator lists 131K output, which I did not use). Pricing tier changes above 272K input tokens.
- **Modalities:** text and image in; text out; reasoning yes (effort levels low, medium, high, xhigh, max; `none` and `minimal` unsupported); tool calls yes; structured output yes; JSON mode via structured output. PDF input appears in one aggregator spec only and is unverified.
- **Pricing (as of 2026-10-09):** $2.00 input / $10.00 output / $0.10 cached read / $2.50 cache write per 1M tokens at up to 272K input. Above 272K: $4.00 input / $15.00 output / $0.20 cached read / $5.00 cache write. Batch and Flex are half the standard rate per aggregator citing OpenAI's pricing page. Paid $ only; no free-tier privacy caveat applies.
- **Architecture:** Proprietary; parameter count and architecture not disclosed.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 2.1: no verified public score found (nearest: Terminal-Bench 4.0 **55.1%** per Vals AI; Artificial Analysis max effort **56.1%**)
- Tau3-Banking / Tau2-Bench: **72.7%** (OpenRouter provider table, Amazon Bedrock row; benchmark variant and effort tier unlabeled, low confidence)
- GDPval-AA: no verified public Elo found; Artificial Analysis reports **53.8%** (max effort)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:
- GPQA Diamond: **94.4%** (OpenRouter provider table, OpenAI-direct row; tier unlabeled, low confidence)
- HLE: **52.9%** (Artificial Analysis, max effort)
- LCR / MLCR: **83.0%** (Artificial Analysis AA-LCR, max effort)
- CritPt: **31.7%** (Artificial Analysis, max effort)
- Artificial Analysis Intelligence Index / BenchLM overall: **52 / #11 of 687** (Artificial Analysis max effort; rank via BazaarLink mirror of AA). Vals AI Index: 61.15%, #8 of 44 (different index, reported for reference)
- Omniscience Accuracy / Hallucination Rate: no verified public score found (OpenAI reports a factual-error rate of 7.7% on flagged ChatGPT conversations at low effort; this is not Omniscience)

Coding:
- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: **54.2%** (Artificial Analysis, max effort; high effort 55.8%)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **75.2%** DeepSWE v1.1 at high effort (OpenAI, vendor-reported). Artificial Analysis Coding Agent Index: no numeric value verified (reported as 2 points below GPT-6 Astra)

Long context:
- No long-context retrieval reported (no verified MRCR, RULER, or GraphWalks score at 512K+; the 1.05M window is declared, not retrieval-tested)

### Normalized scores (1-100)

- **Tool use: 62/100.** Evidence: OSWorld 2.0 **71.4%** at max effort (OpenAI, vendor-reported); GDPval-AA 53.8% (Artificial Analysis); Terminal-Bench 4.0 55.1% (Vals AI). Terminal-Bench 2.1 and Tau3 are not confirmed for this model, so the score sits in the mid-to-frontier band. Capped by the missing TB2.1 score and the unlabeled Tau3 figure.
- **Reasoning: 80/100.** Evidence: HLE 52.9% (frontier threshold 40%+), GPQA Diamond about 94% (low-confidence provider table, frontier 90%+), Artificial Analysis Index 52 (frontier band 60+). Capped by the Index score, which is below the frontier threshold, and CritPt at 31.7%.
- **Context window: 95/100.** The declared 1,050,000-token window falls in the 1M+ tier, which is confirmed by OpenAI-cited docs and multiple aggregators. Not 100: no retrieval score at 512K+ (MRCR/RULER) was verified. The 272K price cliff is a pricing rule, not a context limit.
- **Multimodal: 65/100.** Text and image input with text output, per Artificial Analysis and aggregator specs. PDF input is unverified and not scored. No audio, video, or non-text output is verified.
- **Coding: 88/100.** Evidence: DeepSWE v1.1 **75.2%** (OpenAI, vendor-reported, frontier 74%+); SciCode 54.2% (just under the 55% frontier threshold). Capped by vendor-only coding evidence and the lack of verified SWE-bench Verified or TB2.1 scores.
- **Cost efficiency: 74/100.** $2/$10 at up to 272K input sits between the ~$1.25/$4.25 anchor (88) and the $3/$15 anchor (60), interpolated to about 74. Above 272K ($4/$15), the score drops to about 60. Artificial Analysis reports $0.72 per max-effort Intelligence Index task. Cost is not counted in Overall.
- **Overall Score: 78.0/100.** Mean of tool use (62), reasoning (80), context (95), multimodal (65), and coding (88) = 78.0. Best fit: a cost-sensitive coding or computer-use agent that needs a very long context window. For peak reasoning, the Astra tier is the better choice.

---

## Signature

- Provided by: **Claude Haiku 5.5 (anthropic/claude-haiku-5-5)** — 2026-10-09
- Method: public internet research via web search (Vals AI, Artificial Analysis, OpenRouter, OpenAI's deployment safety hub, and aggregator spec pages); several secondary blogs were used, and vendor-reported figures are labeled as such. Scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.