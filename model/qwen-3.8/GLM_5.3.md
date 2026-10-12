# Qwen 3.8 — findings by GLM 5.3

- Source: Alibaba/Qwen (`Qwen/Qwen3.8-2.4T-A95B`)
- Date: 2026-10-12 (UTC) — second-pass re-research of the 2026-09-24 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open-weights flagship, Qwen3.8-2.4T-A95B)
- **Short description:** Alibaba's August 2026 open-weights Max-class reasoning MoE (2.4T total / 95B active) — the first Qwen-Max-class model released as open weights; thinking always on, text-only (the vision/1M-default features stay in the commercial Qwen3.8-Max twin). Top use case: self-hosted frontier agentic coding and long-horizon work.
- **Provider / access:** Hugging Face `Qwen/Qwen3.8-2.4T-A95B` (+ official FP8 build; community NVFP4/Quark-MXFP4/GGUF checkpoints); serve with vLLM/SGLang/Dynamo (official recipes; AWS SageMaker HyperPod walkthrough published); **OpenRouter `qwen/qwen3.8-2.4t-a95b` at $2.00/$6.00 across 7 providers** (Modal, Together, DeepInfra, SiliconFlow, NovitaAI, Alibaba Cloud Int., Lyceum). No OpenCode Zen ID for the open model. Composite trackers: BenchLeader **63.3, #62 of 760** (trend 58→70 rising; last measured 8 Oct 2026), AA II **39.9 #58** (found this pass).
- **Release / knowledge:** 2026-08-12; knowledge cutoff not publicly disclosed.
- **IDs:** `Qwen/Qwen3.8-2.4T-A95B` (HF); `qwen/qwen3.8-2.4t-a95b` (OpenRouter); no Zen ID, no Free ID.
- **Context window:** 262,144 tokens natively, extensible to 1,010,000 with YaRN (official card; OpenRouter lists 1,048,576 with **131,072 max output** — second-pass spec).
- **Modalities:** text in; text out; reasoning mandatory (thinking cannot be disabled; reasoning_effort xhigh/medium/low); tool calls; JSON mode.
- **Pricing (as of 2026-10-12, VERIFIED):** **$2.00 in / $6.00 out per 1M across OpenRouter providers** — Max-twin parity, resolving the first-pass "no verified list price"; blended $3.00/M, 37 tok/s (slowest quarter), ~58 s first answer, $2.16/II run. Self-hosting: ~1,366 GB VRAM at Q4 (comfortable 1,640 GB for 8K context, vramglass); checkpoints in the terabytes even at low precision.
- **Architecture:** MoE, 2.4T total / 95B active; **92-layer hybrid backbone** interleaving Gated DeltaNet linear attention (short-convolution state) with full grouped-query attention at every 4th layer; 512 experts (10 routed + 1 shared); MTP-trained with native speculative decoding. **License: Qwen3.8-Max License, not Apache 2.0** — permissive grant (use/modify/distribute/host/fine-tune) with attribution required for products >100M MAU or >$20M monthly revenue, and a separate commercial license for providers earning >US$50M in 12 months (runbios, marktechpost, aitoolsrecap).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **86.6%** (official card, Claude Code avg@10) / **82.0% #39** (AA — independent corroboration) / Vals 67.4% (Max-twin harness spread); Terminal-Bench 4.0: **11.1% #81** (AA — weak on the hard new board)
- **MCP Atlas: 84.5% #4** (Scale SEAL, xhigh — top-5); OSWorld-Verified **86.1%**; WebArena-Verified 66.8%; AndroidWorld **85.3%**; MobileWorld 77.8%
- **GDPval-AA: 55.6% #26 normalized** (AA — found this pass, resolving the 2026-09-24 gap; near-frontier); **τ³-Banking: 49.1% #5** (AA — found this pass; top-5)
- Toolathlon-Verified **72.5%**; CoWorkBench **74.8%**; SkillsBench **70.2%**; JobBench 53.4%; Agents' Last Exam 27.0 pass / 52.4 score; WideResearch 81.9%; HLE w/ tools 56.2% (official)
- FrontierSWE v1 **73.5%** / v2 **15.8%**; Claw-Eval / Toolathon / SWE Atlas: no verified public score found (unchanged)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (official) / **93.5% #14** (AA — found this pass)
- HLE: **43.6%** no-tools / 56.2% with tools (official) / **42.5% #62** (AA — found this pass)
- **AA Intelligence Index v4.3.2: 39.9 #58** (AA — found this pass, resolving the first-pass gap; mid-field composite)
- **CritPt: 20.0% #57** (AA — found; mid-weak); AA-LCR **80.3% #66**
- MRCR v2 256K (8-needle) **92.9%**; LongBench v2 66.3%; IFBench 82.8%; HealthBench 60.2%; $OneMillion-Bench 52.5 (official)
- MMLU-Pro (Vals) **88.6%**; Omniscience: index 4.3 #107, accuracy 31.3% #164, **non-hallucination 60.8% #67** (~39% hallucination — decent honesty, weak breadth)
- FORTRESS 21.6% #35 (Scale SEAL)

Coding:

- SWE-bench Verified (Vals): **85.6%**; LiveCodeBench (Vals): **87.9%**; SWE-bench Pro 67.7%; DeepSWE 1.1 **56.6%**; NL2Repo-Bench 55.9%
- PaperBench: **93.0%** (class-best); QwenSWEBench 80.7%; QwenReactBench 1724; QwenQoderBench 58.4%; **CodeArena global #4** (qianwenai listing)
- **SciCode (AA): 54.0% #64** (found this pass — below the 55% reference); Vibe Code Bench: no verified public score found (unchanged)

Long context:

- 262K native → 1.01M with YaRN; MRCR v2 92.9% at 256K; AA-LCR 80.3% #66; no 512K-1M retrieval figure published (unchanged).

Multimodal:

- Text-only by design (official card: "Multimodal inputs are not supported"; aitoolsrecap confirms the open checkpoint lacks the twin's vision) — the BabyVision 82.0% figure in some listings belongs to the Max twin (flagged, not counted).

### Normalized scores (1–100)

- **Tool use: 87/100.** Held and reinforced: the two first-pass gaps filled with elite results — GDPval 55.6% #26 and τ³ 49.1% #5 — plus MCP Atlas 84.5% #4, OSWorld 86.1%, TB2.1 82.0% #39 (AA), AndroidWorld 85.3%, CoWorkBench 74.8%, Toolathlon 72.5%. Capped by TB 4.0 11.1% #81, Agents' Last Exam 27.0, and still-missing Claw-Eval/Toolathon rows.
- **Reasoning: 84/100.** Lowered from 86: the first-pass caps ("no AA Index, no ARC/CritPt") resolved mid-field — AA II 39.9 #58, CritPt 20.0% #57, HLE 42.5% #62 — alongside strong GPQA 93.5% #14 and MRCR 92.9% at 256K. The profile is confirmed good-not-elite on controlled AA boards.
- **Context window: 85/100.** Held: 262K native (top of the 200K-500K band) with the 1M YaRN extension real but retrieval verified only at 256K.
- **Multimodal: 15/100.** Held: text-only by design; the Max twin carries vision.
- **Coding: 85/100.** Held: SWE-bench V 85.6%, LiveCodeBench 87.9%, PaperBench 93.0%, CodeArena #4 anchor; the newly found SciCode 54.0% #64 (below the 55% reference), DeepSWE 56.6%, and FrontierSWE v2 15.8% cap.
- **Cost efficiency: 78/100.** Raised from 75: the first pass scored on "no verified list price" — the second pass verified **$2.00/$6.00** at Max-twin parity across 7 providers with open weights as the alternative; the caps are the heaviest-quintile output speed (37 tok/s), ~58 s first answers, and the massive self-host footprint (~1.4 TB VRAM at Q4) plus the >$50M commercial-license clause.
- **Overall Score: 71.2/100.** (87 + 84 + 85 + 15 + 85) / 5 = 71.2, down from 71.6 via the Reasoning correction. Best-fit: the strongest open-weights text-only agent stack for sovereignty-minded deployments — top-5 tool use and class-best PaperBench with a now-verified $2/$6 serving market; the Max twin remains the route for vision and 1M-default.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-12
- Method: public internet research, second pass over the 2026-09-24 report (Qwen's official model card and FP8 build, OpenRouter listing and provider table, Artificial Analysis model benchmarks — filling the AA Index/CritPt/GDPval/τ³ gaps, BenchLeader data as of 2026-10-12, Scale SEAL, Vals AI via the Max-twin rows, license terms via runbios/marktechpost/aitoolsrecap; three successful web searches; independent reviews: whatllm, apxml ×2, mindstudio ×2, lyceum, kompozy, aidashxp, tensorfeed, cometapi, vramglass, gpus-market/dev.to/HF-blog deployment guides, tandiu, AWS ML blog, qianwenai); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
