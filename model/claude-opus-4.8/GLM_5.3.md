# Claude Opus 4.8 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-4.8`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.8
- **Short description:** Anthropic's May 2026 Opus reasoning model (adaptive reasoning, max effort default), predecessor to Opus 5; still served on Zen. Top use case: high-quality agentic coding and computer-use with strong honesty.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API and cloud partners.
- **Release / knowledge:** 2026-05-28; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-4.8` (Zen ID `claude-opus-4-8`; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50); Anthropic API same headline.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **74.6%** (BenchLM `claude-opus-4-8`; Vals harness 71.9%; TB 3.0 21.1%)
- Tau2-Bench: **94.4%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- GDPval-AA: **1593 Elo** (BenchLM; normalized 46.9%)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **82.2%**; Toolathlon **59.9%**; OSWorld-Verified **83.4%**; BrowseComp **84.3%**; DeepSearchQA **93.1%**; AA Agentic Index **42.6%**; AA-AnalystAgent **45.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (BenchLM; AA harness 92.0%; Vals 92.4%)
- HLE: **48.7%** AA harness / **49.8%** w/o tools / **57.9%** w/ tools (BenchLM)
- ARC-AGI-2: **72.1%** / ARC-AGI-3 **1.5%**; AA-LCR **77.7%**; CritPt **20.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **42** (max effort, AA #39/211)
- Omniscience Accuracy / Hallucination Rate: **48.8% / 39.3%** (BenchLM — low hallucination)
- USAMO 2026: **96.7%**; FrontierMath v2 Tier 4 **31.3%**; MMLU-Pro (Vals) **89.6%** (BenchLM)

Coding:

- SWE-bench Verified: **88.6%** (BenchLM; Vals harness 88.6%)
- SWE-bench Pro: **69.2%**; SWE Multilingual **84.4%**; LiveCodeBench (Vals) **87.8%** (BenchLM)
- SciCode / AA-SciCode: **54.4%**; AA Coding Index **74.3%**; CursorBench 3.1 **58.4%** / 3.2 **62.3%**; FrontierCode 1.1 Main **46.5%** (BenchLM)
- DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); AA-LCR 77.7% at long context; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- ScreenSpot Pro **87.9%**; CharXiv **89.9%** (w/o tools 80.5%); OfficeQA Pro **66.2%**; Design Arena Website **1266** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 84/100.** Tau2 94.4%, OSWorld-Verified 83.4% and MCP-Atlas 82.2% are strong; TB2.1 74.6%, GDPval 1593 and Agentic Index 42.6% sit just under the frontier bars.
- **Reasoning: 87/100.** GPQA 93.6%, HLE 49–58% and USAMO 96.7% clear frontier bars with a low 39.3% hallucination rate; ARC-AGI-2 72.1%, CritPt 20.9% and AA Index 42 keep it under 90.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; ScreenSpot Pro 87.9%/CharXiv 89.9% confirm elite document vision.
- **Coding: 87/100.** SWE-bench V 88.6%, LiveCodeBench 87.8%, Coding Index 74.3% clear frontier refs; SciCode 54.4% just misses 55; SWE-bench Pro 69.2% is mid.
- **Cost efficiency: 55/100.** $5/$25 per 1M matches the Opus 5 anchor zone, but slow output (56 tok/s), very verbose (170M tokens) and $4.08/task drag effective value below Opus 5.
- **Overall Score: 84.6/100.** (84 + 87 + 95 + 70 + 87) / 5 = 84.6. Best-fit: reliable, low-hallucination Opus agent; superseded by Opus 5 at the same price.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
