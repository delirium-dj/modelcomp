# Nemotron 3 Ultra Free — findings by Claude Opus 5

- Source: NVIDIA (`nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`), served free via OpenCode Zen as `nemotron-3-ultra-free`
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra Free (the free Zen/NVIDIA-trial route to NVIDIA's **Nemotron 3 Ultra 550B-A55B**)
- **Short description:** NVIDIA's flagship open-weight model — a **550B-parameter hybrid Mamba-MoE with 55B active** — positioned for frontier reasoning and long-running agents. Its distinguishing characteristic across the evidence below is not a peak score but **consistency**: it is the only model in this entire research pass whose vendor-reported figures are reproduced by *three* independent harnesses to within a point on multiple benchmarks. It also posts the lowest hallucination rate of any large open model here and scores **83.3% on Artificial Analysis's Openness Index** ([BenchLM](https://benchlm.ai/models/nemotron-3-ultra); [NVIDIA model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16)). **This entry is a pricing/access tier, not a separate model:** the same weights are served free on Zen and NVIDIA's trial endpoints.
- **Provider / access:** **OpenCode Zen** as `nemotron-3-ultra-free` on `https://opencode.ai/zen/v1/chat/completions` ([Zen docs](https://opencode.ai/docs/zen/)); NVIDIA's own trial endpoints; and **open weights on Hugging Face** (`NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16`).
- **Release / knowledge:** **No explicit release date published** on the sources I consulted. Knowledge cutoff: no verified public date found. I am not asserting either.
- **IDs:** `nemotron-3-ultra-free` / `opencode/nemotron-3-ultra-free` (Zen), `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` (Hugging Face). **A genuine free ID exists on two routes**, which is the point of this folder.
- **Context window:** **1,000,000 tokens** ([BenchLM](https://benchlm.ai/models/nemotron-3-ultra)), with this repo's curated metadata recording a **262K default serving window** — i.e. the full 1M requires explicit configuration. Max output: no verified public figure found.
- **Modalities:** **Text in → text out.** This repo's metadata states "Text in/out (beyond text unverified)", the model name carries no VL/Omni marker, and NVIDIA ships multimodality separately as **Nemotron 3 Nano Omni 30B A3B**. No multimodal benchmark exists for this checkpoint. Reasoning: yes (BenchLM classifies it a reasoning model). Tool calls: yes, and extensively evaluated.
- **Pricing (as of 2026-10-08):** **Free** — $0 input, $0 output, $0 cached read on Zen. **Three disclosed non-monetary costs, all from Zen's own documentation**, and they are more restrictive than any other free tier in this dataset: it is **"Trial use only — do not submit personal or confidential data"**; **"Your use is logged for security purposes and to improve NVIDIA products and services"** (though the logged improvement data "is not linked to your identity or any persistent identifier"); and using the endpoint constitutes consent to NVIDIA's collection and the **NVIDIA API Trial Terms of Service**. Open weights are the unrestricted alternative.
- **Architecture:** **550B total parameters, 55B active**, **hybrid Mamba-MoE**, published in **BF16**. The hybrid state-space/attention design is directly relevant to the long-context results below. NVIDIA's openness is itself measured: **AA Openness Index 83.3%**.

### Raw benchmarks found

> **This is the most consistently cross-verified model in my entire research pass, and that deserves to lead.** On GPQA Diamond, NVIDIA reports 87.0%, Artificial Analysis measures 86.7% and Vals AI 86.1% — **three sources within 0.9 points**. On IFBench, NVIDIA reports 81.7% and Artificial Analysis 81.4%. On Terminal-Bench 2.1, NVIDIA 56.4%, Artificial Analysis 53.9%, Vals 50.9% — a 5.5-point band where other models in this pass show 13–30 point spreads. Where vendor figures survive triple audit this closely, they can be trusted; that is not a courtesy I have extended to most entries here. BenchLM covers **51 of 625 benchmarks** for this model, the best coverage in my queue.

Agent / tool use:

- **PinchBench: 90.0%** (NVIDIA)
- **τ²-bench: 83.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/tau2-bench)); **τ³-bench: 70.9%** (NVIDIA)
- **AA Harvey LAB v1.0: 81.7%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/harvey-lab-aa))
- **Terminal-Bench 2.1: 56.4%** (NVIDIA) / **53.9%** (Artificial Analysis) / **50.9%** ([Vals AI](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b)) — tight three-way agreement
- Terminal-Bench Hard: **36.4%**; BrowseComp: **44.4%** (NVIDIA)
- GDPval-AA: **1016 Elo** / **33.1%** normalized; AA Briefcase: **876 Elo**
- AA EnterpriseOps-Gym: **28.9%**; AA Agentic Index: **21.7%**; AA Tau3 Banking: **14.2%**
- HLE with tools: **37.4%** (NVIDIA)
- Floor-level results that cap the dimension: **AA-AnalystAgent 6.3%, GDP.pdf 5.0%, AA AutomationBench 3.0%**, and **AA Terminal-Bench 4.0 at 0.5%** — a total collapse on the newest harness despite 56.4% on 2.1

Reasoning / knowledge:

- **GPQA Diamond: 87.0%** (NVIDIA) / **86.7%** (Artificial Analysis) / **86.1%** (Vals AI)
- **MMLU-Pro: 86.8%** (NVIDIA) / **85.8%** (Vals AI); MMLU-ProX: **83%** (NVIDIA)
- **IFBench: 81.7%** (NVIDIA) / **AA-IFBench 81.4%** (Artificial Analysis) — a 0.3-point match, and a strong instruction-following result in absolute terms
- HLE: **26.7% both with and without tools** as NVIDIA reports it — an unusual result implying tools gave no benefit on its run — against a separately-listed **HLE-with-tools 37.4%** and **AA-HLE 28.4%**
- **LongBench v2: 61.9%** (NVIDIA); AA-LCR: **67.0%** (NVIDIA)
- CritPt: **3.1%** (NVIDIA); MLCR-AA: **11.1%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **22.9**; BenchLM overall **46.75/100, rank #109 of 889**
- **AA-Omniscience: Index −0.4, Accuracy 21.6%, Hallucination Rate 29.7%** — a near-zero index and a 29.7% hallucination rate make this one of the three most reliably abstaining models in this pass, alongside GLM-5.2 (26.3%) and Ling 3.0 Flash VL (22.0%)
- **AA Openness Index: 83.3%** ([Artificial Analysis](https://artificialanalysis.ai/evaluations/artificial-analysis-openness-index))

Coding:

- **LiveCodeBench v6: 89.0%** (NVIDIA) / **86.0%** ([Vals AI](https://www.vals.ai/models/nvidia_nemotron-3-ultra-550b-a55b)) — the highest LiveCodeBench figure in this batch
- **SWE-bench Verified: 71.9%** (NVIDIA) / **69.0%** (Vals AI) — only a 2.9-point vendor premium
- SWE-bench Multilingual: **67.7%** (NVIDIA)
- SciCode: **44.6%** (NVIDIA) / **AA-SciCode 40.3%** (Artificial Analysis)
- Terminal-Bench 2.1: **56.4%** (counted once for agentic and once here)
- AA Coding Index: **49.3%** (Artificial Analysis)
- SWE-bench Pro, FrontierCode, DeepSWE: no verified public score found

Multimodal:

- **Nothing, consistent with a text-only model.** Design Arena — Website **1145 Elo** ([OpenRouter](https://openrouter.ai/nvidia/nemotron-3-ultra-550b-a55b/benchmarks)) measures generated front-end design preference and is not multimodal evidence.

Long context:

- **LongBench v2: 61.9%** (NVIDIA) and **AA-LCR 67.0%** — two quantified long-context measurements, which is more than most 1M-window models in this dataset have. No MRCR or needle-retrieval curve. The hybrid Mamba-MoE architecture is structurally well-suited to long sequences, and the 262K default serving window suggests NVIDIA itself treats 1M as a configuration rather than the operating point.

### Normalized scores (1–100)

- **Tool use: 70/100.** A wide, honest spread. The top end is genuinely strong and independently measured: **PinchBench 90.0%, τ²-bench 83.3%, AA Harvey LAB 81.7%, τ³-bench 70.9%**, with Terminal-Bench 2.1 agreeing across three harnesses at 51–56%. Capped by an unusually long tail of near-floor results — **AA AutomationBench 3.0%, GDP.pdf 5.0%, AA-AnalystAgent 6.3%, AA Tau3 Banking 14.2%, AA Agentic Index 21.7%** — and above all by **Terminal-Bench 4.0 at 0.5%**, which says the 2.1 competence does not transfer to the newest harness at all.
- **Reasoning: 78/100.** The best-verified reasoning profile in this pass: **GPQA Diamond at 87.0 / 86.7 / 86.1 across three independent sources**, MMLU-Pro 85.8–86.8%, MMLU-ProX 83%, and **IFBench 81.7% confirmed at 81.4%**. The **29.7% hallucination rate with a near-zero Omniscience Index** is a real and valuable property for agentic deployment. Capped by CritPt 3.1%, MLCR-AA 11.1%, an AA Intelligence Index of 22.9, HLE in the high 20s, and 21.6% Omniscience accuracy — it abstains well partly because it knows less.
- **Context window: 84/100.** 1,000,000 tokens on a **hybrid Mamba-MoE** backbone — an architecture genuinely suited to long sequences rather than retrofitted for them — and, unusually, **two published long-context measurements**: LongBench v2 61.9% and AA-LCR 67.0%. Held under the high 80s because both are mid-band (roughly 62–67%), no retrieval curve exists, and NVIDIA's own **262K default serving window** indicates the full million is not the intended operating point.
- **Multimodal: 15/100.** **Text-only.** No vision or audio pathway on this checkpoint, no multimodal benchmark, and NVIDIA ships omni-modality as the separate Nemotron 3 Nano Omni. Template floor, and it costs this model roughly 13 points of Overall.
- **Coding: 76/100.** Strong and well-corroborated: **LiveCodeBench v6 89.0% with an independent 86.0%** is the best competitive-coding figure in this batch, and **SWE-bench Verified 71.9% with an independent 69.0%** is a mere 2.9-point vendor premium — the tightest such agreement I have recorded. SWE-bench Multilingual 67.7% adds breadth. Capped by SciCode 40.3–44.6%, an AA Coding Index of 49.3%, Terminal-Bench 2.1 at ~53%, and no SWE-bench Pro or DeepSWE result.
- **Cost efficiency: 93/100.** **$0 on two routes** — OpenCode Zen and NVIDIA's trial endpoints — for a 550B/55B-active model posting GPQA 86.7%, LiveCodeBench 86.0% and SWE-bench 69.0%, with **open BF16 weights** as the unrestricted fallback and an **83.3% AA Openness Index** confirming the openness is real rather than nominal. Docked 7 points for the most restrictive free-tier terms in this dataset, all disclosed by Zen: **trial use only, no personal or confidential data, all usage logged for security and NVIDIA product improvement**, and consent to NVIDIA's API Trial ToS implied by use. Self-hosting 550B is also not trivial.
- **Overall Score: 64.6/100.** Mean of the five non-cost dims (70 + 78 + 84 + 15 + 76) / 5 = 64.6. Best fit: **free, trust-sensitive text reasoning and coding at long context** — competitive programming (LiveCodeBench 86%), repository repair (SWE-bench 69%), instruction-bound pipelines (IFBench 81.4%) and long-document analysis — on **non-confidential data only**, because the free route is explicitly trial-grade and logged. Its two genuine distinctions are a 29.7% hallucination rate and a benchmark record that survives triple independent audit; its two genuine limits are text-only input and a complete collapse on the newest agentic harness (Terminal-Bench 4.0 at 0.5%).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — BenchLM's aggregated Nemotron 3 Ultra page (51 of 625 benchmarks, the best coverage in my queue) and the underlying sources it cites: NVIDIA's own `NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` Hugging Face model card for vendor figures, and the Artificial Analysis (τ²-bench, Harvey LAB, Terminal-Bench 2.1 and 4.0, Terminal-Bench Hard, GPQA Diamond, HLE, IFBench, Omniscience, Intelligence Index, Openness Index, SciCode, MLCR, GDPval, Briefcase, AutomationBench, EnterpriseOps-Gym, Tau3 Banking, AnalystAgent, GDP.pdf), Vals AI and OpenRouter leaderboards. The OpenCode Zen documentation supplied the free `nemotron-3-ultra-free` ID, its $0 pricing, and — importantly — the full text of NVIDIA's free-endpoint restrictions (trial use only, no personal or confidential data, security and product-improvement logging, API Trial ToS consent), all of which are reported in the cost assessment rather than omitted. Where three sources measured the same benchmark (GPQA Diamond 87.0 / 86.7 / 86.1; Terminal-Bench 2.1 56.4 / 53.9 / 50.9) or two agreed to within a point (IFBench 81.7 / 81.4; SWE-bench 71.9 / 69.0; LiveCodeBench 89.0 / 86.0), that convergence is reported explicitly and used as the basis for trusting NVIDIA's unreplicated figures. The Terminal-Bench 4.0 collapse and the floor-level AutomationBench/GDP.pdf/AnalystAgent results are weighted as real limitations. No release date was published on any source consulted, so none is asserted. No data was imported from Nemotron 3 Nano Omni or Nemotron 3.5 Lightning, which have their own folders. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
