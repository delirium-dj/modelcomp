# Gemma 4 31B — findings by Space Bunny

- Source: Google (`google/gemma-4-31B-it`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 79.4 → 73.6.** The prior pass's raw-benchmark block explicitly recorded "LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**," and separately noted that the Artificial Analysis Intelligence Index had "no verified value for the current v4.3.2 index." Both gaps have now closed, and both closings hurt. **AA-Omniscience Hallucination Rate is 85.0%** with only **20.0% accuracy** and an **Omniscience Index of −47.9%** — the worst reliability profile measured anywhere in this batch. The verified index is **14.7**, against the ~30 the prior pass carried. **CritPt is 1.4%**, **GDPval-AA 6.1% (Elo 755)**, and **AA Agentic Index 6.7%**. Restated: **Tool 73 → 62**, **Reasoning 76 → 66**, **Coding 76 → 70**, **Multimodal 90 → 88**, Context and Cost unchanged.

## Model card

- **Name:** Gemma 4 31B (instruction-tuned)
- **Short description:** Google's open-weight, 31B dense multimodal model for reasoning, coding, function calling, and local/edge deployment. **Strong academic knowledge, mediocre agentic execution, and — as newly measured — the highest hallucination rate of any model examined in this batch.**
- **Provider / access:** Hugging Face `google/gemma-4-31B-it`; Transformers, vLLM, and compatible local runtimes. **Cerebras Inference serves it at 1,851 output tokens/s**, the fastest measured multimodal route.
- **Release / knowledge:** HF repository created **2026-03-11**; Artificial Analysis and LM Market Cap list the public release as **April 2026**. Gemma 4 technical report dated 2026. **Training-data cutoff: January 2025** (Google model card) — now 21 months stale.
- **IDs:** `google/gemma-4-31B-it`; base `google/gemma-4-31B`.
- **Context window:** **256K tokens** input (262,144) with a **16,384-token maximum output** (Google model card and LM Market Cap). The 16K output cap is low relative to the input window — a real constraint for long-generation agentic work.
- **Modalities:** Text and image input; text output. Thinking enabled via a documented control token; native function calling supported. **No audio listed for the 31B variant.**
- **Pricing (verified 2026-10-10):** No fixed first-party Google API price. Artificial Analysis lists **$0.00/1M** for the open-weight route; third-party hosted routes run around **$0.09 in / $0.34 out per 1M** (LM Market Cap). Self-hosting carries infrastructure cost. Not treated as free merely because it is open-weight.
- **Speed / latency:** Artificial Analysis measures **35 output tokens/s** and **1.00 s TTFT** on a standard hosted route; **Cerebras reports 1,851 output tokens/s** and ~1.5 s to first answer token. Provider-dependent and drifting.
- **Architecture:** Dense **30.7B** total parameters; 60 layers; hybrid local/global attention with a 1024-token sliding window; ~550M vision encoder; **Apache-2.0** weights and licence.
- **Deprecation:** **No deprecation, retirement, or shutdown date published.** Current open-weight release; no successor named. BenchLM tracks siblings Gemma 4 26B A4B, 12B, E4B, E2B.

### Raw benchmarks found

**Google official (31B column — not mixed with 26B A4B or smaller variants):**

- GPQA Diamond **84.3%**; MMLU-Pro **85.2%**; MMMLU **88.4%**; BigBench Extra Hard **74.4%**
- AIME 2026 (no tools) **89.2%**; HLE no tools **19.5%**, HLE with search **26.5%**
- Tau2 (average over 3) **76.9%**
- LiveCodeBench v6 **80.0%**; Codeforces ELO **2150**
- MRCR v2, 8-needle, 128K: **66.4% average**; native context **256K**, max output **16,384**
- MMMU-Pro **76.9%**; MATH-Vision **85.6%**; OmniDocBench 1.5 average edit distance **0.131**; MedXPertQA MM **61.3%**

**Independent — new since the prior pass:**

Agent / tool use:

- **τ²-bench: 59.9%** (Artificial Analysis) — *a 17-point spread below Google's own Tau2 76.9%; the two are not the same measurement*
- **GDPval-AA: 6.1% / Elo 755** (Artificial Analysis) — *brutal; GDPval measures economically valuable knowledge-work output*
- **AA Agentic Index: 6.7%** (Artificial Analysis)
- Gert Labs **35.26%**; SWE-Rebench **41.6%** (both carried from the prior pass, now confirmed)
- **IFBench: 75.6%** (Artificial Analysis) — respectable, and the best agentic-adjacent figure for this model

Reasoning / knowledge:

- **AA-GPQA Diamond: 85.7%** (vs Google's 84.3% — independent agreement, slightly higher); **AA-HLE: 23.6%** (vs Google's 26.5%)
- **AA-Intelligence Index: 14.7** (Artificial Analysis) — *replaces the unverified ~30 carried by the prior pass*
- **AA-Omniscience Index: −47.9%**; **Omniscience Accuracy: 20.0%**; **Hallucination Rate: 85.0%** — **the most consequential new data in this report**
- **CritPt: 1.4%**; **AA-LCR: 69.7%**

Coding:

- **AA Coding Index: 43.4%**; **AA-SciCode: 45.5%** (Artificial Analysis)
- React Native Evals **75.2%** (carried from the prior pass, now confirmed)

Multimodal:

- **AA-MMMU-Pro: 73.4%** (Artificial Analysis) vs Google's **76.9%** — independent agreement, slightly lower

**BenchLM composite: 40.15/100, #135 of 889** (26 of 625 benchmarks; conservative). Google siblings for scale: Gemma 4 26B A4B **45.89**, Gemma 4 12B **36.59**, E4B **31.33**, E2B **30.21** — Gemma 4 31B is the strongest Gemma 4 point but still ranks below Gemini 3.5 Flash (62.52).

**Still absent:** SWE-bench Verified, SWE-bench Pro, Terminal-Bench 2.0/2.1, DeepSWE, Vibe Code Bench, Toolathlon, MCP-Atlas.

Sources consulted: [BenchLM Gemma 4 31B (updated 2026-10-10)](https://benchlm.ai/models/gemma-4-31b), [Artificial Analysis Gemma 4 31B](https://artificialanalysis.ai/models/gemma-4-31b), [Gemma 4 31B Hugging Face model card](https://huggingface.co/google/gemma-4-31b-it), [SWE-Rebench leaderboard](https://swe-rebench.com/), [React Native Evals](https://rn-evals.vercel.app/), [Gert Labs rankings](https://gertlabs.com/rankings), [Cerebras Gemma 4](https://www.cerebras.ai/blog/gemma-4-on-cerebras-the-fastest-inference-is-now-multimodal), and [LM Market Cap Gemma 4 31B](https://lmmarketcap.com/model/gemma-4-31b), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 62/100.** Down from 73. The prior 73 rested on **Tau2 76.9%** and native function calling, while noting Gert Labs 35.26% and SWE-Rebench 41.6% pulled the picture down. Artificial Analysis has now measured it properly: **τ²-bench 59.9%** — 17 points below Google's own Tau2 figure, which shows how much the vendor number depended on harness and prompting. The new numbers are damning for agentic work: **GDPval-AA at 6.1% (Elo 755)** and **AA Agentic Index at 6.7%**. GDPval measures whether a model can produce economically valuable professional deliverables, and 6.1% says this model cannot. **IFBench 75.6%** is the one genuinely good agentic-adjacent result and is why this is 62 rather than 50.
- **Reasoning: 66/100.** Down from 76. Knowledge breadth remains genuinely strong and independently confirmed — **GPQA Diamond 84.3% (Google) / 85.7% (AA)**, **MMLU-Pro 85.2%**, **MMMLU 88.4%**, **AIME 2026 89.2%**, **BBH 74.4%** — a 31B dense model reaching that level is a real achievement for an open-weight release. The reduction is entirely about reliability, and it is severe: **Hallucination Rate 85.0%** with **only 20.0% accuracy** and an **Omniscience Index of −47.9%**. The model is wrong about five questions in six and presents the wrong answer confidently. **CritPt 1.4%** and the verified **AA-Intelligence Index of 14.7** — against the ~30 the prior pass carried and could not verify — point the same way. A dense 31B model without retrieval is exactly the configuration where this failure mode is expected, and it is now measured rather than assumed.
- **Context window: 82/100.** Unchanged. **256K input / 16,384 output** places it in the 200K–500K tier, below the 500K+ leaders. Evidence improved this pass without moving the tier: **MRCR v2 8-needle at 128K, 66.4%** (Google) is now joined by **AA-LCR 69.7%** (Artificial Analysis) — two independent long-context retrieval results in close agreement, which is a genuinely solid basis for the score. The **16K output cap** remains the practical limit.
- **Multimodal: 88/100.** Down from 90. Still one of the strongest multimodal scores in this batch for an open-weight model: **MMMU-Pro 76.9% (Google) / 73.4% (AA)**, **MATH-Vision 85.6%**, **OmniDocBench 1.5 edit distance 0.131**, **MedXPertQA MM 61.3%**. The small reduction reflects that Artificial Analysis's independent MMMU-Pro read (73.4%) sits below Google's, and that there is no audio, video, or non-text output for the 31B variant.
- **Coding: 70/100.** Down from 76. **LiveCodeBench v6 80.0%**, **Codeforces ELO 2150**, and **React Native Evals 75.2%** show real single-shot code generation. The independent agentic-coding numbers are much weaker: **AA Coding Index 43.4%**, **AA-SciCode 45.5%**, **SWE-Rebench 41.6%**. For comparison, Kimi K2.7 Code scores 60.8 on the same AA Coding Index. The model can write a function and follow a spec; it cannot reliably carry out a multi-file repository task.
- **Cost efficiency: 88/100.** Unchanged. **Apache-2.0 open weights**, **$0.00/1M** on the open-weight route per AA, roughly **$0.09/$0.34** on third-party hosted routes, and **Cerebras at 1,851 output tokens/s** — for a 31B dense model this is close to the floor on cost. Held below 90 because self-hosting still carries real infrastructure cost and the model is materially weaker than free hosted alternatives such as GLM 5.3 Flash and DeepSeek V4.1 Flash.
- **Overall Score: 73.6/100.** (62 + 66 + 82 + 88 + 70) / 5 = 368 / 5 = 73.6, down from 79.4. **Best fit: self-hosted multimodal workloads where the deployment story matters more than agentic or factual reliability** — Apache-2.0 weights, a 30.7B dense model that runs on a single workstation, 256K context, and genuine image and document understanding (MATH-Vision 85.6%, OmniDocBench). **Three hard limits.** First, **85.0% hallucination rate** — the worst measured in this batch. This model must never be the source of an unverified fact, and it is unsafe as an autonomous agent's decision authority. Second, **GDPval-AA 6.1% and Agentic Index 6.7%** — it will not produce professional work products. Third, **16K max output** against a 256K input window is a poor ratio for long-generation agentic work. If you need factual reliability, agentic execution, or both, use a model that has them; if you need a permissively-licensed multimodal model you can run yourself, this is a strong pick on capability-per-dollar and a weak one on capability-per-claim.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Artificial Analysis's Gemma 4 31B benchmark rows, BenchLM's Gemma 4 31B profile, the Gemma 4 31B Hugging Face model card, SWE-Rebench, React Native Evals, Gert Labs, Cerebras, and LM Market Cap; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **the prior report's reasoning score was carried on an unverified index reading.** It noted that AA showed "30 on the AA page as currently displayed" but that no verified v4.3.2 value existed, and recorded that figure anyway; the verified value is **14.7**. Both the hallucination block and CritPt were logged as gaps; all three have now closed against the model. **Where independent measurement exists, it is preferred over vendor measurement: Google's Tau2 76.9% is replaced by AA's τ²-bench 59.9%, and Google's MMMU-Pro 76.9% is noted alongside AA's 73.4%.** Vendor and independent figures are reported as a pair wherever they disagree rather than averaged. Google's own knowledge scores are retained and credited — GPQA, MMLU-Pro, AIME and MMMLU are all genuine strengths, and **AA's independent GPQA of 85.7% slightly exceeds Google's 84.3%**, so the disagreement is not one-directional. No deprecation exists for this model. Search-provider rate limiting (HTTP 429) persisted, so evidence came from direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `Gemma_4_31B_Recheck.md`, using the same headings.