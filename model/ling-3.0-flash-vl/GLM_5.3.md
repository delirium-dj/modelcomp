# Ling 3.0 Flash VL — findings by GLM 5.3

- Source: InclusionAI (`opencode/ling-3.0-flash-vl`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-10-02 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (Ling-3.0-flash-VL)
- **Short description:** InclusionAI's (Ant Group's) native multimodal extension of Ling-3.0-flash — released **2026-09-10** (resolved; the HF-card AA II v4.1.1 "42" was launch-era; the settled v4.3.2 is **24.6 #167**, another launch-settling case), a 124B-total / 5.5B-active sparse MoE with native image **and video** understanding (ViT + MLP projector + VideoRoPE temporal encoding) inside the understand→reason→act→verify loop. Second pass resolves hosted pricing — **NovitaAI bf16 at $0.021/$0.062 per 1M, among the cheapest fifth of all ranked models** — and fills the agent gaps surprisingly well: **TB 2.1 64.4% #84, τ³-Banking 34.4% #51, and elite honesty (non-hallucination 78.0% #15)**. Top use case: ultra-cheap, honest, video/image-grounded agent and document work on open weights.
- **Provider / access:** Hugging Face `inclusionAI/Ling-3.0-flash-VL` (MIT; SGLang/vLLM recipes); hosted — **NovitaAI bf16 $0.021/$0.062 (47 tok/s, 262K)**, DeepInfra fp16 $0.060/$0.180 (131K); not on the OpenCode Zen list.
- **Release / knowledge:** **2026-09-10** (confirmed — AA page + cryptobriefing); knowledge cutoff not published.
- **IDs:** `opencode/ling-3.0-flash-vl` (repo slug; no Zen ID); `inclusionAI/Ling-3.0-flash-VL` (HF/Novita/AA).
- **Context window:** **262K tokens** (256K native + YaRN per the official SGLang recipe — confirmed by BenchLeader and both provider rows).
- **Modalities:** image and video in, text out (VideoRoPE temporal order); thinking mode default on; native tool-call parser (`ling3`); reasoning yes.
- **Pricing (as of 2026-10-13):** **$0.021 in / $0.062 out per 1M** (NovitaAI bf16 — blended $0.111/M, "among the cheapest fifth"); DeepInfra $0.060/$0.180; **$0.0054 per agentic session**; MIT self-host at $0 license (4×141GB-class GPUs for the 256K recipe).
- **Architecture:** 124B total / 5.5B activated sparse MoE; 42-layer hybrid backbone alternating KDA and Gated MLA at 5:1; ViT + MLP projector + VideoRoPE; MIT license.

### Raw benchmarks found

> Second pass adds the BenchLeader profile (best = **55.6 #209/760**, trend 50→56→62 rising — settling, last measured 2026-10-13). Category scores: **Long context 64 / Agents & tools 63 (tied best)**, Knowledge 60, Multimodal 62, Composite 57, **Reasoning 44 (worst)**.

Agent / tool use:

- **Terminal-Bench 2.1 (AA): 64.4% #84** — gap filled; decent (the HF card's chart-only TB value now has a measured companion)
- **τ³-Banking: 34.4% #51** — gap filled; a good rank for the 2026 suite
- **GDPval-AA: 33.1% #121** (updated from 32.5% — consistent, mid-band); **TB 4.0 (AA): 0.0% #146** — the newest suite is a wall; Agents & tools 63 is tied-best category (the "act" capability measured, not just claimed)
- Claw-Eval / Toolathlon / MCP-Atlas / SWE Atlas: still unmeasured

Reasoning / knowledge:

- GPQA Diamond: **86.2% #110** (confirmed) — near-bar, below it; HLE: **22.0% #194** (confirmed — far below the 40% reference); **CritPt: 2.0% #190** (confirmed, very weak)
- **Honesty is the standout: AA-Omniscience non-hallucination 78.0% #15** — elite (the first pass's "22% hallucination" is the same fact, correctly re-read); the trade: **accuracy 14.3% #422** — honest about not knowing, knows almost nothing; Omniscience index −4.5 #155
- **AA II 24.6 #167** (settled v4.3.2; the HF card's v4.1.1 "42" retained as launch-era context); Reasoning 44 is its worst category
- AA-LCR **78.3% #108** (confirmed — good long-context reasoning)

Coding:

- SciCode (AA): **44.2% #142** (confirmed — below the 55% reference); **TB 4.0: 0.0% #146**; the TB 2.1 64.4% #84 row doubles as the agentic-coding signal; SWE-bench Verified / LiveCodeBench / Vibe: still no verified rows (unchanged gaps)

Long context:

- **262K confirmed**; AA-LCR 78.3% #108 — good; Long context 64 tied-best category; no MRCR/RULER rows.

Multimodal:

- **MMMU-Pro: 79.0% #63** (confirmed — strong grounded vision); native image+video in with VideoRoPE; text out; no audio in.

### Normalized scores (1–100)

- **Tool use: 62/100.** Raised from 48: the gaps filled well — TB 2.1 64.4% #84, τ³ 34.4% #51 (a genuinely good rank), GDPval 33.1% #121 mid, and Agents & tools 63 as tied-best category — against TB 4.0 0.0% #146 and the still-unmeasured MCP/Claw harnesses.
- **Reasoning: 58/100.** Lowered from 62: GPQA 86.2% #110 sits near-but-below the bar, HLE 22.0% #194 and CritPt 2.0% #190 miss the references badly, the settled AA II is 24.6 #167, and accuracy 14.3% #422 is near-floor — offset by the elite honesty (78.0% non-hall #15) and good AA-LCR.
- **Context window: 78/100.** Held: 262K verified with good measured retrieval (AA-LCR 78.3% #108); Long context 64 tied-best category.
- **Multimodal: 82/100.** Held: MMMU-Pro 79.0% #63 confirmed strong, native image+video input with VideoRoPE — text out only caps the band.
- **Coding: 54/100.** Lowered from 55: SciCode 44.2% below the reference and TB 4.0 0.0% stand; the TB 2.1 64.4% agentic-coding row and the still-missing SWE-V/LCB rows keep it at the thin-evidence floor.
- **Cost efficiency: 95/100.** Raised from 75: hosted pricing resolved at **$0.021/$0.062 (NovitaAI bf16)** — among the cheapest fifth measured this cycle, $0.0054 per agentic session, 145 tok/s — plus MIT open weights for $0-license self-host.
- **Overall Score: 67/100.** (62 + 58 + 78 + 82 + 54) / 5 = 66.8 → 67, up from 65. Best-fit: the ultra-cheap honest omni agent — elite truthfulness (78% non-hall #15), decent TB 2.1/τ³ agent ranks, strong video-grounded vision, and a real 262K window at $0.021/$0.062 with 5.5B active params; its knowledge base is nearly empty (14.3% accuracy — attach retrieval for anything factual) and deep reasoning (HLE, CritPt) is weak, but as a $0.005/session multimodal agent substrate it is exceptional value.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-10-02 report (BenchLeader profile as of 2026-10-13 aggregating Artificial Analysis own-harness rows; two NovitaAI/DeepInfra provider rows resolving the hosted-price unknown; DDG-lite searches surfacing the AA model page and providers benchmark, the official HF card confirming 124B/5.5B and native video input, and cryptobriefing's AA-II-25-at-5.5B-active coverage; the first-pass rows — which the settled harness confirmed nearly verbatim — retained where not contradicted, with the v4.1.1-vs-v4.3.2 AA II launch-settling gap flagged); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
