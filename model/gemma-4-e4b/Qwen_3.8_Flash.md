# Gemma 4 E4B — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma (curated id `opencode/gemma-4-e4b`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B (weights `google/gemma-4-E4B-it`, pre-trained twin also published)
- **Short description:** The upper edge/on-device member of the April 2026 Gemma 4 family: **4.5 B effective parameters (8 B with embeddings)**, 42 layers, deliberately built for phones and Jetson/Pi-class hardware. The "E" stands for *effective* — the model uses **Per-Layer Embeddings (PLE)**, a separate small embedding table per decoder layer, so the large lookup tables inflate the total checkpoint size while only the effective core runs per token. Multimodal (text/image/audio, video as frames) with a built-in thinking mode — the notable thing at this size class.
- **Provider / access:** Apache 2.0 open weights on Hugging Face / ModelScope / Kaggle; runs through Transformers with a Gemma 4 processor, llama.cpp / MLX / LiteRT on-device. Native function calling, structured output, 140-language pretraining (35+ supported out of the box). Hosted on Google AI Studio / Vertex, NVIDIA NIM, and numerous cheap third-party routes.
- **Release / knowledge:** released **2026-04-03** (Artificial Analysis release date for this ID; family announcement 2026-04-02). Pretraining corpus is text, image and audio with a documented **January 2025** cutoff.
- **IDs:** `google/gemma-4-E4B-it` / `google/gemma-4-E4B` (HF), `gemma-4-e4b` (aggregators), curated id `opencode/gemma-4-e4b`.
- **Context window:** **128,000 tokens** — the family's "small model" tier (128 K on E2B/E4B vs 256 K on 12B/26B A4B/31B), with a **512-token sliding window** in the local layers and 262 K vocabulary. Max output is deployment-dependent; not separately disclosed on the card.
- **Modalities:** text + image + **audio** in; text out, per the card's own spec table ("Supported Modalities: Text, Image, Audio", ~150 M vision encoder + ~300 M audio encoder). Artificial Analysis lists input as "text, image, speech, and video" — video arrives as frame sequences, which the card states for the whole family — so this is a superset of the curated `meta.json` claim ("Text, image, audio in; text out"). Hard family caps apply: **audio ≤ 30 seconds**, **video ≤ 60 seconds** (at ~1 frame/second). No image or audio output.
- **Pricing (as of 2026-10-07):** open weights self-host for $0. Artificial Analysis tracks **$0.02 per 1M input / $0.10 per 1M output**, which matches this folder's curated "hosted ~$0.02/$0.10" exactly — the rare case where the curated note verifies against the primary aggregator. AA also measures **27.2 output tokens/s** (#62 of 142 in its size class, called out as "notably slow") with a good **1.34 s** median time-to-first-token.
- **Architecture:** dense, 42 layers, Per-Layer Embeddings, hybrid local-sliding/global attention (final layer always global), unified Keys/Values in global layers, Proportional RoPE; ~150 M vision encoder, ~300 M audio encoder.
- **Identity flag:** a **distinct model** from its family siblings, not a serving variant — `model/gemma-4-e2b/` (2.3 B effective), `model/gemma-4.12b-unified/` (encoder-free) and `model/gemma-4.26b-a4b/` (MoE) are separate weights. All Gemma 4 rows below come from the shared family card, whose benchmark table reports E4B and E2B side by side, so vendor numbers for the two must not be conflated.

### Raw benchmarks found

Vendor table from the Gemma 4 family card (instruction-tuned, thinking mode) — E4B column; independent rows from Artificial Analysis via BenchLM `gemma-4-e4b` (overall **31.36/100, rank #165 of 887**, 17 of 623 tracks covered, Reasoning type, 128 K context, Open Weight).

Reasoning / knowledge (vendor → independent):

- GPQA Diamond: **58.6 %** → AA **57.6 %** (agreement, unusual for this family)
- MMLU-Pro: **69.4 %**; MMMLU **76.6 %**; BigBench Extra Hard **33.1 %**
- AIME 2026 (no tools): **42.5 %**
- HLE: card prints **no** E4B row ("-" for both no-tools and with-search) → AA **3.8 %**
- CritPt: **0.6 %** (AA); AA Long Context Reasoning: **32.0 %**
- AA Intelligence Index: **8.9** (AA page: 9, *estimated*, #51 of 142, median 8)
- AA-Omniscience: index **−19.7**, accuracy **8.6 %**, hallucination rate **30.9 %**
- AA-IFBench: **44.2 %**

Agent / tool use:

- τ²-bench: **42.2 %** vendor (avg over 3) → **20.8 %** on the AA-sourced BenchLM row
- GDPval-AA: **177** raw, **0.0 %** normalized (AA)
- Terminal-Bench 2.1 / 4.0, τ³-bench, Toolathlon, Claw-Eval, AutomationBench, VITA: **no verified public score found for this ID**

Coding:

- LiveCodeBench v6: **52.0 %**; Codeforces ELO: **940**
- AA Coding Index: **9.4**; AA-SciCode: **24.4 %**
- SWE-bench Verified / Rebench, DeepSWE, NL2Repo, Vibe Code Bench: **no verified public score found for this ID**

Multimodal / audio / long context:

- MMMU-Pro: **52.6 %** vendor → AA **51.4 %**; MATH-Vision **59.5 %**; MedXPertQA MM **28.7 %**
- OmniDocBench 1.5 average edit distance: **0.181** (lower is better)
- Audio: CoVoST speech translation **35.54**, FLEURS ASR error **0.08** (lower is better)
- MRCR v2 (8 needles, 128 K, average): **25.4 %**

### Normalized scores (1–100)

- **Tool use: 45/100.** The vendor's τ² 42.2 % is already below the methodology's mid reference, and the independent AA measurement is **half that (20.8 %)** — the same vendor-vs-independent gap this family shows at every size, in the most severe form here. GDPval-AA at 0.0 % normalized (177) means it does not complete the professional-task reference at all, and there is no Terminal-Bench, τ³, Toolathlon or Claw-Eval row for the ID. Long agentic loops are not a realistic deployment target at 27 tokens/s either.
- **Reasoning: 48/100.** GPQA ~58 % sits at or just under the mid band's 60 % floor, HLE is 3.8 %, CritPt 0.6 %, AA-LCR 32.0 % and the Intelligence Index is **8.9 (estimated)** against a band that expects 20–35 — so this lands below the 55–65 mid tier rather than inside it. AIME 42.5 % and BBXH 33.1 % show competition-math and hard multi-step reasoning are largely out of reach; Omniscience accuracy 8.6 % (index −19.7) confirms a very thin knowledge base, though the 30.9 % hallucination rate is far tamer than bigger models' because it refuses more.
- **Context window: 52/100.** 128 K is the methodology's 100 K–200 K tier (50–64), and it earns the low half of that: the disclosed MRCR 8-needle score at 128 K is **25.4 %** and AA-LCR is 32.0 %, i.e. the window is physically available but weakly usable for retrieval. The 512-token sliding window and PLE design make this a memory-optimised rather than depth-optimised context.
- **Multimodal: 88/100.** Text + image + **audio** in with video-as-frames puts it in the methodology's 90–100 band (audio input) — and it is a genuinely rare thing at 4.5 B effective parameters, with ASR/speech-translation rows (CoVoST 35.54, FLEURS 0.08) to prove the audio path is real, not claimed. Two points off the band floor for the hard input caps the family documents (**30 s audio, 60 s video**) and the weakest vision rows in the family (MMMU-Pro 51–53 %, MedXpertQA 28.7 %); no non-text output exists to push it higher.
- **Coding: 40/100.** LiveCodeBench v6 52.0 % and Codeforces 940 are plausible for a phone-sized model but far below the mid band the methodology reserves for usable software engineering (which anchors on LiveCodeBench ~80 %), and an AA Coding Index of **9.4** with SciCode 24.4 % plus *no* repository-level row at all (SWE-bench, DeepSWE, NL2Repo) means it cannot be scored as an agentic coding model. Fine for completion and small local edits.
- **Cost efficiency: 98/100.** $0.02/$0.10 per 1M on AA is cheaper than the ~$0.10/$0.20 tier that the methodology already scores 97–99, and Apache 2.0 weights run for effectively $0 on-device or a single small GPU. Not 100 only because the 27 tokens/s measured decode rate makes real-world cost-per-task worse than the sticker price suggests.
- **Overall Score: 55/100.** Mean of the five quality dimensions (45 + 48 + 52 + 88 + 40) / 5 = 54.6 → 55; Cost excluded per `RULES.md`. Best fit: on-device and edge deployments that need **audio + image + text in one small Apache-2.0 model** — offline transcription of short clips, photo-plus-voice assistant features, keyword/classification extraction on phones and Jetson boards — where its modality breadth is the reason to pick it and its reasoning ceiling is accepted. Do not pick it for agentic loops, repository coding or long-context retrieval.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Gemma 4 family model card README on Hugging Face, Google `blog/gemma4` announcement as cited by BenchLM's upstream rows, Artificial Analysis `models/gemma-4-e4b` reasoning page, BenchLM `gemma-4-e4b` score page); scores are normalized 1–100 interpretations, not official vendor scores. Coverage is partial (17 of 623 BenchLM tracks; AA Index marked *estimated*), so each dimension names the missing harnesses rather than inferring values for them.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
