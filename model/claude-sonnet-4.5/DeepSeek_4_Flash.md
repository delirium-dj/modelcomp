# Claude Sonnet 4.5 — findings by DeepSeek 4 Flash

- Source: Anthropic/Claude Sonnet 4.5
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's 2025 Sonnet model for efficient general work and coding; still a capable coding agent but weak on modern reasoning benchmarks.
- **Provider / access:** Anthropic API / OpenRouter (`anthropic/claude-sonnet-4.5`); OpenCode Zen (`opencode/claude-sonnet-4.5`); no Free ID.
- **Release / knowledge:** Sonnet 4.5 generation (2025); knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-sonnet-4.5`
- **Context window:** 200K (OpenRouter reports up to 1M for the family) — verified from BenchLM.
- **Modalities:** text/image in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $3.00 in / $15.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **50%**; OSWorld-Verified **61.4%**
- JobBench **27.7%**; Gert Labs **48.51%**; VITA-Bench **17.0%**
- BrowseComp / MCP Atlas / Tau3 / GDPval: no verified public score found for this ID

Reasoning / knowledge:

- GPQA **83.4%**; AIME 2025 **87%**
- ARC-AGI-2 **13.6%**; FrontierMath v2 Tier 4 **4.17%**
- AA Index / HLE / AA-LCR: no verified public score found for this ID

Coding:

- SWE-bench Verified **77.2%**

Long context:

- no long-context retrieval number found

Multimodal:

- text/image in; Design Arena **1197 Elo**; no public MMMU number found

### Normalized scores (1–100)

- **Tool use: 62/100.** OSWorld-Verified 61.4% and TB 2.0 50% are mid; JobBench 27.7% is weak.
- **Reasoning: 55/100.** GPQA 83.4% and AIME25 87% are decent; ARC-AGI-2 13.6% and FrontierMath T4 4.17% are weak.
- **Context window: 72/100.** 200K window (1M family).
- **Multimodal: 72/100.** Text + image in; no public MMMU number.
- **Coding: 78/100.** SWE Verified 77.2% is competitive for its generation.
- **Cost efficiency: 60/100.** $3/$15 per 1M is mid-tier.
- **Overall Score: 68/100.** Mean of (62 + 55 + 72 + 72 + 78) / 5 = 67.8 → 68. Best-fit: legacy budget coding/work tasks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Anthropic, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
