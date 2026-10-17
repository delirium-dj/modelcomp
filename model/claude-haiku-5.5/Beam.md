# Claude Haiku 5.5 — findings by Beam

- Source: Anthropic/Claude Haiku 5.5, `anthropic/claude-haiku-5-5`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest, most efficient Haiku (Oct 7, 2026): 75% cheaper than Haiku 4.5; first Haiku with effort controls; strong coding, computer use, agents. Vals Index #18 (54.44%).
- **Provider / access:** Anthropic API `claude-haiku-5-5`; AWS Bedrock; OpenRouter; Kie AI.
- **Release / knowledge:** Released 2026-10-07; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking, effort low..max, default medium); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.10 / 1M input, $0.50 / 1M output, $0.01 / 1M cache read, $0.125 / 1M cache write; paid. (Tiered: >100K tokens higher rates.)
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **62.7** (#21/128)
- Terminal-Bench 4.0: **39.20%** (Vals 36.36%)
- OSWorld 2.1: **72.4%** (offline subset)
- HLE w/ tools: **57.4%**
- Vals Index: **54.44%** (#18/48)
- CyberBench v1.1: **75.48%** (Vals)
- Vibe Code Bench v1.1: **90.44%** (Vals, #3/112)
- FrontierCode 1.1 (Main): **46.4%**
- FrontierSWE v2: **43.8%**
- Bug Hunt Bench: **21.5 fixes**
- DeepSWE: not reported (coming soon)
- Terminal-Bench 2.1: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **82.7** (#8/28)
- HLE: **45.9%** (no tools) / **57.4%** (with tools)
- ARC-AGI: not reported
- GPQA: not reported for Haiku 5.5
- AA Intelligence Index: not reported
- FrontierMath v2 (Tier 4): **46.341%**

Coding:

- Coding public-lane (BenchLM): **53** (#38/150)
- Vibe Code Bench v1.1: **90.44%** (Vals)
- Vibe Code Bench 1-100: **20.41%** (Vals)
- FrontierCode 1.1 (Main): **46.4%**
- FrontierSWE v2: **43.8%**
- Bug Hunt Bench: **21.5 fixes**
- SWE-bench Verified: not reported
- DeepSWE: not reported

Long context:

- 1M window; MRCR: not reported.

Multimodal:

- Multimodal: not separately reported (text/image/PDF in).

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #21/128 (62.7), Terminal-Bench 4.0 39.2%, OSWorld 72.4%, HLE w/tools 57.4%, CyberBench 75.48%; caps at Vals Index 54.44%.
- **Reasoning: 78/100.** HLE 45.9-57.4%, FrontierMath Tier4 46.341%, reasoning lane #8/28 (82.7); caps at no published GPQA/ARC-AGI.
- **Context window: 82/100.** 1M window; caps at no published MRCR.
- **Multimodal: 76/100.** Text/image/PDF in; caps at no verified multimodal benchmarks.
- **Coding: 76/100.** Vibe Code 90.44%, FrontierCode 46.4%, FrontierSWE 43.8%, Bug Hunt 21.5 fixes, coding lane #38/150 (53); caps at Vibe Code 1-100 20.41%.
- **Cost efficiency: 98/100.** Very cheap $0.10/$0.50 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 70.03); best-fit for high-volume agentic at very low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news/system card, AWS Bedrock, BenchLM, Vals AI, Kie AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.