# GLM-5.3 — findings by DeepSeek 4.1 Flash

- Source: Z.ai (Zhipu AI) / GLM-5.3 (`opencode/glm-5.3`)
- Date: 2026-10-16 (UTC) — third pass (previous Signatures 2026-10-05 / 2026-09-25)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `zai-org/GLM-5.3`, Artificial Analysis, BenchLM, Vals AI, Unbiased, Nous Research).
> **Biggest correction: GLM-5.3 ships open weights.** The flagship is published at `huggingface.co/zai-org/GLM-5.3` (753B total / 40B active MoE, FP8/BF16, tag `glm_moe_dsa`) under the **GLM-5.3 License** — "commercial use allowed with restrictions", *not* the permissive MIT of GLM-5.3-Flash. The earlier pass's "proprietary, weights not released" line is **wrong as of this pass**. The official benchmark table (HF card) also fills nearly every gap the 2026-10-05 pass left open: **Terminal-Bench 3.0 28.3**, **CyberGym 84.5**, **ExploitGym 105/130 (2h/6h)**, **ExploitBench 54.4**, **Toolathlon Verified 73.0**, **AutomationBench 48.2**, **HLE w/ tools 62.5**, **GDPval-AA v2 1769**, plus independent rows **AA Tau3-Banking 50.3**, **AA-Briefcase Elo 1508**, **EnterpriseOps-Gym 36.4**, **AA-ITBench 46.1**, **AA Agentic Index 53.4**, **AA-LCR 79.7**, **MLCR-AA 48.3**, **AA-Omniscience Index 14.3 / accuracy 33.9 / hallucination 29.6**. Artificial Analysis now scores it **45 on the Intelligence Index v4.3.2** (was "no figure captured"). Vals AI runs **SWE-bench 95.40% (#6/88)**, **LiveCodeBench 80.53%**, **Terminal-Bench 4.0 38.89%** and a **Vals Index of 53.51% (#19/48)**.
> **Conflicts surfaced:** (1) **Release date 2026-08-14** (earlier pass, The Model Gap) vs **2026-08-18** (Vals AI, Artificial Analysis, HF). (2) **ProgramBench 19.0 (vendor)** vs **1.50% (Vals)** — an order-of-magnitude gap. (3) **Terminal-Bench 2.1 88.2 (vendor)** vs **83.9 (AA)** vs **71.5 (Vals)** — three-way spread across harnesses. (4) **AA Intelligence Index 45 (v4.3.2)** vs **BenchLM's 44.8** — slightly different index version/normalization. (5) **Agents' Last Exam 28.5** is the 105-task ALE-CLI split, not the 1,000-item overall rate.
> Sources: https://huggingface.co/zai-org/GLM-5.3 · https://artificialanalysis.ai/models/glm-5-3 · https://benchlm.ai/models/glm-5-3 · https://www.vals.ai/models/zai_glm-5.3 · https://unbiased.ai/model-card/

## Model card

- **Name:** GLM-5.3 (flagship). No "Free" wording; `noFreeId: true` in `meta.json` — but the weights are now downloadable from Hugging Face.
- **Short description:** Z.ai's flagship reasoning MoE, post-trained over the same base as GLM-5.2 (Z.ai attributes every gain to scaled post-training) and now **released as open weights** (GLM-5.3 License, commercial use with restrictions). Aimed at agentic coding and long-horizon work with a 1M-token window — **text-only, no vision**. Z.ai calls it "the most capable open-weights model for coding" and open-source SOTA on Terminal Bench 3.0 and Agents' Last Exam.
- **Provider / access:** open weights + first-party Z.ai API (also the GLM Coding Plan / ZCode); in this project tracked as the paid Zen entry `opencode/glm-5.3`. Available via ~27 API providers. OpenAI-compatible Chat Completions.
- **Release / knowledge:** released **2026-08-18** (Vals AI / Artificial Analysis / HF; the earlier pass recorded 2026-08-14 from The Model Gap); succeeded GLM-5.2 (2026-06-16). Knowledge cutoff not disclosed.
- **IDs:** `opencode/glm-5.3` (no Free ID); weights `zai-org/GLM-5.3`.
- **Context window:** 1,000,000 tokens with a **128K maximum output length**. Long-context evidence now exists (AA-LCR 79.7).
- **Modalities:** **text in, text out** — Artificial Analysis confirms no image input; always-on thinking (`reasoning_effort` = low / high / **max**, default max) that can no longer be disabled — a breaking API change versus GLM-5.2. No image, audio or video.
- **Pricing (as of 2026-10-16):** **$1.40 in / $4.40 out per 1M**, cached input ~$0.26 (81% cache discount); blended 7:2:1 rate $0.90/1M — identical to GLM-5.2.
- **Architecture:** sparse MoE, **753B total / ~40B active** parameters, `glm_moe_dsa` (MoE + DeepSeek Sparse Attention) family, FP8/BF16 safetensors; base shared with GLM-5.2; GLM-5.3 License (commercial use with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (vendor) vs **83.9%** (Artificial Analysis) vs **71.5%** (Vals) — a wide three-way harness spread
- Terminal-Bench 3.0: **28.3%** (vendor; open-source SOTA per Z.ai); Terminal-Bench 4.0: **41.9%** (AA) / **38.89%** (Vals)
- Toolathlon Verified: **73.0%** (vendor, official service pass@1); AutomationBench v1.0.6: **48.2%** (vendor) / **62.2%** (AA); Agents' Last Exam (ALE-CLI): **28.5**
- HLE w/ tools: **62.5%** (vendor); GDPval-AA v2 Elo **1769** (vendor, leads the comparison set) / **57.5%** normalized (AA)
- AA Tau3-Banking **50.3%**; AA-Briefcase Elo **1508**; EnterpriseOps-Gym-AA **36.4%**; AA-ITBench **46.1%**; AA Agentic Index **53.4%**; AA-AnalystAgent **38.8%**
- Cyber/offensive: **CyberGym 84.5%** (SOTA for vulnerability discovery per Z.ai), **ExploitGym 105/130** (2h/6h pass@1), **ExploitBench 54.4%**; independently, Anthropic's Frontier Red Team reported 50 of 410 working V8 exploits (2026-09-30/10-01), just behind Claude Mythos (56), and NIST/CAISI corroborated the exploit capability
- Hermes Index **39.2** / Hermes Bench **71.8** (Nous); MazeBench **0%** (ASCII +tools mode)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA independent; benchmark graded saturated) / **88.1%** (Vals)
- HLE (no tools): **42.3%** (AA); MMLU-Pro: **86.8%** (Vals)
- Artificial Analysis Intelligence Index: **45** on v4.3.2 (median 19; ranked among the top open-weight models of its size); BenchLM lists **44.8%**
- AA-Omniscience Index **14.3** / accuracy **33.9%** / hallucination rate **29.6%**; LiveBench (overall) **76.1**
- FrontierMath v2 Tiers 1-3 **68.772%** / Tier 4 **29.268%** (Epoch AI); Gray Swan IPI (15 attempts) **31.5%**
- Output speed: **66.8 tok/s**, TTFT **2.99s** (AA, Z.ai API)

Coding:

- SWE-bench: **95.40%** (vals.ai independent; graded saturated — recorded, not used for ranking; #6/88)
- LiveCodeBench: **80.53%** (vals.ai); IOI **68.44%** (Vals); Code Migration **44.22%** (Vals); CyberBench v1.1 **72.08%** (Vals)
- DeepSWE v1.1: **66.9%** (vendor) / **69%** (deepswe.datacurve.ai, rank #4/18); NL2Repo **58.0%**
- ProgramBench (Almost Solved): **19.0%** (vendor) vs **1.50%** (Vals) — large conflict; FrontierSWE **78.1%**; SWE-Marathon v1.1 **42.5%**; PostTrainBench **39.8%**
- AA-SciCode **59.0%**; AA Coding Index **74.8%**; VulcanBench v3 **78.3%**; OpenHarmony Bench **60.8%**; FrontierSWE v2 **30.2%**; Bug Hunt Bench **19.0 fixes**; Vibe Code Bench v1.1 **78.13%** (Vals) / VCB 1-100 **19.99%**

Long context:

- **AA-LCR 79.7%** and **MLCR-AA 48.3%** (Artificial Analysis long-context reasoning) are the first long-context rows — the earlier "listing-level only" caveat is lifted. No MRCR/RULER needle-at-depth value.

### Normalized scores (1–100)

- **Tool use: 89/100.** Terminal-Bench 2.1 83.9–88.2%, DeepSWE 69%, Toolathlon Verified 73.0%, AutomationBench 48.2%, GDPval-AA Elo 1769 and near-Mythos cyber-agentic results (CyberGym 84.5, ExploitGym 105/130) sit at the top of the mid band; the low independent Vals Terminal-Bench 2.1 (71.5), weak TB4.0 (~40) and the unverifiable Toolathlon quality keep it out of the 90s.
- **Reasoning: 90/100.** GPQA Diamond 88–91.7% meets the 90%+ frontier anchor, HLE 42.3% (no tools) meets the 40%+ reference, and the new AA Intelligence Index of 45 confirms the level — capped by the saturated GPQA row.
- **Context window: 95/100.** A 1M window is the 95–100 tier, now corroborated by AA-LCR 79.7; no needle-retrieval at 512K+ keeps 100 unsupported.
- **Multimodal: 15/100.** Text-only in/out by design (AA confirms no image input) — the 10–20 band, not a defect but a hard capability ceiling.
- **Coding: 85/100.** SWE-bench 95.40% (saturated), DeepSWE 69%, LiveCodeBench 80.53%, Vibe Code Bench 78.13% and AA Coding Index 74.8% justify mid-80s; the vendor-vs-Vals ProgramBench conflict and unpublished vendor SWE-bench Pro cap it.
- **Cost efficiency: 87/100.** $1.40/$4.40 with an 81% cache discount sits just above the $1.25/$4.25 = 88 anchor; open weights now allow self-hosting, but the hosted list price is unchanged versus GLM-5.2, limiting upside.
- **Overall Score: 75/100.** (89 + 90 + 95 + 15 + 85) / 5 = 74.8 → **75**. Best fit: large-scale agentic coding and long-context engineering work — frontier-grade reasoning, a 1M window and self-hostable weights at mid-tier pricing, with zero multimodal capability.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card (`zai-org/GLM-5.3`), Artificial Analysis, BenchLM, Vals AI, Unbiased and Nous Research, correcting the open-weight status, release date and architecture and adding the first AA Intelligence Index, long-context (AA-LCR/MLCR), omniscience and TC/Tau3/GDPval rows over the 2026-10-05 and 2026-09-25 passes. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
