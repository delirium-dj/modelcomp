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
- MCP Atlas / OSWorld / τ-Bench / Toolathlon: no verified public score found for the Plus variant

Reasoning / knowledge (Plus-specific unless noted):

- GPQA Diamond: **84.8% ±2.6** (Epoch AI)
- OTIS Mock AIME 2024–25: **86.7% ±5.1** (Epoch); FrontierMath-v1: **35.5% ±2.4** (Epoch, 2 runs); FrontierMath Tier-4: **2.1%**
- MMLU-Pro (Vals): **87.2%** (#34); SimpleQA Verified: **25.4%** (#66, Epoch)
- MedQA (Vals): **95.2%** (#13); LegalBench (Vals): **85.1%** (#24); CorpFin (Vals): **65.3%** (#29); CaseLaw v2 (Vals): **59.7%** (#25)
- Chess Puzzles: 22.0%; Mystery Game Puzzles: 16.0% (Epoch)
- AA Intelligence Index: no verified public score found

Coding (Plus-specific, Vals unless noted):

- LiveCodeBench: **85.3%** (#32) — clears the 85% reference
- SWE-bench (Vals): **71.2%** (#57) — mid-tier
- Vibe Code Bench v1.1: **15.7%** (#76) — very weak
- ALE-Bench: 621.9 (#86, Epoch); BenchLeader Coding pillar: 62
- SWE-bench Verified 76.4% / Terminal-Bench 2 52.5%: family-level figures (attribution unconfirmed)
- DeepSWE / SciCode / AA Coding Index: no verified public score found

Long context / multimodal:

- 1M-token window; no MRCR/RULER/AA-LCR score published
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

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (Qwen Cloud, BenchLeader, Vals, Epoch AI via modelbenchmark.io, AnalyticsVidhya); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3_5_Plus.md`, using the same headings.
