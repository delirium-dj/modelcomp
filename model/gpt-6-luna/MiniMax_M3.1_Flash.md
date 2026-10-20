# GPT-6 Luna — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-6-luna`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI GPT-6 家族的**最低成本档**（2026-09-22 发布）—— "GPT‑6 Luna is the fast, cost-efficient model in OpenAI's GPT‑6 series, positioned below GPT‑6 Sol"，价格 **$0.10 in / $0.50 out**（缓存 $0.01），比前代 GPT-5.6 Luna **便宜一半**（$0.20/$1.20 → $0.10/$0.50）。它是本数据集中"每百万 token 最便宜的前沿级模型"之一，同时 AA 智能指数 **38**（#10/173）。
- **Provider / access:** OpenAI API `gpt-6-luna`（唯一快照 `gpt-6-luna`）—— Chat Completions / Responses / Batch；OpenRouter `openai/gpt-6-luna`（canonical `gpt-6-luna-20260922`，另有 `gpt-6-luna-pro`）；OpenCode Zen `opencode/gpt-6-luna`。
- **Release / knowledge:** released **2026-09-22**（AA "GPT-6 Luna (Max) was released on September 22, 2026"；ARC Prize "OpenAI·Sep 22, 2026"；OpenRouter created 2026-09-22T09:54Z）。Knowledge cutoff **2026-05-18**。
- **IDs:** `gpt-6-luna`（OpenAI API）、`openai/gpt-6-luna` / `openai/gpt-6-luna-pro`（OpenRouter）、`opencode/gpt-6-luna`（Zen）。
- **Context window:** **1,050,000**（max input **922,000**，max output **128,000**）。
- **Modalities:** 输入 文本+图像 → 输出 文本（OpenRouter 另加 file）。
- **Reasoning controls:** "supports `none`, `low`, `medium` (default), `high`, `xhigh`, and `max`"。
- **Tools (Responses API):** web_search, file_search, image_generation, code_interpreter, hosted_shell, apply_patch, skills, computer_use, mcp, tool_search。
- **Pricing (as of 2026-10-19, per 1M tokens):** 输入 **$0.10**、缓存输入 **$0.01**、cache write **$0.125**、输出 **$0.50**；>272K **$0.20 / $0.04 / $0.25 / $0.90**（"2x input and 1.5x output for the full request"）；**Batch & Flex 50%**；**Fast 2×**；区域路由 +10%。
- **Rate limits:** Build 5,000 RPM / 2M TPM / 20M batch 队列；Launch 10,000 / 10M / 1B；Grow 30,000 / 180M / 15B。
- **Architecture:** proprietary，闭源；参数量未披露。

### Raw benchmarks found

> OpenAI launch blog 标为 "vendor"；Artificial Analysis、Vals AI、ARC Prize、BenchLM 为独立来源。

Agent / tool use:

- Terminal-Bench 2.1: **84.7%**（vendor）/ **80.90%** (AA) / 79.0%（Vals, via BenchLM）
- Terminal-Bench 4.0: **12.63%** (AA) / **16.4%**（Anthropic 表格）/ **9.60% ± 1.6** (Vals, #36/51)
- Terminal-Bench 3.0: 14.3%（经 BenchLM 引用 frontierbench.ai）
- BrowseComp **83.3%**（vendor）；Toolathlon **53.4%**（vendor）；Agents' Last Exam **50.3%**（vendor）；BenchCAD **63.1%**（python tool 73.9%，vendor）；OSWorld 2.0 offline **48.9%**（Anthropic 表格）/ 45.6%（OpenAI 表格）
- CTF **85.2%**（vendor）；SEC-Bench Pro **48.9%**（vendor）；ExploitBench **33.2%**（vendor）/ 33%（经 BenchLM）；ExploitGym **12.4%**（vendor）；CyberGym 77.9%（经 BenchLM）
- APEX-Agents-AA **35.84%** (AA)；AutomationBench **53.17%** (AA objective-share) / 14.9%（vendor）；GDPval-AA **1431.86 Elo** (AA) / 1437（Anthropic 表格）；AA-Briefcase 1335 (AA) / 1336（Anthropic 表格）
- Hermes 33.9% / 70.5%（经 BenchLM）

Reasoning / knowledge:

- GPQA Diamond: **91.11%** (AA) / 91.67% (Vals) / 92.3%（vendor）
- FrontierMath v2: T1–3 **78.947%**、T4 **56.098%**（Epoch AI, via BenchLM）/ 78.6% / 58.5%（vendor）
- HLE **38.51%** (AA) / 64.5% 带工具（Anthropic 表格）；CritPt **19.43%** (AA)；AA-LCR 83.33% (AA)
- HealthBench Pro **60.8**（length-adjusted, raw 61.2）、HealthBench 54.5 (raw 50.0)、Hard 31.4、Consensus 95.9（OpenAI system card 附录）
- ARC-AGI（ARC Prize 验证，五档）：v1 **86.7%**（max）、v2 **59.3%**（max）、v3 **0.2%**（standard, medium）/ **0.6%**（Provider Adapter, max）
- Artificial Analysis Intelligence Index: **38**（#10/173），124.2 t/s (#66/151)，**$0.07/task** (#28/66)，140M output tokens (#43/68)，90% cache 折扣，TTFT 89.50s
- Omniscience index **0.65** / accuracy **43.78%** / hallucination **76.73%** (AA)；MLCR-AA 16.11%；Harvey LAB 3.33%

Coding:

- DeepSWE v1.1 **66.6%**（vendor, max）；SWE-bench **93.00%** (Vals, #9/88)；Vibe Code Bench v1.1 **77.06%** (Vals)；FrontierCode 1.1 Main **41.93%** (AA)；ProgramBench **0.50%** (Vals)；TB-Science 0.00% (Vals)
- 无 SWE-bench Pro、LiveCodeBench、CursorBench、DeepSWE 独立值

Long context:

- **MRCR v2 256K–512K 41.3%，512K–1M 41.3%**（vendor）；**GraphWalks BFS 256k 81.3%，1M 51.2%**（vendor）
- 1.05M 窗口，128K 输出

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 80/100.** Terminal-Bench 2.1 84.7% (vendor) / 80.90% (AA) / 79.0% (Vals), BrowseComp 83.3%, Toolathlon 53.4%, BenchCAD 63.1%, Agents' Last Exam 50.3%, CTF 85.2%, APEX-Agents 35.84%, AutomationBench 53.17%, ExploitBench 33.2%, GDPval-AA 1431.86. Capped by Terminal-Bench 4.0 at 9.60–16.4% and 3.0 at 14.3%, by ExploitGym 12.4% and ExploitBench 33.2%, and by the absence of any BrowseComp-independent, MCP-Atlas or Claw-Eval row.
- **Reasoning: 85/100.** FrontierMath v2 **78.947% (T1–3) / 56.098% (T4)** on Epoch AI, GPQA Diamond 91.11–92.3%, ARC-AGI-1 **86.7%** / ARC-AGI-2 59.3% (max), HealthBench Professional 60.8, CritPt 19.43%, AA-LCR 83.33%. Capped by the AA Intelligence Index of **38** (under the rubric's 60+ anchor), by ARC-AGI-2 at 59.3% and ARC-AGI-3 at ~0.2%, and by the **76.73% hallucination rate** at 43.78% accuracy.
- **Context window: 93/100.** 1,050,000 tokens with a 922,000 max input and a 128,000 max output — the rubric's top tier on size, with a published Graphwalks BFS retention of 81.3% at 256k. One point below because the vendor's own long-context numbers show real decay — **MRCR 41.3% at both 256K–512K and 512K–1M, Graphwalks 81.3% → 51.2%** — so a 1M window is not a 1M working window.
- **Multimodal: 74/100.** Text + image in, text out, with MMMU-Pro **79.65%** (AA), BenchCAD 63.1% (78% with a python tool), GDP.pdf 22.8%, and Design Arena-class web tasks. The rubric's "+image in = 60–70" band is met at its top; no video or audio input is documented.
- **Coding: 80/100.** SWE-bench **93.00%** (Vals, #9/88), DeepSWE 66.6%, Vibe Code Bench 77.06%, Terminal-Bench 2.1 84.7%, FrontierCode 41.93%, ProgramBench 0.50%, Terminal-Bench 4.0 9.60–16.4%. Capped by Terminal-Bench 4.0 at ~10–16% (vs the leader's 70.6%), by DeepSWE under the 74% anchor, by ProgramBench 0.50%, and by the absence of any LiveCodeBench or SWE-bench Pro figure.
- **Cost efficiency: 96/100.** The evaluated route is **$0.10 in / $0.01 cached / $0.50 out** per 1M — above the rubric's "~$0.15/$0.20 ≈ 97" tier on the cached-input side and **half the price of GPT-5.6 Luna**, with Batch/Flex at 50% and Fast at 2×. Artificial Analysis measures **$0.07 per Index task** (#28 of 66) and GPT-6 Luna is the cheapest model in the catalogue. The only deduction is the 2× >272K tier.
- **Overall Score: 82.4/100.** (80 + 85 + 93 + 74 + 80) / 5 = 82.4 — best-fit: the **GPT-6 家族的性价比档** —— SWE-bench 93.0%、FrontierMath T1–3 78.9%、Terminal-Bench 2.1 84.7%、1M 上下文，**每任务 $0.07**；适合大批量分类/抽取/轻量 agent，而 Terminal-Bench 4.0 约 10–16% 与 76.7% 幻觉率说明它不适合硬自主代理与事实性任务。

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 12.63% (AA) vs 16.4% (Anthropic's table) vs 9.60% (Vals).** AA is the anchor.
2. **GDPval-AA — 1431.86 (AA) vs 1437 (Anthropic's table); AA-Briefcase — 1335 vs 1336.** Rounding.
3. **ARC-AGI-3 — 0.1% / 0.59% (BenchLM) vs 0.2% / 0.6% (ARC Prize's own page).** Rounding.
4. **OSWorld 2.0 — 45.6% (OpenAI's table) vs 48.9% (Anthropic's table).** Different runs.
5. **BenchLM attributes Luna's HealthBench to the "GPT-6 Astra system card"** — the values actually live in the 22 Sep Sol/Luna appendix, so the attribution is a bookkeeping error; the numbers are used, the citation is not.
6. **Terminal-Bench across four generations again: 84.7% (2.1, OpenAI) / 79.0% (2.1, Vals) / 14.3% (3.0) / 9.60% (4.0, Vals).**
7. **No terminal-bench.ai, swebench.com or LMArena row could be retrieved** (leaderboards render client-side; lmarena returned 403), and the AA per-eval tables are chart-rendered — so the numbers above are the AA payload values plus vendor tables.
8. **No separate Flex/Regional/Fast price table is published** (only the "2x / 50% / +10%" statements), and no HN or Simon Willison coverage exists for this model.

### Notes on identity

- `gpt-6-luna` is the **budget tier of the GPT-6 trio** (Astra flagship, Sol mid, Luna cheap) — and a **successor to GPT-5.6 Luna**, which OpenAI lists as "$0.20 → $0.10 … $1.20 → $0.50 … 50% cheaper". GPT-6.1 Sol (2026-09-29) is an upgrade to **Sol**, not to Luna.
- `gpt-6-luna-pro` on OpenRouter is the same model on a pro serving route, not a separate checkpoint.
- The tier naming is durable: "The number identifies the generation, while Sol, Terra, and Luna are durable capability tiers" — so "Luna" will keep existing as a cheap lane across generations.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-6 Sol and Luna" launch blog and the system-card appendix, Artificial Analysis (model page with its per-evaluation payload and effort variants), ARC Prize (verified, five effort configurations), Vals AI, the BenchLM evidence ledger, OpenRouter and OpenCode Zen. Vendor-vs-independent conflicts — the Terminal-Bench version spread and the health-benchmark attribution error — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Luna.md`, using the same headings.
