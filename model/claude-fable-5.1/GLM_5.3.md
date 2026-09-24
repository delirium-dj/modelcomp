# Claude Fable 5.1 — findings by GLM 5.3

- Source: Anthropic (`claude-fable-5-1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's most advanced generally-available model for coding and knowledge work (Sept 2026), adaptive reasoning with max effort + fallback default. Same weights as restricted Claude Mythos 5.1. Top use case: long-horizon agentic coding and expert research.
- **Provider / access:** OpenCode Zen `https://opencode.ai/zen/v1/messages` (Anthropic Messages API, `@ai-sdk/anthropic`); also Anthropic API, AWS Bedrock, Google Cloud, Microsoft Foundry.
- **Release / knowledge:** 2026-09-01; knowledge cutoff not publicly disclosed.
- **IDs:** `opencode/claude-fable-5.1` (Zen ID `claude-fable-5-1`; no Free ID — paid only)
- **Context window:** 1M tokens total (verified via AA technical specs and BenchLM).
- **Modalities:** text/image in; text out; reasoning yes (adaptive, effort low→max); tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Zen $10.00 in / $50.00 out per 1M (cached read $0.25 — 75% cheaper than Fable 5; ~25–45% lower effective cost for agentic workloads per Anthropic).
- **Architecture:** proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (BenchLM `claude-fable-5-1`; Mythos 5.1 twin scores 60.9% with reduced safeguards; official chart)
- Terminal-Bench-Science 0.1: **52.6%** (Anthropic official; class-best)
- Terminal-Bench 2.1 (Vals harness): **85.0%** (BenchLM)
- Tau3-Banking (AA harness): **47.2%** (BenchLM)
- GDPval-AA: **1735 Elo** (BenchLM; normalized 61.7%; Anthropic's official GDPval-AA v2 chart lists **1853**)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathlon-Verified: **77.8%** (Pass@3 81.5%); AA Agentic Index **58.0%** (best in BenchLM's table); AA Briefcase Elo **1678**; AA Harvey LAB **93.0%**; AA-AnalystAgent **57.5%**; ApprenticeBench **72%**; AutomationBench **31.4%**; OSWorld 2.0 **41.7% strict / 77.9% partial** (Anthropic official, Aug 2026 release) (BenchLM)

Reasoning / knowledge:

- GPQA Diamond: **93.7%** (AA harness; Vals 93.4%)
- HLE: **60.9%** no tools / **65.0%** with tools (BenchLM — best public HLE tier)
- ARC-AGI-1/2: **97.5% / 90%** (BenchLM)
- AA-LCR: **85.3%**; CritPt **29.7%**; MLCR-AA **71.1%** (BenchLM)
- Artificial Analysis Intelligence Index: **53** (max w/ fallback, AA #4/211)
- Omniscience Accuracy / Hallucination Rate: **67.2% / 72.6%** (BenchLM — hallucination rate is the main weakness)
- MMLU-Pro (Vals): **92.4%** (BenchLM)

Coding:

- CursorBench 3.2: **73.4%** at max effort (BenchLM/official — best result; CursorBench 4.0 51.8%)
- LiveCodeBench (Vals): **90.5%**
- SWE-bench Pro: **81.2%**; SWE Multilingual **89.1%**; SWE Multimodal **54.7%** (BenchLM)
- SciCode / AA-SciCode: **63.1%**; AA Coding Index **81.6%**; DeepSWE **67.4%**; FrontierSWE v2 **56.3%** (best-tier); ProgramBench **87.6%**; Bug Hunt Bench **43 fixes** (BenchLM)
- SWE-bench Verified: **no verified public score found** for this exact ID
- Vibe Code Bench: **no verified public score found**

Long context:

- 1M window (AA/BenchLM); AA-LCR 85.3% at long context; no MRCR/RULER retrieval-at-512K number published for this ID.

Multimodal (grounding):

- Design Arena Website **1320** (BenchLM); image input verified via AA specs.

### Normalized scores (1–100)

- **Tool use: 94/100.** AA Agentic Index 58.0% leads the field, TB4.0 55.8%/TB-Science 52.6% are class-best-tier, GDPval 1735–1853 at the frontier bar, Toolathlon 77.8% strong; Tau3 47.2% just misses 50 and Claw-Eval is unpublished.
- **Reasoning: 93/100.** HLE 60.9–65.0% is the best public tier, GPQA 93.7%, ARC-AGI-2 90% and AA Index 53 all elite; a 72.6% hallucination rate and CritPt 29.7% cap it.
- **Context window: 95/100.** 1M total context (top tier band); no verified retrieval-at-512K number for 100.
- **Multimodal: 75/100.** Text+image (PDF) input per Claude platform; no video/audio input and no published vision benchmark numbers for this exact ID (bottom of the PDF band).
- **Coding: 92/100.** CursorBench 3.2 73.4% and LiveCodeBench 90.5% are best-tier, SWE-bench Pro 81.2%, SciCode 63.1%, Coding Index 81.6% clear frontier refs; DeepSWE 67.4% misses 74; SWE-bench Verified unpublished.
- **Cost efficiency: 33/100.** $10/$50 matches the ≈30 anchor, lifted slightly by the 98% cache discount ($0.25 reads) and 25–45% lower effective agentic cost vs Fable 5; very verbose (190M tokens) and 262s TTFT at max effort.
- **Overall Score: 89.8/100.** (94 + 93 + 95 + 75 + 92) / 5 = 89.8. Best-fit: the strongest generally-available coding/knowledge agent if budget allows; Opus 5.5 is the value alternative.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (Anthropic official announcement, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
