# Kimi K2.5 — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`kimi-k2.5`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot 2026 年 1 月的**开放权重原生多模态 MoE**（1T 总 / 32B 激活，384 专家，MLA，MoonViT 400M）—— "Kimi K2.5 Instant, K2.5 Thinking, K2.5 Agent, and K2.5 Agent Swarm (Beta)" 同族多形态，Agent Swarm 可调度"up to 100 sub-agents"、"up to 1,500 tool calls"，把执行时间压缩最多 4.5×。**Modified MIT 许可**。它是 K2.6 / K2.7-Code / K3 的上游基座。
- **Provider / access:** Moonshot API `kimi-k2.5`；OpenRouter `moonshotai/kimi-k2.5`（canonical `moonshotai/kimi-k2.5-0127`）；Hugging Face `moonshotai/Kimi-K2.5`；OpenCode Zen `opencode/kimi-k2.5`（**Zen 已于 2026-08-05 标记弃用**）。
- **Release / knowledge:** released **2026-01-27**（AA "released on January 27, 2026"；BenchLM "Jan 27, 2026"；HF 仓库创建于 2026-01-01）。Knowledge cutoff: **未公布**。
- **IDs:** `kimi-k2.5`（Moonshot）、`moonshotai/kimi-k2.5`（OpenRouter）、`moonshotai/Kimi-K2.5`（HF）。
- **Context window:** **256K**（262,144；OpenRouter `max_completion_tokens` 235,929；models.dev 记 32,768 / 65,536）。
- **Modalities:** 文本+图像+视频 → 文本（AA "supports text, image, and video input"；OpenRouter 的架构串只写 `text+image`）。
- **Reasoning controls:** **仅 thinking 开/关**（`thinking.type` enabled/disabled + `thinking.keep`）—— **没有 `reasoning_effort`**（那是 K3 的顶层字段）。
- **Pricing (as of 2026-10-19, per 1M tokens):** AA 跨 provider 中位 **$0.60 in / $2.75 out**，cache 折扣 42%，blended 7:2:1 $0.64；Moonshot 上公布过的价格是 **$0.60 / $3.00**；OpenRouter $0.50 / $2.50（cache read $0.15）；Zen $0.60 / $3.00（cache read $0.10）。**无 K2.5 的 batch id**（只有 `kimi-k3:batch`）。
- **Architecture:** MoE 1T/32B，61 层（1 稠密），attn dim 7168，384 专家（8 选中 + 1 共享），词表 160K，MLA，SwiGLU，MoonViT 400M，**Modified MIT**。

### Raw benchmarks found

> 厂商卡片数字标为 "vendor"（K2.5 Thinking）；Artificial Analysis、BenchLM、swebench.com、ARC Prize 为独立来源。

Reasoning / knowledge (vendor, K2.5 Thinking):

- HLE-Full **30.1** / 带工具 **50.2**；AIME 2025 **96.1**；HMMT Feb-25 **99.4**；IMO-AnswerBench **81.8**；GPQA-D **87.6**；MMLU-Pro 87.1；SciCode 48.7；LiveCodeBench v6 **85.0**；Longbench v2 61.0；AA-LCR 70.0

Coding (vendor): SWE-bench Verified **76.8**；SWE-bench Pro 50.7；SWE-bench Multilingual 73.0；Terminal Bench 2.0 **50.8**；PaperBench 63.5；CyberGym 41.3；OJBench(cpp) 57.4

Vision (vendor): MMMU-Pro **78.5**；CharXiv(RQ) 77.5；MathVision **84.2**；MathVista(mini) **90.1**；ZeroBench 9（带工具 11）；OCRBench 92.3；OmniDocBench 1.5 88.8；InfoVQA 92.6；SimpleVQA 71.2；WorldVQA 46.3；VideoMMMU 86.6；MMVU 80.4；MotionBench 70.4；VideoMME **87.4**；LongVideoBench 79.8；LVBench 75.9

Independent:

- **Artificial Analysis:** Intelligence Index **23\***（**估计值**，#39/121），78.0 t/s (#39/78)，TTFT 1.80s，$0.60/$2.75，42% cache 折扣，1T/32B，Modified MIT；per-eval（本次记录）TB 2.1 **45.69%**、TB-Hard 34.85%、τ² 95.91%、τ³ 14.23%、LCR 78.0%、IFBench 70.20%、HLE 30.72%、GPQA 87.88%、CritPt **3.14%**、APEX 11.50%、MMMU-Pro 75.38%、GDPval 839.49、Omniscience -7.33 / acc 35.22% / halluc 65.68%
- **OpenRouter 内嵌 AA 快照:** intelligence 23.5 / coding 46.8
- **swebench.com:** "Kimi K2.5 high", mini-SWE-agent v2.0.0 —— **70.80** resolved，$0.15，2026-02-17，rank 12
- **ARC Prize:** leaderboard 行 `| Kimi K2.5 | 2026-01-27 | 65.3%, $0.150/task | 11.8%, $0.280/task |`（列头未确认）
- **BenchLM:** 56.18（#64/226，估计，15 行）；Agentic 38.8 (#71/130)、Coding 64.9、Reasoning 66.3、Multimodal 69 (#34/55)、Knowledge 48.9 (#87/186)；non-reasoning 兄弟 53.05（68 行）
- **无 Vals AI、tbench.ai、Epoch AI 行**

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 68/100.** Terminal-Bench 2.0 **50.8%** (vendor) / 45.69% (AA), τ²-bench 95.91% (AA), MCP Atlas: 未列, Toolathlon: 未列, Claw-Eval: 未列, AutomationBench: 未列, GDPval-AA 839.49, APEX 11.50%, JobBench: 未列. The agent-swarm capability (100 sub-agents, 1,500 tool calls, 4.5× faster execution) is a vendor product claim with no published benchmark behind it. Capped by the rubric's anchors (TB2.1 ~88%+ → 45.7–50.8%; τ3 ~50%+ → 14.23%; GDPval ~1750+ → 839.49) and by the absence of any MCP-Atlas, Toolathlon or Claw-Eval row.
- **Reasoning: 76/100.** AIME 2025 **96.1%**, HMMT Feb-25 **99.4%**, IMO-AnswerBench 81.8%, GPQA-D 87.6–87.88%, MMLU-Pro 87.1%, LongBench v2 61.0%, AA-LCR 70.0%, IFBench 70.20%. Capped by HLE at 30.1–30.72%, CritPt **3.14%**, the AA Intelligence Index of **23\*** (an *estimate* with no published per-evaluation set beyond the values above), and by the low 35.22% Omniscience accuracy.
- **Context window: 84/100.** 262,144 tokens with a 32,768–65,536 default output — the rubric's 200K–500K band (65–84) — supported by the vendor's LongBench v2 61.0% and an ARC Prize row showing $0.150/task. No MRCR / RULER / GraphWalks measurement exists.
- **Multimodal: 86/100.** Text + image + video in, text out, with one of the strongest native-vision rows in the dataset: VideoMME **87.4%**, VideoMMMU 86.6%, LongVideoBench 79.8%, MMVU 80.4%, MathVista(mini) **90.1%**, MathVision 84.2%, MMMU-Pro 78.5%, OmniDocBench 1.5 88.8%, InfoVQA 92.6%, OCRBench 92.3%. The rubric's "+video/PDF = 75–90" band is met near its top; not 90+ because the vision evidence is entirely vendor-published.
- **Coding: 74/100.** SWE-bench Verified **76.8%** (vendor) / **70.80** (swebench.com, mini-SWE-agent), SWE-bench Pro 50.7%, Multilingual 73.0%, LiveCodeBench v6 **85.0%**, Terminal Bench 2.0 50.8%, PaperBench 63.5%, SciCode 48.7%, CyberGym 41.3%. Capped by the absence of any DeepSWE, Terminal-Bench 4.0, FrontierCode, FrontierSWE or CursorBench row, and by SWE-bench Pro at 50.7% (well under the rubric's 74% anchor).
- **Cost efficiency: 88/100.** The evaluated route is **$0.60 in / $2.75 out** per 1M (cache read $0.10–$0.15; Moonshot's last published rate was $0.60/$3.00) — inside the rubric's "~$1.25/$4.25 ≈ 88" band, with a **Modified MIT** licence and 366,917 downloads/month for the weights. The deductions are the 42% cache discount (the weakest of any model priced here) and the fact that **no batch id exists** for K2.5, so there is no 50% bulk path.
- **Overall Score: 77.6/100.** (68 + 76 + 84 + 86 + 74) / 5 = 77.6 — best-fit: 2026 年 1 月的**开放权重原生多模态基座**（VideoMME 87.4%、MathVista 90.1%、AIME 96.1%、Modified MIT、SWE-bench 70.8–76.8%），视频/文档理解与数学是强项；但 agent 与代码偏弱（TB 2.0 ~50.8%、CyberGym 41.3%、CritPt 3.1%、APEX 11.5%），且它已成为被 K2.6 / K2.7-Code / K3 取代的上一代。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **SWE-bench Verified — 76.8% (vendor card) vs 70.80 (swebench.com, mini-SWE-agent).**
2. **Context — 256K (card/AA) vs "260k tokens" (AA FAQ) vs 262,144 (OpenRouter) vs 32,768 / 65,536 (models.dev).**
3. **Price — $0.60/$2.75 (AA median) vs $0.60/$3.00 (Moonshot/Zen) vs $0.50/$2.50 (OpenRouter).**
4. **AA index 23\* (estimated) vs 23.5 (OpenRouter's embedded snapshot).**
5. **BenchLM labels K2.5 "Proprietary" / "Weights not published"** — contradicted by the HF repository and the AA licence field (Modified MIT). The weights are open; BenchLM's row is wrong.
6. **Max output — 32,768 / 65,536 / 235,929** depending on the source; the 32,768 figure is the API default.
7. **The ARC Prize row's column headers could not be confirmed** (65.3% / 11.8% with per-task costs), so it is reported as an unlabelled leaderboard row rather than as ARC-AGI-1/2 values.
8. **No Vals AI, tbench.ai or Epoch AI row exists for K2.5**, and Moonshot's K2.5 API doc page has been removed (only a generic quickstart remains), as has the model from the rate-limit docs.

### Notes on identity

- `kimi-k2.5` is the **base of the K2 line**: K2.6 (April 2026) shares "the same architecture as Kimi-K2.5", K2.7-Code is a post-K2.6 coding fine-tune, and Kimi K3 (July 2026) is a separate 2.8T KDA-attention model. This folder therefore tracks the earliest open-weight Kimi of the generation.
- The **four surfaces** (Instant / Thinking / Agent / Agent Swarm) are modes of one model family, not separate checkpoints; only "Thinking" has a published benchmark table, and the Agent Swarm claims (100 sub-agents, 1,500 tool calls, 4.5× faster) are unbenchmarked.
- Zen deprecated this route on 2026-08-05, so the live access paths are Moonshot's own API and OpenRouter.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — the `moonshotai/Kimi-K2.5` Hugging Face card (architecture, licence, the full vendor benchmark table), Moonshot's Kimi blog and platform docs, Artificial Analysis (model page with its per-evaluation payload), the BenchLM evidence ledger, the swebench.com leaderboard, the ARC Prize leaderboard row, OpenRouter and OpenCode Zen, and negative verification at Vals AI, tbench.ai and Epoch AI. The BenchLM "proprietary" mislabelling and the SWE-bench harness spread are called out explicitly. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K2.5.md`, using the same headings.
