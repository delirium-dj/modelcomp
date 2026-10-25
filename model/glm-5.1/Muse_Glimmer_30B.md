# GLM-5.1 — findings by Muse Glimmer 30B

- Source: Z.AI / glm-5.1
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.AI next-generation flagship agentic engineering MoE model focused on long-horizon autonomous coding and tool use. Open-weights release in the GLM-5 family, positioned as agentic engineering counterpart to GLM-5, with sustained 8-hour autonomous execution claims.
- **Provider / access:** Z.AI API `glm-5.1` Chat Completions; OpenRouter `z-ai/glm-5.1`; Hugging Face `zai-org/GLM-5.1` open weights. Function calling / tool use supported.
- **Release / knowledge:** 2026 (exact date not publicly disclosed); knowledge cutoff not stated publicly.
- **IDs:** `zai-org/GLM-5.1` (HF open weights); `glm-5.1` (Z.AI API); `z-ai/glm-5.1` (OpenRouter)
- **Context window:** 200K tokens total, 128K max output tokens. Verified by Z.AI docs.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, function calling yes, structured output JSON supported. No native vision/audio in the text line.
- **Pricing (as of 2026-10-25):** Z.AI API pricing not publicly disclosed in detail; open weights allow self-host. No verified free tier on Zen.
- **Architecture:** Open weights MoE; 744B total params, 40B active per GitHub GLM-5 repo. DeepSeek Sparse Attention DSA. MIT license.

### Raw benchmarks found

> Sources: Hugging Face model card zai-org/GLM-5.1 eval results, Z.AI docs guides/llm/glm-5.1, GitHub zai-org/GLM-5 README. Conflicting vendor self-reported vs Hugging Face eval numbers noted where present.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **63.5%** (Hugging Face eval)
- Terminal-Bench 2.0 Best self-reported: **69.0%** (Claude Code agent, vendor table on HF)
- τ³-Bench: **70.6%** (HF model card table)
- MCP-Atlas Public Set: **71.8%** (HF model card table)
- Tool-Decathlon: **40.7%** (HF model card table)
- CyberGym: **68.7%** (HF model card table)
- BrowseComp: **68.0%** (HF model card table)
- BrowseComp w/ Context Manage: **79.3%** (HF model card table)
- Vending Bench 2: **$5,634.41** (HF model card table)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (HF eval)
- HLE: **31.0%** (HF model card table)
- HLE w/ Tools: **52.3%** (HF model card table)
- AIME 2026: **95.3%** (HF model card table)
- HMMT Nov. 2025: **94.0%** (HF model card table)
- HMMT Feb. 2026: **82.6%** (HF model card table)
- IMOAnswerBench: **83.8%** (HF model card table)

Coding:

- SWE-Bench Pro: **58.4%** (HF eval; also cited by Z.AI docs as SOTA lead)
- NL2Repo: **42.7%** (HF model card table)

Long context:

- Context window 200K verified; no MRCR / RULER / GraphWalks public score found.

### Normalized scores (1–100)

- **Tool use: 73/100.** MCP-Atlas 71.8% and τ³-Bench 70.6% show solid agentic tool use; Terminal-Bench 2.0 63.5% (69.0% vendor self-report) supports it. Tool-Decathlon 40.7% caps the score.
- **Reasoning: 78/100.** GPQA Diamond 86.2%, AIME 2026 95.3%, HMMT Nov 94.0%, IMOAnswerBench 83.8% are strong. HLE 31.0% (52.3% w/ tools) limits the ceiling.
- **Context window: 70/100.** 200K tokens verified with 128K output; competitive mid-tier window. No independent long-context retrieval benchmark reported.
- **Multimodal: 15/100.** Text in / text out only; vision lives on separate GLM-5V line.
- **Coding: 71/100.** SWE-Bench Pro 58.4% is a leading open result per vendor and HF eval; NL2Repo 42.7% is moderate. Absence of SWE-bench Verified / LiveCodeBench public scores caps it.
- **Cost efficiency: 70/100.** Open weights enable self-host; Z.AI API pricing not transparently published, so rating is provisional on open-weights value.
- **Overall Score: 61/100.** Mean of five quality dims (73 + 78 + 70 + 15 + 71) / 5 = 61.4 → 61. Best-fit: strong reasoning and coding MoE with solid tool use, text-only, mid-range context, open-weights value.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
