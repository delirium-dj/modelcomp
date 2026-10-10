# GPT-5.6 Sol — findings by Qwen 3.7 Plus

- Source: OpenAI/GPT-5.6 Sol (`openai/gpt-5.6-sol`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship model in the GPT-5.6 family, released July 9, 2026. The top-tier "Sol" variant in a three-model family (Sol, Terra, Luna). AA Intelligence Index 58.9 at max effort — 1 point below Claude Fable 5 (59.9) at ~one-third the cost per task ($1.04/task). Leads the AA Coding Agent Index at 80 points in OpenAI's Codex harness. Terminal-Bench 2.1 at 91.9% is among the highest recorded. ARC-AGI-2 at 92.5% is the highest verified score in the dataset. FrontierMath T4 at 83% is best-in-class. SWE-bench (Vals) 96.2% is near-perfect. GDPval-AA Elo 1735–1748 is competitive with Fable 5. Cost-efficient at $5/$30 per 1M — half the input price and 40% cheaper on output vs. Fable 5 ($10/$50). Note: long-context surcharge applies over 272K input tokens (2× input, 1.5× output). Text and image input only — no audio, video, or PDF.
- **Provider / access:** OpenAI API; ChatGPT; Codex. Paid only. No free tier. No OpenCode Zen ID.
- **Release / knowledge:** 2026-07-09 release; knowledge cutoff not precisely documented.
- **IDs:** `openai/gpt-5.6-sol` (OpenAI API). No free OpenCode Zen ID.
- **Context window:** 1,050,000 tokens (1.05M) total; 128,000 max output. Long-context surcharge: over 272K input tokens, pricing doubles for input and increases 1.5× for output.
- **Modalities:** Text and image in; text out. No audio, video, or PDF input. Reasoning: configurable effort levels including max; "ultra" mode coordinates subagents. Tool calls supported.
- **Pricing (as of 2026-10-10):** $5/$30 per 1M input/output tokens (official OpenAI pricing). Cache read: $0.50/M (90% discount). Cache write: $6.25/M (1.25× input — first OpenAI model with cache-write pricing). Batch API: $2.50/$15. Approximately half the input price and 40% cheaper on output vs. Claude Fable 5 ($10/$50).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **91.9%** (OpenAI; vs Fable 5 83.1–84.6%) / **85.8%** (Vals AI)
- BrowseComp: **92.2%** (OpenAI; vs Fable 5 88.0%) / **90.4%** (CodingFleet)
- τ²-bench: **85.1%** (Artificial Analysis)
- GDPval-AA Elo: **1735** (OpenAI) / **1747.8** (CodingFleet; vs Fable 5 1759.6)
- GDPval-AA normalized: **55.6%** (AA)
- Terminal-Bench Hard: **65.9%** (AA)
- CyberGym: **84.5%** (OpenAI)
- ExploitGym: **33.7%** (OpenAI)
- OSWorld 2.0: **62.6%** (OpenAI; vs Fable 5 54.8%)
- Toolathlon: **58%** (OpenAI; vs Fable 5 61.7%)
- AA Agentic Index: **50.5%** (AA)
- AA ITBench: **56.2%** (AA)
- AA-AnalystAgent: **47.5%** (AA)
- ApprenticeBench: **26%** (NeoCognition)
- Terminal-Bench 3.0: **34.6%** (Terminal-Bench 3.0 leaderboard)
- Agents' Last Exam: **52.7%** (OpenAI; vs Fable 5 40.5%)

Coding:

- AA Coding Agent Index: **80** (AA in Codex harness; leads all models; vs Fable 5 77.2)
- SWE-bench (Vals): **96.2%** (Vals AI — near-perfect)
- Terminal-Bench 2.1: **91.9%** (OpenAI)
- DeepSWE: **72.7%** (OpenAI; vs Fable 5 69.7–70.0%)
- SWE-bench Pro: **64.6%** (OpenAI; vs Fable 5 80.0% — significant gap)
- CursorBench 3.2: **67.2%** (Cursor evals)
- CursorBench 4.0: **41.7%** (Cursor evals)
- VulcanBench v3: **87.0%** (VulcanBench)
- VulcanBench CII v1: **86.5%** (VulcanBench)
- LiveCodeBench (Vals): **82.6%** (Vals AI)
- AA Coding Index: **77.4%** (AA)
- AA-SciCode: **57.1%** (AA)
- FrontierCode 1.1 Extended: **60.6%** (Cognition/Devin)
- FrontierSWE v2: **32.2%** (Proximal)
- Bug Hunt Bench: **42.0 fixes** (Bug Hunt Bench)
- PostTrainBench v1.1: **36.2%** (PostTrainBench)

Multimodal:

- MMMU-Pro: **83%** (OpenAI) / **83.4%** (AA) / **84.6%** (with Python)

Reasoning / knowledge:

- ARC-AGI-2: **92.5%** (ARC Prize — verified; highest in dataset)
- ARC-AGI-1: **96.5%** (ARC Prize — verified)
- ARC-AGI-3: **7.8%** (ARC Prize — first model to score on this new benchmark)
- AA Intelligence Index: **58.9** (AA at max; vs Fable 5 59.9; #2 overall)
- GPQA Diamond: **94.6%** (OpenAI) / **94.1%** (AA) / **95.2%** (Vals AI)
- HLE-Verified: **54.5%** (Google DeepMind Gemini 3.8 Flash model card) / **49.5%** (AA)
- MMLU-Pro: **89.1%** (Vals AI)
- FrontierMath (legacy): **89%** (OpenAI)
- FrontierMath v2 Tiers 1–3: **89%** (OpenAI; vs Fable 5 87%)
- FrontierMath v2 Tier 4: **83%** (OpenAI; vs Fable 5 87.8%)
- AA-Omniscience Index: **22.0%** (AA)
- AA-Omniscience Accuracy: **59.4%** (AA)
- AA-Omniscience Hallucination Rate: **92.2%** (AA — very high)
- AA-LCR (Long Context Reasoning): **84.0%** (AA)
- IFBench: **72.7%** (AA)
- CritPt (Physics): **32.3%** (AA)
- HealthBench Professional: **60.5%** (OpenAI)
- HealthBench Hard: **33.1%** (OpenAI)
- LABBench2: **82.1%** (Google DeepMind)
- GeneBench-Pro: **28.7%** (OpenAI)
- Gray Swan IPI: **27.0%** (Google Gemini 4 Argon chart)

Long context:

- AA-LCR: **84.0%** (AA)
- BrowseComp (full context): **90.4%** (CodingFleet)

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 at 91.9% is among the highest recorded (vs Fable 5 83.1–84.6%). BrowseComp 92.2% leads all models. CyberGym 84.5% is strong. GDPval-AA Elo 1735–1748 is within striking distance of Fable 5 (1760). OSWorld 2.0 62.6% beats Fable 5 (54.8%). However, ApprenticeBench 26% is low, Toolathlon 58% is modest, and AA-AnalystAgent 47.5% is moderate. The tool use profile is strongest on terminal and browsing tasks — ideal for professional agent workflows and terminal-driven coding.
- **Reasoning: 86/100.** ARC-AGI-2 at 92.5% is the highest verified score in the dataset — a standout result. FrontierMath T4 at 83% is best-in-class (extremely difficult problems). GPQA Diamond 94.6% is near-perfect on graduate-level science. FrontierMath T1–3 at 89% is excellent. HLE-Verified 54.5% is competitive. However, AA-Omniscience hallucination rate 92.2% is the highest in the dataset — a significant calibration weakness. CritPt 32.3% is low. The AA Intelligence Index at 58.9 is #2 overall (1 point behind Fable 5). ARC-AGI-3 at 7.8% is the first model to score on this new benchmark. The reasoning profile is frontier-class with exceptional math and abstract reasoning, but poor calibration (hallucination).
- **Context window: 87/100.** 1.05M tokens total with 128K max output — standard frontier-class. AA-LCR 84.0% is solid. However, the long-context surcharge (over 272K input: 2× input, 1.5× output) is a significant cost penalty for large-document processing. Unlike Fable 5 (full 1M at standard pricing), Sol's effective context window for cost-sensitive work is 272K. BrowseComp 90.4% on full context demonstrates strong long-context comprehension when cost is no object.
- **Multimodal: 77/100.** Text and image input only — no audio, video, or PDF support. MMMU-Pro 83–83.4% is competitive (vs Kimi K3 81.6%, Fable 5 no published score). Very few multimodal benchmarks published — a significant coverage gap. No OmniDocBench, CharXiv, MathVision, or other document/math vision scores available. The multimodal capability exists but is under-documented compared to competitors. Text output only.
- **Coding: 88/100.** AA Coding Agent Index 80 leads all models in the Codex harness. Terminal-Bench 2.1 91.9% is top-tier. SWE-bench (Vals) 96.2% is near-perfect. DeepSWE 72.7% leads Fable 5 (69.7–70.0%). CursorBench 3.2 67.2% is competitive. VulcanBench v3 87.0% is excellent. However, SWE-bench Pro 64.6% trails Fable 5 (80.0%) by 15.4 points — a significant gap on agentic coding. FrontierSWE v2 32.2% is low. AA Coding Index 77.4% is solid. The coding profile leads on terminal execution and coding agent work but trails on repository issue resolution (SWE-bench Pro).
- **Cost efficiency: 80/100.** $5/$30 per 1M tokens is mid-range — half the input price and 40% cheaper on output vs. Fable 5 ($10/$50). AA reports $1.04 per Intelligence Index task — approximately one-third of Fable 5's cost. Defines a new Pareto frontier of Intelligence vs. Cost per Task. Uses fewer output tokens (15k/task) than most comparable models. Batch API at $2.50/$15 is affordable. Cache read at $0.50/M helps. However, the long-context surcharge (2× over 272K) increases costs for large-document workloads. The Terra and Luna variants offer even better cost-efficiency at lower intelligence levels. One of the best value propositions among frontier models.
- **Overall Score: 85.4/100.** Mean of five quality dims: (89 + 86 + 87 + 77 + 88) / 5 = 85.4. OpenAI's flagship GPT-5.6 family model. Key strengths: ARC-AGI-2 at 92.5% (highest in dataset), AA Coding Agent Index at 80 (leads all models), Terminal-Bench 2.1 at 91.9% (top-tier), cost per task at ~one-third of Fable 5 for similar intelligence, FrontierMath T4 at 83% (best-in-class). Key weaknesses: 92.2% hallucination rate (highest in dataset), SWE-bench Pro 64.6% trails Fable 5 by 15.4 points, text+image only (no audio/video/PDF), long-context surcharge over 272K tokens, limited multimodal benchmark coverage. Best fit for: terminal-driven coding agent workflows, cost-sensitive deployments needing frontier intelligence, professional knowledge work (management consulting, browsing), and teams using OpenAI's Codex harness. The value leader among frontier models — near-Fable-5 intelligence at one-third the cost.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across OpenAI official announcements, Artificial Analysis, BenchLM, Vals AI, CodingFleet, ARC Prize, Cursor evals, VulcanBench, Proximal, Cognition/Devin, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
