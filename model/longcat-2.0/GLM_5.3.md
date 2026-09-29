# LongCat 2.0 — findings by GLM 5.3

- Source: Meituan / LongCat team (`meituan/longcat-2.0`)
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat-2.0
- **Short description:** Meituan's MIT-licensed open-weights 1.6T-total / ~48B-active MoE, trained end-to-end on AI ASIC superpods (35T+ tokens) and pitched at coding agents — the June 2026 predecessor of LongCat-2.5-Preview.
- **Provider / access:** LongCat API Platform (OpenAI-compatible Chat Completions; `https://longcat.chat`), chat at `https://longcat.ai/`, self-host via SGLang/vLLM (GPU and NPU recipes); integrated with Claude Code, OpenClaw, Hermes harnesses. Tool calls supported (arguments as dict — nonstandard), thinking toggle.
- **Release / knowledge:** 2026-06-29 (HF card + AA); knowledge cutoff not stated.
- **IDs:** `meituan-longcat/LongCat-2.0` (Hugging Face); `meituan/longcat-2.0` (site slug ID). No Zen Free ID.
- **Context window:** 1M total (official: trained on hundreds of billions of tokens of 1M-context data; AA lists 1.0M). Max output split not published.
- **Modalities:** text in / text out only (AA: no image support); reasoning yes (thinking toggle); tool calls yes; JSON mode not documented.
- **Pricing (as of 2026-09-28):** $0.30 in / $1.20 out per 1M (LongCat API); cached input $0.006 (98% discount); ~$0.06 per AA Intelligence-Index task; blended ~$0.18/1M.
- **Architecture:** sparse MoE 1.6T total / ~48B active + 135B N-gram Embedding parameters; LongCat Sparse Attention (Streaming-aware / Cross-Layer / Hierarchical Indexing); 3-step MTP speculative decoding; MIT open weights (BF16/F32/FP8).

### Raw benchmarks found

> Vendor = official HF model card (in-house unified harness; `*` in the card marks numbers cited from other labs' official reports). AA = Artificial Analysis independent measurement. BenchLM has zero sourced coverage for this model.

Agent / tool use:

- Terminal-Bench 2.1: **70.8%** (vendor; contemporaries per vendor-cited reports: Gemini 3.1 Pro 70.7*, GPT-5.5 73.8*, Claude Opus 4.8 78.9*)
- FORTE: **73.2** (vendor; ties Claude Opus 4.6's 73.2; GPT-5.5 77.8, Opus 4.7 77.6)
- BrowseComp: **79.9** (vendor; Gemini 3.1 Pro 85.9*, GPT-5.5 84.4*, Opus 4.8 84.3*)
- RWSearch: **78.8** (vendor; beats Claude Opus 4.8's 77.3; GPT-5.5 85.3)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **88.9%** (vendor; GPT-5.5 93.6*, Claude Opus 4.7 94.2*)
- IMO-AnswerBench: **81.8** (vendor; GPT-5.5 79.5, Gemini 3.1 Pro 90.0)
- IFEval: **90.0%** (vendor; Gemini 3.1 Pro 96.1*)
- Writing Bench: **83.8** (vendor)
- HLE / LCR / MLCR / CritPt / Omniscience: no verified public score found
- Artificial Analysis Intelligence Index: **19** (#54/116 in class; median 18) (AA) — note the large divergence from the vendor's in-house table; AA's composite independently measured much weaker.

Coding:

- SWE-bench Pro: **59.5%** (vendor; beats GPT-5.5's 58.6*; Opus 4.7 64.3*, Opus 4.8 69.2*)
- SWE-bench Multilingual: **77.3%** (vendor; Opus 4.6 77.8*, Opus 4.7 80.5*, Opus 4.8 84.8*)
- SWE-bench Verified / LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- No public MRCR / RULER / GraphWalks number at 1M. 1M limit verified architecturally (official card + AA); retrieval quality at window length unverified.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor-harness FORTE 73.2 ties Opus 4.6, RWSearch 78.8 beats Opus 4.8, BrowseComp 79.9 is solid — but TB2.1 70.8 is mid-tier, no independent TB4.0/Tau/GDPval/Toolathlon data exists, and AA's independent composite (19) argues the in-house agentic numbers flatter the model.
- **Reasoning: 62/100.** Vendor GPQA-diamond 88.9% and IMO-AnswerBench 81.8 are respectable, but everything is self-reported in-house with zero independent reasoning verification, and AA's composite Index of 19 (barely above the 18 median) caps it hard.
- **Context window: 95/100.** Native 1M (≥1M tier) per official card and AA; no public ≥512K retrieval benchmark (MRCR/RULER) to justify 100.
- **Multimodal: 15/100.** Text in / text out only (AA-verified no image input) — text-only band.
- **Coding: 72/100.** SWE-bench Pro 59.5% edges GPT-5.5's 58.6 and SWE-bench Multilingual 77.3 sits near Opus 4.6 — genuine Opus-4.6/4.7-class coding-agent claims — but all in-house, with no SWE-bench Verified / LiveCodeBench corroboration and AA's low composite as counterweight.
- **Cost efficiency: 93/100.** $0.30/$1.20 with 98% cache discount and ~$0.06/task (AA #5/116 on cost) undercuts the $0.60/$2.20 (~92) reference; output price slightly above class median ($1.16) keeps it just under the cheapest tier.
- **Overall Score: 63/100.** (72 + 62 + 95 + 15 + 72) / 5 = 63.2 → 63. Best-fit recommendation: budget open-weights coding-agent server with 1M context for harness-driven repo work; independent composites lag the vendor story, so validate on your own harness before production routing.

---

## Signature

- Provided by: **GLM 5.3 (zai-org/glm-5.3)** — 2026-09-28
- Method: public internet research (official HF model card, Artificial Analysis, LongCat platform docs, longcatai.org benchmark summary); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
