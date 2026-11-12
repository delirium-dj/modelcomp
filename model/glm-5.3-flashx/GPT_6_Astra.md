# GLM-5.3-FlashX — findings by GPT 6 Astra

- Source: Z.ai / glm-5.3-flashx
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [findings](../../model-findings.md)

## Model card

- **Name:** GLM-5.3-FlashX.
- **Short description:** Faster serving option for GLM-5.3-Flash, not an independently established new checkpoint. Shared results below are not FlashX-specific tests. [Gateway description](https://vercel.com/ai-gateway/models/glm-5.3-flashx)
- **Provider / access / IDs:** Z.ai Chat Completions `glm-5.3-flashx`; no verified Zen Free ID. FlashX is not currently included in the Coding Plan. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Release / knowledge:** Available by this research date; exact first-release date and knowledge cutoff not independently verified.
- **Context window:** 1M, maximum output 128K. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Modalities:** Text/image/video/file input, text output; mandatory thinking, function calls and structured outputs. [Documentation](https://docs.z.ai/guides/vlm/glm-5.3-flash)
- **Pricing (2026-10-07):** Paid $0.37 input / $1.25 output / $0.075 cached input per million tokens; cache storage temporarily free. [Official pricing](https://docs.z.ai/guides/overview/pricing)
- **Architecture:** Shared Flash architecture: 320B total / 18B active parameters, hybrid sparse/linear attention; open weights. License terms not independently inspected in this pass. [Publisher card](https://huggingface.co/zai-org/GLM-5.3-Flash)

### Raw benchmarks found

**Shared Flash-model results**, not independent FlashX-route measurements:

| Benchmark | Result | Provenance |
|---|---:|---|
| Terminal-Bench 2.1 | 84.3% | [Publisher card](https://huggingface.co/zai-org/GLM-5.3-Flash), Claude Code 2.1.207 |
| DeepSWE v1.1 | 63.4% | [Official evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| AutomationBench | 48.8% | [Official evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| AA Intelligence Index v4.1.1 | 57 | [Publisher's historical AA citation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |
| Z.ai Code Bench v1.0, max | 29.0 | [Internal evaluation](https://docs.z.ai/guides/vlm/glm-5.3-flash) |

DeepSWE uses mini-swe-agent, 400K context and a six-hour timeout. Terminal evaluation permits 65,536 generated tokens. [Harness notes](https://huggingface.co/zai-org/GLM-5.3-Flash)

Tau3/Tau2, GDPval-AA Elo, Claw-Eval, MCP-Atlas, Toolathlon, exact GPQA/HLE/CritPt, Omniscience, SWE-bench Verified/Pro, LiveCodeBench, SciCode and Vibe Code Bench: no verified public score recovered here. No quantified full-window retrieval result recovered. The historical AA index is not directly comparable with newer versions.

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong shared terminal and automation results; route-specific replication and broader tool evidence remain absent.
- **Reasoning: 82/100.** Shared historical intelligence evidence supports high capability, with incomplete academic coverage.
- **Context window: 95/100.** Million-token capacity, without near-perfect retrieval evidence.
- **Multimodal: 85/100.** Image/video/document input; no verified native audio endpoint.
- **Coding: 86/100.** Strong DeepSWE and terminal results, below the highest coding anchors.
- **Cost efficiency: 95/100.** Inexpensive paid inference, though faster serving costs more than ordinary Flash.
- **Overall Score: 87/100.** Half-up mean: (85 + 82 + 95 + 85 + 86) / 5 = 86.6. Suitable for fast multimodal coding agents, subject to shared-model equivalence.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-07 UTC
- Method: Fresh public web research; scores are normalized interpretations, not official vendor scores.
- Future sources: add a separate signed file alongside this report.

---

## Archived research pass — `GPT_6_Astra.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GPT_6_Astra.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GLM 5.3 Flash X — findings by GPT 6 Astra

- Source: Z.ai / GLM-5.3-FlashX; dataset spelling `glm-5.3-flash-x` requires identity review.
- Archived date: 2026-10-26 (UTC)
- Methodology: `../../model-comparison.md`; signed log: `../../model-findings.md`

### Model card

- **Name / IDs:** Official name GLM-5.3-FlashX, native API ID `glm-5.3-flashx` (no hyphen before x). The reviewed official documentation does not establish a distinct `glm-5.3-flash-x` checkpoint. The existing queue separately includes `glm-5.3-flashx`; this report flags a probable duplicate spelling rather than creating another identity.
- **Provider / access:** Z.ai and BigModel Chat Completion APIs. TokenPlus displays “GLM 5.3 Flash X” but its actual request ID is `z-ai/glm-5.3-flashx`, corroborating the spelling resolution. Official documentation says FlashX is not yet available on the GLM Coding Plan.
- **Release / knowledge:** Secondary catalog and contemporaneous discussion date FlashX to September 18, 2026; exact primary release date and knowledge cutoff were not independently established.
- **Context / output:** Official shared Flash/FlashX guide specifies 1M context and 128K maximum output; BigModel parameter documentation gives 131,072 output tokens.
- **Modalities / tools:** Text, image, video and file input; text output, function calling, JSON structured output, caching and streaming. Thinking is required, with low/high/max effort. File generation through tools does not establish native image/audio output.
- **Pricing:** Official international FlashX prices are $0.37 input / $1.25 output / $0.075 cache hit per million tokens. BigModel's domestic table instead quotes CNY 2 / 7 / 0.57. Cache storage is temporarily free; inference is paid. Regional currency tables are not contradictory dollar quotes.
- **Architecture:** Vendor presents Flash and FlashX together with 320B total / 18B active hybrid sparse/linear-attention architecture, and describes FlashX in terms of inference infrastructure and acceleration. No distinct Flash-X weights or new training run established.

## Raw benchmarks found

**No verified public quality benchmark found for a distinct hyphenated `glm-5.3-flash-x` model.** Searches for independent FlashX quality evaluations returned base Flash records, not a separately attributed Flash-X test.

- Official FlashX throughput claim: **200 tokens/s**, without a reproducible workload/hardware/concurrency specification on the inspected overview. This is a serving-performance claim, not a benchmark of reasoning, coding or tool quality.
- TokenPlus lists **91 tokens/s** and **4.25 seconds** latency for its displayed Flash X service, without sufficient test details to compare against the vendor ceiling.
- October 10 Linux.do users report variable **70–130** and **130–170 tokens/s**. These are uncontrolled anecdotes, not validated independent capability measurements.

Tool use, GPQA/HLE, SWE-bench/DeepSWE, long-context retrieval and multimodal quality for a distinct Flash-X checkpoint: no verified public score found. The official page's benchmark section explicitly labels its results **GLM-5.3-Flash**. Those scores are not relabeled as exact FlashX evaluations. Its separate Legal subsection is a specialized model and must not be used for this entry either.

#### Cross-source reconciliation and verdict

The official English and Chinese documentation, TokenPlus request example, and official price tables consistently use `flashx`. The extra hyphen appears in informal titles. This supports review of the two dataset folders as spelling duplicates; it does not justify adding another scored copy of the same service.

The apparent speed conflict is not evidence of capability loss: vendor peak throughput, gateway statistics and user observations have different unknown workloads. They cannot establish a universal speedup or cost per successful task. International output and cache-hit token prices are 2.5 times ordinary Flash's published rates; input is approximately 2.47 times due to displayed rounding. Paying more buys a speed-oriented service, not a demonstrated quality increase.

Historical Flash reviews quote AA index 57 on v4.1.1; current AA lists 42 on v4.3.2. Those are versioned benchmark suites for **Flash**, not evidence of a FlashX regression or an independent Flash-X model. Repetition across reviews traces back to the same vendor/AA sources rather than multiple experiments.

**Disposition:** Self-excluded for absent exact-identity quality evidence and probable duplicate spelling. Recommend resolving `glm-5.3-flash-x` against the already tracked `glm-5.3-flashx` before further scoring. No folder merge, deletion or existing-report modification performed.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
### Sources and research audit

Five searches:
1. `"GLM-5.3-Flash-X" official model benchmark`
2. `GLM 5.3 Flash X independent benchmark Artificial Analysis`
3. `"glm-5.3-flash-x" API pricing context`
4. `site:docs.z.ai "GLM-5.3-FlashX"`
5. `site:bigmodel.cn "GLM-5.3-FlashX" "Flash"`

- https://docs.z.ai/guides/vlm/glm-5.3-flash — directly fetched official identity, shared architecture/capabilities and API IDs.
- https://docs.z.ai/guides/overview/pricing — directly fetched official international pricing.
- https://docs.bigmodel.cn/cn/guide/models/vlm/glm-5.3-flash — Chinese vendor corroboration.
- https://docs.bigmodel.cn/cn/guide/start/pricing — domestic prices and modalities.
- https://docs.bigmodel.cn/cn/guide/start/concept-param — exact output-token limits and thinking restrictions.
- https://www.tokenplus.cn/model/01a1253b-b99f-7885-9db7-c59f368e5f28 — gateway display-name-to-request-ID mapping and performance snapshot.
- https://linux.do/t/topic/3004149 — independent user observations, uncontrolled.
- https://artificialanalysis.ai/models/glm-5-3-flash — independent base-model evaluation, not FlashX-specific evidence.
- https://www.qubrid.com/blog/glm-53-flash-benchmarks-official-and-independent-results — historical secondary base-model review.
