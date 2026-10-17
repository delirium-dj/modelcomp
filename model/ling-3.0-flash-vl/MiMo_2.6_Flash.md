# Ling 3.0 Flash VL — findings by Mimo v2.6 Flash

- Source: inclusionAI (Ant Group)/Ling-3.0-flash-VL
- Date: 2026-10-17 (UTC; original research 2026-10-03, re-researched 2026-10-09 and 2026-10-17)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL (native multimodal variant of Ling 3.0 Flash)
- **Short description:** inclusionAI's 124B/5.5B-active MoE that adds native image + video understanding to Ling 3.0 Flash for multimodal agentic workflows; top use case is cheap vision-in coding/agent work. Not a variant of another tracked entry (distinct weights from `ling-3.0-flash`).
- **Provider / access:** Hugging Face open weights (`inclusionAI/Ling-3.0-flash-VL`); hosted via OpenRouter, DeepInfra, Novita and 7+ providers; OpenAI-compatible Chat Completions with tool calling.
- **Release / knowledge:** 2026-09-10 (Model Beat tracker; HF card `ling-3.0-flash-vl-0910`); knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-flash-VL` (HF), `inclusionai/ling-3.0-flash-vl` (OpenRouter), `inclusionAI/Ling-3.0-flash-VL` (DeepInfra/Novita); a free `ling-3.0-flash-vl:free route exists on some aggregators (lmspeed) — no first-party Free ID verified.
- **Context window:** 262,144 tokens (marketed "256K"; HF card "up to 256K"; AA lists 262k — re-confirmed 2026-10-17). **Conflict noted:** OpenRouter's model page now displays "Context 131K" (its single host's serving cap, like DeepInfra's 131,072) — host cap, not model cap. Max output ≈ 32.8K (LMSpeed).
- **Modalities:** text + image + video in; text out; thinking mode on by default; tool calling yes (OpenRouter); JSON mode not verified.
- **Pricing (as of 2026-10-03):** DeepInfra $0.06 in / $0.18 out per 1M (cache $0.012); Novita $0.021/$0.062; Artificial Analysis blended ≈ $0.05–0.075 in / $0.19–0.22 out (LMSpeed). Paid, very cheap tier; no vendor-confirmed $0 first-party tier.
- **Architecture:** 124B total / 5.5B active sparse MoE, 42-layer hybrid backbone (KDA + Gated MLA at 5:1), open weights (Apache-style HF release, `bailing_moe_v3_vl`).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **64.4%** (AA via OpenRouter, re-confirmed 2026-10-17); TB4.0 **0.0%** (AA)
- Tau3-Banking: **34.4%** (AA τ-Bench Banking via OpenRouter); Toolathlon-Verified 59.4% (benchgap estimate, high confidence — not measured)
- MCP-Atlas: 72.7% (benchgap estimate, low confidence); GDPval-AA: **33.1%** (AA measured via benchgap; was 33.2 on 2026-10-09 pass — same harness, trivial revision)
- OSWorld-Verified 72.9% / BFCL v4 74.9% / BrowseComp 75.6% (benchgap estimates, medium confidence — not measured)
- Tool calling: supported (OpenRouter capability list) — no measured tool-accuracy score

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (AA via benchgap measured; Epoch AI via Model Beat also 86.2)
- HLE: **22.0%** (AA via benchgap measured)
- Artificial Analysis Intelligence Index: **25** (AA page 2026-10-17, v4.3.2; measured value 24.6 via benchgap) — **#2/67** in its open-weights size class (median 8); rank moved from the earlier #1/65 reading as new peers landed. Verbosity 160M tokens on Index vs 100M median (#8/13).
- LCR: **78.3%** (AA-LCR measured); CritPt: **2.0%** (AA measured); Omniscience: **14.4% acc / 78.0% non-hallucination** (AA measured)
- Agentic Index: 28.7 (AA measured via OpenRouter; benchgap estimate 26.6 — same ballpark)

Coding:

- SciCode: **44.2%** (Epoch AI via Model Beat; AA-SciCode 44.2 measured via benchgap)
- Artificial Analysis Coding Index: **57.0** (AA measured via OpenRouter 2026-10-09; supersedes the older Model Beat 43; benchgap estimate 48.6 — same mid-band, AA measured value retained)
- SWE-bench Verified / SWE-Pro / LiveCodeBench: still no verified public measured score for the VL (benchgap estimates only: SWE-V 72.0% medium confidence, SWE-Pro 50.0% medium, LiveCodeBench v6 84.9% high — estimates, not used as measured)

Long context:

- 262K window documented; no MRCR / RULER retrieval figure published for the VL (benchgap estimates: LongBench v2 62.3%, MRCRv2 85.5%, both low confidence)

Multimodal:

- **AA-MMMU-Pro: 79.0%** (benchgap measured, 2026-10-16 dataset) — first hard multimodal benchmark number for the VL; strongly corroborates the vendor card's vision claims
- BenchLM multimodal public-lane score: **77.5** (1 rankable row, Unranked — BenchLM compare pages, 2026-09)
- Other vision rows remain estimates (benchgap): MMMU 85.2%, MathVision 89.6%, Video-MME (w/o subtitle) 85.5%, CharXiv 85.2% — not measured

### Normalized scores (1–100)

- **Tool use: 62/100.** Measured set unchanged on 2026-10-17 (TB2.1 64.4%, τ-Bench Banking 34.4%, GDPval-AA 33.1%, Agentic Index 28.7); new benchgap estimates (Toolathlon-Verified 59.4, MCP Atlas 72.7, OSWorld-Verified 72.9, BFCL v4 74.9) are consistent but not measured, so no move. Unchanged.
- **Reasoning: 74/100.** GPQA 86.2%, HLE 22.0%, LCR 78.3%, CritPt 2.0% all re-confirmed measured; AA Index 24.6/25 keeps it in the mid band (20–35) — only change is class rank #1/65 → **#2/67** (new peers landed; score value identical). Unchanged.
- **Context window: 72/100.** 262,144 tokens in the 200K–500K tier (65–84); still no retrieval-at-window measurement (LongBench v2/MRCRv2 are low-confidence estimates). Unchanged.
- **Multimodal: 82/100.** **+2 on the first measured hard vision number: AA-MMMU-Pro 79.0%** (benchgap measured) corroborating BenchLM's 77.5 multimodal lane and the native image+video input; text-only out keeps it out of the 90s (was 80).
- **Coding: 73/100.** Measured set unchanged (SciCode 44.2%, AA Coding Index 57.0 measured / benchgap 48.6 estimated); SWE-V/LCB still estimates only. Unchanged.
- **Cost efficiency: 99/100.** $0.06/$0.18 on OpenRouter (single provider; the earlier 72%-off promo line no longer shown — still at the ~$0.10/$0.20 anchor). Unchanged.
- **Overall Score: 73/100.** (62 + 74 + 72 + 82 + 73) / 5 = 72.6 → 73 (was 72 — the multimodal fill moves it +1). Best-fit unchanged: ultra-cheap multimodal agentic worker for vision-in tasks, now with measured MMMU-Pro 79 proof behind its vision claims.

---

## Signature

- Provided by: **Mimo v2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-17
- Method: public internet research (2026-10-17 third pass: Artificial Analysis model page, benchgap measured/estimate ledger, OpenRouter model page with AA benchmark block; plus 2026-10-09 fills and 2026-10-03 original: inclusionAI HF card, Model Beat/Epoch AI, BenchLM, DeepInfra/Novita/LMSpeed pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
