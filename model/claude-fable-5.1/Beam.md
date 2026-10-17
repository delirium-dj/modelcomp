# Claude Fable 5.1 — findings by Beam

- Source: Anthropic/Claude Fable 5.1, `anthropic/claude-fable-5-1`
- Date: 2026-10-17 (UTC)
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
- Terminal-Bench 2.1 (Vals): **85.0%**
- OSWorld 2.0: **41.7%**
- AutomationBench: **31.4%**
- Toolathlon-Verified: **77.8%**; Pass@3 81.5%; Pass³ 73.1%
- ApprenticeBench: **72%**; MazeBench: **10%**
- CWE-bench v1: **58.0%**
- GDPval-AA: **62.7%** (AA); AA Briefcase: **1674**
- Gray Swan IPI (15 attempts): **1.0%**

Reasoning / knowledge:

- HLE: **65%**; HLE w/o tools: **60.9%**
- ARC-AGI-1: **97.50%**; ARC-AGI-2: **90%**
- AA Intelligence Index: **53.4**
- MRCR: no verified public score found

Coding:

- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; SWE Multimodal: **54.7%**
- DeepSWE: **67.4%**; FrontierSWE v2: **56.3%**
- Bug Hunt Bench: **43.0 fixes**
- ProgramBench: **87.6%**; CursorBench 3.2: **73.4%**
- Coding public-lane (BenchLM): **76.8** (#3/150)

Long context:

- 1M window; MRCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 88/100.** Agentic lane #2/128 (80.9), Terminal-Bench 4.0 55.8%, ApprenticeBench 72%, Toolathlon-Verified 77.8%, OSWorld 41.7%; caps at AutomationBench 31.4%.
- **Reasoning: 90/100.** HLE 65%, ARC-AGI-1 97.5%, ARC-AGI-2 90%, AA Intelligence 53.4; caps at HLE w/o tools 60.9%.
- **Context window: 90/100.** 1M window; caps at no published MRCR retrieval.
- **Multimodal: 80/100.** Text/image/file in, text out; Blueprint-Bench 2 38.6%, OfficeQA Pro 57.9%.
- **Coding: 90/100.** SWE-bench Pro 81.2%, SWE Multilingual 89.1%, ProgramBench 87.6%, Bug Hunt 43 fixes; coding lane #3/150 (76.8).
- **Cost efficiency: 60/100.** Premium $10/$50 per 1M.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 83.17); best-fit for frontier coding + long-horizon agents at premium cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Anthropic system card/announcement, AWS Bedrock, BenchLM, GIGAZINE, Decrypt, DeepLearning.AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.