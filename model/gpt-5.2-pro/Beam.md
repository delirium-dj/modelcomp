# GPT-5.2 Pro — findings by Beam

- Source: OpenAI (`openai/gpt-5.2-pro`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** OpenAI's high-compute flagship reasoning model (released 2025-12-11) with extended thinking, 400K context, and state-of-the-art math/science performance. Designed for doctoral-level research and complex agentic workflows.
- **Provider / access:** OpenAI API (`openai/gpt-5.2-pro`); Responses API only. Also Azure OpenAI / Microsoft Foundry.
- **Release / knowledge:** 2025-12-11 (OpenAI). Knowledge cutoff not separately published in sources reviewed (GPT-5.2 family).
- **IDs:** `openai/gpt-5.2-pro` (paid; no Free ID).
- **Context window:** 400,000 tokens total; 128,000 max output (Automatio / BenchmarkList).
- **Modalities:** Text and image input; text output. Tool calls, streaming, reasoning, structured outputs.
- **Pricing (as of 2026-10-22):** $21.00 / 1M input, $168.00 / 1M output. Paid only.
- **Architecture:** Proprietary high-compute reasoning model (OpenAI); inference-time compute scaling.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: **55.6%** (Automatio — terminal/CLI tasks)
- GDPval-AA / Tau3-Banking / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- DEEPSYNTH: **8.70 F1** (BenchmarkList, 89th percentile)
- Agent Island: **1.82** (BenchmarkList)
- ARC-AGI-1: **90.5%**; ARC-AGI-2: **54.2%** (BenchmarkList / Automatio)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (Automatio)
- HLE: **36.6%** (Automatio)
- MMLU: **89.6%**; MMLU Pro: **82%** (Automatio)
- AIME 2025: **100%**; MATH: **97%**; GSM8k: **99.2%** (Automatio)
- Artificial Analysis Intelligence Index: no verified public score found in sources reviewed
- Omniscience Accuracy / Hallucination Rate: no verified public score found
- LCR / MRCR: no long-context retrieval percentage published
- SimpleBench: **57.4%** (BenchmarkList)

Coding:

- SWE-bench (Verified): **80%** (Automatio — "SWE-Bench 80%")
- HumanEval: **94.5%** (Automatio)
- LiveCodeBench: **78%** (Automatio)
- MMMU: **79.5%**; ChartQA: **91.2%**; DocVQA: **94.8%** (Automatio)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE: no verified public score found

Long context:

- 400,000 token context window; no long-context retrieval percentage published in sources reviewed.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 55.6% and ARC-AGI 54.2% show solid but not frontier agentic performance; capped by no Tau-bench / GDPval / Claw-Eval coverage.
- **Reasoning: 88/100.** Exceptional reasoning (GPQA Diamond 93.2%, HLE 36.6%, MMLU 89.6%, AIME 100%). Capped by no published AA Intelligence Index and modest HLE.
- **Context window: 85/100.** 400K window lands in the high tier; scored below 90 because no retrieval measurement published.
- **Multimodal: 70/100.** Text + image in, text out; strong document/chart understanding (DocVQA 94.8%, ChartQA 91.2%). Capped at text-out only.
- **Coding: 85/100.** Strong coding (SWE-bench 80%, HumanEval 94.5%, LiveCodeBench 78%). Capped by no SciCode / DeepSWE and mid Terminal-Bench.
- **Cost efficiency: 20/100.** Very expensive at $21 / $168 per 1M tokens; reserved for high-value workflows.
- **Overall Score: 78/100.** Mean of five non-cost dims (62 + 88 + 85 + 70 + 85) / 5 = 78.0 → 78. Best fit for doctoral-level research and high-stakes math/science where accuracy outweighs cost.

---

## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-10-22
- Method: public internet research (Automatio model page, BenchmarkList, OpenAI pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.