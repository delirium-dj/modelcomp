# GPT-5.4 — findings by DeepSeek 4 Flash

- Source: OpenAI/GPT-5.4
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4
- **Short description:** OpenAI's GPT-5.4 reasoning model with ~1.05M context and balanced agentic/coding capability at mid-premium pricing.
- **Provider / access:** OpenAI API / OpenRouter (`openai/gpt-5.4`); OpenCode Zen (`opencode/gpt-5.4`); no Free ID.
- **Release / knowledge:** GPT-5.4 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `openai/gpt-5.4`
- **Context window:** ~1.05M tokens (1M) — verified from OpenRouter and BenchLM.
- **Modalities:** text/image in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $2.50 in / $15.00 out per 1M.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 **75.1%**; OSWorld-Verified **75%**; MCP Atlas **70.6%**
- BrowseComp **82.7%**; CyberGym **79.0%**; DeepSearchQA **73.6%**; Claw-Eval **60.3%**; Toolathlon **54.6%**
- GDPval-AA **1307 Elo** (AA normalized 36.6%); AA Agentic Index **39.0%**; APEX-Agents-AA **33.3%**; JobBench **38.9%**; ExploitGym **6.0%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond **92.8%** (OpenAI); AA 92.0%
- HLE **52.1%** (39.8% w/o tools); AA-HLE **43.7%**
- AA-LCR **82.0%**; CritPt **23.4%**; AA Index **39.0%**
- AA-Omniscience Index **5.8%**; Accuracy / Hallucination Rate **50.8% / 91.7%**
- ARC-AGI-2 **74.0%**, ARC-AGI-3 **0.2%**; FrontierMath v2 Tier 4 **27.1%**
- HealthBench Hard **40.1%**; AA-IFBench **73.9%**

Coding:

- LiveCodeBench Pro **87.5%**; SWE-bench Pro **57.7%**; Vibe Code Bench **67.42%**
- React Native Evals **85.3%**; AA Coding Index **71.0%**; PostTrainBench v1.1 **19.0%**

Long context:

- AA-LCR 82.0%

Multimodal:

- MMMU-Pro **81.2%** (w/ Python 82.1%; AA 78.4%); CharXiv **82.8%**; ScreenSpot Pro **85.4%**; Design Arena **1228 Elo**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB 2.0 75.1%, OSWorld-Verified 75%, CyberGym 79% and BrowseComp 82.7% are strong; ExploitGym 6% caps it.
- **Reasoning: 82/100.** GPQA 92.8%, HLE 52.1% and LCR 82% are strong; AA Index 39% and ARC-AGI-2 74% are mid-high.
- **Context window: 96/100.** ~1.05M input with AA-LCR 82%.
- **Multimodal: 82/100.** Text + image in with MMMU-Pro 81.2%; text-only output.
- **Coding: 85/100.** LiveCode Pro 87.5%, React Native 85.3% and Coding Index 71% are strong; SWE-Pro 57.7% trails.
- **Cost efficiency: 68/100.** $2.50/$15 per 1M is mid-premium.
- **Overall Score: 86/100.** Mean of (84 + 82 + 96 + 82 + 85) / 5 = 85.8 → 86. Best-fit: balanced frontier reasoning/agentic work at mid price.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, OpenAI, Artificial Analysis, OpenRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
