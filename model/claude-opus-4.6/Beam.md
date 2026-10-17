# Claude Opus 4.6 — findings by Beam

- Source: Anthropic/Claude Opus 4.6, `anthropic/claude-opus-4-6`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's Opus (Feb 5, 2026) with 1M context (beta), improved coding, planning, sustaining agentic tasks; better code review/debugging. Same price as 4.5.
- **Provider / access:** Anthropic API `claude-opus-4-6`; AWS Bedrock; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released 2026-02-05; knowledge cutoff not stated.
- **IDs:** `anthropic/claude-opus-4-6`
- **Context window:** 1,000,000 tokens (beta); max output 128,000.
- **Modalities:** text, image, PDF in; text out; reasoning yes (adaptive thinking); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $5.00 / 1M input, $25.00 / 1M output, $0.50 / 1M cache read, $6.25 / 1M cache write; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **45.7** (#57/128)
- Terminal-Bench 2.0: **65.4%**
- BrowseComp: **83.7%**
- OSWorld-Verified: **72.7%**
- AndroidWorld: **62.0%**
- Claw-Eval: **70.4%**
- DeepSearchQA: **73.7%**
- CyberGym: **66.6%**
- Gert Labs: **61.85%**
- ResearchClawBench: **19.9%**
- JobBench: **36.7%**
- ApprenticeBench: **5%**
- MCP Atlas: not reported for 4.6

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **71.9** (unranked, 2 rows)
- ARC-AGI-2: not reported for 4.6 (4.8 72.1%)
- LongBench v2: not reported
- AI-Needle: not reported
- HLE / GPQA: not individually reported (GPQA 91.3%? from BenchLM compare: GPQA 91.3%, GPQA-D 89.2%, SuperGPQA 95%)
- MRCR: not reported

Coding:

- Coding public-lane (BenchLM): **46.1** (#52/150)
- SWE-bench Verified: **80.8%**
- SWE-bench Verified*: **75.6%**
- LiveCodeBench v6: not reported
- SWE-bench Pro: not reported

Long context:

- 1M window (beta); MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): **74.5** (#25/54)
- MMMU-Pro: **77.3%**
- ERQA: **51.6%**
- ScreenSpot Pro: **83.1%**

### Normalized scores (1–100)

- **Tool use: 78/100.** Agentic lane #57/128 (45.7), Terminal-Bench 2.0 65.4%, BrowseComp 83.7%, OSWorld 72.7%, DeepSearchQA 73.7%, Claw-Eval 70.4%; caps at ResearchClawBench 19.9%.
- **Reasoning: 72/100.** Reasoning lane 71.9 (2 rows), GPQA 91.3%, SuperGPQA 95%; caps at no published ARC-AGI/HLE for 4.6.
- **Context window: 82/100.** 1M window (beta); caps at no published MRCR retrieval.
- **Multimodal: 82/100.** Text/image/PDF in; MMMU-Pro 77.3%, ScreenSpot Pro 83.1%, ERQA 51.6%.
- **Coding: 74/100.** SWE-bench Verified 80.8%, coding lane #52/150 (46.1); caps at no SWE-bench Pro.
- **Cost efficiency: 75/100.** Paid $5/$25 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 62.38); best-fit for agentic coding at mid cost (superseded by 4.7/4.8).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic news, BenchLM, ucstrategies); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>