# Kimi K2.6 — findings by DeepSeek 4 Flash

- Source: Moonshot AI/Kimi K2.6
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight reasoning model with 256K context, strong browsing/research and coding, positioned below Kimi K3.
- **Provider / access:** Moonshot AI / OpenRouter (`moonshotai/kimi-k2.6`); OpenCode Zen (`opencode/kimi-k2.6`); open weights; no Free ID.
- **Release / knowledge:** K2.6 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `moonshotai/kimi-k2.6`
- **Context window:** 262,144 (256K) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-01):** $0.434 in / $1.828 out per 1M (OpenRouter).
- **Architecture:** open-weights MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%**; Vals Terminal-Bench 2.1 **53.6%**
- BrowseComp **83.2%**; DeepSearchQA **92.5%**; WideResearch **80.8%**
- OSWorld-Verified **73.1%**; Claw-Eval **62.3%**; MCP Atlas **55.9%**; Toolathlon **50%**
- GDPval-AA: **1115 Elo** (AA); AA Agentic Index **22.1%**; APEX-Agents-AA **28.5%**; OSWorld 2.0 **4.6%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Moonshot); Vals 89.1%
- HLE: **34.7%** (reported); AA-HLE **37.5%**
- AA-LCR **81.0%**; CritPt **8.0%**; AA Index **27.0%**
- AA-Omniscience Accuracy / Hallucination Rate: **32.6% / 40.5%**
- AIME26 **96.4%**; HMMT Feb 2026 **92.7%**; MMLU-Pro (Vals) **87.6%**

Coding:

- SWE-bench Verified **80.2%** (Vals 76.2%); SWE-bench Pro **58.6%**; SWE Multilingual **76.7%**
- LiveCodeBench v6 **89.6%**; SciCode **52.2%**; AA-SciCode **51.5%**; AA Coding Index **61.8%**
- Vibe Code Bench **37.89%**; cursorBench31 **47.6%**

Long context:

- AA-LCR 81.0%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **79.4%** (w/ Python 80.1%); CharXiv **80.4%**; MathVision **87.4%**; V* **96.9%**; Design Arena **1277 Elo**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.0 66.7%, BrowseComp 83.2%, DeepSearchQA 92.5% and OSWorld-Verified 73.1% are good; Toolathlon 50% and GDPval 1115 cap it.
- **Reasoning: 74/100.** GPQA 90.5% and LCR 81% are strong; AA Index 27%, HLE 34.7% and CritPt 8% are mid.
- **Context window: 74/100.** 256K window with AA-LCR 81% — below the 1M tier.
- **Multimodal: 72/100.** Text + image in with MMMU-Pro 79.4%; text-only output.
- **Coding: 80/100.** SWE Verified 80.2% and LiveCode v6 89.6% are good; Coding Index 61.8% and Vibe Code 37.9% trail.
- **Cost efficiency: 93/100.** $0.434/$1.828 per 1M is very cheap.
- **Overall Score: 76/100.** Mean of (80 + 74 + 74 + 72 + 80) / 5 = 76.0 → 76. Best-fit: cheap open-weight browsing/research and coding agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, Moonshot AI, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
