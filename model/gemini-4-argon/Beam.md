# Gemini 4 Argon — findings by Beam

- Source: Google/Gemini 4 Argon, `google/gemini-4-argon`
- Date: 2026-11-08 (UTC) (enrichment pass; original 2026-10-17)
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
- **Pricing (as of 2026-11-08):** $2.00 / 1M input, $10.00 / 1M output; paid.
- **Architecture:** proprietary; params not published.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

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
- AA Briefcase: **1611** (Artificial Analysis)
- AA AutomationBench: **77.5%** (Artificial Analysis)
- AA-AnalystAgent: **48.8%** (Artificial Analysis)
- OSWorld 2.1 Offline: **74.7%** (Google)
- ExploitGym: **39.5%** (Google)
- AA Terminal-Bench 4.0: **65.2%** (Artificial Analysis)
- AA ITBench: not individually reported
- MazeBench: **12%** (MazeBench)
- AA Cyber Index: **33.4%** (Artificial Analysis)
- CWE-Bench-AA: **63.3%** (Artificial Analysis)
- DeepsecBench-AA: **36.9%** (Artificial Analysis)
- CyberGym-E2E-AA: **0.0%** (Artificial Analysis)
- GDPval-AA: **56.2%** normalized (Artificial Analysis)
- AA Briefcase: **1611** (Artificial Analysis)

Reasoning / knowledge:

- STEMBench: **2.44** (out of ?)
- GraphWalks BFS 128K: **99.7%**; 256K-1M: **84.2%**
- GPQA / HLE / ARC-AGI: no verified public score found in sources
- Artificial Analysis Intelligence Index: **50.4%** (measured, updated 2026-11-07)
- AA-HLE: **57.1%** (measured)
- AA-Omniscience Index: **46.1%**
- AA-Omniscience Accuracy: **48.3%**
- AA-Omniscience Hallucination Rate: **4.3%**
- CritPt: **27.1%** (Artificial Analysis)
- MLCR-AA: not individually reported
- AA-LCR: **79.7%** (Artificial Analysis)
- ARC-AGI-1: **98.50%**; ARC-AGI-2: **91.3%**; ARC-AGI-3: **46.3%**
- FrontierMath v2 Tiers 1-3: **85.965%**; Tier 4: **78.049%** (Epoch AI)

Coding:

- DeepSWE v1.1: **77.9%** (SOTA)
- Vibe Code Bench: **91.90%**
- Coding public-lane (BenchLM): **72.3** (#6/150)
- FrontierSWE v2: **55.0%**
- LiveCodeBench: no verified public score found
- SWE-bench Verified/Pro: no verified public score found
- ScarfBench: **75.2%** (Kaggle)
- DeepSWE: **77.9%** (Google)
- FrontierSWE v2: **55.0%** (Proximal)
- AA-SciCode: **61.8%** (Artificial Analysis)
- Bug Hunt Bench: **40.7 fixes** (Bug Hunt Bench)
- PostTrainBench v1.1: **45.3%** (Google)
- Vibe Code Bench: **91.90%** (Google)
- AA Coding Index: not individually reported
- ExtractBench Pro: **30%** (LlamaIndex)
- Chartography (no tools): **71.6%** (Google)
- LVBench: **91.7%** (Google)
- Blueprint-Bench 2: **54.4%** (Google)
- Frontierswe v2: **55.0%** (Proximal)

Long context:

- GraphWalks BFS 128K 99.7%, 256K-1M 84.2%; LVBench **91.7%** (SOTA long video).

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 88/100.** AutomationBench #1 (51.3%), OSWorld 69.2%, CWE-bench 68% tie #1, agentic lane #4/128 (77.2); caps at Agents' Last Exam 39.5%. Enrichment (2026-11-08): added AA Briefcase 1611, AA AutomationBench 77.5%, AA-AnalystAgent 48.8%, OSWorld 2.1 Offline 74.7%, ExploitGym 39.5%, AA Terminal-Bench 4.0 65.2%, MazeBench 12%, AA Cyber 33.4%, CWE-Bench-AA 63.3%, DeepsecBench 36.9%, CyberGym-E2E 0.0%, GDPval-AA 56.2% normalized. Corroborates band; no change.
- **Reasoning: 86/100.** STEMBench 2.44, GraphWalks 84.2-99.7%; caps at no published GPQA/HLE/ARC-AGI. Enrichment adds AA Intelligence 50.4%, AA-HLE 57.1%, AA-Omniscience 46.1%/48.3%/4.3%, CritPt 27.1%, ARC-AGI 98.5%/91.3%/46.3%, AA-LCR 79.7%, FrontierMath v2 85.97%/78.05%. Corroborates band; no change.
- **Context window: 92/100.** 1M window with GraphWalks 84.2-99.7% and 1M long decode; LVBench 91.7%.
- **Multimodal: 88/100.** Text/image/video/audio/PDF in, text out; LVBench 91.7% SOTA; no image gen. Enrichment adds ExtractBench Pro 30%, Chartography 71.6%, Blueprint-Bench 54.4%, AA-MMMU-Pro not individually reported. Corroborates band; no change.
- **Coding: 86/100.** DeepSWE 77.9% SOTA, Vibe Code 91.9%, coding lane #6/150 (72.3); caps at no SWE-bench Verified/Pro. Enrichment adds ScarfBench 75.2%, DeepSWE 77.9%, AA-SciCode 61.8%, Bug Hunt 40.7, PostTrainBench 45.3%, Vibe Code 91.9%, ExtractBench Pro 30%, Chartography 71.6%, LVBench 91.7%, Blueprint-Bench 54.4%. Corroborates band; no change.
- **Cost efficiency: 80/100.** Paid at $2/$10 per 1M; mid-premium.
- **Overall Score: 88/100.** Mean of five quality dims (BenchLM aggregate 80.94); best-fit for long-horizon agentic + coding + long video. Enrichment (2026-11-08) added new verified rows (AA Intelligence 50.4%; CritPt 27.1%; ARC-AGI 98.5%/91.3%/46.3%; AA-LCR 79.7%; FrontierMath v2 85.97%/78.05%; ScarfBench 75.2%; AA-SciCode 61.8%; Bug Hunt 40.7; PostTrainBench 45.3%; ExtractBench Pro 30%; Chartography 71.6%; Blueprint-Bench 54.4%; AA Briefcase/AutomationBench/AnalystAgent/OSWorld 2.1/ExploitGym/AA Terminal-Bench/MazeBench/AA Cyber/CWE-Bench-AA/DeepsecBench/CyberGym-E2E/GDPval-AA rows). No dimension band moved; Overall unchanged at 88.

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-08
- Method: enrichment pass (fresh public web research via BenchLM/Artificial Analysis aggregator, 2026-11-08); scores are normalized 1–100 interpretations, not official vendor scores. Original report 2026-10-17 preserved; new benchmark rows added; no dimension score changed (new evidence corroborates existing bands).
- Reference URLs:
  - [BenchLM — Gemini 4 Argon](https://benchlm.ai/models/gemini-4-argon)
  - [Artificial Analysis — Gemini 4 Argon](https://artificialanalysis.ai/models/gemini-4-argon)
  - [Google DeepMind — Gemini 4 Argon evals](https://deepmind.google/models/evals-methodology/gemini-4-argon)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).