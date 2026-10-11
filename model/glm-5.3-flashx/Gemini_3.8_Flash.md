# GLM 5.3 FlashX — findings by Gemini 3.8 Flash

- Source: opencode/glm-5.3-flashx
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Z.ai's high-speed serving variant of GLM-5.3-Flash with identical weights at ~200 tok/s for low-latency multimodal agentic coding.
- **Provider / access:** opencode/glm-5.3-flashx
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/glm-5.3-flashx (Zen tier available)
- **Context window:** 1,048,576 (1M); 128K output
- **Modalities:** Text, image, video in; text out
- **Pricing (as of 2026-10-11):** $0.37/$1.25 per 1M
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

> FlashX serves the same weights as GLM-5.3-Flash, so Z.ai's published Flash benchmarks and independent runs on Flash apply to FlashX (serving variant only).

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.ai launch post, corroborated by Artificial Analysis `terminalbench-v2-1` leaderboard; Vals AI harness: 62.9%)
- AA Tau3-Banking: **47.2%** (Artificial Analysis tau3-banking leaderboard)
- GDPval-AA: **1773** (Z.ai launch post — ahead of Claude Opus 4.8 1582, GPT-5.6 Terra 1571, Gemini 3.7 Flash 1527 on the general dev/programming eval)
- Toolathlon-Verified: **78.4%** (Z.ai launch post)
- AutomationBench: **48.8%** (Z.ai launch post); AA AutomationBench: **60.4%** (Artificial Analysis)
- Agents' Last Exam: **26.3%** (Z.ai launch post)
- AA Briefcase Elo: **1454**; AA ITBench: **51.2%**; AA EnterpriseOps-Gym: **33.2%** (Artificial Analysis)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.2%** (Artificial Analysis); Vals AI: 86.4%
- HLE: **39.9%** (Artificial Analysis, no tools); **55.3%** with tools (Z.ai launch post / HF eval results)
- MLCR-AA: **51.1%**; AA-LCR (long-context reasoning): **80.0%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **41.8** (AA leaderboard); Z.ai claims **57** on v4.1.1 at $0.045/task — harness/version conflict, both recorded
- AA-Omniscience Index: **7.5%**; AA-Omniscience non-hallucination rate: **72.4%** (Artificial Analysis)
- MMLU-Pro: **86.1%** (Vals AI)

Coding:

- SWE-bench (Vals): **92.0%** (Vals AI SWE-bench leaderboard; harness label "Vals", not Verified)
- DeepSWE v1.1: **63.4%** (Z.ai launch post; vs GLM-5.2's 46.2)
- LiveCodeBench: **80.5%** (Vals AI)
- AA-SciCode: **51.6%** (Artificial Analysis)
- NL2Repo: **56.3%**; OpenHarmony Bench: **57.3%**; FrontierSWE v2: **18.1%** (Z.ai / OpenHarmony / Proximal leaderboards)
- Z.ai Code Bench v1.0 (max effort): **29.0** vs Claude Opus 4.8 29.5 (Z.ai launch post, Claude Code 2.1.207)

Long context:

- No MRCR / RULER / GraphWalks retrieval number published for the 1M window; AA-LCR 80.0% at long context is the closest verified long-context signal. Hybrid sparse+linear attention is explicitly designed to preserve long-context quality while cutting KV cache 4.44x.

### Normalized scores (1–100)

- **Tool use: 85/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 84/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 95/100.** Effective retrieval fidelity across context capacity (1,048,576 (1M); 128K output).
- **Multimodal: 83/100.** Input/output modality comprehension (Text, image, video in; text out).
- **Coding: 83/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 92/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 86/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
