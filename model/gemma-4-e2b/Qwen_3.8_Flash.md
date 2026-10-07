# Gemma 4 E2B — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma (curated id `opencode/gemma-4-e2b`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B (weights `google/gemma-4-E2B-it`, pre-trained twin also published)
- **Short description:** The smallest member of the April 2026 Gemma 4 family: **2.3 B effective parameters (5.1 B with embeddings)**, 35 layers, aimed squarely at phones, laptops and Jetson/Pi-class hardware. Like E4B it uses **Per-Layer Embeddings (PLE)** — a per-token, per-layer embedding table set that inflates the checkpoint but keeps the compute path tiny — and it keeps the family's full multimodal input stack (text, image, audio) plus a built-in thinking mode at a size where most competitors go text-only.
- **Provider / access:** Apache 2.0 open weights on Hugging Face / ModelScope / Kaggle; served through Transformers, llama.cpp / MLX / LiteRT on-device, NVIDIA NIM and cheap third-party routes. Native function calling, structured output, 140-language pretraining (35+ supported out of the box). Fits comfortably in a few GB of RAM/VRAM quantized, which is the entire point of the ID.
- **Release / knowledge:** released **2026-04-02** (Artificial Analysis date for this ID; E4B followed on 04-03). Pretraining data is text, image and audio with a documented **January 2025** cutoff.
- **IDs:** `google/gemma-4-E2B-it` / `google/gemma-4-E2B` (HF), `gemma-4-e2b` (aggregators), curated id `opencode/gemma-4-e2b`.
- **Context window:** **128,000 tokens**, the family's small-model tier (256 K on 12B / 26B A4B / 31B), with a **512-token sliding window** and 262 K vocabulary. Max output not separately disclosed; deployment-dependent.
- **Modalities:** text + image + **audio** in, text out per the card's spec table (~150 M vision encoder, ~300 M audio encoder). Artificial Analysis lists inputs as "text, image, speech, and video" **and claims image output** ("supports text and image output", "multimodal … generate text and image output"). **Flag:** the family card states plainly that Gemma 4 models "generate text output" and lists no image-generation path for E2B, so I treat AA's image-output claim as unverified and score text-only output. Hard family caps apply either way: **audio ≤ 30 seconds**, **video ≤ 60 seconds** (~1 frame/s). This also exceeds the curated `meta.json` ("Text, image, audio in; text out") on the input side.
- **Pricing (as of 2026-10-07):** **not verifiable.** Artificial Analysis carries no price row for this ID (input/output "$–", cost per task "Unknown", output speed "N/A" — an *estimated* Index page awaiting independent evaluation), and I found no first-party hosted price sheet for it in this pass. The curated "hosted ~$0.04/$0.08 per 1M" is therefore recorded as curated, not confirmed. Apache 2.0 self-host is effectively $0.
- **Architecture:** dense, 35 layers, Per-Layer Embeddings, hybrid local-sliding/global attention with the final layer always global, unified Keys/Values plus Proportional RoPE in global layers; ~150 M vision encoder, ~300 M audio encoder.
- **Identity flag:** distinct weights, not a serving variant of any sibling — `model/gemma-4-e4b/` (4.5 B effective), `model/gemma-4.12b-unified/` (encoder-free) and `model/gemma-4.26b-a4b/` (MoE) are separate models. BenchLM explicitly groups all five as one family with `e2b` as the variant tag, and the vendor card prints E2B and E4B in adjacent columns of one table — easy to cross-contaminate, so every row below is the E2B column.

### Raw benchmarks found

Vendor table from the Gemma 4 family card — E2B column; independent rows from Artificial Analysis via BenchLM `gemma-4-e2b` (overall **30.24/100, rank #172 of 887**, 16 of 623 tracks covered, Reasoning type, 128 K context, Open Weight).

Reasoning / knowledge (vendor → independent):

- GPQA Diamond: **43.4 %** → AA **43.3 %** (independent confirms the vendor number exactly)
- MMLU-Pro: **60.0 %**; MMMLU **67.4 %**; BigBench Extra Hard **21.9 %**
- AIME 2026 (no tools): **37.5 %**
- HLE: card prints no E2B row → AA **4.8 %**
- CritPt: **0.0 %** (AA); AA Long Context Reasoning: **16.3 %**
- AA Intelligence Index: **7.8** (AA page: 8, *estimated*, #67 of 142, median 8)
- AA-Omniscience: index **−23.6**, accuracy **6.6 %**, hallucination rate **32.4 %**
- AA-IFBench: **38.0 %**

Agent / tool use:

- τ²-bench: **24.5 %** vendor (avg over 3) → **20.8 %** on the AA-sourced BenchLM row
- GDPval-AA: **36** raw, **0.0 %** normalized (AA)
- Terminal-Bench 2.1 / 4.0, τ³-bench, Toolathlon, Claw-Eval, AutomationBench, VITA: **no verified public score found for this ID**

Coding:

- LiveCodeBench v6: **44.0 %**; Codeforces ELO: **633**
- AA Coding Index: **7.2**; no AA-SciCode row for this ID (the sibling E4B page carries one)
- SWE-bench Verified / Rebench, DeepSWE, NL2Repo, Vibe Code Bench: **no verified public score found for this ID**

Multimodal / audio / long context:

- MMMU-Pro: **44.2 %** vendor → AA **44.6 %**; MATH-Vision **52.4 %**; MedXPertQA MM **23.5 %**
- OmniDocBench 1.5 average edit distance: **0.290** (lower is better — nearly twice the E4B error, and worse than the previous-generation Gemma 3 27B's 0.365 only marginally)
- Audio: CoVoST speech translation **33.47**, FLEURS ASR error **0.09** (lower is better)
- MRCR v2 (8 needles, 128 K, average): **19.1 %**

### Normalized scores (1–100)

- **Tool use: 38/100.** τ²-bench 24.5 % vendor / 20.8 % independent is barely above the trivial floor, and GDPval-AA at **0.0 % normalized (36)** says it cannot complete a professional knowledge task with tools at all. Function calling is native and the vendor-τ²-to-independent gap here is small (unlike the rest of the family), so the low number is likely real rather than harness luck — but with no Terminal-Bench, τ³, Toolathlon or Claw-Eval coverage there is nothing to suggest agentic reliability improves elsewhere.
- **Reasoning: 40/100.** GPQA 43.4 % is *below* the methodology's mid band floor (60–80 %), HLE is 4.8 %, CritPt 0.0 %, AA-LCR 16.3 % and the Intelligence Index is **7.8–8 (estimated)**, half of what the 55–65 band expects (20–35). AIME 37.5 % and BBXH 21.9 % place multi-step reasoning in "occasionally works" territory; Omniscience accuracy 6.6 % with a −23.6 index is a near-empty knowledge base. This is well outside the mid tier, not at its edge.
- **Context window: 50/100.** 128 K puts it in the 100 K–200 K tier (50–64) at its very floor: MRCR 8-needle at 128 K is **19.1 %** and AA-LCR 16.3 %, so long contexts are accepted but barely exploited. The window is real and useful for a whole-app-context on-device assistant; it should not be trusted for needle-in-haystack retrieval.
- **Multimodal: 88/100.** Text + image + **audio** in with video-as-frames qualifies for the methodology's 90–100 band (audio input), and the audio path is genuinely measured (CoVoST 33.47, FLEURS 0.09) rather than merely advertised — remarkable to have at 2.3 B effective parameters. Two points off the floor for the family's hard **30 s audio / 60 s video** caps and the weakest vision set in the family (MMMU-Pro 44 %, MedXpertQA 23.5 %, OmniDocBench edit distance 0.290), and the AA image-output claim is deliberately **not** rewarded because the vendor card contradicts it.
- **Coding: 34/100.** LiveCodeBench v6 44.0 % with a Codeforces rating of 633 is close to tutorial level, the AA Coding Index of 7.2 confirms it, and there is no SciCode, SWE-bench, DeepSWE or repository-level row for the ID at all. Useful for autocomplete, boilerplate generation and on-device shell one-liners; not a coding agent.
- **Cost efficiency: 97/100.** Apache 2.0 weights that run on a phone or a Pi for effectively $0 make this the cheapest possible deployment in the registry, and even the curated hosted rate ($0.04/$0.08) would sit in the methodology's 97–99 price tier. Held back from 98–99 because no aggregator publishes a durable API price or measured output speed for this ID, so a hosted cost claim cannot be verified — the honest self-hosted path is where the value is.
- **Overall Score: 50/100.** Mean of the five quality dimensions (38 + 40 + 50 + 88 + 34) / 5 = 50.0 → 50; Cost excluded per `RULES.md`. Best fit: strictly on-device, privacy-sensitive, short-context auxiliary jobs — wake-word-style triage, offline ASR of brief clips, captioning, routing/classification, simple completions — where having *any* multimodal model at 2.3 B effective parameters is the win. If the hardware allows the next size up, `model/gemma-4-e4b/` is better on every measured dimension; if the task is agentic or coding, `model/gemma-4.12b-unified/` is the correct entry point in this family.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-07
- Method: fresh public internet research (Gemma 4 family model card README on Hugging Face, Google `blog/gemma4` announcement as cited by BenchLM's upstream rows, Artificial Analysis `models/gemma-4-e2b` reasoning page, BenchLM `gemma-4-e2b` score page); scores are normalized 1–100 interpretations, not official vendor scores. Coverage is the thinnest in this pass (16 of 623 BenchLM tracks; AA Index marked *estimated* with no price/speed rows), so each dimension names the missing harnesses rather than inferring values for them, and the two contradicting modality claims are recorded as a flag instead of silently resolved.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
