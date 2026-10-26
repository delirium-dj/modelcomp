# GPT-5.2 Pro — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.2-pro`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 Pro
- **Short description:** The **maximum-compute tier** of OpenAI's GPT-5.2 family (Instant / Thinking / **Pro**) — a research-grade reasoning model with an exclusive **`xhigh` reasoning-effort level** that allocates maximum compute per request for **30–40 minute thinking sessions**. At release it set a **FrontierMath Tier 4 record (31.3%, vs the prior 19% high)** and near-tied the best-ever GPQA Diamond. **Aging but not formally deprecated** — now flanked by GPT-5.4/5.5 Pro and the GPT-6 line.
- **Provider / access:** OpenAI Responses API `gpt-5.2-pro` (`opencode/gpt-5.2-pro`); ChatGPT Pro. **Paid only** — no free tier. Closed weights.
- **Release / knowledge:** GPT-5.2 family released **December 11, 2025**; knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.2-pro`; OpenAI `gpt-5.2-pro` (some routers list it under `openai/gpt-5-pro`).
- **Context window:** **400,000** tokens total; **128,000** max output.
- **Modalities:** Text + image in → text out. No audio/video; text-only output. Deep reasoning (xhigh effort).
- **Pricing (as of 2026-10-26):** **$21.00 / $168.00** per 1M in/out — by far the most expensive tier in the roster (7× a $3/$15 Sonnet); **$2.10 cached** read. Reserved for the hardest research-grade problems where the extra compute pays for itself.
- **Architecture:** Closed weights; parameters/compute undisclosed. The Pro tier is distinguished by the `xhigh` reasoning-effort setting (exclusive to Pro) that maximizes per-request test-time compute.

### Raw benchmarks found

> Independent anchors: Epoch AI (FrontierMath is Epoch's benchmark) and datalearner's aggregated rankings. Family-level figures (SWE-Bench Pro, GDPval) are OpenAI's for GPT-5.2 **Thinking**; the Pro tier runs the same capabilities at higher compute. **No current Artificial Analysis page** (the `gpt-5-2-pro` AA route 404s), so no AA Intelligence Index is quoted here.

Independent / aggregated:

- **FrontierMath Tier 4: 31.3% (#9/80)** — a **new record**, a substantial jump over the previous high of 19% (Epoch AI confirmed, with mathematician commentary). This is the single strongest independent signal of frontier reasoning.
- **GPQA Diamond: 93.2% (#33/461)** — essentially tied with Gemini 3 Deep Think's 93.8% at release; graduate-level science near the ceiling.
- **Humanity's Last Exam (HLE): 50 (#55/568)**; **ARC-AGI: 90%+** (GPT-5.2 crossed the 90% ARC-AGI threshold).

Vendor (OpenAI, GPT-5.2 family — Thinking tier unless noted):

- **SWE-Bench Pro 55.6%** — "a new state of the art" on that rigorous real-world software-engineering eval at release.
- **GDPval 70.9%** — beats or ties top industry professionals on 70.9% of tasks across 44 occupations, **>11× faster** (Thinking tier).
- AIME 2025 high; Pro-tier `xhigh` enables the 30–40 minute reasoning sessions behind the FrontierMath/GPQA results.

> Provenance: FrontierMath Tier 4 (31.3%, record) is Epoch-run and independent — decision-critical for the Reasoning score. GPQA-D 93.2% / HLE 50 / ARC-AGI 90%+ are aggregated (datalearner/vendor). SWE-Bench Pro 55.6% and GDPval 70.9% are OpenAI family figures for the Thinking tier (the Pro tier runs the same tools at higher compute, so they are a reasonable floor for Pro). No AA Intelligence Index available (page 404).
> Meta verification: **accurate** — 400K total / 128K output ✓, `$21/$168` + `$2.10 cached` ✓ (OpenAI/TheRouter/cometapi), `text+image in → text out` ✓, "paid only / ChatGPT Pro + API" ✓, "frontier multi-step reasoning for research-grade problems" ✓ (xhigh effort). Enriched: **FrontierMath T4 31.3% (record)**, **GPQA-D 93.2%**, **HLE 50**, **ARC-AGI 90%+**, family **SWE-Bench Pro 55.6% / GDPval 70.9%**, released **Dec 11 2025**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong agentic/professional-task capability — family **GDPval 70.9%** (beats/ties professionals across 44 occupations) and the `xhigh` long-horizon reasoning that sustains multi-step work. Held below the verified-agentic leaders because the Pro tier is reasoning-optimized (not tool-throughput-optimized), its 30–40 minute sessions make it latency-encumbered for interactive tool use, and there is no Pro-specific Terminal-Bench/OSWorld row.
- **Reasoning: 88/100.** The defining strength and the reason this tier exists: a **FrontierMath Tier 4 record of 31.3%** (Epoch-verified, +65% relative over the prior 19% high), **GPQA Diamond 93.2%** (near the all-time best), **HLE 50**, and **ARC-AGI 90%+**. Frontier-leading at release; kept just below the absolute current peak (90+) because it is ~10 months old and now flanked/surpassed by GPT-5.4/5.5 Pro, GPT-6, and Opus 5.5 on the hardest reasoning.
- **Context window: 82/100.** **400K** total with a generous **128K** max-output allowance — the upper part of the 200K–500K band, well beyond a 200K standard model, but short of the proven-1M tier (85-86).
- **Multimodal: 78/100.** Text + **image** input only (no video, no audio, no PDF/file per meta), text-only output. Vision is present but not the focus of a compute-maxed reasoning tier — verified image-only tier.
- **Coding: 82/100.** Family **SWE-Bench Pro 55.6% was state-of-the-art at release**, and the Pro tier's `xhigh` compute only helps on the hardest problems. Capped below the elite Vals-verified tier (86+) because it is a reasoning tier rather than a coding specialist, the SOTA claim is ~10 months old and now surpassed, and there is no independent Vals SWE-bench row for it.
- **Cost efficiency: 40/100.** **$21/$168** per 1M is the most expensive pricing in the entire roster (7× a Sonnet), with a $2.10 cached read. Justifiable only for research-grade problems where a FrontierMath-record answer is worth the compute; for everything else it is extraordinarily poor value. Not counted toward Overall.
- **Overall Score: 82/100.** Mean of Tool 82 + Reasoning 88 + Context 82 + Multimodal 78 + Coding 82 = 412 / 5 = 82.4 → 82. Best fit: the **maximum-compute reasoning specialist** — reach for it on the hardest research-grade math/science/analysis (FrontierMath T4 record, GPQA 93.2%) where 30–40 minute thinking sessions and $21/$168 pricing are acceptable; use GPT-5.2 Thinking/Instant or a current open-weight leader for cost-sensitive coding and agentic throughput. **Divergence note:** curated queue 80.7 vs my 82 → **+1.3**. Because Overall counts only the five *quality* dimensions (never Cost), the extreme $21/$168 price does not drag my score down; on pure quality GPT-5.2 Pro is frontier — especially reasoning (Epoch-verified FrontierMath record). The curated 80.7 likely bakes in some price/age discount that my quality-only mean excludes, so I land modestly above it. The gap is not wider because the model is ~10 months old, image-only, and its coding/agentic numbers are family-level (Thinking) rather than Pro-specific, and it has been partly superseded by newer Pro/flagship tiers.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Epoch AI FrontierMath record announcement; datalearner GPT-5.2 Pro benchmark aggregation; OpenAI "Introducing GPT-5.2" family figures via rdworldonline / TheRouter / cometapi / towardsai; WuKong AI Pro deep dive); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
