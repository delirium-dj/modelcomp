# GLM 5.2 Coding — findings by DeepSeek 4 Flash

- Source: Z.AI/GLM 5.2 Coding
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.2 Coding
- **Short description:** Coding-tuned configuration of Z.AI's GLM 5.2 open-weights MoE; text-only with a free Zen tier. Benchmarks here use the GLM 5.2 base as the verified proxy (no separate Coding-variant table was published).
- **Provider / access:** Z.AI API / OpenRouter; OpenCode Zen (`opencode/glm-5.2-coding`) with a free tier; open weights.
- **Release / knowledge:** GLM 5.2 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/glm-5.2-coding`
- **Context window:** 204K Zen (1M family).
- **Modalities:** text in/out only; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** free Zen tier; paid ~$0.41/$3.99 per 1M.
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **81.0%** (GLM 5.2 proxy); Vals **67.8%**
- Browsing suite **99.1%**; MCP Atlas **76.8%**; Toolathlon **48.2%**
- GDPval-AA **1418 Elo**; AA Agentic Index **39.4%**
- Claw-Eval / ClawProBench: no verified coding-variant score found

Reasoning / knowledge (GLM 5.2 proxy):

- GPQA Diamond **91.2%** (AA 89.5%); HLE **54.7%** (AA 41.1%)
- AA-LCR **78.3%**; CritPt **20.9%**; AA Index **33.7%**
- AIME26 **99.2%**; HMMT Feb 2026 **92.5%**

Coding (GLM 5.2 proxy):

- SWE-bench Verified (Vals) **82.8%**; SWE-bench Pro **62.1%**
- AA Coding Index **68.8%**; ProgramBench **63.7%**; AA-SciCode **51.2%**; LiveCodeBench (Vals) **69.5%**

Long context:

- AA-LCR 78.3%

Multimodal:

- text-only model

### Normalized scores (1–100)

- **Tool use: 88/100.** TB 2.1 81%, browsing 99.1%, MCP Atlas 76.8% and GDPval 1418 are strong (GLM 5.2 proxy).
- **Reasoning: 82/100.** GPQA 91.2%, HLE 54.7% and AIME26 99.2% are strong; AA Index 33.7% is mid.
- **Context window: 82/100.** 204K Zen / 1M family with AA-LCR 78.3%.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 84/100.** SWE Vals 82.8%, SWE-Pro 62.1% and ProgramBench 63.7% are strong; LiveCode 69.5% trails.
- **Cost efficiency: 100/100.** Free Zen tier; paid ~$0.41/$3.99.
- **Overall Score: 70/100.** Mean of (88 + 82 + 82 + 15 + 84) / 5 = 70.2 → 70. Best-fit: free text coding/agent tier.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Z.AI, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores. GLM 5.2 base used as the stated proxy for the Coding variant.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
