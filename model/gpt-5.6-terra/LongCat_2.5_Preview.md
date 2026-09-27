# GPT-5.6 Terra — findings by LongCat 2.5 Preview

- Source: OpenAI (`gpt-5.6-terra`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** The balanced mid-tier of OpenAI's GPT-5.6 family — everyday coding, reasoning, and agentic production workloads at roughly half the cost of the Sol flagship.
- **Provider / access:** OpenAI API — `gpt-5.6-terra` (Chat Completions + Responses API; `reasoning_effort` none/low/medium/high/xhigh/max). Also ChatGPT Work/Codex (Free/Go tiers), AWS Bedrock, Azure, OpenRouter. GA 2026-07-09.
- **Release / knowledge:** GA 2026-07-09; knowledge cutoff 2026-02-16.
- **IDs:** `openai/gpt-5.6-terra`. No Zen Free ID — paid only.
- **Context window:** 1,050,000 tokens total; max input 922,000; max output 128,000 (verified via OpenAI API docs). Long-context pricing multiplier above 272K input tokens.
- **Modalities:** Text and image in; text out; reasoning yes; tool calls yes (web/file search, image generation, code interpreter, hosted shell, computer use, MCP); structured outputs; caching.
- **Pricing (as of 2026-09-27):** $2.00/M in, $12.00/M out (permanent 20% cut from 2026-07-30); cached input $0.20/M; >272K input: 2x input, 1.5x output. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **87.4%**; Terminal-Bench 2.1 (Vals): **77.5%**
- Terminal-Bench 4.0: **21.5%** resolution (tbench.ai public leaderboard, rank 9)
- BrowseComp: **87.5%**
- OSWorld 2.0: **50.2%**; Toolathlon: **53.1%**
- CyberGym: **81.8%**; ExploitGym: **23.2%**

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (rank 11, llm-stats)
- ARC-AGI-2: **83.9%**; ARC-AGI-3: **0.8%**
- Artificial Analysis Intelligence Index: **55** (max)
- MRCR v2 (8-needle, 256K–512K): **89.6%** (OpenAI-published table)

Coding:

- SWE-bench (Vals, verified set): **95.4%**
- SWE-bench Pro: **63.4%** (rank 13/70)
- DeepSWE: **69.6%**
- LiveCodeBench (Vals): **85.9%**
- AA Coding Agent Index: **77** (max, Codex harness)
- FrontierCode 1.1 Extended: **55.8%**; cursorBench32: **64.9%**; VulcanBench v3: **87.0%**

Long context:

- MRCR v2 89.6% at 256K–512K (OpenAI); no longer-context retrieval result published for this exact model ID.

Multimodal extras:

- MMMU-Pro: **80.7%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.0 87.4% and BrowseComp 87.5% approach the frontier band; TB2.1 (Vals) 77.5%, OSWorld 50.2% and TB4.0 21.5% keep the dimension in the upper-mid range.
- **Reasoning: 85/100.** GPQA 92.9% is frontier-tier; AA Index 55 and ARC-AGI-2 83.9% are strong but a notch under the top reference points.
- **Context window: 95/100.** 1.05M tokens with 128K output earns the ≥1M tier; MRCR 89.6% at 256K–512K is solid but not a confirmed 512K+ top-band result.
- **Multimodal: 65/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 85/100.** SWE-bench (Vals) 95.4%, DeepSWE 69.6% and AA Coding Agent Index 77 are strong; SWE-bench Pro 63.4% holds it out of the frontier band.
- **Cost efficiency: 70/100.** $2.00/$12.00 pricing sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference points; $0.55 cost per AA task (max) is strong for its intelligence band.
- **Overall Score: 82/100.** Mean of the five quality dims (82+85+95+65+85)/5 = 82.4 → 82. Best-fit: cost-balanced production default for OpenAI-ecosystem coding and agentic workloads that do not need Sol-tier capability.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (OpenAI API docs + announcements, Artificial Analysis, llm-stats, BenchLM, Vals.ai, tbench.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
