# Qwen 3.5 35B-A3B — findings by GLM 5.3 Flash

- Source: Qwen (`Qwen/Qwen3.5-35B-A3B`), open weights, Apache-2.0
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 35B-A3B
- **Short description:** Alibaba Qwen's small sparse-MoE member of the Qwen3.5 generation — 35B total / 3B active parameters, unified vision-language training, Gated DeltaNet hybrid layout. Top use case: ultra-cheap high-throughput multimodal assistant/agent serving; Alibaba hosts it as Qwen3.5-Flash (1M context default).
- **Provider / access:** open weights on Hugging Face (`Qwen/Qwen3.5-35B-A3B`); OpenRouter Chat Completions route `qwen/qwen3.5-35b-a3b` (verified live 2026-10-21); self-host via vLLM / SGLang / KTransformers / Transformers; DashScope/Model Studio API compatible; the card states **Qwen3.5-Flash** is the hosted version of this checkpoint.
- **Release / knowledge:** Qwen3.5 generation release (2026); exact day not verified from the card. Knowledge cutoff not stated.
- **IDs:** `Qwen/Qwen3.5-35B-A3B` (weights); `qwen/qwen3.5-35b-a3b` (OpenRouter). No Free ID verified on OpenCode Zen.
- **Context window:** 262,144 native, extensible to 1,010,000 via YaRN (verified from official HF model card); hosted Qwen3.5-Flash tier defaults to 1M context per the card.
- **Modalities:** image + video + text input, text output (image-text-to-text); thinking mode by default with `enable_thinking: false` switch; tool calls (qwen3_coder parser); JSON via response_format. No audio.
- **Pricing (as of 2026-10-21):** no verified public hosted pricing found on the sources checked (HF card, OpenRouter page); weights Apache-2.0 with only 3B active parameters — among the cheapest serving profiles of any frontier-generation open model. Provisional below.
- **Architecture:** sparse MoE — 35B total / 3B active, 256 experts (8 routed + 1 shared, expert dim 512), 40 layers, hybrid 10 × (3 × Gated DeltaNet → MoE → 1 × Gated Attention), MTP trained; unified vision encoder; open weights Apache-2.0.

### Raw benchmarks found

All numbers from the official Qwen HF model card (`huggingface.co/Qwen/Qwen3.5-35B-A3B`, thinking mode), cross-checked against the OpenRouter listing (route/capabilities — no independent benchmark numbers found there).

Agent / tool use:

- BFCL-V4: **67.3** (HF card; GPT-5-mini 55.5)
- TAU2-Bench: **81.2%** (HF card — best of the entire compared Qwen3.5 mid-size group)
- VITA-Bench: **31.9** (HF card)
- DeepPlanning: **22.8** (HF card)
- HLE w/ tool (search agent): **47.4** (HF card)
- Browsecomp: **61.0%**; Browsecomp-zh: **69.5%** (HF card)
- WideSearch: **57.1** (HF card)
- Seal-0: **41.4** (HF card)
- Terminal Bench 2: **40.5%** (HF card)
- OSWorld-Verified: **54.5**; AndroidWorld: **71.1**; ScreenSpot Pro: **68.6** (HF card)
- Claw-Eval / ClawProBench: no verified public score found
- NEW independent rows (BenchLM Nov 6): **τ²-bench (AA): 89.2%** — above the vendor card's 81.2%; Gert Labs 28.96% (weak); **SWE-Rebench 53.7%** (fills the gap); **AA-LCR 72.0%** (above the vendor's 58.5); AA-MMMU-Pro 72.7% (corroborates); AA-IFBench 72.5%; AA Global-MMLU-Lite 86.4%; ExtractBench **88.00%** (Nov 6 snapshot); MMVU 72.3%, CharXiv 77.5%, V* 92.7%
- Toolathon / MCP-Atlas / SWE Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **84.2%** (HF card)
- HLE w/ CoT: **22.4%** (HF card)
- MMLU-Pro: **85.3**; MMLU-Redux: **93.3**; SuperGPQA: **63.4** (HF card)
- AA-LCR: **58.5** (HF card)
- HMMT Feb 25: **89.0**; HMMT Nov 25: **89.2** (HF card)
- IFEval: **91.9**; IFBench: **70.2** (HF card)
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found; **MEASURED on the BenchLM Nov 6 refresh (33 rows, ranked #117/1016): AA Index 19.3% (low), AA-GPQA 84.5% / AA-HLE 21.0% (corroborate the card), CritPt 0.9% (floor), Omniscience 20.1% accuracy / 85.4% hallucination / −48.1 index (basement-class)**
- Omniscience Accuracy / Hallucination Rate: no verified public score found (now covered by the AA row above)

Coding:

- SWE-bench Verified: **69.2%** (HF card)
- LiveCodeBench v6: **74.6%** (HF card)
- CodeForces: **2028** (HF card, own query set)
- OJBench: **36.0**; FullStackBench en: **58.1** (HF card)
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 58.5, LongBench v2 59.0 (262K window; HF card); no MRCR/RULER/GraphWalks reported

### Normalized scores (1–100)

- **Tool use: 77/100.** TAU2-Bench 81.2 tops the compared group and BFCL-V4 67.3 clears GPT-5-mini; capped by Terminal Bench 2 40.5, VITA-Bench 31.9 and missing third-party harness data.
- **Reasoning: 78/100.** CHANGED from 80 — GPQA 84.2–84.5% (two sources) and HMMT ~89 are excellent for 3B active parameters, but the newly measured AA Index 19.3% (low), the −48.1 Omniscience index, CritPt 0.9% and corroborated HLE 21.0% document a composite below the vendor-card framing — docked two points per the repo's index-landing precedent (same as the 27B sibling).
- **Context window: 82/100.** 262K native verified from the card with 1.01M YaRN extension (1M default on the hosted Flash tier); AA-LCR 58.5 vendor / **72.0% AA** (Nov 6 re-read) — the weakest retrieval of the mid-size group, less weak than the vendor row suggested.
- **Multimodal: 81/100.** Native image+video input; MMMU 81.4, MathVision 83.9, VideoMME 86.6, best-of-group AndroidWorld 71.1; no audio caps it.
- **Coding: 74/100.** SWE-bench Verified 69.2 and LCB v6 74.6 trail the 27B/122B siblings (72.x/78-81); CodeForces 2028 solid.
- **Cost efficiency: 85/100.** No verified hosted pricing found; provisionally excellent — Apache-2.0 open weights with only 3B active parameters per token make this one of the cheapest frontier-generation serving profiles. Re-score when a hosted price is published.
- **Overall Score: 78/100.** CHANGED from 79 — mean of the five non-cost dims (77+78+82+81+74)/5 = 392/5 = 78.4 → 78, docked with Reasoning as the AA Index landing replaced the vendor-only framing. Best fit: budget multimodal agent/chat serving where cost per token dominates and near-flagship quality suffices.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-06 (re-research pass; prior 2026-10-21)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM Qwen3.5-35B-A3B page fetched 2026-11-06 (Nov 6 data, 33 rows, ranked #117/1016) — the first independent AA rows landed since the vendor-card-only pass (τ² 89.2% AA vs the vendor 81.2%, AA Index 19.3% measured, Omniscience −48.1, CritPt 0.9%, SWE-Rebench 53.7%, AA-LCR 72.0%, corroborations for GPQA/HLE/MMMU-Pro); the measured index contradicts the vendor-only framing — Reasoning 80→78, Overall 79→78; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
