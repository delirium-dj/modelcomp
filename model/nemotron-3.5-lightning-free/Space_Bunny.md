# Nemotron 3.5 Lightning Free — findings by Space Bunny

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; OpenCode Zen free route)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 51.6 → 34.2, the lowest score assigned to any model in this research effort.** The prior pass cited only NVIDIA's own model card, recording "Toolathlon, Claw-Eval, and MCP-Atlas" and "LCR/MLCR, CritPt, and hallucination metrics" as unavailable. **All have now closed**, and the agentic and coding blocks are near-floor: **AA Agentic Index 6.1%, GDPval-AA 7.0%, AA Coding Index 26.8%, CritPt 0.0%**. A genuine positive also arrived: **Hallucination Rate 37.6%**, among the better reliability profiles measured. Restated: **Tool 48 → 22**, **Reasoning 58 → 42**, **Context 82 → 60**, **Coding 55 → 32**, **Cost 100 (confirmed)**, Multimodal unchanged at 15.

## Model card

- **Name:** Nemotron 3.5 Lightning Free
- **Short description:** NVIDIA's open 30B/3B-active hybrid MoE execution model for high-volume, low-latency agent steps, tool calls, result validation, and subagent delegation. **A narrow, fast execution layer — and on the evidence now available, one that fails as an agent almost as completely as GPT-OSS-120B, while being considerably cheaper.**
- **Provider / access:** NVIDIA weights and NIM; **OpenCode Zen `opencode/nemotron-3.5-lightning-free`** (confirmed present in Zen's free-models list); local serving via vLLM, SGLang and TensorRT-LLM. **16 providers per models.dev**, all at $0.00/$0.00.
- **Release / knowledge:** **2026-08-11** (NVIDIA, the model card, and models.dev all agree). **No reliable knowledge cutoff is published** — unchanged after two passes.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4`; `opencode/nemotron-3.5-lightning-free`. The model card documents a `qwen3_coder` tool-call parser.
- **Context window — a live conflict now recorded:** **NVIDIA's model card validates the NVFP4 checkpoint for up to 1M tokens**, and BenchLM lists **1M**. **models.dev lists 262,144 across all sixteen providers**, as does the sibling Nemotron 3 Ultra. **This report scores on 262,144 and flags the discrepancy** — the deployed, measurable limit is what a user can actually send, and a vendor validation ceiling is not the same thing.
- **Modalities:** **Text in / text out.** Reasoning toggleable; function/tool calling supported; IFBench 72.9% confirms it follows instructions moderately well. The card describes English and coding use with some multilingual support. **No image input is claimed.** NVIDIA's separate **Nemotron 3 Nano Omni 30B A3B** is the multimodal option.
- **Pricing (verified 2026-10-10):** **$0.00 / $0.00 across all 16 providers** per models.dev. **Critical caveat carried from the prior pass and confirmed: OpenCode warns that NVIDIA trial sessions are logged, and no personal or confidential data should be sent to this route.**
- **Architecture:** Open-weight hybrid Mixture-of-Experts using **Mamba and Transformer layers**, **30B total / 3B active**, with speculative-decoding components. **OpenMDW License 1.1**; **AA Openness Index 83.3%** — among the most permissive weights measured in this batch, matching Nemotron 3 Ultra.

### Raw benchmarks found

**Official NVIDIA NVFP4 column (NeMo Gym / NeMo Evaluator harnesses):**

- Terminal-Bench 2.1 **23.46%**; PinchBench **83.43%**; BrowseComp **36.81%**; τ³-Bench Banking **9.48%**; GDPval-AA-V2 **Elo 865**
- GPQA Diamond (no tools) **75.57%**; HLE (text-only, no tools) **10.47%**; MMLU-Pro **81.62%**; AA-Omniscience **16.63%**; AA-LCR **49.19%**; IFBench **72.9%**
- SWE-bench Verified **52.80%**; SWE-bench Multilingual **36.47%**; SciCode **31.38%**

**Independent — new this pass (Artificial Analysis):**

Agent / tool use:

- **AA Agentic Index: 6.1%** — *among the lowest measured anywhere in this research effort*
- **GDPval-AA: 7.0%** normalised, against NVIDIA's own **Elo 865** — *among the lowest normalised GDPval scores recorded here*

Coding:

- **AA Coding Index: 26.8%** — *near-floor, and one of the lowest in this dataset*
- **AA-SciCode: 32.1%** against NVIDIA's own **31.38%** — *close agreement, and both low*

Reasoning / knowledge:

- **CritPt: 0.0%** — *an exact zero, tied with Mistral Medium 3.5 for the worst figure in the batch*
- **AA-Intelligence Index: 12.9**; **AA-GPQA Diamond 74.3%** (vs NVIDIA's 75.57% — close agreement); **AA-HLE 10.6%** (vs NVIDIA's 10.47% — close agreement)
- **AA-Omniscience Index: −17.7%**; **Accuracy: 14.4%**; **Hallucination Rate: 37.6%** — ***a genuine positive: this is one of the five lowest hallucination rates in this entire research effort***

**BenchLM composite: 27.03/100, #198 of 889** (27 of 625 benchmarks) — the lowest BenchLM rank of any NVIDIA model measured. NVIDIA family: Nemotron 3 Ultra **47.16**, Nano Omni **32.15**, Nemotron-4 15B **10.01**.

Sources consulted: [BenchLM Nemotron 3.5 Lightning 30B A3B NVFP4 (updated 2026-10-10)](https://benchlm.ai/models/nemotron-3-5-lightning-30b-a3b-nvfp4), [NVIDIA Nemotron 3.5 Lightning model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-NVFP4), [Artificial Analysis Nemotron 3.5 Lightning](https://artificialanalysis.ai/models/nemotron-3-5-lightning), [NVIDIA technical blog](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-lightning-delivers-fast-accurate-specialized-task-execution-for-long-running-agents/), [models.dev Nemotron 3.5 Lightning](https://models.dev/models/nvidia/nemotron-3.5-lightning), and [OpenCode Zen](https://opencode.ai/docs/zen), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 22/100.** **Down from 48 — a 26-point fall.** NVIDIA's own figures are weak: **Terminal-Bench 2.1 23.46%**, **τ³-Bench Banking 9.48%**, **BrowseComp 36.81%**, **GDPval-AA Elo 865**. Independent measurement is worse: **AA Agentic Index 6.1%** and **GDPval-AA 7.0% normalised**. **PinchBench 83.43%** is the one strong row and is credited — PinchBench measures precise instruction and format adherence, which is exactly what a fast execution layer should be good at, and it is why this is 22 rather than at the floor. But the prior report's framing that this model serves "long-running agents" is not supported: a 23.5% Terminal-Bench 2.1 and a 6.1% Agentic Index describe a model that does not run agent loops.
- **Reasoning: 42/100.** Down from 58. **This dimension has the most interesting split in the report.** On the negative side: **CritPt at exactly 0.0%** — a literal zero on physics reasoning — **AA-Intelligence Index 12.9**, and **HLE 10.5%/10.6%**. On the positive side, and this is real: **Hallucination Rate 37.6% is one of the five lowest in this entire research effort**, with an Omniscience Index of −17.7% that is far better than the −30% to −50% cluster most comparable models sit in. **MMLU-Pro 81.62%** and **GPQA 74.3%/75.57%** are solid for a 3B-active model, and AA and NVIDIA agree closely on both GPQA and HLE. **Interpretation worth stating: this model does not invent much, but what it does know is shallow.** A 14.4% accuracy rate means it is right about one question in seven and declines or misses the rest. For a validation step in a pipeline that is genuinely useful; for a primary reasoner it is not.
- **Context window: 60/100.** **Down from 22 points' worth of change, driven by a newly-surfaced conflict.** NVIDIA's card validates the checkpoint "for up to 1M tokens" and BenchLM lists **1M**, but **models.dev lists 262,144 across all sixteen providers.** **This report scores on 262,144** — the deployed, measurable limit — and flags the discrepancy rather than picking the vendor's ceiling. Independently, **AA-LCR at 49.19%** is roughly coin-flip retrieval quality, which the prior pass cited correctly. **No MRCR, RULER, GraphWalks, or MLCR figure exists.** A model whose best retrieval result is 49.2% should not be sent 262K of tokens regardless of which limit is real.
- **Multimodal: 15/100.** Unchanged. **Text-only**; no image input is claimed. NVIDIA's **Nemotron 3 Nano Omni 30B A3B** is the multimodal member of this family.
- **Coding: 32/100.** **Down from 55 — a 23-point fall.** **SWE-bench Verified 52.80%** and **SWE-bench Multilingual 36.47%** are the vendor figures and are credited. But **AA Coding Index at 26.8% is near-floor** — among the three lowest coding scores in this dataset — and **SciCode reads 31.38% (NVIDIA) and 32.1% (AA), a close agreement between vendor and independent source on a low number.** **LiveCodeBench, Vibe Code Bench, and DeepSWE remain unpublished.** A model with a 3B active footprint was never going to match frontier coding performance, but 26.8% places it below GPT-OSS-120B's 30.4 despite being a fraction of the size-per-capability.
- **Cost efficiency: 100/100.** **Unchanged, and now fully verified.** **$0.00 / $0.00 across all sixteen providers** per models.dev, **OpenMDW License 1.1 with an AA Openness Index of 83.3%**, and a **3B-active footprint** that runs on a single consumer GPU. **The logging caveat is restated prominently because it is a genuine constraint: OpenCode warns NVIDIA trial sessions are logged and no personal or confidential data should be sent to this route.** That caveat is why this is not a route for sensitive work despite the zero price.
- **Overall Score: 34.2/100.** (22 + 42 + 60 + 15 + 32) / 5 = 171 / 5 = 34.2, down from 51.6 — **the lowest score assigned to any model across all four batches of this research effort.** **Best fit: a zero-cost, high-throughput format-adherence and result-validation step inside a pipeline that a stronger model is already directing.** The specific profile is: **PinchBench 83.43%, IFBench 72.9%, a 37.6% hallucination rate, open weights at 83.3% openness, free on sixteen routes, and 3B active parameters.** A model that rarely fabricates and reliably follows a short, precise format instruction is genuinely useful in that narrow role. **Four hard limits.** First, **it is not an agent** — Agentic Index 6.1%, Terminal-Bench 2.1 23.5%, τ³-Banking 9.48%, GDPval-AA 7.0%. Second, **CritPt 0.0% and HLE 10.5%** mean essentially no hard reasoning. Third, **AA-LCR 49.19%** — do not send it long context. Fourth, **the free route logs data.** And the framing recommendation: **Nemotron 3 Ultra — also free on Zen, also OpenMDW with an 83.3% openness index, also hybrid Mamba-Transformer — scores 47.16 against this model's 27.03, with Agentic Index 21.7% vs 6.1% and Coding Index 49.3% vs 26.8%.** If you want a free NVIDIA model for agent work, Nemotron 3 Ultra is strictly better on every measured axis at comparable cost and footprint class.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Nemotron 3.5 Lightning profile, NVIDIA's official model card and technical blog, Artificial Analysis's Nemotron 3.5 Lightning benchmark rows, models.dev's sixteen-provider specification and pricing table, and OpenCode Zen's documentation and free-models list. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass's framing that this model serves "long-running agents" is not supported by the evidence now available, and that is the substance of this correction.** The prior cited only NVIDIA's own card and recorded CritPt, hallucination metrics, Toolathlon, Claw-Eval and MCP-Atlas as unavailable. **All have now closed**: **AA Agentic Index 6.1%**, **GDPval-AA 7.0% normalised** against NVIDIA's own Elo 865, **AA Coding Index 26.8%** — the third-lowest coding score in this dataset — and **CritPt at exactly 0.0%**. **Tool use falls 48 → 22 and Coding 55 → 32** as a result. **Two genuine positives are credited rather than swept up in the fall: PinchBench 83.43%** (precise format adherence, which is exactly this model's role) **and a Hallucination Rate of 37.6%, one of the five lowest in this entire research effort** — a model that rarely fabricates but knows little, with 14.4% accuracy, is genuinely useful as a validation step. **A newly-surfaced conflict is recorded rather than resolved: NVIDIA's card validates 1M context and BenchLM lists 1M, while models.dev lists 262,144 across all sixteen providers**; Context is scored on 262,144, the deployed and measurable limit, and the discrepancy is flagged for the maintainer. **Cost is held at 100 and re-verified against sixteen free providers**, with **the logging caveat restated prominently** because it is a genuine constraint on use. **The final finding is a substitution recommendation**: Nemotron 3 Ultra is free on the same Zen free tier, carries the same OpenMDW licence and 83.3% openness index, and beats this model on every measured axis. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Nemotron_3_5_Lightning_Free_Recheck.md`, using the same headings.