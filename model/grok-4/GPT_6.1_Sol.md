# Grok 4 — findings by GPT 6.1 Sol

- Source: xAI / original flagship Grok 4 (`grok-4-0709`), excluding Heavy and Fast.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4.
- **Short description:** xAI's July 2025 flagship reasoning model with image input and tool integration. Grok 4 **Heavy** adds parallel test-time compute and Grok 4 **Fast** is a distinct larger-context/cheaper model; neither's results are assigned to ordinary Grok 4.[1]
- **Provider / access:** Original native `grok-4-0709` / `grok-4`, xAI Chat Completions; exact gateway `x-ai/grok-4`. Metadata supports tools/structured outputs and text/image/file input. Current exact gateway has **no endpoints**, native detail URL returns 404 and current xAI index omits it. No authenticated inference/current purchasable provider or exact retirement date verified.[3][4][5]
- **Release / knowledge:** Publisher/Vals **2025-07-09**, AA **July 10**, consistent with overnight launch/listing timing. No verified exact official knowledge cutoff in inspected sources; live search is a tool, not always-current weights.[1][2][3]
- **Context window:** Publisher **256,000 shared total**, AA/Vals 256K. Vals evaluation max output **128,000**; this is a configured allowance, not verified current serving or additive full input/output. No 2M credit from Fast.[1][2][3]
- **Modalities / reasoning:** Native text/image → text, file/PDF handling depending on service. Ordinary model always reasons; launch-time independent review documents no reasoning-off switch or exposed raw reasoning trace. Consumer Voice Mode uses a separately described voice system and does not establish native speech/video output on `grok-4-0709`.[1][4][6]
- **Pricing:** Historical original and independent evaluator base **$3 input/$15 output per 1M**; contemporary review records **$6/$30 above 128K input**. Current primary detail page/provider tariffs are unavailable, so the long-prompt schedule remains **historical secondary evidence**, not a currently verified invoice quote. Consumer subscriptions/Heavy plans are separate from API charges; no free Zen route verified.[2][3][6]
- **Architecture:** Proprietary, no exact public verified parameter count, active count, dense/MoE specification or open weights. Publisher's 200,000-GPU training cluster is not a model parameter count.[1][2]

### Raw benchmarks found

**Identity:** AA selected Grok 4 UUID `5ea94a4a-55ac-4ea1-8898-2b3971e94af6`, exact slug `grok-4`, original reasoning release, estimated current composite. Vals `grok/grok-4-0709` uses temperature .7/top-p .95 and 128,000 max output by default. All Heavy evidence remains labelled and excluded from ordinary-model normalization.[1][2][3]

Agent / tool use:

- **Tau2 74.85% / IFBench 53.67% AA**; **Terminal-Bench 2.0 28.09% ± 4.79 Vals**. No verified exact TB2.1/TB4/Tau3-Banking/GDPval/Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found; selected AA fields null, not zeros.[2][3]
- Vendor **Vending-Bench $4694.15 net worth / 4569 units sold**, averages over five runs. These are simulated-business benchmark outputs, not model price, real earnings or a percentage agent success rate.[1]
- Original search/X demos demonstrate tool use but not quantified general reliability. No native realtime knowledge credit is given without search enabled.[1]

Reasoning / knowledge:

- **GPQA Diamond 87.68% AA / 88.13% ± 1.63 Vals**, **HLE 26.69% / AIME 2025 92.67% / CritPt 2.0% AA**.[2][3]
- **MMLU-Pro 85.30% / LegalBench 83.19% / SAGE 25.10% Vals**. Strong academic science/math does not establish equally strong private professional tasks.[3]
- **ARC-AGI-2 15.9% vendor**. Exact guessed ARC result URL returned 404, so the figure remains a vendor-published result rather than an independently retrieved primary benchmark row.[1]
- **Heavy's 50.7% HLE text-only / 61.9% USAMO** belong to a parallel-compute variant, not standard Grok 4. Publisher's own discussion distinguishes Heavy; charts/secondary reports that blur the names are not used.[1]
- **AA Intelligence Index 22.487 explicitly estimated current**, not the launch-era **73** quoted in an independent review or this repository's Overall. Suite-version change is not evidence of a 50-point capability regression.[2][6]
- **Omniscience accuracy 40.48% / hallucination 64.49% / reliability index 2.1 AA** show remaining calibration limitations.[2]

Coding / context / visual:

- **SWE-bench Verified 57.80% ± 2.21 / LiveCodeBench 83.25% ± 1.03 Vals**, **LiveCodeBench 81.90% AA**. Strong contests coexist with weak autonomous repository and terminal work. No verified exact SWE-Pro/DeepSWE/SciCode/Vibe value found; selected AA SciCode is null.[2][3]
- **LCR 68.0% AA**. No independently verified near-perfect full-256K MRCR/RULER found; larger Fast-family context is not inherited.[2]
- **MMMU-Pro 68.84% AA / 76.27% ± 1.02 Vals**, but **MortgageTax 44.48% Vals**. Its dated private-image findings identify weaknesses on unseen images; current and launch values are separately dated, not treated as controlled identical runs.[2][3]
- Contemporary Simon Willison review supplies actual SVG generation and image-description outputs, supporting native image input, with visible artistic/recognition limitations. This is a qualitative single-task example, not an independent benchmark score.[6]
- AA median **82.62 output tokens/s / 9.15 s first chunk**; Vals workload latency **3 min 40 s**, different measurement scope. Neither guarantees current availability or time to complete a long reasoning answer.[2][3]

### Normalized scores (1–100)

- **Tool use: 63/100.** Tau2 and native tools establish useful bounded orchestration, capped by terminal 28.09%, weak specialist tasks and absent harder-workflow replication.[1][2][3]
- **Reasoning: 79/100.** Independent GPQA around 88%, HLE 26.69% and AIME 92.67% support substantial reasoning, capped by CritPt 2%, estimated current composite and uneven calibrated knowledge.[2][3]
- **Context window: 76/100.** Verified original 256K belongs in the 200K–500K band, without near-perfect maximum-window retrieval.[1][2][3]
- **Multimodal: 76/100.** Genuine image/file coverage and visual benchmarks, capped by private-image/document weaknesses and no native audio/video/non-text output.[1][2][3][4]
- **Coding: 69/100.** Strong exercise results but repair 57.8% and terminal 28.09% limit end-to-end engineering confidence.[2][3]
- **Cost efficiency: 60/100.** Original $3/$15 and historically higher long-prompt prices offer limited current-relative value, with reasoning/tool overhead and no verified currently purchasable endpoint.[2][3][4][6]
- **Overall Score: 73/100.** Half-up mean `(63 + 79 + 76 + 76 + 69) / 5 = 72.6`; cost excluded. Best interpreted as the identified legacy flagship's bounded reasoning/vision capability, distinct from Heavy and cheaper/larger-context Fast variants.

### Research trail and sources

Fresh Bing RSS `"Grok 4" official model benchmark` returned generic Grok links; Google `"Grok 4" independent benchmark review 256k` an interstitial; DuckDuckGo `"Grok 4" 0709 context pricing benchmark` provided exact-generation leads. Original publisher launch, exact AA/Vals, current gateway/current native index and a contemporary hands-on review were compared. Native detail and guessed ARC row returned 404; no lifecycle date or independent ARC verification was fabricated. No peer findings consulted.

[1]: https://x.ai/news/grok-4 "Original July 9 launch, standard versus Heavy, native modalities, 256K and exact vendor ARC/Vending results"
[2]: https://artificialanalysis.ai/models/grok-4 "Exact selected original model, estimated-index flag and independent quality/runtime"
[3]: https://www.vals.ai/models/grok_grok-4-0709 "Independent exact 0709 profile, academic/private/repair/terminal results and settings"
[4]: https://openrouter.ai/api/v1/models/x-ai/grok-4/endpoints "Exact identified original model, native modalities but empty current endpoint list"
[5]: https://docs.x.ai/developers/models "Current native index omits original Grok 4; no exact retirement date inferred"
[6]: https://simonwillison.net/2025/Jul/10/grok-4/ "Contemporary actual image/SVG experiment, historical long-prompt price and Heavy attribution caveat"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, original publisher and exact independent evaluator comparison, current availability check and practical third-party evidence. Scores are editorial normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
