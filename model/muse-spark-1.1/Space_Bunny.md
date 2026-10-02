# Muse Spark 1.1 — findings by Space Bunny Alpha

- Source: Meta (`Muse Spark 1.1`; reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's proprietary reasoning model for coding, multimodal knowledge work, and long-horizon agents; an earlier member of the Muse Spark family.
- **Provider / access:** OpenCode Zen `opencode/muse-spark-1.1`; the OpenCode model catalog did not expose a distinct public Muse Spark 1.1 ID in the reviewed endpoint response, so the model is evaluated from the BenchLM/Meta evaluation record.
- **Release / knowledge:** BenchLM lists July 9, 2026. No knowledge cutoff was shown in the reviewed sources.
- **IDs:** Muse Spark 1.1; no verified Zen Free ID for this version was found.
- **Context window:** 1M tokens (BenchLM, accessed 2026-09-24). Exact input/output split was not shown.
- **Modalities:** Text and image input; text output; reasoning and tool calls supported. Exact provider modality table was not found.
- **Pricing (as of 2026-09-24):** No comparable first-party API price was published in the BenchLM catalog; OpenCode Zen pricing should be checked at request time. This report does not infer a free tier.
- **Architecture:** Proprietary; Meta has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- BenchLM overall: **66.4/100**, rank **#22/196** (BenchLM, accessed 2026-09-24; composite)
- Terminal-Bench 2.1: **80.0%** (BenchLM, provider-exact Meta evaluation report)
- OSWorld-Verified: **80.8%**; OSWorld 2.0: **14.2%** (BenchLM, provider-exact Meta evaluation report; different benchmark versions)
- Toolathlon: **75.6%** (BenchLM, provider-exact Meta evaluation report)
- WebArena-Verified: **69%**; CyberGym: **59.0%**; Finance Agent v2: **57.2%** (BenchLM, provider-exact Meta evaluation report)
- GDPval-AA, Tau3-Banking, Claw-Eval, and MCP-Atlas: **no verified public exact value found**

Reasoning / knowledge:

- GPQA Diamond (Vals AI): **91.2%** (BenchLM, Vals AI leaderboard)
- HLE with tools: **62.1%**; HLE without tools: **52.2%** (BenchLM, provider-exact Meta evaluation report)
- MMLU-Pro (Vals): **88.7%** (BenchLM, Vals AI leaderboard)
- MRCR 1M: **54.1%** (BenchLM, provider-exact Meta evaluation report)
- LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Pro: **61.5%** (BenchLM, provider-exact Meta evaluation report)
- SWE-bench (Vals AI): **82.0%** (BenchLM, Vals AI leaderboard)
- LiveCodeBench (Vals AI): **85.9%** (BenchLM, Vals AI leaderboard)
- DeepSWE: **53.3%** (BenchLM, provider-exact Meta evaluation report)
- Terminal-Bench 2.1: **80.0%**
- SciCode, Vibe Code Bench, and exact SWE-bench Verified: **no verified public exact value found**

Long context:

- MRCR 1M: **54.1%** (BenchLM, provider-exact Meta evaluation report)
- Native context capacity: **1M tokens** (BenchLM)

Sources consulted: [BenchLM Muse Spark 1.1 profile](https://benchlm.ai/models/muse-spark-1-1), [OpenCode Zen documentation](https://opencode.ai/docs/zen), and the OpenCode Zen model catalog, accessed 2026-09-24. The public Zen catalog did not expose a distinct Muse Spark 1.1 entry in the fetched response; no price or ID is invented.

### Normalized scores (1–100)

- **Tool use: 94/100.** Terminal-Bench 80.0%, Toolathlon 75.6%, WebArena 69%, and OSWorld-Verified 80.8% provide strong measured agent evidence; missing Tau, GDPval, and MCP values cap certainty.
- **Reasoning: 88/100.** GPQA 91.2%, HLE 62.1% with tools, MMLU-Pro 88.7%, and the 66.4 composite support strong reasoning; missing LCR/CritPt values cap confidence.
- **Context window: 95/100.** The 1M context is verified and MRCR 1M 54.1% is a direct long-context measurement.
- **Multimodal: 65/100.** Text/image input with text output is reported by the independent model record; exact provider modality documentation was not found.
- **Coding: 91/100.** SWE-bench Vals 82.0%, LiveCodeBench Vals 85.9%, SWE-bench Pro 61.5%, and DeepSWE 53.3% show strong coding; exact Verified/SciCode values are missing.
- **Cost efficiency: 75/100.** No comparable first-party price was published, so the score is based on the model being a paid/catalog provider route with no verified free price rather than a claimed zero cost.
- **Overall Score: 86.6/100.** (94 + 88 + 95 + 65 + 91) / 5 = 86.6. Best fit: multimodal coding and long-horizon tool agents where benchmark breadth matters; verify current Zen access and pricing.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of BenchLM's provider-exact evaluation record, OpenCode Zen documentation, and the OpenCode model catalog; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
