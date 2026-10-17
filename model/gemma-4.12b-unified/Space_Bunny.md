# Gemma 4 12B Unified — findings by Space Bunny

- Source: Google (`gemma-4-12B` / `gemma-4-12B-it`; hosted as `opencode/gemma-4.12b-unified`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-05 (Overall 79.0).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified (instruction-tuned variant: Gemma 4 12B Unified IT)
- **Short description:** Google's encoder-free, unified multimodal 12B dense model from the Gemma 4 family — the "Unified" designation refers to the architecture (no separate vision/audio encoders; raw image patches and audio waveforms are projected straight into the LLM embedding space). Released as the mid-sized bridge between the edge E4B and the 26B A4B MoE, positioned for on-device multimodal agentic work that runs in 16 GB. It is not an alias of another entry in this comparison: E2B/E4B/26B-A4B/31B are separate Gemma 4 members.
- **Provider / access:** open weights on Hugging Face (`google/gemma-4-12B`, `google/gemma-4-12B-it`) under Apache 2.0, with BF16, SFP8, Q4_0/GGUF (`gemma-4-12B-it-qat-q4_0-gguf`) and `-w4a16-ct` compressed-tensor builds plus a dedicated MTP drafter for speculative decoding; locally servable via `litert-lm serve` (OpenAI-compatible), llama.cpp, MLX, Ollama (`gemma4:12b`), Unsloth, vLLM. **Second pass:** llama.cpp (65 community reports), Ollama (25), Gufo (11), LM Studio (9), vLLM (8), MLX (5) and mlx-vlm (3) all have live Gemma 4 traffic as of 2026-10-17, and llama.cpp has shipped continuous releases through the period (b11414, 2026-10-05) — local-runtime support is healthy, not degraded. Hosted at `opencode/gemma-4.12b-unified`; other first-party/aggregated routes exist (Hugging Face Inference Endpoints, Kaggle Models).
- **Release / knowledge:** released 2026-06-03 (confirmed again this pass in Google's own Gemma releases log, which lists no newer Gemma 4 checkpoint); QAT checkpoints followed 2026-06-05. Knowledge cutoff still not stated by the vendor in any source reviewed on 2026-10-17.
- **IDs:** `google/gemma-4-12B`, `google/gemma-4-12B-it` (case-sensitive — capital B is a documented copy-paste trap); hosted id `opencode/gemma-4.12b-unified`.
- **Context window:** 256K tokens (262,144) per the official Gemma 4 model card / HF model card property table. 48 layers, 262K vocabulary. Still **no first-party max-output figure** published; Artificial Analysis lists 256k, and no source this pass published an official completion cap.
- **Modalities:** text, image, audio and video in; text out; thinking mode (reasoning traces before the answer); tool calls / function calling supported; video is handled as frames (≤60 s at 1 fps) and audio is capped at ~30 s of speech; encoder-free path (no vision or audio encoder parameter row on the HF card). **Conflict recorded:** an Artificial Analysis aggregator blurb describes the model as "outputs text and image" — that contradicts the vendor card (text out only) and is treated as an aggregator error.
- **Pricing (as of 2026-10-17):** **changed since the first pass — a per-token rate now exists.** Apache 2.0 open weights (self-hosting cost is compute only: BF16 ≈ 26.7 GB, Q4_0 ≈ 6.7 GB). Hosted: Artificial Analysis publishes a median-across-providers rate of **$0.10 in / $0.30 out per 1M** (blended 7:2:1 = $0.12), sourced from Google's own API pricing; AIIQ independently lists the same $0.10/$0.30 as "Google's API". AA flags this as "somewhat expensive" against comparable open-weight models (median $0.03 in / $0.15 out). No discount with a published end date was found. The `opencode/gemma-4.12b-unified` listing is still described only as "Standard pricing"; no per-token rate published for that specific route. **Conflict recorded:** CloudPrice carries a `Gemma 4 12B Instruct — 16K ctx — $0.30/$2.00` row that does not match any Google-published figure and carries a 16K context inconsistent with the official 256K; it is treated as a stale/mislabelled aggregator entry and is *not* used here.
- **Architecture:** 11.95B total parameters, dense (not MoE), decoder-only transformer; encoder-free multimodal path (35M-param linear projection of image patches / audio frames into the embedding space); MTP drafter present; trained from scratch on the Gemma 4 recipe with quantization-aware training.

### Raw benchmarks found

Vendor-published instruction-tuned, thinking-mode results come from the official Gemma 4 model card / Gemma 4 Technical Report (arXiv 2607.02770). **Second pass added independent Artificial Analysis runs and a BenchLM/BenchmarkList mirror; the mirror pages often simply relabel vendor rows, so each row is labelled by who actually ran it.**

Agent / tool use:

- Tau2-bench (average over airline / retail / telecom): **69.0%** — airline **75.0%**, retail **77.6%**, telecom **54.4%** — **vendor-reported** (Google Gemma 4 model card). BenchmarkList ranks this row 2/5 (75th percentile) in its own 5-model agentic table, but that is a re-ranking of the vendor number, not an independent run. Where the vendor splits the three domains, the technical report carries the split.
- **GDPval-AA: 647 Elo — INDEPENDENT (Artificial Analysis), new this pass.** BenchmarkList ranks it **#190 / 340 (44th percentile)**. Per this project's methodology, GDPval ~900–1200 maps to a mid band and ~1750+ to the frontier; 647 is *below* even the low-mid reference. This is the single most consequential new datapoint for this dimension.
- Terminal-Bench Hard: **18.0% — vendor-reported** (Technical Report Table 5). **Independent measurement: not found.** CloudPrice mirrors an Artificial-Analysis-derived "TerminalBench Hard 0.2, rank #165" for the 12B; if read as a fraction that would be ~20% (close to the vendor's 18.0) but if read as AA's Terminal-Bench **4.0** result it contradicts the vendor, and AA's own 4.0 table shows the 12B as unmeasured. Recorded as an unresolved conflict; **no weight is placed on it.**
- IFEval: **97.2%**; IFBench: **74.0%** — vendor-reported. **Independent check:** Artificial Analysis IFBench **73.5%** — agrees to within 0.5 points, the cleanest vendor/independent agreement in the file.
- Tau3-Banking / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (unchanged).

Reasoning / knowledge:

- GPQA Diamond: **78.8% — vendor-reported.** **Independent (Artificial Analysis): 75.3%.** Conflict of 3.5 points; the AA number is preferred for scoring purposes (independent harness), but the two are close enough that neither invalidates the other.
- HLE: **5.2% no-tools — vendor-reported**, and no HLE-with-search figure exists for the 12B. **Independent (AA): 15.7%**, which is materially *higher* than the vendor's no-tools cell — almost certainly a different HLE configuration (search/with-search style). Both are recorded; the vendor 5.2 remains the conservative figure.
- MMLU Pro: **77.2%**; MMMLU (multilingual): **83.4%** — vendor-reported; no independent rerun found.
- AIME 2026 (no tools): **77.5%** — vendor-reported (BenchLM echoes it with the model card cited as source — not independent).
- BigBench Extra Hard (micro avg): **53.0%** — vendor-reported.
- **AA Intelligence Index: 14 — INDEPENDENT, new this pass** (AA ranks it #21/142 within its own open-weight comparison set, median 8; output speed measured at **111.3 t/s**, #23/142). In absolute terms 14 is low: the methodology's mid reference band is Index 20–35.
- **CritPt: 0.0% — INDEPENDENT, new this pass.** The model scores nothing on the hardest critical-reasoning items; this was invisible in the first pass.
- **AA-Omniscience Index: −52.7% — INDEPENDENT, new this pass** (12B's worst relative showing: it answers confidently and is wrong very often).
- **AA-LCR v1.1: 63.7% — INDEPENDENT, new this pass** (long-context reasoning; the same family comparison gives 65.7% for the 26B A4B and 32.0% for the E4B, so the 12B's long-context reasoning is genuinely mid-tier).
- BenchLM overall: **36.35/100, #155 of 954** (BenchAlign v5.8, last updated 2026-10-16) — an independent composite, but built almost entirely from vendor-sourced rows; its own note says coverage is partial and the score is conservative. BenchmarkList's independent composite is **ECI 119.23, #144/398 (open-weight #62/158)**, from 21 rows of which only **1 is verified and 11 are "other sources"** — i.e. mostly relabelled vendor data.

Coding:

- LiveCodeBench v6: **72.0%** — vendor-reported (BenchLM/BenchmarkList repeat it with the model card cited).
- **AA Coding Index: 31.0% — INDEPENDENT, new this pass** (BenchLM coding lane 22.8, #113/150, marked *Estimated* because it is a projection from partial rows).
- Codeforces ELO: **1659** — vendor-reported.
- SciCode: **38.0%** — vendor-reported.
- SWE-bench Verified / SWE-Pro / Vibe Code Bench / DeepSWE: **no verified public score found** (unchanged — Google's model card publishes no SWE-bench row at all, which is itself the headline).

Long context:

- MRCR v2 8-needle @128k (average): **43.4%** — vendor-reported. (A third-party aggregator, gemmai4.com, quotes "RULER at 128K: 12B 91.2 vs 26B A4B 89.8"; the 12B half matches the vendor RULER table, so this is a **restatement of vendor data, not an independent measurement** — it is not used as evidence.)
- RULER accuracy @32k: **96.4%** — vendor-reported. No first-party RULER figure above 32k exists in any source reviewed this pass; behaviour near the 256K limit remains unmeasured by the vendor, and the only independent long-context number is AA-LCR 63.7%.

### Normalized scores (1–100)

- **Tool use: 70/100 (was 74).** **Lowered on new independent evidence, not on vendor data.** Tau2 69.0% and IFBench 73.5% (independent, agreeing with the vendor's 74.0) keep it well above the edge tier, and IFEval 97.2 confirms format discipline. But Artificial Analysis's independent **GDPval-AA of 647 Elo (#190/340)** measures real knowledge-work task completion far below this project's mid reference (~900–1200), and BenchmarkList independently reports a **Terminal-Bench 2.1 deficit of −58.0 points against the leader** — the independent evidence is uniformly weaker than the vendor's own tool-use story. Caps remain Terminal-Bench Hard 18.0% and the total absence of Tau3, MCP-Atlas, Claw-Eval or SWE-Atlas evidence. The unresolved AA-vs-vendor Terminal-Bench-Hard conflict (vendor 18.0 vs a CloudPrice mirror reading of ~0.2) was deliberately given zero weight because the AA 4.0 row is unpublished for this model.
- **Reasoning: 74/100 (was 76).** **Slightly lowered.** GPQA Diamond is now corroborated by an independent run (AA 75.3 vs vendor 78.8 — close), and AA-HLE 15.7 partially rehabilitates the vendor's dismal 5.2 no-tools cell. Against that, three new independent negatives are hard to ignore: **CritPt 0.0%**, **AA-Omniscience −52.7%** (the model confidently asserts wrong answers at a very high rate), and an **AA Intelligence Index of 14** in absolute terms, below the methodology's 20–35 mid band. MMMLU 83.4% and AIME 2026 77.5% still mark this as the strongest reasoning-per-byte member of the family; frontier-level expert knowledge is not there.
- **Context window: 85/100 (unchanged).** 256K tokens is a real working window, and the new **independent AA-LCR v1.1 at 63.7%** is the first outside confirmation that long-context *reasoning* (not just needle retrieval) holds up at this size — it slightly strengthens the case. Still capped by vendor MRCR @128k at 43.4%, and no first-party RULER figure exists above 32k in any source reviewed on 2026-10-17, so the 256K ceiling itself remains unmeasured.
- **Multimodal: 82/100 (unchanged).** The independent AA-MMMU-Pro **69.7%** lands within 0.6 points of the vendor's 69.1 — genuine corroboration, not inflation. Image, audio (CoVoST, FLEURS) and frame-based video in one encoder-free 12B decoder remains unusually broad coverage. Caps unchanged: MedXPertQA MM 48.7% on medical imagery, and vision trailing the 26B A4B on multi-step visual reasoning. The one new claim encountered (AA blurb: "outputs text and image") is rejected as an aggregator error against the vendor card.
- **Coding: 78/100 (unchanged).** LiveCodeBench v6 72.0% and Codeforces 1659 keep it near the 26B A4B at 12B dense, and the new **independent AA Coding Index of 31.0%** is directionally consistent with "decent completion coding, no repository-scale agentry". SciCode 38.0 shows real scientific-code ability. No SWE-bench Verified, SWE-Pro or Vibe Code Bench figure exists anywhere — Google publishes none — and Terminal-Bench Hard 18.0% still caps end-to-end agentic coding.
- **Cost efficiency: 92/100 (unchanged).** The **newly documented first-party rate of $0.10 in / $0.30 out per 1M** (AA median, matching AIIQ) is what the first pass could not find, and it fills a real documentation gap — but it is a metered price that Artificial Analysis itself calls "somewhat expensive" against comparable open-weight models. Apache 2.0 weights and a 6.7 GB Q4_0 build keep self-hosting near-free on a laptop. Not 100 because no free hosted tier and no verified discount-with-end-date exists for this route.
- **Overall Score: 77.8/100 (was 79.0).** Arithmetic: `(Tool 70 + Reasoning 74 + Context 85 + Multimodal 82 + Coding 78) / 5 = 389 / 5 = 77.8`. Cost efficiency is excluded from the mean per `RULES.md`. Best fit: local multimodal agents and fine-tuning on consumer hardware; explicitly not a frontier-reasoning or professional-knowledge-work model, which the new independent GDPval-AA and Omniscience numbers make clear.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17 (second pass; first pass 2026-10-05)
- Method: public internet research. **12 web searches run across this four-model batch**, of which the 12B-relevant ones were the deep "Gemma 4 model card benchmarks update October 2026", "Gemma 4 12B Unified pricing API hosted benchmark independent evaluation", "Artificial Analysis gemma-4-26b-a4b-it intelligence index coding index October 2026" and "Gemma 4 news October 2026 update deprecation Vertex AI Gemini API new release" passes. Vendor sources were checked first (Google AI for Developers Gemma 4 model card and Gemma releases log, `google/gemma-4-12B` HF card), then independent (Artificial Analysis, BenchLM, BenchmarkList, CloudPrice, Vals AI, llamaperf, Ollama). Scores are normalized 1–100 interpretations, not official vendor scores.
- New sources this pass (working URLs):
  - Artificial Analysis model page, Gemma 4 12B (Reasoning) — Index 14, 111.3 t/s, $0.10/$0.30 median price — https://artificialanalysis.ai/models/gemma-4-12b
  - BenchLM, Gemma 4 12B (updated 2026-10-16; BenchAlign v5.8, 36.35, #155/954, AA-derived rows) — https://benchlm.ai/models/gemma-4-12b
  - BenchmarkList, Gemma 4 12B (ECI 119.23 #144/398; GDPval-AA 647; Terminal-Bench 2.1 deficit) — https://benchmarklist.com/models/google-gemma-4-12b-it
  - CloudPrice, Gemma 4 12B pricing & specs (updated 2026-10-07; BB16 hosting estimate, mirrored AA benchmarks) — https://cloudprice.net/models/google-gemma-4-12b
  - AI IQ pricing, Gemma 4 12B — confirms $0.10/$0.30 on Google's API — https://www.aiiq.org/models/gemma-4-12b/pricing
  - Google Gemma releases log (confirms 2026-06-03 as the 12B release and no newer checkpoint) — https://ai.google.dev/gemma/docs/releases
  - Ollama `gemma4:12b` library page — https://ollama.com/library/gemma4:12b
  - llamaperf Gemma 4 community speed reports (llama.cpp 65 / Ollama 25 / vLLM 8 / MLX 5, as of 2026-10-17) — https://llamaperf.com/model/gemma-4
  - llama.cpp release b11414 (2026-10-05), ongoing local-runtime support — https://github.com/ggml-org/llama.cpp/releases/tag/b11414
  - Gemini API release notes (no 12B endpoint; `gemma-4-26b-a4b-it` / `gemma-4-31b-it` only, 2026-04-02) — https://ai.google.dev/gemini-api/docs/changelog
- Re-run when: Artificial Analysis or BenchmarkList publishes a **Terminal-Bench 4.0 / 2.1 result for the 12B** (resolves the 18.0-vs-0.2 conflict); any Google-published **SWE-bench Verified / SWE-Pro** row for the 12B; a **first-party max-output token cap** for the 256K window; a first-party **RULER or MRCR figure above 32k**; a change to the **$0.10/$0.30 rate or a published discount end date**; or a new Gemma 4 checkpoint from Google (the releases log is the authoritative check).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.