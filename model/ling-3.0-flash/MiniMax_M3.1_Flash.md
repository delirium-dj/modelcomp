# Ling 3.0 Flash — findings by MiniMax M3.1 Flash

- Source: inclusionAI (Ling 3.0 Flash), `inclusionAI/Ling-3.0-flash`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash
- **Short description:** InclusionAI's August 2026 open-weight (MIT) reasoning MoE — 124B total / 5.1B active, hybrid linear/attention architecture, 262K context, 316 tok/s on the first-party API and a $0.075/$0.22 price, with GPQA 85.0%, LiveCodeBench 82.8% and SWE-bench Pro 56.6% (vendor numbers).
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash` (MIT; `-base`, `-fp8`, `-int4`, `-fp4`, `-GGUF` variants), OpenRouter `inclusionai/ling-3.0-flash` (**$0.021/$0.063** list on some routes, $0.075/$0.22 on others), InclusionAI's own API, Vercel, llmgateway, nano-gpt. **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-08-02** (HF repo created) / 2026-08-04 (AA) / 2026-07-23 (Vals AI) — conflicting dates, all cited. Knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash` (HF), `inclusionai/ling-3.0-flash` (OpenRouter, models.dev).
- **Context window:** **262,144** tokens (`max_position_embeddings` 262144; AA "260k"), text-only in/out.
- **Modalities:** text in / text out only (the vision sibling is Ling 3.0 Flash VL).
- **Pricing (as of 2026-10-20):** **$0.075/M in, $0.22/M out, $0.015/M cached** (AA and the first-party API); OpenRouter and Vercel list **$0.021/$0.063**; llmgateway $0.06/$0.18; nano-gpt $0.075/$0.22. Self-host $0 (MIT).
- **Architecture:** hybrid-linear MoE `BailingMoeV3ForCausalLM` — 35 KDA + 7 Gated MLA layers (5:1), 42 layers, 512 routed + 1 shared expert (8 active), hidden 2560, vocab 157,184, MTP speculative decoding, context schedule 8K→32K→256K.

### Raw benchmarks found

> Vendor card figures against Vals AI's independent runs and the Artificial Analysis composite; the biggest gap is SkillsBench.

Reasoning / knowledge:

- GPQA Diamond: **85.0%** (vendor) / **84.85%** (Vals AI) / **85.45%** (AA)
- HLE: **22.7%** (vendor) / **23.7%** (AA) · AIME 2026: **93.2%** (vendor) · HMMT Feb 2026: **87.0%** · IMO-AnswerBench: **83.7%** (vendor)
- Artificial Analysis Intelligence Index: **20 (estimated)**, #5/67 in class · AA-LCR: **73.0%** · CritPt: **1.71%** · Coding Index **50.6** · Agentic Index **21.0** · GDPval-AA **947.38 / 22.4% normalized**
- Omniscience Index / Accuracy / Hallucination Rate: **−17.9 / 18.2% / 44.1%** (AA) · output speed **316.6 tok/s** (#2/28), TTFT 2.68s
- BenchLM composite: **45.07/100**, #125 of 972

Agent / tool use:

- Terminal-Bench 2.1: **57.0%** (vendor, Terminus 2, 2h timeout, 3 runs) / **50.19%** (Vals AI) — conflict flagged
- MCP-Atlas: **65.5%** (vendor) · BFCL v4: **73.0%** · Tau3-banking-AA: **28.0%** (vendor) / **27.2%** (AA) · AutomationBench partial: **3.2%** (AA) · BrowseComp: **72.2%** · DRACO: **70.4%** · WideResearch: **73.6%** (vendor)
- GDPval-AA: **1107** (vendor) / **947.38** (AA) · Terminal-Bench 4.0: **0%** (AA)

Coding:

- LiveCodeBench v5: **82.8%** (vendor) / **83.99%** (Vals AI) · SWE-bench: **65.2%** (Vals AI) · SWE-bench Pro: **56.6%** (vendor) · SWE-bench Multilingual: **72.4%** (vendor)
- SkillsBench: **44.8%** (vendor) vs **27.95%** (Vals AI) — conflict flagged · SciCode: **41.2%** (vendor) / **42.0%** (AA) · IFBench: **74.5%** (vendor) · Vibe Code Bench v1.1: **2.91%** (Vals AI) · Medical: MedScribe **80.9%** / MedCode **32.27%** (Vals AI)

Long context:

- MRCR at 128K/256K: **no verified public score found** — the model card presents results only as images; the closest public long-context figure is AA-LCR 73.0%.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 50.2–57.0%, MCP-Atlas 65.5%, BFCL v4 73.0%, BrowseComp 72.2% and DRACO 70.4% are mid, capped by τ³-banking 27.2%, AutomationBench 3.2% and Terminal-Bench 4.0 at 0%.
- **Reasoning: 70/100.** GPQA 84.9–85.5%, AIME 2026 93.2%, IMO-AnswerBench 83.7% and a 44.1% hallucination rate are solid, capped by HLE 22.7–23.7%, CritPt 1.71% and an AA Intelligence Index of 20.
- **Context window: 70/100.** 262,144 tokens is the 200K–500K tier and no MRCR/RULER retrieval figure is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 70/100.** LiveCodeBench 82.8–84.0%, SWE-bench 65.2%, SWE-bench Pro 56.6% and SWE-bench Multilingual 72.4% are mid-band, capped by Vibe Code Bench 2.91% and the SkillsBench gap (44.8% vs 27.95%).
- **Cost efficiency: 97/100.** $0.075/$0.22 on the first-party route — and as low as $0.021/$0.063 on OpenRouter/Vercel — makes this one of the cheapest capable open models, with MIT self-hosting free.
- **Overall Score: 57/100.** Mean of the five quality dims = (60 + 70 + 70 + 15 + 70) / 5 = 57.0 → **57**. Best fit: cheap high-throughput tool-using agents on open weights — and note the same base now ships as Ling 3.1 Flash with a much stronger measured profile.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (inclusionAI Hugging Face model card and config, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_3.1_Flash.md`, using the same headings.
