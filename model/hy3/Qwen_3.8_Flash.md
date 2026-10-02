# Hy3 — findings by Qwen 3.8 Flash

- Source: Tencent Hunyuan (`tencent/hy3`; HF `tencent/Hy3`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 (Hunyuan 3, hybrid fast-and-slow thinking)
- **Short description:** Tencent's fully open-source flagship — a **295B-total / 21B-active MoE** (+3.8B MTP layer params) with 256K context, switchable hybrid thinking, **Apache 2.0**. Launched 2026-07-06, superseding the 2026-04-23 Hy3 Preview (a separate folder here). Strong vendor launch panel (GPQA 90.4, SWE-V 78.0, TB2.1 71.7) but the independent AA lane exposes a severe Omniscience hallucination profile.
- **Provider / access:** open weights (HuggingFace `tencent/Hy3`); hosted on Tencent TokenHub and third parties; no Zen Free ID.
- **Release / knowledge:** 2026-07-06 full release (verified via launch coverage); knowledge cutoff undisclosed.
- **IDs:** `tencent/hy3`.
- **Context window:** **256K in / 32K out** (catalog + BenchLM agree; one API listing shows 262K).
- **Modalities:** Text + image in; text out; reasoning yes (hybrid thinking toggle); tool calls yes. Curated `meta.json` agrees.
- **Pricing (as of 2026-10-02):** launch **$0.14 / $0.58 per 1M** (cached input $0.035; kie.ai, matches curated TokenHub ~$0.18/$0.59 preview band); Muse Spark 1.3's Sep panel saw **$0.083 / $0.330** — prices fell post-launch. Open weights → self-hostable. Cost excluded from Overall.
- **Architecture:** MoE 295B/21B active, hybrid attention + MTP, Apache 2.0.

### Raw benchmarks found

> Vendor launch figures (2026-07-06, via Muse Spark 1.3 / GPT 5.6 Terra sibling reports citing the official release + HF card) cross-checked against the independent BenchLM/AA lane (Kimi_K3) and community long-context reports (r/LocalLLaMA). Caveat found: Gemini 3.8 Flash's sibling report lists "Terminal-Bench 2.1: 90.4" — that is the **GPQA number mis-slotted into the TB row**; the verified TB 2.1 figure is 71.7%. Flagged, not borrowed.

Agent / tool use:

- Terminal-Bench 2.1: **71.7%** (vendor launch); APEX-Agents: **25.6%** (official HF card, via Terra report)
- GDPval-AA: **1136 Elo** (27.3% normalized); AA Agentic Index: **25.6%** (BenchLM)
- τ²/τ³-bench / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (vendor) / **89.7%** (AA, via BenchLM) — the rare case where vendor and AA agree
- HLE: **53.2%** (official card, vendor-side) vs **AA-HLE 33.5%** (BenchLM) — lane gap; true value likely ~40s
- SuperGPQA base: 51.60% (base-model row, not instruct); CritPt: **4.9%** (BenchLM, near-floor)
- AA Intelligence Index: **25.3**; BenchLM overall **51.45 / #69 of 507**
- **AA-Omniscience: accuracy 32.0% / hallucination 74.1%** (BenchLM) — the standout negative finding: fabricates badly on knowledge probes despite high GPQA

Coding:

- SWE-bench Verified: **78.0%**; SWE-bench Multilingual: **75.8%**; SWE-bench Pro: **57.9%** (vendor launch panel)
- DeepSWE: **28.0%** (vendor's own table — weak); LiveCodeBench: no verified row; AA Coding Index: **58.8** (BenchLM); AA-SciCode: 48.6%

Long context:

- AA-LCR: **79.0%** within 256K (BenchLM); no MRCR/RULER/GraphWalks published; community reports note **drift/forgetting from ~60K tokens, severe by ~120K** in hands-on use — nominal 256K is not uniformly reliable.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Vendor and independent lanes mostly agree on this model (unusual), so scores sit between Kimi K3's cautious 64 and Muse/Terra's vendor-leaning 80s.

- **Tool use: 72/100.** TB 71.7% is genuinely good for an open 295B, and hybrid-thinking tool coordination is credible; but APEX-Agents 25.6%, GDPval-AA 1136 and AA Agentic 25.6% show execution falls apart on longer-horizon generalist tasks, and there are zero τ-bench rows. Mid-70s, below the cohort's 73.4 only nominally.
- **Reasoning: 74/100.** GPQA ~90 confirmed on both lanes is flagship-adjacent; but HLE is 33.5–53.2 depending on harness, CritPt 4.9 is floor-level, and the Omniscience 74.1% hallucination rate is disqualifying for unsupervised knowledge work. High floor (reasoning), low ceiling (what it knows and how honestly it reports it).
- **Context window: 78/100.** 256K nominal = band mid (200K–500K, 200K anchors 70); AA-LCR 79.0% supports the upper mid, but hands-on drift from ~60K is a real-world discount — scored above the 70 anchor for LCR, well below anything 1M-class.
- **Multimodal: 62/100.** Text+image in / text out = 60–70 band; Design Arena 1193 is weak-mid; no MMMU/video/audio rows. Bottom of the band.
- **Coding: 72/100.** SWE-V 78.0 / Multilingual 75.8 strong for the size class; SWE-Pro 57.9 and especially vendor-admitted DeepSWE 28.0 cap it; no LCB row. Matches the cohort's 75 within noise.
- **Cost efficiency: 96/100.** $0.14/$0.58 per 1M (falling to $0.083/$0.330) with Apache 2.0 self-hosting — top-tier economics, near the methodology's $0.10–0.20 anchor. Cost excluded from Overall.
- **Overall Score: 72/100.** Mean of Tool 72, Reasoning 74, Context 78, Multimodal 62, Coding 72 = 358/5 = 71.6 → **72**. Best fit: **self-hosted, cost-sensitive agentic coding and structured reasoning under human verification** — an Apache-licensed 21B-active model with flagship-coded GPQA/SWE numbers at fractions-of-a-cent prices. Do **not** use it as an unsupervised knowledge oracle (74.1% hallucination). Lands almost exactly on the cohort's 72.5, split between Kimi K3's missing-rows cautious 64 and the vendor-leaning 80s.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (launch coverage 2026-07-06 via kie.ai/innfactory/ai-tldr for 295B/21B, 256K, Apache 2.0, $0.14/$0.58; HF `tencent/Hy3` card rows via sibling reports; r/LocalLLaMA hands-on long-context drift) cross-checked against qualifying in-folder reports (Kimi_K3 BenchLM/AA lane, Muse_Spark_1.3 vendor panel, GPT_5.6_Terra HF-card rows) and curated `meta.json`. Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) Gemini 3.8 Flash's TB 90.4 as a GPQA mis-slot (true TB is 71.7), (b) the Omniscience 32.0/74.1 honesty failure vs GPQA 90.4, (c) community-reported effective-context degradation vs the nominal 256K.
- Revisit trigger: if Artificial Analysis publishes HLE/MRCR/SWE rows settling the vendor-vs-BenchLM HLE gap (33.5↔53.2), or if Tencent ships a Hy3 refresh addressing the Omniscience profile, re-score Reasoning/Context.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
