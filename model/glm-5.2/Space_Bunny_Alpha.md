# GLM-5.2 — findings by Space Bunny Alpha

- Source: Z.ai (`glm-5.2`; open-weight and API)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's open-weight MoE model for long-horizon agentic engineering, flexible-effort coding, and enterprise software-engineering workflows.
- **Provider / access:** Z.ai API (`glm-5.2`); Hugging Face `zai-org/GLM-5.2`; OpenCode Zen `opencode/glm-5.2`; local SGLang, vLLM, and Transformers deployment are documented.
- **Release / knowledge:** Z.ai's model card links the GLM-5.2 release materials; Artificial Analysis lists 2026-06-16. No reliable knowledge cutoff was shown.
- **IDs:** `glm-5.2`; `zai-org/GLM-5.2`; `opencode/glm-5.2`.
- **Context window:** 1M tokens (official model card and Artificial Analysis). The official evaluation notes use up to 128K maximum output in several long-context settings; a single universal output limit was not shown.
- **Modalities:** Text input/output; reasoning effort is configurable; tool calls, JSON output, local serving, and long-horizon agent workflows are supported. Artificial Analysis explicitly reports text-only input for the max configuration.
- **Pricing (as of 2026-09-24):** Artificial Analysis reports $1.40 per 1M input and $4.40 per 1M output tokens, with an 81% cache discount. A free Zen tier is listed in the repository metadata, but the paid rate is used for this report.
- **Architecture:** Open-weight MoE, approximately 753B total and 40B active parameters; MIT license; IndexShare sparse attention reduces per-token FLOPs at 1M context.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.0%** (official Z.ai model card, Terminus-2 harness)
- Terminal-Bench 2.1, best reported harness: **82.7%** (official Z.ai model card; separate harness)
- MCP-Atlas Public Set: **76.8%**; Tool-Decathlon: **48.2%** (official Z.ai model card)
- GDPval-AA, Tau3-Banking, Claw-Eval, and Toolathon: **no verified public exact value found**

Reasoning / knowledge:

- HLE: **40.5%** without tools and **54.7%** with tools (official Z.ai model card; rows kept separate)
- GPQA-Diamond: **91.2%**; Vals AI GPQA Diamond: **85.6%** (official model card and BenchLM, kept separate)
- CritPt: **20.9%**; MMLU-Pro Vals: **86.7%** (official Z.ai model card / BenchLM)
- AIME 2026: **99.2%**; HMMT Nov. 2025: **94.4%**; HMMT Feb. 2026: **92.5%** (official Z.ai model card)
- Artificial Analysis Intelligence Index: **34/100**, rank **#11/113** (Artificial Analysis, accessed 2026-09-24)

Coding:

- SWE-bench Pro: **62.1%** (official Z.ai model card)
- DeepSWE: **46.2%**; ProgramBench: **63.7%** (official Z.ai model card)
- SWE-bench (Vals AI): **82.8%**; LiveCodeBench (Vals AI): **69.5%** (BenchLM, Vals AI leaderboard)
- SWE-Marathon: **13.0%**; PostTrainBench: **34.3%** (official Z.ai model card)
- Exact SWE-bench Verified, SciCode, and Vibe Code Bench: **no verified public exact value found**

Long context:

- Native context: **1M tokens** (official Z.ai model card)
- FrontierSWE (Dominance): **74.4%** (official model card; 1M context, max effort, 128K maximum output)
- No independent retrieval-at-length score was found.

Sources consulted: [official GLM-5.2 Hugging Face model card](https://huggingface.co/zai-org/GLM-5.2/raw/main/README.md), [Artificial Analysis GLM-5.2](https://artificialanalysis.ai/models/glm-5-2), and [BenchLM GLM-5.2](https://benchlm.ai/models/glm-5-2), accessed 2026-09-24. Official and Vals AI values are kept distinct.

### Normalized scores (1–100)

- **Tool use: 93/100.** Terminal-Bench 81.0–82.7%, MCP-Atlas 76.8%, and Tool-Decathlon 48.2% provide strong agent evidence; missing GDPval, Tau3, and Claw values cap certainty.
- **Reasoning: 91/100.** GPQA 91.2%, AIME 99.2%, MMLU-Pro 86.7%, and HLE-with-tools 54.7% support strong reasoning, while CritPt 20.9% and missing hallucination metrics limit the maximum.
- **Context window: 95/100.** The 1M context is verified and FrontierSWE 74.4% is a measured 1M-context result; no independent retrieval test was found.
- **Multimodal: 15/100.** Artificial Analysis explicitly reports text-only input for the max configuration.
- **Coding: 91/100.** SWE-bench Pro 62.1%, Vals SWE 82.8%, DeepSWE 46.2%, and LiveCodeBench 69.5% support strong coding; SWE-Marathon 13.0% is a material caveat.
- **Cost efficiency: 75/100.** The paid $1.40/$4.40 route is expensive for an open-weight model, though a free Zen tier is listed in the curated metadata.
- **Overall Score: 77.0/100.** (93 + 91 + 95 + 15 + 91) / 5 = 77.0. Best fit: long-context text coding and agent workflows where Z.ai's 1M context, flexible reasoning, and open weights are valuable.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of the official Z.ai model card, Artificial Analysis, and BenchLM; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
