# Claude Opus 5.5 — findings by Beam

- Source: Anthropic/Claude Opus 5.5, `anthropic/claude-opus-5.5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's flagship Opus-class model and first Claude 5.5 family release; broad capability upgrade over Opus 5 with gains in agentic coding, computer use, math/science reasoning, and long-horizon professional work, matching/exceeding Claude Fable 5.1 on many evals. Costs ~40% less than Opus 5.
- **Provider / access:** Anthropic API `claude-opus-5.5` (Chat/Responses, extended thinking); OpenRouter `anthropic/claude-opus-5.5`; OpenCode Zen. Also Claude Code fast mode.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff not published (safeguards in biology/cyber/frontier-AI domains).
- **IDs:** `anthropic/claude-opus-5.5`
- **Context window:** 1,000,000 tokens; max output 128,000 (verified via Anthropic docs/OpenRouter).
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (extended thinking); tool calling yes; structured output yes. No video.
- **Pricing (as of 2026-10-17):** $4.00 / 1M input, $20.00 / 1M output, $0.20 / 1M cache read, $5.00 / 1M cache write; paid. Fast mode $8/$40.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **66.40%** (BenchLM); 65.15% (Vals, #1/49)
- Terminal-Bench 2.1: no single verified figure in sources (agentic lane 90.3)
- Agentic public-lane (BenchLM): **90.3** (#1/128)
- AutomationBench: **40.0%** (BenchLM); Zapier reported
- HLE w/ tools: **67.7%**
- BrowseComp: not individually reported (agentic lane)
- MCP-Atlas / Toolathlon-Verified: Toolathlon-Verified 77.8% (BenchLM)
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- ARC-AGI-1: **97.50%**; ARC-AGI-2: **91.7%**
- GPQA Diamond: not individually reported in sources
- HLE: 67.7% w/ tools
- CritPt / MRCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public figure found

Coding:

- SWE-bench Pro: **89.9%**
- SWE Multilingual: **93.9%**; SWE Multimodal: **61.4%**
- DeepSWE: **74.2%**
- Vibe Code Bench v1.1: **90.29%** (Vals, #5/113)
- SciCode: **66.9%** (Kilo/AA)
- LCR: **84.7%** (long-context reasoning)
- Bug Hunt Bench: **41.7 fixes**
- FrontierCode 1.1 Main: 54.4%; FrontierSWE v2: 62.3%

Long context:

- Context 1M; LCR 84.7%; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 92/100.** Agentic lane #1/128 (90.3), Terminal-Bench 4.0 ~66%, HLE w/ tools 67.7%; caps at unverified GDPval/MCP-Atlas.
- **Reasoning: 90/100.** ARC-AGI-1 97.5%, ARC-AGI-2 91.7%, HLE w/ tools 67.7%; caps at no published AA Intelligence/GPQA.
- **Context window: 90/100.** 1M window with LCR 84.7%; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image/PDF in, text out; no video; Chartography 64.4% multimodal.
- **Coding: 88/100.** SWE-bench Pro 89.9%, Vibe Code 90.3%, SWE Multilingual 93.9%; caps at SciCode 66.9%.
- **Cost efficiency: 75/100.** Paid at $4/$20 per 1M; premium pricing.
- **Overall Score: 89/100.** Mean of five quality dims (BenchLM aggregate 86.54); best-fit for agentic coding and long-horizon professional work.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news/system card, OpenRouter/Kilo, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.