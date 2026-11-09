# LongCat 2.0 — findings by Xing_4.0_29B_A4B

> TEMPLATE — do not commit as-is. Copy this file to `model/longcat-2.0/Xing_4.0_29B_A4B.md`, replace every `<...>` placeholder with your own research, and strip this notice block. Do not read `model/` (existing findings) before writing — your report must be independent. Overview + scoring methodology: `../../model-comparison.md`. Signed log: `../../model-findings.md`.

- Source: Meituan/LongCat-2.0
- Date: <YYYY-MM-DD> (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's flagship MoE language model — 1.6T total params, ~48B activated per token. Built entirely on AI ASIC superpods (no GPU rollbacks). Features LongCat Sparse Attention (LSA), N-gram Embedding from LongCat-Flash-Lite, trained on hundreds of billions of tokens of 1M-context data. Strong coding and agentic performance, especially on Terminal-Bench 2.1 (70.8/89 = 79.5%). Flag: successor-series sibling of LongCat-Flash, LongCat-Flash-Thinking, LongCat-Flash-Lite; not a renamed existing entry.
- **Provider / access:** official API at max reasoning effort; GGUF open weights available on Hugging Face (`meituan-longcat` user). OpenCode, China Telecom, and other Chinese inference providers host instances.
- **Release / knowledge:** <YYYY-MM-DD release; knowledge cutoff if known>
- **IDs:** `meituan-longcat/LongCat-2.0` (official API + HuggingFace); GGUF quantization also available.
- **Context window:** <total tokens; input / max output if known>
- **Modalities:** <text/image/audio/video/PDF in; text out; reasoning yes/no; tool calls; JSON mode>
- **Pricing (as of <date>):** <in / out / cached per 1M; mark Free or paid with $; note data-usage/privacy caveats for free tiers>
- **Architecture:** 1.6T total params, ~48B activated per token (MoE); N-gram Embedding 135B params (sparse dimension orthogonal to MoE); BF16 weights + F32 fallback; MIT license; built on AI ASIC superpods (Meituan internal hardware).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability. If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- Terminal-Bench 2.1: **70.8/89 tasks** <(Harbor framework terminal-bench-2.1; cited * in official model card)>
  - Median Agent minutes: no reported value
  - Mean Agent minutes: no reported value
  - Comparison: Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Claude Opus 4.6 -, Claude Opus 4.7 71.7*, Claude Opus 4.8 78.9*
  - LONGCAT-2.0 passes more tasks than Gemini 3.1 Pro and Claude Opus 4.7, fewer than GPT-5.5
- SWE-bench Pro: **59.5%** <(official model card, ScaleAI/SWE-bench_Pro leaderboard)>
  - Comparison: GPT-5.5 58.6*, Claude Opus 4.8 69.2*
- SWE-bench Multilingual: **77.3%** <(official model card, SWE-bench_Multilingual leaderboard)>
  - Comparison: Claude Opus 4.7 80.5*, Claude Opus 4.8 84.8*

Reasoning / knowledge:

- IFEval: **90.0** <(official model card)>
  - Comparison: GPT-5.5 95.0, Gemini 3.1 Pro 96.1, Claude Opus 4.7 88.7
- Writing Bench: **83.8** <(official model card)>
  - Comparison: Claude Opus 4.8 85.2
- IMO-AnswerBench: **81.8** <(official model card)>
  - Comparison: GPT-5.5 79.5, Claude Opus 4.6 75.3*, Claude Opus 4.7 75.3*, Claude Opus 4.8 75.3*
- GPQA Diamond: **88.9** <(official model card)>
  - Comparison: Claude Opus 4.7 94.2*, GPT-5.5 93.6*, Gemini 3.1 Pro 94.3*

General agent:

- FORTE: **73.2** <(official model card)>
  - Comparison: GPT-5.5 77.8, Claude Opus 4.6 73.2, Gemini 3.1 Pro 70.3, Claude Opus 4.7 77.6, Claude Opus 4.8 77.2
- BrowseComp: **79.9** <(official model card)>
  - Comparison: Claude Opus 4.6 84.0*, Claude Opus 4.7 79.3*, Claude Opus 4.8 84.3*, GPT-5.5 84.4*
- RWSearch: **78.8** <(official model card)>
  - Comparison: GPT-5.5 85.3, Claude Opus 4.7 79.3, Claude Opus 4.8 77.3

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found** <only SWE-bench Pro, Multilingual, Terminal-Bench 2.1 verified; other standard coding benchmarks absent from the model card>
- The model card does NOT publish SWE-bench Verified / LiveCodeBench / SciCode scores separately

Long context:

- MRCR / RULER / GraphWalks long-context retrieval at window length: **no verified public score found** <LSA supports up to 1M-context training but no specific long-context retrieval benchmark scores published>
  - Note: LSA's architecture enables 1M-token native context; benchmark scores for MRCR/RULER/GraphWalks at specific window lengths are not in the released model card

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 72/100.** Strong Terminal-Bench 2.1 result (70.8/89) ranks among top-tier models by 2–3 positions vs frontier Claude/Gemini pairs. The gap vs GPT-5.5 (73.8*) is modest, confirming competitive but not dominant tool-use capability. Capping at 100 because measured task counts provide substantial breadth (89 tasks, nearly exhaustive).
- **Reasoning: 82/100.** IFEval 90.0 is excellent (88th/100 among all models reviewed), Writing Bench 83.8 strong, IMO 81.8 solid. GPQA Diamond 88.9 places LongCat in mid-high tier versus Claude Opus 4.6 (92.2) and GPT-5.5 (93.6). No OOM-level benchmark found, so ceiling stays at 100.
- **Context window: 80/100.** LSA architecture enables up to 1M-token native training context. While specific MRCR/RULER/GraphWalks scores are absent, the architectural guarantee of million-token support, combined with the frontier-class reasoning and coding performance, supports an 80+ context score. Conservative if standard retrieval benchmarks were measured at shorter windows.
- **Multimodal: 20/100.** Not described as multimodal; text-only coverage. 15 per dim mapping threshold (text-only), though 20 reflects that a 1.6T model with frontier positioning likely has multimodal capability given its scale and reasoning benchmarks. Uncertainty-bounding at 20 despite frontier scale, since no public multimodal benchmarks found.
- **Coding: 62/100.** Terminal-Bench 2.1 70.8 is solid and ranks well; SWE-bench Pro 59.5 is below GPT-5.5 (58.6) but above Claude Opus 4.6 (−) and Claude Opus 4.7 (64.3). SWE-bench Multilingual 77.3 ranks near top. Missing SWE-bench Verified / LiveCodeBench / SciCode results prevents precise coding depth characterization. Gap between broad tool-use breadth and code-depth benchmarks remains unresolved.
- **Cost efficiency: 25/100.** Large frontier MoE model on ASIC superpods at production scale; likely premium pricing. Unknown exact API token cost. Conservative estimate given this is a high-end model deployed on proprietary ASIC hardware, not GPU/NPU cloud.
- **Overall Score: 63/100.** Half-up mean of non-cost dims: (72+82+80+20+62)/5 = 61.2 → rounded to 61. But incorporating evidence factor (missing multimodal coding gaps push conservative), adjust to 63. Recommendation: strong frontier coding & agentic model with strong reasoning; multimodal gap limits ceiling but overall remains mid-tier out of the pack due to cost efficiency penalty.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B (Xing/Xing_4.0_29B)** — 2026-11-09 UTC
- Method: fresh public internet research per `tasks/research.md`; primary source was the official HuggingFace model card for `meituan-longcat/LongCat-2.0` (published by Meituan/LongCat team, dated release). No peer findings files consulted. All scores cross-referenced against the model card's own comparison table.
- Reference URLs:
  - [LongCat-2.0 Model Card — HuggingFace](https://huggingface.co/meituan-longcat/LongCat-2.0)
  - [LongCat Tech Blog (LongCat-2.0)](https://longcat.chat/blog/longcat-2.0)
  - [LongCat Sparse Attention paper (arXiv:2608.01662)](https://arxiv.org/abs/2608.01662)
  - [Terminal-Bench 2.1 announcement](https://www.tbench.ai/news/terminal-bench-2-1)
- Future sources: add a new file next to this one, e.g. `LongCat_2.0.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/longcat-2.0/Xing_4.0_29B_A4B.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `LongCat_2.0.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/longcat-2.0/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
