# Gemma 4 12B Unified — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind (`google/gemma-4-12B-it`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `google/gemma-4-12B`, Artificial Analysis, BenchLM).
> **New rows found.** The 2026-10-05 pass had no Artificial Analysis evidence at all; this pass adds a full AA panel — **Intelligence Index 14 (estimated; v4.3.2, #20/141 similar-size open weights; BenchLM lists 14.2)**, **AA-LCR 63.7%**, **AA-GPQA Diamond 75.3%**, **AA-HLE 15.7%**, **AA-MMMU-Pro 69.7%**, **AA Coding Index 31.0%**, **AA-IFBench 73.5%**, **GDPval-AA 591 Elo**, **CritPt 0.0%** and **AA-Omniscience index -52.7 / accuracy 15.6% / hallucination 81.0%**. First verified hosted pricing: **~$0.10 in / $0.30 out** per 1M (AA median), 117.6 tok/s, TTFT 2.43s. The HF card also adds **MRCR v2 8-needle 128K 43.4%**, **Tau2 (average over 3) 69.0%** (vendor), **HLE (no tools) 5.2%**, **MMMLU 83.4%**, **OmniDocBench 1.5 0.164**, **MedXpertQA MM 48.7%**, **CoVoST 38.5\*** and **FLEURS 0.069\*** (asterisk = excluding Chinese). BenchLM gives **36.84/100 (#153/950, partial coverage)**.
> **Corrections.** AA now publishes a first-party-per-token price (~$0.10/$0.30) that the earlier pass could not verify; AA lists the context window as **262K** while the official card says **256K**. All vendor reasoning/coding rows (MMLU Pro 77.2, GPQA 78.8, AIME 77.5, LiveCodeBench 72.0, Codeforces 1659, MRCR 43.4) are confirmed unchanged.
> **Conflicts.** **Tau2 69.0% (vendor)** vs **36.3% (AA)** — a wide, unexplained spread; and GDPval-AA normalizes to **0.0%** despite a 591 Elo.
> Sources: https://huggingface.co/google/gemma-4-12B · https://artificialanalysis.ai/models/gemma-4-12b · https://benchlm.ai/models/gemma-4-12b · https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's mid-sized open-weight, encoder-free multimodal Gemma — ~12B dense parameters taking text, image, audio and video directly into the LLM backbone; designed to run locally on a 16 GB-VRAM/unified-memory machine.
- **Provider / access:** Google DeepMind. Hugging Face `google/gemma-4-12B` (base) and `google/gemma-4-12B-it` (instruction-tuned), Vertex AI Model Garden `gemma-4-12b`, Ollama `gemma-4-12b`; open weights under **Apache 2.0**. Hosted routes ~$0.10/$0.30 per 1M (AA median across providers).
- **Release / knowledge:** Released **2026-06-03** (Artificial Analysis; after the April launch of the E2B/E4B/26B/31B sizes); knowledge cutoff **January 2025**.
- **IDs:** `google/gemma-4-12B` / `google/gemma-4-12B-it`; no OpenCode Zen Free ID verified.
- **Context window:** **256K tokens** (official model card; AA reports 262K). Max output not officially broken out.
- **Modalities:** Text, image, audio and video in; **text out**. Reasoning; native function calling and structured JSON output; 140+ languages. Runtime caps: ~30 s audio, 60 s video at 1 FPS per model card.
- **Pricing (as of 2026-10-16):** Open weights, self-host free under Apache 2.0; hosted median ~**$0.10 in / $0.30 out** per 1M (Artificial Analysis; blended ~$0.12). No first-party per-token API price (Vertex Model Garden deployment is usage-priced per Google Cloud).
- **Architecture:** Dense transformer, **11.95B params, 48 layers, 262K vocab**, 1024-token sliding window in a hybrid local/global attention stack with p-RoPE. Encoder-free "unified" stack: raw image patches and 16 kHz/40 ms audio frames projected straight into the LLM via ~35M-param embedders; native MTP speculative-decoding drafter. Apache 2.0; QAT Q4_0 packs released 2026-06-05.

### Raw benchmarks found

Agent / tool use:

- Tau2 (average over 3): **69.0%** vendor (HF card) vs **36.3%** (Artificial Analysis)
- GDPval-AA: **591 Elo / 0.0% normalized** (Artificial Analysis)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **77.2%** (Google model card, independently cross-checked by two briefs)
- GPQA Diamond: **78.8%** vendor (Google model card) / **75.3%** (AA)
- AIME 2026 (no tools): **77.5%** (Google model card)
- MMMLU (multilingual): **83.4%** (Google model card)
- BigBench Extra Hard: **53.0%** (Google model card)
- HLE (no tools): **5.2%** (Google model card); AA-HLE **15.7%**
- Artificial Analysis Intelligence Index: **14** (estimated; v4.3.2, #20/141 similar-size open weights) — BenchLM lists **14.2**
- AA-LCR: **63.7%** (Artificial Analysis)
- AA-IFBench: **73.5%** (Artificial Analysis)
- Omniscience Index **-52.7** / Accuracy **15.6%** / Hallucination Rate **81.0%** (Artificial Analysis)
- CritPt: **0.0%** (Artificial Analysis)

Coding:

- LiveCodeBench v6: **72.0%** (Google model card)
- Codeforces ELO: **1659** (Google model card)
- AA Coding Index: **31.0** (Artificial Analysis)
- SWE-bench Verified / SWE-Pro / SciCode / DeepSWE: no verified public score found

Long context:

- MRCR v2 (8 needle, 128K): **43.4%** (Google model card) — weak retrieval at depth relative to the 256K claim
- AA-LCR: **63.7%** (Artificial Analysis long-context reasoning)

Multimodal:

- MMMU Pro: **69.1%** vendor (Google model card) / **69.7%** (AA)
- MATH-Vision: **79.7%** (Google model card)
- MedXpertQA MM: **48.7%** (Google model card)
- OmniDocBench 1.5 (average edit distance, lower is better): **0.164** (Google model card)
- CoVoST speech translation: **38.5\*** BLEU / FLEURS WER **0.069\*** (\*excluding Chinese; Google model card)

### Normalized scores (1–100)

- **Tool use: 62/100.** Native function calling and structured JSON output, and vendor Tau2-Bench 69.0% (AA measures a much lower 36.3%) show usable agentic competence for a 12B; capped by the absence of any Terminal-Bench 2.1, Tau3 or GDPval-AA normalized evidence and by trailing the 26B A4B on independent agentic rows.
- **Reasoning: 72/100.** MMLU Pro 77.2%, GPQA 78.8% and AIME 2026 77.5% are strong for the size (near the Gemma 3 27B baseline), but GPQA sits in the 60–80% mid band, AA Index 14 and BigBench Extra Hard 53.0% cap it well below frontier.
- **Context window: 72/100.** 256K tokens maps just above the 200K=70 anchor in the 200K–500K band; MRCR v2 43.4% at 128K shows shallow retrieval, though AA-LCR 63.7% is a more favorable long-context signal — net, still mid-band rather than near the top.
- **Multimodal: 88/100.** Native image + audio + video input with text out lands in the +audio band (90–100 range), supported by MMMU Pro 69.1% and MATH-Vision 79.7%; no non-text output and merely good (not leading) vision caps it below 90.
- **Coding: 70/100.** LiveCodeBench v6 72.0% and a 1659 Codeforces ELO are excellent for an open ~12B dense model; no SWE-bench/SciCode/DeepSWE evidence and a low AA Coding Index (31.0) keep it in the mid band.
- **Cost efficiency: 95/100.** Apache 2.0 open weights mean $0 self-host with no MAU cap or field-of-use restriction; scored just under 100 because first-party API access still carries cloud compute cost and the free local path needs quantization-aware runtimes.
- **Overall Score: 73/100.** Mean of (62 + 72 + 72 + 88 + 70) / 5 = 72.8 → **73** (unchanged — the new AA panel broadly corroborates the bands; the Tau2 vendor/AA spread is unresolved). Best-fit: local/on-device multimodal assistants and privacy-sensitive self-hosting on a single 16 GB-class machine.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-16
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `google/gemma-4-12B`, Artificial Analysis and BenchLM, adding the first full AA panel (Intelligence Index, AA-LCR, GDPval-AA, omniscience, CritPt, Coding/IFBench) plus the first verified hosted pricing, the HF long-context/multilingual/audio rows, and flagging the Tau2 vendor-vs-AA spread and the 256K-vs-262K context discrepancy. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
