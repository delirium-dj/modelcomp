# GLM 5 - findings by GPT 5.6 Terra

- Source: Z.AI/GLM-5
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5
- **Short description:** Z.AI's MIT-licensed 744B/40B-active open-weight MoE for systems engineering and long-horizon agentic coding. It is the exact upstream model for `opencode/glm-5`, not a later GLM-5.x variant.
- **Provider / access:** Z.AI API and local deployment; OpenCode route `opencode/glm-5`; upstream weights `zai-org/GLM-5`.
- **Release / knowledge:** 2026-02-11 release (Artificial Analysis); vendor model card does not state a knowledge cutoff.
- **IDs:** `zai-org/GLM-5`; OpenCode `opencode/glm-5`.
- **Context window:** 200,000 tokens total; Z.AI's published SWE-bench configuration uses 200K context and its Terminal-Bench configuration uses 128K.
- **Modalities:** Text input and output; reasoning and tool-call parser support for local serving. No image, audio, video, or non-text output is documented.
- **Pricing (as of 2026-10-18):** MIT open weights can be self-hosted; Artificial Analysis provider median is $1.00 input and $3.20 output per 1M tokens.
- **Architecture:** 744B total / 40B active sparse MoE with DeepSeek Sparse Attention; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **56.2% / 60.7%** on the original/verified Terminus 2 setup; MCP-Atlas public set: **67.8%** (Z.AI model card: https://huggingface.co/zai-org/GLM-5/raw/main/README.md).
- Tau2-Bench: **89.7%**; BrowseComp with context management: **75.9%**; Tool-Decathlon: **38.0%** (Z.AI model card).
- Artificial Analysis Tau2-Bench: **98.2%** and Gert Labs: **50.99%** (indexed by BenchLM: https://benchlm.ai/models/glm-5).

Reasoning / knowledge:

- GPQA Diamond: **86.0%**; HLE without / with tools: **30.5% / 50.4%** (Z.AI model card).
- AA-LCR: **75.7%**; CritPt: **2.0%**; Artificial Analysis Intelligence Index: **27.9** (Artificial Analysis data indexed by BenchLM: https://benchlm.ai/models/glm-5).
- AIME 2026 I: **92.7%** and HMMT November 2025: **96.9%** (Z.AI model card).

Coding:

- SWE-bench Verified: **77.8%**; SWE-bench Multilingual: **73.3%** (Z.AI model card).
- Terminal-Bench 2.0: **56.2% / 60.7%** (Z.AI model card); BenchLM also lists LiveCodeBench **81.9%** and Vibe Code Bench v1.1 **23.4%** from external trackers.

Long context:

- AA-LCR: **75.7%** (Artificial Analysis result indexed by BenchLM); published vendor test setups use 128K-200K rather than proving retrieval at a larger window.

### Normalized scores (1-100)

- **Tool use: 78/100.** Tau2-Bench and BrowseComp are high and MCP-Atlas is solid, but Terminal-Bench is only 56.2-60.7% and Tool-Decathlon is 38.0%.
- **Reasoning: 76/100.** GPQA Diamond (86.0%), HLE with tools (50.4%), and AA-LCR (75.7%) are strong, while HLE without tools (30.5%), CritPt (2.0%), and the estimated 27.9 Intelligence Index limit the score.
- **Context window: 75/100.** The verified 200K window meets the bottom of the 200K-500K tier, with AA-LCR 75.7% supporting a modest uplift rather than upper-tier retrieval.
- **Multimodal: 15/100.** GLM-5 is documented as text input/output only.
- **Coding: 82/100.** SWE-bench Verified (77.8%), SWE-bench Multilingual (73.3%), and LiveCodeBench (81.9%) are strong; moderate terminal results and Vibe Code Bench at 23.4% prevent a frontier score.
- **Cost efficiency: 93/100.** MIT self-hosting is token-free, while the $1.00/$3.20 provider median remains near the favorable paid reference tier despite the large serving footprint.
- **Overall Score: 65/100.** `(78 + 76 + 75 + 15 + 82) / 5 = 65.2`, rounded half-up; a text-only open model for high-capability coding and tool workflows with provider-independent deployment options.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-18
- Method: Z.AI's exact model card plus Artificial Analysis, BenchLM, and BenchmarkList cross-checking; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
