# Mistral Medium 3.5 — findings by Space Bunny

- Source: Mistral AI (`mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-24
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 74.4 → 62.0.** Two findings drive it. First, **an unresolved 40-point conflict on GPQA Diamond: 74.8% (Artificial Analysis) against 34.8% (Vals AI)** — the largest harness divergence recorded for any model in this research effort, and both numbers are carried rather than averaged. Second, the prior pass's agentic score of 82 rested on **τ³-Telecom 91.4%** alone and recorded that "Toolathlon, GDPval-AA, Claw-Eval, and MCP-Atlas: no verified public exact value found." Those gaps are now filled and they are poor: **AA Agentic Index 9.3%**, **GDPval-AA 13.2% / Elo 875**. **CritPt reads exactly 0.0%** and **Hallucination Rate is 81.6%**. Restated: **Tool 82 → 58**, **Reasoning 66 → 52**, **Context 76 → 72**, **Multimodal 65 → 68**, **Coding 83 → 60**, **Cost unchanged at 55**.

## Model card

- **Name:** Mistral Medium 3.5 128B
- **Short description:** Mistral's first flagship merged open-weight model, combining instruction following, configurable reasoning, coding, vision, and agentic tool use in one dense 128B checkpoint. **Exceptional on narrow telecom-domain agentic benchmarks and on repository-level SWE-bench, and near-floor on general professional agentic work and factual reliability.**
- **Provider / access:** Mistral API `mistral-medium-3-5` (Chat Completions, Conversations, agents, built-in tools, structured outputs); Hugging Face `mistralai/Mistral-Medium-3.5-128B`; local vLLM/SGLang deployment.
- **Release / knowledge:** Official model docs list **2026-04-28**; BenchLM lists 2026-04-29. **No reliable knowledge cutoff has ever been published** — an unchanged gap across two passes.
- **IDs:** `mistral-medium-3-5`; `mistralai/Mistral-Medium-3.5-128B`.
- **Context window:** **256K tokens** (official model card and docs; BenchLM confirms). **Maximum output still not published** after two passes.
- **Modalities:** **Text and image input; text output.** Reasoning effort `none` or `high`; function calls, JSON output, agents, built-in tools, batching, document Q&A supported. **No audio or video input.**
- **Pricing (verified 2026-10-10):** **$1.50 per 1M input / $7.50 per 1M output** (official Mistral docs) — unchanged. Artificial Analysis reports a **90% cache discount** and **$0.44 per task** on its evaluation.
- **Architecture:** Dense **128B** open-weight model; **Modified MIT License with commercial-use restrictions for large-revenue companies** — not OSI open.

### Raw benchmarks found

**Official Mistral (model card / Vibe remote-agents announcement):**

- τ³-bench Tool-Agent-User: **91.4%**
- SWE-bench Verified: **77.6%**

**Independent — new this pass (Artificial Analysis, Vals AI, Gert Labs):**

Agent / tool use — **strikingly bimodal:**

- **τ²-bench: 94.2%** (Artificial Analysis) — alongside Mistral's own **τ³-Telecom 91.4%**
- **AA Agentic Index: 9.3%** — *near-floor, and the clearest single rebuttal of the telecom-domain scores*
- **GDPval-AA: 13.2% / Elo 875** (Artificial Analysis) — *GDPval measures economically valuable professional work products; 13.2% says the model does not produce them*
- Terminal-Bench 2.1 (Vals AI): **39.0%**; Gert Labs: **39.10%**

Coding:

- **AA Coding Index: 46.9%**; **AA-SciCode: 40.2%**; SWE-bench (Vals AI) **66.4%**
- SWE-bench Pro, LiveCodeBench, DeepSWE, Vibe Code Bench: **still not published**

Reasoning / knowledge:

- **GPQA Diamond: 74.8% (Artificial Analysis) vs 34.8% (Vals AI)** — **a 40.0-point spread between two credible harnesses; not reconciled here**
- MMLU-Pro (Vals AI): **75.3%**; HLE **13.8%**
- **CritPt: 0.0%** — an exact zero on physics reasoning
- **AA-Intelligence Index: 14.2** (confirms the prior pass's 14)
- **AA-Omniscience Index: −36.8%**; **Accuracy: 24.7%**; **Hallucination Rate: 81.6%**

Long context:

- **AA-LCR: 69.3%** — the first exact-model retrieval-at-length result; **no MRCR, RULER, or GraphWalks figure exists**

Multimodal / instruction following:

- **AA-MMMU-Pro: 64.9%** — the first visual-reasoning measurement; **IFBench: 68.8%**

**BenchLM composite: 34.72/100, #159 of 889** (23 of 625 benchmarks). Mistral family for scale: **Mistral Large 4 53.68**, **Mistral Small 4 34.77**, Large 3 33.28, Medium 3 28.98, Large 2 28.57. **Mistral Medium 3.5 128B scores marginally above Mistral Small 4 and barely above Mistral Large 3** — a flagship that does not lead its own line.

Sources consulted: [BenchLM Mistral Medium 3.5 128B (updated 2026-10-10)](https://benchlm.ai/models/mistral-medium-3-5-128b), [Mistral AI: Remote agents in Vibe](https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5), [official Hugging Face model card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/raw/main/README.md), [Artificial Analysis Mistral Medium 3.5](https://artificialanalysis.ai/models/mistral-medium-3-5), [Vals AI Mistral Medium 3.5](https://www.vals.ai/models/mistralai_mistral-medium-3.5), [Mistral model documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04), and [Gert Labs rankings](https://gertlabs.com/rankings), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 58/100.** **Down from 82 — a 24-point correction.** The prior 82 was computed from **τ³-Telecom 91.4% alone**, plus the observation that Terminal-Bench was 39.0%; the prior report itself flagged that "GDPval, Toolathlon, and MCP values" were missing. Those gaps are now closed and the picture inverts. **τ²-bench 94.2%** is excellent and Mistral's own τ³ figure is corroborated — but both are **telecom-domain** results, and the general agentic measurements are near-floor: **AA Agentic Index 9.3%**, **GDPval-AA 13.2% / Elo 875**, Terminal-Bench 2.1 **39.0%**, Gert Labs **39.10%**. **A 94% score on one tool domain alongside a 9.3% agentic index is the signature of a model that has been optimised for one narrow agentic distribution rather than for agency.** GLM-5.3 shows what the same benchmark looks like when it generalises — τ²-bench 99.1% *and* Agentic Index 53.4%; Mistral has the first number without the second.
- **Reasoning: 52/100.** Down from 66. **The GPQA conflict is unresolved and material: 74.8% (AA) against 34.8% (Vals AI).** A 40-point gap on the same benchmark between two independent labs usually means a thinking-budget, scaffold, or answer-extraction difference rather than a measurement error, and this report does not average them — the score reflects the lower reading. Supporting evidence is weak on every axis: **MMLU-Pro 75.3%**, **HLE 13.8%**, **Intelligence Index 14.2**, **CritPt at exactly 0.0%**, and a **Hallucination Rate of 81.6%** with an Omniscience Index of **−36.8%** and 24.7% accuracy. The model is wrong about four questions in five and states the wrong answer confidently. **IFBench 68.8%** shows it can follow instructions moderately well, which is what keeps this above the floor — but instruction-following is not knowledge.
- **Context window: 72/100.** Down from 76. **256K input** is verified from the official model card and corroborated by BenchLM, placing it in the 200K–500K tier. **AA-LCR at 69.3%** is the retrieval-at-length result the prior pass lacked, and it is moderate. Held below the previous score because a single long-context harness with no MRCR, RULER, or GraphWalks corroboration is weak evidence, and because **the maximum output cap still has not been published** after two research passes.
- **Multimodal: 68/100.** Up from 68, now evidenced. The prior 65 was assigned from the modality list alone. **MMMU-Pro at 64.9%** is the first actual visual-reasoning measurement and lands mid-tier — below Google's Flash line (65.5–73.4%) and well below Muse Glimmer's 74.3%. Held in the 60–70 band because image input is real but modest, and there is **no audio or video input and no non-text output**.
- **Coding: 60/100.** **Down from 83.** This is the second-largest correction. **SWE-bench Verified 77.6%** (Mistral's own figure) and **66.4%** (Vals AI) are genuinely strong, and SWE-bench Verified 77.6% is a real frontier-adjacent number. But **AA Coding Index is 46.9%** and **AA-SciCode 40.2%** — SciCode measures scientific-code correctness, the hardest coding test in common use, and 40.2% is weak. **SWE-bench Pro, LiveCodeBench, DeepSWE, and Vibe Code Bench remain unpublished**, so the dimension has two independent anchors and they disagree by 20 points. The prior 83 was essentially SWE-bench alone; with the independent composite at 46.9% it cannot stand.
- **Cost efficiency: 55/100.** Unchanged. **$1.50 / $7.50 is expensive for the open-weight cohort** — it is more than double GLM-5.2's first-party rate and roughly three times Gemini 3.8 Flash's, for a model that benchmarks well below both. The **90% cache discount** and **$0.44 per task** mitigate this substantially for cache-heavy workloads, and self-hosting a 128B dense model on Modified-MIT terms is feasible. Held at 55: genuinely mediocre value for an open-weight release.
- **Overall Score: 62.0/100.** (58 + 52 + 72 + 68 + 60) / 5 = 310 / 5 = 62.0, down from 74.4. **Best fit: self-hosted SWE-bench-class repository work, where a 77.6% Verified score at your own infrastructure cost is the actual product.** That is a real and specific fit, and Modified-MIT open weights with image input make it a plausible privacy-sensitive choice. **Four cautions.** First, **81.6% hallucination rate and CritPt 0.0%** — this model must never be the source of a factual claim or a physics answer. Second, **the τ²/τ³ scores do not generalise** — an Agentic Index of 9.3% and GDPval-AA 13.2% mean it is not an agent, however it performs on the telecom domain. Third, **GPQA is genuinely contested** at 74.8% vs 34.8%; if knowledge quality is the deciding factor for your use, measure it yourself rather than trusting either number. Fourth, **it does not lead its own family**: BenchLM puts Mistral Large 4 at 53.68 and Mistral Medium 3.5 at 34.72, and Large 4 costs less per token on Zen. Large 4 is the better buy on every axis except open weights.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's Mistral Medium 3.5 128B profile, Mistral AI's official model card and Vibe remote-agents announcement, Artificial Analysis's Mistral Medium 3.5 benchmark rows, Vals AI's Mistral Medium 3.5 leaderboards, Mistral's model documentation, and Gert Labs rankings; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass's Tool use score of 82 rested on a single benchmark from a single narrow domain.** **τ³-Telecom 91.4%** was the entire basis; the report itself noted that GDPval, Toolathlon, and MCP values were missing. **Artificial Analysis's τ²-bench 94.2% now corroborates the telecom strength — and AA's Agentic Index 9.3% and GDPval-AA 13.2% simultaneously disprove its generality.** Both halves are reported: the telecom result is credited as real, and the general agentic result governs the score. This is the **second model in this batch** (after Muse Glimmer 30B) to show a 90%+ τ-bench score alongside a single-digit Agentic Index, and it is now a recognisable pattern: **narrow-domain agentic benchmarks reward models tuned for that domain.** **The GPQA conflict is the report's most important unresolved item: 74.8% (AA) against 34.8% (Vals AI), a 40.0-point spread.** Neither figure is discarded and they are not averaged; the Reasoning score reflects the lower reading, and readers with a knowledge-sensitive use case are advised to measure it directly. **CritPt at exactly 0.0%** and **Hallucination Rate 81.6%** are recorded as measured. Coding falls from 83 to 60 because the prior score used SWE-bench alone and **AA Coding Index 46.9%** now exists to contradict it. Two gaps remain genuinely open after two passes: **no published maximum output cap and no published knowledge cutoff.** Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Mistral_Medium_3_5_Recheck.md`, using the same headings.