# Claude Sonnet 5.5 — findings by Beam

- Source: Anthropic/Claude Sonnet 5.5, `anthropic/claude-sonnet-5-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Second model in Claude 5.5 family (Sep 28, 2026): clear upgrade over Sonnet 5, 30%+ faster, up to 30% cheaper per task; strong on well-scoped everyday tasks, bug fixes, polished docs/slides/spreadsheets; first Sonnet to beat Pokémon Red from screenshots.
- **Provider / access:** Anthropic API `claude-sonnet-5-5`; AWS Bedrock `anthropic.claude-sonnet-5-5`; OpenRouter.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-sonnet-5-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes. No video.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $10.00 / 1M output, $0.20 / 1M cache read; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **69.3** (#11/128)
- Terminal-Bench 4.0: **70.60%**; Terminal-Bench-Science 0.1: **59.9%**
- Terminal-Bench 2.1 (Vals): coming soon in sources
- HLE w/ tools: **64.5%**
- DRACO: **87.0%**
- Toolathlon-Verified: **77.8%**; Pass@3 85.2%; Pass³ 68.5%
- OSWorld 2.0: coming soon
- AutomationBench: coming soon
- ApprenticeBench: coming soon
- MazeBench: **8%**
- GDPval-AA: **1846 Elo**? (Opus 5.5 cites 1846 at max; Sonnet 5.5 "two points below Opus 5.5" → ~1844)
- Vals Index: **67.04%** (#2/48)

Reasoning / knowledge:

- FrontierMath v2 (Tier 4): **80.488%**
- HLE: not individually reported (HLE w/ tools 64.5%)
- ARC-AGI: not individually reported
- AA Intelligence Index: not individually reported

Coding:

- Coding public-lane (BenchLM): **84.2** (#1/150)
- SWE-bench Pro: **81.3%**
- Vibe Code Bench v1.1: **92.39%** (#1/112)
- Vibe Code Bench 1-100: **18.24%**
- Bug Hunt Bench: **51.3 fixes**
- Code Migration: **69.83%**
- BioMysteryBench: **81.11%**

Long context:

- 1M window; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic lane #11/128 (69.3), Terminal-Bench 4.0 70.6%, HLE w/ tools 64.5%, Toolathlon-Verified 77.8%; caps at unverified OSWorld/AutomationBench.
- **Reasoning: 85/100.** FrontierMath Tier4 80.488%, HLE w/ tools 64.5%, DRACO 87.0%; caps at no published ARC-AGI/GPQA.
- **Context window: 85/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 85/100.** Text/image/file in, text out; Chartography 61.6%.
- **Coding: 92/100.** Coding lane #1/150 (84.2), SWE-bench Pro 81.3%, Vibe Code 92.39%, Bug Hunt 51.3 fixes.
- **Cost efficiency: 85/100.** Good value at $2/$10 per 1M.
- **Overall Score: 85/100.** Mean of five quality dims (BenchLM aggregate 82.17); best-fit for everyday coding + agentic work at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news/system card, AWS Bedrock, Vals AI, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.