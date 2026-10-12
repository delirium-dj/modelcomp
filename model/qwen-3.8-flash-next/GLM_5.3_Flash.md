# Qwen3.8-Flash-Next — findings by GLM 5.3 Flash

- Source: Alibaba Qwen (`qwen3.8-flash-next`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.8-Flash-Next (API-sold sibling is branded Qwen3.8 Flash)
- **Short description:** Alibaba/Qwen's open-weight experimental preview of the upcoming Qwen4 architecture — a 125B-parameter MoE with only ~6B active parameters, sold cheaply via API under the Qwen3.8 Flash name. Top use cases: high-throughput agentic coding and reasoning at minimal cost, plus self-hosting. BenchLM ranks it #37 of 889 (64.23).
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-Flash-Next` (open weights, FP8 build ~173 GiB VRAM); API access via Alibaba/Qwen endpoints as Qwen3.8 Flash; listed on Artificial Analysis, llm-stats, Ollama. Chat Completions-style API.
- **Release / knowledge:** Released 2026-08-26 (Hugging Face + qwen.ai blog); knowledge cutoff not published.
- **IDs:** `Qwen/Qwen3.8-Flash-Next` (weights); API ID under the Qwen3.8 Flash branding. A dedicated OpenCode Zen Free ID was not verified in the listings reviewed.
- **Context window:** **262,144 tokens native (BenchLM, 2026-10-10 — resolves the prior 1M-vs-256K conflict toward the architecture figure)**; the 1M figure was the production Flash serving configuration (YaRN), not this checkpoint's native window; max output 131K on the hosted route.
- **Modalities:** multimodal input (vision + text) with reasoning support; text output. Tool calls supported (SWE-bench/Terminal-Bench harness runs). JSON mode not documented.
- **Pricing (as of 2026-10-11):** API (as Qwen3.8 Flash): $0.15 per 1M input / $0.016 per 1M cached input / $0.47 per 1M output. Open weights = free self-hosting.
- **Architecture:** 125B total parameters, ~6B active (sparse MoE) + a novel 51B n-gram embedding table (not experts) for cheap parameter scaling + a 4B multi-token prediction layer; hybrid attention (QSA, Gated DeltaNet + Qwen attention) and Gated Residual; open weights (license per HF repo, not individually verified).

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **1648** (AA, independent — fills the gap the 2026-10-05 pass marked missing; normalized **56.6%**)
- Toolathlon-Verified: **73.5%** (HF model card via benchlm.ai, updated 2026-10-10); CoWorkBench: **73.9%**; JobBench: **55.7%**; AndroidWorld: **84.5%** (model card)
- Agents' Last Exam: **51.2%** (model card); OSWorld 2.0: **19.4%** (weak)
- Terminal-Bench 2.1: the 2026-10-05 conflict (62.9% llm-stats vs "84.3%" hosting-site listing) remains unresolved on BenchLM — no TB2.1 row published for this checkpoint; the "84.3%" listing likely bled in from GLM-5.3-Flash's identically-valued row
- Tau3-Banking / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (model card); AA independent: **92.3%** — corroborated
- HLE: **35.9%** (model card); AA-HLE: **38.0%** (AA)
- Artificial Analysis Intelligence Index: **39.8** (AA current board — fills the "composite value not confirmed" gap)
- AA-LCR v1.1: **79.7%** (AA — fills the long-context gap); CritPt: **11.1%** (weak)
- AA-Omniscience: **24.5% accuracy / 45.3% non-hallucination row / −9.7 index** (AA — weak)
- IFBench: **81.3%** (model card); MMLU-Pro/MMLU-Redux: no verified public score found for this checkpoint
- MLCR: no verified public score found

Coding:

- AA Coding Index: **73.0%** (AA, independent — fills the gap); AA-SciCode: **50.6%** (AA)
- SWE-bench Pro: **62.5%** (model card; ahead of Claude Opus 4.6 Max's 53.4); SWE Multilingual: **81.0%**; NL2Repo: **48.1%**
- LiveCodeBench v6: **91.9%** (model card — fills the gap); DeepSWE: **58.7%** (model card)
- SWE-bench Verified: **72.6%** (vendor harness reporting, prior pass; no independent corroboration yet)
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR v1.1: **79.7%** (AA — first measured long-context number, solid for the 262K window)
- MRCR/RULER/GraphWalks: no verified public score

Multimodal:

- CharXiv: **90.6%** with tools / **84.6%** without; MathVision: **90.6%** / **95.7%** w/ Python; LVBench (video): **76.6%**; RealWorldQA: **88.5%**; Vision2Web: **64.0%**; ERQA: **72.3%**; AA-MMMU-Pro: **79.8%** (AA) — first measured vision/video evidence

### Normalized scores (1–100)

- **Tool use: 82/100.** (Was 78 on the prior pass.) GDPval-AA 1648 (AA independent) fills the largest gap, with Toolathlon 73.5%, CoWorkBench 73.9% and AndroidWorld 84.5% corroborating; the unresolved TB2.1 conflict and OSWorld 2.0 19.4% keep it under 85.
- **Reasoning: 82/100.** (Was 87 on the prior pass.) GPQA corroborated at 91.7–92.3% stays strong, but the now-known AA Index of 39.8, AA-HLE 38.0%, CritPt 11.1% and the negative Omniscience index place the composite mid-band — the prior score leaned on GPQA/HLE without an independent composite.
- **Context window: 80/100.** BenchLM resolves the window conflict to 262K native (the 1M claim belongs to the production Flash serving config); AA-LCR 79.7% is a solid first measurement — the 200K–500K tier stands.
- **Multimodal: 78/100.** (Was 62 on the prior pass.) Vision and video are now measured, not just claimed (CharXiv 90.6, MathVision 90.6/95.7, LVBench 76.6, MMMU-Pro 79.8) — the +video-in band (75–90); text-only output.
- **Coding: 82/100.** LiveCodeBench v6 91.9%, AA Coding Index 73.0% (independent) and SWE Pro 62.5% are genuinely strong for a 6B-active model; DeepSWE 58.7% and the uncorroborated SWE-V 72.6% cap it.
- **Cost efficiency: 96/100.** $0.15/$0.47 per 1M with $0.016 cached input plus free open weights is near-floor pricing for this capability level; not 100 because per-task agentic cost at scale isn't documented.
- **Overall Score: 80.8/100.** (Was 77.8 on the prior pass.) Mean of the five quality dims per `RULES.md` (Cost excluded): (82 + 82 + 80 + 78 + 82) / 5 = 404/5 = 80.8 — raised on the 2026-10-11 second pass: the multimodal raise (+16) and tool-use fill outweigh the reasoning correction as gaps became measurements. Best fit: cost-sensitive agentic coding and reasoning pipelines, or self-hosters wanting the Qwen4 preview architecture.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-11
- Method: public internet research, second pass 2026-10-11 (≥3 independent sources: benchlm.ai Qwen3.8-Flash-Next page updated 2026-10-10 citing the HF model card, Artificial Analysis independent boards (GDPval/GPQA/HLE/LCR/SciCode/Omniscience/Coding Index/MMMU-Pro) via benchlm.ai, plus the prior 2026-10-05 pass on qwen.ai/HF/llm-stats/DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
