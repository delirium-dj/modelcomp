# Gemma 4 E4B — findings by Qwen 3.8 Max

- Source: Google (`google/gemma-4-E4B`; id `google/gemma-4-E4B`; AA `gemma-4-e4b` — reasoning variant)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** The **edge/effective-4B member of Google's Apache-2.0 Gemma 4 family** — an **8B-total / 4.5B-active** multimodal MoE released **3 Apr 2026** (knowledge cutoff Jan 2025), engineered for on-device deployment (Q4 GGUF ~4.6 GB) and **native image + audio + video-as-frames input → text output**. It is a well-rounded small model, **strongest at breadth-of-perception** (real, benchmarked multimodality) rather than deep reasoning or agentic work: on Google's official family table the E4B posts **MMLU-Pro 69.4 / GPQA-Diamond 58.6 / AIME-2026 42.5 / LiveCodeBench v6 52.0 / Tau2-Avg 42.2 / MMMU-Pro 52.6 / MATH-Vision 59.5 / CoVoST 35.54**, with a **weak 128K-retrieval MRCR 25.4**. Artificial Analysis **profiles the Reasoning variant** and confirms the specs + **Speed 42.9 tok/s (#52/62, 1-of-4 — notably slow)** + **Cost $0.02/$0.10 (blended $0.03)**, but its **Intelligence Index is N/A ("No publicly available API")**, so there is **no independent quality index** — the benchmark table is Google-official (vendor), only the speed/cost/specs are AA-measured. **Guards:** the **larger Gemma 4 siblings' headline numbers (31B LiveCodeBench 80.0 / AIME 89.2 / GPQA 84.3; 26B-A4B 77.1 / 88.3 / 82.3; 12B 72.0) are NOT credited to the E4B**, and the E4B ≠ E2B (the lighter edge variant, LiveCodeBench 44.0 / GPQA 43.4).

## Model card

- **Name:** Gemma 4 E4B (a.k.a. `Gemma 4 E4B (Reasoning)` on AA)
- **Short description:** Google DeepMind's **edge-first multimodal** model in the Gemma 4 family — the "**E**" denotes **effective parameters**, a model tuned to behave larger than its 4.5B active footprint while fitting phones / Raspberry-Pi-class / light-laptop hardware. Shares the family's long-context, multimodal, native-system-prompt, function-calling and `<|think|>` thinking-mode design. The stronger of the two edge variants (vs E2B), aimed at "higher-quality edge use."
- **Provider / access:** **Apache-2.0 open weights** (Hugging Face) — self-host $0; served via Transformers, llama.cpp, MLX, Ollama, LM Studio, vLLM. **Hosted API: AA lists 1 provider** at $0.02/$0.10. `noFreeId: true`.
- **Release / knowledge:** Released **3 April 2026** (announced 2 Apr; AA release page Apr-2026). **Knowledge cutoff January 2025.** Family later expanded with **12B Unified** (3 Jun 2026).
- **IDs:** `google/gemma-4-E4B` (HF). AA slug `gemma-4-e4b`.
- **Context window:** **128,000 total.** (AA spec table 128k; one AA FAQ line reads "~130k" — immaterial. Matches meta.)
- **Modalities:** **Text + image + audio(speech) + video-as-frames in → text out.** Confirmed by both the Google model card ("audio supported on E2B, E4B and 12B") and AA ("supports text, image, speech, and video input"). **Genuine multimodal** (matches meta; NOT text-only).
- **Pricing:** **Hosted $0.02 / $0.10 per 1M in/out** (blended 7:2:1 ≈ $0.03/M); **$0 Apache-2.0 self-host** (Q4_0 GGUF 4.59 GB, Q8_0 8.03 GB, BF16 15.05 GB).
- **Architecture:** **Sparse-MoE, 8B total / 4.5B active per token** (AA), reasoning-capable (`<|think|>` extended thinking + non-reasoning variant exists). Apache 2.0 (commercial use allowed).

### Raw benchmarks found

> **Provenance: Artificial Analysis `gemma-4-e4b` (Reasoning variant) for the *independently measured* Speed / Cost / specs; Google's official Gemma 4 model-card family table (reproduced by BinaryVerse review + arXiv 2607.02770 tech report) for the *vendor* quality numbers.** **AA's Intelligence Index = N/A ("No publicly available API"), and Verbosity / Cost-per-task = N/A** — so no independent composite quality score exists; the MMLU/GPQA/MMMU etc. figures are Google-reported. The "Gemma 4 31B / 26B A4B / 12B / Gemma 3 27B" columns are those models' own results (context only), **never credited to E4B.**

**Reasoning / knowledge (vendor, mid-for-class):**
- **MMLU-Pro: 69.4%** · **GPQA-Diamond: 58.6%** · **AIME 2026 (no tools): 42.5%** · **BigBench Extra Hard: 33.1%** · **MMMLU (multilingual MMLU): 76.6%.** (No HLE value listed for E4B — dash in the official table.)

**Coding (vendor, modest — it is an edge model, not a coder):**
- **LiveCodeBench v6: 52.0%** · **Codeforces ELO: 940.** (Family reference: 31B 80.0, 26B-A4B 77.1, 12B 72.0, E2B 44.0 — **not** E4B's.)

**Vision / multimodal (vendor — E4B's genuine strength):**
- **MMMU-Pro (visual reasoning): 52.6%** · **MATH-Vision: 59.5%** · **OmniDocBench 1.5: 0.181** (lower-is-better document understanding; best in family after 31B/26B/12B) · **MedXPertQA-MM: 28.7%.**
- **Audio:** **CoVoST (speech translation): 35.54** · **FLEURS (lower-is-better): 0.08** — native audio input exercised. **Video** processed as frames (AA + model card).

**Agent / tool use (vendor + curated meta; the model's clear weakness):**
- **Tau2-Avg: 42.2%** (official family table). ⚠️ **Discrepancy:** the curated meta cites "**tau2 20.8%**" and "**Terminal-Bench 2.1 1.87%**" — the 20.8 matches neither the E4B Tau2-Avg (42.2) nor a shown row (it is the Gemma 3 27B AIME value), and no Terminal-Bench row appears in Google's family table (likely a per-domain τ2 sub-score / an internal agentic probe). Either way the **direction agrees: the edge variants "sense rather than conclude"** — very weak on multi-step agentic/terminal tasks.
- **Native function calling + JSON output supported** (family feature), but the low agentic scores cap its usefulness as an autonomous tool-agent.

**Long context:**
- **MRCR v2 (8-needle, 128K avg): 25.4%** — real but **weak** long-context retrieval for a 128K window (family reference: 31B 66.4, 26B-A4B 44.1).

**Speed / cost (AA-measured — independent):**
- **Output speed 42.9 tok/s, #52/62 (1-of-4 units)** — "notably slow" vs size-class median 88.2 t/s. **TTFT 0.98s** (better than the 1.11s class median). **Cost $0.02 / $0.10, blended ~$0.03** (very competitive; median $0.12 / $0.30). **Intelligence Index N/A** (no public API for AA to run the composite).

> **Self-reported vs independent:** quality benchmarks are **Google-official (vendor)** — no neutral composite index (AA Intelligence N/A). Specs / Speed / Cost / modalities / context are **AA-verified**. Discount the vendor quality table but treat it as usable (Google's family card is transparent and internally consistent), per the `pixel_canary` / `xing_4.0_29b_a4b` precedent.

### Normalized scores (1–100)

- **Tool use: 46/100.** Native function-calling + JSON, but the only real agentic evidence is **Tau2-Avg 42.2** (and the meta's much lower τ2/TB probes) — this edge model **perceives far better than it acts**; low autonomy ceiling.
- **Reasoning: 58/100.** Respectable *for a 4.5B-active edge model* (MMLU-Pro 69.4, GPQA 58.6, AIME 42.5), but modest in absolute terms and **not independently indexed** (AA Intelligence N/A).
- **Context window: 62/100.** **128K** is a solid edge-class window, but **MRCR 128K retrieval is only 25.4** — it holds a lot in-context yet recalls poorly over long spans.
- **Multimodal: 72/100.** The genuine differentiator: **native image + audio + video-frame input** with real, benchmarked vision (**MMMU-Pro 52.6, MATH-Vision 59.5, OmniDocBench 0.181**) and audio (**CoVoST 35.54, FLEURS 0.08**), all in a ~4.6 GB on-device build. Absolute scores are mid, breadth is excellent.
- **Coding: 52/100.** **LiveCodeBench v6 52.0 / Codeforces ELO 940** — functional but explicitly outclassed by the larger siblings; an edge model, not a coding agent.
- **Cost efficiency: 90/100.** **$0.02/$0.10 hosted (blended ~$0.03) + $0 Apache self-host in a 4.59 GB Q4 build** — among the cheapest multimodal options available. *(Scored; not counted in Overall.)*
- **Overall Score: 58/100.** Half-up mean of the five quality dims (46 + 58 + 62 + 72 + 52)/5 = **290/5 = 58.0 → 58**. **Curated `average.md` = 62.3 → div −4.3** (a deliberate downward divergence: the report weighs the **weak agentic/long-context/coding** results and the **absence of any independent Intelligence Index** more heavily than the curated value, crediting the multimodal breadth without letting it carry the small model's thin reasoning/agent ceiling).

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Artificial Analysis `gemma-4-e4b` (Reasoning)** — Apache 2.0 open-weights MoE **8B total / 4.5B active**, released **3 Apr 2026**, **text+image+speech+video in → text out**, **128K ctx**, **Speed 42.9 t/s #52/62 (1/4, notably slow)**, **TTFT 0.98s**, **Cost $0.02/$0.10 blended ~$0.03**, **Intelligence Index N/A ("No publicly available API")**, 1 provider; **Google official Gemma 4 model card + arXiv 2607.02770 tech report**, family table for the **E4B column** — MMLU-Pro **69.4**, AIME-2026 **42.5**, LiveCodeBench v6 **52.0**, Codeforces ELO **940**, GPQA-Diamond **58.6**, Tau2-Avg **42.2**, BigBench-Extra-Hard **33.1**, MMMLU **76.6**, MMMU-Pro **52.6**, MATH-Vision **59.5**, OmniDocBench-1.5 **0.181**, MedXPertQA-MM **28.7**, CoVoST **35.54**, FLEURS **0.08**, MRCR-8-needle-128K **25.4**; **BinaryVerse review** 2026-04-04 — transcribes the full official family table + hardware/quant notes (Q4_0 4.59 GB; 26B-A4B ≈25.2B/3.8B and 31B dense are *separate* models). Curated meta verified — 4.5B-effective/128K/image+audio+video-in/$0.02-$0.10/Apache-self-host all confirmed; ⚠️ flagged: meta's "**tau2 20.8%**" conflicts with Google's official **Tau2-Avg 42.2%** for E4B, and "**Terminal-Bench 2.1 1.87%**" has no row in the official table (per-domain / internal probe) — direction (weak agentic) nonetheless holds). **Quality scores vendor-only (AA Intelligence N/A).**
- Future sources: if Artificial Analysis gains a public API to compute an **Intelligence Index** for `gemma-4-e4b`, or a neutral harness (Vals / swebench.com / tbench.ai / LMArena) reproduces its multimodal/agent numbers, replace the vendor table with reproduced values. **Guard against** (a) importing the **Gemma 4 31B / 26B-A4B / 12B / Gemma 3 27B** columns (much larger/different models), (b) crediting the **E2B**'s lower figures or the flagship's higher ones to E4B, and (c) treating the AA-profiled **Reasoning** variant's speed/cost as a quality index — the Intelligence Index is explicitly **N/A**.
