# Union Alpha / Pareto 26.9 — findings by GPT 6.1 Sol

- Source: Unbiased AI / Circuit & Chisel, Pareto 26.9 composite; historical Union Alpha stealth alias.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Union Alpha, revealed as Pareto 26.9. This project's canonical 26.9 folder is `union-alpha`; Pareto 26.10 is a separate release.
- **Short description:** Proprietary multi-model answer-synthesis service for research, coding and agents, not a downloadable checkpoint. Multiple underlying models run in parallel; composition can change. Constituent-model scores, the successor and OpenRouter's unrelated Pareto Code Router are not exact 26.9 measurements.[1][2][3]
- **Provider / access:** Historical `stealth/union-alpha` now returns an empty endpoint list. Exact **`unbiased/pareto-26.9`** currently lists Unbiased backend **`unbiased/pareto-26.9-20260917`** at OpenRouter Chat Completions, with tools/auto tool choice, response format and implicit caching. Forced/required named tool choice is not advertised. No authenticated generation performed.[3][4]
- **IDs / versioning:** Direct `https://api.unbiased.ai/v1/chat/completions`, model **`pareto-26.9`**; Messages format also documented. October 15 changelog explicitly retains this version, but **`pareto` now selects 26.10**. Old `unbiased/pareto` resolves to moving `~unbiased/pareto-latest`, not a pin to 26.9. Current docs say unknown direct IDs can still be served/billed as Pareto, so an arbitrary accepted string would not prove checkpoint identity. No current Union Alpha free Zen ID found in Console's catalog.[2][3][5][9]
- **Release / knowledge:** September 2026 stealth/public rollout; gateway backend dated **2026-09-17**. Publisher's October 1 post confirms the preceding 26.9 stealth launch on OpenRouter/OpenCode/Cloudflare. No verified training cutoff for the composite.[1][3]
- **Context window:** Exact current 26.9 gateway **262,144 total / 131,072 maximum completion**. These are service caps, not additive full input/output budgets or verified full-window retrieval. Do not import 26.10's 1M window.[1][3]
- **Modalities:** Gateway verifies **text/image → text**. Tool calling and structured-response parameter advertised; no verified native audio/video or media generation. Server-side image generation/search are platform tools, not native model output. Reasoning-effort controls/precise blend settings are not publicly pinned for these runs.[2][3][4]
- **Pricing (2026-10-20):** Exact live 26.9 route **$2.50 input / $7.50 output / $0.25 cache read per 1M**, matching publisher's explicit historical 26.9 tariff. The stealth free period is over; do not score current paid access as free. Personal $10/month and Max $100/month are capped subscriptions, not unlimited inference or assurance that default traffic remains 26.9.[1][2][3][6]
- **Architecture / data:** Closed service, no own parameter count or downloadable weights established. Open-source evaluation harness is not open model weights. Current terms distinguish designated ZDR API traffic from subscriptions/Chat; do not infer that every historical free stealth request carried today's ZDR terms.[7][8]

### Raw benchmarks found

**Evidence grade: provisional, vendor-only.** Extracted the exact **Pareto 26.9** column from the publisher's live chart data, not 26.10, constituent or competitor columns. Source explicitly calls these **September 20 runs**, transcribed from a **September 21 comparison screenshot**, **not independently validated**, with denominators/cost methodology requiring confirmation. Current release pages retaining the figures are not fresh replications.[1][10]

Agent / tool use:

- **Terminal-Bench 4.0: 50.8%, $1.69 mean/task**, publisher 26.9 column. No verified exact TB2.1, Tau3/Tau2, GDPval-AA, Claw-Eval/ClawProBench, Toolathlon, MCP-Atlas or SWE Atlas QnA result found. Unknown values are not zeros.[10]
- Platform documents tool integration and September tool-loop fixes, but integration support is not another benchmark and no current independently measured success/latency distribution was found.[2][5]

Reasoning / knowledge:

- **GPQA-Diamond: 91.6%, $0.016/task**, publisher-only.[10]
- **Humanity's Last Exam: 49.0%, $0.048/task**, publisher-only. Shared chart row says “text-only,” but model-card footnote explicitly says the **26.9 historical result had no text-only qualifier**. Preserve that ambiguity; do not claim proven text-only/no-tools parity with modern HLE evaluations.[1][10]
- No verified exact AA Intelligence Index, independent BenchLM composite, CritPt, Omniscience accuracy/hallucination, LCR or MLCR found. Individual underlying-model results do not fill these gaps.

Coding / long context / multimodal:

- **DeepSWE v1.1: 70.0%, $0.29/task**, **30-task slice**, not the full dataset. It is neither **74%** nor the successor's 69.9%; 74.0 appears for **GPT-6 Astra** in the publisher's comparison. No verified exact SWE-bench Verified/Pro, LiveCodeBench, SciCode or Vibe Code Bench result found.[1][10]
- No verified exact MMMU-Pro or other quantitative image benchmark found. The gateway establishes image-input support, not image reasoning accuracy.[3]
- No verified MRCR/RULER/GraphWalks or near-perfect retrieval at 262K found. Claimed capacity and evaluation quality remain separate.
- Public `pareto-evals` supports reproducible harnesses, but its README's illustrative output is not a dated 26.9 run and its availability is not independent validation. Publisher's current mechanism page says no current-release latency comparison is published.[7][8]

### Normalized scores (1–100)

- **Tool use: 78/100.** Promising vendor TB4 plus actual tool-enabled service, capped by single-source historical evaluation, unspecified harness budget and absent broad independent agent coverage.[3][10]
- **Reasoning: 84/100.** Strong vendor GPQA/HLE, capped by unresolved historical HLE modality/tools, sample uncertainty and missing independent calibration/advanced reasoning suite.[1][10]
- **Context window: 76/100.** Actual version-specific 262,144 cap, without measured near-perfect retention or successor-window inheritance.[3]
- **Multimodal: 65/100.** Confirmed image/text input and text output, capped by missing exact image accuracy and no established native audio/video/output generation.[3][4]
- **Coding: 82/100.** Strong reported DeepSWE slice and coding integration, capped by only 30 tasks, no independent replication/full-set result or persistent-development suite.[1][7][10]
- **Cost efficiency: 79/100.** Useful reported task costs and cached-input savings at a moderate paid tariff, capped by preliminary billing methodology, composite latency and the retired free alias.[1][3][8][10]
- **Overall Score: 77/100.** Half-up mean `(78 + 84 + 76 + 65 + 82) / 5 = 77.0`; cost excluded. Provisional historical composite assessment, best suited to testing on representative tool/coding work rather than assuming constituent frontier scores.

### Research trail and sources

Three fresh searches: Bing RSS `"Union Alpha" "Pareto" benchmark` returned unrelated union pages; Google `"Pareto 26.9" model benchmarks` an interstitial; DuckDuckGo `"Union Alpha" model context pricing` a bot challenge. Direct publisher model card, release notes, machine-readable chart, native API docs and live exact route established the evidence above. Guessed AA `/models/pareto` and `/models/union-alpha`, Vals `/models/unbiased_pareto`, BenchLM `/models/union-alpha` returned 404; failures do not establish global absence. No independent broad exact-model replication located.

[1]: https://unbiased.ai/blog/pareto-26-10-preview/ "Primary historical 26.9 rollout/pricing and 30-task/HLE caveats; successor kept separate"
[2]: https://unbiased.ai/developers/ "Native formats, current default, unknown-ID behavior and quota constraints"
[3]: https://openrouter.ai/api/v1/models/unbiased/pareto-26.9/endpoints "Actual 26.9 provider/snapshot, 262K/128K, text-image, price and tool-choice metadata"
[4]: https://openrouter.ai/api/v1/models/stealth/union-alpha/endpoints "Retired stealth record retains image/text identity but no serving endpoints"
[5]: https://unbiased.ai/changelog/ "October 15 default changed to 26.10; explicitly retains pinned 26.9; platform tool history"
[6]: https://unbiased.ai/subscription-launch/ "September 20 subscription launch, $10/$100 plans explicitly not unlimited"
[7]: https://raw.githubusercontent.com/circuitandchisel/pareto-evals/main/README.md "Open harness description and illustrative output, not a verified dated 26.9 measurement"
[8]: https://unbiased.ai/how/ "Parallel-model synthesis, mutable composition and missing current latency measurements"
[9]: https://opencode.ai/docs/zen/ "Current Console models and prices omit historical Union Alpha free ID"
[10]: https://unbiased.ai/assets/interactive-data.js?v=20261015-ga "Exact 26.9 column: GPQA91.6/HLE49/DeepSWE70/TB4 50.8 and task costs; explicit non-independent provenance"
[11]: https://unbiased.ai/terms/ "Current designated-ZDR versus subscription/Chat treatment; not proof of historical free-tier terms"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches and exact-version primary chart/API/release inspection; vendor-only historical numbers and sample/metric limitations retained. Scores are provisional normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
