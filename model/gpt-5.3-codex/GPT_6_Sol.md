# GPT-5.3-Codex — findings by GPT 6 Sol

- Source: OpenAI (`gpt-5.3-codex`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's proprietary, computer-using coding agent model, specialized for long-running software engineering and Codex environments ([official launch](https://openai.com/index/introducing-gpt-5-3-codex/)). `xhigh` and other reasoning efforts are settings on the same model, not new checkpoints.
- **Provider / access:** First-party API `gpt-5.3-codex` supports **Responses** at `https://api.openai.com/v1/responses`, **not Chat Completions**; OpenAI's [model page](https://developers.openai.com/api/docs/models/gpt-5.3-codex) now marks the ID **deprecated**. Codex application/CLI access was announced at launch; API support followed later. OpenRouter also lists `openai/gpt-5.3-codex` ([route](https://openrouter.ai/openai/gpt-5.3-codex)).
- **Release / knowledge:** **February 5, 2026** per [OpenAI's launch](https://openai.com/index/introducing-gpt-5-3-codex/) and [Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-3-codex); Vals' dated evaluation is February 24 and should not be mistaken for the release date. Knowledge cutoff **August 31, 2025** ([OpenAI specifications](https://developers.openai.com/api/docs/models/gpt-5.3-codex)).
- **IDs:** `gpt-5.3-codex` (first-party default snapshot); `openai/gpt-5.3-codex` (gateway). No verified OpenCode Zen Free ID.
- **Context window:** **400,000 total, 272,000 maximum input and 128,000 maximum output** ([first-party spec](https://developers.openai.com/api/docs/models/gpt-5.3-codex)); not a demonstrated 400K prompt or retrieval accuracy. Distinguish the total window from the input cap.
- **Modalities:** Text/image input, text output, reasoning at low/medium/high/xhigh, function calling, structured outputs, web search and hosted shell on Responses. No native audio/video I/O ([first-party spec](https://developers.openai.com/api/docs/models/gpt-5.3-codex)).
- **Pricing (as of 2026-10-31):** **$1.75 input / $14 output / $0.175 cached input per million tokens** ([OpenAI model pricing](https://developers.openai.com/api/docs/models/gpt-5.3-codex)). Not a free API; tool calls can incur additional charges. The model is deprecated, so check availability before a new integration.
- **Architecture:** Proprietary, no disclosed parameter count or public weights. OpenAI says cybersecurity-sensitive queries can sometimes be routed to GPT-5.2, a safety mechanism that can confound real-world evaluations of the nominal model ([launch](https://openai.com/index/introducing-gpt-5-3-codex/)).

### Raw benchmarks found

Agent / tool use:

- [OpenAI's launch appendix](https://openai.com/index/introducing-gpt-5-3-codex/) at **xhigh** reports **Terminal-Bench 2.0 77.3%**, **OSWorld-Verified 64.7%** and **GDPval wins/ties 70.9%** with custom skills. GDPval is a win-or-tie fraction, not an absolute solve rate; OSWorld uses computer vision. [Vals](https://www.vals.ai/models/openai_gpt-5.3-codex) independently finds **Terminal-Bench 2.0 64.05% ±5.12** under **high**, rather than xhigh, effort. The TB2.0 gap is material, but differences in effort and harness preclude treating the vendor score as a Vals rerun.
- Vals' page reports a present **Vals Index 68.99%** over only the benchmarks shown, while its dated launch note describes an earlier task mix/ranking; do not project that index to general knowledge tasks ([Vals](https://www.vals.ai/models/openai_gpt-5.3-codex)).

Reasoning / knowledge:

- No independent exact-ID GPQA, HLE, CritPt or knowledge benchmark result was verified on [Vals' five-benchmark profile](https://www.vals.ai/models/openai_gpt-5.3-codex) or [Artificial Analysis's current profile](https://artificialanalysis.ai/models/gpt-5-3-codex), which shows **N/A** rather than a maintained Intelligence Index. OpenAI's [GDPval wins/ties 70.9%](https://openai.com/index/introducing-gpt-5-3-codex/) is professional agent work with custom skills, not a general reasoning test.
- [OpenAI's appendix](https://openai.com/index/introducing-gpt-5-3-codex/) also reports **cybersecurity CTF 77.6%**, evaluated in a specialized domain with safety routing caveats.

Coding:

- [Vals' independently run results](https://www.vals.ai/models/openai_gpt-5.3-codex): **SWE-bench 78.00% ±1.85**, **LiveCodeBench 87.31% ±0.97**, **Vibe Code Bench v1.1 61.77% ±4.71** and **IOI 53.83% ±6.31**. Vals' February update cited an earlier **41.4% VibeCodeBench** result (#4 then); its current 61.77% figure reflects a later benchmark/configuration and is not silently merged with the launch-era result.
- [OpenAI's xhigh appendix](https://openai.com/index/introducing-gpt-5-3-codex/) gives **SWE-bench Pro Public 56.8%**, **SWE-Lancer IC Diamond 81.4%** and **TB2.0 77.3%**. SWE-bench Pro and Vals' SWE-bench do not use the same dataset; neither supersedes the other.

Long context / multimodal:

- First-party [400K combined / 272K maximum input](https://developers.openai.com/api/docs/models/gpt-5.3-codex) is a capacity limit. No verified near-cap MRCR or retrieval rate, or exact-ID independent MMMU-Pro result, found in the cited evaluations; image/computer use is evidenced by vendor OSWorld 64.7% rather than an image-understanding benchmark.

### Normalized scores (1–100)

- **Tool use: 82/100.** OpenAI OSWorld and vendor TB2.0 are strong, but independent TB2.0 is 64.05 and skills/harness/effort affect outcomes.
- **Reasoning: 74/100.** Professional-task and CTF evidence is promising but exact-ID independent hard-reasoning and maintained AA Index scores are missing.
- **Context window: 75/100.** 400K combined tier with a lower 272K prompt cap and no verified near-limit retrieval.
- **Multimodal: 70/100.** Image/text input supports computer use, but text-only output and no independent vision score or native audio/video.
- **Coding: 86/100.** Vals SWE-bench 78 and LiveCodeBench 87.31, tempered by its TB2.0 gap and modest SWE-bench Pro 56.8.
- **Cost efficiency: 68/100.** $1.75 input is reasonable but $14 output, paid tool calls and deprecated status reduce value.
- **Overall Score: 77/100.** Half-up mean (82 + 74 + 75 + 70 + 86) / 5 = 77.4; best for an existing Codex workflow, not a newly built long-lived API integration.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Exact-ID public search and first-party model/release documentation compared with Vals independent harness results and Artificial Analysis's current availability/index status; normalized scores are interpretations, not official benchmark values.
- Reference URLs:
  - [OpenAI GPT-5.3-Codex launch and evaluation appendix](https://openai.com/index/introducing-gpt-5-3-codex/)
  - [OpenAI API model spec, pricing and deprecation status](https://developers.openai.com/api/docs/models/gpt-5.3-codex)
  - [Vals GPT-5.3-Codex independent measurements](https://www.vals.ai/models/openai_gpt-5.3-codex)
  - [Artificial Analysis GPT-5.3-Codex profile](https://artificialanalysis.ai/models/gpt-5-3-codex)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
