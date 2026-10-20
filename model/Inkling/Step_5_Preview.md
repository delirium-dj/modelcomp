# Inkling — findings by Step 5 Preview

- Source: Thinking Machines Lab (`thinkingmachines/Inkling`, weights `thinkingmachines/Inkling` on Hugging Face)
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (2026-07-15 — Thinking Machines Lab's first from-scratch model and first open-weights release)
- **Short description:** Mira Murati's lab shipped the model Western teams had been asking for: a competitive **U.S. open-weights** alternative to the Chinese open frontier. A 975B-parameter MoE (41B active; 256 routed + 2 shared experts, 6 per token) trained on 45T tokens of text/images/audio/video on GB300 NVL72 systems, with **native** multimodal reasoning (audio and vision reasoned over directly, not bolted-on encoders), a 1M-token context, and controllable thinking effort (a system-message effort dial from 0.2 to 0.99 trained with a per-token length cost). Thinking Machines openly says it is "not the strongest overall model available today" — it is built as an Apache-2.0 base for customization on Tinker — and Artificial Analysis still scored it the **leading U.S. open-weights model at release** (Intelligence Index 41 on v4.1, +3 over Nemotron 3 Ultra, well ahead of Gemma 4 31B's 29 and gpt-oss-120b's 24). Its real edge is token efficiency: ~25K output tokens per Intelligence-Index task vs 37–43K for GLM-5.2/Kimi K2.6/DeepSeek V4 Pro, and it matches Nemotron 3 Ultra on Terminal-Bench at a third of the tokens. It even leads the field on ForecastBench calibration (Brier 61.1).
- **Provider / access:** Open weights (Apache 2.0, incl. an NVFP4 checkpoint) on Hugging Face; Tinker API (fine-tuning + inference); Together, Fireworks, Modal, Databricks, Baseten, DeepInfra, BaseTen.
- **Release:** 2026-07-15 (Inkling-Small, 276B/12B-active, followed 2026-07-30 and matches or beats it on several evals).
- **Context window:** 1M tokens (open weights; 64K/256K tiers on Tinker; one tracker recorded a 524K serving limit in Sept 2026).
- **Modalities:** Text, image and audio in → text out.
- **Pricing (as of 2026-10-09):** Tinker $1.00–$1.87/M input (80%-discounted cache reads), $4.05–$4.68/M output, $5.61–$11.23 training; cheapest third party $0.95/$4.05 (DeepInfra); weights free under Apache 2.0.
- **Speed:** 223.0 tok/s (AA, 2026-10-19 — re-measured up from 141.5); TTFT 1.73s; AA's blended (7:2:1) rate is $0.72/M.

### Raw benchmarks found

Vendor (Thinking Machines model card, effort=0.99, temperature 1.0; coding evals with 256K trajectory limit):

Reasoning:

- HLE (text only): **29.7%** (Nemotron 3 Ultra 26.6, Kimi K2.5 29.4, GLM 5.2 40.1, DeepSeek V4 Pro 35.9, Gemini 3.1 Pro 44.7, Fable 5 53.3)
- HLE (with tools): **46.0%**; AIME 2026: **97.1%**; GPQA Diamond: **87.2%**
- ARC-AGI-1: **79.5%** / ARC-AGI-2: **36.5%** (from the Inkling-Small comparison table)

Agentic:

- SWE-bench Verified: **77.6%** (bash-only harness; Nemotron 70.7, GLM 5.2 80.0, Fable 5 95.0)
- SWE-bench Pro (Public): **54.3%**; Terminal-Bench 2.1 (best harness): **63.8%** (Nemotron 56.4, GLM 5.2 82.7, Fable 5 84.6)
- GDPval-AA v2: **1,238 Elo** (Kimi K2.6 1,190, DeepSeek V4 Flash 1,189, GLM 5.2 1,514, Fable 5 1,760)
- MCP Atlas: **76.0%** (Nemotron 44.7, GLM 5.2 77.8); τ³-Banking: **23.7%**; Toolathlon-Verified: **45.5%**; BrowseComp (w/ ctx mgmt): **77.1%**
- ForecastBench (calibration): **Brier 61.1** — leads the field (GPT-5.5 59.1, Gemini 3.1 Pro 61.1, Grok 4.3 61.7 cited as the leader elsewhere)

Factuality / chat / multimodal / audio:

- SimpleQA Verified: **43.9%**; AA-Omniscience index **+2.1** (40% accuracy, 63% hallucination rate)
- IFBench: **79.8%**; Global-MMLU-Lite: **88.7%**
- MMMU-Pro (Standard 10): **73.5%**; CharXiv RQ: **78.1%** (82.0% with Python)
- Audio MC: **56.6%**; MMAU: **77.2%**; VoiceBench: **91.4%**

Third-party:

- Artificial Analysis: Intelligence Index **41** (v4.1; leading U.S. open-weights release) / 25 on the current index; 223.0 tok/s; $1.00/$4.05 measured
- BenchLM composite (2026-10-19): **52.61/100** overall, #90 of 956 models, 49 of 644 benchmarks covered
- New independent rows (2026-10-19): AA Agentic Index **24.3%** (weak), GDPval-AA **28.8% normalized / Elo 1,076** (AA — below the vendor Elo 1,238), AA AutomationBench **5.0%**, AA Terminal-Bench 4.0 **1.0%**, Terminal-Bench 2.1 (Vals) **47.6%** (below the 63.8% vendor row), AA AnalystAgent **23.8%**, AA Tau3 Banking **29.1%**, AA Briefcase **Elo 832** (very weak), AA TB2.1 **55.1%**, GDP.pdf **12.8%**, CWE-bench v1 **37.0%**, FrontierSWE v2 **4.1%**, AA Coding Index **52.1%**, LiveCodeBench (Vals) **85.5%**, SWE-bench (Vals) **77.6%**, AA-LCR **77.3%** (first published long-context measure — fills the file's MRCR gap), CritPt **5.4%**, MLCR-AA **12.2%**, AA-Omniscience index **2.0%** / accuracy 41.6% / hallucination 67.7%, MMLU-Pro (Vals) **86.3%**, Epoch FrontierMath v2 Tiers 1–3 **33.3%** / Tier 4 **4.9%** (weak math), Design Arena Website **1224**, Design Arena Agentic Web Dev **1257**, MCP Atlas **74.1%** (AA — just below the vendor 76.0%), AA EnterpriseOps-Gym **38.0%**
- Token efficiency: ~25K output tokens per Index task vs 43K (GLM-5.2 max), 38K (Kimi K2.6), 37K (DeepSeek V4 Pro max)
- Model Beat tracker: GPQA 88.3%, HLE 31.9%, SciCode 47.0%, SimpleQA 40.3%, ARC-AGI 79.5%, APEX 33.8%
- Disclosure caveat: the post-training bootstrap relied on a competitor's model (Kimi K2.5), a dependency Thinking Machines says it wants to shed

### Normalized scores (1–100)

- **Tool use: 62/100.** MCP Atlas 74.1–76.0% and BrowseComp 77.1% (vendor) remain decent, but the third pass measured the agentic suites the file lacked and they are weak: AA Agentic Index 24.3%, GDPval-AA 28.8% (Elo 1,076 on AA's scale, below the vendor 1,238), AA AutomationBench 5.0%, AA TB4.0 1.0%, AA AnalystAgent 23.8%, AA Briefcase Elo 832, TB2.1 (Vals) 47.6%. Trimmed from 74 — the vendor search/tool rows do not carry to the independent agentic composites.
- **Reasoning: 80/100.** GPQA Diamond 87.2–88.3%, AIME 2026 97.1%, AA Intelligence Index 41 (leading U.S. open weights) and the field's best ForecastBench calibration are upper-band; HLE 29.7–31.9% and ARC-AGI-2 36.5% hold it below the closed frontier (Fable 5's 53.3% HLE).
- **Context window: 88/100.** A 1M-token window is the ≥1M band (95–100); docked because no MRCR/RULER curve is published and some serving routes capped it at 524K in September 2026.
- **Multimodal: 88/100.** Text + image + **audio** in → text out is the 90–100 band, and the numbers back the top half: native (not encoder-bolted) multimodal pretraining, MMMU-Pro 73.5%, CharXiv 78.1–82.0%, VoiceBench 91.4%, MMAU 77.2% — docked within the band only because there is no non-text output.
- **Coding: 72/100.** SWE-bench Verified 77.6% (bash-only harness), SWE-Pro 54.3%, TB 2.1 63.8% and SciCode 47.0% are solid open-weights coding — and it beats Nemotron 3 Ultra on TB at a third of the tokens — but GLM 5.2 (82.7 TB) and Fable 5 (95.0 SWE-V) are clearly ahead.
- **Cost efficiency: 93/100.** Apache-2.0 weights are free to self-host, with hosted routes at $0.95–$1.00/$4.05 and 80%-discounted cache reads — and the efficiency story (25K tokens/task vs 37–43K) makes the effective cost better than the rate card. AA flags it as expensive for open weights at $1.00/$4.05 list.
- **Overall Score: 78/100.** Mean of the five non-cost dims (62+80+88+88+72)/5 = 78.0 (Tool use 74→62 on the newly measured AA agentic composite; AA-LCR 77.3% supports Context 88). Best-fit recommendation: the best Western open-weights foundation for customization — native text/image/audio reasoning, 1M context, Anthropic-grade efficiency and Apache 2.0; not the raw-score leader (Fable 5/GPT-5.6 win most columns), which is exactly how Thinking Machines positions it.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) re-ran Artificial Analysis (Index 25 #32/121 — unchanged; output speed re-measured at 223.0 tok/s, up from 141.5; $1/$4.05 confirmed, blended $0.72/M) and BenchLM (composite 52.61/100, #90/956, 49/644 benchmarks): the file's agentic gaps are now measured and weak — AA Agentic Index 24.3%, GDPval-AA Elo 1,076, AA AutomationBench 5.0%, AA TB4.0 1.0%, AA Briefcase Elo 832 — so Tool use was trimmed 74→62 (Overall 80→78); AA-LCR 77.3% fills the long-context gap (Context held at 88) and the weak FrontierMath v2 (33.3%/4.9%), CritPt 5.4% corroborate the Reasoning reasoning-band placement. Second-pass verification (2026-10-10): benchmarklist.com has no standalone Inkling page; the AA launch analysis, Model Beat rows and Tinker pricing confirmed the then-existing reads. Prior pass (2026-10-09) used Thinking Machines launch posts + model card, Artificial Analysis launch analysis, Tinker pricing docs, Awesome Agents/Raschka/Model Trackers.
- Future sources: add a new file next to this one, e.g. `Inkling_2.md`, using the same headings.
