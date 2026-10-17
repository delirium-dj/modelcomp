# GPT-5.4 — findings by Beam

- Source: OpenAI/GPT-5.4, `openai/gpt-5.4`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's frontier model for professional work (Mar 5, 2026): most capable/efficient frontier model; record computer use (OSWorld 75%), GDPval 83%, SWE-bench Pro 57.7%, BrowseComp 82.7%, Toolathlon 54.6%. Token-efficient reasoning.
- **Provider / access:** OpenAI API `gpt-5.4` (ChatGPT Thinking, API, Codex); Azure.
- **Release / knowledge:** Released 2026-03-05; knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (none/low/medium/high/xhigh); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $2.50 / 1M input, $0.25 / 1M cached, $15.00 / 1M output; paid. Prompts >272K priced 2x/1.5x.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **52.1** (#44/128)
- OSWorld-Verified: **75.0%**
- WebArena Verified: record (not quantified in sources)
- GDPval (wins or ties): **83.0%**
- SWE-Bench Pro: **57.7%**
- Toolathlon: **54.6%**
- BrowseComp: **82.7%**
- MCP Atlas (250 tasks, 36 servers): efficiency gains reported
- APEX-Agents: top of leaderboard (Mercor)
- OSWorld (computer use): record

Reasoning / knowledge:

- ARC-AGI-1: **93.7%** (BenchGecko) / 95% (Epoch)
- ARC-AGI-2: **74.0%** (BenchGecko) / 83.3%? (Pro xhigh)
- HLE: **58.7%** (Pro) / not reported for base
- GPQA Diamond: **93.0%** (mini xhigh) / 95% (Pro)
- SimpleBench: **74%** (Pro)
- SimpleQA Verified: **46%** (Pro)
- FrontierMath Tiers 1-3: **82%** (Pro)
- FrontierMath Tier 4: **59%** (Pro)
- AA Intelligence Index: **57** (Pro, nearly tied with Gemini 3.1 Pro 57.2)
- AA Agentic Index: **69.4** (BenchGecko)
- AA Coding Index: **57.3** (BenchGecko)
- AA Quality Index: **57.2** (BenchGecko)

Coding:

- Coding public-lane (BenchLM): **47.7** (#48/150)
- SWE-Bench Pro: **57.7%**
- LiveCodeBench Pro: **87.5%** (Pro)
- SWE-bench (Vals): not reported for base
- Terminal-Bench 2.0: **75.1%**

Long context:

- 1.05M window; MRCR v2 8-needle 64K-128K: **86.0%** (Pro xhigh); 128K-256K: **79.3%** (Pro xhigh).

Multimodal:

- MMMU-Pro: **81.2%** (base, no tool use)
- MMMU-Pro (Pro): not separately reported
- OfficeQA Pro: **68.1%** (Pro? base 68.1?)

### Normalized scores (1–100)

- **Tool use: 82/100.** Agentic lane #44/128 (52.1), OSWorld 75.0%, GDPval 83.0%, Toolathlon 54.6%, BrowseComp 82.7%; caps at no published MCP Atlas for base.
- **Reasoning: 80/100.** ARC-AGI-1 93.7%, ARC-AGI-2 74.0%, GPQA 93.0%, HLE 58.7% (Pro), AA Intelligence 57; caps at ARC-AGI-2 74.0%.
- **Context window: 84/100.** 1.05M window; MRCR v2 8-needle 64K-128K 86.0%, 128K-256K 79.3%.
- **Multimodal: 82/100.** Text/image in; MMMU-Pro 81.2%.
- **Coding: 74/100.** SWE-Bench Pro 57.7%, Terminal-Bench 2.0 75.1%, AA Coding 57.3, coding lane #48/150 (47.7); caps at LiveCodeBench Pro 87.5% (Pro).
- **Cost efficiency: 80/100.** Mid $2.50/$15 per 1M.
- **Overall Score: 80/100.** Mean of five quality dims (BenchLM aggregate 66.69); best-fit for professional work at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, BenchLM, Epoch AI, BenchGecko, llm-stats, Wikipedia); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.