# MiMo-V2.6-Flash — findings by MiniMax M3.1 Flash

- Source: Xiaomi (`mimo-v2.6-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash
- **Short description:** Xiaomi's September-2026 open-weight, omni-modal, ultra-cheap model — "Full-modality, high-intelligence, low-cost reasoning model — the best balance for high-frequency calls" — and the **cheapest capable model in this dataset at $0.14 in / $0.28 out per 1M** (free on OpenCode Zen for a limited period). It is the sibling of **MiMo-V2.6-Pro** (1.02T total / 42B active at 3.1× the price) and, unusually, it **beats its own flagship on CyberGym (95.1 vs 94.0)**.
- **Provider / access:** Xiaomi MiMo API `mimo-v2.6-flash` / `mimo-v2.6-pro` at `https://api.xiaomimimo.com/v1` (OpenAI- **and** Anthropic-protocol compatible); **open weights, MIT licence** at `huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL` (ModelScope mirror, SGLang and vLLM recipes); OpenRouter `xiaomi/mimo-v2.6-flash`; OpenCode Zen `opencode/mimo-v2.6-flash-free` (free route).
- **Release / knowledge:** released **2026-09-21** (AA: "MiMo‑V2.6‑Flash was released on September 21, 2026"; OpenRouter `created` 2026-09-21). Knowledge cutoff: **not published** — the API's default system prompt states "Your knowledge cutoff date is December 2024" (placeholder); AA `knowledgeCutoffDate: null`.
- **IDs:** `mimo-v2.6-flash` (Xiaomi API), `xiaomi/mimo-v2.6-flash` (OpenRouter), `XiaomiMiMo/MiMo-V2.6-Flash-RL` (HF weights), `opencode/mimo-v2.6-flash-free` (Zen).
- **Context window:** **1M tokens**, **max output 128K**, rate limits **RPM 100 / TPM 10M**.
- **Modalities:** input text, image, video and audio ("Text, Image, Video, Audio"); output text — with a 681M-parameter MiMo ViT (28 layers, 24 SWA + 4 GA) and a 308M AudioTokenizer plus a 127M audio patch encoder.
- **Reasoning controls:** `extra_body={"thinking":{"type":"disabled"}}` to turn thinking off; dedicated `--reasoning-parser mimo` and `--tool-call-parser mimo`; recommended `temperature=1.0, top_p=0.95`. OpenRouter marks reasoning as optional.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$0.14 in (cache miss) / $0.0028 cache hit / $0.28 out** (¥1 / ¥0.02 / ¥2) — Pro is $0.435 / $0.0036 / $0.87. **OpenCode Zen offers only a Free route** (`mimo-v2.6-flash-free`, "Free / Free / Free"): "available on OpenCode for a limited time. The team is using this time to collect feedback and improve the model", with "During its free period, collected data may be used to improve the model" — i.e. **no zero-retention guarantee**, unlike some other free rows.
- **Architecture:** Sparse MoE, **309B total / 15B activated**; 48 layers (39 SWA / 9 GA), hidden 4096, **256 routed experts with 8 active**, sliding window 128, no shared experts, first block global attention + dense FFN, 5-layer SWA MTP drafter; MIT licence.

### Raw benchmarks found

> Xiaomi's MiMo-V2.6 technical-report table is marked "vendor"; Artificial Analysis (AA-run) is the only independent tracker with a per-evaluation set. All values are from the Flash column.

Agent / tool use:

- Terminal-Bench 2.1: **87.6%** (vendor) — AA's TB 2.1 field is **null** (not measured)
- Terminal-Bench 4.0: **28.8%** (vendor) / **22.73%** (AA)
- Toolathlon-Verified: **73.6%** (vendor); AutomationBench v1.0.6 **52.3%** (vendor) / **64.05%** (AA objective-share); JobBench **61.2%** (vendor); Agents' Last Exam **27.6%** (vendor); MiMo Cyber Bench 77.2% (vendor)
- CyberGym **95.1%** (vendor) — the highest in the BenchLM catalog, ahead of MiMo-V2.6-Pro's 94.0
- ExploitGym **6.0%** (vendor) / ExploitBench **25.3%** (vendor) / SEC-Bench Pro **47.5%** (vendor)
- GDPval-AA 1607.51 (AA); Tau2 / Tau3-banking: **null** (AA); Claw-Eval / Toolathon (non-Verified) / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- HLE **35.08%** (AA); CritPt **12.0%** (AA); LCR **74.33%** (AA); MLCR not published
- **Omniscience index -12.68** with accuracy **27.0%** and hallucination rate **54.36%** (AA) — a negative index, i.e. more wrong than right on the knowledge probe; AA notes the index "has no penalty for refusing to answer"
- Artificial Analysis Intelligence Index: **38** (#12/121 open-weight models) / 37.88 raw
- No GPQA, FrontierMath, MMLU-Pro, HLE-Diamond or IFBench figure published for the Flash build
- MMLU-Pro 88.1 and BBH 86.6 / HellaSwag 87.1 / LiveCodeBench-Base 37.6 / SimpleQA 33.5 are **base-model** (pre-RL) rows from Xiaomi's table, not post-training results

Coding:

- DeepSWE v1.1 **67.9%** (vendor); Terminal-Bench 2.1 87.6% (vendor) / TB 4.0 22.73–28.8%; MiMo Code Bench 61.2% (vendor); ProgramBench **26.0%** (vendor); SciCode **51.27%** (AA); FrontierCode 1.1 **42.07%** (AA); Terminal-Bench-Science 0.1 **4.29%** (AA)
- No SWE-bench, LiveCodeBench or CursorBench figure published for the Flash build

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement** for MiMo-V2.6-Flash. 1M context with a 128K max output; AA-LCR 74.33% (short band only).

Performance profile (AA): Index 38 (#12/121 open weights), output **47.8 t/s** (#63/78) — "notably slow" against an open-weight median of 77.3 t/s, but with a **190% provider spread** (Makora 103.9 t/s, Xiaomi 47.8, Novita 41.6, GMI 39.2, DeepInfra 35.9), TTFT 4.84s, end-to-end 57.17s (41.87s of it reasoning), cost per Index task **$0.06** (#9/43), 240M output tokens (#44/47).

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Terminal-Bench 2.1 **87.6%** (vendor, the only TB 2.1 number for this model), Toolathlon-Verified 73.6%, JobBench 61.2%, AutomationBench 52.3% (vendor) / 64.05% (AA), MiMo Cyber Bench 77.2%, CyberGym **95.1%**, GDPval-AA 1607.51. Capped by the rubric's anchors (tau3 ~50%+ → not measured; GDPval ~1750+ → 1607.51), by Terminal-Bench 4.0 at 22.73–28.8%, by Agents' Last Exam 27.6%, and by the absence of τ-bench, Claw-Eval, MCP-Atlas and Toolathon rows.
- **Reasoning: 70/100.** An AA Intelligence Index of **38 (#12 among open-weight models)** and LCR 74.33% are respectable for a $0.28/M model, and the frontier-math-style raw results (Codeforces-class competitive coding) show real capability. Capped by the **Omniscience index of -12.68** (accuracy 27.0%) — the weakest knowledge profile among the models in this dataset — by HLE 35.08%, CritPt 12.0%, the complete absence of published GPQA, FrontierMath or MMLU-Pro numbers, and by Xiaomi's own base-model rows being the only knowledge data (SimpleQA 33.5%).
- **Context window: 95/100.** 1M-token context with a 128K max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no long-context retrieval measurement exists** for this model, AA-LCR 74.33% covers the short band only, and the first-party rate limits (RPM 100 / TPM 10M) make 1M-token jobs operationally slow even when they are allowed.
- **Multimodal: 88/100.** Text, image, video and audio input with text output — the rubric's "+audio in = 90–100" band — with the 681M MiMo ViT and 308M AudioTokenizer, and MiMo VisualCoding 71.5% plus MMMU-Pro 73.06% (AA). Held at 88 because the vision/audio evidence is thin and vendor-published, and because Artificial Analysis lists only "text and image" for the evaluated configuration.
- **Coding: 78/100.** Terminal-Bench 2.1 **87.6%** (above the rubric's 85% anchor) and MiMo Code Bench 61.2%, DeepSWE 67.9%, Toolathlon-Verified 73.6%, CyberGym 95.1%. Capped by DeepSWE 67.9% (under the 74% anchor), Terminal-Bench 4.0 at 22.73–28.8%, Terminal-Bench-Science 4.29%, ProgramBench 26.0%, SciCode 51.27% (under the 55% anchor), FrontierCode 42.07%, and the absence of any SWE-bench or LiveCodeBench figure.
- **Cost efficiency: 95/100.** The evaluated route — OpenCode Zen `opencode/mimo-v2.6-flash-free` — is **Free / Free / Free**, and the durable first-party price is **$0.14 in / $0.28 out with a $0.0028 cache hit**, the cheapest per-token rate of any model in this dataset; Artificial Analysis measures **$0.06 per Index task** (#9 of 43 open-weight models) and the weights are MIT-licensed for self-hosting. The rubric's "$0 = 100" anchor is not credited in full because Zen's free tier is explicitly **time-limited and grants data use for model improvement** (no zero-retention guarantee); the durable paid price is scored instead, and it still lands near the ceiling.
- **Overall Score: 82.2/100.** (80 + 70 + 95 + 88 + 78) / 5 = 82.2 — best-fit: the **cheapest capable omni-modal open-weight model** in the dataset — full audio/video/image input, 1M context, MIT weights, a free Zen route and $0.14/$0.28 first-party — an excellent high-frequency workhorse, but with the weakest factual reliability measured here (Omniscience -12.68, accuracy 27.0%) and a coding profile (Terminal-Bench 4.0 ~23–29%, DeepSWE 67.9%) that needs a stronger model beside it.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 28.8% (Xiaomi) vs 22.73% (AA).** A 6-point harness gap; both listed, AA used for scoring.
2. **The Omniscience index is negative (-12.68) with 27.0% accuracy.** AA's own note — the index "has no penalty for refusing to answer" — matters here: the model is not hedging, it is answering and being wrong. This is the single biggest reason the Reasoning score is not higher despite a top-12 open-weight index.
3. **CyberGym 95.1% (Flash) beats MiMo-V2.6-Pro's 94.0%** in Xiaomi's own table — the flagship is not the best model in its own family on the cyber eval, and no independent CyberGym tracker was found for either.
4. **Tool-call repetition (Xiaomi's own disclosure, 2026-09-27):** "the model would sometimes issue the same or highly similar tool calls repeatedly, consuming substantial time and context without making meaningful progress" — "Our internal evaluations confirmed this pattern: the response-level repetition rate exceeded 0.05%". Harness measurements: OpenCode 1.02% (Flash) / 0.54% (Pro), MiMo Desktop 0.19%, Claude Code 0.27%; "flooding grew 11.1%→24.6% by RL step 20" and a strict 32→8 repetition cap "would cost $2.31 million" (the fix via MOPD teacher + OPD cost ~$90,000). Patched MOPD checkpoints have been on the API since 2026-09-25 with unchanged model names. This is a real agentic caveat and is reflected in the tool-use cap.
5. **Speed 47.8 t/s (Xiaomi) vs 103.9 t/s (Makora) vs 35.9 t/s (DeepInfra)** — AA notes "a 190% difference between the fastest and slowest", so throughput depends entirely on the host.
6. **Verbosity — 240M output tokens on the index**, "at the higher end compared to other open weight models of similar size (median: 140M)", with 41.87s of a 57.17s end-to-end run spent reasoning.
7. **Modalities — AA lists "text and image"; Xiaomi and OpenRouter list text+image+video+audio.** The vendor list is used; the discrepancy is recorded.
8. **The free Zen route is not a durable $0 tier:** "During its free period, collected data may be used to improve the model" — the cost score therefore uses the paid first-party rate rather than crediting 100.
9. **Base-model vs post-training rows.** Xiaomi's MMLU 88.1, BBH 86.6, HellaSwag 87.1, LiveCodeBench-Base 37.6 and SimpleQA 33.5 are the **pre-RL base** numbers and are not read as the Flash model's reasoning scores; the reasoning score is anchored on the AA index and on the published post-training benchmarks.
10. **The official Terminal-Bench 4.0 board could not confirm the AA figure** — the tbench.ai leaderboard is client-rendered and its server HTML contained no "mimo" match, so the 22.73% rests on Artificial Analysis alone.

### Notes on identity

- `mimo-v2.6-flash` is a distinct SKU from `mimo-v2.6-pro` (309B/15B active vs 1.02T/42B active; $0.14/$0.28 vs $0.435/$0.87) and from the previous `mimo-v2.5-pro` generation (DeepSWE 19.0, AutomationBench 16.0, Terminal-Bench 2.1 65.2 in Xiaomi's own table).
- The open-weight checkpoint is published as **MiMo-V2.6-Flash-RL** (post-training); the sibling `MiMo-V2.6-Flash` repository returned HTTP 401 at research time.
- `mimo-v2.6-flash-free` on OpenCode Zen is a **promotion of the same model**, not a separate model — the only MiMo-V2.6 row in Zen's model table.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Xiaomi's MiMo-V2.6 technical report and Hugging Face model card (architecture, licence, self-host recipes, the Flash column of the benchmark table), the MiMo API documentation (ids, limits, thinking controls), Xiaomi's own tool-call-repetition disclosure, Artificial Analysis (model page, per-evaluation payload, provider speed spread), the BenchLM evidence ledger, OpenRouter, OpenCode Zen, and the Hacker News release thread. Vendor-vs-independent conflicts — including the Terminal-Bench 4.0 gap, the negative Omniscience index and the free-tier data-use caveat — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_V2.6_Flash.md`, using the same headings.
