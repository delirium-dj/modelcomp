# GPT-6.1 Terra — findings by GPT 6 Sol

- Source: OpenAI (`gpt-6.1-terra`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's October 2026 fast visual-reasoning and computer-use model for high-volume professional work, screen interaction, image understanding and writing. It is a distinct API model from GPT-6.1 Sol and earlier GPT-5.6 Terra, not a speed or reasoning setting of either ([OpenAI launch](https://openai.com/index/introducing-gpt-6-1-terra/)).
- **Provider / access:** `gpt-6.1-terra` at `https://api.openai.com/v1/chat/completions` or `https://api.openai.com/v1/responses`; built-in computer use, hosted shell, search and other tool calling require **Responses** ([official API spec](https://developers.openai.com/api/docs/models/gpt-6.1-terra)). Available in supported ChatGPT Work/Codex plans and the paid API; no verified Zen Free ID.
- **Release / knowledge:** **October 26, 2026** ([OpenAI system-card addendum](https://deploymentsafety.openai.com/gpt-6-1-terra), [Vals](https://www.vals.ai/models/openai_gpt-6.1-terra)); knowledge cutoff **June 1, 2026** ([OpenAI API spec](https://developers.openai.com/api/docs/models/gpt-6.1-terra)).
- **IDs:** Official `gpt-6.1-terra`, default snapshot also `gpt-6.1-terra`; reasoning efforts `none`/`low`/`medium`/`high`/`xhigh`/`max` are settings on that ID. Vals and Artificial Analysis tested **max**, so do not assume their scores at the default medium effort.
- **Context window:** **1,050,000 combined / 922,000 maximum input / 128,000 maximum output** per [first-party limits](https://developers.openai.com/api/docs/models/gpt-6.1-terra). A 1.05M window is not a 1.05M-input allowance or proof of correct retrieval at the cap.
- **Modalities:** Text/image input and text output. No native audio or video, even though a computer-use agent can inspect images or use external video-editing tools. Supports reasoning, structured outputs and tool calls (Responses only for tools) ([official API spec](https://developers.openai.com/api/docs/models/gpt-6.1-terra)).
- **Pricing (as of 2026-10-31):** Standard **$1 input / $0.05 cached input / $1.25 cache write (30-minute retention) / $5 output per million tokens**; prompts **over 272K input** are charged **2× input/cache and 1.5× output for the entire request**. Batch/Flex are half of Standard, Fast mode is 2×, and 12-hour cache writes cost more; tools can add charges ([OpenAI API model pricing](https://developers.openai.com/api/docs/models/gpt-6.1-terra)).
- **Architecture:** Proprietary, no public weights or verified parameter count ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra)).

### Raw benchmarks found

Agent / tool use:

- [OpenAI launch](https://openai.com/index/introducing-gpt-6-1-terra/) reports **Terminal-Bench 4.0 50.3% at max effort** and describes a higher Agents' Last Exam score versus GPT-5.6 Terra at medium effort; [BenchLM's source-linked index](https://benchlm.ai/models/gpt-6-1-terra) extracts vendor **Agents' Last Exam 60.0%** and **OSWorld 2.1 Offline 74.2%**. The last two figures come from vendor chart/secondary transcription, not independently run OSWorld tests.
- [Vals' independent first-party API run at max effort](https://www.vals.ai/models/openai_gpt-6.1-terra) finds **Terminal-Bench 4.0 49.49% ±1.82** (#11/59) — closely agreeing with the vendor's 50.3 but with its own harness — plus **EMB v1.1 73.33% ±2.23**, **Finance Agent v2.1 55.96% ±2.09**, **Legal Research 25.96% ±3.05**, and **HLAB-Vals-1.1 1.67% ±1.01** (#33/33). Current Vals Index is **60.47% ±0.99** (#11/32); its October 26 article quoted 60.17% against an earlier peer/task set, not a contradiction in the model ID.

Reasoning / knowledge:

- [Artificial Analysis](https://artificialanalysis.ai/models/gpt-6-1-terra) independently reports **Intelligence Index v5 51**, #12/58 among its tested model class. This is an index, not a 51% question accuracy. It observed **99M generated output tokens** over its Index against a 70M class median, and **~274.62 seconds to the first answer token** at max effort; throughput after first token (97.2 tokens/s) does not make the full answer quick.
- [OpenAI's system card](https://deploymentsafety.openai.com/gpt-6-1-terra) directly reports **HealthBench Professional length-adjusted 62.7%** (raw 64.2), **HealthBench 55.1%** (raw 51.1), **HealthBench Hard 31.4%** (raw 26.0), and **MentalHealthBench max-effort 55.5% ±1.0**. The system card explicitly warns its adversarial test rates are not representative of normal production traffic.
- [BenchLM's AA-linked score index](https://benchlm.ai/models/gpt-6-1-terra) cites **HLE 46.2%**, **AA-Omniscience accuracy 47.6% / hallucination rate 34.5%**. These are secondary-transcribed AA benchmarks; do not substitute them for the current v5 Index or for OpenAI's different internal factual-error test.

Coding:

- [OpenAI launch](https://openai.com/index/introducing-gpt-6-1-terra/) reports **TB4.0 50.3%** and identifies a Terminal-Bench-Science 0.1 improvement; [BenchLM](https://benchlm.ai/models/gpt-6-1-terra) transcribes vendor **Terminal-Bench-Science 58.3%**. Those are vendor-harness results, not SWE-bench measurements.
- [Vals](https://www.vals.ai/models/openai_gpt-6.1-terra) independently reports **Vibe Code Bench v1.1 84.00% ±2.87** (#20/123) alongside TB4.0 **49.49%**. The gap between application-generation rubrics and terminal issue-solving is a real task difference, not an averageable common percentage. No independent exact-ID SWE-bench result was verified on its public page.

Long context / vision:

- [BenchLM's source-linked AA index](https://benchlm.ai/models/gpt-6-1-terra) cites **AA-MMMU-Pro 84.7%** and **AA-LCR 82.7%**, while OpenAI's own chart is reported there as **MMMU-Pro 85.5%**. The AA/vendor image results are close but not matched-protocol repetitions; the LCR figure is not a measured 922K-input retrieval result. The [OpenAI API limit](https://developers.openai.com/api/docs/models/gpt-6.1-terra) confirms capacity only.

### Normalized scores (1–100)

- **Tool use: 84/100.** Independent Vals TB4.0 49.49 agrees with vendor 50.3 and EMB is strong, but legal agent/HLAB scores and max-effort latency limit generality.
- **Reasoning: 85/100.** AA v5 Index 51 and OpenAI HealthBench Professional 62.7, with hard HealthBench and independent legal tests as limits.
- **Context window: 94/100.** First-party 1.05M combined tier and 922K prompt cap, without verified near-limit recall; long prompts also trigger request-wide repricing.
- **Multimodal: 82/100.** Strong vendor/AA image reasoning and computer-use workflow support, but text-only output and no native audio/video.
- **Coding: 84/100.** Independent Vals Vibe Code 84/TB4.0 49.49 corroborate vendor coding progress, below flagship Sol/Astra on the hardest tasks.
- **Cost efficiency: 75/100.** Low short-request $1/$5 price but max-effort latency/token use, additional tool fees and >272K prompt repricing reduce task-level value.
- **Overall Score: 86/100.** Half-up mean (84 + 85 + 94 + 82 + 84) / 5 = 85.8; useful for image-driven professional workflows if Responses tools and long-request pricing fit.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Exact-ID comparison of OpenAI API/launch/safety disclosures with Vals first-party-API measurements and Artificial Analysis's independent Index, with BenchLM used only where secondary chart values are explicitly labelled. Scores are normalized interpretations.
- Reference URLs:
  - [OpenAI GPT-6.1 Terra launch](https://openai.com/index/introducing-gpt-6-1-terra/)
  - [OpenAI API model limits, tool interface and tiered pricing](https://developers.openai.com/api/docs/models/gpt-6.1-terra)
  - [OpenAI system card addendum and safety/health scores](https://deploymentsafety.openai.com/gpt-6-1-terra)
  - [Vals AI independent GPT-6.1 Terra max-effort results](https://www.vals.ai/models/openai_gpt-6.1-terra)
  - [Artificial Analysis independent GPT-6.1 Terra profile](https://artificialanalysis.ai/models/gpt-6-1-terra)
  - [BenchLM chart transcription with individual source links](https://benchlm.ai/models/gpt-6-1-terra)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
