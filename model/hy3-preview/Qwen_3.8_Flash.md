# Hy3 Preview — findings by Qwen 3.8 Flash

- Source: Tencent Hunyuan (`tencent/hy3-preview`; HF `tencent/Hy3-preview`, Tencent Hy Community License)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy3 Preview
- **Short description:** Tencent's April 2026 preview of the Hy3 Hunyuan MoE — same 295B/21B-active architecture that became the July 2026 full Hy3 release (scored separately at 72). The preview has slightly lower post-training polish (SWE-V 74.4 vs 78.0, AA-LCR 66.7 vs 79.0) but already carries the same severe Omniscience hallucination signature (31.5% accuracy / 73.0% hallucination) and identical AA Coding Index (58.8). Superseded: **use Hy3 final instead.**
- **Provider / access:** open weights (HF `tencent/Hy3-preview`); Tencent TokenHub preview routes; no Zen Free ID.
- **Release / knowledge:** 2026-04-23 preview (weights open-sourced same day); superseded 2026-07-06; knowledge cutoff undisclosed.
- **IDs:** `tencent/hy3-preview` (no Free ID on Zen).
- **Context window:** **256K in / 32K out** (verified via official GitHub README spec table; 262K appears on one API listing).
- **Modalities:** **Text + image in; text out** (per GitHub README spec table via Muse Spark 1.3; Kimi K3's "no vision rows" means no published vision *benchmarks*, not absence of image input). Reasoning yes (no_think/low/high effort modes); tool calls yes.
- **Pricing (as of 2026-10-02):** TokenHub preview **~$0.18 / $0.59** per 1M (curated + provider catalog panel); open weights → self-host. Superseded — this price is no longer actively maintained. Cost excluded from Overall.
- **Architecture:** MoE 295B total / 21B active (+3.8B MTP layer params), 80 layers, 192 experts top-8, GQA 64 heads; Tencent Hy Community License.

### Raw benchmarks found

> Verified via qualifying `Kimi_K3.md` (BenchLM/AA panel, 2026-09-24) and `Muse_Spark_1.3.md` (official GitHub README base tables, 2026-09-21). Evidence note: Muse reports **base-model** numbers from the 5-shot/1-shot base harness — instruct-model claims are qualitative ("competitive", "scores well") without published absolutes. Kimi reports AA/BenchLM lane numbers (TB 2.0 54.4%, GPQA 87.2–89.7, Omniscience −18.5).

Agent / tool use:

- GDPval-AA: **1136 Elo** (35.8% normalized) (BenchLM) — identical to hy3 full, suggesting the preview/final gap is not in economy-level agentic reasoning
- Terminal-Bench 2.0: **54.4%** (BenchLM) — note this is TB 2.0, not the TB 2.1 score of 71.7% from the full release
- AA Agentic Index: **25.6%** (BenchLM); Gert Labs: 36.9%
- τ²/τ³-bench / MCP / Claw-Eval / Toolathon: **no verified public score** (qualitative "competitive" and "scores well" claims only per README)

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (GPQA-D) / **89.7%** (AA) (BenchLM) — slightly below hy3 full's 90.4/89.7
- HLE: **25.5%** (BenchLM); AA-HLE: **33.5%** — well below hy3 full's 33.5–53.2 lane
- CritPt: **4.9%** (BenchLM) — near-floor, same as hy3 full
- AA Intelligence Index: **41.2** (BenchLM; flagged "surprisingly high vs HLE" by Kimi — likely an index-version artifact)
- **AA-Omniscience: −18.5; accuracy 31.5% / hallucination 73.0%** (BenchLM) — already the signature Hy3 honesty failure; hy3 full is 32.0/74.1 (marginally worse)
- IFBench: **63.1%** (BenchLM); SuperGPQA base: 51.60; MMLU-Pro base: 65.76 (Muse, base harness)
- BenchLM overall: **45.64 / #92 of 507**

Coding:

- SWE-bench Verified: **74.4%** (BenchLM); hy3 full: 78.0%
- SciCode: **41.2%**; AA-SciCode: **48.6%**; AA Coding Index: **58.8** (BenchLM) — all identical to hy3 full
- LiveCodeBench-v6 base: 34.86; MBPP-plus base: 78.71 (Muse, base harness); DeepSWE: no row

Long context:

- AA-LCR: **66.7%** within 256K (BenchLM) — 12.3 points below hy3 full's 79.0%; no MRCR/RULER rows

Multimodal:

- Architecture supports image input per official spec; **zero published vision benchmark scores** at preview stage.

### Normalized scores (1–100)

> Derived using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. The preview's main deltas vs hy3 full are: lower SWE-V, lower LCR, slightly lower GPQA/HLE — offset by same Omniscience disaster and same AA Coding Index.

- **Tool use: 68/100.** GDPval 1136 and AA Agentic 25.6% match hy3 full; TB 2.0 54.4% is mid-range; qualitative agent claims without absolutes cap confidence. Four below hy3 full's 72 (less polished post-training).
- **Reasoning: 71/100.** GPQA 87–90 is near hy3 full's level; HLE 25.5/33.5 is meaningfully lower than the full's 33.5–53.2 lane. Omniscience 73% hallucination is the same disqualifier. CritPt 4.9 floor. Three below hy3 full's 74.
- **Context window: 72/100.** 256K = 200K–500K band (65–84); AA-LCR 66.7% is mid-band (vs hy3 full 79.0% → upper-mid); six below hy3 full's 78 driven entirely by the LCR gap.
- **Multimodal: 60/100.** Text+image in per verified architecture spec = 60–70 band, entered at floor: no published vision benchmarks, no Design Arena, no MMMU rows. Two below hy3 full's 62 (which at least had Design Arena 1193).
- **Coding: 69/100.** SWE-V 74.4 is solid but 3.6 below full; SciCode 41.2 and Coding Index 58.8 match hy3 full exactly (same base model). No DeepSWE/LCB instruct rows.
- **Cost efficiency: 90/100.** ~$0.18/$0.59 preview pricing + open weights; slightly above hy3 full's $0.14/$0.58 GA launch; preview may have transient subsidies. Cost excluded from Overall.
- **Overall Score: 68/100.** Mean of Tool 68, Reasoning 71, Context 72, Multimodal 60, Coding 69 = 340/5 = 68.0 → **68**. Best fit: **historical evaluation baseline and architecture reference** — superseded by the stronger Hy3 full release (scored 72 in this dataset). The preview is a 4-point discount reflecting unpolished instruct tuning, lower retrieval (LCR 66.7 vs 79.0), and zero published vision benchmarks. Same Omniscience failure mode already present at −18.5 / 73%.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: qualifying `Kimi_K3.md` BenchLM/AA panel + `Muse_Spark_1.3.md` (official GitHub README spec and base-model tables) + curated `meta.json` (context/modality/pricing honest here) + cross-reference to the `model/hy3/` full-release report (same architecture, 2.5 months later). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged: (a) Omniscience −18.5 / 73% already present at preview stage — Hy3's honesty profile was never good, (b) AA Index 41.2 on a model with HLE 25.5 is anomalous (index-methodology timing artifact; do not cite as evidence of frontier reasoning), (c) Kimi K3's "text-only deployment" is wrong per the official README image-input spec.
- Revisit trigger: none planned — model is superseded; refer to `model/hy3/Qwen_3.8_Flash.md` for the GA release scoring.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
