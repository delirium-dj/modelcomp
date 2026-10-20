# Grok 4 Fast — findings by GPT 6.1 Sol

- Source: xAI / original September 2025 Grok 4 Fast, reasoning mode emphasized with non-reasoning comparison.
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name:** Grok 4 Fast.
- **Short description:** xAI's efficiency-focused large-context reasoning/tool model, distinct from original Grok 4 and later Grok 4.1 Fast. Publisher explicitly says reasoning/non-reasoning are **the same model weights**, steered by system prompts; mode-labelled measurements remain separate within this canonical entry.[1]
- **Provider / IDs:** Launch native `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning`; bare Fast is the reasoning alias in this project. Original xAI Chat Completions/agent integration, gateway `x-ai/grok-4-fast` with reasoning toggle. No separate reasoning-suffix folder or free Zen ID created/claimed.[1][4]
- **Release / current access:** **2025-09-19**, primary launch and evaluators. Exact gateway metadata now has **`endpoints:[]`**, current native model index omits this generation, AA calls it superseded. No exact retirement date or currently invokable provider verified. This report assesses the identified original model, not a successor silently served under another alias.[1][2][3][4][5]
- **Context window:** Original **2M shared total**, independently recorded. Vals configures **2,000,000 generation allowance**, which is neither demonstrated sustained output nor an additive 2M answer plus full prompt. Present gateway metadata supplies no live provider-specific limit.[1][2][3][4]
- **Modalities / tools:** Text/image → text, with file handling documented in evaluator/gateway metadata. Search can ingest external media through tools; that does not establish native video/audio input or non-text generation. Native tools, web/X search and structured integration are separate from always-current parametric knowledge.[1][3][4]
- **Pricing:** Primary launch schedule per 1M: **$0.20 input/$0.50 output below 128K prompt tokens**, **$0.40/$1.00 at or above 128K**, cache reads **$0.05** as listed. AA/Vals record the lower base rates. These are published historical/evaluation tariffs, not a verified currently purchasable endpoint. Consumer free access at launch and expired gateway promotions are not current free API pricing.[1][2][3][4]
- **Architecture / cutoff:** Proprietary, exact parameters/active count and knowledge cutoff not verified. The full seven-page original model card describes general-purpose pretraining, RL/SFT, system prompt and near-final checkpoint evaluations, but does not disclose a precise parameter architecture or universal cutoff.[6]

### Raw benchmarks found

**Identity:** AA selected **Grok 4 Fast (Reasoning)** UUID `573bbd93-114c-4b71-9ede-a73a7d4bdf84`, exact slug `grok-4-fast-reasoning`, estimated current index. Vals reasoning and non-reasoning profiles were inspected separately, both temperature .7/top-p .95/nominal 2M output. The full original seven-page card was read; near-final safety results are not assumed final-production academic measurements.[2][3][6][7]

Agent / tool use:

- **Tau2 65.79% / IFBench 50.54% AA Reasoning**, **TB2.0 29.21% ± 4.85 Vals**. No verified exact TB2.1/TB4/Tau3-Banking/GDPval/Claw-Eval/ClawProBench/MCP-Atlas/Toolathlon/SWE Atlas QnA found; selected AA fields are null, not zero.[2][3]
- Vendor search-enabled **BrowseComp 44.9% / SimpleQA 95.0% / Reka Research Eval 66.0% / BrowseComp-zh 51.2% / X Browse 58.0%**. X Browse is internal, and search-enabled SimpleQA is not unassisted factual recall.[1]
- Publisher launch **Search Arena 1163 Elo / then-#1**, Text Arena then-#8 are **dated preference rankings**, not standardized general-agent task accuracy or today's positions.[1]
- Original card **CyBench 30.0% unguided success**, 40 CTF-style tasks using Inspect. It is neither CyberGym nor a universal hacking/terminal success rate.[6]
- Vals **SAGE 29.76% / MortgageTax 42.09% / LegalBench 80.60% / MedCode 37.38%** support bounded tasks with uneven professional reliability.[3]

Reasoning / knowledge:

- **GPQA Diamond 85.7% vendor / 84.75% AA / 85.35% ± 1.79 Vals**, useful independent agreement.[1][2][3]
- **AIME 2025 92.0% vendor / 89.67% AA**, **HMMT 2025 93.3% vendor**, no tools. **HLE without tools 20.0% vendor / 19.09% AA**, **CritPt 2.86% AA**.[1][2]
- **AA Intelligence Index 17.940 explicitly estimated current**, not the launch-era index or this source's Overall. Vals displayed **56.81% aggregate** is another suite/scale.[2][3]
- **Omniscience accuracy 22.78% / hallucination 68.27% / reliability −29.9333 AA**. Vendor search benchmarks do not erase low calibrated knowledge coverage.[2]
- Card **MASK dishonesty rate 0.47 reasoning / 0.63 non-reasoning**, under its pressure-to-lie setup, uses a near-final checkpoint. These are not ordinary answer hallucination rates or general user-query error probabilities.[6]

Coding / context / visual:

- Vendor **LiveCodeBench January–May 80.0%**, versus **83.17% AA / 78.97% ± 1.10 Vals** under their own versions/settings.[1][2][3]
- **SWE Verified 45.40% ± 2.23 / Vibe Code v1.1 0.00% measured Vals**. The app-building zero is a real suite result, not a missing-data substitution. No exact independently verified SWE-Pro/DeepSWE/SciCode found; selected AA SciCode is null.[2][3]
- Vals non-reasoning **GPQA 62.12% / LiveCodeBench 46.09% / MMLU-Pro 70.34% / SAGE 15.99%**, versus reasoning **85.35% / 78.97% / 79.70% / 29.76%**. Shared weights do not make modes quality-equivalent.[3][7]
- **LCR 73.67% AA**. No verified near-perfect full-2M MRCR/RULER found. Maximum capacity does not establish faithful use of every token.[2]
- **MMMU-Pro 61.79% AA / 72.78% ± 1.07 Vals Reasoning**, versus **63.41% Vals Non-reasoning**; variants/preprocessing differ. No exact numeric native audio/video evidence claimed.[2][3][7]
- Vals aggregate latency **2 min 49 s Reasoning / 6.53 s Non-reasoning** is benchmark-workload timing, not first-token latency. AA selected runtime is empty. Publisher **40% fewer thinking tokens** and **98% lower price for matched benchmark performance** are workload-specific vendor comparisons, not universal speed/cost guarantees.[1][2][3][7]

### Normalized scores (1–100)

- **Tool use: 60/100.** Native search and useful bounded Tau2/terminal tasks, capped by terminal 29.21%, mixed professional evidence and missing harder-agent replication.[1][2][3]
- **Reasoning: 73/100.** Independently supported GPQA/math and HLE around 19–20% establish capable bounded reasoning, capped by CritPt 2.86%, poor calibration and estimated current composite.[1][2][3]
- **Context window: 95/100.** Verified original 2M capacity qualifies for the million-plus band, but no near-perfect maximum-window retrieval or current executable provider supports 100.[1][2][3][4]
- **Multimodal: 74/100.** Real image/file understanding with measured visual evidence, capped by uneven quality and no native audio/video/non-text output.[2][3][4]
- **Coding: 62/100.** Strong short coding exercises coexist with repair 45.4%, terminal 29.21% and app-building zero, limiting autonomous engineering.[2][3]
- **Cost efficiency: 93/100.** Original low paid tariffs and token-efficiency design offer strong historical value, capped by long-prompt price step, tools, mode tradeoffs and no verified current provider.[1][2][3][4]
- **Overall Score: 73/100.** Half-up mean `(60 + 73 + 95 + 74 + 62) / 5 = 72.8`; cost excluded. Historically suited to inexpensive large-context bounded search/reasoning, with significant coding/autonomy and current-access limitations.

### Research trail and sources

Fresh Bing RSS `"Grok 4 Fast" official benchmark` returned generic Grok links; Google `"Grok 4 Fast" independent benchmark review` an interstitial; DuckDuckGo `"Grok 4 Fast" reasoning context pricing` supplied exact primary/evaluator/gateway leads, alongside secondary pages conflating newer prices/context. Primary launch/table/same-weight statement, full seven-page model card, exact AA reasoning record, Vals both modes and live empty provider list were compared. Initial AA request timed out, then the same exact record succeeded; no missing result was invented. No peer findings consulted.

[1]: https://x.ai/news/grok-4-fast "Original September 19 launch, exact pass@1/search tables, shared weights, 2M and tiered historical prices"
[2]: https://artificialanalysis.ai/models/grok-4-fast-reasoning "Exact selected Reasoning record, estimated-index flag and independent metrics"
[3]: https://www.vals.ai/models/grok_grok-4-fast-reasoning "Independent Reasoning repair/app/academic/terminal profile and settings"
[4]: https://openrouter.ai/api/v1/models/x-ai/grok-4-fast/endpoints "Exact identified model and image/file metadata but empty current providers"
[5]: https://docs.x.ai/developers/models "Current native index omits this original generation; no exact retirement date inferred"
[6]: https://data.x.ai/2025-09-19-grok-4-fast-model-card.pdf "Original seven-page card read in full; near-final checkpoint, CyBench and MASK methodology"
[7]: https://www.vals.ai/models/grok_grok-4-fast-non-reasoning "Separately inspected non-reasoning quality and workload latency"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-20 UTC
- Method: Independent fresh searches, exact publisher launch/full model card, directly attributed independent mode-specific evaluator records and current distribution checks. Scores are editorial normalized 1–100 interpretations, not vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
