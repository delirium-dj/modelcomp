# LongCat 2.5 Preview — findings by Ling 3.1 Flash

- Source: Ling 3.1 Flash (opencode/ling-3.1-flash-free) / LongCat 2.5 Preview
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **EVIDENCE WARNING:** Meituan published **no benchmark scores** for LongCat-2.5-Preview. The vendor changelog, pricing page, and platform docs contain capability claims only. Every benchmark dimension below is scored on specs, family reference, and claims — and labeled accordingly.

## Model card

- **Name:** LongCat 2.5 Preview
- **Short description:** Meituan's preview release of the LongCat 2.5 generation — a ~1.6T-parameter sparse MoE (~48B active) with 1M context, newly added image understanding, and a reasoning toggle, positioned for long-horizon coding and multimodal GUI/agent tasks.
- **Provider / access:** Meituan — LongCat Chat and the LongCat API platform (pay-as-you-go); free on OpenCode Zen with no request cap and no announced end date ("free for a limited time"; no expiry marker in OpenCode's docs, Zen pricing table, or the models.dev catalogue; zero data retention on Zen). Works with Claude Code, Hermes, OpenClaw, OpenCode, Kilo Code.
- **Release / knowledge:** 2026-09-25 (changelog entry "LongCat-2.5-Preview Now Available"). Knowledge cutoff not stated in captured sources.
- **IDs:** `longcat_2.5_preview` (repo folder); `LongCat-2.5-Preview` (LongCat platform).
- **Context window:** 1,000,000 tokens (1,048,576 per the models.dev catalogue); max output 131,072.
- **Modalities:** Text, image in (new in 2.5: image parsing for cross-modal Q&A, content summarization, complex visual reasoning); text out. Reasoning toggle (interleaved reasoning content); tool calling supported. Not open weights per the models.dev catalogue (the LongCat-2.0 predecessor shipped MIT weights).
- **Pricing (as of 2026-10):** $0.30 input / $1.20 output per 1M, flat across the 1M window (limited-time discounted rate per the vendor pricing page); cached input $0.006 per 1M; free on OpenCode Zen.
- **Architecture:** Sparse MoE — ~1.6T total / ~48B active parameters (per Meituan site metadata and Chinese trade coverage; no technical report or model card accompanied the launch).

### Raw benchmarks found

- **LongCat-2.5-Preview: no verified public benchmark score found for any dimension.** The vendor changelog claims "superior coding capability" and image understanding without numbers; no technical report, model card, or benchmark table was published.
- Family reference (LongCat-2.0, open-sourced July 2026, same ~1.6T/48B scale — **does not transfer to 2.5 Preview**): SWE-bench Pro **59.5**, Terminal-Bench 2.1 **70.8**, SWE-bench Multilingual **77.3**.
- One third-party aggregator (APIVALE) self-ran a benchmark and claims SWE-bench Lite **88.6%** for LongCat 2.5 — a single low-visibility source with an implausibly high value for the SWE-bench Lite subset; treated as unverified and excluded from scoring.

## Scores

- **Tool use: 50/100.** No verified public score found. Tool calling is documented (Claude Code / OpenClaw / OpenCode / Kilo Code compatibility), but no Tau-bench, MCP-Atlas, Terminal-Bench, or equivalent measurement exists for this model; scored at the neutral midpoint.
- **Reasoning: 50/100.** No verified public score found. Reasoning toggle exists (interleaved reasoning output); no GPQA, HLE, AIME, or MATH-equivalent measurement published; neutral midpoint.
- **Context window: 85/100.** 1,048,576-token context claimed by the provider and two independent catalogues; no retrieval-quality benchmark (MRCR-class) at long range published, so the top band is not justified.
- **Multimodal: 60/100.** Image input newly added with documented cross-modal Q&A and visual-reasoning capabilities; no MMMU, MMMU-Pro, or MathVista-equivalent score published for 2.5 Preview; scored on documented capability, not measurement.
- **Coding: 55/100.** No verified public score found for 2.5 Preview. Family reference only (LongCat-2.0: SWE-bench Pro 59.5, Terminal-Bench 2.1 70.8 — same scale, does not transfer); vendor claims "excels in code generation, code understanding, and automated programming" without evidence; scored slightly above neutral on the family signal.
- **Cost efficiency: 97/100.** Free on OpenCode Zen with no request cap and no announced end date; $0.30/$1.20 per 1M list price with $0.006 cached input is deep-discount tier by 2026-10 standards.
- **Overall Score: 60.0/100.** Mean of Tool use 50, Reasoning 50, Context window 85, Multimodal 60, Coding 55 = 60.0 (Cost efficiency excluded per methodology).

> **Note on this score:** The 60.0 is a spec-and-claim-based estimate, not a measurement-based one — the first dimension in this project scored with zero model-specific benchmark evidence. The folder's live peer average (73.2) sits ~13 points higher; peers appear to have extrapolated from LongCat-2.0's scores. That extrapolation is documented here as family reference only and was deliberately not used to lift the score.

## Notes

- Verification trail: vendor changelog (launch + capability claims, no numbers), vendor pricing page ($0.30/$1.20 limited-time, cached $0.006), OpenCode Zen docs (free tier, no cap, no expiry marker, zero data retention), models.dev catalogue (1,048,576 context, 131,072 output, reasoning toggle, tool calling, not open weights), Chinese trade coverage and Meituan site metadata (1.6T/48B scale), LongCat-2.0 open-source announcement (MIT weights; SWE-bench Pro 59.5, TB 2.1 70.8, SWE-bench Multilingual 77.3).
- Open questions for the next auditor: (1) does Meituan publish a technical report or benchmark suite for 2.5 after preview? (2) is the APIVALE SWE-bench Lite 88.6% claim reproducible? (3) does the 1M context carry the same retrieval quality as the 1M-context leaders?
- Future sources: Meituan LongCat technical report for 2.5, third-party coding-evals (SWE-bench Verified, Terminal-Bench 2.1) once agents run them, MRCR-class long-context evals, MMMU-class vision evals, LMArena entry.

---

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-03
- Cross-model signed log: `model-findings.md` — append one line: `2026-10-03 Ling 3.1 Flash LongCat 2.5 Preview Overall=60.0 (Tool=50 Reasoning=50 Context=85 Multimodal=60 Coding=55 Cost=97; zero vendor benchmarks — spec/claim-based estimate; family ref LongCat-2.0 only)`
