# GPT-6 Astra — findings by Qoder Sonus

- Source: OpenAI / GPT-6 Astra, primarily max reasoning on the paid API; other efforts and harnesses labeled separately.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** GPT-6 Astra.
- **Short description:** OpenAI's proprietary reasoning model for demanding research, computer use, coding, and document creation. Independent tests show strong interactive reasoning and token-efficient agents, but those strengths do not eliminate document-quality regressions, hallucinations, or insecure generated code [S1–S6].
- **Provider / access:** OpenAI API, exact ID `gpt-6-astra`; supports both `/v1/responses` and `/v1/chat/completions`. The hosted-tool list below is specifically documented for Responses [S1]. No authenticated inference call was made.
- **Release / knowledge:** Released **September 2026** according to AA [S3]. ARC Prize's model result is dated September 2 and its article September 3 [S4, S5]; neither is silently treated as the exact public-release date. Knowledge cutoff **2026-04-30** [S1]. The official announcement's full body was inaccessible in this pass [S8].
- **IDs:** OpenAI `gpt-6-astra`, also the sole listed snapshot [S1]. No Free ID verified on OpenCode Zen; this report scores paid official API access.
- **Context window:** **1,050,000 tokens total**, **922,000 maximum input**, **128,000 maximum output**, explicitly documented [S1]. Total context is not the same as accepting 1.05M input tokens. Reasoning/output consumption and request limits must be budgeted together.
- **Modalities:** Text/image input and text output. Visual PDF input is supported through the API's text-plus-page-image processing for vision models [S1, S7]. Streaming, structured outputs, function calling, search, prompt caching, and reasoning efforts low/medium/high/xhigh/max are documented. Responses tools include web/file search, code interpreter, hosted shell, apply_patch, skills, computer use, MCP, tool search, and an image-generation tool [S1]. Tool-generated images are not native image output; audio, video, Realtime, and native image-generation endpoints are unsupported.
- **Pricing (as of 2026-10-27):** Standard **$10 input / $50 output / $1 cached input / $12.50 cache writes per million tokens** [S1]. Above **272K input tokens**, the full request costs **2× input/cache rates and 1.5× output**: $20 input, $2 cached input, $25 cache writes, and $75 output. Batch/Flex cost 50% of Standard; Fast mode costs 2× applicable rates. Hosted tools may add charges. No free-tier or privacy exemption is assumed.
- **Architecture:** Proprietary; verified parameter count, active parameter count, and open-weights license were not found [S1, S3].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59%**, rounded AA Intelligence evaluation at max [S2]. AA's separate **Codex Coding Agent Index** run gives **56%** [S2]. These are different evaluation contexts, not interchangeable results or a confidence interval.
- Terminal-Bench 2.1: no verified public score found; TB4.0 is not substituted as the same benchmark.
- AutomationBench-AA: **69%**, AA's implementation of Zapier's business-workflow benchmark, leading at publication [S2]. It is not automatically identical to a vendor AutomationBench success metric.
- AA-Briefcase: approximately **+90 Elo versus GPT-5.6 Sol**, with improved rubric/analytical quality but lower presentation quality [S2]. Exact absolute Elo was not supplied in the inspected article and is not invented.
- GDPval-AA v2: approximately **45 Elo below GPT-5.6 Sol**; **24 turns/task** at max versus 45 for the predecessor [S2]. Exact Astra Elo not verified. Fewer turns alone do not demonstrate a better final artifact.
- GDP.pdf: **31% of attempts passed every criterion**, compared with 27% for the predecessor in AA's test [S2]. This is an all-criteria rate, not a general document-accuracy percentage.
- SWE-Atlas-QnA: **62%**, Codex in AA's Coding Agent Index [S2].
- Tau3-Banking / Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found in inspected primary evidence. A secondary review's claim of banking regression is not converted into a fabricated value.

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **53 at max**, tied for first in AA's September 9 article [S2]. The current model page shows **rank 8/221** and **v4.3.2** [S3]; the old first-place statement is not presented as today's rank.
- AA-Omniscience: **51% hallucination rate**, down from 92% for GPT-5.6 Sol, alongside a four-point accuracy improvement [S2]. Exact Astra accuracy was not given in the inspected article. The benchmark-defined hallucination rate is not the fraction of all ordinary responses that are false.
- ARC-AGI-1 / ARC-AGI-2: **97.5% / 95.0% at max**, independently verified by ARC Prize [S4]. High effort scores **98.5% / 92.1%**, demonstrating that observed scores need not increase monotonically with effort.
- ARC-AGI-3 Semi-Private, **Standard harness, max**: **62.7%**, total run cost **$26,098** [S4, S5]. The neutral harness carries visible notes chosen by the model.
- ARC-AGI-3 Semi-Private, **Provider Adapter, max**: **98.6%**, total run cost **$17,332** [S4, S5]. **Provider Adapter, high**: **99.9%**, **$18,817**. These are run totals, not per-task prices. The adapter preserves opaque reasoning state and uses compaction; its scores must remain separate from standard-harness competitor results.
- GPQA Diamond: **96.0%**; Humanity's Last Exam **with tools: 57.2%**, official announcement values verified only through targeted search-index excerpts [S8]. The page returned HTTP 403, so full evaluation footnotes were not inspected; these are qualified vendor evidence, not independent reruns.
- AA-LCR / MLCR / CritPt / exact no-tools HLE: no verified public score found in directly inspected primary material. Frontier-math and security-risk claims in a secondary review were not promoted to primary evidence [S9].

Coding:

- AA Coding Agent Index: **62**, **Codex + GPT-6 Astra**, tied with Fable 5.1 in Claude Code at publication [S2]. This compares agent/model combinations, not models in one identical harness.
- DeepSWE: **68%** in AA's Codex evaluation versus **72%** for GPT-5.6 Sol in that evaluation [S2]. Improved terminal work therefore did not mean improved performance on every coding task.
- OpenAI's work announcement is indexed as reporting **74% on DeepSWE v1.1** [S10]; MindStudio quotes approximately **74.1%** [S9]. The full official body was inaccessible, so the higher vendor figure remains qualified and is not averaged with AA's 68% or assumed to use the same version/settings.
- Endor Labs Agent Security League, **Codex + GPT-6 Astra**, run **2026-09-09**: **82.1% FuncPass / 34.6% SecPass**, second by secure correctness on the inspected leaderboard [S6]. SecPass requires passing both functionality and security tests. The evaluation covers 200 tasks from 108 Python projects across 77 CWE classes; it is not a comprehensive security guarantee.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found in directly inspected primary evidence. DeepSWE is not relabeled as SWE-bench.

Long context and multimodal:

- OpenAI MRCR v2, 8-needle: **100.0% at 256K–512K**, **96.3% at 512K–1M**, verified in the official announcement's indexed table [S8] and corroborated by the secondary review [S9]. Full page/settings were inaccessible; this is vendor retrieval evidence, not an independent replication or proof of reliable reasoning throughout the entire window.
- No verified exact-model RULER, GraphWalks, native audio, or native video benchmark found. Visual PDF processing is documented [S7], and AA's GDP.pdf gives independent document-task evidence [S2], but neither establishes audio/video input.

### Evidence reconciliation and limitations

1. **The ARC discrepancy is resolved by effort and harness.** The 98.6% and 99.9% adapter results are both correct: max and high respectively. The 62.7% number is standard-harness max, not the same configuration [S4, S5]. ARC explicitly says benchmark saturation is not proof of AGI and notes its deterministic, bounded environments. Its table also includes a none setting not listed in today's public model documentation; this report does not promise that option [S1].
2. **Secondary index figures conflict with primary evidence.** MindStudio reports Astra/Fable Intelligence scores of 61/66 and Coding Agent scores of 67/70 [S9]. AA's inspected article instead reports 53/53 and 62/62, and today's Astra page explicitly identifies v4.3.2 [S2, S3]. The secondary review's index revision and extraction date were not resolved. Use the primary dated values; do not claim a numerical regression or average incompatible snapshots.
3. **Token efficiency is not low absolute pricing.** AA records $3.26 per Intelligence task at max, $0.82 at low, and $7.09 per Coding Agent task [S2, S3]. Max uses about 27K output tokens per Intelligence task and one-third the predecessor's tokens per Coding Agent task. Nevertheless, AA reports approximately 60% higher Intelligence task cost and 15% higher Coding Agent task cost than the predecessor. The review's approximately 75% Intelligence premium [S9] is not substituted for the primary comparison.
4. **Agent strengths coexist with regressions.** Strong terminal, ARC, and automation results coexist with lower GDPval/presentation scores and a DeepSWE regression [S2]. Endor's 82.1% functional versus 34.6% secure correctness reinforces the need for security testing [S6]; it does not establish that every functionally passing sample is safe.
5. **Advertised context and deployment billing are separate.** A total 1.05M window has a 922K input cap, and requests above 272K incur higher rates on the full request [S1]. The 96.3% long-window retrieval claim does not meet the project's 98%+ criterion for perfect context credit, even before the primary-page retrieval limitation is considered.
6. **Coverage boundaries are explicit.** OpenAI's announcement/work pages returned 403; only identified official indexed excerpts are used for their benchmark numbers. Accessible API documentation, AA's primary evaluation, ARC Prize's complete tables, and Endor's leaderboard carry the greatest weight. MindStudio is a secondary comparison, not a new independent benchmark run. No system-card contents or authenticated availability were inferred.

### Normalized scores (1–100)

- **Tool use: 97/100.** Independent TB4.0 59%, AutomationBench-AA 69%, SWE-Atlas-QnA 62%, and ARC's interactive results support excellent agents [S2, S4, S5]; GDPval/presentation regressions and harness dependence cap the score.
- **Reasoning: 94/100.** Primary AA index 53 and ARC-AGI-1/2/3 results demonstrate strong reasoning [S2–S5], reinforced by qualified vendor GPQA/HLE [S8]; 51% benchmark hallucination and uneven task performance prevent maximal credit.
- **Context window: 98/100.** Documented 1.05M total capacity and vendor MRCR 96.3% at 512K–1M support the top tier [S1, S8]; the 922K input ceiling, incomplete retrieval verification, and sub-98% long-window result rule out 100.
- **Multimodal: 87/100.** Image and visual-PDF input plus independently tested document work support strong visual understanding [S1, S2, S7]; text-only native output and no native audio/video support cap the score.
- **Coding: 93/100.** Independent Coding Agent Index 62, terminal strength, SWE-Atlas 62%, and Endor 82.1% functional correctness support high-end coding [S2, S6]; DeepSWE 68% and secure correctness 34.6% constrain the rating.
- **Cost efficiency: 35/100.** $10/$50 Standard pricing starts near the methodology's low-value tier, with a modest allowance for independently verified token efficiency [S1, S2]; long-input surcharges and tool fees keep the score low.
- **Overall Score: 94/100.** Half-up rounding of (97 + 94 + 98 + 87 + 93) / 5 = 93.8; cost excluded. Best suited to high-value terminal, research, and interactive-agent work with explicit harness, context, and security controls.

### Sources and search audit

All sources accessed 2026-10-27. Twelve successful fresh searches: `GPT-6 Astra OpenAI official model card benchmarks pricing context`; `GPT-6 Astra independent benchmarks Artificial Analysis Endor security`; `site:openai.com "Introducing GPT-6 Astra"`; `site:developers.openai.com "gpt-6-astra"`; `site:artificialanalysis.ai/articles "GPT-6 Astra" released`; `site:openai.com/index "Astra" "Introducing"`; `site:arcprize.org "Astra" "62.7"`; `"GPT-6 Astra" "MRCR" "96.3"`; `site:openai.com/index/gpt-6-astra "MRCR" "100.0" "96.3"`; `site:openai.com/index/gpt-6-astra "GPQA" "Humanity"`; `site:openai.com/index/gpt-6-astra "DeepSWE" "Terminal"`; `site:openai.com/index/gpt-6-astra "Humanity’s Last Exam" "57.2"`.

- [S1 — OpenAI official model ID, limits, modalities, tools, and pricing](https://developers.openai.com/api/docs/models/gpt-6-astra)
- [S2 — Artificial Analysis primary evaluation, September 9](https://artificialanalysis.ai/articles/benchmarking-gpt-6-astra)
- [S3 — Artificial Analysis current max-effort model page](https://artificialanalysis.ai/models/gpt-6-astra)
- [S4 — ARC Prize verified model results by effort and harness](https://arcprize.org/results/openai-gpt-6-astra)
- [S5 — ARC Prize methodology, costs, and limitations](https://arcprize.org/blog/astra)
- [S6 — Endor Labs Agent Security League](https://www.endorlabs.com/research/ai-code-security-benchmark)
- [S7 — OpenAI file inputs and visual PDF processing](https://developers.openai.com/api/docs/guides/pdf-files)
- [S8 — Official announcement; benchmark excerpts indexed, full page returned 403](https://openai.com/index/gpt-6-astra/)
- [S9 — MindStudio secondary comparison; conflicting index snapshots qualified](https://www.mindstudio.ai/blog/gpt-6-astra-benchmarks-analysis)
- [S10 — Official work announcement; rounded DeepSWE indexed, full page returned 403](https://openai.com/index/gpt-6-astra-next-generation-work/)

---

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research under the assigned reporter label, with twelve successful searches, official deployment documentation, three independent evaluation organizations, and explicit source/harness reconciliation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separately signed findings file alongside this one using the same headings.
