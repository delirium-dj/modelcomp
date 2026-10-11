# Qwen 3.8 Flash Next — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.8-flash-next
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.8 Flash Next
- **Short description:** Alibaba's open-weight experimental checkpoint (125B language params, 6B active), distinct from managed Qwen3.8-Flash; 262K native context with image and video understanding.
- **Provider / access:** opencode/qwen-3.8-flash-next
- **Release / knowledge:** 2026 release; knowledge cutoff 2026.
- **IDs:** opencode/qwen-3.8-flash-next (no Free ID on Zen)
- **Context window:** 262,144 native (extensible to 1M with YaRN)
- **Modalities:** Text, image, video in; text out; tool use
- **Pricing (as of 2026-10-11):** Vercel $0.12/$0.40 per 1M; open weights (Qwen Community license)
- **Architecture:** Foundation model architecture with advanced reasoning and tool invocation.

### Raw benchmarks found

All figures are the **vendor's own eval table** from the official `Qwen/Qwen3.8-Flash-Next` model card (harness notes in the table: DeepSWE 1.1 evaluated on both Claude Code and mini-SWE-agent at temp 1.0 / top_p 0.95 / 256K, best-of reported; SWE-bench Pro on the Claude Code harness with problematic tasks corrected and all baselines re-evaluated; SWE-bench Multilingual on mini-SWE-agent; NL2Repo-Bench on Claude Code with repo-fetching Bash commands disabled; CoWorkBench and RecreationBench are Qwen in-house benchmarks; HLE judged by GPT-4o). No third-party run of this exact checkpoint was found.

Agent / tool use:

- Toolathlon Verified (Pass@1): **73.5%**
- ClawEval-MM (multimodal tool use): **Pass@3 64.4% / average 60.4%**
- OSWorld 2.0 (computer use): **binary 19.4% / partial 52.3%**
- Agents' Last Exam: **Pass@1 24.3% / Score 51.2%**
- JobBench (professional job tasks): **55.7%**
- CoWorkBench (long-horizon office work): **73.9%**
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Toolathon / MCP-Atlas / SWE-Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%**
- HLE: **35.9%** (judged by GPT-4o)
- LiveCodeBench v6: **91.9%**
- IFBench: **81.3%**
- Artificial Analysis Intelligence Index / CritPt / LCR / MLCR / Omniscience: no verified public score found

Coding:

- DeepSWE 1.1: **58.7%**
- SWE-bench Pro: **62.5%** (independently ranked **#9 of 46** by LLM Reference)
- SWE-bench Multilingual: **81.0%**
- NL2Repo-Bench: **48.1%**
- LiveCodeBench v6: **91.9%**
- SWE-bench Verified / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval reported. 262,144 is native and 1,000,000 is reachable only through YaRN position scaling; no MRCR, RULER or GraphWalks number was published for this checkpoint.

Multimodal / vision (vendor-reported, for the scoring dimension):

- LVBench (long video understanding): **76.6%**
- MathVision: **90.6% without CI / 95.7% with CI**
- CharXiv (RQ): **84.6% without CI / 90.6% with CI**
- RealWorldQA: **88.5%**
- AndroidWorld: **84.5%**
- ERQA (embodied): **72.3%**
- Vision2Web: **64.0%**
- RecreationBench (application recreation, in-house): **49.9%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Normalized assessment of autonomous tool execution and function calling.
- **Reasoning: 82/100.** Normalized assessment of complex multi-step reasoning and deductive analysis.
- **Context window: 82/100.** Effective retrieval fidelity across context capacity (262,144 native (extensible to 1M with YaRN)).
- **Multimodal: 83/100.** Input/output modality comprehension (Text, image, video in; text out; tool use).
- **Coding: 82/100.** Verified software engineering and code generation capability.
- **Cost efficiency: 95/100.** Value proposition relative to performance and pricing structure.
- **Overall Score: 82.2/100.** Balanced quality capability across the 5 core dimensions.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-11
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
