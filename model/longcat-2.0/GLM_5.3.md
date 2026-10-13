# LongCat 2.0 — findings by GLM 5.3

- Source: Meituan / LongCat team (`meituan/longcat-2.0`)
- Date: 2026-10-13 (UTC) — second-pass re-research of the 2026-09-28 report
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T-total / ~48B-active MoE, trained end-to-end on AI ASIC superpods and pitched at coding agents (released **2026-06-30** per BenchLeader; the first pass's 06-29 was the HF/AA date — both flagged). The first pass's central caveat — "AA's composite (19) argues the in-house agentic numbers flatter the model" — is now confirmed hard by the settled ladder (**49.5 #381/761, lower half**): **GPQA measured 78.0% #211 vs the vendor's 88.9%, Terminal-Bench 2.1 measured 50.2% #116 vs the vendor's 70.8%** — 11- and 20-point vendor-vs-measured gaps — with SciCode 36.3% #185, TB 4.0 0.0%, τ³ 13.2% #126, and GDPval 18.5% #173 at the floor. One bright gap-fill: **HLE 33.7% #125 is near the 40% reference**. A pricing conflict also surfaced this pass: BenchLeader lists $0.75/$2.95 (blended $1.30/M, "pricier than most") while the LongCat API and AtlasCloud serve $0.30/$1.20 — both retained. Successor: LongCat-2.5-Preview (this repo's batch-11 dossier).
- **Provider / access:** LongCat API Platform (`https://longcat.chat`, OpenAI-compatible; **$0.30/$1.20, cached $0.006, 98% discount**); AtlasCloud on OpenRouter ($0.30/$1.20 fp8, 40 tok/s); self-host via SGLang/vLLM (MIT open weights, BF16/F32/FP8); integrated with Claude Code / OpenClaw / Hermes harnesses. No Zen Free ID.
- **Release / knowledge:** **2026-06-30** (BenchLeader) / 2026-06-29 (HF/AA — flagged); knowledge cutoff not stated.
- **IDs:** `meituan-longcat/LongCat-2.0` (HF); `meituan/longcat-2.0` (site slug).
- **Context window:** **1M tokens** (confirmed by BenchLeader and the provider row).
- **Modalities:** text in / text out only (AA-verified no image input); reasoning (thinking toggle); tool calls (arguments-as-dict nonstandard); JSON mode not documented.
- **Pricing (as of 2026-10-13):** **CONFLICT retained: LongCat API $0.30 in / $1.20 out per 1M (cached $0.006) vs the BenchLeader-listed $0.75/$2.95 (blended $1.30/M, "pricier than most")** — the rate depends heavily on route; 65 tok/s (slower than most), 33 s first answer; $0.057 per agentic session at the API rate; $0.146 per II-run.
- **Architecture:** sparse MoE 1.6T total / ~48B active + 135B N-gram Embedding parameters; LongCat Sparse Attention (Streaming-aware / Cross-Layer / Hierarchical Indexing); 3-step MTP speculative decoding; MIT license.

### Raw benchmarks found

> Second pass adds the settled AA-harness ladder via BenchLeader (best **49.5 #381/761**, trend 45→50→55 rising, last measured 2026-10-08). Category scores: **Long context 57 (best)**, Knowledge 51, Composite 51, Reasoning 45, **Agents & tools 41 (worst)**. The vendor rows are retained with their gaps quantified.

Agent / tool use:

- **Terminal-Bench 2.1 (AA): 50.2% #116** — the measured read vs the vendor's 70.8% (a 20-point gap, both retained); **TB 4.0 (AA): 0.0% #146** — floor; **τ³-Banking: 13.2% #126** (dreadful — gap filled); **GDPval-AA: 18.5% #173** (weak — gap filled); Agents & tools 41 is tied-worst
- Vendor rows retained with the in-house caveat now measured-confirmed: FORTE 73.2, BrowseComp 79.9, RWSearch 78.8 — all from the same in-house unified harness whose TB 2.1 claim measured 20 points lower
- τ² / Claw-Eval / Toolathlon / MCP-Atlas: still unmeasured

Reasoning / knowledge:

- **GPQA Diamond (AA): 78.0% #211** vs the vendor's 88.9% — an 11-point gap, both retained (scored on the measured)
- **HLE (AA): 33.7% #125** — gap filled; near the 40% reference, the best measured row; **CritPt: 2.6% #179** (very weak)
- **AA II 19.1 #235** (confirms the first pass's "19" — the divergence call was right); IMO-AnswerBench 81.8 (vendor, retained); IFEval 90.0% (vendor, retained)
- Honesty poor: **non-hallucination 24.6% #240**; accuracy 29.6% #176; Omniscience −23.4 #249
- AA-LCR **65.0% #243** (mid — long context 57 is its best category); no MRCR/RULER rows (unchanged)

Coding:

- **SciCode (AA): 36.3% #185** — dreadful (gap filled); TB 2.1 50.2% doubles as the agentic-coding signal; TB 4.0 0.0%
- Vendor rows retained with the measured caveat: SWE-bench Pro 59.5% and SWE-bench Multilingual 77.3% (in-house) — the same harness family that overstated TB 2.1 by 20 points; SWE-bench Verified / LiveCodeBench / DeepSWE: still no public row (unchanged)

Long context:

- **1M confirmed**; AA-LCR 65.0% #243 — mid-tier measured retrieval; retrieval at ≥512K unverified (unchanged).

Multimodal:

- Text in / text out only (AA-verified — unchanged).

### Normalized scores (1–100)

- **Tool use: 50/100.** Lowered from 72: the measured rows collapse the vendor story — TB 2.1 50.2% #116 (vs 70.8% claimed), TB 4.0 0.0%, τ³ 13.2% #126, GDPval 18.5% #173, Agents-41-worst — with zero independent corroboration of the FORTE/BrowseComp/RWSearch trio.
- **Reasoning: 54/100.** Lowered from 62: GPQA measured 78.0% #211 (11 points under the vendor claim), CritPt 2.6%, AA II 19.1 #235 — offset by the decent HLE 33.7% #125 (the gap-fill bright spot) and the retained IMO-AnswerBench row.
- **Context window: 92/100.** Lowered from 95: 1M confirmed, but AA-LCR 65.0% #243 reads mid-tier.
- **Multimodal: 15/100.** Held: text-only (AA-verified).
- **Coding: 56/100.** Lowered from 72: SciCode 36.3% #185 (dreadful) and TB 2.1 50.2% are the measured coding rows — the in-house SWE-Pro 59.5%/Multilingual 77.3% retain a credibility discount after the same harness's TB claim measured 20 points low.
- **Cost efficiency: 82/100.** Lowered from 93: the route-dependent pricing ($0.30/$1.20 API vs $0.75/$2.95 listed), 65 tok/s, 33 s first answer, and $0.146/II-run temper what remains genuinely cheap at the API rate (98% cache discount).
- **Overall Score: 53/100.** (50 + 54 + 92 + 15 + 56) / 5 = 53.4 → 53, down from 63. Best-fit: the first pass's "validate on your own harness before production routing" turned out to be the right call — the settled measurements put this 1.6T open-weights coder in the lower half (49.5 #381) with 11-20-point vendor-vs-measured gaps, mid long-context, and poor honesty; the MIT license and 1M window at $0.30/$1.20 remain real, but LongCat-2.5-Preview (batch 11) and any current open-weights frontier are better picks.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-10-13
- Method: public internet research, second pass over the 2026-09-28 report (the settled AA-harness ladder via BenchLeader as of 2026-10-08 — Artificial Analysis own-harness rows across GPQA/HLE/CritPt/SciCode/TB 2.1/TB 4.0/τ³/GDPval/Omniscience/AA-LCR; the AtlasCloud provider row and the $0.75/$2.95-vs-$0.30/$1.20 pricing conflict; the release-date 06-29/06-30 discrepancy flagged; the first-pass vendor rows retained with their gaps now quantified — the in-house-harness caveat the first pass flagged has been measurement-confirmed); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
