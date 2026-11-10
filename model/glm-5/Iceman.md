# GLM 5 — findings by Iceman

- Source: Z.ai/GLM-5
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5
- **Short description:** Z.ai’s GLM-5 is an open-weight 744B/40B-active MoE model (MIT, 200K context) for complex systems engineering and long-horizon agentic tasks, foundational to the GLM-5.x line.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-5`, MIT license) and Z.ai API / hosted providers. Local metadata lists `opencode/glm-5`, pricing $1.00/$3.20 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `GLM-5`, `zai-org/GLM-5`.
- **Context window:** 200,000 tokens total (128,000 max output per metadata).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** $1.00/$3.20 per 1M in/out, $0.20 cached (Zen/Z.ai list per metadata). Open weights free to self-host (MIT).
- **Architecture:** Sparse MoE transformer with DSA, 744B total / 40B active parameters, 28.5T-token pretraining scale (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `GLM-5` (vendor-reported). Some rows have tool/context-management variants.

Agent / tool use:

- SWE-bench Verified: **77.8**
- SWE-bench Multilingual: **73.3**
- Terminal-Bench 2.0 (Terminus 2): **56.2 / 60.7†**
- Terminal-Bench 2.0 (Claude Code): **56.2 / 61.1†**
- CyberGym: **43.2**
- BrowseComp: **62.0** (w/ context manage **75.9**)
- τ²-Bench: **89.7**
- MCP-Atlas (Public Set): **67.8**
- Tool-Decathlon: **38.0**
- Vending Bench 2: **$4,432.12**

Reasoning / knowledge:

- HLE: **30.5** (w/ tools **50.4**)
- AIME 2026 I: **92.7**
- HMMT Nov. 2025: **96.9**
- IMOAnswerBench: **82.5**
- GPQA-Diamond: **86.0**

Coding:

- SWE-bench Verified: **77.8**
- SWE-bench Multilingual: **73.3**
- Terminal-Bench 2.0: **56.2 / 60.7†** (Terminus 2), **56.2 / 61.1†** (Claude Code)

Long context:

- 200K context supported for long-horizon tasks. No standalone MRCR/RULER/AA-LCR numeric benchmark extracted from reviewed table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Vendor-reported benchmark figures.

- **Tool use: 88/100.** Strong agentic/tool-use and coding-agent profile (SWE-bench Verified 77.8, τ²-Bench 89.7, BrowseComp 62.0/75.9, MCP-Atlas 67.8, CyberGym 43.2, Terminal-Bench 2.0 ~56–61).
- **Reasoning: 88/100.** Excellent math/reasoning and strong science/HLE-with-tools (AIME 2026 92.7, HMMT 96.9, IMOAnswerBench 82.5, GPQA-Diamond 86.0, HLE 30.5/50.4).
- **Context window: 84/100.** 200K context for long-horizon agentic workflows, below 1M-context leaders.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong software engineering and terminal coding results (SWE-bench Verified 77.8, SWE-bench Multilingual 73.3, Terminal-Bench 2.0 ~56–61).
- **Cost efficiency: 86/100.** MIT open weights and competitive pricing ($1.00/$3.20) for a 744B/40B-active flagship, though compute-heavy to serve.
- **Overall Score: 77/100.** Mean of the five non-cost dims (88, 88, 84, 40, 86) = 77.2 → 77. Best fit for open-weight, text-only agentic engineering and reasoning-heavy coding workflows.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from vendor-reported benchmark figures, not official vendor scores.
- Reference URLs:
  - [GLM-5 model card (Hugging Face)](https://huggingface.co/zai-org/GLM-5)
  - Local repository metadata consulted: `model/glm-5/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
