# Pareto 26.10 Preview — findings by GPT 6.1 Sol

- Source: Unbiased / Circuit & Chisel / October1,2026 Pareto26.10 preview
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** A hosted composite system that engages several frontier/open models in parallel and synthesizes/selects an answer. It is not one disclosed checkpoint or OpenRouter's unrelated Pareto Code Router. Scores here assess the **October1 preview evidence**, not an independently measured GA successor [S1–S4,S8].
- **Provider / access:** Original official post explicitly names native **`pareto-26.10-preview`** and OpenRouter **`unbiased/pareto-26.10-preview`** [S1]. Native base `https://api.unbiased.ai/v1`, Chat Completions and Anthropic Messages documented, streaming supported [S4]. AI/ML API separately advertises the exact preview ID on Chat Completions [S6]. No live `opencode/` preview route verified.
- **Release / status:** Preview **2026-10-01**, GA post dated **October15**; preview post's GA update says **October16** [S1,S2]. GA documentation says `pareto` now points at26.10 and recommends `pareto`/`pareto-26.10` for stable access. Preview gateway metadata still exists but **`endpoints:[]`**, and its public model page returned404 [S5]. Provider advertisements do not prove a currently invokable original preview snapshot.
- **IDs:** Historical native/gateway preview IDs above; current `pareto`, `pareto-26.10`, `unbiased/pareto-26.10` and moving `~unbiased/pareto-latest` are distribution/versioning context, not separately scored preview results [S2,S8]. No free Zen ID verified. No duplicate stable folder created: the preview-to-GA identity/naming transition needs orchestration outside this report.
- **Context window:** Exact-preview AI/ML API technical reference advertises **1,048,576 context /131,072 output** [S6], matching the stable route specs independently quoted by vendor [S8]. This is configuration evidence, not measured full-window retention. “1M in plus131K out” is not established; use a shared-context interpretation unless a provider specifies otherwise.
- **Modalities / tools:** Text/image input → text output, vision, streaming and function calls advertised for the exact preview [S5,S6]. No numeric visual benchmark verified. Current stable gateway documentation lists tools/tool_choice but does not guarantee forced choices or strict JSON; no current stable feature is silently imported into the preview. No native audio/video/PDF modality or non-text output established.
- **Pricing (as of 2026-10-20):** Original preview official **$0.80 input /$3.20 output /$0.03 cached per1M**; GA says these rates persist [S1–S3]. AI/ML API exact-preview advertised **$1.10032/$4.40128/$0.041262 cached** is a different gateway tariff [S6]. Preliminary **$0.24 DeepSWE/task** is not per-million-token pricing. Current Personal$10/month and Max$100/month have finite weekly allowances, not free/unlimited API [S2].
- **Architecture / knowledge:** Proprietary composite orchestration; constituent model list, sizes, active parameters, exact mixture and pretraining cutoff not disclosed [S3]. Vendor says composition can change. The public evaluation harness's MIT licence is not a licence to Pareto model weights [S7].
- **Data handling:** Original preview post says designated API ZDR traffic only; **Chat/Personal/Personal Max are not ZDR** [S1]. General homepage slogans do not override those product-specific statements.

### Raw benchmarks found

All four quality figures are **preliminary vendor reports**, explicitly labelled October1 preview in the primary launch [S1]. No directly inspected independent reproduction was found.

Agent / tool use:

- **Terminal-Bench4.0 50.8%**, **$0.48 mean/task**, October1 preview [S1]. No published exact task denominator, run budget or per-instance trace set verified for this claimed score. Not TB2.1 and not directly comparable with every competitor's highest-budget run.
- Native function calling and an open harness establish intended agent integration, not Tau3/GDPval accuracy [S4,S7].
- **TB2.1 /Tau3-Banking /Tau2 /GDPval-AA /Claw-Eval /ClawProBench /MCP-Atlas /Toolathlon:** no verified exact-preview public score found. The harness supports running some of these evaluations, but support is not a measured Pareto result.

Reasoning / knowledge:

- **GPQA-Diamond92.4%**, **$0.004 mean/task**, vendor October1 preview [S1].
- **Humanity's Last Exam49.9%, text-only**, **$0.008 mean/task**, same preview [S1]. This is directly visible in the original post even though BenchLM's current preview entry displays only three benchmark rows [S9]. No inference about why it omits HLE.
- **AA Intelligence Index /LCR /CritPt /Omniscience /ARC:** no verified exact-preview score found. AA exact-model URL returned404 and Vals exact-preview profile returned404. No estimated composite index fabricated from four vendor points.
- The developer's public harness documents independent LLM judging for HLE, with a non-publication-grade containment fallback if no judge is configured; the actual claimed October1 run's judge/settings were not verified [S7]. This is a provenance gap, not evidence that the fallback was used.

Coding:

- **DeepSWEv1.1 69.9%**, **$0.24 mean/task**, vendor October1 preview [S1].
- Original post/card disclose that **earlier Pareto26.9 and Fable5 comparison results use a30-task slice**. They say denominators/cost methodology still require confirmation for the preliminary comparison [S1,S3]. Do not assert that Pareto26.10's69.9 uses the full set or automatically assign it the older comparator's30-task denominator.
- Public README describes a runnable **113-task DeepSWEv1.1** harness and **66-task TB4.0** harness [S7]. Their nominal capacities do not establish the actual published run's coverage. The README's example result tables are examples, not additional model measurements.
- **SWE Verified /SWE-Pro /LiveCodeBench /SciCode /Vibe Code /SWE-Atlas:** no verified exact-preview score found; no constituent model's scores substituted.

Long context:

- Advertised exact-preview1,048,576 context/131,072 output [S6].
- **No verified long-context retrieval score found:** no MRCR/RULER/full-window LCR accuracy or98%+ retrieval at512K+. Current stable1M configuration corroborates the product lineage but does not verify historical recall quality [S2,S8].

Multimodal:

- Primary current model card and exact historical gateway record agree on **image/text input → text** [S3,S5,S6].
- **No verified exact-preview numeric MMMU/vision/audio/video/PDF benchmark found.** General website mentions competing-model MMMU comparisons but supplies no sourced exact-preview numeric result in inspected material [S3]. Modality coverage is scored conservatively from documented inputs, not constituent-model capabilities.

### Research trail and evidence comparison

Fresh [Bing official-model query](https://www.bing.com/search?q=%22Pareto+26.10%22+model+official&setlang=en&cc=us) returned no exact results; [Google exact-ID benchmark/review](https://www.google.com/search?q=%22pareto-26.10-preview%22+benchmark+review&hl=en) an interstitial; [DuckDuckGo exact-preview pricing/context](https://html.duckduckgo.com/html/?q=%22Pareto+26.10+Preview%22+pricing+context) a bot challenge. A fourth [Unbiased/Pareto/context/API query](https://html.duckduckgo.com/html/?q=Unbiased+Pareto+26.10+Preview+model+context+API) returned useful official preview/GA and gateway results. Direct publisher card, original preview launch, GA notice, developer/transport docs, public harness README, exact gateway metadata and secondary listings were compared.

The **GA notice explicitly says the scoreboard contains preview measurements, not a new stable evaluation** [S2]. That resolves the critical identity issue: the now-GA model card's same numbers can support historical preview provenance, but not a claim of stable-release replication. Likewise a current `pareto` response cannot prove an original preview evaluation: developer docs disclose unknown model IDs are not yet rejected and are still served/billed as Pareto [S4]. No authenticated inference performed.

Provider descriptions replicate vendor69.9/50.8/49.9/92.4; they are not independent benchmark replications. Models.dev now lists stable26.10 and26.9, not the exact preview; broad HF search returned no weights. Exact OpenRouter preview metadata's empty endpoint list overrides an assumption that its archived listing means current availability. The stable pricing/limits are separately labelled; predecessor26.9 and unrelated `openrouter/pareto-code` are not proxies.

The primary mechanism page says latency comparisons have not been published, whereas launch prose claims lower latency; no measured speed advantage assigned [S1,S3]. The vendor exposes honest caveats about mixed evaluators and uncertainty, but full reproducibility/independent exact-preview verification remains limited. Therefore scores below are provisional editorial interpretations of an identified historical service.

### Normalized scores (1–100)

- **Tool use: 79/100.** Preliminary exact-preview TB4.0 50.8% supports substantial terminal execution; missing denominator/budget, no banking/GDPval and no independent replication cap generalized agency [S1,S3,S7].
- **Reasoning: 85/100.** Preliminary GPQA92.4/HLE-text49.9 support strong reasoning; unverified run-level settings, no independent index and changing composite composition constrain confidence [S1,S3,S7].
- **Context window: 95/100.** Exact-preview advertised1,048,576 context fits the capacity tier, with131,072 output; no measured full-window recall justifies100 [S6].
- **Multimodal: 65/100.** Verified advertised image input supports the image band, but no exact-preview visual quality result, native audio/video/PDF or non-text output supports broader credit [S3,S5,S6].
- **Coding: 85/100.** Preliminary DeepSWEv1.1 69.9% and terminal50.8% support useful engineering; uncertain task coverage, absent SWE/LCB/SciCode and no independent reproduction cap frontier claims [S1,S3,S7].
- **Cost efficiency: 89/100.** Official$0.80/$3.20/$0.03 and reported low task costs suggest attractive paid value; preliminary accounting, gateway premiums, unmeasured latency and current preview-route uncertainty prevent a maximum [S1,S5,S6].
- **Overall Score: 82/100.** Half-up mean `(79 + 85 + 95 + 65 + 85) / 5 = 81.8 → 82`; cost excluded. Historical-preview best fit: trial evaluation of text/image engineering agents, with all four headline results kept vendor-preliminary and distinct from current GA serving.

### Sources

- [S1] https://unbiased.ai/blog/pareto-26-10-preview/ — original October1 preview, all four exact results/costs, historical native/gateway IDs and laterGA update.
- [S2] https://unbiased.ai/blog/pareto-26-10/ — October15 GA announcement, explicit preview-not-stable measurement statement and versioned service transition.
- [S3] https://unbiased.ai/model-card/ and https://unbiased.ai/how/ — primary composite mechanism, modality/pricing, denominator/task-slice caveats and absent measured latency comparisons.
- [S4] https://unbiased.ai/developers/ — primary Chat Completions/Messages transport, model-listing gap and unknown-ID acceptance disclosure.
- [S5] https://openrouter.ai/api/v1/models/unbiased/pareto-26.10-preview/endpoints — exact historical record and image/text modalities, but no current providers.
- [S6] https://aimlapi.com/models/unbiased-pareto-26-10-preview — exact-preview provider technical reference1,048,576/131,072 and distinct tariff; repeated benchmark claims clearly vendor-attributed, not independently reproduced.
- [S7] https://raw.githubusercontent.com/circuitandchisel/pareto-evals/main/README.md — original public harness methods, optional slicing, judge/cost handling and example-vs-measurement distinction; harness not executed here.
- [S8] https://unbiased.ai/developers/openrouter/ — primary October18 current stable-route/limit/pricing documentation and unrelated Pareto Code Router identity.
- [S9] https://benchlm.ai/models/pareto-26-10-preview — secondary three-row/unranked listing; no external overall adopted.

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20
- Method: Sequential independent historical-preview research with at least three fresh search attempts plus successful follow-up search, original publisher preview/GA/card/API/harness checks and exact-provider comparisons. No peer findings read. Scores are provisional normalized editorial assessments; all measured quality numbers remain preliminary vendor reports.
