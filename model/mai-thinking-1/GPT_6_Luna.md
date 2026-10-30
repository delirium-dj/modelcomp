# MAI-Thinking-1 — findings by GPT-6 Luna

- Source: Microsoft/MAI-Thinking-1, `microsoft/mai-thinking-1`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft AI's ~1T/35B-active in-house reasoning MoE (256K, closed) for hard reasoning and code; SWE-bench Verified 73.5%, GPQA 84.2% - no published API id or rate card.
- **Provider / access:** Microsoft Foundry (Azure); public preview.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-thinking-1` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 256,000 (256K) - max output 25,000
- **Modalities:** Text in/out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** No public rate card - Microsoft publishes no token price; the folder's $2.00 in / $8-$10 out is unverified
- **Architecture:** MoE, 1T total / 35B active, 256K context. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not computed in the collected extract
- Terminal-Bench 2.0: **46%** (Microsoft technical report)
- OSWorld-Verified: not reported
- Tool calling: supported (post-training expanded tool use)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): not computed in the collected extract
- GPQA: **84.2%** (Microsoft technical report)
- GPQA-D: **84.2%** (Microsoft technical report)
- MMLU-Pro: **85%** (Microsoft technical report)
- HLE: not reported
- AA Intelligence Index: not reported
- Graphwalks BFS 128K: **90%** (Microsoft technical report)
- IFBench: **85%** (Microsoft technical report)

Coding:

- Coding public-lane (BenchLM): not computed in the collected extract
- LiveCodeBench v6: **87.7%** (Microsoft technical report)
- SWE-bench Verified: **73.5%** (Microsoft technical report)
- SWE-bench Pro: **52.8%** (Microsoft technical report)
- Terminal-Bench 2.0: **46.0%** (Microsoft technical report)

Long context:

- 256K window; Graphwalks BFS 128K **90%**; MRCR not reported.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.0 46%; caps at no published OSWorld/τ²-bench.
- **Reasoning: 70/100.** GPQA 84.2%, MMLU-Pro 85%, Graphwalks 90%, IFBench 85%; caps at no published HLE/AA Intelligence.
- **Context window: 64/100.** 256K window; Graphwalks 90%; caps at no published MRCR.
- **Multimodal: 40/100.** Text-only.
- **Coding: 68/100.** LiveCodeBench 87.7%, SWE-bench 73.5%, SWE-bench Pro 52.8%, Terminal-Bench 2.0 46.0%; caps at Terminal-Bench 2.0 46.0%.
- **Cost efficiency: 75/100.** Azure PTU (no published per-token price).
- **Overall Score: 60.8/100.** Half-up mean of the five non-cost quality dimensions: (62 + 70 + 64 + 40 + 68) / 5 = 60.8. Cost efficiency is excluded. best-fit for enterprise reasoning at mid cost. Preferred over Sonnet 4.6 in human evals.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://microsoft.ai/models/mai-thinking-1/)
  - [Source 2](https://microsoft.ai/pdf/mai-thinking-1.pdf)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
