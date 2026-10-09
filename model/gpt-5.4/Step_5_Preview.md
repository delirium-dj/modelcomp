# GPT-5.4 — findings by Step 5 Preview

- Source: OpenAI (`gpt-5.4`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's March 2026 frontier release (2026-03-05) — combines GPT-5.3-Codex's coding strengths with leading knowledge-work and computer-use capability for longer-running tool-using tasks, at lower latency across reasoning efforts than its Codex sibling. Strong agentic-terminal and ARC-AGI-2 results; later superseded by GPT-5.5 (April 2026) and the GPT-5.6/6 generations.
- **Provider / access:** OpenAI API `gpt-5.4` (Responses + Chat Completions). No OpenCode Zen Free ID found — paid API only.
- **Release / knowledge:** 2026-03-05. Knowledge cutoff not disclosed in the sources reviewed.
- **IDs:** `gpt-5.4` (OpenAI).
- **Context window:** ~1,050,000 tokens total / 922K max input / 128K max output (per third-party comparison tables); MRCR v2 evaluated at 4K–8K and 512K–1M ranges.
- **Modalities:** Text + image in → text out; reasoning effort levels; function calling, web search, code execution.
- **Pricing (as of 2026-10-09):** ~$10 / MTok input, ~$30 output (approximate third-party listing — verify against OpenAI's live pricing page before budgeting); no free tier.
- **Architecture:** Proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **75.1%** (OpenAI launch — #3/83 at publication)
- Terminal-Bench 2.1: **78.3%** (BenchmarkList — #3/11)
- Terminal-Bench Hard: **57.6%** (AA — #4/326)
- OSWorld-Verified: **75%** (OpenAI launch)
- MCP-Atlas: **70.6%** (OpenAI comparison table)
- BrowseComp: **82.7%** (OpenAI); DeepSearchQA: **73.6%**
- Toolathlon: **54.6%**; τ²-Bench Telecom: **98.9%** (OpenAI) / 87.1% (BenchmarkList); τ³-Banking: **39.6%**
- GDPval-AA: **Elo 1307** / **37.4%** (AA)
- APEX-Agents: **33.3%** (AA) / 52.7% (BenchmarkList, #2/16)
- Claw-Eval: **60.3%** (leaderboard); ClawEval-Live 63.8%; ClawProBench 56.73
- AutomationBench: **11.6%** (BenchmarkList, 26th pct); Agents' Last Exam: **20.5%** (35th pct); JobBench 38.9%

Reasoning / knowledge:

- GPQA Diamond: **92.8%** (OpenAI launch) / **92.0%** (AA)
- HLE: **52.1% with tools** (OpenAI comparison table) / **39.8% without tools** (OpenAI) / **43.7%** (AA)
- ARC-AGI-2: **74.0%** (BenchmarkList — #2/8); ARC-AGI-1: **93.7%** (#4/19)
- Artificial Analysis Intelligence Index: **39.0**
- SciCode: **57%**; IFBench: **74.0**; AA-Omniscience index 5.8, accuracy 50.8%, hallucination rate 91.7%
- MedXpertQA (Text) 59.6%; HealthBench Hard 40.1%

Coding:

- SWE-bench Pro: **57.7%** (OpenAI launch; BenchmarkList 59.1% ±3.56, #7/58)
- SWE-bench Verified: **78.2%** (BenchmarkList — #4/13)
- LiveCodeBench: **84.1%**; LiveCodeBench Pro: **87.5%**
- Vibe Code Bench v1.1: **67.4%** (Vals — #41/194)
- AA Coding Index: **71.0**; DeepSWE v1.1: **51.8%** (#26/52)
- React Native Evals 85.3%; Code Migration 35.0%; LMArena Elo 1475

Long context:

- MRCR v2 8-needle: **86.8%** at the 4K–8K range (OpenAI-published); **36.6% at 512K–1M** (OpenAI-published — the generation's targeted fix, up from GPT-5.3's level); AA-LCR and other long-context measures listed by verdictpal without extracted values

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.0 75.1%, TB2.1 78.3%, OSWorld-Verified 75%, MCP-Atlas 70.6% and BrowseComp 82.7% are solidly mid-frontier; capped by GDPval-AA 37.4%, APEX-Agents 33.3% (AA), AutomationBench 11.6%, Agents' Last Exam 20.5% and no published Terminal-Bench 4.0 score.
- **Reasoning: 81/100.** GPQA 92.8%/92.0% (AA), HLE 52.1% with tools and ARC-AGI-2 74.0% (#2 at publication) are frontier-band, with the AA Index at 39.0; capped by the 91.7% hallucination rate on AA-Omniscience and SciCode 57% — knowledge reliability is the weak column.
- **Context window: 88/100.** ~922K input / 128K output sits at the bottom of the 500K–1M band; MRCR v2 reads 86.8% at 4K–8K but only 36.6% at 512K–1M — retrieval at the top of the window is this generation's known weakness, so it cannot reach the 1M tier.
- **Multimodal: 68/100.** Text + image in → text out is the 60–70 band; no MMMU-Pro/CharXiv figure was found for GPT-5.4 in the sources reviewed, so it sits mid-band rather than at the top.
- **Coding: 78/100.** SWE-bench Pro 57.7% (59.1% on the leaderboard), SWE-bench Verified 78.2%, LiveCodeBench 84.1% and Vibe Code Bench 67.4% are frontier-adjacent; capped by DeepSWE v1.1 51.8%, Code Migration 35.0% and the absence of CursorBench/FrontierCode entries — Fable 5 and GPT-5.6 Sol later opened an 11–23-point lead on the hard agentic suites.
- **Cost efficiency: 40/100.** ~$10/$30 per MTok (third-party approximation) sits between the methodology's $3/$15 ≈ 60 and $10/$50 ≈ 30 tiers, closer to the latter on output; no free tier and no batch discount data found in the reviewed sources.
- **Overall Score: 78/100.** Best-fit recommendation: a solid March-2026 frontier model — strong terminal/computer-use agents and ARC-AGI-2 at Opus-class reasoning; long-context retrieval past 512K and hard SWE-Pro agentics are the known gaps, and GPT-5.5/GPT-6 Sol now beat it at similar or lower prices.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (OpenAI GPT-5.4 launch page, Artificial Analysis, BenchmarkList, BenchLM, ARMES Docs, modelscale, LLM Registry, SWEN.AI, verdictpal); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.7.md`, using the same headings.
