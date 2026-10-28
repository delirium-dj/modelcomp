# Kimi K3 — findings by GPT-6 Luna

- Source: Moonshot AI/Kimi K3
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight, native-vision Mixture-of-Experts model for long-horizon coding, agentic knowledge work, and reasoning. It is the previous-generation flagship; Kimi K3.1 Pro is now the newer flagship.
- **Provider / access:** Moonshot/Kimi API at `https://api.moonshot.ai/v1` (OpenAI-compatible Chat Completions); Kimi Code and the Hugging Face weights are also available. The API guide says K3 is unlocked after a successful minimum $1 top-up; this is not a free tier.
- **Release / knowledge:** Released 2026-07-16. No exact knowledge-cutoff date found in the official model card or API guide.
- **IDs:** API ID `kimi-k3`; Hugging Face model `moonshotai/Kimi-K3`.
- **Context window:** 1,048,576 tokens. The API guide allows `max_completion_tokens` up to 1,048,576 (default 131,072); the advertised context and output cap are separate limits, not a promise of 1M output alongside 1M input.
- **Modalities:** Text, image, and video input; text output. Reasoning is always enabled (`low`, `high`, or `max`, default `max`). Supports tool/function calling and structured output. No audio input/output or native non-text output verified.
- **Pricing (as of 2026-10-28):** Kimi API launch/pricing materials list $3.00/M cache-miss input, $0.30/M cache-hit input, and $15.00/M output. Cache writes are billed separately by TTL; API context caching is automatic (5-minute default, with a 1-hour option). The static pricing page currently exposes an empty model-price table in its text view, so the exact prices are cross-checked against Kimi's model blog and independent provider listings.
- **Architecture:** Open weights under the Kimi K3 License (not assumed to be an OSI-approved license); 2.8T total / 104B activated parameters, MoE with 896 experts and 16 selected per token, Kimi Delta Attention and Attention Residuals. Native weights use MXFP4 with MXFP8 activations.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** in Moonshot's Kimi Code harness at max reasoning; Artificial Analysis' independent Terminus 2/e2b evaluation reports **85.0%** (pass@1 averaged over three repeats), while Vals AI reports **80.90%** over three full trials at max reasoning. Harnesses differ; these are not directly interchangeable (Moonshot model card; Artificial Analysis evaluation methodology, with score indexed by BenchLM; Vals AI).
- τ³-Banking: **33.4%** in Moonshot's model-card table; Artificial Analysis reports **46.0%** for its separately run AA Tau3 Banking evaluation. The reviewed sources do not establish identical harness/version (Moonshot; Artificial Analysis leaderboard as indexed by BenchLM).
- GDPval-AA v2: **1,686 Elo** in Moonshot's full model-card results table. Its launch graphic appears to show **1,668 Elo**; the same-provider discrepancy is unresolved (Moonshot model card and launch graphic).
- BrowseComp: **91.2%** with Moonshot's 300K-triggered context-compaction setup; Moonshot separately reports **90.4%** with a 1M context and no context management. These are two configurations of the same task, not contradictory measurements (Moonshot model card/footnote).
- Toolathlon-Verified: **76.5%**; MCP-Atlas: **84.2%**; AutomationBench: **30.8%**; JobBench: **54.3%**; MCPMark-Verified: **94.5%**; DeepSearchQA F1: **95.0%** (Moonshot model card; its harness and test-setting footnotes apply).
- Claw-Eval / ClawProBench: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot model card and Hugging Face evaluation results); Vals AI's separate run reports **92.93% ± 1.31** (rank 12/138).
- HLE-Full: **43.5% without tools / 56.0% with tools** in Moonshot's table. Artificial Analysis reports **46.9%** on its HLE evaluation; the reviewed sources do not demonstrate identical tool settings or item versions (Moonshot; AA model benchmark data indexed by BenchLM).
- AA-LCR: **74.7%** in Moonshot's model-card table. BenchLM lists **88.7%** for an Artificial Analysis AA-LCR result; the score/version discrepancy is unresolved, and AA-LCR's documented inputs range from 10K to 100K tokens, not 1M (Moonshot; BenchLM; Artificial Analysis benchmark description).
- CritPt: **23.4%** (Moonshot model card; benchmark source is Artificial Analysis).
- Artificial Analysis Intelligence Index: **57.11** in the 2026-07-21 snapshot tracked by BenchmarkList; AA's July launch analysis rounded it to **57**. AA's live model page now marks K3 deprecated for ongoing tracking and no longer supplies a current Index value; N/A is not a zero score.
- Omniscience Accuracy / Hallucination Rate: **no verified exact-K3 score found**.

Coding:

- DeepSWE: **67.5%** in Moonshot's results table. Its footnote cites **67.3%** on the public DeepSWE v1.1 leaderboard with mini-SWE-agent; a later BenchmarkList snapshot shows **69.0%**, with no matching run configuration established (Moonshot; BenchmarkList).
- Terminal-Bench 2.1: **88.3%** Moonshot/Kimi Code; see the independent 85.0% and 80.90% runs above.
- FrontierSWE: **81.2%**; ProgramBench: **77.8%**; SciCode: **58.7%**; Kimi Code Bench 2.0 (internal): **72.9%** (Moonshot model card; the Kimi Code and internal benchmark scores are vendor-run).
- SWE-bench Verified: **95.10%** on the Vals Index subset (Vals AI). BenchmarkList tracks **93.4%** on a separate Vals leaderboard entry; do not treat these as the same sample or setting.
- Vibe Code Bench: **91.27%** on the Vals Index subset; Vals AI's separate v1.1 benchmark reports **84.97% ± 2.75** (distinct benchmark/version definitions).
- LiveCodeBench: **87.19% ± 0.97**, rank 18/143 (Vals AI).

Long context:

- Context capacity: **1,048,576 tokens** (Moonshot API docs and model card). No verified 512K–1M long-context retrieval score found. AA-LCR's published methodology covers 10K–100K input documents; BrowseComp's 90.4% no-management result tests browsing, not isolated retrieval accuracy at 512K–1M.

Multimodal:

- MMMU-Pro: **81.6% without tools / 83.4% with Python**; CharXiv-R: **84.8% without tools / 91.3% with tools**; Video-MME with subtitles: **90.0%** (Moonshot model card; most multimodal results average three runs).

### Normalized scores (1–100)

- **Tool use: 88/100.** Moonshot's 88.3% Terminal-Bench 2.1, 91.2% BrowseComp, and 84.2% MCP-Atlas are strong; the independent Terminal-Bench runs are lower at 85.0% and 80.90%, τ³-Banking is below the 50% frontier reference in both reported setups, and Claw-Eval is absent (Moonshot; Artificial Analysis; Vals AI).
- **Reasoning: 90/100.** GPQA Diamond at 93.5%, HLE at 56% with tools (43.5% without), and AA's roughly 57-point launch Index are frontier-level, but the current AA Index is unavailable, CritPt is 23.4%, and the 74.7% AA-LCR result is not a 512K–1M retrieval test (Moonshot; Artificial Analysis; BenchLM).
- **Context window: 95/100.** The documented 1,048,576-token context earns the ≥1M tier, but no verified retrieval result approaches the rubric's ≥98% threshold at 512K or beyond (Moonshot API guide; Artificial Analysis LCR methodology).
- **Multimodal: 85/100.** Official docs verify image and video input, supported by 81.6/83.4% MMMU-Pro, 91.3% CharXiv with tools, and 90.0% Video-MME; no audio or non-text output is verified (Moonshot model card/API docs).
- **Coding: 90/100.** Terminal-Bench 2.1 ranges from 80.90% to 88.3% across different harnesses; SciCode is 58.7%, FrontierSWE 81.2%, and Vals AI reports 95.10% on its SWE-bench Verified subset, while DeepSWE at 67.5% is below the rubric's 74% frontier reference (Moonshot; Artificial Analysis; Vals AI).
- **Cost efficiency: 60/100.** The $3/$15 per-million miss-input/output rate matches the methodology's approximate score for that price point; $0.30 cached input improves repeat-prefix workloads, but high output use and the $15 output rate cap general cost value (Moonshot; Artificial Analysis AA-Briefcase analysis).
- **Overall Score: 90/100.** (88 + 90 + 95 + 85 + 90) / 5 = 89.6, rounded half-up; a strong choice for long-context, visual, and coding-agent work when API cost and long task time are acceptable, but less attractive for low-cost/high-throughput use.

---

## Evidence comparison and source notes

- Terminal-Bench 2.1 is the clearest cross-source conflict: Moonshot's Kimi Code harness reports 88.3%; Artificial Analysis' independent evaluation uses Terminus 2 in an e2b sandbox and pass@1 averaged over three repeats (85.0% as indexed by BenchLM); Vals AI reports 80.90% over three full trials. Because the harnesses differ, the report retains each value and scores below the highest vendor result.
- Moonshot's full results table and accompanying launch graphic differ on GDPval-AA v2 (1,686 vs. approximately 1,668 Elo). Moonshot's full table is used for the raw-benchmark line, but neither value is treated as an exact independent replication.
- AA-Briefcase is another small same-benchmark difference: Moonshot's full results table gives 1,548 Elo, while Artificial Analysis' 2026-07-21 launch article reports 1,543 Elo. These may reflect separate snapshots; there is no evidence to average them.
- Moonshot reports HLE-Full as 43.5% without tools and 56.0% with tools; AA's 46.9% is a separately tracked HLE evaluation. The difference is not interpreted as a direct contradiction without matched tool policy and test version. Similarly, Moonshot's 74.7% AA-LCR table entry differs from BenchLM's 88.7% AA-sourced entry; the discrepancy is left explicit.
- DeepSWE's official table gives 67.5%, its footnote cites 67.3% on the public leaderboard, and a later aggregator snapshot lists 69.0%. Harness/version and run details do not fully reconcile these values, so the score uses the conservative first-party result and notes the spread.
- Moonshot's official API list still includes `kimi-k3` as its previous-generation flagship alongside Kimi K3.1 Pro. Artificial Analysis marks K3 deprecated for ongoing evaluation and recommends its successor; this tracker status is not treated as proof that the Kimi API ID has been withdrawn.
- The official static pricing page's text extraction currently exposes empty pricing-table rows. The exact $3/$15 and $0.30 cache-hit values are therefore sourced to Moonshot's K3 launch/API material and independently cross-checked against Vals AI, Artificial Analysis, and BenchmarkList. Kimi docs confirm automatic cache billing and TTL behavior.

## Sources

- Moonshot AI, [Kimi K3 technical/model card on Hugging Face](https://huggingface.co/moonshotai/Kimi-K3) — architecture, 2.8T/104B counts, Kimi K3 License, modalities, full benchmark table, and run-setting footnotes.
- Moonshot AI, [Kimi K3 API quickstart](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart.md) — exact API ID, Chat Completions endpoint, 1M context, output limit, reasoning/tool/vision/video features, and API access requirements.
- Moonshot AI, [Kimi model list](https://platform.kimi.ai/docs/models.md) — current status as previous-generation model and K3.1 Pro successor.
- Moonshot AI, [Kimi K3 API pricing documentation](https://platform.kimi.ai/docs/pricing/chat.md) — cache billing and TTL; its static price table was empty in the text response on the research date.
- Moonshot AI, [Kimi K3: Open Frontier Intelligence](https://www.kimi.com/blog/kimi-k3) — release, launch prices, benchmark graphics, setup footnotes, and 1M BrowseComp alternative.
- Artificial Analysis, [Kimi K3 model page](https://artificialanalysis.ai/models/kimi-k3) — independent model tracking, lifecycle caveat, and performance/provider details.
- Artificial Analysis, [Kimi K3 AA-Briefcase analysis](https://artificialanalysis.ai/articles/kimi-k3-agentic-knowledge-benchmark) — independent AA Index/Briefcase results, 1,543 Elo snapshot, measured task cost/time, and $3/$15 price.
- Artificial Analysis, [Terminal-Bench 2.1 evaluation](https://artificialanalysis.ai/evaluations/terminalbench-v2-1) — independent methodology (Terminus 2, e2b, pass@1 averaged over three repeats); K3's 85% is also indexed in BenchLM.
- Vals AI, [Kimi K3 model and benchmark results](https://www.vals.ai/models/kimi_kimi-k3) — independent Terminal-Bench trials, Vals Index, GPQA, SWE-bench, Vibe Code, and modality/settings.
- BenchLM, [Kimi K3 benchmark record](https://benchlm.ai/models/kimi-k3) — secondary benchmark index, useful for locating discrepancies and source links; its overall composite is not used as a project score.
- BenchmarkList, [Kimi K3 benchmark record](https://benchmarklist.com/models/moonshotai-kimi-k3/) — secondary score/rank snapshot and source links; values are not treated as independent runs unless the underlying evaluator is identified.
- Bing searches performed 2026-10-28: [official model card/API/benchmarks](https://www.bing.com/search?q=%22Kimi+K3%22+official+model+card+benchmarks+API+2026+Moonshot), [Artificial Analysis results](https://www.bing.com/search?q=%22Kimi+K3%22+Artificial+Analysis+benchmark), [independent benchmark evaluation/review](https://www.bing.com/search?q=%22Kimi+K3%22+independent+benchmark+evaluation+review).

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-28
- Method: Three successful Bing searches followed by direct review of Moonshot's official API/model documentation and benchmark card, Artificial Analysis, Vals AI, BenchLM, and BenchmarkList. Harness/version disagreements are preserved rather than averaged; aggregator rows are distinguished from independent evaluations. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
