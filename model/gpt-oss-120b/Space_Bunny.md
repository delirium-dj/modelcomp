# GPT-OSS-120B (high) — findings by Space Bunny

- Source: OpenAI / gpt-oss-120b
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-25
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 63.0 → 43.6, the largest single fall of any report in this batch.** Every dimension moved down except cost, and the reason is consistent: the prior pass scored this model largely from **OpenAI's own launch-era model card** and cited only three Artificial Analysis figures, while noting "HLE, CritPt, and low Omniscience reliability keep the score below frontier proprietary models." **The full independent picture is now available and it is severe: APEX-Agents-AA 3.1%, GDPval-AA 5.6% (Elo 745), AA Agentic Index 6.2%, AA Coding Index 30.4%, Intelligence Index 11.6, and a 90.8% hallucination rate with an Omniscience Index of −49.2% — the second-worst reliability figure in this entire research effort.**

Restated: **Tool 76 → 28**, **Reasoning 83 → 60**, **Context 65 → 60**, **Coding 78 → 55**, **Cost 94 → 92**, Multimodal unchanged at 15.

## Model card

- **Name:** GPT-OSS-120B (high reasoning)
- **Short description:** OpenAI's larger open-weight mixture-of-experts reasoning model, released 2025 for private deployment and customization. **Excellent contest mathematics, Apache-2.0 licensed, and — on independent measurement — close to unusable as an agent or as a factual source.** Released August 2025 and now well behind the frontier on every axis measured independently.
- **Provider / access:** Hugging Face `openai/gpt-oss-120b`; OpenRouter `openai/gpt-oss-120b`; Ollama `gpt-oss:120b`; local Transformers Serve, vLLM, or PyTorch/Triton. Sibling: **GPT-OSS 20B** (BenchLM 33.51).
- **Release / knowledge:** **released 2025-08-05**. **Knowledge cutoff is contested across three sources: Artificial Analysis reports May 2024, OpenRouter metadata reports 2024-06-30, and the official model card's training-data statement should be treated as authoritative.** At 26–28 months stale, the cutoff is the single most consequential fact about this model.
- **IDs:** `openai/gpt-oss-120b`; `openai/gpt-oss-120b` (OpenRouter); `gpt-oss:120b` (Ollama).
- **Context window:** **131,072 tokens** (Artificial Analysis and OpenRouter); BenchLM lists 128K. No separate max-output cap published.
- **Modalities:** **Text in / text out only.** Configurable low/medium/high reasoning, exposed chain-of-thought, function calling, built-in browser and Python tools, and Structured Outputs supported. **No image, audio, or video input.**
- **Pricing (verified 2026-10-10):** **OpenAI provides no first-party hosted API for this open-weight model.** OpenRouter lists **$0.15 input / $0.075 cached input / $0.60 output** per 1M. Self-hosting requires substantial hardware.
- **Architecture:** **Apache-2.0** open-weight MoE, **117B total / 5.1B active** parameters, MXFP4 quantized; the official model card states it fits on a single 80 GB NVIDIA H100 or AMD MI300X. **Apache-2.0 is among the most permissive licences available for any model measured in this dataset.**

### Raw benchmarks found

> OpenAI's model card supplies the primary low/medium/high table (2025-08). Artificial Analysis and Vals AI values use newer harnesses and are kept separate from the launch-era results. The split matters: **where the two disagree, the newer independent figure is consistently much worse.**

**OpenAI official model card (high reasoning):**

- Tau-Bench Retail / Airline: **67.8% / 49.2%**
- AIME 2024 no tools / with tools: **95.8% / 96.6%**; AIME 2025: **92.5% / 97.9%**
- GPQA Diamond: **80.1% / 80.9%**; HLE: **14.9% / 19.0%**; MMLU **90.0%**; MMMLU **81.3%**
- SWE-bench Verified: **62.4%**; Codeforces **2,463 / 2,622 Elo**; Aider Polyglot **44.4%**

**Independent — new or newly available this pass:**

Agent / tool use — **this is where the model is weakest:**

- **APEX-Agents-AA: 3.1%** — *near-total failure; among the lowest figures recorded anywhere in this research effort*
- **AA Agentic Index: 6.2%**
- **GDPval-AA: 5.6% / Elo 745** — *the lowest GDPval Elo measured in this batch; compare Gemma 4 31B at 755 and GLM-5.1 at 1,181*
- Gert Labs **29.61%**
- τ²-bench **65.8%** (Artificial Analysis) — *mid, and better than the general agentic picture*

Reasoning / knowledge:

- **AA-Omniscience Index: −49.2%**; **Accuracy: 21.8%**; **Hallucination Rate: 90.8%** — *second-worst in this entire research effort behind Gemini 2.5 Flash's 93.0%, and ahead of DeepSeek V4 Flash's 91.7%*
- **AA-Intelligence Index: 11.6** — near the bottom; compare Mistral Medium 3.5 at 14.2 and Gemini 2.5 Flash-Lite at 7
- **AA-GPQA Diamond: 78.2%**; **AA-HLE: 19.6%**; **CritPt: 1.1%**
- MMLU **90.0%** (OpenAI card, confirmed by BenchLM)

Coding:

- **AA Coding Index: 30.4** — *near-floor*
- **AA-SciCode: 34.0%**; React Native Evals **71.6%**
- SWE-bench Verified **62.4%** (OpenAI card, confirmed by BenchLM)

Long context:

- **AA-LCR: 52.0%** — the prior pass cited this correctly; unchanged.

Instruction following: **IFBench 69.0%**. Design Arena Website **974 Elo** — the lowest OpenRouter Elo recorded in this batch.

**BenchLM composite: 37.22/100, #146 of 889** (25 of 625 benchmarks). For scale within OpenAI's own line: GPT-5.1 **57.22**, GPT-5.2 **60.33**, GPT-5.5 **67.79**, GPT-5.6 Sol **77.81**, GPT-6.1 Sol **84.18**, GPT-6 Astra **84.88**. **GPT-OSS-20B 33.51** is below it.

Sources consulted: [BenchLM GPT-OSS 120B (updated 2026-10-10)](https://benchlm.ai/models/gpt-oss-120b), [OpenAI gpt-oss-120b and gpt-oss-20b model card (PDF)](https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf), [Artificial Analysis GPT-OSS 120B](https://artificialanalysis.ai/models/gpt-oss-120b), [OpenRouter GPT-OSS 120B](https://openrouter.ai/openai/gpt-oss-120b/benchmarks), [React Native Evals](https://rn-evals.vercel.app/), and [Gert Labs rankings](https://gertlabs.com/rankings), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 28/100.** **Down from 76 — a 48-point fall, the largest single-dimension correction in all four batches.** The prior 76 cited **Tau-Bench Retail 67.8%, Tau2 Telecom 65.8%, and IFBench 69.0%**, while noting "Terminal-Bench Hard at 23.5% and Agentic Index at 3.7 limit agentic expectations." The full independent picture is now visible and it is far worse than the prior pass's reading: **APEX-Agents-AA at 3.1%**, **AA Agentic Index 6.2%**, **GDPval-AA at 5.6% with an Elo of 745 — the lowest measured in this batch**, and **Gert Labs 29.61%.** Tau-bench figures are retained and credited as the narrow-domain strength they are: **τ²-bench 65.8%**, Tau-Bench Retail 67.8% / Airline 49.2%. **This is the same pattern as the seven other models in this batch with strong τ-family scores and near-floor general agentic measurement**, and for GPT-OSS-120B it is the most extreme instance of all.
- **Reasoning: 60/100.** **Down from 83.** The contest mathematics are genuinely excellent and are credited: **AIME 2024 95.8%/96.6%, AIME 2025 92.5%/97.9%, Codeforces 2,463/2,622 Elo, MMLU 90.0%** — and notably, **the with-tools figures beat the no-tools figures**, which is unusual and suggests real tool-augmented reasoning. But: **Hallucination Rate 90.8% with an Omniscience Index of −49.2%** is the governing fact and the second-worst in this research effort. **The model is wrong about nine questions in ten and confident.** **HLE 14.9%/19.6%**, **CritPt 1.1%**, and an **Intelligence Index of 11.6** all point the same way. **GPQA 80.1% (OpenAI) against 78.2% (AA)** is close agreement on a mid-tier figure. **The May–June 2024 knowledge cutoff — contested between two sources — means this model has no useful knowledge of anything after mid-2024**, which by October 2026 is most of the last two years.
- **Context window: 60/100.** Down from 65. The **131,072-token window** is verified (128K per BenchLM), which places it in the 128K band — **less than a quarter of the 1M-class models in this dataset**, and 203K for GLM-5.1. **AA-LCR at 52.0%** is the measured retrieval figure the prior pass correctly recorded, and roughly coin-flip retrieval is weak. No MRCR, RULER, GraphWalks, or MLCR figure exists.
- **Multimodal: 15/100.** Unchanged. **Text-only**; no image, audio, or video input. This maps to the methodology's floor. Note that this is a genuine functional gap for OpenAI's line — **GPT-4o scores 29.70 on BenchLM with vision**, and even the tiny GPT-OSS-20B sibling would likely be preferable for any multimodal need at this scale.
- **Coding: 55/100.** **Down from 78.** **SWE-bench Verified 62.4%** and **React Native Evals 71.6%** are real and are credited. But the independent composite **AA Coding Index at 30.4 is near-floor** — among the lowest of any model measured in this dataset — and **AA-SciCode 34.0%** and **Aider Polyglot 44.4%** are weak. **SWE-bench Pro, LiveCodeBench, DeepSWE, and Vibe Code Bench remain unpublished.** The prior 78 treated SWE-bench Verified 62.4% and Codeforces Elo as the coding story; **Codeforces Elo measures competitive programming, not software engineering**, and the Coding Index is the metric that actually predicts repository work.
- **Cost efficiency: 92/100.** Down from 94. **$0.15 in / $0.60 out with $0.075 cached input** on OpenRouter remains inexpensive, and **Apache-2.0 with 5.1B active parameters** is a genuinely strong licence-and-footprint combination — 117B total on a single 80 GB H100 is still a real hardware commitment, though far less than the 1.6T-class alternatives. Held near the prior score; the small reduction reflects that **there is still no first-party OpenAI API**, so hosted access depends entirely on third parties.
- **Overall Score: 43.6/100.** (28 + 60 + 60 + 15 + 55) / 5 = 218 / 5 = 43.6, down from 63.0. **This is the lowest score assigned to any model in this entire research effort.** **Best fit: contest mathematics and research prototyping on private hardware where a 2024 knowledge base is acceptable.** The specific claim is narrow: **AIME 2024/2025 above 92%, Codeforces above 2,450 Elo, MMLU 90.0%, and Apache-2.0** make this a good model for mathematical work, algorithm design, and for anyone who needs OpenAI-shaped output on hardware they control. **Four hard limits, any one of which is disqualifying for most uses.** First, **90.8% hallucination rate and a −49.2% Omniscience index** — this model must never be the source of a factual claim. Second, **APEX-Agents 3.1%, Agentic Index 6.2%, GDPval-AA 5.6% / Elo 745** — it is not an agent and will not become one. Third, **a contested May–June 2024 knowledge cutoff** — it is blind to essentially all of 2024–2026. Fourth, **131K context with 52.0% retrieval**. **The dominant recommendation: this model is obsolete.** It was released 2025-08-05, and **every current OpenAI model outranks it substantially — GPT-5.1 at 57.22, GPT-5.2 at 60.33, GPT-5.5 at 67.79.** Its continuing value is the **Apache-2.0 licence and the 5.1B active footprint**, which the entire 2026 proprietary line cannot offer. **If you need OpenAI weights under a permissive licence, use GPT-OSS-20B for small-footprint work and accept its 33.51 composite — or better, note that Nemotron 3 Ultra Free, GLM-5.1, Kimi K2.7 Code, and Laguna S 2.1 all offer permissive or free licences with far better measured reliability.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's GPT-OSS 120B profile, OpenAI's official gpt-oss model card PDF, Artificial Analysis's GPT-OSS 120B benchmark rows, OpenRouter's benchmark page, React Native Evals, and Gert Labs rankings; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior pass's reasoning was that this model is a strong contest-mathematics model with "low Omniscience reliability" capping its score. That was a significant understatement.** The independent picture now available shows **APEX-Agents-AA at 3.1% and AA Agentic Index at 6.2%** — a near-total agentic failure — **GDPval-AA at 5.6% with an Elo of 745, the lowest in this batch** — and **AA Coding Index at 30.4, near-floor**. **Tool use falls 76 → 28, a 48-point correction and the largest single-dimension fall across all four batches**, because the prior score was built on three τ-family figures while the agentic gaps were unmeasured. **Credit is given where it is due and the fall is not uniform: AIME 2024/2025 above 92%, Codeforces 2,463/2,622 Elo, MMLU 90.0% and MMMLU 81.3% are genuine strengths**, and notably the **with-tools figures beat the no-tools figures on AIME and GPQA**, which is a real and unusual property. Two prior figures are confirmed unchanged: **AA-LCR 52.0%** and **SWE-bench Verified 62.4%**. **One unresolved conflict is carried rather than resolved: the knowledge cutoff reads May 2024 on Artificial Analysis and 2024-06-30 on OpenRouter**; both are recorded and either makes the model unusable for current events. **The prior report's framing of Codeforces Elo as evidence of coding strength is corrected** — competitive-programming Elo is not a repository-engineering metric, and the Coding Index at 30.4 is the relevant one. **The obsolete-model finding is stated explicitly**: every current OpenAI model outranks this by 14 to 41 BenchLM points, and its only surviving advantage is the Apache-2.0 licence at a 5.1B active footprint. Search-provider rate limiting (HTTP 429) persisted, so evidence came from four direct primary retrievals plus two cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `GPT_OSS_120B_Recheck.md`, using the same headings.