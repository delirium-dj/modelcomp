# Ring 2.6 1T — findings by GPT 6 Sol

- Source: inclusionAI (`inclusionAI/Ring-2.6-1T`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring-2.6-1T.
- **Short description:** inclusionAI's open-weight trillion-parameter reasoning MoE for text-first agent and scientific work. Its **high** and **xhigh** settings are reasoning-effort profiles of the same weights, not distinct checkpoints; Ling-2.6-1T is a different instant-response model ([official Ring card](https://huggingface.co/inclusionAI/Ring-2.6-1T), [family report](https://arxiv.org/html/2606.15079)).
- **Provider / access:** Download `inclusionAI/Ring-2.6-1T` and self-host SGLang OpenAI-compatible `/v1/chat/completions`; inclusionAI also provides a web chat. Independent Artificial Analysis previously measured a first-party API, though current provider/benchmark availability varies; no verified OpenCode Zen Free route ([card](https://huggingface.co/inclusionAI/Ring-2.6-1T), [AA provider page](https://artificialanalysis.ai/models/ring-2-6-1t/providers)).
- **Release / knowledge:** Third-party AA lists **2026-05-08**; public family technical report appeared June 13. Training-data cutoff not stated on the weight card ([AA](https://artificialanalysis.ai/models/ring-2-6-1t), [report](https://arxiv.org/html/2606.15079)).
- **IDs:** `inclusionAI/Ring-2.6-1T` weights; API host's model name may differ. Do not map to `Ling-2.6-1T`, nor convert high/xhigh into separate models.
- **Context window:** Native **128K**, extended to **256K via YaRN** according to official card; AA catalogs **262,144** tokens. Claims of 1M here would incorrectly inherit another Ling generation's window ([official downloads table](https://huggingface.co/inclusionAI/Ring-2.6-1T), [AA specs](https://artificialanalysis.ai/models/ring-2-6-1t)).
- **Modalities:** Text in/out with configurable reasoning and tool use; no vendor-verified native visual, audio or video I/O ([official card](https://huggingface.co/inclusionAI/Ring-2.6-1T), [AA](https://artificialanalysis.ai/models/ring-2-6-1t)).
- **Pricing (as of 2026-11-02):** MIT weight download incurs deployment hardware costs (vendor example spans **four nodes, TP8/PP4**). AA's recorded first-party rate **$0.30 input / $2.50 output per million**, not a guaranteed current universal rate; a third-party catalog quotes a cheaper routed **$0.075/$0.625**, which is host-specific ([AA pricing](https://artificialanalysis.ai/models/ring-2-6-1t), [vendor deployment](https://huggingface.co/inclusionAI/Ring-2.6-1T), [BenchmarkList catalog](https://benchmarklist.com/models/inclusionai-ring-2.6-1t)).
- **Architecture:** Approx. **1T total / 63B active** sparse MoE; open weights marked **MIT** on Hugging Face. BF16 and FP8 weight precision options are serving/deployment variants, not new trained models ([weights](https://huggingface.co/inclusionAI/Ring-2.6-1T), [AA metadata](https://artificialanalysis.ai/models/ring-2-6-1t)).

### Raw benchmarks found

- **Agent / tool use:** Vendor high-effort [PinchBench **87.60%**, ClawEval **63.82%**, τ² Telecom **95.32%**](https://huggingface.co/inclusionAI/Ring-2.6-1T); the independent-source [BenchmarkList digest](https://benchmarklist.com/models/inclusionai-ring-2.6-1t) reports **τ³ Banking 17.9%**, **Terminal-Bench Hard 28.8%**, **GDPval-AA 925 Elo**, **AA-Briefcase 658 Elo**. τ² Telecom and τ³ Banking are different datasets and must not be averaged as the same score.
- **Reasoning / knowledge:** Vendor **xhigh** [ARC-AGI-2 **66.18%**, GPQA Diamond **88.27%**, AIME 2026 **95.83%**](https://huggingface.co/inclusionAI/Ring-2.6-1T); independent [HLE **21.6%** and AA Intelligence Index **16.6 in v4.3.2**](https://benchsift.nxtaigen.com/models/ring-2-6-1t). The current AA v5 page renders an N/A index, not a comparable 16.6 v5 score ([AA page](https://artificialanalysis.ai/models/ring-2-6-1t)).
- **Coding:** Vendor-linked [SWE-bench Verified **74%**](https://huggingface.co/inclusionAI/Ring-2.6-1T) submission; independent [SciCode **45.0%**, Terminal-Bench **2.1 43.1%**](https://benchmarklist.com/models/inclusionai-ring-2.6-1t), and [older AA-derived coding index **42.8**](https://benchsift.nxtaigen.com/models/ring-2-6-1t). No exact-model independent reproduction of the vendor SWE run was confirmed.
- **Long context:** [Context Arena ~69.7–69.8%](https://benchmarklist.com/models/inclusionai-ring-2.6-1t) with different reported modes/settings; [AA-derived LCR approximately 70%](https://opper.ai/inclusionai/ring-2-6-1t). Neither proves full 256K retrieval fidelity; YaRN extension is conditional.

### Normalized scores (1–100)

- **Tool use: 67/100.** High vendor τ²/ClawEval, but independent banking, terminal and knowledge-work scores are uneven.
- **Reasoning: 70/100.** Strong vendor high-effort math, tempered by older AA composite 16.6 and independent HLE ~22.
- **Context window: 68/100.** Native 128K, 256K YaRN and moderate long-context evaluations.
- **Multimodal: 15/100.** Text-only input/output.
- **Coding: 68/100.** Vendor SWE 74 versus independent SciCode 45 and Terminal 2.1 ~43.
- **Cost efficiency: 71/100.** MIT weights and reasonable hosted token prices, offset by trillion-weight multi-node self-hosting.
- **Overall Score: 58/100.** Half-up mean (67 + 70 + 68 + 15 + 68) / 5 = 57.6; best for text-heavy research/agents with access to the correct high-effort settings.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-11-02 UTC
- Method: Three successful official checkpoint, independent evaluation and price/context searches; separate high/xhigh, YaRN-native, benchmark versions and first-party/host rates. Scores are normalized interpretations.
- Reference URLs:
  - [inclusionAI Ring 2.6 1T model card and exact weights](https://huggingface.co/inclusionAI/Ring-2.6-1T)
  - [Ling and Ring 2.6 research report](https://arxiv.org/html/2606.15079)
  - [BenchmarkList independent-source task digest](https://benchmarklist.com/models/inclusionai-ring-2.6-1t)
  - [Artificial Analysis specifications and tariff](https://artificialanalysis.ai/models/ring-2-6-1t)
  - [BenchSift historical AA-derived benchmark snapshot](https://benchsift.nxtaigen.com/models/ring-2-6-1t)
- Future sources: add a new file next to this one using the same headings.
