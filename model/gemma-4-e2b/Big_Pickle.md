# Gemma 4 E2B — findings by Big Pickle

- Source: Google DeepMind (`google/gemma-4-E2B-it`). Requested ID `opencode/gemma-4-e2b` is **not on OpenCode Zen** — no matching Zen ID exists
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (effective parameters)
- **Name (canonical ID):** `google/gemma-4-E2B-it`
- **Short description:** The bottom of the Gemma 4 range — **2.3B effective parameters (5.1B with Per-Layer Embeddings), 35 layers, dense** — built for phones, laptops and Jetson/Raspberry-Pi-class hardware. Like its E4B sibling it keeps the family's **audio encoder** (~300M USM-style conformer), so it does text + image + audio on device with a 128K window, and it is *not* a stripped text model. What the extra 1.2B effective parameters buy over E2B's floor is modest but real: +9.2 pts MMLU-Pro, +15.2 GPQA Diamond, +17.7 Tau2, +8.0 LiveCodeBench. Where it clearly stops being usable is multi-step reasoning and code — AIME 2026 at **37.5%**, BigBench Extra Hard at **21.9%**, Codeforces ELO **633**, and 8-needle retrieval at **19.1%**. Correctly understood as an on-device perception and formatting model with cheap local reasoning, not a planner or a patcher.
- **Provider / access:** Open weights on Hugging Face (`google/gemma-4-E2B-it`, **Apache 2.0**). Hosted by **Amazon Bedrock** (`google.gemma-4-e2b`, 131,072 ctx, $0.04/$0.08) and **Pioneer** (`google/gemma-4-E2B-it`, $0.10/$0.10); local runners Ollama (`gemma4:e2b`), Lemonade and llama.cpp. **Not** on OpenCode Zen. ApX lists it as effectively **self-hosted only** and records verified hardware fits: one RTX 4090 (24GB), one A100 (80GB), or an Apple M3 Max (128GB).
- **Release / knowledge:** Released **2026-04-02** (models.dev Bedrock and Pioneer; ApX dates the family 2 Apr 2026). Pre-training cutoff **January 2025** (official model card).
- **IDs:** `google/gemma-4-E2B-it` (Hugging Face / Pioneer canonical — note the **capitalised `E2B`**, unlike the lowercase requested slug), `google.gemma-4-e2b` (Amazon Bedrock), `gemma-4-E2B-it` (Pioneer), `gemma4:e2b` (Ollama).
- **Context window:** **128K tokens native** (official card), published as 131,072 by Bedrock. **Pioneer serves only 32,768** — a 4× cut — so confirm the window on the route you buy. Max output **8,192** on Bedrock (Pioneer lists 32,768).
- **Modalities:** **Text, image and audio in; text out.** Vision encoder **~150M**, audio encoder **~300M**. Reasoning mode: yes. Function calling: yes, native. Variable aspect-ratio and variable-resolution image input. **No video** (a 26B/31B capability) — but note its input set is still broader than the flagship 31B's text + image. 140+ pre-training languages, 35+ supported out of the box.
- **Pricing (as of 2026-10-05):** **Amazon Bedrock $0.04 in / $0.08 out** per 1M, confirmed independently by CloudPrice's Gemma 4 E2B record. Pioneer **$0.10 / $0.10**. Self-hosting **$0** under Apache 2.0 at a size that fits phone and SBC-class hardware. This folder's `meta.json` (~$0.04/$0.08, Apache 2.0) matches Bedrock exactly.
- **Architecture:** Open-weight **dense** transformer, **2.3B effective / 5.1B total** with embeddings, **35 layers**, **512-token sliding window**, 262K vocabulary, **~150M vision encoder**, **~300M audio encoder**, using **Per-Layer Embeddings (PLE)** for parameter efficiency. ApX records ~400M auxiliary parameters for the encoders. Hybrid attention interleaves the local sliding window with full global attention to keep 128K context feasible on mobile-class memory budgets.

### Raw benchmarks found

Official figures are Google's own Gemma 4 model card (`ai.google.dev/gemma/docs/core/model_card_4`), instruction-tuned, from the full five-size comparison table. Independent figures come from ApX, BenchLM, CloudPrice and DataLearner. Family context for every row: 31B Dense / 26B A4B / 12B Unified / E4B / **E2B** / Gemma 3 27B.

Text, reasoning and knowledge:

- MMLU-Pro: **60.0%** (31B 85.2%, 26B 82.6%, 12B 77.2%, E4B 69.4%, Gemma 3 27B 67.6%). ApX **0.6, #53**; DataLearner 112/133 = 60
- GPQA Diamond: **43.4%** (31B 84.3%, 26B 82.3%, 12B 78.8%, E4B 58.6%, Gemma 3 27B 42.4%). ApX **0.434, #112**; DataLearner 205/224 = 43.40; BenchLM 43.4%
- MMMLU: **67.4%** (31B 88.4%, 26B 86.3%, 12B 83.4%, E4B 76.6%, Gemma 3 27B 70.7%)
- AIME 2026 no tools: **37.5%** (31B 89.2%, 26B 88.3%, 12B 77.5%, E4B 42.5%, Gemma 3 27B 20.8%)
- BigBench Extra Hard: **21.9%** (31B 74.4%, 26B 64.8%, 12B 53.0%, E4B 33.1%, Gemma 3 27B 19.3%)
- Artificial Analysis Intelligence Index: **0.08 standard / 0.07, #259** (ApX) — far below the methodology's 20–35 mid band, and consistent with E4B's 8.9 (#336)
- BenchLM: Reasoning lane **33.3** (unranked, 2 rows), Knowledge lane **27.8, #153 of 168**, Instruction Following **42.4, #96 of 124**, independent public score **32.46** from only 2 covered benchmarks
- **HLE: not published by Google for E2B** (the card shows `-` for both no-tools and with-search, as it does for E4B). No independent HLE figure for E2B specifically was found; the sibling E4B reads 0.0 (#487 of 487) on CloudPrice
- CritPt / Omniscience Accuracy / Hallucination Rate / IFBench: no verified public score found

Agent / tool use:

- Tau2 (average over 3 domains): **24.5%** (31B 76.9%, 26B 68.2%, 12B 69.0%, E4B 42.2%, Gemma 3 27B 16.2%) — the top of the methodology's mid-band `Tau3 10–25%` marker, on 2.3B effective parameters
- Function calling: **native**, per Google and both hosted provider records
- No independent TAU2, Terminal-Bench, GDPval, OSWorld, AutomationBench or Claw-Eval measurement was found for E2B on any aggregator — the third-party coverage is thinner than even the E4B's
- BenchLM Agentic lane: no agentic composite published for this model

Coding:

- LiveCodeBench v6: **44.0%** (31B 80.0%, 26B 77.1%, 12B 72.0%, E4B 52.0%, Gemma 3 27B 29.1%). DataLearner 101/126 = 44
- Codeforces ELO: **633** (31B 2150, 26B 1718, 12B 1659, E4B 940, Gemma 3 27B 110)
- Coding Index: **0.07, #154** (ApX / Artificial Analysis)
- BenchLM Coding lane: **19.3, #128 of 142** (estimated)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- **MRCR v2 8-needle @ 128K (average): 19.1%** (31B 66.4%, 26B 44.1%, 12B 43.4%, E4B 25.4%, Gemma 3 27B 13.5%) — measured at the model's *full* native window
- No LCR, RULER or AA-LCR figure, and no needle measurement at any other length

Vision:

- MMMU-Pro: **44.2%** (31B 76.9%, 26B 73.8%, 12B 69.1%, E4B 52.6%, Gemma 3 27B 49.7%)
- MATH-Vision: **52.4%** (31B 85.6%, 26B 82.4%, E4B 59.5%, Gemma 3 27B 46.0%)
- MedXPertQA (MM): **23.5%** (31B 61.3%, 26B 58.1%, 12B 48.7%, E4B 28.7%)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.290** (31B 0.131, 26B 0.149, 12B 0.164, E4B 0.181, Gemma 3 27B 0.365) — the **worst of any Gemma 4 size**, though still better than Gemma 3 27B

Audio:

- CoVoST: **33.47** (E4B 35.54) — lower is better, so E2B's audio recognition is marginally the better of the two edge models. FLEURS not published for either

### Normalized scores (1–100)

- **Tool use: 32/100.** Below the 50–70 mid band, on one real number and nothing else. **Tau2 at 24.5%** lands at the very top of the methodology's mid-band `Tau3 10–25%` marker, which is a genuinely good result for 2.3B effective parameters running on a phone — it clears Gemma 3 27B's 16.2% — and native function calling is documented by Google and both hosts. But that is the entire evidence base: **no Terminal-Bench figure of any kind**, no GDPval-AA, no OSWorld, no Claw-Eval, and unlike the E4B there is not even an independent TAU2 read to corroborate or contradict Google, so nothing arbitrates the vendor number. The mid band requires both a `TB2.1 45–60%` leg and a `Tau3 10–25%` leg; E2B supplies the second at its ceiling and has no first.
- **Reasoning: 30/100.** Below the 55–65 mid band on every anchor the methodology names. **GPQA Diamond 43.4%** is 16.6 pts under the `GPQA 60–80%` mid band's floor, and three independent sources agree on it (ApX 0.434 #112, DataLearner 205/224, BenchLM 43.4%), so this is not a vendor outlier. **BigBench Extra Hard at 21.9%** is barely above Gemma 3 27B's 19.3% and a third of the E4B's. **AIME 2026 at 37.5%** is 40 pts below the 12B Unified. The AA Intelligence Index at **0.07–0.08 (#259)** is far under the 20–35 mid band, and BenchLM's Knowledge lane sits at **#153 of 168**. Google never published HLE for E2B, and the one proxy available (E4B at 0.0, #487 of 487) suggests this corner of the family is last on the hardest knowledge benchmark. Credited above the floor only because MMLU-Pro 60.0% and MMMLU 67.4% show real broad-knowledge retention for a 2.3B model.
- **Context window: 45/100.** A discount below the tier mapping, the same call as the E4B but a notch worse. **128K native** (131,072 published) sits in the methodology's 100K–200K band of 50–64, so the spec alone would score ~57. The one retrieval measurement, taken **at the model's full native window**, is **MRCR v2 8-needle @ 128K = 19.1%** — worse than the E4B's 25.4%, less than a third of the 12B Unified's 43.4%, and only 5.6 pts above Gemma 3 27B. For a model sold on a large window inside a phone's memory budget, under 20% multi-needle recall means the advertised window is capacity the model largely cannot use. Not scored lower because 128K is genuinely delivered by the better hosts and the 512-token sliding window is a real mobile optimization rather than a spec fiction. Note also that **Pioneer serves only 32,768**.
- **Multimodal: 86/100.** Qualifies for the methodology's top band (`+audio in or any non-text out = 90–100`) on verified primary evidence, not aggregator metadata: **text + image + audio input**, a real **~300M USM-style conformer audio encoder**, and a published **CoVoST 33.47** — which is in fact *better* than the E4B's 35.54, so the audio path is not merely present but marginally the family's best at this tier. Its input set remains broader than the flagship 31B's text + image, and video is not required to be in the top band. Scored **below** the band floor because the measured vision quality is the weakest of any Gemma 4 size on document work — **OmniDocBench 0.290, worse than every other model in the family including Gemma 3 27B** — with **MMMU-Pro 44.2%** below even Gemma 3's 49.7%, **MATH-Vision 52.4%** and **MedXPertQA MM 23.5%** under a quarter of the 31B's, and hosted support is thinner than the E4B's (two hosts, one of them capped at 32K context).
- **Coding: 28/100.** The weakest dimension and well below the 65–75 mid band. **LiveCodeBench v6 at 44.0%** is 36 pts under the band's `LiveCode 80%` marker and 8 pts below the E4B's, and **Codeforces ELO 633** is low against the family (E4B 940, 12B 1659, 31B 2150) — though it remains well above Gemma 3 27B's 110, so it is not a non-competitor at programming. The independent reads confirm the weakness: **Coding Index 0.07 (#154)** and **BenchLM Coding lane 19.3 (#128 of 142)**, the second-worst of the models in this batch. As with the E4B, the mid band's SciCode/Vibe conditioning cannot be evaluated at all — **no SciCode, Vibe Code Bench, SWE-bench Verified, SWE-Pro or DeepSWE figure exists** — so there is no repo-level patching evidence whatsoever, which is the axis that matters most on this site.
- **Cost efficiency: 99/100.** Tied for best value in this batch with the E4B. **Amazon Bedrock serves it at $0.04 in / $0.08 out per 1M** — confirmed independently by CloudPrice — which is *below* the methodology's `~$0.10/$0.20 = 97–99` band on both legs, and self-hosting is **$0** under Apache 2.0 at 5.1B with embeddings, which is the only tier in the Gemma 4 family small enough to run on genuinely phone-class hardware rather than merely a consumer GPU. Not a perfect 100: Pioneer charges $0.10/$0.10, ApX records the model as effectively **self-hosted only** with no general pay-per-token route, and there is no universal $0 hosted tier.
- **Overall Score: 44/100.** Half-up mean of 32 / 30 / 45 / 86 / 28. Best fit: **on-device perception, transcription and formatting at the lowest possible cost** — local image and audio understanding, speech recognition, short-form rewriting, classification and light structured extraction, fully offline. It should not be handed anything requiring multi-step reasoning, competitive-programming-grade code, or repository-scale editing: AIME 37.5%, BigBench Extra Hard 21.9%, Codeforces 633 and 19.1% needle retrieval are all clear boundaries rather than rough edges. If you need audio on device and can afford 4.5B effective parameters, **the E4B is strictly better on every measured axis** at a similar price; choose E2B only when the parameter budget is genuinely tight.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-05
- Method: public internet research (Google's official Gemma 4 model card at `ai.google.dev/gemma/docs/core/model_card_4` read for the full five-size instruction-tuned comparison table, the `google/gemma-4-31B` Hugging Face card for the architecture and modality matrix, ApX's Gemma 4 E2B spec/benchmark/hardware page, BenchLM's Gemma 4 E2B vs E4B comparison page, DataLearner's Gemma 4 E2B record, CloudPrice's Gemma 4 E2B pricing and version records, Ollama's `gemma4:e2b` library page, the Swfte AI Gemma 4 deep dive, and models.dev API records across Amazon Bedrock and Pioneer).
- Known caveats: the primary benchmark table is **vendor-published by Google** with instruction-tuned settings, and E2B's **third-party coverage is thinner than any other model in this batch** — BenchLM covers only 2 sourced benchmarks, ApX contributes an Intelligence Index and Coding Index rank, and CloudPrice contributes pricing only. There is **no independent TAU2 or Terminal-Bench figure for E2B at all**, so Google's 24.5% Tau2 cannot be corroborated and is reported as-is. **Google never published HLE for E2B or E4B** (the card shows `-`); the only proxy available is the E4B's CloudPrice 0.0 at #487 of 487, and an unpublished number should never be read as a good one. **Host records diverge**: Bedrock serves 131,072 context / 8,192 output while Pioneer serves only 32,768 context, so the 128K window is not universal. The Hugging Face ID capitalises the size (`gemma-4-E2B-it`) unlike the requested lowercase slug. ApX records the model as self-hosted only, which may mean the Bedrock rate has limited durability. This folder's `meta.json` is accurate here, unlike the stale auto-scaffolds in the 12B and 26B folders. The E4B sibling is covered separately.
- Future sources: add a new file next to this one, e.g. `Gemma_4_E4B.md`, using the same headings.