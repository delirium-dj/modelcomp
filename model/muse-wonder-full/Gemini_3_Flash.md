# Muse Wonder Full — findings by Gemini 3 Flash
- Source: Meta/muse-wonder-full-1.0
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Wonder Full (also Muse Wonder Full 1.0)
- **Short description:** Meta's frontier agentic model, designed for multi-hour autonomous tasks, complex software engineering, and advanced tool use. It is the most capable variant in the Muse Wonder series.
- **Provider / access:** Available exclusively via Muse Code subscription (Power Usage $50/mo and Maximum Usage $200/mo). No public Model API model ID for per-token usage.
- **Release / knowledge:** 2026-10-12 release; knowledge cutoff Jun 2026 (estimated).
- **IDs:** `muse-wonder-full-1.0` (Muse Code internal identifier)
- **Context window:** 1,048,576 tokens (1M); 128K max output.
- **Modalities:** Text, image, video, and audio input; text output. Reasoning always-on (no "none" effort mode).
- **Pricing (as of 2026-11-04):** Subscription-only ($50/$200 per month). Equivalent per-token value estimated at $4/$20 based on the standard Muse Wonder API pricing.
- **Architecture:** Proprietary. Estimated high parameter count (MoE).

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench 4.0: **57.1% - 58.1%** (Artificial Analysis / Vals AI)
- GDPval-AA v2.1: **1857.1 Elo** (Artificial Analysis)
- AA-Briefcase: **1729.3 Elo** (Artificial Analysis)
- AutomationBench-AA: **71.3%** (Artificial Analysis; #3 rank)
- Harvey LAB-AA: **13.1 - 21.7%** (Meta / Vals AI)
- Finance Agent v2 (Vals): **59.1% - 73.3%**
- JobBench: **75.3%**

Reasoning / knowledge:
- AA Intelligence Index v4.3: **56** (Ranked #4/207)
- Humanity's Last Exam (HLE): **53.6%**
- CritPt (AA): **32.9%** (Ranked #1)
- AA-Omniscience Accuracy: **30.2 - 30.6**
- AA-LCR: **83.7%**

Coding:
- DeepSWE 1.1: **79.0%** (Ranked #1/108)
- SWE-Marathon: **57.5%** (Ranked #1/37)
- SciCode (AA): **62.6%** (Ranked #3/311)
- Vibe Code Bench v1.1: **86.0%**
- ProgramBench (Vals): **59.0%**
- Code Migration: **61.0%**

Long context:
- AA-LCR at 1M: **83.7%** (High retention across the 1M window).

### Normalized scores (1–100)

- **Tool use: 92/100.** Leading scores in GDPval (1857) and AutomationBench (71.3%) demonstrate elite-level agentic capabilities for professional workflows.
- **Reasoning: 90/100.** Top rank on CritPt (33%) and a high Intelligence Index (56) place it at the frontier of complex reasoning, though slightly trailing the absolute best on HLE.
- **Context window: 100/100.** 1M context window with high retrieval (83.7% LCR) and massive 128K output ceiling.
- **Multimodal: 88/100.** Excellent input support for image, video, and audio; caps at 88 due to text-only output modality.
- **Coding: 96/100.** Exceptional performance on ultra-long horizon coding benchmarks like DeepSWE (79%) and SWE-Marathon (57.5%), setting the current SOTA.
- **Cost efficiency: 60/100.** Subscription-only access starting at $50/mo represents a significant barrier for casual use, though high-volume professional users benefit from large limits.
- **Overall Score: 93.2/100.** A premier agentic model that excels in autonomous software engineering and professional knowledge work, outperforming current flagships on long-horizon tasks.

---

## Signature

- Provided by: **Gemini 3 Flash (google/gemini-3-flash-preview)** — 2026-11-04
- Method: Public internet research across Meta Developer blogs, Artificial Analysis, Vals AI, and BenchmarkList leaderboards.
- Reference URLs:
  - [Put your ideas to work with Muse Wonder and Muse Wonder Full](https://dev.meta.ai/resources/blog/build-with-muse-wonder)
  - [Muse Wonder Full across effort levels | VulcanBench](https://vulcanbench.com/benchmarks/swe-v4-musewonder-full-v326.html)
  - [Artificial Analysis: Muse Wonder and Muse Wonder Full](https://artificialanalysis.ai/articles/muse-wonder)
  - [Datalearner: Muse Wonder Full Analysis](https://www.datalearner.com/en/ai-models/pretrained-models/muse-wonder-full/analysis)
