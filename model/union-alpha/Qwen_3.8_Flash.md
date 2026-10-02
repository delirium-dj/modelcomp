# Union Alpha — findings by Qwen 3.8 Flash

- Source: Circuit & Chisel / Unbiased — "Union Alpha" stealth = **Pareto 26.9** (`unbiased/pareto`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Union Alpha (2-day stealth preview, 2026-09-16 → 18) — revealed as **Pareto 26.9** by Circuit & Chisel, sold through Unbiased
- **Short description:** Not a newly trained foundation model but a **blended multi-model service**: a harness runs several existing open + frontier LLMs in parallel per request and synthesizes one answer ("Many models. One answer."). Strong knowledge/coding card scores for its price, component list undisclosed; superseded in the vendor line by the Pareto 26.10 Preview sibling.
- **Provider / access:** OpenRouter (`unbiased/pareto`, Chat Completions), Cloudflare Workers AI, Unbiased platform. Historical stealth IDs `stealth/union-alpha` / `opencode/union-alpha` were delisted after the free preview ended.
- **Release / knowledge:** stealth 2026-09-16; identity reveal + paid launch 2026-09-18; BenchLM page last updated 2026-10-01.
- **IDs:** `unbiased/pareto` (current canonical).
- **Context window:** 262,144 tokens total / 131,072 max output (OpenRouter catalog; BenchLM lists context "N/A" on the model card page — the catalog figure is the better-evidenced one). NOTE: the curated `meta.json` ("128K / Text in/out / Standard pricing") is a stale stealth-era placeholder; scored on the post-reveal verified data.
- **Modalities:** text + image in; text out; tool calling listed; no audio/video/PDF input and no non-text output verified.
- **Pricing (as of 2026-10-02):** $2.50 in / $7.50 out per 1M, cached input $0.25 (official Unbiased rate card / OpenRouter). Was $0 during the 2-day preview (ended).
- **Architecture:** proprietary ensemble/router over undisclosed component models — not open weights; BenchLM classifies Source Type "Proprietary / Reasoning", unranked (4 of 645 coverage).

### Raw benchmarks found

> BenchLM `pareto-26-9` (fetched 2026-10-02, updated 2026-10-01): all four displayable rows cite the official Unbiased model card (vendor-run); no public aggregate overall score is assigned ("unranked"). LiveBench/AutoExacto preview figures below come from the 2026-09-17/18 stealth-window testing and are marked as such.

Agent / tool use:

- Terminal-Bench 4.0: **51.00%** (vendor card; preview-era 36kr reporting ≈50% at $1.5–2/task is consistent)
- Tau3 / Tau2 / GDPval-AA / OSWorld / Claw-Eval: **no verified Pareto 26.9 row found**

Reasoning / knowledge:

- HLE w/o tools: **49%** (vendor card — clears the 40% frontier bar)
- ArXivMath: **88** (vendor card, preview snapshot); GPQA Diamond **90.9%** (OpenRouter AutoExacto preview, 2026-09-17 — harness uncertain, treated as corroborating not authoritative)
- LiveBench overall **76.1, #26/58** (reasoning 80.8, math 95.3, instruction-following 59.5) — preview-window, blend behavior may shift post-launch

Coding:

- DeepSWE: **74.0%** (vendor card — meets the 74% frontier reference)
- LiveBench coding **82.1** (preview); SWE-bench Verified / LiveCodeBench / SciCode: **no verified row found**

Multimodal / long context:

- MMMU-Pro: **78%** (vendor card)
- 262K window from catalog; no MRCR/RULER ≥98%-at-length retrieval row published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 60/100.** Terminal-Bench 4.0 51.0% lands squarely in the mid band (45–60 → 50–70); tool calling is listed but no independent Tau/GDPval/OSWorld row exists for this exact ID, and the blend's per-request synthesis adds latency/cost unverified here.
- **Reasoning: 85/100.** HLE w/o tools 49% clears the frontier bar and ArXivMath 88 is excellent; GPQA 90.9 preview corroborates but is harness-uncertain. Held at 85 (not 90) because the only authoritative reasoning row is vendor-run on an ensemble whose capability is borrowed from undisclosed components.
- **Context window: 74/100.** 262,144 tokens → 200K–500K tier (65–84), just above the 200K reference; 131K max output is generous; no retrieval-at-length evidence published.
- **Multimodal: 66/100.** Text + image in / text out = the +image 60–70 band, and MMMU-Pro 78 supports the upper half; no video/audio/PDF input or non-text output verified.
- **Coding: 82/100.** DeepSWE 74% exactly meets the frontier reference and LiveBench coding 82.1 corroborates; no SWE-bench Verified row and the mediocre preview agentic-coding signal keep it under the 90 band.
- **Cost efficiency: 78/100.** $2.50 / $7.50 per 1M sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) anchors, with $0.25 cached input; the blend bills one API for many component calls, so effective compute cost per answer is opaque. Cost is excluded from Overall.
- **Overall Score: 73/100.** Mean of Tool 60, Reasoning 85, Context 74, Multimodal 66, Coding 82 = 367/5 = 73.4 → 73. Best fit: a high-reasoning, good-coding single API that averages away individual model blind spots at roughly half Opus-tier price — pick it for research-grade answers where a strong median beats a single provider's ceiling; avoid for long-horizon agentic loops (only mid TB signal) or >256K-context jobs, and note the vendor has already moved on to the Pareto 26.10 Preview sibling.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `pareto-26-9` page fetched 2026-10-02 — 4 vendor-card rows, unranked; OpenRouter/Unbiased catalog + Reddit/36kr/kingy/explainx coverage of the 2026-09-16 stealth launch and 09-18 reveal; unbiased.ai model card as the common source). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: curated `meta.json` is a stealth-era placeholder (128K/text-only); "Union Alpha" is not a distinct foundation model — do not double-count its rows against component models' own averages; Pareto 26.10 Preview is a separate product and must get its own folder/report.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
