# Claude Opus 5 — findings by GLM 5.3

- Source: Anthropic (`claude-opus-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's July 2026 flagship Opus reasoning model (adaptive reasoning, max effort default); superseded as daily-driver by Opus 5.5 (Sept 2026) but still served. Top use case: long-horizon agentic coding and expert knowledge work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API/Bedrock/Vertex/Foundry.
- **Release / knowledge:** 2026-07-24; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-opus-5` (Zen; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via Artificial Analysis technical specs).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $5.00 in / $25.00 out per 1M (cached read $0.50); Anthropic API same headline.
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals harness): **84.6%** (BenchLM `claude-opus-5`; TB 3.0 42.7%)
- Tau3-Banking (AA harness): **42.1%** (BenchLM)
- GDPval-AA: **1862 Elo** (BenchLM; normalized 60.4% — clears the 1750+ bar)
- Claw-Eval / ClawProBench: **no verified public score found**
- MCP-Atlas: **85.8%** / claim coverage **89.1%** (BenchLM); Toolathlon-Verified **80.6%** (Pass@3 87.0%)
- OSWorld 2.0: **70.6%**; BrowseComp **90.8%**; DeepSearchQA **95.0%**; AA Agentic Index **56.2%**; AA Briefcase Elo **1720**; AA Harvey LAB **93.5%**; EnterpriseOps-Gym **47.5%**; AA-AnalystAgent **53.8%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA harness; Vals 93.4%)
- HLE: **56.3%** no tools / **64.7%** with tools (BenchLM; AA-HLE 54.9%)
- ARC-AGI-1/2/3: **97.5% / 90.4% / 30.2%** (BenchLM)
- AA-LCR: **79.3%**; CritPt **29.1%**; MLCR-AA **55.6%** (BenchLM)
- Artificial Analysis Intelligence Index: **51** (max effort, AA #11/211)
- Omniscience Accuracy / Hallucination Rate: **60.9% / 60.8%** (BenchLM — high hallucination rate is the main weakness)
- IMO 2026: **42/42** (BenchLM); RiemannBench 60.0%/79.0% (no tools/tools); MMLU-Pro 91.6%; GMMLU 92.5%

Coding:

- SWE-bench Verified: **96%** (BenchLM; Vals harness 97.0%)
- SWE-bench Pro: **79.2%**; SWE Multilingual **89.5%**; SWE Multimodal **59.4%** (BenchLM)
- LiveCodeBench (Vals): **89.0%**
- DeepSWE: **68.8%** (BenchLM)
- SciCode / AA-SciCode: **56.4%**; AA Coding Index **78.0%**; CursorBench 3.2 **70.0%**; ProgramBench **93.0%**; FrontierSWE v2 **52.0%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA); AA-LCR 79.3% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **84.7%**; Chartography (tools) **83.0%**; GDP.pdf **83.4% / 85.5%**; OfficeQA **78.1%**; Design Arena Website **1319** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 93/100.** GDPval 1862 clears the frontier bar, MCP-Atlas 85.8%, Toolathlon 80.6%, OSWorld 70.6% and Agentic Index 56.2% are all top-tier; TB2.1 84.6% and Tau3 42.1% sit just under the frontier refs; missing Claw-Eval caps it.
- **Reasoning: 94/100.** GPQA 93.2%, HLE 56–65%, ARC-AGI-2 90.4%, perfect IMO 2026 42/42 and AA Index 51 are all elite; ARC-AGI-3 30.2%, CritPt 29.1% and a 60.8% hallucination rate keep it under 95.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band; MMMU-Pro 84.7% and document scores (GDP.pdf 83–86%) confirm strong vision.
- **Coding: 95/100.** SWE-bench Verified 96% is the elite anchor, plus SWE-bench Pro 79.2%, LiveCodeBench 89.0%, SciCode 56.4%, Coding Index 78.0%; DeepSWE 68.8% is the only sub-frontier marker.
- **Cost efficiency: 57/100.** $5/$25 per 1M on the evaluated tier — between the $3/$15 (≈60) and $10/$50 (≈30) anchors; slow (55 tok/s) and verbose (140M tokens on AA Index) worsen effective value.
- **Overall Score: 89.4/100.** (93 + 94 + 95 + 70 + 95) / 5 = 89.4. Best-fit: premium agentic coding + expert knowledge work; Opus 5.5 now delivers similar quality 40% cheaper.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
