# Llama 3.2 Vision Instruct (90B) — findings by GLM 5.3

- Source: Meta (`llama_3.2_vision_instruct`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (90B) — folder slug `llama_3.2_vision_instruct`
- **Short description:** Meta's Llama 3.2 vision-language flagship (90B dense, 2024-era), the multimodal sibling of Llama 3.1/3.2 text models — now several generations behind the frontier. Top use case: self-hosted legacy vision-language assistant.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-90B-Vision-Instruct` (open weights, Llama license); no current OpenCode Zen listing; various hosted providers.
- **Release / knowledge:** 2024 (Llama 3.2 generation; exact date not re-verified this session); knowledge cutoff not publicly disclosed.
- **IDs:** HF `meta-llama/Llama-3.2-90B-Vision-Instruct`; no Zen ID, no Free ID
- **Context window:** 128K tokens total (platform metadata; BenchmarkList profile).
- **Modalities:** text/image in; text out; non-reasoning (instruct); tool calls.
- **Pricing (as of 2026-09-24):** price not published on tracked aggregators; open weights (self-host at 90B dense is hardware-heavy); scored provisionally.
- **Architecture:** dense ~90B parameters with vision encoder; open weights.

### Raw benchmarks found

> No BenchLM/AA leaderboard page exists for this ID; the only verified public rows are on BenchmarkList (an "evidence-only profile" from 7 benchmarks, largely niche/academic). Core harness scores (Terminal-Bench, GDPval, SWE-bench, GPQA, HLE) were **not found**. Scores below are low-confidence.

Agent / tool use:

- AgentHijack (computer-use robustness): **1.6%** average / 4.0% clean (BenchmarkList — rank 10/10, 0th percentile — near-total failure under environment corruption)
- MineExplorer (open-world agent): **10.0%** overall TSR (BenchmarkList — rank 16/18)
- Terminal-Bench / Tau / GDPval / Claw-Eval: **no verified public score found** for this ID

Reasoning / knowledge:

- K-MetBench (meteorology expert exam): **56.9%** overall (BenchmarkList; reasoning subset 9.72 points)
- PhysicsMind (physical reasoning VQA): **65.0%** (BenchmarkList)
- GPQA / HLE / AA-LCR / AA Index: **no verified public score found** for this ID

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 128K window (platform metadata); no retrieval number published.

Multimodal (grounding):

- OpenVLM Leaderboard average: **63.4** (BenchmarkList — MMBench 77.3, MMStar 55.3, MMMU 60.3, MathVista 58.2, OCRBench 783, AI2D 69.5, HallusionBench 44.1, MMVet 64.1)
- WikiVQABench (knowledge-grounded VQA): **65.7%** (BenchmarkList — rank 4/17)
- SafeArena: **34.0%** normalized safety (BenchmarkList)

### Normalized scores (1–100)

- **Tool use: 25/100.** The only verified agent rows are brutal: AgentHijack 1.6% (0th percentile) and MineExplorer 10% — this model cannot drive computer-use agents.
- **Reasoning: 55/100.** No GPQA/HLE rows exist; provisionally scored from PhysicsMind 65.0% and K-MetBench 56.9% — mid-tier for a 2024 flagship, now dated.
- **Context window: 60/100.** 128K total — mid of the 100K–200K band.
- **Multimodal: 68/100.** Text+image input with a mid OpenVLM average (63.4; MMMU 60.3, OCRBench 783) — respectable for its era, HallusionBench 44.1 shows weak grounding.
- **Coding: 22/100.** Zero verified coding rows on any tracked harness for this ID; the 2024-era instruct line predates agentic coding training — scored conservatively (provisional).
- **Cost efficiency: 70/100.** Pricing unpublished; open weights are free to license but 90B dense is hardware-heavy to self-host; hosted variants are legacy-cheap (provisional).
- **Overall Score: 46.0/100.** (25 + 55 + 60 + 68 + 22) / 5 = 46.0. Best-fit: legacy self-hosted vision-language assistant only; every current multimodal model dominates it.

Note: the folder slug uses underscores (`llama_3.2_vision_instruct`), matching the raw platform stub; the tracked model is the 90B Vision flagship (the 11B sibling exists in the family). If the orchestrator prefers hyphen-slug normalization, this folder may need renaming per `model/README.md` conventions.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-24
- Method: public internet research (BenchmarkList, Hugging Face, platform metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
