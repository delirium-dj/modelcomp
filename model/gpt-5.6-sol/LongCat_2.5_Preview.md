# GPT-5.6 Sol — findings by LongCat 2.5 Preview

- Source: OpenAI (`gpt-5.6-sol`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** The flagship tier of OpenAI's GPT-5.6 three-tier family (Sol/Terra/Luna), built for the hardest coding, cybersecurity, and long-horizon research problems at a lower price than Anthropic's premium tier.
- **Provider / access:** OpenAI API — `gpt-5.6-sol` (Chat Completions + Responses API; `reasoning_effort` up to xhigh; Fast mode tier available). Also AWS Bedrock, Azure AI Foundry, OpenRouter. Announced 2026-07-09.
- **Release / knowledge:** Announced 2026-07-09 (Bedrock launch 2026-07-13); knowledge cutoff not published.
- **IDs:** `openai/gpt-5.6-sol`. No Zen Free ID — paid only.
- **Context window:** 1,050,000 tokens (llm-stats/OrcaRouter; AA/Bedrock list 1M); 128,000 max output.
- **Modalities:** Text, image, file in; text out; reasoning yes; tool calls yes (hosted shell, code interpreter, computer use, MCP, web/file search); structured outputs; caching.
- **Pricing (as of 2026-09-27):** $5.00/M in, $30.00/M out standard; promotional $4.00/$20.00 (2026-08-21 through at least 2026-11-21); cached input $0.50/$0.40. Paid only.
- **Architecture:** Proprietary; no public parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.8%**; Terminal-Bench 2.0: **91.9%**
- Terminal-Bench 4.0: **37%** (AA, Codex harness — per AA's GPT-6 Sol benchmarking article)
- BrowseComp: **92.2%**
- OSWorld 2.0: **62.6%**; Toolathlon: **58%**
- CyberGym: **84.5%**; ExploitGym: **33.7%**
- Bug Hunt Bench: 42 fixes

Reasoning / knowledge:

- GPQA Diamond: **94.6%** (rank 2, llm-stats)
- ARC-AGI-2: **92.5%**; ARC-AGI-3: **7.8%**
- Artificial Analysis Intelligence Index: **59** (max; 1 pt below Claude Fable 5)
- FrontierMath v2 (Tier 4): **83%**
- GeneBench v1: stronger than GPT-5.5 with fewer tokens (OpenAI)

Coding:

- SWE-bench (Vals, verified set): **96.2%**
- SWE-bench Pro: **64.6%** (rank 11/70)
- LiveCodeBench (Vals): **82.6%**
- DeepSWE: **72.7%**
- AA Coding Agent Index: **80** (max, Codex harness — leads the index)
- FrontierCode 1.1 Extended: **60.6%**; FrontierSWE v2: **32.2%**; cursorBench32: **67.2%**; VulcanBench v3: **87.0%**

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

Multimodal extras:

- MMMU-Pro: **83%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 85.8% and TB2.0 91.9% are near the 88%+ frontier mark; BrowseComp 92.2% is excellent; TB4.0 37% and OSWorld 62.6% keep it just under 90.
- **Reasoning: 90/100.** GPQA 94.6% (rank 2), ARC-AGI-2 92.5%, FrontierMath Tier 4 83% — all frontier-tier; AA Index 59 sits one point under the 60+ top band.
- **Context window: 95/100.** 1.05M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 65/100.** Text/image/file input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 92/100.** SWE-bench Verified 96.2% (Vals), DeepSWE 72.7% and a leading AA Coding Agent Index 80 support the frontier band; SWE-bench Pro 64.6% is a notch under the very top.
- **Cost efficiency: 50/100.** $5/$30 standard pricing sits between the $3/$15 (≈60) and $10/$50 (≈30) reference points; the $4/$20 promotion (through at least 2026-11-21) would score ~55.
- **Overall Score: 86/100.** Mean of the five quality dims (88+90+95+65+92)/5 = 86. Best-fit: OpenAI-ecosystem default for hard coding and long-horizon research where Anthropic's premium tier is not required.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (OpenAI announcement, Artificial Analysis, llm-stats, BenchLM, Vals.ai, AWS Bedrock card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
