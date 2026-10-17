# GPT-5.4 Mini — findings by Beam

- Source: OpenAI/GPT-5.4 Mini, `openai/gpt-5.4-mini`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's efficient mini model (Mar 17, 2026): 2x faster than GPT-5 mini, approaches GPT-5.4 on SWE-bench Pro (54.4%) and OSWorld (72.1%). 400K context, 128K output. GPQA 88.0%.
- **Provider / access:** OpenAI API `gpt-5.4-mini` (ChatGPT, API, Codex); Azure; Microsoft Foundry.
- **Release / knowledge:** Released 2026-03-17; knowledge cutoff Aug 31, 2025.
- **IDs:** `openai/gpt-5.4-mini`
- **Context window:** 400,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (none/low/medium/high/xhigh); tool calling yes; structured output yes; computer use yes.
- **Pricing (as of 2026-10-17):** $0.75 / 1M input, $0.075 / 1M cached, $4.50 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not individually reported (BenchLM overall not computed for mini)
- SWE-Bench Pro: **54.4%**
- Terminal-Bench 2.0: **60.0%**
- Toolathlon: **42.9%**
- OSWorld-Verified: **72.1%**
- GPQA Diamond: **88.0%**
- MRCR v2 8-needle 64K-128K: **47.7%**
- MRCR v2 8-needle 128K-256K: **33.6%**
- Graphwalks BFS 0K-128K: **76.3%**
- Graphwalks parents 0-128K: **71.5%**
- AA Intelligence Index: **24.6**

Reasoning / knowledge:

- AA Intelligence Index: **24.6**
- GPQA Diamond: **88.0%**
- HLE w/ tools: **41.5%**
- HLE w/o tools: **28.2%**
- ARC-AGI: not reported
- MRCR v2 64K-128K: **47.7%**

Coding:

- AA Coding Index: **56.1**
- SWE-Bench Pro: **54.4%**
- Terminal-Bench 2.0: **60.0%**
- LiveCodeBench: not reported

Long context:

- 400K window; MRCR v2 8-needle 64K-128K 47.7%, 128K-256K 33.6%.

Multimodal:

- OSWorld-Verified: **72.1%**
- MMMU-Pro: not reported for mini

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 60.0%, OSWorld 72.1%, Toolathlon 42.9%, SWE-Bench Pro 54.4%; caps at MRCR 47.7%.
- **Reasoning: 74/100.** GPQA 88.0%, HLE w/tools 41.5%, AA Intelligence 24.6; caps at HLE w/o tools 28.2%.
- **Context window: 72/100.** 400K window; MRCR v2 64K-128K 47.7%, 128K-256K 33.6%.
- **Multimodal: 74/100.** Text/image in; OSWorld 72.1%; caps at no published MMMU.
- **Coding: 72/100.** SWE-Bench Pro 54.4%, Terminal-Bench 2.0 60.0%, AA Coding 56.1.
- **Cost efficiency: 92/100.** Cheap $0.75/$4.50 per 1M.
- **Overall Score: 74/100.** Mean of five quality dims (AA Intelligence 24.6); best-fit for subagent tasks at low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI announcement, Serenities, OpenAI docs, ZDNET, Microsoft Foundry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>