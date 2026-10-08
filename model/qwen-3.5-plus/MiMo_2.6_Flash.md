# Qwen 3.5 Plus — findings by MiMo 2.6 Flash

- Source: Alibaba / Qwen (`qwen3.5-plus`, QwenCloud hosted; Qwen3.5 generation)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-Plus — Alibaba's **hosted accuracy-tuned value tier** of the Qwen3.5 generation (family released **2026-02-16**, Apache-2.0 open weights alongside: `Qwen3.5-397B-A17B` flagship + 122B/35B/27B/9B/… ladder).
- **Short description:** 397B-total / **17B-active** sparse MoE (512 experts) with **hybrid attention** — ~75% Gated DeltaNet linear attention + ~25% grouped-query softmax/RoPE — and a single **early-fusion** backbone for text/image/video (first open-weight Qwen unifying the old Qwen3 text + Qwen3-VL vision lines; audio is a separate Qwen-Omni line). The hosted Plus endpoint extends context to **1M** and adds built-in tools. Vendor claim: "on par with SOTA leading models across task evaluations; a leap over the 3 series in pure-text and multimodal."
- **Provider / access:** QwenCloud / Alibaba Cloud Model Studio (`qwen3.5-plus`), OpenRouter (~$0.30/$1.80), DeepInfra hosts the open sibling `Qwen/Qwen3.5-397B-A17B` ($0.54/$3.40); self-host Apache-2.0 weights. No Zen Free ID (`noFreeId: true`).
- **Release / knowledge:** Qwen3.5 family 2026-02-16 (flagship); Plus endpoint current as of 2026-10-07. Knowledge cutoff not published.
- **Context window:** **1,000,000 total** — **991,808 in / 65,536 out** (thinking mode: 983K in / 65K out, max reasoning budget 81K); open-weights sibling is 256K native.
- **Modalities:** **text, image, video in** (family card also lists PDF/document understanding); text out; deep thinking on/off (`enable_thinking`); function calling, structured outputs, prefix/partial mode, context cache, batches, fine-tuning.
- **Pricing (as of 2026-10-07):** **$0.40 in / $2.40 out** per 1M (Model Studio Intl, ≤256K); cache write $0.50, **cache read $0.04**; China region ≈ $0.115/$0.688; OpenRouter from ~$0.30/$1.80. Paid.
- **Built-in tools:** `web_search`, `web_extractor`, `code_interpreter`, `t2i_search`, `i2i_search` (Responses API).
- **Rate limits:** 5M TPM / 15K RPM (published tier).
- **Architecture:** hybrid linear-attention MoE as above; serving efficiency is the headline (long-context throughput vs dense Qwen3-Max at "comparable quality").

### Raw benchmarks found

> Primary: QwenCloud official model page (specs/pricing/tools — no benchmark table
> published for the Plus endpoint itself). Benchmarks below are **Qwen3.5-generation rows**
> (family release, sourced: DeepInfra API run, DataCamp, Codersera, Analytics Vidhya —
> the Analytics Vidhya piece specifically covers qwen3.5-plus) via the AI/TLDR registry —
> the same lineage caveat as our qwen-3.8-flash report applies: hosted-plus rows are
> inherited from family/open-weights evaluations unless noted.

Tool / agent use:

- Tau2-Bench: **86.7** (Analytics Vidhya, Plus-specific article) — strong multi-turn tool use.
- BrowseComp: **78.6** (DataCamp) — elite agentic-search band (beats GPT-5.2 Thinking's 65.8 and Seed 2.0 Pro's 77.3).
- Terminal-Bench 2.0: **52.5** (DataCamp) — **under** the frontier refs.
- OSWorld / MCP-Atlas / Toolathlon / GDPval: no row found for this model.

Reasoning / knowledge:

- GPQA Diamond: **88.4** (DeepInfra run) — near the 90 ref, misses it.
- AIME 2026: **91.3** (Codersera); MMLU-Pro: **87.8** (DeepInfra); IFBench: **76.5** (DataCamp).
- HLE / ARC-AGI / AA Intelligence Index: **no row found** for this model (refs unverifiable).

Coding:

- SWE-bench Verified: **76.4** (DeepInfra run) — clears the DeepSWE-class 74+ band on the closest available row.
- LiveCodeBench v6: **83.6** (Codersera); Terminal-Bench 2.0: 52.5 as above.
- SciCode / SWE-bench Pro / DeepSWE: no row found.

Long context:

- Hosted 1M window (991K in); open sibling 256K. No AA-LCR/MRCR/needle row found for Qwen3.5 in this cycle.

Multimodal (family runs):

- MMMU: **85**; MMMU-Pro: **79** (DataCamp); OmniDocBench v1.5: **90.8** (document/PDF parsing); Video-MME: **87.5** (DataCamp).
- No audio input (Qwen-Omni is the separate audio line).

### Normalized scores (1–100)

- **Tool use: 83/100.** Tau2 86.7 and BrowseComp 78.6 are both frontier-band rows — the BrowseComp figure beats several 2026 flagships in our table — but TB2.0 52.5 misses refs, and there is no OSWorld/MCP-Atlas/Toolathlon/GDPval coverage to round out the agent picture.
- **Reasoning: 79/100.** GPQA 88.4 just under the 90 ref, AIME 2026 91.3 and MMLU-Pro 87.8 healthy, IFBench 76.5 good; HLE, ARC-AGI and AA Index rows are all absent, so zero of the three headline reasoning refs can be verified — scored on what exists.
- **Context window: 95/100.** 991K/1M native hosted = ≥1M tier floor; no retrieval-at-window benchmark published → floor, not top.
- **Multimodal: 88/100.** Text + image + video (+ PDF-grade document understanding) in → video/PDF band 75–90 near its top: Video-MME 87.5, OmniDocBench 90.8, MMMU-Pro 79, MMMU 85; no audio input and no PDF-specific OmniDoc row tied to the Plus endpoint keeps it at 88.
- **Coding: 82/100.** SWE-bench Verified 76.4 (DeepInfra-run) is a genuine frontier-band row and LCB v6 83.6 solid; TB2.0 52.5 misses refs, no SciCode/SWE-Pro/DeepSWE evidence, and hosted-endpoint figures are inherited from family runs.
- **Cost efficiency: 92/100.** $0.40/$2.40 (Intl) undercuts the $0.60/$2.20 ≈ 92 anchor on input and lands near it on output, with $0.04 cache reads (98% off) and China-region pricing at $0.115/$0.688 — only hosted-only availability and the >256K-tier uncertainty keep it from 93+.
- **Overall Score: 85/100.** (83+79+95+88+82)/5 = 85.4 → 85 — the cheapest 1M multimodal agent backbone in the set: BrowseComp 78.6 and Tau2 86.7 at forty cents per million input tokens, with reasoning refs unverifiable and a mid Terminal-Bench as the honest trade-offs.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — QwenCloud official model page (specs, pricing, tools, rate limits), AI/TLDR Qwen3.5 registry page (family release date, architecture, 13 sourced benchmark rows with per-row provenance: DeepInfra, DataCamp, Codersera, Analytics Vidhya), OpenRouter/DeepInfra pricing cross-check; scores are normalized 1–100 interpretations, not official vendor scores; family-vs-endpoint row attribution flagged per methodology.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
