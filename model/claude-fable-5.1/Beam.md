# Claude Fable 5.1 — findings by Beam

- Source: Anthropic/Claude Fable 5.1, `anthropic/claude-fable-5-1`
- Date: 2026-10-22 (UTC, re-run; prior 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's frontier model (Sep 1, 2026) for ambitious coding, long-horizon agents, enterprise knowledge work; same underlying model as Mythos 5.1 with cyber/bio safeguards. Handles whole-codebase projects and multi-hour agent runs.
- **Provider / access:** Anthropic API `claude-fable-5-1`; AWS Bedrock `anthropic.claude-fable-5-1`; Google Cloud, Microsoft Foundry. Requires 30-day data retention by default.
- **Release / knowledge:** Released 2026-09-01; knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-fable-5-1`
- **Context window:** 1,000,000 tokens; max output 128,000.
- **Modalities:** text, image, file (PDF) in; text out; reasoning yes (adaptive thinking, effort low..max, default high); tool calling yes; structured output yes. No audio/video.
- **Pricing (as of 2026-10-17):** $10.00 / 1M input, $50.00 / 1M output, $0.25 / 1M cache read; paid. Cache reads 75% cheaper than Fable 5.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **80.9** (#2/128)
- Terminal-Bench 4.0: **55.80%**; Terminal-Bench-Science 0.1: **52.6%**
- Terminal-Bench 2.1 (Vals): **91.4%** (AA Oct 22; prior 85.0%)
- OSWorld 2.0: **41.7%**
- AutomationBench: **31.4%**
- Toolathlon-Verified: **77.8%**; Pass@3 81.5%; Pass³ 73.1%
- ApprenticeBench: **72%**; MazeBench: **10%**
- CWE-bench v1: **58.0%**
- GDPval-AA: **62.7%** (AA); AA Briefcase: **1674**; **New (Oct 22):** GDPval-AA v2 **1853 Elo** (+130 over Fable 5); AA-Briefcase **1694 Elo**; τ³-Banking **+9** over Fable 5; AA-Omniscience **67.2%** acc / 93.4% attempt / 72.6% hallucination.
- Gray Swan IPI (15 attempts): **1.0%**

Reasoning / knowledge:

- HLE: **59.1%** (max effort, AA Oct 22; prior 65%); HLE w/o tools: not separately reported (prior 60.9% at high effort)
- ARC-AGI-1: **97.50%**; ARC-AGI-2: **90%**
- AA Intelligence Index: **66** (max effort, AA Oct 22; prior 53.4)
- MRCR: no verified public score found

Coding:

- SciCode: **62.0%** (AA Oct 22); SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**
- Bug Hunt Bench: **43.0 fixes**
- ProgramBench: **87.6%**; CursorBench 3.2: **73.4%**
- Coding public-lane (BenchLM): **76.8** (#3/150)

Long context:

- 1M window; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Agentic lane #2/128 (80.9), Terminal-Bench 4.0 55.8%, Terminal-Bench 2.1 91.4% (up), ApprenticeBench 72%, Toolathlon-Verified 77.8%, OSWorld 41.7%; caps at AutomationBench 31.4%.
- **Reasoning: 90/100.** HLE 59.1% (max), ARC-AGI-1 97.5%, ARC-AGI-2 90%, AA Intelligence 66 (up from 53.4); caps at HLE w/o tools ~60.9% (prior).
- **Context window: 90/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 80/100.** Text/image/file in, text out; Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%.
- **Coding: 90/100.** SWE-bench Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, Bug Hunt 43 fixes; coding lane #3/150 (76.8).
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 83.17); best-fit for frontier coding + long-horizon agents at premium cost.

---

---

## Research update — 2026-10-22 (re-run)

≥5 independent web searches performed (Anthropic system card, Artificial Analysis, llmbenchmark, BenchLM, Vals AI, Epoch AI). Key new/verified data:
- AA Intelligence Index: **66** (max effort; up from prior 53.4).
- Terminal-Bench 2.1: **91.4%** (up from 85.0%).
- HLE: **59.1%** (max effort; prior 65%).
- GDPval-AA v2: **1853 Elo** (+130 over Fable 5); AA-Briefcase **1694 Elo**; τ³-Banking +9 over Fable 5.
- AA-Omniscience: 67.2% acc / 93.4% attempt / 72.6% hallucination; SciCode 62.0%.
- Cache read price cut to $0.25 (75% cheaper) confirmed; headline $10/$50 unchanged.

Score changes: None (dimensions unchanged: Tool 88, Reasoning 90, Context 90, Multimodal 80, Coding 90; Overall 88). Reasoning cap (HLE w/o tools ~60.9%) unchanged. Overall stays 88.

Sources:
- https://artificialanalysis.ai/models/claude-fable-5-1
- https://llmbenchmark.ai/en/models/claude-fable-5-1
- https://benchlm.ai/models/claude-fable-5-1
- https://www.anthropic.com/news/claude-fable-5-1
- https://aws.amazon.com/bedrock/claude/

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22 (re-run)
- Method: public internet research (Anthropic system card/announcement, AWS Bedrock, BenchLM, GIGAZINE, Decrypt, DeepLearning.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.