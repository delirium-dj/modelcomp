# Kimi K3 — findings by GLM 5.3

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship July 2026 open-weights reasoning MoE (2.8T total / 104B active) — #3 open-weights model on the AA Intelligence Index. Top use case: frontier-grade agentic coding and research with self-host option.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/chat/completions` (openai-compatible); Kimi/Moonshot API; Hugging Face `moonshotai/Kimi-K3` for self-hosting (21 API providers listed by AA).
- **Release / knowledge:** 2026-07-16; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/kimi-k3` (Zen; no Free ID — paid only); `moonshotai/Kimi-K3` (HF)
- **Context window:** 1M tokens total (1.05M per BenchLM; AA lists 1M).
- **Modalities:** text/image in; text out; reasoning yes (max effort default); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $3.00 in / $15.00 out per 1M (cached read $0.30); Kimi API same headline; self-hosting possible (open weights).
- **Architecture:** Mixture of Experts, 2.8T total / 104B active parameters; open weights under the Kimi K3 License (commercial use with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (BenchLM `kimi-k3`; Vals harness 80.9%)
- Tau3-Banking (AA harness): **46.0%** (BenchLM)
- GDPval-AA: **1524 Elo** (BenchLM; normalized 51.2%)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon-Verified: **73.2%**; MCP-Atlas **84.2%**; BrowseComp **91.2%**; DeepSearchQA **95.0%**; AA Agentic Index **50.6%**; AA Briefcase Elo **1510**; AA Harvey LAB **94.6%**; AA ITBench **47.7%**; AA AutomationBench **58.3%**; JobBench **52.9%** (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (BenchLM; Vals 92.9%)
- HLE: **46.9%** AA harness / **56%** w/ tools / **43.5%** w/o tools (BenchLM)
- AA-LCR: **88.7%** (BenchLM — one of the best long-context reasoning scores); CritPt **23.4%**; MLCR-AA **38.3%**
- Artificial Analysis Intelligence Index: **44** (max effort, AA #3/115 open-weights class)
- Omniscience Accuracy / Hallucination Rate: **47.6% / 53.2%** (BenchLM)
- MMLU-Pro (Vals): **88.0%** (BenchLM)

Coding:

- SWE-bench Verified (Vals): **93.4%**
- DeepSWE: **67.5%** (BenchLM)
- LiveCodeBench (Vals): **87.2%**
- SciCode / AA-SciCode: **59.5%** (BenchLM)
- AA Coding Index: **76.2%**; FrontierSWE v1 **81.2%** / v2 **25.9%**; CursorBench 3.2 **60.8%**; ProgramBench **77.8%**; Kimi Code Bench v2 **72.9%** (BenchLM)
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 88.7% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- MMMU-Pro **81.6%** (AA 80.5%); MathVision **94.3%** / w/ Python **97.8%**; CharXiv **91.3%**; OmniDocBench **91.1%**; Design Arena Website **1351** (BenchLM).

### Normalized scores (1–100)

- **Tool use: 90/100.** TB2.1 88.3% hits the frontier ref; MCP-Atlas 84.2%, Toolathlon 73.2%, BrowseComp 91.2% and Agentic Index 50.6% are top-tier; Tau3 46.0% and GDPval 1524 sit just under the frontier bars; Claw-Eval unpublished.
- **Reasoning: 89/100.** GPQA 93.5% and HLE 46.9–56% clear the frontier bars, AA-LCR 88.7% is excellent, and AA Index 44 is #3 among open weights; CritPt 23.4% and a 53.2% hallucination rate cap it.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 70/100.** Text+image input only (AA verified) — top of the "+image in" band, backed by MathVision 94.3%/CharXiv 91.3%.
- **Coding: 90/100.** SWE-bench V 93.4%, LiveCodeBench 87.2%, SciCode 59.5%, Coding Index 76.2% all clear frontier refs; DeepSWE 67.5% misses 74% and FrontierSWE v2 25.9% drags.
- **Cost efficiency: 60/100.** $3/$15 per 1M on the evaluated tier matches the $3/$15 ≈ 60 anchor exactly; slow (35 tok/s); open weights soften this for self-hosters.
- **Overall Score: 86.8/100.** (90 + 89 + 95 + 70 + 90) / 5 = 86.8. Best-fit: the leading open-weights agentic/research pick — near-frontier quality with self-host sovereignty at premium API prices.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Artificial Analysis, BenchLM, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
