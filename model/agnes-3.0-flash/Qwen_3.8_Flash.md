# Agnes 3.0 Flash — findings by Qwen 3.8 Flash

- Source: Agnes AI (`agnes-ai/agnes-3.0-flash`), open-weight Preview checkpoint Sep 2026 + hosted API
- Date: 2026-11-13 (UTC) — deep research pass (2 independent web searches + 3 primary-source fetches: the Hugging Face model card, the official Agnes API docs, and a preview-vs-production teardown)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **CHECKPOINT CLARITY (drives this whole report).** `model/agnes-3.0-flash`'s id `agnes-ai/agnes-3.0-flash` resolves to the **open-weight "Agnes-3.0-Flash **Preview**" checkpoint** (33B, Apache 2.0, 262K) on Hugging Face — that repo is the ONLY exact-ID source with **measured benchmark numbers**. A **separate proprietary production/API** model shares the name but publishes **no independent benchmark results** (Artificial Analysis returned 404 for the exact ID this pass), and both the model card and third-party teardowns state the two are different checkpoints and that **Preview scores must not be attributed to the API** (and vice-versa). This report scores the measured Preview weights for capability and uses the API doc for context/price, flags every gap explicitly, and treats the whole thing as **medium/low confidence** because of the unresolved two-model split.

## Model card

- **Name:** Agnes 3.0 Flash (Agnes AI; the tracked folder is the open-weight Preview checkpoint, the API is the same-name hosted build — flag: variant/checkpoint ambiguity, not a clean single model).
- **Short description:** A hybrid-attention (54 recurrent gated-delta + 18 global-attention layers) reasoning/tool model aimed at agentic coding and tool-driven tasks; Preview is 33B open-weights, the production API is proprietary and ultra-cheap. Superseded on the vendor's own roadmap by "Agnes 3.0 Pro."
- **Provider / access:** Agnes AI APIHub (`https://apihub.agnes-ai.com/v1`, model `agnes-3.0-flash`, OpenAI Chat Completions + Responses + Anthropic Messages compatible); open weights on Hugging Face (`Agnes-AI/Agnes-3.0-Flash`).
- **Release / knowledge:** Preview open-weight checkpoint released 2026-09 (HF citation Sep 2026); API hosted tier live since; exact GA date undisclosed.
- **IDs:** `agnes-ai/agnes-3.0-flash` (API model name `agnes-3.0-flash`; HF repo `Agnes-AI/Agnes-3.0-Flash` = Preview).
- **Context window:** ⚠️ **conflict** — official **API doc: 512K / 65,536 max out**; **HF Preview: 262,144**; a third-party teardown claims the API is "1M". Scored against the vendor API doc's **512K** (authoritative), noting the Preview weights I benchmark on are capped at **262K**. `meta.json` lists 512K (matches the API doc).
- **Modalities:** text + image in (Preview additionally does **video** understanding), text out; adjustable reasoning effort (high/medium/low + thinking-off); native tool calling. No audio, no non-text output.
- **Pricing (as of 2026-11-13):** **$0.05 / $0.15 per 1M in/out**, cached input **$0.005/1M**; "Angel User Trial" $0 across the board. Ultra-low list price.
- **Architecture:** Preview = 33B dense hybrid-attention (72 layers, hidden 5120, vocab 248,320, 27-layer vision tower), Apache 2.0; production API internals undisclosed.

### Raw benchmarks found

All rows are **exact-ID measured numbers for the Preview open-weight checkpoint** (HF card); the harness/snapshot mixing is flagged by the source itself. The **production API has no published independent scores** (AA 404 this pass) — noted, not invented.

Reasoning / knowledge:

- GPQA Diamond: **85.05%** (HF, Preview) — strong, but ⚠️ `meta.json` claims **"92.4% GPQA Diamond"**, which the measured card does **not** support (85.05) and no public source reproduces → treated as an unsupported scaffolded figure.
- AA-Omniscience Accuracy: **23.00%** (HF, Preview) — very weak factual reliability / high hallucination (a genuine capability cap).
- Artificial Analysis Intelligence Index: **no verified public score found** (AA exact-ID page 404 this pass).

Instruction following / long context:

- IFBench: **74.20** (HF, Preview)
- AA-LCR (long-context reasoning): **68.33%** (HF, Preview) — retrieval depth bounded by the Preview's 262K window.

Coding:

- SciCode: **38.08** (HF, Preview) — the only measured coding row; **no verified public SWE-bench / LiveCodeBench / Terminal-Bench number found** for the exact ID (meta itself admits "sparse independent benchmark coverage on coding and agentic benchmarks").

Agentic / tool use:

- **No verified public agentic benchmark found** (no Terminal-Bench / Tau / AutomationBench / GDPval row). Tool calling + orchestration are documented capabilities, not measured scores.

Multimodal:

- **No verified public vision benchmark found** (no Chartography / MMMU row); image (+video on Preview) input is capability-documented only.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native tool calling, function-calling and multi-step orchestration are first-class and the whole product is aimed at agent workflows, but there is **zero measured agentic benchmark** for the exact ID — so it is credited as a capable-but-unverified tool model, not a proven one.
- **Reasoning: 68/100.** GPQA Diamond 85.05% is genuinely strong and IFBench 74.2 shows solid instruction adherence, but AA-Omniscience Accuracy of just **23%** (heavy hallucination) and no AA-Intelligence-Index row hold it well below the GPQA-implied ceiling.
- **Context window: 80/100.** The API's documented 512K puts it in the 500K–1M band (85–94), tempered to 80 because the **measured** Preview weights run at 262K and AA-LCR 68.33 is only mid — no dedicated needle/MRCR retrieval row for the production window.
- **Multimodal: 62/100.** Text + image input (Preview also does video) = the +image band (60–70); no measured vision benchmark and text-only output, so it sits mid-band rather than on quality.
- **Coding: 55/100.** Positioned as a coding-agent model but the only exact-ID coding row is SciCode 38.08 (mid), with no SWE-bench/LiveCodeBench — capped by that sparsity and the vendor's own admission of thin coding/agentic coverage.
- **Cost efficiency: 98/100.** $0.05 / $0.15 per 1M, cache $0.005, $0 trial tier — among the cheapest hosted models in the dataset. *Excluded from Overall; scored independently.*
- **Overall Score: 64.0/100.** Half-up mean of the five quality dims (55+68+80+62+55)/5 = **64.0** (Cost excluded). Best fit: a dirt-cheap, GPQA-strong reasoning/tool model for high-volume agent and instruction work where factuality risk (Omniscience 23%) is tolerable. Divergence note: this is **below the queue average (71.7)** — the gap is driven by the weak 23% Omniscience-accuracy and sparse coding/agentic measurement, and by refusing to score on the meta's unsupported "92.4% GPQA" (measured 85.05) or to cross-attribute any production-API numbers that do not exist.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-13 (folder had `meta.json` + `average.md` + peer raters but no `Qwen_3.8_Flash.md`; slug is **in `model-queue.md`** at Overall 71.7, so this adds one more independent rater)
- Method: public internet research (2 searches + 3 primary fetches); scores are normalized 1–100 interpretations, not official vendor scores. Every scored row is an exact-ID measured number from the HF Preview checkpoint (GPQA/IFBench/SciCode/AA-LCR/Omniscience) plus the vendor API spec (512K, $0.05/$0.15, text+image); no production-API numbers are invented, and the meta's unsupported 92.4% GPQA / 226 tok-s claims are flagged rather than scored. Benchmark provenance (Preview-vs-production checkpoint split) is stated per `RULES.md` / `tasks/research.md`.
- Reference URLs (all fetched this pass):
  - [Hugging Face — Agnes-AI/Agnes-3.0-Flash model card (Preview benchmark table + architecture)](https://huggingface.co/Agnes-AI/Agnes-3.0-Flash)  ← *fetched*
  - [Agnes AI official docs — Agnes 3.0 Flash API (512K/65K, modalities, $0.05/$0.15)](https://wiki.agnes-ai.com/en/docs/agnes-30-flash)  ← *fetched*
  - [MindStudio — Agnes-3.0-Flash: Preview vs Production, what actually differs](https://www.mindstudio.ai/blog/agnes-3-flash-preview-vs-production)  ← *fetched*
- Future sources: re-score once Artificial Analysis indexes the **production API** exact ID with independent numbers, resolving the two-checkpoint split; add a new file with the same headings when that lands.
