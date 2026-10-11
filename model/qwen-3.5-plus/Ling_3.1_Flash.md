# Qwen 3.5 Plus — findings by Ling 3.1 Flash

- Source: Alibaba (`opencode/qwen-3.5-plus`; Alibaba Cloud Model Studio, Qwen Cloud, OpenRouter)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** Alibaba's February-2026 hosted model (the open-weight flagship is the separate Qwen3.5-397B-A17B) — hybrid linear-attention + sparse-MoE architecture with a 1M multimodal context at $0.40/$2.40 per 1M; Vals-run LiveCodeBench 85.3% and GPQA Diamond 84.8% (Epoch), with SWE-bench (Vals) 71.2% and Vibe Code Bench 15.7% as the gaps.
- **Provider / access:** Alibaba Cloud Model Studio (hosted; built-in tools with adaptive tool use), Qwen Cloud, OpenRouter, Vercel, and ~20 third-party hosts ($0.11/$0.66 to $0.80/$4.80); an `alibaba-coding-plan` host lists free rates. Reasoning efforts incl. thinking (default).
- **Release / knowledge:** 2026-02-16; knowledge cutoff not stated in the materials reviewed.
- **IDs:** `opencode/qwen-3.5-plus` / `qwen3.5-plus`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a 1M window and text/image/video input.
- **Context window:** 1,000,000 tokens (991,808 input / 983,616 thinking; 65,536–66K output); long-context tier above 256K: input $0.375/M, output $2.25/M, cache write $0.4688/M.
- **Modalities:** text, image, video in (file input not supported, per Vals); text out.
- **Pricing (as of 2026-10-02):** $0.40/$2.40 per 1M input/output (Alibaba list); cache read $0.36/M, write $0.375/M; blended $0.900/M (BenchLeader); 48 tok/s; 1.37s TTFT.
- **Architecture:** hybrid linear-attention + sparse MoE (hosted model proprietary; sibling 397B-A17B open-weight).

### Raw benchmarks found

Agent / tool use:

- BFCL v4: **72.9%**; BrowseComp: **78.6%**; Terminal-Bench 2: **52.5%** — family-level figures from Alibaba's released evaluations (attributed to the Qwen3.5 flagship; Plus-specific attribution unconfirmed)
- BenchLeader Index (thinking, best config): **57.4 ±0.5** — #167 of 751 (Coding 62, Knowledge 61, Maths 61)
- Context Arena Memory & Persistence (Thinking, no tools): **74.0** (LLMLearner, #27 of 49) — a long-context memory row
- MCP Atlas / OSWorld / τ-Bench / Toolathlon: no verified public score found for the Plus variant

Reasoning / knowledge (Plus-specific unless noted):

- GPQA Diamond: **84.8% ±2.6** (Epoch AI)
- OTIS Mock AIME 2024–25: **86.7% ±5.1** (Epoch); FrontierMath-v1: **35.5% ±2.4** (Epoch, 2 runs); FrontierMath Tier-4: **2.1%**
- MMLU-Pro (Vals): **87.2%** (#34); SimpleQA Verified: **25.4%** (#66, Epoch)
- MedQA (Vals): **95.2%** (#13); LegalBench (Vals): **85.1%** (#24); CorpFin (Vals): **65.3%** (#29); CaseLaw v2 (Vals): **59.7%** (#25)
- Chess Puzzles: 22.0%; Mystery Game Puzzles: 16.0% (Epoch); AIME 2026: **91.3%** (Segmind); FrontierMath v2 (Tiers 1–3): **21.0%** (LMSpeed, #28 of 47 — a newer, harder version than the FrontierMath-v1 35.5% above)
- Epoch Capabilities Index: **147** (Epoch AI, #67 of 253; 15th of 184 at release); The Aggregate Unified ELO **1759 ± 5** (#119 of 1611, from 585 results)
- AA Intelligence Index: no verified public score found

Coding (Plus-specific, Vals unless noted):

- LiveCodeBench: **85.3%** (#32) — clears the 85% reference
- SWE-bench (Vals): **71.2%** (#57) — mid-tier
- Vibe Code Bench v1.1: **15.7%** (#76) — very weak
- ALE-Bench: 621.9 (#86, Epoch); BenchLeader Coding pillar: 62
- SWE-bench Verified 76.4% / Terminal-Bench 2 52.5%: family-level figures (attribution unconfirmed)
- LiveCodeBench (Vals Public) difficulty splits: Easy **98.8%** / Medium **90.1%** / Hard **67.1%** (Benchmark Atlas) — the 85.3% headline sits on an easy-weighted mix
- DeepSWE / SciCode / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR/RULER/AA-LCR score published (Context Arena Memory & Persistence 74.0 is the closest long-context row)
- NC Bench profile: Creative Writing 77.1%, Tooling 99.8%, Language 95.1%, Utility 86.6%, Reasoning 81.8%, Text Editing 98.1%, Rule Following 64.2%, Hallucination 86.6%
- Vending-Bench 2: **$1** final cash (Epoch — vs GLM-5's $15 and GPT-5.4 Nano's $4,432; a weak agentic-economics read)
- MMMU-Pro: **79.0%**; OmniDocBench v1.5: **90.8%**; Video-MME: **87.5%**; VITA-Bench: **49.7%**; ERQA: 67.5% — family-level figures (attribution unconfirmed)

### Normalized scores (1–100)

- **Tool use: 72/100.** Family-level BFCL v4 72.9% and BrowseComp 78.6% (attribution to Plus unconfirmed) and the BenchLeader Index of 57.4 are the only anchors; no Plus-specific Terminal-Bench 2.1, BrowseComp, MCP Atlas or OSWorld figures were captured, and Terminal-Bench 2 at 52.5% (family) is mid-tier.
- **Reasoning: 78/100.** GPQA Diamond 84.8% (Epoch) sits under the 90%+ frontier band, with MMLU-Pro 87.2%, AIME 86.7% and MedQA 95.2% supporting; FrontierMath 35.5%, SimpleQA Verified 25.4% and the missing AA Intelligence Index cap the score.
- **Context window: 95/100.** 1M-token window (991K input) with no ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 80/100.** text/image/video in with text out — the +video/PDF band (75–90), corroborated by family-level MMMU-Pro 79.0%, Video-MME 87.5% and OmniDocBench 90.8%; Plus-specific vision figures were not captured.
- **Coding: 72/100.** LiveCodeBench 85.3% (Vals, #32) clears the 85% reference, but SWE-bench (Vals) 71.2% is mid-tier and Vibe Code Bench v1.1 15.7% (#76) is very weak; DeepSWE, SciCode and the AA Coding Index are unpublished.
- **Cost efficiency: 92/100.** $0.40/$2.40 per 1M (blended $0.900/M) sits well under the ~88 ($1.25/$4.25) anchor, with third-party hosts from $0.11/$0.66 and a free `alibaba-coding-plan` listing as further offsets; the >256K tier ($0.375/$2.25) is a mild premium.
- **Overall Score: 79/100.** (72+78+95+80+72)/5 = 79.4 → 79 — a cheap 1M multimodal model with a strong LiveCodeBench (85.3%) and GPQA (84.8%), held back by mid-tier SWE-bench (71.2%), a very weak Vibe Code Bench (15.7%) and thin Plus-specific agentic-tool evidence.

---

## Update 2026-10-08 (6-day re-research)

Vals AI, BenchLeader and BenchmarkList filled the Plus-specific gaps; **no score changes** — the new rows corroborate the existing bands:

- **Vals Index: #10 overall (57.1% accuracy), #3 among open-weight models** (Vals AI, 2026-02-16 entry) — a strong composite fill: #6 on Corp Fin (v2), #8 on Finance Agent, #17 on SWE-bench Verified subsets, #25 on Case Law (v2), #11 on Terminal-Bench 2.0; Vals accuracy 58.74%, latency 10m36s.
- New Plus-specific rows (BenchLeader, best config = thinking, last measured 2026-09-29): GPQA Diamond (Vals) **87.4%** (#37), AIME (Vals) **86.0%** (#33), CL-bench **19.8%** (#9), CL-bench Life **12.4%** (#11), LMCA **36.4%** (#103), DTBench **80.5%** (#109), **Terminal-Bench 2.0 (Vals) 41.6%** (#29 — a weak Plus-specific read, below the family-level 52.5%), Vending-Bench 2 **0.5** (#62), MortgageTax **60.8%** (#63), SAGE **30.4%** (#77), Mystery Game Puzzles 17.0% (no reasoning) / 16.0% (not stated).
- BenchmarkList snapshots: 2026-04-20 — MMLU Pro 87.2% (rank 27 of 116), GPQA Diamond 87.4% (rank 29 of 117), ObviousBench 91.7% (rank 111 of 254), MMMU Pro **22.8%** (rank 79 of 79 — last place; conflicts with the family-level 79.0%, likely a different Vals protocol — flagged, not reconciled); 2026-02-15 — **PinchBench 85.8%** best score (rank 26 of 73, 65th pct; average 79.1%, avg execution 1126.91s, avg cost $0.66, 11 submissions) — a genuine Plus-specific agentic anchor, **ObviousBench 98.6%** answer pass³ (rank 43 of 254, 83rd pct), Design Arena Elo **1208** (rank 140 of 343, 59th pct, 11008 battles), Intelligence eval median 83rd pct.
- Other trackers: qwen35.com (official cards) — MMLU-Pro 87.8, GPQA Diamond 88.4, LiveCodeBench v6 83.6, SWE-bench Verified 76.4 (the hosted Plus references the 397B-A17B base model); BenchLM — overall 48.1/100 (#102 of 889, partial coverage, conservative), JobBench 18.5%, Vibe Code Bench 15.74% (corroborates the weak 15.7%).
- Score impact: none — PinchBench 85.8% and the Vals Index #10 support Tool 72, while Terminal-Bench 2.0 (Vals) 41.6%, JobBench 18.5% and Vending-Bench 2 0.5 cap it; the MMMU-Pro conflict (22.8% Vals vs 79.0% family) is flagged without moving Multimodal 80. Tool 72 / Reasoning 78 / Context 95 / Multimodal 80 / Coding 72 / Cost 92, Overall 79 all stand.

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 72 / Reasoning 78 / Context 95 / Multimodal 80 / Coding 72 / Cost 92, Overall stays 79. Third-pass rows corroborate the bands; the AA Intelligence Index remains unpublished for the hosted Plus (the Qwen 3.5 family comparison circulating covers the open-weight 397B/122B/27B variants, not the Plus API tier):

- **New rows:** Context Arena Memory & Persistence 74.0 (Thinking, no tools; #27 of 49, LLMLearner); AIME 2026 91.3% (Segmind); FrontierMath v2 (Tiers 1–3) 21.0% (#28 of 47, LMSpeed — a newer, harder version than the FrontierMath-v1 35.5% on file, so the two don't conflict); Epoch Capabilities Index 147 (#67 of 253; 15th of 184 at release); The Aggregate Unified ELO 1759 ± 5 (#119 of 1611, from 585 results); LiveCodeBench (Vals Public) difficulty splits Easy 98.8% / Medium 90.1% / Hard 67.1% (Benchmark Atlas — the 85.3% headline sits on an easy-weighted mix); NC Bench profile (Creative Writing 77.1%, Tooling 99.8%, Language 95.1%, Utility 86.6%, Reasoning 81.8%, Text Editing 98.1%, Rule Following 64.2%, Hallucination 86.6%); LegalBench sub-splits (Conclusion 89.9%, Issue 91.2%, Interpretation 81.9%, Rule 81.3%, Rhetoric 81.2%); Vending-Bench 2 final cash of $1 (Epoch — vs GLM-5's $15 and GPT-5.4 Nano's $4,432).
- **Conflicts flagged:** ALE-Bench reads 1071 (Benchmark Atlas) vs 621.9 (#86, Epoch) — different protocol/version, not reconciled; ULTRABENCH's "intelligence index 83.6" has no published methodology (likely its own composite, not AA) — not adopted; Xentir's FrontierMath 21.0% is the v2 Tiers 1–3 read, matching LMSpeed.
- **Still unpublished:** AA Intelligence Index (Plus-specific), DeepSWE, SciCode, AA Coding Index, MCP Atlas, OSWorld, Terminal-Bench 2.1, MRCR/RULER/AA-LCR.
- Score impact: none — AIME26 91.3% and the ECI 147 support Reasoning 78, while FrontierMath v2 21.0%, Vending-Bench 2 $1 and the LCB Hard 67.1% split cap it; Tool 72, Context 95, Multimodal 80, Coding 72 and Cost 92 all stand.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (Qwen Cloud, BenchLeader, Vals, Epoch AI, AnalyticsVidhya, LLMLearner, LMSpeed, Segmind, Benchmark Atlas, NC Bench, The Aggregate, Xentir, ULTRABENCH); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_5_Plus.md`, using the same headings.
