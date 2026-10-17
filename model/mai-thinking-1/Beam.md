# MAI-Thinking-1 — findings by Beam

- Source: Microsoft/MAI-Thinking-1, `microsoft/mai-thinking-1`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Thinking-1
- **Short description:** Microsoft's reasoning model (Aug 12, 2026): 1T total / 35B active MoE, 256K context. BenchLM 53.16 (#84 of 954). SWE-bench Pro 52.8%, LiveCodeBench v6 87.7%, SWE-bench Verified 73.5%. AIME 2025 97%, AIME 2026 94.5%. GPQA 84.2%. Preferred over Sonnet 4.6 in human evals.
- **Provider / access:** Microsoft Foundry (Azure); public preview.
- **Release / knowledge:** Released 2026-08-12; knowledge cutoff not stated.
- **IDs:** `microsoft/mai-thinking-1`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text in; text out; reasoning yes (adaptive); tool calling yes. Proprietary.
- **Pricing (as of 2026-10-17):** Not published (Azure PTU/pay-as-you-go).
- **Architecture:** MoE, 1T total / 35B active, 256K context. Proprietary.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed)
- Terminal-Bench 2.0: **46%** (Microsoft technical report)
- OSWorld-Verified: not reported
- Tool calling: supported (post-training expanded tool use)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): Coming soon (not computed)
- GPQA: **84.2%** (Microsoft technical report)
- GPQA-D: **84.2%** (Microsoft technical report)
- MMLU-Pro: **85%** (Microsoft technical report)
- HLE: not reported
- AA Intelligence Index: not reported
- Graphwalks BFS 128K: **90%** (Microsoft technical report)
- IFBench: **85%** (Microsoft technical report)

Coding:

- Coding public-lane (BenchLM): Coming soon
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
- **Overall Score: 60.8/100.** Mean of five quality dims (BenchLM 53.16); best-fit for enterprise reasoning at mid cost. Preferred over Sonnet 4.6 in human evals.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Microsoft AI official, BenchLM, Azure Foundry); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. MAI-Thinking-1 is Microsoft's first reasoning model, 35B-active/1T-total MoE.<|end|>>2>