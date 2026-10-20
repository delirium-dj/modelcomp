# Qwen3.5 — findings by MiniMax M3.1 Flash

- Source: Alibaba (Qwen3.5 **series** — flagship `qwen3.5-397b-a17b` / hosted `qwen3.5-plus`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 (series entry)
- **Short description:** **本 slug 不指向单一模型** —— 交叉核验 OpenCode Zen（仅 `qwen3.5-plus`）、OpenRouter（`qwen3.5-plus-20260420` / `-02-15` / `qwen3.5-397b-a17b` / `qwen3.5-35b-a3b` / `qwen3.5-27b` / `qwen3.5-122b-a10b` / `qwen3.5-9b` / `qwen3.5-flash-02-23`）、models.dev（无裸 id）、Model Studio 型号表（今日仅 `qwen3.5-omni-plus`；`qwen3.5-plus` 已让位给 `qwen3.7-plus` / `qwen3.8-max`）与 AA（`/models/qwen3-5` → 404，仅有 397B-A17B、122B-A10B、35B-A3B、27B、9B、4B、2B、0.8B、Omni Plus）——**不存在名为 "Qwen3.5" 的独立 id**。因此本条目代表**家族**，其旗舰是开放权重的 **Qwen3.5-397B-A17B**，托管版是 **Qwen3.5-Plus**（两者在同一数据集里另有独立条目）。
- **Provider / access:** 家族发布公告 "Qwen3.5: Towards Native Multimodal Agents"（**2026-02-14**）—— "introducing the open-weight of the first model in the Qwen3.5 series, namely Qwen3.5-397B-A17B"；后续成员 27B / 35B-A3B / 122B-A10B（HF 创建于 2026-02-24）与 9B / 4B / 2B / 0.8B（2026-02-27/28）。
- **Release / knowledge:** 家族首发 **2026-02-14**；旗舰权重 **2026-02-16**（AA）；Plus 快照 2026-02-15 与 2026-04-20。Knowledge cutoff: **未公布**。
- **IDs:** 旗舰 `qwen3.5-397b-a17b`；托管 `qwen3.5-plus` / `qwen3.5-plus-20260420` / `qwen3.5-plus-02-15`；另有 `qwen3.5-35b-a3b` / `-27b` / `-122b-a10b` / `-9b` / `-flash-02-23` / `-omni-plus`。
- **Context window:** 旗舰 262,144 原生（可扩展至 1,010,000）；Plus 托管版默认 1M。
- **Modalities:** 文本+图像+视频 → 文本（旗舰）；Omni Plus 另含音频。
- **Reasoning controls:** 默认 thinking，可用 `chat_template_kwargs: {"enable_thinking": false}` 关闭；无 `/think` 软开关；`reasoning: true`（models.dev）。
- **Pricing (as of 2026-10-19, per 1M tokens, Model Studio vs OpenRouter):** 397B **$0.60 / $3.60** vs **$0.39 / $2.34**；Plus $0.40/$2.40 vs $0.26/$1.56（02-15）与 $0.30/$1.80（04-20）；Zen Plus $0.20/$1.20（cache $0.02、写 $0.25）；Flash $0.10/$0.40 vs $0.065/$0.26；35B-A3B $0.25/$2.00 vs $0.15/$1.00；122B-A10B $0.40/$3.20 vs $0.26/$2.08；27B $0.30/$2.40 vs $0.27/$2.16；9B $0.10/$0.15。
- **Architecture:** 旗舰 397B/17B，Apache-2.0（其余成员许可未核实）。

### Raw benchmarks found

> 家族公告与权重卡片的数字标为 "vendor"；Artificial Analysis 内嵌快照与 BenchLM 为独立来源。

Family (vendor, 397B-A17B column): MMLU-Pro **87.8**、MMLU-Redux 94.9、SuperGPQA 70.4、C-Eval 93.0、IFEval **92.6**、IFBench 76.5、MultiChallenge 67.6、AA-LCR 68.7、LongBench v2 63.2、GPQA **88.4**、HLE **28.7**、HLE-Verified 37.6、LiveCodeBench v6 **83.6**、HMMT Feb-25 **94.8** / Nov-25 92.7、IMOAnswerBench 80.9、AIME26 **91.3**、BFCL-V4 72.9、TAU2-Bench **86.7**、VITA-Bench 49.7、DeepPlanning 34.3、Tool Decathlon 38.3、MCP-Mark 46.1、HLE 带工具 48.3、BrowseComp 69.0/78.6、BrowseComp-zh 70.3、WideSearch 74.0、Seal-0 46.9、MMMLU 88.5、MMLU-ProX 84.7、NOVA-63 59.1、INCLUDE 85.6、Global PIQA 89.8、PolyMATH 73.3、WMT24++ 78.9、MAXIFE 88.2、SWE-bench Verified **76.4**、SWE-bench Multilingual 69.3、SecCodeBench 68.3、Terminal Bench 2 **52.5**、MMMU 85.0、MMMU-Pro 79.0、MathVision 88.6、Mathvista(mini) 90.3、We-Math 87.9、OSWorld-Verified 62.2、ScreenSpot Pro 65.6、V\* 95.8/91.1、BabyVision 52.3/43.3、MMLongBench-Doc 61.5、CC-OCR 82.0

Independent:

- **AA (via OpenRouter embed):** 397B intelligence **21.4**、27B 22.9、35B-A3B 19.3、122B-A10B 17.7、9B 13.3
- **BenchLM / BenchAlign:** Qwen3.5 397B **55.42**（62 行，released Feb 16 2026，$0.60/$3.60，ctx 标 128K）；Qwen3.5 Plus **48.9**（2 行，Mar 4 2026，1M ctx，$0.40/$2.40）；35B-A3B 45.8（20 行，262K）；27B **48.64**（20 行）
- **LMArena:** 397B 文本 **rank 94，1442 ±3**（81/109）
- **无 swebench.com、ARC Prize、Epoch AI、Vals AI、tbench.ai 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). **Scoring basis note:** a family slug has no single benchmark set, so the score is anchored on the **flagship weights (397B-A17B)**, whose vendor table and BenchLM rows are quoted, with the hosted Plus build's deltas noted. This entry partly duplicates `model/qwen-3.5-397b/` (the open weights) and `model/qwen-3.5-plus/` (the hosted build) — see the identity note.

- **Tool use: 66/100.** TAU2-bench **86.7%**, BFCL-V4 72.9%, MCP-Mark 46.1%, BrowseComp 69.0/78.6, WideSearch 74.0%, Tool Decathlon 38.3%, Terminal Bench 2 **52.5%**, DeepPlanning 34.3%, GDPval-AA 792.97 (397B AA 记录). Capped by the rubric's anchors (TB2.1 ~88%+ → 52.5%; τ3 ~50%+ → 13.40%; GDPval ~1750+ → 792.97), by AutomationBench at 6.89% (AA), and by the absence of any Toolathlon, MCP-Atlas or Claw-Eval row.
- **Reasoning: 74/100.** AIME26 **91.3%**, HMMT Feb-25 **94.8%**, IMOAnswerBench 80.9%, MMLU-Pro 87.8%, MMLU-Redux 94.9%, GPQA 88.4%, IFEval 92.6%, IFBench 76.5%, MMLU-ProX 84.7%, plus an LMArena 1442 Elo (#94/109) and an AA intelligence index of **21.4**. Capped by HLE 28.7%, CritPt 1.71%, MLCR-AA 0%, and by the measured index of 21.4 — "below average in intelligence" against the family's own marketing.
- **Context window: 90/100.** 262,144 native (extensible to 1,010,000 via YaRN) on the weights, 1M by default on the hosted Plus build, 65,536 max output, plus a published LongBench v2 63.2%. The rubric's 200K–500K band (65–84) is lifted by the 1M hosted default and the extension path; one point below because **no MRCR / RULER / GraphWalks row exists** for any member.
- **Multimodal: 87/100.** Text + image + video in, text out, with a broad published vision suite: MMMU **85.0%**, MMMU-Pro 79.0%, Mathvista(mini) **90.3%**, MathVision 88.6%, V\* 95.8/91.1, We-Math 87.9%, OmniDocBench-class CC-OCR 82.0, OSWorld-Verified 62.2%, ScreenSpot Pro 65.6%, BabyVision 52.3/43.3. The rubric's "+video/PDF = 75–90" band is met at its top; not 90+ because every row is vendor-published and the Omni Plus member (with audio) is a different SKU.
- **Coding: 70/100.** LiveCodeBench v6 **83.6%**, SWE-bench Verified **76.4%**, SWE-bench Multilingual 69.3%, SecCodeBench 68.3%, Terminal Bench 2 **52.5%**, AA Coding Index implied by intelligence 21.4. Capped by the absence of any DeepSWE, SWE-bench Pro-independent, FrontierCode, FrontierSWE or CursorBench row, and by the measured Terminal-Bench 4.0 at **0%** (AA, flagship).
- **Cost efficiency: 88/100.** The evaluated route is the Alibaba API at **$0.60 in / $3.60 out** per 1M for the flagship, with OpenRouter at $0.39/$2.34, the hosted Plus at $0.40/$2.40 (or $0.26/$1.56), and Zen's Plus row at $0.20/$1.20 with a $0.02 cache read — the family's price ladder ($0.10 for the 9B up to $0.60 for the 397B) is the cheapest per-token ladder in this dataset, and the flagship weights are Apache-2.0. The rubric's "~$1.25/$4.25 ≈ 88" band is met; the deduction is that no cache-read price is published for the weights themselves.
- **Overall Score: 77.4/100.** (66 + 74 + 90 + 87 + 70) / 5 = 77.4 — best-fit: **一个以学术能力与原生多模态见长、agent 与代码偏弱的家族**（MMMU 85.0%、MathVista 90.3%、AIME26 91.3%、$0.60/$3.60、Apache-2.0 权重）—— 想用这个家族的 agent 能力应选 Plus/3.7 Plus/3.8 Max，想用它的开放权重数学与视觉能力则选 397B-A17B 本身。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **The slug is a family, not a model.** No provider id, model page or tracker entry named "Qwen3.5" exists; every id carries a size or tier suffix. The entry is therefore scored on the flagship weights, and the duplication with the two sibling folders is stated explicitly rather than hidden.
2. **The measured index contradicts the marketing.** The vendor card leads with MMLU-Pro 87.8 / MMMU 85.0 / AIME26 91.3, while Artificial Analysis puts the same weights at an intelligence index of **21.4** and Terminal-Bench 4.0 at **0%** — an academic-profile model, not an agentic one.
3. **Context — 262,144 (card, AA, LMArena) vs 128K (BenchLM's spec sheet).** BenchLM's row is unsourced.
4. **Price varies by provider and region** (alibaba vs alibaba-cn vs OpenRouter vs Zen) — the Model Studio price anchors the score.
5. **AA index ordering is odd: 27B (22.9) > 397B (21.4) > 35B-A3B (19.3) > 122B-A10B (17.7) > 9B (13.3)** — the smallest model in the family scores highest on AA's composite, which is worth noting before assuming the flagship is the best.
6. **Plus release date — BenchLM "Mar 4, 2026" vs the OpenRouter snapshot ids 2026-02-15 / 2026-04-20.**
7. **Qwen3.6-Plus blog values differ from the 3.5 card** (VITA-Bench 43.7 vs 49.7, AIME26 93.3 vs 91.3, τ² 83.9 vs 86.7) — the 3.5 card is used and the other blog's numbers are not mixed in.
8. **No swebench.com, ARC Prize, Epoch AI, Vals AI or tbench.ai row exists for any Qwen3.5 member** — the independent evidence is one AA index per size and one LMArena Elo.

### Notes on identity

- `qwen-3.5` is a **family alias**: flagship open weights `Qwen3.5-397B-A17B` (Apache-2.0, tracked in `model/qwen-3.5-397b/`), hosted `qwen3.5-plus` (tracked in `model/qwen-3.5-plus/`), and the size ladder 122B-A10B / 35B-A3B / 27B / 9B / 4B / 2B / 0.8B / Flash / Omni Plus.
- Per the project's family-shorthand rule (every id resolves to a suffixed sibling already tracked), **no new model was scaffolded for this slug** — the folder pre-existed and is reported here as the family entry.
- The family's own line is "Towards Native Multimodal Agents", and the flagship card's own comparison column shows 2.5 Pro and Opus 4.6 Max — i.e. it was positioned against the 2025-Q4 frontier, not the 2026 one.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the Qwen3.5 family announcement, the `Qwen/Qwen3.5-397B-A17B` Hugging Face model card (architecture, licence, the full vendor table), Alibaba Cloud Model Studio's model list and pricing, the OpenRouter and models.dev model catalogues, OpenCode Zen's catalogue, Artificial Analysis's embedded index snapshots, the BenchLM evidence ledger and LMArena, and negative verification at swebench.com, ARC Prize, Epoch AI, Vals AI and tbench.ai. The family-vs-model identity question is documented explicitly in the model card and each score line states which artifact the number belongs to. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.5_Family.md`, using the same headings.
