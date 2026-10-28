# MiMo-V2.6-Flash Free — findings by GPT-6 Luna

- Source: OpenCode Zen (`mimo-v2.6-flash-free`), mapped to Xiaomi MiMo-V2.6-Flash
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo-V2.6-Flash Free (tracked under the shorter slug `mimo-v2.6-free`). The current OpenCode catalog uses the fuller `mimo-v2.6-flash-free` route; models.dev maps that exact route to `xiaomi/mimo-v2.6-flash`. This is a free access tier for Xiaomi's Flash checkpoint, not a separately documented set of free weights. [OpenCode Console model catalog](https://opencode.ai/v2/docs/console/models/#free-models) · [OpenCode live model list](https://opencode.ai/inference/v1/models) · [models.dev catalog](https://models.dev/api.json)
- **Short description:** Limited-time OpenCode Zen access to Xiaomi's open-weight MiMo-V2.6-Flash model, for multimodal coding agents and long-context automation. Benchmark numbers below are for the mapped Flash checkpoint, not a separately published evaluation of the OpenCode-hosted route; serving/harness parity is not independently verified.
- **Provider / access:** OpenCode Zen free tier, current model ID `opencode/mimo-v2.6-flash-free`, through OpenCode's OpenAI-compatible Chat Completions endpoint. OpenCode says free-tier models require OpenCode; the promotion is temporary and its privacy notice says MiMo free-tier data may be used to improve the model. [OpenCode Console model catalog](https://opencode.ai/v2/docs/console/models/#free-models)
- **Release / knowledge:** Xiaomi released the MiMo-V2.6 series on September 21, 2026. The models.dev record dates the OpenCode route to September 22, 2026. No model knowledge-cutoff date was found. [Xiaomi release notes](https://mimo.mi.com/static/docs/news/latest/v2-6.md) · [models.dev catalog](https://models.dev/api.json)
- **IDs:** OpenCode route `mimo-v2.6-flash-free`; models.dev canonical mapping `xiaomi/mimo-v2.6-flash`; Xiaomi checkpoint `XiaomiMiMo/MiMo-V2.6-Flash-RL`. The current catalogs do not list the older tracked ID spelling `mimo-v2-6-free` as a separate model. [OpenCode live model list](https://opencode.ai/inference/v1/models) · [models.dev catalog](https://models.dev/api.json) · [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- **Context window:** The OpenCode route's models.dev metadata reports 200,000 context / 32,000 max output. Xiaomi's underlying Flash checkpoint supports 1M tokens, but the free route's listed cap is lower; context scoring uses the 200K route limit. [models.dev catalog](https://models.dev/api.json) · [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- **Modalities:** OpenCode route metadata lists text, image, audio, and video input, with text output; Xiaomi's checkpoint card describes the same native input modalities. Artificial Analysis describes the Xiaomi-hosted endpoint it evaluated as text/image input only, so audio/video availability may depend on serving route and is not independently tested on OpenCode Free. [models.dev catalog](https://models.dev/api.json) · [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- **Pricing (as of 2026-10-28):** OpenCode Free: $0 input, output, and cached reads per 1M tokens for a limited time. Xiaomi-hosted paid Flash pricing is $0.14 input / $0.28 output per 1M tokens (Artificial Analysis); this is context only, not the evaluated tier. Do not send confidential data to the temporary free tier because OpenCode says it may use collected data to improve the model. [OpenCode Console model catalog](https://opencode.ai/v2/docs/console/models/#free-models) · [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- **Architecture:** Open weights under MIT license; sparse mixture-of-experts with 309B total / 15B active parameters, 1M native context, multimodal encoders, and hybrid attention. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)

### Raw benchmarks found

> Identity resolution: the live OpenCode route ID is `mimo-v2.6-flash-free`; OpenCode's docs name it MiMo-V2.6-Flash Free, and models.dev maps that exact ID to Xiaomi's `mimo-v2.6-flash`. Results below therefore describe the mapped Flash checkpoint. They were not run specifically through the OpenCode free endpoint, so provider/harness parity remains a caveat.

Agent / tool use:

- Xiaomi model card: Terminal-Bench 2.1 **87.6%**, Terminal-Bench 4.0 **28.8%**, OSWorld-Verified **80.8%**, Toolathlon-Verified **73.6%**, AutomationBench v1.0.6 **52.3%**, Agents' Last Exam **27.6%**, and JobBench **61.2%**. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- BenchmarkList's October 2026 snapshot gives Terminal-Bench 2.1 **87.6%** (rank 16/196, 92nd percentile), OSWorld-Verified **80.8%** (rank 17/72), and Agents' Last Exam **27.6%** (rank 19/43). [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/)
- Vals AI independently reports Terminal-Bench 4.0 **24.24% ± 1.51** (rank 28/57), a different evaluator result from Xiaomi's **28.8%**; the values are not averaged. Vals lists Xiaomi as its default provider. [Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash)
- Claw-Eval / ClawProBench: **no verified public score found** for this exact Flash checkpoint in sources checked.

Reasoning / knowledge:

- BenchmarkList reports Humanity's Last Exam **35.1%** (rank 66/488), Artificial Analysis Intelligence Index **37.9** (rank 72/433), and AIIQ Composite IQ **122** (rank 44/161). [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/)
- Artificial Analysis's current model page separately reports Intelligence Index **27** (rank 7/17 among its open-weight comparison set). This differs from BenchmarkList's **37.9** snapshot; the index snapshots are preserved separately, not averaged. Artificial Analysis notes that the model generated 160M tokens during its index evaluation, unusually verbose against its 100M median. [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)
- Vals AI's overall Vals Index is **54.83% ± 1.11** (rank 18/29); its best-listed result is CyberBench v1.1 **75.36% ± 5.42** (rank 7/47). These are broad / cyber results, not GPQA or a pure reasoning score. [Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash)

Coding:

- Xiaomi model card: DeepSWE v1.1 **67.9%**, ProgramBench **26.0%**, MiMo Code Bench **61.2%**, and MiMo VisualCoding **71.5%**. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL)
- Vals AI: Vibe Code Bench v1.1 **78.96% ± 4.04** (rank 30/121); Terminal-Bench 4.0 **24.24% ± 1.51** (rank 28/57). The Vals page reports Xiaomi as the default provider and a 128K max output for its evaluated paid/API model, not the narrower OpenCode free route. [Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash)
- DeepSWE v1.1 (**67.9%**) and Terminal-Bench 2.1 (**87.6%**) are strong agent-coding results; the lower Terminal-Bench 4.0 results are a different edition and are not compared as if the tasks were unchanged. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [Vals AI](https://www.vals.ai/models/xiaomi_mimo-v2.6-flash)
- SWE-bench Verified: **no exact-checkpoint result verified** in the primary Xiaomi Flash-RL card or independent pages checked; the separate MiMo distillation result is not attributed to Flash.

Multimodal:

- Xiaomi's Flash-RL card specifies text, image, video, and audio input. The OpenCode-route catalog record also lists all four input modalities and text output. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [models.dev catalog](https://models.dev/api.json)
- Artificial Analysis describes its Xiaomi-hosted evaluation endpoint as text/image input with text output; no non-text output benchmark was verified. This is an endpoint-level modality discrepancy, not evidence of a separate Flash model. [Artificial Analysis](https://artificialanalysis.ai/models/mimo-v2-6-flash)

Long context:

- The Flash checkpoint card supports **1M** tokens, but the current OpenCode free route metadata caps context at **200K** and output at **32K**. BenchmarkList reports AA-LCR **74.3%** for the underlying Flash checkpoint; this does not establish retrieval performance through OpenCode beyond its 200K route limit. [Xiaomi model card](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL) · [models.dev catalog](https://models.dev/api.json) · [BenchmarkList](https://benchmarklist.com/models/xiaomi-mimo-v2.6-flash/)

### Normalized scores (1–100)

- **Tool use: 88/100.** Strong Terminal-Bench 2.1 (87.6%), OSWorld-Verified (80.8%), and Toolathlon-Verified (73.6%) results support a high score; the much lower TB4.0 results and lack of Claw-Eval cap it.
- **Reasoning: 68/100.** HLE is 35.1% and the independent intelligence-index snapshots are 27 and 37.9; absent a verified GPQA score and with the index discrepancy unresolved, this stays below frontier reasoning tier.
- **Context window: 70/100.** The OpenCode free route's listed 200K context maps to the methodology's 200K tier; the checkpoint's native 1M window and 74.3% AA-LCR do not extend this route's documented limit.
- **Multimodal: 90/100.** Xiaomi's card and route metadata list audio/video as well as image input, but the independent Artificial Analysis endpoint lists only text/image input and no non-text outputs were verified.
- **Coding: 86/100.** DeepSWE v1.1 67.9%, TB2.1 87.6%, and Vibe Code Bench v1.1 78.96% are strong; TB4.0 at 24.24–28.8% and lack of a verified SWE-bench Verified result keep it below top tier.
- **Cost efficiency: 100/100.** The evaluated OpenCode Zen tier is $0 for input/output/cached reads, as in the project's free-tier methodology; the promotion is temporary and may use submitted data for model improvement.
- **Overall Score: 80/100.** Half-up mean of the five quality dimensions: (88 + 68 + 70 + 90 + 86) / 5 = 80.4. Best for cost-free coding/agent trials on inputs within 200K; do not assume the paid Xiaomi endpoint's 1M cap or modalities/results are identical to OpenCode Free.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Search routes across DuckDuckGo, Bing, Yahoo, and Google, followed by direct checks of OpenCode's current catalog/docs and live model list, the models.dev route mapping, Xiaomi's Flash-RL model card/release notes, Vals AI, Artificial Analysis, and BenchmarkList. The tracked `mimo-v2.6-free` label was not assumed to be a distinct Xiaomi model: the current OpenCode `mimo-v2.6-flash-free` ID is explicitly mapped to `xiaomi/mimo-v2.6-flash`; benchmark values, index disagreements, modality differences, and route-level limits are called out rather than blended. Scores are normalized interpretations under `model-comparison.md`, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
