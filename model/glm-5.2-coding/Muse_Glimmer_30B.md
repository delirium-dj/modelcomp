# GLM-5.2 Coding — findings by Muse Glimmer 30B

- Source: Zhipu AI / glm-5.2-coding
- Date: 2026-10-24
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.2
- **Short description:** Flagship foundation model built for long-horizon tasks with usable 1M-token context; positioned for project-scale engineering, multi-step coding agents and agentic engineering.
- **Provider / access:** Zhipu AI / Z.ai. Open weights MIT on Hugging Face, ModelScope; commercial API on Z.ai Open Platform. API alias glm-5.2-coding maps to GLM-5.2.
- **Release / knowledge:** Technical report GLM-5 arXiv:2602.15763 submitted 17 Feb 2026; model card/blog rollout June 2026. Knowledge cutoff not disclosed.
- **IDs:** Hugging Face `zai-org/GLM-5.2`; ModelScope `ZhipuAI/GLM-5.2`; API `glm-5.2`
- **Context window:** 1M tokens; max output 128K.
- **Modalities:** Text input/output only.
- **Pricing as of 2026-10-24:** Input $1.4 /1M, Cached input $0.26 /1M, Output $4.4 /1M.
- **Architecture:** MoE 744B total / 40B active; DeepSeek Sparse Attention with IndexShare; MTP layer for speculative decoding; MIT license.

### Raw benchmarks found

**Hugging Face model card benchmark table**
Reasoning
- Humanity’s Last Exam HLE 40.5
- HLE w/ Tools 54.7
- CritPt 20.9
- AIME 2026 99.2
- HMMT Nov 2025 94.4
- HMMT Feb 2026 92.5
- IMOAnswerBench 91.0
- GPQA-Diamond 91.2

Coding
- SWE-bench Pro 62.1
- NL2Repo 48.9
- DeepSWE 46.2
- ProgramBench 63.7
- Terminal Bench 2.1 Terminus-2 81.0
- Terminal Bench 2.1 Best Reported Harness 82.7
- FrontierSWE Dominance 74.4
- PostTrainBench 34.3
- SWE-Marathon 13.0

Agentic
- MCP-Atlas Public Set 76.8
- Tool-Decathlon 48.2
Source: https://huggingface.co/zai-org/GLM-5.2

**GitHub repo zai-org/GLM-5**
- Confirms GLM-5.2 744B-A40B BF16; “On standard coding benchmarks, GLM-5.2 is the strongest open-source model… 81.0 vs 62.0 on Terminal-Bench 2.1 and 62.1 vs 58.4 on SWE-bench Pro.”
Source: https://github.com/zai-org/GLM-5

**Z.ai docs**
- 1M context, text-only, max output 128K.
Source: https://docs.z.ai/guides/llm/glm-5.2.md

**Conflicts / notes**
- Parameter count: GitHub 744B total/40B active vs Hugging Face metadata 753B params – rounding/counting method difference.
- No separate public model card for distinct glm-5.2-coding weights; coding alias appears to be API routing name for same GLM-5.2 checkpoint.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal Bench 2.1 81.0-82.7, MCP-Atlas 76.8, Tool-Decathlon 48.2. Strong agentic tool use.
- **Reasoning: 78/100.** GPQA-Diamond 91.2, AIME 2026 99.2, HLE 40.5 / w/Tools 54.7. Strong math/reasoning, general knowledge moderate.
- **Context window: 95/100.** 1M verified.
- **Multimodal: 15/100.** Text-only.
- **Coding: 75/100.** SWE-bench Pro 62.1, ProgramBench 63.7, DeepSWE 46.2, Terminal Bench 2.1 81-82.7.
- **Cost efficiency: 70/100.** $1.4/$4.4 per 1M; competitive for frontier open MoE.
- **Overall Score: 68/100.** Mean of Tool 78, Reasoning 78, Context 95, Multimodal 15, Coding 75. Strong coding/agentic open model with text-only limitation.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-24
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
