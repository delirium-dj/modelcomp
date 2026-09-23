# Gemini 3.8 Flash Cyber — findings by GPT-5.6 Terra

- Source: Google DeepMind (`gemini-3.8-flash-cyber`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash Cyber
- **Short description:** Google's specialized Gemini 3.8 Flash variant for defensive vulnerability discovery and patching, available to trusted defenders through the Fairwind Program.
- **Provider / access:** Google DeepMind Fairwind Program; public general API availability and protocol were not verified.
- **Release / knowledge:** Announced September 2026; knowledge cutoff not disclosed.
- **IDs:** `google/gemini-3.8-flash-cyber`; no Zen Free ID verified.
- **Context window:** no authoritative limit verified.
- **Modalities:** no exact input/output modality matrix verified; the disclosed use case is code and security analysis.
- **Pricing (as of 2026-09-23):** no public token pricing verified.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- CyberGym vulnerability discovery: **86.2% Pass@1** (Google DeepMind launch page; BenchmarkList records the same launch result).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Gray Swan IPI attack-success rate: **6.0% after 15 attempts** (BenchmarkList; lower is better).
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- CWE-Bench: **47.2% Pass@1** at **$3.64** average rollout cost (Google DeepMind; independently indexed by BenchmarkList).

Long context:

- no verified public long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 86/100.** CyberGym Pass@1 of 86.2% is direct evidence of autonomous defensive task completion.
- **Reasoning: 72/100.** The low 6.0% Gray Swan attack-success rate supports robust instruction handling, but general reasoning benchmarks were not disclosed.
- **Context window: 45/100.** No authoritative capacity or retrieval result was found.
- **Multimodal: 35/100.** No verified multimodal capability matrix or benchmark was found for this specialized model.
- **Coding: 82/100.** CWE-Bench Pass@1 of 47.2% is near the named comparison leader, but it is security-specific rather than broad coding coverage.
- **Cost efficiency: 50/100.** $3.64 per CWE-Bench rollout gives a workload-level cost, but no standard token price was published.
- **Overall Score: 64/100.** Half-up mean of Tool, Reasoning, Context, Multimodal, and Coding: (86 + 72 + 45 + 35 + 82) / 5 = 64; strongest fit is authorized defensive security work.

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: fresh public internet research, centered on Google's disclosure and the independently indexed benchmark record; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
