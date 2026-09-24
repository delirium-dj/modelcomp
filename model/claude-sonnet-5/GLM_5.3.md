# Claude Sonnet 5 — findings by GLM 5.3

- Source: Anthropic (`claude-sonnet-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Anthropic's June 2026 Sonnet-class reasoning model (adaptive reasoning, max effort default) — the value tier below Opus/Fable. Top use case: everyday agentic coding and computer-use at Sonnet pricing.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API and cloud partners.
- **Release / knowledge:** 2026-06-30; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-sonnet-5` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort levels); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $2.00 in / $10.00 out per 1M (cached read $0.20).
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.4%** (BenchLM `claude-sonnet-5`; Vals harness 74.5%; TB 3.0 14.6%)
- BrowseComp: **84.7%**; HLE w/ tools **57.4%** (BenchLM)
- OSWorld-Verified: **81.2%** (BenchLM — strong computer use)
- GDPval-AA: **1603 Elo** (BenchLM; normalized 47.5%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Tau3-Banking / Toolathlon / MCP-Atlas: **no verified public score found** for this ID
- AA Agentic Index: **44.3%**; AA-AnalystAgent **46.3%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **91.1%** (AA harness; Vals 88.9%)
- HLE: **41.3%** AA harness / **43.2%** w/o tools / **31.0%** HLE-Verified (BenchLM)
- AA-LCR: **82.0%**; CritPt **16.9%**; MLCR-AA **55.0%** (BenchLM)
- Artificial Analysis Intelligence Index: **38** (max effort, AA #54/211)
- Omniscience Accuracy / Hallucination Rate: **40.1% / 39.4%** (BenchLM — relatively low hallucination)
- MMLU-Pro (Vals): **87.5%** (BenchLM)

Coding:

- SWE-bench Verified: **85.2%** (BenchLM; Vals harness 79.6%)
- SWE-bench Pro: **63.2%**; SWE Multilingual **78.3%**; SWE Multimodal **28.1%** (BenchLM)
- LiveCodeBench (Vals): **82.4%**
- SciCode / AA-SciCode: **54.3%**; AA Coding Index **71.5%**; CursorBench 3.2 **61.5%** / 4.0 **34.1%**; VulcanBench CII **89.2%** (BenchLM)
- DeepSWE: **no verified public score found** for this ID

Long context:

- 1M window (AA/BenchLM); AA-LCR 82.0% at long context; no MRCR/RULER retrieval number published for this ID.

Multimodal (grounding):

- MMMU-Pro **77.3%**; CharXiv **88.3%** (w/o tools 77%); Design Arena Website **1286** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 85/100.** OSWorld-Verified 81.2% and BrowseComp 84.7% are strong; TB2.1 80.4% and GDPval 1603 sit just under the frontier bars; Tau3/Claw-Eval unpublished.
- **Reasoning: 85/100.** GPQA 91.1% and HLE 41–57% clear the frontier bars with AA-LCR 82.0% and a low 39.4% hallucination rate; CritPt 16.9% and AA Index 38 keep it mid-high.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; CharXiv 88.3% strong but MMMU-Pro 77.3% modest.
- **Coding: 82/100.** SWE-bench V 85.2%, LiveCodeBench 82.4%, Coding Index 71.5% clear frontier refs; SciCode 54.3% just misses 55 and SWE-bench Pro 63.2% is mid; DeepSWE unpublished.
- **Cost efficiency: 60/100.** $2/$10 per 1M headline sits between the $1.25/$4.25 (≈88) and $3/$15 (≈60) anchors, but extreme verbosity (370M output tokens on the AA Index; $5.09/task) pushes effective cost to the low end.
- **Overall Score: 83.4/100.** (85 + 85 + 95 + 70 + 82) / 5 = 83.4. Best-fit: dependable daily-driver agent at Sonnet price; cap effort levels to control its verbosity cost.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
