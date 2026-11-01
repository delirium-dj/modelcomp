# Gemma 4 E2B — findings by Qwen 3.8 Max

- Source: Google (`google/gemma-4-E2B`; id `google/gemma-4-E2B`; AA `gemma-4-e2b` — reasoning variant)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** The **smallest, edge/effective-2B member of Google's Apache-2.0 Gemma 4 family** — **2.3B active / 5.1B total with embeddings**, released **March 31 – April 2026** (knowledge cutoff Jan 2025), built to run **on phones / Raspberry-Pi / IoT in ~1.5 GB at Q4** while taking **native text + image + audio + video-as-frames input → text output**. It is the same architecture as the stronger **E4B** (b34) one notch down: **strongest at breadth-of-perception** (genuine, benchmarked multimodality incl. audio) and **weakest at reasoning, coding and any agentic work**. On Google's official family table the E2B posts **MMLU-Pro 60.0 / GPQA-Diamond 43.4 / AIME-2026 37.5 / LiveCodeBench v6 44.0 / Codeforces ELO 633 / MMMU-Pro(vision) 44.2**, and the curated card adds **AA Intelligence Index ≈ 7.8, MRCR 19.1% at 128K, Terminal-Bench 2.1 0.4%, HLE 4.8%** — a model that **"senses, but does not reason or code."** Artificial Analysis **profiles the Reasoning variant**, confirms specs + **128K** + multimodality, but its **Intelligence Index / Speed / Cost are all N/A ("No publicly available API")** — so **no independent composite quality index exists**; the benchmark table is **Google-official (vendor)**. Scored, not excluded, because it is a **real, distinct, dated, Apache-2.0 artifact with its own published per-variant numbers** — but rated **below its curated value** for the same reasons as E4B: thin reasoning/agentic ceiling and no neutral index. **Guards:** the **larger Gemma 4 siblings' numbers (E4B 69.4/58.6/52.0; 12B 77.2; 26B-A4B 82.6; 31B 85.2) are NOT credited to the E2B**, and the E2B ≠ E4B.

## Model card

- **Name:** Gemma 4 E2B (AA profiles `Gemma 4 E2B (Reasoning)`; a non-reasoning variant also exists).
- **Vendor / lineage:** **Google DeepMind**, Gemma 4 family — "**E**" = **effective parameters** (Per-Layer Embeddings so a small resident model behaves larger); the **lightest** of five sizes (E2B, E4B, 12B Unified, 26B-A4B MoE, 31B Dense).
- **Release / knowledge:** Family announced **31 Mar 2026**, weights landed early **April 2026** (widely covered Apr-02); **knowledge cutoff January 2025.** **Multi-Token Prediction drafters** (up to ~3× faster, no quality change) published for E2B **16 Apr 2026.**
- **IDs:** `google/gemma-4-E2B` (HF); GGUF `ggml-org/gemma-4-E2B-it-GGUF`. AA slug `gemma-4-e2b`.
- **Context window:** **128,000 total** (AA spec 128k ≈ 192 A4 pages; matches meta).
- **Modalities:** **Text + image + audio(speech) + video-as-frames in → text out.** Confirmed by Google model card ("audio supported on E2B, E4B and 12B") + HF blog + AA ("text, image, speech, and video input"). **Genuine multimodal** — NOT text-only. *(AA's comparison blurb also lists image **output** for the E2B reasoning page; the official model card and HF blog state the family "generates text responses," so output is treated as text and the multimodal credit rests on the input breadth.)*
- **Architecture:** MoE-style small transformer, **2.3B active / 5.1B with embeddings**, USM-style conformer audio encoder + variable-aspect vision encoder; reasoning (`<|think|>`) + non-reasoning variants; native function calling / JSON.
- **License / weights:** **Apache 2.0** (full commercial use, no MAU cap), open weights, self-host $0 (Q4_0 GGUF ~3.3 GB with vision projector / ~1.5 GB footprint per size guide; Q8_0 ~5.36 GB, BF16 ~9.98 GB).
- **Pricing:** **Hosted ~$0.04 / $0.08 per 1M in/out**; **$0** Apache self-host. `noFreeId: true`.
- **Status:** Current family member (not deprecated); superseded in *capability* by the larger siblings but remains the phone/IoT pick.

### Raw benchmarks found

> **Provenance: Artificial Analysis `gemma-4-e2b` (Reasoning variant) for the *independently verified* specs / modalities / context (and the confirmation that Intelligence Index / Speed / Cost = N/A, "No publicly available API"); Google's official Gemma 4 model-card family table (reproduced verbatim by the aurigait 2026 guide + arXiv 2607.02770 tech report) for the *vendor* quality numbers; HF `gemma4` release blog for architecture / sizes / audio. The "31B / 26B-A4B / 12B / E4B" columns are those models' own results (context only), never credited to E2B.**

**Reasoning / knowledge (vendor, low-for-class; no independent index):**
- **MMLU-Pro: 60.0%** · **GPQA-Diamond: 43.4%** · **AIME 2026 (math, no tools): 37.5%** · **HLE: 4.8%** (meta) · **AA Intelligence Index ≈ 7.8** (meta; tiny/edge class, and AA's live page now shows N/A).

**Coding (vendor, weak — an edge model, not a coder):**
- **LiveCodeBench v6: 44.0%** · **Codeforces ELO: 633** ("competitive programming falls off a cliff" at this size). Family reference for context only: E4B 52.0/940, 12B 72.0, 26B-A4B 77.1/1718, 31B 80.0/2150.

**Vision / multimodal (vendor — E2B's genuine relative strength):**
- **MMMU-Pro (visual reasoning): 44.2%** · native **audio** input exercised (USM-style encoder; speech Q&A + transcription + CoVoST-class translation supported per family). **Video** processed as frames.

**Agent / tool use (the model's clear weakness):**
- **Terminal-Bench 2.1: 0.4%** (meta) — essentially zero multi-step agentic capability. Native function-calling/JSON exists (family feature) but the tiny footprint gives no autonomy ceiling. *(No E2B Tau2 row appears in the transcribed family table; E4B's 42.2 is a different model and is NOT credited.)*

**Long context:**
- **MRCR (128K): 19.1%** (meta) — **weak** retrieval over its own 128K window (E4B 25.4, 26B-A4B 44.1, 31B 66.4 are other models' values).

**Speed / cost:**
- AA **Speed / Cost-per-task = N/A** ("No publicly available API") — no independent throughput/composite measurement, unlike E4B. Served **~$0.04/$0.08**; MTP drafters give ~2–3× faster generation; runs offline on a phone in ~1.5 GB. *(Speed is not a scored dimension.)*

> **Self-reported vs independent:** quality benchmarks are **Google-official (vendor)** — **no neutral composite index** (AA Intelligence N/A). Specs / modalities / context are **AA-verified**. The curated `meta` values (MMLU-Pro 60.0, GPQA 43.4, LCB 44.0, MMMU-Pro 44.2) **corroborate Google's family table**, and its distinctive low signals (AA index 7.8, MRCR 19.1, TB 0.4, HLE 4.8) are consistent with the model card's own "senses, does not reason or code" tradeoff framing. Discount the vendor table but treat it as usable (transparent, internally consistent), per the `gemma-4-e4b` / `pixel_canary` / `xing_4.0_29b_a4b` precedent.

### Normalized scores (1–100)

- **Tool use: 38/100.** Native function-calling/JSON exists, but the only agentic signal is **Terminal-Bench 2.1 0.4%** — a phone-class model that **perceives far better than it acts**; near-zero autonomy ceiling. (E4B scored 46 on the same axis.)
- **Reasoning: 48/100.** Low in absolute terms (**MMLU-Pro 60.0, GPQA-Diamond 43.4, AIME 37.5, HLE 4.8**) and **not independently indexed** (AA Intelligence N/A; the ~7.8 figure is a tiny-class snapshot). Fine for on-device extraction/summarization, not for hard reasoning.
- **Context window: 56/100.** **128K** is generous for a phone model, but **MRCR 19.1** shows **poor long-span recall** — it holds a lot in context yet retrieves weakly.
- **Multimodal: 66/100.** The genuine differentiator: **native image + audio + video-frame input** in a ~1.5 GB build (**MMMU-Pro 44.2**, real audio understanding). **Breadth is excellent for the size class; absolute depth is modest** (lower than E4B's 72).
- **Coding: 45/100.** **LiveCodeBench v6 44.0 / Codeforces ELO 633** — functional autocompletion at best; competitive programming "falls off a cliff." Explicitly outclassed by every larger sibling.
- **Cost efficiency: 92/100.** **~$0.04/$0.08 hosted + $0 Apache-2.0 self-host in a ~1.5–3.3 GB build that runs offline on a phone** — arguably the cheapest multimodal option in the dataset. *(Scored; not counted in Overall.)*
- **Overall Score: 51/100.** Half-up mean of the five quality dims (38 + 48 + 56 + 66 + 45)/5 = **253/5 = 50.6 → 51**. **Curated `average.md` = 54.4 → div −3.4** (a deliberate downward divergence, mirroring the −4.3 applied to E4B: the report weighs the **near-zero agentic result (TB 0.4), weak MRCR 19.1 / HLE 4.8, and the absence of any independent Intelligence Index** more heavily than the curated value, while still crediting the model's genuine multimodal breadth).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `gemma-4-e2b` (Reasoning)** — Google open-weights Apache 2.0, released April 2026, **5.1B total / 2.3B active**, **text+image+speech+video in**, **128K ctx**, **Intelligence Index / Speed / Cost / Verbosity all N/A ("No publicly available API")**; **Google official Gemma 4 model card family table** (transcribed by the **aurigait 2026 guide** + **arXiv 2607.02770 tech report**) **E2B column** — MMLU-Pro **60.0**, AIME-2026 **37.5**, GPQA-Diamond **43.4**, LiveCodeBench v6 **44.0**, Codeforces ELO **633**, MMMU-Pro **44.2**; **HF `gemma4` release blog** — "E2B: 2.3B effective, 5.1B with embeddings, 128k, base+IT", audio encoder (USM conformer) on E2B/E4B, vision encoder, Per-Layer Embeddings; **curated `meta`** — AA index **7.8**, MRCR **19.1**, Terminal-Bench 2.1 **0.4%**, HLE **4.8%**, $0.04/$0.08, Q4_0 ~3.3 GB, noFreeId true.)
- Future sources: if Artificial Analysis gains a public API to compute an **Intelligence Index / Speed** for `gemma-4-e2b`, or a neutral harness (Vals / swebench.com / tbench.ai / LMArena) reproduces its multimodal/agent numbers, replace the vendor table with reproduced values. **Guards applied:** (1) do **NOT** import the **Gemma 4 E4B / 12B Unified / 26B-A4B / 31B** columns (larger/different models) — E4B is the sibling scored separately in b34; (2) do **NOT** credit the flagship 31B (LiveCodeBench 80.0 / AIME 89.2 / GPQA 84.3) or the "value pick" 26B-A4B to this tiny edge model; (3) the AA-profiled **Reasoning** variant's specs are not a quality index — the **Intelligence Index is explicitly N/A**; (4) **Terminal-Bench 0.4 / HLE 4.8 / MRCR 19.1** are the model's own weak agentic/long-context signals, not transcription errors; (5) genuine multimodal **input** ⇒ **Multimodal above the text-only floor**, but output is **text** per the official model card. **Overall = half-up mean of the five quality dims (38+48+56+66+45)/5 = 50.6 → 51; curated `average.md` 54.4 → div −3.4.**
