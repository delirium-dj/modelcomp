# Claude Opus 4.5 — findings by GPT 6.1 Sol

- Source: Anthropic / `claude-opus-4-5-20251101`; thinking and non-thinking results distinguished.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Claude Opus 4.5.
- **Short description:** Anthropic's November 2025 flagship for coding and agents, now an available legacy model. This report evaluates the original 4.5 checkpoint, not Opus 4.6–5.5 or a compounded multi-model agent.[1][2]
- **Provider / access:** Native Claude **Messages API** `claude-opus-4-5-20251101`, alias `claude-opus-4-5`; Bedrock `anthropic.claude-opus-4-5-20251101-v1:0`, Google `claude-opus-4-5@20251101`. Exact gateway `anthropic/claude-opus-4.5` uses backend label `anthropic/claude-4.5-opus-20251124`; gateway naming is not the native pin. No free Zen ID independently verified.[1][2][5]
- **Release / knowledge:** Released **2025-11-24**, despite November 1 in the pinned ID. Current official reference gives **May 2025 reliable cutoff / August 2025 training-data cutoff**. AA's August date and a launch review's March reliable date are different/stale references; current primary taxonomy takes precedence.[2][3][6]
- **Status:** Official **active legacy**, retirement **not sooner than November 24, 2026**. That is a minimum availability commitment, not a scheduled shutdown. AA's superseded/deprecated label does not establish API retirement.[2][3]
- **Context window:** **200,000 total / 64,000 synchronous output**, confirmed by current primary docs and all inspected gateway routes. This model is not in the current 300K batch-output beta support list. Compaction/memory can continue workflows but do not enlarge native context.[1][2][5]
- **Modalities:** Native text/image → text, with PDF/file handling through the platform. No native audio/video or non-text generation. Tools, computer use/zoom, streaming, structured output, preserved thinking and context/memory integrations are endpoint features, not additional native modalities.[1][2][5]
- **Reasoning:** Extended thinking with manual budget, plus **low/medium/high effort, default high**. Effort and enabling a thinking budget are distinct controls; do not inherit adaptive-thinking defaults or max/xhigh settings from later Claude generations.[1][2][6]
- **Pricing (2026-10-20):** **$5 input / $25 output / $0.50 cache-read / $6.25 five-minute cache-write / $10 one-hour cache-write per 1M**, native standard and exact gateway routes. Batch input/output 50% discount; regional routes can add 10%, e.g. $5.50/$27.50. Tools incur additional charges. The launch reduction from older Opus prices does not make it inexpensive against current models.[1][2][5]
- **Architecture:** Proprietary; no public verified parameter count, active count, dense/MoE specification or open weights.[2]

### Raw benchmarks found

**Critical evaluator identity:** AA bare slug **`claude-opus-4-5` is Non-reasoning**, UUID `4077490a-bbfb-404e-979a-a97a20e3b5de`. Thinking is **`claude-opus-4-5-thinking`**, UUID `2660d74f-ce79-48a8-8b53-6e668e2071a2`. Both were inspected; the normalized quality assessment emphasizes thinking, not a silent mixture. Vals exact dated Thinking profile uses high effort, 64,000 output and temperature 1 by default.[3][4][8]

**Vendor methodology:** Official launch says generally 64K thinking budget, interleaved scratchpads, 200K context, high effort/default sampling, averaged over five trials; SWE Verified and Terminal-Bench are explicit exceptions, the latter uses a 128K thinking budget. That evaluation allowance is not proof the ordinary API emits 128K. Vendor launch table was directly downloaded and visually inspected.[1][7]

Agent / tool use:

- **Terminal-Bench 2.0 59.3% vendor**, **53.93% ± 5.31 Vals Thinking**. Official notes say infrastructure fixes change comparator scores under Terminus-2. No exact TB2.1/TB4 result in inspected AA thinking record; nulls are not zeros.[1][4][7][8]
- **Tau2:** vendor **retail 88.9% / telecom 98.2%**, AA aggregate **89.47% Thinking / 86.26% Non-reasoning**. These are neither Tau3-Banking nor universal agent success rates. Official airline example shows benchmark policy/solution-path limitations; it does not justify manually changing scores.[1][3][7][8]
- **MCP Atlas 62.3% / OSWorld 66.3% vendor**. GUI task and scaled-tool suites are distinct; no unverified version upgrade to OSWorld 2.x.[7]
- **IFBench 57.96% AA Thinking**. No verified exact GDPval-AA, Claw-Eval, ClawProBench, Toolathlon or SWE Atlas QnA score found in inspected exact-model sources; AA selected GDPval is null.[8]
- **BrowseComp-Plus fetch-enabled 70.48% → 85.30% vendor** when combining context/memory/subagent techniques. This is a harness-stack comparison, not a raw model single-call or ordinary BrowseComp score.[1]

Reasoning / knowledge:

- **GPQA Diamond:** **87.0% vendor**, **86.57% AA Thinking**, **85.86% ± 2.48 Vals Thinking**.[4][7][8]
- **HLE 30.12% / AIME 2025 91.33% / CritPt 4.57% AA Thinking**. **ARC-AGI-2 Verified 37.6% vendor launch table**; no independent row was separately retrieved here, so provenance remains vendor-published.[7][8]
- **MMLU Pro 87.26% / LegalBench 84.60% / SAGE 52.09% Vals**, **MMMLU 90.8% vendor**. Suite-specific results do not establish frontier-wide generality.[4][7]
- **AA current Intelligence Index 29.096 Thinking**, explicitly **estimated**, not a complete current measured composite. Non-reasoning is **23.679 estimated**. Vals' displayed **69.57% aggregate** and historical then-first-place release note do not establish current leadership or comparable current-index membership.[3][4][8]
- **Omniscience Thinking:** **46.58% accuracy / 61.00% hallucination / reliability 14** on its reported scale. Non-reasoning: **40.92% / 76.25% / −4.1333**; effort improves calibration without eliminating errors.[3][8]

Coding:

- **SWE-bench Verified 80.9% vendor**, **76.40% ± 1.90 Vals Thinking**. Vendor candidate-exam claim used **parallel test-time compute**, not an ordinary single attempt; it is not scored as human-level engineering or a standardized pass@1.[1][4][7]
- **LiveCodeBench 87.09% AA Thinking / 83.67% ± 1.04 Vals**, versus **73.76% AA Non-reasoning**. Versions/settings and attempt budgets matter.[3][4][8]
- **Vibe Code Bench v1.1 20.63% ± 3.16 Vals Thinking** substantially limits conclusions from bounded repository-repair success. No exact independently verified SWE-Pro, SciCode or DeepSWE found; selected AA SciCode is null.[4][8]
- Simon Willison's disclosed weekend preview generated substantial sqlite-utils refactoring, **20 commits / 39 changed files**, with linked diffs/transcript. He reports continuing at the same pace after reverting to Sonnet 4.5 and explicitly cannot identify a controlled capability difference from that experience. Useful practical evidence, not a quantified benchmark superiority claim.[6]

Long context / visual / runtime:

- **LCR 77.33% AA Thinking / 70.67% Non-reasoning**. No verified exact MRCR/RULER or maximum-window retrieval result found. Unlimited-looking app conversations use summarization, not a native unlimited window.[1][3][8]
- **MMMU validation 80.7% vendor**, **MMMU-Pro 74.05% AA Thinking / 82.95% ± 0.90 Vals**. Different suites/variants/preprocessing; do not average into a fabricated common result.[4][7][8]
- AA Thinking median **57.41 output tokens/s / 17.36 s first chunk**, versus Non-reasoning **51.81 / 1.08 s**. Vals' **5 min 7 s** workload latency is a different aggregate, not first-token timing.[3][4][8]

### Normalized scores (1–100)

- **Tool use: 77/100.** Strong Tau2, MCP Atlas and measured TB2.0 support useful agents, capped by modest absolute terminal reliability and absent current banking/deliverable replication.[1][4][7][8]
- **Reasoning: 80/100.** Independently consistent GPQA around 86%, HLE 30.12% and AIME 91.33% support strong reasoning, capped by CritPt 4.57%, estimated current index and remaining factual miscalibration.[4][8]
- **Context window: 70/100.** Verified 200K native window matches the methodology's 200K anchor; memory/compaction do not earn a million-token tier.[1][2][5]
- **Multimodal: 80/100.** Real image/PDF understanding with substantial visual benchmarks, capped by no native audio/video or non-text generation.[2][4][7][8]
- **Coding: 82/100.** Independent SWE Verified 76.4% and strong exercise results plus practical refactoring support useful engineering, but Vibe 20.63% and harness dependence cap long-horizon confidence.[1][4][6][8]
- **Cost efficiency: 65/100.** Caching/batching and efficient bounded work improve paid value, but current $5/$25 rates, cache-write costs and limited context are expensive against newer alternatives.[1][2][5]
- **Overall Score: 78/100.** Half-up mean `(77 + 80 + 70 + 80 + 82) / 5 = 77.8`; cost excluded. Best fit: existing pinned Claude coding/document integrations, with thinking settings and legacy capacity explicit.

### Research trail and sources

Fresh Bing RSS `"Claude Opus 4.5" official benchmark` returned broad Claude links; Google `"Claude Opus 4.5" independent benchmark review` an interstitial; DuckDuckGo `"Claude Opus 4.5" 200000 pricing review` supplied official/spec/review leads, including speculative pre-release pricing that was not adopted. Current primary reference, launch methodology and visually inspected benchmark image, both exact AA profiles, Vals dated Thinking profile, live gateway and independent practical review were compared. No peer findings consulted.

[1]: https://www.anthropic.com/news/claude-opus-4-5 "Official launch, evaluation methodology, parallel-compute and context-stack caveats"
[2]: https://platform.claude.com/docs/en/models/opus-4-5/overview "Current official lifecycle, IDs, reliable/training cutoffs, limits and pricing"
[3]: https://artificialanalysis.ai/models/claude-opus-4-5 "Exact Non-reasoning selected record; not the Thinking benchmark profile"
[4]: https://www.vals.ai/models/anthropic_claude-opus-4-5-20251101-thinking "Independent exact Thinking results, settings and historical release note"
[5]: https://openrouter.ai/api/v1/models/anthropic/claude-opus-4.5/endpoints "Exact provider backend labels, prices, native modalities and 200K/64K caps"
[6]: https://simonwillison.net/2025/Nov/24/claude-opus/ "Disclosed hands-on coding, linked work and limits of uncontrolled comparisons"
[7]: https://www-cdn.anthropic.com/images/4zrzovbb/website/52303b11db76017fd0c2f73c7fafa5c752515979-2600x2236.png "Official launch table, directly downloaded and visually read"
[8]: https://artificialanalysis.ai/models/claude-opus-4-5-thinking "Exact Reasoning selected record and current effort-specific metrics/runtime"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches and direct primary/spec/image inspection, exact evaluator-profile separation, provider checks and disclosed practical evidence. Scores are normalized editorial 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
