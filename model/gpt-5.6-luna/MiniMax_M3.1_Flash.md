# GPT-5.6 Luna — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.6-luna`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI GPT-5.6 三档中的**最低成本档** —— "GPT‑5.6 Luna is designed for cost-sensitive, high-volume workloads"、"our fastest and most affordable model"，以及 "It roughly corresponds to the **nano** model tier used in earlier GPT‑5 families"；OpenAI 自己的说法是它 "will cost **80% less**"（相对 GPT-5.6 的其他档）。它也是 2026-07-30 那次全线降价的最大受益者：**$0.20 in / $1.20 out**（发布价是 $1/$6）。现已 deprecated，被 **GPT-6 Luna** 取代。
- **Provider / access:** OpenAI API `gpt-5.6-luna`（OpenRouter 另列 `gpt-5.6-luna-pro`）—— Chat Completions + Responses + Batch 均支持；OpenRouter `openai/gpt-5.6-luna`；OpenCode Zen `opencode/gpt-5.6-luna`。
- **Release / knowledge:** released **2026-07-09**（AA "released on July 9, 2026"；Vals 记 Jul 9；OpenRouter 创建于 2026-07-09T09:54Z）。Knowledge cutoff **2026-02-16**。
- **IDs:** `gpt-5.6-luna`（OpenAI API）、`openai/gpt-5.6-luna`（OpenRouter）、`opencode/gpt-5.6-luna`（Zen）。
- **Context window:** **1,050,000**（max input 922,000；max output **128,000**）。
- **Modalities:** 输入 文本+图像 → 输出 文本。
- **Reasoning controls:** effort none / low / medium（默认）/ high / xhigh / max。
- **Tools:** web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search.
- **Pricing (as of 2026-10-19, per 1M tokens):** ≤272K **$0.20 in / $0.02 cached / $0.25 cache write / $1.20 out**；>272K **$0.40 / $0.04 / $0.50 / $1.80**（"2x input and 1.5x output for the full request"）；**Batch & Flex $0.10 / $0.01 / $0.125 / $0.60**（长上下文 $0.20/$0.02/$0.25/$0.90）；**Fast $0.40 / $0.04 / $0.50 / $2.40**（长上下文 $0.80/$0.08/$1.00/$3.60）。发布价是 $1/$6，2026-07-30 降价 80%。
- **Rate limits:** Build 5,000 RPM / 2M TPM；Launch 10,000 / 10M；Grow 30,000 / 180M。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> OpenAI launch blog 表格标为 "vendor"（Luna 列）；Artificial Analysis、Vals AI、ARC Prize、BenchLM 为独立来源。

Agent / tool use:

- Terminal-Bench 2.1: **84.7%**（vendor）/ **80.90%** (AA) / 79.0% (Vals, via BenchLM)；Terminal-Bench 3.0 **14.3%**（经 BenchLM 引用 frontierbench.ai）；Terminal-Bench 4.0 **11.62% ± 1.6** (Vals, #36/51) / 11.6% (AA)
- BrowseComp **83.3%**（vendor）；Toolathlon **53.4%**（vendor）；Agents' Last Exam **50.3%**（vendor）；BenchCAD **63.1%**（python tool 73.9%）；OSWorld 2.0 **45.6%**（vendor）；MCP-Atlas / Claw-Eval / τ-bench / Hermes: **no verified public score found**
- CTF **85.2%**（vendor）；SEC-Bench Pro **48.9%**（vendor）；ExploitBench **33.2%**（vendor）/ 33%（经 BenchLM）；ExploitGym **12.4%**（vendor）；CyberGym 77.9%（经 BenchLM）；APEX-Agents-AA 35.84% (AA)；AutomationBench **14.9%**（vendor）/ 50.21% (AA objective-share)

Reasoning / knowledge:

- GPQA Diamond: **92.3%**（vendor）/ **91.67%** (Vals) / **91.11%** (AA)
- FrontierMath v2: T1–3 **78.6%**，T4 **58.5%**（vendor）；HealthBench Professional **55.7%**（vendor）；HealthBench Hard 32.0%（经 BenchLM）；MMLU-Pro 86.04% (Vals) / 86.0%（经 BenchLM）；MMMU-Pro **78.4%**（vendor, no tools）/ 79.5% (with tools) / 85.03% (Vals) / 78.55% (AA)
- Artificial Analysis Intelligence Index: **37**（#13 / 173），135.2 t/s (#53/151)，**$0.18/task** (#43/66)，150M output tokens (#45/68)，TTFT 100.86s
- Omniscience index **-10.28** / accuracy **42.73%** / hallucination **92.58%** (AA)；CritPt **20.57%** (AA)；AA-LCR 83.67% (AA)
- ARC-AGI（ARC Prize 验证，五档）：ARC-1 88.0/87.7/76.5/56.5/34.2，ARC-2 59.5/47.6/29.3/7.4/5.1，ARC-3 **0.2/0.0/0.1/0.2/0.2**（"0% on Public and 0.18% on Semi-Private"）
- 无 AIME / FrontierMath-independent 公布

Coding:

- SWE-bench Pro **62.7%**（vendor）；DeepSWE v1.1 **67.2%**（vendor）；SWE-bench **93.00%**（Vals, #9/88）；LiveCodeBench: **no verified public score found**；Vibe Code Bench v1.1 **77.06%** (Vals)
- FrontierCode 1.1 Ext **55.1%**（经 BenchLM 引用 Cognition/Devin）；CursorBench 3.2 **61.1%** / 4.0 **35.9%**（经 BenchLM）；VulcanBench v3 85.5%（经 BenchLM）
- SkillsBench 60.45% (#7/35, Vals)；CyberBench v1.1 73.63% (Vals)

Long context:

- **MRCR v2 256K–512K 41.3%，512K–1M 41.3%**（vendor）；**GraphWalks BFS 256k 81.3%，1M 51.2%**（vendor）—— 长上下文在本代明显退化
- 1.05M 窗口，128K 输出

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 78/100.** Terminal-Bench 2.1 84.7% (vendor) / 80.90% (AA) / 79.0% (Vals), BrowseComp 83.3%, Toolathlon 53.4%, Agents' Last Exam 50.3%, BenchCAD 63.1%, OSWorld 2.0 45.6%, CTF 85.2%, ExploitBench 33.2%, APEX-Agents 35.84%, AutomationBench 14.9% (vendor) / 50.21% (AA), ExploitGym 12.4%. Capped by Terminal-Bench 4.0 at 11.6–11.62% and Terminal-Bench 3.0 at 14.3%, by the 14.9% AutomationBench figure, and by the absence of MCP-Atlas, Claw-Eval, τ-bench and Hermes rows.
- **Reasoning: 84/100.** GPQA Diamond 91.11–92.3%, FrontierMath v2 **78.6% (T1–3) / 58.5% (T4)**, ARC-AGI-1 **88.0%** / ARC-AGI-2 59.5% / ARC-AGI-3 **0.2%**, HealthBench Professional 55.7%, MMLU-Pro 86.04%, MMMU-Pro 78.4–85.03%, AA-LCR 83.67%, CritPt 20.57%. Capped by the AA Intelligence Index of **37** (under the 60+ anchor), by ARC-AGI-2 at 59.5% and ARC-AGI-3 at ~0%, and by the **92.58% hallucination rate** at 42.73% accuracy.
- **Context window: 92/100.** 1,050,000 tokens (922K max input, 128K max output) — the rubric's top tier (≥1M = 95–100). One point below because the vendor's own long-context numbers show real decay — **MRCR 41.3% at 256K–512K and at 512K–1M, GraphWalks BFS 81.3% → 51.2%** — so a 1M window is not a 1M working window.
- **Multimodal: 72/100.** Text + image in, text out, with MMMU-Pro 78.4–85.03%, BenchCAD 63.1% (78% with a python tool), GDP.pdf 22.7%, and the 83.3% BrowseComp. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 79/100.** SWE-bench **93.00%** (Vals, #9/88) — the best SWE-bench Verified reading of any Luna-tier model in this dataset — SWE-bench Pro 62.7%, DeepSWE 67.2%, Terminal-Bench 2.1 84.7%, Vibe Code Bench 77.06%, FrontierCode Ext 55.1%, CursorBench 3.2 61.1% / 4.0 35.9%. Capped by Terminal-Bench 4.0 at ~11.6% and 3.0 at 14.3%, by DeepSWE under the 74% anchor, and by the absence of any LiveCodeBench figure.
- **Cost efficiency: 95/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.6-luna` — is billed at **$0.20 in / $1.20 out** per 1M with a **$0.02 cached read** (90% discount), rising to $0.40/$1.80 past 272K, with **Batch/Flex at $0.10/$0.60** and Fast at $0.40/$2.40. The rubric's anchors (~$0.60/$2.20 ≈ 92, ~$0.15/$0.20 ≈ 97) put $0.20/$1.20 near the top of the scale, and Artificial Analysis measures **$0.18 per Index task** — among the cheapest in the whole catalogue. Deductions: the >272K doubling and the fact that 150M output tokens on the index still make long agentic runs expensive in absolute terms.
- **Overall Score: 81.0/100.** (78 + 84 + 92 + 72 + 79) / 5 = 81.0 — best-fit: the **cheapest credible frontier-adjacent model** — SWE-bench 93.0%, GPQA 92.3%, FrontierMath T1–3 78.6%, Terminal-Bench 2.1 84.7% at $0.20/$1.20 with a 0.02 cache read and 135 t/s — ideal for high-volume classification, extraction and light agentic work, while Terminal-Bench 4.0 at ~11.6% and a 92.6% hallucination rate rule it out for hard autonomous agentic or factual work.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Price — $1/$6 at launch (July 9) vs $0.20/$1.20 after the July 30 cut (80% off).** ARC Prize's page still shows "$1 input / $6 output per 1M tokens" — the current price is used and the change is recorded.
2. **AA index — 37 (v4.3.2, current) vs 51.2 (OpenAI's launch figure on index v4.1).** Re-baselining; the current 37 is scored.
3. **Terminal-Bench across four versions: 84.7% (2.1, OpenAI) / 79.0% (2.1, Vals) / 14.3% (3.0) / 11.62% (4.0, Vals) / 11.6% (4.0, AA).** The version spread is the single most important caveat for this model: its "84.7% agentic coding" and its "11.6% agentic coding" are the same model on different benchmark generations.
4. **GPQA — 92.3 (OpenAI) / 91.67 (Vals) / 91.11 (AA).** Small spread.
5. **MMMU-Pro — 78.4% no tools / 79.5% with tools (OpenAI) vs 85.03% (Vals) vs 78.55% (AA).**
6. **OpenAI's own prose contradicts its table** on Agents' Last Exam: the blog says Sol "scores 2.2 percentage points above Opus 5.5" / "a new high of 53.6" while the table gives 52.7 for Sol and 50.3 for Luna.
7. **HealthBench: only Professional and Hard are published** — there is no original HealthBench figure for Luna, and the raw/length-adjusted split (47.1 vs 53.2 for Sol) shows how much the adjustment matters.
8. **No AIME figure exists for Luna**, and no independent DeepSWE confirmation — both coding anchors rest on the vendor table.

### Notes on identity

- `gpt-5.6-luna` is the **budget tier of the GPT-5.6 trio** (Sol = flagship, Terra = balanced, Luna = cheapest). OpenAI's framing: "The number identifies the generation, while **Sol, Terra, and Luna are durable capability tiers**" — so the tiers are stable product lines across generations, not one-off SKUs, and each generation's tier can advance on its own cadence.
- Luna's own positioning: "It roughly corresponds to the **nano** model tier used in earlier GPT-5 families" — the successor of `gpt-5-nano`-class capability, and correspondingly "GPT‑5.6 Luna, our fastest and most affordable model, will cost 80% less".
- It is now **deprecated**: Artificial Analysis flags it and points to **GPT-6 Luna** (September 2026, AA index 38 at $0.10/$0.50, BenchLM 66.56 / #32) — a successor that is *both* cheaper and higher-indexed than the model it replaces, while still sitting below GPT-5.6 Sol (75.31) and Terra (70.19).
- `gpt-5.6-luna-pro` exists on OpenRouter as a separate route of the same model.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page and the GPT-5.6 launch blog (Sol / Terra / Luna columns and the price-performance post); independent trackers Artificial Analysis (model page, per-evaluation payload), Vals AI, ARC Prize (verified, five effort configurations), the BenchLM evidence ledger, OpenRouter's API, and OpenCode Zen. Vendor-vs-independent conflicts — the launch-vs-current price, the index re-baselining, the four Terminal-Bench versions and the prose/table mismatch — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Luna.md`, using the same headings.
