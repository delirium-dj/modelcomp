# GLM-5 — findings by Muse Glimmer 30B

- Source: Z.AI / GLM-5
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM-5
- **Short description:** Z.AI open-weights MoE foundation model targeting agentic engineering and long-horizon coding tasks. Scales from GLM-4.5 with DeepSeek Sparse Attention for long context efficiency.
- **Provider / access:** Z.AI API `glm-5` via `https://api.z.ai/api/paas/v4/chat/completions`; OpenAI-compatible. Hugging Face weights `zai-org/GLM-5`. Chat Completions API with thinking mode, function call, structured output.
- **Release / knowledge:** 2026-02-11; knowledge cutoff not publicly disclosed.
- **IDs:** `zai/glm-5` API; `zai-org/GLM-5` Hugging Face. No Free tier ID on OpenCode Zen.
- **Context window:** 200k tokens total; max output 128k. Verified by Z.AI docs and Artificial Analysis.
- **Modalities:** Input text; Output text. Reasoning yes, tool calls yes, JSON mode supported. No image/audio/video input.
- **Pricing (as of 2026-10-25):** Median across providers per Artificial Analysis: $1.00 / 1M input, $3.20 / 1M output, 80% cache discount. Paid via Z.AI / providers; no $0 free tier.
- **Architecture:** 744B total parameters, 40B active MoE. Pre-training data 28.5T tokens. Open weights, MIT license.

### Raw benchmarks found

> Sources: Z.AI docs `docs.z.ai/guides/llm/glm-5`, Hugging Face `zai-org/GLM-5` model card benchmark table, Artificial Analysis `GLM-5` model page and release page.

Agent / tool use:

- Terminal-Bench 2.0 Terminus: **56.2%** / 60.7% verified † — Hugging Face model card; Z.AI reported 56.2 / 60.7
- Terminal-Bench 2.0 Claude Code: **56.2%** / 61.1% verified † — Hugging Face model card
- τ²-Bench: **89.7%** — Hugging Face model card
- MCP-Atlas Public Set: **67.8%** — Hugging Face model card
- Tool-Decathlon: **38.0%** — Hugging Face model card
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.0%** — Hugging Face model card; 86 on HF eval results
- HLE: **30.5%** text-only, **50.4%** w/ Tools — Hugging Face model card
- AIME 2026 I: **92.7%** — Hugging Face model card
- HMMT Nov. 2025: **96.9%** — Hugging Face model card
- IMOAnswerBench: **82.5%** — Hugging Face model card
- Artificial Analysis Intelligence Index v4.3.2: **28** estimated — Artificial Analysis GLM-5 page
- CritPt: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench Verified: **77.8%** Z.AI reported; **72.8%** Hugging Face eval result — conflicting. Hugging Face eval shows 72.8* high reasoning official; Z.AI table reports 77.8
- SWE-bench Multilingual: **73.3%** — Hugging Face model card
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- BrowseComp: **62.0%**; **75.9%** w/ Context Manage — Hugging Face model card
- BrowseComp-Zh: **72.7%** — Hugging Face model card
- CyberGym: **43.2%** — Hugging Face model card
- AA-LCR v1.1: no verified public score found

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 ~56%, τ²-Bench 89.7%, MCP-Atlas 67.8% show strong agentic planning but Tool-Decathlon 38% caps score; no Claw-Eval.
- **Reasoning: 78/100.** GPQA Diamond 86.0% and AIME 92.7% are strong; HLE 30.5% text-only limits overall reasoning depth despite 50.4% w/ Tools.
- **Context window: 70/100.** 200k tokens verified per Z.AI docs and Artificial Analysis; maps to 200K–500K tier = 70 per methodology. Max output 128k noted.
- **Multimodal: 15/100.** Text-only input/output, no image/audio/video support per Z.AI docs and Artificial Analysis.
- **Coding: 82/100.** SWE-bench Verified 77.8% Z.AI / 72.8% HF eval and SWE-bench Multilingual 73.3% indicate strong open-weight coding; Terminal-Bench signals support agentic coding.
- **Cost efficiency: 78/100.** $1.00/$3.20 median pricing is expensive vs open-weight median $0.43/$1.45; no free tier.
- **Overall Score: 63/100.** Mean of five quality dims (70+78+70+15+82)/5 = 63. Best-fit: capable open-weights agentic coder/reasoner with 200k context, text-only, paid pricing.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
