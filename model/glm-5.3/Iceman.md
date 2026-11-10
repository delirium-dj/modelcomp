# GLM 5.3 — findings by Iceman

- Source: Z.ai/GLM-5.3
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.ai’s GLM-5.3 is a 753B-parameter flagship coding/agentic model (same base as GLM-5.2, improved post-training) optimized for complex coding, long-horizon tasks, and cybersecurity capabilities.
- **Provider / access:** Z.ai model/API and open weights on Hugging Face (`zai-org/GLM-5.3`, GLM-5.3 license). Local metadata lists `opencode/glm-5.3` and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10 (GLM-5.3 release). Knowledge cutoff not explicitly stated in reviewed sources.
- **IDs:** `GLM-5.3`, `zai-org/GLM-5.3`.
- **Context window:** 1M total context (local metadata/HF context implied by long-context eval setup; card emphasizes 1M context in benchmark notes). Exact served limits may vary by provider.
- **Modalities:** Text input/output (local metadata states text in/out; card focuses on coding/agentic text workflows).
- **Pricing (as of 2026-11-10):** Hosted pricing varies (local metadata cites Zen paid $1.40/$4.40 per 1M in/out, cached read $0.26). Open weights available under GLM-5.3 license (not MIT).
- **Architecture:** Large MoE model (753B parameters per metadata/HF context; FP8 variants available). Proprietary training details not fully disclosed beyond card.

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `zai-org/GLM-5.3` unless noted. Benchmark harness/config details are specified in the card footnotes.

Agent / tool use:

- Terminal Bench 2.1: **88.2**
- Terminal Bench 3.0: **28.3**
- Toolathlon Verified: **73.0**
- AutomationBench (v1.0.6): **48.2**
- Agents' Last Exam (ALE-CLI): **28.5**
- HLE w/ Tools: **62.5**
- GDPval-AA v2: **1769**
- CyberGym: **84.5** (SOTA claimed in card)
- ExploitGym (2h / 6h): **105 / 130**
- ExploitBench: **54.4**

Reasoning / knowledge:

- HLE w/ Tools: **62.5**
- GPQA Diamond: **no verified public score found** in reviewed card
- AIME 2025: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**

Coding:

- DeepSWE (v1.1): **66.9**
- NL2Repo: **58.0**
- ProgramBench (Almost Solved): **19.0**
- FrontierSWE: **78.1**
- SWE-Marathon (v1.1): **42.5**
- PostTrainBench: **39.8**
- Terminal Bench 2.1 / 3.0: **88.2 / 28.3** (terminal/agentic coding)

Long context:

- 1M context referenced in local metadata/usage context; benchmark runs used large contexts in several evals (e.g. 300K–1M in footnotes). No standalone MRCR/RULER/GraphWalks numeric score extracted.

Multimodal:

- Text-only model per local metadata/reviewed card context.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 93/100.** Exceptional agentic/tool-use and cyber/automation performance (Terminal Bench 2.1 88.2, Toolathlon Verified 73.0, AutomationBench 48.2, HLE w/ Tools 62.5, CyberGym 84.5, ExploitBench 54.4, GDPval-AA v2 1769) indicates top-tier tool-mediated capability.
- **Reasoning: 86/100.** Strong reasoning in tool-augmented/hard-task settings (HLE w/ Tools 62.5, ALE-CLI 28.5), but canonical non-tool reasoning benchmark coverage (GPQA/AIME/AA Index) was not extracted from reviewed card.
- **Context window: 95/100.** 1M-class context support for long-horizon agentic/coding workflows (as indicated by metadata and eval setups) is excellent.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability indicated.
- **Coding: 92/100.** Very strong coding/agentic coding results (DeepSWE 66.9, NL2Repo 58.0, FrontierSWE 78.1, SWE-Marathon 42.5, PostTrainBench 39.8, Terminal Bench 2.1 88.2) support top-tier software engineering performance.
- **Cost efficiency: 84/100.** Open weights exist but under custom (non-MIT) license; hosted pricing is moderate-to-high for frontier capability.
- **Overall Score: 81/100.** Mean of the five non-cost dims (93, 86, 95, 40, 92) = 81.2 → 81. Best fit for long-context agentic coding, terminal automation, and cybersecurity/tool-use workflows where multimodal input is not required.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [GLM-5.3 model card (Hugging Face)](https://huggingface.co/zai-org/GLM-5.3)
  - Local repository metadata consulted: `model/glm-5.3/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
