# Gemini 3.8 Flash — findings by Qoder Sonus

- Source: Google DeepMind / Gemini 3.8 Flash, base model, high thinking on paid Standard access unless specified.
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Gemini 3.8 Flash. Flash Cyber, TTS, and Live are different deployments and contribute no inherited scores here.
- **Short description:** Google's multimodal agentic workhorse, emphasizing iterative coding, enterprise workflows, and visual analysis. Low token prices and strong older coding tests coexist with substantial high-effort token consumption and much weaker newer interactive-agent results [S1–S8].
- **Provider / access:** Stable `gemini-3.8-flash` in the Gemini API and Google Cloud; documented native GenerateContent and Interactions workflows [S1, S3, S4]. No authenticated inference test was performed. A native OpenAI Responses route was not verified.
- **Release / knowledge:** Released **2026-09-02** [S2]. Cloud documents GA and the API lists stable availability [S1, S3]. Knowledge cutoff **March 2026**, verified through the official model card's search-index excerpt; its full body did not render [S12].
- **IDs:** Google `gemini-3.8-flash`; no distinct free Zen ID verified. Google's own API price table explicitly offers a free tier, with different data-use and grounding conditions [S5].
- **Context window:** **1,048,576 input tokens / 65,536 output tokens**, official API limits [S1]. No exact-model MRCR/RULER retrieval percentage at 512K+ was verified.
- **Modalities:** Text/image/video/audio/PDF input, text output. Function calling, structured outputs, code execution, file search, URL context, caching, search/Maps grounding, and preview computer use are documented [S1]. Native audio/image generation and Live API are unsupported.
- **Reasoning / API constraints:** Low/medium/high thinking; **medium is default**, and minimal returns an error [S1, S3, S4]. Cloud says temperature/top-p/top-k are ignored, unsupported penalty/candidate-count parameters error, tool responses must match preceding calls, and model-prefilled histories are unsupported [S3]. Benchmark high is therefore not the default deployment profile.
- **Pricing (as of 2026-10-27):** Paid Standard **$0.75 input / $3.75 output including thinking / $0.075 cached input per million tokens through December 31, 2026**; **$1.50/$7.50/$0.15 from January 1, 2027** [S5]. Cache storage rises from $0.50 to $1 per million tokens/hour. Batch/Flex currently $0.375/$1.875; Contributor uses discounted pricing but permits product-improvement use of data. Standard paid data is not used to improve products; free-tier data is. Free-tier search grounding is unavailable. Paid grounding includes 5,000 shared monthly free search requests, then $14/1,000; individual queries can be billable. Cost score uses paid Standard, not the quota-limited free tier.
- **Architecture:** Proprietary; no verified total/active parameter counts or public weight license [S7].

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench **2.1: 90.8%**, Google Cloud's developer evaluation [S3]; the launch-table transcription gives **89.4%** [S9, S11]. Settings sufficient to reconcile the difference were not retrieved. BenchLM additionally lists AA 87.6% and Vals 81.3%, but those older rows were not directly verified at the original evaluators [S11].
- Terminal-Bench **4.0: 19.70%**, independently reported by Vals, high by default, with displayed ±2.31 interval [S8]. The vendor table's **19.1%** is secondary-transcribed [S9]. These are not declines from TB2.1 on an unchanged benchmark.
- Tau3-Banking: **45% high**, independent AA launch evaluation [S6], versus **38.1%** in Google's developer table [S3]. Effort/harness differences remain unresolved; neither replaces the other.
- GDPval-AA v2: **1,545 Elo**, launch-table transcription [S9]. AA's article verifies improvement but supplies no exact Elo [S6]; this remains secondary evidence. Current Briefcase 1,202 and AutomationBench 59.9% appear only in BenchLM's aggregation [S11], not independently retrieved primary rows.
- Vals **CUA-bench 4.17%**, **Code Migration v1.1 38.65%**, **SkillsBench 57.98%**, and **SRE Bench 11.07%** [S8]. These newer professional-agent outcomes constrain broad autonomy claims.
- Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found. Google reports **SWE-Atlas 51.9%**, without enough detail to equate it with a separately named Codebase QnA version [S3].

Reasoning / knowledge:

- GPQA Diamond: **94.44%**, MMLU Pro **90.22%**, independently reported by Vals [S8]. Default high reasoning is listed, with a warning that some benchmarks use different parameters.
- HLE: **45.4%** in Google's developer table, versus predecessor 45.7% [S3]. **HLE-Verified 54.9%** is explicitly stated in Google's announcement [S2]. Different versions must not be presented as contradictory estimates of one test or averaged.
- Artificial Analysis Intelligence Index: launch **59 high / 57 medium / 52 low** [S6]; current **41, rank 56/221, v4.3.2** [S7]. The current evaluation set differs from the launch set.
- ARC Prize Semi-Private, high: **ARC-AGI-1 98.5% / ARC-AGI-2 89.2% / ARC-AGI-3 Standard 10.4% / Provider Adapter 35.0%** [S10]. Medium scores 97.5/82.9/4.0/24.2. The adapter preserves reasoning state and uses compaction; its result is not a standard-harness score.
- AA-LCR **81.3%**, MLCR-AA **10.6%**, CritPt **18.3%**, AA-HLE **47.8%**, Omniscience **54.6% accuracy / 55.2% hallucination rate** are aggregator-only AA-attributed values [S11]. Exact primary rows/settings were not retrieved, so these are provisional supporting evidence, not independently reproduced measurements.

Coding:

- Vals **SWE-bench 80.00%**, **LiveCodeBench 89.48%**, **Vibe Code Bench v1.1 78.65%**, and **Vibe Code Bench 1-100 18.77%** [S8]. Vals labels the first simply SWE-bench, so it is not silently renamed Verified. The two Vibe benchmarks are distinct.
- SWE-Bench Pro **61.6%**, Google developer evaluation [S3]. DeepSWE v1.1 **73.7%**, secondary vendor-table transcription [S9]; BenchLM gives **73.8%** attributed to Datacurve [S11]. No controlled explanation for the difference was verified; it is not averaged.
- SciCode **56.6%**, AA-attributed aggregator result only [S11]. No directly inspected primary SciCode or independent secure-code correctness percentage was found for this exact base model.
- Cyber's CWE-Bench **47.2%** belongs to the restricted Cyber deployment in the announcement and is explicitly excluded from base-model scoring [S2].

Long context and multimodal:

- No verified exact-model MRCR/RULER/GraphWalks retrieval score found. A search returning MRCR 72.2% actually identified another model and is rejected, not transferred.
- Vals **MMMU Pro 89.08%** and **SWE-bench Multimodal 40.83%** provide independent multimodal evidence [S8]. Google reports **CharXiv 86.2% / GDP.pdf 35.0%** [S3]. These differ from BenchLM's AA-attributed MMMU 85.6% and GDP.pdf 21.0%; settings and benchmark revisions are not assumed identical [S11].
- LVBench **87.8%** in Emergent's transcription versus **87.1%** in BenchLM [S9, S11]. The full official chart was not readable, so neither exact value is a scoring anchor. Emergent also reports unequal video frame counts across vendors; the alleged comparison advantage remains qualified secondary methodology, not a controlled same-input result.

### Evidence reconciliation and limitations

1. **Cheap tokens are not necessarily cheap tasks.** AA's launch high cost was $0.58/task, 40% above the predecessor, with approximately 48K output tokens/task; medium/low cost $0.41/$0.24 [S6]. Today's v4.3.2 page shows $3.49/task and 170M total output tokens [S7]. Different evaluation mixes and snapshots prevent attributing that whole change to checkpoint deterioration or tariff changes.
2. **Sampling speed is not completion latency.** AA's launch approximately 300 tokens/s and 2.5-minute high task time coexist with today's approximately 133 tokens/s and Vals's different workload latency [S6–S8]. Provider/load/workload differences were not controlled in this research.
3. **Agent performance is uneven.** Strong old terminal and academic results coexist with Vals TB4.0 19.70%, CUA 4.17%, and ARC3 Standard 10.4% [S8, S10]. The model is not demonstrated to replace stronger agents on every difficult workflow.
4. **Benchmark versions and provenance are preserved.** HLE versus HLE-Verified, TB2.1 versus TB4.0, and two Vibe benchmarks remain separate. Google Cloud's HLE 45.4 versus predecessor 45.7 also limits a review's blanket claim of improvement on every benchmark [S3, S9]. Reviews copying AA or Google are not new independent experiments.
5. **Access and product identity are explicit.** Free API access has training-data and tool restrictions; paid introductory rates expire at year-end [S5]. Cyber, TTS, and Live results are not base Flash evidence. Official model-card HTML exposed no body, and Kingy's review returned 403; neither supplies unseen evidence.

### Normalized scores (1–100)

- **Tool use: 91/100.** Independent Tau3 45%, strong older terminal evidence, and broad tools support capable agents [S1, S3, S6]; Vals's newer terminal/computer-use limits and ARC3 Standard 10.4% cap the rating [S8, S10].
- **Reasoning: 91/100.** Independent GPQA 94.44% and ARC-AGI-2 89.2% support strong reasoning [S8, S10]; current AA index 41, uneven interactive reasoning, and provisional hallucination evidence prevent maximal credit.
- **Context window: 95/100.** Official 1,048,576-token input capacity reaches the top tier [S1], but no verified 98%+ retrieval at 512K+ supports a 100 score.
- **Multimodal: 95/100.** Verified audio/video/image/PDF inputs and independent MMMU Pro 89.08% support broad understanding [S1, S8]; text-only native output and unresolved LVBench evidence cap the score.
- **Coding: 91/100.** Independent LiveCodeBench 89.48%, SWE-bench 80%, and vendor SWE-Pro 61.6% support strong coding [S3, S8]; newer terminal and code-migration weaknesses, plus missing secure-code evidence, constrain it.
- **Cost efficiency: 86/100.** Today's paid $0.75/$3.75 rates are attractive [S5], but high-effort task cost, grounding/cache charges, and scheduled doubling reduce practical value [S6, S7]. Free-tier $0 pricing is not applied to this paid profile.
- **Overall Score: 93/100.** Half-up rounding of (91 + 91 + 95 + 95 + 91) / 5 = 92.6; cost excluded. Best for supervised multimodal coding and document workflows with effort limits and explicit task verification.

### Sources and search audit

All sources accessed 2026-10-27. Eight completed searches; six returned relevant exact-model evidence and two returned unrelated MRCR hits that were rejected. Relevant queries: `Gemini 3.8 Flash Google official model card API benchmarks pricing context`; `Gemini 3.8 Flash independent benchmark Artificial Analysis review tool coding`; `Gemini 3.8 Flash independent HLE GPQA SciCode benchmark results`; `site:ai.google.dev "What's new in Gemini 3.8 Flash"`; `"Gemini 3.8 Flash" "MRCR" "SciCode"`; `site:deepmind.google/models/model-cards/gemini-3-8-flash "cutoff"`.

- [S1 — Official stable model specifications](https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash)
- [S2 — Google launch; base versus Cyber](https://blog.google/innovation-and-ai/models-and-research/gemini-models/3-8-flash-and-3-8-flash-cyber/)
- [S3 — Google Cloud developer benchmarks and migration rules](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/guides/gemini-3-8-flash)
- [S4 — Current Gemini API developer guide](https://ai.google.dev/gemini-api/docs/whats-new-gemini-3.8)
- [S5 — Official prices, free tier, and data-use conditions](https://ai.google.dev/gemini-api/docs/pricing)
- [S6 — Artificial Analysis independent launch evaluation](https://artificialanalysis.ai/articles/gemini-3-8-flash)
- [S7 — Artificial Analysis current high-effort model page](https://artificialanalysis.ai/models/gemini-3-8-flash)
- [S8 — Vals AI independent model results and default parameters](https://www.vals.ai/models/google_gemini-3.8-flash)
- [S9 — Emergent secondary benchmark transcription](https://emergent.sh/learn/gemini-3-8-flash-benchmarks)
- [S10 — ARC Prize verified configurations](https://arcprize.org/results/google-gemini-3-8-flash)
- [S11 — BenchLM aggregation; secondary unless primary checked separately](https://benchlm.ai/models/gemini-3-8-flash)
- [S12 — Official model card; cutoff indexed, full body unavailable](https://deepmind.google/models/model-cards/gemini-3-8-flash/)
- [S13 — IntuitionLabs review, used to locate original evaluation sources](https://intuitionlabs.ai/articles/gemini-3-8-flash-research-tasks-review)

---

## Signature

- Provided by: **Qoder Sonus** — 2026-10-27
- Method: Sequential public-web research under the assigned reporter label; six relevant successful searches, official documentation, three independent evaluation organizations, and qualified secondary comparisons. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separately signed findings file alongside this one using the same headings.
