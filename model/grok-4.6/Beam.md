# Grok 4.6 — findings by Beam

- Source: xAI/Grok 4.6, `xai/grok-4.6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's post-training upgrade (Aug 12, 2026) on Grok 4.5 base (1.5T params): 500K context, 4 reasoning levels (low/medium/high/xhigh), strong agentic coding. AA Intelligence 61 (tied with GPT-5.6 Sol Max).
- **Provider / access:** xAI API `grok-4.6`; OpenRouter; Vercel; Cloudflare; Cursor.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff February 2026.
- **IDs:** `xai/grok-4.6`
- **Context window:** 500,000 tokens; max output 500,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $6.00 / 1M output, $0.50 / 1M cached; paid. Prices double above 200K tokens.
- **Architecture:** 1.5T params base (Grok 4.5), post-training upgrade; proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **69.8** (#9/128)
- Terminal-Bench 3.0: **26.5%**
- Terminal-Bench 2.1: not reported for 4.6 (5.6 Sol 91.9%)
- Terminal-Bench 2.1 (Vals): **78.3%**
- APEX-Agents: **57.5%**
- GDPval-AA: **1753 Elo**
- AA Tau3 Banking: **50.7%**
- OSWorld-Verified: not reported for 4.6
- BrowseComp: not reported for 4.6
- MCP Atlas: not reported for 4.6

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **61.4** (#25/28)
- ARC-AGI-1: **87.00%**
- ARC-AGI-2: **67.1%**
- ARC-AGI-3: **2.1%**
- GPQA Diamond (Vals): **94.7%**
- MMLU-Pro (Vals): **89.4%**
- AA Intelligence Index: **61** (tied with GPT-5.6 Sol Max)
- HLE: not reported

Coding:

- Coding public-lane (BenchLM): **58.5** (#23/150)
- DeepSWE: **65.9%**
- SWE-bench (Vals): **95.6%**
- LiveCodeBench (Vals): **88.2%**
- CursorBench 3.2: **70.8%**
- FrontierCode 1.1 Extended: **61.3%**
- FrontierSWE v2: **25.3%**
- CursorBench 4.0: **41.4%**
- Bug Hunt Bench: **27.0 fixes**
- AA-SciCode: **56.5%**

Long context:

- 500K window; MRCR: not reported.

Multimodal:

- Multimodal: not separately reported (text/image in).

### Normalized scores (1–100)

- **Tool use: 80/100.** Agentic lane #9/128 (69.8), Terminal-Bench 3.0 26.5%, APEX-Agents 57.5%, GDPval 1753; caps at Terminal-Bench 2.1 78.3%.
- **Reasoning: 78/100.** ARC-AGI-1 87.0%, ARC-AGI-2 67.1%, GPQA 94.7%, AA Intelligence 61; caps at ARC-AGI-3 2.1%.
- **Context window: 75/100.** 500K window; caps at no published MRCR.
- **Multimodal: 72/100.** Text/image in, text out; no verified multimodal benchmarks.
- **Coding: 80/100.** SWE-bench Vals 95.6%, DeepSWE 65.9%, LiveCodeBench Vals 88.2%, coding lane #23/150 (58.5); caps at FrontierSWE v2 25.3%.
- **Cost efficiency: 88/100.** Cheap $2/$6 per 1M.
- **Overall Score: 77/100.** Mean of five quality dims (BenchLM aggregate 67.01); best-fit for agentic coding at low cost (superseded by Grok 4.7).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (xAI model card, BenchLM, Winzheng, OpenCode data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.