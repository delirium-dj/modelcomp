# GPT 5.5 Pro — findings by Ling 3.1 Flash

- Source: OpenAI (`opencode/gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's premium extra-compute deployment of GPT-5.5 (released 2026-04-23) — identical weights with additional parallel test-time compute for correctness-critical work, at a 6x price premium over standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses and Chat Completions), OpenRouter, AWS Bedrock, Azure OpenAI; ChatGPT Pro/Business/Enterprise plans. Reasoning effort control incl. xhigh; tool use, structured outputs, code execution.
- **Release / knowledge:** 2026-04-23; knowledge cutoff not stated in the launch materials reviewed.
- **IDs:** `openai/gpt-5.5-pro` (OpenAI API / OpenRouter); site tracking slug `opencode/gpt-5.5-pro`. No Free ID — paid only.
- **Context window:** 1,050,000 tokens total; 128,000 max output (LLM Reference; site meta.json's "128K total" is a scaffold stub contradicted by the verified spec).
- **Modalities:** text and image in; text out (per LLM Reference; site meta.json's "Text in/out" understates the verified spec).
- **Pricing (as of 2026-10-02):** $30/$180 per 1M input/output (OpenAI API, OpenRouter); Batch $10/$45; Flex $15/$90; Priority 2.5x; cached input ~$3/M estimated from GPT-5.5's 90% cache discount (not independently confirmed for Pro); Web Search $10/1K calls.
- **Architecture:** proprietary (OpenAI); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%** (observed 2026-05-28, standard GPT-5.5 weights — Pro shares headline results)
- Terminal-Bench 2.0: **82.7%** (vendor, state of the art at release; vs Gemini 3.1 Pro 68.5%, Claude ~65%)
- OSWorld-Verified: **78.7%** (computer use)
- MCP-Atlas: **75.3%** (multi-tool orchestration)
- GDPval-AA: **1785** (Pro) / 1769 (standard) — AA leaderboard
- Expert-SWE (OpenAI internal, median human completion ~20h): **73.1%** (internal eval, not independently verifiable)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (observed 2026-04-24)
- Humanity's Last Exam (no tools): **41.4%**; with tools: **52.2%**; with tools at Pro compute: **57.2%**
- ARC-AGI-2 (high effort): **83.3%**
- FrontierMath: Tier 4 **39.6%** (LLM Reference; HokAI reads 35.4%), Tiers 1–3 **51.7%**
- CritPt (xhigh, Artificial Analysis): **30.6%**
- MMLU: **92.4%** (vendor-reported)
- BrowseComp (Pro compute): **90.1%**
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **82.6%** (vals.ai independent, standard weights, 2026-04-24); **88.7%** vendor-reported (HokAI, 2026-04-23) — the two disagree by 6.1 pts
- SWE-bench Pro (Public): **58.6%** (rank 16/46)
- LiveCodeBench: **91.0%** (approximate, standard GPT-5.5 score)
- GeneBench-Pro: **20.5%** (Pro) / 12.0% (standard)
- SciCode / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- 1.05M-token window; no MRCR / RULER / GraphWalks retrieval score published

Multimodal:

- Text and image input; no dedicated multimodal benchmark score published for this release

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval-AA 1785 clears the frontier reference (1750+), with OSWorld 78.7% and MCP-Atlas 75.3% strong; Terminal-Bench 2.1 78.2% (vs the 88%+ frontier bar) and the internal-only Expert-SWE cap the score.
- **Reasoning: 91/100.** GPQA 93.6%, HLE 52.2% with tools (57.2% at Pro compute) and ARC-AGI-2 83.3% clear the frontier bars; the 41.4% no-tools HLE and CritPt 30.6% cap it below 93.
- **Context window: 95/100.** 1.05M-token window; no ≥98% retrieval-at-512K+ figure published, so 100 is not justified.
- **Multimodal: 65/100.** text + image in, text out — the +image-in band; no audio/video input.
- **Coding: 92/100.** SWE-bench Verified 82.6% independent (88.7% vendor), LiveCodeBench 91.0% and TB 2.0 82.7% are top-tier; the 6.1-pt SWE-bench disagreement and unpublished DeepSWE/SciCode cap the score.
- **Cost efficiency: 15/100.** $30/$180 per 1M is triple the $10/$50 (~30) reference on input and far beyond it on output; Batch ($10/$45) and Flex ($15/$90) improve the effective rate for non-interactive work.
- **Overall Score: 86/100.** (88+91+95+65+92)/5 = 86.2 → 86 — the accuracy-maximal GPT-5.5 setting: best-in-class agentic coding at release, but the 6x price premium and text+image-only input make standard GPT-5.5 the better default for most workloads.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI launch page, LLM Reference, HokAI, OpenRouter, Artificial Analysis, vals.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
