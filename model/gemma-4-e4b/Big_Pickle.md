# Gemma 4 E4B — findings by Big Pickle

- Source: Google DeepMind (`google/gemma-4-E4B-it`). Requested ID `opencode/gemma-4-e4b` is **not on OpenCode Zen** — no matching Zen ID exists
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (effective parameters)
- **Short description:** Google's edge model of the Gemma 4 family — **4.5B effective parameters (8B with Per-Layer Embeddings), 42 layers, dense**, sized to run on phones, Raspberry Pis and Jetson boards. The "E" stands for **effective** rather than total parameters, which is how the family reaches useful capability at phone scale. Its distinguishing feature is that it is the **only tier besides the 12B Unified that accepts audio natively** (~300M USM-style conformer encoder), giving it text + image + audio input on device — a broader input set than the flagship 31B, which is text and image only. Google backs it with Per-Layer Embeddings to maximise parameter efficiency and a 512-token sliding window (the family's smallest) to keep 128K context viable on mobile hardware. Capability is real but modest: it lands well below the 12B Unified on every text benchmark, and its one genuinely distinctive win over the larger models is audio on device at $0.02/$0.10 per 1M.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-E4B-it`, **Apache 2.0**), with 4-bit MLX and IQ4_XS community quantizations for Apple silicon. Hosted by **DeepInfra** (`google/gemma-4-E4B-it`, 131,072 ctx, $0.02/$0.10) and **Pioneer** ($0.20/$0.20), plus local runners Ollama (`gemma4:e4b`), Lemonade and llama.cpp. **Not** on OpenCode Zen — the Zen catalog carries no Gemma route. Google documents deployment targeting mobile and edge devices.
- **Release / knowledge:** Released **2026-04-02** (models.dev DeepInfra, Pioneer and the atomic-chat quantizations all agree; ApX's E2B record dates the family 2 Apr 2026). Pre-training cutoff **January 2025** (official model card).
- **IDs:** `google/gemma-4-E4B-it` (Hugging Face / DeepInfra canonical — note the **capitalised `E4B`**, unlike the lowercase `opencode/gemma-4-e4b` requested here), `google/gemma-4-E4B-it` (Pioneer), `gemma-4-E4B-it-MLX-4bit` and `gemma-4-E4B-it-IQ4_XS` (atomic-chat local 4-bit builds), `gemma4:e4b` (Ollama), `google-gemma-4-e4b` (CloudPrice canonical).
- **Context window:** **128K tokens native** (official card), published as 131,072 by DeepInfra. **Host variance is severe and worth checking before deploying**: Pioneer serves only **32,768**, and both atomic-chat 4-bit localizations also publish **32,768** against a 131,072 native. Max output **8,192** on DeepInfra (Pioneer lists 32,768).
- **Modalities:** **Text, image and audio in; text out.** Vision encoder **~150M**, audio encoder **~300M** (USM-style conformer). Reasoning mode: yes. Function calling: yes, native. Variable aspect-ratio and variable-resolution image input. **No video** — video is a 26B/31B capability, so E4B's input set is text + image + audio, which is *broader* than the 31B's text + image. 140+ pre-training languages, 35+ supported out of the box.
- **Pricing (as of 2026-10-05):** **DeepInfra $0.02 in / $0.10 out** per 1M — the cheapest Gemma 4 route in existence. Pioneer **$0.20 / $0.20**. Self-hosting **$0** under Apache 2.0, and at 8B-with-embeddings the 4-bit quantizations are sized for phones and edge SBCs. This folder's `meta.json` (~$0.02/$0.10, Apache 2.0 open weights) matches DeepInfra exactly.
- **Architecture:** Open-weight **dense** transformer, **4.5B effective / 8B total** with embeddings, **42 layers**, **512-token sliding window**, 262K vocabulary, **~150M vision encoder**, **~300M audio encoder**, using **Per-Layer Embeddings (PLE)** for parameter efficiency. Hybrid attention interleaves the local sliding window with full global attention to keep 128K context feasible on mobile-class memory budgets.

### Raw benchmarks found

Official figures are Google's own Gemma 4 model card (`ai.google.dev/gemma/docs/core/model_card_4`), instruction-tuned, quoting the full five-size comparison table. Independent figures come from CloudPrice and BenchLM. Note the family context for every row: 31B Dense / 26B A4B / 12B Unified / **E4B** / E2B / Gemma 3 27B.

Text, reasoning and knowledge:

- MMLU-Pro: **69.4%** (31B 85.2%, 26B 82.6%, 12B 77.2%, E2B 60.0%, Gemma 3 27B 67.6%). CloudPrice/BenchLM: 0.6
- GPQA Diamond: **58.6%** (31B 84.3%, 26B 82.3%, 12B 78.8%, E2B 43.4%, Gemma 3 27B 42.4%). CloudPrice **0.6, #360**; BenchLM Knowledge lane **29.6, #144 of 168**
- MMMLU: **76.6%** (31B 88.4%, 26B 86.3%, 12B 83.4%, E2B 67.4%, Gemma 3 27B 70.7%)
- AIME 2026 no tools: **42.5%** (31B 89.2%, 26B 88.3%, 12B 77.5%, E2B 37.5%, Gemma 3 27B 20.8%) — a steep 35-pt drop from the 12B Unified
- BigBench Extra Hard: **33.1%** (31B 74.4%, 26B 64.8%, 12B 53.0%, E2B 21.9%, Gemma 3 27B 19.3%)
- Artificial Analysis Intelligence Index: **8.9, #336** (CloudPrice) — below the methodology's 20–35 mid band
- IFBench: **0.4, #223** (CloudPrice)
- **HLE: not published by Google for E4B at all** (the card shows `-` for both no-tools and with-search, as it does for E2B). CloudPrice's independent HLE reads **0.0, #487 — dead last of 487 entries**
- BenchLM Reasoning lane: **44.2** (unranked, 2 rows); independent public score **33.28** from only 2 covered benchmarks
- CritPt / Omniscience Accuracy / Hallucination Rate: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **42.2%** (31B 76.9%, 26B 68.2%, 12B 69.0%, E2B 24.5%, Gemma 3 27B 16.2%)
- CloudPrice independent: **TAU2 0.2 (#333)** — roughly **half** Google's 42.2%, and the same vendor/third-party divergence the 12B Unified and 26B A4B show; **TerminalBench Hard 0.1 (#231)**
- Function calling: **native**, per Google and every hosted provider record
- BenchLM Agentic lane: unranked, no agentic composite published for this model
- GDPval-AA / OSWorld / AutomationBench / Claw-Eval / ClawProBench / TB 2.1 / Toolathon / MCP-Atlas: no verified public score found

Coding:

- LiveCodeBench v6: **52.0%** (31B 80.0%, 26B 77.1%, 12B 72.0%, E2B 44.0%, Gemma 3 27B 29.1%)
- Codeforces ELO: **940** (31B 2150, 26B 1718, 12B 1659, E2B 633, Gemma 3 27B 110)
- SciCode: **0.2, #389** (CloudPrice); Coding Index **9.4, #194** (CloudPrice)
- BenchLM Coding lane: **20.3, #121 of 142** (estimated)
- SWE-bench Verified / SWE-Pro / DeepSWE / Vibe Code Bench: no verified public score found

Long context:

- **MRCR v2 8-needle @ 128K (average): 25.4%** (31B 66.4%, 26B 44.1%, 12B 43.4%, E2B 19.1%, Gemma 3 27B 13.5%) — measured at the model's *full* native window, and weak
- LCR: **0.3, #302** (CloudPrice) — independently consistent with the 25.4%
- No needle or retrieval measurement above 128K, and none from any AA-style aggregator

Vision:

- MMMU-Pro: **52.6%** (31B 76.9%, 26B 73.8%, 12B 69.1%, E2B 44.2%, Gemma 3 27B 49.7%)
- MATH-Vision: **59.5%** (31B 85.6%, 26B 82.4%, E2B 52.4%, Gemma 3 27B 46.0%)
- MedXPertQA (MM): **28.7%** (31B 61.3%, 26B 58.1%, 12B 48.7%, E2B 23.5%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.181** (31B 0.131, 26B 0.149, 12B 0.164, E2B 0.290, Gemma 3 27B 0.365)
- **Contradiction to flag:** CloudPrice's capability matrix records **Input 1/5 — Text ✓, Image ✗, Audio ✗** and **Capabilities 0/13** (reasoning, function calling, structured outputs all ✗). Every one of those contradicts Google's model card and all provider records. CloudPrice's E4B capability table is unusable and its only trustworthy fields are the benchmark ranks and prices.

Audio:

- CoVoST: **35.54** (E2B 33.47). FLEURS: not published for either edge model

Speed:

- Time to First Token: **1.02s, #409**; Output throughput **47.5 tok/s, #211** (CloudPrice)

### Normalized scores (1–100)

- **Tool use: 48/100.** Just under the methodology's 50–70 mid band. The vendor number is respectable — **Tau2 at 42.2%** sits above the `Tau3 10–25%` mid marker and far above E2B's 24.5% and Gemma 3's 16.2%, on a model with only 4.5B effective parameters — and native function calling is documented. But the independent readings are weak and they are what the methodology says to arbitrate on: **CloudPrice puts TAU2 at 0.2 (#333), roughly half Google's figure** — the same vendor/third-party gap this repo has recorded on the 12B Unified and the 26B A4B, which suggests Google's whole Tau2 column runs on friendlier settings — and **TerminalBench Hard comes in at 0.1 (#231)**, far below the 45–60% mid anchor on the primary terminal-automation measure. With **no GDPval-AA, no Claw-Eval and no TB 2.1** to break the tie, the score stays under the band rather than crediting the vendor reading at face value.
- **Reasoning: 42/100.** Below the 55–65 mid band, and below it on every anchor the methodology names. **GPQA Diamond 58.6%** falls *just under* the `GPQA 60–80%` mid band's floor, and the independent read agrees (CloudPrice **0.6, #360**). **HLE is the hard stop: Google never published it for E4B, and CloudPrice's independent run is 0.0, ranked #487 of 487 — last place in the entire database**, against a 40% frontier threshold. The AA Intelligence Index at **8.9 (#336)** sits below the 20–35 mid band. AIME 2026 at **42.5%** is a 35-pt fall from the 12B Unified's 77.5% and BigBench Extra Hard at 33.1% is well under half the 31B's, so the drop is consistent across math and multi-step logic. Credited above the floor because MMLU-Pro 69.4% and MMMLU 76.6% show genuine broad knowledge retention, and IFBench 0.4 (#223) is not catastrophic.
- **Context window: 48/100.** A discount below the tier mapping. **128K native** (131,072 published) places this in the methodology's 100K–200K band of 50–64, so the spec alone would score ~57. It cannot go higher because the one retrieval measurement taken **at the model's full native window** is poor: **MRCR v2 8-needle @ 128K = 25.4%**, with CloudPrice's LCR at **0.3 (#302)** independently agreeing. For a model whose entire reason to exist is running on-device with a large window, 25% multi-needle recall means the window is capacity the model cannot reliably use. It cannot go much lower either, because 128K is real and the 512-token sliding window is a deliberate mobile optimization. Also note the **host trap**: Pioneer and both atomic-chat 4-bit builds serve only **32,768**, a 4× cut — verify the window on the route you actually buy.
- **Multimodal: 88/100.** The methodology's top band is `+audio in or any non-text out = 90–100`, and E4B qualifies on verified evidence rather than aggregator metadata: **text + image + audio input**, with a real **~300M USM-style conformer audio encoder** and a published **CoVoST 35.54**. It is in fact the broadest input set in the family — the flagship 31B is text and image only, and video belongs to the 26B/31B, so nothing larger here can do what E4B does on audio. Scored **just below** the band floor because every measured quality number is at the bottom of the family — **MMMU-Pro 52.6%, MATH-Vision 59.5%, MedXPertQA MM 28.7%** (less than half the 31B's), CoVoST 35.54, and **OmniDocBench 0.181**, worse than the 12B and 26B — and because **CloudPrice's host matrix claims it exposes text input only (1/5) with image and audio unavailable**, so on at least one tracked route the modalities this score credits may not be reachable at all. Google's card and the vision/audio benchmark table are the authoritative sources; CloudPrice's capability block is not.
- **Coding: 42/100.** Well below the 65–75 mid band. **LiveCodeBench v6 at 52.0%** is genuine basic competence but sits far under the band's `LiveCode 80%` marker, and **Codeforces ELO 940** is weak against the rest of the family (12B 1659, 26B 1718, 31B 2150) — though still well above Gemma 3 27B's 110, so it is not a non-competitor. The independent picture is poor: **SciCode 0.2 (#389)** and **Coding Index 9.4 (#194)** on CloudPrice, **BenchLM Coding lane 20.3 (#121 of 142)**. And the band cannot be certified in any case, because the methodology's mid band is explicitly conditioned on **Vibe <10% and SciCode <40%** while **no Vibe Code Bench figure exists at all** for this model and there is **no SWE-bench Verified, SWE-Pro or DeepSWE** number — so for repo-level patching, this site's primary coding axis, there is simply no evidence.
- **Cost efficiency: 99/100.** The best value in this entire batch. **DeepInfra serves it at $0.02 in / $0.10 out per 1M**, which is *below* the methodology's `~$0.10/$0.20 = 97–99` band on both legs — input 5× cheaper, output 2× cheaper — and self-hosting is **$0** under Apache 2.0 at a size that genuinely fits phones, Raspberry Pis and Jetson boards, where the larger Gemma tiers do not. One point below a perfect 100 because there is no universal full-rate $0 hosted tier for the base model: the atomic-chat $0 entries are 4-bit local builds rather than a pay-per-token route, and Pioneer charges $0.20/$0.20, so a reader should confirm which route they are actually on.
- **Overall Score: 54/100.** Half-up mean of 48 / 42 / 48 / 88 / 42. Best fit: **on-device and edge multimodal work — image plus audio in, at phone-class memory cost, with 128K of window** — think mobile assistants, camera-and-mic workflows, local document and screen understanding, offline agents. It is not a reasoning or patching model: AIME 42.5%, HLE last of 487, LiveCodeBench 52.0% and no repo-level benchmark at all. The honest framing is that the 88 on multimodal and 99 on cost are what carry this score, and the three text dimensions are all below their bands.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (Google's official Gemma 4 model card at `ai.google.dev/gemma/docs/core/model_card_4` read for the full five-size instruction-tuned comparison table, the `google/gemma-4-31B` Hugging Face card for the architecture and modality matrix, the Swfte AI Gemma 4 deep dive, ApX's Gemma 4 E2B/E4B spec pages, CloudPrice's Gemma 4 E4B spec/benchmark/capability records, BenchLM's Gemma 4 E2B vs E4B comparison page, Ollama's `gemma4:e4b` library page, and models.dev API records across the DeepInfra, Pioneer, Amazon Bedrock and atomic-chat providers).
- Known caveats: every benchmark here is **vendor-published by Google**, with instruction-tuned settings, and the independent third-party coverage is thin — CloudPrice supplies ranks on a handful of axes and BenchLM covers only **2 sourced benchmarks**. Two specific conflicts are recorded rather than resolved: Google's **Tau2 42.2%** against CloudPrice's **0.2 (#333)**, the same ~2× vendor/third-party divergence this repo has already logged on the 12B Unified and 26B A4B; and Google's **text+image+audio** capability against CloudPrice's **1/5 input, 0/13 capabilities** matrix, where the latter is plainly wrong and should be disregarded. **Google never published HLE for E4B or E2B** (the card shows `-`), so the only HLE figure available is CloudPrice's 0.0 at #487 of 487, and absence of a vendor number should not be read as a good one. **Host records diverge materially**: DeepInfra serves 131,072 context / 8,192 output while Pioneer and both atomic-chat 4-bit builds serve only 32,768 context, so the 128K window is not universal. The Hugging Face ID capitalises the size (`gemma-4-E4B-it`) unlike the requested lowercase slug. The E2B sibling is covered separately. This folder's `meta.json` is accurate here, unlike the stale auto-scaffolds in the 12B and 26B folders.
- Future sources: add a new file next to this one, e.g. `Gemma_4_E2B.md`, using the same headings.