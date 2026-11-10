# GLM 5.1 — findings by Iceman

- Source: Z.ai/GLM-5.1
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai’s GLM-5.1 is an MIT-licensed 744B/40B-active MoE flagship for agentic engineering and long-horizon coding, improving on GLM-5 with stronger coding and sustained multi-step task performance.
- **Provider / access:** Open weights on Hugging Face (`zai-org/GLM-5.1`, MIT license) and Z.ai API / hosted providers. Local metadata lists `opencode/glm-5.1`, pricing $1.40/$4.40 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card/blog reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `GLM-5.1`, `zai-org/GLM-5.1`.
- **Context window:** 202,752 tokens (200K–204,800 served); 128,000 max output (local metadata).
- **Modalities:** Text input/output.
- **Pricing (as of 2026-11-10):** $1.40 / $4.40 per 1M in/out ($0.26 cached input per local metadata). Open weights free to self-host (MIT).
- **Architecture:** Sparse MoE transformer, 744B/40B-active class per local metadata, optimized for long-horizon agentic coding (HF card).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card benchmark table for `GLM-5.1` unless noted.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **63.5**
- Terminal-Bench 2.0 (Best self-reported): **69.0** (Claude Code harness)
- CyberGym: **68.7**
- BrowseComp: **68.0**
- BrowseComp (w/ Context Manage): **79.3**
- τ³-Bench: **70.6**
- MCP-Atlas (Public Set): **71.8**
- Tool-Decathlon: **40.7**
- Vending Bench 2: **$5,634.41**

Reasoning / knowledge:

- HLE: **31.0**
- HLE (w/ Tools): **52.3**
- AIME 2026: **95.3**
- HMMT Nov. 2025: **94.0**
- HMMT Feb. 2026: **82.6**
- IMOAnswerBench: **83.8**
- GPQA-Diamond: **86.2**

Coding:

- SWE-Bench Pro: **58.4**
- NL2Repo: **42.7**
- Terminal-Bench 2.0 (Terminus-2): **63.5**
- Terminal-Bench 2.0 (Best self-reported): **69.0**

Long context:

- 200K-class context supported; long-horizon multi-hour agentic sessions emphasized. No standalone MRCR/RULER/AA-LCR numeric score extracted from table.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded).

- **Tool use: 88/100.** Strong agentic/tool-use and browsing results (Terminal-Bench 2.0 63.5–69.0, CyberGym 68.7, BrowseComp 68.0/79.3, τ³-Bench 70.6, MCP-Atlas 71.8, Tool-Decathlon 40.7).
- **Reasoning: 87/100.** Strong reasoning/math/profile (AIME 2026 95.3, HMMT 82.6–94.0, IMOAnswerBench 83.8, GPQA-Diamond 86.2, HLE 31.0/52.3 w/ tools).
- **Context window: 84/100.** 200K-class context with emphasis on long-horizon sessions, but below 1M-context leaders.
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 86/100.** Strong coding/agentic engineering results (SWE-Bench Pro 58.4, NL2Repo 42.7, Terminal-Bench 2.0 63.5–69.0).
- **Cost efficiency: 86/100.** MIT open weights and moderate hosted pricing ($1.40/$4.40) with strong capability; large MoE inference remains compute-intensive.
- **Overall Score: 77/100.** Mean of the five non-cost dims (88, 87, 84, 40, 86) = 77.0 → 77. Best fit for long-horizon, text-only agentic engineering and coding workflows where sustained tool use and iteration matter.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [GLM-5.1 model card (Hugging Face)](https://huggingface.co/zai-org/GLM-5.1)
  - Local repository metadata consulted: `model/glm-5.1/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
