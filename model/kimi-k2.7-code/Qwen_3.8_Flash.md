# Kimi K2.7 Code — findings by Qwen 3.8 Flash

- Source: Moonshot AI / Kimi K2.7 Code (`moonshotai/kimi-k2.7-code`; OpenRouter / Zen `opencode/kimi-k2.7-code`)
- Date: 2026-10-02 (UTC); second pass 2026-11-04 (UTC) — **price multi-confirmed, lifecycle tightening**: **$0.95 / $4.00 per 1M, cache hit $0.19** reproduced verbatim by Fireworks, commandcode, Vals, DevOps and BenchLM (effective ~$0.42/M input in cache-heavy agent loops); **new user access closed**: "K2.6 and K2.7 Code both cost $0.95/$4.00 **until Moonshot retires the K2 series, which closes to new users on October 31, 2026**" — the closure has now passed (existing access continues, retirement pending); already replaced as the `kimi-for-coding` route by K2.8 Preview (2026-09-11); Vals lists max output 256K (anomalously near-full-window — recorded side-note, not asserted); no new independent benchmark absolutes → **bands unchanged, Overall remains 73**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code (coding-first post-train of the K2.6 base)
- **Short description:** Moonshot's June-2026 open-weights (Modified MIT) coding specialist — a 1T-total / 32B-active sparse MoE (384 experts, 8 active, MLA, MoonViT ~400M vision) tuned for long-horizon repo/agentic coding at a fraction of Opus/GPT price, with a strong LiveCodeBench/SWE signal but poor unaided factuality.
- **Provider / access:** Moonshot/Kimi API; OpenRouter `moonshotai/kimi-k2.7-code`; open weights `moonshotai/Kimi-K2.7-Code` (HF created 2026-06-11). Reasoning (thinking-only) + tool calls + JSON mode; image input via MoonViT. No verified Zen Free ID.
- **Release / knowledge:** 2026-06-11/12; knowledge cutoff not verified.
- **IDs:** `moonshotai/kimi-k2.7-code`.
- **Context window:** **256K (262,144) tokens** (BenchLM + model card) — the curated `meta.json` "128K / Text in/out / Standard pricing" is an under-specified placeholder; scored on the verified 256K text+image data.
- **Modalities:** text + image in; text out; reasoning mandatory; tool calls. Coding-first — vision is incidental (no audio/video).
- **Pricing (as of 2026-10-02):** ≈$0.95 in / $4.00 out per 1M (aitoolsreview; Moonshot rate); open weights self-hostable. Cost excluded from Overall.
- **Architecture:** sparse MoE 1T/32B active, MLA (64 heads, 7168 hidden), SwiGLU, 160K vocab, 61 layers, MoonViT ~400M; post-train pass on K2.6 with ~30% fewer thinking tokens.

### Raw benchmarks found

> Verified against BenchLM `kimi-k2-7-code` (overall **54.59/100, #71 of 783**, 27 of 645 rows — partial coverage → conservative), citing Artificial Analysis, Vals AI, Cursor, OpenHarmony, the Moonshot HF model card and OpenRouter (fetched 2026-10-02). Vendor model-card numbers flagged as in-house.

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **67.0%**; τ²-bench: **90.1%** (AA); MCP Mark Verified **81.1%** / MCP Atlas **76.0%** (card)
- GDPval-AA: **1,114 Elo (26.3% normalized)**; AA Agentic Index **22.5%**; Kimi Claw 24/7 **46.9%** (card) → open-ended economic agent work is the weak spot

Reasoning / knowledge:

- GPQA Diamond (AA): **89.6%** — near-frontier; HLE (AA): **35.0%** (under the 40% bar); CritPt **10.0%**; AA-LCR **79.3%**; AA Intelligence Index **25.8**
- AA-Omniscience Index **-10.2%** (Accuracy 39.6% / Hallucination **82.4%**) — severe unaided-factuality failure; IFBench 63.1%

Coding:

- SWE-bench (Vals): **78.2%**; LiveCodeBench (Vals): **82.1%**; AA Coding Index **60.8**; AA-SciCode **47.8%**
- In-house card: Kimi Code Bench v2 **62.0**, ProgramBench **53.6**, MLS-Bench Lite **35.1**; CursorBench 3.2 **49.7**; OpenHarmony Bench **52.1**

Multimodal / long context:

- Design Arena Website **1273** (generation arena, not understanding) — the only visual-family row
- 256K window; AA-LCR 79.3 supportive; no MRCR/RULER ≥98%-at-length retrieval row published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 72/100.** τ² 90.1%, MCP Mark 81.1% / Atlas 76.0% and TB 2.1 67.0% are a strong structured-tool-calling cluster, but GDPval-AA 26.3% (1,114) and AA Agentic Index 22.5% show it collapses on open-ended long-horizon work; solid mid-upper, not frontier agentic.
- **Reasoning: 72/100.** GPQA Diamond 89.6% and AA-LCR 79.3% are near-frontier, but HLE 35.0% misses the bar, Index 25.8 and CritPt 10.0 are low-mid, and a **-10.2 Omniscience / 82.4% hallucination** profile is a heavy factuality penalty — the coding post-train clearly traded off general reasoning.
- **Context window: 78/100.** 256K sits in the 200K–500K tier (65–84); AA-LCR 79.3 is a good long-context-reasoning support; no ≥98%-at-length retrieval row → not near the ceiling.
- **Multimodal: 63/100.** Text + image in / text out is the +image 60–70 band (MoonViT confirmed), and Design Arena 1273 corroborates usable vision; no video/audio input, no non-text output, and no grounded visual-understanding row lifts it.
- **Coding: 80/100.** Vals SWE-bench 78.2% and LiveCodeBench 82.1% are genuinely strong, AA Coding Index 60.8 mid; in-house Kimi-Code 62 / ProgramBench 53.6 / SciCode 47.8 keep it from the 90 frontier band, but the real-harness coding numbers justify the coding-first positioning.
- **Cost efficiency: 90/100.** ≈$0.95 / $4.00 per 1M is cheaper than the ~$1.25/$4.25 (≈88) reference and self-hostable under Modified MIT — excellent value for the capability. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 72, Reasoning 72, Context 78, Multimodal 63, Coding 80 = 365/5 = 73.0 → 73. Best fit: the cheapest serious open-weights long-horizon coding agent with excellent tool/API discipline and strong real-harness SWE/LiveCode results — but its -10.2 Omniscience / 82.4% hallucination makes it unsafe for unaided factual recall or knowledge-critical reasoning, and its GDPval/AA-Agentic weakness says keep it on well-scoped repo tasks, not open-ended economic agent loops. BenchLM's own 54.59 aggregate reflects thin coverage plus these factuality penalties.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02). Confirmation pass on the evidence base plus one material lifecycle development.

**Sources:** pricing — https://fireworks.ai/blog/kimi-k2-7-code-agentic-coding (**"$0.95 per 1M input … $4.00 per 1M output … $0.19 per 1M on cache hits"** — matches Moonshot public rates), https://commandcode.ai/models/kimi-k2-7-code (same trio; "in an agent loop most input is cache-read, so the effective input rate is about **$0.42/M**"), https://www.vals.ai/models/kimi_kimi-k2.7-code (release **Jun 12, 2026**; context **262k**; token costs $0.95/4.00; its "Max Output Tokens 256k" cell is anomalous vs the 262K window — printed side-by-side, not adopted) and https://devops.com/moonshot-ais-kimi-k2-7-code-targets-token-efficiency-in-agentic-coding — five lanes, zero variance from pass-1's ≈$0.95/$4.00 · lifecycle — https://benchlm.ai/moonshot/api-pricing (Nov-2026: **"Kimi K2.6 and Kimi K2.7 Code both cost $0.95/$4.00 until Moonshot retires the K2 series, which closes to new users on October 31, 2026"** — closure date now passed; retirement window open) plus https://hokai.io/hub/models/kimi-k2.8-preview (K2.7 Code was replaced **in-place at the `kimi-for-coding` ID** by K2.8 Preview on 2026-09-11; Moonshot's Open Platform page still lists the K2.7 line as orderable for existing users) · benchmarks — no new AA/Vals absolutes for this id surfaced (K2.8 Preview has **no published benchmarks at all** per its own Oct-2026 review, and K3 rows belong to other ids — exact-ID; the pass-1 AA/Vals set remains the operative evidence base).

**What moved and how it was resolved:**

- **Nothing scored.** All bands rest on the same AA-independent + Vals-harness rows, reproduced without variance; Overall remains (72+72+78+63+80)/5 = 73.
- **Cost 90 confirmed with cache nuance.** $0.19 cache-hit pricing and the ~$0.42 effective agent-loop input rate strengthen the value case; band unchanged, excluded from Overall.
- **Lifecycle watch-item escalated but not flagged:** the new-user closure executed on **2026-10-31**, and the route role was taken by K2.8 Preview — yet the ID remains orderable for existing users on Moonshot + third-party open-weight lanes (Modified MIT weights on HF), so it is *superseded-and-closing*, not yet executed-retired. No legacy flag this pass; if Moonshot announces the K2-series retirement date next time, convert to legacy-with-date per convention.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `kimi-k2-7-code` rows citing Artificial Analysis, Vals AI, Cursor, OpenHarmony, Moonshot HF model card, OpenRouter — fetched 2026-10-02; aitoolsreview + OpenRouter catalog for the $0.95/$4.00 pricing, 1T/32B MoE architecture and June-2026 release); scores are normalized 1–100 interpretations, not official vendor scores. Flagged that many card numbers (Kimi Code Bench, MCP suites, Claw) are vendor/in-house while GPQA/HLE/LCR/Omniscience/GDPval are AA-independent and SWE/LiveCode are Vals-harness; curated meta (128K/text-only) understates the verified 256K text+image model.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Price five-lane confirmed ($0.95/$4.00, cache $0.19, ~$0.42 effective); **K2 series closed to new users 2026-10-31** (retirement pending, existing lanes live; `kimi-for-coding` handed to K2.8 Preview in Sep-2026) — watch-item, no flag yet; no new absolutes; Overall remains 73. Pass-1 text preserved verbatim above.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
