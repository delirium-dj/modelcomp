# MiMo V2.6 Distill Qwen 9B — findings by GPT 6.1 Sol

- Source: Xiaomi MiMo, `XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B`.
- Date: 2026-10-22 (UTC)
- Overview: [model-comparison](../../model-comparison.md)
- Signed log: [model-findings](../../model-findings.md)
- Confidence: **provisional**, vendor-only quality and explicit narrow reasoning/perception proxies.

## Model card

- **Identity / license:** MIT SFT research checkpoint distilled from Qwen3.5-9B on MiMo-generated data, **not** the teacher or subsequent agentic-RL checkpoint. Publisher says9B; no teacher scores inherited.[1]
- **Date / architecture:** Public HF repository created **September21,2026**, not necessarily product-launch date; cutoff unverified. Exact config retains dense `Qwen3_5ForConditionalGeneration`,27-layer vision encoder and **262,144 positions**.[2][3]
- **Modalities / access:** Text plus visual/frame input→text; exact audio/media generation unverified. Local SGLang recipe uses **`mimo` reasoning parser** and explicitly enabled thinking, not unchanged Qwen prompting.[1][2]
- **Cost:** No matching models.dev route and HF inference-provider mapping is empty. This is scoped absence, not proof that no private hosting exists. No verified token tariff/free inference entitlement; MIT weights still incur hardware/energy costs. Cost below is a **local-resource proxy**, not a quoted API rate.[3][4]

### Raw benchmarks found

- **Primary released SFT column:** **SWE Verified61.1% /SWE Pro44.6%**, both **avg@3**; internal MiMoCode-mini51.6%/Cyber-mini31.3%, alsoavg@3.[1]
- **AutomationBenchv1.0.6 30.3% /TB2.1 37.1% /Toolathlon-Verified35.2% /OfficeQA19.5% /JobBench18.3%**, avg@1. Internal MiMoGeneral-mini62.2% and **VisualCoding-mini64%** are internal-set results, not broad public academic/perception evaluations.[1]
- SFT mixture77.4B weighted total tokens/27.2B loss-bearing, including21.2B visual tokens. Training volume does not establish benchmark accuracy.[1]
- No exact independent AA profile recovered (guessed URL404), no verified broad GPQA/HLE/MMMU or≥98% retention. Student's base-model identity does not authorize importing Qwen9B benchmark percentages. Reasoning/perception ratings below are deliberately conservative **engineering/OfficeQA and visual-coding proxies**, not claimed academic measurements.

### Normalized scores (1–100)

- **Tool use: 49/100.** Primary terminal/Toolathlon/automation support basic agents, capped by vendor-only and low professional completion.[1]
- **Reasoning: 56/100.** Provisional engineering/OfficeQA proxy; no broad academic reasoning score fabricated.[1]
- **Context window: 76/100.** Exact262K config, without measured retention guarantees.[2]
- **Multimodal: 70/100.** Provisional actual vision architecture/internal visual-coding result, capped by missing broad perception replication/audio support.[1][2]
- **Coding: 63/100.** Released SFT SWE61.1%/Pro44.6%, with repeated-attempt average and vendor-only confidence.[1]
- **Cost efficiency: 85/100.** Low-confidence local9B resource-efficiency proxy; not$0 inference or a verified hosted tariff.[1][3]
- **Overall Score: 63/100.** Provisional half-up mean `(49+56+76+70+63)/5=62.8`; cost excluded. Best read as a research-baseline profile, not a fully independently benchmarked generalist.

### Fresh search trail and sources

- [Bing](https://www.bing.com/search?format=rss&q=%22MiMo-V2.6-Distill-Qwen-9B%22%20benchmark): empty feed.
- [Google](https://www.google.com/search?q=%22MiMo-V2.6-Distill-Qwen-9B%22%20model%20benchmark): JavaScript interstitial.
- [DuckDuckGo](https://duckduckgo.com/html/?q=%22MiMo-V2.6-Distill-Qwen-9B%22%20model%20benchmark): human challenge, not bypassed. Exact card/config/catalog inspected; no peer findings or authenticated inference.

[1]: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B/raw/main/README.md
[2]: https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B/raw/main/config.json
[3]: https://huggingface.co/api/models/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B?expand[]=createdAt&expand[]=inferenceProviderMapping
[4]: https://models.dev/api.json

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-22
- Method: independent primary research with explicit vendor-only and narrow-proxy uncertainty. Ratings are interpretations; no parent/teacher scores transferred.
