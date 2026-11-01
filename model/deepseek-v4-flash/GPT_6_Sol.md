# DeepSeek V4 Flash (April preview) — findings by GPT 6 Sol

- Source: DeepSeek (`deepseek-ai/DeepSeek-V4-Flash`, April 2026 checkpoint)
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name / identity:** DeepSeek V4 Flash, the **April 24, 2026 preview** text checkpoint, not the **re-post-trained July 31 `DeepSeek-V4-Flash-0731`**, not V4.1 Flash, and not the separate experimental Vision checkpoint. The July 31 API upgrade kept the architecture/size but changed post-training ([DeepSeek changelog](https://api-docs.deepseek.com/updates), [April weights card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)).
- **Architecture / access:** **284B total / 13B active** MoE, MIT-licensed weights `deepseek-ai/DeepSeek-V4-Flash`, compressed/sparse attention. Historical `deepseek-v4-flash` DeepSeek Chat Completions ID ceased representing this checkpoint after July's upgrade; [since September it temporarily redirects to V4.1 Flash](https://api-docs.deepseek.com/updates). To evaluate this original checkpoint, pin the weights or an explicitly April-versioned third-party route such as [OpenRouter `deepseek/deepseek-v4-flash` (0423)](https://openrouter.ai/deepseek/deepseek-v4-flash). Never attach current first-party alias pricing or V4.1 image support to the April model.
- **Context / modalities:** **1M-token text-only input and text-only output**; non-think, high and max are *reasoning effort modes of one model*, not three checkpoints. Tool/JSON support via the DeepSeek model-specific encoding/parsers ([DeepSeek weights card](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash), [release changelog](https://api-docs.deepseek.com/updates)).
- **Pricing:** MIT weights free to download; self-hosting 284B requires substantial memory. No verified present first-party tariff for this *specific* April checkpoint; third-party providers vary.

### Raw benchmarks found

- **Agent / tool use (April vendor study):** [Terminal-Bench 2.0 **56.9%** at max, MCPAtlas **69.0%**, Toolathlon **47.8%**, BrowseComp **73.2%** at max](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash). Independent [mini-swe-agent exact-weight 10-instance pilot](https://huggingface.co/datasets/Yi30/deepseek-v4-swebench-trajectories) reports **10/10 valid submissions**, **6/10 resolved** in both no-think and high modes; n=10 is too small for a representative SWE estimate and used only a 131K local window. July's much higher Terminal-Bench **2.1 82.7%** belongs to the **0731** update ([vendor changelog](https://api-docs.deepseek.com/updates)), not here.
- **Reasoning:** April [GPQA Diamond **88.1%**, HLE **34.8%**, MMLU-Pro **86.2%** at max](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash); high-effort GPQA **87.4%**, non-think **71.2%**. These are different settings of the same checkpoint, and the high scores incur extra reasoning tokens.
- **Coding:** April [LiveCodeBench **91.6%** at max, SWE-bench Verified **79.0%**, SWE-Pro **52.6%** at max](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash). The independent [6/10](https://huggingface.co/datasets/Yi30/deepseek-v4-swebench-trajectories) is a small self-hosted pilot, not a replication of 79.0% on all 500 SWE-Verified tasks.
- **Context:** April [MRCR at 1M **78.7%** and CorpusQA 1M **60.5%** at max](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash), versus no-think **37.5%** and **15.5%**; long-window quality depends strongly on effort. [Artificial Analysis's `deepseek-v4-flash` URL](https://artificialanalysis.ai/models/deepseek-v4-flash) and [BenchLM's analogous slug](https://benchlm.ai/models/deepseek-v4-flash) now resolve to **0731**; their independent results must *not* be back-attributed to April.
- **Multimodal:** No image/audio/video input on the April text checkpoint; the later `Vision-Exp` and V4.1 are distinct ([DeepSeek update history](https://api-docs.deepseek.com/updates)).

### Normalized scores (1–100)

- **Tool use: 76/100.** April vendor terminal/MCP results and small independent tool-validity pilot, capped by weak general replication.
- **Reasoning: 84/100.** GPQA 88.1 and HLE 34.8 at max; no independent exact-April reasoning benchmark.
- **Context window: 93/100.** 1M with MRCR 78.7 at max, but substantial falloff in non-thinking mode.
- **Multimodal: 15/100.** This checkpoint is text-only; no image credit borrowed from successors.
- **Coding: 82/100.** Vendor SWE 79 and LCB 91.6 plus a tiny independent 6/10 pilot; multi-repo replication missing.
- **Cost efficiency: 88/100.** MIT weights and sparse activation, offset by large deployment footprint and lack of a verified current first-party price for April.
- **Overall Score: 70/100.** Half-up mean (76 + 84 + 93 + 15 + 82) / 5 = 70.0; useful historical text-and-code model, not the current DeepSeek API alias.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-01 UTC
- Method: Separate model, full-text and dataset searches; original exact-weights card, dated DeepSeek changelog and small independent trajectory set. Excluded the 0731 redirect's later benchmark numbers. Scores are normalized judgments.
- Reference URLs:
  - [DeepSeek original V4 Flash model card with mode-separated table](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  - [DeepSeek dated API releases, upgrades and redirects](https://api-docs.deepseek.com/updates)
  - [Independent mini-swe-agent pilot for original weights](https://huggingface.co/datasets/Yi30/deepseek-v4-swebench-trajectories)
  - [OpenRouter explicitly labelled 0423 historical route](https://openrouter.ai/deepseek/deepseek-v4-flash)
- Future sources: add a new file next to this one using the same headings.
