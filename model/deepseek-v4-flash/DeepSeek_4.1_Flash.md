# DeepSeek V4 Flash — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek V4 Flash (`deepseek/deepseek-v4-flash`; checkpoints "Preview" 2026-04-24 and "0731" July 2026) — retired, see Model card
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-06); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`deepseek-v4-flash`, 42 rows) assigns **no overall score** (unranked); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Third-pass refresh — 2026-10-16** (≥3 independent sources: official Hugging Face model card `deepseek-ai/DeepSeek-V4-Flash-0731`, Artificial Analysis, BenchLM, Vals AI, DeepSeek API docs).
> Biggest correction: **the `deepseek-v4-flash` model ID is retired.** DeepSeek's official Models & Pricing page lists `deepseek-flash` = **DeepSeek-V4.1-Flash**; the legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` are still accepted, but that page states "the corresponding models have been retired, their requests are served by the DeepSeek-V4.1-Flash model and billed at the Flash price." Artificial Analysis also flags the 0731 checkpoint as **deprecated**.
> Newly found rows (official HF card / DeepSeek-V4 technical report / 0731 update): Terminal-Bench 2.1 **82.7%**, Toolathlon-Verified **70.3%**, CyberGym **76.7%**, Agents' Last Exam **25.2%**, AutomationBench **25.1%**, NL2Repo **54.2%**, DeepSWE **54.4%**, DSBench-FullStack **68.7%** / DSBench-Hard **59.6%**, SWE-bench Verified **79%**, SWE-bench Pro **52.6%**, SWE Multilingual **73.3%**, LiveCodeBench Pass@1-COT **91.6%**, Codeforces **3052**, MMLU-Pro **86.2%**, GPQA Diamond **88.1%**, HLE **34.8%**, HMMT Feb 2026 **94.8%**, IMOAnswerBench **88.4%**, MRCR 1M **78.7%**, CorpusQA 1M **60.5%**, ARC-AGI-1 **89.00%**, ARC-AGI-2 **61.4%**. Independently: AA-LCR **79.7%**, AA-GPQA Diamond **90.8%**, AA-HLE **38.6%**, AA-Omniscience Index **-14.3 / accuracy 40.4% / hallucination 91.7%**, AA Coding Index **69.1%**, AA-SciCode **50.3%**, OpenHarmony Bench **53.8%**, VulcanBench v3 **88.4%**, Design Arena Website **1209**; Vals AI — **SWE-bench 88.80% (#11/88)**, **LiveCodeBench 87.26%**, **Vibe Code Bench v1.1 74.74% (#34/112)**, **Terminal-Bench 4.0 18.69%**, **GPQA Diamond 89.9%**, **Vals Index 47.96% (#36/48)**.
> Factual corrections / conflicts: (1) **Modality conflict resolved — this model is text-only.** Artificial Analysis ("does not support image input") and Vals AI ("Image input not supported") both contradict the earlier OpenRouter text+image listing; DeepSeek's pricing page marks Vision **✓ only for `deepseek-flash` (V4.1-Flash)**, not for this checkpoint. Multimodal therefore drops to the text-only floor. (2) **Pricing**: the earlier "$0.15 / $0.60 first-party" figure matches the **successor V4.1-Flash** off-peak cache-miss rate (peak $0.30/$1.20, cache-hit $0.003/$0.006); the retired 0731 checkpoint was billed **$0.44 in / $1.32 out** (AA and Vals agree) with a ~97% cache discount. The two figures refer to different checkpoints. (3) **Output ceiling**: the HF card recommends a **384K** max output for `high`/`max` effort (Vals lists max output 384k), not 393K. (4) **Parameter count**: Artificial Analysis reports **284B total / 13B active**, while the HF repo's file listing shows a **304B** safetensors size (the checkpoint bundles a DSpark speculative-decoding module) — recorded as a conflict. (5) Provider count: one Artificial Analysis FAQ says 19 providers, its providers page lists **17**. (6) Artificial Analysis still scores the 0731 (max) checkpoint at **Intelligence Index 34** (open-weight median 19), unchanged from the prior pass.
> Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731 · https://artificialanalysis.ai/models/deepseek-v4-flash · https://benchlm.ai/models/deepseek-v4-flash-0731 · https://www.vals.ai/models/deepseek_deepseek-v4-flash-0731 · https://api-docs.deepseek.com/quick_start/pricing

## Model card

- **Name:** DeepSeek V4 Flash (checkpoint `0731`; **retired** — the OpenRouter/DeepSeek `deepseek-v4-flash` alias is now served by DeepSeek-V4.1-Flash; the tracked `deepseek-v4-vision-exp` entry was a separate vision variant, now also retired)
- **Short description:** DeepSeek's open-weights fast/cheap MoE reasoning model — MIT-licensed, 284B total / 13B active, 1M-token context, very high throughput — deliberately positioned below V4 Pro / V4.1 Flash on quality. **Folder note:** this folder was created empty by a discovery pass and has no `meta.json` yet (`pnpm sync` auto-scaffolds one); I did not create `meta.json`.
- **Provider / access:** first-party DeepSeek API (ID retired, see above) plus ~17 providers (Artificial Analysis); OpenRouter slug `deepseek/deepseek-v4-flash`; weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash-0731`). Reasoning (thinking) variants are tracked separately; tool calling and JSON mode supported.
- **Release / knowledge:** Preview checkpoint 2026-04-24 (BenchmarkList), "0731" revision **2026-07-31** (Artificial Analysis, Vals, HF), final listing 2026-09-10 (llm.ing); knowledge cutoff 2025-05 (llm.ing).
- **IDs:** `deepseek/deepseek-v4-flash` (OpenRouter, legacy alias); weights `deepseek-ai/DeepSeek-V4-Flash-0731`. No OpenCode Zen Free ID.
- **Context window:** 1,000,000 tokens; max output **384K** tokens (HF card; Vals).
- **Modalities:** **text in / text out — image input is NOT supported** (Artificial Analysis and Vals AI agree; the earlier OpenRouter text+image listing is contradicted). Reasoning yes (`reasoning_effort` = low / high / max); tool calls and JSON mode yes. No audio or video.
- **Pricing (as of 2026-10-16):** retired 0731 checkpoint billed **$0.44 in / $1.32 out** per 1M with a ~97% cache discount (AA, Vals); self-hosted routes vary widely (blended from ~$0.04 at DeepInfra to ~$0.24 at Novita). The successor `deepseek-flash` (V4.1-Flash) is $0.15/$0.60 off-peak cache-miss / $0.30/$1.20 peak. MIT weights allow free self-hosting.
- **Architecture:** Mixture of Experts, **284B total / 13B active** parameters (AA; HF safetensors listing shows 304B including the DSpark draft module), MIT license, open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.7%** (official HF/0731 update); Toolathlon-Verified: **70.3%** (official); AutomationBench Public: **25.1%** (official)
- CyberGym: **76.7%** (official); Agents' Last Exam: **25.2%** (official, 105-task ALE-CLI split); NL2Repo: **54.2%** (official)
- TAU3-Bench: **73.7** (rank 1 of 13); DABstep: **100.0%** (rank 1 of 24); ATRBench: **23.7%** (rank 1 of 8)
- Tau2-Bench Telecom: **95.6%**; Tau3-Banking: **39.4%**; GDPval-AA: **Elo 1189** (vendor) / **46.7%** normalized (AA); MCP Atlas **69%**; BrowseComp **73.2%**; HLE w/ tools **45.1%**
- Toolathlon: **47.8%** (technical report); AutomationBench: **18.1%** (older snapshot); ClawBench: **2.3%** (rank 5 of 5); MazeBench: **0%** (ASCII+tools); SmartHome-Bench **85.2%**; PinchBench **91.3%**; MultiChallenge **63.5%**
- Artificial Analysis Agentic Index: **41.7** (was 41.0)

Reasoning / knowledge:

- GPQA Diamond: **88.1%** (technical report) / **89.9%** (Vals) / **90.8%** (AA independent); HLE: **34.8%** (technical report) / **38.6%** (AA)
- MMLU-Pro: **86.2%** (report and Vals agree); Chinese-SimpleQA **78.9%**; Artificial Analysis Intelligence Index: **34** (0731 max, open-weight median 19; #13 of 120) / **34.3** (llm.ing mirror)
- ARC-AGI-1: **89.00%**; ARC-AGI-2: **61.4%** (ARC Prize verified; also BenchLM)
- AA-Omniscience Index **-14.3** / accuracy **40.4%** / hallucination rate **91.7%**; CritPt **16.6%** (AA)
- Math: HMMT Feb 2026 **94.8%**, IMOAnswerBench **88.4%**, Apex **33.0%**, Apex Shortlist **85.7%** (technical report); Codeforces **3052**
- LMArena: **1423 Elo** thinking (2026-07-30) and **1432** (2026-09-13)

Multimodal:

- **No vision or audio capability** — Artificial Analysis ("does not support image input") and Vals AI ("Image input not supported") confirm text-only. The only related row is Design Arena Website **1209** (web-UI generation, text output), not a vision score.

Coding:

- LiveCodeBench Pass@1-COT: **91.6%** (technical report) / **87.26%** (Vals); SWE-bench Verified **79%** (technical report) / **88.80%** (Vals, #11/88); SWE-bench Pro **52.6%**; SWE Multilingual **73.3%**
- DeepSWE: **54.4%** (official 0731 update); DSBench-FullStack **68.7%**, DSBench-Hard **59.6%** (internal sets); NL2Repo **54.2%**; Vibe Code Bench v1.1 **74.74%** (Vals)
- AA Coding Index **69.1%**; AA-SciCode **50.3%**; VulcanBench v3 **88.4%**; OpenHarmony Bench **53.8%**; Terminal-Bench 4.0 **18.69%** (Vals); ProgramBench **0.00%** (Vals); IOI **32.72%** (Vals); Code Migration **38.63%** (Vals)

Long context:

- **MRCR 1M 78.7%** and **CorpusQA 1M 60.5%** (technical report) plus **AA-LCR 79.7%** are now published for the 1M window; no ≥98% needle-at-512K result.
- Speed and cost profile: **173.6 tokens/s** (#8 of 76), **$0.22** per Artificial Analysis Intelligence-Index task, 240M output tokens — "notably fast, however very verbose" (AA); successor V4.1-Flash is the current `deepseek-flash`.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 82.7% (official), Toolathlon-Verified 70.3%, TAU3-Bench 73.7, DABstep 100.0%, Tau2-Bench Telecom 95.6% and CyberGym 76.7% sit in the top decile of agentic harnesses; capped by AutomationBench 25.1%, Agents' Last Exam 25.2%, MazeBench 0% and ClawBench 2.3%.
- **Reasoning: 66/100.** GPQA Diamond 88.1–90.8% approaches the 90%+ anchor, HLE 34.8–38.6%, ARC-AGI-2 61.4% and ARC-AGI-1 89.00% are strong for a Flash tier, and the AA Intelligence Index of 34 (median 19) confirms upper-mid placement; capped by CritPt 16.6% and a very high AA-Omniscience hallucination rate (91.7%).
- **Context window: 95/100.** A verified 1M-token window with a 384K output ceiling, open weights and now-published retrieval (MRCR 1M 78.7%, AA-LCR 79.7%, CorpusQA 1M 60.5%); below 100 only because no ≥98% retrieval at 512K+ is reported.
- **Multimodal: 15/100.** Text out only; image input is now **confirmed unsupported** by both Artificial Analysis and Vals AI, so it sits at the text-only floor (lowered from 30).
- **Coding: 78/100.** LiveCodeBench 91.6% (official), SWE-bench Verified 79% (official) / 88.80% (Vals) and SWE-bench Pro 52.6% are excellent; DeepSWE 54.4%, Vibe Code Bench 74.74%, IOI 32.72% and ProgramBench 0.00% cap it.
- **Cost efficiency: 90/100.** Retired-checkpoint first-party $0.44/$1.32 (~$0.22 per AA task) with a ~97% cache discount, blended self-host routes from ~$0.04, and MIT-licensed weights for free self-hosting; not $0 on any hosted API.
- **Overall Score: 68/100.** Mean of the five quality dimensions (84 + 66 + 95 + 15 + 78) / 5 = 67.6 → **68**; best fit is cheap, fast, long-context coding and tool-heavy agent work, now text-only and superseded by DeepSeek V4.1 Flash.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Hugging Face model card `deepseek-ai/DeepSeek-V4-Flash-0731` (and the DeepSeek-V4 technical report it links), Artificial Analysis, BenchLM, Vals AI and DeepSeek's Models & Pricing page, adding the official 0731 agentic/coding rows (Terminal-Bench 2.1, Toolathlon-Verified, CyberGym, NL2Repo, DeepSWE, DSBench), the first long-context retrieval rows (MRCR 1M, CorpusQA 1M, AA-LCR), AA-Omniscience/CritPt and Vals Index rows, resolving the image-input conflict to text-only, correcting the pricing (different checkpoint) and output-ceiling figures, and flagging the retirement of the `deepseek-v4-flash` ID, the 284B-vs-304B parameter dispute and the provider-count discrepancy. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
