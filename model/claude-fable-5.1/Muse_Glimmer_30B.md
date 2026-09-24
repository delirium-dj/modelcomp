# Claude Fable 5.1 — findings by Muse Glimmer 30B

- Source: Anthropic/Claude Fable 5.1
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Production-safeguarded deployment from Anthropic targeting demanding reasoning and agentic workloads. Generally available model sharing weights with Claude Mythos 5.1 trusted-access variant.
- **Provider / access:** Anthropic API `anthropic/claude-fable-5-1`; Chat Completions API.
- **Release / knowledge:** 2026-09-01 release; knowledge cutoff not publicly confirmed.
- **IDs:** anthropic/claude-fable-5-1
- **Context window:** 1M tokens input / 128K tokens output. Verified via llm-stats and BenchLM.
- **Modalities:** text and image input; text output; reasoning enabled; tool calls supported; JSON mode supported.
- **Pricing (as of 2026-09-24):** $10.00 / 1M input, $0.25 / 1M cached input, $50.00 / 1M output via Anthropic.
- **Architecture:** proprietary; parameter count not disclosed; not open-weights.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **85.0%** (benchlm.ai/models/claude-fable-5-1)
- Terminal-Bench 4.0: **55.80%** (benchlm.ai)
- Tau3-Banking / Tau2-Bench: **47.2%** (AA Tau3 Banking, benchlm.ai)
- GDPval-AA: **1735** Elo (benchlm.ai)
- GDPval-AA normalized: **61.7%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **77.8%** Toolathlon Verified (benchlm.ai); Toolathlon Verified Pass@3 **81.5%** (benchlm.ai)
- OSWorld 2.0: **41.7%** (benchlm.ai)
- AutomationBench: **31.4%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** AA, **93.4%** Vals (benchlm.ai)
- HLE: **65%** (benchlm.ai); HLE w/o tools **60.9%** (benchlm.ai)
- LCR / MLCR: **85.3%** AA-LCR (benchlm.ai); MLCR-AA **71.1%** (benchlm.ai)
- CritPt: **29.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index / BenchLM overall: **53.4** (benchlm.ai)
- Omniscience Accuracy / Hallucination Rate: **67.2%** / **72.6%** (benchlm.ai)

Coding:

- SWE-bench Verified / SWE-Pro: **81.2%** SWE-bench Pro (benchlm.ai)
- LiveCodeBench: **90.5%** LiveCodeBench Vals (benchlm.ai)
- SciCode / AA-SciCode: **63.1%** (benchlm.ai)
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **67.4%** DeepSWE (benchlm.ai); AA Coding Index **81.6%** (benchlm.ai); ProgramBench **87.6%** (benchlm.ai)

Long context:

- no long-context retrieval reported

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 86/100.** Terminal-Bench 2.1 Vals 85.0% and GDPval Elo 1735 are near-frontier; capped by AA Tau3 Banking 47.2% and OSWorld 41.7%.
- **Reasoning: 90/100.** GPQA Diamond 93.4-93.7% and AA-LCR 85.3% with HLE 65% support frontier reasoning; capped by CritPt 29.7% and HLE <70%.
- **Context window: 95/100.** Per tier mapping ≥1M =95-100; verified 1M input/128K output via llm-stats/BenchLM; capped at 95 due to no public 512K+ retrieval % reported.
- **Multimodal: 65/100.** Text + image input, text output. +image in tier =60-70 per methodology.
- **Coding: 78/100.** SWE-Pro 81.2%, LiveCodeBench Vals 90.5% and AA Coding Index 81.6% are strong; capped by DeepSWE 67.4% below 74% frontier and AA-SciCode 63.1%.
- **Cost efficiency: 30/100.** $10/$50 pricing per methodology ~30.
- **Overall Score: 83/100.** Mean of Tool 86 + Reasoning 90 + Context 95 + Multimodal 65 + Coding 78 = 82.8 → 83. Best-fit: high-reasoning agentic model with paid pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (nvidia/meta/muse-glimmer-30b)** — 2026-09-24
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
