# Llama 3.2 Vision Instruct (90B) — findings by GLM 5.3

- Source: Meta (`llama_3.2_vision_instruct`)
- Date: 2026-10-16 (UTC) — re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Llama 3.2 Vision Instruct (90B) — folder slug `llama_3.2_vision_instruct`
- **Short description:** Meta's Llama 3.2 vision-language flagship (90B dense, 2024-era), the multimodal sibling of Llama 3.1/3.2 text models — now several generations behind the frontier. Top use case: self-hosted legacy vision-language assistant.
- **Provider / access:** Hugging Face `meta-llama/Llama-3.2-90B-Vision-Instruct` (open weights, Llama 3.2 Community License); hosted via DeepInfra, Bedrock, Fireworks, Together, Hyperbolic (llm-stats); no OpenCode Zen listing. Local: ~54 GB VRAM at Q4_K_M (llmconfigurator).
- **Release / knowledge:** Released 2024-09-25 (official model card, verified this pass); knowledge cutoff **December 2023** (official model card — previously undisclosed).
- **IDs:** HF `meta-llama/Llama-3.2-90B-Vision-Instruct`; `meta/llama-3.2-90b-vision-instruct` (NVIDIA NIM); no Zen ID, no Free ID
- **Context window:** 128K tokens total (official model card; llm-stats 128K in / 128K out).
- **Modalities:** text + image in → text out; non-reasoning (instruct, SFT+RLHF); tool calls; English-only for image+text tasks (8 languages text-only).
- **Pricing (as of 2026-10-16):** **$0.35 in / $0.40 out per MTok via DeepInfra** (llm-stats, 5 providers; Bedrock $0.72, Fireworks $0.89, Together $1.20, Hyperbolic $2.00) — legacy-cheap hosted; open weights for self-host (90B dense is hardware-heavy).
- **Architecture:** dense 90B (88.8B) with separately trained vision adapter (cross-attention layers feeding image-encoder representations into the Llama 3.1 backbone); pretrained on 6B image-text pairs + 3M+ synthetic instruction examples; GQA.

### Raw benchmarks found

> Official model-card rows are now verified (this pass). Core agentic/coding harness scores (Terminal-Bench, GDPval, SWE-bench, LiveCodeBench, HLE) were still **not found** on any tracked harness for this ID.

Official (Meta model card, instruction-tuned 90B):

- MMMU (val, CoT): **60.3%**; MMMU-Pro Standard: **45.2%**; MMMU-Pro Vision: **33.8%**
- MathVista (testmini): **57.3%**; ChartQA (test, CoT): **85.5%**; AI2 Diagram: **92.3%**; DocVQA (test): **90.1%**; VQAv2 (test): **78.1%**
- MMLU (CoT): **86.0%**; MATH (CoT): **68.0%**; **GPQA: 46.7%**; MGSM (CoT): **86.9%**

Agent / tool use:

- AgentHijack (computer-use robustness): **1.6%** average / 4.0% clean (BenchmarkList — rank 10/10, 0th percentile — near-total failure under environment corruption)
- MineExplorer (open-world agent): **10.0%** overall TSR (BenchmarkList — rank 16/18)
- Terminal-Bench / Tau / GDPval / Claw-Eval: **no verified public score found** for this ID

Reasoning / knowledge:

- GPQA **46.7%** (official) — the previously-missing flagship reasoning row; below the 60–80% mid-band of current models
- K-MetBench (meteorology expert exam): **56.9%** overall (BenchmarkList)
- PhysicsMind (physical reasoning VQA): **65.0%** (BenchmarkList)
- HLE / AA-LCR / AA Index: **no verified public score found** for this ID

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE / Vibe Code Bench: **no verified public score found** for this ID

Long context:

- 128K window (official); no retrieval number published.

Multimodal (grounding):

- OpenVLM Leaderboard average: **63.4** (BenchmarkList — MMBench 77.3, MMStar 55.3, MathVista 58.2, OCRBench 783, AI2D 69.5, HallusionBench 44.1, MMVet 64.1)
- WikiVQABench (knowledge-grounded VQA): **65.7%** (BenchmarkList — rank 4/17)
- SafeArena: **34.0%** normalized safety (BenchmarkList)
- designforonline review (2026-08-09): "measured reasoning and coding results are limited for demanding client work… an older model" — corroborates the dated-profile verdict.

### Normalized scores (1–100)

> Re-research verdict: the five quality dims are unchanged — new evidence confirms, not moves, them.

- **Tool use: 25/100.** The only verified agent rows are brutal: AgentHijack 1.6% (0th percentile) and MineExplorer 10% — this model cannot drive computer-use agents. No new agent rows found this pass.
- **Reasoning: 55/100.** Now anchored by the official GPQA 46.7% (below the current 60–80% mid-band), alongside MMLU 86.0 / MATH 68.0 / MGSM 86.9 (2024-era strong, today dated) and PhysicsMind 65.0% — unchanged mid-tier verdict.
- **Context window: 60/100.** 128K official — mid of the 100K–200K band.
- **Multimodal: 68/100.** Text+image input with official MMMU 60.3 / DocVQA 90.1 / ChartQA 85.5 and a mid OpenVLM average (63.4) — respectable for its era; HallusionBench 44.1 shows weak grounding; MMMU-Pro 45.2/33.8 trails current vision models.
- **Coding: 22/100.** Zero verified coding rows on any tracked harness for this ID; the 2024-era instruct line predates agentic coding training — unchanged conservative score.
- **Cost efficiency: 92/100.** Updated: hosted pricing is now published and cheap — $0.35/$0.40 per MTok via DeepInfra is near the budget tier (previously scored 70 provisionally as "unpublished"); open-weights self-host remains hardware-heavy at 90B dense.
- **Overall Score: 46/100.** (25 + 55 + 60 + 68 + 22) / 5 = 46.0 — unchanged (Cost excluded). Best-fit: legacy self-hosted vision-language assistant only; every current multimodal model dominates it.

Note: the folder slug uses underscores (`llama_3.2_vision_instruct`), matching the raw platform stub; the tracked model is the 90B Vision flagship (the 11B sibling exists in the family). If the orchestrator prefers hyphen-slug normalization, this folder may need renaming per `model/README.md` conventions.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-10-16 (first researched 2026-09-24)
- Method: public internet research (official Meta vision model card on GitHub, llm-stats provider/pricing table, BenchmarkList, designforonline review, DuckDuckGo search); scores are normalized 1–100 interpretations, not official vendor scores. Re-research added: official release date, Dec-2023 knowledge cutoff, the full official image/text benchmark table (incl. GPQA 46.7%), and verified hosted pricing — none of which changed the five quality dimensions.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
