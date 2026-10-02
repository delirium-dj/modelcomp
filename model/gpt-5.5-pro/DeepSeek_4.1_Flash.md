# GPT 5.5 Pro — findings by DeepSeek 4.1 Flash

- Source: OpenAI / GPT-5.5 Pro (`openai/gpt-5.5-pro`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.5 Pro
- **Short description:** OpenAI's premium extra-compute ("Pro") deployment of GPT-5.5 — the same underlying weights served with additional parallel test-time compute for the hardest tasks. Aimed at deep reasoning, long-horizon agentic coding and high-stakes accuracy; several times slower and costlier than standard GPT-5.5.
- **Provider / access:** OpenAI API (Responses/Chat Completions), plus OpenRouter and Vercel AI Gateway; an OpenAI Flex tier exists at half price. Not open weights.
- **Release / knowledge:** Released 2026-04-23/24; knowledge cutoff December 2025.
- **IDs:** `gpt-5.5-pro` (OpenAI/OpenRouter); OpenCode Zen tracks it as `opencode/gpt-5.5-pro`. No Zen Free ID.
- **Context window:** 1,050,000 tokens total (**922K input / 128K max output**) per the OpenRouter listing; LLM Reference records 1.05M context and 128,000 max output.
- **Modalities:** text and image in; text out. Reasoning yes (effort control; Pro = extra test-time compute), tool use, structured outputs, code execution, batch API.
- **Pricing (as of 2026-10-01):** **$30 / $180 per 1M** in/out (OpenAI + OpenRouter); OpenAI batch $10 / $45 per 1M; Flex tier $15 / $90. No prompt-caching discount listed.
- **Architecture:** proprietary decoder-only; same weights as GPT-5.5 standard with extra inference compute. Not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **78.2%**; Terminal-Bench 2.0: **82.7%** (LLM Reference datapack, GPT-5.5 standard weights)
- OSWorld-Verified: **78.7%**; MCP-Atlas: **75.3%** (LLM Reference datapack, observed 2026-04-24)
- BrowseComp: **84.4%** single-agent, **90.1%** on Pro compute (LLM Reference datapack, observed 2026-04-24)
- GDPval-AA (Elo): **1785** (Artificial Analysis, observed 2026-06-26)
- Tau3-Banking / Claw-Eval / Toolathlon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (LLM Reference datapack, observed 2026-04-24)
- HLE (Humanity's Last Exam): **41.4%** no tools, **52.2%** with tools, **57.2%** on Pro compute (observed 2026-04-24)
- Artificial Analysis Intelligence Index: **55.0** (GPT-5.5 xhigh compute, observed 2026-06-26)
- ARC-AGI-2 (high effort): **83.3%**; FrontierMath Tier 4: **39.6%**; CritPt: **30.6%** (observed 2026-04-24)
- AA-LCR / AIME: **no verified public score found for this Pro ID**

Coding:

- SWE-bench Pro: **58.6%** — rank **#16 of 46** on LLM Reference (standard GPT-5.5 weights)
- LiveCodeBench: **91.0%** (approximate standard GPT-5.5 score)
- Terminal-Bench 2.1 **78.2%** / 2.0 **82.7%** (see above); SciCode / DeepSWE: **no verified public score found**

Long context:

- 1.05M-token window documented; **no MRCR/RULER/GraphWalks retrieval score published** — **no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 78.2%, OSWorld-Verified 78.7%, GDPval-AA 1785 and BrowseComp 90.1% (Pro compute) are frontier-class; held just under the top band because TB 2.1 is below the 88% frontier reference and no Tau3/Claw-Eval figure exists.
- **Reasoning: 92/100.** GPQA 93.6%, HLE 57.2% on Pro compute and ARC-AGI-2 83.3% are top-tier; the Artificial Analysis Intelligence Index (55.0) sits below the 60+ frontier reference and FrontierMath T4 (39.6%) is mid, which caps it.
- **Context window: 95/100.** 1.05M-token window (≥1M band); held at 95 because no ≥98%-at-512K retrieval benchmark is published.
- **Multimodal: 68/100.** Text and image input with text output (+image band = 60–70); no audio/video input documented.
- **Coding: 78/100.** LiveCodeBench 91.0% and TB 2.1 78.2% are strong, but SWE-bench Pro 58.6% (#16/46) is mid and no SciCode/DeepSWE number exists — capped below frontier.
- **Cost efficiency: 18/100.** $30 / $180 per 1M is the most expensive tier evaluated; even the Flex ($15/$90) and batch ($10/$45) routes stay deep in the top price band.
- **Overall Score: 84/100.** (88 + 92 + 95 + 68 + 78) / 5 = 84.2 → 84. Best fit: rare, high-stakes reasoning/agentic jobs where accuracy matters more than cost or latency.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-01
- Method: public internet research (OpenRouter model page incl. its Artificial Analysis table, LLM Reference datapack with dated rows and ranks); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.