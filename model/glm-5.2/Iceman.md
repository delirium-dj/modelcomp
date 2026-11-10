# GLM 5.2 — findings by Iceman

- Source: Z.ai/GLM-5.2
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai’s GLM-5.2 is an MIT-licensed 753B/40B-active MoE flagship model for long-horizon coding and agentic tasks with a solid 1M-token context.
- **Provider / access:** Z.ai API and open weights on Hugging Face (`zai-org/GLM-5.2`, MIT license). Local metadata lists `opencode/glm-5.2`, $1.40/$4.40 pricing, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card/blog reviewed 2026-11-10 (GLM-5.2 release; technical report references arXiv 2602.15763/2603.12201 context). Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `GLM-5.2`, `zai-org/GLM-5.2`.
- **Context window:** 1,000,000 tokens (HF card/local metadata).
- **Modalities:** Text input/output (text-only model).
- **Pricing (as of 2026-11-10):** Z.ai API $1.40 / 1M input, $4.40 / 1M output; free developer quota on Huawei CodeArts noted in local metadata. Open weights free to self-host (MIT).
- **Architecture:** MoE transformer, 753B parameters (40B active per local metadata/context), IndexShare sparse attention optimization, improved MTP/speculative decoding, 1M context (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `zai-org/GLM-5.2` benchmark table (GLM-5.2 column) unless noted. Footnotes describe evaluation settings (e.g. 400K context for some coding evals, specific harnesses/temperatures).

Agent / tool use:

- Terminal Bench 2.1 (Terminus-2): **81.0**
- Terminal Bench 2.1 (Best Reported Harness): **82.7**
- MCP-Atlas (Public Set): **76.8**
- Tool-Decathlon: **48.2**
- HLE (w/ Tools): **54.7**

Reasoning / knowledge:

- HLE: **40.5** (text-only subset by default per footnote)
- HLE (w/ Tools): **54.7**
- CritPt: **20.9**
- AIME 2026: **99.2**
- HMMT Nov. 2025: **94.4**
- HMMT Feb. 2026: **92.5**
- IMOAnswerBench: **91.0**
- GPQA-Diamond: **91.2**

Coding:

- SWE-bench Pro: **62.1**
- NL2Repo: **48.9**
- DeepSWE: **46.2**
- ProgramBench: **63.7**
- Terminal Bench 2.1 (Terminus-2): **81.0**
- Terminal Bench 2.1 (Best Reported Harness): **82.7**
- FrontierSWE (Dominance): **74.4**
- PostTrainBench: **34.3**
- SWE-Marathon: **13.0**

Long context:

- Solid 1M-token context emphasized; some coding evals run at 400K context per footnotes. No standalone MRCR/RULER/AA-LCR numeric score extracted from table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 90/100.** Strong agentic/tool performance (Terminal Bench 2.1 81.0–82.7, MCP-Atlas 76.8, Tool-Decathlon 48.2, HLE w/ Tools 54.7) for long-horizon coding agents.
- **Reasoning: 89/100.** Excellent reasoning/math results (AIME 2026 99.2, HMMT 92.5–94.4, IMOAnswerBench 91.0, GPQA-Diamond 91.2, HLE 40.5, CritPt 20.9).
- **Context window: 95/100.** Solid 1M-token context designed for long-horizon tasks.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 90/100.** Very strong coding/agentic coding benchmark profile (SWE-bench Pro 62.1, NL2Repo 48.9, DeepSWE 46.2, ProgramBench 63.7, Terminal Bench 2.1 81.0–82.7, FrontierSWE 74.4) with some harder long-horizon tasks lower (SWE-Marathon 13.0).
- **Cost efficiency: 88/100.** MIT open weights and moderate hosted pricing ($1.40/$4.40) with strong capability; self-hosting large 753B MoE requires significant compute.
- **Overall Score: 81/100.** Mean of the five non-cost dims (90, 89, 95, 40, 90) = 80.8 → 81. Best fit for long-horizon, text-only coding and agentic workflows requiring strong reasoning and 1M context.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [GLM-5.2 model card (Hugging Face)](https://huggingface.co/zai-org/GLM-5.2)
  - Local repository metadata consulted: `model/glm-5.2/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
