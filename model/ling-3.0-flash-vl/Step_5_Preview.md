# Ling-3.0-flash-VL — findings by Step 5 Preview

- Source: inclusionAI / Ant Group (`Ling-3.0-flash-VL`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-flash-VL (inclusionAI, Ant Group)
- **Short description:** The first vision-capable checkpoint in the Ling-3.0-flash family (released 2026-09-04, MIT open weights): the same 124B sparse MoE reasoning backbone as Ling-3.0-flash — 124.8B total, only 5.5B active per token (512 routed experts, 8 activated + 1 shared), 42-layer hybrid KDA/Gated-MLA backbone at 5:1 — extended with a ViT visual encoder, a two-layer MLP projector and VideoRoPE for spatial + temporal encoding. Ant's pitch is vision-in-the-loop, not image captioning: an "Observe → Act → Verify → Correct" cycle for GUI automation, image-to-web code generation and medical-report reading. Demos show it writing a website from a reference screenshot, rendering it in a browser, comparing against the reference and revising — and operating UIs via clicks/typing/scrolling.
- **Provider / access:** Open weights on Hugging Face/ModelScope (BF16 ~255GB, FP8 ~128GB with the vision tower kept in bf16, FP4/INT4 planned); Ant Ling platform API (`-rc1`); OpenRouter via NovitaAI and DeepInfra (free hosted trial at launch); SGLang and inclusionAI's vLLM fork with `ling3` reasoning/tool-call parsers.
- **Release:** 2026-09-04 (FP8 quantization 2026-09-08).
- **Context window:** 256K native (262,144 tokens; advertised "up to 1M", but the only documented serving recipes exercise 256K via YaRN — plan on 256K). Video input is capped at 30 s / 2 fps / 32 frames / one video per request; up to 40 images per request, 32MB max body.
- **Modalities:** Text, image and video in → text out. Thinking on by default; recommended sampling temperature 0.6 / top-p 0.95 / top-k 20 (AA-protocol evals used temperature 1.0).
- **Pricing (as of 2026-10-09):** no official VL rate card published; the text sibling lists ~$0.075/M input and $0.22/M output on the Ant platform (¥0.40/¥1.20 in the CN console), and Novita hosted the VL free at launch — MIT weights are self-hostable.
- **Architecture:** Sparse MoE, 5:1 KDA (Kimi-Delta-Attention) : Gated-MLA hybrid, ViT + MLP projector + VideoRoPE.

### Raw benchmarks found

Artificial Analysis (independent, listed on OpenRouter, index v4.x):

- Intelligence Index: **25** (v4.3; vendor card claims 42 under the older v4.1.1 protocol — unlisted by AA, treat as vendor figure; class median is 8 and it sits on the active-parameters Pareto frontier)
- Coding Index: **57.0**; Agentic Index: **28.7**
- GPQA Diamond: **86.2%**; HLE: **22.0%**; AA-LCR: **78.3%**
- τ-Bench Banking: **34.4%**; GDPval-AA: **33.2%**; AutomationBench-AA: **16%**
- SciCode: **44.2%**; Terminal-Bench 2.1: **64.4%** (AA protocol, Terminus 2, 3 runs); Terminal-Bench 4.0: **0.0%**
- CritPt: **2.0%**; AA-Omniscience: accuracy **14.3%**, non-hallucination rate **78.0%** (22% hallucination rate — conservative but weak on factual accuracy)

Vendor-reported multimodal table (vs Qwen3.8-27B xhigh, Gemini 3.5 Flash-Lite high, Kimi-K2.6 thinking; partly run on inclusionAI's own harness, not yet independently reproduced):

- MMMU-Pro: **79.0**; MathVision: **84.87**; CountBench: **97.33**; WorldVQA: **45.67**
- OmniDocBench1.5: **91.35** (leads its comparison field); CharXiv_RQ: **81.3**; MMSearch: **79**
- Agentic multimodal: WebVoyager: **90.83** (leads field), ClawEval-MM: **59.9** (leads field), Vision2Web: **57.69**
- HLE-MM: **19.88**; AntBench-Medical: 0.96/0.93 (in-house, "to be released later")

Not published: text-side SWE-bench/Terminal-Bench splits for the VL checkpoint itself, and any independent (non-vendor) run of the multimodal chart.

### Normalized scores (1–100)

- **Tool use: 58/100.** WebVoyager 90.83 and ClawEval-MM 59.9 show genuine GUI-agent ability (leading the vendor's comparison field on both), but the general agentic suites are mid-band: τ-Bench Banking 34.4%, GDPval-AA 33.2%, Agentic Index 28.7, AutomationBench 16% — strong at reading-and-clicking interfaces, average on general tool workflows.
- **Reasoning: 58/100.** GPQA Diamond 86.2% is solidly mid-to-upper-band and AA Intelligence Index 25 puts it first among similar-size open models (class median 8); HLE 22.0%, AA-Omniscience 14.3% accuracy (though a low 22% hallucination rate) and CritPt 2.0% hold it mid-band.
- **Context window: 74/100.** 256K practical context sits in the 200K–500K band (65–84), supported by AA-LCR 78.3%; the advertised 1M figure has no documented serving recipe or retrieval result behind it yet.
- **Multimodal: 88/100.** Text + image + video input → text out is the 75–90 band, and the results justify the top of it: OmniDocBench 91.35, WebVoyager 90.83, MMMU-Pro 79.0, plus the closed observe-act-verify-correct loop; docked because every multimodal number is vendor-run and video is capped at 30 s / 32 frames.
- **Coding: 66/100.** TB2.1 64.4% (AA protocol) and SciCode 44.2% are respectable for a 5.5B-active model, with the text sibling claiming open-source SOTA on SWE-bench Verified — but TB 4.0 0.0%, Coding Index 57.0 and the unpublished text-side splits keep it below the frontier band.
- **Cost efficiency: 96/100.** MIT open weights with only 5.5B activated per token (servable on 2–4 141GB-class GPUs or a 2–4 GPU Blackwell node), free hosted routes on Novita at launch, and a sibling rate card around $0.075/$0.22 per million tokens — near the top of the cheap tier.
- **Overall Score: 69/100.** Best-fit recommendation: the cheap open-weights pick for visual agents — screenshots-to-code, GUI operation and document/chart work on a 5.5B-active budget; buy it for pixels-into-action workloads, and wait for independent confirmation of the vendor's multimodal table.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Ant Ling developer docs + HF model card, Artificial Analysis via OpenRouter, AI/TLDR benchmark tables, OrcaRouter and RuntimeWire launch analyses); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Ling_4.md`, using the same headings.
