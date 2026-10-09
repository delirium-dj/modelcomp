# Qwen3.5-397B-A17B — findings by Step 5 Preview

- Source: Alibaba Qwen (`Qwen3.5-397B-A17B`, weights `Qwen/Qwen3.5-397B-A17B`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B-A17B (first model of the Qwen3.5 family, 2026-02-16)
- **Short description:** Alibaba's flagship open-weights model and the first Qwen with native vision — a hybrid Gated-DeltaNet + sparse-MoE architecture (60 layers, 15 × (3 Gated-DeltaNet + 1 Gated-Attention), 512 experts with 10 routed + 1 shared activated) that unifies the previously separate Qwen3 (text) and Qwen3-VL (vision) lines through early-fusion multimodal training. 397B total / 17B active per token, 262,144 native context (extensible to ~1M via YaRN; the hosted Qwen3.5-Plus variant ships 1M by default), 81,920 max output, 201 languages, MTP-trained. Artificial Analysis scored it 45 on the Intelligence Index at release — #3 among open-weights models behind GLM-5 (50) and Kimi K2.5 (47) — with a +16-point jump over Qwen3-235B driven by agentic gains (GDPval-AA Elo 1,221, +361). Its decoding runs 8.6–19× faster than Qwen3-Max at 32K–256K context.
- **Provider / access:** Open weights (Apache 2.0) on Hugging Face/ModelScope; Alibaba Cloud Model Studio API (Qwen3.5-Plus is the hosted 1M-context variant); OpenRouter via 7+ providers (Alibaba, DeepInfra, Novita, AtlasCloud, Parasail, Phala, Venice, GMICloud, StreamLake, DigitalOcean).
- **Release:** 2026-02-15/16.
- **Context window:** 262,144 tokens native (~1,010,000 via YaRN).
- **Modalities:** Text, image and video in → text out; reasoning and non-reasoning modes; function calling; JSON mode.
- **Pricing (as of 2026-10-09):** $0.39–0.60/M input, $2.34–3.60/M output across providers (blended ~$1.25–1.35/M; DeepInfra cheapest at $0.45–0.54 in / $3.00–3.40 out); Apache-2.0 weights free to self-host.
- **Architecture:** Gated DeltaNet + sparse MoE hybrid, 397B/17B active, MTP multi-step training.

### Raw benchmarks found

Vendor (HF model card, thinking mode):

- MMLU-Pro **87.8**; MMLU-Redux 94.9; SuperGPQA 70.4; C-Eval 93.0
- GPQA Diamond **88.4**; HLE 28.7 (37.6 HLE-Verified); HLE w/ tools 48.3
- LiveCodeBench v6 **83.6**; HMMT Feb 25 94.8 / Nov 25 92.7; IMOAnswerBench 80.9; AIME26 **91.3**
- IFEval 92.6; IFBench **76.5**; MultiChallenge 67.6
- AA-LCR 68.7; LongBench v2 63.2
- BFCL-V4 **72.9**; TAU2-Bench **86.7**; VITA-Bench 49.7; DeepPlanning 34.3; Tool Decathlon 38.3; MCP-Mark 46.1
- BrowseComp 69.0 (78.6 with discard-all strategy); BrowseComp-zh 70.3; WideSearch 74.0; Seal-0 46.9
- SWE-bench Verified **76.4**; SWE-Multilingual 69.3; SecCodeBench 68.3; Terminal-Bench 2 52.5
- Vision: MMMU 85.0; MMMU-Pro **79.0**; MathVision 88.6; MathVista 90.3; We-Math 87.9; OmniDocBench 1.5 **90.8**; OCRBench 93.1; CharXiv 80.8; CountBench 97.2; VideoMME 87.5; MLVU 86.7
- Visual agents: OSWorld-Verified **62.2**; ScreenSpot-Pro 65.6; AndroidWorld 66.8; V* 95.8 (with code interpreter)

Third-party:

- Artificial Analysis: Intelligence Index 45 at launch (#3 open weights); current-index runs 21.4; GPQA Diamond 89.3% (thinking) / 86.1%; HLE 29.0%; IFBench 78.8%; MMMU-Pro 77.3%; AA-LCR 77.3%; SciCode 44.8%; TB 2.1 51.3%; TB Hard 40.9%; τ²-Telecom 95.6%; τ³-Banking 13.4%; GDPval-AA v2.1 14.8%; AA-Omniscience −32 (88% hallucination rate)
- Epoch AI: GPQA Diamond 86.4%; FrontierMath T1-3 31.2%; OTIS Mock AIME 88.9%
- LMArena: 1,464 hard-prompts Elo; 1,491 coding; 1,400 WebDev
- BenchLeader Index 55.2 (#217 of 759): reasoning 44, agents & tools 56, knowledge 48, instruction following 76, multimodal 60, long context 64

### Normalized scores (1–100)

- **Tool use: 66/100.** TAU2-Bench 86.7% and BFCL-V4 72.9% (vendor) with AA confirming τ²-Telecom 95.6% — upper-mid tool use — but Tool Decathlon 38.3%, MCP-Mark 46.1%, τ³-Banking 13.4%, GDPval 14.8% and AA Agentic Index mid-teens show uneven agentic reliability outside telecom/retail.
- **Reasoning: 74/100.** GPQA Diamond 88.4–89.3%, AIME26 91.3%, LiveCodeBench 83.6% and MMLU-Pro 87.8% are upper-mid-band (the best open-weights reasoning trio after GLM-5/K2.5); HLE 28.7% and CritPt 1.7% cap it below the frontier tier.
- **Context window: 74/100.** 262K native (1M via YaRN/hosted) is the 200K–500K band (65–84) with AA-LCR 68.7–77.3% and LongBench v2 63.2% — good, verified retrieval, but a quarter of the 1M frontier norm on weights.
- **Multimodal: 84/100.** Text + image + video in → text out is the 75–90 band, near its top: MMMU-Pro 79.0%, MathVision 88.6%, OmniDocBench 90.8%, OCRBench 93.1%, VideoMME 87.5% and OSWorld-Verified 62.2% — the strongest open-weights vision profile, and no audio input keeps it out of the 90+ band.
- **Coding: 72/100.** SWE-bench Verified 76.4%, SWE-Multilingual 69.3%, SecCodeBench 68.3% and LiveCodeBench 83.6% are strong open-weights coding; Terminal-Bench 2 52.5% (AA 2.1: 51.3%), TB Hard 40.9% and SciCode 44.8% keep it below the frontier band.
- **Cost efficiency: 90/100.** $0.39–0.60/M input and $2.34–3.60/M output (blended ~$1.25) with Apache-2.0 weights, 17B active parameters and 8.6–19× faster decoding than Qwen3-Max — the methodology's ~$0.6/$2.2 ≈ 92 range, high but not top-tier by 2026 Chinese-flash pricing.
- **Overall Score: 74/100.** Best-fit recommendation: the most balanced open-weights flagship of early 2026 — frontier-adjacent reasoning, coding and the best open vision-language profile at 17B active, Apache-2.0 and self-hostable; hallucination (88% rate on AA-Omniscience) is its one serious flaw.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Qwen Hugging Face model card + README, Artificial Analysis launch article and current index, BenchLeader, DeepInfra/Together provider benchmarks, Vector Wire, AI Atlas); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_4.md`, using the same headings.
