# Qwen 3.5 2B — findings by Qwen 3.8 Max

- Source: Alibaba / Qwen (`qwen3.5-2b`; id `opencode/qwen-3.5-2b`; **no AA page — `artificialanalysis.ai/models/qwen-3-5-2b` → 404; `benchlm.ai/models/qwen-3-5-2b` → 404**)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict:** **Qwen 3.5 2B** is a **genuine, distinct, dense ~2B model** — the smallest member of Alibaba's **March-2026 "small series"** (0.8B / 2B / 4B / 9B) under the **native-multimodal Qwen 3.5 family**, **Apache 2.0** open weights, **early-fusion text + image + video in → text out**, hybrid attention (3:1 **Gated DeltaNet : Gated Attention**, ~75% linear layers), **262K native context** (>1M via YaRN), **81,920 max output**, **hybrid thinking/non-thinking** modes. It is scored because it has **its own 2B-specific benchmark column** in a hands-on deployment write-up (Overshoot) plus the official family launch, exactly as its 4B sibling (scored separately) did. Its profile is a **vision/OCR specialist with a real ceiling on general reasoning and coding**: standout **OCR (OCRBench 85.4, beats Qwen3-VL-4B 80.8 at 2× its size)**, strong basic visual perception (**VlmsAreBlind 75.8**, a 52% generational jump over Qwen3-VL-2B's 50.0) and medical imaging (**SLAKE 74.4**), **solid video** (VideoMME 75.6 / MLVU 76.2, matching last-gen 4B at half the size); but **weak general language (MMLU-Pro 66.5)**, **modest tool use** (BFCL-V4 43.6 / τ²-Bench 48.8), and the **model card itself warns thinking-mode loops** — pushing production toward the non-thinking path. **No AA page = no independent Intelligence Index / Speed / Cost**; **no published SWE-bench / LiveCodeBench / GPQA / AIME for the 2B**. Free Apache self-host + `$0.00/$0.00` hosted lanes make it one of the cheapest usable multimodal models. **Overall 58 (div +4.2)** — a deliberate step below the 4B (70) reflecting the size wall on reasoning/coding, while crediting the genuine image+video multimodality above the text-only floor.

## Model card

- **Family:** Alibaba Qwen 3.5 — first major open-weight release where **every model is natively multimodal** (early fusion on text/image/video; **no separate "-VL" variant**). Small series (0.8B/2B/4B/9B) launched **2026-03-02**.
- **Architecture:** dense ~2B; **Gated DeltaNet + Gated Attention hybrid, 3:1** (linear-attention O(n) layers dominate → good long-video/latency behavior); near-100% multimodal training efficiency vs text-only per lab claims.
- **Context:** **262,144 native** (extensible >1M via YaRN); **max output 81,920**. (A third-party local-runner page shows "32K" — that is a **quantization/hardware default, not the model's native window**; native is 262K per `meta` + family spec.)
- **Modalities:** **text + image + video in → text out** (genuine VLM).
- **Reasoning:** **hybrid** thinking / non-thinking; **card warns thinking mode is prone to loops; non-thinking recommended for production** (and non-thinking actually scores *better* on OCR: 85.4 vs 84.5, CC-OCR 75.8 vs 72.9).
- **Languages:** family expanded to **201 languages/dialects**.
- **License / cost:** **Apache 2.0** open weights; **free self-host**; cheapest hosted route **$0.00/$0.00**. Runs in **~1.1–1.5 GB** (Q4_K_M) — phone/IoT/edge class.
- **Providers:** free hosted lanes; self-host anywhere.

### Raw benchmarks found

> Provenance: **Overshoot** hands-on deployment of all five Qwen 3.5 models with a dedicated **Qwen3.5-2B** column (public write-up, 2026-03); **canirun.ai** mirror of the official **qwen.ai Qwen 3.5 blog** (family spec + flagship table). These are **vendor/first-party-adjacent** — **no Artificial Analysis or benchlm cell exists** for the 2B (both 404), so **no fully independent quality measurement** is available; scores reflect this (moderate confidence, discounted vendor figures). Competitor and larger-sibling columns are **NOT** credited here.

**Vision / OCR (2B-specific, Overshoot)**
- **OCRBench 85.4** — beats **Qwen3-VL-4B 80.8** (2× size); document text recognition is the standout.
- **CC-OCR 75.8** (non-thinking) / 72.9 (thinking).
- **VlmsAreBlind 75.8** — **+52% over previous-gen Qwen3-VL-2B (50.0)**; basic visual perception generational leap.
- **SLAKE 74.4** (medical imaging) — beats **Qwen3-VL-4B 65.9** by ~13%.
- **VideoMME (w/ sub) 75.6**; **MLVU 76.2** — matches **Qwen3-VL-4B (75.7)** at half the parameters.

**Agents / tool use (2B-specific, Overshoot)**
- **BFCL-V4 43.6** — beats the larger **Qwen3-4B** (function-calling).
- **τ²-Bench (TAU2) 48.8** — beats the larger Qwen3-4B; **modest in absolute terms**.

**General language (2B-specific, Overshoot)**
- **MMLU-Pro 66.5** — "well behind text-focused models at this size"; weakest axis.

**Not measured for the 2B** (no published number)
- **No SWE-bench, no LiveCodeBench, no GPQA, no AIME, no HLE, no MRCR** for the 2B column. (The 4B sibling's LiveCodeBench 55.8 / vision numbers are its own and are **NOT** transferred here.)
- **AA Intelligence Index / Speed / Cost / Verbosity: N/A (404, no page).**

### Normalized scores (1–100)

- **Tool use: 52/100.**
- **Reasoning: 52/100.**
- **Context window: 66/100.**
- **Multimodal: 72/100.**
- **Coding: 48/100.**
- **Cost efficiency: 90/100.**
- **Overall Score: 58/100.**

> **Overall = half-up mean of the FIVE quality dims** (52 + 52 + 66 + 72 + 48) / 5 = **290 / 5 = 58.0 → 58**. Cost efficiency is recorded but **NOT counted**. Curated `average.md` = **53.8** → **div +4.2**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-01
- Method: public internet research (**Overshoot** "Qwen 3.5: Architecture and Model Selection" — dedicated **Qwen3.5-2B** column: OCRBench 85.4 / CC-OCR 75.8-vs-72.9 non/thinking / VlmsAreBlind 75.8 (52% over Qwen3-VL-2B 50.0) / SLAKE 74.4 / VideoMME(w-sub) 75.6 / MLVU 76.2 (≈Qwen3-VL-4B 75.7) / BFCL-V4 43.6 / τ²-Bench 48.8 / MMLU-Pro 66.5; family dense 3:1 Gated DeltaNet:Gated Attention, 262K native / 81,920-out, Apache 2.0; **canirun.ai mirror of the official qwen.ai Qwen 3.5 blog** — "first major open-weight release where every model is natively multimodal … early fusion … 201 languages," small-series launch, flagship-column confirms family but its **397B-A17B numbers NOT credited**; **`artificialanalysis.ai/models/qwen-3-5-2b` → 404** and **`benchlm.ai/models/qwen-3-5-2b` → 404** — **no independent quality measurement**.)
- Future sources: this becomes stronger once an independent tracker (AA / Vals / a hands-on leader) posts a **Qwen3.5-2B-branded** Intelligence Index / SWE-bench / GPQA run under the `qwen3.5-2b` id. **Guards applied:** (1) do **NOT** cross-credit the **Qwen 3.5 4B** (scored separately: MMMU 77.6 / VideoMME 83.5 / LiveCodeBench 55.8 / AA Speed 13.4 / Cost $0.03-$0.15), **9B / 27B / 35B-A3B / 122B-A10B / 397B** siblings, or the flagship family table (MMLU-Pro 87.8 / GPQA 88.4 / AIME26 91.3 / SWE-Verified 76.2 / MMMU 85.0) — those are larger models; (2) do **NOT** credit the **previous-gen Qwen3-VL** or **Qwen3-4B** columns shown alongside (they appear only as comparison targets); (3) **genuine image + video input → Multimodal scored ABOVE the text-only floor of 50**, not capped; (4) **no AA page → Intelligence/Speed/Cost are NOT independent** and no reasoning/coding benchmarks were invented — **Reasoning 52 / Coding 48 rest on vendor MMLU/tool figures and the *absence* of strong evidence, not fabricated numbers**; (5) the "32K context" on a local-runner page is a **hardware/quant default, not the native 262K**; (6) **Cost 90 recorded but NOT counted** in Overall; **Speed is not a scored dimension**.
