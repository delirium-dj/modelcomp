# Grok 4 — findings by GPT 6 Sol

- Source: SpaceXSI / xAI (`grok-4-0709`, historical checkpoint)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** July 2025 reasoning and tool-using xAI model, assessed as the **original 0709 checkpoint**. Its historical benchmarks are not the results of Grok 4 Heavy's parallel test-time system or the current redirect target ([xAI launch](https://x.ai/news/grok-4)).
- **Provider / access:** Original xAI API model ID `grok-4-0709`. [Vendor's May 15, 2026 retirement notice](https://docs.x.ai/developers/migration/may-15-retirement) says requests to that ID **now redirect to `grok-4.3` with `low` reasoning effort**. A present-day request under the old string does not reproduce Grok 4. Third-party archival evaluations of the original model remain valid historical evidence; no verified Zen Free route.
- **Release / knowledge:** July 9, 2025 ([launch](https://x.ai/news/grok-4)); no first-party exact training-data cutoff established in reviewed sources.
- **Context window:** Historical first-party API **256K** ([launch](https://x.ai/news/grok-4)); [Vals](https://www.vals.ai/models/grok_grok-4-0709) lists 128K maximum output for its route. These limits are not the limits of the new `grok-4.3`-served redirect.
- **Modalities:** Historical model text/image input, text output, reasoning and external web/X search or code execution ([xAI launch](https://x.ai/news/grok-4), [Artificial Analysis](https://artificialanalysis.ai/models/grok-4)). The consumer app's voice mode does not prove **native audio I/O on `grok-4-0709`**.
- **Pricing:** Historical API **$3 input / $0.75 cached input / $15 output per million tokens**, independently recorded in [Artificial Analysis's original API-access report](https://threadreaderapp.com/thread/1943166841150644622.html). [Vendor migration guide](https://docs.x.ai/developers/migration/may-15-retirement) states the retired ID is *now billed as Grok 4.3*, **$1.25 input / $2.50 output per million tokens**, because it executes the replacement model. Do not use historical pricing to forecast calls to the redirect.
- **Architecture:** Proprietary; precise parameter count not publicly disclosed in the [current AA profile](https://artificialanalysis.ai/models/grok-4). Heavy's multi-agent test-time arrangement is not a separate measured API checkpoint in this report.

### Raw benchmarks found

- **Agent/tool use:** [xAI launch](https://x.ai/news/grok-4) reports Vending-Bench **$4,694.15 net worth and 4,569 units sold**, averages over five simulated runs; this is simulated business performance, not a percent success rate. [Vals' independent 0709 evaluation](https://www.vals.ai/models/grok_grok-4-0709) gives **Terminal-Bench 2.0 28.09% ±4.79**, plus MortgageTax **44.48% ±0.96** and TaxEval v2 **65.09% ±0.96**. Strong vendor business-simulation claims are not a substitute for general terminal reliability.
- **Reasoning:** [xAI](https://x.ai/news/grok-4) reports **ARC-AGI-2 15.9%** for *Grok 4*, not Heavy. Contemporary [Artificial Analysis independent xAI-API testing](https://threadreaderapp.com/thread/1943166841150644622.html) found then-current Intelligence Index **73** and **GPQA Diamond ~88%, text-only HLE ~24% without tools**, but its [current profile](https://artificialanalysis.ai/models/grok-4) shows **N/A v5 Index** because the model is deprecated; 73 is an older-version index, not a current v5 result. [Vals](https://www.vals.ai/models/grok_grok-4-0709) separately measured **GPQA Diamond 88.13% ±1.63** and MMLU Pro **85.30% ±0.35**, corroborating science-question strength.
- **Coding:** [Vals](https://www.vals.ai/models/grok_grok-4-0709) measured **LiveCodeBench 83.25% ±1.03** versus **SWE-bench 57.80% ±2.21** and Terminal-Bench 2.0 **28.09%**. Code-puzzle ability exceeds reliable end-to-end patch/terminal completion. No current rerun of the retired weights is possible through the redirect.
- **Long context/vision:** [Vals](https://www.vals.ai/models/grok_grok-4-0709) independently records **MMMU Pro 76.27% ±1.02**, but its July 13 commentary says the model struggles to recognize unseen images in private multimodal tasks, consistent with MortgageTax **44.48%**. The 256K API claim is capacity, not verified near-limit retrieval. Heavy's video/voice demo and results are not transferred to the API checkpoint.

### Normalized scores (1–100)

- **Tool use: 68/100.** Good historical tool support and business simulation, discounted by independent TB2.0 28.09 and changed live route.
- **Reasoning: 82/100.** Independently repeated GPQA ~88 and historical ARC-AGI-2 15.9, but old index and benchmark vintage limit present-day comparison.
- **Context window: 76/100.** Historical 256K with no near-cap retrieval evidence; old ID now serves a different model.
- **Multimodal: 70/100.** Text/image and Vals MMMU 76.27, but private image recognition weakness and no verified API audio.
- **Coding: 68/100.** Vals LiveCodeBench 83.25 versus SWE-bench 57.8 and TB2.0 28.09.
- **Cost efficiency: 54/100.** Historical $3/$15 plus tool costs; redirect pricing buys Grok 4.3, not the evaluated checkpoint.
- **Overall Score: 73/100.** Half-up mean (68 + 82 + 76 + 70 + 68) / 5 = 72.8. Historical capability only; use the explicit replacement ID for new workloads.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three independent searches, vendor launch and retirement notices, Vals exact-0709 independent measurements, and AA's historical-versus-current Index status. Separated Grok 4 from Heavy and `grok-4.3` redirects; normalized scores are interpretations.
- Reference URLs:
  - [xAI Grok 4 launch](https://x.ai/news/grok-4)
  - [xAI May 2026 retirement and redirect documentation](https://docs.x.ai/developers/migration/may-15-retirement)
  - [Vals AI independent original-checkpoint results](https://www.vals.ai/models/grok_grok-4-0709)
  - [Artificial Analysis deprecated Grok 4 profile](https://artificialanalysis.ai/models/grok-4)
  - [Artificial Analysis contemporary API-evaluation recap](https://threadreaderapp.com/thread/1943166841150644622.html)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
