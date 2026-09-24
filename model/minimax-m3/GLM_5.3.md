# MiniMax M3 — findings by GLM 5.3

- Source: MiniMax (`minimax-m3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's open-weights M3 generation (1M context) — extremely cheap on Zen with standout honesty (lowest hallucination rates) and strong multimodal document/video grounding. Top use case: budget long-context multimodal agent work.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Hugging Face `MiniMaxAI/MiniMax-M3` for self-hosting.
- **Release / knowledge:** M3 generation, 2026 (predecessor line M2.5/M2.7 deprecated on Zen); knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/minimax-m3` (Zen; no Free ID — paid but very cheap); `MiniMaxAI/MiniMax-M3` (HF)
- **Context window:** 1M tokens total (BenchLM model details).
- **Modalities:** text/image/video in; text out; base config non-reasoning per BenchLM (interleaved thinking supported on some harnesses); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $0.30 in / $1.20 out per 1M (cached read $0.06).
- **Architecture:** open weights (BenchLM source type); MiniMax has not published a full parameter sheet for M3 this session.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (BenchLM `minimax-m3`; Vals harness 53.6%; terminalBenchHard 42.4%)
- Tau2-Bench: **88.9%** (BenchLM); Tau3-Banking: **no verified public score found** for this ID
- Claw-Eval: **74.5%** (BenchLM)
- GDPval-AA: **1304 Elo** (BenchLM; normalized 36.5%; GDPval rubrics 74.7%)
- MCP-Atlas: **74.2%**; OSWorld-Verified **70.1%**; BrowseComp **83.5%**; BankerToolBench **76.1%**; AA Harvey LAB **88.4%**; AA Agentic Index **30.8%**; AA-AnalystAgent **10.0%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA harness; Vals 92.7%)
- HLE: **39.0%** (AA-HLE via BenchLM — just under the 40% bar)
- AA-LCR: **83.0%**; CritPt **3.7%**; MLCR-AA **17.2%** (BenchLM)
- Artificial Analysis Intelligence Index: **29** (BenchLM listing)
- Omniscience Accuracy / Hallucination Rate: **16.7% / 18.4%** (BenchLM — very low hallucination, but very low accuracy too: mostly abstains)
- USAMO 2026: **85.7%**; MMLU-Pro (Vals) **84.2%**; AA-IFBench **82.9%** (BenchLM)

Coding:

- SWE-bench Verified: **80.5%** (BenchLM; Vals harness 75.0%)
- LiveCodeBench (Vals): **82.2%**
- SWE-bench Pro: **59%**; NL2Repo **42.1%**; SciCode / AA-SciCode **47.1%**; AA Coding Index **58.6%**; VIBE V2 **50.1%**; SVG-Bench **63.7%**; KernelBench Hard **28.8%** (BenchLM)
- DeepSWE: **no verified public score found** for this ID

Long context:

- 1M window (BenchLM); AA-LCR 83.0% at long context; no MRCR/RULER retrieval number published.

Multimodal (grounding):

- MMMU-Pro **78.1%** (AA 78.6%); Video-MME (w/ sub) **85.4%**; VideoMMMU **84.6%**; OmniDocBench 1.5 **91.6%**; OfficeQA Pro **45.1%**; Design Arena Website **1269** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 80/100.** Tau2 88.9%, Claw-Eval 74.5%, MCP-Atlas 74.2% and Harvey LAB 88.4% are strong; GDPval 1304, Agentic Index 30.8% and TB2.1 66% pull it into the high-mid band.
- **Reasoning: 78/100.** GPQA 92.9% clears the frontier bar with elite honesty (18.4% hallucination) and USAMO 85.7%; HLE 39% just misses, CritPt 3.7% and AA Index 29 are weak, and Omniscience accuracy (16.7%) shows heavy abstention.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 88/100.** Text+image+video input with strong video (Video-MME 85.4%, VideoMMMU 84.6%) and elite document parsing (OmniDocBench 91.6%); MMMU-Pro 78.1% is mid.
- **Coding: 72/100.** SWE-bench V 80.5% and LiveCodeBench 82.2% are solid; SciCode 47.1%, Coding Index 58.6% and SWE-bench Pro 59% sit well below frontier refs.
- **Cost efficiency: 94/100.** $0.30/$1.20 per 1M on Zen — half the ~$0.60/$2.20 (≈92) anchor; open weights for self-hosting.
- **Overall Score: 82.6/100.** (80 + 78 + 95 + 88 + 72) / 5 = 82.6. Best-fit: cheapest honest long-context multimodal agent; escalate to frontier models for hard coding.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
