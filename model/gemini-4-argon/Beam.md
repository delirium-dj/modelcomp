# Gemini 4 Argon — findings by Beam

- Source: Google/Gemini 4 Argon, `google/gemini-4-argon`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 4 Argon
- **Short description:** Google's flagship frontier reasoning model (Sep 30, 2026) for complex software engineering, deep math/science, autonomous multi-step agents, and long decode up to 1M tokens. State of the art on DeepSWE v1.1 and LVBench; #1 on AutomationBench.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-4-argon`; OpenRouter; Gemini app (Pro/Ultra). Batch, flex, priority inference.
- **Release / knowledge:** Released 2026-09-30; knowledge cutoff March 2026.
- **IDs:** `google/gemini-4-argon`
- **Context window:** 1,048,576 tokens unified; max output 65,536 default / up to 1,048,576 with long decode.
- **Modalities:** text, image, video, audio, PDF in; text out; reasoning yes (low/medium/high); tool calling yes; computer use (preview); code execution; search grounding; structured output.
- **Pricing (as of 2026-10-17):** $2.00 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

Agent / tool use:

- Vals Index: **68.9%** (#? of models)
- AutomationBench: **51.3%** (#1)
- Finance Agent v2: **65.4%**
- Harvey's Legal Agent Benchmark: **19.6%**
- Terminal-Bench 4.0: **57.40%**
- Agents' Last Exam: **39.5%**
- OSWorld 2.0: **69.2%**
- CWE-bench v1: **68.0%** (tie #1)
- Agentic public-lane (BenchLM): **77.2** (estimated #4/128)
- Gray Swan IPI: leading robustness (no numeric given)

Reasoning / knowledge:

- STEMBench: **2.44** (out of ?)
- GraphWalks BFS 128K: **99.7%**; 256K-1M: **84.2%**
- GPQA / HLE / ARC-AGI: no verified public score found in sources
- Artificial Analysis Intelligence Index: no verified figure found

Coding:

- DeepSWE v1.1: **77.9%** (SOTA)
- Vibe Code Bench: **91.90%**
- Coding public-lane (BenchLM): **72.3** (#6/150)
- FrontierSWE v2: **55.0%**
- LiveCodeBench: no verified public score found
- SWE-bench Verified/Pro: no verified public score found

Long context:

- GraphWalks BFS 128K 99.7%, 256K-1M 84.2%; LVBench **91.7%** (SOTA long video).

### Normalized scores (1–100)

- **Tool use: 88/100.** AutomationBench #1 (51.3%), OSWorld 69.2%, CWE-bench 68% tie #1, agentic lane #4/128 (77.2); caps at Agents' Last Exam 39.5%.
- **Reasoning: 86/100.** STEMBench 2.44, GraphWalks 84.2-99.7%; caps at no published GPQA/HLE/ARC-AGI.
- **Context window: 92/100.** 1M window with GraphWalks 84.2-99.7% and 1M long decode; LVBench 91.7%.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in, text out; LVBench 91.7% SOTA; no image gen.
- **Coding: 86/100.** DeepSWE 77.9% SOTA, Vibe Code 91.9%, coding lane #6/150 (72.3); caps at no SWE-bench Verified/Pro.
- **Cost efficiency: 80/100.** Paid at $2/$10 per 1M; mid-premium.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 80.94); best-fit for long-horizon agentic + coding + long video.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google DeepMind model card/blog, BenchLM, BenchLeader); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.