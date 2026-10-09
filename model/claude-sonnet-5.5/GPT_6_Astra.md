# Claude Sonnet 5.5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Sonnet 5.5
- Date: 2026-10-09 (UTC); user-authorized refresh of the October 3 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Sonnet 5.5
- **Short description:** Reasoning model for everyday coding and document workflows.
- **Provider / access:** Claude Messages API and major cloud partners.
- **Release / knowledge:** September 28, 2026 / June 2026.
- **IDs:** `claude-sonnet-5-5`; Zen Free ID unverified.
- **Context window:** 1M, 128K output; Batch beta permits 300K output.
- **Modalities:** Text, image and PDF input, text output, adaptive reasoning and tools.
- **Pricing (as of 2026-10-09):** $2 input / $10 output / $0.10 cache-read per million, per current model documentation. The original report and launch article said $0.20 cache-read; the effective change date is unverified.
- **Architecture:** Proprietary; size undisclosed. [Specifications](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)

### Original launch evidence (rechecked October 9)

Launch-table values below remain published unchanged. Missing-data statements describe the October 3 search and are superseded by the fresh evidence section where applicable.

Agent / tool use:

- Terminal-Bench 4.0: 70.6%; GDPval-AA v2.1: 1844; AA-Briefcase v1.1: 1811; OSWorld 2.1: 80.1% partial.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE with tools: 64.5%; other requested reasoning suites: no verified public score found.

Coding:

- FrontierCode 1.1 Main: 46.2% max, 52.1% xhigh; CursorBench 4.0: 55.5%.
- SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Long context:

- No verified public retrieval score found.

Benchmarks: [Anthropic launch](https://www.anthropic.com/claude-sonnet-5-5). Scores depend on effort and deployed safeguards/fallbacks; higher effort does not universally improve performance.

### Fresh evidence and specification checks

- Artificial Analysis's September 28 evaluation, max effort/default fallback: Intelligence Index **56**, Terminal-Bench 4.0 **64%**, AutomationBench-AA **71%**, Terminal-Bench-Science **53%**; Omniscience factual accuracy **54%**, hallucination rate **47%**. Accuracy and hallucination rate have different denominators and must not be treated as complements. Reported cost is **$7.60/task**, with approximately **193K output tokens/task**, on its Intelligence Index workload. This was a prerelease deployment with a structured-output bug; AA says the public release fixed it. These are not verified rerun results for the fixed deployment. [AA evaluation](https://artificialanalysis.ai/articles/claude-sonnet-5-5/)
- Vibe Code Bench v1.1: **92.39%**, OpenHands, **$31.25/test**, displayed duration **1h01m**. [Vals leaderboard, updated October 7](https://www.vals.ai/benchmarks/vibe-code)
- Chartography: **61.6% without tools**, newly captured from the launch table. [Anthropic evaluation](https://www.anthropic.com/claude-sonnet-5-5)

Both the model's 1M context and 128K output limit remain documented, with 300K output limited to Batch beta. Standard input/output prices are unchanged. PDF input is supported for all active Claude models, correcting the earlier image-only tier. [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)

Sonnet 5.5 defaults to high effort and rejects forced tool use. Current documentation lists $0.10 cache reads, whereas its launch article and AA evaluation used $0.20; use current documentation for present list pricing, and keep published benchmark task costs unchanged. [Current model documentation](https://platform.claude.com/docs/en/models/sonnet-5-5/overview)

### Comparison with October 3 and remaining gaps

Newly located independent and visual/application benchmarks fill gaps; they do not demonstrate that the model improved after October 3. Vals measures app building with OpenHands, not Vibe1-100 or SWE-bench. AA results retain their effort and fallback qualifications and must not replace differently configured vendor results.

Multimodal changes from 70 to 80 under the project's PDF-input tier. All other dimension ratings remain unchanged: the added evidence supports the existing high capability scores, while task costs show why token prices alone do not establish cheap execution. Overall changes from 89 to 91. Tool 95, Reasoning 92, Context 95, Coding 94 and Cost 70 are retained; the cache discount is workload-dependent and does not justify a separate cost-rating increase here.

Exact-ID GPQA, full-window retrieval, MCP Atlas, SWE-bench, LiveCodeBench and DeepSWE remain unverified in reviewed evidence. No results from Opus 5, Sonnet 5 or other neighboring versions are substituted.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong terminal and professional work; safeguards and evaluation scope cap confidence.
- **Reasoning: 92/100.** Strong assisted HLE; unaided evaluation coverage is incomplete.
- **Context window: 95/100.** 1M capacity, without verified full-window retrieval accuracy.
- **Multimodal: 80/100.** Verified image and PDF input meet the PDF-input tier; native audio/video and non-text output remain unverified.
- **Coding: 94/100.** Strong terminal and Cursor results; FrontierCode reveals effort sensitivity.
- **Cost efficiency: 70/100.** $2/$10 paid pricing offers better value than the $3/$15 anchor.
- **Overall Score: 91/100.** Half-up mean (95 + 92 + 95 + 80 + 94) / 5 = 91.2, rounded to 91; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public research; normalized judgments, not official vendor scores.
- Future sources: add separate signed files with these headings.
