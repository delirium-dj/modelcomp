# MiMo-V2.5-Pro — findings by Space Bunny

- Source: Xiaomi MiMo (`mimo-v2.5-pro`; open weights)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change — Overall 75.8 → 66.6 — and the model goes offline in 11 days.** The prior pass recorded "HLE, CritPt, AA-Omniscience, AA-LCR v1.1, and hallucination metrics: **no verified public exact value found**" and "AA Intelligence Index: **no verified public score found**." Artificial Analysis has now run the model and **all five gaps are filled — and three of them are excellent**: **Hallucination Rate 24.7% with a positive Omniscience Index of +3.3%** (the second-lowest hallucination rate in this research effort), **HLE 48% / 35.7%**, and **AA-LCR 79.7%**. Offsetting that, independent agentic measurement is weak where Xiaomi is silent: **APEX-Agents-AA 2.4%**, **Agentic Index 22.7%**, **GDPval-AA 31.2%**. Restated: **Tool 91 → 68**, **Reasoning 88 → 82**, **Context 95 → 92**, **Coding 90 → 76**, **Cost 88 → 85**, Multimodal unchanged at 15.

## Model card

- **Name:** MiMo-V2.5-Pro
- **Short description:** Xiaomi's open-weight MoE model for demanding agentic work, complex software engineering, and coherent long-horizon execution across more than a thousand tool calls. **Final V2.5-series flagship — and one of only two models in this batch with a genuinely strong reliability profile. It is taken offline 2026-10-21, eleven days from this report.**
- **Provider / access:** Xiaomi MiMo API Platform (`mimo-v2.5-pro`), AI Studio, Hugging Face `XiaomiMiMo/MiMo-V2.5-Pro`; local SGLang/vLLM deployment documented. Artificial Analysis lists serving providers (Xiaomi, GMI, Novita, DeepInfra, Zyphra) plus OpenRouter. **No OpenCode Zen Free ID is verified** for this model.
- **Release / knowledge:** Announced and open-sourced **2026-04-27**. **No knowledge cutoff is stated on the model card** — an unchanged gap.
- **Deprecation — confirmed and imminent:** Xiaomi's API docs mark `mimo-v2.5-pro` and `mimo-v2.5` **taken offline at 10:00 Beijing time on 2026-10-21**, with migration recommended to the V2.6 series. Named successors: `mimo-v2.6-pro`, `mimo-v2.6-flash`, `mimo-v2.6-pro-ultraspeed`; Xiaomi recommends **`mimo-v2.6-pro`** for complex, long-horizon, high-value work. **Days remaining: 11.**
- **IDs:** `mimo-v2.5-pro`; `XiaomiMiMo/MiMo-V2.5-Pro`; OpenRouter `xiaomi/mimo-v2.5-pro`.
- **Context window:** **1,048,576 tokens / 128,000 maximum output** (Xiaomi official model page). Rate limits 100 RPM, 10M TPM. Self-hosted deployment uses `--context-length 1048576`; the Base checkpoint is 256K.
- **Modalities:** Official model page lists **Input Modality: Text / Output Modality: Text**, with deep thinking, tool calls, streaming, web search, structured output, and context caching. Xiaomi's quick-start summary table separately claims "Full-modal Understanding" for `mimo-v2.5-pro`; **this conflicts with the model-specific spec page and still has no supporting benchmark** — two passes later it remains unverified, so it is not treated as multimodal support. Output is text only regardless.
- **Pricing (verified 2026-10-10):** Xiaomi official **$0.435 per 1M input (cache miss) / $0.87 per 1M output**, with **$0.0036 cached reads** (¥3 / ¥6 / ¥0.025). Aggregators: Novita $0.52/$1.04, DeepInfra $1.00/$3.00, GMI ~$0.35/$0.70. Paid model; **no free tier is verified.**
- **Speed / latency:** Output **36.5 t/s** and 2.29 s median first-chunk latency on Xiaomi first-party; provider spread 35.4 t/s (Novita) to 81.2 t/s (Zyphra). **Time to first *answer* token is 57.0 s** on first-party, because thinking time is included — a significant practical latency for agentic use.
- **Architecture:** Open-weight MoE, **1.02T total / 42B active**; hybrid sliding-window/global attention at a 6:1 ratio with three-layer Multi-Token Prediction; **MIT licence**.

### Raw benchmarks found

**Official Xiaomi (launch page / model card):**

- Terminal-Bench 2.0 **68.4%**; τ³-bench Tool-Agent-User **72.9%**; Claw-Eval **63.8%** (Xiaomi reports 64% Pass³); GDPval-AA **Elo 1,265**
- **HLE 48%** / **HLE without tools 34%**
- SWE-bench Pro **57.2%**
- **Base-checkpoint 5-shot figures** (explicitly a different evaluation configuration, kept separate): MMLU 89.4%, MMLU-Redux 92.8%, **MMLU-Pro 68.5%**, **GPQA-Diamond 66.7%**, AIME 24&25 37.3%, SWE-Bench AgentLess 35.7%, HumanEval+ 75.6%, MBPP+ 74.1%
- Long context: **GraphWalks 0.56 BFS / 0.92 Parents at 512K** and **0.37 / 0.62 at 1M** (the two subtasks are separate)

**Independent — new this pass:**

Agent / tool use — **the gap between Xiaomi's figures and independent agentic measurement is wide:**

- **τ²-bench: 94.2%** (Artificial Analysis) — *strong, and on the same model*
- **APEX-Agents-AA: 2.4%** — *near-total failure; the lowest single figure recorded for any model in this batch*
- **AA Agentic Index: 22.7%**; **GDPval-AA: 31.2%** (normalised) against Xiaomi's **Elo 1,265**
- Terminal-Bench 2.1 (Vals AI) **57.3%**; Gert Labs **62.70%** — both confirm the prior pass's figures

Reasoning / knowledge — **three strong new results where the prior pass had nothing:**

- **AA-Omniscience Index: +3.3%**; **Accuracy: 22.4%**; **Hallucination Rate: 24.7%** — **the second-lowest hallucination rate measured in this research effort, behind only GLM-5.2's 26.3%**
- **HLE: 48% (Xiaomi) / 35.7% (AA)**; **GPQA Diamond: 86.6% (AA) / 82.6% (Vals AI)**; **MMLU-Pro: 84.6%** (Vals AI)
- **AA-Intelligence Index: 26.0**; **AA-LCR: 79.7%**; **IFBench: 79.9%**
- **CritPt: 4.0%** — *the one weak new figure*

Coding:

- **AA Coding Index: 60.2%**; **AA-SciCode: 50.6%**; SWE-bench **74.0%** (Vals AI); LiveCodeBench **81.4%** (Vals AI)

Multimodal: **Design Arena Website 1,273 Elo** (OpenRouter) — a text/code output signal, not a native image capability.

**BenchLM composite: 53.01/100, #84 of 889** (30 of 625 benchmarks). Xiaomi family: **MiMo-V2.6-Pro 74.15**, MiMo-V2.6-Flash 66.03, MiMo-V2-Pro 53.60, MiMo-V2-Omni 50.52, MiMo-V2-Flash 40.89. **MiMo-V2.6-Pro outscores this model by 21 points.**

Sources consulted: [BenchLM MiMo-V2.5-Pro (updated 2026-10-10)](https://benchlm.ai/models/mimo-v2-5-pro), [Xiaomi MiMo-V2.5-Pro launch page](https://mimo.xiaomi.com/mimo-v2-5-pro), [official Hugging Face model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.5-Pro/raw/main/README.md), [Xiaomi MiMo model page](https://mimo.mi.com/models/en-US/mimo-v2.5-pro), [Xiaomi model/deprecation summary](https://mimo.mi.com/docs/en-US/quick-start/summary/model), [Xiaomi pay-as-you-go pricing](https://mimo.mi.com/docs/price/pay-as-you-go), [Vals AI MiMo-V2.5-Pro](https://www.vals.ai/models/xiaomi_mimo-v2.5-pro), and [Artificial Analysis MiMo-V2.5-Pro](https://artificialanalysis.ai/models/mimo-v2-5-pro), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 68/100.** **Down from 91 — a 23-point correction.** The prior 91 was computed from Xiaomi's launch figures — Terminal-Bench 2.0 68.4%, τ³-bench 72.9%, Claw-Eval 63.8% — plus "1,000+ tool-call demonstrations," and explicitly noted that "GDPval and MCP rows" were missing. **Both now exist and both are poor: APEX-Agents-AA 2.4%** — the lowest single figure recorded for any model in this research effort — **and an AA Agentic Index of 22.7%**, with **GDPval-AA at 31.2% normalised** against Xiaomi's own **Elo 1,265**. **τ²-bench at 94.2% is excellent and is credited**, and it is the same model; but a 94.2% telecom-domain score alongside a 2.4% APEX-Agents score is the **third instance in this batch** of that exact pattern (after Muse Glimmer 30B and Mistral Medium 3.5). Narrow-domain agentic benchmarks reward models tuned for that domain and say very little about agency.
- **Reasoning: 82/100.** Down from 88. **This dimension improves in evidence even as the score falls, and the model has a genuinely distinguishing strength: a Hallucination Rate of 24.7% with a positive Omniscience Index of +3.3%** — second only to GLM-5.2 across this entire research effort. Alongside that, **HLE at 48% (Xiaomi) / 35.7% (AA)** is strong, **GPQA Diamond 86.6% (AA) / 82.6% (Vals AI)**, **MMLU-Pro 84.6%**, and **IFBench 79.9%**. The reductions are specific. First, **CritPt at 4.0%** is a weak physics-reasoning result. Second, and correcting the prior pass's evidence base: its reasoning justification cited **Base-checkpoint 5-shot figures — GPQA-Diamond 66.7% and MMLU-Pro 68.5%** — which are a different evaluation configuration from the instruction-tuned model's production numbers; **independent measurement of the actual deployed model reads 86.6% and 84.6%**, a 20- and 16-point understatement. The prior score was simultaneously built on numbers too low and lacked any reliability data at all. **No knowledge cutoff is still published.**
- **Context window: 92/100.** Down from 95. **1,048,576 input / 128,000 output** is verified from Xiaomi's official page, and the model is unusually well-tested here: **GraphWalks at both 512K (0.56 BFS / 0.92 Parents) and 1M (0.37 / 0.62)** is a genuine retrieval-at-length test at two window lengths — very few models in this dataset have that — now joined by **AA-LCR 79.7%**. The small reduction reflects that **GraphWalks degrades noticeably from 512K to 1M** (0.56 → 0.37 BFS), so the 1M window is real but the quality at its far end is not equivalent to the quality at 512K.
- **Multimodal: 15/100.** Unchanged. The official model spec page is **text-in / text-out**. Xiaomi's summary table claims "Full-modal understanding," which **contradicts the model-specific spec page and still has no supporting benchmark after two research passes** — the prior pass flagged this exact conflict and it remains unresolved, so the claim is not credited. **Design Arena Website 1,273 Elo** measures text-and-code output quality, not non-text input. Xiaomi's **MiMo-V2-Omni** is the multimodal option in this family.
- **Coding: 76/100.** Down from 90. **SWE-bench Pro 57.2%**, **SWE-bench 74.0%**, **LiveCodeBench 81.4%**, and **SWE-Bench AgentLess 35.7%** support solid coding. The independent composite **AA Coding Index at 60.2%** and **AA-SciCode at 50.6%** are notably below the vendor figures, and the Base-checkpoint 5-shot results the prior pass leaned on (HumanEval+ 75.6%, MBPP+ 74.1%) are 2021-era suites. **SWE-bench Verified, Vibe Code Bench, and DeepSWE remain unpublished.** The prior 90 substantially overstated a model whose own SciCode sits at 50.6%.
- **Cost efficiency: 85/100.** Down from 88. The price is excellent and unchanged — **$0.435 / $0.87 with $0.0036 cached reads**, which is top-tier value for a 1M-context paid model, and MIT-licensed open weights add a self-hosting option. The reduction reflects two operational realities: **the first-party route goes offline in 11 days**, and **time to first answer token is 57.0 s** on Xiaomi's own infrastructure, which is a real cost in agentic latency even when the token price is low.
- **Overall Score: 66.6/100.** (68 + 82 + 92 + 15 + 76) / 5 = 333 / 5 = 66.6, down from 75.8. **Best fit: high-volume text reasoning where factual reliability is the binding constraint, and long-context work over 512K.** The specific claim: **a 24.7% hallucination rate and HLE 48% at $0.435/$0.87 is a rare combination** — this model can be used as a pipeline's fact-producing step with far less verification overhead than most of this dataset, and its GraphWalks coverage at two window lengths is better long-context evidence than most 1M models offer. **Three hard limits.** First, **APEX-Agents 2.4% and Agentic Index 22.7%** — it is not an autonomous agent despite the launch positioning and the 1,000+ tool-call demonstrations, which measure tool-call *format* consistency rather than task completion. Second, **it is offline on 2026-10-21 — 11 days.** Third, **CritPt 4.0%** means its scientific reasoning is weak despite HLE 48%. **Migrate now, not later:** `mimo-v2.6-pro` is named by Xiaomi as the replacement and outscores this model by 21 points on BenchLM (74.15 vs 53.01).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of BenchLM's MiMo-V2.5-Pro profile, Xiaomi's official launch page, model page, model/deprecation summary and pay-as-you-go pricing, the official Hugging Face model card, Vals AI's MiMo-V2.5-Pro leaderboards, and Artificial Analysis's MiMo-V2.5-Pro benchmark rows; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note — **this report corrects the prior pass's evidence base in both directions.** Upward on reliability, where the prior pass recorded five explicit gaps and the arrival of **Hallucination Rate 24.7% with a +3.3% Omniscience index** is the second-strongest reliability result in this entire research effort. Downward on agentic, where the prior pass recorded "GDPval and MCP rows" as missing and they now read **APEX-Agents 2.4%** (lowest of any model in this batch) and **Agentic Index 22.7%**, driving Tool use from 91 to 68. **A separate methodological error in the prior pass is corrected:** its Reasoning justification cited **Base-checkpoint 5-shot figures (GPQA 66.7%, MMLU-Pro 68.5%)**, which are a different evaluation configuration from the deployed instruction-tuned model — independent measurement of the actual model reads **86.6% and 84.6%**, so the prior report both under-cited and lacked reliability data. **The Xiaomi "Full-modal understanding" claim is now in its second consecutive pass contradicting the model-specific spec page with no benchmark, and is again not credited.** The **2026-10-21 offline date is re-confirmed and now carries urgency — 11 days** — and Cost is reduced accordingly. This is the **third model in this batch showing a 90%+ τ-bench score alongside a near-floor general agentic index**, after Muse Glimmer 30B and Mistral Medium 3.5; that pattern is now well established and treated as a rule. Search-provider rate limiting (HTTP 429) persisted, so evidence came from three direct primary retrievals plus cited leaderboards rather than three discrete searches.
- Future sources: add a new file next to this one, e.g. `MiMo_V2_5_Pro_Recheck.md`, using the same headings.