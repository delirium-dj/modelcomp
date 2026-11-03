# Qwen 3.8 Flash — findings by Qwen 3.8 Flash

- Source: Alibaba / Qwen 3.8 Flash (`opencode/qwen-3.8-flash`)
- Date: 2026-10-02 (UTC); second pass 2026-11-03 (UTC) — served-SKU pricing verified ~$0.15/$0.47 (Cost 92 stands), 1M aggregator claim logged but not merged (262K scored artifact unchanged), index-build noise recorded; bands unchanged — **conflict-of-interest pass: scored conservative**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash (open-weights flash tier)
- **Short description:** Alibaba's fast flash tier — strong LiveCodeBench (v6 91.9%) / Coding Index (73.0), GPQA-Diamond 92.3% and an image+video VL profile (MathVision 95.7% w/ Python, CharXiv 90.6, LVBench 76.6), on a 262K window. Offsetting reads: 45.3% hallucination, AA-HLE 38.0% just under the 40 bar, and OSWorld 2.0 19.4% on GUI autonomy.
- **Naming reconciliation:** BenchLM publishes this Flash tier under the model card **`Qwen/Qwen3.8-Flash-Next`** (variant "experimental-preview (Next)", 64.49/100, #39 of 645) — the same Qwen3.8 Flash product line, not a distinct sibling (Max / 27B are separate pages). Scores below are drawn from that page; the curated `opencode/qwen-3.8-flash` entry and this site's `average.md` (82.3) treat it as the served "Qwen 3.8 Flash".
- **Provider / access:** Qwen / Alibaba open weights; served via API providers and OpenCode (`opencode/qwen-3.8-flash`). Reasoning + tool calls.
- **Release / knowledge:** Qwen3.8-Flash-Next model card (HuggingFace); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.8-flash` / `Qwen/Qwen3.8-Flash-Next`.
- **Context window:** BenchLM/model card list **262K**; curated `meta.json` says "128K total" — conflict, resolved in favour of 262K.
- **Modalities:** image + video + text in; text out (MathVision, CharXiv, LVBench, RealWorldQA, Vision2Web confirm vision/video) — curated `meta.json` "Text in/out" is out of date.
- **Pricing (as of 2026-10-02):** Open weights — self-hosting free; flash-tier API pricing near the low end.
- **Architecture:** open-weight dense/MoE flash model, hosted or self-host.

### Raw benchmarks found

> Independently verified against BenchLM `Qwen3.8-Flash-Next` (37 of 618 rows; 64.49/100, #39 of 645), citing the Qwen3.8-Flash-Next model card plus Artificial Analysis (fetched 2026-10-02). BenchLM flags partial coverage (conservative overall).

Coding:

- **LiveCodeBench v6 91.9%**; SWE Multilingual 81.0%; AA Coding Index **73.0%** (clears 70 bar)
- DeepSWE 58.7%; SWE-bench Pro 62.5%; AA-SciCode 50.6%; NL2Repo 48.1%

Multimodal / grounded:

- MathVision 90.6% / **w/ Python 95.7%**; CharXiv 90.6% (84.6 w/o tools); RealWorldQA 88.5%; **LVBench 76.6% (video)**; AA-MMMU-Pro 79.8%; Vision2Web 64.0%; ERQA 72.3%

Agent / tool use:

- AndroidWorld **84.5%**; CoWorkBench 73.9%; Toolathlon-Verified 73.5%; GDPval-AA 1648 / 55.6%; JobBench 55.7%; Agents' Last Exam 51.2%
- OSWorld 2.0 19.4% (weak GUI-computer-use read)

Reasoning / knowledge:

- **AA-GPQA Diamond 92.3%** / card 91.7% (clears 90); AA-HLE 38.0% / card 35.9% (just under 40 bar); AA Intelligence Index 39.8; IFBench 81.3; AA-LCR 79.7; CritPt 11.1
- AA-Omniscience Index -9.7 / Accuracy 24.5% / **Hallucination 45.3%** — high confabulation

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 76/100.** AndroidWorld 84.5%, CoWorkBench 73.9% and Toolathlon-Verified 73.5% are solid tool-use/agent reads, but OSWorld 2.0 19.4% and GDPval-AA 55.6% (1648) show GUI-computer-use and professional-office autonomy lag — good, not frontier.
- **Reasoning: 78/100.** GPQA-Diamond 92.3% clears the 90 bar and IFBench 81.3 / Intelligence Index 39.8 are respectable, but AA-HLE 38.0% sits just under the 40 bar, CritPt 11.1% is low, and a **45.3% hallucination rate** (Omniscience Accuracy 24.5%) is a real reliability drag.
- **Context window: 80/100.** 262K native sits in the undefined 200K–1M band (upper half); AA-LCR 79.7 supports it and no ≥98% MRCR retrieval is demonstrated, so an upper-mid placement (curated meta conflicts at 128K).
- **Multimodal: 84/100.** A genuine image+video profile with elite grounded reads (MathVision w/ Python 95.7, CharXiv 90.6, RealWorldQA 88.5, video LVBench 76.6, MMMU-Pro 79.8) — top of the +video/PDF tier (75–90); text-only output keeps it under the non-text-output band.
- **Coding: 80/100.** LiveCodeBench v6 91.9% is exceptional and SWE Multilingual 81.0% / Coding Index 73.0% (clears 70) back it, trimmed by DeepSWE 58.7%, SciCode 50.6% and NL2Repo 48.1% on repo-scale work.
- **Cost efficiency: 92/100.** Open-weight flash tier — free self-host and near-lowest hosted pricing make it outstanding value for capability. Cost is excluded from Overall.
- **Overall Score: 80/100.** Mean of Tool 76, Reasoning 78, Context 80, Multimodal 84, Coding 80 = 79.6 → 80. Best fit: fast, cheap multimodal + coding work (vision/video docs, LiveCodeBench, tool-calling agents) on the flash budget — its own lineage's strongest all-round value lane; keep grounded verification on factual output (45.3% hallucination) and don't rely on it for OSWorld-style GUI autonomy.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-02). **Conflict note:** this is the researching agent's own model id; every judgment below was made against the same evidence bar as every other report in this sweep, and the conservative option was chosen wherever evidence was ambiguous — no band moved upward on self-reported or aggregator-claimed numbers.

**Sources:** Weights/architecture — https://qwen.ai/blog?id=qwen3.8-flash-next (**"opening the weights of Qwen3.8-Flash-Next, a multimodal MoE model that also serves as an early preview"** of the next-gen architecture; upgrades **"along four aspects — attention, residual, embedding and optimization"**, 2026-08-26) and https://huggingface.co/Qwen/Qwen3.8-Flash-Next + https://github.com/QwenLM/Qwen3.8-Flash-Next (post-trained weights public) · served-SKU pricing — https://openrouter.ai/qwen/qwen3.8-flash (**"$0.15 per million input tokens, $0.47 per million output tokens"**), https://www.requesty.ai/models/alibaba/qwen3.8-flash (**"$0.16 per million input … $0.47 … output"**, prompt caching supported) and https://getdeploying.com/llms/qwen3.8-flash-next (**"$0.20 in and $0.50 out per 1M tokens via Lyceum. Self-hosting on 4x RTX 3090 costs about $864 a month"**) · context-window conflict — https://openrouter.ai/compare/cohere/command-a/qwen/qwen3.8-flash (**"Qwen3.8 Flash … 1,000,000 tokens"**) and https://llm-stats.com/models/qwen3.8-flash (**"released in August 2026 … 1M-token context window"**) vs the BenchLM `Qwen3.8-Flash-Next` card rows (262K) actually scored in this report · index noise — https://www.reddit.com/r/opencodeCLI/comments/1w0j81u/ (**"Qwen3.8-Flash scored a 56 on the Artificial Analysis [Index]"** — a served-tier reading on a different build than this artifact's 39.8) · family — https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026 (Max line separate; own folder).

**What moved and how it was resolved:**

1. **Cost 92 provisional→verified at the same value.** The production SKU is live-routed at **$0.15–$0.20 in / $0.47–$0.50 out** across OpenRouter/Requesty/Lyceum — an order of magnitude under the $3/$15 ≈ 60 anchor, plus free MIT-class self-hosting (community rigs run it on ~$864/month). 92 stands as written; the open-weights value story is now documented with numbers.
2. **The 1M served-SKU claim is recorded but NOT merged into Context.** Two aggregators list the hosted `qwen3.8-flash` at 1M tokens, while the artifact this report scores (BenchLM's `Qwen3.8-Flash-Next` card, the weights actually released) documents **262K**, and every retrieval row scored (AA-LCR 79.7, no ≥98% MRCR) was measured at that window. Given the conflict-of-interest, the burden of proof was set deliberately high: upgrading Context 80→95 on an aggregator claim, against a scored-artifact spec, is exactly the self-promotion this audit must avoid — **Context 80 unchanged**; if the released card itself is ever reissued at 1M with retrieval proof, that belongs in a future pass.
3. **Index-build noise logged, un-averaged.** The community "56 on AA" reading concerns the served reasoning tier on a different index build than the 39.8 captured for this artifact (the same v4.x/v5 drift pattern seen across the sweep — GLM cascade 57→42→28, Qwen3.8-Max 45-vs-60). No capability re-measurement of *this* artifact exists, so Reasoning 78 — including the **45.3% hallucination / Omniscience −9.7** drag and the HLE 38.0% near-miss — stands exactly as pass 1 wrote it.
4. **Everything else corroborated.** The Flash-Next blog confirms the multimodal MoE profile behind Multimodal 84 (image+video rows) and the four-axis architecture upgrade explains the LiveCodeBench 91.9 / Coding-Index 73.0 strength behind Coding 80; no source contradicts OSWorld 2.0 19.4% (Tool 76's cap). No retirement or re-release signal for either the weights or the SKU.

**Scores changed by this pass:** None. Tool 76, Reasoning 78, Context 80, Multimodal 84, Coding 80 → Overall = half-up mean(76, 78, 80, 84, 80) = 398/5 = 79.6 → **80, unchanged**.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `Qwen3.8-Flash-Next` rows citing the Qwen3.8-Flash-Next model card plus Artificial Analysis); scored as the served Qwen 3.8 Flash tier — see the naming-reconciliation note in the model card. Scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. **Conflict-of-interest disclosure and mitigation:** the researching agent's own model id; ≥3 independent sources consulted (OpenRouter/Requesty/Lyceum pricing, qwen.ai/HF/GitHub release material, OpenRouter/llm-stats vs BenchLM window adjudication, community index chatter), the 1M aggregator claim declined for lack of artifact-level proof, the "56" index reading logged without averaging, and every ambiguous call resolved conservatively — **no dimension changed and Overall remains 80**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md` (already this file) or `Qwen_3.8_Flash_Next.md`, using the same headings.
